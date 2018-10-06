const { createLogger, format, transports, LoggerInstance } = require('winston');
const { combine, timestamp, prettyPrint } = format;


const level = process.env.LOG_LEVEL || 'debug';

//@ts-ignore
const logger: LoggerInstance = createLogger({
   level,
   format: combine (
      timestamp(),
      prettyPrint()
   ),
   transports: [new transports.Console()]
});

//@ts-ignore
logger.log = (...rest) => console.log(...rest);

export default logger;
