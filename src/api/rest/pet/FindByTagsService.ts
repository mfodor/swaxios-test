/* tslint:disable */

/**
 * This file was automatically generated by "Swaxios".
 * It should not be modified by hand.
 */

import {AxiosInstance, AxiosRequestConfig} from 'axios';
import {Pet} from '../../interfaces/';

export class FindByTagsService {
  private readonly apiClient: AxiosInstance;

  constructor(apiClient: AxiosInstance) {
    this.apiClient = apiClient;
  }

  /**
   * @param tags Tags to filter by
   */
  findPetsByTags = async (params?: {tags: {}}): Promise<Array<Pet>> => {
    const config: AxiosRequestConfig = {
      method: 'get',
      params,
      url: '/pet/findByTags',
    };
    const response = await this.apiClient.request<Array<Pet>>(config);
    return response.data;
  };
}
