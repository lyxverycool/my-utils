'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var i18nModule = function i18nModule() {
	var _this = this;

	_classCallCheck(this, i18nModule);

	this.init = function (locales) {
		_this.locales = locales;
	};

	this.getText = function (key, module, data, def) {
		var langText = _this.locales[module] && _this.locales[module][key] || def;

		if (data && langText) {
			for (var x in data) {
				var reg = new RegExp('{{' + x + '}}', 'igm');
				langText = langText.replace(reg, data[x]);
			}
		}
		return langText;
	};

	this.locales = {};
}

//导入当前语种语言包


/**
 * 获取对应翻译文案
 * @param  {[type]} key    获取翻译的key
 * @param  {[type]} module 语言包模块名
 * @param  {[type]} data   参数
 * @param  {[type]} def    默认文案
 * @return {[type]}        翻译文案
 */
;

var i18n = new i18nModule();

exports.default = i18n;