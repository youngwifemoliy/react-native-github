import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CardStyleInterpolators } from '@react-navigation/stack';

import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';

const stack = createStackNavigator();

export default class InitNavigator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAD: true,
        }
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({ isAD: false });
            this.timer && clearTimeout(this.timer);
        }, 2000);
    }

    render() {
        return (
            <NavigationContainer>
                <stack.Navigator>
                    {
                        this.state.isAD ?
                            (
                                <stack.Screen
                                    name='InInitNavigatorit'
                                    component={WelcomePage}
                                    options={{
                                        headerShown: false,
                                    }} />
                            ) : (
                                <stack.Screen
                                    name='HomePage'
                                    component={HomePage}
                                    options={{
                                        headerShown: false,
                                        cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
                                    }} />
                            )
                    }
                </stack.Navigator>
            </NavigationContainer>
        );
    }
}