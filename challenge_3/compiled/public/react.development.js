/** @license React v16.3.2
 * react.development.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
  (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.React = factory();
})(undefined, function () {
  'use strict';

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };

  // TODO: this is special because it gets imported during build.

  var ReactVersion = '16.3.2';

  // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
  // nor polyfill, then a plain number is used for performance.
  var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

  var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
  var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
  var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
  var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
  var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;
  var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol['for']('react.strict_mode') : 0xeacc;
  var REACT_PROVIDER_TYPE = hasSymbol ? Symbol['for']('react.provider') : 0xeacd;
  var REACT_CONTEXT_TYPE = hasSymbol ? Symbol['for']('react.context') : 0xeace;
  var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol['for']('react.async_mode') : 0xeacf;
  var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol['for']('react.forward_ref') : 0xead0;

  var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  function getIteratorFn(maybeIterable) {
    if (maybeIterable === null || typeof maybeIterable === 'undefined') {
      return null;
    }
    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
    if (typeof maybeIterator === 'function') {
      return maybeIterator;
    }
    return null;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var validateFormat = function validateFormat(format) {};

  {
    validateFormat = function validateFormat(format) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    };
  }

  function invariant(condition, format, a, b, c, d, e, f) {
    validateFormat(format);

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  }

  var invariant_1 = invariant;

  // Relying on the `invariant()` implementation lets us
  // have preserve the format and params in the www builds.

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  var emptyObject = {};

  {
    Object.freeze(emptyObject);
  }

  var emptyObject_1 = emptyObject;

  /**
   * Forked from fbjs/warning:
   * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
   *
   * Only change is we use console.warn instead of console.error,
   * and do nothing when 'console' is not supported.
   * This really simplifies the code.
   * ---
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var lowPriorityWarning = function lowPriorityWarning() {};

  {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.warn(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    lowPriorityWarning = function lowPriorityWarning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }
      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  }

  var lowPriorityWarning$1 = lowPriorityWarning;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

  function makeEmptyFunction(arg) {
    return function () {
      return arg;
    };
  }

  /**
   * This function accepts and discards inputs; it has no side effects. This is
   * primarily useful idiomatically for overridable function endpoints which
   * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
   */
  var emptyFunction = function emptyFunction() {};

  emptyFunction.thatReturns = makeEmptyFunction;
  emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
  emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
  emptyFunction.thatReturnsNull = makeEmptyFunction(null);
  emptyFunction.thatReturnsThis = function () {
    return this;
  };
  emptyFunction.thatReturnsArgument = function (arg) {
    return arg;
  };

  var emptyFunction_1 = emptyFunction;

  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   */

  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */

  var warning = emptyFunction_1;

  {
    var printWarning$1 = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning$1.apply(undefined, [format].concat(args));
      }
    };
  }

  var warning_1 = warning;

  var didWarnStateUpdateForUnmountedComponent = {};

  function warnNoop(publicInstance, callerName) {
    {
      var _constructor = publicInstance.constructor;
      var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
      var warningKey = componentName + '.' + callerName;
      if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
        return;
      }
      warning_1(false, "Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
      didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
  }

  /**
   * This is the abstract API for an update queue.
   */
  var ReactNoopUpdateQueue = {
    /**
     * Checks whether or not this composite component is mounted.
     * @param {ReactClass} publicInstance The instance we want to test.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function isMounted(publicInstance) {
      return false;
    },

    /**
     * Forces an update. This should only be invoked when it is known with
     * certainty that we are **not** in a DOM transaction.
     *
     * You may want to call this when you know that some deeper aspect of the
     * component's state has changed but `setState` was not called.
     *
     * This will not invoke `shouldComponentUpdate`, but it will invoke
     * `componentWillUpdate` and `componentDidUpdate`.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {?function} callback Called after component is updated.
     * @param {?string} callerName name of the calling function in the public API.
     * @internal
     */
    enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
      warnNoop(publicInstance, 'forceUpdate');
    },

    /**
     * Replaces all of the state. Always use this or `setState` to mutate state.
     * You should treat `this.state` as immutable.
     *
     * There is no guarantee that `this.state` will be immediately updated, so
     * accessing `this.state` after calling this method may return the old value.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} completeState Next state.
     * @param {?function} callback Called after component is updated.
     * @param {?string} callerName name of the calling function in the public API.
     * @internal
     */
    enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
      warnNoop(publicInstance, 'replaceState');
    },

    /**
     * Sets a subset of the state. This only exists because _pendingState is
     * internal. This provides a merging strategy that is not available to deep
     * properties which is confusing. TODO: Expose pendingState or don't use it
     * during the merge.
     *
     * @param {ReactClass} publicInstance The instance that should rerender.
     * @param {object} partialState Next partial state to be merged with state.
     * @param {?function} callback Called after component is updated.
     * @param {?string} Name of the calling function in the public API.
     * @internal
     */
    enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
      warnNoop(publicInstance, 'setState');
    }
  };

  /**
   * Base class helpers for the updating state of a component.
   */
  function Component(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject_1;
    // We initialize the default updater but the real one gets injected by the
    // renderer.
    this.updater = updater || ReactNoopUpdateQueue;
  }

  Component.prototype.isReactComponent = {};

  /**
   * Sets a subset of the state. Always use this to mutate
   * state. You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * There is no guarantee that calls to `setState` will run synchronously,
   * as they may eventually be batched together.  You can provide an optional
   * callback that will be executed when the call to setState is actually
   * completed.
   *
   * When a function is provided to setState, it will be called at some point in
   * the future (not synchronously). It will be called with the up to date
   * component arguments (state, props, context). These values can be different
   * from this.* because your function may be called after receiveProps but before
   * shouldComponentUpdate, and this new state, props, and context will not yet be
   * assigned to this.
   *
   * @param {object|function} partialState Next partial state or function to
   *        produce next partial state to be merged with current state.
   * @param {?function} callback Called after state is updated.
   * @final
   * @protected
   */
  Component.prototype.setState = function (partialState, callback) {
    !((typeof partialState === 'undefined' ? 'undefined' : _typeof(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? invariant_1(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
    this.updater.enqueueSetState(this, partialState, callback, 'setState');
  };

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {?function} callback Called after update is complete.
   * @final
   * @protected
   */
  Component.prototype.forceUpdate = function (callback) {
    this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
  };

  /**
   * Deprecated APIs. These APIs used to exist on classic React classes but since
   * we would like to deprecate them, we're not going to move them over to this
   * modern base class. Instead, we define a getter that warns if it's accessed.
   */
  {
    var deprecatedAPIs = {
      isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
      replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
    };
    var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
      Object.defineProperty(Component.prototype, methodName, {
        get: function get() {
          lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    };
    for (var fnName in deprecatedAPIs) {
      if (deprecatedAPIs.hasOwnProperty(fnName)) {
        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
      }
    }
  }

  function ComponentDummy() {}
  ComponentDummy.prototype = Component.prototype;

  /**
   * Convenience component with default shallow equality check for sCU.
   */
  function PureComponent(props, context, updater) {
    this.props = props;
    this.context = context;
    this.refs = emptyObject_1;
    this.updater = updater || ReactNoopUpdateQueue;
  }

  var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
  pureComponentPrototype.constructor = PureComponent;
  // Avoid an extra prototype jump for these methods.
  objectAssign(pureComponentPrototype, Component.prototype);
  pureComponentPrototype.isPureReactComponent = true;

  // an immutable object with a single mutable value
  function createRef() {
    var refObject = {
      current: null
    };
    {
      Object.seal(refObject);
    }
    return refObject;
  }

  /**
   * Keeps track of the current owner.
   *
   * The current owner is the component who should own any components that are
   * currently being constructed.
   */
  var ReactCurrentOwner = {
    /**
     * @internal
     * @type {ReactComponent}
     */
    current: null
  };

  var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

  var RESERVED_PROPS = {
    key: true,
    ref: true,
    __self: true,
    __source: true
  };

  var specialPropKeyWarningShown = void 0;
  var specialPropRefWarningShown = void 0;

  function hasValidRef(config) {
    {
      if (hasOwnProperty$1.call(config, 'ref')) {
        var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
        if (getter && getter.isReactWarning) {
          return false;
        }
      }
    }
    return config.ref !== undefined;
  }

  function hasValidKey(config) {
    {
      if (hasOwnProperty$1.call(config, 'key')) {
        var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
        if (getter && getter.isReactWarning) {
          return false;
        }
      }
    }
    return config.key !== undefined;
  }

  function defineKeyPropWarningGetter(props, displayName) {
    var warnAboutAccessingKey = function warnAboutAccessingKey() {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;
        warning_1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    };
    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }

  function defineRefPropWarningGetter(props, displayName) {
    var warnAboutAccessingRef = function warnAboutAccessingRef() {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;
        warning_1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    };
    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }

  /**
   * Factory method to create a new React element. This no longer adheres to
   * the class pattern, so do not use new to call it. Also, no instanceof check
   * will work. Instead test $$typeof field against Symbol.for('react.element') to check
   * if something is a React Element.
   *
   * @param {*} type
   * @param {*} key
   * @param {string|object} ref
   * @param {*} self A *temporary* helper to detect places where `this` is
   * different from the `owner` when React.createElement is called, so that we
   * can warn. We want to get rid of owner and replace string `ref`s with arrow
   * functions, and as long as `this` and owner are the same, there will be no
   * change in behavior.
   * @param {*} source An annotation object (added by a transpiler or otherwise)
   * indicating filename, line number, and/or other information.
   * @param {*} owner
   * @param {*} props
   * @internal
   */
  var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
    var element = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: REACT_ELEMENT_TYPE,

      // Built-in properties that belong on the element
      type: type,
      key: key,
      ref: ref,
      props: props,

      // Record the component responsible for creating this element.
      _owner: owner
    };

    {
      // The validation flag is currently mutative. We put it on
      // an external backing store so that we can freeze the whole object.
      // This can be replaced with a WeakMap once they are implemented in
      // commonly used development environments.
      element._store = {};

      // To make comparing ReactElements easier for testing purposes, we make
      // the validation flag non-enumerable (where possible, which should
      // include every environment we run tests in), so the test framework
      // ignores it.
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
      if (Object.freeze) {
        Object.freeze(element.props);
        Object.freeze(element);
      }
    }

    return element;
  };

  /**
   * Create and return a new ReactElement of the given type.
   * See https://reactjs.org/docs/react-api.html#createelement
   */
  function createElement(type, config, children) {
    var propName = void 0;

    // Reserved names are extracted
    var props = {};

    var key = null;
    var ref = null;
    var self = null;
    var source = null;

    if (config != null) {
      if (hasValidRef(config)) {
        ref = config.ref;
      }
      if (hasValidKey(config)) {
        key = '' + config.key;
      }

      self = config.__self === undefined ? null : config.__self;
      source = config.__source === undefined ? null : config.__source;
      // Remaining properties are added to a new props object
      for (propName in config) {
        if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          props[propName] = config[propName];
        }
      }
    }

    // Children can be more than one argument, and those are transferred onto
    // the newly allocated props object.
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }
      {
        if (Object.freeze) {
          Object.freeze(childArray);
        }
      }
      props.children = childArray;
    }

    // Resolve default props
    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;
      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }
    {
      if (key || ref) {
        if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
          var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
          if (key) {
            defineKeyPropWarningGetter(props, displayName);
          }
          if (ref) {
            defineRefPropWarningGetter(props, displayName);
          }
        }
      }
    }
    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }

  /**
   * Return a function that produces ReactElements of a given type.
   * See https://reactjs.org/docs/react-api.html#createfactory
   */

  function cloneAndReplaceKey(oldElement, newKey) {
    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

    return newElement;
  }

  /**
   * Clone and return a new ReactElement using element as the starting point.
   * See https://reactjs.org/docs/react-api.html#cloneelement
   */
  function cloneElement(element, config, children) {
    !!(element === null || element === undefined) ? invariant_1(false, 'React.cloneElement(...): The argument must be a React element, but you passed %s.', element) : void 0;

    var propName = void 0;

    // Original props are copied
    var props = objectAssign({}, element.props);

    // Reserved names are extracted
    var key = element.key;
    var ref = element.ref;
    // Self is preserved since the owner is preserved.
    var self = element._self;
    // Source is preserved since cloneElement is unlikely to be targeted by a
    // transpiler, and the original source is probably a better indicator of the
    // true owner.
    var source = element._source;

    // Owner will be preserved, unless ref is overridden
    var owner = element._owner;

    if (config != null) {
      if (hasValidRef(config)) {
        // Silently steal the ref from the parent.
        ref = config.ref;
        owner = ReactCurrentOwner.current;
      }
      if (hasValidKey(config)) {
        key = '' + config.key;
      }

      // Remaining properties override existing props
      var defaultProps = void 0;
      if (element.type && element.type.defaultProps) {
        defaultProps = element.type.defaultProps;
      }
      for (propName in config) {
        if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
          if (config[propName] === undefined && defaultProps !== undefined) {
            // Resolve default props
            props[propName] = defaultProps[propName];
          } else {
            props[propName] = config[propName];
          }
        }
      }
    }

    // Children can be more than one argument, and those are transferred onto
    // the newly allocated props object.
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
      props.children = children;
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength);
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 2];
      }
      props.children = childArray;
    }

    return ReactElement(element.type, key, ref, self, source, owner, props);
  }

  /**
   * Verifies the object is a ReactElement.
   * See https://reactjs.org/docs/react-api.html#isvalidelement
   * @param {?object} object
   * @return {boolean} True if `object` is a valid component.
   * @final
   */
  function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }

  var ReactDebugCurrentFrame = {};

  {
    // Component that is being worked on
    ReactDebugCurrentFrame.getCurrentStack = null;

    ReactDebugCurrentFrame.getStackAddendum = function () {
      var impl = ReactDebugCurrentFrame.getCurrentStack;
      if (impl) {
        return impl();
      }
      return null;
    };
  }

  var SEPARATOR = '.';
  var SUBSEPARATOR = ':';

  /**
   * Escape and wrap key so it is safe to use as a reactid
   *
   * @param {string} key to be escaped.
   * @return {string} the escaped key.
   */
  function escape(key) {
    var escapeRegex = /[=:]/g;
    var escaperLookup = {
      '=': '=0',
      ':': '=2'
    };
    var escapedString = ('' + key).replace(escapeRegex, function (match) {
      return escaperLookup[match];
    });

    return '$' + escapedString;
  }

  /**
   * TODO: Test that a single child and an array with one item have the same key
   * pattern.
   */

  var didWarnAboutMaps = false;

  var userProvidedKeyEscapeRegex = /\/+/g;
  function escapeUserProvidedKey(text) {
    return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
  }

  var POOL_SIZE = 10;
  var traverseContextPool = [];
  function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
    if (traverseContextPool.length) {
      var traverseContext = traverseContextPool.pop();
      traverseContext.result = mapResult;
      traverseContext.keyPrefix = keyPrefix;
      traverseContext.func = mapFunction;
      traverseContext.context = mapContext;
      traverseContext.count = 0;
      return traverseContext;
    } else {
      return {
        result: mapResult,
        keyPrefix: keyPrefix,
        func: mapFunction,
        context: mapContext,
        count: 0
      };
    }
  }

  function releaseTraverseContext(traverseContext) {
    traverseContext.result = null;
    traverseContext.keyPrefix = null;
    traverseContext.func = null;
    traverseContext.context = null;
    traverseContext.count = 0;
    if (traverseContextPool.length < POOL_SIZE) {
      traverseContextPool.push(traverseContext);
    }
  }

  /**
   * @param {?*} children Children tree container.
   * @param {!string} nameSoFar Name of the key path so far.
   * @param {!function} callback Callback to invoke with each child found.
   * @param {?*} traverseContext Used to pass information throughout the traversal
   * process.
   * @return {!number} The number of children in this subtree.
   */
  function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
    var type = typeof children === 'undefined' ? 'undefined' : _typeof(children);

    if (type === 'undefined' || type === 'boolean') {
      // All of the above are perceived as null.
      children = null;
    }

    var invokeCallback = false;

    if (children === null) {
      invokeCallback = true;
    } else {
      switch (type) {
        case 'string':
        case 'number':
          invokeCallback = true;
          break;
        case 'object':
          switch (children.$$typeof) {
            case REACT_ELEMENT_TYPE:
            case REACT_PORTAL_TYPE:
              invokeCallback = true;
          }
      }
    }

    if (invokeCallback) {
      callback(traverseContext, children,
      // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows.
      nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
      return 1;
    }

    var child = void 0;
    var nextName = void 0;
    var subtreeCount = 0; // Count of children found in the current subtree.
    var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        child = children[i];
        nextName = nextNamePrefix + getComponentKey(child, i);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else {
      var iteratorFn = getIteratorFn(children);
      if (typeof iteratorFn === 'function') {
        {
          // Warn about using Maps as children
          if (iteratorFn === children.entries) {
            !didWarnAboutMaps ? warning_1(false, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum()) : void 0;
            didWarnAboutMaps = true;
          }
        }

        var iterator = iteratorFn.call(children);
        var step = void 0;
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else if (type === 'object') {
        var addendum = '';
        {
          addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
        }
        var childrenString = '' + children;
        invariant_1(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
      }
    }

    return subtreeCount;
  }

  /**
   * Traverses children that are typically specified as `props.children`, but
   * might also be specified through attributes:
   *
   * - `traverseAllChildren(this.props.children, ...)`
   * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
   *
   * The `traverseContext` is an optional argument that is passed through the
   * entire traversal. It can be used to store accumulations or anything else that
   * the callback might find relevant.
   *
   * @param {?*} children Children tree object.
   * @param {!function} callback To invoke upon traversing each child.
   * @param {?*} traverseContext Context for traversal.
   * @return {!number} The number of children in this subtree.
   */
  function traverseAllChildren(children, callback, traverseContext) {
    if (children == null) {
      return 0;
    }

    return traverseAllChildrenImpl(children, '', callback, traverseContext);
  }

  /**
   * Generate a key string that identifies a component within a set.
   *
   * @param {*} component A component that could contain a manual key.
   * @param {number} index Index that is used if a manual key is not provided.
   * @return {string}
   */
  function getComponentKey(component, index) {
    // Do some typechecking here since we call this blindly. We want to ensure
    // that we don't block potential future ES APIs.
    if ((typeof component === 'undefined' ? 'undefined' : _typeof(component)) === 'object' && component !== null && component.key != null) {
      // Explicit key
      return escape(component.key);
    }
    // Implicit key determined by the index in the set
    return index.toString(36);
  }

  function forEachSingleChild(bookKeeping, child, name) {
    var func = bookKeeping.func,
        context = bookKeeping.context;

    func.call(context, child, bookKeeping.count++);
  }

  /**
   * Iterates through children that are typically specified as `props.children`.
   *
   * See https://reactjs.org/docs/react-api.html#react.children.foreach
   *
   * The provided forEachFunc(child, index) will be called for each
   * leaf child.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} forEachFunc
   * @param {*} forEachContext Context for forEachContext.
   */
  function forEachChildren(children, forEachFunc, forEachContext) {
    if (children == null) {
      return children;
    }
    var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
    traverseAllChildren(children, forEachSingleChild, traverseContext);
    releaseTraverseContext(traverseContext);
  }

  function mapSingleChildIntoContext(bookKeeping, child, childKey) {
    var result = bookKeeping.result,
        keyPrefix = bookKeeping.keyPrefix,
        func = bookKeeping.func,
        context = bookKeeping.context;

    var mappedChild = func.call(context, child, bookKeeping.count++);
    if (Array.isArray(mappedChild)) {
      mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction_1.thatReturnsArgument);
    } else if (mappedChild != null) {
      if (isValidElement(mappedChild)) {
        mappedChild = cloneAndReplaceKey(mappedChild,
        // Keep both the (mapped) and old keys if they differ, just as
        // traverseAllChildren used to do for objects as children
        keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
      }
      result.push(mappedChild);
    }
  }

  function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
    var escapedPrefix = '';
    if (prefix != null) {
      escapedPrefix = escapeUserProvidedKey(prefix) + '/';
    }
    var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
    traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
    releaseTraverseContext(traverseContext);
  }

  /**
   * Maps children that are typically specified as `props.children`.
   *
   * See https://reactjs.org/docs/react-api.html#react.children.map
   *
   * The provided mapFunction(child, key, index) will be called for each
   * leaf child.
   *
   * @param {?*} children Children tree container.
   * @param {function(*, int)} func The map function.
   * @param {*} context Context for mapFunction.
   * @return {object} Object containing the ordered map of results.
   */
  function mapChildren(children, func, context) {
    if (children == null) {
      return children;
    }
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, func, context);
    return result;
  }

  /**
   * Count the number of children that are typically specified as
   * `props.children`.
   *
   * See https://reactjs.org/docs/react-api.html#react.children.count
   *
   * @param {?*} children Children tree container.
   * @return {number} The number of children.
   */
  function countChildren(children, context) {
    return traverseAllChildren(children, emptyFunction_1.thatReturnsNull, null);
  }

  /**
   * Flatten a children object (typically specified as `props.children`) and
   * return an array with appropriately re-keyed children.
   *
   * See https://reactjs.org/docs/react-api.html#react.children.toarray
   */
  function toArray(children) {
    var result = [];
    mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction_1.thatReturnsArgument);
    return result;
  }

  /**
   * Returns the first child in a collection of children and verifies that there
   * is only one child in the collection.
   *
   * See https://reactjs.org/docs/react-api.html#react.children.only
   *
   * The current implementation of this function assumes that a single child gets
   * passed without a wrapper, but the purpose of this helper function is to
   * abstract away the particular structure of children.
   *
   * @param {?object} children Child collection structure.
   * @return {ReactElement} The first and only `ReactElement` contained in the
   * structure.
   */
  function onlyChild(children) {
    !isValidElement(children) ? invariant_1(false, 'React.Children.only expected to receive a single React element child.') : void 0;
    return children;
  }

  function createContext(defaultValue, calculateChangedBits) {
    if (calculateChangedBits === undefined) {
      calculateChangedBits = null;
    } else {
      {
        !(calculateChangedBits === null || typeof calculateChangedBits === 'function') ? warning_1(false, 'createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits) : void 0;
      }
    }

    var context = {
      $$typeof: REACT_CONTEXT_TYPE,
      _calculateChangedBits: calculateChangedBits,
      _defaultValue: defaultValue,
      _currentValue: defaultValue,
      _changedBits: 0,
      // These are circular
      Provider: null,
      Consumer: null
    };

    context.Provider = {
      $$typeof: REACT_PROVIDER_TYPE,
      _context: context
    };
    context.Consumer = context;

    {
      context._currentRenderer = null;
    }

    return context;
  }

  function forwardRef(render) {
    {
      !(typeof render === 'function') ? warning_1(false, 'forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render === 'undefined' ? 'undefined' : _typeof(render)) : void 0;
    }

    return {
      $$typeof: REACT_FORWARD_REF_TYPE,
      render: render
    };
  }

  var describeComponentFrame = function describeComponentFrame(name, source, ownerName) {
    return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
  };

  function isValidElementType(type) {
    return typeof type === 'string' || typeof type === 'function' ||
    // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
    type === REACT_FRAGMENT_TYPE || type === REACT_ASYNC_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && (type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
  }

  function getComponentName(fiber) {
    var type = fiber.type;

    if (typeof type === 'function') {
      return type.displayName || type.name;
    }
    if (typeof type === 'string') {
      return type;
    }
    switch (type) {
      case REACT_FRAGMENT_TYPE:
        return 'ReactFragment';
      case REACT_PORTAL_TYPE:
        return 'ReactPortal';
      case REACT_CALL_TYPE:
        return 'ReactCall';
      case REACT_RETURN_TYPE:
        return 'ReactReturn';
    }
    if ((typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null) {
      switch (type.$$typeof) {
        case REACT_FORWARD_REF_TYPE:
          var functionName = type.render.displayName || type.render.name || '';
          return functionName !== '' ? 'ForwardRef(' + functionName + ')' : 'ForwardRef';
      }
    }
    return null;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    var invariant$2 = invariant_1;
    var warning$2 = warning_1;
    var ReactPropTypesSecret = ReactPropTypesSecret_1;
    var loggedTypeFailures = {};
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            invariant$2(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof(typeSpecs[typeSpecName]));
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          warning$2(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof(error));
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;

            var stack = getStack ? getStack() : '';

            warning$2(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
          }
        }
      }
    }
  }

  var checkPropTypes_1 = checkPropTypes;

  /**
   * ReactElementValidator provides a wrapper around a element factory
   * which validates the props passed to the element. This is intended to be
   * used only in DEV and could be replaced by a static type checker for languages
   * that support it.
   */

  var currentlyValidatingElement = void 0;
  var propTypesMisspellWarningShown = void 0;

  var getDisplayName = function getDisplayName() {};
  var getStackAddendum = function getStackAddendum() {};

  {
    currentlyValidatingElement = null;

    propTypesMisspellWarningShown = false;

    getDisplayName = function getDisplayName(element) {
      if (element == null) {
        return '#empty';
      } else if (typeof element === 'string' || typeof element === 'number') {
        return '#text';
      } else if (typeof element.type === 'string') {
        return element.type;
      } else if (element.type === REACT_FRAGMENT_TYPE) {
        return 'React.Fragment';
      } else {
        return element.type.displayName || element.type.name || 'Unknown';
      }
    };

    getStackAddendum = function getStackAddendum() {
      var stack = '';
      if (currentlyValidatingElement) {
        var name = getDisplayName(currentlyValidatingElement);
        var owner = currentlyValidatingElement._owner;
        stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
      }
      stack += ReactDebugCurrentFrame.getStackAddendum() || '';
      return stack;
    };
  }

  function getDeclarationErrorAddendum() {
    if (ReactCurrentOwner.current) {
      var name = getComponentName(ReactCurrentOwner.current);
      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }
    return '';
  }

  function getSourceInfoErrorAddendum(elementProps) {
    if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
      var source = elementProps.__source;
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }
    return '';
  }

  /**
   * Warn if there's no key explicitly set on dynamic arrays of children or
   * object keys are not valid. This allows us to keep track of children between
   * updates.
   */
  var ownerHasKeyUseWarning = {};

  function getCurrentComponentErrorInfo(parentType) {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
      if (parentName) {
        info = '\n\nCheck the top-level render call using <' + parentName + '>.';
      }
    }
    return info;
  }

  /**
   * Warn if the element doesn't have an explicit key assigned to it.
   * This element is in an array. The array could grow and shrink or be
   * reordered. All children that haven't already been validated are required to
   * have a "key" property assigned to it. Error statuses are cached so a warning
   * will only be shown once.
   *
   * @internal
   * @param {ReactElement} element Element that requires a key.
   * @param {*} parentType element's parent's type.
   */
  function validateExplicitKey(element, parentType) {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }
    element._store.validated = true;

    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }
    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

    // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.
    var childOwner = '';
    if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
      // Give the component that originally created this child.
      childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
    }

    currentlyValidatingElement = element;
    {
      warning_1(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
    }
    currentlyValidatingElement = null;
  }

  /**
   * Ensure that every element either is passed in a static location, in an
   * array with an explicit keys property defined, or in an object literal
   * with valid key property.
   *
   * @internal
   * @param {ReactNode} node Statically passed child of any type.
   * @param {*} parentType node's parent's type.
   */
  function validateChildKeys(node, parentType) {
    if ((typeof node === 'undefined' ? 'undefined' : _typeof(node)) !== 'object') {
      return;
    }
    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];
        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);
      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step = void 0;
          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }

  /**
   * Given an element, validate that its props follow the propTypes definition,
   * provided by the type.
   *
   * @param {ReactElement} element
   */
  function validatePropTypes(element) {
    var componentClass = element.type;
    if (typeof componentClass !== 'function') {
      return;
    }
    var name = componentClass.displayName || componentClass.name;
    var propTypes = componentClass.propTypes;
    if (propTypes) {
      currentlyValidatingElement = element;
      checkPropTypes_1(propTypes, element.props, 'prop', name, getStackAddendum);
      currentlyValidatingElement = null;
    } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;
      warning_1(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }
    if (typeof componentClass.getDefaultProps === 'function') {
      !componentClass.getDefaultProps.isReactClassApproved ? warning_1(false, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
    }
  }

  /**
   * Given a fragment, validate that it can only be provided with fragment props
   * @param {ReactElement} fragment
   */
  function validateFragmentProps(fragment) {
    currentlyValidatingElement = fragment;

    var keys = Object.keys(fragment.props);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key !== 'children' && key !== 'key') {
        warning_1(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
        break;
      }
    }

    if (fragment.ref !== null) {
      warning_1(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
    }

    currentlyValidatingElement = null;
  }

  function createElementWithValidation(type, props, children) {
    var validType = isValidElementType(type);

    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      var info = '';
      if (type === undefined || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(props);
      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      info += getStackAddendum() || '';

      var typeString = void 0;
      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else {
        typeString = typeof type === 'undefined' ? 'undefined' : _typeof(type);
      }

      warning_1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    if (type === REACT_FRAGMENT_TYPE) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }

  function createFactoryWithValidation(type) {
    var validatedFactory = createElementWithValidation.bind(null, type);
    validatedFactory.type = type;
    // Legacy hook: remove it
    {
      Object.defineProperty(validatedFactory, 'type', {
        enumerable: false,
        get: function get() {
          lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
          Object.defineProperty(this, 'type', {
            value: type
          });
          return type;
        }
      });
    }

    return validatedFactory;
  }

  function cloneElementWithValidation(element, props, children) {
    var newElement = cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }

  var React = {
    Children: {
      map: mapChildren,
      forEach: forEachChildren,
      count: countChildren,
      toArray: toArray,
      only: onlyChild
    },

    createRef: createRef,
    Component: Component,
    PureComponent: PureComponent,

    createContext: createContext,
    forwardRef: forwardRef,

    Fragment: REACT_FRAGMENT_TYPE,
    StrictMode: REACT_STRICT_MODE_TYPE,
    unstable_AsyncMode: REACT_ASYNC_MODE_TYPE,

    createElement: createElementWithValidation,
    cloneElement: cloneElementWithValidation,
    createFactory: createFactoryWithValidation,
    isValidElement: isValidElement,

    version: ReactVersion,

    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
      ReactCurrentOwner: ReactCurrentOwner,
      // Used by renderers to avoid bundling object-assign twice in UMD bundles:
      assign: objectAssign
    }
  };

  {
    objectAssign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
      // These should not be included in production.
      ReactDebugCurrentFrame: ReactDebugCurrentFrame,
      // Shim for React DOM 16.0.0 which still destructured (but not used) this.
      // TODO: remove in React 17.0.
      ReactComponentTreeHook: {}
    });
  }

  var React$2 = Object.freeze({
    default: React
  });

  var React$3 = React$2 && React || React$2;

  // TODO: decide on the top-level export form.
  // This is hacky but makes it work with both Rollup and Jest.
  var react = React$3['default'] ? React$3['default'] : React$3;

  return react;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3B1YmxpYy9yZWFjdC5kZXZlbG9wbWVudC5qcyJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmluZSIsImFtZCIsIlJlYWN0IiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsInVuZGVmaW5lZCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsImFzc2lnbiIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiaSIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsIm1hcCIsIm4iLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJrZXlzIiwiZXJyIiwib2JqZWN0QXNzaWduIiwidGFyZ2V0Iiwic291cmNlIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJrZXkiLCJjYWxsIiwiUmVhY3RWZXJzaW9uIiwiaGFzU3ltYm9sIiwiU3ltYm9sIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiUkVBQ1RfQ0FMTF9UWVBFIiwiUkVBQ1RfUkVUVVJOX1RZUEUiLCJSRUFDVF9QT1JUQUxfVFlQRSIsIlJFQUNUX0ZSQUdNRU5UX1RZUEUiLCJSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0FTWU5DX01PREVfVFlQRSIsIlJFQUNUX0ZPUldBUkRfUkVGX1RZUEUiLCJNQVlCRV9JVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJtYXliZUl0ZXJhdG9yIiwidmFsaWRhdGVGb3JtYXQiLCJmb3JtYXQiLCJFcnJvciIsImludmFyaWFudCIsImNvbmRpdGlvbiIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsImVycm9yIiwiYXJncyIsImFyZ0luZGV4IiwicmVwbGFjZSIsIm5hbWUiLCJmcmFtZXNUb1BvcCIsImludmFyaWFudF8xIiwiZW1wdHlPYmplY3QiLCJmcmVlemUiLCJlbXB0eU9iamVjdF8xIiwibG93UHJpb3JpdHlXYXJuaW5nIiwicHJpbnRXYXJuaW5nIiwiX2xlbiIsIkFycmF5IiwiX2tleSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwid2FybiIsIngiLCJfbGVuMiIsIl9rZXkyIiwiYXBwbHkiLCJjb25jYXQiLCJsb3dQcmlvcml0eVdhcm5pbmckMSIsIm1ha2VFbXB0eUZ1bmN0aW9uIiwiYXJnIiwiZW1wdHlGdW5jdGlvbiIsInRoYXRSZXR1cm5zIiwidGhhdFJldHVybnNGYWxzZSIsInRoYXRSZXR1cm5zVHJ1ZSIsInRoYXRSZXR1cm5zTnVsbCIsInRoYXRSZXR1cm5zVGhpcyIsInRoYXRSZXR1cm5zQXJndW1lbnQiLCJlbXB0eUZ1bmN0aW9uXzEiLCJ3YXJuaW5nIiwicHJpbnRXYXJuaW5nJDEiLCJpbmRleE9mIiwid2FybmluZ18xIiwiZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50Iiwid2Fybk5vb3AiLCJwdWJsaWNJbnN0YW5jZSIsImNhbGxlck5hbWUiLCJfY29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImNvbXBvbmVudE5hbWUiLCJkaXNwbGF5TmFtZSIsIndhcm5pbmdLZXkiLCJSZWFjdE5vb3BVcGRhdGVRdWV1ZSIsImlzTW91bnRlZCIsImVucXVldWVGb3JjZVVwZGF0ZSIsImNhbGxiYWNrIiwiZW5xdWV1ZVJlcGxhY2VTdGF0ZSIsImNvbXBsZXRlU3RhdGUiLCJlbnF1ZXVlU2V0U3RhdGUiLCJwYXJ0aWFsU3RhdGUiLCJDb21wb25lbnQiLCJwcm9wcyIsImNvbnRleHQiLCJ1cGRhdGVyIiwicmVmcyIsImlzUmVhY3RDb21wb25lbnQiLCJzZXRTdGF0ZSIsImZvcmNlVXBkYXRlIiwiZGVwcmVjYXRlZEFQSXMiLCJyZXBsYWNlU3RhdGUiLCJkZWZpbmVEZXByZWNhdGlvbldhcm5pbmciLCJtZXRob2ROYW1lIiwiaW5mbyIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiZm5OYW1lIiwiQ29tcG9uZW50RHVtbXkiLCJQdXJlQ29tcG9uZW50IiwicHVyZUNvbXBvbmVudFByb3RvdHlwZSIsImlzUHVyZVJlYWN0Q29tcG9uZW50IiwiY3JlYXRlUmVmIiwicmVmT2JqZWN0IiwiY3VycmVudCIsInNlYWwiLCJSZWFjdEN1cnJlbnRPd25lciIsImhhc093blByb3BlcnR5JDEiLCJSRVNFUlZFRF9QUk9QUyIsInJlZiIsIl9fc2VsZiIsIl9fc291cmNlIiwic3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24iLCJzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biIsImhhc1ZhbGlkUmVmIiwiY29uZmlnIiwiZ2V0dGVyIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiaXNSZWFjdFdhcm5pbmciLCJoYXNWYWxpZEtleSIsImRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyIiwid2FybkFib3V0QWNjZXNzaW5nS2V5IiwiY29uZmlndXJhYmxlIiwiZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIiLCJ3YXJuQWJvdXRBY2Nlc3NpbmdSZWYiLCJSZWFjdEVsZW1lbnQiLCJ0eXBlIiwic2VsZiIsIm93bmVyIiwiZWxlbWVudCIsIiQkdHlwZW9mIiwiX293bmVyIiwiX3N0b3JlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGRyZW4iLCJwcm9wTmFtZSIsImNoaWxkcmVuTGVuZ3RoIiwiY2hpbGRBcnJheSIsImRlZmF1bHRQcm9wcyIsImNsb25lQW5kUmVwbGFjZUtleSIsIm9sZEVsZW1lbnQiLCJuZXdLZXkiLCJuZXdFbGVtZW50IiwiX3NlbGYiLCJfc291cmNlIiwiY2xvbmVFbGVtZW50IiwiaXNWYWxpZEVsZW1lbnQiLCJvYmplY3QiLCJSZWFjdERlYnVnQ3VycmVudEZyYW1lIiwiZ2V0Q3VycmVudFN0YWNrIiwiZ2V0U3RhY2tBZGRlbmR1bSIsImltcGwiLCJTRVBBUkFUT1IiLCJTVUJTRVBBUkFUT1IiLCJlc2NhcGUiLCJlc2NhcGVSZWdleCIsImVzY2FwZXJMb29rdXAiLCJlc2NhcGVkU3RyaW5nIiwibWF0Y2giLCJkaWRXYXJuQWJvdXRNYXBzIiwidXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgiLCJlc2NhcGVVc2VyUHJvdmlkZWRLZXkiLCJ0ZXh0IiwiUE9PTF9TSVpFIiwidHJhdmVyc2VDb250ZXh0UG9vbCIsImdldFBvb2xlZFRyYXZlcnNlQ29udGV4dCIsIm1hcFJlc3VsdCIsImtleVByZWZpeCIsIm1hcEZ1bmN0aW9uIiwibWFwQ29udGV4dCIsInRyYXZlcnNlQ29udGV4dCIsInBvcCIsInJlc3VsdCIsImZ1bmMiLCJjb3VudCIsInJlbGVhc2VUcmF2ZXJzZUNvbnRleHQiLCJwdXNoIiwidHJhdmVyc2VBbGxDaGlsZHJlbkltcGwiLCJuYW1lU29GYXIiLCJpbnZva2VDYWxsYmFjayIsImdldENvbXBvbmVudEtleSIsImNoaWxkIiwibmV4dE5hbWUiLCJzdWJ0cmVlQ291bnQiLCJuZXh0TmFtZVByZWZpeCIsImlzQXJyYXkiLCJpdGVyYXRvckZuIiwiZW50cmllcyIsInN0ZXAiLCJpaSIsIm5leHQiLCJkb25lIiwiYWRkZW5kdW0iLCJjaGlsZHJlblN0cmluZyIsInRyYXZlcnNlQWxsQ2hpbGRyZW4iLCJjb21wb25lbnQiLCJpbmRleCIsInRvU3RyaW5nIiwiZm9yRWFjaFNpbmdsZUNoaWxkIiwiYm9va0tlZXBpbmciLCJmb3JFYWNoQ2hpbGRyZW4iLCJmb3JFYWNoRnVuYyIsImZvckVhY2hDb250ZXh0IiwibWFwU2luZ2xlQ2hpbGRJbnRvQ29udGV4dCIsImNoaWxkS2V5IiwibWFwcGVkQ2hpbGQiLCJtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsIiwiYXJyYXkiLCJwcmVmaXgiLCJlc2NhcGVkUHJlZml4IiwibWFwQ2hpbGRyZW4iLCJjb3VudENoaWxkcmVuIiwidG9BcnJheSIsIm9ubHlDaGlsZCIsImNyZWF0ZUNvbnRleHQiLCJkZWZhdWx0VmFsdWUiLCJjYWxjdWxhdGVDaGFuZ2VkQml0cyIsIl9jYWxjdWxhdGVDaGFuZ2VkQml0cyIsIl9kZWZhdWx0VmFsdWUiLCJfY3VycmVudFZhbHVlIiwiX2NoYW5nZWRCaXRzIiwiUHJvdmlkZXIiLCJDb25zdW1lciIsIl9jb250ZXh0IiwiX2N1cnJlbnRSZW5kZXJlciIsImZvcndhcmRSZWYiLCJyZW5kZXIiLCJkZXNjcmliZUNvbXBvbmVudEZyYW1lIiwib3duZXJOYW1lIiwiZmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZ2V0Q29tcG9uZW50TmFtZSIsImZpYmVyIiwiZnVuY3Rpb25OYW1lIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQkMSIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0XzEiLCJpbnZhcmlhbnQkMiIsIndhcm5pbmckMiIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwiY2hlY2tQcm9wVHlwZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJsb2NhdGlvbiIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwiZXgiLCJzdGFjayIsImNoZWNrUHJvcFR5cGVzXzEiLCJjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCIsInByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duIiwiZ2V0RGlzcGxheU5hbWUiLCJnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0iLCJnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bSIsImVsZW1lbnRQcm9wcyIsIm93bmVySGFzS2V5VXNlV2FybmluZyIsImdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8iLCJwYXJlbnRUeXBlIiwicGFyZW50TmFtZSIsInZhbGlkYXRlRXhwbGljaXRLZXkiLCJ2YWxpZGF0ZWQiLCJjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvIiwiY2hpbGRPd25lciIsInZhbGlkYXRlQ2hpbGRLZXlzIiwibm9kZSIsInZhbGlkYXRlUHJvcFR5cGVzIiwiY29tcG9uZW50Q2xhc3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJnZXREZWZhdWx0UHJvcHMiLCJpc1JlYWN0Q2xhc3NBcHByb3ZlZCIsInZhbGlkYXRlRnJhZ21lbnRQcm9wcyIsImZyYWdtZW50IiwiY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uIiwidmFsaWRUeXBlIiwic291cmNlSW5mbyIsInR5cGVTdHJpbmciLCJjcmVhdGVGYWN0b3J5V2l0aFZhbGlkYXRpb24iLCJ2YWxpZGF0ZWRGYWN0b3J5IiwiYmluZCIsImNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uIiwiQ2hpbGRyZW4iLCJvbmx5IiwiRnJhZ21lbnQiLCJTdHJpY3RNb2RlIiwidW5zdGFibGVfQXN5bmNNb2RlIiwiY3JlYXRlRmFjdG9yeSIsInZlcnNpb24iLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsIlJlYWN0Q29tcG9uZW50VHJlZUhvb2siLCJSZWFjdCQyIiwiZGVmYXVsdCIsIlJlYWN0JDMiLCJyZWFjdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVNBOzs7O0FBRUMsV0FBVUEsTUFBVixFQUFrQkMsT0FBbEIsRUFBMkI7QUFDM0IsVUFBT0MsT0FBUCx5Q0FBT0EsT0FBUCxPQUFtQixRQUFuQixJQUErQixPQUFPQyxNQUFQLEtBQWtCLFdBQWpELEdBQStEQSxPQUFPRCxPQUFQLEdBQWlCRCxTQUFoRixHQUNBLE9BQU9HLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE9BQU9DLEdBQXZDLEdBQTZDRCxPQUFPSCxPQUFQLENBQTdDLEdBQ0NELE9BQU9NLEtBQVAsR0FBZUwsU0FGaEI7QUFHQSxDQUpBLGFBSVEsWUFBWTtBQUFFOztBQUV2Qjs7Ozs7O0FBT0E7O0FBQ0EsTUFBSU0sd0JBQXdCQyxPQUFPRCxxQkFBbkM7QUFDQSxNQUFJRSxpQkFBaUJELE9BQU9FLFNBQVAsQ0FBaUJELGNBQXRDO0FBQ0EsTUFBSUUsbUJBQW1CSCxPQUFPRSxTQUFQLENBQWlCRSxvQkFBeEM7O0FBRUEsV0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDdEIsUUFBSUEsUUFBUSxJQUFSLElBQWdCQSxRQUFRQyxTQUE1QixFQUF1QztBQUN0QyxZQUFNLElBQUlDLFNBQUosQ0FBYyx1REFBZCxDQUFOO0FBQ0E7O0FBRUQsV0FBT1IsT0FBT00sR0FBUCxDQUFQO0FBQ0E7O0FBRUQsV0FBU0csZUFBVCxHQUEyQjtBQUMxQixRQUFJO0FBQ0gsVUFBSSxDQUFDVCxPQUFPVSxNQUFaLEVBQW9CO0FBQ25CLGVBQU8sS0FBUDtBQUNBOztBQUVEOztBQUVBO0FBQ0EsVUFBSUMsUUFBUSxJQUFJQyxNQUFKLENBQVcsS0FBWCxDQUFaLENBUkcsQ0FRNkI7QUFDaENELFlBQU0sQ0FBTixJQUFXLElBQVg7QUFDQSxVQUFJWCxPQUFPYSxtQkFBUCxDQUEyQkYsS0FBM0IsRUFBa0MsQ0FBbEMsTUFBeUMsR0FBN0MsRUFBa0Q7QUFDakQsZUFBTyxLQUFQO0FBQ0E7O0FBRUQ7QUFDQSxVQUFJRyxRQUFRLEVBQVo7QUFDQSxXQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxFQUFwQixFQUF3QkEsR0FBeEIsRUFBNkI7QUFDNUJELGNBQU0sTUFBTUYsT0FBT0ksWUFBUCxDQUFvQkQsQ0FBcEIsQ0FBWixJQUFzQ0EsQ0FBdEM7QUFDQTtBQUNELFVBQUlFLFNBQVNqQixPQUFPYSxtQkFBUCxDQUEyQkMsS0FBM0IsRUFBa0NJLEdBQWxDLENBQXNDLFVBQVVDLENBQVYsRUFBYTtBQUMvRCxlQUFPTCxNQUFNSyxDQUFOLENBQVA7QUFDQSxPQUZZLENBQWI7QUFHQSxVQUFJRixPQUFPRyxJQUFQLENBQVksRUFBWixNQUFvQixZQUF4QixFQUFzQztBQUNyQyxlQUFPLEtBQVA7QUFDQTs7QUFFRDtBQUNBLFVBQUlDLFFBQVEsRUFBWjtBQUNBLDZCQUF1QkMsS0FBdkIsQ0FBNkIsRUFBN0IsRUFBaUNDLE9BQWpDLENBQXlDLFVBQVVDLE1BQVYsRUFBa0I7QUFDMURILGNBQU1HLE1BQU4sSUFBZ0JBLE1BQWhCO0FBQ0EsT0FGRDtBQUdBLFVBQUl4QixPQUFPeUIsSUFBUCxDQUFZekIsT0FBT1UsTUFBUCxDQUFjLEVBQWQsRUFBa0JXLEtBQWxCLENBQVosRUFBc0NELElBQXRDLENBQTJDLEVBQTNDLE1BQ0Ysc0JBREYsRUFDMEI7QUFDekIsZUFBTyxLQUFQO0FBQ0E7O0FBRUQsYUFBTyxJQUFQO0FBQ0EsS0FyQ0QsQ0FxQ0UsT0FBT00sR0FBUCxFQUFZO0FBQ2I7QUFDQSxhQUFPLEtBQVA7QUFDQTtBQUNEOztBQUVELE1BQUlDLGVBQWVsQixvQkFBb0JULE9BQU9VLE1BQTNCLEdBQW9DLFVBQVVrQixNQUFWLEVBQWtCQyxNQUFsQixFQUEwQjtBQUNoRixRQUFJQyxJQUFKO0FBQ0EsUUFBSUMsS0FBSzFCLFNBQVN1QixNQUFULENBQVQ7QUFDQSxRQUFJSSxPQUFKOztBQUVBLFNBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxVQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFDMUNILGFBQU85QixPQUFPa0MsVUFBVUQsQ0FBVixDQUFQLENBQVA7O0FBRUEsV0FBSyxJQUFJRyxHQUFULElBQWdCTixJQUFoQixFQUFzQjtBQUNyQixZQUFJN0IsZUFBZW9DLElBQWYsQ0FBb0JQLElBQXBCLEVBQTBCTSxHQUExQixDQUFKLEVBQW9DO0FBQ25DTCxhQUFHSyxHQUFILElBQVVOLEtBQUtNLEdBQUwsQ0FBVjtBQUNBO0FBQ0Q7O0FBRUQsVUFBSXJDLHFCQUFKLEVBQTJCO0FBQzFCaUMsa0JBQVVqQyxzQkFBc0IrQixJQUF0QixDQUFWO0FBQ0EsYUFBSyxJQUFJZixJQUFJLENBQWIsRUFBZ0JBLElBQUlpQixRQUFRRyxNQUE1QixFQUFvQ3BCLEdBQXBDLEVBQXlDO0FBQ3hDLGNBQUlaLGlCQUFpQmtDLElBQWpCLENBQXNCUCxJQUF0QixFQUE0QkUsUUFBUWpCLENBQVIsQ0FBNUIsQ0FBSixFQUE2QztBQUM1Q2dCLGVBQUdDLFFBQVFqQixDQUFSLENBQUgsSUFBaUJlLEtBQUtFLFFBQVFqQixDQUFSLENBQUwsQ0FBakI7QUFDQTtBQUNEO0FBQ0Q7QUFDRDs7QUFFRCxXQUFPZ0IsRUFBUDtBQUNBLEdBekJEOztBQTJCQTs7QUFFQSxNQUFJTyxlQUFlLFFBQW5COztBQUVBO0FBQ0E7QUFDQSxNQUFJQyxZQUFZLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0NBLE9BQU8sS0FBUCxDQUFoRDs7QUFFQSxNQUFJQyxxQkFBcUJGLFlBQVlDLE9BQU8sS0FBUCxFQUFjLGVBQWQsQ0FBWixHQUE2QyxNQUF0RTtBQUNBLE1BQUlFLGtCQUFrQkgsWUFBWUMsT0FBTyxLQUFQLEVBQWMsWUFBZCxDQUFaLEdBQTBDLE1BQWhFO0FBQ0EsTUFBSUcsb0JBQW9CSixZQUFZQyxPQUFPLEtBQVAsRUFBYyxjQUFkLENBQVosR0FBNEMsTUFBcEU7QUFDQSxNQUFJSSxvQkFBb0JMLFlBQVlDLE9BQU8sS0FBUCxFQUFjLGNBQWQsQ0FBWixHQUE0QyxNQUFwRTtBQUNBLE1BQUlLLHNCQUFzQk4sWUFBWUMsT0FBTyxLQUFQLEVBQWMsZ0JBQWQsQ0FBWixHQUE4QyxNQUF4RTtBQUNBLE1BQUlNLHlCQUF5QlAsWUFBWUMsT0FBTyxLQUFQLEVBQWMsbUJBQWQsQ0FBWixHQUFpRCxNQUE5RTtBQUNBLE1BQUlPLHNCQUFzQlIsWUFBWUMsT0FBTyxLQUFQLEVBQWMsZ0JBQWQsQ0FBWixHQUE4QyxNQUF4RTtBQUNBLE1BQUlRLHFCQUFxQlQsWUFBWUMsT0FBTyxLQUFQLEVBQWMsZUFBZCxDQUFaLEdBQTZDLE1BQXRFO0FBQ0EsTUFBSVMsd0JBQXdCVixZQUFZQyxPQUFPLEtBQVAsRUFBYyxrQkFBZCxDQUFaLEdBQWdELE1BQTVFO0FBQ0EsTUFBSVUseUJBQXlCWCxZQUFZQyxPQUFPLEtBQVAsRUFBYyxtQkFBZCxDQUFaLEdBQWlELE1BQTlFOztBQUVBLE1BQUlXLHdCQUF3QixPQUFPWCxNQUFQLEtBQWtCLFVBQWxCLElBQWdDQSxPQUFPWSxRQUFuRTtBQUNBLE1BQUlDLHVCQUF1QixZQUEzQjs7QUFFQSxXQUFTQyxhQUFULENBQXVCQyxhQUF2QixFQUFzQztBQUNwQyxRQUFJQSxrQkFBa0IsSUFBbEIsSUFBMEIsT0FBT0EsYUFBUCxLQUF5QixXQUF2RCxFQUFvRTtBQUNsRSxhQUFPLElBQVA7QUFDRDtBQUNELFFBQUlDLGdCQUFnQkwseUJBQXlCSSxjQUFjSixxQkFBZCxDQUF6QixJQUFpRUksY0FBY0Ysb0JBQWQsQ0FBckY7QUFDQSxRQUFJLE9BQU9HLGFBQVAsS0FBeUIsVUFBN0IsRUFBeUM7QUFDdkMsYUFBT0EsYUFBUDtBQUNEO0FBQ0QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7O0FBV0EsTUFBSUMsaUJBQWlCLFNBQVNBLGNBQVQsQ0FBd0JDLE1BQXhCLEVBQWdDLENBQUUsQ0FBdkQ7O0FBRUE7QUFDRUQscUJBQWlCLFNBQVNBLGNBQVQsQ0FBd0JDLE1BQXhCLEVBQWdDO0FBQy9DLFVBQUlBLFdBQVduRCxTQUFmLEVBQTBCO0FBQ3hCLGNBQU0sSUFBSW9ELEtBQUosQ0FBVSw4Q0FBVixDQUFOO0FBQ0Q7QUFDRixLQUpEO0FBS0Q7O0FBRUQsV0FBU0MsU0FBVCxDQUFtQkMsU0FBbkIsRUFBOEJILE1BQTlCLEVBQXNDSSxDQUF0QyxFQUF5Q0MsQ0FBekMsRUFBNENDLENBQTVDLEVBQStDQyxDQUEvQyxFQUFrREMsQ0FBbEQsRUFBcURDLENBQXJELEVBQXdEO0FBQ3REVixtQkFBZUMsTUFBZjs7QUFFQSxRQUFJLENBQUNHLFNBQUwsRUFBZ0I7QUFDZCxVQUFJTyxLQUFKO0FBQ0EsVUFBSVYsV0FBV25ELFNBQWYsRUFBMEI7QUFDeEI2RCxnQkFBUSxJQUFJVCxLQUFKLENBQVUsdUVBQXVFLDZEQUFqRixDQUFSO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBSVUsT0FBTyxDQUFDUCxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLENBQVg7QUFDQSxZQUFJRyxXQUFXLENBQWY7QUFDQUYsZ0JBQVEsSUFBSVQsS0FBSixDQUFVRCxPQUFPYSxPQUFQLENBQWUsS0FBZixFQUFzQixZQUFZO0FBQ2xELGlCQUFPRixLQUFLQyxVQUFMLENBQVA7QUFDRCxTQUZpQixDQUFWLENBQVI7QUFHQUYsY0FBTUksSUFBTixHQUFhLHFCQUFiO0FBQ0Q7O0FBRURKLFlBQU1LLFdBQU4sR0FBb0IsQ0FBcEIsQ0FiYyxDQWFTO0FBQ3ZCLFlBQU1MLEtBQU47QUFDRDtBQUNGOztBQUVELE1BQUlNLGNBQWNkLFNBQWxCOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBVUEsTUFBSWUsY0FBYyxFQUFsQjs7QUFFQTtBQUNFM0UsV0FBTzRFLE1BQVAsQ0FBY0QsV0FBZDtBQUNEOztBQUVELE1BQUlFLGdCQUFnQkYsV0FBcEI7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBY0EsTUFBSUcscUJBQXFCLDhCQUFZLENBQUUsQ0FBdkM7O0FBRUE7QUFDRSxRQUFJQyxlQUFlLFNBQWZBLFlBQWUsQ0FBVXJCLE1BQVYsRUFBa0I7QUFDbkMsV0FBSyxJQUFJc0IsT0FBTzlDLFVBQVVDLE1BQXJCLEVBQTZCa0MsT0FBT1ksTUFBTUQsT0FBTyxDQUFQLEdBQVdBLE9BQU8sQ0FBbEIsR0FBc0IsQ0FBNUIsQ0FBcEMsRUFBb0VFLE9BQU8sQ0FBaEYsRUFBbUZBLE9BQU9GLElBQTFGLEVBQWdHRSxNQUFoRyxFQUF3RztBQUN0R2IsYUFBS2EsT0FBTyxDQUFaLElBQWlCaEQsVUFBVWdELElBQVYsQ0FBakI7QUFDRDs7QUFFRCxVQUFJWixXQUFXLENBQWY7QUFDQSxVQUFJYSxVQUFVLGNBQWN6QixPQUFPYSxPQUFQLENBQWUsS0FBZixFQUFzQixZQUFZO0FBQzVELGVBQU9GLEtBQUtDLFVBQUwsQ0FBUDtBQUNELE9BRjJCLENBQTVCO0FBR0EsVUFBSSxPQUFPYyxPQUFQLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ2xDQSxnQkFBUUMsSUFBUixDQUFhRixPQUFiO0FBQ0Q7QUFDRCxVQUFJO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsY0FBTSxJQUFJeEIsS0FBSixDQUFVd0IsT0FBVixDQUFOO0FBQ0QsT0FMRCxDQUtFLE9BQU9HLENBQVAsRUFBVSxDQUFFO0FBQ2YsS0FsQkQ7O0FBb0JBUix5QkFBcUIsNEJBQVVqQixTQUFWLEVBQXFCSCxNQUFyQixFQUE2QjtBQUNoRCxVQUFJQSxXQUFXbkQsU0FBZixFQUEwQjtBQUN4QixjQUFNLElBQUlvRCxLQUFKLENBQVUsOERBQThELGtCQUF4RSxDQUFOO0FBQ0Q7QUFDRCxVQUFJLENBQUNFLFNBQUwsRUFBZ0I7QUFDZCxhQUFLLElBQUkwQixRQUFRckQsVUFBVUMsTUFBdEIsRUFBOEJrQyxPQUFPWSxNQUFNTSxRQUFRLENBQVIsR0FBWUEsUUFBUSxDQUFwQixHQUF3QixDQUE5QixDQUFyQyxFQUF1RUMsUUFBUSxDQUFwRixFQUF1RkEsUUFBUUQsS0FBL0YsRUFBc0dDLE9BQXRHLEVBQStHO0FBQzdHbkIsZUFBS21CLFFBQVEsQ0FBYixJQUFrQnRELFVBQVVzRCxLQUFWLENBQWxCO0FBQ0Q7O0FBRURULHFCQUFhVSxLQUFiLENBQW1CbEYsU0FBbkIsRUFBOEIsQ0FBQ21ELE1BQUQsRUFBU2dDLE1BQVQsQ0FBZ0JyQixJQUFoQixDQUE5QjtBQUNEO0FBQ0YsS0FYRDtBQVlEOztBQUVELE1BQUlzQix1QkFBdUJiLGtCQUEzQjs7QUFFQTs7Ozs7Ozs7O0FBU0EsV0FBU2MsaUJBQVQsQ0FBMkJDLEdBQTNCLEVBQWdDO0FBQzlCLFdBQU8sWUFBWTtBQUNqQixhQUFPQSxHQUFQO0FBQ0QsS0FGRDtBQUdEOztBQUVEOzs7OztBQUtBLE1BQUlDLGdCQUFnQixTQUFTQSxhQUFULEdBQXlCLENBQUUsQ0FBL0M7O0FBRUFBLGdCQUFjQyxXQUFkLEdBQTRCSCxpQkFBNUI7QUFDQUUsZ0JBQWNFLGdCQUFkLEdBQWlDSixrQkFBa0IsS0FBbEIsQ0FBakM7QUFDQUUsZ0JBQWNHLGVBQWQsR0FBZ0NMLGtCQUFrQixJQUFsQixDQUFoQztBQUNBRSxnQkFBY0ksZUFBZCxHQUFnQ04sa0JBQWtCLElBQWxCLENBQWhDO0FBQ0FFLGdCQUFjSyxlQUFkLEdBQWdDLFlBQVk7QUFDMUMsV0FBTyxJQUFQO0FBQ0QsR0FGRDtBQUdBTCxnQkFBY00sbUJBQWQsR0FBb0MsVUFBVVAsR0FBVixFQUFlO0FBQ2pELFdBQU9BLEdBQVA7QUFDRCxHQUZEOztBQUlBLE1BQUlRLGtCQUFrQlAsYUFBdEI7O0FBRUE7Ozs7Ozs7O0FBWUE7Ozs7Ozs7QUFPQSxNQUFJUSxVQUFVRCxlQUFkOztBQUVBO0FBQ0UsUUFBSUUsaUJBQWlCLFNBQVN4QixZQUFULENBQXNCckIsTUFBdEIsRUFBOEI7QUFDakQsV0FBSyxJQUFJc0IsT0FBTzlDLFVBQVVDLE1BQXJCLEVBQTZCa0MsT0FBT1ksTUFBTUQsT0FBTyxDQUFQLEdBQVdBLE9BQU8sQ0FBbEIsR0FBc0IsQ0FBNUIsQ0FBcEMsRUFBb0VFLE9BQU8sQ0FBaEYsRUFBbUZBLE9BQU9GLElBQTFGLEVBQWdHRSxNQUFoRyxFQUF3RztBQUN0R2IsYUFBS2EsT0FBTyxDQUFaLElBQWlCaEQsVUFBVWdELElBQVYsQ0FBakI7QUFDRDs7QUFFRCxVQUFJWixXQUFXLENBQWY7QUFDQSxVQUFJYSxVQUFVLGNBQWN6QixPQUFPYSxPQUFQLENBQWUsS0FBZixFQUFzQixZQUFZO0FBQzVELGVBQU9GLEtBQUtDLFVBQUwsQ0FBUDtBQUNELE9BRjJCLENBQTVCO0FBR0EsVUFBSSxPQUFPYyxPQUFQLEtBQW1CLFdBQXZCLEVBQW9DO0FBQ2xDQSxnQkFBUWhCLEtBQVIsQ0FBY2UsT0FBZDtBQUNEO0FBQ0QsVUFBSTtBQUNGO0FBQ0E7QUFDQTtBQUNBLGNBQU0sSUFBSXhCLEtBQUosQ0FBVXdCLE9BQVYsQ0FBTjtBQUNELE9BTEQsQ0FLRSxPQUFPRyxDQUFQLEVBQVUsQ0FBRTtBQUNmLEtBbEJEOztBQW9CQWdCLGNBQVUsU0FBU0EsT0FBVCxDQUFpQnpDLFNBQWpCLEVBQTRCSCxNQUE1QixFQUFvQztBQUM1QyxVQUFJQSxXQUFXbkQsU0FBZixFQUEwQjtBQUN4QixjQUFNLElBQUlvRCxLQUFKLENBQVUsOERBQThELGtCQUF4RSxDQUFOO0FBQ0Q7O0FBRUQsVUFBSUQsT0FBTzhDLE9BQVAsQ0FBZSw2QkFBZixNQUFrRCxDQUF0RCxFQUF5RDtBQUN2RCxlQUR1RCxDQUMvQztBQUNUOztBQUVELFVBQUksQ0FBQzNDLFNBQUwsRUFBZ0I7QUFDZCxhQUFLLElBQUkwQixRQUFRckQsVUFBVUMsTUFBdEIsRUFBOEJrQyxPQUFPWSxNQUFNTSxRQUFRLENBQVIsR0FBWUEsUUFBUSxDQUFwQixHQUF3QixDQUE5QixDQUFyQyxFQUF1RUMsUUFBUSxDQUFwRixFQUF1RkEsUUFBUUQsS0FBL0YsRUFBc0dDLE9BQXRHLEVBQStHO0FBQzdHbkIsZUFBS21CLFFBQVEsQ0FBYixJQUFrQnRELFVBQVVzRCxLQUFWLENBQWxCO0FBQ0Q7O0FBRURlLHVCQUFlZCxLQUFmLENBQXFCbEYsU0FBckIsRUFBZ0MsQ0FBQ21ELE1BQUQsRUFBU2dDLE1BQVQsQ0FBZ0JyQixJQUFoQixDQUFoQztBQUNEO0FBQ0YsS0FoQkQ7QUFpQkQ7O0FBRUQsTUFBSW9DLFlBQVlILE9BQWhCOztBQUVBLE1BQUlJLDBDQUEwQyxFQUE5Qzs7QUFFQSxXQUFTQyxRQUFULENBQWtCQyxjQUFsQixFQUFrQ0MsVUFBbEMsRUFBOEM7QUFDNUM7QUFDRSxVQUFJQyxlQUFlRixlQUFlRyxXQUFsQztBQUNBLFVBQUlDLGdCQUFnQkYsaUJBQWlCQSxhQUFhRyxXQUFiLElBQTRCSCxhQUFhdEMsSUFBMUQsS0FBbUUsWUFBdkY7QUFDQSxVQUFJMEMsYUFBYUYsZ0JBQWdCLEdBQWhCLEdBQXNCSCxVQUF2QztBQUNBLFVBQUlILHdDQUF3Q1EsVUFBeEMsQ0FBSixFQUF5RDtBQUN2RDtBQUNEO0FBQ0RULGdCQUFVLEtBQVYsRUFBaUIsMkRBQTJELG9FQUEzRCxHQUFrSSxxRUFBbEksR0FBME0sNERBQTNOLEVBQXlSSSxVQUF6UixFQUFxU0csYUFBclM7QUFDQU4sOENBQXdDUSxVQUF4QyxJQUFzRCxJQUF0RDtBQUNEO0FBQ0Y7O0FBRUQ7OztBQUdBLE1BQUlDLHVCQUF1QjtBQUN6Qjs7Ozs7OztBQU9BQyxlQUFXLG1CQUFVUixjQUFWLEVBQTBCO0FBQ25DLGFBQU8sS0FBUDtBQUNELEtBVndCOztBQVl6Qjs7Ozs7Ozs7Ozs7Ozs7O0FBZUFTLHdCQUFvQiw0QkFBVVQsY0FBVixFQUEwQlUsUUFBMUIsRUFBb0NULFVBQXBDLEVBQWdEO0FBQ2xFRixlQUFTQyxjQUFULEVBQXlCLGFBQXpCO0FBQ0QsS0E3QndCOztBQStCekI7Ozs7Ozs7Ozs7Ozs7QUFhQVcseUJBQXFCLDZCQUFVWCxjQUFWLEVBQTBCWSxhQUExQixFQUF5Q0YsUUFBekMsRUFBbURULFVBQW5ELEVBQStEO0FBQ2xGRixlQUFTQyxjQUFULEVBQXlCLGNBQXpCO0FBQ0QsS0E5Q3dCOztBQWdEekI7Ozs7Ozs7Ozs7OztBQVlBYSxxQkFBaUIseUJBQVViLGNBQVYsRUFBMEJjLFlBQTFCLEVBQXdDSixRQUF4QyxFQUFrRFQsVUFBbEQsRUFBOEQ7QUFDN0VGLGVBQVNDLGNBQVQsRUFBeUIsVUFBekI7QUFDRDtBQTlEd0IsR0FBM0I7O0FBaUVBOzs7QUFHQSxXQUFTZSxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsT0FBMUIsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQzFDLFNBQUtGLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtFLElBQUwsR0FBWWxELGFBQVo7QUFDQTtBQUNBO0FBQ0EsU0FBS2lELE9BQUwsR0FBZUEsV0FBV1gsb0JBQTFCO0FBQ0Q7O0FBRURRLFlBQVV6SCxTQUFWLENBQW9COEgsZ0JBQXBCLEdBQXVDLEVBQXZDOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBTCxZQUFVekgsU0FBVixDQUFvQitILFFBQXBCLEdBQStCLFVBQVVQLFlBQVYsRUFBd0JKLFFBQXhCLEVBQWtDO0FBQy9ELE1BQUUsUUFBT0ksWUFBUCx5Q0FBT0EsWUFBUCxPQUF3QixRQUF4QixJQUFvQyxPQUFPQSxZQUFQLEtBQXdCLFVBQTVELElBQTBFQSxnQkFBZ0IsSUFBNUYsSUFBb0doRCxZQUFZLEtBQVosRUFBbUIsdUhBQW5CLENBQXBHLEdBQWtQLEtBQUssQ0FBdlA7QUFDQSxTQUFLb0QsT0FBTCxDQUFhTCxlQUFiLENBQTZCLElBQTdCLEVBQW1DQyxZQUFuQyxFQUFpREosUUFBakQsRUFBMkQsVUFBM0Q7QUFDRCxHQUhEOztBQUtBOzs7Ozs7Ozs7Ozs7OztBQWNBSyxZQUFVekgsU0FBVixDQUFvQmdJLFdBQXBCLEdBQWtDLFVBQVVaLFFBQVYsRUFBb0I7QUFDcEQsU0FBS1EsT0FBTCxDQUFhVCxrQkFBYixDQUFnQyxJQUFoQyxFQUFzQ0MsUUFBdEMsRUFBZ0QsYUFBaEQ7QUFDRCxHQUZEOztBQUlBOzs7OztBQUtBO0FBQ0UsUUFBSWEsaUJBQWlCO0FBQ25CZixpQkFBVyxDQUFDLFdBQUQsRUFBYywwRUFBMEUsK0NBQXhGLENBRFE7QUFFbkJnQixvQkFBYyxDQUFDLGNBQUQsRUFBaUIscURBQXFELGlEQUF0RTtBQUZLLEtBQXJCO0FBSUEsUUFBSUMsMkJBQTJCLFNBQTNCQSx3QkFBMkIsQ0FBVUMsVUFBVixFQUFzQkMsSUFBdEIsRUFBNEI7QUFDekR2SSxhQUFPd0ksY0FBUCxDQUFzQmIsVUFBVXpILFNBQWhDLEVBQTJDb0ksVUFBM0MsRUFBdUQ7QUFDckRHLGFBQUssZUFBWTtBQUNmOUMsK0JBQXFCLEtBQXJCLEVBQTRCLDZEQUE1QixFQUEyRjRDLEtBQUssQ0FBTCxDQUEzRixFQUFvR0EsS0FBSyxDQUFMLENBQXBHO0FBQ0EsaUJBQU9oSSxTQUFQO0FBQ0Q7QUFKb0QsT0FBdkQ7QUFNRCxLQVBEO0FBUUEsU0FBSyxJQUFJbUksTUFBVCxJQUFtQlAsY0FBbkIsRUFBbUM7QUFDakMsVUFBSUEsZUFBZWxJLGNBQWYsQ0FBOEJ5SSxNQUE5QixDQUFKLEVBQTJDO0FBQ3pDTCxpQ0FBeUJLLE1BQXpCLEVBQWlDUCxlQUFlTyxNQUFmLENBQWpDO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFdBQVNDLGNBQVQsR0FBMEIsQ0FBRTtBQUM1QkEsaUJBQWV6SSxTQUFmLEdBQTJCeUgsVUFBVXpILFNBQXJDOztBQUVBOzs7QUFHQSxXQUFTMEksYUFBVCxDQUF1QmhCLEtBQXZCLEVBQThCQyxPQUE5QixFQUF1Q0MsT0FBdkMsRUFBZ0Q7QUFDOUMsU0FBS0YsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0UsSUFBTCxHQUFZbEQsYUFBWjtBQUNBLFNBQUtpRCxPQUFMLEdBQWVBLFdBQVdYLG9CQUExQjtBQUNEOztBQUVELE1BQUkwQix5QkFBeUJELGNBQWMxSSxTQUFkLEdBQTBCLElBQUl5SSxjQUFKLEVBQXZEO0FBQ0FFLHlCQUF1QjlCLFdBQXZCLEdBQXFDNkIsYUFBckM7QUFDQTtBQUNBakgsZUFBYWtILHNCQUFiLEVBQXFDbEIsVUFBVXpILFNBQS9DO0FBQ0EySSx5QkFBdUJDLG9CQUF2QixHQUE4QyxJQUE5Qzs7QUFFQTtBQUNBLFdBQVNDLFNBQVQsR0FBcUI7QUFDbkIsUUFBSUMsWUFBWTtBQUNkQyxlQUFTO0FBREssS0FBaEI7QUFHQTtBQUNFakosYUFBT2tKLElBQVAsQ0FBWUYsU0FBWjtBQUNEO0FBQ0QsV0FBT0EsU0FBUDtBQUNEOztBQUVEOzs7Ozs7QUFNQSxNQUFJRyxvQkFBb0I7QUFDdEI7Ozs7QUFJQUYsYUFBUztBQUxhLEdBQXhCOztBQVFBLE1BQUlHLG1CQUFtQnBKLE9BQU9FLFNBQVAsQ0FBaUJELGNBQXhDOztBQUVBLE1BQUlvSixpQkFBaUI7QUFDbkJqSCxTQUFLLElBRGM7QUFFbkJrSCxTQUFLLElBRmM7QUFHbkJDLFlBQVEsSUFIVztBQUluQkMsY0FBVTtBQUpTLEdBQXJCOztBQU9BLE1BQUlDLDZCQUE2QixLQUFLLENBQXRDO0FBQ0EsTUFBSUMsNkJBQTZCLEtBQUssQ0FBdEM7O0FBRUEsV0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDM0I7QUFDRSxVQUFJUixpQkFBaUIvRyxJQUFqQixDQUFzQnVILE1BQXRCLEVBQThCLEtBQTlCLENBQUosRUFBMEM7QUFDeEMsWUFBSUMsU0FBUzdKLE9BQU84Six3QkFBUCxDQUFnQ0YsTUFBaEMsRUFBd0MsS0FBeEMsRUFBK0NuQixHQUE1RDtBQUNBLFlBQUlvQixVQUFVQSxPQUFPRSxjQUFyQixFQUFxQztBQUNuQyxpQkFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsV0FBT0gsT0FBT04sR0FBUCxLQUFlL0ksU0FBdEI7QUFDRDs7QUFFRCxXQUFTeUosV0FBVCxDQUFxQkosTUFBckIsRUFBNkI7QUFDM0I7QUFDRSxVQUFJUixpQkFBaUIvRyxJQUFqQixDQUFzQnVILE1BQXRCLEVBQThCLEtBQTlCLENBQUosRUFBMEM7QUFDeEMsWUFBSUMsU0FBUzdKLE9BQU84Six3QkFBUCxDQUFnQ0YsTUFBaEMsRUFBd0MsS0FBeEMsRUFBK0NuQixHQUE1RDtBQUNBLFlBQUlvQixVQUFVQSxPQUFPRSxjQUFyQixFQUFxQztBQUNuQyxpQkFBTyxLQUFQO0FBQ0Q7QUFDRjtBQUNGO0FBQ0QsV0FBT0gsT0FBT3hILEdBQVAsS0FBZTdCLFNBQXRCO0FBQ0Q7O0FBRUQsV0FBUzBKLDBCQUFULENBQW9DckMsS0FBcEMsRUFBMkNYLFdBQTNDLEVBQXdEO0FBQ3RELFFBQUlpRCx3QkFBd0IsU0FBeEJBLHFCQUF3QixHQUFZO0FBQ3RDLFVBQUksQ0FBQ1QsMEJBQUwsRUFBaUM7QUFDL0JBLHFDQUE2QixJQUE3QjtBQUNBaEQsa0JBQVUsS0FBVixFQUFpQiw4REFBOEQsZ0VBQTlELEdBQWlJLHNFQUFqSSxHQUEwTSwyQ0FBM04sRUFBd1FRLFdBQXhRO0FBQ0Q7QUFDRixLQUxEO0FBTUFpRCwwQkFBc0JILGNBQXRCLEdBQXVDLElBQXZDO0FBQ0EvSixXQUFPd0ksY0FBUCxDQUFzQlosS0FBdEIsRUFBNkIsS0FBN0IsRUFBb0M7QUFDbENhLFdBQUt5QixxQkFENkI7QUFFbENDLG9CQUFjO0FBRm9CLEtBQXBDO0FBSUQ7O0FBRUQsV0FBU0MsMEJBQVQsQ0FBb0N4QyxLQUFwQyxFQUEyQ1gsV0FBM0MsRUFBd0Q7QUFDdEQsUUFBSW9ELHdCQUF3QixTQUF4QkEscUJBQXdCLEdBQVk7QUFDdEMsVUFBSSxDQUFDWCwwQkFBTCxFQUFpQztBQUMvQkEscUNBQTZCLElBQTdCO0FBQ0FqRCxrQkFBVSxLQUFWLEVBQWlCLDhEQUE4RCxnRUFBOUQsR0FBaUksc0VBQWpJLEdBQTBNLDJDQUEzTixFQUF3UVEsV0FBeFE7QUFDRDtBQUNGLEtBTEQ7QUFNQW9ELDBCQUFzQk4sY0FBdEIsR0FBdUMsSUFBdkM7QUFDQS9KLFdBQU93SSxjQUFQLENBQXNCWixLQUF0QixFQUE2QixLQUE3QixFQUFvQztBQUNsQ2EsV0FBSzRCLHFCQUQ2QjtBQUVsQ0Ysb0JBQWM7QUFGb0IsS0FBcEM7QUFJRDs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkEsTUFBSUcsZUFBZSxTQUFmQSxZQUFlLENBQVVDLElBQVYsRUFBZ0JuSSxHQUFoQixFQUFxQmtILEdBQXJCLEVBQTBCa0IsSUFBMUIsRUFBZ0MzSSxNQUFoQyxFQUF3QzRJLEtBQXhDLEVBQStDN0MsS0FBL0MsRUFBc0Q7QUFDdkUsUUFBSThDLFVBQVU7QUFDWjtBQUNBQyxnQkFBVWxJLGtCQUZFOztBQUlaO0FBQ0E4SCxZQUFNQSxJQUxNO0FBTVpuSSxXQUFLQSxHQU5PO0FBT1prSCxXQUFLQSxHQVBPO0FBUVoxQixhQUFPQSxLQVJLOztBQVVaO0FBQ0FnRCxjQUFRSDtBQVhJLEtBQWQ7O0FBY0E7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxjQUFRRyxNQUFSLEdBQWlCLEVBQWpCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E3SyxhQUFPd0ksY0FBUCxDQUFzQmtDLFFBQVFHLE1BQTlCLEVBQXNDLFdBQXRDLEVBQW1EO0FBQ2pEVixzQkFBYyxLQURtQztBQUVqRFcsb0JBQVksS0FGcUM7QUFHakRDLGtCQUFVLElBSHVDO0FBSWpEQyxlQUFPO0FBSjBDLE9BQW5EO0FBTUE7QUFDQWhMLGFBQU93SSxjQUFQLENBQXNCa0MsT0FBdEIsRUFBK0IsT0FBL0IsRUFBd0M7QUFDdENQLHNCQUFjLEtBRHdCO0FBRXRDVyxvQkFBWSxLQUYwQjtBQUd0Q0Msa0JBQVUsS0FINEI7QUFJdENDLGVBQU9SO0FBSitCLE9BQXhDO0FBTUE7QUFDQTtBQUNBeEssYUFBT3dJLGNBQVAsQ0FBc0JrQyxPQUF0QixFQUErQixTQUEvQixFQUEwQztBQUN4Q1Asc0JBQWMsS0FEMEI7QUFFeENXLG9CQUFZLEtBRjRCO0FBR3hDQyxrQkFBVSxLQUg4QjtBQUl4Q0MsZUFBT25KO0FBSmlDLE9BQTFDO0FBTUEsVUFBSTdCLE9BQU80RSxNQUFYLEVBQW1CO0FBQ2pCNUUsZUFBTzRFLE1BQVAsQ0FBYzhGLFFBQVE5QyxLQUF0QjtBQUNBNUgsZUFBTzRFLE1BQVAsQ0FBYzhGLE9BQWQ7QUFDRDtBQUNGOztBQUVELFdBQU9BLE9BQVA7QUFDRCxHQXRERDs7QUF3REE7Ozs7QUFJQSxXQUFTTyxhQUFULENBQXVCVixJQUF2QixFQUE2QlgsTUFBN0IsRUFBcUNzQixRQUFyQyxFQUErQztBQUM3QyxRQUFJQyxXQUFXLEtBQUssQ0FBcEI7O0FBRUE7QUFDQSxRQUFJdkQsUUFBUSxFQUFaOztBQUVBLFFBQUl4RixNQUFNLElBQVY7QUFDQSxRQUFJa0gsTUFBTSxJQUFWO0FBQ0EsUUFBSWtCLE9BQU8sSUFBWDtBQUNBLFFBQUkzSSxTQUFTLElBQWI7O0FBRUEsUUFBSStILFVBQVUsSUFBZCxFQUFvQjtBQUNsQixVQUFJRCxZQUFZQyxNQUFaLENBQUosRUFBeUI7QUFDdkJOLGNBQU1NLE9BQU9OLEdBQWI7QUFDRDtBQUNELFVBQUlVLFlBQVlKLE1BQVosQ0FBSixFQUF5QjtBQUN2QnhILGNBQU0sS0FBS3dILE9BQU94SCxHQUFsQjtBQUNEOztBQUVEb0ksYUFBT1osT0FBT0wsTUFBUCxLQUFrQmhKLFNBQWxCLEdBQThCLElBQTlCLEdBQXFDcUosT0FBT0wsTUFBbkQ7QUFDQTFILGVBQVMrSCxPQUFPSixRQUFQLEtBQW9CakosU0FBcEIsR0FBZ0MsSUFBaEMsR0FBdUNxSixPQUFPSixRQUF2RDtBQUNBO0FBQ0EsV0FBSzJCLFFBQUwsSUFBaUJ2QixNQUFqQixFQUF5QjtBQUN2QixZQUFJUixpQkFBaUIvRyxJQUFqQixDQUFzQnVILE1BQXRCLEVBQThCdUIsUUFBOUIsS0FBMkMsQ0FBQzlCLGVBQWVwSixjQUFmLENBQThCa0wsUUFBOUIsQ0FBaEQsRUFBeUY7QUFDdkZ2RCxnQkFBTXVELFFBQU4sSUFBa0J2QixPQUFPdUIsUUFBUCxDQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBO0FBQ0EsUUFBSUMsaUJBQWlCbEosVUFBVUMsTUFBVixHQUFtQixDQUF4QztBQUNBLFFBQUlpSixtQkFBbUIsQ0FBdkIsRUFBMEI7QUFDeEJ4RCxZQUFNc0QsUUFBTixHQUFpQkEsUUFBakI7QUFDRCxLQUZELE1BRU8sSUFBSUUsaUJBQWlCLENBQXJCLEVBQXdCO0FBQzdCLFVBQUlDLGFBQWFwRyxNQUFNbUcsY0FBTixDQUFqQjtBQUNBLFdBQUssSUFBSXJLLElBQUksQ0FBYixFQUFnQkEsSUFBSXFLLGNBQXBCLEVBQW9DckssR0FBcEMsRUFBeUM7QUFDdkNzSyxtQkFBV3RLLENBQVgsSUFBZ0JtQixVQUFVbkIsSUFBSSxDQUFkLENBQWhCO0FBQ0Q7QUFDRDtBQUNFLFlBQUlmLE9BQU80RSxNQUFYLEVBQW1CO0FBQ2pCNUUsaUJBQU80RSxNQUFQLENBQWN5RyxVQUFkO0FBQ0Q7QUFDRjtBQUNEekQsWUFBTXNELFFBQU4sR0FBaUJHLFVBQWpCO0FBQ0Q7O0FBRUQ7QUFDQSxRQUFJZCxRQUFRQSxLQUFLZSxZQUFqQixFQUErQjtBQUM3QixVQUFJQSxlQUFlZixLQUFLZSxZQUF4QjtBQUNBLFdBQUtILFFBQUwsSUFBaUJHLFlBQWpCLEVBQStCO0FBQzdCLFlBQUkxRCxNQUFNdUQsUUFBTixNQUFvQjVLLFNBQXhCLEVBQW1DO0FBQ2pDcUgsZ0JBQU11RCxRQUFOLElBQWtCRyxhQUFhSCxRQUFiLENBQWxCO0FBQ0Q7QUFDRjtBQUNGO0FBQ0Q7QUFDRSxVQUFJL0ksT0FBT2tILEdBQVgsRUFBZ0I7QUFDZCxZQUFJLE9BQU8xQixNQUFNK0MsUUFBYixLQUEwQixXQUExQixJQUF5Qy9DLE1BQU0rQyxRQUFOLEtBQW1CbEksa0JBQWhFLEVBQW9GO0FBQ2xGLGNBQUl3RSxjQUFjLE9BQU9zRCxJQUFQLEtBQWdCLFVBQWhCLEdBQTZCQSxLQUFLdEQsV0FBTCxJQUFvQnNELEtBQUsvRixJQUF6QixJQUFpQyxTQUE5RCxHQUEwRStGLElBQTVGO0FBQ0EsY0FBSW5JLEdBQUosRUFBUztBQUNQNkgsdUNBQTJCckMsS0FBM0IsRUFBa0NYLFdBQWxDO0FBQ0Q7QUFDRCxjQUFJcUMsR0FBSixFQUFTO0FBQ1BjLHVDQUEyQnhDLEtBQTNCLEVBQWtDWCxXQUFsQztBQUNEO0FBQ0Y7QUFDRjtBQUNGO0FBQ0QsV0FBT3FELGFBQWFDLElBQWIsRUFBbUJuSSxHQUFuQixFQUF3QmtILEdBQXhCLEVBQTZCa0IsSUFBN0IsRUFBbUMzSSxNQUFuQyxFQUEyQ3NILGtCQUFrQkYsT0FBN0QsRUFBc0VyQixLQUF0RSxDQUFQO0FBQ0Q7O0FBRUQ7Ozs7O0FBTUEsV0FBUzJELGtCQUFULENBQTRCQyxVQUE1QixFQUF3Q0MsTUFBeEMsRUFBZ0Q7QUFDOUMsUUFBSUMsYUFBYXBCLGFBQWFrQixXQUFXakIsSUFBeEIsRUFBOEJrQixNQUE5QixFQUFzQ0QsV0FBV2xDLEdBQWpELEVBQXNEa0MsV0FBV0csS0FBakUsRUFBd0VILFdBQVdJLE9BQW5GLEVBQTRGSixXQUFXWixNQUF2RyxFQUErR1ksV0FBVzVELEtBQTFILENBQWpCOztBQUVBLFdBQU84RCxVQUFQO0FBQ0Q7O0FBRUQ7Ozs7QUFJQSxXQUFTRyxZQUFULENBQXNCbkIsT0FBdEIsRUFBK0JkLE1BQS9CLEVBQXVDc0IsUUFBdkMsRUFBaUQ7QUFDL0MsS0FBQyxFQUFFUixZQUFZLElBQVosSUFBb0JBLFlBQVluSyxTQUFsQyxDQUFELEdBQWdEbUUsWUFBWSxLQUFaLEVBQW1CLG1GQUFuQixFQUF3R2dHLE9BQXhHLENBQWhELEdBQW1LLEtBQUssQ0FBeEs7O0FBRUEsUUFBSVMsV0FBVyxLQUFLLENBQXBCOztBQUVBO0FBQ0EsUUFBSXZELFFBQVFqRyxhQUFhLEVBQWIsRUFBaUIrSSxRQUFROUMsS0FBekIsQ0FBWjs7QUFFQTtBQUNBLFFBQUl4RixNQUFNc0ksUUFBUXRJLEdBQWxCO0FBQ0EsUUFBSWtILE1BQU1vQixRQUFRcEIsR0FBbEI7QUFDQTtBQUNBLFFBQUlrQixPQUFPRSxRQUFRaUIsS0FBbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJOUosU0FBUzZJLFFBQVFrQixPQUFyQjs7QUFFQTtBQUNBLFFBQUluQixRQUFRQyxRQUFRRSxNQUFwQjs7QUFFQSxRQUFJaEIsVUFBVSxJQUFkLEVBQW9CO0FBQ2xCLFVBQUlELFlBQVlDLE1BQVosQ0FBSixFQUF5QjtBQUN2QjtBQUNBTixjQUFNTSxPQUFPTixHQUFiO0FBQ0FtQixnQkFBUXRCLGtCQUFrQkYsT0FBMUI7QUFDRDtBQUNELFVBQUllLFlBQVlKLE1BQVosQ0FBSixFQUF5QjtBQUN2QnhILGNBQU0sS0FBS3dILE9BQU94SCxHQUFsQjtBQUNEOztBQUVEO0FBQ0EsVUFBSWtKLGVBQWUsS0FBSyxDQUF4QjtBQUNBLFVBQUlaLFFBQVFILElBQVIsSUFBZ0JHLFFBQVFILElBQVIsQ0FBYWUsWUFBakMsRUFBK0M7QUFDN0NBLHVCQUFlWixRQUFRSCxJQUFSLENBQWFlLFlBQTVCO0FBQ0Q7QUFDRCxXQUFLSCxRQUFMLElBQWlCdkIsTUFBakIsRUFBeUI7QUFDdkIsWUFBSVIsaUJBQWlCL0csSUFBakIsQ0FBc0J1SCxNQUF0QixFQUE4QnVCLFFBQTlCLEtBQTJDLENBQUM5QixlQUFlcEosY0FBZixDQUE4QmtMLFFBQTlCLENBQWhELEVBQXlGO0FBQ3ZGLGNBQUl2QixPQUFPdUIsUUFBUCxNQUFxQjVLLFNBQXJCLElBQWtDK0ssaUJBQWlCL0ssU0FBdkQsRUFBa0U7QUFDaEU7QUFDQXFILGtCQUFNdUQsUUFBTixJQUFrQkcsYUFBYUgsUUFBYixDQUFsQjtBQUNELFdBSEQsTUFHTztBQUNMdkQsa0JBQU11RCxRQUFOLElBQWtCdkIsT0FBT3VCLFFBQVAsQ0FBbEI7QUFDRDtBQUNGO0FBQ0Y7QUFDRjs7QUFFRDtBQUNBO0FBQ0EsUUFBSUMsaUJBQWlCbEosVUFBVUMsTUFBVixHQUFtQixDQUF4QztBQUNBLFFBQUlpSixtQkFBbUIsQ0FBdkIsRUFBMEI7QUFDeEJ4RCxZQUFNc0QsUUFBTixHQUFpQkEsUUFBakI7QUFDRCxLQUZELE1BRU8sSUFBSUUsaUJBQWlCLENBQXJCLEVBQXdCO0FBQzdCLFVBQUlDLGFBQWFwRyxNQUFNbUcsY0FBTixDQUFqQjtBQUNBLFdBQUssSUFBSXJLLElBQUksQ0FBYixFQUFnQkEsSUFBSXFLLGNBQXBCLEVBQW9DckssR0FBcEMsRUFBeUM7QUFDdkNzSyxtQkFBV3RLLENBQVgsSUFBZ0JtQixVQUFVbkIsSUFBSSxDQUFkLENBQWhCO0FBQ0Q7QUFDRDZHLFlBQU1zRCxRQUFOLEdBQWlCRyxVQUFqQjtBQUNEOztBQUVELFdBQU9mLGFBQWFJLFFBQVFILElBQXJCLEVBQTJCbkksR0FBM0IsRUFBZ0NrSCxHQUFoQyxFQUFxQ2tCLElBQXJDLEVBQTJDM0ksTUFBM0MsRUFBbUQ0SSxLQUFuRCxFQUEwRDdDLEtBQTFELENBQVA7QUFDRDs7QUFFRDs7Ozs7OztBQU9BLFdBQVNrRSxjQUFULENBQXdCQyxNQUF4QixFQUFnQztBQUM5QixXQUFPLFFBQU9BLE1BQVAseUNBQU9BLE1BQVAsT0FBa0IsUUFBbEIsSUFBOEJBLFdBQVcsSUFBekMsSUFBaURBLE9BQU9wQixRQUFQLEtBQW9CbEksa0JBQTVFO0FBQ0Q7O0FBRUQsTUFBSXVKLHlCQUF5QixFQUE3Qjs7QUFFQTtBQUNFO0FBQ0FBLDJCQUF1QkMsZUFBdkIsR0FBeUMsSUFBekM7O0FBRUFELDJCQUF1QkUsZ0JBQXZCLEdBQTBDLFlBQVk7QUFDcEQsVUFBSUMsT0FBT0gsdUJBQXVCQyxlQUFsQztBQUNBLFVBQUlFLElBQUosRUFBVTtBQUNSLGVBQU9BLE1BQVA7QUFDRDtBQUNELGFBQU8sSUFBUDtBQUNELEtBTkQ7QUFPRDs7QUFFRCxNQUFJQyxZQUFZLEdBQWhCO0FBQ0EsTUFBSUMsZUFBZSxHQUFuQjs7QUFFQTs7Ozs7O0FBTUEsV0FBU0MsTUFBVCxDQUFnQmxLLEdBQWhCLEVBQXFCO0FBQ25CLFFBQUltSyxjQUFjLE9BQWxCO0FBQ0EsUUFBSUMsZ0JBQWdCO0FBQ2xCLFdBQUssSUFEYTtBQUVsQixXQUFLO0FBRmEsS0FBcEI7QUFJQSxRQUFJQyxnQkFBZ0IsQ0FBQyxLQUFLckssR0FBTixFQUFXbUMsT0FBWCxDQUFtQmdJLFdBQW5CLEVBQWdDLFVBQVVHLEtBQVYsRUFBaUI7QUFDbkUsYUFBT0YsY0FBY0UsS0FBZCxDQUFQO0FBQ0QsS0FGbUIsQ0FBcEI7O0FBSUEsV0FBTyxNQUFNRCxhQUFiO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0EsTUFBSUUsbUJBQW1CLEtBQXZCOztBQUVBLE1BQUlDLDZCQUE2QixNQUFqQztBQUNBLFdBQVNDLHFCQUFULENBQStCQyxJQUEvQixFQUFxQztBQUNuQyxXQUFPLENBQUMsS0FBS0EsSUFBTixFQUFZdkksT0FBWixDQUFvQnFJLDBCQUFwQixFQUFnRCxLQUFoRCxDQUFQO0FBQ0Q7O0FBRUQsTUFBSUcsWUFBWSxFQUFoQjtBQUNBLE1BQUlDLHNCQUFzQixFQUExQjtBQUNBLFdBQVNDLHdCQUFULENBQWtDQyxTQUFsQyxFQUE2Q0MsU0FBN0MsRUFBd0RDLFdBQXhELEVBQXFFQyxVQUFyRSxFQUFpRjtBQUMvRSxRQUFJTCxvQkFBb0I3SyxNQUF4QixFQUFnQztBQUM5QixVQUFJbUwsa0JBQWtCTixvQkFBb0JPLEdBQXBCLEVBQXRCO0FBQ0FELHNCQUFnQkUsTUFBaEIsR0FBeUJOLFNBQXpCO0FBQ0FJLHNCQUFnQkgsU0FBaEIsR0FBNEJBLFNBQTVCO0FBQ0FHLHNCQUFnQkcsSUFBaEIsR0FBdUJMLFdBQXZCO0FBQ0FFLHNCQUFnQnpGLE9BQWhCLEdBQTBCd0YsVUFBMUI7QUFDQUMsc0JBQWdCSSxLQUFoQixHQUF3QixDQUF4QjtBQUNBLGFBQU9KLGVBQVA7QUFDRCxLQVJELE1BUU87QUFDTCxhQUFPO0FBQ0xFLGdCQUFRTixTQURIO0FBRUxDLG1CQUFXQSxTQUZOO0FBR0xNLGNBQU1MLFdBSEQ7QUFJTHZGLGlCQUFTd0YsVUFKSjtBQUtMSyxlQUFPO0FBTEYsT0FBUDtBQU9EO0FBQ0Y7O0FBRUQsV0FBU0Msc0JBQVQsQ0FBZ0NMLGVBQWhDLEVBQWlEO0FBQy9DQSxvQkFBZ0JFLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0FGLG9CQUFnQkgsU0FBaEIsR0FBNEIsSUFBNUI7QUFDQUcsb0JBQWdCRyxJQUFoQixHQUF1QixJQUF2QjtBQUNBSCxvQkFBZ0J6RixPQUFoQixHQUEwQixJQUExQjtBQUNBeUYsb0JBQWdCSSxLQUFoQixHQUF3QixDQUF4QjtBQUNBLFFBQUlWLG9CQUFvQjdLLE1BQXBCLEdBQTZCNEssU0FBakMsRUFBNEM7QUFDMUNDLDBCQUFvQlksSUFBcEIsQ0FBeUJOLGVBQXpCO0FBQ0Q7QUFDRjs7QUFFRDs7Ozs7Ozs7QUFRQSxXQUFTTyx1QkFBVCxDQUFpQzNDLFFBQWpDLEVBQTJDNEMsU0FBM0MsRUFBc0R4RyxRQUF0RCxFQUFnRWdHLGVBQWhFLEVBQWlGO0FBQy9FLFFBQUkvQyxjQUFjVyxRQUFkLHlDQUFjQSxRQUFkLENBQUo7O0FBRUEsUUFBSVgsU0FBUyxXQUFULElBQXdCQSxTQUFTLFNBQXJDLEVBQWdEO0FBQzlDO0FBQ0FXLGlCQUFXLElBQVg7QUFDRDs7QUFFRCxRQUFJNkMsaUJBQWlCLEtBQXJCOztBQUVBLFFBQUk3QyxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCNkMsdUJBQWlCLElBQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsY0FBUXhELElBQVI7QUFDRSxhQUFLLFFBQUw7QUFDQSxhQUFLLFFBQUw7QUFDRXdELDJCQUFpQixJQUFqQjtBQUNBO0FBQ0YsYUFBSyxRQUFMO0FBQ0Usa0JBQVE3QyxTQUFTUCxRQUFqQjtBQUNFLGlCQUFLbEksa0JBQUw7QUFDQSxpQkFBS0csaUJBQUw7QUFDRW1MLCtCQUFpQixJQUFqQjtBQUhKO0FBTko7QUFZRDs7QUFFRCxRQUFJQSxjQUFKLEVBQW9CO0FBQ2xCekcsZUFBU2dHLGVBQVQsRUFBMEJwQyxRQUExQjtBQUNBO0FBQ0E7QUFDQTRDLG9CQUFjLEVBQWQsR0FBbUIxQixZQUFZNEIsZ0JBQWdCOUMsUUFBaEIsRUFBMEIsQ0FBMUIsQ0FBL0IsR0FBOEQ0QyxTQUg5RDtBQUlBLGFBQU8sQ0FBUDtBQUNEOztBQUVELFFBQUlHLFFBQVEsS0FBSyxDQUFqQjtBQUNBLFFBQUlDLFdBQVcsS0FBSyxDQUFwQjtBQUNBLFFBQUlDLGVBQWUsQ0FBbkIsQ0FyQytFLENBcUN6RDtBQUN0QixRQUFJQyxpQkFBaUJOLGNBQWMsRUFBZCxHQUFtQjFCLFNBQW5CLEdBQStCMEIsWUFBWXpCLFlBQWhFOztBQUVBLFFBQUlwSCxNQUFNb0osT0FBTixDQUFjbkQsUUFBZCxDQUFKLEVBQTZCO0FBQzNCLFdBQUssSUFBSW5LLElBQUksQ0FBYixFQUFnQkEsSUFBSW1LLFNBQVMvSSxNQUE3QixFQUFxQ3BCLEdBQXJDLEVBQTBDO0FBQ3hDa04sZ0JBQVEvQyxTQUFTbkssQ0FBVCxDQUFSO0FBQ0FtTixtQkFBV0UsaUJBQWlCSixnQkFBZ0JDLEtBQWhCLEVBQXVCbE4sQ0FBdkIsQ0FBNUI7QUFDQW9OLHdCQUFnQk4sd0JBQXdCSSxLQUF4QixFQUErQkMsUUFBL0IsRUFBeUM1RyxRQUF6QyxFQUFtRGdHLGVBQW5ELENBQWhCO0FBQ0Q7QUFDRixLQU5ELE1BTU87QUFDTCxVQUFJZ0IsYUFBYWhMLGNBQWM0SCxRQUFkLENBQWpCO0FBQ0EsVUFBSSxPQUFPb0QsVUFBUCxLQUFzQixVQUExQixFQUFzQztBQUNwQztBQUNFO0FBQ0EsY0FBSUEsZUFBZXBELFNBQVNxRCxPQUE1QixFQUFxQztBQUNuQyxhQUFDNUIsZ0JBQUQsR0FBb0JsRyxVQUFVLEtBQVYsRUFBaUIsaUVBQWlFLGlFQUFqRSxHQUFxSSwwQkFBdEosRUFBa0x1Rix1QkFBdUJFLGdCQUF2QixFQUFsTCxDQUFwQixHQUFtUCxLQUFLLENBQXhQO0FBQ0FTLCtCQUFtQixJQUFuQjtBQUNEO0FBQ0Y7O0FBRUQsWUFBSXZKLFdBQVdrTCxXQUFXak0sSUFBWCxDQUFnQjZJLFFBQWhCLENBQWY7QUFDQSxZQUFJc0QsT0FBTyxLQUFLLENBQWhCO0FBQ0EsWUFBSUMsS0FBSyxDQUFUO0FBQ0EsZUFBTyxDQUFDLENBQUNELE9BQU9wTCxTQUFTc0wsSUFBVCxFQUFSLEVBQXlCQyxJQUFqQyxFQUF1QztBQUNyQ1Ysa0JBQVFPLEtBQUt4RCxLQUFiO0FBQ0FrRCxxQkFBV0UsaUJBQWlCSixnQkFBZ0JDLEtBQWhCLEVBQXVCUSxJQUF2QixDQUE1QjtBQUNBTiwwQkFBZ0JOLHdCQUF3QkksS0FBeEIsRUFBK0JDLFFBQS9CLEVBQXlDNUcsUUFBekMsRUFBbURnRyxlQUFuRCxDQUFoQjtBQUNEO0FBQ0YsT0FqQkQsTUFpQk8sSUFBSS9DLFNBQVMsUUFBYixFQUF1QjtBQUM1QixZQUFJcUUsV0FBVyxFQUFmO0FBQ0E7QUFDRUEscUJBQVcsb0VBQW9FLFVBQXBFLEdBQWlGNUMsdUJBQXVCRSxnQkFBdkIsRUFBNUY7QUFDRDtBQUNELFlBQUkyQyxpQkFBaUIsS0FBSzNELFFBQTFCO0FBQ0F4RyxvQkFBWSxLQUFaLEVBQW1CLHVEQUFuQixFQUE0RW1LLG1CQUFtQixpQkFBbkIsR0FBdUMsdUJBQXVCN08sT0FBT3lCLElBQVAsQ0FBWXlKLFFBQVosRUFBc0I5SixJQUF0QixDQUEyQixJQUEzQixDQUF2QixHQUEwRCxHQUFqRyxHQUF1R3lOLGNBQW5MLEVBQW1NRCxRQUFuTTtBQUNEO0FBQ0Y7O0FBRUQsV0FBT1QsWUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBLFdBQVNXLG1CQUFULENBQTZCNUQsUUFBN0IsRUFBdUM1RCxRQUF2QyxFQUFpRGdHLGVBQWpELEVBQWtFO0FBQ2hFLFFBQUlwQyxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLGFBQU8sQ0FBUDtBQUNEOztBQUVELFdBQU8yQyx3QkFBd0IzQyxRQUF4QixFQUFrQyxFQUFsQyxFQUFzQzVELFFBQXRDLEVBQWdEZ0csZUFBaEQsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7O0FBT0EsV0FBU1UsZUFBVCxDQUF5QmUsU0FBekIsRUFBb0NDLEtBQXBDLEVBQTJDO0FBQ3pDO0FBQ0E7QUFDQSxRQUFJLFFBQU9ELFNBQVAseUNBQU9BLFNBQVAsT0FBcUIsUUFBckIsSUFBaUNBLGNBQWMsSUFBL0MsSUFBdURBLFVBQVUzTSxHQUFWLElBQWlCLElBQTVFLEVBQWtGO0FBQ2hGO0FBQ0EsYUFBT2tLLE9BQU95QyxVQUFVM00sR0FBakIsQ0FBUDtBQUNEO0FBQ0Q7QUFDQSxXQUFPNE0sTUFBTUMsUUFBTixDQUFlLEVBQWYsQ0FBUDtBQUNEOztBQUVELFdBQVNDLGtCQUFULENBQTRCQyxXQUE1QixFQUF5Q2xCLEtBQXpDLEVBQWdEekosSUFBaEQsRUFBc0Q7QUFDcEQsUUFBSWlKLE9BQU8wQixZQUFZMUIsSUFBdkI7QUFBQSxRQUNJNUYsVUFBVXNILFlBQVl0SCxPQUQxQjs7QUFHQTRGLFNBQUtwTCxJQUFMLENBQVV3RixPQUFWLEVBQW1Cb0csS0FBbkIsRUFBMEJrQixZQUFZekIsS0FBWixFQUExQjtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7QUFZQSxXQUFTMEIsZUFBVCxDQUF5QmxFLFFBQXpCLEVBQW1DbUUsV0FBbkMsRUFBZ0RDLGNBQWhELEVBQWdFO0FBQzlELFFBQUlwRSxZQUFZLElBQWhCLEVBQXNCO0FBQ3BCLGFBQU9BLFFBQVA7QUFDRDtBQUNELFFBQUlvQyxrQkFBa0JMLHlCQUF5QixJQUF6QixFQUErQixJQUEvQixFQUFxQ29DLFdBQXJDLEVBQWtEQyxjQUFsRCxDQUF0QjtBQUNBUix3QkFBb0I1RCxRQUFwQixFQUE4QmdFLGtCQUE5QixFQUFrRDVCLGVBQWxEO0FBQ0FLLDJCQUF1QkwsZUFBdkI7QUFDRDs7QUFFRCxXQUFTaUMseUJBQVQsQ0FBbUNKLFdBQW5DLEVBQWdEbEIsS0FBaEQsRUFBdUR1QixRQUF2RCxFQUFpRTtBQUMvRCxRQUFJaEMsU0FBUzJCLFlBQVkzQixNQUF6QjtBQUFBLFFBQ0lMLFlBQVlnQyxZQUFZaEMsU0FENUI7QUFBQSxRQUVJTSxPQUFPMEIsWUFBWTFCLElBRnZCO0FBQUEsUUFHSTVGLFVBQVVzSCxZQUFZdEgsT0FIMUI7O0FBTUEsUUFBSTRILGNBQWNoQyxLQUFLcEwsSUFBTCxDQUFVd0YsT0FBVixFQUFtQm9HLEtBQW5CLEVBQTBCa0IsWUFBWXpCLEtBQVosRUFBMUIsQ0FBbEI7QUFDQSxRQUFJekksTUFBTW9KLE9BQU4sQ0FBY29CLFdBQWQsQ0FBSixFQUFnQztBQUM5QkMsbUNBQTZCRCxXQUE3QixFQUEwQ2pDLE1BQTFDLEVBQWtEZ0MsUUFBbEQsRUFBNERuSixnQkFBZ0JELG1CQUE1RTtBQUNELEtBRkQsTUFFTyxJQUFJcUosZUFBZSxJQUFuQixFQUF5QjtBQUM5QixVQUFJM0QsZUFBZTJELFdBQWYsQ0FBSixFQUFpQztBQUMvQkEsc0JBQWNsRSxtQkFBbUJrRSxXQUFuQjtBQUNkO0FBQ0E7QUFDQXRDLHFCQUFhc0MsWUFBWXJOLEdBQVosS0FBb0IsQ0FBQzZMLEtBQUQsSUFBVUEsTUFBTTdMLEdBQU4sS0FBY3FOLFlBQVlyTixHQUF4RCxJQUErRHlLLHNCQUFzQjRDLFlBQVlyTixHQUFsQyxJQUF5QyxHQUF4RyxHQUE4RyxFQUEzSCxJQUFpSW9OLFFBSG5ILENBQWQ7QUFJRDtBQUNEaEMsYUFBT0ksSUFBUCxDQUFZNkIsV0FBWjtBQUNEO0FBQ0Y7O0FBRUQsV0FBU0MsNEJBQVQsQ0FBc0N4RSxRQUF0QyxFQUFnRHlFLEtBQWhELEVBQXVEQyxNQUF2RCxFQUErRG5DLElBQS9ELEVBQXFFNUYsT0FBckUsRUFBOEU7QUFDNUUsUUFBSWdJLGdCQUFnQixFQUFwQjtBQUNBLFFBQUlELFVBQVUsSUFBZCxFQUFvQjtBQUNsQkMsc0JBQWdCaEQsc0JBQXNCK0MsTUFBdEIsSUFBZ0MsR0FBaEQ7QUFDRDtBQUNELFFBQUl0QyxrQkFBa0JMLHlCQUF5QjBDLEtBQXpCLEVBQWdDRSxhQUFoQyxFQUErQ3BDLElBQS9DLEVBQXFENUYsT0FBckQsQ0FBdEI7QUFDQWlILHdCQUFvQjVELFFBQXBCLEVBQThCcUUseUJBQTlCLEVBQXlEakMsZUFBekQ7QUFDQUssMkJBQXVCTCxlQUF2QjtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7O0FBYUEsV0FBU3dDLFdBQVQsQ0FBcUI1RSxRQUFyQixFQUErQnVDLElBQS9CLEVBQXFDNUYsT0FBckMsRUFBOEM7QUFDNUMsUUFBSXFELFlBQVksSUFBaEIsRUFBc0I7QUFDcEIsYUFBT0EsUUFBUDtBQUNEO0FBQ0QsUUFBSXNDLFNBQVMsRUFBYjtBQUNBa0MsaUNBQTZCeEUsUUFBN0IsRUFBdUNzQyxNQUF2QyxFQUErQyxJQUEvQyxFQUFxREMsSUFBckQsRUFBMkQ1RixPQUEzRDtBQUNBLFdBQU8yRixNQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OztBQVNBLFdBQVN1QyxhQUFULENBQXVCN0UsUUFBdkIsRUFBaUNyRCxPQUFqQyxFQUEwQztBQUN4QyxXQUFPaUgsb0JBQW9CNUQsUUFBcEIsRUFBOEI3RSxnQkFBZ0JILGVBQTlDLEVBQStELElBQS9ELENBQVA7QUFDRDs7QUFFRDs7Ozs7O0FBTUEsV0FBUzhKLE9BQVQsQ0FBaUI5RSxRQUFqQixFQUEyQjtBQUN6QixRQUFJc0MsU0FBUyxFQUFiO0FBQ0FrQyxpQ0FBNkJ4RSxRQUE3QixFQUF1Q3NDLE1BQXZDLEVBQStDLElBQS9DLEVBQXFEbkgsZ0JBQWdCRCxtQkFBckU7QUFDQSxXQUFPb0gsTUFBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7OztBQWNBLFdBQVN5QyxTQUFULENBQW1CL0UsUUFBbkIsRUFBNkI7QUFDM0IsS0FBQ1ksZUFBZVosUUFBZixDQUFELEdBQTRCeEcsWUFBWSxLQUFaLEVBQW1CLHVFQUFuQixDQUE1QixHQUEwSCxLQUFLLENBQS9IO0FBQ0EsV0FBT3dHLFFBQVA7QUFDRDs7QUFFRCxXQUFTZ0YsYUFBVCxDQUF1QkMsWUFBdkIsRUFBcUNDLG9CQUFyQyxFQUEyRDtBQUN6RCxRQUFJQSx5QkFBeUI3UCxTQUE3QixFQUF3QztBQUN0QzZQLDZCQUF1QixJQUF2QjtBQUNELEtBRkQsTUFFTztBQUNMO0FBQ0UsVUFBRUEseUJBQXlCLElBQXpCLElBQWlDLE9BQU9BLG9CQUFQLEtBQWdDLFVBQW5FLElBQWlGM0osVUFBVSxLQUFWLEVBQWlCLGtFQUFrRSxnQ0FBbkYsRUFBcUgySixvQkFBckgsQ0FBakYsR0FBOE4sS0FBSyxDQUFuTztBQUNEO0FBQ0Y7O0FBRUQsUUFBSXZJLFVBQVU7QUFDWjhDLGdCQUFVM0gsa0JBREU7QUFFWnFOLDZCQUF1QkQsb0JBRlg7QUFHWkUscUJBQWVILFlBSEg7QUFJWkkscUJBQWVKLFlBSkg7QUFLWkssb0JBQWMsQ0FMRjtBQU1aO0FBQ0FDLGdCQUFVLElBUEU7QUFRWkMsZ0JBQVU7QUFSRSxLQUFkOztBQVdBN0ksWUFBUTRJLFFBQVIsR0FBbUI7QUFDakI5RixnQkFBVTVILG1CQURPO0FBRWpCNE4sZ0JBQVU5STtBQUZPLEtBQW5CO0FBSUFBLFlBQVE2SSxRQUFSLEdBQW1CN0ksT0FBbkI7O0FBRUE7QUFDRUEsY0FBUStJLGdCQUFSLEdBQTJCLElBQTNCO0FBQ0Q7O0FBRUQsV0FBTy9JLE9BQVA7QUFDRDs7QUFFRCxXQUFTZ0osVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEI7QUFDMUI7QUFDRSxRQUFFLE9BQU9BLE1BQVAsS0FBa0IsVUFBcEIsSUFBa0NySyxVQUFVLEtBQVYsRUFBaUIseURBQWpCLEVBQTRFcUssV0FBVyxJQUFYLEdBQWtCLE1BQWxCLFVBQWtDQSxNQUFsQyx5Q0FBa0NBLE1BQWxDLENBQTVFLENBQWxDLEdBQTBKLEtBQUssQ0FBL0o7QUFDRDs7QUFFRCxXQUFPO0FBQ0xuRyxnQkFBVXpILHNCQURMO0FBRUw0TixjQUFRQTtBQUZILEtBQVA7QUFJRDs7QUFFRCxNQUFJQyx5QkFBeUIsU0FBekJBLHNCQUF5QixDQUFVdk0sSUFBVixFQUFnQjNDLE1BQWhCLEVBQXdCbVAsU0FBeEIsRUFBbUM7QUFDOUQsV0FBTyxlQUFleE0sUUFBUSxTQUF2QixLQUFxQzNDLFNBQVMsVUFBVUEsT0FBT29QLFFBQVAsQ0FBZ0IxTSxPQUFoQixDQUF3QixXQUF4QixFQUFxQyxFQUFyQyxDQUFWLEdBQXFELEdBQXJELEdBQTJEMUMsT0FBT3FQLFVBQWxFLEdBQStFLEdBQXhGLEdBQThGRixZQUFZLGtCQUFrQkEsU0FBbEIsR0FBOEIsR0FBMUMsR0FBZ0QsRUFBbkwsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsV0FBU0csa0JBQVQsQ0FBNEI1RyxJQUE1QixFQUFrQztBQUNoQyxXQUFPLE9BQU9BLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEIsT0FBT0EsSUFBUCxLQUFnQixVQUE1QztBQUNQO0FBQ0FBLGFBQVMxSCxtQkFGRixJQUV5QjBILFNBQVN0SCxxQkFGbEMsSUFFMkRzSCxTQUFTekgsc0JBRnBFLElBRThGLFFBQU95SCxJQUFQLHlDQUFPQSxJQUFQLE9BQWdCLFFBQWhCLElBQTRCQSxTQUFTLElBQXJDLEtBQThDQSxLQUFLSSxRQUFMLEtBQWtCNUgsbUJBQWxCLElBQXlDd0gsS0FBS0ksUUFBTCxLQUFrQjNILGtCQUEzRCxJQUFpRnVILEtBQUtJLFFBQUwsS0FBa0J6SCxzQkFBakosQ0FGckc7QUFHRDs7QUFFRCxXQUFTa08sZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDO0FBQy9CLFFBQUk5RyxPQUFPOEcsTUFBTTlHLElBQWpCOztBQUVBLFFBQUksT0FBT0EsSUFBUCxLQUFnQixVQUFwQixFQUFnQztBQUM5QixhQUFPQSxLQUFLdEQsV0FBTCxJQUFvQnNELEtBQUsvRixJQUFoQztBQUNEO0FBQ0QsUUFBSSxPQUFPK0YsSUFBUCxLQUFnQixRQUFwQixFQUE4QjtBQUM1QixhQUFPQSxJQUFQO0FBQ0Q7QUFDRCxZQUFRQSxJQUFSO0FBQ0UsV0FBSzFILG1CQUFMO0FBQ0UsZUFBTyxlQUFQO0FBQ0YsV0FBS0QsaUJBQUw7QUFDRSxlQUFPLGFBQVA7QUFDRixXQUFLRixlQUFMO0FBQ0UsZUFBTyxXQUFQO0FBQ0YsV0FBS0MsaUJBQUw7QUFDRSxlQUFPLGFBQVA7QUFSSjtBQVVBLFFBQUksUUFBTzRILElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBaEIsSUFBNEJBLFNBQVMsSUFBekMsRUFBK0M7QUFDN0MsY0FBUUEsS0FBS0ksUUFBYjtBQUNFLGFBQUt6SCxzQkFBTDtBQUNFLGNBQUlvTyxlQUFlL0csS0FBS3VHLE1BQUwsQ0FBWTdKLFdBQVosSUFBMkJzRCxLQUFLdUcsTUFBTCxDQUFZdE0sSUFBdkMsSUFBK0MsRUFBbEU7QUFDQSxpQkFBTzhNLGlCQUFpQixFQUFqQixHQUFzQixnQkFBZ0JBLFlBQWhCLEdBQStCLEdBQXJELEdBQTJELFlBQWxFO0FBSEo7QUFLRDtBQUNELFdBQU8sSUFBUDtBQUNEOztBQUVEOzs7Ozs7O0FBU0EsTUFBSUMseUJBQXlCLDhDQUE3Qjs7QUFFQSxNQUFJQyx5QkFBeUJELHNCQUE3Qjs7QUFFQTs7Ozs7OztBQVNBO0FBQ0UsUUFBSUUsY0FBYy9NLFdBQWxCO0FBQ0EsUUFBSWdOLFlBQVlqTCxTQUFoQjtBQUNBLFFBQUlrTCx1QkFBdUJILHNCQUEzQjtBQUNBLFFBQUlJLHFCQUFxQixFQUF6QjtBQUNEOztBQUVEOzs7Ozs7Ozs7OztBQVdBLFdBQVNDLGNBQVQsQ0FBd0JDLFNBQXhCLEVBQW1DQyxNQUFuQyxFQUEyQ0MsUUFBM0MsRUFBcURoTCxhQUFyRCxFQUFvRWlMLFFBQXBFLEVBQThFO0FBQzVFO0FBQ0UsV0FBSyxJQUFJQyxZQUFULElBQXlCSixTQUF6QixFQUFvQztBQUNsQyxZQUFJQSxVQUFVN1IsY0FBVixDQUF5QmlTLFlBQXpCLENBQUosRUFBNEM7QUFDMUMsY0FBSTlOLEtBQUo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFJO0FBQ0Y7QUFDQTtBQUNBcU4sd0JBQVksT0FBT0ssVUFBVUksWUFBVixDQUFQLEtBQW1DLFVBQS9DLEVBQTJELHNFQUFzRSw4Q0FBakksRUFBaUxsTCxpQkFBaUIsYUFBbE0sRUFBaU5nTCxRQUFqTixFQUEyTkUsWUFBM04sVUFBZ1BKLFVBQVVJLFlBQVYsQ0FBaFA7QUFDQTlOLG9CQUFRME4sVUFBVUksWUFBVixFQUF3QkgsTUFBeEIsRUFBZ0NHLFlBQWhDLEVBQThDbEwsYUFBOUMsRUFBNkRnTCxRQUE3RCxFQUF1RSxJQUF2RSxFQUE2RUwsb0JBQTdFLENBQVI7QUFDRCxXQUxELENBS0UsT0FBT1EsRUFBUCxFQUFXO0FBQ1gvTixvQkFBUStOLEVBQVI7QUFDRDtBQUNEVCxvQkFBVSxDQUFDdE4sS0FBRCxJQUFVQSxpQkFBaUJULEtBQXJDLEVBQTRDLG9FQUFvRSwrREFBcEUsR0FBc0ksaUVBQXRJLEdBQTBNLGdFQUExTSxHQUE2USxpQ0FBelQsRUFBNFZxRCxpQkFBaUIsYUFBN1csRUFBNFhnTCxRQUE1WCxFQUFzWUUsWUFBdFksU0FBMlo5TixLQUEzWix5Q0FBMlpBLEtBQTNaO0FBQ0EsY0FBSUEsaUJBQWlCVCxLQUFqQixJQUEwQixFQUFFUyxNQUFNZSxPQUFOLElBQWlCeU0sa0JBQW5CLENBQTlCLEVBQXNFO0FBQ3BFO0FBQ0E7QUFDQUEsK0JBQW1CeE4sTUFBTWUsT0FBekIsSUFBb0MsSUFBcEM7O0FBRUEsZ0JBQUlpTixRQUFRSCxXQUFXQSxVQUFYLEdBQXdCLEVBQXBDOztBQUVBUCxzQkFBVSxLQUFWLEVBQWlCLHNCQUFqQixFQUF5Q00sUUFBekMsRUFBbUQ1TixNQUFNZSxPQUF6RCxFQUFrRWlOLFNBQVMsSUFBVCxHQUFnQkEsS0FBaEIsR0FBd0IsRUFBMUY7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGOztBQUVELE1BQUlDLG1CQUFtQlIsY0FBdkI7O0FBRUE7Ozs7Ozs7QUFPQSxNQUFJUyw2QkFBNkIsS0FBSyxDQUF0QztBQUNBLE1BQUlDLGdDQUFnQyxLQUFLLENBQXpDOztBQUVBLE1BQUlDLGlCQUFpQiwwQkFBWSxDQUFFLENBQW5DO0FBQ0EsTUFBSXRHLG1CQUFtQiw0QkFBWSxDQUFFLENBQXJDOztBQUVBO0FBQ0VvRyxpQ0FBNkIsSUFBN0I7O0FBRUFDLG9DQUFnQyxLQUFoQzs7QUFFQUMscUJBQWlCLHdCQUFVOUgsT0FBVixFQUFtQjtBQUNsQyxVQUFJQSxXQUFXLElBQWYsRUFBcUI7QUFDbkIsZUFBTyxRQUFQO0FBQ0QsT0FGRCxNQUVPLElBQUksT0FBT0EsT0FBUCxLQUFtQixRQUFuQixJQUErQixPQUFPQSxPQUFQLEtBQW1CLFFBQXRELEVBQWdFO0FBQ3JFLGVBQU8sT0FBUDtBQUNELE9BRk0sTUFFQSxJQUFJLE9BQU9BLFFBQVFILElBQWYsS0FBd0IsUUFBNUIsRUFBc0M7QUFDM0MsZUFBT0csUUFBUUgsSUFBZjtBQUNELE9BRk0sTUFFQSxJQUFJRyxRQUFRSCxJQUFSLEtBQWlCMUgsbUJBQXJCLEVBQTBDO0FBQy9DLGVBQU8sZ0JBQVA7QUFDRCxPQUZNLE1BRUE7QUFDTCxlQUFPNkgsUUFBUUgsSUFBUixDQUFhdEQsV0FBYixJQUE0QnlELFFBQVFILElBQVIsQ0FBYS9GLElBQXpDLElBQWlELFNBQXhEO0FBQ0Q7QUFDRixLQVpEOztBQWNBMEgsdUJBQW1CLDRCQUFZO0FBQzdCLFVBQUlrRyxRQUFRLEVBQVo7QUFDQSxVQUFJRSwwQkFBSixFQUFnQztBQUM5QixZQUFJOU4sT0FBT2dPLGVBQWVGLDBCQUFmLENBQVg7QUFDQSxZQUFJN0gsUUFBUTZILDJCQUEyQjFILE1BQXZDO0FBQ0F3SCxpQkFBU3JCLHVCQUF1QnZNLElBQXZCLEVBQTZCOE4sMkJBQTJCMUcsT0FBeEQsRUFBaUVuQixTQUFTMkcsaUJBQWlCM0csS0FBakIsQ0FBMUUsQ0FBVDtBQUNEO0FBQ0QySCxlQUFTcEcsdUJBQXVCRSxnQkFBdkIsTUFBNkMsRUFBdEQ7QUFDQSxhQUFPa0csS0FBUDtBQUNELEtBVEQ7QUFVRDs7QUFFRCxXQUFTSywyQkFBVCxHQUF1QztBQUNyQyxRQUFJdEosa0JBQWtCRixPQUF0QixFQUErQjtBQUM3QixVQUFJekUsT0FBTzRNLGlCQUFpQmpJLGtCQUFrQkYsT0FBbkMsQ0FBWDtBQUNBLFVBQUl6RSxJQUFKLEVBQVU7QUFDUixlQUFPLHFDQUFxQ0EsSUFBckMsR0FBNEMsSUFBbkQ7QUFDRDtBQUNGO0FBQ0QsV0FBTyxFQUFQO0FBQ0Q7O0FBRUQsV0FBU2tPLDBCQUFULENBQW9DQyxZQUFwQyxFQUFrRDtBQUNoRCxRQUFJQSxpQkFBaUIsSUFBakIsSUFBeUJBLGlCQUFpQnBTLFNBQTFDLElBQXVEb1MsYUFBYW5KLFFBQWIsS0FBMEJqSixTQUFyRixFQUFnRztBQUM5RixVQUFJc0IsU0FBUzhRLGFBQWFuSixRQUExQjtBQUNBLFVBQUl5SCxXQUFXcFAsT0FBT29QLFFBQVAsQ0FBZ0IxTSxPQUFoQixDQUF3QixXQUF4QixFQUFxQyxFQUFyQyxDQUFmO0FBQ0EsVUFBSTJNLGFBQWFyUCxPQUFPcVAsVUFBeEI7QUFDQSxhQUFPLDRCQUE0QkQsUUFBNUIsR0FBdUMsR0FBdkMsR0FBNkNDLFVBQTdDLEdBQTBELEdBQWpFO0FBQ0Q7QUFDRCxXQUFPLEVBQVA7QUFDRDs7QUFFRDs7Ozs7QUFLQSxNQUFJMEIsd0JBQXdCLEVBQTVCOztBQUVBLFdBQVNDLDRCQUFULENBQXNDQyxVQUF0QyxFQUFrRDtBQUNoRCxRQUFJdkssT0FBT2tLLDZCQUFYOztBQUVBLFFBQUksQ0FBQ2xLLElBQUwsRUFBVztBQUNULFVBQUl3SyxhQUFhLE9BQU9ELFVBQVAsS0FBc0IsUUFBdEIsR0FBaUNBLFVBQWpDLEdBQThDQSxXQUFXN0wsV0FBWCxJQUEwQjZMLFdBQVd0TyxJQUFwRztBQUNBLFVBQUl1TyxVQUFKLEVBQWdCO0FBQ2R4SyxlQUFPLGdEQUFnRHdLLFVBQWhELEdBQTZELElBQXBFO0FBQ0Q7QUFDRjtBQUNELFdBQU94SyxJQUFQO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozs7O0FBV0EsV0FBU3lLLG1CQUFULENBQTZCdEksT0FBN0IsRUFBc0NvSSxVQUF0QyxFQUFrRDtBQUNoRCxRQUFJLENBQUNwSSxRQUFRRyxNQUFULElBQW1CSCxRQUFRRyxNQUFSLENBQWVvSSxTQUFsQyxJQUErQ3ZJLFFBQVF0SSxHQUFSLElBQWUsSUFBbEUsRUFBd0U7QUFDdEU7QUFDRDtBQUNEc0ksWUFBUUcsTUFBUixDQUFlb0ksU0FBZixHQUEyQixJQUEzQjs7QUFFQSxRQUFJQyw0QkFBNEJMLDZCQUE2QkMsVUFBN0IsQ0FBaEM7QUFDQSxRQUFJRixzQkFBc0JNLHlCQUF0QixDQUFKLEVBQXNEO0FBQ3BEO0FBQ0Q7QUFDRE4sMEJBQXNCTSx5QkFBdEIsSUFBbUQsSUFBbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBSUMsYUFBYSxFQUFqQjtBQUNBLFFBQUl6SSxXQUFXQSxRQUFRRSxNQUFuQixJQUE2QkYsUUFBUUUsTUFBUixLQUFtQnpCLGtCQUFrQkYsT0FBdEUsRUFBK0U7QUFDN0U7QUFDQWtLLG1CQUFhLGlDQUFpQy9CLGlCQUFpQjFHLFFBQVFFLE1BQXpCLENBQWpDLEdBQW9FLEdBQWpGO0FBQ0Q7O0FBRUQwSCxpQ0FBNkI1SCxPQUE3QjtBQUNBO0FBQ0VqRSxnQkFBVSxLQUFWLEVBQWlCLHdFQUF3RSxtRUFBekYsRUFBOEp5TSx5QkFBOUosRUFBeUxDLFVBQXpMLEVBQXFNakgsa0JBQXJNO0FBQ0Q7QUFDRG9HLGlDQUE2QixJQUE3QjtBQUNEOztBQUVEOzs7Ozs7Ozs7QUFTQSxXQUFTYyxpQkFBVCxDQUEyQkMsSUFBM0IsRUFBaUNQLFVBQWpDLEVBQTZDO0FBQzNDLFFBQUksUUFBT08sSUFBUCx5Q0FBT0EsSUFBUCxPQUFnQixRQUFwQixFQUE4QjtBQUM1QjtBQUNEO0FBQ0QsUUFBSXBPLE1BQU1vSixPQUFOLENBQWNnRixJQUFkLENBQUosRUFBeUI7QUFDdkIsV0FBSyxJQUFJdFMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJc1MsS0FBS2xSLE1BQXpCLEVBQWlDcEIsR0FBakMsRUFBc0M7QUFDcEMsWUFBSWtOLFFBQVFvRixLQUFLdFMsQ0FBTCxDQUFaO0FBQ0EsWUFBSStLLGVBQWVtQyxLQUFmLENBQUosRUFBMkI7QUFDekIrRSw4QkFBb0IvRSxLQUFwQixFQUEyQjZFLFVBQTNCO0FBQ0Q7QUFDRjtBQUNGLEtBUEQsTUFPTyxJQUFJaEgsZUFBZXVILElBQWYsQ0FBSixFQUEwQjtBQUMvQjtBQUNBLFVBQUlBLEtBQUt4SSxNQUFULEVBQWlCO0FBQ2Z3SSxhQUFLeEksTUFBTCxDQUFZb0ksU0FBWixHQUF3QixJQUF4QjtBQUNEO0FBQ0YsS0FMTSxNQUtBLElBQUlJLElBQUosRUFBVTtBQUNmLFVBQUkvRSxhQUFhaEwsY0FBYytQLElBQWQsQ0FBakI7QUFDQSxVQUFJLE9BQU8vRSxVQUFQLEtBQXNCLFVBQTFCLEVBQXNDO0FBQ3BDO0FBQ0E7QUFDQSxZQUFJQSxlQUFlK0UsS0FBSzlFLE9BQXhCLEVBQWlDO0FBQy9CLGNBQUluTCxXQUFXa0wsV0FBV2pNLElBQVgsQ0FBZ0JnUixJQUFoQixDQUFmO0FBQ0EsY0FBSTdFLE9BQU8sS0FBSyxDQUFoQjtBQUNBLGlCQUFPLENBQUMsQ0FBQ0EsT0FBT3BMLFNBQVNzTCxJQUFULEVBQVIsRUFBeUJDLElBQWpDLEVBQXVDO0FBQ3JDLGdCQUFJN0MsZUFBZTBDLEtBQUt4RCxLQUFwQixDQUFKLEVBQWdDO0FBQzlCZ0ksa0NBQW9CeEUsS0FBS3hELEtBQXpCLEVBQWdDOEgsVUFBaEM7QUFDRDtBQUNGO0FBQ0Y7QUFDRjtBQUNGO0FBQ0Y7O0FBRUQ7Ozs7OztBQU1BLFdBQVNRLGlCQUFULENBQTJCNUksT0FBM0IsRUFBb0M7QUFDbEMsUUFBSTZJLGlCQUFpQjdJLFFBQVFILElBQTdCO0FBQ0EsUUFBSSxPQUFPZ0osY0FBUCxLQUEwQixVQUE5QixFQUEwQztBQUN4QztBQUNEO0FBQ0QsUUFBSS9PLE9BQU8rTyxlQUFldE0sV0FBZixJQUE4QnNNLGVBQWUvTyxJQUF4RDtBQUNBLFFBQUlnUCxZQUFZRCxlQUFlQyxTQUEvQjtBQUNBLFFBQUlBLFNBQUosRUFBZTtBQUNibEIsbUNBQTZCNUgsT0FBN0I7QUFDQTJILHVCQUFpQm1CLFNBQWpCLEVBQTRCOUksUUFBUTlDLEtBQXBDLEVBQTJDLE1BQTNDLEVBQW1EcEQsSUFBbkQsRUFBeUQwSCxnQkFBekQ7QUFDQW9HLG1DQUE2QixJQUE3QjtBQUNELEtBSkQsTUFJTyxJQUFJaUIsZUFBZUUsU0FBZixLQUE2QmxULFNBQTdCLElBQTBDLENBQUNnUyw2QkFBL0MsRUFBOEU7QUFDbkZBLHNDQUFnQyxJQUFoQztBQUNBOUwsZ0JBQVUsS0FBVixFQUFpQixxR0FBakIsRUFBd0hqQyxRQUFRLFNBQWhJO0FBQ0Q7QUFDRCxRQUFJLE9BQU8rTyxlQUFlRyxlQUF0QixLQUEwQyxVQUE5QyxFQUEwRDtBQUN4RCxPQUFDSCxlQUFlRyxlQUFmLENBQStCQyxvQkFBaEMsR0FBdURsTixVQUFVLEtBQVYsRUFBaUIsK0RBQStELGtFQUFoRixDQUF2RCxHQUE2TSxLQUFLLENBQWxOO0FBQ0Q7QUFDRjs7QUFFRDs7OztBQUlBLFdBQVNtTixxQkFBVCxDQUErQkMsUUFBL0IsRUFBeUM7QUFDdkN2QixpQ0FBNkJ1QixRQUE3Qjs7QUFFQSxRQUFJcFMsT0FBT3pCLE9BQU95QixJQUFQLENBQVlvUyxTQUFTak0sS0FBckIsQ0FBWDtBQUNBLFNBQUssSUFBSTdHLElBQUksQ0FBYixFQUFnQkEsSUFBSVUsS0FBS1UsTUFBekIsRUFBaUNwQixHQUFqQyxFQUFzQztBQUNwQyxVQUFJcUIsTUFBTVgsS0FBS1YsQ0FBTCxDQUFWO0FBQ0EsVUFBSXFCLFFBQVEsVUFBUixJQUFzQkEsUUFBUSxLQUFsQyxFQUF5QztBQUN2Q3FFLGtCQUFVLEtBQVYsRUFBaUIscURBQXFELDREQUF0RSxFQUFvSXJFLEdBQXBJLEVBQXlJOEosa0JBQXpJO0FBQ0E7QUFDRDtBQUNGOztBQUVELFFBQUkySCxTQUFTdkssR0FBVCxLQUFpQixJQUFyQixFQUEyQjtBQUN6QjdDLGdCQUFVLEtBQVYsRUFBaUIseURBQWpCLEVBQTRFeUYsa0JBQTVFO0FBQ0Q7O0FBRURvRyxpQ0FBNkIsSUFBN0I7QUFDRDs7QUFFRCxXQUFTd0IsMkJBQVQsQ0FBcUN2SixJQUFyQyxFQUEyQzNDLEtBQTNDLEVBQWtEc0QsUUFBbEQsRUFBNEQ7QUFDMUQsUUFBSTZJLFlBQVk1QyxtQkFBbUI1RyxJQUFuQixDQUFoQjs7QUFFQTtBQUNBO0FBQ0EsUUFBSSxDQUFDd0osU0FBTCxFQUFnQjtBQUNkLFVBQUl4TCxPQUFPLEVBQVg7QUFDQSxVQUFJZ0MsU0FBU2hLLFNBQVQsSUFBc0IsUUFBT2dLLElBQVAseUNBQU9BLElBQVAsT0FBZ0IsUUFBaEIsSUFBNEJBLFNBQVMsSUFBckMsSUFBNkN2SyxPQUFPeUIsSUFBUCxDQUFZOEksSUFBWixFQUFrQnBJLE1BQWxCLEtBQTZCLENBQXBHLEVBQXVHO0FBQ3JHb0csZ0JBQVEsK0RBQStELHdFQUF2RTtBQUNEOztBQUVELFVBQUl5TCxhQUFhdEIsMkJBQTJCOUssS0FBM0IsQ0FBakI7QUFDQSxVQUFJb00sVUFBSixFQUFnQjtBQUNkekwsZ0JBQVF5TCxVQUFSO0FBQ0QsT0FGRCxNQUVPO0FBQ0x6TCxnQkFBUWtLLDZCQUFSO0FBQ0Q7O0FBRURsSyxjQUFRMkQsc0JBQXNCLEVBQTlCOztBQUVBLFVBQUkrSCxhQUFhLEtBQUssQ0FBdEI7QUFDQSxVQUFJMUosU0FBUyxJQUFiLEVBQW1CO0FBQ2pCMEoscUJBQWEsTUFBYjtBQUNELE9BRkQsTUFFTyxJQUFJaFAsTUFBTW9KLE9BQU4sQ0FBYzlELElBQWQsQ0FBSixFQUF5QjtBQUM5QjBKLHFCQUFhLE9BQWI7QUFDRCxPQUZNLE1BRUE7QUFDTEEsNEJBQW9CMUosSUFBcEIseUNBQW9CQSxJQUFwQjtBQUNEOztBQUVEOUQsZ0JBQVUsS0FBVixFQUFpQixvRUFBb0UsMERBQXBFLEdBQWlJLDRCQUFsSixFQUFnTHdOLFVBQWhMLEVBQTRMMUwsSUFBNUw7QUFDRDs7QUFFRCxRQUFJbUMsVUFBVU8sY0FBY3hGLEtBQWQsQ0FBb0IsSUFBcEIsRUFBMEJ2RCxTQUExQixDQUFkOztBQUVBO0FBQ0E7QUFDQSxRQUFJd0ksV0FBVyxJQUFmLEVBQXFCO0FBQ25CLGFBQU9BLE9BQVA7QUFDRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBSXFKLFNBQUosRUFBZTtBQUNiLFdBQUssSUFBSWhULElBQUksQ0FBYixFQUFnQkEsSUFBSW1CLFVBQVVDLE1BQTlCLEVBQXNDcEIsR0FBdEMsRUFBMkM7QUFDekNxUywwQkFBa0JsUixVQUFVbkIsQ0FBVixDQUFsQixFQUFnQ3dKLElBQWhDO0FBQ0Q7QUFDRjs7QUFFRCxRQUFJQSxTQUFTMUgsbUJBQWIsRUFBa0M7QUFDaEMrUSw0QkFBc0JsSixPQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMNEksd0JBQWtCNUksT0FBbEI7QUFDRDs7QUFFRCxXQUFPQSxPQUFQO0FBQ0Q7O0FBRUQsV0FBU3dKLDJCQUFULENBQXFDM0osSUFBckMsRUFBMkM7QUFDekMsUUFBSTRKLG1CQUFtQkwsNEJBQTRCTSxJQUE1QixDQUFpQyxJQUFqQyxFQUF1QzdKLElBQXZDLENBQXZCO0FBQ0E0SixxQkFBaUI1SixJQUFqQixHQUF3QkEsSUFBeEI7QUFDQTtBQUNBO0FBQ0V2SyxhQUFPd0ksY0FBUCxDQUFzQjJMLGdCQUF0QixFQUF3QyxNQUF4QyxFQUFnRDtBQUM5Q3JKLG9CQUFZLEtBRGtDO0FBRTlDckMsYUFBSyxlQUFZO0FBQ2Y5QywrQkFBcUIsS0FBckIsRUFBNEIsMkRBQTJELHFDQUF2RjtBQUNBM0YsaUJBQU93SSxjQUFQLENBQXNCLElBQXRCLEVBQTRCLE1BQTVCLEVBQW9DO0FBQ2xDd0MsbUJBQU9UO0FBRDJCLFdBQXBDO0FBR0EsaUJBQU9BLElBQVA7QUFDRDtBQVI2QyxPQUFoRDtBQVVEOztBQUVELFdBQU80SixnQkFBUDtBQUNEOztBQUVELFdBQVNFLDBCQUFULENBQW9DM0osT0FBcEMsRUFBNkM5QyxLQUE3QyxFQUFvRHNELFFBQXBELEVBQThEO0FBQzVELFFBQUlRLGFBQWFHLGFBQWFwRyxLQUFiLENBQW1CLElBQW5CLEVBQXlCdkQsU0FBekIsQ0FBakI7QUFDQSxTQUFLLElBQUluQixJQUFJLENBQWIsRUFBZ0JBLElBQUltQixVQUFVQyxNQUE5QixFQUFzQ3BCLEdBQXRDLEVBQTJDO0FBQ3pDcVMsd0JBQWtCbFIsVUFBVW5CLENBQVYsQ0FBbEIsRUFBZ0MySyxXQUFXbkIsSUFBM0M7QUFDRDtBQUNEK0ksc0JBQWtCNUgsVUFBbEI7QUFDQSxXQUFPQSxVQUFQO0FBQ0Q7O0FBRUQsTUFBSTVMLFFBQVE7QUFDVndVLGNBQVU7QUFDUnBULFdBQUs0TyxXQURHO0FBRVJ2TyxlQUFTNk4sZUFGRDtBQUdSMUIsYUFBT3FDLGFBSEM7QUFJUkMsZUFBU0EsT0FKRDtBQUtSdUUsWUFBTXRFO0FBTEUsS0FEQTs7QUFTVmxILGVBQVdBLFNBVEQ7QUFVVnBCLGVBQVdBLFNBVkQ7QUFXVmlCLG1CQUFlQSxhQVhMOztBQWFWc0gsbUJBQWVBLGFBYkw7QUFjVlcsZ0JBQVlBLFVBZEY7O0FBZ0JWMkQsY0FBVTNSLG1CQWhCQTtBQWlCVjRSLGdCQUFZM1Isc0JBakJGO0FBa0JWNFIsd0JBQW9CelIscUJBbEJWOztBQW9CVmdJLG1CQUFlNkksMkJBcEJMO0FBcUJWakksa0JBQWN3SSwwQkFyQko7QUFzQlZNLG1CQUFlVCwyQkF0Qkw7QUF1QlZwSSxvQkFBZ0JBLGNBdkJOOztBQXlCVjhJLGFBQVN0UyxZQXpCQzs7QUEyQlZ1Uyx3REFBb0Q7QUFDbEQxTCx5QkFBbUJBLGlCQUQrQjtBQUVsRDtBQUNBekksY0FBUWlCO0FBSDBDO0FBM0IxQyxHQUFaOztBQWtDQTtBQUNFQSxpQkFBYTdCLE1BQU0rVSxrREFBbkIsRUFBdUU7QUFDckU7QUFDQTdJLDhCQUF3QkEsc0JBRjZDO0FBR3JFO0FBQ0E7QUFDQThJLDhCQUF3QjtBQUw2QyxLQUF2RTtBQU9EOztBQUlELE1BQUlDLFVBQVUvVSxPQUFPNEUsTUFBUCxDQUFjO0FBQzNCb1EsYUFBU2xWO0FBRGtCLEdBQWQsQ0FBZDs7QUFJQSxNQUFJbVYsVUFBWUYsV0FBV2pWLEtBQWIsSUFBd0JpVixPQUF0Qzs7QUFFQTtBQUNBO0FBQ0EsTUFBSUcsUUFBUUQsUUFBUSxTQUFSLElBQXFCQSxRQUFRLFNBQVIsQ0FBckIsR0FBMENBLE9BQXREOztBQUVBLFNBQU9DLEtBQVA7QUFFQyxDQWpzREEsQ0FBRCIsImZpbGUiOiJyZWFjdC5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMy4yXG4gKiByZWFjdC5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLlJlYWN0ID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4vKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG52YXIgb2JqZWN0QXNzaWduID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcblxuLy8gVE9ETzogdGhpcyBpcyBzcGVjaWFsIGJlY2F1c2UgaXQgZ2V0cyBpbXBvcnRlZCBkdXJpbmcgYnVpbGQuXG5cbnZhciBSZWFjdFZlcnNpb24gPSAnMTYuMy4yJztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbFsnZm9yJ107XG5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfQ0FMTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QuY2FsbCcpIDogMHhlYWM4O1xudmFyIFJFQUNUX1JFVFVSTl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QucmV0dXJuJykgOiAweGVhYzk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7XG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sWydmb3InXSgncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2xbJ2ZvciddKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5cbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqL1xuXG5cblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIHZhbGlkYXRlRm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQoZm9ybWF0KSB7fTtcblxue1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbnZhciBpbnZhcmlhbnRfMSA9IGludmFyaWFudDtcblxuLy8gUmVseWluZyBvbiB0aGUgYGludmFyaWFudCgpYCBpbXBsZW1lbnRhdGlvbiBsZXRzIHVzXG4vLyBoYXZlIHByZXNlcnZlIHRoZSBmb3JtYXQgYW5kIHBhcmFtcyBpbiB0aGUgd3d3IGJ1aWxkcy5cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuXG5cbnZhciBlbXB0eU9iamVjdCA9IHt9O1xuXG57XG4gIE9iamVjdC5mcmVlemUoZW1wdHlPYmplY3QpO1xufVxuXG52YXIgZW1wdHlPYmplY3RfMSA9IGVtcHR5T2JqZWN0O1xuXG4vKipcbiAqIEZvcmtlZCBmcm9tIGZianMvd2FybmluZzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mYmpzL2Jsb2IvZTY2YmEyMGFkNWJlNDMzZWI1NDQyM2YyYjA5N2Q4MjkzMjRkOWRlNi9wYWNrYWdlcy9mYmpzL3NyYy9fX2ZvcmtzX18vd2FybmluZy5qc1xuICpcbiAqIE9ubHkgY2hhbmdlIGlzIHdlIHVzZSBjb25zb2xlLndhcm4gaW5zdGVhZCBvZiBjb25zb2xlLmVycm9yLFxuICogYW5kIGRvIG5vdGhpbmcgd2hlbiAnY29uc29sZScgaXMgbm90IHN1cHBvcnRlZC5cbiAqIFRoaXMgcmVhbGx5IHNpbXBsaWZpZXMgdGhlIGNvZGUuXG4gKiAtLS1cbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICB9KTtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgbG93UHJpb3JpdHlXYXJuaW5nID0gZnVuY3Rpb24gKGNvbmRpdGlvbiwgZm9ybWF0KSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgKyAnbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMl0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBwcmludFdhcm5pbmcuYXBwbHkodW5kZWZpbmVkLCBbZm9ybWF0XS5jb25jYXQoYXJncykpO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIGxvd1ByaW9yaXR5V2FybmluZyQxID0gbG93UHJpb3JpdHlXYXJuaW5nO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIFxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG52YXIgZW1wdHlGdW5jdGlvbiA9IGZ1bmN0aW9uIGVtcHR5RnVuY3Rpb24oKSB7fTtcblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxudmFyIGVtcHR5RnVuY3Rpb25fMSA9IGVtcHR5RnVuY3Rpb247XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cblxuXG5cblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBlbXB0eUZ1bmN0aW9uXzE7XG5cbntcbiAgdmFyIHByaW50V2FybmluZyQxID0gZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGZvcm1hdCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG5cbiAgd2FybmluZyA9IGZ1bmN0aW9uIHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArICdtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdGYWlsZWQgQ29tcG9zaXRlIHByb3BUeXBlOiAnKSA9PT0gMCkge1xuICAgICAgcmV0dXJuOyAvLyBJZ25vcmUgQ29tcG9zaXRlQ29tcG9uZW50IHByb3B0eXBlIGNoZWNrLlxuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiA+IDIgPyBfbGVuMiAtIDIgOiAwKSwgX2tleTIgPSAyOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZyQxLmFwcGx5KHVuZGVmaW5lZCwgW2Zvcm1hdF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07XG59XG5cbnZhciB3YXJuaW5nXzEgPSB3YXJuaW5nO1xuXG52YXIgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50ID0ge307XG5cbmZ1bmN0aW9uIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCBjYWxsZXJOYW1lKSB7XG4gIHtcbiAgICB2YXIgX2NvbnN0cnVjdG9yID0gcHVibGljSW5zdGFuY2UuY29uc3RydWN0b3I7XG4gICAgdmFyIGNvbXBvbmVudE5hbWUgPSBfY29uc3RydWN0b3IgJiYgKF9jb25zdHJ1Y3Rvci5kaXNwbGF5TmFtZSB8fCBfY29uc3RydWN0b3IubmFtZSkgfHwgJ1JlYWN0Q2xhc3MnO1xuICAgIHZhciB3YXJuaW5nS2V5ID0gY29tcG9uZW50TmFtZSArICcuJyArIGNhbGxlck5hbWU7XG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3YXJuaW5nXzEoZmFsc2UsIFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG4gICAgZGlkV2FyblN0YXRlVXBkYXRlRm9yVW5tb3VudGVkQ29tcG9uZW50W3dhcm5pbmdLZXldID0gdHJ1ZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG52YXIgUmVhY3ROb29wVXBkYXRlUXVldWUgPSB7XG4gIC8qKlxuICAgKiBDaGVja3Mgd2hldGhlciBvciBub3QgdGhpcyBjb21wb3NpdGUgY29tcG9uZW50IGlzIG1vdW50ZWQuXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHdlIHdhbnQgdG8gdGVzdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBtb3VudGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGZpbmFsXG4gICAqL1xuICBpc01vdW50ZWQ6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICAgKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAgICpcbiAgICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICAgKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAgICpcbiAgICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICAgKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHs/ZnVuY3Rpb259IGNhbGxiYWNrIENhbGxlZCBhZnRlciBjb21wb25lbnQgaXMgdXBkYXRlZC5cbiAgICogQHBhcmFtIHs/c3RyaW5nfSBjYWxsZXJOYW1lIG5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZUZvcmNlVXBkYXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdmb3JjZVVwZGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgb3IgYHNldFN0YXRlYCB0byBtdXRhdGUgc3RhdGUuXG4gICAqIFlvdSBzaG91bGQgdHJlYXQgYHRoaXMuc3RhdGVgIGFzIGltbXV0YWJsZS5cbiAgICpcbiAgICogVGhlcmUgaXMgbm8gZ3VhcmFudGVlIHRoYXQgYHRoaXMuc3RhdGVgIHdpbGwgYmUgaW1tZWRpYXRlbHkgdXBkYXRlZCwgc29cbiAgICogYWNjZXNzaW5nIGB0aGlzLnN0YXRlYCBhZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kIG1heSByZXR1cm4gdGhlIG9sZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb21wbGV0ZVN0YXRlIE5leHQgc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVSZXBsYWNlU3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgY29tcGxldGVTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3JlcGxhY2VTdGF0ZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGEgc3Vic2V0IG9mIHRoZSBzdGF0ZS4gVGhpcyBvbmx5IGV4aXN0cyBiZWNhdXNlIF9wZW5kaW5nU3RhdGUgaXNcbiAgICogaW50ZXJuYWwuIFRoaXMgcHJvdmlkZXMgYSBtZXJnaW5nIHN0cmF0ZWd5IHRoYXQgaXMgbm90IGF2YWlsYWJsZSB0byBkZWVwXG4gICAqIHByb3BlcnRpZXMgd2hpY2ggaXMgY29uZnVzaW5nLiBUT0RPOiBFeHBvc2UgcGVuZGluZ1N0YXRlIG9yIGRvbid0IHVzZSBpdFxuICAgKiBkdXJpbmcgdGhlIG1lcmdlLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB0aGF0IHNob3VsZCByZXJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcnRpYWxTdGF0ZSBOZXh0IHBhcnRpYWwgc3RhdGUgdG8gYmUgbWVyZ2VkIHdpdGggc3RhdGUuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gTmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlU2V0U3RhdGU6IGZ1bmN0aW9uIChwdWJsaWNJbnN0YW5jZSwgcGFydGlhbFN0YXRlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnc2V0U3RhdGUnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGhlbHBlcnMgZm9yIHRoZSB1cGRhdGluZyBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3RfMTtcbiAgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbkNvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA9IHt9O1xuXG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuQ29tcG9uZW50LnByb3RvdHlwZS5zZXRTdGF0ZSA9IGZ1bmN0aW9uIChwYXJ0aWFsU3RhdGUsIGNhbGxiYWNrKSB7XG4gICEodHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhcnRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyB8fCBwYXJ0aWFsU3RhdGUgPT0gbnVsbCkgPyBpbnZhcmlhbnRfMShmYWxzZSwgJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhbiBvYmplY3Qgb2Ygc3RhdGUgdmFyaWFibGVzLicpIDogdm9pZCAwO1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcblxuLyoqXG4gKiBGb3JjZXMgYW4gdXBkYXRlLiBUaGlzIHNob3VsZCBvbmx5IGJlIGludm9rZWQgd2hlbiBpdCBpcyBrbm93biB3aXRoXG4gKiBjZXJ0YWludHkgdGhhdCB3ZSBhcmUgKipub3QqKiBpbiBhIERPTSB0cmFuc2FjdGlvbi5cbiAqXG4gKiBZb3UgbWF5IHdhbnQgdG8gY2FsbCB0aGlzIHdoZW4geW91IGtub3cgdGhhdCBzb21lIGRlZXBlciBhc3BlY3Qgb2YgdGhlXG4gKiBjb21wb25lbnQncyBzdGF0ZSBoYXMgY2hhbmdlZCBidXQgYHNldFN0YXRlYCB3YXMgbm90IGNhbGxlZC5cbiAqXG4gKiBUaGlzIHdpbGwgbm90IGludm9rZSBgc2hvdWxkQ29tcG9uZW50VXBkYXRlYCwgYnV0IGl0IHdpbGwgaW52b2tlXG4gKiBgY29tcG9uZW50V2lsbFVwZGF0ZWAgYW5kIGBjb21wb25lbnREaWRVcGRhdGVgLlxuICpcbiAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICogQGZpbmFsXG4gKiBAcHJvdGVjdGVkXG4gKi9cbkNvbXBvbmVudC5wcm90b3R5cGUuZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgdGhpcy51cGRhdGVyLmVucXVldWVGb3JjZVVwZGF0ZSh0aGlzLCBjYWxsYmFjaywgJ2ZvcmNlVXBkYXRlJyk7XG59O1xuXG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xue1xuICB2YXIgZGVwcmVjYXRlZEFQSXMgPSB7XG4gICAgaXNNb3VudGVkOiBbJ2lzTW91bnRlZCcsICdJbnN0ZWFkLCBtYWtlIHN1cmUgdG8gY2xlYW4gdXAgc3Vic2NyaXB0aW9ucyBhbmQgcGVuZGluZyByZXF1ZXN0cyBpbiAnICsgJ2NvbXBvbmVudFdpbGxVbm1vdW50IHRvIHByZXZlbnQgbWVtb3J5IGxlYWtzLiddLFxuICAgIHJlcGxhY2VTdGF0ZTogWydyZXBsYWNlU3RhdGUnLCAnUmVmYWN0b3IgeW91ciBjb2RlIHRvIHVzZSBzZXRTdGF0ZSBpbnN0ZWFkIChzZWUgJyArICdodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzMyMzYpLiddXG4gIH07XG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG93UHJpb3JpdHlXYXJuaW5nJDEoZmFsc2UsICclcyguLi4pIGlzIGRlcHJlY2F0ZWQgaW4gcGxhaW4gSmF2YVNjcmlwdCBSZWFjdCBjbGFzc2VzLiAlcycsIGluZm9bMF0sIGluZm9bMV0pO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICBmb3IgKHZhciBmbk5hbWUgaW4gZGVwcmVjYXRlZEFQSXMpIHtcbiAgICBpZiAoZGVwcmVjYXRlZEFQSXMuaGFzT3duUHJvcGVydHkoZm5OYW1lKSkge1xuICAgICAgZGVmaW5lRGVwcmVjYXRpb25XYXJuaW5nKGZuTmFtZSwgZGVwcmVjYXRlZEFQSXNbZm5OYW1lXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIENvbXBvbmVudER1bW15KCkge31cbkNvbXBvbmVudER1bW15LnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ29udmVuaWVuY2UgY29tcG9uZW50IHdpdGggZGVmYXVsdCBzaGFsbG93IGVxdWFsaXR5IGNoZWNrIGZvciBzQ1UuXG4gKi9cbmZ1bmN0aW9uIFB1cmVDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdF8xO1xuICB0aGlzLnVwZGF0ZXIgPSB1cGRhdGVyIHx8IFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlO1xufVxuXG52YXIgcHVyZUNvbXBvbmVudFByb3RvdHlwZSA9IFB1cmVDb21wb25lbnQucHJvdG90eXBlID0gbmV3IENvbXBvbmVudER1bW15KCk7XG5wdXJlQ29tcG9uZW50UHJvdG90eXBlLmNvbnN0cnVjdG9yID0gUHVyZUNvbXBvbmVudDtcbi8vIEF2b2lkIGFuIGV4dHJhIHByb3RvdHlwZSBqdW1wIGZvciB0aGVzZSBtZXRob2RzLlxub2JqZWN0QXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuICB7XG4gICAgT2JqZWN0LnNlYWwocmVmT2JqZWN0KTtcbiAgfVxuICByZXR1cm4gcmVmT2JqZWN0O1xufVxuXG4vKipcbiAqIEtlZXBzIHRyYWNrIG9mIHRoZSBjdXJyZW50IG93bmVyLlxuICpcbiAqIFRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBjb21wb25lbnQgd2hvIHNob3VsZCBvd24gYW55IGNvbXBvbmVudHMgdGhhdCBhcmVcbiAqIGN1cnJlbnRseSBiZWluZyBjb25zdHJ1Y3RlZC5cbiAqL1xudmFyIFJlYWN0Q3VycmVudE93bmVyID0ge1xuICAvKipcbiAgICogQGludGVybmFsXG4gICAqIEB0eXBlIHtSZWFjdENvbXBvbmVudH1cbiAgICovXG4gIGN1cnJlbnQ6IG51bGxcbn07XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSQxID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcblxudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdm9pZCAwO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eSQxLmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkkMS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmdfMShmYWxzZSwgJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICAgIHdhcm5pbmdfMShmYWxzZSwgJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9mYi5tZS9yZWFjdC1zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICB9XG4gIH07XG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBubyBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQGludGVybmFsXG4gKi9cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG5cbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG5cbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307XG5cbiAgICAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTtcbiAgICAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7XG4gICAgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIHZhciBwcm9wTmFtZSA9IHZvaWQgMDtcblxuICAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG4gIHZhciBwcm9wcyA9IHt9O1xuXG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICB9XG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBzZWxmID0gY29uZmlnLl9fc2VsZiA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NlbGY7XG4gICAgc291cmNlID0gY29uZmlnLl9fc291cmNlID09PSB1bmRlZmluZWQgPyBudWxsIDogY29uZmlnLl9fc291cmNlO1xuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5JDEuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbkxlbmd0aDsgaSsrKSB7XG4gICAgICBjaGlsZEFycmF5W2ldID0gYXJndW1lbnRzW2kgKyAyXTtcbiAgICB9XG4gICAge1xuICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZEFycmF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG4gIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BzLiQkdHlwZW9mID09PSAndW5kZWZpbmVkJyB8fCBwcm9wcy4kJHR5cGVvZiAhPT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcbiAgICAgICAgaWYgKGtleSkge1xuICAgICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZikge1xuICAgICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBSZWFjdEVsZW1lbnRzIG9mIGEgZ2l2ZW4gdHlwZS5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjY3JlYXRlZmFjdG9yeVxuICovXG5cblxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuXG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG4vKipcbiAqIENsb25lIGFuZCByZXR1cm4gYSBuZXcgUmVhY3RFbGVtZW50IHVzaW5nIGVsZW1lbnQgYXMgdGhlIHN0YXJ0aW5nIHBvaW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNjbG9uZWVsZW1lbnRcbiAqL1xuZnVuY3Rpb24gY2xvbmVFbGVtZW50KGVsZW1lbnQsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgISEoZWxlbWVudCA9PT0gbnVsbCB8fCBlbGVtZW50ID09PSB1bmRlZmluZWQpID8gaW52YXJpYW50XzEoZmFsc2UsICdSZWFjdC5jbG9uZUVsZW1lbnQoLi4uKTogVGhlIGFyZ3VtZW50IG11c3QgYmUgYSBSZWFjdCBlbGVtZW50LCBidXQgeW91IHBhc3NlZCAlcy4nLCBlbGVtZW50KSA6IHZvaWQgMDtcblxuICB2YXIgcHJvcE5hbWUgPSB2b2lkIDA7XG5cbiAgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuICB2YXIgcHJvcHMgPSBvYmplY3RBc3NpZ24oe30sIGVsZW1lbnQucHJvcHMpO1xuXG4gIC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcbiAgdmFyIGtleSA9IGVsZW1lbnQua2V5O1xuICB2YXIgcmVmID0gZWxlbWVudC5yZWY7XG4gIC8vIFNlbGYgaXMgcHJlc2VydmVkIHNpbmNlIHRoZSBvd25lciBpcyBwcmVzZXJ2ZWQuXG4gIHZhciBzZWxmID0gZWxlbWVudC5fc2VsZjtcbiAgLy8gU291cmNlIGlzIHByZXNlcnZlZCBzaW5jZSBjbG9uZUVsZW1lbnQgaXMgdW5saWtlbHkgdG8gYmUgdGFyZ2V0ZWQgYnkgYVxuICAvLyB0cmFuc3BpbGVyLCBhbmQgdGhlIG9yaWdpbmFsIHNvdXJjZSBpcyBwcm9iYWJseSBhIGJldHRlciBpbmRpY2F0b3Igb2YgdGhlXG4gIC8vIHRydWUgb3duZXIuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7XG5cbiAgLy8gT3duZXIgd2lsbCBiZSBwcmVzZXJ2ZWQsIHVubGVzcyByZWYgaXMgb3ZlcnJpZGRlblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG4gICAgdmFyIGRlZmF1bHRQcm9wcyA9IHZvaWQgMDtcbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkkMS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENoaWxkcmVuIGNhbiBiZSBtb3JlIHRoYW4gb25lIGFyZ3VtZW50LCBhbmQgdGhvc2UgYXJlIHRyYW5zZmVycmVkIG9udG9cbiAgLy8gdGhlIG5ld2x5IGFsbG9jYXRlZCBwcm9wcyBvYmplY3QuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICBpZiAoY2hpbGRyZW5MZW5ndGggPT09IDEpIHtcbiAgICBwcm9wcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuTGVuZ3RoID4gMSkge1xuICAgIHZhciBjaGlsZEFycmF5ID0gQXJyYXkoY2hpbGRyZW5MZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRBcnJheTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQoZWxlbWVudC50eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpO1xufVxuXG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIHZhbGlkIGNvbXBvbmVudC5cbiAqIEBmaW5hbFxuICovXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcblxue1xuICAvLyBDb21wb25lbnQgdGhhdCBpcyBiZWluZyB3b3JrZWQgb25cbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2sgPSBudWxsO1xuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW1wbCA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrO1xuICAgIGlmIChpbXBsKSB7XG4gICAgICByZXR1cm4gaW1wbCgpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn1cblxudmFyIFNFUEFSQVRPUiA9ICcuJztcbnZhciBTVUJTRVBBUkFUT1IgPSAnOic7XG5cbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlKGtleSkge1xuICB2YXIgZXNjYXBlUmVnZXggPSAvWz06XS9nO1xuICB2YXIgZXNjYXBlckxvb2t1cCA9IHtcbiAgICAnPSc6ICc9MCcsXG4gICAgJzonOiAnPTInXG4gIH07XG4gIHZhciBlc2NhcGVkU3RyaW5nID0gKCcnICsga2V5KS5yZXBsYWNlKGVzY2FwZVJlZ2V4LCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZXNjYXBlckxvb2t1cFttYXRjaF07XG4gIH0pO1xuXG4gIHJldHVybiAnJCcgKyBlc2NhcGVkU3RyaW5nO1xufVxuXG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG52YXIgZGlkV2FybkFib3V0TWFwcyA9IGZhbHNlO1xuXG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuZnVuY3Rpb24gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHRleHQpIHtcbiAgcmV0dXJuICgnJyArIHRleHQpLnJlcGxhY2UodXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXgsICckJi8nKTtcbn1cblxudmFyIFBPT0xfU0laRSA9IDEwO1xudmFyIHRyYXZlcnNlQ29udGV4dFBvb2wgPSBbXTtcbmZ1bmN0aW9uIGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChtYXBSZXN1bHQsIGtleVByZWZpeCwgbWFwRnVuY3Rpb24sIG1hcENvbnRleHQpIHtcbiAgaWYgKHRyYXZlcnNlQ29udGV4dFBvb2wubGVuZ3RoKSB7XG4gICAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IHRyYXZlcnNlQ29udGV4dFBvb2wucG9wKCk7XG4gICAgdHJhdmVyc2VDb250ZXh0LnJlc3VsdCA9IG1hcFJlc3VsdDtcbiAgICB0cmF2ZXJzZUNvbnRleHQua2V5UHJlZml4ID0ga2V5UHJlZml4O1xuICAgIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbWFwRnVuY3Rpb247XG4gICAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBtYXBDb250ZXh0O1xuICAgIHRyYXZlcnNlQ29udGV4dC5jb3VudCA9IDA7XG4gICAgcmV0dXJuIHRyYXZlcnNlQ29udGV4dDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdWx0OiBtYXBSZXN1bHQsXG4gICAgICBrZXlQcmVmaXg6IGtleVByZWZpeCxcbiAgICAgIGZ1bmM6IG1hcEZ1bmN0aW9uLFxuICAgICAgY29udGV4dDogbWFwQ29udGV4dCxcbiAgICAgIGNvdW50OiAwXG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWxlYXNlVHJhdmVyc2VDb250ZXh0KHRyYXZlcnNlQ29udGV4dCkge1xuICB0cmF2ZXJzZUNvbnRleHQucmVzdWx0ID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmtleVByZWZpeCA9IG51bGw7XG4gIHRyYXZlcnNlQ29udGV4dC5mdW5jID0gbnVsbDtcbiAgdHJhdmVyc2VDb250ZXh0LmNvbnRleHQgPSBudWxsO1xuICB0cmF2ZXJzZUNvbnRleHQuY291bnQgPSAwO1xuICBpZiAodHJhdmVyc2VDb250ZXh0UG9vbC5sZW5ndGggPCBQT09MX1NJWkUpIHtcbiAgICB0cmF2ZXJzZUNvbnRleHRQb29sLnB1c2godHJhdmVyc2VDb250ZXh0KTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHshc3RyaW5nfSBuYW1lU29GYXIgTmFtZSBvZiB0aGUga2V5IHBhdGggc28gZmFyLlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIENhbGxiYWNrIHRvIGludm9rZSB3aXRoIGVhY2ggY2hpbGQgZm91bmQuXG4gKiBAcGFyYW0gez8qfSB0cmF2ZXJzZUNvbnRleHQgVXNlZCB0byBwYXNzIGluZm9ybWF0aW9uIHRocm91Z2hvdXQgdGhlIHRyYXZlcnNhbFxuICogcHJvY2Vzcy5cbiAqIEByZXR1cm4geyFudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4gaW4gdGhpcyBzdWJ0cmVlLlxuICovXG5mdW5jdGlvbiB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZHJlbiwgbmFtZVNvRmFyLCBjYWxsYmFjaywgdHJhdmVyc2VDb250ZXh0KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGNoaWxkcmVuO1xuXG4gIGlmICh0eXBlID09PSAndW5kZWZpbmVkJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAvLyBBbGwgb2YgdGhlIGFib3ZlIGFyZSBwZXJjZWl2ZWQgYXMgbnVsbC5cbiAgICBjaGlsZHJlbiA9IG51bGw7XG4gIH1cblxuICB2YXIgaW52b2tlQ2FsbGJhY2sgPSBmYWxzZTtcblxuICBpZiAoY2hpbGRyZW4gPT09IG51bGwpIHtcbiAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHN3aXRjaCAoY2hpbGRyZW4uJCR0eXBlb2YpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICAgICAgaW52b2tlQ2FsbGJhY2sgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2sodHJhdmVyc2VDb250ZXh0LCBjaGlsZHJlbixcbiAgICAvLyBJZiBpdCdzIHRoZSBvbmx5IGNoaWxkLCB0cmVhdCB0aGUgbmFtZSBhcyBpZiBpdCB3YXMgd3JhcHBlZCBpbiBhbiBhcnJheVxuICAgIC8vIHNvIHRoYXQgaXQncyBjb25zaXN0ZW50IGlmIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gZ3Jvd3MuXG4gICAgbmFtZVNvRmFyID09PSAnJyA/IFNFUEFSQVRPUiArIGdldENvbXBvbmVudEtleShjaGlsZHJlbiwgMCkgOiBuYW1lU29GYXIpO1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gdm9pZCAwO1xuICB2YXIgbmV4dE5hbWUgPSB2b2lkIDA7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuICB2YXIgbmV4dE5hbWVQcmVmaXggPSBuYW1lU29GYXIgPT09ICcnID8gU0VQQVJBVE9SIDogbmFtZVNvRmFyICsgU1VCU0VQQVJBVE9SO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSB0cmF2ZXJzZUFsbENoaWxkcmVuSW1wbChjaGlsZCwgbmV4dE5hbWUsIGNhbGxiYWNrLCB0cmF2ZXJzZUNvbnRleHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAge1xuICAgICAgICAvLyBXYXJuIGFib3V0IHVzaW5nIE1hcHMgYXMgY2hpbGRyZW5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gPT09IGNoaWxkcmVuLmVudHJpZXMpIHtcbiAgICAgICAgICAhZGlkV2FybkFib3V0TWFwcyA/IHdhcm5pbmdfMShmYWxzZSwgJ1VzaW5nIE1hcHMgYXMgY2hpbGRyZW4gaXMgdW5zdXBwb3J0ZWQgYW5kIHdpbGwgbGlrZWx5IHlpZWxkICcgKyAndW5leHBlY3RlZCByZXN1bHRzLiBDb252ZXJ0IGl0IHRvIGEgc2VxdWVuY2UvaXRlcmFibGUgb2Yga2V5ZWQgJyArICdSZWFjdEVsZW1lbnRzIGluc3RlYWQuJXMnLCBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKSkgOiB2b2lkIDA7XG4gICAgICAgICAgZGlkV2FybkFib3V0TWFwcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKGNoaWxkcmVuKTtcbiAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgdmFyIGlpID0gMDtcbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0Q29tcG9uZW50S2V5KGNoaWxkLCBpaSsrKTtcbiAgICAgICAgc3VidHJlZUNvdW50ICs9IHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkLCBuZXh0TmFtZSwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgdmFyIGFkZGVuZHVtID0gJyc7XG4gICAgICB7XG4gICAgICAgIGFkZGVuZHVtID0gJyBJZiB5b3UgbWVhbnQgdG8gcmVuZGVyIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiwgdXNlIGFuIGFycmF5ICcgKyAnaW5zdGVhZC4nICsgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG4gICAgICB9XG4gICAgICB2YXIgY2hpbGRyZW5TdHJpbmcgPSAnJyArIGNoaWxkcmVuO1xuICAgICAgaW52YXJpYW50XzEoZmFsc2UsICdPYmplY3RzIGFyZSBub3QgdmFsaWQgYXMgYSBSZWFjdCBjaGlsZCAoZm91bmQ6ICVzKS4lcycsIGNoaWxkcmVuU3RyaW5nID09PSAnW29iamVjdCBPYmplY3RdJyA/ICdvYmplY3Qgd2l0aCBrZXlzIHsnICsgT2JqZWN0LmtleXMoY2hpbGRyZW4pLmpvaW4oJywgJykgKyAnfScgOiBjaGlsZHJlblN0cmluZywgYWRkZW5kdW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdWJ0cmVlQ291bnQ7XG59XG5cbi8qKlxuICogVHJhdmVyc2VzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYCwgYnV0XG4gKiBtaWdodCBhbHNvIGJlIHNwZWNpZmllZCB0aHJvdWdoIGF0dHJpYnV0ZXM6XG4gKlxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuLCAuLi4pYFxuICogLSBgdHJhdmVyc2VBbGxDaGlsZHJlbih0aGlzLnByb3BzLmxlZnRQYW5lbENoaWxkcmVuLCAuLi4pYFxuICpcbiAqIFRoZSBgdHJhdmVyc2VDb250ZXh0YCBpcyBhbiBvcHRpb25hbCBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCB0aHJvdWdoIHRoZVxuICogZW50aXJlIHRyYXZlcnNhbC4gSXQgY2FuIGJlIHVzZWQgdG8gc3RvcmUgYWNjdW11bGF0aW9ucyBvciBhbnl0aGluZyBlbHNlIHRoYXRcbiAqIHRoZSBjYWxsYmFjayBtaWdodCBmaW5kIHJlbGV2YW50LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgb2JqZWN0LlxuICogQHBhcmFtIHshZnVuY3Rpb259IGNhbGxiYWNrIFRvIGludm9rZSB1cG9uIHRyYXZlcnNpbmcgZWFjaCBjaGlsZC5cbiAqIEBwYXJhbSB7Pyp9IHRyYXZlcnNlQ29udGV4dCBDb250ZXh0IGZvciB0cmF2ZXJzYWwuXG4gKiBAcmV0dXJuIHshbnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuIGluIHRoaXMgc3VidHJlZS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2VBbGxDaGlsZHJlbihjaGlsZHJlbiwgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgcmV0dXJuIHRyYXZlcnNlQWxsQ2hpbGRyZW5JbXBsKGNoaWxkcmVuLCAnJywgY2FsbGJhY2ssIHRyYXZlcnNlQ29udGV4dCk7XG59XG5cbi8qKlxuICogR2VuZXJhdGUgYSBrZXkgc3RyaW5nIHRoYXQgaWRlbnRpZmllcyBhIGNvbXBvbmVudCB3aXRoaW4gYSBzZXQuXG4gKlxuICogQHBhcmFtIHsqfSBjb21wb25lbnQgQSBjb21wb25lbnQgdGhhdCBjb3VsZCBjb250YWluIGEgbWFudWFsIGtleS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCB0aGF0IGlzIHVzZWQgaWYgYSBtYW51YWwga2V5IGlzIG5vdCBwcm92aWRlZC5cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0Q29tcG9uZW50S2V5KGNvbXBvbmVudCwgaW5kZXgpIHtcbiAgLy8gRG8gc29tZSB0eXBlY2hlY2tpbmcgaGVyZSBzaW5jZSB3ZSBjYWxsIHRoaXMgYmxpbmRseS4gV2Ugd2FudCB0byBlbnN1cmVcbiAgLy8gdGhhdCB3ZSBkb24ndCBibG9jayBwb3RlbnRpYWwgZnV0dXJlIEVTIEFQSXMuXG4gIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAnb2JqZWN0JyAmJiBjb21wb25lbnQgIT09IG51bGwgJiYgY29tcG9uZW50LmtleSAhPSBudWxsKSB7XG4gICAgLy8gRXhwbGljaXQga2V5XG4gICAgcmV0dXJuIGVzY2FwZShjb21wb25lbnQua2V5KTtcbiAgfVxuICAvLyBJbXBsaWNpdCBrZXkgZGV0ZXJtaW5lZCBieSB0aGUgaW5kZXggaW4gdGhlIHNldFxuICByZXR1cm4gaW5kZXgudG9TdHJpbmcoMzYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoU2luZ2xlQ2hpbGQoYm9va0tlZXBpbmcsIGNoaWxkLCBuYW1lKSB7XG4gIHZhciBmdW5jID0gYm9va0tlZXBpbmcuZnVuYyxcbiAgICAgIGNvbnRleHQgPSBib29rS2VlcGluZy5jb250ZXh0O1xuXG4gIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgYm9va0tlZXBpbmcuY291bnQrKyk7XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5mb3JlYWNoXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZvckVhY2hGdW5jXG4gKiBAcGFyYW0geyp9IGZvckVhY2hDb250ZXh0IENvbnRleHQgZm9yIGZvckVhY2hDb250ZXh0LlxuICovXG5mdW5jdGlvbiBmb3JFYWNoQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCkge1xuICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfVxuICB2YXIgdHJhdmVyc2VDb250ZXh0ID0gZ2V0UG9vbGVkVHJhdmVyc2VDb250ZXh0KG51bGwsIG51bGwsIGZvckVhY2hGdW5jLCBmb3JFYWNoQ29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIGZvckVhY2hTaW5nbGVDaGlsZCwgdHJhdmVyc2VDb250ZXh0KTtcbiAgcmVsZWFzZVRyYXZlcnNlQ29udGV4dCh0cmF2ZXJzZUNvbnRleHQpO1xufVxuXG5mdW5jdGlvbiBtYXBTaW5nbGVDaGlsZEludG9Db250ZXh0KGJvb2tLZWVwaW5nLCBjaGlsZCwgY2hpbGRLZXkpIHtcbiAgdmFyIHJlc3VsdCA9IGJvb2tLZWVwaW5nLnJlc3VsdCxcbiAgICAgIGtleVByZWZpeCA9IGJvb2tLZWVwaW5nLmtleVByZWZpeCxcbiAgICAgIGZ1bmMgPSBib29rS2VlcGluZy5mdW5jLFxuICAgICAgY29udGV4dCA9IGJvb2tLZWVwaW5nLmNvbnRleHQ7XG5cblxuICB2YXIgbWFwcGVkQ2hpbGQgPSBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGJvb2tLZWVwaW5nLmNvdW50KyspO1xuICBpZiAoQXJyYXkuaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICBtYXBJbnRvV2l0aEtleVByZWZpeEludGVybmFsKG1hcHBlZENoaWxkLCByZXN1bHQsIGNoaWxkS2V5LCBlbXB0eUZ1bmN0aW9uXzEudGhhdFJldHVybnNBcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAobWFwcGVkQ2hpbGQgIT0gbnVsbCkge1xuICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgIG1hcHBlZENoaWxkID0gY2xvbmVBbmRSZXBsYWNlS2V5KG1hcHBlZENoaWxkLFxuICAgICAgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgIC8vIHRyYXZlcnNlQWxsQ2hpbGRyZW4gdXNlZCB0byBkbyBmb3Igb2JqZWN0cyBhcyBjaGlsZHJlblxuICAgICAga2V5UHJlZml4ICsgKG1hcHBlZENoaWxkLmtleSAmJiAoIWNoaWxkIHx8IGNoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IGVzY2FwZVVzZXJQcm92aWRlZEtleShtYXBwZWRDaGlsZC5rZXkpICsgJy8nIDogJycpICsgY2hpbGRLZXkpO1xuICAgIH1cbiAgICByZXN1bHQucHVzaChtYXBwZWRDaGlsZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgYXJyYXksIHByZWZpeCwgZnVuYywgY29udGV4dCkge1xuICB2YXIgZXNjYXBlZFByZWZpeCA9ICcnO1xuICBpZiAocHJlZml4ICE9IG51bGwpIHtcbiAgICBlc2NhcGVkUHJlZml4ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KHByZWZpeCkgKyAnLyc7XG4gIH1cbiAgdmFyIHRyYXZlcnNlQ29udGV4dCA9IGdldFBvb2xlZFRyYXZlcnNlQ29udGV4dChhcnJheSwgZXNjYXBlZFByZWZpeCwgZnVuYywgY29udGV4dCk7XG4gIHRyYXZlcnNlQWxsQ2hpbGRyZW4oY2hpbGRyZW4sIG1hcFNpbmdsZUNoaWxkSW50b0NvbnRleHQsIHRyYXZlcnNlQ29udGV4dCk7XG4gIHJlbGVhc2VUcmF2ZXJzZUNvbnRleHQodHJhdmVyc2VDb250ZXh0KTtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLm1hcFxuICpcbiAqIFRoZSBwcm92aWRlZCBtYXBGdW5jdGlvbihjaGlsZCwga2V5LCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMgVGhlIG1hcCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBtYXBGdW5jdGlvbi5cbiAqIEByZXR1cm4ge29iamVjdH0gT2JqZWN0IGNvbnRhaW5pbmcgdGhlIG9yZGVyZWQgbWFwIG9mIHJlc3VsdHMuXG4gKi9cbmZ1bmN0aW9uIG1hcENoaWxkcmVuKGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgbWFwSW50b1dpdGhLZXlQcmVmaXhJbnRlcm5hbChjaGlsZHJlbiwgcmVzdWx0LCBudWxsLCBmdW5jLCBjb250ZXh0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXNcbiAqIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5jb3VudFxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIGNoaWxkcmVuLlxuICovXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuLCBjb250ZXh0KSB7XG4gIHJldHVybiB0cmF2ZXJzZUFsbENoaWxkcmVuKGNoaWxkcmVuLCBlbXB0eUZ1bmN0aW9uXzEudGhhdFJldHVybnNOdWxsLCBudWxsKTtcbn1cblxuLyoqXG4gKiBGbGF0dGVuIGEgY2hpbGRyZW4gb2JqZWN0ICh0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmApIGFuZFxuICogcmV0dXJuIGFuIGFycmF5IHdpdGggYXBwcm9wcmlhdGVseSByZS1rZXllZCBjaGlsZHJlbi5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0LmNoaWxkcmVuLnRvYXJyYXlcbiAqL1xuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1hcEludG9XaXRoS2V5UHJlZml4SW50ZXJuYWwoY2hpbGRyZW4sIHJlc3VsdCwgbnVsbCwgZW1wdHlGdW5jdGlvbl8xLnRoYXRSZXR1cm5zQXJndW1lbnQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdC5jaGlsZHJlbi5vbmx5XG4gKlxuICogVGhlIGN1cnJlbnQgaW1wbGVtZW50YXRpb24gb2YgdGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgYSBzaW5nbGUgY2hpbGQgZ2V0c1xuICogcGFzc2VkIHdpdGhvdXQgYSB3cmFwcGVyLCBidXQgdGhlIHB1cnBvc2Ugb2YgdGhpcyBoZWxwZXIgZnVuY3Rpb24gaXMgdG9cbiAqIGFic3RyYWN0IGF3YXkgdGhlIHBhcnRpY3VsYXIgc3RydWN0dXJlIG9mIGNoaWxkcmVuLlxuICpcbiAqIEBwYXJhbSB7P29iamVjdH0gY2hpbGRyZW4gQ2hpbGQgY29sbGVjdGlvbiBzdHJ1Y3R1cmUuXG4gKiBAcmV0dXJuIHtSZWFjdEVsZW1lbnR9IFRoZSBmaXJzdCBhbmQgb25seSBgUmVhY3RFbGVtZW50YCBjb250YWluZWQgaW4gdGhlXG4gKiBzdHJ1Y3R1cmUuXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGlsZChjaGlsZHJlbikge1xuICAhaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pID8gaW52YXJpYW50XzEoZmFsc2UsICdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKSA6IHZvaWQgMDtcbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KGRlZmF1bHRWYWx1ZSwgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIHtcbiAgaWYgKGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSB1bmRlZmluZWQpIHtcbiAgICBjYWxjdWxhdGVDaGFuZ2VkQml0cyA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAge1xuICAgICAgIShjYWxjdWxhdGVDaGFuZ2VkQml0cyA9PT0gbnVsbCB8fCB0eXBlb2YgY2FsY3VsYXRlQ2hhbmdlZEJpdHMgPT09ICdmdW5jdGlvbicpID8gd2FybmluZ18xKGZhbHNlLCAnY3JlYXRlQ29udGV4dDogRXhwZWN0ZWQgdGhlIG9wdGlvbmFsIHNlY29uZCBhcmd1bWVudCB0byBiZSBhICcgKyAnZnVuY3Rpb24uIEluc3RlYWQgcmVjZWl2ZWQ6ICVzJywgY2FsY3VsYXRlQ2hhbmdlZEJpdHMpIDogdm9pZCAwO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250ZXh0ID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9DT05URVhUX1RZUEUsXG4gICAgX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOiBjYWxjdWxhdGVDaGFuZ2VkQml0cyxcbiAgICBfZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTogZGVmYXVsdFZhbHVlLFxuICAgIF9jaGFuZ2VkQml0czogMCxcbiAgICAvLyBUaGVzZSBhcmUgY2lyY3VsYXJcbiAgICBQcm92aWRlcjogbnVsbCxcbiAgICBDb25zdW1lcjogbnVsbFxuICB9O1xuXG4gIGNvbnRleHQuUHJvdmlkZXIgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX1BST1ZJREVSX1RZUEUsXG4gICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgfTtcbiAgY29udGV4dC5Db25zdW1lciA9IGNvbnRleHQ7XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgICEodHlwZW9mIHJlbmRlciA9PT0gJ2Z1bmN0aW9uJykgPyB3YXJuaW5nXzEoZmFsc2UsICdmb3J3YXJkUmVmIHJlcXVpcmVzIGEgcmVuZGVyIGZ1bmN0aW9uIGJ1dCB3YXMgZ2l2ZW4gJXMuJywgcmVuZGVyID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJlbmRlcikgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG59XG5cbnZhciBkZXNjcmliZUNvbXBvbmVudEZyYW1lID0gZnVuY3Rpb24gKG5hbWUsIHNvdXJjZSwgb3duZXJOYW1lKSB7XG4gIHJldHVybiAnXFxuICAgIGluICcgKyAobmFtZSB8fCAnVW5rbm93bicpICsgKHNvdXJjZSA/ICcgKGF0ICcgKyBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpICsgJzonICsgc291cmNlLmxpbmVOdW1iZXIgKyAnKScgOiBvd25lck5hbWUgPyAnIChjcmVhdGVkIGJ5ICcgKyBvd25lck5hbWUgKyAnKScgOiAnJyk7XG59O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8XG4gIC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKGZpYmVyKSB7XG4gIHZhciB0eXBlID0gZmliZXIudHlwZTtcblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWU7XG4gIH1cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgIHJldHVybiAnUmVhY3RGcmFnbWVudCc7XG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUmVhY3RQb3J0YWwnO1xuICAgIGNhc2UgUkVBQ1RfQ0FMTF9UWVBFOlxuICAgICAgcmV0dXJuICdSZWFjdENhbGwnO1xuICAgIGNhc2UgUkVBQ1RfUkVUVVJOX1RZUEU6XG4gICAgICByZXR1cm4gJ1JlYWN0UmV0dXJuJztcbiAgfVxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgdmFyIGZ1bmN0aW9uTmFtZSA9IHR5cGUucmVuZGVyLmRpc3BsYXlOYW1lIHx8IHR5cGUucmVuZGVyLm5hbWUgfHwgJyc7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbk5hbWUgIT09ICcnID8gJ0ZvcndhcmRSZWYoJyArIGZ1bmN0aW9uTmFtZSArICcpJyA6ICdGb3J3YXJkUmVmJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuXG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCQxID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEgPSBSZWFjdFByb3BUeXBlc1NlY3JldCQxO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cblxuXG57XG4gIHZhciBpbnZhcmlhbnQkMiA9IGludmFyaWFudF8xO1xuICB2YXIgd2FybmluZyQyID0gd2FybmluZ18xO1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSBSZWFjdFByb3BUeXBlc1NlY3JldF8xO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAodHlwZVNwZWNzLmhhc093blByb3BlcnR5KHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaW52YXJpYW50JDIodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdID09PSAnZnVuY3Rpb24nLCAnJXM6ICVzIHR5cGUgYCVzYCBpcyBpbnZhbGlkOyBpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSAnICsgJ3RoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAlc2AuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0pO1xuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICB3YXJuaW5nJDIoIWVycm9yIHx8IGVycm9yIGluc3RhbmNlb2YgRXJyb3IsICclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvcik7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICB3YXJuaW5nJDIoZmFsc2UsICdGYWlsZWQgJXMgdHlwZTogJXMlcycsIGxvY2F0aW9uLCBlcnJvci5tZXNzYWdlLCBzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIGNoZWNrUHJvcFR5cGVzXzEgPSBjaGVja1Byb3BUeXBlcztcblxuLyoqXG4gKiBSZWFjdEVsZW1lbnRWYWxpZGF0b3IgcHJvdmlkZXMgYSB3cmFwcGVyIGFyb3VuZCBhIGVsZW1lbnQgZmFjdG9yeVxuICogd2hpY2ggdmFsaWRhdGVzIHRoZSBwcm9wcyBwYXNzZWQgdG8gdGhlIGVsZW1lbnQuIFRoaXMgaXMgaW50ZW5kZWQgdG8gYmVcbiAqIHVzZWQgb25seSBpbiBERVYgYW5kIGNvdWxkIGJlIHJlcGxhY2VkIGJ5IGEgc3RhdGljIHR5cGUgY2hlY2tlciBmb3IgbGFuZ3VhZ2VzXG4gKiB0aGF0IHN1cHBvcnQgaXQuXG4gKi9cblxudmFyIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gdm9pZCAwO1xudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdm9pZCAwO1xuXG52YXIgZ2V0RGlzcGxheU5hbWUgPSBmdW5jdGlvbiAoKSB7fTtcbnZhciBnZXRTdGFja0FkZGVuZHVtID0gZnVuY3Rpb24gKCkge307XG5cbntcbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG5cbiAgZ2V0RGlzcGxheU5hbWUgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnI2VtcHR5JztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgZWxlbWVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiAnI3RleHQnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LnR5cGU7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHJldHVybiAnUmVhY3QuRnJhZ21lbnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZWxlbWVudC50eXBlLmRpc3BsYXlOYW1lIHx8IGVsZW1lbnQudHlwZS5uYW1lIHx8ICdVbmtub3duJztcbiAgICB9XG4gIH07XG5cbiAgZ2V0U3RhY2tBZGRlbmR1bSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RhY2sgPSAnJztcbiAgICBpZiAoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0RGlzcGxheU5hbWUoY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQpO1xuICAgICAgdmFyIG93bmVyID0gY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQuX293bmVyO1xuICAgICAgc3RhY2sgKz0gZGVzY3JpYmVDb21wb25lbnRGcmFtZShuYW1lLCBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudC5fc291cmNlLCBvd25lciAmJiBnZXRDb21wb25lbnROYW1lKG93bmVyKSk7XG4gICAgfVxuICAgIHN0YWNrICs9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpIHx8ICcnO1xuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICBpZiAoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KTtcbiAgICBpZiAobmFtZSkge1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKGVsZW1lbnRQcm9wcykge1xuICBpZiAoZWxlbWVudFByb3BzICE9PSBudWxsICYmIGVsZW1lbnRQcm9wcyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnRQcm9wcy5fX3NvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHNvdXJjZSA9IGVsZW1lbnRQcm9wcy5fX3NvdXJjZTtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICBpbmZvID0gJ1xcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPCcgKyBwYXJlbnROYW1lICsgJz4uJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZm87XG59XG5cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG5cbiAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7XG5cbiAgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG4gIHZhciBjaGlsZE93bmVyID0gJyc7XG4gIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50KSB7XG4gICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgY2hpbGRPd25lciA9ICcgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gJyArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIpICsgJy4nO1xuICB9XG5cbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICB7XG4gICAgd2FybmluZ18xKGZhbHNlLCAnRWFjaCBjaGlsZCBpbiBhbiBhcnJheSBvciBpdGVyYXRvciBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4lcycsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIsIGdldFN0YWNrQWRkZW5kdW0oKSk7XG4gIH1cbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xufVxuXG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobm9kZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwID0gdm9pZCAwO1xuICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHZhciBjb21wb25lbnRDbGFzcyA9IGVsZW1lbnQudHlwZTtcbiAgaWYgKHR5cGVvZiBjb21wb25lbnRDbGFzcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmFtZSA9IGNvbXBvbmVudENsYXNzLmRpc3BsYXlOYW1lIHx8IGNvbXBvbmVudENsYXNzLm5hbWU7XG4gIHZhciBwcm9wVHlwZXMgPSBjb21wb25lbnRDbGFzcy5wcm9wVHlwZXM7XG4gIGlmIChwcm9wVHlwZXMpIHtcbiAgICBjdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgY2hlY2tQcm9wVHlwZXNfMShwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZ2V0U3RhY2tBZGRlbmR1bSk7XG4gICAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xuICB9IGVsc2UgaWYgKGNvbXBvbmVudENsYXNzLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTtcbiAgICB3YXJuaW5nXzEoZmFsc2UsICdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBuYW1lIHx8ICdVbmtub3duJyk7XG4gIH1cbiAgaWYgKHR5cGVvZiBjb21wb25lbnRDbGFzcy5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAhY29tcG9uZW50Q2xhc3MuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkID8gd2FybmluZ18xKGZhbHNlLCAnZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpIDogdm9pZCAwO1xuICB9XG59XG5cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIGN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50ID0gZnJhZ21lbnQ7XG5cbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgd2FybmluZ18xKGZhbHNlLCAnSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLiVzJywga2V5LCBnZXRTdGFja0FkZGVuZHVtKCkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgIHdhcm5pbmdfMShmYWxzZSwgJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJXMnLCBnZXRTdGFja0FkZGVuZHVtKCkpO1xuICB9XG5cbiAgY3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7XG5cbiAgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cbiAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICB2YXIgaW5mbyA9ICcnO1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgIH1cblxuICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0ocHJvcHMpO1xuICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgfSBlbHNlIHtcbiAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgfVxuXG4gICAgaW5mbyArPSBnZXRTdGFja0FkZGVuZHVtKCkgfHwgJyc7XG5cbiAgICB2YXIgdHlwZVN0cmluZyA9IHZvaWQgMDtcbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgfVxuXG4gICAgd2FybmluZ18xKGZhbHNlLCAnUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgfVxuXG4gIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cbiAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG5cbiAgLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG4gIC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcbiAge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWxpZGF0ZWRGYWN0b3J5LCAndHlwZScsIHtcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxvd1ByaW9yaXR5V2FybmluZyQxKGZhbHNlLCAnRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgJ3R5cGUnLCB7XG4gICAgICAgICAgdmFsdWU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlZEZhY3Rvcnk7XG59XG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGFyZ3VtZW50c1tpXSwgbmV3RWxlbWVudC50eXBlKTtcbiAgfVxuICB2YWxpZGF0ZVByb3BUeXBlcyhuZXdFbGVtZW50KTtcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XG59XG5cbnZhciBSZWFjdCA9IHtcbiAgQ2hpbGRyZW46IHtcbiAgICBtYXA6IG1hcENoaWxkcmVuLFxuICAgIGZvckVhY2g6IGZvckVhY2hDaGlsZHJlbixcbiAgICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgICB0b0FycmF5OiB0b0FycmF5LFxuICAgIG9ubHk6IG9ubHlDaGlsZFxuICB9LFxuXG4gIGNyZWF0ZVJlZjogY3JlYXRlUmVmLFxuICBDb21wb25lbnQ6IENvbXBvbmVudCxcbiAgUHVyZUNvbXBvbmVudDogUHVyZUNvbXBvbmVudCxcblxuICBjcmVhdGVDb250ZXh0OiBjcmVhdGVDb250ZXh0LFxuICBmb3J3YXJkUmVmOiBmb3J3YXJkUmVmLFxuXG4gIEZyYWdtZW50OiBSRUFDVF9GUkFHTUVOVF9UWVBFLFxuICBTdHJpY3RNb2RlOiBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFLFxuICB1bnN0YWJsZV9Bc3luY01vZGU6IFJFQUNUX0FTWU5DX01PREVfVFlQRSxcblxuICBjcmVhdGVFbGVtZW50OiBjcmVhdGVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNsb25lRWxlbWVudDogY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24sXG4gIGNyZWF0ZUZhY3Rvcnk6IGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbixcbiAgaXNWYWxpZEVsZW1lbnQ6IGlzVmFsaWRFbGVtZW50LFxuXG4gIHZlcnNpb246IFJlYWN0VmVyc2lvbixcblxuICBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDoge1xuICAgIFJlYWN0Q3VycmVudE93bmVyOiBSZWFjdEN1cnJlbnRPd25lcixcbiAgICAvLyBVc2VkIGJ5IHJlbmRlcmVycyB0byBhdm9pZCBidW5kbGluZyBvYmplY3QtYXNzaWduIHR3aWNlIGluIFVNRCBidW5kbGVzOlxuICAgIGFzc2lnbjogb2JqZWN0QXNzaWduXG4gIH1cbn07XG5cbntcbiAgb2JqZWN0QXNzaWduKFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELCB7XG4gICAgLy8gVGhlc2Ugc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCBpbiBwcm9kdWN0aW9uLlxuICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWU6IFJlYWN0RGVidWdDdXJyZW50RnJhbWUsXG4gICAgLy8gU2hpbSBmb3IgUmVhY3QgRE9NIDE2LjAuMCB3aGljaCBzdGlsbCBkZXN0cnVjdHVyZWQgKGJ1dCBub3QgdXNlZCkgdGhpcy5cbiAgICAvLyBUT0RPOiByZW1vdmUgaW4gUmVhY3QgMTcuMC5cbiAgICBSZWFjdENvbXBvbmVudFRyZWVIb29rOiB7fVxuICB9KTtcbn1cblxuXG5cbnZhciBSZWFjdCQyID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGRlZmF1bHQ6IFJlYWN0XG59KTtcblxudmFyIFJlYWN0JDMgPSAoIFJlYWN0JDIgJiYgUmVhY3QgKSB8fCBSZWFjdCQyO1xuXG4vLyBUT0RPOiBkZWNpZGUgb24gdGhlIHRvcC1sZXZlbCBleHBvcnQgZm9ybS5cbi8vIFRoaXMgaXMgaGFja3kgYnV0IG1ha2VzIGl0IHdvcmsgd2l0aCBib3RoIFJvbGx1cCBhbmQgSmVzdC5cbnZhciByZWFjdCA9IFJlYWN0JDNbJ2RlZmF1bHQnXSA/IFJlYWN0JDNbJ2RlZmF1bHQnXSA6IFJlYWN0JDM7XG5cbnJldHVybiByZWFjdDtcblxufSkpKTtcbiJdfQ==