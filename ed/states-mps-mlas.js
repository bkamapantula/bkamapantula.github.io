
var states = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
            'Odisha', 'Pondicherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];
var states_mps = [
    ['Andhra Pradesh', 8, 1],
    ['Arunachal Pradesh', 0, 1],
    ['Assam', 13.3, 1],
    ['Bihar', 7.5, 1],
    ['Chhattisgarh', 9.1, 1],
    ['Delhi', 14.3, 1],
    ['Goa', 0, 1],
    ['Gujarat', 15.4, 1],
    ['Haryana', 0, 1],
    ['Himachal Pradesh', 0, 1],
    ['Jammu Kashmir', 16.7, 1],
    ['Jharkhand', 0, 1],
    ['Karnataka', 3.6, 1],
    ['Kerala', 5, 1],
    ['Madhya Pradesh', 17.2, 1],
    ['Maharashtra', 10.4, 1],
    ['Manipur', 0, 1],
    ['Meghalaya', 0, 1],
    ['Mizoram', 0, 1],
    ['Nagaland', 0, 1],
    ['Odisha', 9.5, 1],
    ['Pondicherry', 0, 1],
    ['Punjab', 7.7, 1],
    ['Rajasthan', 4, 1],
    ['Sikkim', 0, 1],
    ['Tamil Nadu', 10.3, 1],
    ['Telangana', 5.9, 1],
    ['Tripura', 0, 1],
    ['Uttar Pradesh', 16.3, 1],
    ['Uttarakhand', 20, 1],
    ['West Bengal', 28.6, 1]
];
var states_mlas = [
    ['AP', 10.28, 1],
    ['Arunachal Pradesh', 3.33, 1],
    ['Assam', 11.11, 1],
    ['Bihar', 13.99, 1],
    ['Chhattisgarh', 11.11, 1],
    ['Delhi', 4.28, 1],
    ['Goa', 2.5, 1],
    ['Gujarat', 8.79, 1],
    ['Haryana', 14.44, 1],
    ['Himachal Pradesh', 4.41, 1],
    ['Jammu Kashmir', 3.44, 1],
    ['Jharkhand', 9.87, 1],
    ['Karnataka', 2.67, 1],
    ['Kerala', 5, 1],
    ['Madhya Pradesh', 13.04, 1],
    ['Maharashtra', 3.81, 1],
    ['Manipur', 5, 1],
    ['Meghalaya', 6.67, 1],
    ['Mizoram', 0, 1],
    ['Nagaland', 0, 1],
    ['Odisha', 7.48, 1],
    ['Pondicherry', 0, 1],
    ['Punjab', 11.96, 1],
    ['Rajasthan', 14, 1],
    ['Sikkim', 9.37, 1],
    ['Tamil Nadu', 7.26, 1],
    ['Telangana', 7.56, 1],
    ['Tripura', 8.33, 1],
    ['Uttar Pradesh', 8.68, 1],
    ['Uttarakhand', 7.14, 1],
    ['West Bengal', 11.56, 1]
];

$(function () {
    $('#mpsStatesContainer').highcharts({

        chart: {
        	plotBackgroundColor: null,
            backgroundColor: 'rgba(238, 238, 238, 0.8)',
            inverted: true,
            type: 'bubble',
            zoomType: 'xy'
        },
        colors: ['steelblue'], //['#218c8d', '#ef7126'],
        legend: {
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 50
        },
        title: {
            text: '% of women MPs and MLAs in all states in 2015'
        },

        series: [{
            name: 'MPs %',
            data: states_mps
        } /*, 
        {
            name: 'MLAs %',
            data: states_mlas,
            keys: ['name', 'y', 'size']
        }*/
        ],
        plotOptions: {
            bubble: {
                minSize: 12,
                maxSize: 12
            }
        },
        xAxis: {
            categories: states,
            gridLineDashStyle: 'Dash',
            gridLineWidth: 1,
            labels: {
                step: 2
            },
            tickWidth: 0.5,
            /*title: {
                text: 'States'
            }*/
        },
        yAxis: {
            gridLineWidth: 0,
            min: 0,
            plotBands: [ /*{
                color: 'rgba(239, 113, 38, 0.4)',
                from:  8.94,
                to: 9.14,
                label: {
                    text: 'Women MLAs % - India',
                    align: 'right',
                    y: -5,
                    style: {
                        color: '#ef7126'
                    }
                }
            }, */
            {
                color: 'rgba(3, 3, 3, 0.1)',
                from:  12,
                to: 12.2,
                label: {
                    text: 'Women MPs % - India',
                    align: 'left',
                    y: -5,
                    style: {
                        color: 'steelblue' //'#218c8d'
                    }
                }
            }],
            title: {
                text: 'Women %'
            }
        },
            tooltip: {
                formatter: function () {
                    return '<b>'+ this.point.name + ' - ' + this.series.name + '</b><br/>' +
                        'Representation %: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }
            },
        credits: {enabled: false}
    });
});
