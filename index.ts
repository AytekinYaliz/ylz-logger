// const { createLogger, format, transports, LoggerInstance } = require('winston');
// const { combine, timestamp, prettyPrint, label } = format;


// const level = process.env.LOG_LEVEL || 'debug';
//
// // @ts-ignore
// const logger = createLogger({
//    level,
//    format: combine(
//       timestamp(),
//       format.json()
//    ),
//    transports: [new transports.Console()]
// });


const logger = {
   info: (...params) => console.info(`${new Date().toISOString()} - info: `, ...params),
   log: (...params) => console.log(`${new Date().toISOString()} - log: `, ...params),
   debug: (...params) => console.debug(`${new Date().toISOString()} - debug: `, ...params),
   error: (...params) => console.error(`${new Date().toISOString()} - error: `, ...params)
}


export default logger;
