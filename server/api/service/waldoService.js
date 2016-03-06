import WaldoMap from '../models/WaldoMap';

export const getMaps = (callback) => {
  WaldoMap.find(callback);
};
