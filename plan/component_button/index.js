(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control3: function (elem) {},
    doAction_uiControl17: function (data, elem) {},
    getTemplate_uiControl17: function () {
      var selfTemplate = "";
      return "\"use strict\";";
    },
    getData_control17: function (elem) {},
    doAction_uiControl15: function (data, elem) {
      if (data.eventType === 'back') {
        window.top.history.back();
      }
    },
    getTemplate_uiControl15: function () {
      var selfTemplate = "export default class extends React.Component{\n  \n  handleClick = () => {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'back'\n      });\n    }\n  };\n  \n\trender() {\n  \treturn <AMUI.Button onClick={this.handleClick}>返回</AMUI.Button>;\n  }\n};";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    var _Object$getPrototypeO;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleClick = function () {\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: 'back'\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        AMUI.Button,\n        { onClick: this.handleClick },\n        '返回'\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;\n;";
    },
    getData_control18: function (elem) {
      
    },
    doAction_uiControl6: function (data, elem) {
      
    },
    getTemplate_uiControl6: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"按钮组件案例\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"按钮组件案例\" });\n};";
    }
  });
})(window, ysp);