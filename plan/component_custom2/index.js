(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {
      return elem.value;
    },
    doAction_uiControl0: function (data, elem) {
      if (data.eventType === 'click') {
        elem.click();
      } else if (data.eventType === 'change') {
        elem.value = data.dataCustom;
      }
    },
    getTemplate_uiControl0: function () {
      var selfTemplate = "module.exports = React.createClass({\n  \n  handleClick: function() {\n  \tvar handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  \n  handleChange: function(e) {\n  \tvar handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.value,\n        eventType: 'change'\n      });\n    }\n  },\n  \n\trender: function() {\n  \treturn <AMUI.Field placeholder=\"请输入邮件\" onChange={this.handleChange} onClick={this.handleClick} defaultValue={this.props.data.customData} />;\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n\n  handleClick: function handleClick() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n\n  handleChange: function handleChange(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.value,\n        eventType: 'change'\n      });\n    }\n  },\n\n  render: function render() {\n    return React.createElement(AMUI.Field, { placeholder: '请输入邮件', onChange: this.handleChange, onClick: this.handleClick, defaultValue: this.props.data.customData });\n  }\n});";
    },
    getData_control3: function (elem) {
      
    },
    doAction_uiControl4: function (data, elem) {
      
    },
    getTemplate_uiControl4: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"自定义组件案例2\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"自定义组件案例2\" });\n};";
    }
  });
})(window, ysp);