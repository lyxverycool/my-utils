export { default as Logger } from './logger'

export { default as i18n } from './i18n'

export { setupWebViewJavascriptBridge, goNativeBridge, goWebBridge } from './jsBridge'

export { default as systemWatcher } from './systemWatcher'

export const isMobile = request => {
  const ua = request.header['user-agent']
  return /mobile|android|iphone|ipad|phone/i.test(ua)
}
