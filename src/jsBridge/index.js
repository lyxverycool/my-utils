export const setupWebViewJavascriptBridge = callback => {
  if( !window || !document ){//服务端渲染，无window document对象，仅在客户端调用
    return false
  }
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge)
  } else {
    document.addEventListener(
      'WebViewJavascriptBridgeReady',
      function () {
        callback(WebViewJavascriptBridge)
      },
      false
    )
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  var WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}

export const goNativeBridge = (event, data, callback) => {
  setupWebViewJavascriptBridge(function (bridge) {
    bridge.callHandler(event, data, function () {
      callback && callback()
    })
  })
}

export const goWebBridge = (event, fn) => {
  setupWebViewJavascriptBridge(function (bridge) {
    bridge.registerHandler(event, function (data, responseCallback) {
      fn && fn()
      responseCallback(event, data)
    })
  })
}