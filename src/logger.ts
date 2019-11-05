// import * as winston from "winston";
//
// const level = process.env.LOG_LEVEL || 'debug';
//
// const logger: winston.LoggerInstance = new winston.Logger({
//    transports: [
//       new winston.transports.Console({
//          level: level,
//          timestamp: function () {
//             return new Date().toISOString();
//          }
//       })
//    ]
// });
//
// export = logger

export function error(...params: any[]) {
  console.error(`${new Date().toISOString()} - error:`, ...params);
}

export function debug(...params: any[]) {
  if (process.env.NODE_ENV !== "test" && process.env.NODE_ENV !== "TEST") {
    console.debug(`${new Date().toISOString()} - debug:`, ...params);
  }
}

export function info(...params: any[]) {
  console.info(`${new Date().toISOString()} - info:`, ...params);
}

export function log(...params: any[]) {
  console.log(`${new Date().toISOString()} - log:`, ...params);
}

export function warn(...params: any[]) {
  console.warn(`${new Date().toISOString()} - warn:`, ...params);
}
