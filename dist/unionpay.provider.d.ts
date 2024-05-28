import { UnionpayModuleOptions } from './unionpay.interface';
export interface UnionpayClient {
    defaultKey: string;
    clients: Map<string, any>;
    size: number;
}
export declare const createClient: () => {
    provide: symbol;
    useFactory: (options: UnionpayModuleOptions | UnionpayModuleOptions[]) => {
        default: string;
        clients: Map<string, any>;
        size: number;
    };
    inject: symbol[];
};
export declare const createAsyncClientOptions: (options: any) => {
    provide: symbol;
    useFactory: any;
    inject: any;
};
