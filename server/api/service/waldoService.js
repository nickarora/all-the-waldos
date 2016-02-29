import WaldoMap from '../models/WaldoMap';

export const getDefaultMap = (callback) => {
  WaldoMap.findOne({ mapName: 'ww1' }, callback);
};
