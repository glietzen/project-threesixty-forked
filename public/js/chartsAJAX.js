$(function () {

    // SET NAVBAR TOGGLING
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $('.toggle-text').toggleClass('hide show');
    });
    // SET CHART
    var chart;

    $(document).ready(function () {
    // CHART VARIABLES
        // PIE VARIABLES
            let materialCost = 0;
            let laborCost = 0;
            let insuranceCost = 0;
            let jobTotal = 0;
            let profit = 0;
        // FUNNEL VARIABLES
            let queueTotal = 0;
            let inProgressTotal = 0;
            let completeTotal = 0;

        // GET DATA FROM DATABASE
        $.ajax({
            url: `/api/project/all`,
            method: `GET`
        }).then((response) => {
            // LOOP THROUGH DATA
            for (var i = 0; i < response.length; i++) {
                // PIE TOTALS
                    // GET TOTAL COSTS
                    materialCost += parseInt(response[i].material_actual);
                    laborCost += parseInt(response[i].labor_actual);
                    insuranceCost += parseInt(response[i].insurance_cost);
                    jobTotal += parseInt(response[i].job_total);
                    profit += parseInt(response[i].profit_actual);                    

                // FUNNEL TOTALS
                    // IF IN COMPLETE STATUS
                    if (response[i].status === 'complete') {
                        completeTotal += parseInt(response[i].job_total);
                    } 
                    // IF IN QUEUE STATUS
                    else if (response[i].status === 'queue') {
                        queueTotal += parseInt(response[i].job_total);
                    }
                    // IF IN PROGRESS STATUS
                    else if (response[i].status === 'in progress') {
                        inProgressTotal += parseInt(response[i].job_total);
                    }                 
            }

            // CONVERT TO PIE CHART PERCENTAGES
            materialCost = (materialCost / jobTotal) * 100;
            laborCost = (laborCost / jobTotal) * 100;
            insuranceCost = (insuranceCost / jobTotal) * 100;
            profit = (profit / jobTotal) * 100;

            // CREATE & RENDER PIE CHART
            var container_pieChart = new Highcharts.Chart({
                chart: {
                    renderTo: 'chart-container',
                    type: 'pie',
                    height: 350,
                    style: {
                        fontFamily: 'roboto'
                    }
                },
                title: {
                    text: 'Margin & Profiit'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                            style: {
                                color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                            }
                        }
                    }
                },
                series: [{
                    name: '% of Revenue',
                    colorByPoint: true,
                    data: [{
                        name: 'Profit',
                        y: profit,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Materials',
                        y: materialCost
                    }, {
                        name: 'Labor',
                        y: laborCost
                        }, {
                            name: 'Insurance',
                            y: insuranceCost
                        }]
                }]
            });
            // CREATE & RENDER FUNNEL CHART
            var container_Funnel = new Highcharts.Chart({
                chart: {
                    renderTo: 'chart-container-2',
                    type: 'funnel',
                    height: 350,
                    style: {
                        fontFamily: 'roboto'
                    }
                },
                title: {
                    text: 'Sales Funnel'
                },
                tooltip: {
                    formatter: function () {
                        return '' + this.point.name + ': ' + this.y;
                    }
                },
                plotOptions: {
                    series: {
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b> ({point.y:,.0f})',
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                            softConnector: true
                        },
                        center: ['40%', '50%'],
                        neckWidth: '30%',
                        neckHeight: '25%',
                        width: '80%'
                    }
                },
                credits: {
                    enabled: false
                },
                exporting: {
                    enabled: true
                },
                series: [{
                    name: 'Stage',
                    data: [
                        ['Queue', queueTotal],
                        ['In Progress', inProgressTotal],
                        ['Complete', completeTotal]
                    ]
                }]
            });
        });
    });
});

