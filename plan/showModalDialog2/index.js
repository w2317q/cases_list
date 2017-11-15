(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control1: function (elem) {
      return;

    },
    doAction_uiControl36: function (data, elem) {
      if (data.eventType == 'click') {
  if(elem.ownerDocument && elem.ownerDocument.defaultView) {
  	elem.ownerDocument.defaultView.close();
  }
}

    },
    getTemplate_uiControl36: function () {
      var selfTemplate = "module.exports = React.createClass({\n  clickHandler: function() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function() {\n    return (\n      <header className=\"navbar navbar-primary header\">\n        <h2 className=\"navbar-title navbar-center\">showModalDialog</h2>\n        <div className=\"navbar-nav navbar-left\">\n          <a onClick={this.clickHandler} className=\"navbar-nav-item\">\n            <span className=\"navbar-nav-title\">返回</span>\n            <span className=\"icon icon-left-nav navbar-icon\"></span>\n          </a>\n        </div>\n      </header>\n    );\n  }\n});";
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  clickHandler: function clickHandler() {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: \'click\'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      "header",\n      { className: "navbar navbar-primary header" },\n      React.createElement(\n        "h2",\n        { className: "navbar-title navbar-center" },\n        "showModalDialog"\n      ),\n      React.createElement(\n        "div",\n        { className: "navbar-nav navbar-left" },\n        React.createElement(\n          "a",\n          { onClick: this.clickHandler, className: "navbar-nav-item" },\n          React.createElement(\n            "span",\n            { className: "navbar-nav-title" },\n            "返回"\n          ),\n          React.createElement("span", { className: "icon icon-left-nav navbar-icon" })\n        )\n      )\n    );\n  }\n});';
    }
  });
})(window, ysp);