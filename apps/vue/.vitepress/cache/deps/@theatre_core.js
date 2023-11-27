import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/registry.npmmirror.com+@theatre+dataverse@0.7.0/node_modules/@theatre/dataverse/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+@theatre+dataverse@0.7.0/node_modules/@theatre/dataverse/dist/index.js"(exports) {
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

// node_modules/.pnpm/registry.npmmirror.com+@theatre+core@0.7.0/node_modules/@theatre/core/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/.pnpm/registry.npmmirror.com+@theatre+core@0.7.0/node_modules/@theatre/core/dist/index.js"(exports, module) {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __defProps = Object.defineProperties;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues = (a2, b2) => {
      for (var prop in b2 || (b2 = {}))
        if (__hasOwnProp.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b2)) {
          if (__propIsEnum.call(b2, prop))
            __defNormalProp(a2, prop, b2[prop]);
        }
      return a2;
    };
    var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
    var __commonJS2 = (cb, mod) => function __require() {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    };
    var __export = (target, all) => {
      for (var name in all)
        __defProp(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))
          if (!__hasOwnProp.call(to, key) && key !== except)
            __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
      mod
    ));
    var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
    var __publicField = (obj, key, value) => {
      __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
      return value;
    };
    var require_UnitBezier = __commonJS2({
      "../node_modules/timing-function/lib/UnitBezier.js"(exports2, module2) {
        var UnitBezier2;
        module2.exports = UnitBezier2 = function() {
          function UnitBezier3(p1x, p1y, p2x, p2y) {
            this.set(p1x, p1y, p2x, p2y);
          }
          UnitBezier3.prototype.set = function(p1x, p1y, p2x, p2y) {
            this._cx = 3 * p1x;
            this._bx = 3 * (p2x - p1x) - this._cx;
            this._ax = 1 - this._cx - this._bx;
            this._cy = 3 * p1y;
            this._by = 3 * (p2y - p1y) - this._cy;
            this._ay = 1 - this._cy - this._by;
          };
          UnitBezier3.epsilon = 1e-6;
          UnitBezier3.prototype._sampleCurveX = function(t2) {
            return ((this._ax * t2 + this._bx) * t2 + this._cx) * t2;
          };
          UnitBezier3.prototype._sampleCurveY = function(t2) {
            return ((this._ay * t2 + this._by) * t2 + this._cy) * t2;
          };
          UnitBezier3.prototype._sampleCurveDerivativeX = function(t2) {
            return (3 * this._ax * t2 + 2 * this._bx) * t2 + this._cx;
          };
          UnitBezier3.prototype._solveCurveX = function(x2, epsilon) {
            var d2, i2, t0, t1, t2, x22;
            t0 = void 0;
            t1 = void 0;
            t2 = void 0;
            x22 = void 0;
            d2 = void 0;
            i2 = void 0;
            t2 = x2;
            i2 = 0;
            while (i2 < 8) {
              x22 = this._sampleCurveX(t2) - x2;
              if (Math.abs(x22) < epsilon) {
                return t2;
              }
              d2 = this._sampleCurveDerivativeX(t2);
              if (Math.abs(d2) < epsilon) {
                break;
              }
              t2 = t2 - x22 / d2;
              i2++;
            }
            t0 = 0;
            t1 = 1;
            t2 = x2;
            if (t2 < t0) {
              return t0;
            }
            if (t2 > t1) {
              return t1;
            }
            while (t0 < t1) {
              x22 = this._sampleCurveX(t2);
              if (Math.abs(x22 - x2) < epsilon) {
                return t2;
              }
              if (x2 > x22) {
                t0 = t2;
              } else {
                t1 = t2;
              }
              t2 = (t1 - t0) * 0.5 + t0;
            }
            return t2;
          };
          UnitBezier3.prototype.solve = function(x2, epsilon) {
            return this._sampleCurveY(this._solveCurveX(x2, epsilon));
          };
          UnitBezier3.prototype.solveSimple = function(x2) {
            return this._sampleCurveY(this._solveCurveX(x2, 1e-6));
          };
          return UnitBezier3;
        }();
      }
    });
    var require_levenshtein_edit_distance = __commonJS2({
      "../node_modules/levenshtein-edit-distance/index.js"(exports2, module2) {
        var cache2;
        var codes;
        cache2 = [];
        codes = [];
        function levenshtein(value, other, insensitive) {
          var length, lengthOther, code, result, distance, distanceOther, index, indexOther;
          if (value === other) {
            return 0;
          }
          length = value.length;
          lengthOther = other.length;
          if (length === 0) {
            return lengthOther;
          }
          if (lengthOther === 0) {
            return length;
          }
          if (insensitive) {
            value = value.toLowerCase();
            other = other.toLowerCase();
          }
          index = 0;
          while (index < length) {
            codes[index] = value.charCodeAt(index);
            cache2[index] = ++index;
          }
          indexOther = 0;
          while (indexOther < lengthOther) {
            code = other.charCodeAt(indexOther);
            result = distance = indexOther++;
            index = -1;
            while (++index < length) {
              distanceOther = code === codes[index] ? distance : distance + 1;
              distance = cache2[index];
              cache2[index] = result = distance > result ? distanceOther > result ? result + 1 : distanceOther : distanceOther > distance ? distance + 1 : distanceOther;
            }
          }
          return result;
        }
        module2.exports = levenshtein;
      }
    });
    var require_propose = __commonJS2({
      "../node_modules/propose/propose.js"(exports2, module2) {
        var levenshtein = require_levenshtein_edit_distance();
        function propose2() {
          var ratio;
          var distance;
          var proposed;
          var threshold;
          var ignoreCase;
          var max_ratio = 0;
          var word = arguments[0];
          var dictionary = arguments[1];
          var len = dictionary.length;
          var options = arguments[2];
          if (options) {
            threshold = options.threshold;
            ignoreCase = options.ignoreCase;
          }
          if (threshold === void 0)
            threshold = 0;
          for (var i2 = 0; i2 < len; ++i2) {
            if (ignoreCase)
              distance = levenshtein(word, dictionary[i2], true);
            else
              distance = levenshtein(word, dictionary[i2]);
            if (distance > word.length)
              ratio = 1 - distance / dictionary[i2].length;
            else
              ratio = 1 - distance / word.length;
            if (ratio > max_ratio) {
              max_ratio = ratio;
              proposed = dictionary[i2];
            }
          }
          if (max_ratio >= threshold)
            return proposed;
          return null;
        }
        module2.exports = propose2;
      }
    });
    var require_fast_deep_equal = __commonJS2({
      "../node_modules/fast-deep-equal/index.js"(exports2, module2) {
        "use strict";
        module2.exports = function equal(a2, b2) {
          if (a2 === b2)
            return true;
          if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
            if (a2.constructor !== b2.constructor)
              return false;
            var length, i2, keys2;
            if (Array.isArray(a2)) {
              length = a2.length;
              if (length != b2.length)
                return false;
              for (i2 = length; i2-- !== 0; )
                if (!equal(a2[i2], b2[i2]))
                  return false;
              return true;
            }
            if (a2.constructor === RegExp)
              return a2.source === b2.source && a2.flags === b2.flags;
            if (a2.valueOf !== Object.prototype.valueOf)
              return a2.valueOf() === b2.valueOf();
            if (a2.toString !== Object.prototype.toString)
              return a2.toString() === b2.toString();
            keys2 = Object.keys(a2);
            length = keys2.length;
            if (length !== Object.keys(b2).length)
              return false;
            for (i2 = length; i2-- !== 0; )
              if (!Object.prototype.hasOwnProperty.call(b2, keys2[i2]))
                return false;
            for (i2 = length; i2-- !== 0; ) {
              var key = keys2[i2];
              if (!equal(a2[key], b2[key]))
                return false;
            }
            return true;
          }
          return a2 !== a2 && b2 !== b2;
        };
      }
    });
    var src_exports = {};
    __export(src_exports, {
      createRafDriver: () => createRafDriver,
      getProject: () => getProject,
      notify: () => notify,
      onChange: () => onChange,
      types: () => propTypes_exports,
      val: () => val7
    });
    module.exports = __toCommonJS(src_exports);
    var coreExports_exports = {};
    __export(coreExports_exports, {
      createRafDriver: () => createRafDriver,
      getProject: () => getProject,
      notify: () => notify,
      onChange: () => onChange,
      types: () => propTypes_exports,
      val: () => val7
    });
    var import_dataverse = require_dist();
    var ProjectsSingleton = class {
      constructor() {
        __publicField(this, "atom", new import_dataverse.Atom({ projects: {} }));
      }
      /**
       * We're trusting here that each project id is unique
       */
      add(id, project) {
        this.atom.setByPointer((p2) => p2.projects[id], project);
      }
      get(id) {
        return this.atom.get().projects[id];
      }
      has(id) {
        return !!this.get(id);
      }
    };
    var singleton = new ProjectsSingleton();
    var projectsSingleton_default = singleton;
    var publicAPIToPrivateAPIMap = /* @__PURE__ */ new WeakMap();
    function privateAPI(pub) {
      return publicAPIToPrivateAPIMap.get(pub);
    }
    function setPrivateAPI(pub, priv) {
      publicAPIToPrivateAPIMap.set(pub, priv);
    }
    var emptyArray = [];
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
      } catch (e2) {
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
        } catch (e2) {
        }
        try {
          return func + "";
        } catch (e2) {
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
    var reIsNative = RegExp(
      "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
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
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
        if (cache2.has(key)) {
          return cache2.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache2.set(key, result) || cache2;
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
        if (cache2.size === MAX_MEMOIZE_SIZE) {
          cache2.clear();
        }
        return key;
      });
      var cache2 = result.cache;
      return result;
    }
    var memoizeCapped_default = memoizeCapped;
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped_default(function(string2) {
      var result = [];
      if (string2.charCodeAt(0) === 46) {
        result.push("");
      }
      string2.replace(rePropName, function(match, number2, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
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
    function getDeep(v2, path) {
      if (path.length === 0)
        return v2;
      return get_default(v2, path);
    }
    var SimpleCache = class {
      constructor() {
        __publicField(this, "_values", {});
      }
      /**
       * get the cache item at `key` or produce it using `producer` and cache _that_.
       *
       * Note that this won't work if you change the producer, like `get(key, producer1); get(key, producer2)`.
       */
      get(key, producer) {
        if (this.has(key)) {
          return this._values[key];
        } else {
          const cachedValue = producer();
          this._values[key] = cachedValue;
          return cachedValue;
        }
      }
      /**
       * Returns true if the cache has an item at `key`.
       */
      has(key) {
        return this._values.hasOwnProperty(key);
      }
    };
    var import_dataverse6 = require_dist();
    var defineProperty = function() {
      try {
        var func = getNative_default(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e2) {
      }
    }();
    var defineProperty_default = defineProperty;
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty_default) {
        defineProperty_default(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    var baseAssignValue_default = baseAssignValue;
    var objectProto6 = Object.prototype;
    var hasOwnProperty5 = objectProto6.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty5.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue_default(object, key, value);
      }
    }
    var assignValue_default = assignValue;
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    var isIndex_default = isIndex;
    function baseSet(object, path, value, customizer) {
      if (!isObject_default(object)) {
        return object;
      }
      path = castPath_default(path, object);
      var index = -1, length = path.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index < length) {
        var key = toKey_default(path[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
          }
        }
        assignValue_default(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    var baseSet_default = baseSet;
    function set(object, path, value) {
      return object == null ? object : baseSet_default(object, path, value);
    }
    var set_default = set;
    var cachedDefaults = /* @__PURE__ */ new WeakMap();
    function getPropDefaultsOfSheetObject(config) {
      return getDefaultsOfPropTypeConfig(config);
    }
    function getDefaultsOfPropTypeConfig(config) {
      if (cachedDefaults.has(config)) {
        return cachedDefaults.get(config);
      }
      const generated = config.type === "compound" ? generateDefaultsForCompound(config) : config.type === "enum" ? generateDefaultsForEnum(config) : config.default;
      cachedDefaults.set(config, generated);
      return generated;
    }
    function generateDefaultsForEnum(config) {
      const defaults = {
        $case: config.defaultCase
      };
      for (const [case_, caseConf] of Object.entries(config.cases)) {
        defaults[case_] = getDefaultsOfPropTypeConfig(caseConf);
      }
      return defaults;
    }
    function generateDefaultsForCompound(config) {
      const defaults = {};
      for (const [key, propConf] of Object.entries(config.props)) {
        defaults[key] = getDefaultsOfPropTypeConfig(propConf);
      }
      return defaults;
    }
    var import_dataverse2 = require_dist();
    var import_UnitBezier = __toESM(require_UnitBezier());
    function interpolationTripleAtPosition(ctx, trackP, timeD) {
      return (0, import_dataverse2.prism)(() => {
        const track = (0, import_dataverse2.val)(trackP);
        const driverD = import_dataverse2.prism.memo(
          "driver",
          () => {
            if (!track) {
              return (0, import_dataverse2.prism)(() => void 0);
            } else if (track.type === "BasicKeyframedTrack") {
              return _forKeyframedTrack(ctx, track, timeD);
            } else {
              ctx.logger.error("Track type not yet supported.");
              return (0, import_dataverse2.prism)(() => void 0);
            }
          },
          [track]
        );
        return driverD.getValue();
      });
    }
    function _forKeyframedTrack(ctx, track, timeD) {
      return (0, import_dataverse2.prism)(() => {
        let stateRef = import_dataverse2.prism.ref("state", { started: false });
        let state = stateRef.current;
        const time = timeD.getValue();
        if (!state.started || time < state.validFrom || state.validTo <= time) {
          stateRef.current = state = updateState(ctx, timeD, track);
        }
        return state.der.getValue();
      });
    }
    var undefinedConstD = (0, import_dataverse2.prism)(() => void 0);
    function updateState(ctx, progressionD, track) {
      const progression = progressionD.getValue();
      if (track.keyframes.length === 0) {
        return {
          started: true,
          validFrom: -Infinity,
          validTo: Infinity,
          der: undefinedConstD
        };
      }
      let currentKeyframeIndex = 0;
      while (true) {
        const currentKeyframe = track.keyframes[currentKeyframeIndex];
        if (!currentKeyframe) {
          if (true) {
            ctx.logger.error("Bug here");
          }
          return states.error;
        }
        const isLastKeyframe = currentKeyframeIndex === track.keyframes.length - 1;
        if (progression < currentKeyframe.position) {
          if (currentKeyframeIndex === 0) {
            return states.beforeFirstKeyframe(currentKeyframe);
          } else {
            if (true) {
              ctx.logger.error("Bug here");
            }
            return states.error;
          }
        } else if (currentKeyframe.position === progression) {
          if (isLastKeyframe) {
            return states.lastKeyframe(currentKeyframe);
          } else {
            return states.between(
              currentKeyframe,
              track.keyframes[currentKeyframeIndex + 1],
              progressionD
            );
          }
        } else {
          if (currentKeyframeIndex === track.keyframes.length - 1) {
            return states.lastKeyframe(currentKeyframe);
          } else {
            const nextKeyframeIndex = currentKeyframeIndex + 1;
            if (track.keyframes[nextKeyframeIndex].position <= progression) {
              currentKeyframeIndex = nextKeyframeIndex;
              continue;
            } else {
              return states.between(
                currentKeyframe,
                track.keyframes[currentKeyframeIndex + 1],
                progressionD
              );
            }
          }
        }
      }
    }
    var states = {
      beforeFirstKeyframe(kf) {
        return {
          started: true,
          validFrom: -Infinity,
          validTo: kf.position,
          der: (0, import_dataverse2.prism)(() => ({ left: kf.value, progression: 0 }))
        };
      },
      lastKeyframe(kf) {
        return {
          started: true,
          validFrom: kf.position,
          validTo: Infinity,
          der: (0, import_dataverse2.prism)(() => ({ left: kf.value, progression: 0 }))
        };
      },
      between(left, right, progressionD) {
        if (!left.connectedRight) {
          return {
            started: true,
            validFrom: left.position,
            validTo: right.position,
            der: (0, import_dataverse2.prism)(() => ({ left: left.value, progression: 0 }))
          };
        }
        const globalProgressionToLocalProgression = (globalProgression) => {
          return (globalProgression - left.position) / (right.position - left.position);
        };
        if (!left.type || left.type === "bezier") {
          const solver = new import_UnitBezier.default(
            left.handles[2],
            left.handles[3],
            right.handles[0],
            right.handles[1]
          );
          const bezierDer = (0, import_dataverse2.prism)(() => {
            const progression = globalProgressionToLocalProgression(
              progressionD.getValue()
            );
            const valueProgression = solver.solveSimple(progression);
            return {
              left: left.value,
              right: right.value,
              progression: valueProgression
            };
          });
          return {
            started: true,
            validFrom: left.position,
            validTo: right.position,
            der: bezierDer
          };
        }
        const holdDer = (0, import_dataverse2.prism)(() => {
          const progression = globalProgressionToLocalProgression(
            progressionD.getValue()
          );
          const valueProgression = Math.floor(progression);
          return {
            left: left.value,
            right: right.value,
            progression: valueProgression
          };
        });
        return {
          started: true,
          validFrom: left.position,
          validTo: right.position,
          der: holdDer
        };
      },
      error: {
        started: true,
        validFrom: -Infinity,
        validTo: Infinity,
        der: undefinedConstD
      }
    };
    function deepMergeWithCache(base, override, cache2) {
      const _cache = cache2;
      const possibleCachedValue = _cache.get(base);
      if (possibleCachedValue && possibleCachedValue.override === override) {
        return possibleCachedValue.merged;
      }
      const merged = __spreadValues({}, base);
      for (const key of Object.keys(override)) {
        const valueInOverride = override[key];
        const valueInBase = base[key];
        merged[key] = typeof valueInOverride === "object" && typeof valueInBase === "object" ? deepMergeWithCache(
          valueInBase,
          valueInOverride,
          cache2
        ) : valueInOverride === void 0 ? valueInBase : valueInOverride;
      }
      cache2.set(base, { override, merged });
      return merged;
    }
    function pointerDeep(base, toAppend) {
      let p2 = base;
      for (const k2 of toAppend) {
        p2 = p2[k2];
      }
      return p2;
    }
    var import_dataverse3 = require_dist();
    var valToAtom = (key, vals) => {
      const a2 = import_dataverse3.prism.memo(key, () => new import_dataverse3.Atom(vals), []);
      a2.set(vals);
      return a2;
    };
    var import_dataverse5 = require_dist();
    var import_dataverse4 = require_dist();
    var reWhitespace = /\s/;
    function trimmedEndIndex(string2) {
      var index = string2.length;
      while (index-- && reWhitespace.test(string2.charAt(index))) {
      }
      return index;
    }
    var trimmedEndIndex_default = trimmedEndIndex;
    var reTrimStart = /^\s+/;
    function baseTrim(string2) {
      return string2 ? string2.slice(0, trimmedEndIndex_default(string2) + 1).replace(reTrimStart, "") : string2;
    }
    var baseTrim_default = baseTrim;
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol_default(value)) {
        return NAN;
      }
      if (isObject_default(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject_default(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim_default(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    var toNumber_default = toNumber;
    var INFINITY3 = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber_default(value);
      if (value === INFINITY3 || value === -INFINITY3) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    var toFinite_default = toFinite;
    function toInteger(value) {
      var result = toFinite_default(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    var toInteger_default = toInteger;
    function identity(value) {
      return value;
    }
    var identity_default = identity;
    var WeakMap2 = getNative_default(root_default, "WeakMap");
    var WeakMap_default = WeakMap2;
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject_default(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    var baseCreate_default = baseCreate;
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    var copyArray_default = copyArray;
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    var arrayEach_default = arrayEach;
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue_default(object, key, newValue);
        } else {
          assignValue_default(object, key, newValue);
        }
      }
      return object;
    }
    var copyObject_default = copyObject;
    var MAX_SAFE_INTEGER2 = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
    }
    var isLength_default = isLength;
    function isArrayLike(value) {
      return value != null && isLength_default(value.length) && !isFunction_default(value);
    }
    var isArrayLike_default = isArrayLike;
    var objectProto7 = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto7;
      return value === proto;
    }
    var isPrototype_default = isPrototype;
    function baseTimes(n2, iteratee) {
      var index = -1, result = Array(n2);
      while (++index < n2) {
        result[index] = iteratee(index);
      }
      return result;
    }
    var baseTimes_default = baseTimes;
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
    }
    var baseIsArguments_default = baseIsArguments;
    var objectProto8 = Object.prototype;
    var hasOwnProperty6 = objectProto8.hasOwnProperty;
    var propertyIsEnumerable = objectProto8.propertyIsEnumerable;
    var isArguments = baseIsArguments_default(function() {
      return arguments;
    }()) ? baseIsArguments_default : function(value) {
      return isObjectLike_default(value) && hasOwnProperty6.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    var isArguments_default = isArguments;
    function stubFalse() {
      return false;
    }
    var stubFalse_default = stubFalse;
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root_default.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse_default;
    var isBuffer_default = isBuffer;
    var argsTag2 = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag2 = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
    }
    var baseIsTypedArray_default = baseIsTypedArray;
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    var baseUnary_default = baseUnary;
    var freeExports2 = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule2 = freeExports2 && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports2 = freeModule2 && freeModule2.exports === freeExports2;
    var freeProcess = moduleExports2 && freeGlobal_default.process;
    var nodeUtil = function() {
      try {
        var types = freeModule2 && freeModule2.require && freeModule2.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e2) {
      }
    }();
    var nodeUtil_default = nodeUtil;
    var nodeIsTypedArray = nodeUtil_default && nodeUtil_default.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
    var isTypedArray_default = isTypedArray;
    var objectProto9 = Object.prototype;
    var hasOwnProperty7 = objectProto9.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer_default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty7.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex_default(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    var arrayLikeKeys_default = arrayLikeKeys;
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    var overArg_default = overArg;
    var nativeKeys = overArg_default(Object.keys, Object);
    var nativeKeys_default = nativeKeys;
    var objectProto10 = Object.prototype;
    var hasOwnProperty8 = objectProto10.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype_default(object)) {
        return nativeKeys_default(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty8.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    var baseKeys_default = baseKeys;
    function keys(object) {
      return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
    }
    var keys_default = keys;
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    var nativeKeysIn_default = nativeKeysIn;
    var objectProto11 = Object.prototype;
    var hasOwnProperty9 = objectProto11.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject_default(object)) {
        return nativeKeysIn_default(object);
      }
      var isProto = isPrototype_default(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty9.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    var baseKeysIn_default = baseKeysIn;
    function keysIn(object) {
      return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
    }
    var keysIn_default = keysIn;
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    var arrayPush_default = arrayPush;
    var getPrototype = overArg_default(Object.getPrototypeOf, Object);
    var getPrototype_default = getPrototype;
    var objectTag2 = "[object Object]";
    var funcProto3 = Function.prototype;
    var objectProto12 = Object.prototype;
    var funcToString3 = funcProto3.toString;
    var hasOwnProperty10 = objectProto12.hasOwnProperty;
    var objectCtorString = funcToString3.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
        return false;
      }
      var proto = getPrototype_default(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty10.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
    }
    var isPlainObject_default = isPlainObject;
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    var baseSlice_default = baseSlice;
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice_default(array, start, end);
    }
    var castSlice_default = castSlice;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsZWJ = "\\u200d";
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    function hasUnicode(string2) {
      return reHasUnicode.test(string2);
    }
    var hasUnicode_default = hasUnicode;
    function asciiToArray(string2) {
      return string2.split("");
    }
    var asciiToArray_default = asciiToArray;
    var rsAstralRange2 = "\\ud800-\\udfff";
    var rsComboMarksRange2 = "\\u0300-\\u036f";
    var reComboHalfMarksRange2 = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange2 = "\\u20d0-\\u20ff";
    var rsComboRange2 = rsComboMarksRange2 + reComboHalfMarksRange2 + rsComboSymbolsRange2;
    var rsVarRange2 = "\\ufe0e\\ufe0f";
    var rsAstral = "[" + rsAstralRange2 + "]";
    var rsCombo = "[" + rsComboRange2 + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange2 + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ2 = "\\u200d";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange2 + "]?";
    var rsOptJoin = "(?:" + rsZWJ2 + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    function unicodeToArray(string2) {
      return string2.match(reUnicode) || [];
    }
    var unicodeToArray_default = unicodeToArray;
    function stringToArray(string2) {
      return hasUnicode_default(string2) ? unicodeToArray_default(string2) : asciiToArray_default(string2);
    }
    var stringToArray_default = stringToArray;
    function baseClamp(number2, lower, upper) {
      if (number2 === number2) {
        if (upper !== void 0) {
          number2 = number2 <= upper ? number2 : upper;
        }
        if (lower !== void 0) {
          number2 = number2 >= lower ? number2 : lower;
        }
      }
      return number2;
    }
    var baseClamp_default = baseClamp;
    function clamp(number2, lower, upper) {
      if (upper === void 0) {
        upper = lower;
        lower = void 0;
      }
      if (upper !== void 0) {
        upper = toNumber_default(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== void 0) {
        lower = toNumber_default(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp_default(toNumber_default(number2), lower, upper);
    }
    var clamp_default = clamp;
    function stackClear() {
      this.__data__ = new ListCache_default();
      this.size = 0;
    }
    var stackClear_default = stackClear;
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    var stackDelete_default = stackDelete;
    function stackGet(key) {
      return this.__data__.get(key);
    }
    var stackGet_default = stackGet;
    function stackHas(key) {
      return this.__data__.has(key);
    }
    var stackHas_default = stackHas;
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache_default) {
        var pairs = data.__data__;
        if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache_default(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    var stackSet_default = stackSet;
    function Stack(entries) {
      var data = this.__data__ = new ListCache_default(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear_default;
    Stack.prototype["delete"] = stackDelete_default;
    Stack.prototype.get = stackGet_default;
    Stack.prototype.has = stackHas_default;
    Stack.prototype.set = stackSet_default;
    var Stack_default = Stack;
    function baseAssign(object, source) {
      return object && copyObject_default(source, keys_default(source), object);
    }
    var baseAssign_default = baseAssign;
    function baseAssignIn(object, source) {
      return object && copyObject_default(source, keysIn_default(source), object);
    }
    var baseAssignIn_default = baseAssignIn;
    var freeExports3 = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule3 = freeExports3 && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports3 = freeModule3 && freeModule3.exports === freeExports3;
    var Buffer3 = moduleExports3 ? root_default.Buffer : void 0;
    var allocUnsafe = Buffer3 ? Buffer3.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    var cloneBuffer_default = cloneBuffer;
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    var arrayFilter_default = arrayFilter;
    function stubArray() {
      return [];
    }
    var stubArray_default = stubArray;
    var objectProto13 = Object.prototype;
    var propertyIsEnumerable2 = objectProto13.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable2.call(object, symbol);
      });
    };
    var getSymbols_default = getSymbols;
    function copySymbols(source, object) {
      return copyObject_default(source, getSymbols_default(source), object);
    }
    var copySymbols_default = copySymbols;
    var nativeGetSymbols2 = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object) {
      var result = [];
      while (object) {
        arrayPush_default(result, getSymbols_default(object));
        object = getPrototype_default(object);
      }
      return result;
    };
    var getSymbolsIn_default = getSymbolsIn;
    function copySymbolsIn(source, object) {
      return copyObject_default(source, getSymbolsIn_default(source), object);
    }
    var copySymbolsIn_default = copySymbolsIn;
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
    }
    var baseGetAllKeys_default = baseGetAllKeys;
    function getAllKeys(object) {
      return baseGetAllKeys_default(object, keys_default, getSymbols_default);
    }
    var getAllKeys_default = getAllKeys;
    function getAllKeysIn(object) {
      return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
    }
    var getAllKeysIn_default = getAllKeysIn;
    var DataView = getNative_default(root_default, "DataView");
    var DataView_default = DataView;
    var Promise2 = getNative_default(root_default, "Promise");
    var Promise_default = Promise2;
    var Set2 = getNative_default(root_default, "Set");
    var Set_default = Set2;
    var mapTag2 = "[object Map]";
    var objectTag3 = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag2 = "[object Set]";
    var weakMapTag2 = "[object WeakMap]";
    var dataViewTag2 = "[object DataView]";
    var dataViewCtorString = toSource_default(DataView_default);
    var mapCtorString = toSource_default(Map_default);
    var promiseCtorString = toSource_default(Promise_default);
    var setCtorString = toSource_default(Set_default);
    var weakMapCtorString = toSource_default(WeakMap_default);
    var getTag = baseGetTag_default;
    if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
      getTag = function(value) {
        var result = baseGetTag_default(value), Ctor = result == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag2;
            case mapCtorString:
              return mapTag2;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag2;
            case weakMapCtorString:
              return weakMapTag2;
          }
        }
        return result;
      };
    }
    var getTag_default = getTag;
    var objectProto14 = Object.prototype;
    var hasOwnProperty11 = objectProto14.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty11.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    var initCloneArray_default = initCloneArray;
    var Uint8Array2 = root_default.Uint8Array;
    var Uint8Array_default = Uint8Array2;
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
      return result;
    }
    var cloneArrayBuffer_default = cloneArrayBuffer;
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    var cloneDataView_default = cloneDataView;
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    var cloneRegExp_default = cloneRegExp;
    var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
    var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    var cloneSymbol_default = cloneSymbol;
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    var cloneTypedArray_default = cloneTypedArray;
    var boolTag2 = "[object Boolean]";
    var dateTag2 = "[object Date]";
    var mapTag3 = "[object Map]";
    var numberTag2 = "[object Number]";
    var regexpTag2 = "[object RegExp]";
    var setTag3 = "[object Set]";
    var stringTag2 = "[object String]";
    var symbolTag2 = "[object Symbol]";
    var arrayBufferTag2 = "[object ArrayBuffer]";
    var dataViewTag3 = "[object DataView]";
    var float32Tag2 = "[object Float32Array]";
    var float64Tag2 = "[object Float64Array]";
    var int8Tag2 = "[object Int8Array]";
    var int16Tag2 = "[object Int16Array]";
    var int32Tag2 = "[object Int32Array]";
    var uint8Tag2 = "[object Uint8Array]";
    var uint8ClampedTag2 = "[object Uint8ClampedArray]";
    var uint16Tag2 = "[object Uint16Array]";
    var uint32Tag2 = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag2:
          return cloneArrayBuffer_default(object);
        case boolTag2:
        case dateTag2:
          return new Ctor(+object);
        case dataViewTag3:
          return cloneDataView_default(object, isDeep);
        case float32Tag2:
        case float64Tag2:
        case int8Tag2:
        case int16Tag2:
        case int32Tag2:
        case uint8Tag2:
        case uint8ClampedTag2:
        case uint16Tag2:
        case uint32Tag2:
          return cloneTypedArray_default(object, isDeep);
        case mapTag3:
          return new Ctor();
        case numberTag2:
        case stringTag2:
          return new Ctor(object);
        case regexpTag2:
          return cloneRegExp_default(object);
        case setTag3:
          return new Ctor();
        case symbolTag2:
          return cloneSymbol_default(object);
      }
    }
    var initCloneByTag_default = initCloneByTag;
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
    }
    var initCloneObject_default = initCloneObject;
    var mapTag4 = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike_default(value) && getTag_default(value) == mapTag4;
    }
    var baseIsMap_default = baseIsMap;
    var nodeIsMap = nodeUtil_default && nodeUtil_default.isMap;
    var isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
    var isMap_default = isMap;
    var setTag4 = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike_default(value) && getTag_default(value) == setTag4;
    }
    var baseIsSet_default = baseIsSet;
    var nodeIsSet = nodeUtil_default && nodeUtil_default.isSet;
    var isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
    var isSet_default = isSet;
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag3 = "[object Arguments]";
    var arrayTag2 = "[object Array]";
    var boolTag3 = "[object Boolean]";
    var dateTag3 = "[object Date]";
    var errorTag2 = "[object Error]";
    var funcTag3 = "[object Function]";
    var genTag2 = "[object GeneratorFunction]";
    var mapTag5 = "[object Map]";
    var numberTag3 = "[object Number]";
    var objectTag4 = "[object Object]";
    var regexpTag3 = "[object RegExp]";
    var setTag5 = "[object Set]";
    var stringTag3 = "[object String]";
    var symbolTag3 = "[object Symbol]";
    var weakMapTag3 = "[object WeakMap]";
    var arrayBufferTag3 = "[object ArrayBuffer]";
    var dataViewTag4 = "[object DataView]";
    var float32Tag3 = "[object Float32Array]";
    var float64Tag3 = "[object Float64Array]";
    var int8Tag3 = "[object Int8Array]";
    var int16Tag3 = "[object Int16Array]";
    var int32Tag3 = "[object Int32Array]";
    var uint8Tag3 = "[object Uint8Array]";
    var uint8ClampedTag3 = "[object Uint8ClampedArray]";
    var uint16Tag3 = "[object Uint16Array]";
    var uint32Tag3 = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag4] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag3] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = true;
    cloneableTags[errorTag2] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject_default(value)) {
        return value;
      }
      var isArr = isArray_default(value);
      if (isArr) {
        result = initCloneArray_default(value);
        if (!isDeep) {
          return copyArray_default(value, result);
        }
      } else {
        var tag = getTag_default(value), isFunc = tag == funcTag3 || tag == genTag2;
        if (isBuffer_default(value)) {
          return cloneBuffer_default(value, isDeep);
        }
        if (tag == objectTag4 || tag == argsTag3 || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject_default(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result, value)) : copySymbols_default(value, baseAssign_default(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag_default(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack_default());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet_default(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap_default(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn_default : keys_default;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach_default(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue_default(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    var baseClone_default = baseClone;
    var CLONE_DEEP_FLAG2 = 1;
    var CLONE_SYMBOLS_FLAG2 = 4;
    function cloneDeep(value) {
      return baseClone_default(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG2);
    }
    var cloneDeep_default = cloneDeep;
    var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED3);
      return this;
    }
    var setCacheAdd_default = setCacheAdd;
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    var setCacheHas_default = setCacheHas;
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache_default();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
    SetCache.prototype.has = setCacheHas_default;
    var SetCache_default = SetCache;
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    var arraySome_default = arraySome;
    function cacheHas(cache2, key) {
      return cache2.has(key);
    }
    var cacheHas_default = cacheHas;
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome_default(other, function(othValue2, othIndex) {
            if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    var equalArrays_default = equalArrays;
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    var mapToArray_default = mapToArray;
    function setToArray(set2) {
      var index = -1, result = Array(set2.size);
      set2.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    var setToArray_default = setToArray;
    var COMPARE_PARTIAL_FLAG2 = 1;
    var COMPARE_UNORDERED_FLAG2 = 2;
    var boolTag4 = "[object Boolean]";
    var dateTag4 = "[object Date]";
    var errorTag3 = "[object Error]";
    var mapTag6 = "[object Map]";
    var numberTag4 = "[object Number]";
    var regexpTag4 = "[object RegExp]";
    var setTag6 = "[object Set]";
    var stringTag4 = "[object String]";
    var symbolTag4 = "[object Symbol]";
    var arrayBufferTag4 = "[object ArrayBuffer]";
    var dataViewTag5 = "[object DataView]";
    var symbolProto3 = Symbol_default ? Symbol_default.prototype : void 0;
    var symbolValueOf2 = symbolProto3 ? symbolProto3.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag5:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag4:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
            return false;
          }
          return true;
        case boolTag4:
        case dateTag4:
        case numberTag4:
          return eq_default(+object, +other);
        case errorTag3:
          return object.name == other.name && object.message == other.message;
        case regexpTag4:
        case stringTag4:
          return object == other + "";
        case mapTag6:
          var convert = mapToArray_default;
        case setTag6:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
          convert || (convert = setToArray_default);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG2;
          stack.set(object, other);
          var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag4:
          if (symbolValueOf2) {
            return symbolValueOf2.call(object) == symbolValueOf2.call(other);
          }
      }
      return false;
    }
    var equalByTag_default = equalByTag;
    var COMPARE_PARTIAL_FLAG3 = 1;
    var objectProto15 = Object.prototype;
    var hasOwnProperty12 = objectProto15.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty12.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    var equalObjects_default = equalObjects;
    var COMPARE_PARTIAL_FLAG4 = 1;
    var argsTag4 = "[object Arguments]";
    var arrayTag3 = "[object Array]";
    var objectTag5 = "[object Object]";
    var objectProto16 = Object.prototype;
    var hasOwnProperty13 = objectProto16.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag3 : getTag_default(object), othTag = othIsArr ? arrayTag3 : getTag_default(other);
      objTag = objTag == argsTag4 ? objectTag5 : objTag;
      othTag = othTag == argsTag4 ? objectTag5 : othTag;
      var objIsObj = objTag == objectTag5, othIsObj = othTag == objectTag5, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer_default(object)) {
        if (!isBuffer_default(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack_default());
        return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
        var objIsWrapped = objIsObj && hasOwnProperty13.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty13.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack_default());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack_default());
      return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
    }
    var baseIsEqualDeep_default = baseIsEqualDeep;
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    var baseIsEqual_default = baseIsEqual;
    var COMPARE_PARTIAL_FLAG5 = 1;
    var COMPARE_UNORDERED_FLAG3 = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack_default();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG5 | COMPARE_UNORDERED_FLAG3, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    var baseIsMatch_default = baseIsMatch;
    function isStrictComparable(value) {
      return value === value && !isObject_default(value);
    }
    var isStrictComparable_default = isStrictComparable;
    function getMatchData(object) {
      var result = keys_default(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable_default(value)];
      }
      return result;
    }
    var getMatchData_default = getMatchData;
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    var matchesStrictComparable_default = matchesStrictComparable;
    function baseMatches(source) {
      var matchData = getMatchData_default(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable_default(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch_default(object, source, matchData);
      };
    }
    var baseMatches_default = baseMatches;
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    var baseHasIn_default = baseHasIn;
    function hasPath(object, path, hasFunc) {
      path = castPath_default(path, object);
      var index = -1, length = path.length, result = false;
      while (++index < length) {
        var key = toKey_default(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength_default(length) && isIndex_default(key, length) && (isArray_default(object) || isArguments_default(object));
    }
    var hasPath_default = hasPath;
    function hasIn(object, path) {
      return object != null && hasPath_default(object, path, baseHasIn_default);
    }
    var hasIn_default = hasIn;
    var COMPARE_PARTIAL_FLAG6 = 1;
    var COMPARE_UNORDERED_FLAG4 = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey_default(path) && isStrictComparable_default(srcValue)) {
        return matchesStrictComparable_default(toKey_default(path), srcValue);
      }
      return function(object) {
        var objValue = get_default(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn_default(object, path) : baseIsEqual_default(srcValue, objValue, COMPARE_PARTIAL_FLAG6 | COMPARE_UNORDERED_FLAG4);
      };
    }
    var baseMatchesProperty_default = baseMatchesProperty;
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    var baseProperty_default = baseProperty;
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet_default(object, path);
      };
    }
    var basePropertyDeep_default = basePropertyDeep;
    function property(path) {
      return isKey_default(path) ? baseProperty_default(toKey_default(path)) : basePropertyDeep_default(path);
    }
    var property_default = property;
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity_default;
      }
      if (typeof value == "object") {
        return isArray_default(value) ? baseMatchesProperty_default(value[0], value[1]) : baseMatches_default(value);
      }
      return property_default(value);
    }
    var baseIteratee_default = baseIteratee;
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    var createBaseFor_default = createBaseFor;
    var baseFor = createBaseFor_default();
    var baseFor_default = baseFor;
    function baseForOwn(object, iteratee) {
      return object && baseFor_default(object, iteratee, keys_default);
    }
    var baseForOwn_default = baseForOwn;
    var now = function() {
      return root_default.Date.now();
    };
    var now_default = now;
    var FUNC_ERROR_TEXT2 = "Expected a function";
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    function debounce(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT2);
      }
      wait = toNumber_default(wait) || 0;
      if (isObject_default(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber_default(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now_default();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now_default());
      }
      function debounced() {
        var time = now_default(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            clearTimeout(timerId);
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    var debounce_default = debounce;
    function last(array) {
      var length = array == null ? 0 : array.length;
      return length ? array[length - 1] : void 0;
    }
    var last_default = last;
    function parent(object, path) {
      return path.length < 2 ? object : baseGet_default(object, baseSlice_default(path, 0, -1));
    }
    var parent_default = parent;
    function isInteger(value) {
      return typeof value == "number" && value == toInteger_default(value);
    }
    var isInteger_default = isInteger;
    function mapValues(object, iteratee) {
      var result = {};
      iteratee = baseIteratee_default(iteratee, 3);
      baseForOwn_default(object, function(value, key, object2) {
        baseAssignValue_default(result, key, iteratee(value, key, object2));
      });
      return result;
    }
    var mapValues_default = mapValues;
    function baseUnset(object, path) {
      path = castPath_default(path, object);
      object = parent_default(object, path);
      return object == null || delete object[toKey_default(last_default(path))];
    }
    var baseUnset_default = baseUnset;
    var MAX_SAFE_INTEGER3 = 9007199254740991;
    var nativeFloor = Math.floor;
    function baseRepeat(string2, n2) {
      var result = "";
      if (!string2 || n2 < 1 || n2 > MAX_SAFE_INTEGER3) {
        return result;
      }
      do {
        if (n2 % 2) {
          result += string2;
        }
        n2 = nativeFloor(n2 / 2);
        if (n2) {
          string2 += string2;
        }
      } while (n2);
      return result;
    }
    var baseRepeat_default = baseRepeat;
    var asciiSize = baseProperty_default("length");
    var asciiSize_default = asciiSize;
    var rsAstralRange3 = "\\ud800-\\udfff";
    var rsComboMarksRange3 = "\\u0300-\\u036f";
    var reComboHalfMarksRange3 = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange3 = "\\u20d0-\\u20ff";
    var rsComboRange3 = rsComboMarksRange3 + reComboHalfMarksRange3 + rsComboSymbolsRange3;
    var rsVarRange3 = "\\ufe0e\\ufe0f";
    var rsAstral2 = "[" + rsAstralRange3 + "]";
    var rsCombo2 = "[" + rsComboRange3 + "]";
    var rsFitz2 = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier2 = "(?:" + rsCombo2 + "|" + rsFitz2 + ")";
    var rsNonAstral2 = "[^" + rsAstralRange3 + "]";
    var rsRegional2 = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair2 = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsZWJ3 = "\\u200d";
    var reOptMod2 = rsModifier2 + "?";
    var rsOptVar2 = "[" + rsVarRange3 + "]?";
    var rsOptJoin2 = "(?:" + rsZWJ3 + "(?:" + [rsNonAstral2, rsRegional2, rsSurrPair2].join("|") + ")" + rsOptVar2 + reOptMod2 + ")*";
    var rsSeq2 = rsOptVar2 + reOptMod2 + rsOptJoin2;
    var rsSymbol2 = "(?:" + [rsNonAstral2 + rsCombo2 + "?", rsCombo2, rsRegional2, rsSurrPair2, rsAstral2].join("|") + ")";
    var reUnicode2 = RegExp(rsFitz2 + "(?=" + rsFitz2 + ")|" + rsSymbol2 + rsSeq2, "g");
    function unicodeSize(string2) {
      var result = reUnicode2.lastIndex = 0;
      while (reUnicode2.test(string2)) {
        ++result;
      }
      return result;
    }
    var unicodeSize_default = unicodeSize;
    function stringSize(string2) {
      return hasUnicode_default(string2) ? unicodeSize_default(string2) : asciiSize_default(string2);
    }
    var stringSize_default = stringSize;
    var nativeCeil = Math.ceil;
    function createPadding(length, chars) {
      chars = chars === void 0 ? " " : baseToString_default(chars);
      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat_default(chars, length) : chars;
      }
      var result = baseRepeat_default(chars, nativeCeil(length / stringSize_default(chars)));
      return hasUnicode_default(chars) ? castSlice_default(stringToArray_default(result), 0, length).join("") : result.slice(0, length);
    }
    var createPadding_default = createPadding;
    function padStart(string2, length, chars) {
      string2 = toString_default(string2);
      length = toInteger_default(length);
      var strLength = length ? stringSize_default(string2) : 0;
      return length && strLength < length ? createPadding_default(length - strLength, chars) + string2 : string2;
    }
    var padStart_default = padStart;
    function unset(object, path) {
      return object == null ? true : baseUnset_default(object, path);
    }
    var unset_default = unset;
    var KEEP_HOT_FOR_MS = 5 * 1e3;
    var TheatreSheetObject = class {
      /**
       * @internal
       */
      constructor(internals) {
        __publicField(this, "_cache", new SimpleCache());
        __publicField(this, "_keepHotUntapDebounce");
        setPrivateAPI(this, internals);
      }
      get type() {
        return "Theatre_SheetObject_PublicAPI";
      }
      get props() {
        return privateAPI(this).propsP;
      }
      get sheet() {
        return privateAPI(this).sheet.publicApi;
      }
      get project() {
        return privateAPI(this).sheet.project.publicApi;
      }
      get address() {
        return __spreadValues({}, privateAPI(this).address);
      }
      _valuesPrism() {
        return this._cache.get("_valuesPrism", () => {
          const sheetObject = privateAPI(this);
          const d2 = (0, import_dataverse4.prism)(() => {
            return (0, import_dataverse4.val)(sheetObject.getValues().getValue());
          });
          return d2;
        });
      }
      onValuesChange(fn2, rafDriver) {
        return onChange(this._valuesPrism(), fn2, rafDriver);
      }
      // internal: Make the deviration keepHot if directly read
      get value() {
        const der = this._valuesPrism();
        if (KEEP_HOT_FOR_MS != null) {
          if (!der.isHot) {
            if (this._keepHotUntapDebounce != null) {
              if (true) {
                privateAPI(this)._logger.errorDev(
                  "`sheet.value` keepHot debouncer is set, even though the derivation is not actually hot."
                );
              }
              this._keepHotUntapDebounce.flush();
            }
            const untap = der.keepHot();
            this._keepHotUntapDebounce = debounce_default(() => {
              untap();
              this._keepHotUntapDebounce = void 0;
            }, KEEP_HOT_FOR_MS);
          }
          if (this._keepHotUntapDebounce) {
            this._keepHotUntapDebounce();
          }
        }
        return der.getValue();
      }
      set initialValue(val8) {
        privateAPI(this).setInitialValue(val8);
      }
    };
    function memoizeFn(producer) {
      const cache2 = /* @__PURE__ */ new WeakMap();
      return (k2) => {
        if (!cache2.has(k2)) {
          cache2.set(k2, producer(k2));
        }
        return cache2.get(k2);
      };
    }
    function isPropConfigComposite(c2) {
      return c2.type === "compound" || c2.type === "enum";
    }
    function getPropConfigByPath(parentConf, path) {
      if (!parentConf)
        return void 0;
      const [key, ...rest] = path;
      if (key === void 0)
        return parentConf;
      if (!isPropConfigComposite(parentConf))
        return void 0;
      const sub = parentConf.type === "enum" ? parentConf.cases[key] : parentConf.props[key];
      return getPropConfigByPath(sub, rest);
    }
    function isPropConfSequencable(conf) {
      return !isPropConfigComposite(conf);
    }
    var compoundHasSimpleDescendants = memoizeFn(
      (conf) => {
        if (conf.type === "enum") {
          throw new Error("Not implemented yet for enums");
        }
        for (const key in conf.props) {
          const subConf = conf.props[key];
          if (isPropConfigComposite(subConf)) {
            if (compoundHasSimpleDescendants(subConf)) {
              return true;
            }
          } else {
            return true;
          }
        }
        return false;
      }
    );
    var SheetObject = class {
      constructor(sheet, template, nativeObject) {
        this.sheet = sheet;
        this.template = template;
        this.nativeObject = nativeObject;
        __publicField(this, "$$isPointerToPrismProvider", true);
        __publicField(this, "address");
        __publicField(this, "publicApi");
        __publicField(this, "_initialValue", new import_dataverse5.Atom({}));
        __publicField(this, "_cache", new SimpleCache());
        __publicField(this, "_logger");
        __publicField(this, "_internalUtilCtx");
        this._logger = sheet._logger.named(
          "SheetObject",
          template.address.objectKey
        );
        this._logger._trace("creating object");
        this._internalUtilCtx = { logger: this._logger.utilFor.internal() };
        this.address = __spreadProps(__spreadValues({}, template.address), {
          sheetInstanceId: sheet.address.sheetInstanceId
        });
        this.publicApi = new TheatreSheetObject(this);
      }
      get type() {
        return "Theatre_SheetObject";
      }
      getValues() {
        return this._cache.get(
          "getValues()",
          () => (0, import_dataverse5.prism)(() => {
            const defaults = (0, import_dataverse5.val)(this.template.getDefaultValues());
            const initial = (0, import_dataverse5.val)(this._initialValue.pointer);
            const withInitialCache = import_dataverse5.prism.memo(
              "withInitialCache",
              () => /* @__PURE__ */ new WeakMap(),
              []
            );
            const withInitial = deepMergeWithCache(
              defaults,
              initial,
              withInitialCache
            );
            const statics = (0, import_dataverse5.val)(this.template.getStaticValues());
            const withStaticsCache = import_dataverse5.prism.memo(
              "withStatics",
              () => /* @__PURE__ */ new WeakMap(),
              []
            );
            const withStatics = deepMergeWithCache(
              withInitial,
              statics,
              withStaticsCache
            );
            let final = withStatics;
            let sequenced;
            {
              const pointerToSequencedValuesD = import_dataverse5.prism.memo(
                "seq",
                () => this.getSequencedValues(),
                []
              );
              const withSeqsCache = import_dataverse5.prism.memo(
                "withSeqsCache",
                () => /* @__PURE__ */ new WeakMap(),
                []
              );
              sequenced = (0, import_dataverse5.val)((0, import_dataverse5.val)(pointerToSequencedValuesD));
              const withSeqs = deepMergeWithCache(final, sequenced, withSeqsCache);
              final = withSeqs;
            }
            const a2 = valToAtom("finalAtom", final);
            return a2.pointer;
          })
        );
      }
      getValueByPointer(pointer3) {
        const allValuesP = (0, import_dataverse5.val)(this.getValues());
        const { path } = (0, import_dataverse5.getPointerParts)(pointer3);
        return (0, import_dataverse5.val)(
          pointerDeep(allValuesP, path)
        );
      }
      pointerToPrism(pointer3) {
        const { path } = (0, import_dataverse5.getPointerParts)(pointer3);
        return (0, import_dataverse5.prism)(() => {
          const allValuesP = (0, import_dataverse5.val)(this.getValues());
          return (0, import_dataverse5.val)(pointerDeep(allValuesP, path));
        });
      }
      /**
       * Returns values of props that are sequenced.
       */
      getSequencedValues() {
        return (0, import_dataverse5.prism)(() => {
          const tracksToProcessD = import_dataverse5.prism.memo(
            "tracksToProcess",
            () => this.template.getArrayOfValidSequenceTracks(),
            []
          );
          const tracksToProcess = (0, import_dataverse5.val)(tracksToProcessD);
          const valsAtom = new import_dataverse5.Atom({});
          const config = (0, import_dataverse5.val)(this.template.configPointer);
          import_dataverse5.prism.effect(
            "processTracks",
            () => {
              const untaps = [];
              for (const { trackId, pathToProp } of tracksToProcess) {
                const pr = this._trackIdToPrism(trackId);
                const propConfig = getPropConfigByPath(
                  config,
                  pathToProp
                );
                const deserializeAndSanitize = propConfig.deserializeAndSanitize;
                const interpolate = propConfig.interpolate;
                const updateSequenceValueFromItsPrism = () => {
                  const triple = pr.getValue();
                  if (!triple)
                    return valsAtom.setByPointer(
                      (p2) => pointerDeep(p2, pathToProp),
                      void 0
                    );
                  const leftDeserialized = deserializeAndSanitize(triple.left);
                  const left = leftDeserialized === void 0 ? propConfig.default : leftDeserialized;
                  if (triple.right === void 0)
                    return valsAtom.setByPointer(
                      (p2) => pointerDeep(p2, pathToProp),
                      left
                    );
                  const rightDeserialized = deserializeAndSanitize(triple.right);
                  const right = rightDeserialized === void 0 ? propConfig.default : rightDeserialized;
                  return valsAtom.setByPointer(
                    (p2) => pointerDeep(p2, pathToProp),
                    interpolate(left, right, triple.progression)
                  );
                };
                const untap = pr.onStale(updateSequenceValueFromItsPrism);
                updateSequenceValueFromItsPrism();
                untaps.push(untap);
              }
              return () => {
                for (const untap of untaps) {
                  untap();
                }
              };
            },
            [config, ...tracksToProcess]
          );
          return valsAtom.pointer;
        });
      }
      _trackIdToPrism(trackId) {
        const trackP = this.template.project.pointers.historic.sheetsById[this.address.sheetId].sequence.tracksByObject[this.address.objectKey].trackData[trackId];
        const timeD = this.sheet.getSequence().positionPrism;
        return interpolationTripleAtPosition(this._internalUtilCtx, trackP, timeD);
      }
      get propsP() {
        return this._cache.get(
          "propsP",
          () => (0, import_dataverse5.pointer)({ root: this, path: [] })
        );
      }
      validateValue(pointer3, value) {
      }
      setInitialValue(val8) {
        this.validateValue(this.propsP, val8);
        this._initialValue.set(val8);
      }
    };
    function lazy(f2) {
      return function lazyLogIncluded(m, lazyArg) {
        return f2(m, lazyArg());
      };
    }
    var LEVELS = {
      _hmm: getLogMeta(
        524
        /* _HMM */
      ),
      _todo: getLogMeta(
        522
        /* _TODO */
      ),
      _error: getLogMeta(
        521
        /* _ERROR */
      ),
      errorDev: getLogMeta(
        529
        /* ERROR_DEV */
      ),
      errorPublic: getLogMeta(
        545
        /* ERROR_PUBLIC */
      ),
      _kapow: getLogMeta(
        268
        /* _KAPOW */
      ),
      _warn: getLogMeta(
        265
        /* _WARN */
      ),
      warnDev: getLogMeta(
        273
        /* WARN_DEV */
      ),
      warnPublic: getLogMeta(
        289
        /* WARN_PUBLIC */
      ),
      _debug: getLogMeta(
        137
        /* _DEBUG */
      ),
      debugDev: getLogMeta(
        145
        /* DEBUG_DEV */
      ),
      _trace: getLogMeta(
        73
        /* _TRACE */
      ),
      traceDev: getLogMeta(
        81
        /* TRACE_DEV */
      )
    };
    function getLogMeta(level) {
      return Object.freeze({
        audience: hasFlag(
          level,
          8
          /* INTERNAL */
        ) ? "internal" : hasFlag(
          level,
          16
          /* DEV */
        ) ? "dev" : "public",
        category: hasFlag(
          level,
          4
          /* TROUBLESHOOTING */
        ) ? "troubleshooting" : hasFlag(
          level,
          2
          /* TODO */
        ) ? "todo" : "general",
        level: (
          // I think this is equivalent... but I'm not using it until we have tests.
          // this code won't really impact performance much anyway, since it's just computed once
          // up front.
          // level &
          // (TheatreLoggerLevel.TRACE |
          //   TheatreLoggerLevel.DEBUG |
          //   TheatreLoggerLevel.WARN |
          //   TheatreLoggerLevel.ERROR),
          hasFlag(
            level,
            512
            /* ERROR */
          ) ? 512 : hasFlag(
            level,
            256
            /* WARN */
          ) ? 256 : hasFlag(
            level,
            128
            /* DEBUG */
          ) ? 128 : (
            // no other option
            64
          )
        )
      });
    }
    function hasFlag(level, flag) {
      return (level & flag) === flag;
    }
    function shouldLog(includes, level) {
      return ((level & 32) === 32 ? true : (level & 16) === 16 ? includes.dev : (level & 8) === 8 ? includes.internal : false) && includes.min <= level;
    }
    var DEFAULTS = {
      loggingConsoleStyle: true,
      loggerConsoleStyle: true,
      includes: Object.freeze({
        internal: false,
        dev: false,
        min: 256
        /* WARN */
      }),
      filtered: function defaultFiltered() {
      },
      include: function defaultInclude() {
        return {};
      },
      create: null,
      creatExt: null,
      named(parent2, name, key) {
        return this.create({
          names: [...parent2.names, { name, key }]
        });
      },
      style: {
        bold: void 0,
        // /Service$/
        italic: void 0,
        // /Model$/
        cssMemo: /* @__PURE__ */ new Map([
          // handle empty names so we don't have to check for
          // name.length > 0 during this.css('')
          ["", ""]
          // bring a specific override
          // ["Marker", "color:#aea9ff;font-size:0.75em;text-transform:uppercase"]
        ]),
        collapseOnRE: /[a-z- ]+/g,
        color: void 0,
        // create collapsed name
        // insert collapsed name into cssMemo with original's style
        collapsed(name) {
          if (name.length < 5)
            return name;
          const collapsed = name.replace(this.collapseOnRE, "");
          if (!this.cssMemo.has(collapsed)) {
            this.cssMemo.set(collapsed, this.css(name));
          }
          return collapsed;
        },
        css(name) {
          var _a, _b, _c, _d;
          const found = this.cssMemo.get(name);
          if (found)
            return found;
          let css = "color:".concat((_b = (_a = this.color) == null ? void 0 : _a.call(this, name)) != null ? _b : "hsl(".concat((name.charCodeAt(0) + name.charCodeAt(name.length - 1)) % 360, ", 100%, 60%)"));
          if ((_c = this.bold) == null ? void 0 : _c.test(name)) {
            css += ";font-weight:600";
          }
          if ((_d = this.italic) == null ? void 0 : _d.test(name)) {
            css += ";font-style:italic";
          }
          this.cssMemo.set(name, css);
          return css;
        }
      }
    };
    function createTheatreInternalLogger(useConsole = console, _options = {}) {
      const ref = __spreadProps(__spreadValues({}, DEFAULTS), { includes: __spreadValues({}, DEFAULTS.includes) });
      const createConsole = {
        styled: createConsoleLoggerStyled.bind(ref, useConsole),
        noStyle: createConsoleLoggerNoStyle.bind(ref, useConsole)
      };
      const createExtBound = createExtLogger.bind(ref);
      function getConCreate() {
        return ref.loggingConsoleStyle && ref.loggerConsoleStyle ? createConsole.styled : createConsole.noStyle;
      }
      ref.create = getConCreate();
      return {
        configureLogger(config) {
          var _a;
          if (config === "console") {
            ref.loggerConsoleStyle = DEFAULTS.loggerConsoleStyle;
            ref.create = getConCreate();
          } else if (config.type === "console") {
            ref.loggerConsoleStyle = (_a = config.style) != null ? _a : DEFAULTS.loggerConsoleStyle;
            ref.create = getConCreate();
          } else if (config.type === "keyed") {
            ref.creatExt = (source) => config.keyed(source.names);
            ref.create = createExtBound;
          } else if (config.type === "named") {
            ref.creatExt = configNamedToKeyed.bind(null, config.named);
            ref.create = createExtBound;
          }
        },
        configureLogging(config) {
          var _a, _b, _c, _d, _e;
          ref.includes.dev = (_a = config.dev) != null ? _a : DEFAULTS.includes.dev;
          ref.includes.internal = (_b = config.internal) != null ? _b : DEFAULTS.includes.internal;
          ref.includes.min = (_c = config.min) != null ? _c : DEFAULTS.includes.min;
          ref.include = (_d = config.include) != null ? _d : DEFAULTS.include;
          ref.loggingConsoleStyle = (_e = config.consoleStyle) != null ? _e : DEFAULTS.loggingConsoleStyle;
          ref.create = getConCreate();
        },
        getLogger() {
          return ref.create({ names: [] });
        }
      };
    }
    function configNamedToKeyed(namedFn, source) {
      const names = [];
      for (let { name, key } of source.names) {
        names.push(key == null ? name : "".concat(name, " (").concat(key, ")"));
      }
      return namedFn(names);
    }
    function createExtLogger(source) {
      const includes = __spreadValues(__spreadValues({}, this.includes), this.include(source));
      const f2 = this.filtered;
      const named = this.named.bind(this, source);
      const ext = this.creatExt(source);
      const _HMM = shouldLog(
        includes,
        524
        /* _HMM */
      );
      const _TODO = shouldLog(
        includes,
        522
        /* _TODO */
      );
      const _ERROR = shouldLog(
        includes,
        521
        /* _ERROR */
      );
      const ERROR_DEV = shouldLog(
        includes,
        529
        /* ERROR_DEV */
      );
      const ERROR_PUBLIC = shouldLog(
        includes,
        545
        /* ERROR_PUBLIC */
      );
      const _WARN = shouldLog(
        includes,
        265
        /* _WARN */
      );
      const _KAPOW = shouldLog(
        includes,
        268
        /* _KAPOW */
      );
      const WARN_DEV = shouldLog(
        includes,
        273
        /* WARN_DEV */
      );
      const WARN_PUBLIC = shouldLog(
        includes,
        289
        /* WARN_PUBLIC */
      );
      const _DEBUG = shouldLog(
        includes,
        137
        /* _DEBUG */
      );
      const DEBUG_DEV = shouldLog(
        includes,
        145
        /* DEBUG_DEV */
      );
      const _TRACE = shouldLog(
        includes,
        73
        /* _TRACE */
      );
      const TRACE_DEV = shouldLog(
        includes,
        81
        /* TRACE_DEV */
      );
      const _hmm = _HMM ? ext.error.bind(ext, LEVELS._hmm) : f2.bind(
        source,
        524
        /* _HMM */
      );
      const _todo = _TODO ? ext.error.bind(ext, LEVELS._todo) : f2.bind(
        source,
        522
        /* _TODO */
      );
      const _error = _ERROR ? ext.error.bind(ext, LEVELS._error) : f2.bind(
        source,
        521
        /* _ERROR */
      );
      const errorDev = ERROR_DEV ? ext.error.bind(ext, LEVELS.errorDev) : f2.bind(
        source,
        529
        /* ERROR_DEV */
      );
      const errorPublic = ERROR_PUBLIC ? ext.error.bind(ext, LEVELS.errorPublic) : f2.bind(
        source,
        545
        /* ERROR_PUBLIC */
      );
      const _kapow = _KAPOW ? ext.warn.bind(ext, LEVELS._kapow) : f2.bind(
        source,
        268
        /* _KAPOW */
      );
      const _warn = _WARN ? ext.warn.bind(ext, LEVELS._warn) : f2.bind(
        source,
        265
        /* _WARN */
      );
      const warnDev = WARN_DEV ? ext.warn.bind(ext, LEVELS.warnDev) : f2.bind(
        source,
        273
        /* WARN_DEV */
      );
      const warnPublic = WARN_PUBLIC ? ext.warn.bind(ext, LEVELS.warnPublic) : f2.bind(
        source,
        273
        /* WARN_DEV */
      );
      const _debug = _DEBUG ? ext.debug.bind(ext, LEVELS._debug) : f2.bind(
        source,
        137
        /* _DEBUG */
      );
      const debugDev = DEBUG_DEV ? ext.debug.bind(ext, LEVELS.debugDev) : f2.bind(
        source,
        145
        /* DEBUG_DEV */
      );
      const _trace = _TRACE ? ext.trace.bind(ext, LEVELS._trace) : f2.bind(
        source,
        73
        /* _TRACE */
      );
      const traceDev = TRACE_DEV ? ext.trace.bind(ext, LEVELS.traceDev) : f2.bind(
        source,
        81
        /* TRACE_DEV */
      );
      const logger = {
        _hmm,
        _todo,
        _error,
        errorDev,
        errorPublic,
        _kapow,
        _warn,
        warnDev,
        warnPublic,
        _debug,
        debugDev,
        _trace,
        traceDev,
        lazy: {
          _hmm: _HMM ? lazy(_hmm) : _hmm,
          _todo: _TODO ? lazy(_todo) : _todo,
          _error: _ERROR ? lazy(_error) : _error,
          errorDev: ERROR_DEV ? lazy(errorDev) : errorDev,
          errorPublic: ERROR_PUBLIC ? lazy(errorPublic) : errorPublic,
          _kapow: _KAPOW ? lazy(_kapow) : _kapow,
          _warn: _WARN ? lazy(_warn) : _warn,
          warnDev: WARN_DEV ? lazy(warnDev) : warnDev,
          warnPublic: WARN_PUBLIC ? lazy(warnPublic) : warnPublic,
          _debug: _DEBUG ? lazy(_debug) : _debug,
          debugDev: DEBUG_DEV ? lazy(debugDev) : debugDev,
          _trace: _TRACE ? lazy(_trace) : _trace,
          traceDev: TRACE_DEV ? lazy(traceDev) : traceDev
        },
        //
        named,
        utilFor: {
          internal() {
            return {
              debug: logger._debug,
              error: logger._error,
              warn: logger._warn,
              trace: logger._trace,
              named(name, key) {
                return logger.named(name, key).utilFor.internal();
              }
            };
          },
          dev() {
            return {
              debug: logger.debugDev,
              error: logger.errorDev,
              warn: logger.warnDev,
              trace: logger.traceDev,
              named(name, key) {
                return logger.named(name, key).utilFor.dev();
              }
            };
          },
          public() {
            return {
              error: logger.errorPublic,
              warn: logger.warnPublic,
              debug(message, obj) {
                logger._warn('(public "debug" filtered out) '.concat(message), obj);
              },
              trace(message, obj) {
                logger._warn('(public "trace" filtered out) '.concat(message), obj);
              },
              named(name, key) {
                return logger.named(name, key).utilFor.public();
              }
            };
          }
        }
      };
      return logger;
    }
    function createConsoleLoggerStyled(con, source) {
      const includes = __spreadValues(__spreadValues({}, this.includes), this.include(source));
      const styleArgs = [];
      let prefix = "";
      for (let i2 = 0; i2 < source.names.length; i2++) {
        const { name, key } = source.names[i2];
        prefix += " %c".concat(name);
        styleArgs.push(this.style.css(name));
        if (key != null) {
          const keyStr = "%c#".concat(key);
          prefix += keyStr;
          styleArgs.push(this.style.css(keyStr));
        }
      }
      const f2 = this.filtered;
      const named = this.named.bind(this, source);
      const prefixArr = [prefix, ...styleArgs];
      return _createConsoleLogger(
        f2,
        source,
        includes,
        con,
        prefixArr,
        styledKapowPrefix(prefixArr),
        named
      );
    }
    function styledKapowPrefix(args) {
      const start = args.slice(0);
      for (let i2 = 1; i2 < start.length; i2++)
        start[i2] += ";background-color:#e0005a;padding:2px;color:white";
      return start;
    }
    function createConsoleLoggerNoStyle(con, source) {
      const includes = __spreadValues(__spreadValues({}, this.includes), this.include(source));
      let prefix = "";
      for (let i2 = 0; i2 < source.names.length; i2++) {
        const { name, key } = source.names[i2];
        prefix += " ".concat(name);
        if (key != null) {
          prefix += "#".concat(key);
        }
      }
      const f2 = this.filtered;
      const named = this.named.bind(this, source);
      const prefixArr = [prefix];
      return _createConsoleLogger(
        f2,
        source,
        includes,
        con,
        prefixArr,
        prefixArr,
        named
      );
    }
    function _createConsoleLogger(f2, source, includes, con, prefix, kapowPrefix, named) {
      const _HMM = shouldLog(
        includes,
        524
        /* _HMM */
      );
      const _TODO = shouldLog(
        includes,
        522
        /* _TODO */
      );
      const _ERROR = shouldLog(
        includes,
        521
        /* _ERROR */
      );
      const ERROR_DEV = shouldLog(
        includes,
        529
        /* ERROR_DEV */
      );
      const ERROR_PUBLIC = shouldLog(
        includes,
        545
        /* ERROR_PUBLIC */
      );
      const _WARN = shouldLog(
        includes,
        265
        /* _WARN */
      );
      const _KAPOW = shouldLog(
        includes,
        268
        /* _KAPOW */
      );
      const WARN_DEV = shouldLog(
        includes,
        273
        /* WARN_DEV */
      );
      const WARN_PUBLIC = shouldLog(
        includes,
        289
        /* WARN_PUBLIC */
      );
      const _DEBUG = shouldLog(
        includes,
        137
        /* _DEBUG */
      );
      const DEBUG_DEV = shouldLog(
        includes,
        145
        /* DEBUG_DEV */
      );
      const _TRACE = shouldLog(
        includes,
        73
        /* _TRACE */
      );
      const TRACE_DEV = shouldLog(
        includes,
        81
        /* TRACE_DEV */
      );
      const _hmm = _HMM ? con.error.bind(con, ...prefix) : f2.bind(
        source,
        524
        /* _HMM */
      );
      const _todo = _TODO ? con.error.bind(con, ...prefix) : f2.bind(
        source,
        522
        /* _TODO */
      );
      const _error = _ERROR ? con.error.bind(con, ...prefix) : f2.bind(
        source,
        521
        /* _ERROR */
      );
      const errorDev = ERROR_DEV ? con.error.bind(con, ...prefix) : f2.bind(
        source,
        529
        /* ERROR_DEV */
      );
      const errorPublic = ERROR_PUBLIC ? con.error.bind(con, ...prefix) : f2.bind(
        source,
        545
        /* ERROR_PUBLIC */
      );
      const _kapow = _KAPOW ? con.warn.bind(con, ...kapowPrefix) : f2.bind(
        source,
        268
        /* _KAPOW */
      );
      const _warn = _WARN ? con.warn.bind(con, ...prefix) : f2.bind(
        source,
        265
        /* _WARN */
      );
      const warnDev = WARN_DEV ? con.warn.bind(con, ...prefix) : f2.bind(
        source,
        273
        /* WARN_DEV */
      );
      const warnPublic = WARN_PUBLIC ? con.warn.bind(con, ...prefix) : f2.bind(
        source,
        273
        /* WARN_DEV */
      );
      const _debug = _DEBUG ? con.info.bind(con, ...prefix) : f2.bind(
        source,
        137
        /* _DEBUG */
      );
      const debugDev = DEBUG_DEV ? con.info.bind(con, ...prefix) : f2.bind(
        source,
        145
        /* DEBUG_DEV */
      );
      const _trace = _TRACE ? con.debug.bind(con, ...prefix) : f2.bind(
        source,
        73
        /* _TRACE */
      );
      const traceDev = TRACE_DEV ? con.debug.bind(con, ...prefix) : f2.bind(
        source,
        81
        /* TRACE_DEV */
      );
      const logger = {
        _hmm,
        _todo,
        _error,
        errorDev,
        errorPublic,
        _kapow,
        _warn,
        warnDev,
        warnPublic,
        _debug,
        debugDev,
        _trace,
        traceDev,
        lazy: {
          _hmm: _HMM ? lazy(_hmm) : _hmm,
          _todo: _TODO ? lazy(_todo) : _todo,
          _error: _ERROR ? lazy(_error) : _error,
          errorDev: ERROR_DEV ? lazy(errorDev) : errorDev,
          errorPublic: ERROR_PUBLIC ? lazy(errorPublic) : errorPublic,
          _kapow: _KAPOW ? lazy(_kapow) : _kapow,
          _warn: _WARN ? lazy(_warn) : _warn,
          warnDev: WARN_DEV ? lazy(warnDev) : warnDev,
          warnPublic: WARN_PUBLIC ? lazy(warnPublic) : warnPublic,
          _debug: _DEBUG ? lazy(_debug) : _debug,
          debugDev: DEBUG_DEV ? lazy(debugDev) : debugDev,
          _trace: _TRACE ? lazy(_trace) : _trace,
          traceDev: TRACE_DEV ? lazy(traceDev) : traceDev
        },
        //
        named,
        utilFor: {
          internal() {
            return {
              debug: logger._debug,
              error: logger._error,
              warn: logger._warn,
              trace: logger._trace,
              named(name, key) {
                return logger.named(name, key).utilFor.internal();
              }
            };
          },
          dev() {
            return {
              debug: logger.debugDev,
              error: logger.errorDev,
              warn: logger.warnDev,
              trace: logger.traceDev,
              named(name, key) {
                return logger.named(name, key).utilFor.dev();
              }
            };
          },
          public() {
            return {
              error: logger.errorPublic,
              warn: logger.warnPublic,
              debug(message, obj) {
                logger._warn('(public "debug" filtered out) '.concat(message), obj);
              },
              trace(message, obj) {
                logger._warn('(public "trace" filtered out) '.concat(message), obj);
              },
              named(name, key) {
                return logger.named(name, key).utilFor.public();
              }
            };
          }
        }
      };
      return logger;
    }
    var internal = createTheatreInternalLogger(console, {
      _debug: function() {
      },
      _error: function() {
      }
    });
    internal.configureLogging({
      dev: true,
      min: 64
      /* TRACE */
    });
    var logger_default = internal.getLogger().named("Theatre.js (default logger)").utilFor.dev();
    var cache = /* @__PURE__ */ new WeakMap();
    function getOrderingOfPropTypeConfig(config) {
      const existing = cache.get(config);
      if (existing)
        return existing;
      const map = /* @__PURE__ */ new Map();
      cache.set(config, map);
      iterateOnCompound([], config, map);
      return map;
    }
    function iterateOnCompound(path, config, map) {
      for (const [key, subConf] of Object.entries(config.props)) {
        if (!isPropConfigComposite(subConf)) {
          const subPath = [...path, key];
          map.set(JSON.stringify(subPath), map.size);
          iterateOnAny(subPath, subConf, map);
        }
      }
      for (const [key, subConf] of Object.entries(config.props)) {
        if (isPropConfigComposite(subConf)) {
          const subPath = [...path, key];
          map.set(JSON.stringify(subPath), map.size);
          iterateOnAny(subPath, subConf, map);
        }
      }
    }
    function iterateOnAny(path, config, map) {
      if (config.type === "compound") {
        iterateOnCompound(path, config, map);
      } else if (config.type === "enum") {
        throw new Error("Enums aren't supported yet");
      } else {
        map.set(JSON.stringify(path), map.size);
      }
    }
    function isObjectEmpty(obj) {
      return typeof obj === "object" && obj !== null && Object.keys(obj).length === 0;
    }
    var SheetObjectTemplate = class {
      constructor(sheetTemplate, objectKey, nativeObject, config, _temp_actions) {
        this.sheetTemplate = sheetTemplate;
        __publicField(this, "address");
        __publicField(this, "type", "Theatre_SheetObjectTemplate");
        __publicField(this, "_config");
        __publicField(this, "_temp_actions_atom");
        __publicField(this, "_cache", new SimpleCache());
        __publicField(this, "project");
        __publicField(this, "pointerToSheetState");
        __publicField(this, "pointerToStaticOverrides");
        this.address = __spreadProps(__spreadValues({}, sheetTemplate.address), { objectKey });
        this._config = new import_dataverse6.Atom(config);
        this._temp_actions_atom = new import_dataverse6.Atom(_temp_actions);
        this.project = sheetTemplate.project;
        this.pointerToSheetState = this.sheetTemplate.project.pointers.historic.sheetsById[this.address.sheetId];
        this.pointerToStaticOverrides = this.pointerToSheetState.staticOverrides.byObject[this.address.objectKey];
      }
      get staticConfig() {
        return this._config.get();
      }
      get configPointer() {
        return this._config.pointer;
      }
      get _temp_actions() {
        return this._temp_actions_atom.get();
      }
      get _temp_actionsPointer() {
        return this._temp_actions_atom.pointer;
      }
      createInstance(sheet, nativeObject, config) {
        this._config.set(config);
        return new SheetObject(sheet, this, nativeObject);
      }
      reconfigure(config) {
        this._config.set(config);
      }
      /**
       * The `actions` api is temporary until we implement events.
       */
      _temp_setActions(actions) {
        this._temp_actions_atom.set(actions);
      }
      /**
       * Returns the default values (all defaults are read from the config)
       */
      getDefaultValues() {
        return this._cache.get(
          "getDefaultValues()",
          () => (0, import_dataverse6.prism)(() => {
            const config = (0, import_dataverse6.val)(this.configPointer);
            return getPropDefaultsOfSheetObject(config);
          })
        );
      }
      /**
       * Returns values that are set statically (ie, not sequenced, and not defaults)
       */
      getStaticValues() {
        return this._cache.get(
          "getStaticValues",
          () => (0, import_dataverse6.prism)(() => {
            var _a;
            const json = (_a = (0, import_dataverse6.val)(this.pointerToStaticOverrides)) != null ? _a : {};
            const config = (0, import_dataverse6.val)(this.configPointer);
            const deserialized = config.deserializeAndSanitize(json) || {};
            return deserialized;
          })
        );
      }
      /**
       * Filters through the sequenced tracks and returns those tracks who are valid
       * according to the object's prop types, then sorted in the same order as the config
       *
       * Returns an array.
       */
      getArrayOfValidSequenceTracks() {
        return this._cache.get(
          "getArrayOfValidSequenceTracks",
          () => (0, import_dataverse6.prism)(() => {
            const pointerToSheetState = this.project.pointers.historic.sheetsById[this.address.sheetId];
            const trackIdByPropPath = (0, import_dataverse6.val)(
              pointerToSheetState.sequence.tracksByObject[this.address.objectKey].trackIdByPropPath
            );
            if (!trackIdByPropPath)
              return emptyArray;
            const arrayOfIds = [];
            if (!trackIdByPropPath)
              return emptyArray;
            const objectConfig = (0, import_dataverse6.val)(this.configPointer);
            const _entries = Object.entries(trackIdByPropPath);
            for (const [pathToPropInString, trackId] of _entries) {
              const pathToProp = parsePathToProp(pathToPropInString);
              if (!pathToProp)
                continue;
              const propConfig = getPropConfigByPath(objectConfig, pathToProp);
              const isSequencable = propConfig && isPropConfSequencable(propConfig);
              if (!isSequencable)
                continue;
              arrayOfIds.push({ pathToProp, trackId });
            }
            const mapping = getOrderingOfPropTypeConfig(objectConfig);
            arrayOfIds.sort((a2, b2) => {
              const pathToPropA = a2.pathToProp;
              const pathToPropB = b2.pathToProp;
              const indexA = mapping.get(JSON.stringify(pathToPropA));
              const indexB = mapping.get(JSON.stringify(pathToPropB));
              if (indexA > indexB) {
                return 1;
              }
              return -1;
            });
            if (arrayOfIds.length === 0) {
              return emptyArray;
            } else {
              return arrayOfIds;
            }
          })
        );
      }
      /**
       * Filters through the sequenced tracks those tracks that are valid
       * according to the object's prop types.
       *
       * Returns a map.
       *
       * Not available in core.
       */
      getMapOfValidSequenceTracks_forStudio() {
        return this._cache.get(
          "getMapOfValidSequenceTracks_forStudio",
          () => (0, import_dataverse6.prism)(() => {
            const arr = (0, import_dataverse6.val)(this.getArrayOfValidSequenceTracks());
            let map = {};
            for (const { pathToProp, trackId } of arr) {
              set_default(map, pathToProp, trackId);
            }
            return map;
          })
        );
      }
      /**
       * @returns The static overrides that are not sequenced. Returns undefined if there are no static overrides,
       * or if all those static overrides are sequenced.
       */
      getStaticButNotSequencedOverrides() {
        return this._cache.get(
          "getStaticButNotSequencedOverrides",
          () => (0, import_dataverse6.prism)(() => {
            const staticOverrides = (0, import_dataverse6.val)(this.getStaticValues());
            const arrayOfValidSequenceTracks = (0, import_dataverse6.val)(
              this.getArrayOfValidSequenceTracks()
            );
            const staticButNotSequencedOverrides = cloneDeep_default(staticOverrides);
            for (const { pathToProp } of arrayOfValidSequenceTracks) {
              unset_default(staticButNotSequencedOverrides, pathToProp);
              let parentPath = pathToProp.slice(0, -1);
              while (parentPath.length > 0) {
                const parentValue = getDeep(
                  staticButNotSequencedOverrides,
                  parentPath
                );
                if (!isObjectEmpty(parentValue))
                  break;
                unset_default(staticButNotSequencedOverrides, parentPath);
                parentPath = parentPath.slice(0, -1);
              }
            }
            if (isObjectEmpty(staticButNotSequencedOverrides)) {
              return void 0;
            } else {
              return staticButNotSequencedOverrides;
            }
          })
        );
      }
      getDefaultsAtPointer(pointer3) {
        const { path } = (0, import_dataverse6.getPointerParts)(pointer3);
        const defaults = this.getDefaultValues().getValue();
        const defaultsAtPath = getDeep(defaults, path);
        return defaultsAtPath;
      }
    };
    function parsePathToProp(pathToPropInString) {
      try {
        const pathToProp = JSON.parse(pathToPropInString);
        return pathToProp;
      } catch (e2) {
        logger_default.warn(
          "property ".concat(JSON.stringify(
            pathToPropInString
          ), " cannot be parsed. Skipping.")
        );
        return void 0;
      }
    }
    var import_dataverse15 = require_dist();
    var encodePathToProp = memoizeFn(
      (p2) => (
        // we're using JSON.stringify here, but we could use a faster alternative.
        // If you happen to do that, first make sure no `PathToProp_Encoded` is ever
        // used in the store, otherwise you'll have to write a migration.
        JSON.stringify(p2)
      )
    );
    var import_propose = __toESM(require_propose());
    function didYouMean(str, dictionary, prepend = "Did you mean ", append = "?") {
      const p2 = (0, import_propose.default)(str, dictionary, {
        threshold: 0.7
      });
      if (p2) {
        return prepend + JSON.stringify(p2) + append;
      } else {
        return "";
      }
    }
    var TheatreError = class extends Error {
    };
    var InvalidArgumentError = class extends TheatreError {
    };
    var import_dataverse10 = require_dist();
    var import_dataverse11 = require_dist();
    var import_dataverse12 = require_dist();
    var import_dataverse13 = require_dist();
    function defer() {
      let resolve;
      let reject;
      const promise = new Promise((rs, rj) => {
        resolve = (v2) => {
          rs(v2);
          deferred.status = "resolved";
        };
        reject = (v2) => {
          rj(v2);
          deferred.status = "rejected";
        };
      });
      const deferred = {
        resolve,
        reject,
        promise,
        status: "pending"
      };
      return deferred;
    }
    var noop = () => {
    };
    var noop_default = noop;
    var import_dataverse7 = require_dist();
    var DefaultPlaybackController = class {
      constructor() {
        __publicField(this, "_stopPlayCallback", noop_default);
        __publicField(this, "_state", new import_dataverse7.Atom({
          position: 0,
          playing: false
        }));
        __publicField(this, "statePointer");
        this.statePointer = this._state.pointer;
      }
      destroy() {
      }
      pause() {
        this._stopPlayCallback();
        this.playing = false;
        this._stopPlayCallback = noop_default;
      }
      gotoPosition(time) {
        this._updatePositionInState(time);
      }
      _updatePositionInState(time) {
        this._state.setByPointer((p2) => p2.position, time);
      }
      getCurrentPosition() {
        return this._state.get().position;
      }
      get playing() {
        return this._state.get().playing;
      }
      set playing(playing) {
        this._state.setByPointer((p2) => p2.playing, playing);
      }
      play(iterationCount, range, rate, direction, ticker) {
        if (this.playing) {
          this.pause();
        }
        this.playing = true;
        const iterationLength = range[1] - range[0];
        {
          const startPos = this.getCurrentPosition();
          if (startPos < range[0] || startPos > range[1]) {
            if (direction === "normal" || direction === "alternate") {
              this._updatePositionInState(range[0]);
            } else if (direction === "reverse" || direction === "alternateReverse") {
              this._updatePositionInState(range[1]);
            }
          } else if (direction === "normal" || direction === "alternate") {
            if (startPos === range[1]) {
              this._updatePositionInState(range[0]);
            }
          } else {
            if (startPos === range[0]) {
              this._updatePositionInState(range[1]);
            }
          }
        }
        const deferred = defer();
        const initialTickerTime = ticker.time;
        const totalPlaybackLength = iterationLength * iterationCount;
        let initialElapsedPos = this.getCurrentPosition() - range[0];
        if (direction === "reverse" || direction === "alternateReverse") {
          initialElapsedPos = range[1] - this.getCurrentPosition();
        }
        const tick = (currentTickerTime) => {
          const elapsedTickerTime = Math.max(
            currentTickerTime - initialTickerTime,
            0
          );
          const elapsedTickerTimeInSeconds = elapsedTickerTime / 1e3;
          const elapsedPos = Math.min(
            elapsedTickerTimeInSeconds * rate + initialElapsedPos,
            totalPlaybackLength
          );
          if (elapsedPos !== totalPlaybackLength) {
            const iterationNumber = Math.floor(elapsedPos / iterationLength);
            let currentIterationPos = elapsedPos / iterationLength % 1 * iterationLength;
            if (direction !== "normal") {
              if (direction === "reverse") {
                currentIterationPos = iterationLength - currentIterationPos;
              } else {
                const isCurrentIterationNumberEven = iterationNumber % 2 === 0;
                if (direction === "alternate") {
                  if (!isCurrentIterationNumberEven) {
                    currentIterationPos = iterationLength - currentIterationPos;
                  }
                } else {
                  if (isCurrentIterationNumberEven) {
                    currentIterationPos = iterationLength - currentIterationPos;
                  }
                }
              }
            }
            this._updatePositionInState(currentIterationPos + range[0]);
            requestNextTick();
          } else {
            if (direction === "normal") {
              this._updatePositionInState(range[1]);
            } else if (direction === "reverse") {
              this._updatePositionInState(range[0]);
            } else {
              const isLastIterationEven = (iterationCount - 1) % 2 === 0;
              if (direction === "alternate") {
                if (isLastIterationEven) {
                  this._updatePositionInState(range[1]);
                } else {
                  this._updatePositionInState(range[0]);
                }
              } else {
                if (isLastIterationEven) {
                  this._updatePositionInState(range[0]);
                } else {
                  this._updatePositionInState(range[1]);
                }
              }
            }
            this.playing = false;
            deferred.resolve(true);
          }
        };
        this._stopPlayCallback = () => {
          ticker.offThisOrNextTick(tick);
          ticker.offNextTick(tick);
          if (this.playing)
            deferred.resolve(false);
        };
        const requestNextTick = () => ticker.onNextTick(tick);
        ticker.onThisOrNextTick(tick);
        return deferred.promise;
      }
      playDynamicRange(rangeD, ticker) {
        if (this.playing) {
          this.pause();
        }
        this.playing = true;
        const deferred = defer();
        const untapFromRangeD = rangeD.keepHot();
        void deferred.promise.then(untapFromRangeD, untapFromRangeD);
        let lastTickerTime = ticker.time;
        const tick = (currentTickerTime) => {
          const elapsedSinceLastTick = Math.max(
            currentTickerTime - lastTickerTime,
            0
          );
          lastTickerTime = currentTickerTime;
          const elapsedSinceLastTickInSeconds = elapsedSinceLastTick / 1e3;
          const lastPosition = this.getCurrentPosition();
          const range = rangeD.getValue();
          if (lastPosition < range[0] || lastPosition > range[1]) {
            this.gotoPosition(range[0]);
          } else {
            let newPosition = lastPosition + elapsedSinceLastTickInSeconds;
            if (newPosition > range[1]) {
              newPosition = range[0] + (newPosition - range[1]);
            }
            this.gotoPosition(newPosition);
          }
          requestNextTick();
        };
        this._stopPlayCallback = () => {
          ticker.offThisOrNextTick(tick);
          ticker.offNextTick(tick);
          deferred.resolve(false);
        };
        const requestNextTick = () => ticker.onNextTick(tick);
        ticker.onThisOrNextTick(tick);
        return deferred.promise;
      }
    };
    var import_dataverse8 = require_dist();
    var studioBundle = "__TheatreJS_StudioBundle";
    var coreBundle = "__TheatreJS_CoreBundle";
    var notifications = "__TheatreJS_Notifications";
    var createHandler = (type) => (...args) => {
      var _a;
      switch (type) {
        case "success": {
          logger_default.debug(args.slice(0, 2).join("\n"));
          break;
        }
        case "info": {
          logger_default.debug(args.slice(0, 2).join("\n"));
          break;
        }
        case "warning": {
          logger_default.warn(args.slice(0, 2).join("\n"));
          break;
        }
        case "error": {
        }
      }
      return typeof window !== "undefined" ? (
        // @ts-ignore
        (_a = window[notifications]) == null ? void 0 : _a.notify[type](...args)
      ) : void 0;
    };
    var notify = {
      warning: createHandler("warning"),
      success: createHandler("success"),
      info: createHandler("info"),
      error: createHandler("error")
    };
    if (typeof window !== "undefined") {
      window.addEventListener("error", (e2) => {
        notify.error(
          "An error occurred",
          "<pre>".concat(e2.message, "</pre>\n\nSee **console** for details.")
        );
      });
      window.addEventListener("unhandledrejection", (e2) => {
        notify.error(
          "An error occurred",
          "<pre>".concat(e2.reason, "</pre>\n\nSee **console** for details.")
        );
      });
    }
    var AudioPlaybackController = class {
      constructor(_decodedBuffer, _audioContext, _nodeDestination) {
        this._decodedBuffer = _decodedBuffer;
        this._audioContext = _audioContext;
        this._nodeDestination = _nodeDestination;
        __publicField(this, "_mainGain");
        __publicField(this, "_state", new import_dataverse8.Atom({
          position: 0,
          playing: false
        }));
        __publicField(this, "statePointer");
        __publicField(this, "_stopPlayCallback", noop_default);
        this.statePointer = this._state.pointer;
        this._mainGain = this._audioContext.createGain();
        this._mainGain.connect(this._nodeDestination);
      }
      playDynamicRange(rangeD, ticker) {
        const deferred = defer();
        if (this._playing)
          this.pause();
        this._playing = true;
        let stop = void 0;
        const play = () => {
          stop == null ? void 0 : stop();
          stop = this._loopInRange(rangeD.getValue(), ticker).stop;
        };
        const untapFromRangeD = rangeD.onStale(play);
        play();
        this._stopPlayCallback = () => {
          stop == null ? void 0 : stop();
          untapFromRangeD();
          deferred.resolve(false);
        };
        return deferred.promise;
      }
      _loopInRange(range, ticker) {
        const rate = 1;
        let startPos = this.getCurrentPosition();
        const iterationLength = range[1] - range[0];
        if (startPos < range[0] || startPos > range[1]) {
          this._updatePositionInState(range[0]);
        } else if (startPos === range[1]) {
          this._updatePositionInState(range[0]);
        }
        startPos = this.getCurrentPosition();
        const currentSource = this._audioContext.createBufferSource();
        currentSource.buffer = this._decodedBuffer;
        currentSource.connect(this._mainGain);
        currentSource.playbackRate.value = rate;
        currentSource.loop = true;
        currentSource.loopStart = range[0];
        currentSource.loopEnd = range[1];
        const initialTickerTime = ticker.time;
        let initialElapsedPos = startPos - range[0];
        currentSource.start(0, startPos);
        const tick = (currentTickerTime) => {
          const elapsedTickerTime = Math.max(
            currentTickerTime - initialTickerTime,
            0
          );
          const elapsedTickerTimeInSeconds = elapsedTickerTime / 1e3;
          const elapsedPos = elapsedTickerTimeInSeconds * rate + initialElapsedPos;
          let currentIterationPos = elapsedPos / iterationLength % 1 * iterationLength;
          this._updatePositionInState(currentIterationPos + range[0]);
          requestNextTick();
        };
        const requestNextTick = () => ticker.onNextTick(tick);
        ticker.onThisOrNextTick(tick);
        const stop = () => {
          currentSource.stop();
          currentSource.disconnect();
          ticker.offThisOrNextTick(tick);
          ticker.offNextTick(tick);
        };
        return { stop };
      }
      get _playing() {
        return this._state.get().playing;
      }
      set _playing(playing) {
        this._state.setByPointer((p2) => p2.playing, playing);
      }
      destroy() {
      }
      pause() {
        this._stopPlayCallback();
        this._playing = false;
        this._stopPlayCallback = noop_default;
      }
      gotoPosition(time) {
        this._updatePositionInState(time);
      }
      _updatePositionInState(time) {
        this._state.reduce((s2) => __spreadProps(__spreadValues({}, s2), { position: time }));
      }
      getCurrentPosition() {
        return this._state.get().position;
      }
      play(iterationCount, range, rate, direction, ticker) {
        if (this._playing) {
          this.pause();
        }
        this._playing = true;
        let startPos = this.getCurrentPosition();
        const iterationLength = range[1] - range[0];
        if (direction !== "normal") {
          throw new InvalidArgumentError(
            'Audio-controlled sequences can only be played in the "normal" direction. ' + "'".concat(direction, "' given.")
          );
        }
        if (startPos < range[0] || startPos > range[1]) {
          this._updatePositionInState(range[0]);
        } else if (startPos === range[1]) {
          this._updatePositionInState(range[0]);
        }
        startPos = this.getCurrentPosition();
        const deferred = defer();
        const currentSource = this._audioContext.createBufferSource();
        currentSource.buffer = this._decodedBuffer;
        currentSource.connect(this._mainGain);
        currentSource.playbackRate.value = rate;
        if (iterationCount > 1e3) {
          notify.warning(
            "Can't play sequences with audio more than 1000 times",
            "The sequence will still play, but only 1000 times. The `iterationCount: ".concat(iterationCount, "` provided to `sequence.play()`\nis too high for a sequence with audio.\n\nTo fix this, either set `iterationCount` to a lower value, or remove the audio from the sequence."),
            [
              {
                url: "https://www.theatrejs.com/docs/latest/manual/audio",
                title: "Using Audio"
              },
              {
                url: "https://www.theatrejs.com/docs/latest/api/core#sequence.attachaudio",
                title: "Audio API"
              }
            ]
          );
          iterationCount = 1e3;
        }
        if (iterationCount > 1) {
          currentSource.loop = true;
          currentSource.loopStart = range[0];
          currentSource.loopEnd = range[1];
        }
        const initialTickerTime = ticker.time;
        let initialElapsedPos = startPos - range[0];
        const totalPlaybackLength = iterationLength * iterationCount;
        currentSource.start(0, startPos, totalPlaybackLength - initialElapsedPos);
        const tick = (currentTickerTime) => {
          const elapsedTickerTime = Math.max(
            currentTickerTime - initialTickerTime,
            0
          );
          const elapsedTickerTimeInSeconds = elapsedTickerTime / 1e3;
          const elapsedPos = Math.min(
            elapsedTickerTimeInSeconds * rate + initialElapsedPos,
            totalPlaybackLength
          );
          if (elapsedPos !== totalPlaybackLength) {
            let currentIterationPos = elapsedPos / iterationLength % 1 * iterationLength;
            this._updatePositionInState(currentIterationPos + range[0]);
            requestNextTick();
          } else {
            this._updatePositionInState(range[1]);
            this._playing = false;
            cleanup();
            deferred.resolve(true);
          }
        };
        const cleanup = () => {
          currentSource.stop();
          currentSource.disconnect();
        };
        this._stopPlayCallback = () => {
          cleanup();
          ticker.offThisOrNextTick(tick);
          ticker.offNextTick(tick);
          if (this._playing)
            deferred.resolve(false);
        };
        const requestNextTick = () => ticker.onNextTick(tick);
        ticker.onThisOrNextTick(tick);
        return deferred.promise;
      }
    };
    var import_dataverse9 = require_dist();
    var lastDriverId = 0;
    function createRafDriver(conf) {
      var _a;
      const tick = (time) => {
        ticker.tick(time);
      };
      const ticker = new import_dataverse9.Ticker({
        onActive() {
          var _a2;
          (_a2 = conf == null ? void 0 : conf.start) == null ? void 0 : _a2.call(conf);
        },
        onDormant() {
          var _a2;
          (_a2 = conf == null ? void 0 : conf.stop) == null ? void 0 : _a2.call(conf);
        }
      });
      const driverPublicApi = {
        tick,
        id: lastDriverId++,
        name: (_a = conf == null ? void 0 : conf.name) != null ? _a : "CustomRafDriver-".concat(lastDriverId),
        type: "Theatre_RafDriver_PublicAPI"
      };
      const driverPrivateApi = {
        type: "Theatre_RafDriver_PrivateAPI",
        publicApi: driverPublicApi,
        ticker,
        start: conf == null ? void 0 : conf.start,
        stop: conf == null ? void 0 : conf.stop
      };
      setPrivateAPI(driverPublicApi, driverPrivateApi);
      return driverPublicApi;
    }
    function createBasicRafDriver() {
      let rafId = null;
      const start = () => {
        if (typeof window !== "undefined") {
          const onAnimationFrame = (t2) => {
            driver.tick(t2);
            rafId = window.requestAnimationFrame(onAnimationFrame);
          };
          rafId = window.requestAnimationFrame(onAnimationFrame);
        } else {
          driver.tick(0);
          setTimeout(() => driver.tick(1), 0);
        }
      };
      const stop = () => {
        if (typeof window !== "undefined") {
          if (rafId !== null) {
            window.cancelAnimationFrame(rafId);
          }
        } else {
        }
      };
      const driver = createRafDriver({ name: "DefaultCoreRafDriver", start, stop });
      return driver;
    }
    var coreRafDriver;
    function getCoreRafDriver() {
      if (!coreRafDriver) {
        setCoreRafDriver(createBasicRafDriver());
      }
      return coreRafDriver;
    }
    function getCoreTicker() {
      return getCoreRafDriver().ticker;
    }
    function setCoreRafDriver(driver) {
      if (coreRafDriver) {
        throw new Error("`setCoreRafDriver()` is already called.");
      }
      const driverPrivateApi = privateAPI(driver);
      coreRafDriver = driverPrivateApi;
    }
    var TheatreSequence = class {
      get type() {
        return "Theatre_Sequence_PublicAPI";
      }
      /**
       * @internal
       */
      constructor(sheet) {
        setPrivateAPI(this, sheet);
      }
      play(conf) {
        const priv = privateAPI(this);
        if (priv._project.isReady()) {
          const ticker = (conf == null ? void 0 : conf.rafDriver) ? privateAPI(conf.rafDriver).ticker : getCoreTicker();
          return priv.play(conf != null ? conf : {}, ticker);
        } else {
          if (true) {
            notify.warning(
              "Sequence can't be played",
              "You seem to have called `sequence.play()` before the project has finished loading.\n\nThis would **not** a problem in production when using `@theatre/core`, since Theatre.js loads instantly in core mode. However, when using `@theatre/studio`, it takes a few milliseconds for it to load your project's state, before which your sequences cannot start playing.\n\nTo fix this, simply defer calling `sequence.play()` until after the project is loaded, like this:\n\n```\nproject.ready.then(() => {\n  sequence.play()\n})\n```",
              [
                {
                  url: "https://www.theatrejs.com/docs/0.5/api/core#project.ready",
                  title: "Project.ready"
                }
              ]
            );
          }
          const d2 = defer();
          d2.resolve(true);
          return d2.promise;
        }
      }
      pause() {
        privateAPI(this).pause();
      }
      get position() {
        return privateAPI(this).position;
      }
      set position(position) {
        privateAPI(this).position = position;
      }
      __experimental_getKeyframes(prop) {
        return privateAPI(this).getKeyframesOfSimpleProp(prop);
      }
      async attachAudio(args) {
        const { audioContext, destinationNode, decodedBuffer, gainNode } = await resolveAudioBuffer(args);
        const playbackController = new AudioPlaybackController(
          decodedBuffer,
          audioContext,
          gainNode
        );
        privateAPI(this).replacePlaybackController(playbackController);
        return { audioContext, destinationNode, decodedBuffer, gainNode };
      }
      get pointer() {
        return privateAPI(this).pointer;
      }
    };
    async function resolveAudioBuffer(args) {
      function getAudioContext() {
        if (args.audioContext)
          return Promise.resolve(args.audioContext);
        const ctx = new AudioContext();
        if (ctx.state === "running")
          return Promise.resolve(ctx);
        if (typeof window === "undefined") {
          return Promise.resolve(ctx);
        }
        return new Promise((resolve) => {
          const listener = () => {
            ctx.resume().catch((err) => {
              console.error(err);
            });
          };
          const eventsToHookInto = [
            "mousedown",
            "keydown",
            "touchstart"
          ];
          const eventListenerOpts = { capture: true, passive: false };
          eventsToHookInto.forEach((eventName) => {
            window.addEventListener(eventName, listener, eventListenerOpts);
          });
          ctx.addEventListener("statechange", () => {
            if (ctx.state === "running") {
              eventsToHookInto.forEach((eventName) => {
                window.removeEventListener(eventName, listener, eventListenerOpts);
              });
              resolve(ctx);
            }
          });
        });
      }
      async function getAudioBuffer() {
        if (args.source instanceof AudioBuffer) {
          return args.source;
        }
        const decodedBufferDeferred = defer();
        if (typeof args.source !== "string") {
          throw new Error(
            "Error validating arguments to sequence.attachAudio(). args.source must either be a string or an instance of AudioBuffer."
          );
        }
        let fetchResponse;
        try {
          fetchResponse = await fetch(args.source);
        } catch (e2) {
          console.error(e2);
          throw new Error(
            "Could not fetch '".concat(args.source, "'. Network error logged above.")
          );
        }
        let arrayBuffer;
        try {
          arrayBuffer = await fetchResponse.arrayBuffer();
        } catch (e2) {
          console.error(e2);
          throw new Error("Could not read '".concat(args.source, "' as an arrayBuffer."));
        }
        const audioContext2 = await audioContextPromise;
        audioContext2.decodeAudioData(
          arrayBuffer,
          decodedBufferDeferred.resolve,
          decodedBufferDeferred.reject
        );
        let decodedBuffer2;
        try {
          decodedBuffer2 = await decodedBufferDeferred.promise;
        } catch (e2) {
          console.error(e2);
          throw new Error("Could not decode ".concat(args.source, " as an audio file."));
        }
        return decodedBuffer2;
      }
      const audioContextPromise = getAudioContext();
      const audioBufferPromise = getAudioBuffer();
      const [audioContext, decodedBuffer] = await Promise.all([
        audioContextPromise,
        audioBufferPromise
      ]);
      const destinationNode = args.destinationNode || audioContext.destination;
      const gainNode = audioContext.createGain();
      gainNode.connect(destinationNode);
      return {
        audioContext,
        decodedBuffer,
        gainNode,
        destinationNode
      };
    }
    var isProject = typeAsserter("Theatre_Project");
    var isSheet = typeAsserter("Theatre_Sheet");
    var isSheetTemplate = typeAsserter(
      "Theatre_SheetTemplate"
    );
    var isSheetObject = typeAsserter("Theatre_SheetObject");
    var isSheetObjectTemplate = typeAsserter(
      "Theatre_SheetObjectTemplate"
    );
    var isProjectPublicAPI = typeAsserter(
      "Theatre_Project_PublicAPI"
    );
    var isSheetPublicAPI = typeAsserter("Theatre_Sheet_PublicAPI");
    var isSheetObjectPublicAPI = typeAsserter(
      "Theatre_SheetObject_PublicAPI"
    );
    function typeAsserter(t2) {
      return (v2) => typeof v2 === "object" && !!v2 && v2.type === t2;
    }
    var possibleDirections = [
      "normal",
      "reverse",
      "alternate",
      "alternateReverse"
    ];
    var Sequence = class {
      constructor(_project, _sheet, _lengthD, _subUnitsPerUnitD, playbackController) {
        this._project = _project;
        this._sheet = _sheet;
        this._lengthD = _lengthD;
        this._subUnitsPerUnitD = _subUnitsPerUnitD;
        __publicField(this, "address");
        __publicField(this, "publicApi");
        __publicField(this, "_playbackControllerBox");
        __publicField(this, "_prismOfStatePointer");
        __publicField(this, "_positionD");
        __publicField(this, "_positionFormatterD");
        __publicField(this, "_playableRangeD");
        __publicField(this, "pointer", (0, import_dataverse12.pointer)({ root: this, path: [] }));
        __publicField(this, "$$isPointerToPrismProvider", true);
        __publicField(this, "_logger");
        __publicField(this, "closestGridPosition", (posInUnitSpace) => {
          const subUnitsPerUnit = this.subUnitsPerUnit;
          const gridLength = 1 / subUnitsPerUnit;
          return parseFloat(
            (Math.round(posInUnitSpace / gridLength) * gridLength).toFixed(3)
          );
        });
        this._logger = _project._logger.named("Sheet", _sheet.address.sheetId).named("Instance", _sheet.address.sheetInstanceId);
        this.address = __spreadProps(__spreadValues({}, this._sheet.address), { sequenceName: "default" });
        this.publicApi = new TheatreSequence(this);
        this._playbackControllerBox = new import_dataverse11.Atom(
          playbackController != null ? playbackController : new DefaultPlaybackController()
        );
        this._prismOfStatePointer = (0, import_dataverse13.prism)(
          () => this._playbackControllerBox.prism.getValue().statePointer
        );
        this._positionD = (0, import_dataverse13.prism)(() => {
          const statePointer = this._prismOfStatePointer.getValue();
          return (0, import_dataverse13.val)(statePointer.position);
        });
        this._positionFormatterD = (0, import_dataverse13.prism)(() => {
          const subUnitsPerUnit = (0, import_dataverse13.val)(this._subUnitsPerUnitD);
          return new TimeBasedPositionFormatter(subUnitsPerUnit);
        });
      }
      pointerToPrism(pointer3) {
        const { path } = (0, import_dataverse10.getPointerParts)(pointer3);
        if (path.length === 0) {
          return (0, import_dataverse13.prism)(() => ({
            length: (0, import_dataverse13.val)(this.pointer.length),
            playing: (0, import_dataverse13.val)(this.pointer.playing),
            position: (0, import_dataverse13.val)(this.pointer.position)
          }));
        }
        if (path.length > 1) {
          return (0, import_dataverse13.prism)(() => void 0);
        }
        const [prop] = path;
        if (prop === "length") {
          return this._lengthD;
        } else if (prop === "position") {
          return this._positionD;
        } else if (prop === "playing") {
          return (0, import_dataverse13.prism)(() => {
            return (0, import_dataverse13.val)(this._prismOfStatePointer.getValue().playing);
          });
        } else {
          return (0, import_dataverse13.prism)(() => void 0);
        }
      }
      /**
       * Takes a pointer to a property of a SheetObject and returns the keyframes of that property.
       *
       * Theoretically, this method can be called from inside a prism so it can be reactive.
       */
      getKeyframesOfSimpleProp(prop) {
        const { path, root: root2 } = (0, import_dataverse10.getPointerParts)(prop);
        if (!isSheetObject(root2)) {
          throw new InvalidArgumentError(
            "Argument prop must be a pointer to a SheetObject property"
          );
        }
        const trackP = (0, import_dataverse13.val)(
          this._project.pointers.historic.sheetsById[this._sheet.address.sheetId].sequence.tracksByObject[root2.address.objectKey]
        );
        if (!trackP) {
          return [];
        }
        const { trackData, trackIdByPropPath } = trackP;
        const objectAddress = encodePathToProp(path);
        const id = trackIdByPropPath[objectAddress];
        if (!id) {
          return [];
        }
        const track = trackData[id];
        if (!track) {
          return [];
        }
        return track.keyframes;
      }
      get positionFormatter() {
        return this._positionFormatterD.getValue();
      }
      get prismOfStatePointer() {
        return this._prismOfStatePointer;
      }
      get length() {
        return this._lengthD.getValue();
      }
      get positionPrism() {
        return this._positionD;
      }
      get position() {
        return this._playbackControllerBox.get().getCurrentPosition();
      }
      get subUnitsPerUnit() {
        return this._subUnitsPerUnitD.getValue();
      }
      get positionSnappedToGrid() {
        return this.closestGridPosition(this.position);
      }
      set position(requestedPosition) {
        let position = requestedPosition;
        this.pause();
        if (true) {
          if (typeof position !== "number") {
            console.error(
              "value t in sequence.position = t must be a number. ".concat(typeof position, " given")
            );
            position = 0;
          }
          if (position < 0) {
            console.error(
              "sequence.position must be a positive number. ".concat(position, " given")
            );
            position = 0;
          }
        }
        if (position > this.length) {
          position = this.length;
        }
        const dur = this.length;
        this._playbackControllerBox.get().gotoPosition(position > dur ? dur : position);
      }
      getDurationCold() {
        return this._lengthD.getValue();
      }
      get playing() {
        return (0, import_dataverse13.val)(this._playbackControllerBox.get().statePointer.playing);
      }
      _makeRangeFromSequenceTemplate() {
        return (0, import_dataverse13.prism)(() => {
          return [0, (0, import_dataverse13.val)(this._lengthD)];
        });
      }
      /**
       * Controls the playback within a range. Repeats infinitely unless stopped.
       *
       * @remarks
       *   One use case for this is to play the playback within the focus range.
       *
       * @param rangeD - The prism that contains the range that will be used for the playback
       *
       * @returns  a promise that gets rejected if the playback stopped for whatever reason
       *
       */
      playDynamicRange(rangeD, ticker) {
        return this._playbackControllerBox.get().playDynamicRange(rangeD, ticker);
      }
      async play(conf, ticker) {
        const sequenceDuration = this.length;
        const range = conf && conf.range ? conf.range : [0, sequenceDuration];
        if (true) {
          if (typeof range[0] !== "number" || range[0] < 0) {
            throw new InvalidArgumentError(
              "Argument conf.range[0] in sequence.play(conf) must be a positive number. ".concat(JSON.stringify(
                range[0]
              ), " given.")
            );
          }
          if (range[0] >= sequenceDuration) {
            throw new InvalidArgumentError(
              "Argument conf.range[0] in sequence.play(conf) cannot be longer than the duration of the sequence, which is ".concat(sequenceDuration, "s. ").concat(JSON.stringify(
                range[0]
              ), " given.")
            );
          }
          if (typeof range[1] !== "number" || range[1] <= 0) {
            throw new InvalidArgumentError(
              "Argument conf.range[1] in sequence.play(conf) must be a number larger than zero. ".concat(JSON.stringify(
                range[1]
              ), " given.")
            );
          }
          if (range[1] > sequenceDuration) {
            notify.warning(
              "Couldn't play sequence in given range",
              "Your animation will still play until the end of the sequence, however the argument `conf.range[1]` given in `sequence.play(conf)` (".concat(JSON.stringify(
                range[1]
              ), "s) is longer than the duration of the sequence (").concat(sequenceDuration, "s).\n\nTo fix this, either set `conf.range[1]` to be less the duration of the sequence, or adjust the sequence duration in the UI."),
              [
                {
                  url: "https://www.theatrejs.com/docs/latest/manual/sequences",
                  title: "Sequences"
                },
                {
                  url: "https://www.theatrejs.com/docs/latest/manual/sequences",
                  title: "Playback API"
                }
              ]
            );
            range[1] = sequenceDuration;
          }
          if (range[1] <= range[0]) {
            throw new InvalidArgumentError(
              "Argument conf.range[1] in sequence.play(conf) must be larger than conf.range[0]. ".concat(JSON.stringify(
                range
              ), " given.")
            );
          }
        }
        const iterationCount = conf && typeof conf.iterationCount === "number" ? conf.iterationCount : 1;
        if (true) {
          if (!(Number.isInteger(iterationCount) && iterationCount > 0) && iterationCount !== Infinity) {
            throw new InvalidArgumentError(
              "Argument conf.iterationCount in sequence.play(conf) must be an integer larger than 0. ".concat(JSON.stringify(
                iterationCount
              ), " given.")
            );
          }
        }
        const rate = conf && typeof conf.rate !== "undefined" ? conf.rate : 1;
        if (true) {
          if (typeof rate !== "number" || rate === 0) {
            throw new InvalidArgumentError(
              "Argument conf.rate in sequence.play(conf) must be a number larger than 0. ".concat(JSON.stringify(
                rate
              ), " given.")
            );
          }
          if (rate < 0) {
            throw new InvalidArgumentError(
              "Argument conf.rate in sequence.play(conf) must be a number larger than 0. ".concat(JSON.stringify(
                rate
              ), " given. If you want the animation to play backwards, try setting conf.direction to 'reverse' or 'alternateReverse'.")
            );
          }
        }
        const direction = conf && conf.direction ? conf.direction : "normal";
        if (true) {
          if (possibleDirections.indexOf(direction) === -1) {
            throw new InvalidArgumentError(
              "Argument conf.direction in sequence.play(conf) must be one of ".concat(JSON.stringify(
                possibleDirections
              ), ". ").concat(JSON.stringify(direction), " given. ").concat(didYouMean(
                direction,
                possibleDirections
              ))
            );
          }
        }
        return await this._play(
          iterationCount,
          [range[0], range[1]],
          rate,
          direction,
          ticker
        );
      }
      _play(iterationCount, range, rate, direction, ticker) {
        return this._playbackControllerBox.get().play(iterationCount, range, rate, direction, ticker);
      }
      pause() {
        this._playbackControllerBox.get().pause();
      }
      replacePlaybackController(playbackController) {
        this.pause();
        const oldController = this._playbackControllerBox.get();
        this._playbackControllerBox.set(playbackController);
        const time = oldController.getCurrentPosition();
        oldController.destroy();
        playbackController.gotoPosition(time);
      }
    };
    var TimeBasedPositionFormatter = class {
      constructor(_fps) {
        this._fps = _fps;
      }
      formatSubUnitForGrid(posInUnitSpace) {
        const subSecondPos = posInUnitSpace % 1;
        const frame = 1 / this._fps;
        const frames = Math.round(subSecondPos / frame);
        return frames + "f";
      }
      formatFullUnitForGrid(posInUnitSpace) {
        let p2 = posInUnitSpace;
        let s2 = "";
        if (p2 >= hour) {
          const hours = Math.floor(p2 / hour);
          s2 += hours + "h";
          p2 = p2 % hour;
        }
        if (p2 >= minute) {
          const minutes = Math.floor(p2 / minute);
          s2 += minutes + "m";
          p2 = p2 % minute;
        }
        if (p2 >= second) {
          const seconds = Math.floor(p2 / second);
          s2 += seconds + "s";
          p2 = p2 % second;
        }
        const frame = 1 / this._fps;
        if (p2 >= frame) {
          const frames = Math.floor(p2 / frame);
          s2 += frames + "f";
          p2 = p2 % frame;
        }
        return s2.length === 0 ? "0s" : s2;
      }
      formatForPlayhead(posInUnitSpace) {
        let p2 = posInUnitSpace;
        let s2 = "";
        if (p2 >= hour) {
          const hours = Math.floor(p2 / hour);
          s2 += padStart_default(hours.toString(), 2, "0") + "h";
          p2 = p2 % hour;
        }
        if (p2 >= minute) {
          const minutes = Math.floor(p2 / minute);
          s2 += padStart_default(minutes.toString(), 2, "0") + "m";
          p2 = p2 % minute;
        } else if (s2.length > 0) {
          s2 += "00m";
        }
        if (p2 >= second) {
          const seconds = Math.floor(p2 / second);
          s2 += padStart_default(seconds.toString(), 2, "0") + "s";
          p2 = p2 % second;
        } else {
          s2 += "00s";
        }
        const frameLength = 1 / this._fps;
        if (p2 >= frameLength) {
          const frames = Math.round(p2 / frameLength);
          s2 += padStart_default(frames.toString(), 2, "0") + "f";
          p2 = p2 % frameLength;
        } else if (p2 / frameLength > 0.98) {
          const frames = 1;
          s2 += padStart_default(frames.toString(), 2, "0") + "f";
          p2 = p2 % frameLength;
        } else {
          s2 += "00f";
        }
        return s2.length === 0 ? "00s00f" : s2;
      }
      formatBasic(posInUnitSpace) {
        return posInUnitSpace.toFixed(2) + "s";
      }
    };
    var second = 1;
    var minute = second * 60;
    var hour = minute * 60;
    var propTypes_exports = {};
    __export(propTypes_exports, {
      boolean: () => boolean,
      compound: () => compound,
      file: () => file,
      image: () => image,
      number: () => number,
      rgba: () => rgba,
      string: () => string,
      stringLiteral: () => stringLiteral
    });
    function ellipsify(str, maxLength) {
      if (str.length <= maxLength)
        return str;
      return str.substr(0, maxLength - 3) + "...";
    }
    var userReadableTypeOfValue = (v2) => {
      if (typeof v2 === "string") {
        return 'string("'.concat(ellipsify(v2, 10), '")');
      } else if (typeof v2 === "number") {
        return "number(".concat(ellipsify(String(v2), 10), ")");
      } else if (v2 === null) {
        return "null";
      } else if (v2 === void 0) {
        return "undefined";
      } else if (typeof v2 === "boolean") {
        return String(v2);
      } else if (Array.isArray(v2)) {
        return "array";
      } else if (typeof v2 === "object") {
        return "object";
      } else {
        return "unknown";
      }
    };
    var userReadableTypeOfValue_default = userReadableTypeOfValue;
    function rgba2hex(rgba2, {
      /** Alpha is usually an optional value for most hex inputs, so if it's opaque, we can omit its value. */
      removeAlphaIfOpaque = false
    } = {}) {
      const alpha = (rgba2.a * 255 | 1 << 8).toString(16).slice(1);
      const hex = (rgba2.r * 255 | 1 << 8).toString(16).slice(1) + (rgba2.g * 255 | 1 << 8).toString(16).slice(1) + (rgba2.b * 255 | 1 << 8).toString(16).slice(1) + (removeAlphaIfOpaque && alpha === "ff" ? "" : alpha);
      return "#".concat(hex);
    }
    function decorateRgba(rgba2) {
      return __spreadProps(__spreadValues({}, rgba2), {
        toString() {
          return rgba2hex(this, { removeAlphaIfOpaque: true });
        }
      });
    }
    function clampRgba(rgba2) {
      return Object.fromEntries(
        Object.entries(rgba2).map(([key, value]) => [key, clamp_default(value, 0, 1)])
      );
    }
    function linearSrgbToSrgb(rgba2) {
      function compress(x2) {
        if (x2 >= 31308e-7)
          return 1.055 * x2 ** (1 / 2.4) - 0.055;
        else
          return 12.92 * x2;
      }
      return clampRgba({
        r: compress(rgba2.r),
        g: compress(rgba2.g),
        b: compress(rgba2.b),
        a: rgba2.a
      });
    }
    function srgbToLinearSrgb(rgba2) {
      function expand(x2) {
        if (x2 >= 0.04045)
          return ((x2 + 0.055) / (1 + 0.055)) ** 2.4;
        else
          return x2 / 12.92;
      }
      return {
        r: expand(rgba2.r),
        g: expand(rgba2.g),
        b: expand(rgba2.b),
        a: rgba2.a
      };
    }
    function linearSrgbToOklab(rgba2) {
      let l2 = 0.4122214708 * rgba2.r + 0.5363325363 * rgba2.g + 0.0514459929 * rgba2.b;
      let m = 0.2119034982 * rgba2.r + 0.6806995451 * rgba2.g + 0.1073969566 * rgba2.b;
      let s2 = 0.0883024619 * rgba2.r + 0.2817188376 * rgba2.g + 0.6299787005 * rgba2.b;
      let l_ = Math.cbrt(l2);
      let m_ = Math.cbrt(m);
      let s_ = Math.cbrt(s2);
      return {
        L: 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
        a: 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
        b: 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
        alpha: rgba2.a
      };
    }
    function oklabToLinearSrgb(laba) {
      let l_ = laba.L + 0.3963377774 * laba.a + 0.2158037573 * laba.b;
      let m_ = laba.L - 0.1055613458 * laba.a - 0.0638541728 * laba.b;
      let s_ = laba.L - 0.0894841775 * laba.a - 1.291485548 * laba.b;
      let l2 = l_ * l_ * l_;
      let m = m_ * m_ * m_;
      let s2 = s_ * s_ * s_;
      return {
        r: 4.0767416621 * l2 - 3.3077115913 * m + 0.2309699292 * s2,
        g: -1.2684380046 * l2 + 2.6097574011 * m - 0.3413193965 * s2,
        b: -0.0041960863 * l2 - 0.7034186147 * m + 1.707614701 * s2,
        a: laba.alpha
      };
    }
    var propTypeSymbol = Symbol("TheatrePropType_Basic");
    function isLonghandPropType(t2) {
      return typeof t2 === "object" && !!t2 && t2[propTypeSymbol] === "TheatrePropType";
    }
    function toLonghandProp(p2) {
      if (typeof p2 === "number") {
        return number(p2);
      } else if (typeof p2 === "boolean") {
        return boolean(p2);
      } else if (typeof p2 === "string") {
        return string(p2);
      } else if (typeof p2 === "object" && !!p2) {
        if (isLonghandPropType(p2))
          return p2;
        if (isPlainObject_default(p2)) {
          return compound(p2);
        } else {
          throw new InvalidArgumentError(
            "This value is not a valid prop type: ".concat(userReadableTypeOfValue_default(p2))
          );
        }
      } else {
        throw new InvalidArgumentError(
          "This value is not a valid prop type: ".concat(userReadableTypeOfValue_default(p2))
        );
      }
    }
    function sanitizeCompoundProps(props) {
      const sanitizedProps = {};
      if (true) {
        if (typeof props !== "object" || !props) {
          throw new InvalidArgumentError(
            "t.compound() expects an object, like: {x: 10}. ".concat(userReadableTypeOfValue_default(
              props
            ), " given.")
          );
        }
      }
      for (const key of Object.keys(props)) {
        if (true) {
          if (typeof key !== "string") {
            throw new InvalidArgumentError(
              "t.compound()'s keys must be all strings. ".concat(userReadableTypeOfValue_default(
                key
              ), " given.")
            );
          } else if (key.length === 0 || !key.match(/^\w+$/)) {
            throw new InvalidArgumentError(
              "compound key ".concat(userReadableTypeOfValue_default(
                key
              ), " is invalid. The keys must be alphanumeric and start with a letter.")
            );
          } else if (key.length > 64) {
            throw new InvalidArgumentError(
              "compound key ".concat(userReadableTypeOfValue_default(key), " is too long.")
            );
          }
        }
        const val8 = props[key];
        if (isLonghandPropType(val8)) {
          sanitizedProps[key] = val8;
        } else {
          sanitizedProps[key] = toLonghandProp(val8);
        }
      }
      return sanitizedProps;
    }
    var validateCommonOpts = (fnCallSignature, opts) => {
      if (true) {
        if (opts === void 0)
          return;
        if (typeof opts !== "object" || opts === null) {
          throw new Error(
            "opts in ".concat(fnCallSignature, " must either be undefined or an object.")
          );
        }
        if (Object.prototype.hasOwnProperty.call(opts, "label")) {
          const { label } = opts;
          if (typeof label !== "string") {
            throw new Error(
              "opts.label in ".concat(fnCallSignature, " should be a string. ").concat(userReadableTypeOfValue_default(
                label
              ), " given.")
            );
          }
          if (label.trim().length !== label.length) {
            throw new Error(
              "opts.label in ".concat(fnCallSignature, ' should not start/end with whitespace. "').concat(label, '" given.')
            );
          }
          if (label.length === 0) {
            throw new Error(
              "opts.label in ".concat(fnCallSignature, " should not be an empty string. If you wish to have no label, remove opts.label from opts.")
            );
          }
        }
      }
    };
    var compound = (props, opts = {}) => {
      validateCommonOpts("t.compound(props, opts)", opts);
      const sanitizedProps = sanitizeCompoundProps(props);
      const deserializationCache = /* @__PURE__ */ new WeakMap();
      const config = {
        type: "compound",
        props: sanitizedProps,
        valueType: null,
        [propTypeSymbol]: "TheatrePropType",
        label: opts.label,
        default: mapValues_default(sanitizedProps, (p2) => p2.default),
        deserializeAndSanitize: (json) => {
          if (typeof json !== "object" || !json)
            return void 0;
          if (deserializationCache.has(json)) {
            return deserializationCache.get(json);
          }
          const deserialized = {};
          let atLeastOnePropWasDeserialized = false;
          for (const [key, propConfig] of Object.entries(sanitizedProps)) {
            if (Object.prototype.hasOwnProperty.call(json, key)) {
              const deserializedSub = propConfig.deserializeAndSanitize(
                json[key]
              );
              if (deserializedSub != null) {
                atLeastOnePropWasDeserialized = true;
                deserialized[key] = deserializedSub;
              }
            }
          }
          deserializationCache.set(json, deserialized);
          if (atLeastOnePropWasDeserialized) {
            return deserialized;
          }
        }
      };
      return config;
    };
    var file = (defaultValue, opts = {}) => {
      if (true) {
        validateCommonOpts("t.file(defaultValue, opts)", opts);
      }
      const interpolate = (left, right, progression) => {
        var _a;
        const stringInterpolate = (_a = opts.interpolate) != null ? _a : leftInterpolate;
        return {
          type: "file",
          id: stringInterpolate(left.id, right.id, progression)
        };
      };
      return {
        type: "file",
        default: { type: "file", id: defaultValue },
        valueType: null,
        [propTypeSymbol]: "TheatrePropType",
        label: opts.label,
        interpolate,
        deserializeAndSanitize: _ensureFile
      };
    };
    var _ensureFile = (val8) => {
      if (!val8)
        return void 0;
      let valid = true;
      if (typeof val8.id !== "string" && ![null, void 0].includes(val8.id)) {
        valid = false;
      }
      if (val8.type !== "file")
        valid = false;
      if (!valid)
        return void 0;
      return val8;
    };
    var image = (defaultValue, opts = {}) => {
      if (true) {
        validateCommonOpts("t.image(defaultValue, opts)", opts);
      }
      const interpolate = (left, right, progression) => {
        var _a;
        const stringInterpolate = (_a = opts.interpolate) != null ? _a : leftInterpolate;
        return {
          type: "image",
          id: stringInterpolate(left.id, right.id, progression)
        };
      };
      return {
        type: "image",
        default: { type: "image", id: defaultValue },
        valueType: null,
        [propTypeSymbol]: "TheatrePropType",
        label: opts.label,
        interpolate,
        deserializeAndSanitize: _ensureImage
      };
    };
    var _ensureImage = (val8) => {
      if (!val8)
        return void 0;
      let valid = true;
      if (typeof val8.id !== "string" && ![null, void 0].includes(val8.id)) {
        valid = false;
      }
      if (val8.type !== "image")
        valid = false;
      if (!valid)
        return void 0;
      return val8;
    };
    var number = (defaultValue, opts = {}) => {
      var _a;
      if (true) {
        validateCommonOpts("t.number(defaultValue, opts)", opts);
        if (typeof defaultValue !== "number" || !isFinite(defaultValue)) {
          throw new Error(
            "Argument defaultValue in t.number(defaultValue) must be a number. ".concat(userReadableTypeOfValue_default(
              defaultValue
            ), " given.")
          );
        }
        if (typeof opts === "object" && opts !== null) {
          if (Object.prototype.hasOwnProperty.call(opts, "range")) {
            if (!Array.isArray(opts.range)) {
              throw new Error(
                "opts.range in t.number(defaultValue, opts) must be a tuple of two numbers. ".concat(userReadableTypeOfValue_default(
                  opts.range
                ), " given.")
              );
            }
            if (opts.range.length !== 2) {
              throw new Error(
                "opts.range in t.number(defaultValue, opts) must have two elements. ".concat(opts.range.length, " given.")
              );
            }
            if (!opts.range.every((n2) => typeof n2 === "number" && !isNaN(n2))) {
              throw new Error(
                "opts.range in t.number(defaultValue, opts) must be a tuple of two numbers."
              );
            }
            if (opts.range[0] >= opts.range[1]) {
              throw new Error(
                "opts.range[0] in t.number(defaultValue, opts) must be smaller than opts.range[1]. Given: ".concat(JSON.stringify(
                  opts.range
                ))
              );
            }
          }
          if (Object.prototype.hasOwnProperty.call(opts, "nudgeMultiplier")) {
            if (typeof opts.nudgeMultiplier !== "number" || !isFinite(opts.nudgeMultiplier)) {
              throw new Error(
                "opts.nudgeMultiplier in t.number(defaultValue, opts) must be a finite number. ".concat(userReadableTypeOfValue_default(
                  opts.nudgeMultiplier
                ), " given.")
              );
            }
          }
          if (Object.prototype.hasOwnProperty.call(opts, "nudgeFn")) {
            if (typeof opts.nudgeFn !== "function") {
              throw new Error(
                "opts.nudgeFn in t.number(defaultValue, opts) must be a function. ".concat(userReadableTypeOfValue_default(
                  opts.nudgeFn
                ), " given.")
              );
            }
          }
        }
      }
      return __spreadProps(__spreadValues({
        type: "number",
        valueType: 0,
        default: defaultValue,
        [propTypeSymbol]: "TheatrePropType"
      }, opts ? opts : {}), {
        label: opts.label,
        nudgeFn: (_a = opts.nudgeFn) != null ? _a : defaultNumberNudgeFn,
        nudgeMultiplier: typeof opts.nudgeMultiplier === "number" ? opts.nudgeMultiplier : void 0,
        interpolate: _interpolateNumber,
        deserializeAndSanitize: numberDeserializer(opts.range)
      });
    };
    var numberDeserializer = (range) => range ? (json) => {
      if (!(typeof json === "number" && isFinite(json)))
        return void 0;
      return clamp_default(json, range[0], range[1]);
    } : _ensureNumber;
    var _ensureNumber = (value) => typeof value === "number" && isFinite(value) ? value : void 0;
    var _interpolateNumber = (left, right, progression) => {
      return left + progression * (right - left);
    };
    var rgba = (defaultValue = { r: 0, g: 0, b: 0, a: 1 }, opts = {}) => {
      if (true) {
        validateCommonOpts("t.rgba(defaultValue, opts)", opts);
        let valid = true;
        for (const p2 of ["r", "g", "b", "a"]) {
          if (!Object.prototype.hasOwnProperty.call(defaultValue, p2) || typeof defaultValue[p2] !== "number") {
            valid = false;
          }
        }
        if (!valid) {
          throw new Error(
            "Argument defaultValue in t.rgba(defaultValue) must be of the shape { r: number; g: number, b: number, a: number; }."
          );
        }
      }
      const sanitized = {};
      for (const component of ["r", "g", "b", "a"]) {
        ;
        sanitized[component] = Math.min(
          Math.max(defaultValue[component], 0),
          1
        );
      }
      return {
        type: "rgba",
        valueType: null,
        default: decorateRgba(sanitized),
        [propTypeSymbol]: "TheatrePropType",
        label: opts.label,
        interpolate: _interpolateRgba,
        deserializeAndSanitize: _sanitizeRgba
      };
    };
    var _sanitizeRgba = (val8) => {
      if (!val8)
        return void 0;
      let valid = true;
      for (const c2 of ["r", "g", "b", "a"]) {
        if (!Object.prototype.hasOwnProperty.call(val8, c2) || typeof val8[c2] !== "number") {
          valid = false;
        }
      }
      if (!valid)
        return void 0;
      const sanitized = {};
      for (const c2 of ["r", "g", "b", "a"]) {
        ;
        sanitized[c2] = Math.min(
          Math.max(val8[c2], 0),
          1
        );
      }
      return decorateRgba(sanitized);
    };
    var _interpolateRgba = (left, right, progression) => {
      const leftLab = linearSrgbToOklab(srgbToLinearSrgb(left));
      const rightLab = linearSrgbToOklab(srgbToLinearSrgb(right));
      const interpolatedLab = {
        L: (1 - progression) * leftLab.L + progression * rightLab.L,
        a: (1 - progression) * leftLab.a + progression * rightLab.a,
        b: (1 - progression) * leftLab.b + progression * rightLab.b,
        alpha: (1 - progression) * leftLab.alpha + progression * rightLab.alpha
      };
      const interpolatedRgba = linearSrgbToSrgb(oklabToLinearSrgb(interpolatedLab));
      return decorateRgba(interpolatedRgba);
    };
    var boolean = (defaultValue, opts = {}) => {
      var _a;
      if (true) {
        validateCommonOpts("t.boolean(defaultValue, opts)", opts);
        if (typeof defaultValue !== "boolean") {
          throw new Error(
            "defaultValue in t.boolean(defaultValue) must be a boolean. ".concat(userReadableTypeOfValue_default(
              defaultValue
            ), " given.")
          );
        }
      }
      return {
        type: "boolean",
        default: defaultValue,
        valueType: null,
        [propTypeSymbol]: "TheatrePropType",
        label: opts.label,
        interpolate: (_a = opts.interpolate) != null ? _a : leftInterpolate,
        deserializeAndSanitize: _ensureBoolean
      };
    };
    var _ensureBoolean = (val8) => {
      return typeof val8 === "boolean" ? val8 : void 0;
    };
    function leftInterpolate(left) {
      return left;
    }
    var string = (defaultValue, opts = {}) => {
      var _a;
      if (true) {
        validateCommonOpts("t.string(defaultValue, opts)", opts);
        if (typeof defaultValue !== "string") {
          throw new Error(
            "defaultValue in t.string(defaultValue) must be a string. ".concat(userReadableTypeOfValue_default(
              defaultValue
            ), " given.")
          );
        }
      }
      return {
        type: "string",
        default: defaultValue,
        valueType: null,
        [propTypeSymbol]: "TheatrePropType",
        label: opts.label,
        interpolate: (_a = opts.interpolate) != null ? _a : leftInterpolate,
        deserializeAndSanitize: _ensureString
      };
    };
    function _ensureString(s2) {
      return typeof s2 === "string" ? s2 : void 0;
    }
    function stringLiteral(defaultValue, valuesAndLabels, opts = {}) {
      var _a, _b;
      return {
        type: "stringLiteral",
        default: defaultValue,
        valuesAndLabels: __spreadValues({}, valuesAndLabels),
        [propTypeSymbol]: "TheatrePropType",
        valueType: null,
        as: (_a = opts.as) != null ? _a : "menu",
        label: opts.label,
        interpolate: (_b = opts.interpolate) != null ? _b : leftInterpolate,
        deserializeAndSanitize(json) {
          if (typeof json !== "string")
            return void 0;
          if (Object.prototype.hasOwnProperty.call(valuesAndLabels, json)) {
            return json;
          } else {
            return void 0;
          }
        }
      };
    }
    var defaultNumberNudgeFn = ({
      config,
      deltaX,
      deltaFraction,
      magnitude
    }) => {
      var _a;
      const { range } = config;
      if (!config.nudgeMultiplier && range && !range.includes(Infinity) && !range.includes(-Infinity)) {
        return deltaFraction * (range[1] - range[0]) * magnitude;
      }
      return deltaX * magnitude * ((_a = config.nudgeMultiplier) != null ? _a : 1);
    };
    var normalizeSlashedPath = (p2) => p2.replace(/^[\s\/]*/, "").replace(/[\s\/]*$/, "").replace(/\s*\/\s*/g, " / ");
    var getValidationErrorsOfSlashedPath = (p2) => {
      if (typeof p2 !== "string")
        return "it is not a string. (it is a ".concat(typeof p2, ")");
      const components = p2.split(/\//);
      if (components.length === 0)
        return "it is empty.";
      for (let i2 = 0; i2 < components.length; i2++) {
        const component = components[i2].trim();
        if (component.length === 0)
          return "the component #".concat(i2 + 1, " is empty.");
        if (component.length > 64)
          return "the component '".concat(component, "' must have 64 characters or less.");
      }
    };
    function validateAndSanitiseSlashedPathOrThrow(unsanitisedPath, fnName) {
      const sanitisedPath = normalizeSlashedPath(unsanitisedPath);
      if (false) {
        return sanitisedPath;
      }
      const validation = getValidationErrorsOfSlashedPath(sanitisedPath);
      if (validation) {
        throw new InvalidArgumentError(
          "The path in ".concat(fnName, "(").concat(typeof unsanitisedPath === "string" ? '"'.concat(unsanitisedPath, '"') : "", ") is invalid because ").concat(validation)
        );
      }
      if (unsanitisedPath !== sanitisedPath) {
        notify.warning(
          "Invalid path provided to object",
          "The path in `".concat(fnName, '("').concat(unsanitisedPath, '")` was sanitized to `"').concat(sanitisedPath, '"`.\n\n') + "Please replace the path with the sanitized one, otherwise it will likely break in the future.",
          [
            {
              url: "https://www.theatrejs.com/docs/latest/manual/objects#creating-sheet-objects",
              title: "Sheet Objects"
            },
            {
              url: "https://www.theatrejs.com/docs/latest/api/core#sheet.object",
              title: "API"
            }
          ]
        );
      }
      return sanitisedPath;
    }
    var import_fast_deep_equal = __toESM(require_fast_deep_equal());
    var weakMapOfUnsanitizedProps = /* @__PURE__ */ new WeakMap();
    var TheatreSheet = class {
      get type() {
        return "Theatre_Sheet_PublicAPI";
      }
      /**
       * @internal
       */
      constructor(sheet) {
        setPrivateAPI(this, sheet);
      }
      object(key, config, opts) {
        const internal2 = privateAPI(this);
        const sanitizedPath = validateAndSanitiseSlashedPathOrThrow(
          key,
          "sheet.object"
        );
        const existingObject = internal2.getObject(sanitizedPath);
        const nativeObject = null;
        const actions = opts == null ? void 0 : opts.__actions__THIS_API_IS_UNSTABLE_AND_WILL_CHANGE_IN_THE_NEXT_VERSION;
        if (existingObject) {
          if (true) {
            const prevConfig = weakMapOfUnsanitizedProps.get(existingObject);
            if (prevConfig) {
              if (!(0, import_fast_deep_equal.default)(config, prevConfig)) {
                if ((opts == null ? void 0 : opts.reconfigure) === true) {
                  const sanitizedConfig = compound(config);
                  existingObject.template.reconfigure(sanitizedConfig);
                  weakMapOfUnsanitizedProps.set(existingObject, config);
                  return existingObject.publicApi;
                } else {
                  throw new Error(
                    'You seem to have called sheet.object("'.concat(key, '", config) twice, with different values for `config`. ') + "This is disallowed because changing the config of an object on the fly would make it difficult to reason about.\n\n" + 'You can fix this by either re-using the existing object, or calling sheet.object("'.concat(key, '", config) with the same config.\n\n') + "If you mean to reconfigure the object's config, set `{reconfigure: true}` in sheet.object(\"".concat(key, '", config, {reconfigure: true})')
                  );
                }
              }
            }
          }
          if (actions) {
            existingObject.template._temp_setActions(actions);
          }
          return existingObject.publicApi;
        } else {
          const sanitizedConfig = compound(config);
          const object = internal2.createObject(
            sanitizedPath,
            nativeObject,
            sanitizedConfig,
            actions
          );
          if (true) {
            weakMapOfUnsanitizedProps.set(object, config);
          }
          return object.publicApi;
        }
      }
      get sequence() {
        return privateAPI(this).getSequence().publicApi;
      }
      get project() {
        return privateAPI(this).project.publicApi;
      }
      get address() {
        return __spreadValues({}, privateAPI(this).address);
      }
      detachObject(key) {
        const internal2 = privateAPI(this);
        const sanitizedPath = validateAndSanitiseSlashedPathOrThrow(
          key,
          'sheet.deleteObject("'.concat(key, '")')
        );
        const obj = internal2.getObject(sanitizedPath);
        if (!obj) {
          notify.warning(
            `Couldn't delete object "`.concat(sanitizedPath, '"'),
            'There is no object with key "'.concat(sanitizedPath, '".\n\nTo fix this, make sure you are calling `sheet.deleteObject("').concat(sanitizedPath, '")` with the correct key.')
          );
          console.warn('Object key "'.concat(sanitizedPath, '" does not exist.'));
          return;
        }
        internal2.deleteObject(sanitizedPath);
      }
    };
    var import_dataverse14 = require_dist();
    var Sheet = class {
      constructor(template, instanceId) {
        this.template = template;
        this.instanceId = instanceId;
        __publicField(this, "_objects", new import_dataverse14.Atom({}));
        __publicField(this, "_sequence");
        __publicField(this, "address");
        __publicField(this, "publicApi");
        __publicField(this, "project");
        __publicField(this, "objectsP", this._objects.pointer);
        __publicField(this, "type", "Theatre_Sheet");
        __publicField(this, "_logger");
        this._logger = template.project._logger.named("Sheet", instanceId);
        this._logger._trace("creating sheet");
        this.project = template.project;
        this.address = __spreadProps(__spreadValues({}, template.address), {
          sheetInstanceId: this.instanceId
        });
        this.publicApi = new TheatreSheet(this);
      }
      /**
       * @remarks At some point, we have to reconcile the concept of "an object"
       * with that of "an element."
       */
      createObject(objectKey, nativeObject, config, actions = {}) {
        const objTemplate = this.template.getObjectTemplate(
          objectKey,
          nativeObject,
          config,
          actions
        );
        const object = objTemplate.createInstance(this, nativeObject, config);
        this._objects.setByPointer((p2) => p2[objectKey], object);
        return object;
      }
      getObject(key) {
        return this._objects.get()[key];
      }
      deleteObject(objectKey) {
        this._objects.reduce((state) => {
          const newState = __spreadValues({}, state);
          delete newState[objectKey];
          return newState;
        });
      }
      getSequence() {
        if (!this._sequence) {
          const lengthD = (0, import_dataverse14.prism)(() => {
            const unsanitized = (0, import_dataverse14.val)(
              this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.length
            );
            return sanitizeSequenceLength(unsanitized);
          });
          const subUnitsPerUnitD = (0, import_dataverse14.prism)(() => {
            const unsanitized = (0, import_dataverse14.val)(
              this.project.pointers.historic.sheetsById[this.address.sheetId].sequence.subUnitsPerUnit
            );
            return sanitizeSequenceSubUnitsPerUnit(unsanitized);
          });
          this._sequence = new Sequence(
            this.template.project,
            this,
            lengthD,
            subUnitsPerUnitD
          );
        }
        return this._sequence;
      }
    };
    var sanitizeSequenceLength = (len) => typeof len === "number" && isFinite(len) && len > 0 ? len : 10;
    var sanitizeSequenceSubUnitsPerUnit = (subs) => typeof subs === "number" && isInteger_default(subs) && subs >= 1 && subs <= 1e3 ? subs : 30;
    var SheetTemplate = class {
      constructor(project, sheetId) {
        this.project = project;
        __publicField(this, "type", "Theatre_SheetTemplate");
        __publicField(this, "address");
        __publicField(this, "_instances", new import_dataverse15.Atom({}));
        __publicField(this, "instancesP", this._instances.pointer);
        __publicField(this, "_objectTemplates", new import_dataverse15.Atom({}));
        __publicField(this, "objectTemplatesP", this._objectTemplates.pointer);
        this.address = __spreadProps(__spreadValues({}, project.address), { sheetId });
      }
      getInstance(instanceId) {
        let inst = this._instances.get()[instanceId];
        if (!inst) {
          inst = new Sheet(this, instanceId);
          this._instances.setByPointer((p2) => p2[instanceId], inst);
        }
        return inst;
      }
      getObjectTemplate(objectKey, nativeObject, config, actions) {
        let template = this._objectTemplates.get()[objectKey];
        if (!template) {
          template = new SheetObjectTemplate(
            this,
            objectKey,
            nativeObject,
            config,
            actions
          );
          this._objectTemplates.setByPointer((p2) => p2[objectKey], template);
        }
        return template;
      }
    };
    var import_dataverse16 = require_dist();
    var import_dataverse17 = require_dist();
    var delay = (dur) => new Promise((resolve) => setTimeout(resolve, dur));
    var delay_default = delay;
    function n(n2) {
      for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), e2 = 1; e2 < t2; e2++)
        r2[e2 - 1] = arguments[e2];
      if (true) {
        var i2 = Y[n2], o2 = i2 ? "function" == typeof i2 ? i2.apply(null, r2) : i2 : "unknown error nr: " + n2;
        throw Error("[Immer] " + o2);
      }
      throw Error("[Immer] minified error nr: " + n2 + (r2.length ? " " + r2.map(function(n3) {
        return "'" + n3 + "'";
      }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
    }
    function t(n2) {
      return !!n2 && !!n2[Q];
    }
    function r(n2) {
      return !!n2 && (function(n3) {
        if (!n3 || "object" != typeof n3)
          return false;
        var t2 = Object.getPrototypeOf(n3);
        if (null === t2)
          return true;
        var r2 = Object.hasOwnProperty.call(t2, "constructor") && t2.constructor;
        return r2 === Object || "function" == typeof r2 && Function.toString.call(r2) === Z;
      }(n2) || Array.isArray(n2) || !!n2[L] || !!n2.constructor[L] || s(n2) || v(n2));
    }
    function e(r2) {
      return t(r2) || n(23, r2), r2[Q].t;
    }
    function i(n2, t2, r2) {
      void 0 === r2 && (r2 = false), 0 === o(n2) ? (r2 ? Object.keys : nn)(n2).forEach(function(e2) {
        r2 && "symbol" == typeof e2 || t2(e2, n2[e2], n2);
      }) : n2.forEach(function(r3, e2) {
        return t2(e2, r3, n2);
      });
    }
    function o(n2) {
      var t2 = n2[Q];
      return t2 ? t2.i > 3 ? t2.i - 4 : t2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
    }
    function u(n2, t2) {
      return 2 === o(n2) ? n2.has(t2) : Object.prototype.hasOwnProperty.call(n2, t2);
    }
    function a(n2, t2) {
      return 2 === o(n2) ? n2.get(t2) : n2[t2];
    }
    function f(n2, t2, r2) {
      var e2 = o(n2);
      2 === e2 ? n2.set(t2, r2) : 3 === e2 ? (n2.delete(t2), n2.add(r2)) : n2[t2] = r2;
    }
    function c(n2, t2) {
      return n2 === t2 ? 0 !== n2 || 1 / n2 == 1 / t2 : n2 != n2 && t2 != t2;
    }
    function s(n2) {
      return X && n2 instanceof Map;
    }
    function v(n2) {
      return q && n2 instanceof Set;
    }
    function p(n2) {
      return n2.o || n2.t;
    }
    function l(n2) {
      if (Array.isArray(n2))
        return Array.prototype.slice.call(n2);
      var t2 = tn(n2);
      delete t2[Q];
      for (var r2 = nn(t2), e2 = 0; e2 < r2.length; e2++) {
        var i2 = r2[e2], o2 = t2[i2];
        false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (t2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
      }
      return Object.create(Object.getPrototypeOf(n2), t2);
    }
    function d(n2, e2) {
      return void 0 === e2 && (e2 = false), y(n2) || t(n2) || !r(n2) ? n2 : (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e2 && i(n2, function(n3, t2) {
        return d(t2, true);
      }, true), n2);
    }
    function h() {
      n(2);
    }
    function y(n2) {
      return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
    }
    function b(t2) {
      var r2 = rn[t2];
      return r2 || n(18, t2), r2;
    }
    function _() {
      return U || n(0), U;
    }
    function j(n2, t2) {
      t2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = t2);
    }
    function O(n2) {
      g(n2), n2.p.forEach(S), n2.p = null;
    }
    function g(n2) {
      n2 === U && (U = n2.l);
    }
    function w(n2) {
      return U = { p: [], l: U, h: n2, m: true, _: 0 };
    }
    function S(n2) {
      var t2 = n2[Q];
      0 === t2.i || 1 === t2.i ? t2.j() : t2.O = true;
    }
    function P(t2, e2) {
      e2._ = e2.p.length;
      var i2 = e2.p[0], o2 = void 0 !== t2 && t2 !== i2;
      return e2.h.g || b("ES5").S(e2, t2, o2), o2 ? (i2[Q].P && (O(e2), n(4)), r(t2) && (t2 = M(e2, t2), e2.l || x(e2, t2)), e2.u && b("Patches").M(i2[Q], t2, e2.u, e2.s)) : t2 = M(e2, i2, []), O(e2), e2.u && e2.v(e2.u, e2.s), t2 !== H ? t2 : void 0;
    }
    function M(n2, t2, r2) {
      if (y(t2))
        return t2;
      var e2 = t2[Q];
      if (!e2)
        return i(t2, function(i2, o3) {
          return A(n2, e2, t2, i2, o3, r2);
        }, true), t2;
      if (e2.A !== n2)
        return t2;
      if (!e2.P)
        return x(n2, e2.t, true), e2.t;
      if (!e2.I) {
        e2.I = true, e2.A._--;
        var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l(e2.k) : e2.o;
        i(3 === e2.i ? new Set(o2) : o2, function(t3, i2) {
          return A(n2, e2, o2, t3, i2, r2);
        }), x(n2, o2, false), r2 && n2.u && b("Patches").R(e2, r2, n2.u, n2.s);
      }
      return e2.o;
    }
    function A(e2, i2, o2, a2, c2, s2) {
      if (c2 === o2 && n(5), t(c2)) {
        var v2 = M(e2, c2, s2 && i2 && 3 !== i2.i && !u(i2.D, a2) ? s2.concat(a2) : void 0);
        if (f(o2, a2, v2), !t(v2))
          return;
        e2.m = false;
      }
      if (r(c2) && !y(c2)) {
        if (!e2.h.F && e2._ < 1)
          return;
        M(e2, c2), i2 && i2.A.l || x(e2, c2);
      }
    }
    function x(n2, t2, r2) {
      void 0 === r2 && (r2 = false), n2.h.F && n2.m && d(t2, r2);
    }
    function z(n2, t2) {
      var r2 = n2[Q];
      return (r2 ? p(r2) : n2)[t2];
    }
    function I(n2, t2) {
      if (t2 in n2)
        for (var r2 = Object.getPrototypeOf(n2); r2; ) {
          var e2 = Object.getOwnPropertyDescriptor(r2, t2);
          if (e2)
            return e2;
          r2 = Object.getPrototypeOf(r2);
        }
    }
    function k(n2) {
      n2.P || (n2.P = true, n2.l && k(n2.l));
    }
    function E(n2) {
      n2.o || (n2.o = l(n2.t));
    }
    function R(n2, t2, r2) {
      var e2 = s(t2) ? b("MapSet").N(t2, r2) : v(t2) ? b("MapSet").T(t2, r2) : n2.g ? function(n3, t3) {
        var r3 = Array.isArray(n3), e3 = { i: r3 ? 1 : 0, A: t3 ? t3.A : _(), P: false, I: false, D: {}, l: t3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
        r3 && (i2 = [e3], o2 = on);
        var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
        return e3.k = f2, e3.j = a2, f2;
      }(t2, r2) : b("ES5").J(t2, r2);
      return (r2 ? r2.A : _()).p.push(e2), e2;
    }
    function D(e2) {
      return t(e2) || n(22, e2), function n2(t2) {
        if (!r(t2))
          return t2;
        var e3, u2 = t2[Q], c2 = o(t2);
        if (u2) {
          if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
            return u2.t;
          u2.I = true, e3 = F(t2, c2), u2.I = false;
        } else
          e3 = F(t2, c2);
        return i(e3, function(t3, r2) {
          u2 && a(u2.t, t3) === r2 || f(e3, t3, n2(r2));
        }), 3 === c2 ? new Set(e3) : e3;
      }(e2);
    }
    function F(n2, t2) {
      switch (t2) {
        case 2:
          return new Map(n2);
        case 3:
          return Array.from(n2);
      }
      return l(n2);
    }
    var G;
    var U;
    var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
    var X = "undefined" != typeof Map;
    var q = "undefined" != typeof Set;
    var B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
    var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
    var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
    var Q = W ? Symbol.for("immer-state") : "__$immer_state";
    var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
      return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
    }, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
      return "Cannot apply patch, path doesn't resolve: " + n2;
    }, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
      return "Unsupported patch operation: " + n2;
    }, 18: function(n2) {
      return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
    }, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
      return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
    }, 22: function(n2) {
      return "'current' expects a draft, got: " + n2;
    }, 23: function(n2) {
      return "'original' expects a draft, got: " + n2;
    }, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
    var Z = "" + Object.prototype.constructor;
    var nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
      return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
    } : Object.getOwnPropertyNames;
    var tn = Object.getOwnPropertyDescriptors || function(n2) {
      var t2 = {};
      return nn(n2).forEach(function(r2) {
        t2[r2] = Object.getOwnPropertyDescriptor(n2, r2);
      }), t2;
    };
    var rn = {};
    var en = { get: function(n2, t2) {
      if (t2 === Q)
        return n2;
      var e2 = p(n2);
      if (!u(e2, t2))
        return function(n3, t3, r2) {
          var e3, i3 = I(t3, r2);
          return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
        }(n2, e2, t2);
      var i2 = e2[t2];
      return n2.I || !r(i2) ? i2 : i2 === z(n2.t, t2) ? (E(n2), n2.o[t2] = R(n2.A.h, i2, n2)) : i2;
    }, has: function(n2, t2) {
      return t2 in p(n2);
    }, ownKeys: function(n2) {
      return Reflect.ownKeys(p(n2));
    }, set: function(n2, t2, r2) {
      var e2 = I(p(n2), t2);
      if (null == e2 ? void 0 : e2.set)
        return e2.set.call(n2.k, r2), true;
      if (!n2.P) {
        var i2 = z(p(n2), t2), o2 = null == i2 ? void 0 : i2[Q];
        if (o2 && o2.t === r2)
          return n2.o[t2] = r2, n2.D[t2] = false, true;
        if (c(r2, i2) && (void 0 !== r2 || u(n2.t, t2)))
          return true;
        E(n2), k(n2);
      }
      return n2.o[t2] === r2 && "number" != typeof r2 && (void 0 !== r2 || t2 in n2.o) || (n2.o[t2] = r2, n2.D[t2] = true, true);
    }, deleteProperty: function(n2, t2) {
      return void 0 !== z(n2.t, t2) || t2 in n2.t ? (n2.D[t2] = false, E(n2), k(n2)) : delete n2.D[t2], n2.o && delete n2.o[t2], true;
    }, getOwnPropertyDescriptor: function(n2, t2) {
      var r2 = p(n2), e2 = Reflect.getOwnPropertyDescriptor(r2, t2);
      return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== t2, enumerable: e2.enumerable, value: r2[t2] } : e2;
    }, defineProperty: function() {
      n(11);
    }, getPrototypeOf: function(n2) {
      return Object.getPrototypeOf(n2.t);
    }, setPrototypeOf: function() {
      n(12);
    } };
    var on = {};
    i(en, function(n2, t2) {
      on[n2] = function() {
        return arguments[0] = arguments[0][0], t2.apply(this, arguments);
      };
    }), on.deleteProperty = function(t2, r2) {
      return isNaN(parseInt(r2)) && n(13), en.deleteProperty.call(this, t2[0], r2);
    }, on.set = function(t2, r2, e2) {
      return "length" !== r2 && isNaN(parseInt(r2)) && n(14), en.set.call(this, t2[0], r2, e2, t2[0]);
    };
    var un = function() {
      function e2(t2) {
        var e3 = this;
        this.g = B, this.F = true, this.produce = function(t3, i3, o2) {
          if ("function" == typeof t3 && "function" != typeof i3) {
            var u2 = i3;
            i3 = t3;
            var a2 = e3;
            return function(n2) {
              var t4 = this;
              void 0 === n2 && (n2 = u2);
              for (var r2 = arguments.length, e4 = Array(r2 > 1 ? r2 - 1 : 0), o3 = 1; o3 < r2; o3++)
                e4[o3 - 1] = arguments[o3];
              return a2.produce(n2, function(n3) {
                var r3;
                return (r3 = i3).call.apply(r3, [t4, n3].concat(e4));
              });
            };
          }
          var f2;
          if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), r(t3)) {
            var c2 = w(e3), s2 = R(e3, t3, void 0), v2 = true;
            try {
              f2 = i3(s2), v2 = false;
            } finally {
              v2 ? O(c2) : g(c2);
            }
            return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
              return j(c2, o2), P(n2, c2);
            }, function(n2) {
              throw O(c2), n2;
            }) : (j(c2, o2), P(f2, c2));
          }
          if (!t3 || "object" != typeof t3) {
            if ((f2 = i3(t3)) === H)
              return;
            return void 0 === f2 && (f2 = t3), e3.F && d(f2, true), f2;
          }
          n(21, t3);
        }, this.produceWithPatches = function(n2, t3) {
          return "function" == typeof n2 ? function(t4) {
            for (var r3 = arguments.length, i4 = Array(r3 > 1 ? r3 - 1 : 0), o2 = 1; o2 < r3; o2++)
              i4[o2 - 1] = arguments[o2];
            return e3.produceWithPatches(t4, function(t5) {
              return n2.apply(void 0, [t5].concat(i4));
            });
          } : [e3.produce(n2, t3, function(n3, t4) {
            r2 = n3, i3 = t4;
          }), r2, i3];
          var r2, i3;
        }, "boolean" == typeof (null == t2 ? void 0 : t2.useProxies) && this.setUseProxies(t2.useProxies), "boolean" == typeof (null == t2 ? void 0 : t2.autoFreeze) && this.setAutoFreeze(t2.autoFreeze);
      }
      var i2 = e2.prototype;
      return i2.createDraft = function(e3) {
        r(e3) || n(8), t(e3) && (e3 = D(e3));
        var i3 = w(this), o2 = R(this, e3, void 0);
        return o2[Q].C = true, g(i3), o2;
      }, i2.finishDraft = function(t2, r2) {
        var e3 = t2 && t2[Q];
        e3 && e3.C || n(9), e3.I && n(10);
        var i3 = e3.A;
        return j(i3, r2), P(void 0, i3);
      }, i2.setAutoFreeze = function(n2) {
        this.F = n2;
      }, i2.setUseProxies = function(t2) {
        t2 && !B && n(20), this.g = t2;
      }, i2.applyPatches = function(n2, r2) {
        var e3;
        for (e3 = r2.length - 1; e3 >= 0; e3--) {
          var i3 = r2[e3];
          if (0 === i3.path.length && "replace" === i3.op) {
            n2 = i3.value;
            break;
          }
        }
        var o2 = b("Patches").$;
        return t(n2) ? o2(n2, r2) : this.produce(n2, function(n3) {
          return o2(n3, r2.slice(e3 + 1));
        });
      }, e2;
    }();
    var an = new un();
    var fn = an.produce;
    var cn = an.produceWithPatches.bind(an);
    var sn = an.setAutoFreeze.bind(an);
    var vn = an.setUseProxies.bind(an);
    var pn = an.applyPatches.bind(an);
    var ln = an.createDraft.bind(an);
    var dn = an.finishDraft.bind(an);
    var globals = {
      /**
       * If the schema of the redux store changes in a backwards-incompatible way, then this version number should be incremented.
       *
       * While this looks like semver, it is not. There are no patch numbers, so any change in this number is a breaking change.
       *
       * However, as long as the schema of the redux store is backwards-compatible, then we don't have to change this number.
       *
       * Since the 0.4.0 release, this number has not had to change.
       */
      currentProjectStateDefinitionVersion: "0.4.0"
    };
    var globals_default = globals;
    async function initialiseProjectState(studio, project, onDiskState) {
      await delay_default(0);
      studio.transaction(({ drafts }) => {
        var _a;
        const projectId = project.address.projectId;
        drafts.ephemeral.coreByProject[projectId] = {
          lastExportedObject: null,
          loadingState: { type: "loading" }
        };
        drafts.ahistoric.coreByProject[projectId] = {
          ahistoricStuff: ""
        };
        function useInitialState() {
          drafts.ephemeral.coreByProject[projectId].loadingState = {
            type: "loaded"
          };
          drafts.historic.coreByProject[projectId] = {
            sheetsById: {},
            definitionVersion: globals_default.currentProjectStateDefinitionVersion,
            revisionHistory: []
          };
        }
        function useOnDiskState(state) {
          drafts.ephemeral.coreByProject[projectId].loadingState = {
            type: "loaded"
          };
          drafts.historic.coreByProject[projectId] = state;
        }
        function useBrowserState() {
          drafts.ephemeral.coreByProject[projectId].loadingState = {
            type: "loaded"
          };
        }
        function browserStateIsNotBasedOnDiskState(onDiskState2) {
          drafts.ephemeral.coreByProject[projectId].loadingState = {
            type: "browserStateIsNotBasedOnDiskState",
            onDiskState: onDiskState2
          };
        }
        const browserState = (_a = e(drafts.historic)) == null ? void 0 : _a.coreByProject[project.address.projectId];
        if (!browserState) {
          if (!onDiskState) {
            useInitialState();
          } else {
            useOnDiskState(onDiskState);
          }
        } else {
          if (!onDiskState) {
            useBrowserState();
          } else {
            if (browserState.revisionHistory.indexOf(
              onDiskState.revisionHistory[0]
            ) == -1) {
              browserStateIsNotBasedOnDiskState(onDiskState);
            } else {
              useBrowserState();
            }
          }
        }
      });
    }
    function noop2() {
    }
    function _coreLogger(config) {
      var _a, _b;
      const internalMin = ((_a = config == null ? void 0 : config.logging) == null ? void 0 : _a.internal) ? (_b = config.logging.min) != null ? _b : 256 : Infinity;
      const shouldDebugLogger = internalMin <= 128;
      const shouldShowLoggerErrors = internalMin <= 512;
      const internal2 = createTheatreInternalLogger(void 0, {
        _debug: shouldDebugLogger ? console.debug.bind(console, "_coreLogger(TheatreInternalLogger) debug") : noop2,
        _error: shouldShowLoggerErrors ? console.error.bind(console, "_coreLogger(TheatreInternalLogger) error") : noop2
      });
      if (config) {
        const { logger, logging } = config;
        if (logger)
          internal2.configureLogger(logger);
        if (logging)
          internal2.configureLogging(logging);
        else {
          internal2.configureLogging({
            dev: true
          });
        }
      }
      return internal2.getLogger().named("Theatre");
    }
    var Project = class {
      constructor(id, config = {}, publicApi) {
        this.config = config;
        this.publicApi = publicApi;
        __publicField(this, "pointers");
        __publicField(this, "_pointerProxies");
        __publicField(this, "address");
        __publicField(this, "_studioReadyDeferred");
        __publicField(this, "_assetStorageReadyDeferred");
        __publicField(this, "_readyPromise");
        __publicField(this, "_sheetTemplates", new import_dataverse17.Atom({}));
        __publicField(this, "sheetTemplatesP", this._sheetTemplates.pointer);
        __publicField(this, "_studio");
        __publicField(this, "assetStorage");
        __publicField(this, "type", "Theatre_Project");
        __publicField(this, "_logger");
        var _a;
        this._logger = _coreLogger({ logging: { dev: true } }).named("Project", id);
        this._logger.traceDev("creating project");
        this.address = { projectId: id };
        const onDiskStateAtom = new import_dataverse17.Atom({
          ahistoric: {
            ahistoricStuff: ""
          },
          historic: (_a = config.state) != null ? _a : {
            sheetsById: {},
            definitionVersion: globals_default.currentProjectStateDefinitionVersion,
            revisionHistory: []
          },
          ephemeral: {
            loadingState: {
              type: "loaded"
            },
            lastExportedObject: null
          }
        });
        this._assetStorageReadyDeferred = defer();
        this.assetStorage = {
          getAssetUrl: (assetId) => {
            var _a2;
            return "".concat((_a2 = config.assets) == null ? void 0 : _a2.baseUrl, "/").concat(assetId);
          },
          // Until the asset storage is ready, we'll throw an error when the user tries to use it
          createAsset: () => {
            throw new Error("Please wait for Project.ready to use assets.");
          }
        };
        this._pointerProxies = {
          historic: new import_dataverse16.PointerProxy(onDiskStateAtom.pointer.historic),
          ahistoric: new import_dataverse16.PointerProxy(onDiskStateAtom.pointer.ahistoric),
          ephemeral: new import_dataverse16.PointerProxy(onDiskStateAtom.pointer.ephemeral)
        };
        this.pointers = {
          historic: this._pointerProxies.historic.pointer,
          ahistoric: this._pointerProxies.ahistoric.pointer,
          ephemeral: this._pointerProxies.ephemeral.pointer
        };
        projectsSingleton_default.add(id, this);
        this._studioReadyDeferred = defer();
        this._readyPromise = Promise.all([
          this._studioReadyDeferred.promise,
          this._assetStorageReadyDeferred.promise
          // hide the array from the user, i.e. make it Promise<void> instead of Promise<[undefined, undefined]>
        ]).then(() => {
        });
        if (config.state) {
          setTimeout(() => {
            if (!this._studio) {
              this._studioReadyDeferred.resolve(void 0);
              this._assetStorageReadyDeferred.resolve(void 0);
              this._logger._trace("ready deferred resolved with no state");
            }
          }, 0);
        } else {
          if (typeof window === "undefined") {
            if (false) {
              console.error(
                'Argument config.state in Theatre.getProject("'.concat(id, '", config) is empty. ') + "You can safely ignore this message if you're developing a Next.js/Remix project in development mode. But if you are shipping to your end-users, then you need to set config.state, otherwise your project's state will be empty and nothing will animate. Learn more at https://www.theatrejs.com/docs/latest/manual/projects#state"
              );
            }
          } else {
            setTimeout(() => {
              if (!this._studio) {
                throw new Error(
                  'Argument config.state in Theatre.getProject("'.concat(id, '", config) is empty. This is fine ') + "while you are using @theatre/core along with @theatre/studio. But since @theatre/studio " + 'is not loaded, the state of project "'.concat(id, '" will be empty.\n\n') + "To fix this, you need to add @theatre/studio into the bundle and export the project's state. Learn how to do that at https://www.theatrejs.com/docs/latest/manual/projects#state\n"
                );
              }
            }, 1e3);
          }
        }
      }
      attachToStudio(studio) {
        if (this._studio) {
          if (this._studio !== studio) {
            throw new Error(
              "Project ".concat(this.address.projectId, " is already attached to studio ").concat(this._studio.address.studioId)
            );
          } else {
            console.warn(
              "Project ".concat(this.address.projectId, " is already attached to studio ").concat(this._studio.address.studioId)
            );
            return;
          }
        }
        this._studio = studio;
        studio.initialized.then(async () => {
          var _a;
          await initialiseProjectState(studio, this, this.config.state);
          this._pointerProxies.historic.setPointer(
            studio.atomP.historic.coreByProject[this.address.projectId]
          );
          this._pointerProxies.ahistoric.setPointer(
            studio.atomP.ahistoric.coreByProject[this.address.projectId]
          );
          this._pointerProxies.ephemeral.setPointer(
            studio.atomP.ephemeral.coreByProject[this.address.projectId]
          );
          await studio.createAssetStorage(this, (_a = this.config.assets) == null ? void 0 : _a.baseUrl).then((assetStorage) => {
            this.assetStorage = assetStorage;
            this._assetStorageReadyDeferred.resolve(void 0);
          });
          this._studioReadyDeferred.resolve(void 0);
        }).catch((err) => {
          console.error(err);
          throw err;
        });
      }
      get isAttachedToStudio() {
        return !!this._studio;
      }
      get ready() {
        return this._readyPromise;
      }
      isReady() {
        return this._studioReadyDeferred.status === "resolved" && this._assetStorageReadyDeferred.status === "resolved";
      }
      getOrCreateSheet(sheetId, instanceId = "default") {
        let template = this._sheetTemplates.get()[sheetId];
        if (!template) {
          template = new SheetTemplate(this, sheetId);
          this._sheetTemplates.reduce((s2) => __spreadProps(__spreadValues({}, s2), { [sheetId]: template }));
        }
        return template.getInstance(instanceId);
      }
    };
    var _validateSym = (val8, thingy, range) => {
      if (typeof val8 !== "string") {
        return "".concat(thingy, " must be a string. ").concat(userReadableTypeOfValue_default(val8), " given.");
      } else if (val8.trim().length !== val8.length) {
        return "".concat(thingy, " must not have leading or trailing spaces. '").concat(val8, "' given.");
      } else if (val8.length < range[0] || val8.length > range[1]) {
        return "".concat(thingy, " must have between ").concat(range[0], " and ").concat(range[1], " characters. '").concat(val8, "' given.");
      }
    };
    var validateName = (name, thingy, shouldThrow = false) => {
      const result = _validateSym(name, thingy, [3, 32]);
      if (typeof result === "string" && shouldThrow) {
        throw new InvalidArgumentError(result);
      } else {
        return result;
      }
    };
    var validateInstanceId = (name, thingy, shouldThrow = false) => {
      const result = _validateSym(name, thingy, [1, 32]);
      if (typeof result === "string" && shouldThrow) {
        throw new InvalidArgumentError(result);
      } else {
        return result;
      }
    };
    var TheatreProject = class {
      get type() {
        return "Theatre_Project_PublicAPI";
      }
      /**
       * @internal
       */
      constructor(id, config = {}) {
        setPrivateAPI(this, new Project(id, config, this));
      }
      get ready() {
        return privateAPI(this).ready;
      }
      get isReady() {
        return privateAPI(this).isReady();
      }
      get address() {
        return __spreadValues({}, privateAPI(this).address);
      }
      getAssetUrl(asset) {
        if (!this.isReady) {
          console.error(
            "Calling `project.getAssetUrl()` before `project.ready` is resolved, will always return `undefined`. Either use `project.ready.then(() => project.getAssetUrl())` or `await project.ready` before calling `project.getAssetUrl()`."
          );
          return void 0;
        }
        return asset.id ? privateAPI(this).assetStorage.getAssetUrl(asset.id) : void 0;
      }
      sheet(sheetId, instanceId = "default") {
        const sanitizedPath = validateAndSanitiseSlashedPathOrThrow(
          sheetId,
          "project.sheet"
        );
        if (true) {
          validateInstanceId(
            instanceId,
            "instanceId in project.sheet(sheetId, instanceId)",
            true
          );
        }
        return privateAPI(this).getOrCreateSheet(
          sanitizedPath,
          instanceId
        ).publicApi;
      }
    };
    var import_fast_deep_equal2 = __toESM(require_fast_deep_equal());
    var import_dataverse18 = require_dist();
    var import_dataverse19 = require_dist();
    function getProject(id, config = {}) {
      const existingProject = projectsSingleton_default.get(id);
      if (existingProject) {
        if (true) {
          if (!(0, import_fast_deep_equal2.default)(config, existingProject.config)) {
            throw new Error(
              'You seem to have called Theatre.getProject("'.concat(id, '", config) twice, with different config objects. ') + "This is disallowed because changing the config of a project on the fly can lead to hard-to-debug issues.\n\nYou can fix this by either calling Theatre.getProject() once per projectId, or calling it multiple times but with the exact same config."
            );
          }
        }
        return existingProject.publicApi;
      }
      const rootLogger = _coreLogger();
      const plogger = rootLogger.named("Project", id);
      if (true) {
        validateName(id, "projectName in Theatre.getProject(projectName)", true);
        validateProjectIdOrThrow(id);
        plogger._debug("validated projectName", { projectName: id });
      }
      if (config.state) {
        if (true) {
          shallowValidateOnDiskState(id, config.state);
          plogger._debug("shallow validated config.state on disk");
        } else {
          deepValidateOnDiskState(id, config.state);
          plogger._debug("deep validated config.state on disk");
        }
      } else {
        plogger._debug("no config.state");
      }
      return new TheatreProject(id, config);
    }
    var shallowValidateOnDiskState = (projectId, s2) => {
      if (Array.isArray(s2) || s2 == null || s2.definitionVersion !== globals_default.currentProjectStateDefinitionVersion) {
        throw new InvalidArgumentError(
          "Error validating conf.state in Theatre.getProject(".concat(JSON.stringify(
            projectId
          ), ", conf). The state seems to be formatted in a way that is unreadable to Theatre.js. Read more at https://www.theatrejs.com/docs/latest/manual/projects#state")
        );
      }
    };
    var validateProjectIdOrThrow = (value) => {
      if (typeof value !== "string") {
        throw new InvalidArgumentError(
          "Argument 'projectId' in `Theatre.getProject(projectId, ...)` must be a string. Instead, it was ".concat(userReadableTypeOfValue_default(
            value
          ), ".")
        );
      }
      const idTrimmed = value.trim();
      if (idTrimmed.length !== value.length) {
        throw new InvalidArgumentError(
          "Argument 'projectId' in `Theatre.getProject(\"".concat(value, '", ...)` should not have surrounding whitespace.')
        );
      }
      if (idTrimmed.length < 3) {
        throw new InvalidArgumentError(
          "Argument 'projectId' in `Theatre.getProject(\"".concat(value, '", ...)` should be at least 3 characters long.')
        );
      }
    };
    function onChange(pointer3, callback, rafDriver) {
      const ticker = rafDriver ? privateAPI(rafDriver).ticker : getCoreTicker();
      if ((0, import_dataverse18.isPointer)(pointer3)) {
        const pr = (0, import_dataverse19.pointerToPrism)(pointer3);
        return pr.onChange(ticker, callback, true);
      } else if ((0, import_dataverse19.isPrism)(pointer3)) {
        return pointer3.onChange(ticker, callback, true);
      } else {
        throw new Error(
          "Called onChange(p) where p is neither a pointer nor a prism."
        );
      }
    }
    function val7(pointer3) {
      if ((0, import_dataverse18.isPointer)(pointer3)) {
        return (0, import_dataverse19.pointerToPrism)(pointer3).getValue();
      } else {
        throw new Error("Called val(p) where p is not a pointer.");
      }
    }
    var CoreBundle = class {
      constructor() {
        __publicField(this, "_studio");
      }
      get type() {
        return "Theatre_CoreBundle";
      }
      get version() {
        return "0.7.0";
      }
      getBitsForStudio(studio, callback) {
        if (this._studio) {
          throw new Error("@theatre/core is already attached to @theatre/studio");
        }
        this._studio = studio;
        const bits = {
          projectsP: projectsSingleton_default.atom.pointer.projects,
          privateAPI,
          coreExports: coreExports_exports,
          getCoreRafDriver
        };
        callback(bits);
      }
    };
    registerCoreBundle();
    function registerCoreBundle() {
      if (typeof window == "undefined")
        return;
      const existingBundle = (
        // @ts-ignore ignore
        window[coreBundle]
      );
      if (typeof existingBundle !== "undefined") {
        if (typeof existingBundle === "object" && existingBundle && typeof existingBundle.version === "string") {
          throw new Error(
            "It seems that the module '@theatre/core' is loaded more than once. This could have two possible causes:\n1. You might have two separate versions of Theatre.js in node_modules.\n2. Or this might be a bundling misconfiguration, in case you're using a bundler like Webpack/ESBuild/Rollup.\n\nNote that it **is okay** to import '@theatre/core' multiple times. But those imports should point to the same module."
          );
        } else {
          throw new Error(
            "The variable window.".concat(coreBundle, " seems to be already set by a module other than @theatre/core.")
          );
        }
      }
      const coreBundle2 = new CoreBundle();
      window[coreBundle] = coreBundle2;
      const possibleExistingStudioBundle = (
        // @ts-ignore ignore
        window[studioBundle]
      );
      if (possibleExistingStudioBundle && possibleExistingStudioBundle !== null && possibleExistingStudioBundle.type === "Theatre_StudioBundle") {
        possibleExistingStudioBundle.registerCoreBundle(coreBundle2);
      }
    }
  }
});
export default require_dist2();
/*! Bundled license information:

@theatre/core/dist/index.js:
  (*! Bundled license information:
  
  lodash-es/lodash.js:
    (**
     * @license
     * Lodash (Custom Build) <https://lodash.com/>
     * Build: `lodash modularize exports="es" -o ./`
     * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
     * Released under MIT license <https://lodash.com/license>
     * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
     * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     *)
  *)
*/
//# sourceMappingURL=@theatre_core.js.map
