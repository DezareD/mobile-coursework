import React, {useState} from 'react';
import {
    StyleSheet,
    Alert,
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";

import { Colors, Typography } from '../styles';
import AuthContext from '../auth/AuthContext';
import { Button } from "native-base";


const Login = ({navigation}) => {
    const {authContext} = React.useContext(AuthContext);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    

    // Login
    const __login = () => {
        if (firstName != '' && lastName != '') {
            const user = {
                firstName: firstName,
                lastName: lastName,
                joined: new Date()
            }
            authContext.signIn(user);
        }
        else {
            Alert.alert('Sorry !', 'Please, enter valid informations.');
        }
    }

    return (
        <View style={styles.container}>
            {/* Body */}
            <View style={styles.bodyContainer} >
                <View style={styles.rowContainer}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.goBack()} >
                            <FontAwesomeIcon icon={faAngleLeft} padding={12} style={{ color: "white" }} />
                    </TouchableOpacity>
                    <Text style={[Typography.H1, {marginLeft: 10, color: Colors.WHITE}]}>Авторизация</Text>
                </View>

                {/* Firstname */}
                <View style={{marginTop: 20}}>
                    <Text style={[Typography.TAGLINE, {color: Colors.GRAY_DARK}]}>Имя</Text>
                    <TextInput
                        value={firstName}
                        placeholder='Павел...'
                        keyboardType='name-phone-pad'
                        onChangeText={(text) => setFirstName(text)}
                        style={[styles.input, Typography.BODY]}
                        placeholderTextColor={Colors.GRAY_MEDIUM} />
                </View>

                {/* Lastname */}
                <View style={{marginTop: 20}}>
                    <Text style={[Typography.TAGLINE, {color: Colors.GRAY_DARK}]}>Фамилия</Text>
                    <TextInput
                        value={lastName}
                        placeholder='Павлов...'
                        keyboardType='name-phone-pad'
                        onChangeText={(text) => setLastName(text)}
                        style={[styles.input, Typography.BODY]}
                        placeholderTextColor={Colors.GRAY_MEDIUM} />
                </View>
            </View>

            {/* Footer */}
            <View style={styles.footerContainer}>
                <Button 
                    title='Login'
                    onPress={() => __login()}>Завершить</Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK
    },
    bodyContainer: {
        flex: 1,
        padding: 20,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        color: Colors.WHITE,
        backgroundColor: Colors.LIGHT_BLACK
    },
    footerContainer: {
        padding: 20,
    },
});
 
export default Login;
 