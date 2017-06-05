import { Observable } from 'rxjs/Observable'
//import { Subscription as rxjsSubscription } from 'rxjs/Subscription'
//import { QueueingSubject } from 'queueing-subject'

import { Subject } from 'rxjs/Subject'
import { Subscriber } from 'rxjs/Subscriber'
import { Subscription } from 'rxjs/Subscription'

export class QueueingSubject<T> extends Subject<T> {
  private _queuedValues: T[] = []

  next(value:T):void {
    if (this.closed || this.observers.length)
      super.next(value)
    else
      this._queuedValues.push(value)
  }

  _subscribe(subscriber: Subscriber<T>): Subscription {
    const ret = super._subscribe(subscriber)
    if (this._queuedValues.length) {
        this._queuedValues.forEach(value => super.next(value))
        this._queuedValues.splice(0)
    }
    return ret
  }
}

export class WebSocketService {
  connect(url: string, input: QueueingSubject<any>): Observable<any> {
    return new Observable<any>(observer => {
      const socket = new WebSocket(url);
      var inputSubscription: Subscription;

      socket.onopen = () => {
        inputSubscription = input.subscribe(data => {
          socket.send(JSON.stringify(data))
        });
      }

      socket.onmessage = message => {
        observer.next(JSON.parse(message.data))
      }

      socket.onerror = error => {
        observer.error(error)
      }

      socket.onclose = () => {
        observer.complete()
      }

      return () => {
        if (inputSubscription)
          inputSubscription.unsubscribe()

        if (socket)
          socket.close()
      }
    })
  }
}
