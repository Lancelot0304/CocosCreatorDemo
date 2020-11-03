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
  ResultScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba9daQ8/JxEd4/qs3ZdSIhq", "ResultScene");
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
    var SceneBase_1 = require("../../../scripts/Frameworks/SceneDirector/SceneBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ResultScene = function(_super) {
      __extends(ResultScene, _super);
      function ResultScene() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ResultScene.prototype.getSceneName = function() {
        return Defines_1.SceneName.ResultScene;
      };
      ResultScene.prototype.onSceneLoad = function() {};
      ResultScene.prototype.onSceneEnable = function() {};
      ResultScene.prototype.onSceneEnter = function(param) {};
      ResultScene.prototype.onSceneStart = function() {};
      ResultScene.prototype.onSceneUpdate = function(dt) {};
      ResultScene.prototype.onSceneDisable = function() {};
      ResultScene.prototype.onSceneExit = function() {};
      ResultScene.prototype.onSceneDestroy = function() {};
      ResultScene = __decorate([ ccclass ], ResultScene);
      return ResultScene;
    }(SceneBase_1.default);
    exports.default = ResultScene;
    cc._RF.pop();
  }, {
    "../../../scripts/Defines/Defines": void 0,
    "../../../scripts/Frameworks/SceneDirector/SceneBase": void 0
  } ]
}, {}, [ "ResultScene" ]);
//# sourceMappingURL=index.js.map
