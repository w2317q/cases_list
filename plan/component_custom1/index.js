(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {
      var rData = [],
          trs = elem.getElementsByTagName('tr');for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].children,
            pTds = [];for (var j = 0; j < tds.length; j++) {
          pTds.push(tds[j].textContent);
        }rData.push(pTds);
      }return rData;
    },
    doAction_uiControl0: function (data, elem) {},
    getTemplate_uiControl0: function () {
      var selfTemplate = "module.exports = React.createClass({\n\n  renderList: function() {\n    var data = this.props.data.customData;\n\t\tvar rData = [];\n    data.map(function(item, index) {\n    \trData.push(\n        <AMUI.Accordion.Item key={index} title={'网站名称：' + item[0]}>\n          <p>网站：{item[1]}</p>\n          <p>创建时间：{item[2]}</p>\n        </AMUI.Accordion.Item>\n      );\n    });\n    return rData;\n  },\n\n  render: function() {\n    return (\n      <AMUI.Accordion>\n        {this.renderList()}\n      </AMUI.Accordion>\n    );\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n\n  renderList: function renderList() {\n    var data = this.props.data.customData;\n    var rData = [];\n    data.map(function (item, index) {\n      rData.push(React.createElement(\n        AMUI.Accordion.Item,\n        { key: index, title: '\u7F51\u7AD9\u540D\u79F0\uFF1A' + item[0] },\n        React.createElement(\n          'p',\n          null,\n          '\\u7F51\\u7AD9\\uFF1A',\n          item[1]\n        ),\n        React.createElement(\n          'p',\n          null,\n          '\\u521B\\u5EFA\\u65F6\\u95F4\\uFF1A',\n          item[2]\n        )\n      ));\n    });\n    return rData;\n  },\n\n  render: function render() {\n    return React.createElement(\n      AMUI.Accordion,\n      null,\n      this.renderList()\n    );\n  }\n});";
    },
    getData_control1: function (elem) {},
    doAction_uiControl3: function (data, elem) {},
    getTemplate_uiControl3: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"自定义组件案例1\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"自定义组件案例1\" });\n};";
    }
  });
})(window, ysp);