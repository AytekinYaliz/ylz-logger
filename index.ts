import * as winston from "winston";


const level = process.env.LOG_LEVEL || 'debug';

const logger: winston.LoggerInstance = new winston.Logger({
   transports: [
      new winston.transports.Console({
         level: level,
         timestamp: function () {
            return new Date().toISOString();
         }
      })
   ]
});

export = logger
