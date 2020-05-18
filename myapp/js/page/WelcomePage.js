import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class WelcomePage extends Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            //跳转到首页
        }, 2000);
    }

    componentWillMount() {
        //销毁计时器,是个好习惯
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>WelcomePage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
