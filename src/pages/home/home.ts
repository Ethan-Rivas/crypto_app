import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Chart } from 'chart.js';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    @ViewChild('lineCanvas') lineCanvas;

    username = '';
    email = '';
    lineChart: any;
    data = [];
    dataSet = [];

    constructor(public navCtrl: NavController, private auth: AuthServiceProvider) {
      let info = this.auth.getUserInfo();
      this.username = info['name'];
      this.email = info['email'];
      this.data = [21000.10, 22500.53, 22350.26, 23600.95, 23420, 23340.54, 25430.34, 25150.65];
      this.dataSet = [{"initial_balance": 0,
           							"date": "Sun Dec 10",
           							"amount": 21000.10,
                        "current_balance": 21000.10},
                        {"initial_balance": 21000.10,
           							"date": "Sun Dec 10",
           							"amount": 1500.43,
                        "current_balance": 22500.53},
                        {"initial_balance": 22500.53,
           							"date": "Mon Dec 11",
           							"amount": -150.27,
                        "current_balance": 22350.26},
                        {"initial_balance": 22350.26,
           							"date": "Tu Dec 12",
           							"amount": 1250.69,
                        "current_balance": 23600.95},
                        {"initial_balance": 23600.95,
           							"date": "We Dec 13",
           							"amount": -180.61,
                        "current_balance": 23420.34},
                        {"initial_balance": 23420.34,
           							"date": "Th Dec 14",
           							"amount": -79.80,
                        "current_balance": 23340.54},
                        {"initial_balance": 23340.54,
           							"date": "Fr Dec 15",
           							"amount": 2080.80,
                        "current_balance": 25430.34},
                        {"initial_balance": 25430.34,
           							"date": "Mon Dec 18",
           							"amount": -279.69,
                        "current_balance": 25150.65}];
    }

    public logout() {
      this.auth.logout().subscribe(succ => {
        this.navCtrl.setRoot('LoginPage')
      });
    }

    ionViewDidLoad() {
        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
            type: 'line',
            data: {
                labels: ["", "", "", "", "", "", "", ""],
                datasets: [
                    {
                        label: "Money Data",
                        fill: true,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.data,
                        spanGaps: false,
                    }
                ]
            },
            options: {
              legend: {
              	display: false,
                data: false
              },
              scales: {
                  xAxes: [{
                      display: false
                  }]
              }
            }

        });

    }


}
