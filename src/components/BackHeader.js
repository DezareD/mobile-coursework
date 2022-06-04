import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { 
    faChevronRight,
    faChevronLeft
 } from "@fortawesome/free-solid-svg-icons";

import { Colors, Typography } from '../styles/index';

const BackHeader = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{padding: 5, alignItems: 'flex-start'}}
                onPress={() => navigation.goBack()}>
                    <FontAwesomeIcon icon={faChevronLeft} padding={10} style={{ color: Colors.WHITE }} />
            </TouchableOpacity>

            <Text style={[Typography.H3, {color: Colors.WHITE}]}>{props.title}</Text>
            
            <FontAwesomeIcon icon={faChevronRight} padding={15} style={{ color: Colors.BLACK }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.BLACK
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});
 
export default BackHeader;
 