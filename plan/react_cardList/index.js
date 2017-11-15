(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {
      var title = [].slice.call(elem.tHead.children[0].children).map(function (value) {
  return value.textContent;
});
var content = [].slice.call(elem.tBodies[0].children).map(function (value) {
  return [].slice.call(value.children).map(function (val) {
    return val.textContent;
  });
});
var data = {
  title: title,
  content: content
};
return data;

    },
    doAction_uiControl0: function (data, elem) {
      
    },
    getTemplate_uiControl0: function () {
      var selfTemplate = "var CardList = require(\"ysp-interior-components\").CardList;\n\nmodule.exports = React.createClass({   \n\n  render:function () {\n    var array=this.props.data.customData;\n    return (\n\t    <CardList \n\t        data = {array} \n\t\t\tflex = \"0.4\"\n\t\t\tcardNumber = \"4\" \n\t\t\twrap = {true}\n\t        amStyle=\"primary\" \n\t        hollow={true} \n\t        onCellClick={function (target){console.log(target)}} />\n    )\n  }\n})";
      return "\"use strict\";\n\nvar CardList = require(\"ysp-interior-components\").CardList;\n\nmodule.exports = React.createClass({\n\t\tdisplayName: \"exports\",\n\n\n\t\trender: function render() {\n\t\t\t\tvar array = this.props.data.customData;\n\t\t\t\treturn React.createElement(CardList, {\n\t\t\t\t\t\tdata: array,\n\t\t\t\t\t\tflex: \"0.4\",\n\t\t\t\t\t\tcardNumber: \"4\",\n\t\t\t\t\t\twrap: true,\n\t\t\t\t\t\tamStyle: \"primary\",\n\t\t\t\t\t\thollow: true,\n\t\t\t\t\t\tonCellClick: function onCellClick(target) {\n\t\t\t\t\t\t\t\tconsole.log(target);\n\t\t\t\t\t\t} });\n\t\t}\n});";
    },
    getData_control1: function (elem) {},
    doAction_uiControl1: function (data, elem) {},
    getTemplate_uiControl1: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"卡片列表组件\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"卡片列表组件\" });\n};";
    }
  });
})(window, ysp);