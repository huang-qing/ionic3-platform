import { IonpList, IonpListItem } from '../../components';

export class ListPageModel {
    parentId: string;
    parentItem: IonpListItem;
    title: string;
    subTitle:string;
    list: IonpList = new IonpList();
    pageIndex: number = 1;
}
