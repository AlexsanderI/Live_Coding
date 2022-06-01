const records = [1, 2, 3];

const createLogger = () => {
  const records = [];

  return {
    warn(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'warn',
      });
    },
    error(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'error',
      });
    },
    log(message) {
      records.push({
        message,
        dateTime: new Date(),
        type: 'log',
      });
    },
    getRecords(type) {
      return (type ? records.filter(el => el.type === type) : records).sort(
        (a, b) => b.dateTime - a.dateTime,
      );
    },
  };
};

// examples
const logger1 = createLogger();
logger1.log('User logged in');
logger1.warn('User is tring to ented restricted page');
logger1.log('User logged out');
logger1.error('Unexpected error on the site');

console.log(logger1.getRecords());
