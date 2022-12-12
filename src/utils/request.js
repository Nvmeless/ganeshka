import merge from 'lodash/merge'

/**
 * Prepare url to use to request API, replacing tokens in it.
 * @param {String} url the url to call.
 * @param {Object} tokens the tokens to insert into the url.
 * @returns {String} the url to use.
 */
export const prepareUrl = (url, tokens) => {
  if (tokens) {
    return Object.entries(tokens).reduce(
      (acc, [key, value]) => acc.replace(`{${key}}`, value),
      url
    )
  }

  return url
}

export const DEFAULT_REQUEST_PARAMS = Object.freeze({
  api: 'main',
})

/**
 * Execute a request to a remote API.
 * @param {Object} action the store action.
 * @param {String} api the api to use.
 * @param {Object} options some options to execute the request. See DEFAULT_REQUEST_PARAMS for available options.
 * @returns {Object} an object to use to query the remote api.
 * @see DEFAULT_REQUEST_PARAMS
 */
export const request = (action, api = 'main', options = {}) => {
  const { $axios, $config } = action
  const allOptions = merge(DEFAULT_REQUEST_PARAMS, options)

  const baseUrl = $config.apiUrl[api || allOptions.api]

  return {
    get(endpoint, urlTokens, queryParams) {
      const url = prepareUrl(endpoint, urlTokens)
      return $axios.get(url, { baseURL: baseUrl, params: queryParams })
    },
    post(endpoint, urlTokens, data) {
      const url = prepareUrl(endpoint, urlTokens)
      return $axios.post(url, data, { baseURL: baseUrl })
    },
    patch(endpoint, urlTokens, data) {
      const url = prepareUrl(endpoint, urlTokens)
      return $axios.patch(url, data, { baseURL: baseUrl })
    },
    put(endpoint, urlTokens, data) {
      const url = prepareUrl(endpoint, urlTokens)
      return $axios.put(url, data, { baseURL: baseUrl })
    },
    delete(endpoint, urlTokens, queryParams) {
      const url = prepareUrl(endpoint, urlTokens)
      return $axios.delete(url, { baseURL: baseUrl, params: queryParams })
    },
  }
}
