'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};

  sourceString
    .split(';')
    .filter((item) => item.includes(':'))
    .forEach((item) => {
      const [property, ...valueParts] = item.split(':');
      const value = valueParts.join(':').trim();

      styleObject[property.trim()] = value;
    });

  return styleObject;
}

module.exports = convertToObject;
