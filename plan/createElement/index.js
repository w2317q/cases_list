(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control1: function (elem) {
      
    },
    doAction_uiControl0: function (data, elem) {
      
    },
    getTemplate_uiControl0: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"createElement\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"createElement\" });\n};";
    }
  });
})(window, ysp);