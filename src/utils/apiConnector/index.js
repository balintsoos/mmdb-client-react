import { connect } from 'react-refetch'
import urlJoin from 'url-join'

const baseUrl = 'http://localhost:3333'

export default connect.defaults({
  buildRequest(options) {
    return new Request(urlJoin(baseUrl, options.url), options)
  }
})
