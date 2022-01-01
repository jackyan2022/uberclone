import React from 'react'
import {Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import tw from 'twrnc';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://i.pinimg.com/originals/4f/eb/74/4feb745209cf7aba57463b20d27b61e3.png",
        screen: "EatsScreen",
    }
]


const NavOptions = () => {
    return (
        <FlatList
            data={data}
            horizontal
            keyExtraction={(item) => item.id}
            renderItem={({ item}) => (
                <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                        <Image
                            style = {{ width: 120, height: 120, resizeMode: "contain"}}
                            source = {{uri: item.image}}
                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name='arrowright' color='white' type='antdesign' 
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    );
}

export default NavOptions;
