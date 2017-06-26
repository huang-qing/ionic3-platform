import { InMemoryDbService } from 'angular-in-memory-web-api';
//list
import { IonpListGroup, IonpListItem } from '../components/ionp-list/ionp-list';
import { ionpListGroupsMock } from '../components/ionp-list/ionp-list.mock';
//chart
import { IonpChart } from '../components/ionp-chart/ionp-chart'
import { chartsMock } from '../components/ionp-chart/ionp-chart.mock';


/**
 * https://www.npmjs.com/package/angular2-in-memory-web-api
 * 
 * @example
 * GET /zoos：列出所有动物园
 * POST /zoos：新建一个动物园
 * GET /zoos/ID：获取某个指定动物园的信息
 * PUT /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）
 * PATCH /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）
 * DELETE /zoos/ID：删除某个动物园
 * GET /zoos/ID/animals：列出某个指定动物园的所有动物
 * DELETE /zoos/ID/animals/ID：删除某个指定动物园的指定动物
 */
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    var lists: IonpListGroup[] = ionpListGroupsMock;
    var items: IonpListItem[] = [];
    lists.forEach(g => g.items.forEach(i => items.push(i)));

    var charts: IonpChart[] = chartsMock;
    return {
      lists,
      items,
      charts
    };
  }
}
