import * as winston from "winston";


const level = process.env.LOG_LEVEL || 'debug';

//@ts-ignore
const logger: winston.LoggerInstance = new winston.Logger({
   transports: [
      new winston.transports.Console({
         level,
         //@ts-ignore
         timestamp: () => {
            return new Date().toISOString();
         }
      })
   ]
});

export default logger;
