/** Generate by swagger-axios-codegen */
// tslint:disable
/* eslint-disable */
import axiosStatic, { AxiosInstance } from 'axios';

const basePath = '/v2';

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  url = basePath + url;
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount: number;
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount!: number;
}

// customer definition
// empty

export class PetService {
  /**
   * Add a new pet to the store
   */
  static addPet(
    params: {
      /** Pet object that needs to be added to the store */
      body: Pet;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/pet';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an existing pet
   */
  static updatePet(
    params: {
      /** Pet object that needs to be added to the store */
      body: Pet;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/pet';

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Finds Pets by status
   */
  static findPetsByStatus(
    params: {
      /** Status values that need to be considered for filter */
      status: string[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Pet[]> {
    return new Promise((resolve, reject) => {
      let url = '/pet/findByStatus';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { status: params['status'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Finds Pets by tags
   */
  static findPetsByTags(
    params: {
      /** Tags to filter by */
      tags: string[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Pet[]> {
    return new Promise((resolve, reject) => {
      let url = '/pet/findByTags';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { tags: params['tags'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Find pet by ID
   */
  static getPetById(
    params: {
      /** ID of pet to return */
      petId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Pet> {
    return new Promise((resolve, reject) => {
      let url = '/pet/{petId}';
      url = url.replace('{petId}', params['petId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Updates a pet in the store with form data
   */
  static updatePetWithForm(
    params: {
      /** ID of pet that needs to be updated */
      petId: number;
      /** Updated name of the pet */
      name?: string;
      /** Updated status of the pet */
      status?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/pet/{petId}';
      url = url.replace('{petId}', params['petId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Deletes a pet
   */
  static deletePet(
    params: {
      /**  */
      apiKey?: string;
      /** Pet id to delete */
      petId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/pet/{petId}';
      url = url.replace('{petId}', params['petId'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * uploads an image
   */
  static uploadFile(
    params: {
      /** ID of pet to update */
      petId: number;
      /** Additional data to pass to server */
      additionalMetadata?: string;
      /** file to upload */
      file?: any;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ApiResponse> {
    return new Promise((resolve, reject) => {
      let url = '/pet/{petId}/uploadImage';
      url = url.replace('{petId}', params['petId'] + '');

      const configs: IRequestConfig = getConfigs('post', 'multipart/form-data', url, options);

      let data = null;
      data = new FormData();
      if (params['additionalMetadata']) {
        data.append('additionalMetadata', params['additionalMetadata'] as any);
      }

      if (params['file']) {
        data.append('file', params['file'] as any);
      }

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class StoreService {
  /**
   * Returns pet inventories by status
   */
  static getInventory(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/store/inventory';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Place an order for a pet
   */
  static placeOrder(
    params: {
      /** order placed for purchasing the pet */
      body: Order;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Order> {
    return new Promise((resolve, reject) => {
      let url = '/store/order';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Find purchase order by ID
   */
  static getOrderById(
    params: {
      /** ID of pet that needs to be fetched */
      orderId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Order> {
    return new Promise((resolve, reject) => {
      let url = '/store/order/{orderId}';
      url = url.replace('{orderId}', params['orderId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete purchase order by ID
   */
  static deleteOrder(
    params: {
      /** ID of the order that needs to be deleted */
      orderId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/store/order/{orderId}';
      url = url.replace('{orderId}', params['orderId'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class UserService {
  /**
   * Create user
   */
  static createUser(
    params: {
      /** Created user object */
      body: User;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Creates list of users with given input array
   */
  static createUsersWithArrayInput(
    params: {
      /** List of user object */
      body: User[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/createWithArray';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Creates list of users with given input array
   */
  static createUsersWithListInput(
    params: {
      /** List of user object */
      body: User[];
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/createWithList';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Logs user into the system
   */
  static loginUser(
    params: {
      /** The user name for login */
      username: string;
      /** The password for login in clear text */
      password: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = '/user/login';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { username: params['username'], password: params['password'] };
      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Logs out current logged in user session
   */
  static logoutUser(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/logout';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Get user by user name
   */
  static getUserByName(
    params: {
      /** The name that needs to be fetched. Use user1 for testing.  */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<User> {
    return new Promise((resolve, reject) => {
      let url = '/user/{username}';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Updated user
   */
  static updateUser(
    params: {
      /** name that need to be updated */
      username: string;
      /** Updated user object */
      body: User;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/{username}';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete user
   */
  static deleteUser(
    params: {
      /** The name that needs to be deleted */
      username: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = '/user/{username}';
      url = url.replace('{username}', params['username'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export interface Order {
  /**  */
  id: number;

  /**  */
  petId: number;

  /**  */
  quantity: number;

  /**  */
  shipDate: Date;

  /** Order Status */
  status: EnumOrderStatus;

  /**  */
  complete: boolean;
}

export interface Category {
  /**  */
  id: number;

  /**  */
  name: string;
}

export interface User {
  /**  */
  id: number;

  /**  */
  username: string;

  /**  */
  firstName: string;

  /**  */
  lastName: string;

  /**  */
  email: string;

  /**  */
  password: string;

  /**  */
  phone: string;

  /** User Status */
  userStatus: number;
}

export interface Tag {
  /**  */
  id: number;

  /**  */
  name: string;
}

export interface Pet {
  /**  */
  id: number;

  /**  */
  category: Category;

  /**  */
  name: string;

  /**  */
  photoUrls: string[];

  /**  */
  tags: Tag[];

  /** pet status in the store */
  status: EnumPetStatus;
}

export interface ApiResponse {
  /**  */
  code: number;

  /**  */
  type: string;

  /**  */
  message: string;
}
export enum EnumOrderStatus {
  'placed' = 'placed',
  'approved' = 'approved',
  'delivered' = 'delivered'
}
export enum EnumPetStatus {
  'available' = 'available',
  'pending' = 'pending',
  'sold' = 'sold'
}
