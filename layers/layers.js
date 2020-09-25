var wms_layers = [];

var format_Provincias_0 = new ol.format.GeoJSON();
var features_Provincias_0 = format_Provincias_0.readFeatures(json_Provincias_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_0.addFeatures(features_Provincias_0);
var lyr_Provincias_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_0, 
                style: style_Provincias_0,
                interactive: true,
                title: '<img src="styles/legend/Provincias_0.png" /> Provincias'
            });
var format_Distritosporprovincia_1 = new ol.format.GeoJSON();
var features_Distritosporprovincia_1 = format_Distritosporprovincia_1.readFeatures(json_Distritosporprovincia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritosporprovincia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritosporprovincia_1.addFeatures(features_Distritosporprovincia_1);
var lyr_Distritosporprovincia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Distritosporprovincia_1, 
                style: style_Distritosporprovincia_1,
                interactive: true,
    title: 'Distritos por provincia<br />\
    <img src="styles/legend/Distritosporprovincia_1_0.png" /> Cajabamba<br />\
    <img src="styles/legend/Distritosporprovincia_1_1.png" /> Cajamarca<br />\
    <img src="styles/legend/Distritosporprovincia_1_2.png" /> Celendín<br />\
    <img src="styles/legend/Distritosporprovincia_1_3.png" /> Chota<br />\
    <img src="styles/legend/Distritosporprovincia_1_4.png" /> Contumazá<br />\
    <img src="styles/legend/Distritosporprovincia_1_5.png" /> Cutervo<br />\
    <img src="styles/legend/Distritosporprovincia_1_6.png" /> Hualgayoc<br />\
    <img src="styles/legend/Distritosporprovincia_1_7.png" /> Jaén<br />\
    <img src="styles/legend/Distritosporprovincia_1_8.png" /> San Ignacio<br />\
    <img src="styles/legend/Distritosporprovincia_1_9.png" /> San Marcos<br />\
    <img src="styles/legend/Distritosporprovincia_1_10.png" /> San Miguel<br />\
    <img src="styles/legend/Distritosporprovincia_1_11.png" /> San Pablo<br />\
    <img src="styles/legend/Distritosporprovincia_1_12.png" /> Santa Cruz<br />'
        });
var format_CentrosPoblados_2 = new ol.format.GeoJSON();
var features_CentrosPoblados_2 = format_CentrosPoblados_2.readFeatures(json_CentrosPoblados_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CentrosPoblados_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CentrosPoblados_2.addFeatures(features_CentrosPoblados_2);
var lyr_CentrosPoblados_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CentrosPoblados_2, 
                style: style_CentrosPoblados_2,
                interactive: true,
                title: '<img src="styles/legend/CentrosPoblados_2.png" /> Centros Poblados'
            });

lyr_Provincias_0.setVisible(true);lyr_Distritosporprovincia_1.setVisible(true);lyr_CentrosPoblados_2.setVisible(true);
var layersList = [lyr_Provincias_0,lyr_Distritosporprovincia_1,lyr_CentrosPoblados_2];
lyr_Provincias_0.set('fieldAliases', {'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', 'PERIMETRO': 'PERIMETRO', 'Nro_Orden': 'Nro_Orden', 'Imagen': 'Imagen', });
lyr_Distritosporprovincia_1.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPART': 'DEPART', 'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'DIST_ID': 'DIST_ID', 'DISTRITO': 'DISTRITO', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_CentrosPoblados_2.set('fieldAliases', {'fid': 'fid', 'PROVINCIA': 'PROVINCIA', 'DISTRITO': 'DISTRITO', 'CODIGO': 'CODIGO', 'DIST_ID': 'DIST_ID', 'CCPP_ID Texto': 'CCPP_ID Texto', 'CCPP_ID': 'CCPP_ID', 'Centro Poblado': 'Centro Poblado', 'REGION NATURAL': 'REGION NATURAL', 'ALTITUD': 'ALTITUD', 'Total Poblacion Censada': 'Total Poblacion Censada', 'Hombres censados': 'Hombres censados', 'Mujeres censadas': 'Mujeres censadas', 'Total viviendas particulares': 'Total viviendas particulares', 'Viviendas ocupadas': 'Viviendas ocupadas', 'Viviendas desocupadas': 'Viviendas desocupadas', 'X_UTM': 'X_UTM', 'Y_UTM': 'Y_UTM', 'FUENTE': 'FUENTE', 'OBSERVACIONES': 'OBSERVACIONES', 'X_geo': 'X_geo', 'Y_geo': 'Y_geo', });
lyr_Provincias_0.set('fieldImages', {'PROV_ID': 'Hidden', 'PROVINCIA': 'TextEdit', 'AREA_Km2': 'TextEdit', 'AREA_Ha': 'TextEdit', 'PERIMETRO': 'TextEdit', 'Nro_Orden': 'Hidden', 'Imagen': 'ExternalResource', });
lyr_Distritosporprovincia_1.set('fieldImages', {'IDDPTO': 'Hidden', 'DEPART': 'Hidden', 'PROV_ID': 'Hidden', 'PROVINCIA': 'TextEdit', 'DIST_ID': 'Hidden', 'DISTRITO': 'TextEdit', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', });
lyr_CentrosPoblados_2.set('fieldImages', {'fid': 'Hidden', 'PROVINCIA': 'Hidden', 'DISTRITO': 'Hidden', 'CODIGO': 'Hidden', 'DIST_ID': 'Hidden', 'CCPP_ID Texto': 'Hidden', 'CCPP_ID': 'Hidden', 'Centro Poblado': 'TextEdit', 'REGION NATURAL': 'Hidden', 'ALTITUD': 'Hidden', 'Total Poblacion Censada': 'Hidden', 'Hombres censados': 'Hidden', 'Mujeres censadas': 'Hidden', 'Total viviendas particulares': 'Hidden', 'Viviendas ocupadas': 'Hidden', 'Viviendas desocupadas': 'Hidden', 'X_UTM': 'Hidden', 'Y_UTM': 'Hidden', 'FUENTE': 'Hidden', 'OBSERVACIONES': 'Hidden', 'X_geo': 'Hidden', 'Y_geo': 'Hidden', });
lyr_Provincias_0.set('fieldLabels', {'PROVINCIA': 'header label', 'AREA_Km2': 'header label', 'AREA_Ha': 'header label', 'PERIMETRO': 'header label', 'Imagen': 'header label', });
lyr_Distritosporprovincia_1.set('fieldLabels', {'PROVINCIA': 'no label', 'DISTRITO': 'header label', });
lyr_CentrosPoblados_2.set('fieldLabels', {'Centro Poblado': 'header label', });
lyr_CentrosPoblados_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});