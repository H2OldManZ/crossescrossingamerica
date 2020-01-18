var baseMapLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
});
var map = new ol.Map({
  target: 'map',
  layers: [ baseMapLayer],
  view: new ol.View({
          center: ol.proj.fromLonLat([-97,38]),
          zoom: 3
         //Initial Zoom Level
        })
});
//Adding a marker on the map
var cross = new ol.Feature({
  geometry: new ol.geom.Point(
    ol.proj.fromLonLat([-74.006,40.7127])
  ),  // Cordinates of New York's Town Hall
});
var vectorSource = new ol.source.Vector({
  features: [cross]
});
var markerVectorLayer = new ol.layer.Vector({
  source: vectorSource,
});
map.addLayer(markerVectorLayer);
