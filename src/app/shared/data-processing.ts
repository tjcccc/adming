import * as moment from 'moment';

export const dataProcessing = {
  formatDate: (rawDate: Date): string => {
    return moment(rawDate).format('YYYY-MM-DD');
  }
};
