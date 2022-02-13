import 'ol/ol.css';
import { Map, View } from 'ol/';
import TileLayer from 'ol/layer/Tile';
import { Image as ImageLayers } from 'ol/layer';
import ImageWMS from 'ol/source/ImageWMS';
import TileWMS from 'ol/source/TileWMS';
import Projection from 'ol/proj/Projection';

const serverUrl = "http://localhost:8080/geoserver/wms";

const view = new View({
    center: [0, 0],
    zoom: 0
})

const map = new Map({
    target: "map",
    layers: [],
    view: view
})