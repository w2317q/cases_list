(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control4: function (elem) {
      
    },
    doAction_uiControl9: function (data, elem) {
      
    },
    getTemplate_uiControl9: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"分割线\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"分割线\" });\n};";
    }
  });
})(window, ysp);