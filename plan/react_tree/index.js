(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {},
    doAction_uiControl0: function (data, elem) {},
    getTemplate_uiControl0: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"树形组件\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"树形组件\" });\n};";
    },
    getData_control1: function (elem) {
      var uls = elem.querySelectorAll('ul');
uls = [].slice.call(uls).map(function (index) {
  return [].slice.call(index.querySelectorAll("li")).map(function (index) {
    return index.textContent;
  });
});
var divs = elem.querySelectorAll("div");
divs = [].slice.call(divs).map(function (index) {
  return index.textContent;
});
var arr = [divs, uls];
return arr;

    },
    doAction_uiControl1: function (data, elem) {
      if (data.eventType === 'cl') {
  console.log(data.dataCustom);
  elem.children;
  console.log();
  var nowTag = [].slice.call(elem.querySelectorAll("div")).slice(1);

  if (data.dataCustom[0] === -1) {
    [].slice.call(elem.querySelectorAll("div")).shift().click();
  } else {
    var num0 = data.dataCustom[0];
    var num1 = data.dataCustom[1];
    var content;

    if (num1 === undefined) {
      content = nowTag[num0];
    }

    console.log(content);

    if (content) {
      content.click();
    }
  }
}

    },
    getTemplate_uiControl1: function () {
      var selfTemplate = "import React from 'react';\nimport {Tree} from \"ysp-interior-components\"\n\nexport default class extends React.Component{\n  \n    click = (target,location) => {                                \n  \tvar h = this.props.customHandler;          \n    if(h) {                                    \n      h({\n        data:location,\n        eventType:'cl'                         \n      \t})\n    \t}\n  \t}\n  \n    render() {\n\n\n    var data=this.props.data.customData;\n      var uls=data[1];\n      var divs=data[0]\n      \n\t\t  var array = [\n        {\n            content: divs[1],\n          \topen:true,\n            branch:[\n                {\n                    content:uls[0][0]\n                },\n                {\n                    content:uls[0][1]\n                },\n                {\n                    content:uls[0][2]\n                }\n            ]\n        },\n        {\n            content:divs[2],\n            branch:[\n                {\n                    content:uls[1][0]\n                },\n                {\n                    content:uls[1][1]\n                }\n            ]\n        },\n        {\n            content:divs[3],\n            open:true,\n            branch:[\n                {\n                    content:uls[2][0]\n                },\n                {\n                    content:uls[2][1]\n                }\n            ]\n        },\n        {content:divs[4]}\n    ]\n\n  \t    return (\n\t\t\t<Tree data = {array} switchButton = {true} switchButtonContent = {divs[0]} amStyle='primary' hollow={true} onCellClick={(a,b)=>{this.click(a,b)}}/>\n\t\t)\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n    _inherits(_class, _React$Component);\n\n    function _class() {\n        var _Object$getPrototypeO;\n\n        var _temp, _this, _ret;\n\n        _classCallCheck(this, _class);\n\n        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n            args[_key] = arguments[_key];\n        }\n\n        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(_class)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.click = function (target, location) {\n            var h = _this.props.customHandler;\n            if (h) {\n                h({\n                    data: location,\n                    eventType: 'cl'\n                });\n            }\n        }, _temp), _possibleConstructorReturn(_this, _ret);\n    }\n\n    _createClass(_class, [{\n        key: 'render',\n        value: function render() {\n            var _this2 = this;\n\n            var data = this.props.data.customData;\n            var uls = data[1];\n            var divs = data[0];\n\n            var array = [{\n                content: divs[1],\n                open: true,\n                branch: [{\n                    content: uls[0][0]\n                }, {\n                    content: uls[0][1]\n                }, {\n                    content: uls[0][2]\n                }]\n            }, {\n                content: divs[2],\n                branch: [{\n                    content: uls[1][0]\n                }, {\n                    content: uls[1][1]\n                }]\n            }, {\n                content: divs[3],\n                open: true,\n                branch: [{\n                    content: uls[2][0]\n                }, {\n                    content: uls[2][1]\n                }]\n            }, { content: divs[4] }];\n\n            return _react2.default.createElement(_yspInteriorComponents.Tree, { data: array, switchButton: true, switchButtonContent: divs[0], amStyle: 'primary', hollow: true, onCellClick: function onCellClick(a, b) {\n                    _this2.click(a, b);\n                } });\n        }\n    }]);\n\n    return _class;\n}(_react2.default.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);