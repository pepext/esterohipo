var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_cables_1 = new ol.format.GeoJSON();
var features_cables_1 = format_cables_1.readFeatures(json_cables_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cables_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cables_1.addFeatures(features_cables_1);var lyr_cables_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cables_1, 
                style: style_cables_1,
    title: 'cables<br />\
    <img src="styles/legend/cables_1_0.png" /> 48<br />\
    <img src="styles/legend/cables_1_1.png" /> 24<br />\
    <img src="styles/legend/cables_1_2.png" /> 12<br />\
    <img src="styles/legend/cables_1_3.png" /> <br />'
        });var format_cajas_2 = new ol.format.GeoJSON();
var features_cajas_2 = format_cajas_2.readFeatures(json_cajas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cajas_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_cajas_2.addFeatures(features_cajas_2);var lyr_cajas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cajas_2, 
                style: style_cajas_2,
                title: '<img src="styles/legend/cajas_2.png" /> cajas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cables_1.setVisible(true);lyr_cajas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cables_1,lyr_cajas_2];
lyr_cables_1.set('fieldAliases', {'FID': 'FID', 'nFibras': 'nFibras', 'nombre': 'nombre', });
lyr_cajas_2.set('fieldAliases', {'FID': 'FID', 'nombre': 'nombre', 'N1': 'N1', 'n2': 'n2', 'ruta': 'ruta', });
lyr_cables_1.set('fieldImages', {'FID': 'TextEdit', 'nFibras': 'TextEdit', 'nombre': 'TextEdit', });
lyr_cajas_2.set('fieldImages', {'FID': 'ValueRelation', 'nombre': 'TextEdit', 'N1': 'TextEdit', 'n2': 'TextEdit', 'ruta': 'TextEdit', });
lyr_cables_1.set('fieldLabels', {'FID': 'no label', 'nFibras': 'no label', 'nombre': 'no label', });
lyr_cajas_2.set('fieldLabels', {'FID': 'no label', 'nombre': 'no label', 'N1': 'no label', 'n2': 'no label', 'ruta': 'no label', });
lyr_cajas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});