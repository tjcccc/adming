import * as momentLibrary from 'moment';

const moment = momentLibrary;

export const dataConverter = {

  // Format a raw date to 'YYYY-MM-DD' format.
  formatDate: (rawDate: Date): string => {
    return moment(rawDate).format('YYYY-MM-DD');
  },

  // Make an empty array with specific length.
  makeArrayForLoop: (length: number): Array<any> => {
    return new Array(length);
  }
};
