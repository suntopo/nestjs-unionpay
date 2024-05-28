import { Injectable, Inject } from '@nestjs/common';
import { UNIONPAY_CLIENT } from './unionpay.constants';
import { UnionpayClient } from './unionpay.provider';
import { Unionpay } from '@cubi/unionpay';

@Injectable()
export class UnionpayService {
  constructor(
    @Inject(UNIONPAY_CLIENT) private readonly unionpayClient: UnionpayClient,
  ) {}

  getClient(name?: string): Unionpay {
    if (!name) {
      name = this.unionpayClient.defaultKey;
    }
    if (!this.unionpayClient.clients.has(name)) {
      throw new Error(`client ${name} not exists`);
    }
    return this.unionpayClient.clients.get(name);
  }
}
