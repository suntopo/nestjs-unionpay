"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UnionpayModule_1;
"use strict";
const common_1 = require("@nestjs/common");
const unionpay_provider_1 = require("./unionpay.provider");
const unionpay_service_1 = require("./unionpay.service");
const unionpay_constants_1 = require("./unionpay.constants");
let UnionpayModule = UnionpayModule_1 = class UnionpayModule {
    static forRoot(options) {
        return {
            module: UnionpayModule_1,
            providers: [
                unionpay_provider_1.createClient(),
                { provide: unionpay_constants_1.UNIONPAY_MODULE_OPTIONS, useValue: options },
            ],
            exports: [unionpay_service_1.UnionpayService],
        };
    }
    static forRootAsync(options) {
        return {
            module: UnionpayModule_1,
            providers: [unionpay_provider_1.createClient(), unionpay_provider_1.createAsyncClientOptions(options)],
            exports: [unionpay_service_1.UnionpayService],
        };
    }
};
UnionpayModule = UnionpayModule_1 = __decorate([
    common_1.Module({
        providers: [unionpay_service_1.UnionpayService],
        exports: [unionpay_service_1.UnionpayService],
    })
], UnionpayModule);
exports.UnionpayModule = UnionpayModule;
