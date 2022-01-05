import React from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env"
import { setDestination, setOrigin } from '../slice/navSlice';
import { useDispatch } from 'react-redux';
import NavFavourites from '../components/NavFavourites';

const HomeScreen = () => {
    const dispatch = useDispatch();
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100, height: 100, resizeMode: 'contain',
                    }}
                    source={{
                        uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
                    }}
                />
                <GooglePlacesAutocomplete
                    placeholder="Where From?"
                    styles={{
                        container: {
                            flex:0
                        },
                        textInput: {
                            fontSize: 18,
                        },
                    }}
                    onPress={(data, details = null) => {
                        dispatch(setOrigin({
                            location: details.geometry.location,
                            description: data.description
                        }))

                        dispatch(setDestination(null))
                    }}
                    fetchDetails={true}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                    minLength = {2}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />
                <NavOptions />
                <NavFavourites />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})