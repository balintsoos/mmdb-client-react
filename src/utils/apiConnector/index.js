import { connect } from 'react-refetch'
import urlJoin from 'url-join'

const baseUrl = 'https://api-mmdb.herokuapp.com/'

export default connect.defaults({
  buildRequest(options) {
    return new Request(urlJoin(baseUrl, options.url), options)
  }
})
