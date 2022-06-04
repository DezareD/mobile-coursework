import React from 'react';
import {
    View,
    Pressable,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import {
    faPen,
    faTrashAlt
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { Colors } from '../styles';

const QuickActions = (item, updateItem, deleteItem) => {
    return (
        <View style={styles.container}>
            <View style={[styles.button, {marginLeft: 10, backgroundColor: Colors.SUCESS}]}>
                <TouchableOpacity onPress={() => updateItem(item)}>
                    <FontAwesomeIcon icon={faPen} padding={10} style={{ color: "white" }} />
                </TouchableOpacity>
            </View>
            <View style={[styles.button, {backgroundColor: Colors.ALERT, marginLeft: 10}]}>
                <TouchableOpacity onPress={() => deleteItem(item.id)}>
                <FontAwesomeIcon icon={faTrashAlt} padding={10} style={{ color: "white" }} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        width: 60,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default QuickActions;