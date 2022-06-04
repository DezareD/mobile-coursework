import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native';
import {
    faAngleRight
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { Colors, Typography } from '../styles/index';

const BlockHeader = (props) => {
    return (
        <View style={styles.container}>
            <Text style={[Typography.H1, {color: Colors.WHITE}]}>{props.title}</Text>
            
            {props?.onPress ?
                <Pressable 
                    style={styles.rowContainer}
                    onPress={props.onPress}>
                        <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM, marginRight: 5}]}>All</Text>
                        <FontAwesomeIcon icon={faAngleRight} padding={7} style={{ color: Colors.GRAY_MEDIUM }} />
                </Pressable>
            : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
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
 
export default BlockHeader;
 