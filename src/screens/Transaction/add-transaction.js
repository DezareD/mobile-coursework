import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Switch,
    TextInput,
    TouchableOpacity
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Colors, Typography } from '../../styles';
import { insertTransaction, updateTransaction } from '../../dbHelpers/transactionHelper';

import { categories } from '../../utils/categories';

import BackHeader from '../../components/BackHeader';
import { Button } from "native-base";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";


const AddTransaction = ({navigation, route}) => {
    const [category, setCategory] = useState();
    const [income, setIncome] = useState(false);
    const [showDate, setShowDate] = useState(false);
    const [date, setDate] = useState(new Date());
    const [amount, setAmount] = useState('');

    useEffect(() => {
        if (route.params?.item) {
            setCategory({name: route.params.item.category, icon: route.params.item.icon });
            setDate(new Date(route.params.item.transaction_date));
            setAmount((route.params.item.amount).toString());
            setIncome(route.params.item.type == 'income' ? false : true);
        }
        else {
            setCategory(categories[0]); // Set the first category as a default category
        }
    }, []);

    // Toggle Income / Expense Switch
    const toggleIncomeSwitch = () => setIncome(previousState => !previousState);

    // Change Date
    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDate(Platform.OS === 'ios');
        setDate(currentDate);
    }

    // Insert Transaction
    const __insert = () => {
        const stringDate = date.toLocaleDateString();
        insertTransaction({
            category: category.name,
            icon: category.name,
            date: stringDate,
            amount: parseFloat(amount),
            type: income ? 'expense' : 'income'
        });
    }

    // Update Transaction
    const __update = () => {
        const stringDate = date.toLocaleDateString();
        updateTransaction({
            id: route.params.item.id,
            category: category.name,
            icon: category.name,
            date: stringDate,
            amount: parseFloat(amount),
            type: income ? 'expense' : 'income'
        });
    }

    // Save Transaction
    const __save = () => {
        if (route.params?.item) {
            __update();
        }
        else {
            __insert();
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            {/* Header */}
            <BackHeader title={route.params?.item ? 'Изменить транзакцию' : 'Новая транзакция'} />

            {/* Body */}
            <ScrollView style={styles.bodyContainer} showsVerticalScrollIndicator={false}>
                {/* Category */}
                <View style={styles.inputContainer}>
                    <Text style={[Typography.TAGLINE, {color: Colors.GRAY_DARK}]}>Категория</Text>
                    <Picker
                        selectedValue={category}
                        onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
                        style={styles.input}
                        dropdownIconColor={Colors.GRAY_DARK}
                        itemStyle={[Typography.BODY, {color: Colors.GRAY_DARK}]}>
                            {categories.map((category, index) => (
                                <Picker.Item key={index} label={category.name} value={category} />
                            ))}
                    </Picker>
                </View>

                {/* Transaction type */}
                <View style={styles.inputContainer}>
                    <Text style={[Typography.TAGLINE, {color: Colors.GRAY_DARK}]}>Тип транзакции</Text>
                    <View style={styles.rowContainer}>
                        <Text style={[Typography.BODY, !income ? {color: Colors.PRIMARY} : {color: Colors.GRAY_DARK}]}>Доходы</Text>
                        <Switch
                            trackColor={{ false: Colors.WHITE, true: Colors.WHITE }}
                            thumbColor={income ? Colors.PRIMARY : Colors.PRIMARY}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleIncomeSwitch}
                            value={income}
                        />
                        <Text style={[Typography.BODY, income ? {color: Colors.PRIMARY} : {color: Colors.GRAY_DARK}]}>Расходы</Text>
                    </View>
                </View>

                {/* Date */}
                <View style={styles.inputContainer}>
                    <Text style={[Typography.TAGLINE, {color: Colors.GRAY_DARK}]}>Дата</Text>
                    <TouchableOpacity 
                        onPress={() => setShowDate(true)}
                        style={[styles.input, {paddingTop: 15, paddingBottom: 15}]}>
                            <Text style={[Typography.BODY, {color: Colors.WHITE}]}>{date.toDateString()}</Text>
                    </TouchableOpacity>
                </View>

                {showDate && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        display='calendar'
                        onChange={onChangeDate}
                    />
                )}

                {/* Amount */}
                <View style={styles.inputContainer}>
                    <Text style={[Typography.TAGLINE, {color: Colors.GRAY_DARK}]}>Количество</Text>
                    <TextInput
                        value={amount}
                        placeholder='100...'
                        keyboardType='numeric'
                        onChangeText={(text) => setAmount(text)}
                        placeholderTextColor={Colors.GRAY_MEDIUM}
                        style={[styles.input, Typography.BODY]} />
                </View>
            </ScrollView>

            {/* Footer */}
            <View style={styles.footerContainer}>
                    <Button onPress={() => __save()}>
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                            <FontAwesomeIcon icon={faSave} padding={10} style={{ color: "white", flex: 1, marginRight: 6 }} />
                            <Text style={{ color: "white", fontSize: 17 }}>Сохранить</Text>
                        </View>
                </Button>
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
        paddingTop: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        color: Colors.WHITE,
        backgroundColor: Colors.LIGHT_BLACK
    },
    rowContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    // Footer
    footerContainer: {
        padding: 20,
    },
});
 
export default AddTransaction;
 