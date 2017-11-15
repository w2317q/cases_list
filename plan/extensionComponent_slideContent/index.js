(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control4: function (elem) {
      
    },
    doAction_uiControl8: function (data, elem) {
      
    },
    getTemplate_uiControl8: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"贮藏板\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"贮藏板\" });\n};";
    }
  });
})(window, ysp);