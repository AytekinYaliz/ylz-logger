const reset = "\x1b[0m";
const bright = "\x1b[1m";
const dim = "\x1b[2m";
const underscore = "\x1b[4m";
const blink = "\x1b[5m";
const reverse = "\x1b[7m";
const hidden = "\x1b[8m";

const fgBlack = "\x1b[30m";
const fgRed = "\x1b[31m";
const fgGreen = "\x1b[32m";
const fgYellow = "\x1b[33m";
const fgBlue = "\x1b[34m";
const fgMagenta = "\x1b[35m";
const fgCyan = "\x1b[36m";
const fgWhite = "\x1b[37m";

const bgBlack = "\x1b[40m";
const bgRed = "\x1b[41m";
const bgGreen = "\x1b[42m";
const bgYellow = "\x1b[43m";
const bgBlue = "\x1b[44m";
const bgMagenta = "\x1b[45m";
const bgCyan = "\x1b[46m";
const bgWhite = "\x1b[47m";

export function error(...params: any[]) {
  console.error(`${new Date().toISOString()} - ${fgRed}error${reset}:`, ...params);
}

export function debug(...params: any[]) {
  console.debug(`${new Date().toISOString()} - ${fgCyan}debug${reset}:`, ...params);
}

export function info(...params: any[]) {
  console.info(`${new Date().toISOString()} - ${fgYellow}info${reset}:`, ...params);
}

export function log(...params: any[]) {
  console.log(`${new Date().toISOString()} - log:`, ...params);
}

export function warn(...params: any[]) {
  console.warn(`${new Date().toISOString()} - ${fgBlue}warn${reset}:`, ...params);
}

// import * as winston from "winston";
// const level = process.env.LOG_LEVEL || 'debug';
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
// export = logger
