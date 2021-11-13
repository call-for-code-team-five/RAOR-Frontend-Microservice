import olMap from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { useEffect } from 'react';

const Map = () => {

    useEffect(()=>{
        const map = new olMap({
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            target: 'map',
            view: new View({
                center: [0, 0],
                zoom: 2
            })
        })
    },[])

    

    return(
        <>
            <div id="map" class="map"></div>
        </>
    )
}

export default Map