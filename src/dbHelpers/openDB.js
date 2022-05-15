import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase(
    {
        name: 'MobileWallet',
        location: 'default'
    },
    () => {
        console.log('[ DB ]: connected');
    },
    error => {
        console.log('[ DB ]:' + error);
    }
);

export default db;