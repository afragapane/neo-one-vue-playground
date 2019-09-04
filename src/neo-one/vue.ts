/* @hash d821d712b022cd0d29abf199a289a0f0 */
// tslint:disable
/* eslint-disable */
import { Client, DeveloperClients, UserAccountProviders } from '@neo-one/client';
import { Contracts } from './contracts';
import { DefaultUserAccountProviders } from './client';

export class ContractsService<TUserAccountProviders extends UserAccountProviders<any> = DefaultUserAccountProviders> {
  public client: Client<TUserAccountProviders>;
  public developerClients: DeveloperClients;
  public token: Contracts['token'];
  public ico: Contracts['ico'];

  constructor() {
    this.setHost();
  }

  public setHost(host?: string) {
    this.client = createClient(host);
    this.developerClients = createDeveloperClients(host);
    this.token = createTokenSmartContract(this.client);
    this.ico = createICOSmartContract(this.client);
  }
}

export const instance: ContractsService;
