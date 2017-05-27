import { Api } from './api';
import { Settings } from './settings';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { WebSocketService } from 'angular2-websocket-service';
import { IonicWebSocketService } from '../services/server-websocket.service';
import { RouterConfig } from './router'

export {
    Api,
    Settings,
    RouterConfig,
    InMemoryDataService,
    WebSocketService,
    IonicWebSocketService
}