(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control3: function (elem) {
      
    },
    doAction_uiControl5: function (data, elem) {
      
    },
    getTemplate_uiControl5: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"页脚\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"页脚\" });\n};";
    }
  });
})(window, ysp);