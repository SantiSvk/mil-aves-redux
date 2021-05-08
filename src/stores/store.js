import { createStore } from 'redux'
import { venues } from '../assets/locations.json'

const reducerLocations = (state = {venues}, action)=>{
    return state
}

export default createStore(reducerLocations)