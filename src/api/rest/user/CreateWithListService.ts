/* tslint:disable */

/**
 * This file was automatically generated by "Swaxios".
 * It should not be modified by hand.
 */

import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {User} from '../../interfaces/';

export class CreateWithListService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /**
   * @param body List of user object
   */
  createUsersWithListInput = async (body: Array<User>): Promise<void> => {
    const config: AxiosRequestConfig = {
      data: {
        ...body,
      },
      method: 'post',
      url: '/user/createWithList',
    };
    await this.apiClient.request(config);
  };
}