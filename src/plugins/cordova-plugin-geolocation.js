const vha = {
  install(Vue, options) {
    document.addEventListener('deviceready', () => {
      try {
        if (typeof navigator.geolocation != 'undefined') {
          Vue.prototype.$vha.geolocation = navigator.geolocation
        } else {
          throw "cordova-plugin-geolocation undefined"
        }
      }
      catch (err) {
        console.log(err, err.message)
      }
    }, false)
  }
}
export default vha