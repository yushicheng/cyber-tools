"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var tslib_1 = require("tslib");

var react_1 = tslib_1.__importDefault(require("react"));

require("./index.less");

var index_less_1 = tslib_1.__importDefault({
  "testComponent": "index__testComponent___8d728ef5"
});

var TestComponent =
/** @class */
function (_super) {
  tslib_1.__extends(TestComponent, _super);

  function TestComponent(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {};
    return _this;
  }

  ;

  TestComponent.prototype.render = function () {
    var children = this.props.children;
    return react_1.default.createElement("div", {
      className: index_less_1.default.testComponent
    }, children);
  };

  ;
  return TestComponent;
}(react_1.default.Component);

;
exports.default = TestComponent;