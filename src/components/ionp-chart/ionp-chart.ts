export class IonpChart {
    id: string;
    title: string;
    type: 'doughnut' | 'bar';
    data: IonpChartData;
    //options: any;
    params: any;
}

export class IonpChartData {
    labels: string[] = [];
    datasets: IonpChartDataSets[] = [];
}

export class IonpChartDataSets {
    label: string;
    data: number[] = [];
    backgroundColor: string[] | string = [];    //rgba(255, 99, 132, 0.2)
    borderColor: string[] | string = [];
    hoverBackgroundColor: string[] | string = [];
    borderWidth: number = 1;
}