import { IonpList, IonpListItem } from '../../components';
import { Segment } from '../../models/segment'

export class ListPageModel {
    segments: Segment[] = [];
    segmentId: string;
    parentId: string;
    parentItem: IonpListItem;
    title: string;
    subTitle: string;
    list: IonpList = new IonpList();
    pageIndex: number = 1;
}
