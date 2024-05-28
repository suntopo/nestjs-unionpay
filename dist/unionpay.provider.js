"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unionpay_constants_1 = require("./unionpay.constants");
const unionpay_1 = require("@cubi/unionpay");
exports.createClient = () => ({
    provide: unionpay_constants_1.UNIONPAY_CLIENT,
    useFactory: (options) => {
        const clients = new Map();
        if (Array.isArray(options)) {
            for (const item of options) {
                if (item.name) {
                    if (clients.has(item.name)) {
                        throw new Error();
                    }
                    clients.set(item.name, new unionpay_1.Unionpay(item));
                }
                else {
                    clients.set(unionpay_constants_1.DEFAULT_KEY, new unionpay_1.Unionpay(item));
                }
            }
        }
        return {
            default: unionpay_constants_1.DEFAULT_KEY,
            clients,
            size: clients.size,
        };
    },
    inject: [unionpay_constants_1.UNIONPAY_MODULE_OPTIONS],
});
exports.createAsyncClientOptions = (options) => ({
    provide: unionpay_constants_1.UNIONPAY_CLIENT,
    useFactory: options.useFactory,
    inject: options.inject,
});
