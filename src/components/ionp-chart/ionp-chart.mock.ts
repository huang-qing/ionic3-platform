import { IonpChart, IonpChartData, IonpChartDataSets } from './ionp-chart';

var chartsMock = [];

var dataset: IonpChartDataSets = new IonpChartDataSets();
dataset.label = 'color';
dataset.data = [12, 19, 3, 5, 2, 3];
dataset.backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
dataset.hoverBackgroundColor = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#FF6384",
    "#36A2EB",
    "#FFCE56"
];

// doughnut
var doughnut: IonpChart = new IonpChart();
doughnut.type = 'doughnut';
doughnut.title = 'doughnut';
doughnut.data = new IonpChartData();
doughnut.data.labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
doughnut.data.datasets.push(dataset);
chartsMock.push(doughnut);

// bar
var bar: IonpChart = new IonpChart();
bar.type = 'bar';
bar.title = 'bar';
bar.data = new IonpChartData();
bar.data.labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

var barDataset: IonpChartDataSets = new IonpChartDataSets();
barDataset.label = 'color';
barDataset.data = [12, 19, 3, 5, 2, 3];
barDataset.backgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
barDataset.hoverBackgroundColor = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#FF6384",
    "#36A2EB",
    "#FFCE56"
];
bar.data.datasets.push(barDataset);
chartsMock.push(bar);

//group bar
var groupbar: IonpChart = new IonpChart();
groupbar.type = 'bar';
groupbar.title = 'bar';
groupbar.data = new IonpChartData();
groupbar.data.labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
//dataset1
var barDataset1: IonpChartDataSets = new IonpChartDataSets();
barDataset1.label = 'dataset1';
barDataset1.data = [12, 19, 3, 5, 2, 3, 1, 3, 5, 7, 8, 13];
barDataset1.backgroundColor = 'rgba(255, 99, 132, 0.2)';
barDataset1.hoverBackgroundColor = "#FF6384";
groupbar.data.datasets.push(barDataset1);
//dataset2
var barDataset2: IonpChartDataSets = new IonpChartDataSets();
barDataset2.label = 'dataset2';
barDataset2.data = [3, 4, 7, 9, 12, 4, 12, 19, 3, 5, 2, 3];
barDataset2.backgroundColor = 'rgba(54, 162, 235, 0.2)';
barDataset2.hoverBackgroundColor = "#36A2EB";
groupbar.data.datasets.push(barDataset2);

chartsMock.push(groupbar);

export {
    chartsMock
}