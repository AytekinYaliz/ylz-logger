"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = {
    error: (...params) => console.error(`${new Date().toISOString()} - error:`, ...params),
    debug: (...params) => {
        if (process.env.NODE_ENV !== "test" && process.env.NODE_ENV !== "TEST") {
            console.debug(`${new Date().toISOString()} - debug:`, ...params);
        }
    },
    info: (...params) => console.info(`${new Date().toISOString()} - info:`, ...params),
    log: (...params) => console.log(`${new Date().toISOString()} - log:`, ...params),
    warn: (...params) => console.warn(`${new Date().toISOString()} - warn:`, ...params)
};
exports.default = logger;
//# sourceMappingURL=index.js.map