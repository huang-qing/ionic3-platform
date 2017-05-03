import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IonpList } from '../components/ionp-list/ionp-list';
import { IonpListMock } from '../components/ionp-list/ionp-list.mock'



export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let ionplist: IonpList = IonpListMock;
    return { ionplist };
  }
}
