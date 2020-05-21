import React, { Component } from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign'

import FavoritePage from '../page/FavoritePage';
import MainPage from '../page/MainPage';
import PopularPage from '../page/PopularPage';
import trendingPage from '../page/TrendingPage';

const tabbar = createBottomTabNavigator();
const tabbarIcons = (name, focused, color) => {
    let iconName = '';
    if (name === 'PopularPage') {//热门
        iconName = focused ? 'cloudupload' : 'clouduploado';
    }
    else if (name === 'trendingPage') {//趋势
        iconName = focused ? 'areachart' : 'linechart';
    }
    else if (name === 'FavoritePage') {//收藏
        iconName = focused ? 'heart' : 'hearto';
    }
    else {//我的
        iconName = focused ? 'smile-circle' : 'frowno';
    }
    return (
        <AntDesign name={iconName} color={color} size={20} />
    );
}

export default class DynamicTabNavgaior extends Component {
    render() {
        let a = '';
        console.log('DynamicTabNavgaior');
        return (
            <tabbar.Navigator
                tabBarComponent={() => TabBarComponent}
                tabBarOptions={{
                    // showLabel:false,
                    // activeTintColor: 'blue',
                    // inactiveTintColor: 'gray'
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        return tabbarIcons(route.name, focused, color);
                    },
                    unmountOnBlur: true,
                })}>
                <tabbar.Screen
                    name='PopularPage'
                    component={PopularPage}
                    options={{ title: '热门' }} />
                <tabbar.Screen
                    name='trendingPage'
                    component={trendingPage}
                    options={{ title: '趋势' }} />
                <tabbar.Screen
                    name='FavoritePage'
                    component={FavoritePage}
                    options={{ title: '收藏' }} />
                <tabbar.Screen name='MainPage'
                    component={MainPage}
                    options={{ title: '我的' }} />
            </tabbar.Navigator>
        );
    }
}

class TabBarComponent extends Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime()
        }
    }



    render() {
        console.log('BottomTabBar');
        return <BottomTabBar
            {...this.props}
            activeTintColor='red'
        />;
    }
}