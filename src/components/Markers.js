import React from "react"
import {Marker, Popup} from 'react-leaflet'
import Imagen from '../assets/Icon'
import { connect } from 'react-redux'

const Markers = (lugar) =>{

    const arrMks = lugar.lugar.map((l)=>{

        return(
            <Marker position= {l.latlng} icon={Imagen}>
                <Popup>
                    {l.nombre}
                    <br/>
                    {l.description}
                    <br/>
                    {l.url}
                </Popup>
            </Marker>
            )
        })
        return arrMks
    }

const mapStateToProps = (state) =>({
    lugar: state.venues
})

export default connect(mapStateToProps, {})(Markers)