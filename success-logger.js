'use strict';

const successLogger = (logger, ...params) => data => {
  let doneText = 'Done'

  const logParams = (data && Array.isArray(data))
      ? [data.length, ...params]
      : params

  logParams.forEach(param => doneText += ', %s')

  logger.trace(doneText, ...logParams)

  return data
}

module.exports = successLogger
