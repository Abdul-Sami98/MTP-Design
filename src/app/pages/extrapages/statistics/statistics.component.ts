import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  lineWithDataLabelsChart: any;
  incomeChart: any;
  chartOptions: any;
  stackedcolumn: any;

  constructor() { }

  ngOnInit(): void {
    /**
    * BreadCrumb
    */
    this.breadCrumbItems = [
      { label: 'Toner' },
      { label: 'Statistics', active: true }
    ];

    // Chart Color Data Get Function
    this._lineWithDataLabelsChart('["--tb-primary", "--tb-success"]');
    this._IncomeStatisticsCharts('["--tb-info", "--tb-info", "--tb-info", "--tb-info", "--tb-info", "--tb-info", "--tb-info","--tb-danger", "--tb-info"]')
    this._columncharts('["--tb-success"]');
    this._stackedcolumn('["--tb-primary", "--tb-primary-rgb, 0.80", "--tb-primary-rgb, 0.70", "--tb-primary-rgb, 0.60", "--tb-primary-rgb, 0.50"]')
  }

  // Chart Colors Set
  private getChartColorsArray(colors: any) {
    colors = JSON.parse(colors);
    return colors.map(function (value: any) {
      var newValue = value.replace(" ", "");
      if (newValue.indexOf(",") === -1) {
        var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
        if (color) {
          color = color.replace(" ", "");
          return color;
        }
        else return newValue;;
      } else {
        var val = value.split(',');
        if (val.length == 2) {
          var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
          rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
          return rgbaColor;
        } else {
          return newValue;
        }
      }
    });
  }

  /**
 * sales /purchase
 */
  private _lineWithDataLabelsChart(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.lineWithDataLabelsChart = {
      chart: {
        height: 380,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: colors,
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: [3, 3],
        curve: 'straight'
    },
    series: [{
        name: "Sales",
        data: [15, 24, 32, 36, 33, 31, 33]
    },
    {
        name: "Purchase",
        data: [18, 30, 19, 25, 17, 22, 18]
    }
    ],
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f1f1f1'
    },
    markers: {
        style: 'inverted',
        size: 6
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    },
    responsive: [{
        breakpoint: 600,
        options: {
            chart: {
                toolbar: {
                    show: false
                }
            },
            legend: {
                show: false
            },
        }
    }]
    };
  }


  // income statics
  private _columncharts(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.chartOptions = {
      chart: {
        height: 380,
        type: 'bar',
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      series: [{
        name: 'Net Profit',
        data: [296, 285, 365, 410, 321, 357, 436, 397, 510]
      }],
      colors: colors,
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (Thousands)'
        }
      },
      grid: {
        borderColor: '#f1f1f1',
      },
      fill: {
        opacity: 1

      },
      tooltip: {
        y: {
          formatter: function (val: any) {
            return "$ " + val + " thousands"
          }
        }
      }
    }
  }
  //orderd by country
  private _IncomeStatisticsCharts(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.incomeChart = {
      series: [{
        data: [1245, 1640, 490, 1255, 1050, 689, 800, 1879, 1014],
        name: 'Orders',
      }],
      chart: {
        type: 'bar',
        height: 400,
        toolbar: {
          show: false,
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          horizontal: true,
          distributed: true,
          dataLabels: {
            position: 'top',
          },
        }
      },
      colors: colors,
      dataLabels: {
        enabled: true,
        offsetX: 32,
        style: {
          fontSize: '12px',
          fontWeight: 500,
          colors: ['#adb5bd']
        }
      },
      legend: {
        show: false,
      },
      grid: {
        show: false,
      },
      xaxis: {
        categories: ['India', 'US', 'China', 'Indonesia', 'Russia', 'Canada', 'Brazil', 'USA', 'UK'],
      },
    }
  }


  // top selling product
  private _stackedcolumn(colors: any) {
    colors = this.getChartColorsArray(colors);
    this.stackedcolumn = {
      series: [{
        name: 'Phone',
        data: [44, 55, 41, 67, 22, 43, 24, 41, 25, 10, 32]
      }, {
        name: 'Clothes',
        data: [13, 23, 20, 8, 13, 27, 19, 20, 14, 36, 18]
      }, {
        name: 'Smartwatch',
        data: [11, 17, 15, 15, 21, 14, 8, 11, 12, 17, 20]
      }, {
        name: 'Footwear',
        data: [21, 7, 25, 13, 22, 8, 32, 16, 30, 22, 13]
      }, {
        name: 'Other',
        data: [47, 15, 10, 9, 18, 10, 41, 31, 45, 20, 64]
      }],
      yaxis: {
        title: {
          text: 'Products Order'
        }
      },
      legend: {
        show: false,
      },
      chart: {
        type: 'bar',
        height: 400,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        },
      },
      responsive: [{
        breakpoint: 480,
      }],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      fill: {
        opacity: 1
      },
      colors: colors,
    }
  }
}



