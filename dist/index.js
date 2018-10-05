"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const level = process.env.LOG_LEVEL || 'debug';
//@ts-ignore
const logger = winston.createLogger({
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
exports.default = logger;
//# sourceMappingURL=index.js.map