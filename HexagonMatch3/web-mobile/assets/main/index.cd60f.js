window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  ActiveIndicatorLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3712eKpbexCLYXMNS46wFJI", "ActiveIndicatorLayer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ActiveIndicatorLayerEnterParam = void 0;
    var LayerBase_1 = require("../LayerDirector/LayerBase");
    var IGame_1 = require("../IGame/IGame");
    var DefaultConfig_1 = require("../DefaultConfigs/DefaultConfig");
    var AssetCache_1 = require("../AssetCache/AssetCache");
    var LayerEnterParamBase_1 = require("../LayerDirector/LayerEnterParamBase");
    var ActiveIndicatorLayerEnterParam = function(_super) {
      __extends(ActiveIndicatorLayerEnterParam, _super);
      function ActiveIndicatorLayerEnterParam() {
        var _this = _super.call(this) || this;
        _this.enterParam = null;
        return _this;
      }
      ActiveIndicatorLayerEnterParam.create = function(enterParam) {
        var param = new ActiveIndicatorLayerEnterParam();
        param.enterParam = enterParam;
        return param;
      };
      return ActiveIndicatorLayerEnterParam;
    }(LayerEnterParamBase_1.default);
    exports.ActiveIndicatorLayerEnterParam = ActiveIndicatorLayerEnterParam;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ActiveIndicatorLayer = function(_super) {
      __extends(ActiveIndicatorLayer, _super);
      function ActiveIndicatorLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._showIndicatorDelay = 0;
        _this._indicatorRoot = null;
        _this._indicatorAnimator = null;
        return _this;
      }
      ActiveIndicatorLayer_1 = ActiveIndicatorLayer;
      ActiveIndicatorLayer.prototype.getLayerName = function() {
        return ActiveIndicatorLayer_1.LayerName;
      };
      ActiveIndicatorLayer.open = function(enterParam, completeCallback) {
        var node = new cc.Node();
        var widget = node.addComponent(cc.Widget);
        widget.isAlignLeft = true;
        widget.left = 0;
        widget.isAlignRight = true;
        widget.right = 0;
        widget.isAlignBottom = true;
        widget.bottom = 0;
        widget.isAlignTop = true;
        widget.top = 0;
        widget.alignMode = cc.Widget.AlignMode.ONCE;
        node.addComponent(cc.BlockInputEvents);
        var layer = node.addComponent(ActiveIndicatorLayer_1);
        IGame_1.default.getInstance().addLayer(layer, enterParam, completeCallback);
        return layer;
      };
      ActiveIndicatorLayer.close = function() {
        IGame_1.default.getInstance().removeLayerWithID(ActiveIndicatorLayer_1.LayerName);
      };
      ActiveIndicatorLayer.prototype.getLayerZOrder = function() {
        return DefaultConfig_1.default.ZORDER_UI_LAYER_ACITIVE_INDICATOR;
      };
      ActiveIndicatorLayer.prototype.updateIndicator = function() {
        this._showIndicatorDelay <= 0 && this.setIndicatorVisable(true);
      };
      ActiveIndicatorLayer.prototype.setIndicatorVisable = function(visable) {
        this._indicatorRoot.active = visable;
        if (this._indicatorAnimator) {
          var animator = this._indicatorAnimator.getComponent(cc.Animation);
          if (animator) if (visable) {
            var state = animator.play("loop");
            state && (state.wrapMode = cc.WrapMode.Loop);
          } else animator.stop();
        }
      };
      ActiveIndicatorLayer.prototype.onIndicatorAnimationLoaded = function(error, resource) {
        if (!cc.isValid(this.node)) return;
        if (null == error) {
          this._indicatorAnimator = cc.instantiate(resource);
          if (this._indicatorAnimator) {
            this._indicatorRoot.addChild(this._indicatorAnimator);
            this.updateIndicator();
          }
        }
      };
      ActiveIndicatorLayer.prototype.onLayerLoad = function() {};
      ActiveIndicatorLayer.prototype.onLayerEnable = function() {};
      ActiveIndicatorLayer.prototype.onLayerEnter = function(param) {
        this._indicatorRoot = new cc.Node();
        this.node.addChild(this._indicatorRoot);
        this.setIndicatorVisable(false);
        AssetCache_1.default.getInstance().getAsset("resources", ActiveIndicatorLayer_1.indicatorAnimatorPath, cc.Prefab, null, this.onIndicatorAnimationLoaded.bind(this));
      };
      ActiveIndicatorLayer.prototype.onLayerStart = function() {};
      ActiveIndicatorLayer.prototype.onLayerUpdate = function(dt) {
        if (this._showIndicatorDelay > 0) {
          this._showIndicatorDelay -= dt;
          this.updateIndicator();
        }
      };
      ActiveIndicatorLayer.prototype.onLayerExit = function() {};
      ActiveIndicatorLayer.prototype.onLayerDisable = function() {};
      ActiveIndicatorLayer.prototype.onLayerDestroy = function() {};
      var ActiveIndicatorLayer_1;
      ActiveIndicatorLayer.indicatorAnimatorPath = "prefab/ActiveIndicator/ActiveIndicator";
      ActiveIndicatorLayer.LayerName = "ActiveIndicatorLayer";
      ActiveIndicatorLayer = ActiveIndicatorLayer_1 = __decorate([ ccclass ], ActiveIndicatorLayer);
      return ActiveIndicatorLayer;
    }(LayerBase_1.default);
    exports.default = ActiveIndicatorLayer;
    cc._RF.pop();
  }, {
    "../AssetCache/AssetCache": "AssetCache",
    "../DefaultConfigs/DefaultConfig": "DefaultConfig",
    "../IGame/IGame": "IGame",
    "../LayerDirector/LayerBase": "LayerBase",
    "../LayerDirector/LayerEnterParamBase": "LayerEnterParamBase"
  } ],
  AssetCache: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "792e9jdprNLJ6/zq6p7d+wu", "AssetCache");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Debuger_1 = require("../Utils/Debuger");
    var AssetDirLoader_1 = require("./AssetDirLoader");
    var AssetLoader_1 = require("./AssetLoader");
    var AssetCache = function() {
      function AssetCache() {}
      AssetCache.getInstance = function() {
        this._instance || (this._instance = new AssetCache());
        return this._instance;
      };
      AssetCache.prototype.getAssetBundleSync = function(id) {
        return cc.assetManager.getBundle(id);
      };
      AssetCache.prototype.getAssetBundle = function(id, complete) {
        var bundle = cc.assetManager.getBundle(id);
        bundle ? complete && complete(null, bundle) : cc.assetManager.loadBundle(id, function(error, bundle) {
          null == error ? complete && complete(error, bundle) : complete && complete(error, null);
        });
      };
      AssetCache.prototype.getAssetSync = function(bundleID, url, type) {
        var bundle = this.getAssetBundleSync(bundleID);
        if (bundle) {
          var res = bundle.get(url, type);
          if (res) return res;
        }
        Debuger_1.default.error(Debuger_1.default.FILTER_TAG01, "AssetCache.getAssetSync failed bundle:", bundleID, "url:", url);
        return null;
      };
      AssetCache.prototype.getAsset = function(bundleID, url, type, progressCallback, completeCallback) {
        this.getAssetBundle(bundleID, function(error, bundle) {
          if (bundle) {
            var res = bundle.get(url, type);
            if (res) completeCallback(null, res); else {
              var loader = AssetLoader_1.default.create(bundle, url, type, function(completedCount, totalCount, item) {
                progressCallback && progressCallback(completedCount, totalCount, item);
              }, function(error, resource) {
                error && Debuger_1.default.error(Debuger_1.default.FILTER_TAG01, "AssetCache.getAsset failed bundle:", bundleID, "url:", url);
                completeCallback && completeCallback(error, resource);
              });
              loader.load();
            }
          } else {
            Debuger_1.default.error(Debuger_1.default.FILTER_TAG01, "AssetCache.getAsset failed bundle:", bundleID, "url:", url);
            completeCallback(error, null);
          }
        });
      };
      AssetCache.prototype.loadAssetDir = function(bundleID, url, progressCallback, completeCallback) {
        this.getAssetBundle(bundleID, function(error, bundle) {
          if (bundle) {
            var loader = AssetDirLoader_1.default.create(bundle, url, function(completeCount, totalCount, item) {
              progressCallback && progressCallback(completeCount, totalCount, item);
            }, function(error, assets) {
              error && Debuger_1.default.error(Debuger_1.default.FILTER_TAG01, "AssetCache.loadAssetDir failed bundle:", bundleID, "url:", url);
              completeCallback && completeCallback(error, assets);
            });
            loader.load();
          } else {
            Debuger_1.default.error(Debuger_1.default.FILTER_TAG01, "AssetCache.loadAssetDir failed bundle:", bundleID, "url:", url);
            completeCallback(error, null);
          }
        });
      };
      AssetCache.prototype.getCashedAssetCount = function() {
        return cc.assetManager.assets.count;
      };
      AssetCache._instance = null;
      return AssetCache;
    }();
    exports.default = AssetCache;
    cc._RF.pop();
  }, {
    "../Utils/Debuger": "Debuger",
    "./AssetDirLoader": "AssetDirLoader",
    "./AssetLoader": "AssetLoader"
  } ],
  AssetDirLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "767cbFV47pC/JwcfWsUNI5o", "AssetDirLoader");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AssetDirLoader = function() {
      function AssetDirLoader(bundle, url, progressCallback, completeCallback) {
        this._url = "";
        this._bundle = bundle;
        this._url = url;
        this._progressCallback = progressCallback;
        this._completeCallback = completeCallback;
      }
      AssetDirLoader.create = function(bundle, url, progressCallback, completeCallback) {
        var instance = new AssetDirLoader(bundle, url, progressCallback, completeCallback);
        return instance;
      };
      AssetDirLoader.prototype.innerProgressCallback = function(completedCount, totalCount, item) {
        this._progressCallback && this._progressCallback(completedCount, totalCount, item);
      };
      AssetDirLoader.prototype.innerCompleteCallback = function(error, assets) {
        this._completeCallback && this._completeCallback(error, assets);
      };
      AssetDirLoader.prototype.load = function() {
        this._bundle.loadDir(this._url, this.innerProgressCallback.bind(this), this.innerCompleteCallback.bind(this));
      };
      return AssetDirLoader;
    }();
    exports.default = AssetDirLoader;
    cc._RF.pop();
  }, {} ],
  AssetLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "928481hg+NHAoFtCeyfyFTV", "AssetLoader");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AssetLoader = function() {
      function AssetLoader(bundle, url, type, progressCallback, completeCallback) {
        this._url = "";
        this._type = null;
        this._bundle = bundle;
        this._url = url;
        this._type = type;
        this._progressCallback = progressCallback;
        this._completeCallback = completeCallback;
      }
      AssetLoader.create = function(bundle, url, type, progressCallback, completeCallback) {
        var instance = new AssetLoader(bundle, url, type, progressCallback, completeCallback);
        return instance;
      };
      AssetLoader.prototype.innerProgressCallback = function(completedCount, totalCount, item) {
        this._progressCallback && this._progressCallback(completedCount, totalCount, item);
      };
      AssetLoader.prototype.innerCompleteCallback = function(error, resource) {
        this._completeCallback && this._completeCallback(error, resource);
      };
      AssetLoader.prototype.load = function() {
        this._bundle.load(this._url, this._type, this.innerProgressCallback.bind(this), this.innerCompleteCallback.bind(this));
      };
      return AssetLoader;
    }();
    exports.default = AssetLoader;
    cc._RF.pop();
  }, {} ],
  Debuger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7fb3f+0TNFMja29setgvwAo", "Debuger");
    "use strict";
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Debuger = function() {
      function Debuger() {}
      Debuger.log = function(tag, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) optionalParams[_i - 2] = arguments[_i];
        0 != (this._filterTag & tag) && console.log.apply(console, __spreadArrays([ message ], optionalParams));
      };
      Debuger.error = function(tag, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) optionalParams[_i - 2] = arguments[_i];
        0 != (this._filterTag & tag) && console.error.apply(console, __spreadArrays([ message ], optionalParams));
      };
      Debuger.warn = function(tag, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) optionalParams[_i - 2] = arguments[_i];
        0 != (this._filterTag & tag) && console.warn.apply(console, __spreadArrays([ message ], optionalParams));
      };
      Debuger.info = function(tag, message) {
        var optionalParams = [];
        for (var _i = 2; _i < arguments.length; _i++) optionalParams[_i - 2] = arguments[_i];
        0 != (this._filterTag & tag) && console.info.apply(console, __spreadArrays([ message ], optionalParams));
      };
      Debuger.FILTER_TAG01 = 1;
      Debuger.FILTER_TAG02 = 2;
      Debuger.FILTER_TAG03 = 4;
      Debuger.FILTER_TAG04 = 16;
      Debuger.FILTER_TAG05 = 268435488;
      Debuger.FILTER_TAG06 = 64;
      Debuger.FILTER_TAG07 = 128;
      Debuger.FILTER_TAG08 = 256;
      Debuger.FILTER_TAG09 = 512;
      Debuger.FILTER_TAG10 = 1024;
      Debuger.FILTER_TAG11 = 2048;
      Debuger.FILTER_TAG12 = 4096;
      Debuger.FILTER_TAG13 = 4608;
      Debuger.FILTER_TAG_NONE = 0;
      Debuger.FILTER_TAG_ALL = 4294967295;
      Debuger._filterTag = Debuger.FILTER_TAG_ALL;
      return Debuger;
    }();
    exports.default = Debuger;
    cc._RF.pop();
  }, {} ],
  DefaultConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae445R4/UVNoY4psb2VbSNA", "DefaultConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DefaultConfig = function() {
      function DefaultConfig() {}
      DefaultConfig.ZORDER_UI_ROOT = 1e4;
      DefaultConfig.ZORDER_UI_LAYER_DEFAULT = 100;
      DefaultConfig.ZORDER_UI_LAYER_ACITIVE_INDICATOR = 1e3;
      return DefaultConfig;
    }();
    exports.default = DefaultConfig;
    cc._RF.pop();
  }, {} ],
  Defines: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "08423Vi6DZMbY22/53G8VW6", "Defines");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SceneName = exports.AssetBundleID = void 0;
    var AssetBundleID;
    (function(AssetBundleID) {
      AssetBundleID["Resources"] = "resources";
      AssetBundleID["Common"] = "common";
      AssetBundleID["MainScene"] = "main_scene";
      AssetBundleID["GameScene"] = "game_scene";
      AssetBundleID["ResultScene"] = "result_scene";
      AssetBundleID["ShaderScene"] = "shader_scene";
      AssetBundleID["LockStepScene"] = "lock_step_scene";
      AssetBundleID["DropScene"] = "drop_scene";
      AssetBundleID["ChatScene"] = "chat_scene";
    })(AssetBundleID = exports.AssetBundleID || (exports.AssetBundleID = {}));
    var SceneName;
    (function(SceneName) {
      SceneName["LoadingScene"] = "LoadingScene";
      SceneName["SwitchScene"] = "SwitchScene";
      SceneName["MainScene"] = "MainScene";
      SceneName["GameScene"] = "GameScene";
      SceneName["ResultScene"] = "ResultScene";
      SceneName["ShaderScene"] = "ShaderScene";
      SceneName["LockStepScene"] = "LockStepScene";
      SceneName["DropScene"] = "DropScene";
      SceneName["ChatScene"] = "ChatScene";
    })(SceneName = exports.SceneName || (exports.SceneName = {}));
    cc._RF.pop();
  }, {} ],
  DeviceTypeUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cdafdG7zoFGqp3WEg0RtA/0", "DeviceTypeUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.DeviceType = void 0;
    var DeviceType;
    (function(DeviceType) {
      DeviceType[DeviceType["Normal"] = 0] = "Normal";
      DeviceType[DeviceType["NotchIOS"] = 1] = "NotchIOS";
      DeviceType[DeviceType["NotchAndriod"] = 2] = "NotchAndriod";
    })(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
    var DeviceTypeUtils = function() {
      function DeviceTypeUtils() {}
      DeviceTypeUtils.getDeviceType = function() {
        var size = cc.director.getWinSize();
        var screenRatio = size.height / size.width;
        if (this.isLiuHai(screenRatio)) return DeviceType.NotchIOS;
        if (this.isQuanMian(screenRatio)) return DeviceType.NotchAndriod;
        return DeviceType.Normal;
      };
      DeviceTypeUtils.isQuanMian = function(screenRatio) {
        return screenRatio > 1.789 && screenRatio < 19 / 9;
      };
      DeviceTypeUtils.isEqual19_9 = function(screenRatio) {
        return screenRatio == 19 / 9;
      };
      DeviceTypeUtils.isLiuHai = function(screenRatio) {
        return screenRatio >= 19 / 9;
      };
      DeviceTypeUtils.isNormal = function(screenRatio) {
        return screenRatio <= 1.789;
      };
      DeviceTypeUtils.getTopViewAdpatHeight = function() {
        var height = 0;
        var type = this.getDeviceType();
        switch (type) {
         case DeviceType.NotchIOS:
          height = 64;
          break;

         case DeviceType.NotchAndriod:
          height = 60;
        }
        return height;
      };
      return DeviceTypeUtils;
    }();
    exports.default = DeviceTypeUtils;
    cc._RF.pop();
  }, {} ],
  EntityBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e01d2RIEe5Nz4MrrEImgNVZ", "EntityBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WorldBase_1 = require("../World/WorldBase");
    var EntityNodePool_1 = require("./EntityNodePool");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EntityBase = function(_super) {
      __extends(EntityBase, _super);
      function EntityBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.m_identifier = 0;
        _this._world = null;
        _this.m_prefabName = "";
        return _this;
      }
      EntityBase.prototype.getIdentifier = function() {
        return this.m_identifier;
      };
      EntityBase.prototype.getPosition = function() {
        var position = cc.v2(0, 0);
        if (this.node) {
          var nodePosition = this.node.getPosition();
          position.x = nodePosition.x;
          position.y = nodePosition.y;
        }
        return position;
      };
      EntityBase.prototype.setPosition = function(position) {
        this.node && this.node.setPosition(position);
      };
      EntityBase.prototype.getWorld = function() {
        return this._world;
      };
      EntityBase.prototype.setWorld = function(world) {
        this._world = world;
      };
      EntityBase.prototype.initEntity = function(world) {
        this.m_identifier = world.getNextValidID();
        this.setWorld(world);
      };
      EntityBase.prototype.dispatchMessage = function(entityID, message) {
        this._world && this._world.dispatchMessage(entityID, message);
      };
      EntityBase.prototype.onMessage = function(msg) {};
      EntityBase.prototype.getPrefabName = function() {
        return this.m_prefabName;
      };
      EntityBase.prototype.setPrefabName = function(name) {
        if (name == this.m_prefabName) return;
        this.m_prefabName = name;
      };
      EntityBase.prototype.recycle = function() {
        this.node.removeFromParent(false);
        EntityNodePool_1.default.getInstance().putEntityNode(this);
      };
      EntityBase.prototype.onRecycle = function() {
        this.setWorld(null);
        this.m_identifier = WorldBase_1.default.InvalidID;
        this.m_prefabName = "";
      };
      EntityBase = __decorate([ ccclass ], EntityBase);
      return EntityBase;
    }(cc.Component);
    exports.default = EntityBase;
    cc._RF.pop();
  }, {
    "../World/WorldBase": "WorldBase",
    "./EntityNodePool": "EntityNodePool"
  } ],
  EntityNodePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b7f8885o1AN4fUUwNrba+O", "EntityNodePool");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AssetCache_1 = require("../../AssetCache/AssetCache");
    var Debuger_1 = require("../../Utils/Debuger");
    var EntityNodePool = function() {
      function EntityNodePool() {
        this._entityNodePools = {};
      }
      EntityNodePool.getInstance = function() {
        null == this.instance && (this.instance = new EntityNodePool());
        return this.instance;
      };
      EntityNodePool.prototype.getEntityNode = function(bundleName, fileName, className) {
        var node = null;
        var nodePool = this._entityNodePools[fileName];
        if (nodePool && nodePool.size() > 0) node = nodePool.get(); else {
          var res = AssetCache_1.default.getInstance().getAssetSync(bundleName, fileName, cc.Prefab);
          res && (node = cc.instantiate(res));
        }
        if (node) {
          var component = node.getComponent(className);
          component || (component = node.addComponent(className));
          component.setPrefabName(bundleName + "/" + fileName);
          return component;
        }
        return null;
      };
      EntityNodePool.prototype.putEntityNode = function(entity) {
        if (!entity) return;
        var prefabFileName = entity.getPrefabName();
        if ("" != prefabFileName) {
          this.putPrefabNode(entity.node, prefabFileName);
          entity.onRecycle();
        }
      };
      EntityNodePool.prototype.putPrefabNode = function(node, prefabFileName) {
        this._entityNodePools.hasOwnProperty(prefabFileName) || (this._entityNodePools[prefabFileName] = new cc.NodePool(prefabFileName));
        var nodePool = this._entityNodePools[prefabFileName];
        nodePool.size() < EntityNodePool.maxPoolCapacity ? nodePool.put(node) : Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, "Pool is Full");
      };
      EntityNodePool.prototype.clear = function() {
        for (var key in this._entityNodePools) {
          var pool = this._entityNodePools[key];
          pool.clear();
        }
        this._entityNodePools = {};
      };
      EntityNodePool.maxPoolCapacity = 100;
      EntityNodePool.instance = null;
      return EntityNodePool;
    }();
    exports.default = EntityNodePool;
    cc._RF.pop();
  }, {
    "../../AssetCache/AssetCache": "AssetCache",
    "../../Utils/Debuger": "Debuger"
  } ],
  EventDispatcher: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dea37g8uJlKlJE7yPyvOpFk", "EventDispatcher");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventDispatcher = function() {
      function EventDispatcher() {
        this._eventTarget = null;
      }
      EventDispatcher.create = function() {
        var instance = new EventDispatcher();
        instance.init();
        return instance;
      };
      EventDispatcher.prototype.init = function() {
        this._eventTarget = new cc.EventTarget();
      };
      EventDispatcher.prototype.hasEventListener = function(type) {
        return this._eventTarget.hasEventListener(type);
      };
      EventDispatcher.prototype.registListener = function(type, callback, target) {
        return this._eventTarget.on(type, callback, target, false);
      };
      EventDispatcher.prototype.removeListener = function(type, callback, target) {
        this._eventTarget.off(type, callback, target);
      };
      EventDispatcher.prototype.removeListenerTarget = function(target) {
        this._eventTarget.targetOff(target);
      };
      EventDispatcher.prototype.removeAllListener = function(keyOrTarget) {
        this._eventTarget.removeAll(keyOrTarget);
      };
      EventDispatcher.prototype.registListenerOnce = function(type, callback, target) {
        this._eventTarget.once(type, callback);
      };
      EventDispatcher.prototype.dispatchEvent = function(event) {
        this._eventTarget.dispatchEvent(event);
      };
      return EventDispatcher;
    }();
    exports.default = EventDispatcher;
    cc._RF.pop();
  }, {} ],
  GameMath: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0057cTORo9CGISuz2KiRCq7", "GameMath");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.QuadricEquation = void 0;
    var QuadricEquation = function() {
      function QuadricEquation() {
        this.a = 0;
        this.b = 0;
        this.c = 0;
      }
      QuadricEquation.prototype.getPoint = function(x) {
        var result = cc.v2(x, this.a * x * x + this.b * x + this.c);
        return result;
      };
      return QuadricEquation;
    }();
    exports.QuadricEquation = QuadricEquation;
    var GameMath = function() {
      function GameMath() {}
      GameMath.getQuadricEquation = function(pointA, pointB, pointC) {
        var a11 = 1;
        var a12 = pointA.x;
        var a13 = pointA.x * pointA.x;
        var a21 = 1;
        var a22 = pointB.x;
        var a23 = pointB.x * pointB.x;
        var a31 = 1;
        var a32 = pointC.x;
        var a33 = pointC.x * pointC.x;
        var b11 = pointA.y;
        var b21 = pointB.y;
        var b31 = pointC.y;
        var CAbs = a11 * a22 * a33 + a12 * a23 * a31 + a13 * a21 * a32 - a13 * a22 * a31 - a11 * a23 * a32 - a12 * a21 * a33;
        if (0 == CAbs) return null;
        var c11 = (a22 * a33 - a23 * a32) / CAbs;
        var c12 = -1 * (a12 * a33 - a13 * a32) / CAbs;
        var c13 = (a12 * a23 - a13 * a22) / CAbs;
        var c21 = -1 * (a21 * a33 - a23 * a31) / CAbs;
        var c22 = (a11 * a33 - a13 * a31) / CAbs;
        var c23 = -1 * (a11 * a23 - a13 * a21) / CAbs;
        var c31 = (a21 * a32 - a22 * a31) / CAbs;
        var c32 = -1 * (a11 * a32 - a12 * a31) / CAbs;
        var c33 = (a11 * a22 - a12 * a21) / CAbs;
        var a = c11 * b11 + c12 * b21 + c13 * b31;
        var b = c21 * b11 + c22 * b21 + c23 * b31;
        var c = c31 * b11 + c32 * b21 + c33 * b31;
        var equation = new QuadricEquation();
        equation.a = c;
        equation.b = b;
        equation.c = a;
        return equation;
      };
      GameMath.degreeToRadian = function(degree) {
        return degree / 180 * Math.PI;
      };
      GameMath.radinToDegree = function(radin) {
        return radin / Math.PI * 180;
      };
      GameMath.randomInteger = function(min, max) {
        var delta = max - min;
        var radom = Math.round(Math.random() * delta);
        var value = min + radom;
        return value;
      };
      GameMath.isHorizontalRayIntersectsSegment = function(point, start, end) {
        if (start.y == end.y) return false;
        if (start.y > point.y && end.y > point.y) return false;
        if (start.y < point.y && end.y < point.y) return false;
        if (start.x < point.x && end.x < point.x) return false;
        if (start.y == point.y && end.y > point.y) return false;
        if (end.y == point.y && start.y > point.y) return false;
        var xSeg = end.x - (end.x - start.x) / (end.y - start.y) * (end.y - point.y);
        if (xSeg < point.x) return false;
        return true;
      };
      GameMath.isPointInPolygon = function(point, polygonVertexes) {
        var intersectionCount = 0;
        for (var i = 0; i < polygonVertexes.length; i++) {
          var vertex = polygonVertexes[i];
          var nextVertex = polygonVertexes[(i + 1) % polygonVertexes.length];
          this.isHorizontalRayIntersectsSegment(point, vertex, nextVertex) && (intersectionCount += 1);
        }
        return intersectionCount % 2 == 1;
      };
      GameMath.getScaleFromViewSize = function(viewSize, designSize, minSacle, maxScal) {
        void 0 === minSacle && (minSacle = 0);
        void 0 === maxScal && (maxScal = 1);
        var scale = Math.min(viewSize.width / designSize.width, viewSize.height / designSize.height);
        scale = GameMath.clamp(scale, minSacle, maxScal);
        return scale;
      };
      GameMath.clamp = function(value, min, max) {
        var minValue = Math.min(min, max);
        var maxValue = Math.max(min, max);
        return Math.max(Math.min(value, maxValue), minValue);
      };
      return GameMath;
    }();
    exports.default = GameMath;
    cc._RF.pop();
  }, {} ],
  Heap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "56aaflPmJ1OFaiaKvlCSsAY", "Heap");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Heap = function() {
      function Heap(compareFunc, equalsFunc) {
        this.m_elements = [];
        this.compareFunc = null;
        this.equalsFunc = null;
        this.compareFunc = compareFunc;
        this.equalsFunc = equalsFunc;
      }
      Heap.prototype.getElements = function() {
        return this.m_elements;
      };
      Heap.prototype.isEmpty = function() {
        return this.m_elements.length <= 0;
      };
      Heap.prototype.length = function() {
        return this.m_elements.length;
      };
      Heap.prototype.peek = function() {
        return this.m_elements[0];
      };
      Heap.prototype.leftChildIndexFromIndex = function(index) {
        return 2 * index + 1;
      };
      Heap.prototype.rightChildIndexFromIndex = function(index) {
        return 2 * index + 2;
      };
      Heap.prototype.parentIndexFormIndex = function(index) {
        return Math.floor((index - 1) / 2);
      };
      Heap.prototype.indexOf = function(element) {
        return this._indexOf(element, 0);
      };
      Heap.prototype.push = function(element) {
        this.m_elements.push(element);
        this.shiftUpFromIndex(this.length() - 1);
      };
      Heap.prototype.pop = function() {
        if (!this.isEmpty()) {
          var temp = this.m_elements[0];
          this.m_elements[0] = this.m_elements[this.length() - 1];
          this.m_elements[this.length() - 1] = temp;
          var result = this.m_elements.pop();
          this.shiftDownFormIndex(0);
          return result;
        }
        return null;
      };
      Heap.prototype.removeAtIndex = function(index) {
        if (index < this.length()) {
          var temp = this.m_elements[index];
          this.m_elements[index] = this.m_elements[this.length() - 1];
          this.m_elements[this.length() - 1] = temp;
          var removeElement = this.m_elements.pop();
          this.shiftDownFormIndex(index);
          this.shiftUpFromIndex(index);
          return removeElement;
        }
        return null;
      };
      Heap.prototype._indexOf = function(element, fromIndex) {
        if (fromIndex >= this.length()) return -1;
        if (this.compareFunc(element, this.m_elements[fromIndex])) return -1;
        if (this.equalsFunc(element, this.m_elements[fromIndex])) return fromIndex;
        var leftSearchIndex = this._indexOf(element, this.leftChildIndexFromIndex(fromIndex));
        if (-1 != leftSearchIndex) return leftSearchIndex;
        var rightSearchIndex = this._indexOf(element, this.rightChildIndexFromIndex(fromIndex));
        if (-1 != rightSearchIndex) return rightSearchIndex;
        return -1;
      };
      Heap.prototype.shiftUpFromIndex = function(index) {
        var parentIndex = this.parentIndexFormIndex(index);
        if (parentIndex >= 0 && this.compareFunc(this.m_elements[index], this.m_elements[parentIndex])) {
          var temp = this.m_elements[index];
          this.m_elements[index] = this.m_elements[parentIndex];
          this.m_elements[parentIndex] = temp;
          this.shiftUpFromIndex(parentIndex);
        }
      };
      Heap.prototype.shiftDownFormIndex = function(index) {
        var candidate = index;
        var leftChildIndex = this.leftChildIndexFromIndex(index);
        leftChildIndex < this.length() && this.compareFunc(this.m_elements[leftChildIndex], this.m_elements[candidate]) && (candidate = leftChildIndex);
        var rightChildIndex = this.rightChildIndexFromIndex(index);
        rightChildIndex < this.length() && this.compareFunc(this.m_elements[rightChildIndex], this.m_elements[candidate]) && (candidate = rightChildIndex);
        if (candidate == index) return;
        var temp = this.m_elements[index];
        this.m_elements[index] = this.m_elements[candidate];
        this.m_elements[candidate] = temp;
        this.shiftDownFormIndex(candidate);
      };
      return Heap;
    }();
    exports.default = Heap;
    cc._RF.pop();
  }, {} ],
  HttpWrapperBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f6347LFtdEmpxnCRABQlb7", "HttpWrapperBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HttpMethod = exports.HttpWrapperState = void 0;
    var HttpWrapperState;
    (function(HttpWrapperState) {
      HttpWrapperState[HttpWrapperState["None"] = 0] = "None";
      HttpWrapperState[HttpWrapperState["CONNECTING"] = 1] = "CONNECTING";
      HttpWrapperState[HttpWrapperState["OPEN"] = 2] = "OPEN";
      HttpWrapperState[HttpWrapperState["CLOSING"] = 3] = "CLOSING";
      HttpWrapperState[HttpWrapperState["CLOSED"] = 4] = "CLOSED";
    })(HttpWrapperState = exports.HttpWrapperState || (exports.HttpWrapperState = {}));
    var HttpMethod;
    (function(HttpMethod) {
      HttpMethod["GET"] = "GET";
      HttpMethod["HEAD"] = "HEAD";
      HttpMethod["POST"] = "POST";
      HttpMethod["PUT"] = "PUT";
      HttpMethod["DELETE"] = "DELETE";
      HttpMethod["CONNECT"] = "CONNECT";
      HttpMethod["OPTIONS"] = "OPTIONS";
      HttpMethod["TRACE"] = "TRACE";
    })(HttpMethod = exports.HttpMethod || (exports.HttpMethod = {}));
    var HttpWrapperBase = function() {
      function HttpWrapperBase() {
        this._url = "";
        this._state = HttpWrapperState.None;
        this._delegate = null;
      }
      HttpWrapperBase.prototype.getUrl = function() {
        return this._url;
      };
      HttpWrapperBase.prototype.setUrl = function(url) {
        this._url = url;
      };
      HttpWrapperBase.prototype.getState = function() {
        return this._state;
      };
      HttpWrapperBase.prototype.setState = function(state) {
        this._state = state;
      };
      HttpWrapperBase.prototype.getDelegate = function() {
        return this._delegate;
      };
      HttpWrapperBase.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
      };
      HttpWrapperBase.prototype.onHttpReadyStateChange = function(data) {
        this._delegate && this._delegate.onHttpReadyStateChange(data);
      };
      HttpWrapperBase.prototype.onHttpLoad = function(data) {
        this._delegate && this._delegate.onHttpLoad(data);
      };
      HttpWrapperBase.prototype.onHttpLoadStart = function(data) {
        this._delegate && this._delegate.onHttpLoadStart(data);
      };
      HttpWrapperBase.prototype.onHttpProgress = function(data) {
        this._delegate && this._delegate.onHttpProgress(data);
      };
      HttpWrapperBase.prototype.onHttpLoadEnd = function(data) {
        this._delegate && this._delegate.onHttpLoadEnd(data);
      };
      HttpWrapperBase.prototype.onHttpAbort = function(data) {
        this._delegate && this._delegate.onHttpAbort(data);
      };
      HttpWrapperBase.prototype.onHttpError = function(data) {
        this._delegate && this._delegate.onHttpError(data);
      };
      HttpWrapperBase.prototype.onHttpTimeOut = function(data) {
        this._delegate && this._delegate.onHttpTimeOut(data);
      };
      HttpWrapperBase.prototype.initBase = function(url, delegate) {
        this.setUrl(url);
        this.setDelegate(delegate);
      };
      return HttpWrapperBase;
    }();
    exports.default = HttpWrapperBase;
    cc._RF.pop();
  }, {} ],
  HttpWrapperWeb: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1cd7HyrshOo51GxKjAPIbP", "HttpWrapperWeb");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var HttpWrapperBase_1 = require("../Base/HttpWrapperBase");
    var HttpWrapperWeb = function(_super) {
      __extends(HttpWrapperWeb, _super);
      function HttpWrapperWeb() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._request = null;
        return _this;
      }
      HttpWrapperWeb.create = function(url, delegate) {
        var instance = new HttpWrapperWeb();
        instance.init(url, delegate);
        return instance;
      };
      HttpWrapperWeb.prototype.init = function(url, delegate) {
        _super.prototype.initBase.call(this, url, delegate);
      };
      HttpWrapperWeb.prototype.connect = function() {
        this.setState(HttpWrapperBase_1.HttpWrapperState.OPEN);
        this._request = new XMLHttpRequest();
        this._request.timeout = 3e3;
        this._request.responseType = "text";
        this._request.onreadystatechange = this.onReadyStateChange.bind(this);
        this._request.onload = this.onLoad.bind(this);
        this._request.onloadstart = this.onLoadStart.bind(this);
        this._request.onprogress = this.onProgress.bind(this);
        this._request.onloadend = this.onLoadEnd.bind(this);
        this._request.onabort = this.onAbort.bind(this);
        this._request.onerror = this.onError.bind(this);
        this._request.ontimeout = this.onHttpTimeOut.bind(this);
        this._request.open(HttpWrapperBase_1.HttpMethod.POST, this.getUrl());
      };
      HttpWrapperWeb.prototype.send = function(data) {
        this.getState() == HttpWrapperBase_1.HttpWrapperState.OPEN && this._request.send(data);
      };
      HttpWrapperWeb.prototype.close = function() {
        if (this._request) {
          this.setState(HttpWrapperBase_1.HttpWrapperState.CLOSING);
          this._request.abort();
        }
      };
      HttpWrapperWeb.prototype.onReadyStateChange = function(data) {
        this.onHttpReadyStateChange(data);
      };
      HttpWrapperWeb.prototype.onLoad = function(data) {
        this.onHttpLoad(data);
      };
      HttpWrapperWeb.prototype.onLoadStart = function(data) {
        this.onHttpLoadStart(data);
      };
      HttpWrapperWeb.prototype.onProgress = function(data) {
        this.onHttpProgress(data);
      };
      HttpWrapperWeb.prototype.onLoadEnd = function(data) {
        this.onHttpLoadEnd(data);
      };
      HttpWrapperWeb.prototype.onAbort = function(data) {
        this.onHttpAbort(data);
      };
      HttpWrapperWeb.prototype.onError = function(data) {
        this.onHttpError(data);
      };
      HttpWrapperWeb.prototype.onTimeOut = function(data) {
        this.onHttpTimeOut(data);
      };
      return HttpWrapperWeb;
    }(HttpWrapperBase_1.default);
    exports.default = HttpWrapperWeb;
    cc._RF.pop();
  }, {
    "../Base/HttpWrapperBase": "HttpWrapperBase"
  } ],
  IGame: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abd46tpzY5JgIlV/XpvZqD6", "IGame");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneDirector_1 = require("../SceneDirector/SceneDirector");
    var LayerDirectorError_1 = require("../LayerDirector/LayerDirectorError");
    var IGame = function() {
      function IGame() {
        this._sceneDirector = null;
        this._sceneDirector = SceneDirector_1.default.getInstance();
      }
      IGame.getInstance = function() {
        null == this._instance && (this._instance = new IGame());
        return this._instance;
      };
      IGame.prototype.replaceSceneWithPreloadInfo = function(info, sceneName, param, complete) {
        this._sceneDirector.replaceSceneWithInfo(info, sceneName, param, complete);
      };
      IGame.prototype.replaceSceneWithSwitchScene = function(info, sceneName, param, complete) {
        this._sceneDirector.replaceSceneWithSwitchScene(info, sceneName, param, complete);
      };
      IGame.prototype.getCurrentScene = function() {
        return this._sceneDirector.getCurrentScene();
      };
      IGame.prototype.getLayerWoithID = function(identifier) {
        var scene = this.getCurrentScene();
        if (scene) return scene.getLayerWithID(identifier);
        return null;
      };
      IGame.prototype.addLayer = function(layer, param, completeCallback) {
        var scene = this.getCurrentScene();
        if (scene) return scene.addLayer(layer, param, completeCallback);
        completeCallback && completeCallback(LayerDirectorError_1.default.NO_CURRENT_SCENE, null);
        return null;
      };
      IGame.prototype.addLayerWithPrefab = function(bundleName, prefabs, identifier, param, completeCallback) {
        var scene = this.getCurrentScene();
        scene ? scene.addLayerWithPrefab(bundleName, prefabs, identifier, param, function(error, layer) {
          completeCallback && completeCallback(error, layer);
        }) : completeCallback && completeCallback(LayerDirectorError_1.default.NO_CURRENT_SCENE, null);
      };
      IGame.prototype.removeLayerWithID = function(identifier) {
        var scene = this.getCurrentScene();
        if (scene) return scene.removeLayerWithID(identifier);
        return null;
      };
      IGame._instance = null;
      return IGame;
    }();
    exports.default = IGame;
    cc._RF.pop();
  }, {
    "../LayerDirector/LayerDirectorError": "LayerDirectorError",
    "../SceneDirector/SceneDirector": "SceneDirector"
  } ],
  IHttpDelegate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "73ee32l/vFMjrY0GmnrKBwZ", "IHttpDelegate");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  ILayerRoot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c96106LEGVG35k9Dh4OsIl8", "ILayerRoot");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  ISocketDelegate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eac7biJmz5Gwa4rO/QyPRfG", "ISocketDelegate");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  LaunchScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e002/maC5GlaGn6FRYZllN", "LaunchScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneBase_1 = require("./SceneBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LaunchScene = function(_super) {
      __extends(LaunchScene, _super);
      function LaunchScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._hasEntered = false;
        return _this;
      }
      LaunchScene.prototype.onEnable = function() {
        _super.prototype.onEnable.call(this);
        if (!this._hasEntered) {
          this._hasEntered = true;
          this.enterScene(null);
        }
      };
      LaunchScene = __decorate([ ccclass ], LaunchScene);
      return LaunchScene;
    }(SceneBase_1.default);
    exports.default = LaunchScene;
    cc._RF.pop();
  }, {
    "./SceneBase": "SceneBase"
  } ],
  LayerBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "17fadmjdt1A/4dcN4l0KyLl", "LayerBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DefaultConfig_1 = require("../DefaultConfigs/DefaultConfig");
    var Debuger_1 = require("../Utils/Debuger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LayerBase = function(_super) {
      __extends(LayerBase, _super);
      function LayerBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._layerRoot = null;
        return _this;
      }
      LayerBase.prototype.getLayerRoot = function() {
        return this._layerRoot;
      };
      LayerBase.prototype.setLayerRoot = function(root) {
        this._layerRoot = root;
      };
      LayerBase.prototype.getLayerZOrder = function() {
        return DefaultConfig_1.default.ZORDER_UI_LAYER_DEFAULT;
      };
      LayerBase.prototype.onLoad = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getLayerName() + ".onLayerLoad");
        this.onLayerLoad();
      };
      LayerBase.prototype.onEnable = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getLayerName() + ".onLayerEnable");
        this.onLayerEnable();
      };
      LayerBase.prototype.enterLayer = function(param) {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getLayerName() + ".onLayerEnter");
        this.onLayerEnter(param);
      };
      LayerBase.prototype.start = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getLayerName() + ".onLayerStart");
        this.onLayerStart();
      };
      LayerBase.prototype.update = function(dt) {
        this.onLayerUpdate(dt);
      };
      LayerBase.prototype.exitLayer = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getLayerName() + ".onLayerExit");
        this.onLayerExit();
        this.node.destroy();
      };
      LayerBase.prototype.onDisable = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getLayerName() + ".onLayerDisable");
        this.onLayerDisable();
      };
      LayerBase.prototype.onDestroy = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getLayerName() + ".onLayerDestroy");
        this.onLayerDestroy();
      };
      LayerBase.prototype.close = function() {
        this.getLayerRoot().removeLayerWithID(this.getLayerName());
      };
      LayerBase = __decorate([ ccclass ], LayerBase);
      return LayerBase;
    }(cc.Component);
    exports.default = LayerBase;
    cc._RF.pop();
  }, {
    "../DefaultConfigs/DefaultConfig": "DefaultConfig",
    "../Utils/Debuger": "Debuger"
  } ],
  LayerDirectorError: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d5fftqvDpGIqe7D69NN9M9", "LayerDirectorError");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LayerDirectorErrorCode = void 0;
    var LayerDirectorErrorCode;
    (function(LayerDirectorErrorCode) {
      LayerDirectorErrorCode[LayerDirectorErrorCode["None"] = 0] = "None";
      LayerDirectorErrorCode[LayerDirectorErrorCode["NoLayerBaseComponent"] = 1] = "NoLayerBaseComponent";
      LayerDirectorErrorCode[LayerDirectorErrorCode["Pending"] = 2] = "Pending";
      LayerDirectorErrorCode[LayerDirectorErrorCode["ResourceFailed"] = 3] = "ResourceFailed";
      LayerDirectorErrorCode[LayerDirectorErrorCode["NoCurrentScene"] = 4] = "NoCurrentScene";
      LayerDirectorErrorCode[LayerDirectorErrorCode["DirectorDestroyed"] = 5] = "DirectorDestroyed";
    })(LayerDirectorErrorCode = exports.LayerDirectorErrorCode || (exports.LayerDirectorErrorCode = {}));
    var LayerDirectorError = function() {
      function LayerDirectorError(errorCode) {
        this.errorCode = LayerDirectorErrorCode.None;
      }
      LayerDirectorError.create = function(errorCode) {
        var instance = new LayerDirectorError(errorCode);
        return instance;
      };
      LayerDirectorError.SUCCEED = new LayerDirectorError(LayerDirectorErrorCode.None);
      LayerDirectorError.NO_LAYER_BASE_COMPONENT = new LayerDirectorError(LayerDirectorErrorCode.NoLayerBaseComponent);
      LayerDirectorError.PENDING = new LayerDirectorError(LayerDirectorErrorCode.Pending);
      LayerDirectorError.REOURCE_FAILED = new LayerDirectorError(LayerDirectorErrorCode.ResourceFailed);
      LayerDirectorError.NO_CURRENT_SCENE = new LayerDirectorError(LayerDirectorErrorCode.NoCurrentScene);
      LayerDirectorError.DIRECTOR_DESTROYED = new LayerDirectorError(LayerDirectorErrorCode.DirectorDestroyed);
      return LayerDirectorError;
    }();
    exports.default = LayerDirectorError;
    cc._RF.pop();
  }, {} ],
  LayerDirector: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db991xssoJMJ6YA/rWtjfqO", "LayerDirector");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LayerInfo = void 0;
    var LayerBase_1 = require("./LayerBase");
    var LayerLoader_1 = require("./LayerLoader");
    var LayerDirectorError_1 = require("./LayerDirectorError");
    var Debuger_1 = require("../Utils/Debuger");
    var LayerInfo = function() {
      function LayerInfo() {
        this.identifier = "";
        this.layer = null;
        this.refrenceCount = 0;
      }
      LayerInfo.create = function(identifier) {
        var instance = new LayerInfo();
        instance.identifier = identifier;
        return instance;
      };
      return LayerInfo;
    }();
    exports.LayerInfo = LayerInfo;
    var LayerDirector = function() {
      function LayerDirector(layerRoot) {
        this._layerLoaders = [];
        this._layerInfos = {};
        this._layerRoot = null;
        this._isDestroyed = false;
        this._layerRoot = layerRoot;
        this._isDestroyed = false;
      }
      LayerDirector.prototype.getLayerLoaderWithID = function(identifier) {
        if (this._isDestroyed) return null;
        var layerLoader = null;
        for (var _i = 0, _a = this._layerLoaders; _i < _a.length; _i++) {
          var loader = _a[_i];
          if (loader.identifier == identifier) {
            layerLoader = loader;
            break;
          }
        }
        return layerLoader;
      };
      LayerDirector.prototype.getLayerInfoWithID = function(identifier) {
        if (this._isDestroyed) return null;
        var layerInfo = this._layerInfos[identifier];
        if (null == layerInfo) {
          layerInfo = LayerInfo.create(identifier);
          this._layerInfos[identifier] = layerInfo;
        }
        return layerInfo;
      };
      LayerDirector.prototype.getLayerWithID = function(identifier) {
        if (this._isDestroyed) return null;
        var layerInfo = this._layerInfos[identifier];
        if (layerInfo) return layerInfo.layer;
        return null;
      };
      LayerDirector.prototype.addLayerToRoot = function(layer, identifier, param) {
        if (this._isDestroyed) return null;
        var resultLayer = this.getLayerWithID(identifier);
        if (null == resultLayer) {
          var layerInfo = this.getLayerInfoWithID(identifier);
          if (layerInfo.refrenceCount > 0) if (this._layerRoot) {
            layerInfo.layer = layer;
            layer.node.setPosition(0, 0);
            this._layerRoot.addLayerToRoot(layer, layer.getLayerZOrder());
            layer.setLayerRoot(this._layerRoot);
            layer.enterLayer(param);
            resultLayer = layer;
          } else this.removeLayerWithID(identifier);
        }
        return resultLayer;
      };
      LayerDirector.prototype.removeLayerWithID = function(identifier) {
        if (this._isDestroyed) return null;
        var layer = null;
        var layerInfo = this.getLayerInfoWithID(identifier);
        layerInfo.refrenceCount -= 1;
        if (layerInfo.refrenceCount <= 0) {
          if (layerInfo.layer) {
            layer = layerInfo.layer;
            layer.exitLayer();
          }
          delete this._layerInfos[identifier];
        }
        return layer;
      };
      LayerDirector.prototype.addLayer = function(layer, param, completeCallback) {
        if (this._isDestroyed) {
          completeCallback && completeCallback(LayerDirectorError_1.default.DIRECTOR_DESTROYED, null);
          return null;
        }
        var identifier = layer.getLayerName();
        var layerInfo = this.getLayerInfoWithID(identifier);
        layerInfo.refrenceCount += 1;
        var resultLayer = this.addLayerToRoot(layer, identifier, param);
        completeCallback && completeCallback(LayerDirectorError_1.default.SUCCEED, resultLayer);
        return resultLayer;
      };
      LayerDirector.prototype.addLayerWithLoader = function(loader) {
        if (this._isDestroyed) return;
        if (loader.state != LayerLoader_1.LayerLoaderState.LoadSucceed) return;
        var node = cc.instantiate(loader.resource);
        var layerBase = node.getComponent(LayerBase_1.default);
        if (layerBase) {
          var layer = this.addLayerToRoot(layerBase, loader.identifier, loader.enterParam);
          loader.completeCallback && loader.completeCallback(LayerDirectorError_1.default.SUCCEED, layer);
          loader.completeCallback = null;
        } else {
          Debuger_1.default.error(Debuger_1.default.FILTER_TAG01, "Not find LayerBase Component in", loader.getPrefabPath());
          this.removeLayerWithID(loader.identifier);
          loader.completeCallback && loader.completeCallback(LayerDirectorError_1.default.NO_LAYER_BASE_COMPONENT, null);
          loader.completeCallback = null;
        }
        loader.state = LayerLoader_1.LayerLoaderState.Finished;
      };
      LayerDirector.prototype.addLayerWithPrefab = function(bundleName, prefabPath, identifier, enterParam, completeCallback) {
        if (this._isDestroyed) {
          completeCallback && completeCallback(LayerDirectorError_1.default.DIRECTOR_DESTROYED, null);
          return;
        }
        var layerInfo = this.getLayerInfoWithID(identifier);
        layerInfo.refrenceCount += 1;
        var layerLoader = this.getLayerLoaderWithID(identifier);
        if (layerLoader) completeCallback && completeCallback(LayerDirectorError_1.default.PENDING, null); else {
          layerLoader = LayerLoader_1.default.create(this, bundleName, prefabPath, identifier, enterParam, completeCallback);
          this._layerLoaders.push(layerLoader);
          layerLoader.startLoad();
        }
      };
      LayerDirector.prototype.onResourceLoadSucceed = function(loader) {
        if (this._isDestroyed) return;
        for (var i_1 = 0; i_1 < this._layerLoaders.length; i_1++) {
          var loader_1 = this._layerLoaders[i_1];
          this.addLayerWithLoader(loader_1);
          if (loader_1.state != LayerLoader_1.LayerLoaderState.Finished) break;
        }
        for (var i = this._layerLoaders.length - 1; i >= 0; i--) {
          var loader_2 = this._layerLoaders[i];
          loader_2.state == LayerLoader_1.LayerLoaderState.Finished && this._layerLoaders.splice(i, 1);
        }
      };
      LayerDirector.prototype.onResourceLoadFailed = function(loader) {
        if (this._isDestroyed) {
          loader.completeCallback && loader.completeCallback(LayerDirectorError_1.default.DIRECTOR_DESTROYED, null);
          return;
        }
        this.removeLayerWithID(loader.identifier);
        var index = this._layerLoaders.indexOf(loader);
        -1 != index && this._layerLoaders.splice(index, 1);
        loader.completeCallback && loader.completeCallback(LayerDirectorError_1.default.REOURCE_FAILED, null);
      };
      LayerDirector.prototype.destroy = function() {
        if (this._isDestroyed) return;
        var keys = Object.keys(this._layerInfos);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          this.removeLayerWithID(key);
        }
        this._layerRoot = null;
        this._isDestroyed = true;
      };
      return LayerDirector;
    }();
    exports.default = LayerDirector;
    cc._RF.pop();
  }, {
    "../Utils/Debuger": "Debuger",
    "./LayerBase": "LayerBase",
    "./LayerDirectorError": "LayerDirectorError",
    "./LayerLoader": "LayerLoader"
  } ],
  LayerEnterParamBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d6e7cnnp8VJHKLSGHKdnhA1", "LayerEnterParamBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LayerEnterParamBase = function() {
      function LayerEnterParamBase() {}
      return LayerEnterParamBase;
    }();
    exports.default = LayerEnterParamBase;
    cc._RF.pop();
  }, {} ],
  LayerLoader: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58e23ab8hRLpoyR5WpHaz7f", "LayerLoader");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LayerLoaderState = void 0;
    var AssetCache_1 = require("../AssetCache/AssetCache");
    var LayerLoaderState;
    (function(LayerLoaderState) {
      LayerLoaderState[LayerLoaderState["None"] = 0] = "None";
      LayerLoaderState[LayerLoaderState["Loading"] = 1] = "Loading";
      LayerLoaderState[LayerLoaderState["LoadSucceed"] = 2] = "LoadSucceed";
      LayerLoaderState[LayerLoaderState["LoadFailed"] = 3] = "LoadFailed";
      LayerLoaderState[LayerLoaderState["Finished"] = 4] = "Finished";
    })(LayerLoaderState = exports.LayerLoaderState || (exports.LayerLoaderState = {}));
    var LayerLoader = function() {
      function LayerLoader(delegate, bundleName, path, identifier, enterParam, completeCallback) {
        this.bundleName = "";
        this.prefabPath = "";
        this.delegate = null;
        this.identifier = "";
        this.enterParam = null;
        this.resource = null;
        this.state = LayerLoaderState.None;
        this.retryTimes = 0;
        this.completeCallback = null;
        this.delegate = delegate;
        this.bundleName = bundleName;
        this.prefabPath = path;
        this.identifier = identifier;
        this.enterParam = enterParam;
        this.completeCallback = completeCallback;
      }
      LayerLoader.prototype.getPrefabPath = function() {
        return this.prefabPath;
      };
      LayerLoader.create = function(delegate, bundleName, path, identifier, enterParam, completeCallback) {
        var loader = new LayerLoader(delegate, bundleName, path, identifier, enterParam, completeCallback);
        return loader;
      };
      LayerLoader.prototype.onPrefabLoaded = function(error, resource) {
        if (null == error) {
          this.state = LayerLoaderState.LoadSucceed;
          this.resource = resource;
          this.delegate && this.delegate.onResourceLoadSucceed(this, resource);
        } else if (this.retryTimes < 2) {
          this.retryTimes += 1;
          this.getAsset();
        } else {
          this.state = LayerLoaderState.LoadFailed;
          this.delegate && this.delegate.onResourceLoadFailed(this);
        }
      };
      LayerLoader.prototype.startLoad = function() {
        if (this.state == LayerLoaderState.Loading) return;
        this.getAsset();
      };
      LayerLoader.prototype.getAsset = function() {
        this.state = LayerLoaderState.Loading;
        AssetCache_1.default.getInstance().getAsset(this.bundleName, this.prefabPath, cc.Prefab, null, this.onPrefabLoaded.bind(this));
      };
      return LayerLoader;
    }();
    exports.default = LayerLoader;
    cc._RF.pop();
  }, {
    "../AssetCache/AssetCache": "AssetCache"
  } ],
  LoadingScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "46b0fV4xqZFZK3qPzkaRIy3", "LoadingScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Defines_1 = require("../scripts/Defines/Defines");
    var IGame_1 = require("../scripts/Frameworks/IGame/IGame");
    var LaunchScene_1 = require("../scripts/Frameworks/SceneDirector/LaunchScene");
    var PreloadAssetInfo_1 = require("../scripts/Frameworks/SceneDirector/PreloadAssetInfo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoadingScene = function(_super) {
      __extends(LoadingScene, _super);
      function LoadingScene() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LoadingScene.prototype.getSceneName = function() {
        return Defines_1.SceneName.LoadingScene;
      };
      LoadingScene.prototype.onSceneLoad = function() {};
      LoadingScene.prototype.onSceneEnable = function() {};
      LoadingScene.prototype.onSceneEnter = function(param) {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.enterBundles[Defines_1.AssetBundleID.Common] = [];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.MainScene] = [];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.MainScene);
      };
      LoadingScene.prototype.onSceneStart = function() {};
      LoadingScene.prototype.onSceneUpdate = function(dt) {};
      LoadingScene.prototype.onSceneDisable = function() {};
      LoadingScene.prototype.onSceneExit = function() {};
      LoadingScene.prototype.onSceneDestroy = function() {};
      LoadingScene = __decorate([ ccclass ], LoadingScene);
      return LoadingScene;
    }(LaunchScene_1.default);
    exports.default = LoadingScene;
    cc._RF.pop();
  }, {
    "../scripts/Defines/Defines": "Defines",
    "../scripts/Frameworks/IGame/IGame": "IGame",
    "../scripts/Frameworks/SceneDirector/LaunchScene": "LaunchScene",
    "../scripts/Frameworks/SceneDirector/PreloadAssetInfo": "PreloadAssetInfo"
  } ],
  Message: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6567cAtIZdJUrStRcYFA7MJ", "Message");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Message = function() {
      function Message() {
        this.info = null;
      }
      return Message;
    }();
    exports.default = Message;
    cc._RF.pop();
  }, {} ],
  PageViewCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "628c9d1q5FE+q3i4ocsVqlj", "PageViewCell");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PageViewCell = function(_super) {
      __extends(PageViewCell, _super);
      function PageViewCell() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._index = 0;
        return _this;
      }
      PageViewCell_1 = PageViewCell;
      PageViewCell.prototype.getIndex = function() {
        return this._index;
      };
      PageViewCell.prototype.setIndex = function(index) {
        this._index = index;
      };
      PageViewCell.prototype.reset = function() {
        this._index = PageViewCell_1.InvalidIndex;
      };
      var PageViewCell_1;
      PageViewCell.InvalidIndex = -1;
      PageViewCell = PageViewCell_1 = __decorate([ ccclass ], PageViewCell);
      return PageViewCell;
    }(cc.Component);
    exports.default = PageViewCell;
    cc._RF.pop();
  }, {} ],
  PageViewDataSource: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a1aa4C12OhKCKOhAhG58xgN", "PageViewDataSource");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  PageViewDelegate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13d8cXJIfNG+YKOOBeoqCpP", "PageViewDelegate");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    cc._RF.pop();
  }, {} ],
  PageView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "abd8eJZXbNEWZFvL7iJ2wws", "PageView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PageView = function(_super) {
      __extends(PageView, _super);
      function PageView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.pageView = null;
        _this._usedCells = [];
        _this._delegate = null;
        _this._dataSource = null;
        return _this;
      }
      PageView.prototype.getDelegate = function() {
        return this._delegate;
      };
      PageView.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
      };
      PageView.prototype.getDataSource = function() {
        return this._dataSource;
      };
      PageView.prototype.setDataSource = function(dataSource) {
        this._dataSource = dataSource;
      };
      PageView.prototype.onLoad = function() {
        this.pageView.node.on("page-turning", this.onPageTurning, this);
        this.pageView.node.on("scrolling", this.onScrolling, this);
      };
      PageView.prototype.onDestroy = function() {
        this._delegate = null;
        this._dataSource = null;
      };
      PageView.prototype.setIndexForCell = function(index, cell) {
        cell.setIndex(index);
      };
      PageView.prototype.addCell = function(cell) {
        this.pageView.addPage(cell.node);
        this._usedCells.splice(cell.getIndex(), 0, cell);
      };
      PageView.prototype.removeCell = function(cell) {
        var index = this._usedCells.indexOf(cell);
        -1 != index && this._usedCells.splice(index, 1);
        this.pageView.removePage(cell.node);
        cell.node.destroy();
      };
      PageView.prototype.onPageTurning = function(event) {
        var index = this.pageView.getCurrentPageIndex();
        this._delegate && this._delegate.onRolePageTurning(this, index);
      };
      PageView.prototype.onScrolling = function(event) {
        this._delegate && this._delegate.onRolePageScrolling(this);
      };
      PageView.prototype.getCellAtIndex = function(index) {
        for (var i = 0; i < this._usedCells.length; i++) {
          var element = this._usedCells[i];
          if (element.getIndex() == index) return element;
        }
        return null;
      };
      PageView.prototype.updateCellAtIndex = function(index) {
        if (!this._dataSource) return;
        var cell = this.getCellAtIndex(index);
        cell && this.removeCell(cell);
        if (index >= 0 && index < this._dataSource.numberOfCellsInPageView(this)) {
          var cell_1 = this._dataSource.pageCellAtIndex(this, index);
          this.setIndexForCell(index, cell_1);
          this.addCell(cell_1);
        }
      };
      PageView.prototype.reload = function() {
        for (var index = 0; index < this._usedCells.length; index++) {
          var cell = this._usedCells[index];
          cell.node.destroy;
        }
        this._usedCells.length = 0;
        var startIndex = 0;
        var endIndex = Math.max(this._dataSource.numberOfCellsInPageView(this) - 1, 0);
        for (var index = startIndex; index <= endIndex; index++) {
          if (this.getCellAtIndex(index)) continue;
          this.updateCellAtIndex(index);
        }
        this.onScrolling(null);
      };
      PageView.prototype.setCurrentPageIndex = function(index) {
        this.pageView.setCurrentPageIndex(index);
        this.onScrolling(null);
      };
      PageView.prototype.scrollToPage = function(idx, timeInSecond) {
        this.pageView.scrollToPage(idx, timeInSecond);
        this.onScrolling(null);
        this.onPageTurning(null);
      };
      __decorate([ property(cc.PageView) ], PageView.prototype, "pageView", void 0);
      PageView = __decorate([ ccclass ], PageView);
      return PageView;
    }(cc.Component);
    exports.default = PageView;
    cc._RF.pop();
  }, {} ],
  PlayerInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "174cdhRbDlPTZOAmT8lN/ip", "PlayerInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PlayerInfo = function() {
      function PlayerInfo() {
        this._userId = "";
      }
      PlayerInfo.getInstance = function() {
        null == this._instance && (this._instance = new PlayerInfo());
        return this._instance;
      };
      PlayerInfo.prototype.getUserID = function() {
        return this._userId;
      };
      PlayerInfo.prototype.setUserID = function(userId) {
        this._userId = userId;
      };
      PlayerInfo._instance = null;
      return PlayerInfo;
    }();
    exports.default = PlayerInfo;
    cc._RF.pop();
  }, {} ],
  PreloadAssetInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32a296EB+FAUYKYkHMIkKdP", "PreloadAssetInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PreloadBundleInfo = function() {
      function PreloadBundleInfo(extiBundles, enterBundles, releaseBundlesFirst) {
        void 0 === releaseBundlesFirst && (releaseBundlesFirst = false);
        this.extiBundles = [];
        this.enterBundles = {};
        this.releaseBundlesFirst = false;
        this.extiBundles = extiBundles;
        this.enterBundles = enterBundles;
        this.releaseBundlesFirst = releaseBundlesFirst;
      }
      PreloadBundleInfo.create = function(extiBundles, enterBundles, releaseBundlesFirst) {
        void 0 === extiBundles && (extiBundles = []);
        void 0 === enterBundles && (enterBundles = {});
        void 0 === releaseBundlesFirst && (releaseBundlesFirst = false);
        var instance = new PreloadBundleInfo(extiBundles, enterBundles, releaseBundlesFirst);
        return instance;
      };
      return PreloadBundleInfo;
    }();
    exports.default = PreloadBundleInfo;
    cc._RF.pop();
  }, {} ],
  RedDotEvent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32ab3lNVX9NULyczqZualrJ", "RedDotEvent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedDotEvent = function() {
      function RedDotEvent(eventName) {
        this._eventName = "";
        this._eventName = eventName;
      }
      Object.defineProperty(RedDotEvent.prototype, "eventName", {
        get: function() {
          return this._eventName;
        },
        enumerable: false,
        configurable: true
      });
      return RedDotEvent;
    }();
    exports.default = RedDotEvent;
    cc._RF.pop();
  }, {} ],
  RedDotNotifyCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ba348hHoNJi415IqCQhwIV", "RedDotNotifyCenter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedDotNotifyCenter = function() {
      function RedDotNotifyCenter() {
        this._observerDict = {};
      }
      RedDotNotifyCenter.getInstance = function() {
        null == this._instance && (this._instance = new RedDotNotifyCenter());
        return this._instance;
      };
      RedDotNotifyCenter.prototype.dispatchEvent = function(event) {
        var observers = this._observerDict[event.eventName];
        for (var _i = 0, observers_1 = observers; _i < observers_1.length; _i++) {
          var ob = observers_1[_i];
          ob.onNotify(event);
        }
      };
      RedDotNotifyCenter.prototype.regist = function(eventName, observer) {
        null == this._observerDict[eventName] && (this._observerDict[eventName] = []);
        -1 == this._observerDict[eventName].indexOf(observer) && this._observerDict[eventName].push(observer);
      };
      RedDotNotifyCenter.prototype.remove = function(eventName, observer) {
        if (this._observerDict[eventName]) {
          var index = this._observerDict[eventName].indexOf(observer);
          -1 != index && this._observerDict[eventName].splice(index, 1);
        }
      };
      RedDotNotifyCenter.prototype.removeAll = function(observer) {
        for (var key in this._observerDict) this.remove(key, observer);
      };
      RedDotNotifyCenter._instance = null;
      return RedDotNotifyCenter;
    }();
    exports.default = RedDotNotifyCenter;
    cc._RF.pop();
  }, {} ],
  RedDotObserver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f2f9rL2ctJcK5y+tWjGuRP", "RedDotObserver");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var RedDotNotifyCenter_1 = require("./RedDotNotifyCenter");
    var RedDotObserver = function(_super) {
      __extends(RedDotObserver, _super);
      function RedDotObserver() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RedDotObserver.prototype.onNotify = function(event) {
        this.onRedDotEvent(event);
      };
      RedDotObserver.prototype.listen = function(eventName) {
        RedDotNotifyCenter_1.default.getInstance().regist(eventName, this);
      };
      RedDotObserver.prototype.unlisten = function(eventName) {
        RedDotNotifyCenter_1.default.getInstance().remove(eventName, this);
      };
      RedDotObserver.prototype.unlistenAll = function() {
        RedDotNotifyCenter_1.default.getInstance().removeAll(this);
      };
      return RedDotObserver;
    }(cc.Component);
    exports.default = RedDotObserver;
    cc._RF.pop();
  }, {
    "./RedDotNotifyCenter": "RedDotNotifyCenter"
  } ],
  SceneBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e2abyk7zRLibHMMip8Z4to", "SceneBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LayerDirector_1 = require("../LayerDirector/LayerDirector");
    var Debuger_1 = require("../Utils/Debuger");
    var DefaultConfig_1 = require("../DefaultConfigs/DefaultConfig");
    var ActiveIndicatorLayer_1 = require("./ActiveIndicatorLayer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneBase = function(_super) {
      __extends(SceneBase, _super);
      function SceneBase() {
        var _this = _super.call(this) || this;
        _this._layerDirector = null;
        _this._UILayerRoot = null;
        _this._layerDirector = new LayerDirector_1.default(_this);
        return _this;
      }
      SceneBase.prototype.onLoad = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getSceneName() + ".onSceneLoad");
        this.onSceneLoad();
      };
      SceneBase.prototype.onEnable = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getSceneName() + ".onSceneEnable");
        this.onSceneEnable();
      };
      SceneBase.prototype.enterScene = function(param) {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getSceneName() + ".onSceneEnter", param);
        this.onSceneEnter(param);
      };
      SceneBase.prototype.start = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getSceneName() + ".onSceneStart");
        this.onSceneStart();
      };
      SceneBase.prototype.update = function(dt) {
        this.onSceneUpdate(dt);
      };
      SceneBase.prototype.exitScene = function() {
        this._layerDirector.destroy();
        this._layerDirector = null;
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getSceneName() + ".onSceneExit");
        this.onSceneExit();
      };
      SceneBase.prototype.onDisable = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getSceneName() + ".onSceneDisable");
        this.onSceneDisable();
      };
      SceneBase.prototype.onDestroy = function() {
        Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, this.getSceneName() + ".onSceneDestroy");
        this.onSceneDestroy();
      };
      SceneBase.prototype.getUILayerRoot = function() {
        if (null == this._UILayerRoot) {
          this._UILayerRoot = new cc.Node();
          var widget = this._UILayerRoot.addComponent(cc.Widget);
          if (widget) {
            widget.isAlignLeft = true;
            widget.left = 0;
            widget.isAlignRight = true;
            widget.right = 0;
            widget.isAlignBottom = true;
            widget.bottom = 0;
            widget.isAlignTop = true;
            widget.top = 0;
            widget.alignMode = cc.Widget.AlignMode.ONCE;
          }
          this.node.addChild(this._UILayerRoot, DefaultConfig_1.default.ZORDER_UI_ROOT);
        }
        return this._UILayerRoot;
      };
      SceneBase.prototype.getLayerWithID = function(identifier) {
        return this._layerDirector.getLayerWithID(identifier);
      };
      SceneBase.prototype.addLayer = function(layer, param, completeCallback) {
        return this._layerDirector.addLayer(layer, param, completeCallback);
      };
      SceneBase.prototype.addLayerWithPrefab = function(bundleName, prefabs, identifier, param, completeCallback) {
        ActiveIndicatorLayer_1.default.open();
        this._layerDirector.addLayerWithPrefab(bundleName, prefabs, identifier, param, function(error, layer) {
          ActiveIndicatorLayer_1.default.close();
          completeCallback && completeCallback(error, layer);
        });
      };
      SceneBase.prototype.addLayerToRoot = function(layer, zOrder) {
        this.getUILayerRoot().addChild(layer.node, zOrder);
        return true;
      };
      SceneBase.prototype.removeLayerWithID = function(identifier) {
        var layer = this._layerDirector.removeLayerWithID(identifier);
        layer && layer.setLayerRoot(null);
        return layer;
      };
      SceneBase = __decorate([ ccclass ], SceneBase);
      return SceneBase;
    }(cc.Component);
    exports.default = SceneBase;
    cc._RF.pop();
  }, {
    "../DefaultConfigs/DefaultConfig": "DefaultConfig",
    "../LayerDirector/LayerDirector": "LayerDirector",
    "../Utils/Debuger": "Debuger",
    "./ActiveIndicatorLayer": "ActiveIndicatorLayer"
  } ],
  SceneDirectorError: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dec47ZPpKlC9oVZBJFNl+lm", "SceneDirectorError");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SceneDirectorErrorCode = void 0;
    var SceneDirectorErrorCode;
    (function(SceneDirectorErrorCode) {
      SceneDirectorErrorCode[SceneDirectorErrorCode["None"] = 0] = "None";
      SceneDirectorErrorCode[SceneDirectorErrorCode["NoSceneBaseComponent"] = 1] = "NoSceneBaseComponent";
      SceneDirectorErrorCode[SceneDirectorErrorCode["Pending"] = 2] = "Pending";
      SceneDirectorErrorCode[SceneDirectorErrorCode["ResourceFailed"] = 3] = "ResourceFailed";
      SceneDirectorErrorCode[SceneDirectorErrorCode["InstanceFailed"] = 4] = "InstanceFailed";
    })(SceneDirectorErrorCode = exports.SceneDirectorErrorCode || (exports.SceneDirectorErrorCode = {}));
    var SceneDirectorError = function() {
      function SceneDirectorError(errorCode) {
        this.errorCode = SceneDirectorErrorCode.None;
      }
      SceneDirectorError.create = function(errorCode) {
        var instance = new SceneDirectorError(errorCode);
        return instance;
      };
      SceneDirectorError.SUCCEED = new SceneDirectorError(SceneDirectorErrorCode.None);
      SceneDirectorError.NO_SCENEBASE_COMPONENT = new SceneDirectorError(SceneDirectorErrorCode.NoSceneBaseComponent);
      SceneDirectorError.PENDING = new SceneDirectorError(SceneDirectorErrorCode.Pending);
      SceneDirectorError.REOURCE_FAILED = new SceneDirectorError(SceneDirectorErrorCode.ResourceFailed);
      SceneDirectorError.INSTANCE_FAILED = new SceneDirectorError(SceneDirectorErrorCode.InstanceFailed);
      return SceneDirectorError;
    }();
    exports.default = SceneDirectorError;
    cc._RF.pop();
  }, {} ],
  SceneDirector: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "29b2fFI0YtMh5h6M80jv9pj", "SceneDirector");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ActiveIndicatorLayer_1 = require("./ActiveIndicatorLayer");
    var Debuger_1 = require("../Utils/Debuger");
    var AssetCache_1 = require("../AssetCache/AssetCache");
    var Defines_1 = require("../../Defines/Defines");
    var SceneDirectorError_1 = require("./SceneDirectorError");
    var SceneBase_1 = require("./SceneBase");
    var SwitchSceneEnterParam_1 = require("./SwitchSceneEnterParam");
    var SceneDirector = function() {
      function SceneDirector() {
        this._replaceSceneName = "";
        this._openParam = null;
      }
      SceneDirector.getInstance = function() {
        this._instance || (this._instance = new SceneDirector());
        return this._instance;
      };
      SceneDirector.prototype.onSceneLaunched = function(error, scene) {
        if (null != error) {
          this._completeCallback && this._completeCallback(SceneDirectorError_1.default.INSTANCE_FAILED, null);
          ActiveIndicatorLayer_1.default.close();
          return;
        }
        var sceneBase = scene.getComponentInChildren(SceneBase_1.default);
        if (sceneBase) {
          sceneBase.enterScene(this._openParam);
          Debuger_1.default.warn(Debuger_1.default.FILTER_TAG01, "Cached Assets Count:", AssetCache_1.default.getInstance().getCashedAssetCount());
          this._replaceSceneName = "";
          this._openParam = null;
        } else Debuger_1.default.error(Debuger_1.default.FILTER_TAG01, "SceneDirector.onSceneLaunched not find SceneBase Component in", scene.name);
        this._completeCallback && this._completeCallback(SceneDirectorError_1.default.SUCCEED, sceneBase);
      };
      SceneDirector.prototype.onSceneLoaded = function(error, sceneAsset) {
        if (null != error) {
          this._completeCallback && this._completeCallback(SceneDirectorError_1.default.REOURCE_FAILED, null);
          ActiveIndicatorLayer_1.default.close();
          return;
        }
        ActiveIndicatorLayer_1.default.close();
        var exitingScene = cc.director.getScene();
        var exitSceneBase = exitingScene.getComponentInChildren(SceneBase_1.default);
        exitSceneBase ? exitSceneBase.exitScene() : Debuger_1.default.error(Debuger_1.default.FILTER_TAG01, "SceneDirector.onSceneLoaded not find SceneBase Component in", exitingScene.name);
        cc.director.loadScene(this._replaceSceneName, this.onSceneLaunched.bind(this));
      };
      SceneDirector.prototype.replaceScene = function(sceneName, param, complete) {
        if ("" != this._replaceSceneName) {
          complete && complete(SceneDirectorError_1.default.PENDING, null);
          return;
        }
        ActiveIndicatorLayer_1.default.open();
        this._replaceSceneName = sceneName;
        this._openParam = param;
        this._completeCallback = complete;
        cc.director.preloadScene(sceneName, null, this.onSceneLoaded.bind(this));
      };
      SceneDirector.prototype.replaceSceneWithInfo = function(info, sceneName, param, complete) {
        var _this = this;
        ActiveIndicatorLayer_1.default.open();
        if (info.releaseBundlesFirst) for (var _i = 0, _a = info.extiBundles; _i < _a.length; _i++) {
          var exitBundleID = _a[_i];
          var bundle = AssetCache_1.default.getInstance().getAssetBundleSync(exitBundleID);
          bundle && bundle.releaseAll();
        }
        var preloadList = {};
        var checkComplete = function() {
          for (var key in preloadList) {
            var remind = preloadList[key];
            if (remind > 0) return;
          }
          _this.replaceScene(sceneName, param, function(error, scene) {
            if (!info.releaseBundlesFirst) for (var _i = 0, _a = info.extiBundles; _i < _a.length; _i++) {
              var exitBundleID = _a[_i];
              var bundle = AssetCache_1.default.getInstance().getAssetBundleSync(exitBundleID);
              bundle && bundle.releaseAll();
            }
            ActiveIndicatorLayer_1.default.close();
            complete && complete(error, scene);
          });
        };
        var _loop_1 = function(bundleName) {
          preloadList[bundleName] = 1;
          var directories = info.enterBundles[bundleName];
          AssetCache_1.default.getInstance().getAssetBundle(bundleName, function(error, bundle) {
            if (error) {
              preloadList[bundleName] -= 1;
              checkComplete();
            } else {
              for (var _i = 0, directories_1 = directories; _i < directories_1.length; _i++) {
                var directory = directories_1[_i];
                preloadList[bundleName] += 1;
                AssetCache_1.default.getInstance().loadAssetDir(bundleName, directory, null, function(error, assets) {
                  preloadList[bundleName] -= 1;
                  checkComplete();
                });
              }
              preloadList[bundleName] -= 1;
              checkComplete();
            }
          });
        };
        for (var bundleName in info.enterBundles) _loop_1(bundleName);
        checkComplete();
      };
      SceneDirector.prototype.replaceSceneWithSwitchScene = function(info, sceneName, param, complete) {
        var switchParam = SwitchSceneEnterParam_1.default.create(info, sceneName, param, complete);
        this.replaceScene(Defines_1.SceneName.SwitchScene, switchParam);
      };
      SceneDirector.prototype.getCurrentScene = function() {
        var node = cc.director.getScene();
        var sceneBase = node.getComponentInChildren(SceneBase_1.default);
        return sceneBase;
      };
      SceneDirector._instance = null;
      return SceneDirector;
    }();
    exports.default = SceneDirector;
    cc._RF.pop();
  }, {
    "../../Defines/Defines": "Defines",
    "../AssetCache/AssetCache": "AssetCache",
    "../Utils/Debuger": "Debuger",
    "./ActiveIndicatorLayer": "ActiveIndicatorLayer",
    "./SceneBase": "SceneBase",
    "./SceneDirectorError": "SceneDirectorError",
    "./SwitchSceneEnterParam": "SwitchSceneEnterParam"
  } ],
  SceneEnterParamBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a2ebYybYJAPbFITS0zv+sK", "SceneEnterParamBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneEnterParamBase = function() {
      function SceneEnterParamBase() {}
      return SceneEnterParamBase;
    }();
    exports.default = SceneEnterParamBase;
    cc._RF.pop();
  }, {} ],
  SimpleButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "55e4eZbhA1CxqMgvddgzHD/", "SimpleButton");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SimpleButton = function(_super) {
      __extends(SimpleButton, _super);
      function SimpleButton() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._normalScale = 1;
        _this._pressedScale = .9;
        _this._animationDuration = .1;
        return _this;
      }
      SimpleButton.prototype.onLoad = function() {
        this._normalScale = this.node.scale;
        this._pressedScale = this._normalScale * this._pressedScale;
      };
      SimpleButton.prototype.onEnable = function() {
        this.node.stopActionByTag(1001);
        this.node.scale = this._normalScale;
        this.onEvent();
      };
      SimpleButton.prototype.onDisable = function() {
        this.node.stopActionByTag(1001);
        this.node.scale = this._normalScale;
        this.offEvent();
      };
      SimpleButton.prototype.onDestroy = function() {
        this.offEvent();
      };
      SimpleButton.prototype.onEvent = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      SimpleButton.prototype.offEvent = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      SimpleButton.prototype.onTouchStart = function(event) {
        event.stopPropagation();
        this.node.stopActionByTag(1001);
        var scaleDownAction = cc.scaleTo(this._animationDuration, this._pressedScale);
        scaleDownAction.setTag(1001);
        this.node.runAction(scaleDownAction);
      };
      SimpleButton.prototype.onTouchEnd = function(event) {
        event.stopPropagation();
        this.node.stopActionByTag(1001);
        var scaleUpAction = cc.scaleTo(this._animationDuration, this._normalScale);
        scaleUpAction.setTag(1001);
        this.node.runAction(scaleUpAction);
      };
      SimpleButton.prototype.onTouchCancel = function(event) {
        event.stopPropagation();
        this.onTouchEnd(event);
      };
      SimpleButton = __decorate([ ccclass ], SimpleButton);
      return SimpleButton;
    }(cc.Component);
    exports.default = SimpleButton;
    cc._RF.pop();
  }, {} ],
  SimpleCheckBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "88355bqRs1ClpbsBI5wnIeA", "SimpleCheckBox");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SimpleCheckBoxStatus = void 0;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SimpleCheckBoxStatus;
    (function(SimpleCheckBoxStatus) {
      SimpleCheckBoxStatus[SimpleCheckBoxStatus["None"] = 0] = "None";
      SimpleCheckBoxStatus[SimpleCheckBoxStatus["Normal"] = 1] = "Normal";
      SimpleCheckBoxStatus[SimpleCheckBoxStatus["Selected"] = 2] = "Selected";
      SimpleCheckBoxStatus[SimpleCheckBoxStatus["Disabled"] = 3] = "Disabled";
    })(SimpleCheckBoxStatus = exports.SimpleCheckBoxStatus || (exports.SimpleCheckBoxStatus = {}));
    var SimpleCheckBox = function(_super) {
      __extends(SimpleCheckBox, _super);
      function SimpleCheckBox() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.normalNode = null;
        _this.selectedNode = null;
        _this.disabledNode = null;
        _this.tag = 0;
        _this._status = SimpleCheckBoxStatus.None;
        _this._statusChangeHandler = null;
        _this._statusChangeTarget = null;
        _this._startStatus = SimpleCheckBoxStatus.None;
        return _this;
      }
      Object.defineProperty(SimpleCheckBox.prototype, "status", {
        get: function() {
          return this._status;
        },
        set: function(status) {
          if (this._status == status) return;
          switch (status) {
           case SimpleCheckBoxStatus.Normal:
            this.normalNode.active = true;
            this.selectedNode.active = false;
            this.disabledNode.active = false;
            this._status = status;
            break;

           case SimpleCheckBoxStatus.Selected:
            this.normalNode.active = false;
            this.selectedNode.active = true;
            this.disabledNode.active = false;
            this._status = status;
            break;

           case SimpleCheckBoxStatus.Disabled:
            this.normalNode.active = false;
            this.selectedNode.active = false;
            this.disabledNode.active = true;
            this._status = status;
          }
        },
        enumerable: false,
        configurable: true
      });
      SimpleCheckBox.prototype.setStatusChangeHandler = function(target, handler) {
        this._statusChangeTarget = target;
        this._statusChangeHandler = handler;
      };
      SimpleCheckBox.prototype.onLoad = function() {
        this.status = SimpleCheckBoxStatus.Normal;
      };
      SimpleCheckBox.prototype.onEnable = function() {
        this.onEvent();
      };
      SimpleCheckBox.prototype.onDisable = function() {
        this.offEvent();
      };
      SimpleCheckBox.prototype.onDestroy = function() {
        this.offEvent();
        this._statusChangeTarget = null;
        this._statusChangeHandler = null;
      };
      SimpleCheckBox.prototype.onEvent = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      SimpleCheckBox.prototype.offEvent = function() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      SimpleCheckBox.prototype.onTouchStart = function(event) {
        event.stopPropagation();
        this._startStatus = this.status;
        switch (this._startStatus) {
         case SimpleCheckBoxStatus.Normal:
          this.status = SimpleCheckBoxStatus.Selected;
          break;

         case SimpleCheckBoxStatus.Selected:
        }
      };
      SimpleCheckBox.prototype.onTouchMove = function(event) {
        event.stopPropagation();
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        var size = this.node.getContentSize();
        var rect = cc.rect(.5 * -size.width, .5 * -size.height, size.width, size.height);
        if (rect.contains(cc.v2(pos))) switch (this._startStatus) {
         case SimpleCheckBoxStatus.Normal:
          this.status = SimpleCheckBoxStatus.Selected;
        } else switch (this._startStatus) {
         case SimpleCheckBoxStatus.Normal:
          this.status = SimpleCheckBoxStatus.Normal;
        }
      };
      SimpleCheckBox.prototype.onTouchEnd = function(event) {
        event.stopPropagation();
        var pos = this.node.convertToNodeSpaceAR(event.getLocation());
        var size = this.node.getContentSize();
        var rect = cc.rect(.5 * -size.width, .5 * -size.height, size.width, size.height);
        if (rect.contains(cc.v2(pos))) switch (this._startStatus) {
         case SimpleCheckBoxStatus.Normal:
          this.status = SimpleCheckBoxStatus.Selected;
          this.notifyStatusChange();
          break;

         case SimpleCheckBoxStatus.Selected:
          this.status = SimpleCheckBoxStatus.Normal;
          this.notifyStatusChange();
        } else switch (this._startStatus) {
         case SimpleCheckBoxStatus.Normal:
         case SimpleCheckBoxStatus.Selected:
          this.status = this._startStatus;
        }
        this._startStatus = SimpleCheckBoxStatus.None;
      };
      SimpleCheckBox.prototype.onTouchCancel = function(event) {
        this.onTouchEnd(event);
      };
      SimpleCheckBox.prototype.notifyStatusChange = function() {
        this._statusChangeTarget && this._statusChangeHandler && this._statusChangeHandler.call(this._statusChangeTarget, this);
      };
      SimpleCheckBox.prototype.isChecked = function() {
        return this.status == SimpleCheckBoxStatus.Selected;
      };
      SimpleCheckBox.prototype.checked = function() {
        this.status == SimpleCheckBoxStatus.Normal && (this.status = SimpleCheckBoxStatus.Selected);
      };
      SimpleCheckBox.prototype.unchecked = function() {
        this.status == SimpleCheckBoxStatus.Selected && (this.status = SimpleCheckBoxStatus.Normal);
      };
      SimpleCheckBox.prototype.disable = function() {
        this.status = SimpleCheckBoxStatus.Disabled;
      };
      SimpleCheckBox.prototype.enable = function() {
        this.status = SimpleCheckBoxStatus.Normal;
      };
      __decorate([ property(cc.Node) ], SimpleCheckBox.prototype, "normalNode", void 0);
      __decorate([ property(cc.Node) ], SimpleCheckBox.prototype, "selectedNode", void 0);
      __decorate([ property(cc.Node) ], SimpleCheckBox.prototype, "disabledNode", void 0);
      SimpleCheckBox = __decorate([ ccclass ], SimpleCheckBox);
      return SimpleCheckBox;
    }(cc.Component);
    exports.default = SimpleCheckBox;
    cc._RF.pop();
  }, {} ],
  SimpleStateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "02659GcNrJC367GvTNbuAcH", "SimpleStateMachine");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StateMachine_1 = require("./StateMachine");
    var SimpleStateMachine = function(_super) {
      __extends(SimpleStateMachine, _super);
      function SimpleStateMachine(onwer) {
        var _this = _super.call(this, onwer) || this;
        _this.m_curretnState = void 0;
        return _this;
      }
      SimpleStateMachine.prototype.getCurrentState = function() {
        return this.m_curretnState;
      };
      SimpleStateMachine.prototype.setCurrentState = function(newState) {
        if (this.m_curretnState === newState) return;
        if (this.m_curretnState) {
          this.m_curretnState.exit(this.getOnwer());
          this.m_curretnState = null;
        }
        this.m_curretnState = newState;
        this.m_curretnState && this.m_curretnState.enter(this.getOnwer());
      };
      SimpleStateMachine.prototype.update = function(deltaTime) {
        var currentState = this.getCurrentState();
        currentState && currentState.update(this.getOnwer(), deltaTime);
      };
      SimpleStateMachine.prototype.onMessage = function(message) {
        var currentState = this.getCurrentState();
        if (currentState) return currentState.onMessage(message);
        return false;
      };
      return SimpleStateMachine;
    }(StateMachine_1.default);
    exports.default = SimpleStateMachine;
    cc._RF.pop();
  }, {
    "./StateMachine": "StateMachine"
  } ],
  SocketDispatcherBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f8canpq/pCPJebQGntwHlo", "SocketDispatcherBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SocketName = void 0;
    var EventDispatcher_1 = require("../../../../Event/EventDispatcher");
    var SocketName;
    (function(SocketName) {
      SocketName["None"] = "";
      SocketName["Battle"] = "Battle";
      SocketName["Chat"] = "Chat";
    })(SocketName = exports.SocketName || (exports.SocketName = {}));
    var SocketDispatcherBase = function() {
      function SocketDispatcherBase() {
        this._eventDispatcher = null;
        this._socket = null;
        this._name = SocketName.None;
        this._heartBeat = null;
        this._messagePhraser = null;
      }
      SocketDispatcherBase.prototype.getName = function() {
        return this._name;
      };
      SocketDispatcherBase.prototype.setName = function(name) {
        this._name = name;
      };
      SocketDispatcherBase.prototype.initBase = function(name, socket, heartBeat, messagePhraser) {
        this.setName(name);
        this._eventDispatcher = EventDispatcher_1.default.create();
        this._socket = socket;
        this._heartBeat = heartBeat;
        this._messagePhraser = messagePhraser;
      };
      SocketDispatcherBase.prototype.sendData = function(data) {
        data && this._socket.send(data);
      };
      SocketDispatcherBase.prototype.onSocketOpen = function(data) {
        var msg = this._messagePhraser.openInfoToMsg(data);
        this.onOpen(msg);
      };
      SocketDispatcherBase.prototype.onSocketMessage = function(data) {
        var msg = this._messagePhraser.bufferToMsg(data);
        this._heartBeat.onResponeMessage(msg);
        this.onMessage(msg);
      };
      SocketDispatcherBase.prototype.onSocketError = function(data) {
        var msg = this._messagePhraser.errorInfoToMsg(data);
        this.onError(msg);
      };
      SocketDispatcherBase.prototype.onSocketClosed = function(data) {
        var msg = this._messagePhraser.closedInfoToMsg(data);
        this.onClosed(msg);
      };
      SocketDispatcherBase.prototype.connect = function() {
        this._socket.connect();
        this._heartBeat.start(this);
      };
      SocketDispatcherBase.prototype.sendMessage = function(msg) {
        var buffer = this._messagePhraser.msgToBuffer(msg);
        this.sendData(buffer);
      };
      SocketDispatcherBase.prototype.close = function() {
        this._heartBeat.stop();
        this._socket.close();
      };
      SocketDispatcherBase.prototype.hasListener = function(cmd) {
        return this._eventDispatcher.hasEventListener(cmd.toString());
      };
      SocketDispatcherBase.prototype.registListener = function(cmd, callback, target) {
        return this._eventDispatcher.registListener(cmd.toString(), callback, target);
      };
      SocketDispatcherBase.prototype.removeListener = function(cmd, callback, target) {
        this._eventDispatcher.removeListener(cmd.toString(), callback, target);
      };
      SocketDispatcherBase.prototype.removeListenerTarget = function(target) {
        this._eventDispatcher.removeListenerTarget(target);
      };
      SocketDispatcherBase.prototype.removeAllListener = function(cmdOrTarget) {
        this._eventDispatcher.removeAllListener(cmdOrTarget);
      };
      SocketDispatcherBase.prototype.registListenerOnce = function(cmd, callback, target) {
        this._eventDispatcher.registListenerOnce(cmd.toString(), callback);
      };
      SocketDispatcherBase.prototype.dispatchEvent = function(cmd, data) {
        var event = new cc.Event.EventCustom(cmd.toString(), false);
        event.setUserData(data);
        this._eventDispatcher.dispatchEvent(event);
      };
      return SocketDispatcherBase;
    }();
    exports.default = SocketDispatcherBase;
    cc._RF.pop();
  }, {
    "../../../../Event/EventDispatcher": "EventDispatcher"
  } ],
  SocketFactory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6619P5DFxLTK0q01EwcDYd", "SocketFactory");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SocketWrapperWeb_1 = require("./Web/SocketWrapperWeb");
    var SocketWrapperWeixin_1 = require("./Weixin/SocketWrapperWeixin");
    var SocketFactory = function() {
      function SocketFactory() {}
      SocketFactory.createSocketWrapper = function(url, delegate) {
        switch (cc.sys.platform) {
         case cc.sys.WECHAT_GAME:
          return SocketWrapperWeixin_1.default.create(url, delegate);

         case cc.sys.MOBILE_BROWSER:
         case cc.sys.DESKTOP_BROWSER:
          return SocketWrapperWeb_1.default.create(url, delegate);
        }
        return null;
      };
      return SocketFactory;
    }();
    exports.default = SocketFactory;
    cc._RF.pop();
  }, {
    "./Web/SocketWrapperWeb": "SocketWrapperWeb",
    "./Weixin/SocketWrapperWeixin": "SocketWrapperWeixin"
  } ],
  SocketHeartBeatBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75aa0HUQrZFObe/99a4RDXp", "SocketHeartBeatBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SocketHeartBeatBase = function() {
      function SocketHeartBeatBase() {
        this._dispatcher = null;
        this._heartBeatTimer = null;
        this._checkTimeoutTimer = null;
        this._waitResponeCount = 0;
      }
      SocketHeartBeatBase.prototype.initBase = function() {};
      SocketHeartBeatBase.prototype.start = function(socketDispatcher) {
        this._waitResponeCount = 0;
        this._dispatcher = socketDispatcher;
        this.stop();
        this._heartBeatTimer = setInterval(this.heartBeat.bind(this), 2e3);
        this._checkTimeoutTimer = setInterval(this.checkTimeout.bind(this), 2e3);
      };
      SocketHeartBeatBase.prototype.stop = function() {
        this._waitResponeCount = 0;
        this._heartBeatTimer && clearInterval(this._heartBeatTimer);
        this._checkTimeoutTimer && clearInterval(this._checkTimeoutTimer);
      };
      SocketHeartBeatBase.prototype.heartBeat = function() {
        this._waitResponeCount++;
        var msg = this.getRequestData();
        this._dispatcher.sendMessage(msg);
      };
      SocketHeartBeatBase.prototype.checkTimeout = function() {
        if (this._waitResponeCount > 3) {
          this._waitResponeCount = 0;
          this._dispatcher.connect();
        }
      };
      SocketHeartBeatBase.prototype.onHeartRespone = function() {
        this._waitResponeCount--;
        this._waitResponeCount = Math.max(0, this._waitResponeCount);
      };
      return SocketHeartBeatBase;
    }();
    exports.default = SocketHeartBeatBase;
    cc._RF.pop();
  }, {} ],
  SocketMessagePhraserBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb8fcrzlKBC1JH96XqSYOij", "SocketMessagePhraserBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SocketMessagePhraserBase = function() {
      function SocketMessagePhraserBase() {}
      SocketMessagePhraserBase.prototype.initBase = function() {};
      return SocketMessagePhraserBase;
    }();
    exports.default = SocketMessagePhraserBase;
    cc._RF.pop();
  }, {} ],
  SocketWrapperBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ea185ifBxVMlJLzv9hQG26R", "SocketWrapperBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SocketWrapperBase = exports.SocketWrapperState = void 0;
    var SocketWrapperState;
    (function(SocketWrapperState) {
      SocketWrapperState[SocketWrapperState["None"] = 0] = "None";
      SocketWrapperState[SocketWrapperState["CONNECTING"] = 1] = "CONNECTING";
      SocketWrapperState[SocketWrapperState["OPEN"] = 2] = "OPEN";
      SocketWrapperState[SocketWrapperState["CLOSING"] = 3] = "CLOSING";
      SocketWrapperState[SocketWrapperState["CLOSED"] = 4] = "CLOSED";
    })(SocketWrapperState = exports.SocketWrapperState || (exports.SocketWrapperState = {}));
    var SocketWrapperBase = function() {
      function SocketWrapperBase() {
        this._url = "";
        this._state = SocketWrapperState.None;
        this._delegate = null;
      }
      SocketWrapperBase.prototype.getUrl = function() {
        return this._url;
      };
      SocketWrapperBase.prototype.setUrl = function(url) {
        this._url = url;
      };
      SocketWrapperBase.prototype.getState = function() {
        return this._state;
      };
      SocketWrapperBase.prototype.setState = function(state) {
        this._state = state;
      };
      SocketWrapperBase.prototype.getDelegate = function() {
        return this._delegate;
      };
      SocketWrapperBase.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
      };
      SocketWrapperBase.prototype.onSocketOpen = function(data) {
        this._delegate && this._delegate.onSocketOpen(data);
      };
      SocketWrapperBase.prototype.onSocketMessage = function(data) {
        this._delegate && this._delegate.onSocketMessage(data);
      };
      SocketWrapperBase.prototype.onSocketError = function(data) {
        this._delegate && this._delegate.onSocketError(data);
      };
      SocketWrapperBase.prototype.onSocketClosed = function(data) {
        this._delegate && this._delegate.onSocketClosed(data);
      };
      SocketWrapperBase.prototype.initBase = function(url, delegate) {
        this.setUrl(url);
        this.setDelegate(delegate);
      };
      return SocketWrapperBase;
    }();
    exports.SocketWrapperBase = SocketWrapperBase;
    cc._RF.pop();
  }, {} ],
  SocketWrapperWeb: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0566BjJSVKu5sncJwSYVPx", "SocketWrapperWeb");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SocketWrapperBase_1 = require("../Base/SocketWrapperBase");
    var SocketWrapperWeb = function(_super) {
      __extends(SocketWrapperWeb, _super);
      function SocketWrapperWeb() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._socket = null;
        return _this;
      }
      SocketWrapperWeb.create = function(url, delegate) {
        var instance = new SocketWrapperWeb();
        instance.init(url, delegate);
        return instance;
      };
      SocketWrapperWeb.prototype.init = function(url, delegate) {
        _super.prototype.initBase.call(this, url, delegate);
      };
      SocketWrapperWeb.prototype.connect = function() {
        this.close();
        this.setState(SocketWrapperBase_1.SocketWrapperState.CONNECTING);
        this._socket = new WebSocket(this.getUrl());
        this._socket.binaryType = "arraybuffer";
        this._socket.onopen = this.onOpen.bind(this);
        this._socket.onmessage = this.onMessage.bind(this);
        this._socket.onerror = this.onError.bind(this);
        this._socket.onclose = this.onClose.bind(this);
      };
      SocketWrapperWeb.prototype.close = function() {
        if (this._socket) {
          this.setState(SocketWrapperBase_1.SocketWrapperState.CLOSING);
          this._socket.close();
          this._socket = null;
        }
      };
      SocketWrapperWeb.prototype.send = function(data) {
        this.getState() == SocketWrapperBase_1.SocketWrapperState.OPEN && this._socket.send(data);
      };
      SocketWrapperWeb.prototype.onOpen = function(event) {
        this.setState(SocketWrapperBase_1.SocketWrapperState.OPEN);
        this.onSocketOpen(null);
      };
      SocketWrapperWeb.prototype.onMessage = function(event) {
        this.onSocketMessage(event.data);
      };
      SocketWrapperWeb.prototype.onError = function(event) {
        this.setState(SocketWrapperBase_1.SocketWrapperState.CLOSED);
        this.onSocketError(null);
      };
      SocketWrapperWeb.prototype.onClose = function(event) {
        this.setState(SocketWrapperBase_1.SocketWrapperState.CLOSED);
        this.onSocketClosed({
          code: event.code,
          reason: event.reason,
          wasClean: event.wasClean
        });
      };
      return SocketWrapperWeb;
    }(SocketWrapperBase_1.SocketWrapperBase);
    exports.default = SocketWrapperWeb;
    cc._RF.pop();
  }, {
    "../Base/SocketWrapperBase": "SocketWrapperBase"
  } ],
  SocketWrapperWeixin: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4035b38PN9DjL860gYszLm/", "SocketWrapperWeixin");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SocketWrapperBase_1 = require("../Base/SocketWrapperBase");
    var SocketWrapperWeixin = function(_super) {
      __extends(SocketWrapperWeixin, _super);
      function SocketWrapperWeixin() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._socket = null;
        return _this;
      }
      SocketWrapperWeixin.create = function(url, delegate) {
        var instance = new SocketWrapperWeixin();
        instance.init(url, delegate);
        return instance;
      };
      SocketWrapperWeixin.prototype.init = function(url, delegate) {
        _super.prototype.initBase.call(this, url, delegate);
      };
      SocketWrapperWeixin.prototype.connect = function() {
        this.close();
        this.setState(SocketWrapperBase_1.SocketWrapperState.CONNECTING);
        this._socket = wx.connectSocket({
          url: this.getUrl(),
          fail: function(err) {
            console.error("wx.connectSocket fail", err);
          },
          success: function(res) {}
        });
        this._socket.onOpen(this.onOpen.bind(this));
        this._socket.onMessage(this.onMessage.bind(this));
        this._socket.onError(this.onError.bind(this));
        this._socket.onClose(this.onClose.bind(this));
      };
      SocketWrapperWeixin.prototype.close = function() {
        if (this._socket) {
          this.setState(SocketWrapperBase_1.SocketWrapperState.CLOSING);
          this._socket.close({});
          this._socket = null;
        }
      };
      SocketWrapperWeixin.prototype.send = function(data) {
        this.getState() == SocketWrapperBase_1.SocketWrapperState.OPEN && this._socket.send({
          data: data
        });
      };
      SocketWrapperWeixin.prototype.onOpen = function(event) {
        this.setState(SocketWrapperBase_1.SocketWrapperState.OPEN);
        this.onSocketOpen(event.header);
      };
      SocketWrapperWeixin.prototype.onMessage = function(event) {
        this.onSocketMessage(event.data);
      };
      SocketWrapperWeixin.prototype.onError = function(event) {
        this.setState(SocketWrapperBase_1.SocketWrapperState.CLOSED);
        this.onSocketError(event.errMsg);
      };
      SocketWrapperWeixin.prototype.onClose = function(event) {
        this.setState(SocketWrapperBase_1.SocketWrapperState.CLOSED);
        this.onSocketClosed(event);
      };
      return SocketWrapperWeixin;
    }(SocketWrapperBase_1.SocketWrapperBase);
    exports.default = SocketWrapperWeixin;
    cc._RF.pop();
  }, {
    "../Base/SocketWrapperBase": "SocketWrapperBase"
  } ],
  StackStateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "12f55+2TbZAT5Ox4935/820", "StackStateMachine");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StateMachine_1 = require("./StateMachine");
    var Stack_1 = require("../../STL/Stack");
    var StackStateMachine = function(_super) {
      __extends(StackStateMachine, _super);
      function StackStateMachine(onwer) {
        var _this = _super.call(this, onwer) || this;
        _this.m_currentStateStack = new Stack_1.default();
        return _this;
      }
      StackStateMachine.prototype.getCurrentState = function() {
        return this.m_currentStateStack.peak();
      };
      StackStateMachine.prototype.setCurrentState = function(newState) {
        this.popCurrentState();
        this.pushCurrentState(newState);
      };
      StackStateMachine.prototype.pushCurrentState = function(newState) {
        if (this.m_currentStateStack.contains(newState)) {
          console.warn("State Already In Stack");
          return;
        }
        if (newState) {
          var lastState = this.getCurrentState();
          lastState && lastState.exit(this.getOnwer());
          newState.enter(this.getOnwer());
          this.m_currentStateStack.push(newState);
        }
      };
      StackStateMachine.prototype.popCurrentState = function() {
        if (!this.m_currentStateStack.empty()) {
          var popState = this.m_currentStateStack.pop();
          popState.exit(this.getOnwer());
          var peakState = this.m_currentStateStack.peak();
          peakState && peakState.enter(this.getOnwer());
          return popState;
        }
        return;
      };
      StackStateMachine.prototype.update = function(deltaTime) {
        var currentState = this.getCurrentState();
        currentState && currentState.update(this.getOnwer(), deltaTime);
      };
      StackStateMachine.prototype.onMessage = function(message) {
        var currentState = this.getCurrentState();
        if (currentState) return currentState.onMessage(message);
        return false;
      };
      return StackStateMachine;
    }(StateMachine_1.default);
    exports.default = StackStateMachine;
    cc._RF.pop();
  }, {
    "../../STL/Stack": "Stack",
    "./StateMachine": "StateMachine"
  } ],
  Stack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1d480sTSO9Ed4B6hO252JNT", "Stack");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Stack = function() {
      function Stack() {
        this.m_store = [];
      }
      Stack.prototype.length = function() {
        return this.m_store.length;
      };
      Stack.prototype.peak = function() {
        if (!this.empty()) return this.m_store[this.m_store.length - 1];
        return;
      };
      Stack.prototype.push = function(val) {
        this.m_store.push(val);
      };
      Stack.prototype.pop = function() {
        if (!this.empty()) return this.m_store.pop();
        return;
      };
      Stack.prototype.contains = function(val) {
        return -1 != this.m_store.indexOf(val);
      };
      Stack.prototype.empty = function() {
        return 0 == this.m_store.length;
      };
      return Stack;
    }();
    exports.default = Stack;
    cc._RF.pop();
  }, {} ],
  StateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83881xL+zhH/4fRSR5xigNR", "StateMachine");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StateMachine = function() {
      function StateMachine(onwer) {
        this.m_onwer = null;
        this.m_onwer = onwer;
      }
      StateMachine.prototype.getOnwer = function() {
        return this.m_onwer;
      };
      return StateMachine;
    }();
    exports.default = StateMachine;
    cc._RF.pop();
  }, {} ],
  StatePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bc3d3Gth6dDk4VjRoj8vxXF", "StatePool");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var StatePool = function() {
      function StatePool() {
        this._pools = {};
      }
      StatePool.prototype.getPool = function(key) {
        var pool = this._pools[key];
        if (!pool) {
          pool = [];
          this._pools[key] = pool;
        }
        return pool;
      };
      StatePool.prototype.putState = function(state) {
        if (!state) return;
        var pool = this.getPool(state.getType());
        pool.push(state);
      };
      StatePool.prototype.getState = function(type) {
        var pool = this.getPool(type);
        if (pool.length > 0) return pool.shift();
        return null;
      };
      StatePool.prototype.clear = function() {
        this._pools = {};
      };
      return StatePool;
    }();
    exports.default = StatePool;
    cc._RF.pop();
  }, {} ],
  State: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5257eYs9G9EpabrYD6Kl02v", "State");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var State = function() {
      function State() {}
      return State;
    }();
    exports.default = State;
    cc._RF.pop();
  }, {} ],
  SwitchSceneEnterParam: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "af42fDkLWxDLp+bKpSK84WL", "SwitchSceneEnterParam");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SceneEnterParamBase_1 = require("./SceneEnterParamBase");
    var SwitchSceneEnterParam = function(_super) {
      __extends(SwitchSceneEnterParam, _super);
      function SwitchSceneEnterParam(info, enterSceneName, enterSceneParam, completeCallback) {
        var _this = _super.call(this) || this;
        _this.info = null;
        _this.enterSceneName = "";
        _this.enterSceneParam = null;
        _this.completeCallback = null;
        _this.info = info;
        _this.enterSceneName = enterSceneName;
        _this.enterSceneParam = enterSceneParam;
        _this.completeCallback = completeCallback;
        return _this;
      }
      SwitchSceneEnterParam.create = function(info, enterSceneName, enterSceneParam, completeCallback) {
        var instance = new SwitchSceneEnterParam(info, enterSceneName, enterSceneParam, completeCallback);
        return instance;
      };
      return SwitchSceneEnterParam;
    }(SceneEnterParamBase_1.default);
    exports.default = SwitchSceneEnterParam;
    cc._RF.pop();
  }, {
    "./SceneEnterParamBase": "SceneEnterParamBase"
  } ],
  SwitchScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "752d5pruHJGzZegaKtdP06G", "SwitchScene");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Defines_1 = require("../../Defines/Defines");
    var IGame_1 = require("../IGame/IGame");
    var PreloadAssetInfo_1 = require("./PreloadAssetInfo");
    var SceneBase_1 = require("./SceneBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SwitchScene = function(_super) {
      __extends(SwitchScene, _super);
      function SwitchScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._param = null;
        return _this;
      }
      SwitchScene.prototype.getSceneName = function() {
        return Defines_1.SceneName.SwitchScene;
      };
      SwitchScene.prototype.onSceneLoad = function() {};
      SwitchScene.prototype.onSceneEnable = function() {};
      SwitchScene.prototype.onSceneEnter = function(param) {
        this._param = param;
      };
      SwitchScene.prototype.onSceneStart = function() {
        var info = PreloadAssetInfo_1.default.create(this._param.info.extiBundles, this._param.info.enterBundles, true);
        IGame_1.default.getInstance().replaceSceneWithPreloadInfo(info, this._param.enterSceneName, this._param.enterSceneParam, this._param.completeCallback);
      };
      SwitchScene.prototype.onSceneUpdate = function(dt) {};
      SwitchScene.prototype.onSceneExit = function() {};
      SwitchScene.prototype.onSceneDisable = function() {};
      SwitchScene.prototype.onSceneDestroy = function() {};
      SwitchScene = __decorate([ ccclass ], SwitchScene);
      return SwitchScene;
    }(SceneBase_1.default);
    exports.default = SwitchScene;
    cc._RF.pop();
  }, {
    "../../Defines/Defines": "Defines",
    "../IGame/IGame": "IGame",
    "./PreloadAssetInfo": "PreloadAssetInfo",
    "./SceneBase": "SceneBase"
  } ],
  TabItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24ba4rXor5ACJOBJWKzZfTV", "TabItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TabItem = function(_super) {
      __extends(TabItem, _super);
      function TabItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.button = null;
        _this._index = 0;
        _this._selected = false;
        _this._delegate = null;
        return _this;
      }
      TabItem.prototype.getIndex = function() {
        return this._index;
      };
      TabItem.prototype.setIndex = function(index) {
        this._index = index;
      };
      TabItem.prototype.getSelected = function() {
        return this._selected;
      };
      TabItem.prototype.setSelected = function(selected) {
        this._selected = selected;
        this.button.interactable = !this._selected;
      };
      TabItem.prototype.getDelegate = function() {
        return this._delegate;
      };
      TabItem.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
      };
      TabItem.prototype.onLoad = function() {
        this.setSelected(false);
        this.registerButtonClickEvent(this.button, "onTabbed", "");
      };
      TabItem.prototype.start = function() {};
      TabItem.prototype.onDestroy = function() {};
      TabItem.prototype.registerButtonClickEvent = function(button, hanlder, customEventData) {
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = this.node;
        clickEventHandler.component = "TabItem";
        clickEventHandler.handler = hanlder;
        clickEventHandler.customEventData = customEventData;
        button.clickEvents[0] = clickEventHandler;
      };
      TabItem.prototype.onTabbed = function(event, customEventData) {
        this._delegate && this._delegate.onTabItemTabbed(this);
      };
      __decorate([ property(cc.Button) ], TabItem.prototype, "button", void 0);
      TabItem = __decorate([ ccclass ], TabItem);
      return TabItem;
    }(cc.Component);
    exports.default = TabItem;
    cc._RF.pop();
  }, {} ],
  TabViewCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2fdd8S7BqxLwplfOiqfPZJ2", "TabViewCell");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TabViewCell = function(_super) {
      __extends(TabViewCell, _super);
      function TabViewCell() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TabViewCell.prototype.start = function() {};
      TabViewCell.prototype.selected = function() {
        this.node.active = true;
        this.onSelected();
      };
      TabViewCell.prototype.unselected = function() {
        this.onUnSelected();
        this.node.active = false;
      };
      TabViewCell = __decorate([ ccclass ], TabViewCell);
      return TabViewCell;
    }(cc.Component);
    exports.default = TabViewCell;
    cc._RF.pop();
  }, {} ],
  TabView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "37294WeM0lHQJvIupIhSFEM", "TabView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TabItem_1 = require("./TabItem");
    var TabViewCell_1 = require("./TabViewCell");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TabView = function(_super) {
      __extends(TabView, _super);
      function TabView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tabItems = [];
        _this.tabViewPrefabs = [];
        _this.tabViewContainer = null;
        _this._tabViewMap = {};
        _this._lastTabIndex = 0;
        return _this;
      }
      TabView.prototype.onLoad = function() {
        for (var index = 0; index < this.tabItems.length; index++) {
          var item = this.tabItems[index];
          this.initTabItem(item, index);
          item.setSelected(false);
        }
      };
      TabView.prototype.initTabItem = function(tabItem, index) {
        tabItem.setIndex(index);
        tabItem.setDelegate(this);
      };
      TabView.prototype.showTabIndex = function(index) {
        if (index < this.tabItems.length) {
          var lastTabItem = this.tabItems[this._lastTabIndex];
          lastTabItem.setSelected(false);
          var tabItem = this.tabItems[index];
          tabItem.setSelected(true);
          var lastTabView = this._tabViewMap[this._lastTabIndex];
          lastTabView && lastTabView.unselected();
          var tabView = this._tabViewMap[index];
          if (!tabView) {
            var prefab = this.tabViewPrefabs[index];
            var view = cc.instantiate(prefab);
            this.tabViewContainer.addChild(view);
            tabView = view.getComponent(TabViewCell_1.default);
            this._tabViewMap[index] = tabView;
          }
          tabView.selected();
          this._lastTabIndex = index;
        }
      };
      TabView.prototype.onTabItemTabbed = function(tabItem) {
        var index = tabItem.getIndex();
        this.showTabIndex(index);
      };
      __decorate([ property([ TabItem_1.default ]) ], TabView.prototype, "tabItems", void 0);
      __decorate([ property([ cc.Prefab ]) ], TabView.prototype, "tabViewPrefabs", void 0);
      __decorate([ property(cc.Node) ], TabView.prototype, "tabViewContainer", void 0);
      TabView = __decorate([ ccclass ], TabView);
      return TabView;
    }(cc.Component);
    exports.default = TabView;
    cc._RF.pop();
  }, {
    "./TabItem": "TabItem",
    "./TabViewCell": "TabViewCell"
  } ],
  TableViewCell: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c4f5b7I46ZM5KfNunoOt6ec", "TableViewCell");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TableViewCell = function(_super) {
      __extends(TableViewCell, _super);
      function TableViewCell() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._index = 0;
        return _this;
      }
      TableViewCell_1 = TableViewCell;
      TableViewCell.prototype.getIndex = function() {
        return this._index;
      };
      TableViewCell.prototype.setIndex = function(index) {
        this._index = index;
      };
      TableViewCell.prototype.reset = function() {
        this._index = TableViewCell_1.InvalidIndex;
      };
      var TableViewCell_1;
      TableViewCell.InvalidIndex = -1;
      TableViewCell = TableViewCell_1 = __decorate([ ccclass ], TableViewCell);
      return TableViewCell;
    }(cc.Component);
    exports.default = TableViewCell;
    cc._RF.pop();
  }, {} ],
  TableView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d35bc7yXYdEOb8hGBpRMCs9", "TableView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TableViewDirection = void 0;
    var TableViewDirection;
    (function(TableViewDirection) {
      TableViewDirection[TableViewDirection["None"] = 0] = "None";
      TableViewDirection[TableViewDirection["Horizontal"] = 1] = "Horizontal";
      TableViewDirection[TableViewDirection["Vertical"] = 2] = "Vertical";
    })(TableViewDirection = exports.TableViewDirection || (exports.TableViewDirection = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TableView = function(_super) {
      __extends(TableView, _super);
      function TableView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this._cellPositions = [];
        _this._usedCells = [];
        _this._freedCells = [];
        _this._direction = TableViewDirection.Vertical;
        _this._useFastMode = true;
        _this._touchStartPos = cc.v2(0, 0);
        _this._touchStartIndex = -1;
        _this._dataSource = null;
        _this._delegate = null;
        return _this;
      }
      TableView.prototype.getDirection = function() {
        return this._direction;
      };
      TableView.prototype.setDirection = function(direction) {
        this._direction = direction;
        this.reload();
      };
      TableView.prototype.getUseFastMode = function() {
        return this._useFastMode;
      };
      TableView.prototype.setUseFastMode = function(fast) {
        this._useFastMode = fast;
      };
      TableView.prototype.onLoad = function() {};
      TableView.prototype.onDestroy = function() {
        this._dataSource = null;
        this._delegate = null;
        for (var index = 0; index < this._usedCells.length; index++) {
          var element = this._usedCells[index];
          element.node && element.node.destroy();
        }
        this._usedCells = null;
        for (var index = 0; index < this._freedCells.length; index++) {
          var element = this._freedCells[index];
          element.node && element.node.destroy();
        }
        this._freedCells = null;
      };
      TableView.prototype.onEnable = function() {
        this.scrollView.node.on("scrolling", this.onScrollViewScrolling, this);
        this.scrollView.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.scrollView.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.scrollView.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.scrollView.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      TableView.prototype.onDisable = function() {
        this.scrollView.node.off("scrolling", this.onScrollViewScrolling, this);
        this.scrollView.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.scrollView.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.scrollView.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.scrollView.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      TableView.prototype.onScrollViewScrollToTop = function(event) {
        console.log("ScrollToTop");
      };
      TableView.prototype.onScrollViewScrollToBottom = function(event) {
        console.log("ScrollToBottom");
      };
      TableView.prototype.onScrollViewScrollToLeft = function(event) {
        console.log("ScrollToLeft");
      };
      TableView.prototype.onScrollViewScrollToRight = function(event) {
        console.log("ScrollToRight");
      };
      TableView.prototype.onScrollViewScrolling = function(event) {
        this.onScrollViewDidScroll();
      };
      TableView.prototype.onScrollViewBounceBottom = function(event) {
        console.log("BounceBottom");
      };
      TableView.prototype.onScrollViewBounceLeft = function(event) {
        console.log("BounceLeft");
      };
      TableView.prototype.onScrollViewBounceTop = function(event) {
        console.log("BounceTop");
      };
      TableView.prototype.onScrollViewBounceRight = function(event) {
        console.log("BounceRight");
      };
      TableView.prototype.onScrollViewScrollEnd = function(event) {
        console.log("ScrollEnd");
      };
      TableView.prototype.onScrollViewTouchUp = function(event) {
        console.log("TouchUp");
      };
      TableView.prototype.onScrollViewScrollEndWithThreshold = function(event) {
        console.log("ScrollEndWithThreshold");
      };
      TableView.prototype.onScrollViewScrollBeign = function(event) {
        console.log("ScrollBeign");
      };
      TableView.prototype.onTouchStart = function(event) {
        this._touchStartPos = event.touch.getLocationInView();
        var nodePos = this.scrollView.content.convertToNodeSpaceAR(event.touch.getLocationInView());
        this._touchStartIndex = this.getIndexFromOffSet(cc.v2(-nodePos.x, nodePos.y));
      };
      TableView.prototype.onTouchMove = function(event) {
        var worldPos = event.touch.getLocationInView();
        var offset = worldPos.sub(this._touchStartPos);
        offset.magSqr() >= 100 && (this._touchStartIndex = -1);
      };
      TableView.prototype.onTouchEnd = function(event) {
        var contetnPos = this.scrollView.content.convertToNodeSpaceAR(event.touch.getLocationInView());
        var index = this.getIndexFromOffSet(cc.v2(-contetnPos.x, contetnPos.y));
        if (this._touchStartIndex == index) {
          var cell = this.getCellAtIndex(index);
          cell && this._delegate && this._delegate.tableCellTouched(this, cell);
        }
      };
      TableView.prototype.onTouchCancel = function(event) {
        this._touchStartIndex = -1;
      };
      TableView.prototype.updateCellPositions = function() {
        if (!this._dataSource) return;
        this._cellPositions.length = 0;
        var count = this._dataSource.numberOfCellsInTableView(this);
        if (count > 0) {
          var currentPos = 0;
          for (var i = 0; i < count; i++) {
            this._cellPositions.push(currentPos);
            var cellSize = this._dataSource.tableCellSizeForIndex(this, i);
            switch (this._direction) {
             case TableViewDirection.Horizontal:
              currentPos += cellSize.width;
              break;

             case TableViewDirection.Vertical:
              currentPos += cellSize.height;
            }
          }
          this._cellPositions.push(currentPos);
        }
        var size = cc.size(0, 0);
        if (count > 0) {
          var maxPosition = this._cellPositions[count];
          var viewSize = this.getViewSize();
          switch (this._direction) {
           case TableViewDirection.Horizontal:
            size = cc.size(maxPosition, viewSize.height);
            break;

           case TableViewDirection.Vertical:
            size = cc.size(viewSize.width, maxPosition);
          }
        }
        this.scrollView.content.setContentSize(size);
        switch (this._direction) {
         case TableViewDirection.Horizontal:
          this.scrollView.content.parent.setAnchorPoint(0, .5);
          this.scrollView.content.setAnchorPoint(0, .5);
          break;

         case TableViewDirection.Vertical:
          this.scrollView.content.parent.setAnchorPoint(.5, 1);
          this.scrollView.content.setAnchorPoint(.5, 1);
        }
      };
      TableView.prototype.getViewSize = function() {
        return this.scrollView.node.getContentSize();
      };
      TableView.prototype.getContentOffset = function() {
        var contentPos = this.scrollView.content.getPosition();
        return contentPos;
      };
      TableView.prototype.getContentSize = function() {
        return this.scrollView.content.getContentSize();
      };
      TableView.prototype.getOffsetForIndex = function(index) {
        var pos = this._cellPositions[index];
        switch (this._direction) {
         case TableViewDirection.Horizontal:
          return cc.v2(pos, 0);

         case TableViewDirection.Vertical:
          return cc.v2(0, -pos);
        }
      };
      TableView.prototype.getIndexFromOffSet = function(offset) {
        if (!this._dataSource) return -1;
        var low = 0;
        var high = this._dataSource.numberOfCellsInTableView(this) - 1;
        var search = offset.y;
        switch (this._direction) {
         case TableViewDirection.Horizontal:
          search = -offset.x;
          break;

         case TableViewDirection.Vertical:
          search = offset.y;
        }
        while (high >= low) {
          var index = low + Math.floor((high - low) / 2);
          var cellStart = this._cellPositions[index];
          var cellEnd = this._cellPositions[index + 1];
          if (search >= cellStart && search <= cellEnd) return index;
          search < cellStart ? high = index - 1 : low = index + 1;
        }
        if (low <= 0) return 0;
        if (high >= this._dataSource.numberOfCellsInTableView(this) - 1) return this._dataSource.numberOfCellsInTableView(this) - 1;
        return -1;
      };
      TableView.prototype.onScrollViewDidScroll = function() {
        if (!this._dataSource) return;
        var startIndex = 0;
        var endIndex = 0;
        var minIndex = 0;
        var maxIndex = Math.max(this._dataSource.numberOfCellsInTableView(this) - 1, 0);
        var startOffset = this.getContentOffset();
        startIndex = Math.max(this.getIndexFromOffSet(startOffset), minIndex);
        var viewSize = this.getViewSize();
        var endOffset = startOffset.add(cc.v2(viewSize.width, 0));
        switch (this._direction) {
         case TableViewDirection.Horizontal:
          endOffset = startOffset.sub(cc.v2(viewSize.width, 0));
          break;

         case TableViewDirection.Vertical:
          endOffset = startOffset.add(cc.v2(0, viewSize.height));
        }
        endIndex = Math.min(this.getIndexFromOffSet(endOffset), maxIndex);
        for (var index = 0; index < this._usedCells.length; index++) {
          var cell = this._usedCells[index];
          if (cell.getIndex() < startIndex || cell.getIndex() > endIndex) {
            this.removeCell(cell);
            index -= 1;
          }
        }
        for (var index = startIndex; index <= endIndex; index++) {
          if (this.getCellAtIndex(index)) continue;
          this.updateCellAtIndex(index);
        }
      };
      TableView.prototype.setIndexForCell = function(index, cell) {
        switch (this._direction) {
         case TableViewDirection.Horizontal:
          cell.node.setAnchorPoint(0, .5);
          break;

         case TableViewDirection.Vertical:
          cell.node.setAnchorPoint(.5, 1);
        }
        var pos = this.getOffsetForIndex(index);
        cell.node.setPosition(pos);
        cell.setIndex(index);
      };
      TableView.prototype.getCellAtIndex = function(index) {
        for (var i = 0; i < this._usedCells.length; i++) {
          var element = this._usedCells[i];
          if (element.getIndex() == index) return element;
        }
        return null;
      };
      TableView.prototype.addCell = function(cell) {
        cell.node.parent != this.scrollView.content && this.scrollView.content.addChild(cell.node);
        this._usedCells.splice(cell.getIndex(), 0, cell);
      };
      TableView.prototype.removeCell = function(cell) {
        this._freedCells.push(cell);
        var index = this._usedCells.indexOf(cell);
        -1 != index && this._usedCells.splice(index, 1);
        cell.reset();
        this._useFastMode ? cell.node.removeFromParent(false) : cell.node.setPosition(cc.v2(-1e4, -1e4));
      };
      TableView.prototype.updateCellAtIndex = function(index) {
        if (!this._dataSource) return;
        var cell = this.getCellAtIndex(index);
        cell && this.removeCell(cell);
        if (index >= 0 && index < this._dataSource.numberOfCellsInTableView(this)) {
          var cell_1 = this._dataSource.tableCellAtIndex(this, index);
          this.setIndexForCell(index, cell_1);
          this.addCell(cell_1);
        }
      };
      TableView.prototype.insertCellAtIndex = function(index) {
        this.reload();
      };
      TableView.prototype.removeCellAtIndex = function(index) {
        this.reload();
      };
      TableView.prototype.setDataSource = function(dataSource) {
        this._dataSource = dataSource;
        this.reload();
      };
      TableView.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
      };
      TableView.prototype.init = function(dataSource, delegate) {
        this.setDataSource(dataSource);
        this.setDelegate(delegate);
      };
      TableView.prototype.reload = function() {
        for (var index = 0; index < this._usedCells.length; index++) {
          var cell = this._usedCells[index];
          this._freedCells.push(cell);
          cell.reset();
          cell.node.removeFromParent(false);
        }
        this._usedCells.length = 0;
        this.updateCellPositions();
        this.onScrollViewDidScroll();
      };
      TableView.prototype.dequeneCell = function() {
        if (this._freedCells.length > 0) {
          var cell = this._freedCells[0];
          this._freedCells.splice(0, 1);
          return cell;
        }
        return null;
      };
      TableView.prototype.getTopCellInSight = function() {
        if (this._usedCells.length <= 0) return null;
        var minIndex = 0;
        for (var index = 0; index < this._usedCells.length; index++) {
          var cell = this._usedCells[index];
          cell.getIndex() < this._usedCells[minIndex].getIndex() && (minIndex = index);
        }
        return this._usedCells[minIndex];
      };
      TableView.prototype.getBottomCellInSight = function() {
        if (this._usedCells.length <= 0) return null;
        var minIndex = 0;
        for (var index = 0; index < this._usedCells.length; index++) {
          var cell = this._usedCells[index];
          cell.getIndex() > this._usedCells[minIndex].getIndex() && (minIndex = index);
        }
        return this._usedCells[minIndex];
      };
      TableView.prototype.stopAutoScroll = function() {
        this.scrollView.stopAutoScroll();
      };
      TableView.prototype.scrollTo = function(anchor, timeInSecond, attenuated) {
        this.scrollView.scrollTo(anchor, timeInSecond, attenuated);
        this.onScrollViewDidScroll();
      };
      TableView.prototype.scrollToIndex = function(index, timeInSecond, attenuated) {
        var offset = this.getOffsetForIndex(index);
        switch (this._direction) {
         case TableViewDirection.Horizontal:
          this.scrollView.scrollToOffset(cc.v2(offset.x, offset.y), timeInSecond, attenuated);
          break;

         case TableViewDirection.Vertical:
          this.scrollView.scrollToOffset(cc.v2(offset.x, -offset.y), timeInSecond, attenuated);
        }
        this.onScrollViewDidScroll();
      };
      TableView.prototype.scrollToTop = function(timeInSecond, attenuated) {
        this.scrollView.scrollToTop(timeInSecond, attenuated);
      };
      TableView.prototype.getScrollOffset = function() {
        return this.scrollView.getScrollOffset();
      };
      TableView.prototype.getMaxScrollOffset = function() {
        return this.scrollView.getMaxScrollOffset();
      };
      __decorate([ property(cc.ScrollView) ], TableView.prototype, "scrollView", void 0);
      TableView = __decorate([ ccclass ], TableView);
      return TableView;
    }(cc.Component);
    exports.default = TableView;
    cc._RF.pop();
  }, {} ],
  TiledMapJsonPhraser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07a78rjRldEybGVbR/iSZlj", "TiledMapJsonPhraser");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TilesetProperty = exports.ObjectLayer = exports.TileMapObject = exports.TileMapProperty = exports.TileLayer = void 0;
    var AssetCache_1 = require("../AssetCache/AssetCache");
    var TileLayer = function() {
      function TileLayer() {}
      TileLayer.createWithTmxData = function(data) {
        var instance = new TileLayer();
        if (data) {
          instance.id = data.id || 0;
          instance.name = data.name || "";
          instance.type = data.type || "";
          instance.width = data.width || 0;
          instance.height = data.height || 0;
          instance.x = data.x || 0;
          instance.y = data.y || 0;
          instance.GIDs = data.data || [];
        }
        return instance;
      };
      TileLayer.prototype.getGid = function(pos) {
        var index = Math.floor(pos.y) * this.width + Math.floor(pos.x);
        if (index >= 0 && index < this.GIDs.length) return this.GIDs[index];
        return 0;
      };
      return TileLayer;
    }();
    exports.TileLayer = TileLayer;
    var TileMapProperty = function() {
      function TileMapProperty() {}
      TileMapProperty.createWithTmxData = function(data) {
        var instance = new TileMapProperty();
        if (data) {
          instance.name = data.name || "";
          instance.type = data.type || "";
          instance.value = data.value || null;
        }
        return instance;
      };
      return TileMapProperty;
    }();
    exports.TileMapProperty = TileMapProperty;
    var TileMapObject = function() {
      function TileMapObject() {}
      TileMapObject.createWithTmxData = function(data) {
        var instance = new TileMapObject();
        if (data) {
          instance.id = data.id || 0;
          instance.name = data.name || "";
          instance.width = data.width || 0;
          instance.height = data.height || 0;
          instance.x = data.x || 0;
          instance.y = data.y || 0;
          instance.propertyDict = {};
          if (data.properties) for (var _i = 0, _a = data.properties; _i < _a.length; _i++) {
            var property = _a[_i];
            instance.propertyDict[property.name] = TileMapProperty.createWithTmxData(property);
          }
          instance.gid = data.gid || 0;
          instance.polyline = data.polyline || [];
        }
        return instance;
      };
      TileMapObject.prototype.getProperty = function(key) {
        return this.propertyDict[key];
      };
      return TileMapObject;
    }();
    exports.TileMapObject = TileMapObject;
    var ObjectLayer = function() {
      function ObjectLayer() {}
      ObjectLayer.createWithTmxData = function(data) {
        var instance = new ObjectLayer();
        if (data) {
          instance.id = data.id || 0;
          instance.name = data.name || "";
          instance.type = data.type || "";
          instance.x = data.x || 0;
          instance.y = data.y || 0;
          instance.objects = [];
          if (data.objects) for (var _i = 0, _a = data.objects; _i < _a.length; _i++) {
            var object = _a[_i];
            instance.objects.push(TileMapObject.createWithTmxData(object));
          }
        }
        return instance;
      };
      ObjectLayer.prototype.getObjectInArea = function(rect) {
        var result = [];
        for (var _i = 0, _a = this.objects; _i < _a.length; _i++) {
          var objectInfo = _a[_i];
          var objectRect = cc.rect(objectInfo.x, objectInfo.y, objectInfo.width, objectInfo.height);
          0 != objectInfo.gid && (objectRect.y -= objectRect.height);
          objectRect.intersects(rect) && result.push(objectInfo);
        }
        return result;
      };
      return ObjectLayer;
    }();
    exports.ObjectLayer = ObjectLayer;
    var TilesetProperty = function() {
      function TilesetProperty() {}
      TilesetProperty.createWithTmxData = function(data) {
        var instance = new TilesetProperty();
        if (data) {
          instance.id = data.id || 0;
          instance.propertyDict = {};
          if (data.properties) for (var _i = 0, _a = data.properties; _i < _a.length; _i++) {
            var property = _a[_i];
            instance.propertyDict[property.name] = TileMapProperty.createWithTmxData(property);
          }
        }
        return instance;
      };
      TilesetProperty.prototype.getProperty = function(key) {
        return this.propertyDict[key];
      };
      return TilesetProperty;
    }();
    exports.TilesetProperty = TilesetProperty;
    var TiledMapJsonPhraser = function() {
      function TiledMapJsonPhraser(bundleID, url) {
        this._mapSize = null;
        this._tileSize = null;
        this._tileLayers = {};
        this._objectLayers = {};
        this._tilesetProperties = {};
        this._bundleID = "";
        this._url = "";
        this._bundleID = bundleID;
        this._url = url;
        var jsonAsset = AssetCache_1.default.getInstance().getAssetSync(bundleID, url, cc.JsonAsset);
        this.initWithData(jsonAsset.json);
      }
      TiledMapJsonPhraser.createWithFile = function(bundleID, url) {
        var instance = new TiledMapJsonPhraser(bundleID, url);
        return instance;
      };
      TiledMapJsonPhraser.prototype.initWithData = function(json) {
        this.initMapInfo(json);
        this.initLayers(json);
        this.initTileProperties(json);
      };
      TiledMapJsonPhraser.prototype.initMapInfo = function(jsonObj) {
        this._mapSize = cc.size(jsonObj["width"] || 0, jsonObj["height"] || 0);
        this._tileSize = cc.size(jsonObj["tilewidth"] || 0, jsonObj["tilewidth"] || 0);
      };
      TiledMapJsonPhraser.prototype.initLayers = function(jsonObj) {
        this._tileLayers = {};
        var layers = jsonObj["layers"];
        if (layers) for (var key in layers) {
          var layer = layers[key];
          var type = layer["type"];
          if ("tilelayer" == type) {
            var tileLayer = TileLayer.createWithTmxData(layer);
            this._tileLayers[tileLayer.name] = tileLayer;
          } else if ("objectgroup" == type) {
            var objectLayer = ObjectLayer.createWithTmxData(layer);
            this._objectLayers[objectLayer.name] = objectLayer;
          }
        }
      };
      TiledMapJsonPhraser.prototype.initTileProperties = function(genericValue) {
        this._tilesetProperties = {};
        var tileSets = genericValue["tilesets"];
        if (tileSets) for (var _i = 0, tileSets_1 = tileSets; _i < tileSets_1.length; _i++) {
          var objItem = tileSets_1[_i];
          var firstGID = objItem["firstgid"];
          if (objItem.hasOwnProperty("source")) {
            var source = objItem["source"];
            var fileName = source.substr(0, source.lastIndexOf("."));
            var tilesetUrl = this._url.substr(0, this._url.lastIndexOf("/") + 1) + fileName;
            var jsonAsset = AssetCache_1.default.getInstance().getAssetSync(this._bundleID, tilesetUrl, cc.JsonAsset);
            var tiles = jsonAsset.json.tiles;
            for (var index = 0; index < tiles.length; index++) {
              var tilesetProperty = TilesetProperty.createWithTmxData(tiles[index]);
              tilesetProperty.id = firstGID + index;
              this._tilesetProperties[tilesetProperty.id] = tilesetProperty;
            }
          }
        }
      };
      TiledMapJsonPhraser.prototype.getMapSize = function() {
        return this._mapSize;
      };
      TiledMapJsonPhraser.prototype.getTileSize = function() {
        return this._tileSize;
      };
      TiledMapJsonPhraser.prototype.getTileLayer = function(name) {
        if (this._tileLayers[name]) return this._tileLayers[name];
        return null;
      };
      TiledMapJsonPhraser.prototype.getGid = function(layerName, pos) {
        var layer = this.getTileLayer(layerName);
        if (layer) return layer.getGid(pos);
        return 0;
      };
      TiledMapJsonPhraser.prototype.getObjectLayer = function(name) {
        if (this._objectLayers[name]) return this._objectLayers[name];
        return null;
      };
      TiledMapJsonPhraser.prototype.getObjectInfos = function(name, pos) {
        var layer = this.getObjectLayer(name);
        if (layer) {
          var cellRect = cc.rect(pos.x * this._tileSize.width + 1, pos.y * this._tileSize.height + 1, this._tileSize.width - 2, this._tileSize.height - 2);
          return layer.getObjectInArea(cellRect);
        }
        return [];
      };
      TiledMapJsonPhraser.prototype.getTilesetPropertyWithGID = function(gid) {
        return this._tilesetProperties[gid];
      };
      TiledMapJsonPhraser.prototype.getTilesetProperty = function(layerName, pos) {
        var gid = this.getGid(layerName, pos);
        if (0 != gid) return this.getTilesetPropertyWithGID(gid);
        return null;
      };
      return TiledMapJsonPhraser;
    }();
    exports.default = TiledMapJsonPhraser;
    cc._RF.pop();
  }, {
    "../AssetCache/AssetCache": "AssetCache"
  } ],
  UITopViewAdaptor: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8e7898cvg1LpbOTYRLPsoQV", "UITopViewAdaptor");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DeviceTypeUtils_1 = require("../../Utils/DeviceTypeUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UITopViewAdaptor = function(_super) {
      __extends(UITopViewAdaptor, _super);
      function UITopViewAdaptor() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._adapted = false;
        return _this;
      }
      UITopViewAdaptor.prototype.start = function() {
        this.updateAlignment();
      };
      UITopViewAdaptor.prototype.updateAlignment = function() {
        if (this._adapted) return;
        this._adapted = true;
        var delta = DeviceTypeUtils_1.default.getTopViewAdpatHeight();
        if (delta > 0) {
          var widget = this.getComponent(cc.Widget);
          if (widget) {
            var beforeAdaptTop = 0;
            widget.isAlignTop && (beforeAdaptTop = widget.top);
            widget.isAlignTop = true;
            widget.top = beforeAdaptTop + delta;
            widget.updateAlignment();
          } else {
            var beforePos = this.node.getPosition();
            this.node.setPosition(cc.v2(beforePos.x, beforePos.y - delta));
          }
        }
      };
      UITopViewAdaptor = __decorate([ ccclass ], UITopViewAdaptor);
      return UITopViewAdaptor;
    }(cc.Component);
    exports.default = UITopViewAdaptor;
    cc._RF.pop();
  }, {
    "../../Utils/DeviceTypeUtils": "DeviceTypeUtils"
  } ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1be5ou4JBPqKCEArrT7MeQ", "Utils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Heap_1 = require("../STL/Heap");
    var Utils = function() {
      function Utils() {}
      Utils.getNSampleWithHeap = function(samples, count) {
        var minHeap = new Heap_1.default(function(a, b) {
          return a.weight < b.weight;
        }, function(a, b) {
          return a.weight == b.weight;
        });
        for (var _i = 0, samples_1 = samples; _i < samples_1.length; _i++) {
          var sample = samples_1[_i];
          var priority = Math.log(Math.random()) / sample.weight;
          if (minHeap.length() < count) {
            var newSample = {
              value: sample.value,
              weight: priority
            };
            minHeap.push(newSample);
          } else if (priority > minHeap.peek().weight) {
            var newSample = {
              value: sample.value,
              weight: priority
            };
            minHeap.push(newSample);
            minHeap.pop();
          }
        }
        var result = [];
        while (!minHeap.isEmpty()) {
          result.push(minHeap.peek().value);
          minHeap.pop();
        }
        return result;
      };
      Utils.getNSample = function(samples, amount) {
        var indexes = [];
        for (var i = 0; i < samples.length; i++) {
          var priority = Math.log(Math.random()) / samples[i].weight;
          if (indexes.length < amount) indexes.push({
            index: i,
            priority: priority
          }); else {
            var minIndex = this.getMinPriorityIndex(indexes);
            if (priority > indexes[minIndex].priority) {
              indexes[minIndex].index = i;
              indexes[minIndex].priority = priority;
            }
          }
        }
        var result = [];
        for (var i = 0; i < indexes.length; i++) result.push(samples[indexes[i].index].value);
        return result;
      };
      Utils.getMinPriorityIndex = function(array) {
        var minIndex = -1;
        for (var index = 0; index < array.length; index++) -1 == minIndex ? minIndex = index : array[index].priority < array[minIndex].priority && (minIndex = index);
        return minIndex;
      };
      return Utils;
    }();
    exports.default = Utils;
    cc._RF.pop();
  }, {
    "../STL/Heap": "Heap"
  } ],
  WorldBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b39e2ILdWlJVI3/+5KNm54T", "WorldBase");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WorldBase = function(_super) {
      __extends(WorldBase, _super);
      function WorldBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._entitiesDict = {};
        return _this;
      }
      WorldBase_1 = WorldBase;
      WorldBase.prototype.getNextValidID = function() {
        WorldBase_1._nextValidID += 1;
        return WorldBase_1._nextValidID;
      };
      WorldBase.prototype.addEntityWithIdentifier = function(entity, identifier) {
        this.removeEntityWithIdentifier(identifier);
        this._entitiesDict[identifier] = entity;
      };
      WorldBase.prototype.removeEntityWithIdentifier = function(identifier) {
        var removedEntity = this._entitiesDict[identifier];
        delete this._entitiesDict[identifier];
        return removedEntity;
      };
      WorldBase.prototype.getEntityWithIdentifier = function(identifier) {
        return this._entitiesDict[identifier];
      };
      WorldBase.prototype.dispatchMessage = function(entityID, message) {
        var entity = this.getEntityWithIdentifier(entityID);
        entity && this.dispatchMessageWithEntity(entity, message);
      };
      WorldBase.prototype.dispatchMessageWithEntity = function(entity, message) {
        entity && entity.onMessage(message);
      };
      var WorldBase_1;
      WorldBase.InvalidID = -1;
      WorldBase._nextValidID = 0;
      WorldBase = WorldBase_1 = __decorate([ ccclass ], WorldBase);
      return WorldBase;
    }(cc.Component);
    exports.default = WorldBase;
    cc._RF.pop();
  }, {} ]
}, {}, [ "LoadingScene", "Defines", "AssetCache", "AssetDirLoader", "AssetLoader", "SimpleButton", "SimpleCheckBox", "PageView", "PageViewCell", "PageViewDataSource", "PageViewDelegate", "RedDotEvent", "RedDotNotifyCenter", "RedDotObserver", "TabItem", "TabView", "TabViewCell", "TableView", "TableViewCell", "UITopViewAdaptor", "DefaultConfig", "EntityBase", "EntityNodePool", "Message", "SimpleStateMachine", "StackStateMachine", "State", "StateMachine", "StatePool", "WorldBase", "EventDispatcher", "IGame", "ILayerRoot", "LayerBase", "LayerDirector", "LayerDirectorError", "LayerEnterParamBase", "LayerLoader", "HttpWrapperBase", "IHttpDelegate", "HttpWrapperWeb", "SocketDispatcherBase", "SocketHeartBeatBase", "SocketMessagePhraserBase", "ISocketDelegate", "SocketWrapperBase", "SocketFactory", "SocketWrapperWeb", "SocketWrapperWeixin", "PlayerInfo", "Heap", "Stack", "ActiveIndicatorLayer", "LaunchScene", "PreloadAssetInfo", "SceneBase", "SceneDirector", "SceneDirectorError", "SceneEnterParamBase", "SwitchScene", "SwitchSceneEnterParam", "TiledMapJsonPhraser", "Debuger", "DeviceTypeUtils", "GameMath", "Utils" ]);
//# sourceMappingURL=index.js.map
