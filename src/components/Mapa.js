import React from 'react'
import { Provider } from 'react-redux'
import {MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './Mapa.css'
import Markers from './Markers'
import store from '../stores/store'

const Mapa = ()=>{

    const center = {
        lat: -32.331116,
        lng: -63.8
    }

    return(
        <Provider store={store}>
            <MapContainer
                center = {center}
                zoom = "7"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>
                    OpenStreetMap</a> contributors" />
                <Markers/>
            </MapContainer>
        </Provider>
    )
}
export default Mapa