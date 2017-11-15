(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {},
    doAction_uiControl0: function (data, elem) {},
    getTemplate_uiControl0: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"ECharts组件\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"ECharts组件\" });\n};";
    },
    getData_control1: function (elem) {
      return {
  option: elem.getAttribute('option')
};
    },
    doAction_uiControl1: function (data, elem) {
      
    },
    getTemplate_uiControl1: function () {
      var selfTemplate = "var ECharts =require(\"ysp-interior-components\").ECharts;\n\t\nmodule.exports = React.createClass({   \n\t  \n\t  renderChart:function(data){\n\t  \treturn (\n\t    \t<ECharts data={data} />\n\t    )\n\t  },\n\t  \n\t  render:function(){\n\t    var customData = (this.props.data && this.props.data.customData) || {};\n\t    var optionData = {\n\t    \toption: customData.option ? JSON.parse(customData.option) : null,\n\t      isMap: true\n\t    }\n\t    \n\t    var style = {\n\t    \theight: '300px'\n\t    }\n\t    \n\t    return (\n\t      <div style={style}>\n\t        {optionData.option && this.renderChart(optionData)}\n\t      </div>\n\t    );\n\t  }\n\t})";
      return "\"use strict\";\n\nvar ECharts = require(\"ysp-interior-components\").ECharts;\n\nmodule.exports = React.createClass({\n\tdisplayName: \"exports\",\n\n\n\trenderChart: function renderChart(data) {\n\t\treturn React.createElement(ECharts, { data: data });\n\t},\n\n\trender: function render() {\n\t\tvar customData = this.props.data && this.props.data.customData || {};\n\t\tvar optionData = {\n\t\t\toption: customData.option ? JSON.parse(customData.option) : null,\n\t\t\tisMap: true\n\t\t};\n\n\t\tvar style = {\n\t\t\theight: '300px'\n\t\t};\n\n\t\treturn React.createElement(\n\t\t\t\"div\",\n\t\t\t{ style: style },\n\t\t\toptionData.option && this.renderChart(optionData)\n\t\t);\n\t}\n});";
    }
  });
})(window, ysp);