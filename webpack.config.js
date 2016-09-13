const path = require('path')
const createConfig = require('hjs-webpack')

const join = path.join

// Paths
const root = path.resolve(__dirname)
const src = join(root, 'src')
const dist = join(root, 'dist')
const nodeModules = join(root, 'node_modules')

// Env
const NODE_ENV = process.env.NODE_ENV
const isDev = NODE_ENV === 'development'

// config
const config = createConfig({
  isDev,
  in: join(src, 'app.js'),
  out: dist,
  clearBeforeBuild: true
})

// alias
config.resolve.root = [src, nodeModules]
config.resolve.alias = {
  components: join(src, 'components'),
  router: join(src, 'router')
}

module.exports = config
