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
            let paintCost = 0;
            let woodRot = 0;
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
                    paintCost += parseInt(response[i].paint_cost);
                    woodRot += parseInt(response[i].wood_rot);
                    jobTotal += parseInt(response[i].job_total);
                    profit = jobTotal - (paintCost + woodRot);                    

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
            paintCost = (paintCost / jobTotal) * 100;
            woodRot = (woodRot / jobTotal) * 100;
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
                        name: 'Paint',
                        y: paintCost
                    }, {
                        name: 'Wood Rot',
                        y: woodRot
                        // }, {
                        //     name: 'Change Orders',
                        //     y: 4.67
                        // }, {
                        //     name: 'Labor',
                        //     y: 4.18
                        // }, {
                        //     name: 'Insurance',
                        //     y: 4.44
                        // }, {
                        //     name: 'Other',
                        //     y: 2.61
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

