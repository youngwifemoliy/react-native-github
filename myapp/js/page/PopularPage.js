import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


export default class PopularPage extends Component {

    render() {
        const pageController = createMaterialTopTabNavigator()
        return (
            <SafeAreaView style={styles.pageControllerContainer}>
                <pageController.Navigator
                    style={styles.pageController}
                    tabBarOptions={{
                        //字体的风格
                        labelStyle: { fontSize: 14 },
                        //小横条
                        indicatorStyle: { backgroundColor: 'red', height: 10 },
                        renderLabel: (screen) => {
                            console.log("fdsadsa");
                        },
                        tabStyle: {},
                        //pageController的style
                        style: { backgroundColor: 'powderblue' },
                        //true 多余可滚动 false平均分
                        scrollEnabled: true,
                        bounces: true,
                    }}>
                    <pageController.Screen name='PopularPage1' component={PopularPage1} />
                    <pageController.Screen name='PopularPage2' component={PopularPage2} />
                </pageController.Navigator>
            </SafeAreaView>
        );
    }
}

class PopularPage1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>PopularPage1</Text>
            </View>
        );
    }
}

class PopularPage2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>PopularPage2</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    pageControllerContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    pageController: {
        // marginTop: 44,
    }
})