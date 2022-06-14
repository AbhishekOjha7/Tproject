import { Platform, Text, View, Image } from 'react-native';
import React from 'react'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import useStatusBar from './useStatusBar';

function HomeScreen() {
    useStatusBar('dark-content')
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'violet' }}>
            <Text>Home</Text>
        </View>
    );
}
function OffersScreen() {
    useStatusBar('light-content');
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
            <Text>Offers</Text>
        </View>
    );
}
const Tab = createMaterialBottomTabNavigator();

const TabNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                shifting={true}
                // labeled={false}
                sceneAnimationEnabled={true}
                // activeColor="#00aea2"
                // inactiveColor="#95a5a6"
                barStyle={{ backgroundColor: 'white' }}>
                <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image style={{ height: 25, width: 25, }}
                                    source={!focused ? require('../src/assets/home2.png') : require('../src/assets/home1.png')} />
                            )
                        },
                    }}
                />
                <Tab.Screen name="Offers" component={OffersScreen}
                    options={{
                        tabBarLabel: 'Offers',
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image style={{ height: 25, width: 25, }}
                                    source={!focused ? require('../src/assets/discount.png') : require('../src/assets/discounts.png')} />
                            )
                        },

                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default TabNav