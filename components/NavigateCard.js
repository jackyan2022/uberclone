import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
import { useDispatch } from 'react-redux';
import { setDestination } from '../slice/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Morning, Jack</Text>
            <View style={tw`border-t border-gray-200 flex-shrink`}></View>
                <View style={tw`border-t border-gray-200 flex-shrink`}>
                    <GooglePlacesAutocomplete
                        placeholder="Where to?"
                        styles={toInputBoxStyles}
                        fetchDetails={true}
                        enablePoweredByContainer={false}
                        returnKeyType={"search"}
                        minLength={2}
                        onPress = {(data, details=null) => {
                            dispatch(setDestination({
                                location: details.geometry.location,
                                description: data.description,
                            }))
                            navigation.navigate('RideOptionsCard')
                        }}
                        query={{
                            key: GOOGLE_MAPS_APIKEY,
                            language: "en"
                        }}
                        nearbyPlacesAPI="GooglePlacesSearch"
                        debound={400}
                    />
                <NavFavourites/>
                </View>
        </SafeAreaView>
    )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
})
