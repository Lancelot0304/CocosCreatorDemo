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
  CandyBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3261eGk7pBIbKFMoUK064Eb", "CandyBase");
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
    var UnitBase_1 = require("../../Base/UnitBase");
    var UnitDefines_1 = require("../../Base/UnitDefines");
    var CandyStateDrop_1 = require("./State/CandyStateDrop");
    var CandyStateNormal_1 = require("./State/CandyStateNormal");
    var CandyStateTeleport_1 = require("./State/CandyStateTeleport");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CandyBase = function(_super) {
      __extends(CandyBase, _super);
      function CandyBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._selected = false;
        return _this;
      }
      CandyBase.prototype.teleportToLogicalPosition = function(pos) {
        this.layer.moveUnit(this.getLogicalPostion(), pos, false);
        this.setCurrentState(CandyStateTeleport_1.default.create(this.grid.getPixelPositionWithLogicalPositon(this.getLogicalPostion())));
      };
      CandyBase.prototype.moveToLogicalPosition = function(pos) {
        this.layer.moveUnit(this.getLogicalPostion(), pos, false);
        this.setCurrentState(CandyStateDrop_1.default.create(this.grid.getPixelPositionWithLogicalPositon(this.getLogicalPostion())));
      };
      CandyBase.prototype.canDrop = function() {
        return true;
      };
      CandyBase.prototype.getSelected = function() {
        return this._selected;
      };
      CandyBase.prototype.setSelected = function(selected) {
        this._selected = selected;
      };
      CandyBase.prototype.initCandy = function(kind) {
        _super.prototype.initUnit.call(this, UnitDefines_1.UnitCategory.Candy, kind);
        this.setCurrentState(CandyStateNormal_1.default.create());
        this.setSelected(false);
      };
      CandyBase = __decorate([ ccclass ], CandyBase);
      return CandyBase;
    }(UnitBase_1.default);
    exports.default = CandyBase;
    cc._RF.pop();
  }, {
    "../../Base/UnitBase": "UnitBase",
    "../../Base/UnitDefines": "UnitDefines",
    "./State/CandyStateDrop": "CandyStateDrop",
    "./State/CandyStateNormal": "CandyStateNormal",
    "./State/CandyStateTeleport": "CandyStateTeleport"
  } ],
  CandyCake: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a92c90KZoVOPZCh3RzEz+b8", "CandyCake");
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
    var DropSceneAssetCache_1 = require("../../../Utils/DropSceneAssetCache");
    var UnitDefines_1 = require("../../Base/UnitDefines");
    var CandyBase_1 = require("../Base/CandyBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CandyCake = function(_super) {
      __extends(CandyCake, _super);
      function CandyCake() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.doll = null;
        _this.mark = null;
        return _this;
      }
      CandyCake_1 = CandyCake;
      CandyCake.create = function(hp) {
        var res = DropSceneAssetCache_1.default.getPrefab("prefab/Game/Unit/Candy/Cake/CandyCake");
        if (res) {
          var node = cc.instantiate(res);
          if (node) {
            var item = node.getComponent(CandyCake_1);
            if (item) {
              item.initWithHealthPoint(hp);
              return item;
            }
          }
        }
        return null;
      };
      CandyCake.prototype.canDrop = function() {
        return false;
      };
      CandyCake.prototype.setHp = function(hp) {
        hp = Math.min(4, Math.max(1, hp));
        _super.prototype.setHp.call(this, hp);
        var filename = "texture/Game/Candy/Cake/6080" + this.getHP().toString();
        this.doll.spriteFrame = DropSceneAssetCache_1.default.getSpriteFrame(filename);
      };
      CandyCake.prototype.setSelected = function(selected) {
        _super.prototype.setSelected.call(this, selected);
        this.mark.active = this.getSelected();
      };
      CandyCake.prototype.initWithHealthPoint = function(hp) {
        _super.prototype.initCandy.call(this, UnitDefines_1.UnitKind.CandyCake);
        this.setHp(hp);
      };
      var CandyCake_1;
      __decorate([ property(cc.Sprite) ], CandyCake.prototype, "doll", void 0);
      __decorate([ property(cc.Node) ], CandyCake.prototype, "mark", void 0);
      CandyCake = CandyCake_1 = __decorate([ ccclass ], CandyCake);
      return CandyCake;
    }(CandyBase_1.default);
    exports.default = CandyCake;
    cc._RF.pop();
  }, {
    "../../../Utils/DropSceneAssetCache": "DropSceneAssetCache",
    "../../Base/UnitDefines": "UnitDefines",
    "../Base/CandyBase": "CandyBase"
  } ],
  CandyFactory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86416ehP31GbZi5KjjIQ0UR", "CandyFactory");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UnitDefines_1 = require("../Base/UnitDefines");
    var CandyCake_1 = require("./Cake/CandyCake");
    var CandyFruit_1 = require("./Fruit/CandyFruit");
    var CandyFactory = function() {
      function CandyFactory() {}
      CandyFactory.createCandy = function(param) {
        var kind = param["kind"];
        switch (kind) {
         case UnitDefines_1.UnitKind.CandyFruit:
          var color = param["color"] || UnitDefines_1.UnitColor.Red;
          return CandyFruit_1.default.create(color);

         case UnitDefines_1.UnitKind.CandyCake:
          var hp = param["healthPoint"] || 1;
          return CandyCake_1.default.create(hp);
        }
        return null;
      };
      return CandyFactory;
    }();
    exports.default = CandyFactory;
    cc._RF.pop();
  }, {
    "../Base/UnitDefines": "UnitDefines",
    "./Cake/CandyCake": "CandyCake",
    "./Fruit/CandyFruit": "CandyFruit"
  } ],
  CandyFruit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7b1780iioNJ+Zh0jPOnUuYS", "CandyFruit");
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
    var DropSceneAssetCache_1 = require("../../../Utils/DropSceneAssetCache");
    var UnitDefines_1 = require("../../Base/UnitDefines");
    var CandyBase_1 = require("../Base/CandyBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CandyFruit = function(_super) {
      __extends(CandyFruit, _super);
      function CandyFruit() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.doll = null;
        _this.mark = null;
        return _this;
      }
      CandyFruit_1 = CandyFruit;
      CandyFruit.create = function(color) {
        var res = DropSceneAssetCache_1.default.getPrefab("prefab/Game/Unit/Candy/Fruit/CandyFruit");
        if (res) {
          var node = cc.instantiate(res);
          if (node) {
            var item = node.getComponent(CandyFruit_1);
            if (item) {
              item.initWithColor(color);
              return item;
            }
          }
        }
        return null;
      };
      CandyFruit.prototype.canDrop = function() {
        return true;
      };
      CandyFruit.prototype.setColor = function(color) {
        _super.prototype.setColor.call(this, color);
        var filename = "texture/Game/Candy/Fruit/6010" + color.toString();
        this.doll.spriteFrame = DropSceneAssetCache_1.default.getSpriteFrame(filename);
      };
      CandyFruit.prototype.setSelected = function(selected) {
        _super.prototype.setSelected.call(this, selected);
        this.mark.active = this.getSelected();
      };
      CandyFruit.prototype.initWithColor = function(color) {
        _super.prototype.initCandy.call(this, UnitDefines_1.UnitKind.CandyFruit);
        this.setColor(color);
      };
      var CandyFruit_1;
      __decorate([ property(cc.Sprite) ], CandyFruit.prototype, "doll", void 0);
      __decorate([ property(cc.Node) ], CandyFruit.prototype, "mark", void 0);
      CandyFruit = CandyFruit_1 = __decorate([ ccclass ], CandyFruit);
      return CandyFruit;
    }(CandyBase_1.default);
    exports.default = CandyFruit;
    cc._RF.pop();
  }, {
    "../../../Utils/DropSceneAssetCache": "DropSceneAssetCache",
    "../../Base/UnitDefines": "UnitDefines",
    "../Base/CandyBase": "CandyBase"
  } ],
  CandyLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "509b4LPjkNJHZUR/fl2fNJ3", "CandyLayer");
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
    var GridLayerBase_1 = require("../Base/GridLayerBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CandyLayer = function(_super) {
      __extends(CandyLayer, _super);
      function CandyLayer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      CandyLayer_1 = CandyLayer;
      CandyLayer.create = function(contentSize, gridSize) {
        var node = new cc.Node();
        var layer = node.addComponent(CandyLayer_1);
        layer.initWithSize(contentSize, gridSize);
        return layer;
      };
      CandyLayer.prototype.initWithSize = function(contentSize, gridSize) {
        _super.prototype.init.call(this, GridLayerBase_1.LayerName.Candy, contentSize, gridSize);
      };
      var CandyLayer_1;
      CandyLayer = CandyLayer_1 = __decorate([ ccclass ], CandyLayer);
      return CandyLayer;
    }(GridLayerBase_1.default);
    exports.default = CandyLayer;
    cc._RF.pop();
  }, {
    "../Base/GridLayerBase": "GridLayerBase"
  } ],
  CandyStateBorn: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3ab9H/tKxJqa+7Rffh3olg", "CandyStateBorn");
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
    var UnitStateBase_1 = require("../../../Base/State/UnitStateBase");
    var CandyStateNormal_1 = require("./CandyStateNormal");
    var CandyStateBorn = function(_super) {
      __extends(CandyStateBorn, _super);
      function CandyStateBorn() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._pastDuration = 0;
        return _this;
      }
      CandyStateBorn.create = function() {
        var instance = new CandyStateBorn();
        instance.init();
        return instance;
      };
      CandyStateBorn.prototype.init = function() {
        _super.prototype.init.call(this, UnitStateBase_1.UnitStateType.Born);
      };
      CandyStateBorn.prototype.enter = function(onwer) {
        onwer.node.scale = 0;
      };
      CandyStateBorn.prototype.update = function(onwer, dt) {
        this._pastDuration += 4 * dt;
        onwer.node.scale = Math.min(this._pastDuration, 1);
        this._pastDuration >= 1 && onwer.setCurrentState(CandyStateNormal_1.default.create());
      };
      return CandyStateBorn;
    }(UnitStateBase_1.default);
    exports.default = CandyStateBorn;
    cc._RF.pop();
  }, {
    "../../../Base/State/UnitStateBase": "UnitStateBase",
    "./CandyStateNormal": "CandyStateNormal"
  } ],
  CandyStateDrop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ba9fA9jz5IoIrK6I8Q+h29", "CandyStateDrop");
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
    var UnitStateBase_1 = require("../../../Base/State/UnitStateBase");
    var CandyStateNormal_1 = require("./CandyStateNormal");
    var CandyStateDrop = function(_super) {
      __extends(CandyStateDrop, _super);
      function CandyStateDrop() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._pastDuration = 0;
        _this._startPixelPosition = cc.v2(0, 0);
        _this._targetPixelPosition = cc.v2(0, 0);
        return _this;
      }
      CandyStateDrop.create = function(targetPixelPosition) {
        var instance = new CandyStateDrop();
        instance.initWithTargetPos(targetPixelPosition);
        return instance;
      };
      CandyStateDrop.prototype.initWithTargetPos = function(pos) {
        _super.prototype.init.call(this, UnitStateBase_1.UnitStateType.Drop);
        this._targetPixelPosition = pos;
      };
      CandyStateDrop.prototype.enter = function(onwer) {
        onwer.node.scale = 1;
        this._startPixelPosition = onwer.getPixelPosition();
      };
      CandyStateDrop.prototype.update = function(onwer, dt) {
        this._pastDuration += 4 * dt;
        onwer.setPixelPosition(this._startPixelPosition.lerp(this._targetPixelPosition, Math.min(1, this._pastDuration)));
        this._pastDuration >= 1 && onwer.setCurrentState(CandyStateNormal_1.default.create());
      };
      return CandyStateDrop;
    }(UnitStateBase_1.default);
    exports.default = CandyStateDrop;
    cc._RF.pop();
  }, {
    "../../../Base/State/UnitStateBase": "UnitStateBase",
    "./CandyStateNormal": "CandyStateNormal"
  } ],
  CandyStateNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "281859fxtdDQoGL+f/+1eai", "CandyStateNormal");
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
    var UnitStateBase_1 = require("../../../Base/State/UnitStateBase");
    var CandyStateNormal = function(_super) {
      __extends(CandyStateNormal, _super);
      function CandyStateNormal() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      CandyStateNormal.create = function() {
        var instance = new CandyStateNormal();
        instance.init();
        return instance;
      };
      CandyStateNormal.prototype.init = function() {
        _super.prototype.init.call(this, UnitStateBase_1.UnitStateType.Normal);
      };
      CandyStateNormal.prototype.enter = function(onwer) {
        onwer.node.scale = 1;
      };
      return CandyStateNormal;
    }(UnitStateBase_1.default);
    exports.default = CandyStateNormal;
    cc._RF.pop();
  }, {
    "../../../Base/State/UnitStateBase": "UnitStateBase"
  } ],
  CandyStateTeleport: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50fffi4O1NBUojeUZc6NyGl", "CandyStateTeleport");
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
    var UnitStateBase_1 = require("../../../Base/State/UnitStateBase");
    var CandyStateNormal_1 = require("./CandyStateNormal");
    var CandyStateTeleport = function(_super) {
      __extends(CandyStateTeleport, _super);
      function CandyStateTeleport() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._pastDuration = 0;
        _this._startPixelPosition = cc.v2(0, 0);
        _this._targetPixelPosition = cc.v2(0, 0);
        return _this;
      }
      CandyStateTeleport.create = function(targetPixelPosition) {
        var instance = new CandyStateTeleport();
        instance.initWithTargetPos(targetPixelPosition);
        return instance;
      };
      CandyStateTeleport.prototype.initWithTargetPos = function(pos) {
        _super.prototype.init.call(this, UnitStateBase_1.UnitStateType.Drop);
        this._targetPixelPosition = pos;
      };
      CandyStateTeleport.prototype.enter = function(onwer) {
        onwer.node.scale = 1;
        this._startPixelPosition = onwer.getPixelPosition();
      };
      CandyStateTeleport.prototype.update = function(onwer, dt) {
        this._pastDuration += 4 * dt;
        if (this._pastDuration <= .5) {
          onwer.setPixelPosition(this._startPixelPosition);
          onwer.node.scale = 1 - this._pastDuration / .5;
        } else {
          onwer.setPixelPosition(this._targetPixelPosition);
          onwer.node.scale = Math.min(1, (this._pastDuration - .5) / .5);
        }
        this._pastDuration >= 1 && onwer.setCurrentState(CandyStateNormal_1.default.create());
      };
      return CandyStateTeleport;
    }(UnitStateBase_1.default);
    exports.default = CandyStateTeleport;
    cc._RF.pop();
  }, {
    "../../../Base/State/UnitStateBase": "UnitStateBase",
    "./CandyStateNormal": "CandyStateNormal"
  } ],
  DropSceneAssetCache: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7833aeCQLFB/Y4OgEWklgSu", "DropSceneAssetCache");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Defines_1 = require("../../../../../scripts/Defines/Defines");
    var AssetCache_1 = require("../../../../../scripts/Frameworks/AssetCache/AssetCache");
    var DropSceneAssetCache = function() {
      function DropSceneAssetCache() {}
      DropSceneAssetCache.getAssetSync = function(url, type) {
        return AssetCache_1.default.getInstance().getAssetSync(Defines_1.AssetBundleID.DropScene, url, type);
      };
      DropSceneAssetCache.getSpriteFrame = function(url) {
        return this.getAssetSync(url, cc.SpriteFrame);
      };
      DropSceneAssetCache.getPrefab = function(url) {
        return this.getAssetSync(url, cc.Prefab);
      };
      DropSceneAssetCache.getKeyWithLogicalPosition = function(pos) {
        return 100 * Math.floor(pos.y) + Math.floor(pos.x) + 1e4;
      };
      return DropSceneAssetCache;
    }();
    exports.default = DropSceneAssetCache;
    cc._RF.pop();
  }, {
    "../../../../../scripts/Defines/Defines": void 0,
    "../../../../../scripts/Frameworks/AssetCache/AssetCache": void 0
  } ],
  DropSceneMath: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "36a34HMOuBOZLcD2Ky8MgZv", "DropSceneMath");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var DropSceneMath = function() {
      function DropSceneMath() {}
      DropSceneMath.getKeyWithLogicalPosition = function(pos) {
        return 100 * Math.floor(pos.y) + Math.floor(pos.x) + 1e4;
      };
      return DropSceneMath;
    }();
    exports.default = DropSceneMath;
    cc._RF.pop();
  }, {} ],
  DropScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "75f3c4PzuJJjrw+K38mcqO7", "DropScene");
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
    var Grid_1 = require("./Game/Grid/Grid");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var DropScene = function(_super) {
      __extends(DropScene, _super);
      function DropScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gridContainer = null;
        _this._grid = null;
        return _this;
      }
      DropScene.prototype.getSceneName = function() {
        return Defines_1.SceneName.DropScene;
      };
      DropScene.prototype.onSceneLoad = function() {};
      DropScene.prototype.onSceneEnable = function() {};
      DropScene.prototype.onSceneEnter = function(param) {};
      DropScene.prototype.onSceneStart = function() {
        this._grid = Grid_1.default.create(1, this.gridContainer.getContentSize(), cc.size(75, 75), cc.size(9, 12));
        this.gridContainer.addChild(this._grid.node);
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
      };
      DropScene.prototype.onSceneUpdate = function(dt) {
        this._grid && this._grid.updateGrid(dt);
      };
      DropScene.prototype.onSceneExit = function() {};
      DropScene.prototype.onSceneDisable = function() {};
      DropScene.prototype.onSceneDestroy = function() {};
      DropScene.prototype.onStepBtn = function(event) {
        this._grid && this._grid.clearSelectedCandy();
      };
      DropScene.prototype.onQuitBtn = function(event) {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.extiBundles = [ Defines_1.AssetBundleID.DropScene ];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.MainScene] = [];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.MainScene);
      };
      DropScene.prototype.onTouchStart = function(event) {
        this._grid && this._grid.onTouchStart(event);
      };
      DropScene.prototype.onTouchMove = function(event) {
        this._grid && this._grid.onTouchMove(event);
      };
      DropScene.prototype.onTouchEnd = function(event) {
        this._grid && this._grid.onTouchEnd(event);
      };
      DropScene.prototype.onTouchCancel = function(event) {
        this._grid && this._grid.onTouchCancel(event);
      };
      __decorate([ property(cc.Node) ], DropScene.prototype, "gridContainer", void 0);
      DropScene = __decorate([ ccclass ], DropScene);
      return DropScene;
    }(SceneBase_1.default);
    exports.default = DropScene;
    cc._RF.pop();
  }, {
    "../../../scripts/Defines/Defines": void 0,
    "../../../scripts/Frameworks/IGame/IGame": void 0,
    "../../../scripts/Frameworks/SceneDirector/PreloadAssetInfo": void 0,
    "../../../scripts/Frameworks/SceneDirector/SceneBase": void 0,
    "./Game/Grid/Grid": "Grid"
  } ],
  FloorBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0aa88lvPZ9CrZFCbj5xGJnm", "FloorBase");
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
    var UnitBase_1 = require("../../Base/UnitBase");
    var UnitDefines_1 = require("../../Base/UnitDefines");
    var FloorStateNormal_1 = require("./State/FloorStateNormal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FloorBase = function(_super) {
      __extends(FloorBase, _super);
      function FloorBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._isSpawn = false;
        return _this;
      }
      FloorBase.prototype.isSpawn = function() {
        return this._isSpawn;
      };
      FloorBase.prototype.setIsSpawn = function(isSpawn) {
        this._isSpawn = isSpawn;
      };
      FloorBase.prototype.initFloor = function(kind) {
        _super.prototype.initUnit.call(this, UnitDefines_1.UnitCategory.Floor, kind);
        this.setCurrentState(FloorStateNormal_1.default.create());
      };
      FloorBase = __decorate([ ccclass ], FloorBase);
      return FloorBase;
    }(UnitBase_1.default);
    exports.default = FloorBase;
    cc._RF.pop();
  }, {
    "../../Base/UnitBase": "UnitBase",
    "../../Base/UnitDefines": "UnitDefines",
    "./State/FloorStateNormal": "FloorStateNormal"
  } ],
  FloorEntrance: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c141a8G4jpFi4PeA97RBIqk", "FloorEntrance");
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
    var DropSceneAssetCache_1 = require("../../../Utils/DropSceneAssetCache");
    var UnitDefines_1 = require("../../Base/UnitDefines");
    var FloorBase_1 = require("../Base/FloorBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FloorEntrance = function(_super) {
      __extends(FloorEntrance, _super);
      function FloorEntrance() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.doll = null;
        _this._exit = cc.v2(0, 0);
        return _this;
      }
      FloorEntrance_1 = FloorEntrance;
      FloorEntrance.create = function(exit) {
        var res = DropSceneAssetCache_1.default.getPrefab("prefab/Game/Unit/Floor/Entrance/FloorEntrance");
        if (res) {
          var node = cc.instantiate(res);
          if (node) {
            var item = node.getComponent(FloorEntrance_1);
            if (item) {
              item.initWithExit(exit);
              return item;
            }
          }
        }
        return null;
      };
      FloorEntrance.prototype.getExit = function() {
        return this._exit;
      };
      FloorEntrance.prototype.setExit = function(pos) {
        this._exit = pos;
      };
      FloorEntrance.prototype.initWithExit = function(exit) {
        _super.prototype.initFloor.call(this, UnitDefines_1.UnitKind.FloorEntrance);
        this.setExit(exit);
        this.node.zIndex = 1;
      };
      var FloorEntrance_1;
      __decorate([ property(cc.Sprite) ], FloorEntrance.prototype, "doll", void 0);
      FloorEntrance = FloorEntrance_1 = __decorate([ ccclass ], FloorEntrance);
      return FloorEntrance;
    }(FloorBase_1.default);
    exports.default = FloorEntrance;
    cc._RF.pop();
  }, {
    "../../../Utils/DropSceneAssetCache": "DropSceneAssetCache",
    "../../Base/UnitDefines": "UnitDefines",
    "../Base/FloorBase": "FloorBase"
  } ],
  FloorExit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ee4dYw4idFO6ca03QlrMNp", "FloorExit");
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
    var DropSceneAssetCache_1 = require("../../../Utils/DropSceneAssetCache");
    var UnitDefines_1 = require("../../Base/UnitDefines");
    var FloorBase_1 = require("../Base/FloorBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FloorExit = function(_super) {
      __extends(FloorExit, _super);
      function FloorExit() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.doll = null;
        _this._entrance = cc.v2(0, 0);
        return _this;
      }
      FloorExit_1 = FloorExit;
      FloorExit.create = function(exit) {
        var res = DropSceneAssetCache_1.default.getPrefab("prefab/Game/Unit/Floor/Exit/FloorExit");
        if (res) {
          var node = cc.instantiate(res);
          if (node) {
            var item = node.getComponent(FloorExit_1);
            if (item) {
              item.initWithEntrance(exit);
              return item;
            }
          }
        }
        return null;
      };
      FloorExit.prototype.getEntrance = function() {
        return this._entrance;
      };
      FloorExit.prototype.setEntrance = function(pos) {
        this._entrance = pos;
      };
      FloorExit.prototype.initWithEntrance = function(exit) {
        _super.prototype.initFloor.call(this, UnitDefines_1.UnitKind.FloorExit);
        this.setEntrance(exit);
        this.node.zIndex = 1;
      };
      var FloorExit_1;
      __decorate([ property(cc.Sprite) ], FloorExit.prototype, "doll", void 0);
      FloorExit = FloorExit_1 = __decorate([ ccclass ], FloorExit);
      return FloorExit;
    }(FloorBase_1.default);
    exports.default = FloorExit;
    cc._RF.pop();
  }, {
    "../../../Utils/DropSceneAssetCache": "DropSceneAssetCache",
    "../../Base/UnitDefines": "UnitDefines",
    "../Base/FloorBase": "FloorBase"
  } ],
  FloorFactory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d17dCcTqpK97/GNkBxzQ4L", "FloorFactory");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UnitDefines_1 = require("../Base/UnitDefines");
    var FloorEntrance_1 = require("./Entrance/FloorEntrance");
    var FloorExit_1 = require("./Exit/FloorExit");
    var FloorFixed_1 = require("./Fixed/FloorFixed");
    var FloorFactory = function() {
      function FloorFactory() {}
      FloorFactory.createFloor = function(param) {
        var kind = param["kind"];
        switch (kind) {
         case UnitDefines_1.UnitKind.FloorFixed:
          return FloorFixed_1.default.create();

         case UnitDefines_1.UnitKind.FloorEntrance:
          var exit = param["relatedPosition"] || cc.v2(-1, -1);
          return FloorEntrance_1.default.create(exit);

         case UnitDefines_1.UnitKind.FloorExit:
          var entrance = param["relatedPosition"] || cc.v2(-1, -1);
          return FloorExit_1.default.create(entrance);
        }
        return null;
      };
      return FloorFactory;
    }();
    exports.default = FloorFactory;
    cc._RF.pop();
  }, {
    "../Base/UnitDefines": "UnitDefines",
    "./Entrance/FloorEntrance": "FloorEntrance",
    "./Exit/FloorExit": "FloorExit",
    "./Fixed/FloorFixed": "FloorFixed"
  } ],
  FloorFixed: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c95f63X/y9FYaAStQOs8xau", "FloorFixed");
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
    var DropSceneAssetCache_1 = require("../../../Utils/DropSceneAssetCache");
    var UnitDefines_1 = require("../../Base/UnitDefines");
    var FloorBase_1 = require("../Base/FloorBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FloorFixed = function(_super) {
      __extends(FloorFixed, _super);
      function FloorFixed() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.doll = null;
        return _this;
      }
      FloorFixed_1 = FloorFixed;
      FloorFixed.create = function() {
        var res = DropSceneAssetCache_1.default.getPrefab("prefab/Game/Unit/Floor/Fixed/FloorFixed");
        if (res) {
          var node = cc.instantiate(res);
          if (node) {
            var item = node.getComponent(FloorFixed_1);
            if (item) {
              item.init();
              return item;
            }
          }
        }
        return null;
      };
      FloorFixed.prototype.init = function() {
        _super.prototype.initFloor.call(this, UnitDefines_1.UnitKind.FloorFixed);
      };
      var FloorFixed_1;
      __decorate([ property(cc.Sprite) ], FloorFixed.prototype, "doll", void 0);
      FloorFixed = FloorFixed_1 = __decorate([ ccclass ], FloorFixed);
      return FloorFixed;
    }(FloorBase_1.default);
    exports.default = FloorFixed;
    cc._RF.pop();
  }, {
    "../../../Utils/DropSceneAssetCache": "DropSceneAssetCache",
    "../../Base/UnitDefines": "UnitDefines",
    "../Base/FloorBase": "FloorBase"
  } ],
  FloorLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f497c2CCC1O4arw/ElvVr2O", "FloorLayer");
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
    var GridLayerBase_1 = require("../Base/GridLayerBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FloorLayer = function(_super) {
      __extends(FloorLayer, _super);
      function FloorLayer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FloorLayer_1 = FloorLayer;
      FloorLayer.create = function(contentSize, gridSize) {
        var node = new cc.Node();
        var layer = node.addComponent(FloorLayer_1);
        layer.initWithSize(contentSize, gridSize);
        return layer;
      };
      FloorLayer.prototype.initWithSize = function(contentSize, gridSize) {
        _super.prototype.init.call(this, GridLayerBase_1.LayerName.Floor, contentSize, gridSize);
      };
      var FloorLayer_1;
      FloorLayer = FloorLayer_1 = __decorate([ ccclass ], FloorLayer);
      return FloorLayer;
    }(GridLayerBase_1.default);
    exports.default = FloorLayer;
    cc._RF.pop();
  }, {
    "../Base/GridLayerBase": "GridLayerBase"
  } ],
  FloorStateNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "480bbL+kPZHM6xni7kPXl3N", "FloorStateNormal");
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
    var UnitStateBase_1 = require("../../../Base/State/UnitStateBase");
    var FloorStateNormal = function(_super) {
      __extends(FloorStateNormal, _super);
      function FloorStateNormal() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FloorStateNormal.create = function() {
        var instance = new FloorStateNormal();
        instance.init();
        return instance;
      };
      FloorStateNormal.prototype.init = function() {
        _super.prototype.init.call(this, UnitStateBase_1.UnitStateType.Normal);
      };
      return FloorStateNormal;
    }(UnitStateBase_1.default);
    exports.default = FloorStateNormal;
    cc._RF.pop();
  }, {
    "../../../Base/State/UnitStateBase": "UnitStateBase"
  } ],
  FrameBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "caa2ec9LLZBTry6sBN9hdgg", "FrameBase");
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
    var UnitBase_1 = require("../../Base/UnitBase");
    var UnitDefines_1 = require("../../Base/UnitDefines");
    var FrameStateNormal_1 = require("./State/FrameStateNormal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FrameBase = function(_super) {
      __extends(FrameBase, _super);
      function FrameBase() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FrameBase.prototype.initFrame = function(kind) {
        _super.prototype.initUnit.call(this, UnitDefines_1.UnitCategory.Frame, kind);
        this.setCurrentState(FrameStateNormal_1.default.create());
      };
      FrameBase = __decorate([ ccclass ], FrameBase);
      return FrameBase;
    }(UnitBase_1.default);
    exports.default = FrameBase;
    cc._RF.pop();
  }, {
    "../../Base/UnitBase": "UnitBase",
    "../../Base/UnitDefines": "UnitDefines",
    "./State/FrameStateNormal": "FrameStateNormal"
  } ],
  FrameFactory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b4ce8clPXxLz42GDitWvcVt", "FrameFactory");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UnitDefines_1 = require("../Base/UnitDefines");
    var FrameNormal_1 = require("./Normal/FrameNormal");
    var FrameFactory = function() {
      function FrameFactory() {}
      FrameFactory.createFrame = function(param) {
        var kind = param["kind"];
        switch (kind) {
         case UnitDefines_1.UnitKind.FrameNormal:
          return FrameNormal_1.default.create();
        }
        return null;
      };
      return FrameFactory;
    }();
    exports.default = FrameFactory;
    cc._RF.pop();
  }, {
    "../Base/UnitDefines": "UnitDefines",
    "./Normal/FrameNormal": "FrameNormal"
  } ],
  FrameLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "07cfdMk0PtE4aoN9OGMYUIq", "FrameLayer");
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
    var GridLayerBase_1 = require("../Base/GridLayerBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FrameLayer = function(_super) {
      __extends(FrameLayer, _super);
      function FrameLayer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FrameLayer_1 = FrameLayer;
      FrameLayer.create = function(contentSize, gridSize) {
        var node = new cc.Node();
        var layer = node.addComponent(FrameLayer_1);
        layer.initWithSize(contentSize, gridSize);
        return layer;
      };
      FrameLayer.prototype.initWithSize = function(contentSize, gridSize) {
        _super.prototype.init.call(this, GridLayerBase_1.LayerName.Frame, contentSize, gridSize);
      };
      var FrameLayer_1;
      FrameLayer = FrameLayer_1 = __decorate([ ccclass ], FrameLayer);
      return FrameLayer;
    }(GridLayerBase_1.default);
    exports.default = FrameLayer;
    cc._RF.pop();
  }, {
    "../Base/GridLayerBase": "GridLayerBase"
  } ],
  FrameNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b760xZOj1KR5ZnuWXwiP1m", "FrameNormal");
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
    var GridLayerBase_1 = require("../../../Layer/Base/GridLayerBase");
    var DropSceneAssetCache_1 = require("../../../Utils/DropSceneAssetCache");
    var UnitDefines_1 = require("../../Base/UnitDefines");
    var FrameBase_1 = require("../Base/FrameBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FrameNormal = function(_super) {
      __extends(FrameNormal, _super);
      function FrameNormal() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.doll = null;
        return _this;
      }
      FrameNormal_1 = FrameNormal;
      FrameNormal.create = function() {
        var res = DropSceneAssetCache_1.default.getPrefab("prefab/Game/Unit/Frame/Normal/FrameNormal");
        if (res) {
          var node = cc.instantiate(res);
          if (node) {
            var item = node.getComponent(FrameNormal_1);
            if (item) {
              item.init();
              return item;
            }
          }
        }
        return null;
      };
      FrameNormal.prototype.setLogicalPostion = function(pos) {
        _super.prototype.setLogicalPostion.call(this, pos);
        var code = this.getPositionCode(this.getLogicalPostion());
        var frameName = "01101";
        switch (code) {
         case 128:
          frameName = "00101";
          break;

         case 2:
          frameName = "00102";
          break;

         case 8:
          frameName = "00103";
          break;

         case 32:
          frameName = "00104";
          break;

         case 160:
          frameName = "00201";
          break;

         case 130:
          frameName = "00202";
          break;

         case 10:
          frameName = "00203";
          break;

         case 40:
          frameName = "00204";
          break;

         case 136:
          frameName = "00205";
          break;

         case 34:
          frameName = "00206";
          break;

         case 162:
          frameName = "00301";
          break;

         case 138:
          frameName = "00302";
          break;

         case 42:
          frameName = "00303";
          break;

         case 168:
          frameName = "00304";
          break;

         case 170:
          frameName = "00401";
          break;

         case 64:
         case 96:
         case 192:
         case 224:
          frameName = "00501";
          break;

         case 1:
         case 3:
         case 129:
         case 131:
          frameName = "00502";
          break;

         case 4:
         case 6:
         case 12:
         case 14:
          frameName = "00503";
          break;

         case 16:
         case 24:
         case 56:
         case 48:
          frameName = "00504";
          break;

         case 66:
         case 98:
         case 194:
         case 226:
          frameName = "00601";
          break;

         case 72:
         case 104:
         case 200:
         case 232:
          frameName = "00602";
          break;

         case 9:
         case 11:
         case 137:
         case 139:
          frameName = "00603";
          break;

         case 33:
         case 35:
         case 161:
         case 163:
          frameName = "00604";
          break;

         case 36:
         case 38:
         case 44:
         case 46:
          frameName = "00605";
          break;

         case 132:
         case 134:
         case 140:
         case 142:
          frameName = "00606";
          break;

         case 144:
         case 152:
         case 176:
         case 184:
          frameName = "00607";
          break;

         case 18:
         case 26:
         case 50:
         case 58:
          frameName = "00608";
          break;

         case 74:
         case 106:
         case 202:
         case 234:
          frameName = "00701";
          break;

         case 41:
         case 43:
         case 169:
         case 171:
          frameName = "00702";
          break;

         case 164:
         case 166:
         case 172:
         case 174:
          frameName = "00703";
          break;

         case 146:
         case 154:
         case 178:
         case 186:
          frameName = "00704";
          break;

         case 65:
         case 67:
         case 97:
         case 99:
         case 193:
         case 195:
         case 225:
         case 227:
          frameName = "00801";
          break;

         case 5:
         case 7:
         case 13:
         case 15:
         case 133:
         case 135:
         case 141:
         case 143:
          frameName = "00802";
          break;

         case 20:
         case 22:
         case 28:
         case 30:
         case 52:
         case 54:
         case 60:
         case 62:
          frameName = "00803";
          break;

         case 80:
         case 88:
         case 112:
         case 120:
         case 208:
         case 216:
         case 240:
         case 248:
          frameName = "00804";
          break;

         case 68:
         case 70:
         case 76:
         case 78:
         case 100:
         case 102:
         case 108:
         case 110:
         case 196:
         case 198:
         case 204:
         case 206:
         case 228:
         case 230:
         case 236:
         case 238:
          frameName = "00805";
          break;

         case 17:
         case 19:
         case 25:
         case 27:
         case 49:
         case 51:
         case 57:
         case 59:
         case 145:
         case 147:
         case 153:
         case 155:
         case 177:
         case 179:
         case 185:
         case 187:
          frameName = "00806";
          break;

         case 73:
         case 75:
         case 105:
         case 107:
         case 201:
         case 203:
         case 233:
         case 235:
          frameName = "00901";
          break;

         case 37:
         case 39:
         case 45:
         case 47:
         case 165:
         case 167:
         case 173:
         case 175:
          frameName = "00902";
          break;

         case 148:
         case 150:
         case 156:
         case 158:
         case 180:
         case 182:
         case 188:
         case 190:
          frameName = "00903";
          break;

         case 82:
         case 90:
         case 114:
         case 122:
         case 210:
         case 218:
         case 242:
         case 250:
          frameName = "00904";
          break;

         case 69:
         case 71:
         case 77:
         case 79:
         case 101:
         case 103:
         case 109:
         case 111:
         case 197:
         case 199:
         case 205:
         case 207:
         case 229:
         case 231:
         case 237:
         case 239:
          frameName = "01001";
          break;

         case 21:
         case 23:
         case 29:
         case 31:
         case 53:
         case 55:
         case 61:
         case 63:
         case 149:
         case 151:
         case 157:
         case 159:
         case 181:
         case 183:
         case 189:
         case 191:
          frameName = "01002";
          break;

         case 84:
         case 86:
         case 92:
         case 94:
         case 116:
         case 118:
         case 124:
         case 126:
         case 212:
         case 214:
         case 220:
         case 222:
         case 244:
         case 246:
         case 252:
         case 254:
          frameName = "01003";
          break;

         case 81:
         case 83:
         case 89:
         case 91:
         case 113:
         case 115:
         case 121:
         case 123:
         case 209:
         case 211:
         case 217:
         case 219:
         case 241:
         case 243:
         case 249:
         case 251:
          frameName = "01004";
          break;

         case 85:
         case 87:
         case 93:
         case 95:
         case 117:
         case 119:
         case 125:
         case 127:
         case 213:
         case 215:
         case 221:
         case 223:
         case 245:
         case 247:
         case 253:
         case 255:
          frameName = "01101";
        }
        var fileName = "texture/Game/Frame/Normal/" + frameName;
        this.doll.spriteFrame = DropSceneAssetCache_1.default.getSpriteFrame(fileName);
        this.doll.node.active = 0 != code;
      };
      FrameNormal.prototype.getPositionCode = function(pos) {
        var bitOffsets = [ cc.v2(1, 0), cc.v2(1, 1), cc.v2(0, 1), cc.v2(-1, 1), cc.v2(-1, 0), cc.v2(-1, -1), cc.v2(0, -1), cc.v2(1, -1) ];
        var code = 0;
        var bitValue = 1;
        for (var _i = 0, bitOffsets_1 = bitOffsets; _i < bitOffsets_1.length; _i++) {
          var offset = bitOffsets_1[_i];
          var checkPos = pos.add(offset);
          var floor = this.grid.getUnit(GridLayerBase_1.LayerName.Floor, checkPos);
          floor && (code += bitValue);
          bitValue *= 2;
        }
        return code;
      };
      FrameNormal.prototype.init = function() {
        _super.prototype.initFrame.call(this, UnitDefines_1.UnitKind.FrameNormal);
      };
      var FrameNormal_1;
      __decorate([ property(cc.Sprite) ], FrameNormal.prototype, "doll", void 0);
      FrameNormal = FrameNormal_1 = __decorate([ ccclass ], FrameNormal);
      return FrameNormal;
    }(FrameBase_1.default);
    exports.default = FrameNormal;
    cc._RF.pop();
  }, {
    "../../../Layer/Base/GridLayerBase": "GridLayerBase",
    "../../../Utils/DropSceneAssetCache": "DropSceneAssetCache",
    "../../Base/UnitDefines": "UnitDefines",
    "../Base/FrameBase": "FrameBase"
  } ],
  FrameStateNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3028ns8mBF0ppTlJ3qJGR+", "FrameStateNormal");
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
    var UnitStateBase_1 = require("../../../Base/State/UnitStateBase");
    var FrameStateNormal = function(_super) {
      __extends(FrameStateNormal, _super);
      function FrameStateNormal() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FrameStateNormal.create = function() {
        var instance = new FrameStateNormal();
        instance.init();
        return instance;
      };
      FrameStateNormal.prototype.init = function() {
        _super.prototype.init.call(this, UnitStateBase_1.UnitStateType.Normal);
      };
      return FrameStateNormal;
    }(UnitStateBase_1.default);
    exports.default = FrameStateNormal;
    cc._RF.pop();
  }, {
    "../../../Base/State/UnitStateBase": "UnitStateBase"
  } ],
  GridDropLogic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "143b4/pvLdI/aGeRqxrTPDW", "GridDropLogic");
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
    var GridLayerBase_1 = require("../../../Layer/Base/GridLayerBase");
    var GridStateBase_1 = require("../Base/GridStateBase");
    var DropSceneMath_1 = require("../../../Utils/DropSceneMath");
    var UnitDefines_1 = require("../../../Unit/Base/UnitDefines");
    var GridDropLogic = function(_super) {
      __extends(GridDropLogic, _super);
      function GridDropLogic() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._searchOffsets = [];
        _this._floorStatusDict = {};
        _this._wallsDict = {};
        return _this;
      }
      GridDropLogic.create = function() {
        var instance = new GridDropLogic();
        instance.init();
        return instance;
      };
      GridDropLogic.prototype.init = function() {
        _super.prototype.init.call(this, GridStateBase_1.GridStateType.Drop);
        this._floorStatusDict = {};
        this._wallsDict = {};
        this._searchOffsets.push(cc.v2(0, 1));
        this._searchOffsets.push(cc.v2(-1, 1));
        this._searchOffsets.push(cc.v2(1, 1));
      };
      GridDropLogic.prototype.getFloorStatus = function(onwer, logicalPosition, checkedFloor) {
        void 0 === checkedFloor && (checkedFloor = null);
        null == checkedFloor && (checkedFloor = new Set());
        var key = DropSceneMath_1.default.getKeyWithLogicalPosition(logicalPosition);
        if (checkedFloor.has(key)) return false;
        checkedFloor.add(key);
        var status = this._floorStatusDict[key];
        if (null != status) return status;
        var floor = onwer.getUnit(GridLayerBase_1.LayerName.Floor, logicalPosition);
        if (null == floor) {
          this._floorStatusDict[key] = false;
          return false;
        }
        var candy = onwer.getUnit(GridLayerBase_1.LayerName.Candy, logicalPosition);
        if (candy && !candy.canDrop()) {
          this._floorStatusDict[key] = false;
          return false;
        }
        if (floor.isSpawn()) {
          this._floorStatusDict[key] = true;
          return true;
        }
        if (floor.getUnitKind() == UnitDefines_1.UnitKind.FloorExit) {
          var exit = floor;
          var status_1 = this.getFloorStatus(onwer, exit.getEntrance(), checkedFloor);
          if (status_1) {
            this._floorStatusDict[key] = true;
            return true;
          }
        }
        var size = onwer.getMapSize();
        for (var _i = 0, _a = this._searchOffsets; _i < _a.length; _i++) {
          var offset = _a[_i];
          var checkPos = logicalPosition.add(offset);
          if (checkPos.x >= 0 && checkPos.x < size.width && checkPos.y >= 0 && checkPos.y < size.height && false == this.hasWall(logicalPosition, checkPos)) {
            var status_2 = this.getFloorStatus(onwer, checkPos, checkedFloor);
            if (status_2) {
              this._floorStatusDict[key] = true;
              return true;
            }
          }
        }
        this._floorStatusDict[key] = false;
        return false;
      };
      GridDropLogic.prototype.recordFloorStatus = function(onwer) {
        var size = onwer.getMapSize();
        for (var row = size.height - 1; row > -1; row--) for (var column = 0; column < size.width; column++) {
          var checkPos = cc.v2(column, row);
          this.getFloorStatus(onwer, checkPos);
        }
      };
      GridDropLogic.prototype.getWallKeyWithLogicalPosition = function(from, to) {
        var key = cc.js.formatStr("{%s,%s}->{%s,%s}", from.x, from.y, to.x, to.y);
        return key;
      };
      GridDropLogic.prototype.hasWall = function(from, to) {
        var key = this.getWallKeyWithLogicalPosition(from, to);
        var value = this._wallsDict[key];
        if (null != value) return true;
        return false;
      };
      GridDropLogic.prototype.recordWalls = function(onwer) {
        var size = onwer.getMapSize();
        for (var row = 0; row < size.height; row++) for (var column = 0; column < size.width; column++) {
          var checkPos = cc.v2(column, row);
          var floor = onwer.getUnit(GridLayerBase_1.LayerName.Floor, checkPos);
          if (floor.getUnitKind() == UnitDefines_1.UnitKind.FloorEntrance) {
            var downKey = this.getWallKeyWithLogicalPosition(checkPos, checkPos.add(cc.v2(0, -1)));
            this._wallsDict[downKey] = true;
            var upKey = this.getWallKeyWithLogicalPosition(checkPos.add(cc.v2(0, -1)), checkPos);
            this._wallsDict[upKey] = true;
          }
          if (floor.getUnitKind() == UnitDefines_1.UnitKind.FloorExit) {
            var downKey = this.getWallKeyWithLogicalPosition(checkPos, checkPos.add(cc.v2(0, 1)));
            this._wallsDict[downKey] = true;
            var upKey = this.getWallKeyWithLogicalPosition(checkPos.add(cc.v2(0, 1)), checkPos);
            this._wallsDict[upKey] = true;
          }
        }
      };
      GridDropLogic.prototype.isFloorAvailable = function(onwer, logicalPosition) {
        var floor = onwer.getUnit(GridLayerBase_1.LayerName.Floor, logicalPosition);
        if (null == floor) return false;
        var candy = onwer.getUnit(GridLayerBase_1.LayerName.Candy, logicalPosition);
        if (null != candy) return false;
        return true;
      };
      GridDropLogic.prototype.dropCandy = function(onwer, checkPos, checkedCandy, movedCandy) {
        var candy = onwer.getUnit(GridLayerBase_1.LayerName.Candy, checkPos);
        if (candy && !checkedCandy.has(candy)) {
          checkedCandy.add(candy);
          if (candy.canDrop()) {
            var floor = onwer.getUnit(GridLayerBase_1.LayerName.Floor, checkPos);
            if (floor.getUnitKind() == UnitDefines_1.UnitKind.FloorEntrance) {
              var entrance = floor;
              var eixtPos = entrance.getExit();
              this.dropCandy(onwer, eixtPos, checkedCandy, movedCandy);
              if (this.isFloorAvailable(onwer, eixtPos)) {
                candy.teleportToLogicalPosition(eixtPos);
                movedCandy.add(candy);
                return true;
              }
            }
            var downPos = checkPos.add(cc.v2(0, -1));
            if (false == this.hasWall(checkPos, downPos)) {
              this.dropCandy(onwer, downPos, checkedCandy, movedCandy);
              if (this.isFloorAvailable(onwer, downPos)) {
                candy.moveToLogicalPosition(downPos);
                movedCandy.add(candy);
                return true;
              }
            }
            var leftDownPos = checkPos.add(cc.v2(-1, -1));
            if (false == this.hasWall(checkPos, leftDownPos)) {
              var leftPos = checkPos.add(cc.v2(-1, 0));
              if (this.hasWall(leftPos, leftDownPos) || false == this.getFloorStatus(onwer, leftPos)) {
                this.dropCandy(onwer, leftDownPos, checkedCandy, movedCandy);
                if (this.isFloorAvailable(onwer, leftDownPos)) {
                  candy.moveToLogicalPosition(leftDownPos);
                  movedCandy.add(candy);
                  return true;
                }
              }
            }
            var rightDownPos = checkPos.add(cc.v2(1, -1));
            if (false == this.hasWall(checkPos, rightDownPos)) {
              var rightPos = checkPos.add(cc.v2(1, 0));
              if (this.hasWall(rightPos, rightDownPos) || false == this.getFloorStatus(onwer, rightPos)) {
                this.dropCandy(onwer, rightDownPos, checkedCandy, movedCandy);
                if (this.isFloorAvailable(onwer, rightDownPos)) {
                  candy.moveToLogicalPosition(rightDownPos);
                  movedCandy.add(candy);
                  return true;
                }
              }
            }
          }
        }
        return false;
      };
      GridDropLogic.prototype.tryDropAllCandy = function(onwer, checkedCandy, movedCandy) {
        void 0 === checkedCandy && (checkedCandy = null);
        void 0 === movedCandy && (movedCandy = null);
        null == checkedCandy && (checkedCandy = new Set());
        null == movedCandy && (movedCandy = new Set());
        var size = onwer.getMapSize();
        for (var row = 0; row < size.height; row++) for (var column = 0; column < size.width; column++) {
          var checkPos = cc.v2(column, row);
          this.dropCandy(onwer, checkPos, checkedCandy, movedCandy);
        }
        return movedCandy;
      };
      GridDropLogic.prototype.enter = function(onwer) {
        this.recordFloorStatus(onwer);
        this.recordWalls(onwer);
      };
      GridDropLogic.prototype.onTouchStart = function(onwer, pos) {
        var logicalPos = onwer.getLogicalPositionWithPixelPositon(pos);
        var status = this.getFloorStatus(onwer, logicalPos);
        console.log(cc.js.formatStr("GridDropLogic.onTouchStart Pos{%s,%s} is %s", logicalPos.x, logicalPos.y, status ? "Alive" : "Dead"));
      };
      return GridDropLogic;
    }(GridStateBase_1.default);
    exports.default = GridDropLogic;
    cc._RF.pop();
  }, {
    "../../../Layer/Base/GridLayerBase": "GridLayerBase",
    "../../../Unit/Base/UnitDefines": "UnitDefines",
    "../../../Utils/DropSceneMath": "DropSceneMath",
    "../Base/GridStateBase": "GridStateBase"
  } ],
  GridGenerateLogic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "aacebbTp3JAuLeRGzNYuRF0", "GridGenerateLogic");
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
    var GridLayerBase_1 = require("../../../Layer/Base/GridLayerBase");
    var CandyFactory_1 = require("../../../Unit/Candy/CandyFactory");
    var CandyStateBorn_1 = require("../../../Unit/Candy/Base/State/CandyStateBorn");
    var GridStateBase_1 = require("../Base/GridStateBase");
    var UnitDefines_1 = require("../../../Unit/Base/UnitDefines");
    var GridGenerateLogic = function(_super) {
      __extends(GridGenerateLogic, _super);
      function GridGenerateLogic() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._generatedCandy = new Set();
        return _this;
      }
      GridGenerateLogic.create = function() {
        var instance = new GridGenerateLogic();
        instance.init();
        return instance;
      };
      GridGenerateLogic.prototype.init = function() {
        _super.prototype.init.call(this, GridStateBase_1.GridStateType.Drop);
      };
      GridGenerateLogic.prototype.enter = function(onwer) {};
      GridGenerateLogic.prototype.generateNewCandy = function(onwer) {
        this._generatedCandy.clear();
        var size = onwer.getMapSize();
        for (var row = 0; row < size.height; row++) for (var column = 0; column < size.width; column++) {
          var checkPos = cc.v2(column, row);
          var floor = onwer.getUnit(GridLayerBase_1.LayerName.Floor, checkPos);
          if (floor && floor.isSpawn()) {
            var candy = onwer.getUnit(GridLayerBase_1.LayerName.Candy, checkPos);
            if (null == candy) {
              var colorCount = UnitDefines_1.UnitColor.End - UnitDefines_1.UnitColor.Begin;
              var color = Math.floor(Math.random() * colorCount) + UnitDefines_1.UnitColor.Begin;
              var param = {
                kind: UnitDefines_1.UnitKind.CandyFruit,
                color: color
              };
              candy = CandyFactory_1.default.createCandy(param);
              onwer.setUnit(GridLayerBase_1.LayerName.Candy, checkPos, candy);
              candy.setCurrentState(CandyStateBorn_1.default.create());
              this._generatedCandy.add(candy);
            }
          }
        }
        return this._generatedCandy;
      };
      return GridGenerateLogic;
    }(GridStateBase_1.default);
    exports.default = GridGenerateLogic;
    cc._RF.pop();
  }, {
    "../../../Layer/Base/GridLayerBase": "GridLayerBase",
    "../../../Unit/Base/UnitDefines": "UnitDefines",
    "../../../Unit/Candy/Base/State/CandyStateBorn": "CandyStateBorn",
    "../../../Unit/Candy/CandyFactory": "CandyFactory",
    "../Base/GridStateBase": "GridStateBase"
  } ],
  GridLayerBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "15d34h6h6BAeLXM1WiT/ssU", "GridLayerBase");
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
    exports.LayerName = void 0;
    var DropSceneAssetCache_1 = require("../../Utils/DropSceneAssetCache");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LayerName;
    (function(LayerName) {
      LayerName["None"] = "none";
      LayerName["Frame"] = "frame";
      LayerName["Floor"] = "floor";
      LayerName["Candy"] = "candy";
    })(LayerName = exports.LayerName || (exports.LayerName = {}));
    var GridLayerBase = function(_super) {
      __extends(GridLayerBase, _super);
      function GridLayerBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._grid = null;
        _this._size = cc.size(0, 0);
        _this._id = "";
        _this._unitDict = {};
        return _this;
      }
      Object.defineProperty(GridLayerBase.prototype, "grid", {
        get: function() {
          return this._grid;
        },
        set: function(grid) {
          this._grid = grid;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(GridLayerBase.prototype, "size", {
        get: function() {
          return this._size;
        },
        set: function(size) {
          this._size = size;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(GridLayerBase.prototype, "id", {
        get: function() {
          return this._id;
        },
        set: function(id) {
          this._id = id;
        },
        enumerable: false,
        configurable: true
      });
      GridLayerBase.prototype.getUnit = function(logicalPos) {
        var key = this.getKeyWithLogicalPosition(logicalPos);
        return this._unitDict[key];
      };
      GridLayerBase.prototype.setUnit = function(logicalPos, unit) {
        var key = this.getKeyWithLogicalPosition(logicalPos);
        var removedUnit = this.removeUnit(logicalPos);
        unit.layer = this;
        unit.setPixelPosition(this.grid.getPixelPositionWithLogicalPositon(logicalPos));
        unit.setLogicalPostion(logicalPos);
        this._unitDict[key] = unit;
        this.node.addChild(unit.node);
        return removedUnit;
      };
      GridLayerBase.prototype.moveUnit = function(from, to, syncPixelPos) {
        void 0 === syncPixelPos && (syncPixelPos = true);
        var fromKey = this.getKeyWithLogicalPosition(from);
        var toKey = this.getKeyWithLogicalPosition(to);
        if (this._unitDict[fromKey] && null == this._unitDict[toKey]) {
          this._unitDict[toKey] = this._unitDict[fromKey];
          this._unitDict[fromKey] = null;
          this._unitDict[toKey].setLogicalPostion(to);
          syncPixelPos && this._unitDict[toKey].setPixelPosition(this.grid.getPixelPositionWithLogicalPositon(to));
        }
      };
      GridLayerBase.prototype.removeUnit = function(logicalPos, cleanup) {
        void 0 === cleanup && (cleanup = false);
        var key = this.getKeyWithLogicalPosition(logicalPos);
        return this.removeUnitWithKey(key, cleanup);
      };
      GridLayerBase.prototype.removeUnitWithKey = function(key, cleanup) {
        void 0 === cleanup && (cleanup = false);
        var unit = this._unitDict[key];
        if (unit) {
          unit.layer = null;
          unit.node.removeFromParent(cleanup);
          delete this._unitDict[key];
        }
        return unit;
      };
      GridLayerBase.prototype.getKeyWithLogicalPosition = function(logicalPosition) {
        return DropSceneAssetCache_1.default.getKeyWithLogicalPosition(logicalPosition);
      };
      GridLayerBase.prototype.init = function(type, contentSize, gridSize) {
        this.id = type;
        this.node.setAnchorPoint(0, 0);
        this.node.setContentSize(contentSize);
        this.size = gridSize;
      };
      GridLayerBase.prototype.updateLayer = function(dt) {
        for (var row = 0; row < this.size.height; row++) for (var column = 0; column < this.size.width; column++) {
          var unit = this.getUnit(cc.v2(column, row));
          unit && unit.updateUnit(dt);
        }
      };
      GridLayerBase = __decorate([ ccclass ], GridLayerBase);
      return GridLayerBase;
    }(cc.Component);
    exports.default = GridLayerBase;
    cc._RF.pop();
  }, {
    "../../Utils/DropSceneAssetCache": "DropSceneAssetCache"
  } ],
  GridStateBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e1f4VS6k5N3bBIS8GIJ6QU", "GridStateBase");
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
    exports.GridStateType = void 0;
    var State_1 = require("../../../../../../../scripts/Frameworks/EWS/FSM/State");
    var GridStateType;
    (function(GridStateType) {
      GridStateType[GridStateType["None"] = 0] = "None";
      GridStateType[GridStateType["Create"] = 1] = "Create";
      GridStateType[GridStateType["Normal"] = 2] = "Normal";
      GridStateType[GridStateType["Drop"] = 3] = "Drop";
    })(GridStateType = exports.GridStateType || (exports.GridStateType = {}));
    var GridStateBase = function(_super) {
      __extends(GridStateBase, _super);
      function GridStateBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._type = GridStateType.None;
        return _this;
      }
      GridStateBase.prototype.getType = function() {
        return this._type;
      };
      GridStateBase.prototype.init = function(type) {
        this._type = type;
      };
      GridStateBase.prototype.enter = function(onwer) {};
      GridStateBase.prototype.update = function(onwer, dt) {
        var layerDict = onwer.getLayers();
        for (var key in layerDict) {
          var layer = layerDict[key];
          layer.updateLayer(dt);
        }
      };
      GridStateBase.prototype.exit = function(onwer) {};
      GridStateBase.prototype.onMessage = function(message) {
        return false;
      };
      GridStateBase.prototype.reset = function() {};
      GridStateBase.prototype.onTouchStart = function(onwer, pos) {};
      GridStateBase.prototype.onTouchMove = function(onwer, pos) {};
      GridStateBase.prototype.onTouchEnd = function(onwer, pos) {};
      GridStateBase.prototype.onTouchCancel = function(onwer, pos) {};
      return GridStateBase;
    }(State_1.default);
    exports.default = GridStateBase;
    cc._RF.pop();
  }, {
    "../../../../../../../scripts/Frameworks/EWS/FSM/State": void 0
  } ],
  GridStateCreate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "483a4xTVO9E2qWrvH0nkTWJ", "GridStateCreate");
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
    var Defines_1 = require("../../../../../../../scripts/Defines/Defines");
    var TiledMapJsonPhraser_1 = require("../../../../../../../scripts/Frameworks/TiledMap/TiledMapJsonPhraser");
    var GameMath_1 = require("../../../../../../../scripts/Frameworks/Utils/GameMath");
    var GridLayerBase_1 = require("../../../Layer/Base/GridLayerBase");
    var FloorLayer_1 = require("../../../Layer/FloorLayer/FloorLayer");
    var FrameLayer_1 = require("../../../Layer/FrameLayer/FrameLayer");
    var CandyLayer_1 = require("../../../Layer/CandyLayer/CandyLayer");
    var FloorFactory_1 = require("../../../Unit/Floor/FloorFactory");
    var CandyFactory_1 = require("../../../Unit/Candy/CandyFactory");
    var GridStateBase_1 = require("../Base/GridStateBase");
    var FrameFactory_1 = require("../../../Unit/Frame/FrameFactory");
    var DropSceneMath_1 = require("../../../Utils/DropSceneMath");
    var UnitDefines_1 = require("../../../Unit/Base/UnitDefines");
    var GridStateDrop_1 = require("../Drop/GridStateDrop");
    var GridStateCreate = function(_super) {
      __extends(GridStateCreate, _super);
      function GridStateCreate() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._level = 0;
        _this._viewSize = cc.size(0, 0);
        _this._cellSize = cc.size(0, 0);
        _this._mapSize = cc.size(0, 0);
        return _this;
      }
      GridStateCreate.create = function(level, viewSize, cellSize, gridSize) {
        var instance = new GridStateCreate();
        instance.initWithLevel(level, viewSize, cellSize, gridSize);
        return instance;
      };
      GridStateCreate.prototype.initWithLevel = function(level, viewSize, cellSize, gridSize) {
        _super.prototype.init.call(this, GridStateBase_1.GridStateType.Create);
        this._level = level;
        this._viewSize = viewSize;
        this._cellSize = cellSize;
        this._mapSize = gridSize;
      };
      GridStateCreate.prototype.enter = function(onwer) {
        onwer.setCellSize(this._cellSize);
        onwer.setMapSize(this._mapSize);
        onwer.setOrigin(cc.v2(.5 * this._cellSize.width, .5 * this._cellSize.height));
        var contentSize = cc.size(this._cellSize.width * this._mapSize.width, this._cellSize.height * this._mapSize.height);
        onwer.node.setContentSize(contentSize);
        var scale = GameMath_1.default.getScaleFromViewSize(this._viewSize, cc.size(contentSize.width + this._cellSize.width, contentSize.height + this._cellSize.height), .75, 1.25);
        onwer.node.scale = scale;
        onwer.addLayer(FrameLayer_1.default.create(contentSize, this._mapSize));
        onwer.addLayer(FloorLayer_1.default.create(contentSize, this._mapSize));
        onwer.addLayer(CandyLayer_1.default.create(contentSize, this._mapSize));
        var tmx = TiledMapJsonPhraser_1.default.createWithFile(Defines_1.AssetBundleID.DropScene, "config/level" + this._level.toString());
        this.createFloor(tmx, onwer);
        this.createCandy(tmx, onwer);
        this.createFrame(tmx, onwer);
        onwer.setCurrentState(GridStateDrop_1.default.create());
      };
      GridStateCreate.prototype.createFloor = function(tmx, onwer) {
        var teleporterGruop = {};
        var mapSize = tmx.getMapSize();
        for (var column = 0; column < mapSize.width; column++) for (var row = 0; row < mapSize.height; row++) {
          var checkPos = cc.v2(column, mapSize.height - 1 - row);
          var markParams = {};
          var markProperties = tmx.getObjectInfos("Mark", checkPos);
          if (markProperties) {
            for (var _i = 0, markProperties_1 = markProperties; _i < markProperties_1.length; _i++) {
              var properties = markProperties_1[_i];
              var tilesetProperty = tmx.getTilesetPropertyWithGID(properties.gid);
              for (var key in tilesetProperty.propertyDict) markParams[key] = tilesetProperty.propertyDict[key].value;
              for (var key in properties.propertyDict) markParams[key] = properties.propertyDict[key].value;
            }
            var kind = markParams["kind"];
            if (kind == UnitDefines_1.UnitKind.MarkEntrance || kind == UnitDefines_1.UnitKind.MarkExit) {
              var group = markParams["group"];
              null == teleporterGruop[group] && (teleporterGruop[group] = {
                entrance: cc.v2(-1, -1),
                exit: cc.v2(-1, -1)
              });
              kind == UnitDefines_1.UnitKind.MarkEntrance && (teleporterGruop[group].entrance = cc.v2(column, row));
              kind == UnitDefines_1.UnitKind.MarkExit && (teleporterGruop[group].exit = cc.v2(column, row));
            }
          }
        }
        var teleporters = {};
        for (var key in teleporterGruop) {
          var value = teleporterGruop[key];
          var entrance = {
            kind: UnitDefines_1.UnitKind.FloorEntrance,
            relatedPosition: value.exit
          };
          var entranceKey = DropSceneMath_1.default.getKeyWithLogicalPosition(value.entrance);
          teleporters[entranceKey] = entrance;
          var exit = {
            kind: UnitDefines_1.UnitKind.FloorExit,
            relatedPosition: value.entrance
          };
          var exitKey = DropSceneMath_1.default.getKeyWithLogicalPosition(value.exit);
          teleporters[exitKey] = exit;
        }
        for (var column = 0; column < mapSize.width; column++) {
          var topFloor = null;
          for (var row = 0; row < mapSize.height; row++) {
            var checkPos = cc.v2(column, mapSize.height - 1 - row);
            var params = {};
            var floorProperties = tmx.getTilesetProperty("Floor", checkPos);
            if (floorProperties) for (var key_1 in floorProperties.propertyDict) params[key_1] = floorProperties.propertyDict[key_1].value;
            var key = DropSceneMath_1.default.getKeyWithLogicalPosition(cc.v2(column, row));
            var teleporterProperties = teleporters[key];
            if (teleporterProperties) for (var key_2 in teleporterProperties) params[key_2] = teleporterProperties[key_2];
            var floor = FloorFactory_1.default.createFloor(params);
            if (floor) {
              onwer.setUnit(GridLayerBase_1.LayerName.Floor, cc.v2(column, row), floor);
              topFloor = floor;
            }
          }
          topFloor && topFloor.setIsSpawn(true);
        }
      };
      GridStateCreate.prototype.createCandy = function(tmx, onwer) {
        var mapSize = tmx.getMapSize();
        for (var row = 0; row < mapSize.height; row++) for (var column = 0; column < mapSize.width; column++) {
          var params = {};
          var checkPos = cc.v2(column, mapSize.height - 1 - row);
          var properties = tmx.getTilesetProperty("Candy", checkPos);
          if (properties) for (var key in properties.propertyDict) params[key] = properties.propertyDict[key].value;
          var candy = CandyFactory_1.default.createCandy(params);
          candy && onwer.setUnit(GridLayerBase_1.LayerName.Candy, cc.v2(column, row), candy);
        }
      };
      GridStateCreate.prototype.createFrame = function(tmx, onwer) {
        var mapSize = tmx.getMapSize();
        for (var row = -1; row <= mapSize.height; row++) for (var column = -1; column <= mapSize.width; column++) {
          var floor = onwer.getUnit(GridLayerBase_1.LayerName.Floor, cc.v2(column, row));
          if (null == floor) {
            var params = {
              kind: UnitDefines_1.UnitKind.FrameNormal
            };
            var frame = FrameFactory_1.default.createFrame(params);
            onwer.setUnit(GridLayerBase_1.LayerName.Frame, cc.v2(column, row), frame);
          }
        }
      };
      return GridStateCreate;
    }(GridStateBase_1.default);
    exports.default = GridStateCreate;
    cc._RF.pop();
  }, {
    "../../../../../../../scripts/Defines/Defines": void 0,
    "../../../../../../../scripts/Frameworks/TiledMap/TiledMapJsonPhraser": void 0,
    "../../../../../../../scripts/Frameworks/Utils/GameMath": void 0,
    "../../../Layer/Base/GridLayerBase": "GridLayerBase",
    "../../../Layer/CandyLayer/CandyLayer": "CandyLayer",
    "../../../Layer/FloorLayer/FloorLayer": "FloorLayer",
    "../../../Layer/FrameLayer/FrameLayer": "FrameLayer",
    "../../../Unit/Base/UnitDefines": "UnitDefines",
    "../../../Unit/Candy/CandyFactory": "CandyFactory",
    "../../../Unit/Floor/FloorFactory": "FloorFactory",
    "../../../Unit/Frame/FrameFactory": "FrameFactory",
    "../../../Utils/DropSceneMath": "DropSceneMath",
    "../Base/GridStateBase": "GridStateBase",
    "../Drop/GridStateDrop": "GridStateDrop"
  } ],
  GridStateDrop: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a34e1QbYLNCzbHOTCw4yoPr", "GridStateDrop");
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
    var GridLayerBase_1 = require("../../../Layer/Base/GridLayerBase");
    var UnitStateBase_1 = require("../../../Unit/Base/State/UnitStateBase");
    var GridStateBase_1 = require("../Base/GridStateBase");
    var GridStateNormal_1 = require("../Normal/GridStateNormal");
    var GridDropLogic_1 = require("./GridDropLogic");
    var GridGenerateLogic_1 = require("./GridGenerateLogic");
    var GridStateDrop = function(_super) {
      __extends(GridStateDrop, _super);
      function GridStateDrop() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._dropLogical = null;
        _this._generateLogic = null;
        _this._steps = 0;
        return _this;
      }
      GridStateDrop.create = function() {
        var instance = new GridStateDrop();
        instance.init();
        return instance;
      };
      GridStateDrop.prototype.init = function() {
        _super.prototype.init.call(this, GridStateBase_1.GridStateType.Drop);
        this._dropLogical = GridDropLogic_1.default.create();
        this._generateLogic = GridGenerateLogic_1.default.create();
      };
      GridStateDrop.prototype.enter = function(onwer) {
        this._dropLogical.enter(onwer);
        this._generateLogic.enter(onwer);
      };
      GridStateDrop.prototype.update = function(onwer, dt) {
        _super.prototype.update.call(this, onwer, dt);
        var mapSize = onwer.getMapSize();
        for (var row = 0; row < mapSize.height; row++) for (var column = 0; column < mapSize.width; column++) {
          var unit = onwer.getUnit(GridLayerBase_1.LayerName.Candy, cc.v2(column, row));
          if (unit && unit.getCurrentState().getType() != UnitStateBase_1.UnitStateType.Normal) return;
        }
        var dropedCandy = this._dropLogical.tryDropAllCandy(onwer);
        var generatedCandy = this._generateLogic.generateNewCandy(onwer);
        this._steps++;
        0 == dropedCandy.size && 0 == generatedCandy.size && onwer.setCurrentState(GridStateNormal_1.default.create());
      };
      GridStateDrop.prototype.onTouchStart = function(onwer, pos) {
        this._dropLogical.onTouchStart(onwer, pos);
      };
      return GridStateDrop;
    }(GridStateBase_1.default);
    exports.default = GridStateDrop;
    cc._RF.pop();
  }, {
    "../../../Layer/Base/GridLayerBase": "GridLayerBase",
    "../../../Unit/Base/State/UnitStateBase": "UnitStateBase",
    "../Base/GridStateBase": "GridStateBase",
    "../Normal/GridStateNormal": "GridStateNormal",
    "./GridDropLogic": "GridDropLogic",
    "./GridGenerateLogic": "GridGenerateLogic"
  } ],
  GridStateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0154eudP9HQZSLkav/Z4Yx", "GridStateMachine");
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
    var SimpleStateMachine_1 = require("../../../../../../../scripts/Frameworks/EWS/FSM/SimpleStateMachine");
    var GridStateMachine = function(_super) {
      __extends(GridStateMachine, _super);
      function GridStateMachine() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GridStateMachine.create = function(onwer) {
        var instance = new GridStateMachine(onwer);
        return instance;
      };
      GridStateMachine.prototype.getCurrentState = function() {
        return _super.prototype.getCurrentState.call(this);
      };
      GridStateMachine.prototype.onTouchStart = function(pos) {
        var currentState = this.getCurrentState();
        currentState && currentState.onTouchStart(this.getOnwer(), pos);
      };
      GridStateMachine.prototype.onTouchMove = function(pos) {
        var currentState = this.getCurrentState();
        currentState && currentState.onTouchMove(this.getOnwer(), pos);
      };
      GridStateMachine.prototype.onTouchEnd = function(pos) {
        var currentState = this.getCurrentState();
        currentState && currentState.onTouchEnd(this.getOnwer(), pos);
      };
      GridStateMachine.prototype.onTouchCancel = function(pos) {
        var currentState = this.getCurrentState();
        currentState && currentState.onTouchCancel(this.getOnwer(), pos);
      };
      return GridStateMachine;
    }(SimpleStateMachine_1.default);
    exports.default = GridStateMachine;
    cc._RF.pop();
  }, {
    "../../../../../../../scripts/Frameworks/EWS/FSM/SimpleStateMachine": void 0
  } ],
  GridStateNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bfeb8DN8CxNxpYV5gNQTyS2", "GridStateNormal");
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
    var GridLayerBase_1 = require("../../../Layer/Base/GridLayerBase");
    var GridStateBase_1 = require("../Base/GridStateBase");
    var GridStateNormal = function(_super) {
      __extends(GridStateNormal, _super);
      function GridStateNormal() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._lastTouchPosition = cc.v2(-1, -1);
        return _this;
      }
      GridStateNormal.create = function() {
        var instance = new GridStateNormal();
        instance.init();
        return instance;
      };
      GridStateNormal.prototype.init = function() {
        _super.prototype.init.call(this, GridStateBase_1.GridStateType.Normal);
      };
      GridStateNormal.prototype.onTouchStart = function(onwer, pos) {
        var logicalPos = onwer.getLogicalPositionWithPixelPositon(pos);
        var candy = onwer.getUnit(GridLayerBase_1.LayerName.Candy, logicalPos);
        candy && candy.setSelected(!candy.getSelected());
        this._lastTouchPosition = logicalPos;
      };
      GridStateNormal.prototype.onTouchMove = function(onwer, pos) {
        var logicalPos = onwer.getLogicalPositionWithPixelPositon(pos);
        if (!logicalPos.equals(this._lastTouchPosition)) {
          var candy = onwer.getUnit(GridLayerBase_1.LayerName.Candy, logicalPos);
          candy && candy.setSelected(!candy.getSelected());
          this._lastTouchPosition = logicalPos;
        }
      };
      GridStateNormal.prototype.onTouchEnd = function(onwer, pos) {
        this._lastTouchPosition = cc.v2(-1, -1);
      };
      GridStateNormal.prototype.onTouchCancel = function(onwer, pos) {
        this._lastTouchPosition = cc.v2(-1, -1);
      };
      return GridStateNormal;
    }(GridStateBase_1.default);
    exports.default = GridStateNormal;
    cc._RF.pop();
  }, {
    "../../../Layer/Base/GridLayerBase": "GridLayerBase",
    "../Base/GridStateBase": "GridStateBase"
  } ],
  GridStateNull: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99f38R1cVNPb4sz+mEwBXNN", "GridStateNull");
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
    var GridStateBase_1 = require("./GridStateBase");
    var GridStateNull = function(_super) {
      __extends(GridStateNull, _super);
      function GridStateNull() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GridStateNull.create = function() {
        var instance = new GridStateNull();
        instance.init();
        return instance;
      };
      GridStateNull.prototype.init = function() {
        _super.prototype.init.call(this, GridStateBase_1.GridStateType.None);
      };
      return GridStateNull;
    }(GridStateBase_1.default);
    exports.default = GridStateNull;
    cc._RF.pop();
  }, {
    "./GridStateBase": "GridStateBase"
  } ],
  Grid: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb2e3PFWblKoI2No//GkVmQ", "Grid");
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
    var GridLayerBase_1 = require("../Layer/Base/GridLayerBase");
    var DropSceneAssetCache_1 = require("../Utils/DropSceneAssetCache");
    var GridStateMachine_1 = require("./State/Base/GridStateMachine");
    var GridStateCreate_1 = require("./State/Create/GridStateCreate");
    var GridStateDrop_1 = require("./State/Drop/GridStateDrop");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Grid = function(_super) {
      __extends(Grid, _super);
      function Grid() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.layerRoot = null;
        _this._origin = cc.v2(0, 0);
        _this._cellSize = cc.size(75, 75);
        _this._mapSize = cc.size(9, 12);
        _this._stateMachine = null;
        _this._layers = {};
        return _this;
      }
      Grid_1 = Grid;
      Grid.create = function(level, viewSize, cellSize, gridSize) {
        var res = DropSceneAssetCache_1.default.getPrefab("prefab/Game/Grid/Grid");
        if (res) {
          var node = cc.instantiate(res);
          if (node) {
            var grid = node.getComponent(Grid_1);
            if (grid) {
              grid.init(level, viewSize, cellSize, gridSize);
              return grid;
            }
          }
        }
        return null;
      };
      Grid.prototype.getOrigin = function() {
        return this._origin;
      };
      Grid.prototype.setOrigin = function(pos) {
        this._origin = pos;
      };
      Grid.prototype.getCellSize = function() {
        return this._cellSize;
      };
      Grid.prototype.setCellSize = function(size) {
        this._cellSize = size;
      };
      Grid.prototype.getMapSize = function() {
        return this._mapSize;
      };
      Grid.prototype.setMapSize = function(size) {
        this._mapSize = size;
      };
      Grid.prototype.getStateMachine = function() {
        return this._stateMachine;
      };
      Grid.prototype.getCurrentState = function() {
        return this._stateMachine.getCurrentState();
      };
      Grid.prototype.setCurrentState = function(state) {
        this._stateMachine.setCurrentState(state);
      };
      Grid.prototype.getLayers = function() {
        return this._layers;
      };
      Grid.prototype.getPixelPositionWithLogicalPositon = function(logicalPosition) {
        return cc.v2(this._cellSize.width * logicalPosition.x, this._cellSize.height * logicalPosition.y).add(this._origin);
      };
      Grid.prototype.getLogicalPositionWithPixelPositon = function(pixelPosition) {
        var column = Math.floor(pixelPosition.x / this._cellSize.width);
        var row = Math.floor(pixelPosition.y / this._cellSize.height);
        return cc.v2(column, row);
      };
      Grid.prototype.getLayer = function(id) {
        return this._layers[id];
      };
      Grid.prototype.addLayer = function(layer) {
        layer.grid = this;
        this._layers[layer.id] = layer;
        this.layerRoot.addChild(layer.node);
      };
      Grid.prototype.removeLayer = function(id) {
        var layer = this._layers[id];
        if (layer) {
          layer.node.parent = null;
          layer.grid = null;
        }
        return layer;
      };
      Grid.prototype.getUnit = function(id, logicalPosition) {
        var layer = this.getLayer(id);
        if (layer) return layer.getUnit(logicalPosition);
        return null;
      };
      Grid.prototype.setUnit = function(id, logicalPosition, unit) {
        var layer = this.getLayer(id);
        layer && layer.setUnit(logicalPosition, unit);
      };
      Grid.prototype.removeUnit = function(id, logicalPosition) {
        var layer = this.getLayer(id);
        if (layer) return layer.removeUnit(logicalPosition);
        return null;
      };
      Grid.prototype.onTouchStart = function(event) {
        var pos = this.layerRoot.convertToNodeSpaceAR(event.getLocation());
        this._stateMachine.onTouchStart(pos);
      };
      Grid.prototype.onTouchMove = function(event) {
        var pos = this.layerRoot.convertToNodeSpaceAR(event.getLocation());
        this._stateMachine.onTouchMove(pos);
      };
      Grid.prototype.onTouchEnd = function(event) {
        var pos = this.layerRoot.convertToNodeSpaceAR(event.getLocation());
        this._stateMachine.onTouchEnd(pos);
      };
      Grid.prototype.onTouchCancel = function(event) {
        var pos = this.layerRoot.convertToNodeSpaceAR(event.getLocation());
        this._stateMachine.onTouchCancel(pos);
      };
      Grid.prototype.init = function(level, viewSize, cellSize, gridSize) {
        this._stateMachine = GridStateMachine_1.default.create(this);
        this.setCurrentState(GridStateCreate_1.default.create(level, viewSize, cellSize, gridSize));
      };
      Grid.prototype.updateGrid = function(dt) {
        this._stateMachine.update(dt);
      };
      Grid.prototype.clearSelectedCandy = function() {
        var mapSize = this.getMapSize();
        for (var row = 0; row < mapSize.height; row++) for (var column = 0; column < mapSize.width; column++) {
          var candy = this.getUnit(GridLayerBase_1.LayerName.Candy, cc.v2(column, row));
          candy && candy.getSelected() && this.removeUnit(GridLayerBase_1.LayerName.Candy, cc.v2(column, row));
        }
        this.setCurrentState(GridStateDrop_1.default.create());
      };
      var Grid_1;
      __decorate([ property(cc.Node) ], Grid.prototype, "layerRoot", void 0);
      Grid = Grid_1 = __decorate([ ccclass ], Grid);
      return Grid;
    }(cc.Component);
    exports.default = Grid;
    cc._RF.pop();
  }, {
    "../Layer/Base/GridLayerBase": "GridLayerBase",
    "../Utils/DropSceneAssetCache": "DropSceneAssetCache",
    "./State/Base/GridStateMachine": "GridStateMachine",
    "./State/Create/GridStateCreate": "GridStateCreate",
    "./State/Drop/GridStateDrop": "GridStateDrop"
  } ],
  MarkBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "61df2zFAh9H4I23RMxCJHXu", "MarkBase");
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
    var UnitBase_1 = require("../../Base/UnitBase");
    var UnitDefines_1 = require("../../Base/UnitDefines");
    var MarkStateNormal_1 = require("./State/MarkStateNormal");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MarkBase = function(_super) {
      __extends(MarkBase, _super);
      function MarkBase() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MarkBase.prototype.initMark = function(kind) {
        _super.prototype.initUnit.call(this, UnitDefines_1.UnitCategory.Mark, kind);
        this.setCurrentState(MarkStateNormal_1.default.create());
      };
      MarkBase = __decorate([ ccclass ], MarkBase);
      return MarkBase;
    }(UnitBase_1.default);
    exports.default = MarkBase;
    cc._RF.pop();
  }, {
    "../../Base/UnitBase": "UnitBase",
    "../../Base/UnitDefines": "UnitDefines",
    "./State/MarkStateNormal": "MarkStateNormal"
  } ],
  MarkFactory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "886c7LFkgROmrLniNWr4Fdl", "MarkFactory");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UnitDefines_1 = require("../Base/UnitDefines");
    var MarkFactory = function() {
      function MarkFactory() {}
      MarkFactory.createMark = function(param) {
        var kind = param["kind"];
        switch (kind) {
         case UnitDefines_1.UnitKind.MarkEntrance:
         case UnitDefines_1.UnitKind.MarkExit:
        }
        return null;
      };
      return MarkFactory;
    }();
    exports.default = MarkFactory;
    cc._RF.pop();
  }, {
    "../Base/UnitDefines": "UnitDefines"
  } ],
  MarkStateNormal: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b6c39e3/5Pc4YTOEBUrLAg", "MarkStateNormal");
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
    var UnitStateBase_1 = require("../../../Base/State/UnitStateBase");
    var MarkStateNormal = function(_super) {
      __extends(MarkStateNormal, _super);
      function MarkStateNormal() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      MarkStateNormal.create = function() {
        var instance = new MarkStateNormal();
        instance.init();
        return instance;
      };
      MarkStateNormal.prototype.init = function() {
        _super.prototype.init.call(this, UnitStateBase_1.UnitStateType.Normal);
      };
      return MarkStateNormal;
    }(UnitStateBase_1.default);
    exports.default = MarkStateNormal;
    cc._RF.pop();
  }, {
    "../../../Base/State/UnitStateBase": "UnitStateBase"
  } ],
  UnitBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ba4esNfHlCOq6cxfHMl7fl", "UnitBase");
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
    var UnitStateMachine_1 = require("./State/UnitStateMachine");
    var UnitStateNull_1 = require("./State/UnitStateNull");
    var UnitDefines_1 = require("./UnitDefines");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UnitBase = function(_super) {
      __extends(UnitBase, _super);
      function UnitBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._unitCategory = UnitDefines_1.UnitCategory.None;
        _this._unitKind = UnitDefines_1.UnitKind.None;
        _this._healthPoint = 1;
        _this._unitColor = UnitDefines_1.UnitColor.None;
        _this._layer = null;
        _this._logicalPostion = cc.v2(0, 0);
        _this._stateMachine = null;
        return _this;
      }
      UnitBase.prototype.getUnitCategory = function() {
        return this._unitCategory;
      };
      UnitBase.prototype.setUnitCategory = function(category) {
        this._unitCategory = category;
      };
      UnitBase.prototype.getUnitKind = function() {
        return this._unitKind;
      };
      UnitBase.prototype.setUnitKind = function(kind) {
        this._unitKind = kind;
      };
      UnitBase.prototype.getHP = function() {
        return this._healthPoint;
      };
      UnitBase.prototype.setHp = function(hp) {
        this._healthPoint = hp;
      };
      UnitBase.prototype.getColor = function() {
        return this._unitColor;
      };
      UnitBase.prototype.setColor = function(color) {
        this._unitColor = color;
      };
      Object.defineProperty(UnitBase.prototype, "layer", {
        get: function() {
          return this._layer;
        },
        set: function(layer) {
          this._layer = layer;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UnitBase.prototype, "grid", {
        get: function() {
          return this._layer.grid;
        },
        enumerable: false,
        configurable: true
      });
      UnitBase.prototype.getLogicalPostion = function() {
        return this._logicalPostion;
      };
      UnitBase.prototype.setLogicalPostion = function(pos) {
        this._logicalPostion = pos;
      };
      UnitBase.prototype.getPixelPosition = function() {
        return this.node.getPosition();
      };
      UnitBase.prototype.setPixelPosition = function(pos) {
        this.node.setPosition(pos);
      };
      UnitBase.prototype.getStateMachine = function() {
        return this._stateMachine;
      };
      UnitBase.prototype.getCurrentState = function() {
        return this._stateMachine.getCurrentState();
      };
      UnitBase.prototype.setCurrentState = function(state) {
        this._stateMachine.setCurrentState(state);
      };
      UnitBase.prototype.initUnit = function(category, kind) {
        this.setUnitCategory(category);
        this.setUnitKind(kind);
        this._stateMachine = UnitStateMachine_1.default.create(this);
        this.setCurrentState(UnitStateNull_1.default.create());
      };
      UnitBase.prototype.updateUnit = function(dt) {
        this._stateMachine.update(dt);
      };
      UnitBase = __decorate([ ccclass ], UnitBase);
      return UnitBase;
    }(cc.Component);
    exports.default = UnitBase;
    cc._RF.pop();
  }, {
    "./State/UnitStateMachine": "UnitStateMachine",
    "./State/UnitStateNull": "UnitStateNull",
    "./UnitDefines": "UnitDefines"
  } ],
  UnitDefines: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bccff6pj4VO5JV5qrwQC5K5", "UnitDefines");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UnitKind = exports.UnitColor = exports.UnitCategory = void 0;
    var UnitCategory;
    (function(UnitCategory) {
      UnitCategory[UnitCategory["None"] = 0] = "None";
      UnitCategory[UnitCategory["Frame"] = 1e4] = "Frame";
      UnitCategory[UnitCategory["Floor"] = 2e4] = "Floor";
      UnitCategory[UnitCategory["Candy"] = 6e4] = "Candy";
      UnitCategory[UnitCategory["Mark"] = 9e4] = "Mark";
    })(UnitCategory = exports.UnitCategory || (exports.UnitCategory = {}));
    var UnitColor;
    (function(UnitColor) {
      UnitColor[UnitColor["None"] = 0] = "None";
      UnitColor[UnitColor["Begin"] = 1] = "Begin";
      UnitColor[UnitColor["Red"] = 1] = "Red";
      UnitColor[UnitColor["Green"] = 2] = "Green";
      UnitColor[UnitColor["Blue"] = 3] = "Blue";
      UnitColor[UnitColor["Yellow"] = 4] = "Yellow";
      UnitColor[UnitColor["Orange"] = 5] = "Orange";
      UnitColor[UnitColor["Purple"] = 6] = "Purple";
      UnitColor[UnitColor["End"] = 7] = "End";
    })(UnitColor = exports.UnitColor || (exports.UnitColor = {}));
    var UnitKind;
    (function(UnitKind) {
      UnitKind[UnitKind["None"] = 0] = "None";
      UnitKind[UnitKind["FrameNormal"] = 10001] = "FrameNormal";
      UnitKind[UnitKind["FloorFixed"] = 20001] = "FloorFixed";
      UnitKind[UnitKind["FloorEntrance"] = 20002] = "FloorEntrance";
      UnitKind[UnitKind["FloorExit"] = 20003] = "FloorExit";
      UnitKind[UnitKind["CandyFruit"] = 60001] = "CandyFruit";
      UnitKind[UnitKind["CandyCake"] = 60002] = "CandyCake";
      UnitKind[UnitKind["MarkEntrance"] = 90001] = "MarkEntrance";
      UnitKind[UnitKind["MarkExit"] = 90002] = "MarkExit";
    })(UnitKind = exports.UnitKind || (exports.UnitKind = {}));
    cc._RF.pop();
  }, {} ],
  UnitStateBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "353a97rwdVBAoau828cyQHZ", "UnitStateBase");
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
    exports.UnitStateType = void 0;
    var State_1 = require("../../../../../../../scripts/Frameworks/EWS/FSM/State");
    var UnitStateType;
    (function(UnitStateType) {
      UnitStateType[UnitStateType["None"] = 0] = "None";
      UnitStateType[UnitStateType["Normal"] = 1] = "Normal";
      UnitStateType[UnitStateType["Drop"] = 2] = "Drop";
      UnitStateType[UnitStateType["Born"] = 3] = "Born";
    })(UnitStateType = exports.UnitStateType || (exports.UnitStateType = {}));
    var UnitStateBase = function(_super) {
      __extends(UnitStateBase, _super);
      function UnitStateBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._type = UnitStateType.None;
        return _this;
      }
      UnitStateBase.prototype.getType = function() {
        return this._type;
      };
      UnitStateBase.prototype.init = function(type) {
        this._type = type;
      };
      UnitStateBase.prototype.enter = function(onwer) {};
      UnitStateBase.prototype.update = function(onwer, deltaTime) {};
      UnitStateBase.prototype.exit = function(onwer) {};
      UnitStateBase.prototype.onMessage = function(message) {
        return false;
      };
      UnitStateBase.prototype.reset = function() {};
      return UnitStateBase;
    }(State_1.default);
    exports.default = UnitStateBase;
    cc._RF.pop();
  }, {
    "../../../../../../../scripts/Frameworks/EWS/FSM/State": void 0
  } ],
  UnitStateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5f543a9RFVKp5nDcE9IKlbS", "UnitStateMachine");
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
    var SimpleStateMachine_1 = require("../../../../../../../scripts/Frameworks/EWS/FSM/SimpleStateMachine");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UnitStateMachine = function(_super) {
      __extends(UnitStateMachine, _super);
      function UnitStateMachine() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      UnitStateMachine_1 = UnitStateMachine;
      UnitStateMachine.create = function(onwer) {
        var instance = new UnitStateMachine_1(onwer);
        return instance;
      };
      UnitStateMachine.prototype.getCurrentState = function() {
        return _super.prototype.getCurrentState.call(this);
      };
      UnitStateMachine.prototype.setCurrentState = function(newState) {
        _super.prototype.setCurrentState.call(this, newState);
      };
      var UnitStateMachine_1;
      UnitStateMachine = UnitStateMachine_1 = __decorate([ ccclass ], UnitStateMachine);
      return UnitStateMachine;
    }(SimpleStateMachine_1.default);
    exports.default = UnitStateMachine;
    cc._RF.pop();
  }, {
    "../../../../../../../scripts/Frameworks/EWS/FSM/SimpleStateMachine": void 0
  } ],
  UnitStateNull: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f364SEmmNF3LxW89hUfiTN", "UnitStateNull");
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
    var UnitStateBase_1 = require("./UnitStateBase");
    var UnitStateNull = function(_super) {
      __extends(UnitStateNull, _super);
      function UnitStateNull() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      UnitStateNull.create = function() {
        var instance = new UnitStateNull();
        instance.init();
        return instance;
      };
      UnitStateNull.prototype.init = function() {
        _super.prototype.init.call(this, UnitStateBase_1.UnitStateType.None);
      };
      return UnitStateNull;
    }(UnitStateBase_1.default);
    exports.default = UnitStateNull;
    cc._RF.pop();
  }, {
    "./UnitStateBase": "UnitStateBase"
  } ]
}, {}, [ "DropScene", "Grid", "GridStateBase", "GridStateMachine", "GridStateNull", "GridStateCreate", "GridDropLogic", "GridGenerateLogic", "GridStateDrop", "GridStateNormal", "GridLayerBase", "CandyLayer", "FloorLayer", "FrameLayer", "UnitStateBase", "UnitStateMachine", "UnitStateNull", "UnitBase", "UnitDefines", "CandyBase", "CandyStateBorn", "CandyStateDrop", "CandyStateNormal", "CandyStateTeleport", "CandyCake", "CandyFactory", "CandyFruit", "FloorBase", "FloorStateNormal", "FloorEntrance", "FloorExit", "FloorFixed", "FloorFactory", "FrameBase", "FrameStateNormal", "FrameFactory", "FrameNormal", "MarkBase", "MarkStateNormal", "MarkFactory", "DropSceneAssetCache", "DropSceneMath" ]);
//# sourceMappingURL=index.js.map
