import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IonpList, IonpListItem } from '../components/ionp-list/ionp-list';
import { IonpListMock } from '../components/ionp-list/ionp-list.mock'


/**
 * https://www.npmjs.com/package/angular2-in-memory-web-api
 */
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    //ionplists
    var ionplists: IonpList = IonpListMock;
    var ionpitems: IonpListItem[] = [];
    ionplists.groups.forEach(g => g.items.forEach(i => ionpitems.push(i)));

    return { ionplists, ionpitems };
  }
}
