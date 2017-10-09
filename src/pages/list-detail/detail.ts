import { IonpListIcon } from '../../components/ionp-list/ionp-list';

export class DetailPageModel {
    id: string;
    title: string;
    icon: IonpListIcon;
    info: DetailInfo[] = [];
}


export class DetailInfo {
    name: string;
    text: string;
    //base64
    type: 'image' | 'text' | 'base64' = 'text';
}
