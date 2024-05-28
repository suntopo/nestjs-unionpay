import { ModuleMetadata } from '@nestjs/common/interfaces';
export interface UnionpayModuleOptions {
    name?: string;
}
export interface UnionpayModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useFactory?: (...args: any[]) => any;
    inject?: any[];
}
