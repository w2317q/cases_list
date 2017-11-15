(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control10: function (elem) {
      return '返回';
    },
    doAction_uiControl26: function (data, elem) {
      ysp.runtime.Browser.activeBrowser.close();
      ysp.runtime.engine.resetTracker();
    },
    getTemplate_uiControl26: function () {
      var selfTemplate = "module.exports = React.createClass({\n  \tonClick: function(e) {\n    \tvar handler = this.props.customHandler;\n     \tif (handler) {\n        \thandler({});\n        } \n    },\n\trender: function() {\n    \treturn (<button className='back-btn' onClick={this.onClick}></button>)\n    }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n   displayName: 'exports',\n\n   onClick: function onClick(e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n         handler({});\n      }\n   },\n   render: function render() {\n      return React.createElement('button', { className: 'back-btn', onClick: this.onClick });\n   }\n});";
    },
    getData_control15: function (elem) {},
    doAction_uiControl0: function (data, elem) {},
    getTemplate_uiControl0: function () {
      var selfTemplate = "import { Backbtn } from 'ysp-custom-components';\nexport default () => <Backbtn title=\"高级篇\" />;";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _yspCustomComponents = require(\"ysp-custom-components\");\n\nexports.default = function () {\n  return React.createElement(_yspCustomComponents.Backbtn, { title: \"高级篇\" });\n};";
    },
    getData_control18: function (elem) {
      var li = elem.querySelectorAll('li');
var data = [];
for (var i = 0; i < li.length; i++) {
  data.push(li[i].textContent);
}
return data;

    },
    doAction_uiControl2: function (data, elem) {
      ysp.runtime.Flow.setLastFlow('uiControl2', 'context1');
if (data.eventType === 'click') {
  var id = data.dataCustom;
  var as = elem.querySelectorAll('a');
  as[id].click();
}

    },
    getTemplate_uiControl2: function () {
      var selfTemplate = "module.exports = React.createClass({\n  click: function(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.id,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function() {\n    var data = this.props.data.customData;\n    var list = data.map(function(d,i){\n      return(\n        <AMUI.Button block=\"true\" id={i}>{d}</AMUI.Button>\n      );\n    });\n    return (\n      <AMUI.Container onClick={this.click}>\n        {list}\n      </AMUI.Container>\n    );\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  click: function click(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: e.target.id,\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.data.customData;\n    var list = data.map(function (d, i) {\n      return React.createElement(\n        AMUI.Button,\n        { block: \"true\", id: i },\n        d\n      );\n    });\n    return React.createElement(\n      AMUI.Container,\n      { onClick: this.click },\n      list\n    );\n  }\n});";
    }
  });
})(window, ysp);