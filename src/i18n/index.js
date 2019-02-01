class i18nModule {
	constructor() {
    this.locales = {}
  }

  //导入当前语种语言包
	init = locales => {
		this.locales = locales
	}

	/**
	 * 获取对应翻译文案
	 * @param  {[type]} key    获取翻译的key
	 * @param  {[type]} module 语言包模块名
	 * @param  {[type]} data   参数
	 * @param  {[type]} def    默认文案
	 * @return {[type]}        翻译文案
	 */
	getText = ( key, module, data, def ) => {
		let langText = this.locales[module] && this.locales[module][key] || def

	  if (data && langText) {
	    for (let x in data) {
	      let reg = new RegExp('{{' + x + '}}', 'igm')
	      langText = langText.replace(reg, data[x])
	    }
	  }
	  return langText
	}
}

const i18n = new i18nModule()

export default i18n