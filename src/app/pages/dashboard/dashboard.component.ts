import { Component, OnInit } from '@angular/core';
import { MATERIAL_MODULES } from '../../shared/material/material';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import confetti from 'canvas-confetti';
import { ConfettiService } from '../../core/services/confetti.service';

@Component({
  selector: 'app-dashboard',
  imports: [MATERIAL_MODULES, CanvasJSAngularChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  title = 'angular17ssrapp';
	chart: any;

  constructor(private conffeti: ConfettiService){}

  ngOnInit() {
   this.conffeti.launchRainfall();
  }

	multiSeriesChart = {
	  animationEnabled: true,
    exportEnabled: true,
	  theme: "light2",
	  title:{
		text: "Actual vs Projected Sales"
	  },
	  axisX:{
		valueFormatString: "D MMM"
	  },
	  axisY: {
		title: "Number of Sales"
	  },
	  toolTip: {
		shared: true
	  },
	  legend: {
		cursor: "pointer",
		itemclick: function (e: any) {
			if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
				e.dataSeries.visible = false;
			} else {
				e.dataSeries.visible = true;
			}
			e.chart.render();
		}
	  },
	  data: [{
		type: "line",
		showInLegend: true,
		name: "Projected Sales",
		xValueFormatString: "MMM DD, YYYY",
		dataPoints: [
			{ x: new Date(2021, 8, 1), y: 63 },
			{ x: new Date(2021, 8, 2), y: 69 },
			{ x: new Date(2021, 8, 3), y: 65 },
			{ x: new Date(2021, 8, 4), y: 70 },
			{ x: new Date(2021, 8, 5), y: 71 },
			{ x: new Date(2021, 8, 6), y: 65 },
			{ x: new Date(2021, 8, 7), y: 73 },
			{ x: new Date(2021, 8, 8), y: 86 },
			{ x: new Date(2021, 8, 9), y: 74 },
			{ x: new Date(2021, 8, 10), y: 75 },
			{ x: new Date(2021, 8, 11), y: 76 },
			{ x: new Date(2021, 8, 12), y: 84 },
			{ x: new Date(2021, 8, 13), y: 87 },
			{ x: new Date(2021, 8, 14), y: 76 },
			{ x: new Date(2021, 8, 15), y: 79 }
		]
	  }, {
		type: "line",
		showInLegend: true,
		name: "Actual Sales",
		dataPoints: [
			{ x: new Date(2021, 8, 1), y: 60 },
			{ x: new Date(2021, 8, 2), y: 57 },
			{ x: new Date(2021, 8, 3), y: 51 },
			{ x: new Date(2021, 8, 4), y: 56 },
			{ x: new Date(2021, 8, 5), y: 54 },
			{ x: new Date(2021, 8, 6), y: 55 },
			{ x: new Date(2021, 8, 7), y: 54 },
			{ x: new Date(2021, 8, 8), y: 69 },
			{ x: new Date(2021, 8, 9), y: 65 },
			{ x: new Date(2021, 8, 10), y: 66 },
			{ x: new Date(2021, 8, 11), y: 63 },
			{ x: new Date(2021, 8, 12), y: 67 },
			{ x: new Date(2021, 8, 13), y: 66 },
			{ x: new Date(2021, 8, 14), y: 56 },
			{ x: new Date(2021, 8, 15), y: 64 }
		]
	  }]
	}

  chartOptions = {
	  title: {
		  text: "Monthly Sales Data"
	  },
	  theme: "light2",
	  animationEnabled: true,
	  exportEnabled: true,
	  axisY: {
		includeZero: true,
		valueFormatString: "$#,##0k"
	  },
	  data: [{
		type: "column", //change type to bar, line, area, pie, etc
		yValueFormatString: "$#,##0k",
		color: "#01b8aa",
		dataPoints: [
			{ label: "Jan", y: 172 },
			{ label: "Feb", y: 189 },
			{ label: "Mar", y: 201 },
			{ label: "Apr", y: 240 },
			{ label: "May", y: 166 },
			{ label: "Jun", y: 196 },
			{ label: "Jul", y: 218 },
			{ label: "Aug", y: 167 },
			{ label: "Sep", y: 175 },
			{ label: "Oct", y: 152 },
			{ label: "Nov", y: 156 },
			{ label: "Dec", y: 164 }
		]
	  }]
	}
}
