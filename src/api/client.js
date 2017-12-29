import request from 'superagent'

export default class ApiClient {

  get(path) {
    if (path.includes('coinmarketcap')) {
      return request
        .get(path)
    } 
    return request
    .get(path)
        .get(this.createUrl(path))
        .set(this.headers())
  }

  post(path, data = {}) {
    return request
      .post(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  put(path, data = {}) {
    return request
      .put(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  patch(path, data = {}) {
    return request
      .patch(this.createUrl(path))
      .set(this.headers())
      .send(data)
  }

  delete(path) {
    return request
      .delete(this.createUrl(path))
      .set(this.headers())
  }

  headers() {
    let headers = {
      Accept: 'application/json'
    }

    return headers
  }

  // Create a full URL to our API, including the host and path
  createUrl(path) {
    return [this.host, path].join('')
  }
}
