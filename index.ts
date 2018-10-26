const { createLogger, format, transports, LoggerInstance } = require('winston');
const { combine, timestamp, prettyPrint, label } = format;


const level = process.env.LOG_LEVEL || 'debug';

// @ts-ignore
const logger = createLogger({
   level,
   format: combine(
      timestamp(),
      format.json()
   ),
   transports: [new transports.Console()]
});

//@ts-ignore
logger.log = (...rest) => console.log(`${new Date().toISOString()} - log - `, ...rest);

export default logger;
