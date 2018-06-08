require('jsdom-global')()
require('babel-polyfill')
global.expect = require('expect')
const utils = require('@vue/test-utils')
global.mount = utils.mount
global.shallowMount = utils.shallowMount
require('chai').should()
global.sinon = require('sinon')
