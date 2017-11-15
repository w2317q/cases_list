(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {},
    doAction_uiControl24: function (data, elem) {},
    getTemplate_uiControl24: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"UEditor\" />;\n";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"UEditor\" });\n};";
    },
    getData_control1: function (elem) {
      var awin = elem.ownerDocument.defaultView;
      var ue = awin.ue;
      return ue && ue.isReady && ue.getContentTxt();
    },
    doAction_uiControl26: function (data, elem) {
      if (data.eventType === 'change') {
        var awin = elem.ownerDocument.defaultView;
        var ue = awin.ue;
        ue.setContent(data.dataCustom);
      }
    },
    getTemplate_uiControl26: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onChange: function(e) {\n\t\tvar handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data:e.target.value,\n        eventType:'change'\n      })\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    return (\n      \t<textarea onChange={this.onChange} value={data}></textarea>\n    );\n  }\n});\n\n";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  onChange: function onChange(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.value,\n        eventType: 'change'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    return React.createElement('textarea', { onChange: this.onChange, value: data });\n  }\n});";
    }
  });
})(window, ysp);