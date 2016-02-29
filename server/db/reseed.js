import mongoose from 'mongoose';
import dbConnection from '../db_connection';
import WaldoMap from '../api/models/WaldoMap';
import seed from './waldoMapSeed';

mongoose.connect(dbConnection);

WaldoMap.collection.drop(() => {
  WaldoMap.collection.insert(seed, (err) => {
    if (err) throw err;
    mongoose.connection.close();
  });
});
