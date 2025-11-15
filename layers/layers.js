var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Departamentos_boliviadepartamentos_geo_1 = new ol.format.GeoJSON();
var features_Departamentos_boliviadepartamentos_geo_1 = format_Departamentos_boliviadepartamentos_geo_1.readFeatures(json_Departamentos_boliviadepartamentos_geo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_boliviadepartamentos_geo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_boliviadepartamentos_geo_1.addFeatures(features_Departamentos_boliviadepartamentos_geo_1);
var lyr_Departamentos_boliviadepartamentos_geo_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_boliviadepartamentos_geo_1, 
                style: style_Departamentos_boliviadepartamentos_geo_1,
                popuplayertitle: 'Departamentos_bolivia — departamentos_geo',
                interactive: true,
                title: '<img src="styles/legend/Departamentos_boliviadepartamentos_geo_1.png" /> Departamentos_bolivia — departamentos_geo'
            });
var format_Estaciones_SENAMHIestacion_meteorologica_2 = new ol.format.GeoJSON();
var features_Estaciones_SENAMHIestacion_meteorologica_2 = format_Estaciones_SENAMHIestacion_meteorologica_2.readFeatures(json_Estaciones_SENAMHIestacion_meteorologica_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_SENAMHIestacion_meteorologica_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_SENAMHIestacion_meteorologica_2.addFeatures(features_Estaciones_SENAMHIestacion_meteorologica_2);
cluster_Estaciones_SENAMHIestacion_meteorologica_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Estaciones_SENAMHIestacion_meteorologica_2
});
var lyr_Estaciones_SENAMHIestacion_meteorologica_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Estaciones_SENAMHIestacion_meteorologica_2, 
                style: style_Estaciones_SENAMHIestacion_meteorologica_2,
                popuplayertitle: 'Estaciones_SENAMHI — estacion_meteorologica',
                interactive: true,
                title: '<img src="styles/legend/Estaciones_SENAMHIestacion_meteorologica_2.png" /> Estaciones_SENAMHI — estacion_meteorologica'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Departamentos_boliviadepartamentos_geo_1.setVisible(true);lyr_Estaciones_SENAMHIestacion_meteorologica_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Departamentos_boliviadepartamentos_geo_1,lyr_Estaciones_SENAMHIestacion_meteorologica_2];
lyr_Departamentos_boliviadepartamentos_geo_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'c_ut': 'c_ut', 'DEPARTAMEN': 'DEPARTAMEN', });
lyr_Estaciones_SENAMHIestacion_meteorologica_2.set('fieldAliases', {'fid': 'fid', 'estacion': 'estacion', 'latitud': 'latitud', 'longitud': 'longitud', 'altura': 'altura', 'activo': 'activo', 'orden': 'orden', 'fecha_inic': 'fecha_inic', 'cod_omm': 'cod_omm', 'cod_oaci': 'cod_oaci', 'cod_otro': 'cod_otro', 'propietari': 'propietari', 'telefono': 'telefono', 'direccion': 'direccion', 'correo': 'correo', 'web': 'web', 'observacio': 'observacio', 'clasificac': 'clasificac', 'operador': 'operador', 'financiado': 'financiado', 'nom_dep': 'nom_dep', 'nom_mun': 'nom_mun', 'nom_prov': 'nom_prov', 'categoria': 'categoria', 'tipo_estac': 'tipo_estac', 'nombre_obs': 'nombre_obs', 'ci_obs': 'ci_obs', 'estado': 'estado', 'pronostico': 'pronostico', });
lyr_Departamentos_boliviadepartamentos_geo_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'c_ut': 'TextEdit', 'DEPARTAMEN': 'TextEdit', });
lyr_Estaciones_SENAMHIestacion_meteorologica_2.set('fieldImages', {'fid': '', 'estacion': '', 'latitud': '', 'longitud': '', 'altura': '', 'activo': '', 'orden': '', 'fecha_inic': '', 'cod_omm': '', 'cod_oaci': '', 'cod_otro': '', 'propietari': '', 'telefono': '', 'direccion': '', 'correo': '', 'web': '', 'observacio': '', 'clasificac': '', 'operador': '', 'financiado': '', 'nom_dep': '', 'nom_mun': '', 'nom_prov': '', 'categoria': '', 'tipo_estac': '', 'nombre_obs': '', 'ci_obs': '', 'estado': '', 'pronostico': '', });
lyr_Departamentos_boliviadepartamentos_geo_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'c_ut': 'no label', 'DEPARTAMEN': 'no label', });
lyr_Estaciones_SENAMHIestacion_meteorologica_2.set('fieldLabels', {'fid': 'no label', 'estacion': 'no label', 'latitud': 'no label', 'longitud': 'no label', 'altura': 'no label', 'activo': 'no label', 'orden': 'no label', 'fecha_inic': 'no label', 'cod_omm': 'no label', 'cod_oaci': 'no label', 'cod_otro': 'no label', 'propietari': 'no label', 'telefono': 'no label', 'direccion': 'no label', 'correo': 'no label', 'web': 'no label', 'observacio': 'no label', 'clasificac': 'no label', 'operador': 'no label', 'financiado': 'no label', 'nom_dep': 'no label', 'nom_mun': 'no label', 'nom_prov': 'no label', 'categoria': 'no label', 'tipo_estac': 'no label', 'nombre_obs': 'no label', 'ci_obs': 'no label', 'estado': 'no label', 'pronostico': 'no label', });
lyr_Estaciones_SENAMHIestacion_meteorologica_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});