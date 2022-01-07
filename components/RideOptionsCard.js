import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';
import { useState } from 'react';
import { selectTravelTimeInformation } from '../slice/navSlice';
import { useSelector } from 'react-redux';

const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
    },
    {
        id: "Uber-XL-456",
        title: "Uber XL",
        multiplier: 1.2,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png",
    },
    {
        id: "Uber-LUX-789",
        title: "Uber LUX",
        multiplier: 1.75,
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png",
    }        
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);
    const travelTimeInformation = useSelector(selectTravelTimeInformation)
    return (
        <SafeAreaView style={tw`bg-white flex-grow`}>
            <View>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("NavigateCard")}
                    style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
            </View>
            <FlatList
                data = {data}
                keyExtractor={(item => item.id)}
                renderItem={({item : {id, title, multiplier, image}, item}) => (
                    <TouchableOpacity style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}
                        onPress={() => setSelected(item)}
                        >
                        <Image
                          style={{
                            width: 100,
                            height: 100,
                            resizeMode: "contain",
                          }}
                          source = {{ uri: image}}
                        />
                        <View style={tw`-ml-6`}>
                            <Text style={tw`text-xl font-semibold`}>{title}</Text>
                            <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
                        </View>
                        <Text style={tw`text-xl`}>
                            {new Intl.NumberFormat('en-gb', {
                                style: 'currency',
                                currency: 'USD'
                            }).format (
                                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
                            )}
                        </Text>
                    </TouchableOpacity>
                )}
            />
            <View style={tw`mt-auto border-t border-grey-200`}>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
                >
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title} </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default RideOptionsCard

const styles = StyleSheet.create({})
