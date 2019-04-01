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

/* Package-scope variables */
var TrackerReact;

var require = meteorInstall({"node_modules":{"meteor":{"ultimatejs:tracker-react":{"main.js":function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/ultimatejs_tracker-react/main.js                                                                        //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.export({
  TrackerReactMixin: () => TrackerReactMixin
});
let Tracker;
module.link("./Tracker", {
  default(v) {
    Tracker = v;
  }

}, 0);
module.exportDefault(TrackerReact = function (Component, opt) {
  // No reactive computations needed for Server Side Rendering
  if (Meteor.isServer) return Component;

  class TrackerReactComponent extends Component {
    constructor() {
      super(...arguments);
      /*
       Overloading the constructors `componentWillUnmount` method to ensure that computations are stopped and a
       forceUpdate prevented, without overwriting the prototype. This is a potential bug, as of React 14.7 the
       componentWillUnmount() method does not fire, if the top level component has one. It gets overwritten. This
       implementation is however similar to what a transpiler would do anyway.
        GitHub Issue: https://github.com/facebook/react/issues/6162
       */

      if (!this.constructor.prototype._isExtended) {
        this.constructor.prototype._isExtended = true;
        let superComponentWillUnmount = this.constructor.prototype.componentWillUnmount;

        this.constructor.prototype.componentWillUnmount = function () {
          if (superComponentWillUnmount) {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            superComponentWillUnmount.call(this, ...args);
          }

          this._renderComputation.stop();

          this._renderComputation = null;
        };
      }

      this.autorunRender();
    }

    autorunRender() {
      let oldRender = this.render;

      this.render = () => {
        // Simple method we can offer in the `Meteor.Component` API
        return this.autorunOnce('_renderComputation', oldRender);
      };
    }

    autorunOnce(name, dataFunc) {
      return Tracker.once(name, this, dataFunc, this.forceUpdate);
    }

  }

  return TrackerReactComponent;
});
const TrackerReactMixin = {
  componentWillMount() {
    // No reactive computations needed for Server Side Rendering
    if (Meteor.isServer) return;
    this.autorunRender();
  },

  componentWillUnmount() {
    // No reactive computations needed for Server Side Rendering
    if (Meteor.isServer) return;

    this._renderComputation.stop();

    this._renderComputation = null;
  },

  autorunRender() {
    let oldRender = this.render;

    this.render = () => {
      // Simple method we can offer in the `Meteor.Component` API
      return this.autorunOnce('_renderComputation', oldRender);
    };
  },

  autorunOnce(name, dataFunc) {
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
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
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
  let data; // Stop it just in case the autorun never re-ran

  if (context[name] && !context[name].stopped) context[name].stop(); // NOTE: we may want to run this code in `setTimeout(func, 0)` so it doesn't impact the rendering phase at all

  context[name] = Tracker.nonreactive(() => {
    return Tracker.autorun(c => {
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
