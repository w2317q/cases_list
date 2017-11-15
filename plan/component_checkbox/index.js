(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control12: function (elem) {
      
    },
    doAction_uiControl18: function (data, elem) {
      
    },
    getTemplate_uiControl18: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"多选按钮组件案例\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"多选按钮组件案例\" });\n};";
    }
  });
})(window, ysp);