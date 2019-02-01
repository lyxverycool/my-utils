'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SystemWatcher = function SystemWatcher() {
	var _this = this;

	_classCallCheck(this, SystemWatcher);

	this.startTimer = function () {
		//30秒获取一次系统负载信息
		_this.timer = setInterval(function () {
			if (_this.timerActive) {
				_this.loadAvg = _os2.default.loadavg();
			} else {
				clearInterval(_this.timer);
				_this.timer = 0;
			}
			_this.timerActive = false;
		}, 30 * 1000);
		_this.loadAvg = _os2.default.loadavg();
	};

	this.getLoad = function () {
		_this.timerActive = true;
		if (!_this.timer) {
			_this.startTimer();
		}
		return _this.loadAvg;
	};

	this.isOverload = function () {
		var baseLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.85;

		var loadAvg = _this.getLoad();
		if (loadAvg[0] && loadAvg[0] > baseLine) {
			return true;
		}
		return false;
	};

	this.timer = 0;
	this.timerActive = false;
	this.loadAvg = null;
};

var systemWatcher = new SystemWatcher();

exports.default = systemWatcher;