import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer, circle, polygon, marker, icon, Layer } from 'leaflet';

import { PrimeNGConfig } from 'primeng/api';
// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
// import { productdata } from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  revenueChart: any;
  customerChart: any;
  radialbarChart: any;
  date3!: Date;
  products: any;
  filters!: any[];
  datePipe: any;


}
