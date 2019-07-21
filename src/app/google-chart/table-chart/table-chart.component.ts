import { Component, OnInit } from '@angular/core';
import { GoogleChartService } from '../service/google-chart.service';

@Component({
  selector: 'app-table-chart',
  templateUrl: './table-chart.component.html',
  styleUrls: ['./table-chart.component.css']
})
export class TableChartComponent implements OnInit {

  private gLib: any;

  constructor(private gChartService : GoogleChartService) { 
    this.gLib = this.gChartService.getGoogle();
    this.gLib.charts.load('current', {'packages':['corechart','table']});
    this.gLib.charts.setOnLoadCallback(this.drawChart.bind(this));
  }
  ngOnInit() {

  }

  private drawChart(){
    let chart = new this.gLib.visualization.Table(document.getElementById('divTableChart'));
    let data = new this.gLib.visualization.DataTable();

    data.addColumn('string', 'Year');
    data.addColumn('number', 'Position');
    data.addColumn('number', 'Points');

    data.addRows([
      ['2016', 2, 71],
      ['2017', 5, 75],
      ['2018', 6, 63],
      ['2019', 5, 70]
    ]);

    let options = {'title':'Sales Tabular Data',
                       'width': '100%',
                       'height': '100%'};
    chart.draw(data, options);
  }

}
