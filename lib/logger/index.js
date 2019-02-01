'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _log4js = require('log4js');

var _log4js2 = _interopRequireDefault(_log4js);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Logger = function Logger(logPath) {
  var isDebugger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var logConfig = {
    appenders: {
      app: {
        type: 'dateFile',
        filename: logPath,
        pattern: '.yyyy-MM-dd-hh'
      }
    },
    categories: {
      default: {
        appenders: ['app'],
        level: 'info'
      }
    },
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID'
  };

  var logger = null;

  if (isDebugger) {
    logger = console;
  } else {
    _log4js2.default.configure(logConfig);
    logger = _log4js2.default.getLogger();
  }

  return logger;
};

exports.default = Logger;