'use strict'

const appRoot = require('app-root-path');

class ApplicationPath {
  static get PUBLIC(){
    return appRoot + '/public';
  }
}

module.exports = ApplicationPath

