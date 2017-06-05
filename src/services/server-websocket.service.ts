/**
 * https://www.npmjs.com/package/angular2-websocket-service
 * https://github.com/ohjames/rxjs-websockets
 * 
 * http://www.websocket.org/echo.html
 */
import { Injectable } from '@angular/core'
//import { QueueingSubject } from 'queueing-subject'
import { Observable } from 'rxjs/Observable'
//import { WebSocketService } from 'angular2-websocket-service'
import { QueueingSubject, WebSocketService } from './ngx-websocket-service'

@Injectable()
export class IonicWebSocketService {
  private inputStream: QueueingSubject<any>
  public outputStream: Observable<any>

  constructor(private socketFactory: WebSocketService) { }

  public connect() {
    if (this.outputStream) {
      return this.outputStream;
    }

    var url = 'ws://echo.websocket.org?useid=xxx';
    // Using share() causes a single websocket to be created when the first 
    // observer subscribes. This socket is shared with subsequent observers 
    // and closed when the observer count falls to zero. 
    this.inputStream = new QueueingSubject<any>();

    return this.outputStream = this.socketFactory.connect(
      url,
      this.inputStream
    ).share();
  }

  public send(message: any): void {
    // If the websocket is not connected then the QueueingSubject will ensure 
    // that messages are queued and delivered when the websocket reconnects. 
    // A regular Subject can be used to discard messages sent when the websocket 
    // is disconnected. 
    this.inputStream.next(message)
  }

}