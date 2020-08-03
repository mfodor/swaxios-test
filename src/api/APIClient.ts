/* tslint:disable */

/**
 * This file was automatically generated by "Swaxios".
 * It should not be modified by hand.
 */

import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {PetService, UserService} from './rest/';
import {
  FindByStatusService,
  FindByTagsService,
  UploadImageService,
} from './rest/pet/';
import {InventoryService, OrderService} from './rest/store/';
import {
  CreateWithArrayService,
  CreateWithListService,
  LoginService,
  LogoutService,
} from './rest/user/';

/**
 * This is a sample server Petstore server.  You can find out more about     Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).      For this sample, you can use the api key `special-key` to test the authorization     filters.
 */
export class APIClient {
  private readonly httpClient: AxiosInstance;

  constructor(baseURL: string);
  constructor(config: AxiosRequestConfig);
  constructor(configOrBaseURL: AxiosRequestConfig | string) {
    if (typeof configOrBaseURL === 'string') {
      configOrBaseURL = {baseURL: configOrBaseURL};
    }

    this.httpClient = axios.create(configOrBaseURL);
  }

  get rest() {
    return {
      petService: new PetService(this.httpClient),
      userService: new UserService(this.httpClient),
      pet: {
        findByStatusService: new FindByStatusService(this.httpClient),
        findByTagsService: new FindByTagsService(this.httpClient),
        uploadImageService: new UploadImageService(this.httpClient),
      },
      store: {
        inventoryService: new InventoryService(this.httpClient),
        orderService: new OrderService(this.httpClient),
      },
      user: {
        createWithArrayService: new CreateWithArrayService(this.httpClient),
        createWithListService: new CreateWithListService(this.httpClient),
        loginService: new LoginService(this.httpClient),
        logoutService: new LogoutService(this.httpClient),
      },
    };
  }

  get defaults() {
    return this.httpClient.defaults;
  }

  get interceptors() {
    return this.httpClient.interceptors;
  }
}