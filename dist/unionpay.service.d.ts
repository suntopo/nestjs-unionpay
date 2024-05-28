import { UnionpayClient } from './unionpay.provider';
import { Unionpay } from '@cubi/unionpay';
export declare class UnionpayService {
    private readonly unionpayClient;
    constructor(unionpayClient: UnionpayClient);
    getClient(name?: string): Unionpay;
}
