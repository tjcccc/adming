import * as moment from 'moment';

export const dataConverter = {
  formatDate: (rawDate: Date): string => {
    return moment(rawDate).format('YYYY-MM-DD');
  }
};
