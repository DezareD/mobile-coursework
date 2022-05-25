import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Button, Image } from "native-base";

import routes from '../config/routes';
import { Colors, Typography } from '../styles';


const GetStarted = ({navigation, route}) => {

    return (
        <View style={styles.container}>
            <View style={styles.bodyContainer} >
                <Image source={require('../../assets/main_icon.png')} alt="Alternate Text" style={{ width: 150, height: 150}} />
                <Text style={[Typography.H3, styles.title, {marginTop: 30}]}>Привет !</Text>
                <Text style={[Typography.TAGLINE, styles.title, {marginTop: 10}]}>Приложение создано для анализа своего бюджета, просматривайте состояние вашего бюджета по категориям.</Text>
            </View>
            
            <View style={styles.footerContainer}>
                <Button colorScheme="secondary"
                    onPress={() => navigation.navigate(routes.Login)}>Начать!</Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK
    },
    // Body
    bodyContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        color: Colors.WHITE
    },
    // Footer
    footerContainer: {
        padding: 20,
    },
});
 
export default GetStarted;
 