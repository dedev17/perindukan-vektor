ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([107.797016, -7.020700, 107.810486, -7.011647]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Waypoints_1 = new ol.format.GeoJSON();
var features_Waypoints_1 = format_Waypoints_1.readFeatures(json_Waypoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Waypoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waypoints_1.addFeatures(features_Waypoints_1);
var lyr_Waypoints_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waypoints_1, 
                style: style_Waypoints_1,
                popuplayertitle: "Waypoints",
                interactive: true,
                title: '<img src="styles/legend/Waypoints_1.png" /> Waypoints'
            });
var format_ADMINISTRASIDESA_AR_25K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_2 = format_ADMINISTRASIDESA_AR_25K_2.readFeatures(json_ADMINISTRASIDESA_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ADMINISTRASIDESA_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_2.addFeatures(features_ADMINISTRASIDESA_AR_25K_2);
var lyr_ADMINISTRASIDESA_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_2, 
                style: style_ADMINISTRASIDESA_AR_25K_2,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_2.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_cilulukgokil_3 = new ol.format.GeoJSON();
var features_cilulukgokil_3 = format_cilulukgokil_3.readFeatures(json_cilulukgokil_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_cilulukgokil_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cilulukgokil_3.addFeatures(features_cilulukgokil_3);
var lyr_cilulukgokil_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cilulukgokil_3, 
                style: style_cilulukgokil_3,
                popuplayertitle: "ciluluk gokil",
                interactive: true,
                title: '<img src="styles/legend/cilulukgokil_3.png" /> ciluluk gokil'
            });
var format_CILULUK_4 = new ol.format.GeoJSON();
var features_CILULUK_4 = format_CILULUK_4.readFeatures(json_CILULUK_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CILULUK_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CILULUK_4.addFeatures(features_CILULUK_4);
var lyr_CILULUK_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CILULUK_4, 
                style: style_CILULUK_4,
                popuplayertitle: "CILULUK",
                interactive: true,
                title: '<img src="styles/legend/CILULUK_4.png" /> CILULUK'
            });
var format_SUNGAI_AR_25K_5 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_5 = format_SUNGAI_AR_25K_5.readFeatures(json_SUNGAI_AR_25K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_AR_25K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_5.addFeatures(features_SUNGAI_AR_25K_5);
var lyr_SUNGAI_AR_25K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_25K_5, 
                style: style_SUNGAI_AR_25K_5,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_5.png" /> SUNGAI_AR_25K'
            });
var format_Buffered_6 = new ol.format.GeoJSON();
var features_Buffered_6 = format_Buffered_6.readFeatures(json_Buffered_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffered_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_6.addFeatures(features_Buffered_6);
var lyr_Buffered_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_6, 
                style: style_Buffered_6,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_6.png" /> Buffered'
            });
var format_Buffered_7 = new ol.format.GeoJSON();
var features_Buffered_7 = format_Buffered_7.readFeatures(json_Buffered_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Buffered_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_7.addFeatures(features_Buffered_7);
var lyr_Buffered_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_7, 
                style: style_Buffered_7,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_7.png" /> Buffered'
            });
var format_UTM_8 = new ol.format.GeoJSON();
var features_UTM_8 = format_UTM_8.readFeatures(json_UTM_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UTM_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTM_8.addFeatures(features_UTM_8);
var lyr_UTM_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTM_8, 
                style: style_UTM_8,
                popuplayertitle: "UTM",
                interactive: true,
                title: '<img src="styles/legend/UTM_8.png" /> UTM'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Waypoints_1.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_2.setVisible(true);lyr_cilulukgokil_3.setVisible(true);lyr_CILULUK_4.setVisible(true);lyr_SUNGAI_AR_25K_5.setVisible(true);lyr_Buffered_6.setVisible(true);lyr_Buffered_7.setVisible(true);lyr_UTM_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Waypoints_1,lyr_ADMINISTRASIDESA_AR_25K_2,lyr_cilulukgokil_3,lyr_CILULUK_4,lyr_SUNGAI_AR_25K_5,lyr_Buffered_6,lyr_Buffered_7,lyr_UTM_8];
lyr_Waypoints_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_cilulukgokil_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_CILULUK_4.set('fieldAliases', {});
lyr_SUNGAI_AR_25K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Buffered_6.set('fieldAliases', {});
lyr_Buffered_7.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTM_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Waypoints_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_cilulukgokil_3.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_CILULUK_4.set('fieldImages', {});
lyr_SUNGAI_AR_25K_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Buffered_6.set('fieldImages', {});
lyr_Buffered_7.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_UTM_8.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Waypoints_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_cilulukgokil_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_CILULUK_4.set('fieldLabels', {});
lyr_SUNGAI_AR_25K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Buffered_6.set('fieldLabels', {});
lyr_Buffered_7.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTM_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTM_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});