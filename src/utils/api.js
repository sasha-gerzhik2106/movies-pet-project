import qs from 'query-string';

const Api = {
  baseUrl: 'http://134.209.226.244:3456',
  defaultHeaders: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  getDefaultOptions(options = {}) {
    return {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...(options.headers || {}),
      },
    };
  },
  get(pathname, params, options) {
    return fetch(
      qs.stringifyUrl({ url: this.baseUrl + pathname, query: params }),
      {
        ...this.getDefaultOptions(options),
        method: 'GET',
      }
    );
  },
  post(pathname, body, options = {}) {
    return fetch(this.baseUrl + pathname, {
      ...this.getDefaultOptions(options),
      body,
      method: 'POST',
    });
  },
  put(pathname, body, options = {}) {
    return fetch(this.baseUrl + pathname, {
      ...this.getDefaultOptions(options),
      body,
      method: 'PUT',
    });
  },
  patch(pathname, body, options = {}) {
    return fetch(this.baseUrl + pathname, {
      ...this.getDefaultOptions(options),
      body,
      method: 'PATCH',
    });
  },
  delete(pathname, options = {}) {
    return fetch(this.baseUrl + pathname, {
      ...this.getDefaultOptions(options),
      method: 'DELETE',
    });
  },
};

export default Api;
