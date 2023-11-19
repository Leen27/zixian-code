import {
  __commonJS
} from "./chunk-HM4MQYWN.js";

// node_modules/.pnpm/@theatre+dataverse@0.7.0/node_modules/@theatre/dataverse/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/@theatre+dataverse@0.7.0/node_modules/@theatre/dataverse/dist/index.js"(exports) {
    var __defProp = Object.defineProperty;
    var __defProps = Object.defineProperties;
    var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
    var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
    var __export = (target, all) => {
      __markAsModule(target);
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    __export(exports, {
      Atom: () => Atom,
      PointerProxy: () => PointerProxy,
      Ticker: () => Ticker,
      getPointerParts: () => getPointerParts,
      isPointer: () => isPointer,
      isPrism: () => isPrism,
      iterateAndCountTicks: () => iterateAndCountTicks,
      iterateOver: () => iterateOver,
      pointer: () => pointer_default,
      pointerToPrism: () => pointerToPrism,
      prism: () => prism_default,
      val: () => val
    });
    var isArray = Array.isArray;
    var isArray_default = isArray;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeGlobal_default = freeGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal_default || freeSelf || Function("return this")();
    var root_default = root;
    var Symbol2 = root_default.Symbol;
    var Symbol_default = Symbol2;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    var getRawTag_default = getRawTag;
    var objectProto2 = Object.prototype;
    var nativeObjectToString2 = objectProto2.toString;
    function objectToString(value) {
      return nativeObjectToString2.call(value);
    }
    var objectToString_default = objectToString;
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
    }
    var baseGetTag_default = baseGetTag;
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    var isObjectLike_default = isObjectLike;
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
    }
    var isSymbol_default = isSymbol;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray_default(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    var isKey_default = isKey;
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    var isObject_default = isObject;
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject_default(value)) {
        return false;
      }
      var tag = baseGetTag_default(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    var isFunction_default = isFunction;
    var coreJsData = root_default["__core-js_shared__"];
    var coreJsData_default = coreJsData;
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    var isMasked_default = isMasked;
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    var toSource_default = toSource;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto2 = Function.prototype;
    var objectProto3 = Object.prototype;
    var funcToString2 = funcProto2.toString;
    var hasOwnProperty2 = objectProto3.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject_default(value) || isMasked_default(value)) {
        return false;
      }
      var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource_default(value));
    }
    var baseIsNative_default = baseIsNative;
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    var getValue_default = getValue;
    function getNative(object, key) {
      var value = getValue_default(object, key);
      return baseIsNative_default(value) ? value : void 0;
    }
    var getNative_default = getNative;
    var nativeCreate = getNative_default(Object, "create");
    var nativeCreate_default = nativeCreate;
    function hashClear() {
      this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
      this.size = 0;
    }
    var hashClear_default = hashClear;
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    var hashDelete_default = hashDelete;
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto4 = Object.prototype;
    var hasOwnProperty3 = objectProto4.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate_default) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty3.call(data, key) ? data[key] : void 0;
    }
    var hashGet_default = hashGet;
    var objectProto5 = Object.prototype;
    var hasOwnProperty4 = objectProto5.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty4.call(data, key);
    }
    var hashHas_default = hashHas;
    var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
      return this;
    }
    var hashSet_default = hashSet;
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear_default;
    Hash.prototype["delete"] = hashDelete_default;
    Hash.prototype.get = hashGet_default;
    Hash.prototype.has = hashHas_default;
    Hash.prototype.set = hashSet_default;
    var Hash_default = Hash;
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    var listCacheClear_default = listCacheClear;
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    var eq_default = eq;
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq_default(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    var assocIndexOf_default = assocIndexOf;
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf_default(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    var listCacheDelete_default = listCacheDelete;
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf_default(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    var listCacheGet_default = listCacheGet;
    function listCacheHas(key) {
      return assocIndexOf_default(this.__data__, key) > -1;
    }
    var listCacheHas_default = listCacheHas;
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf_default(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    var listCacheSet_default = listCacheSet;
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear_default;
    ListCache.prototype["delete"] = listCacheDelete_default;
    ListCache.prototype.get = listCacheGet_default;
    ListCache.prototype.has = listCacheHas_default;
    ListCache.prototype.set = listCacheSet_default;
    var ListCache_default = ListCache;
    var Map2 = getNative_default(root_default, "Map");
    var Map_default = Map2;
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash_default(),
        "map": new (Map_default || ListCache_default)(),
        "string": new Hash_default()
      };
    }
    var mapCacheClear_default = mapCacheClear;
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    var isKeyable_default = isKeyable;
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    var getMapData_default = getMapData;
    function mapCacheDelete(key) {
      var result = getMapData_default(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    var mapCacheDelete_default = mapCacheDelete;
    function mapCacheGet(key) {
      return getMapData_default(this, key).get(key);
    }
    var mapCacheGet_default = mapCacheGet;
    function mapCacheHas(key) {
      return getMapData_default(this, key).has(key);
    }
    var mapCacheHas_default = mapCacheHas;
    function mapCacheSet(key, value) {
      var data = getMapData_default(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    var mapCacheSet_default = mapCacheSet;
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear_default;
    MapCache.prototype["delete"] = mapCacheDelete_default;
    MapCache.prototype.get = mapCacheGet_default;
    MapCache.prototype.has = mapCacheHas_default;
    MapCache.prototype.set = mapCacheSet_default;
    var MapCache_default = MapCache;
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache_default)();
      return memoized;
    }
    memoize.Cache = MapCache_default;
    var memoize_default = memoize;
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize_default(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    var memoizeCapped_default = memoizeCapped;
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped_default(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    var stringToPath_default = stringToPath;
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    var arrayMap_default = arrayMap;
    var INFINITY = 1 / 0;
    var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray_default(value)) {
        return arrayMap_default(value, baseToString) + "";
      }
      if (isSymbol_default(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    var baseToString_default = baseToString;
    function toString(value) {
      return value == null ? "" : baseToString_default(value);
    }
    var toString_default = toString;
    function castPath(value, object) {
      if (isArray_default(value)) {
        return value;
      }
      return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
    }
    var castPath_default = castPath;
    var INFINITY2 = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol_default(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
    }
    var toKey_default = toKey;
    function baseGet(object, path) {
      path = castPath_default(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey_default(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    var baseGet_default = baseGet;
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet_default(object, path);
      return result === void 0 ? defaultValue : result;
    }
    var get_default = get;
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var overArg_default = overArg;
    var getPrototype = overArg_default(Object.getPrototypeOf, Object);
    var getPrototype_default = getPrototype;
    var objectTag = "[object Object]";
    var funcProto3 = Function.prototype;
    var objectProto6 = Object.prototype;
    var funcToString3 = funcProto3.toString;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    var objectCtorString = funcToString3.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag) {
        return false;
      }
      var proto = getPrototype_default(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty5.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
    }
    var isPlainObject_default = isPlainObject;
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : void 0;
    }
    var last_default = last;
    var pointerMetaWeakMap = /* @__PURE__ */ new WeakMap();
    var cachedSubPathPointersWeakMap = /* @__PURE__ */ new WeakMap();
    var pointerMetaSymbol = Symbol("pointerMeta");
    var proxyHandler = {
      get(pointerKey, prop) {
        if (prop === pointerMetaSymbol)
          return pointerMetaWeakMap.get(pointerKey);
        let subPathPointers = cachedSubPathPointersWeakMap.get(pointerKey);
        if (!subPathPointers) {
          subPathPointers = /* @__PURE__ */ new Map();
          cachedSubPathPointersWeakMap.set(pointerKey, subPathPointers);
        }
        const existing = subPathPointers.get(prop);
        if (existing !== void 0)
          return existing;
        const meta = pointerMetaWeakMap.get(pointerKey);
        const subPointer = pointer({ root: meta.root, path: [...meta.path, prop] });
        subPathPointers.set(prop, subPointer);
        return subPointer;
      }
    };
    var getPointerMeta = (p) => {
      const meta = p[pointerMetaSymbol];
      return meta;
    };
    var getPointerParts = (p) => {
      const { root: root2, path } = getPointerMeta(p);
      return { root: root2, path };
    };
    function pointer(args) {
      var _a;
      const meta = {
        root: args.root,
        path: (_a = args.path) != null ? _a : []
      };
      const pointerKey = {};
      pointerMetaWeakMap.set(pointerKey, meta);
      return new Proxy(pointerKey, proxyHandler);
    }
    var pointer_default = pointer;
    var isPointer = (p) => {
      return p && !!getPointerMeta(p);
    };
    function updateDeep(state2, path, reducer) {
      if (path.length === 0)
        return reducer(state2);
      return hoop(state2, path, reducer);
    }
    var hoop = (s, path, reducer) => {
      if (path.length === 0) {
        return reducer(s);
      }
      if (Array.isArray(s)) {
        let [index, ...restOfPath] = path;
        index = parseInt(String(index), 10);
        if (isNaN(index))
          index = 0;
        const oldVal = s[index];
        const newVal = hoop(oldVal, restOfPath, reducer);
        if (oldVal === newVal)
          return s;
        const newS = [...s];
        newS.splice(index, 1, newVal);
        return newS;
      } else if (typeof s === "object" && s !== null) {
        const [key, ...restOfPath] = path;
        const oldVal = s[key];
        const newVal = hoop(oldVal, restOfPath, reducer);
        if (oldVal === newVal)
          return s;
        const newS = __spreadProps(__spreadValues({}, s), { [key]: newVal });
        return newS;
      } else {
        const [key, ...restOfPath] = path;
        return { [key]: hoop(void 0, restOfPath, reducer) };
      }
    };
    var Stack = class {
      constructor() {
        this._head = void 0;
      }
      peek() {
        return this._head && this._head.data;
      }
      pop() {
        const head = this._head;
        if (!head) {
          return void 0;
        }
        this._head = head.next;
        return head.data;
      }
      push(data) {
        const node = { next: this._head, data };
        this._head = node;
      }
    };
    function isPrism(d) {
      return !!(d && d.isPrism && d.isPrism === true);
    }
    function createMechanism() {
      const noop = () => {
      };
      const stack = new Stack();
      const noopCollector = noop;
      const pushCollector2 = (collector) => {
        stack.push(collector);
      };
      const popCollector2 = (collector) => {
        const existing = stack.peek();
        if (existing !== collector) {
          throw new Error(`Popped collector is not on top of the stack`);
        }
        stack.pop();
      };
      const startIgnoringDependencies2 = () => {
        stack.push(noopCollector);
      };
      const stopIgnoringDependencies2 = () => {
        if (stack.peek() !== noopCollector) {
          if (true) {
            console.warn("This should never happen");
          }
        } else {
          stack.pop();
        }
      };
      const reportResolutionStart2 = (d) => {
        const possibleCollector = stack.peek();
        if (possibleCollector) {
          possibleCollector(d);
        }
        stack.push(noopCollector);
      };
      const reportResolutionEnd2 = (_d) => {
        stack.pop();
      };
      return {
        type: "Dataverse_discoveryMechanism",
        startIgnoringDependencies: startIgnoringDependencies2,
        stopIgnoringDependencies: stopIgnoringDependencies2,
        reportResolutionStart: reportResolutionStart2,
        reportResolutionEnd: reportResolutionEnd2,
        pushCollector: pushCollector2,
        popCollector: popCollector2
      };
    }
    function getSharedMechanism() {
      const varName = "__dataverse_discoveryMechanism_sharedStack";
      const root2 = typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
      if (root2) {
        const existingMechanism = root2[varName];
        if (existingMechanism && typeof existingMechanism === "object" && existingMechanism.type === "Dataverse_discoveryMechanism") {
          return existingMechanism;
        } else {
          const mechanism = createMechanism();
          root2[varName] = mechanism;
          return mechanism;
        }
      } else {
        return createMechanism();
      }
    }
    var {
      startIgnoringDependencies,
      stopIgnoringDependencies,
      reportResolutionEnd,
      reportResolutionStart,
      pushCollector,
      popCollector
    } = getSharedMechanism();
    var voidFn = () => {
    };
    var HotHandle = class {
      constructor(_fn, _prismInstance) {
        this._fn = _fn;
        this._prismInstance = _prismInstance;
        this._didMarkDependentsAsStale = false;
        this._isFresh = false;
        this._cacheOfDendencyValues = /* @__PURE__ */ new Map();
        this._dependents = /* @__PURE__ */ new Set();
        this._dependencies = /* @__PURE__ */ new Set();
        this._possiblyStaleDeps = /* @__PURE__ */ new Set();
        this._scope = new HotScope(this);
        this._lastValue = void 0;
        this._forciblySetToStale = false;
        this._reactToDependencyGoingStale = (which) => {
          this._possiblyStaleDeps.add(which);
          this._markAsStale();
        };
        for (const d of this._dependencies) {
          d._addDependent(this._reactToDependencyGoingStale);
        }
        startIgnoringDependencies();
        this.getValue();
        stopIgnoringDependencies();
      }
      get hasDependents() {
        return this._dependents.size > 0;
      }
      removeDependent(d) {
        this._dependents.delete(d);
      }
      addDependent(d) {
        this._dependents.add(d);
      }
      destroy() {
        for (const d of this._dependencies) {
          d._removeDependent(this._reactToDependencyGoingStale);
        }
        cleanupScopeStack(this._scope);
      }
      getValue() {
        if (!this._isFresh) {
          const newValue = this._recalculate();
          this._lastValue = newValue;
          this._isFresh = true;
          this._didMarkDependentsAsStale = false;
          this._forciblySetToStale = false;
        }
        return this._lastValue;
      }
      _recalculate() {
        let value;
        if (!this._forciblySetToStale) {
          if (this._possiblyStaleDeps.size > 0) {
            let anActuallyStaleDepWasFound = false;
            startIgnoringDependencies();
            for (const dep of this._possiblyStaleDeps) {
              if (this._cacheOfDendencyValues.get(dep) !== dep.getValue()) {
                anActuallyStaleDepWasFound = true;
                break;
              }
            }
            stopIgnoringDependencies();
            this._possiblyStaleDeps.clear();
            if (!anActuallyStaleDepWasFound) {
              return this._lastValue;
            }
          }
        }
        const newDeps = /* @__PURE__ */ new Set();
        this._cacheOfDendencyValues.clear();
        const collector = (observedDep) => {
          newDeps.add(observedDep);
          this._addDependency(observedDep);
        };
        pushCollector(collector);
        hookScopeStack.push(this._scope);
        try {
          value = this._fn();
        } catch (error) {
          console.error(error);
        } finally {
          const topOfTheStack = hookScopeStack.pop();
          if (topOfTheStack !== this._scope) {
            console.warn(`The Prism hook stack has slipped. This is a bug.`);
          }
        }
        popCollector(collector);
        for (const dep of this._dependencies) {
          if (!newDeps.has(dep)) {
            this._removeDependency(dep);
          }
        }
        this._dependencies = newDeps;
        startIgnoringDependencies();
        for (const dep of newDeps) {
          this._cacheOfDendencyValues.set(dep, dep.getValue());
        }
        stopIgnoringDependencies();
        return value;
      }
      forceStale() {
        this._forciblySetToStale = true;
        this._markAsStale();
      }
      _markAsStale() {
        if (this._didMarkDependentsAsStale)
          return;
        this._didMarkDependentsAsStale = true;
        this._isFresh = false;
        for (const dependent of this._dependents) {
          dependent(this._prismInstance);
        }
      }
      _addDependency(d) {
        if (this._dependencies.has(d))
          return;
        this._dependencies.add(d);
        d._addDependent(this._reactToDependencyGoingStale);
      }
      _removeDependency(d) {
        if (!this._dependencies.has(d))
          return;
        this._dependencies.delete(d);
        d._removeDependent(this._reactToDependencyGoingStale);
      }
    };
    var emptyObject = {};
    var PrismInstance = class {
      constructor(_fn) {
        this._fn = _fn;
        this.isPrism = true;
        this._state = {
          hot: false,
          handle: void 0
        };
      }
      get isHot() {
        return this._state.hot;
      }
      onChange(ticker, listener, immediate = false) {
        const dependent = () => {
          ticker.onThisOrNextTick(refresh);
        };
        let lastValue = emptyObject;
        const refresh = () => {
          const newValue = this.getValue();
          if (newValue === lastValue)
            return;
          lastValue = newValue;
          listener(newValue);
        };
        this._addDependent(dependent);
        if (immediate) {
          lastValue = this.getValue();
          listener(lastValue);
        }
        const unsubscribe = () => {
          this._removeDependent(dependent);
          ticker.offThisOrNextTick(refresh);
          ticker.offNextTick(refresh);
        };
        return unsubscribe;
      }
      onStale(callback) {
        const untap = () => {
          this._removeDependent(fn);
        };
        const fn = () => callback();
        this._addDependent(fn);
        return untap;
      }
      keepHot() {
        return this.onStale(() => {
        });
      }
      _addDependent(d) {
        if (!this._state.hot) {
          this._goHot();
        }
        this._state.handle.addDependent(d);
      }
      _goHot() {
        const hotHandle = new HotHandle(this._fn, this);
        this._state = {
          hot: true,
          handle: hotHandle
        };
      }
      _removeDependent(d) {
        const state2 = this._state;
        if (!state2.hot) {
          return;
        }
        const handle = state2.handle;
        handle.removeDependent(d);
        if (!handle.hasDependents) {
          this._state = { hot: false, handle: void 0 };
          handle.destroy();
        }
      }
      getValue() {
        reportResolutionStart(this);
        const state2 = this._state;
        let val2;
        if (state2.hot) {
          val2 = state2.handle.getValue();
        } else {
          val2 = calculateColdPrism(this._fn);
        }
        reportResolutionEnd(this);
        return val2;
      }
    };
    var HotScope = class {
      constructor(_hotHandle) {
        this._hotHandle = _hotHandle;
        this._refs = /* @__PURE__ */ new Map();
        this.isPrismScope = true;
        this.subs = {};
        this.effects = /* @__PURE__ */ new Map();
        this.memos = /* @__PURE__ */ new Map();
      }
      ref(key, initialValue) {
        let ref2 = this._refs.get(key);
        if (ref2 !== void 0) {
          return ref2;
        } else {
          const ref3 = {
            current: initialValue
          };
          this._refs.set(key, ref3);
          return ref3;
        }
      }
      effect(key, cb, deps) {
        let effect2 = this.effects.get(key);
        if (effect2 === void 0) {
          effect2 = {
            cleanup: voidFn,
            deps: void 0
          };
          this.effects.set(key, effect2);
        }
        if (depsHaveChanged(effect2.deps, deps)) {
          effect2.cleanup();
          startIgnoringDependencies();
          effect2.cleanup = safelyRun(cb, voidFn).value;
          stopIgnoringDependencies();
          effect2.deps = deps;
        }
      }
      memo(key, fn, deps) {
        let memo2 = this.memos.get(key);
        if (memo2 === void 0) {
          memo2 = {
            cachedValue: null,
            deps: void 0
          };
          this.memos.set(key, memo2);
        }
        if (depsHaveChanged(memo2.deps, deps)) {
          startIgnoringDependencies();
          memo2.cachedValue = safelyRun(fn, void 0).value;
          stopIgnoringDependencies();
          memo2.deps = deps;
        }
        return memo2.cachedValue;
      }
      state(key, initialValue) {
        const { value, setValue } = this.memo("state/" + key, () => {
          const value2 = { current: initialValue };
          const setValue2 = (newValue) => {
            value2.current = newValue;
            this._hotHandle.forceStale();
          };
          return { value: value2, setValue: setValue2 };
        }, []);
        return [value.current, setValue];
      }
      sub(key) {
        if (!this.subs[key]) {
          this.subs[key] = new HotScope(this._hotHandle);
        }
        return this.subs[key];
      }
      cleanupEffects() {
        for (const effect2 of this.effects.values()) {
          safelyRun(effect2.cleanup, void 0);
        }
        this.effects.clear();
      }
      source(subscribe, getValue2) {
        const sourceKey = "$$source/blah";
        this.effect(sourceKey, () => {
          const unsub = subscribe(() => {
            this._hotHandle.forceStale();
          });
          return unsub;
        }, [subscribe]);
        return getValue2();
      }
    };
    function cleanupScopeStack(scope2) {
      for (const sub2 of Object.values(scope2.subs)) {
        cleanupScopeStack(sub2);
      }
      scope2.cleanupEffects();
    }
    function safelyRun(fn, returnValueInCaseOfError) {
      try {
        return { value: fn(), ok: true };
      } catch (error) {
        setTimeout(function PrismReportThrow() {
          throw error;
        });
        return { value: returnValueInCaseOfError, ok: false };
      }
    }
    var hookScopeStack = new Stack();
    function ref(key, initialValue) {
      const scope2 = hookScopeStack.peek();
      if (!scope2) {
        throw new Error(`prism.ref() is called outside of a prism() call.`);
      }
      return scope2.ref(key, initialValue);
    }
    function effect(key, cb, deps) {
      const scope2 = hookScopeStack.peek();
      if (!scope2) {
        throw new Error(`prism.effect() is called outside of a prism() call.`);
      }
      return scope2.effect(key, cb, deps);
    }
    function depsHaveChanged(oldDeps, newDeps) {
      if (oldDeps === void 0 || newDeps === void 0) {
        return true;
      }
      const len = oldDeps.length;
      if (len !== newDeps.length)
        return true;
      for (let i = 0; i < len; i++) {
        if (oldDeps[i] !== newDeps[i])
          return true;
      }
      return false;
    }
    function memo(key, fn, deps) {
      const scope2 = hookScopeStack.peek();
      if (!scope2) {
        throw new Error(`prism.memo() is called outside of a prism() call.`);
      }
      return scope2.memo(key, fn, deps);
    }
    function state(key, initialValue) {
      const scope2 = hookScopeStack.peek();
      if (!scope2) {
        throw new Error(`prism.state() is called outside of a prism() call.`);
      }
      return scope2.state(key, initialValue);
    }
    function ensurePrism() {
      const scope2 = hookScopeStack.peek();
      if (!scope2) {
        throw new Error(`The parent function is called outside of a prism() call.`);
      }
    }
    function scope(key, fn) {
      const parentScope = hookScopeStack.peek();
      if (!parentScope) {
        throw new Error(`prism.scope() is called outside of a prism() call.`);
      }
      const subScope = parentScope.sub(key);
      hookScopeStack.push(subScope);
      const ret = safelyRun(fn, void 0).value;
      hookScopeStack.pop();
      return ret;
    }
    function sub(key, fn, deps) {
      return memo(key, () => prism(fn), deps).getValue();
    }
    function inPrism() {
      return !!hookScopeStack.peek();
    }
    function source(subscribe, getValue2) {
      const scope2 = hookScopeStack.peek();
      if (!scope2) {
        throw new Error(`prism.source() is called outside of a prism() call.`);
      }
      return scope2.source(subscribe, getValue2);
    }
    var prism = (fn) => {
      return new PrismInstance(fn);
    };
    var ColdScope = class {
      effect(key, cb, deps) {
        console.warn(`prism.effect() does not run in cold prisms`);
      }
      memo(key, fn, deps) {
        return fn();
      }
      state(key, initialValue) {
        return [initialValue, () => {
        }];
      }
      ref(key, initialValue) {
        return { current: initialValue };
      }
      sub(key) {
        return new ColdScope();
      }
      source(subscribe, getValue2) {
        return getValue2();
      }
    };
    function calculateColdPrism(fn) {
      const scope2 = new ColdScope();
      hookScopeStack.push(scope2);
      let value;
      try {
        value = fn();
      } catch (error) {
        console.error(error);
      } finally {
        const topOfTheStack = hookScopeStack.pop();
        if (topOfTheStack !== scope2) {
          console.warn(`The Prism hook stack has slipped. This is a bug.`);
        }
      }
      return value;
    }
    prism.ref = ref;
    prism.effect = effect;
    prism.memo = memo;
    prism.ensurePrism = ensurePrism;
    prism.state = state;
    prism.scope = scope;
    prism.sub = sub;
    prism.inPrism = inPrism;
    prism.source = source;
    var prism_default = prism;
    var ValueTypes;
    (function(ValueTypes2) {
      ValueTypes2[ValueTypes2["Dict"] = 0] = "Dict";
      ValueTypes2[ValueTypes2["Array"] = 1] = "Array";
      ValueTypes2[ValueTypes2["Other"] = 2] = "Other";
    })(ValueTypes || (ValueTypes = {}));
    var getTypeOfValue = (v) => {
      if (Array.isArray(v))
        return 1;
      if (isPlainObject_default(v))
        return 0;
      return 2;
    };
    var getKeyOfValue = (v, key, vType = getTypeOfValue(v)) => {
      if (vType === 0 && typeof key === "string") {
        return v[key];
      } else if (vType === 1 && isValidArrayIndex(key)) {
        return v[key];
      } else {
        return void 0;
      }
    };
    var isValidArrayIndex = (key) => {
      const inNumber = typeof key === "number" ? key : parseInt(key, 10);
      return !isNaN(inNumber) && inNumber >= 0 && inNumber < Infinity && (inNumber | 0) === inNumber;
    };
    var Scope = class {
      constructor(_parent, _path) {
        this._parent = _parent;
        this._path = _path;
        this.children = /* @__PURE__ */ new Map();
        this.identityChangeListeners = /* @__PURE__ */ new Set();
      }
      addIdentityChangeListener(cb) {
        this.identityChangeListeners.add(cb);
      }
      removeIdentityChangeListener(cb) {
        this.identityChangeListeners.delete(cb);
        this._checkForGC();
      }
      removeChild(key) {
        this.children.delete(key);
        this._checkForGC();
      }
      getChild(key) {
        return this.children.get(key);
      }
      getOrCreateChild(key) {
        let child = this.children.get(key);
        if (!child) {
          child = child = new Scope(this, this._path.concat([key]));
          this.children.set(key, child);
        }
        return child;
      }
      _checkForGC() {
        if (this.identityChangeListeners.size > 0)
          return;
        if (this.children.size > 0)
          return;
        if (this._parent) {
          this._parent.removeChild(last_default(this._path));
        }
      }
    };
    var Atom = class {
      constructor(initialState) {
        this.$$isPointerToPrismProvider = true;
        this.pointer = pointer_default({ root: this, path: [] });
        this.prism = this.pointerToPrism(this.pointer);
        this._onPointerValueChange = (pointer2, cb) => {
          const { path } = getPointerParts(pointer2);
          const scope2 = this._getOrCreateScopeForPath(path);
          scope2.identityChangeListeners.add(cb);
          const unsubscribe = () => {
            scope2.identityChangeListeners.delete(cb);
          };
          return unsubscribe;
        };
        this._currentState = initialState;
        this._rootScope = new Scope(void 0, []);
      }
      set(newState) {
        const oldState = this._currentState;
        this._currentState = newState;
        this._checkUpdates(this._rootScope, oldState, newState);
      }
      get() {
        return this._currentState;
      }
      getByPointer(pointerOrFn) {
        const pointer2 = isPointer(pointerOrFn) ? pointerOrFn : pointerOrFn(this.pointer);
        const path = getPointerParts(pointer2).path;
        return this._getIn(path);
      }
      _getIn(path) {
        return path.length === 0 ? this.get() : get_default(this.get(), path);
      }
      reduce(fn) {
        this.set(fn(this.get()));
      }
      reduceByPointer(pointerOrFn, reducer) {
        const pointer2 = isPointer(pointerOrFn) ? pointerOrFn : pointerOrFn(this.pointer);
        const path = getPointerParts(pointer2).path;
        const newState = updateDeep(this.get(), path, reducer);
        this.set(newState);
      }
      setByPointer(pointerOrFn, val2) {
        this.reduceByPointer(pointerOrFn, () => val2);
      }
      _checkUpdates(scope2, oldState, newState) {
        if (oldState === newState)
          return;
        for (const cb of scope2.identityChangeListeners) {
          cb(newState);
        }
        if (scope2.children.size === 0)
          return;
        const oldValueType = getTypeOfValue(oldState);
        const newValueType = getTypeOfValue(newState);
        if (oldValueType === 2 && oldValueType === newValueType)
          return;
        for (const [childKey, childScope] of scope2.children) {
          const oldChildVal = getKeyOfValue(oldState, childKey, oldValueType);
          const newChildVal = getKeyOfValue(newState, childKey, newValueType);
          this._checkUpdates(childScope, oldChildVal, newChildVal);
        }
      }
      _getOrCreateScopeForPath(path) {
        let curScope = this._rootScope;
        for (const pathEl of path) {
          curScope = curScope.getOrCreateChild(pathEl);
        }
        return curScope;
      }
      pointerToPrism(pointer2) {
        const { path } = getPointerParts(pointer2);
        const subscribe = (listener) => this._onPointerValueChange(pointer2, listener);
        const getValue2 = () => this._getIn(path);
        return prism_default(() => {
          return prism_default.source(subscribe, getValue2);
        });
      }
    };
    var identifyPrismWeakMap = /* @__PURE__ */ new WeakMap();
    function isPointerToPrismProvider(val2) {
      return typeof val2 === "object" && val2 !== null && val2["$$isPointerToPrismProvider"] === true;
    }
    var pointerToPrism = (pointer2) => {
      const meta = getPointerMeta(pointer2);
      let prismInstance = identifyPrismWeakMap.get(meta);
      if (!prismInstance) {
        const root2 = meta.root;
        if (!isPointerToPrismProvider(root2)) {
          throw new Error(`Cannot run pointerToPrism() on a pointer whose root is not an PointerToPrismProvider`);
        }
        prismInstance = root2.pointerToPrism(pointer2);
        identifyPrismWeakMap.set(meta, prismInstance);
      }
      return prismInstance;
    };
    var val = (input) => {
      if (isPointer(input)) {
        return pointerToPrism(input).getValue();
      } else if (isPrism(input)) {
        return input.getValue();
      } else {
        return input;
      }
    };
    function* iterateAndCountTicks(pointerOrPrism) {
      let d;
      if (isPointer(pointerOrPrism)) {
        d = pointerToPrism(pointerOrPrism);
      } else if (isPrism(pointerOrPrism)) {
        d = pointerOrPrism;
      } else {
        throw new Error(`Only pointers and prisms are supported`);
      }
      let ticksCountedSinceLastYield = 0;
      const untap = d.onStale(() => {
        ticksCountedSinceLastYield++;
      });
      try {
        while (true) {
          const ticks = ticksCountedSinceLastYield;
          ticksCountedSinceLastYield = 0;
          yield { value: d.getValue(), ticks };
        }
      } finally {
        untap();
      }
    }
    var EMPTY_TICKS_BEFORE_GOING_DORMANT = 60 * 3;
    var Ticker = class {
      constructor(_conf) {
        this._conf = _conf;
        this._ticking = false;
        this._dormant = true;
        this._numberOfDormantTicks = 0;
        this.__ticks = 0;
        this._scheduledForThisOrNextTick = /* @__PURE__ */ new Set();
        this._scheduledForNextTick = /* @__PURE__ */ new Set();
        this._timeAtCurrentTick = 0;
      }
      get dormant() {
        return this._dormant;
      }
      onThisOrNextTick(fn) {
        this._scheduledForThisOrNextTick.add(fn);
        if (this._dormant) {
          this._goActive();
        }
      }
      onNextTick(fn) {
        this._scheduledForNextTick.add(fn);
        if (this._dormant) {
          this._goActive();
        }
      }
      offThisOrNextTick(fn) {
        this._scheduledForThisOrNextTick.delete(fn);
      }
      offNextTick(fn) {
        this._scheduledForNextTick.delete(fn);
      }
      get time() {
        if (this._ticking) {
          return this._timeAtCurrentTick;
        } else
          return performance.now();
      }
      _goActive() {
        var _a, _b;
        if (!this._dormant)
          return;
        this._dormant = false;
        (_b = (_a = this._conf) == null ? void 0 : _a.onActive) == null ? void 0 : _b.call(_a);
      }
      _goDormant() {
        var _a, _b;
        if (this._dormant)
          return;
        this._dormant = true;
        this._numberOfDormantTicks = 0;
        (_b = (_a = this._conf) == null ? void 0 : _a.onDormant) == null ? void 0 : _b.call(_a);
      }
      tick(t = performance.now()) {
        if (true) {
          if (!(this instanceof Ticker)) {
            throw new Error('ticker.tick must be called while bound to the ticker. As in, "ticker.tick(time)" or "requestAnimationFrame((t) => ticker.tick(t))" for performance.');
          }
        }
        this.__ticks++;
        if (!this._dormant) {
          if (this._scheduledForNextTick.size === 0 && this._scheduledForThisOrNextTick.size === 0) {
            this._numberOfDormantTicks++;
            if (this._numberOfDormantTicks >= EMPTY_TICKS_BEFORE_GOING_DORMANT) {
              this._goDormant();
              return;
            }
          }
        }
        this._ticking = true;
        this._timeAtCurrentTick = t;
        for (const v of this._scheduledForNextTick) {
          this._scheduledForThisOrNextTick.add(v);
        }
        this._scheduledForNextTick.clear();
        this._tick(0);
        this._ticking = false;
      }
      _tick(iterationNumber) {
        const time = this.time;
        if (iterationNumber > 10) {
          console.warn("_tick() recursing for 10 times");
        }
        if (iterationNumber > 100) {
          throw new Error(`Maximum recursion limit for _tick()`);
        }
        const oldSet = this._scheduledForThisOrNextTick;
        this._scheduledForThisOrNextTick = /* @__PURE__ */ new Set();
        for (const fn of oldSet) {
          fn(time);
        }
        if (this._scheduledForThisOrNextTick.size > 0) {
          return this._tick(iterationNumber + 1);
        }
      }
    };
    function* iterateOver(pointerOrPrism) {
      let d;
      if (isPointer(pointerOrPrism)) {
        d = pointerToPrism(pointerOrPrism);
      } else if (isPrism(pointerOrPrism)) {
        d = pointerOrPrism;
      } else {
        throw new Error(`Only pointers and prisms are supported`);
      }
      const ticker = new Ticker();
      const untap = d.onChange(ticker, (v) => {
      });
      try {
        while (true) {
          ticker.tick();
          yield d.getValue();
        }
      } finally {
        untap();
      }
    }
    var PointerProxy = class {
      constructor(currentPointer) {
        this.$$isPointerToPrismProvider = true;
        this._currentPointerBox = new Atom(currentPointer);
        this.pointer = pointer_default({ root: this, path: [] });
      }
      setPointer(p) {
        this._currentPointerBox.set(p);
      }
      pointerToPrism(pointer2) {
        const { path } = getPointerMeta(pointer2);
        return prism_default(() => {
          const currentPointer = this._currentPointerBox.prism.getValue();
          const subPointer = path.reduce((pointerSoFar, pathItem) => pointerSoFar[pathItem], currentPointer);
          return val(subPointer);
        });
      }
    };
  }
});

export {
  require_dist
};
//# sourceMappingURL=chunk-PHF7LST3.js.map