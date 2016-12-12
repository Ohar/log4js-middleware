'use strict'

const errorLogger   = require('./error-logger')
    , successLogger = require('./success-logger')

const log4jsMiddleware = {
  errorLogger:   errorLogger,
  successLogger: successLogger,
}

module.exports = log4jsMiddleware
