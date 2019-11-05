"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function error(...params) {
    console.error(`${new Date().toISOString()} - error:`, ...params);
}
exports.error = error;
function debug(...params) {
    if (process.env.NODE_ENV !== "test" && process.env.NODE_ENV !== "TEST") {
        console.debug(`${new Date().toISOString()} - debug:`, ...params);
    }
}
exports.debug = debug;
function info(...params) {
    console.info(`${new Date().toISOString()} - info:`, ...params);
}
exports.info = info;
function log(...params) {
    console.log(`${new Date().toISOString()} - log:`, ...params);
}
exports.log = log;
function warn(...params) {
    console.warn(`${new Date().toISOString()} - warn:`, ...params);
}
exports.warn = warn;
//# sourceMappingURL=logger.js.map