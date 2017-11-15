(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control2: function (elem) {
      
    },
    doAction_uiControl7: function (data, elem) {
      
    },
    getTemplate_uiControl7: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"日期组件案例\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"日期组件案例\" });\n};";
    }
  });
})(window, ysp);