(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control4: function (elem) {
      
    },
    doAction_uiControl5: function (data, elem) {
      
    },
    getTemplate_uiControl5: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"grid分栏\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"grid分栏\" });\n};";
    }
  });
})(window, ysp);