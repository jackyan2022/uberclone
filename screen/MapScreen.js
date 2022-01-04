import { mapSeries } from 'async';
import React from 'react'
import { NativeAppEventEmitter, StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc';
import Map from "../components/Map";

const MapScreen = () => {
    return (
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>
            <View style={tw`h-1/2`}></View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
