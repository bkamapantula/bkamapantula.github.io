var selectedFeature;

var stCodes = ["AN", "AP", "AR", "AS", "BR", "CH", "CT", "DN", "DD", "DL", "GA", "GJ", "HR", "HP", "JK", "JH", "KA", "KL", "LD", "MP", "MH", "MN", "ML", "MZ", "NL", "OR", "PY", "PB", "RJ", "SK", "TN", "TG", "TR", "UP", "UK", "WB"];

var stNames = ["Andaman and Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];

var map = L.map('map').setView([25, 85], 4.4);

var correctUnits=[];


L.tileLayer('http://oatile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg', {
	attribution : 'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency',
	subdomains : '1234'
}).addTo(map);

var defStyle = {
	weight : 1,
	color : "#dbdbdb",
	opacity : 0.9,
	fillColor : "white",
	fillOpacity : 0.3
};

var correctStyle = {
	weight : 2,
	color : "#42e2ab",
	opacity : 1,
	fillColor : "black",
	fillOpacity : 0.8
};

var wrongStyle = {
	weight : 2,
	color : "#42e2ab",
	opacity : 1,
	fillColor : "#ff3d31",
	fillOpacity : 0.8
};

// draws historical trends of a selected state
function drawStateHistorical(state) {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Year');
    data.addColumn('number', '# Women MPs');
    console.log(state);

    for (var iter = 0; iter < statesData[state].length; iter++) {
    	data.addRow([ statesData[state][iter]['year_value'].toString(), statesData[state][iter]['women_mps']]);
    }

    console.log(statesData[state][0]['state_name']);

    var options = {
        chart: {
            title: 'Legislative assembly historical trends - ' + statesData[state][0]['state_name']
        },
        colors: ['#aa3333'],
        legend: {
            position: 'none'
        },
        lineWidth: 5,
        vAxis: {
            gridlines: {
                color: 'transparent'
            }
        },
        //width: 750,
        height: 600,
        view: {
            columns: [0, 1]
        }
    };

    sLayer.setStyle(styleSelector);
    if(statesData[state].length > 1) {
    	var chart = new google.charts.Line(document.getElementById('historical'));
    	chart.draw(data, options);
	} else {
		var chart = new google.charts.Bar(document.getElementById('historical'));
		chart.draw(data, options);
	}

} // end of drawStateHistorical function

function styleSelector(feature) {
	switch (feature.properties.v) {
	case 1:
		return defStyle;
	case 2:
		return correctStyle;
	case 0:
		return wrongStyle;
	}
}

var geojson = topojson.feature(states, states.objects.data);
var sLayer = L.geoJson(geojson, {
		style : styleSelector,
		onEachFeature : onEachFeature
	}).addTo(map);

var popup;

function onEachFeature(feature, layer) {
	layer.on('click', function (e) {
        selectedFeature = feature;
		if(feature.properties.v != 2) {
				drawStateHistorical(feature.properties.CD);
				layer.setStyle({
					color: 'black',
					weight: 2,
					fillColor: '#AA3333',
					fillOpacity: 1
				});
		        //show popup
		        //var popText=createPopUpText();
		        //popup = L.popup().setLatLng(e.latlng)
		        //    .setContent(popText).openOn(map);
	            //set focus
	            //document.getElementById('StateSelector').focus();
			}
	});
}
