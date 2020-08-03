/* tslint:disable */

/**
 * This file was automatically generated by "Swaxios".
 * It should not be modified by hand.
 */

import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {User} from '../../interfaces/';

export class CreateWithArrayService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /**
   * @param body List of user object
   */
  createUsersWithArrayInput = async (body: Array<User>): Promise<void> => {
    const config: AxiosRequestConfig = {
      data: {
        ...body,
      },
      method: 'post',
      url: '/user/createWithArray',
    };
    await this.apiClient.request(config);
  };
}