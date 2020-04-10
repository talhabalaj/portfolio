webpackHotUpdate("styles",{

/***/ "./components/Profile.module.scss":
/*!****************************************!*\
  !*** ./components/Profile.module.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"profileContainer":"_3pZlYp6DS1ND1GCkyjqFib","particles":"_2xqj77HUdJloKS8Srv6oic","profile":"g6HHgEHCqA0ZOB8Au3BO1","subHeading":"_1-pOiQ9b7_WA3AZe1aXm5B"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1586486585549");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.47f59461513afff26212.hot-update.js.map