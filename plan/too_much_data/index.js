(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0: function (elem) {},
    doAction_uiControl33: function (data, elem) {},
    getTemplate_uiControl33: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"表单字段过多\" />;\n";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"表单字段过多\" });\n};";
    },
    getData_control1: function (elem) {
      var trs = elem.querySelectorAll('tr');
      var data = [];
      for (var i = 0; i < trs.length; i++) {
        var tds = trs[i].querySelectorAll('td');
        var length = tds.length;
        var obj = {};

        switch (length) {
          case 1:
            obj.count = 1;
            obj.content = getTdContentWithArray(tds);
            data.push(obj);
            break;

          case 2:
            obj.count = 2;
            obj.content = getTdContentWithArray(tds);
            data.push(obj);
            break;

          case 4:
            obj.count = 4;
            obj.content = getTdContentWithArray(tds);
            data.push(obj);
            break;

          default:
            break;
        }
      }
      function getTdContentWithArray(tds) {
        var data = [];

        for (var i = 0; i < tds.length; i++) {
          data.push(tds[i].textContent.trim());
        }

        return data;
      }
      return data;
    },
    doAction_uiControl35: function (data, elem) {
      
    },
    getTemplate_uiControl35: function () {
      var selfTemplate = 'module.exports = React.createClass({\n \n  render: function render() {\n    var data = this.props.data.customData;\n        var list = data.map(function(d){\n      switch(d.count) {\n        case 1: \n          return (\n            <AMUI.List.Item title={d.content} />\n          )\n          break;\n        case 2:\n          return (      \n            <AMUI.List.Item title={d.content[0]} after={d.content[1]}/>\n\n          )\n          break;\n        case 4:\n          return (\n            <span>\n              <AMUI.List.Item title={d.content[0]} after={d.content[1]}/>\n              <AMUI.List.Item title={d.content[2]} after={d.content[3]}/>\n            </span>\n          )\n          break;\n        default:\n          break;\n      }\n    })\n    return(\n      <AMUI.List>\n        {list}\n      </AMUI.List>\n    );\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n\n  render: function render() {\n    var data = this.props.data.customData;\n    var list = data.map(function (d) {\n      switch (d.count) {\n        case 1:\n          return React.createElement(AMUI.List.Item, { title: d.content });\n          break;\n        case 2:\n          return React.createElement(AMUI.List.Item, { title: d.content[0], after: d.content[1] });\n          break;\n        case 4:\n          return React.createElement(\n            "span",\n            null,\n            React.createElement(AMUI.List.Item, { title: d.content[0], after: d.content[1] }),\n            React.createElement(AMUI.List.Item, { title: d.content[2], after: d.content[3] })\n          );\n          break;\n        default:\n          break;\n      }\n    });\n    return React.createElement(\n      AMUI.List,\n      null,\n      list\n    );\n  }\n});';
    }
  });
})(window, ysp);