const server = require('./config/server')
//const nr = require('newrelic')
require('./config/database')
require('./config/routes')(server)
