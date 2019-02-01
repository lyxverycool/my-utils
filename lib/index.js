'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = require('./logger');

Object.defineProperty(exports, 'Logger', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_logger).default;
  }
});

var _i18n = require('./i18n');

Object.defineProperty(exports, 'i18n', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_i18n).default;
  }
});

var _jsBridge = require('./jsBridge');

Object.defineProperty(exports, 'setupWebViewJavascriptBridge', {
  enumerable: true,
  get: function get() {
    return _jsBridge.setupWebViewJavascriptBridge;
  }
});
Object.defineProperty(exports, 'goNativeBridge', {
  enumerable: true,
  get: function get() {
    return _jsBridge.goNativeBridge;
  }
});
Object.defineProperty(exports, 'goWebBridge', {
  enumerable: true,
  get: function get() {
    return _jsBridge.goWebBridge;
  }
});

var _systemWatcher = require('./systemWatcher');

Object.defineProperty(exports, 'systemWatcher', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_systemWatcher).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isMobile = exports.isMobile = function isMobile(request) {
  var ua = request.header['user-agent'];
  return (/mobile|android|iphone|ipad|phone/i.test(ua)
  );
};