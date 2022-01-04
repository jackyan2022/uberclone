import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, {Marker} from 'react-native-maps'
import tw from 'twrnc'

const Map = () => {
    return (
        <MapView
        style={tw`flex-1`}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
          
    )
}


export default Map

const styles = StyleSheet.create({})
