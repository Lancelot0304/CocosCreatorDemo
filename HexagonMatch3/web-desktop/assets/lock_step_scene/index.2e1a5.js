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
  GameWorld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e94f7hBfF5Fm7T7f+gJa7An", "GameWorld");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.GWSEventName = void 0;
    var GWSEventName;
    (function(GWSEventName) {
      GWSEventName["OnReconnect"] = "onReconnect";
      GWSEventName["OnFrame"] = "onFrame";
      GWSEventName["OnSyncFrame"] = "onSyncFrame";
    })(GWSEventName = exports.GWSEventName || (exports.GWSEventName = {}));
    var GameWorld = function() {
      function GameWorld() {
        this._timeDelta = 0;
        this._frameDuration = 0;
        this._gameDuration = 0;
        this._timeScale = 0;
        this._msgArray = [];
        this._synced = false;
      }
      GameWorld.prototype.start = function() {};
      GameWorld.prototype.end = function() {};
      GameWorld.prototype.update = function(dt) {
        this._timeDelta += dt * this._timeScale;
        while (this._timeDelta > this._frameDuration) this.frameUpdate();
      };
      GameWorld.prototype.frameUpdate = function() {
        if (this._synced) {
          this.updateEntities(this._frameDuration);
          this._timeDelta -= this._frameDuration;
          this._gameDuration += this._frameDuration;
        }
      };
      GameWorld.prototype.updateEntities = function(dt) {};
      GameWorld.prototype.onFrame = function(data) {
        this._msgArray.push(data);
      };
      GameWorld.prototype.onReconnect = function(data) {};
      GameWorld.prototype.onSyncFrame = function(data) {
        this._timeDelta = data.gameDelta;
        this._gameDuration = data.gameDuration;
        this._msgArray = data.msgArray;
        this._synced = true;
      };
      return GameWorld;
    }();
    exports.default = GameWorld;
    cc._RF.pop();
  }, {} ],
  LockStepScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "025324AMw1M2KYgc0jk+6X2", "LockStepScene");
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
    var SceneBase_1 = require("../../../scripts/Frameworks/SceneDirector/SceneBase");
    var Defines_1 = require("../../../scripts/Defines/Defines");
    var PreloadAssetInfo_1 = require("../../../scripts/Frameworks/SceneDirector/PreloadAssetInfo");
    var IGame_1 = require("../../../scripts/Frameworks/IGame/IGame");
    var GameWorld_1 = require("./GameWorld");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LockStepScene = function(_super) {
      __extends(LockStepScene, _super);
      function LockStepScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._gameWorld = null;
        _this.quitBtn = null;
        return _this;
      }
      LockStepScene.prototype.getSceneName = function() {
        return Defines_1.SceneName.LockStepScene;
      };
      LockStepScene.prototype.onSceneLoad = function() {};
      LockStepScene.prototype.onSceneEnable = function() {};
      LockStepScene.prototype.onSceneEnter = function(param) {
        this.quitBtn.on(cc.Node.EventType.TOUCH_END, this.onQuitBtn, this);
      };
      LockStepScene.prototype.onSceneStart = function() {
        this._gameWorld = new GameWorld_1.default();
        this._gameWorld.start();
      };
      LockStepScene.prototype.onSceneUpdate = function(dt) {
        this._gameWorld.update(dt);
      };
      LockStepScene.prototype.onSceneExit = function() {
        this._gameWorld.end();
      };
      LockStepScene.prototype.onSceneDisable = function() {};
      LockStepScene.prototype.onSceneDestroy = function() {};
      LockStepScene.prototype.onQuitBtn = function(event) {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.extiBundles = [ Defines_1.AssetBundleID.LockStepScene ];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.MainScene] = [];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.MainScene);
      };
      __decorate([ property(cc.Node) ], LockStepScene.prototype, "quitBtn", void 0);
      LockStepScene = __decorate([ ccclass ], LockStepScene);
      return LockStepScene;
    }(SceneBase_1.default);
    exports.default = LockStepScene;
    cc._RF.pop();
  }, {
    "../../../scripts/Defines/Defines": void 0,
    "../../../scripts/Frameworks/IGame/IGame": void 0,
    "../../../scripts/Frameworks/SceneDirector/PreloadAssetInfo": void 0,
    "../../../scripts/Frameworks/SceneDirector/SceneBase": void 0,
    "./GameWorld": "GameWorld"
  } ]
}, {}, [ "GameWorld", "LockStepScene" ]);
//# sourceMappingURL=index.js.map
