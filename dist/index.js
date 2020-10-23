'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ":root {\n  --white: #fff;\n  --grey: #aaa;\n  --grey-light: #e9e9ea;\n  --grey-dark: #555;\n  --red: rgb(242, 95, 88);\n  --yellow: rgb(251, 190, 60);\n  --green: rgb(88, 203, 66);\n}\n\n.browser-frame {\n  border: 2px solid #e9e9ea;\n  border: 2px solid var(--grey-light);\n  border-radius: 5px;\n}\n.browser-frame__top {\n  background: #e9e9ea;\n  background: var(--grey-light);\n  height: 42px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 6px 12px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.browser-frame--bottom-crop {\n  border-bottom: 0;\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.browser-frame__button {\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  margin-right: 8px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  cursor: pointer;\n}\n\n.browser-frame__button--red {\n  background: rgb(242, 95, 88);\n  background: var(--red);\n}\n.browser-frame__button--red:hover {\n  background: #ffcccc;\n}\n\n.browser-frame__button--yellow {\n  background: rgb(251, 190, 60);\n  background: var(--yellow);\n}\n.browser-frame__button--yellow:hover {\n  background: yellow;\n}\n.browser-frame__button--green {\n  background: rgb(88, 203, 66);\n  background: var(--green);\n}\n.browser-frame__button--green:hover {\n  background: greenyellow;\n}\n.browser-frame__address {\n  text-align: left;\n  background: #fff;\n  background: var(--white);\n  height: 26px;\n  border-radius: 13px;\n  line-height: 26px;\n  font-size: 14px;\n  color: #555;\n  color: var(--grey-dark);\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 8px;\n  margin-right: 15px;\n  padding: 0 15px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.browser-frame__burger {\n  width: 17px;\n  margin-left: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  height: 16px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.browser-frame__burger-line {\n  height: 3px;\n  background: #aaa;\n  background: var(--grey);\n}\n";
styleInject(css);

var index = (function (_a) {
    var url = _a.url, padding = _a.padding, visible = _a.visible, setVisible = _a.setVisible, children = _a.children;
    return (React.createElement("div", null, visible && (React.createElement("div", { className: "browser-frame" },
        React.createElement("div", { className: "browser-frame__top" },
            React.createElement("div", { className: "browser-frame__button browser-frame__button--red", onClick: function () { return setVisible(false); } }),
            React.createElement("div", { className: "browser-frame__button browser-frame__button--yellow" }),
            React.createElement("div", { className: "browser-frame__button browser-frame__button--green" }),
            url && (React.createElement("div", { className: "browser-frame__address", "aria-hidden": true }, url)),
            React.createElement("div", { className: "browser-frame__burger" },
                React.createElement("span", { className: "browser-frame__burger-line" }),
                React.createElement("span", { className: "browser-frame__burger-line" }),
                React.createElement("span", { className: "browser-frame__burger-line" }))),
        React.createElement("div", { className: "browser-frame__body", style: { padding: padding ? padding : "" } }, children)))));
});

exports.default = index;
//# sourceMappingURL=index.js.map
