import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

import { Button } from "native-base";

import routes from '../config/routes';
import { Colors, Typography } from '../styles';


const GetStarted = ({navigation, route}) => {

    return (
        <View style={styles.container}>
            {/* Body */}
            <View style={styles.bodyContainer} >
                <Text style={[Typography.H3, styles.title]}>Привет !</Text>
                <Text style={[Typography.TAGLINE, styles.title, {marginTop: 10}]}>Explore the interactive, secure and fast money planner and tracker app with highly expected data privacy for every user.</Text>
            </View>

            {/* Footer */}
            <View style={styles.footerContainer}>
                <Button colorScheme="secondary">Get started!</Button>
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
 