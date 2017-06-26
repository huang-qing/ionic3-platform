/**
 * 
 * https://www.joshmorony.com/adding-responsive-charts-graphs-to-ionic-2-applications/
 * http://www.chartjs.org/samples/latest/
 * http://www.chartjs.org/docs/latest/general/responsive.html
 * 
 * npm install chart.js --save
 * 
 * TypeError: Cannot read property 'nativeElement' of undefined
 * https://stackoverflow.com/questions/39158922/viewchild-not-working-cannot-read-property-nativeelement-of-undefined
 * 
 * https://angular.io/api/core/AfterViewInit
 */
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { EventEmitter, Input, Output } from "@angular/core";
import { IonpChart } from './ionp-chart';
import { Logger } from "angular2-logger/core";
import { Chart } from 'chart.js';


@Component({
  selector: 'ionp-chart',
  templateUrl: "ionp-chart.html",
  providers: []
})

export class IonpChartComponent implements AfterViewInit {

  @Input('chart')
  chart: IonpChart;
  @Output() onTitleSelected = new EventEmitter<IonpChart>();
  @ViewChild('canvas') canvas;

  chartCanvas: any;
  _chart: any;

  constructor(private logger: Logger) { }

  ngAfterViewInit() {
    this.ionViewDidLoad();
  }

  ionViewDidLoad() {
    this._chart = this.chart;
    //bar options
    if (this._chart.type === 'bar') {
      this._chart.options = {
        legend: {
          display: true,
          labels: {
            //fontColor: 'rgb(255, 99, 132)'
          },
          usePointStyle: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    };
    
    this.chartCanvas = new Chart(this.canvas.nativeElement, this._chart);
  }

  TitleClick() {
    this.onTitleSelected.emit(this._chart);
    this.logger.log('emit chart.component title click');
  }
}