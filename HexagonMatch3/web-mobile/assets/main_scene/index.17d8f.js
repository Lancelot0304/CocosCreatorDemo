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
  MainScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9299dML2MZLXoo5CBhSTaor", "MainScene");
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
    var Defines_1 = require("../../../scripts/Defines/Defines");
    var IGame_1 = require("../../../scripts/Frameworks/IGame/IGame");
    var PreloadAssetInfo_1 = require("../../../scripts/Frameworks/SceneDirector/PreloadAssetInfo");
    var SceneBase_1 = require("../../../scripts/Frameworks/SceneDirector/SceneBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainScene = function(_super) {
      __extends(MainScene, _super);
      function MainScene() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MainScene.prototype.getSceneName = function() {
        return Defines_1.SceneName.MainScene;
      };
      MainScene.prototype.onSceneLoad = function() {};
      MainScene.prototype.onSceneEnable = function() {};
      MainScene.prototype.onSceneEnter = function(param) {};
      MainScene.prototype.onSceneStart = function() {};
      MainScene.prototype.onSceneUpdate = function(dt) {};
      MainScene.prototype.onSceneDisable = function() {};
      MainScene.prototype.onSceneExit = function() {};
      MainScene.prototype.onSceneDestroy = function() {};
      MainScene.prototype.onStartBtn = function(event) {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.extiBundles = [ Defines_1.AssetBundleID.MainScene ];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.GameScene] = [ "prefab", "texture" ];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.GameScene);
      };
      MainScene.prototype.onShaderBtn = function(event) {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.extiBundles = [ Defines_1.AssetBundleID.MainScene ];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.ShaderScene] = [ "prefab", "shader", "texture" ];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.ShaderScene);
      };
      MainScene.prototype.onLockStepBtn = function(event) {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.extiBundles = [ Defines_1.AssetBundleID.MainScene ];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.LockStepScene] = [];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.LockStepScene);
      };
      MainScene.prototype.onChatBtn = function(event) {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.extiBundles = [ Defines_1.AssetBundleID.MainScene ];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.ChatScene] = [];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.ChatScene);
      };
      MainScene.prototype.onDropBtn = function(event) {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.extiBundles = [ Defines_1.AssetBundleID.MainScene ];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.DropScene] = [ "config", "prefab", "texture" ];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.DropScene);
      };
      MainScene = __decorate([ ccclass ], MainScene);
      return MainScene;
    }(SceneBase_1.default);
    exports.default = MainScene;
    cc._RF.pop();
  }, {
    "../../../scripts/Defines/Defines": void 0,
    "../../../scripts/Frameworks/IGame/IGame": void 0,
    "../../../scripts/Frameworks/SceneDirector/PreloadAssetInfo": void 0,
    "../../../scripts/Frameworks/SceneDirector/SceneBase": void 0
  } ],
  RedDotItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "45dd6Ii5ktH64uPzNLJTCk5", "RedDotItem");
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
    var RedDotObserver_1 = require("../../../scripts/Frameworks/Components/RedDot/RedDotObserver");
    var Debuger_1 = require("../../../scripts/Frameworks/Utils/Debuger");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var RedDotItem = function(_super) {
      __extends(RedDotItem, _super);
      function RedDotItem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      RedDotItem.prototype.onLoad = function() {
        this.listen("111");
        this.listen("222");
      };
      RedDotItem.prototype.onDestroy = function() {
        this.unlistenAll();
      };
      RedDotItem.prototype.start = function() {};
      RedDotItem.prototype.onRedDotEvent = function(event) {
        switch (event.eventName) {
         case "111":
          Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, "onEvent 111");
          this.node.active = false;
          break;

         case "222":
          Debuger_1.default.log(Debuger_1.default.FILTER_TAG01, "onEvent 222");
          this.node.active = true;
        }
      };
      RedDotItem = __decorate([ ccclass ], RedDotItem);
      return RedDotItem;
    }(RedDotObserver_1.default);
    exports.default = RedDotItem;
    cc._RF.pop();
  }, {
    "../../../scripts/Frameworks/Components/RedDot/RedDotObserver": void 0,
    "../../../scripts/Frameworks/Utils/Debuger": void 0
  } ]
}, {}, [ "MainScene", "RedDotItem" ]);
//# sourceMappingURL=index.js.map
