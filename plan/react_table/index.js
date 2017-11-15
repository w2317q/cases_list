(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {
      var title = [].slice.call(elem.tHead.children[0].children).map(function (value) {
        return value.textContent;
      });var content = [].slice.call(elem.tBodies[0].children).map(function (value) {
        return [].slice.call(value.children).map(function (val) {
          return val.textContent;
        });
      });var data = { title: title, content: content };return data;
    },
    doAction_uiControl0: function (data, elem) {},
    getTemplate_uiControl0: function () {
      var selfTemplate = "var Table = require(\"ysp-interior-components\").Table;\nvar Textbox = require(\"ysp-interior-components\").Textbox;\n\t\nmodule.exports = React.createClass({  \n\t\n\t  render:function() {\n\t    var data=this.props.data.customData;\n\t\n\t    var input=document.createElement('input');\n\t    input.value='3333';\n\t    input.type='text';\n\t\n\t    return (\n\t        <Table data = {data}\n\t               theadFixed = {true}\n\t               multiple = \"1.5\"\n            \t\t height = \"300\"\n\t                     \n\t        />\n\t    )\n\t  }\n\t})";
      return "\"use strict\";\n\nvar Table = require(\"ysp-interior-components\").Table;\nvar Textbox = require(\"ysp-interior-components\").Textbox;\n\nmodule.exports = React.createClass({\n\tdisplayName: \"exports\",\n\n\n\trender: function render() {\n\t\tvar data = this.props.data.customData;\n\n\t\tvar input = document.createElement('input');\n\t\tinput.value = '3333';\n\t\tinput.type = 'text';\n\n\t\treturn React.createElement(Table, { data: data,\n\t\t\ttheadFixed: true,\n\t\t\tmultiple: \"1.5\",\n\t\t\theight: \"300\"\n\n\t\t});\n\t}\n});";
    },
    getData_control1: function (elem) {},
    doAction_uiControl1: function (data, elem) {},
    getTemplate_uiControl1: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"table组件\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"table组件\" });\n};";
    }
  });
})(window, ysp);