import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    View,
    Text,
    Pressable,
    Linking
} from 'react-native';
import Modal from "react-native-modal";

import { Colors, Typography } from '../styles/index';
import AuthContext from '../auth/AuthContext';

import Bar from '../components/Bar';
import { currencies, getCurrency, storeCurrency } from '../utils/currency';

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import { Button } from "native-base";

const Settings = ({navigation}) => {
    const {state, authContext} = React.useContext(AuthContext);

    // Get User
    const user = state.user != null ? state.user : {firstName: '', lastName: '', joined: Date.now()};
    const date = new Date(user.joined);

    const [currency, setCurrency] = useState({});
    const [currencyModal, setCurrencyModal] = useState(false);

    useEffect(() => {
        getCurrency(setCurrency);
    }, []);

    // Toggle Currency Modal
    const __toggleCurrencyModal = () => {
        setCurrencyModal(!currencyModal);
    };

    // Change Currency
    const __changeCurrency = (currency) => {
        setCurrency(currency);
        storeCurrency(currency);
        __toggleCurrencyModal();
    };

    const __signOut = () => {
        authContext.signOut();
    }

    return (
        <View style={{flex: 1}}>
            {/* Currency Modal */}
            <Modal 
                isVisible={currencyModal} >
                    <ScrollView style={styles.modalContainer} showsVerticalScrollIndicator={false} >
                        {currencies.map((item, index) => (
                            <View key={index} >
                                {index != 0 ?
                                    <Bar padding={0.2} color={Colors.GRAY_THIN} /> 
                                : null }
                                <Pressable style={styles.rowContainer} onPress={() => __changeCurrency(item)} >
                                    <Text style={[Typography.BODY, {color: Colors.WHITE}]}>{item.name}</Text>
                                    <Text style={[Typography.TAGLINE, {color: Colors.WHITE}]}>{item.symbol}</Text>
                                </Pressable>
                            </View>
                        ))}
                    </ScrollView>
            </Modal>

            {/* Setting Screen */}
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                {/* Header */}
                <View style={styles.headerContainer}>
                    <Text style={[Typography.H1, {color: Colors.WHITE, marginBottom: 10}]}>????????????????</Text>
                </View>

                {/* Body */}
                <View style={styles.bodyContainer}>
                    {/* Account */}
                    <View>
                        <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM, marginBottom: 10}]}>??????????????</Text>
                        <View style={styles.blockContainer}>
                            {/* Firstname */}
                            <View style={styles.rowContainer}>
                                <Text style={[Typography.BODY, {color: Colors.WHITE}]}>??????</Text>
                                <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}>{user.firstName}</Text>
                            </View>
                            <Bar padding={0.3} color={Colors.GRAY_THIN} /> 
                            {/* Lastname */}
                            <View style={styles.rowContainer}>
                                <Text style={[Typography.BODY, {color: Colors.WHITE}]}>??????????????</Text>
                                <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}>{user.lastName}</Text>
                            </View>
                            <Bar padding={0.3} color={Colors.GRAY_THIN} /> 
                            {/* Joined at */}
                            <View style={styles.rowContainer}>
                                <Text style={[Typography.BODY, {color: Colors.WHITE}]}>??????????????????????????????</Text>
                                <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}>{date.toDateString()}</Text>
                            </View>
                        </View>
                    </View>

                    {/* App setting */}
                    <View style={{marginTop: 20}}>
                        <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM, marginBottom: 10}]}>?????????????????? ????????????????????</Text>
                        <View style={styles.blockContainer}>
                            <Pressable
                                style={styles.rowContainer}
                                onPress={() => __toggleCurrencyModal()}>
                                    <Text style={[Typography.BODY, {color: Colors.WHITE}]}>????????????</Text>
                                <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}>{currency.name} ({currency.symbol})</Text>
                            </Pressable>
                            <Bar padding={0.3} color={Colors.GRAY_THIN} />
                            <TouchableOpacity 
                                activeOpacity={0.8}
                                style={styles.rowContainer}>
                                    <Text style={[Typography.BODY, {color: Colors.WHITE}]}>????????</Text>
                                <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}>??????????????</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Privacy */}
                    <View style={{marginTop: 20}}>
                        <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM, marginBottom: 10}]}>?? ????????????</Text>
                        <View style={styles.blockContainer}>
                            <Pressable style={styles.rowContainer} onPress={() => Linking.openURL('https://www.vk.com/dezare')}>
                                <Text style={[Typography.BODY, {color: Colors.WHITE}]}>??????????????????????</Text>
                                <Text style={[Typography.TAGLINE, {color: Colors.GRAY_MEDIUM}]}>DezareD</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20 }}>
                    <Button onPress={() => __signOut()}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faSignOutAlt} padding={10} style={{ color: Colors.WHITE, flex: 1, marginRight: 6 }} />
                            <Text style={{ color: Colors.WHITE, fontSize: 17 }}>??????????</Text>
                        </View>
                </Button>
                </View>

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK
    },
    // Header
    headerContainer: {
        padding: 20,
        paddingBottom: 10
    },
    // Body
    bodyContainer: {
        flex: 1,
        padding: 20,
        paddingTop: 0
    },
    blockContainer: {
        borderRadius: 10,
        backgroundColor: Colors.LIGHT_BLACK
    },
    rowContainer: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    btnContainer: {
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: Colors.LIGHT_BLACK
    },
    // Modal 
    modalContainer: {
        margin: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        backgroundColor: Colors.BLACK
    },
});
 
export default Settings;
 