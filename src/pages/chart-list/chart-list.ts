import { IonpChart } from '../../components';

export class ChartListPageModel {
    title: string;
    charts: IonpChart[] = [];
    pageIndex: number = 1;
}
