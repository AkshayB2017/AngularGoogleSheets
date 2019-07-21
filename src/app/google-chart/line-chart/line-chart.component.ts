import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  private gLib: any;

  constructor(private gChartService : GoogleChartService) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }

  ngOnInit() {

  }

  private drawChart(){
    let data = this.gLib.visualization.arrayToDataTable([
      ['Year', 'Selling Fees(in millions)', 'Buying Fees(in millions)'],
      ['2015',  2,      26],
      ['2016',  10,       113],
      ['2017',  156,      152],
      ['2018',  8,      80]

      
      
    ]);
    let options = {'title':'Sales & Expenses',
                    'width': '100%',
                    'height': '100%'};

    let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));

    chart.draw(data, options);
  }

}
