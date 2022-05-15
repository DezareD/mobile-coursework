import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import { Colors } from '../styles';

const Splash = () => {
    return (
        <View style={styles.container}>
            <Text>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.BLACK
    },
});
 
export default Splash;
 