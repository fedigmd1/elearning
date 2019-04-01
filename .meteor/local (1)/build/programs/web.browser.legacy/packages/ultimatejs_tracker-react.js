//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var TrackerReact;

var require = meteorInstall({"node_modules":{"meteor":{"ultimatejs:tracker-react":{"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/ultimatejs_tracker-react/main.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  TrackerReactMixin: function () {
    return TrackerReactMixin;
  }
});
var Tracker;
module.link("./Tracker", {
  "default": function (v) {
    Tracker = v;
  }
}, 0);
module.exportDefault(TrackerReact = function (Component, opt) {
  // No reactive computations needed for Server Side Rendering
  if (Meteor.isServer) return Component;

  var TrackerReactComponent =
  /*#__PURE__*/
  function (_Component) {
    (0, _inheritsLoose2.default)(TrackerReactComponent, _Component);

    function TrackerReactComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;
      /*
       Overloading the constructors `componentWillUnmount` method to ensure that computations are stopped and a
       forceUpdate prevented, without overwriting the prototype. This is a potential bug, as of React 14.7 the
       componentWillUnmount() method does not fire, if the top level component has one. It gets overwritten. This
       implementation is however similar to what a transpiler would do anyway.
        GitHub Issue: https://github.com/facebook/react/issues/6162
       */

      if (!_this.constructor.prototype._isExtended) {
        _this.constructor.prototype._isExtended = true;
        var superComponentWillUnmount = _this.constructor.prototype.componentWillUnmount;

        _this.constructor.prototype.componentWillUnmount = function () {
          if (superComponentWillUnmount) {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }

            superComponentWillUnmount.call.apply(superComponentWillUnmount, [this].concat(args));
          }

          this._renderComputation.stop();

          this._renderComputation = null;
        };
      }

      _this.autorunRender();

      return _this;
    }

    var _proto = TrackerReactComponent.prototype;

    _proto.autorunRender = function () {
      function autorunRender() {
        var _this2 = this;

        var oldRender = this.render;

        this.render = function () {
          // Simple method we can offer in the `Meteor.Component` API
          return _this2.autorunOnce('_renderComputation', oldRender);
        };
      }

      return autorunRender;
    }();

    _proto.autorunOnce = function () {
      function autorunOnce(name, dataFunc) {
        return Tracker.once(name, this, dataFunc, this.forceUpdate);
      }

      return autorunOnce;
    }();

    return TrackerReactComponent;
  }(Component);

  return TrackerReactComponent;
});
var TrackerReactMixin = {
  componentWillMount: function () {
    // No reactive computations needed for Server Side Rendering
    if (Meteor.isServer) return;
    this.autorunRender();
  },
  componentWillUnmount: function () {
    // No reactive computations needed for Server Side Rendering
    if (Meteor.isServer) return;

    this._renderComputation.stop();

    this._renderComputation = null;
  },
  autorunRender: function () {
    var _this3 = this;

    var oldRender = this.render;

    this.render = function () {
      // Simple method we can offer in the `Meteor.Component` API
      return _this3.autorunOnce('_renderComputation', oldRender);
    };
  },
  autorunOnce: function (name, dataFunc) {
    return Tracker.once(name, this, dataFunc, this.forceUpdate);
  }
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Tracker.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/ultimatejs_tracker-react/Tracker.js                                                                     //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 0);

/**
 * Create "one-time" reactive computations with Tracker
 * @param name {string} Component Reactive Data Property for Computation
 * @param context {*} Target Component Instance
 * @param dataFunc {*} Data Context
 * @param updateFunc {*} Component ForceUpdate Method - To re-trigger render function
 * @returns {*} Symbol(react.element) - Result data-element composition
 */
Tracker.once = function (name, context, dataFunc, updateFunc) {
  var data; // Stop it just in case the autorun never re-ran

  if (context[name] && !context[name].stopped) context[name].stop(); // NOTE: we may want to run this code in `setTimeout(func, 0)` so it doesn't impact the rendering phase at all

  context[name] = Tracker.nonreactive(function () {
    return Tracker.autorun(function (c) {
      if (c.firstRun) {
        data = dataFunc.call(context);
      } else {
        // Stop autorun here so rendering "phase" doesn't have extra work of also stopping autoruns; likely not too
        // important though.
        if (context[name]) context[name].stop(); // where `forceUpdate` will be called in above implementation

        updateFunc.call(context);
      }
    });
  });
  return data;
};

module.exportDefault(Tracker);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/ultimatejs:tracker-react/main.js");

/* Exports */
Package._define("ultimatejs:tracker-react", exports);

})();
