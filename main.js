window.onload = init;

function init(){
    const map = new ol.Map({
        view: new ol.View({
            center: [0, 0],
            zoom: 4,
            maxZoom: 10,
            minZoom: 2,
            // rotation: 0.5
        }),
        target: "js-map"
    })

    // Basemaps Layers
    const openStreetManStandard = new ol.layer.Tile({
        source: new ol.source.OSM(),
        visible: true,
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
        visible: false,
        title: "StanmenTerrain"
    })

    // layer Group
    const baseLayerGroup = new ol.layer.Group({
        layers:[
            openStreetManStandard, openStreetMapHumanitarian, stamenTerrain
        ]
    })
    map.addLayer(baseLayerGroup);

    //layer switch logic for basemaps
    const BaseLayerElements = document.querySelectorAll(".sidebar > input[type = radio]");
    for(let BaseLayerElement of BaseLayerElements){
        BaseLayerElement.addEventListener("change", function(){
            let BaseLayerElementValue = this.value;
            baseLayerGroup.getLayers().forEach(function(element, index, array){
                let baseLayerTitle = element.get("title");
                element.setVisible(BaseLayerElementValue === baseLayerTitle);
            });
        })
    }
}