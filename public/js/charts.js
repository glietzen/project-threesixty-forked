


$('#menuToggle').click((e) => {
    e.preventDefault();
    $('#wrapper').toggleClass('menu-displayed');
    $('.toggle-text').toggleClass('hide show');

});

$(function () {
    Highcharts.chart('chart-container', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Revenue & Margin'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
            name: 'Ratio',
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
    
   

})
