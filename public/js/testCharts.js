$(function () {
    $('#menuToggle').click((e) => {
        e.preventDefault();
        $('#wrapper').toggleClass('menu-displayed');
        $('.toggle-text').toggleClass('hide show');

    });

    var chart;
    $(document).ready(function () {

        var container_chartCorrectiveAction = new Highcharts.Chart({
            chart: {
                renderTo: 'chart-container',

                type: 'pie',
                height: 400

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
                    y: 61.41,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Paint',
                    y: 11.84
                }, {
                    name: 'Wood Rot',
                    y: 10.85
                }, {
                    name: 'Change Orders',
                    y: 4.67
                }, {
                    name: 'Labor',
                    y: 4.18
                }, {
                    name: 'Insurance',
                    y: 4.44
                },{
                    name: 'Other',
                    y: 2.61
                }]
            }]
        });


        var container_chartAtaFleetAvg = new Highcharts.Chart({
            chart: {
                renderTo: 'chart-container-2',

                type: 'column',
                height: 400

            },
            title: {
                text: 'Monthly Revenue'
            },
            xAxis: {
                categories: ['Month'],
                // title: {
                //     text: 'Month'
                // },
                labels: {
                    style: {
                        width: '12000px'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Revenue',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                formatter: function () {
                    return '' + this.series.name + ': ' + this.y + ' Average';
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                },
                series: {
                    pointWidth: 10,
                    groupPadding: .05,
                    shadow: true
                }
            },
            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
                floating: false,
                borderWidth: 1,
                backgroundColor: '#FFFFFF',
                shadow: true,
                labelFormatter: function () {
                    return '<div class="' + this.name + '-arrow"></div><span style="font-family: \'Advent Pro\', sans-serif; font-size:12px">' + this.name + '</span><br/><span style="font-size:10px; color:#ababaa">   Total: ' + this.options.total + '</span>';
                }
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: true
            },
            series: [{
                name: 'Jan',
                total: '10000',
                data: [10000]
            }, {
                name: 'Feb',
                total: '8000',
                data: [8000]
            }, {
                name: 'Mar',
                total: '9500',
                data: [9500]
            },
            {
                name: 'Apr',
                total: '13000',
                data: [13000]
            },
            {
                name: 'May',
                total: '13500',
                data: [13500]
            },
            {
                name: 'Jun',
                total: '14500',
                data: [14500]
            },
            {
                name: 'July',
                total: '12000',
                data: [12000]
            },
            {
                name: 'Aug',
                total: '16000',
                data: [16000]
            },
            {
                name: 'Sept',
                total: '15000',
                data: [15000]
            },
            {
                name: 'Oct',
                total: '13000',
                data: [13000]
            },
            {
                name: 'Nov',
                total: '17000',
                data: [17000]
            },
            {
                name: 'Dec',
                total: '17750',
                data: [17750]
            }]
        });








    });
})

