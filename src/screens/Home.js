import { Center } from 'native-base';
import { Text, View, StyleSheet } from 'react-native';
import { Colors, Typography } from '../styles';

import SwipeableFlatList from 'react-native-swipeable-list';

import { getTransactions, getTotalIncomes, getTotalExpenses, deleteTransaction } from '../dbHelpers/transactionHelper'
import React, { useEffect, useState } from 'react';

import QuickActions from '../utils/quickActions'

import { useIsFocused } from '@react-navigation/native';
import TransactionCard from '../components/TransactionCard'
import BlockHeader from '../components/BlockHeader'
PieCard
import PieCard from '../components/PieCard';
import BalanceCard from '../components/BalanceCard';
import HomeHeader from '../components/HomeHeader';

import { getCurrency } from '../utils/currency';

import routes from '../config/routes';

const Home = ({navigation}) => {
    const focused = useIsFocused();

    const [currency, setCurrency] = useState({});
    const [totalIncomes, setTotalIncomes] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions(setTransactions);
        getCurrency(setCurrency);
        getTotalIncomes(setTotalIncomes);
        getTotalExpenses(setTotalExpenses);
    }, [focused])

    const __update = (item) => {
        navigation.navigate(routes.AddTransaction, {item: item});
    }

    const __delete = (id) => {
        deleteTransaction(id);
        getTransactions(setTransactions);
        getTotalIncomes(setTotalIncomes);
        getTotalExpenses(setTotalExpenses);
    }

    return (
        <View style={styles.container}>

        <HomeHeader />

            <View style={styles.bodyContainer}>
                <SwipeableFlatList
                    data={transactions.slice(0, 5)}
                    maxSwipeDistance={140}
                    shouldBounceOnMount={true}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderQuickActions={({index, item}) => QuickActions(item, __update, __delete)}
                    
                    ListHeaderComponent={() => {
                        return(
                            <View>
                                <View style={{paddingLeft: 20, paddingTop: 10}}>
                                    <BalanceCard currency={currency.symbol} incomes={totalIncomes} expenses={totalExpenses} />
                                </View>
                                <View style={{paddingLeft: 20}}>
                                    <BlockHeader
                                        title='Транзакции'
                                        onPress={() => navigation.navigate(routes.Transactions)} />
                                </View>
                            </View>
                        )
                    }}
                    
                    ListEmptyComponent={() => {
                        return(
                            <View style={styles.emptyContainer}>
                                <Text style={[Typography.TAGLINE, {color: Colors.WHITE, textAlign: 'center'}]}>У вас нету транзакций!</Text>
                            </View>
                        )
                    }}

                    renderItem={({item, index}) => {
                        return <TransactionCard currency={currency.symbol} key={index} transaction={item} />
                    }}

                    ListFooterComponent={() => { 
                        return (
                            // Statistics
                            <View style={{paddingLeft: 20, marginBottom: 20}}>
                                <BlockHeader title='Статистика' />
                                <PieCard incomes={totalIncomes} expenses={totalExpenses} />
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bodyContainer: {
        flex: 1,
        padding: 20,
        paddingLeft: 0,
        paddingBottom: 0,
        backgroundColor: Colors.BLACK
    },
    emptyContainer: {
        padding: 20
    }
});
 

export default Home;