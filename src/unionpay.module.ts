import { DynamicModule, Module } from '@nestjs/common';
import {
  UnionpayModuleOptions,
  UnionpayModuleAsyncOptions,
} from './unionpay.interface';
import { createClient, createAsyncClientOptions } from './unionpay.provider';
import { UnionpayService } from './unionpay.service';
import { UNIONPAY_MODULE_OPTIONS } from './unionpay.constants';

@Module({
  providers: [UnionpayService],
  exports: [UnionpayService],
})
export class UnionpayModule {
  static forRoot(options: UnionpayModuleOptions): DynamicModule {
    return {
      module: UnionpayModule,
      providers: [
        createClient(),
        { provide: UNIONPAY_MODULE_OPTIONS, useValue: options },
      ],
      exports: [UnionpayService],
    };
  }

  static forRootAsync(options: UnionpayModuleAsyncOptions): DynamicModule {
    return {
      module: UnionpayModule,
      providers: [createClient(), createAsyncClientOptions(options)],
      exports: [UnionpayService],
    };
  }
}
