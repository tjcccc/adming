import * as moment from 'moment';

export const dataConverter = {

  // Format a raw date to 'YYYY-MM-DD' format.
  formatDate: (rawDate: Date): string => {
    return moment(rawDate).format('YYYY-MM-DD');
  },

  // Maka an empty array with specific length.
  makeArrayForLoop: (length: number): Array<any> => {
    return new Array(length);
  }
};
