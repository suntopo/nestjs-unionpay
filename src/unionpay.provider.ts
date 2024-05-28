import { UnionpayModuleOptions } from './unionpay.interface';
import {
  UNIONPAY_CLIENT,
  DEFAULT_KEY,
  UNIONPAY_MODULE_OPTIONS,
} from './unionpay.constants';
import { Unionpay } from '@cubi/unionpay';

export interface UnionpayClient {
  defaultKey: string;
  clients: Map<string, any>;
  size: number;
}

export const createClient = () => ({
  provide: UNIONPAY_CLIENT,
  useFactory: (options: UnionpayModuleOptions | UnionpayModuleOptions[]) => {
    const clients = new Map<string, any>();
    if (Array.isArray(options)) {
      for (const item of options) {
        if (item.name) {
          if (clients.has(item.name)) {
            throw new Error();
          }
          clients.set(item.name, new Unionpay(item));
        } else {
          clients.set(DEFAULT_KEY, new Unionpay(item));
        }
      }
    }
    return {
      default: DEFAULT_KEY,
      clients,
      size: clients.size,
    };
  },
  inject: [UNIONPAY_MODULE_OPTIONS],
});

// todo UnionpayModuleAsyncOptions 用这个接口就报错！
export const createAsyncClientOptions = (options: any) => ({
  provide: UNIONPAY_CLIENT,
  useFactory: options.useFactory,
  inject: options.inject,
});
