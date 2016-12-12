const errorLogger = (logger, ...params) => err => {
  logger.error('Fail, ', err)

  params.forEach(
    (param, i) => logger.debug(`param ${i}`, param)
  )
}

module.exports = errorLogger
