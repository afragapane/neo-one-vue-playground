/* @hash d821d712b022cd0d29abf199a289a0f0 */
// tslint:disable
/* eslint-disable */
import { Client, DeveloperClients } from '@neo-one/client';
import { createClient, createDeveloperClients } from './client';
import { Contracts } from './contracts';
import { createTokenSmartContract } from './Token/contract';
import { createICOSmartContract } from './ICO/contract';

export class ContractsService {
  public client: Client;
  public developerClients: DeveloperClients;
  public token: Contracts['token'];
  public ico: Contracts['ico'];

  constructor() {
    this.client = createClient();
    this.developerClients = createDeveloperClients();
    this.token = createTokenSmartContract(this.client);
    this.ico = createICOSmartContract(this.client);
  }

  public setHost(host?: string) {
    this.client = createClient(host);
    this.developerClients = createDeveloperClients(host);
    this.token = createTokenSmartContract(this.client);
    this.ico = createICOSmartContract(this.client);
  }
}

export const instance = new ContractsService();