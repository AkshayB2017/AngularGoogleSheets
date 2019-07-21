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
      ['Year', 'Selling Fees', 'Buying Fees'],
      ['2016',  2,      26],
      ['2017',  10,       113],
      ['2018',  156,      152],
      ['2019',  8,      80]

      
      
    ]);
    let options = {'title':'Sales & Expenses',
                    'width': '100%',
                    'height': '100%'};

    let chart = new this.gLib.visualization.LineChart(document.getElementById('divLineChart'));

    chart.draw(data, options);
  }

}
