window.onload = init;

function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [0, 0],
            zoom: 2,
            maxZoom: 10,
            minZoom: 4,
            // rotation: 0.5
        }),
        target: "js-map"
    })

    // Basemaps Layers
    const openStreetMaoStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: false,
        title: "OSMStandard"
    })

    const openStreetMapHumanitarian = new ol.layer.Tile({
        source: new ol.source.OSM({
            url: ""
        }),
        visible: false,
        title: "OSMHumanitarian"
    })

    const stamenTerrain = new ol.layer.Tile({
        source: new ol.source.XYZ({
            url: "",
            attributions: ""
        }),
        visible: true,
        title: "StanmenTerrain"
    })

    // layer Group
    const baseLayerGroup = new ol.layer.Group({
        layers:[
            openStreetMaoStandard, openStreetMapHumanitarian, stamenTerrain
        ]
    })
    map.addLayer(baseLayerGroup);
}