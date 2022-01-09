import React from 'react'
import { StyleSheet, Text, View, Dimensions} from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import tw from 'twrnc'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectOrigin, setTravelTimeInformation } from '../slice/navSlice'
import {GOOGLE_MAPS_APIKEY} from '@env'
import MapViewDirections from "react-native-maps-directions"
import { useRef , useEffect} from 'react'

const Map = () => {
    const { width, height } = Dimensions.get('window');
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const mapRef = useRef(null);
    const dispatch = useDispatch();
    useEffect(() => {
      if (!origin || !destination) return;
      mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
        edgePadding: { top: 50, right: 50, bottom: 50, left: 50},
      })
    }, [origin, destination])

    useEffect(() => {
      if(!origin || !destination) return;
      const getTravelTime = async() => {
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=4${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
        .then((res) => res.json())
        .then(data => {
          dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
        })
      }
      getTravelTime();
    }, [origin, destination, GOOGLE_MAPS_APIKEY])


    return (
      <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: origin ? origin.location.lat: 43.483791,
          longitude: origin ? origin.location.lng: -79.730324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            //waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): undefined}
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="black"
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            description={origin.description}
            identifier="origin"
            />
        )}

        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            description={destination.description}
            identifier="destination"
            />
        )}      
      </MapView>
    )
}


export default Map

const styles = StyleSheet.create({})
