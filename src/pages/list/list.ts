import { IonpList, IonpListItem } from '../../components';

export class ListPageModel {
    parentId: string;
    parentItem: IonpListItem;
    title: string;
    list: IonpList;
    pagerIndex: number = 1;
}
