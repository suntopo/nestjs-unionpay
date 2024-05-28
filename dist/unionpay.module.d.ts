import { DynamicModule } from '@nestjs/common';
import { UnionpayModuleOptions, UnionpayModuleAsyncOptions } from './unionpay.interface';
export declare class UnionpayModule {
    static forRoot(options: UnionpayModuleOptions): DynamicModule;
    static forRootAsync(options: UnionpayModuleAsyncOptions): DynamicModule;
}
