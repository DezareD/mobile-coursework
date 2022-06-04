import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('db.MobileDb');

export default db;