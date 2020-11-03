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
  GameDefines: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22703ZCA89Gv6LhWkimYUQv", "GameDefines");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameDefines = function() {
      function GameDefines() {}
      GameDefines.getInstance = function() {
        null == this._instance && (this._instance = new GameDefines());
        return this._instance;
      };
      GameDefines._instance = null;
      return GameDefines;
    }();
    exports.default = GameDefines;
    cc._RF.pop();
  }, {} ],
  GameLayerStateBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "45f99EZ8V9IoY5zv4m15Gwj", "GameLayerStateBase");
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
    exports.GameLayerStateType = void 0;
    var State_1 = require("../../../../../scripts/Frameworks/EWS/FSM/State");
    var GameLayerStateType;
    (function(GameLayerStateType) {
      GameLayerStateType[GameLayerStateType["None"] = 0] = "None";
      GameLayerStateType[GameLayerStateType["Create"] = 1] = "Create";
      GameLayerStateType[GameLayerStateType["Inlay"] = 2] = "Inlay";
      GameLayerStateType[GameLayerStateType["Match"] = 3] = "Match";
      GameLayerStateType[GameLayerStateType["Meger"] = 4] = "Meger";
      GameLayerStateType[GameLayerStateType["GameOver"] = 5] = "GameOver";
    })(GameLayerStateType = exports.GameLayerStateType || (exports.GameLayerStateType = {}));
    var GameLayerStateBase = function(_super) {
      __extends(GameLayerStateBase, _super);
      function GameLayerStateBase(type) {
        var _this = _super.call(this) || this;
        _this._type = GameLayerStateType.None;
        _this._type = type;
        _this.reset();
        return _this;
      }
      GameLayerStateBase.prototype.getType = function() {
        return this._type;
      };
      GameLayerStateBase.prototype.reset = function() {};
      GameLayerStateBase.prototype.enter = function(onwer) {};
      GameLayerStateBase.prototype.update = function(onwer, deltaTime) {};
      GameLayerStateBase.prototype.exit = function(onwer) {};
      GameLayerStateBase.prototype.onMessage = function(message) {
        return false;
      };
      GameLayerStateBase.prototype.onTouchStart = function(onwer, event) {};
      GameLayerStateBase.prototype.onTouchMove = function(onwer, event) {};
      GameLayerStateBase.prototype.onTouchEnd = function(onwer, event) {};
      GameLayerStateBase.prototype.onTouchCancel = function(onwer, event) {};
      return GameLayerStateBase;
    }(State_1.default);
    exports.default = GameLayerStateBase;
    cc._RF.pop();
  }, {
    "../../../../../scripts/Frameworks/EWS/FSM/State": void 0
  } ],
  GameLayerStateCreate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b0cd6ldHqJDdIV/X7YG+Mcf", "GameLayerStateCreate");
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
    var GameLayerStateBase_1 = require("./GameLayerStateBase");
    var GameLayerStatePool_1 = require("./GameLayerStatePool");
    var TileMap_1 = require("../TileMap/TileMap");
    var TilePiece_1 = require("../TilePiece/TilePiece");
    var GameLayerStateInlay_1 = require("./GameLayerStateInlay");
    var GameLayerStateCreate = function(_super) {
      __extends(GameLayerStateCreate, _super);
      function GameLayerStateCreate() {
        return _super.call(this, GameLayerStateBase_1.GameLayerStateType.Create) || this;
      }
      GameLayerStateCreate.create = function() {
        var instance = GameLayerStatePool_1.default.getInstance().getState(GameLayerStateBase_1.GameLayerStateType.Create);
        instance || (instance = new GameLayerStateCreate());
        instance.init();
        return instance;
      };
      GameLayerStateCreate.prototype.init = function() {};
      GameLayerStateCreate.prototype.enter = function(onwer) {
        this.createTileMap(onwer);
        this.createTilePiece(onwer);
        onwer.setCurrentState(GameLayerStateInlay_1.default.create());
      };
      GameLayerStateCreate.prototype.createTileMap = function(onwer) {
        var tileMap = TileMap_1.default.create(onwer);
        onwer.setTileMap(tileMap);
        tileMap.init(onwer);
      };
      GameLayerStateCreate.prototype.createTilePiece = function(onwer) {
        var tilePiece = TilePiece_1.default.create(onwer, new TilePiece_1.TilePieceInfo([ 1 ], 0));
        onwer.setTilePiece(tilePiece);
      };
      return GameLayerStateCreate;
    }(GameLayerStateBase_1.default);
    exports.default = GameLayerStateCreate;
    cc._RF.pop();
  }, {
    "../TileMap/TileMap": "TileMap",
    "../TilePiece/TilePiece": "TilePiece",
    "./GameLayerStateBase": "GameLayerStateBase",
    "./GameLayerStateInlay": "GameLayerStateInlay",
    "./GameLayerStatePool": "GameLayerStatePool"
  } ],
  GameLayerStateGameOver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2204b7SjutCQYD2kEAOyYiX", "GameLayerStateGameOver");
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
    var GameLayerStateBase_1 = require("./GameLayerStateBase");
    var GameLayerStatePool_1 = require("./GameLayerStatePool");
    var TileMapStateGameOver_1 = require("../TileMap/State/TileMapStateGameOver");
    var GameLayerStateGameOver = function(_super) {
      __extends(GameLayerStateGameOver, _super);
      function GameLayerStateGameOver() {
        return _super.call(this, GameLayerStateBase_1.GameLayerStateType.GameOver) || this;
      }
      GameLayerStateGameOver.create = function() {
        var instance = GameLayerStatePool_1.default.getInstance().getState(GameLayerStateBase_1.GameLayerStateType.GameOver);
        instance || (instance = new GameLayerStateGameOver());
        instance.init();
        return instance;
      };
      GameLayerStateGameOver.prototype.init = function() {};
      GameLayerStateGameOver.prototype.enter = function(onwer) {
        onwer.getTileMap().setCurrentState(TileMapStateGameOver_1.default.create());
        onwer.getDelegate() && onwer.getDelegate().onGameOver(onwer);
      };
      return GameLayerStateGameOver;
    }(GameLayerStateBase_1.default);
    exports.default = GameLayerStateGameOver;
    cc._RF.pop();
  }, {
    "../TileMap/State/TileMapStateGameOver": "TileMapStateGameOver",
    "./GameLayerStateBase": "GameLayerStateBase",
    "./GameLayerStatePool": "GameLayerStatePool"
  } ],
  GameLayerStateInlay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "004b93mgOBGJ4y2ukuHlCbA", "GameLayerStateInlay");
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
    var GameLayerStateBase_1 = require("./GameLayerStateBase");
    var GameLayerStatePool_1 = require("./GameLayerStatePool");
    var TilePiece_1 = require("../TilePiece/TilePiece");
    var GameLayerStateMatch_1 = require("./GameLayerStateMatch");
    var TileMapStateGameOver_1 = require("../TileMap/State/TileMapStateGameOver");
    var TileMapStateInlay_1 = require("../TileMap/State/TileMapStateInlay");
    var GameLayerStateGameOver_1 = require("./GameLayerStateGameOver");
    var GameLayerStateInlay = function(_super) {
      __extends(GameLayerStateInlay, _super);
      function GameLayerStateInlay() {
        var _this = _super.call(this, GameLayerStateBase_1.GameLayerStateType.Inlay) || this;
        _this._touchStartPos = cc.v2(0, 0);
        _this._tilePieceMoved = false;
        return _this;
      }
      GameLayerStateInlay.create = function() {
        var instance = GameLayerStatePool_1.default.getInstance().getState(GameLayerStateBase_1.GameLayerStateType.Inlay);
        instance || (instance = new GameLayerStateInlay());
        instance.init();
        return instance;
      };
      GameLayerStateInlay.prototype.init = function() {};
      GameLayerStateInlay.prototype.enter = function(onwer) {
        onwer.getTileMap().setCurrentState(TileMapStateInlay_1.default.create());
        this.resetTilePiece(onwer);
        if (!onwer.getTileMap().haveEnoughSlotForTilePiece(onwer.getTilePiece())) {
          onwer.getTileMap().setCurrentState(TileMapStateGameOver_1.default.create());
          onwer.setCurrentState(GameLayerStateGameOver_1.default.create());
        }
      };
      GameLayerStateInlay.prototype.onTouchStart = function(onwer, event) {
        var pos = onwer.getTilePiece().node.parent.convertToNodeSpaceAR(event.getLocation());
        this._touchStartPos = cc.v2(pos.x, pos.y);
        this._tilePieceMoved = false;
        onwer.getTilePiece().node.stopActionByTag(1001);
        onwer.getTilePiece().setPosition(cc.v2(0, 0));
      };
      GameLayerStateInlay.prototype.onTouchMove = function(onwer, event) {
        var pos = onwer.getTilePiece().node.parent.convertToNodeSpaceAR(event.getLocation());
        var offset = cc.v2(pos.x, pos.y).sub(this._touchStartPos);
        offset.magSqr() > 100 && (this._tilePieceMoved = true);
        onwer.getTilePiece().setPosition(offset);
      };
      GameLayerStateInlay.prototype.onTouchEnd = function(onwer, event) {
        if (this._tilePieceMoved) {
          var updateLogicalPositions = onwer.getTileMap().insertTilePiece(onwer.getTilePiece());
          if (updateLogicalPositions.length > 0) {
            this.hidePiece(onwer);
            onwer.setCurrentState(GameLayerStateMatch_1.default.create(updateLogicalPositions));
          } else this.moveTilePieceBack(onwer);
        } else onwer.getTilePiece().rotate();
      };
      GameLayerStateInlay.prototype.onTouchCancel = function(onwer, event) {
        this.onTouchEnd(onwer, event);
      };
      GameLayerStateInlay.prototype.moveTilePieceBack = function(onwer) {
        var move = cc.moveTo(.25, cc.v2(0, 0)).easing(cc.easeOut(2));
        move.setTag(1001);
        onwer.getTilePiece().node.stopActionByTag(1001);
        onwer.getTilePiece().node.runAction(move);
      };
      GameLayerStateInlay.prototype.resetTilePiece = function(onwer) {
        var random = Math.floor(21 * Math.random());
        var levels = [];
        if (random < 6) {
          var level = Math.floor(6 * Math.random() + 1);
          levels.push(level);
        } else {
          var level1 = Math.floor(4 * Math.random() + 1);
          var level2 = 0;
          while (1) {
            level2 = Math.floor(4 * Math.random() + 1);
            if (level2 != level1) break;
          }
          levels.push(level1);
          levels.push(level2);
        }
        var angleIndex = Math.floor(6 * Math.random());
        var tilePiece = onwer.getTilePiece();
        tilePiece.node.active = true;
        tilePiece.setTilePieceInfo(new TilePiece_1.TilePieceInfo(levels, angleIndex));
        tilePiece.setPosition(cc.v2(0, 0));
      };
      GameLayerStateInlay.prototype.hidePiece = function(onwer) {
        onwer.getTilePiece().node.active = false;
      };
      return GameLayerStateInlay;
    }(GameLayerStateBase_1.default);
    exports.default = GameLayerStateInlay;
    cc._RF.pop();
  }, {
    "../TileMap/State/TileMapStateGameOver": "TileMapStateGameOver",
    "../TileMap/State/TileMapStateInlay": "TileMapStateInlay",
    "../TilePiece/TilePiece": "TilePiece",
    "./GameLayerStateBase": "GameLayerStateBase",
    "./GameLayerStateGameOver": "GameLayerStateGameOver",
    "./GameLayerStateMatch": "GameLayerStateMatch",
    "./GameLayerStatePool": "GameLayerStatePool"
  } ],
  GameLayerStateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d8439MFdf1GYayZulP5Q0JV", "GameLayerStateMachine");
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
    var SimpleStateMachine_1 = require("../../../../../scripts/Frameworks/EWS/FSM/SimpleStateMachine");
    var GameLayerStatePool_1 = require("./GameLayerStatePool");
    var GameLayerStateMachine = function(_super) {
      __extends(GameLayerStateMachine, _super);
      function GameLayerStateMachine(onwer) {
        return _super.call(this, onwer) || this;
      }
      GameLayerStateMachine.create = function(onwer) {
        var instance = new GameLayerStateMachine(onwer);
        return instance;
      };
      GameLayerStateMachine.prototype.setCurrentState = function(newState) {
        var oldState = this.getCurrentState();
        _super.prototype.setCurrentState.call(this, newState);
        GameLayerStatePool_1.default.getInstance().putState(oldState);
      };
      return GameLayerStateMachine;
    }(SimpleStateMachine_1.default);
    exports.default = GameLayerStateMachine;
    cc._RF.pop();
  }, {
    "../../../../../scripts/Frameworks/EWS/FSM/SimpleStateMachine": void 0,
    "./GameLayerStatePool": "GameLayerStatePool"
  } ],
  GameLayerStateMatch: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3773d6acAlMVpUhFP55edY4", "GameLayerStateMatch");
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
    var GameLayerStateBase_1 = require("./GameLayerStateBase");
    var GameLayerStatePool_1 = require("./GameLayerStatePool");
    var TileMapStateCheckMatch_1 = require("../TileMap/State/TileMapStateCheckMatch");
    var GameLayerStateMatch = function(_super) {
      __extends(GameLayerStateMatch, _super);
      function GameLayerStateMatch() {
        var _this = _super.call(this, GameLayerStateBase_1.GameLayerStateType.Match) || this;
        _this._updateLogicalPositions = [];
        return _this;
      }
      GameLayerStateMatch.create = function(positions) {
        var instance = GameLayerStatePool_1.default.getInstance().getState(GameLayerStateBase_1.GameLayerStateType.Match);
        instance || (instance = new GameLayerStateMatch());
        instance.init(positions);
        return instance;
      };
      GameLayerStateMatch.prototype.init = function(positions) {
        this._updateLogicalPositions = positions;
      };
      GameLayerStateMatch.prototype.enter = function(onwer) {
        onwer.getTileMap().setCurrentState(TileMapStateCheckMatch_1.default.create(this._updateLogicalPositions));
      };
      return GameLayerStateMatch;
    }(GameLayerStateBase_1.default);
    exports.default = GameLayerStateMatch;
    cc._RF.pop();
  }, {
    "../TileMap/State/TileMapStateCheckMatch": "TileMapStateCheckMatch",
    "./GameLayerStateBase": "GameLayerStateBase",
    "./GameLayerStatePool": "GameLayerStatePool"
  } ],
  GameLayerStateMeger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c21fapf8nxPzIns3gqda/mi", "GameLayerStateMeger");
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
    var GameLayerStateBase_1 = require("./GameLayerStateBase");
    var GameLayerStatePool_1 = require("./GameLayerStatePool");
    var TileMapStateMeger_1 = require("../TileMap/State/TileMapStateMeger");
    var GameLayerStateMeger = function(_super) {
      __extends(GameLayerStateMeger, _super);
      function GameLayerStateMeger() {
        var _this = _super.call(this, GameLayerStateBase_1.GameLayerStateType.Meger) || this;
        _this._megerPaths = [];
        return _this;
      }
      GameLayerStateMeger.create = function(megerPaths) {
        var instance = GameLayerStatePool_1.default.getInstance().getState(GameLayerStateBase_1.GameLayerStateType.Meger);
        instance || (instance = new GameLayerStateMeger());
        instance.init(megerPaths);
        return instance;
      };
      GameLayerStateMeger.prototype.init = function(megerPaths) {
        this._megerPaths = megerPaths;
      };
      GameLayerStateMeger.prototype.enter = function(onwer) {
        onwer.getTileMap().setCurrentState(TileMapStateMeger_1.default.create(this._megerPaths));
      };
      return GameLayerStateMeger;
    }(GameLayerStateBase_1.default);
    exports.default = GameLayerStateMeger;
    cc._RF.pop();
  }, {
    "../TileMap/State/TileMapStateMeger": "TileMapStateMeger",
    "./GameLayerStateBase": "GameLayerStateBase",
    "./GameLayerStatePool": "GameLayerStatePool"
  } ],
  GameLayerStatePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bd9a8A1wGdED5bQhVBNMX90", "GameLayerStatePool");
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
    var StatePool_1 = require("../../../../../scripts/Frameworks/EWS/FSM/StatePool");
    var GameLayerStatePool = function(_super) {
      __extends(GameLayerStatePool, _super);
      function GameLayerStatePool() {
        return _super.call(this) || this;
      }
      GameLayerStatePool.getInstance = function() {
        null == this._instance && (this._instance = new GameLayerStatePool());
        return this._instance;
      };
      GameLayerStatePool.prototype.test = function() {};
      GameLayerStatePool._instance = null;
      return GameLayerStatePool;
    }(StatePool_1.default);
    exports.default = GameLayerStatePool;
    cc._RF.pop();
  }, {
    "../../../../../scripts/Frameworks/EWS/FSM/StatePool": void 0
  } ],
  GameLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1c200fgzTVGuZfgJ8kC8mA/", "GameLayer");
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
    var GameLayerStateMachine_1 = require("./State/GameLayerStateMachine");
    var GameLayerStateCreate_1 = require("./State/GameLayerStateCreate");
    var Defines_1 = require("../../../../scripts/Defines/Defines");
    var WorldBase_1 = require("../../../../scripts/Frameworks/EWS/World/WorldBase");
    var AssetCache_1 = require("../../../../scripts/Frameworks/AssetCache/AssetCache");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameLayer = function(_super) {
      __extends(GameLayer, _super);
      function GameLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tileMapRoot = null;
        _this.tilePieceRoot = null;
        _this._delegate = null;
        _this._tileMap = null;
        _this._tilePiece = null;
        _this._stateMachine = null;
        return _this;
      }
      GameLayer_1 = GameLayer;
      GameLayer.create = function() {
        var node = null;
        var res = AssetCache_1.default.getInstance().getAssetSync(Defines_1.AssetBundleID.GameScene, "prefab/game_layer/GameLayer", cc.Prefab);
        res && (node = cc.instantiate(res));
        if (node) {
          node.setPosition(cc.v2(0, 0));
          var component = node.getComponent(GameLayer_1);
          return component;
        }
        return null;
      };
      GameLayer.prototype.getDelegate = function() {
        return this._delegate;
      };
      GameLayer.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
      };
      GameLayer.prototype.getTileMap = function() {
        return this._tileMap;
      };
      GameLayer.prototype.setTileMap = function(tileMap) {
        if (this._tileMap) {
          this._tileMap.node.destroy();
          this._tilePiece = null;
        }
        if (tileMap) {
          this._tileMap = tileMap;
          this._tileMap.setGameLayer(this);
          this.tileMapRoot.addChild(this._tileMap.node);
        }
      };
      GameLayer.prototype.getTilePiece = function() {
        return this._tilePiece;
      };
      GameLayer.prototype.setTilePiece = function(tilePiece) {
        if (this._tilePiece) {
          this._tilePiece.node.destroy();
          this._tilePiece = null;
        }
        if (tilePiece) {
          this._tilePiece = tilePiece;
          this.tilePieceRoot.addChild(this._tilePiece.node);
        }
      };
      GameLayer.prototype.getCurrentState = function() {
        return this._stateMachine.getCurrentState();
      };
      GameLayer.prototype.setCurrentState = function(state) {
        this._stateMachine.setCurrentState(state);
      };
      GameLayer.prototype.onTouchStart = function(event) {
        var state = this.getCurrentState();
        state.onTouchStart(this, event);
      };
      GameLayer.prototype.onTouchMove = function(event) {
        var state = this.getCurrentState();
        state.onTouchMove(this, event);
      };
      GameLayer.prototype.onTouchEnd = function(event) {
        var state = this.getCurrentState();
        state.onTouchEnd(this, event);
      };
      GameLayer.prototype.onTouchCancel = function(event) {
        var state = this.getCurrentState();
        state.onTouchCancel(this, event);
      };
      GameLayer.prototype.init = function() {
        if (!this._stateMachine) {
          this._stateMachine = GameLayerStateMachine_1.default.create(this);
          this.setCurrentState(GameLayerStateCreate_1.default.create());
          this.tilePieceRoot.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.tilePieceRoot.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.tilePieceRoot.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.tilePieceRoot.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        }
      };
      var GameLayer_1;
      __decorate([ property(cc.Node) ], GameLayer.prototype, "tileMapRoot", void 0);
      __decorate([ property(cc.Node) ], GameLayer.prototype, "tilePieceRoot", void 0);
      GameLayer = GameLayer_1 = __decorate([ ccclass ], GameLayer);
      return GameLayer;
    }(WorldBase_1.default);
    exports.default = GameLayer;
    cc._RF.pop();
  }, {
    "../../../../scripts/Defines/Defines": void 0,
    "../../../../scripts/Frameworks/AssetCache/AssetCache": void 0,
    "../../../../scripts/Frameworks/EWS/World/WorldBase": void 0,
    "./State/GameLayerStateCreate": "GameLayerStateCreate",
    "./State/GameLayerStateMachine": "GameLayerStateMachine"
  } ],
  GameOverLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e0e26l3qVFE6d9+alFkiSS", "GameOverLayer");
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
    var Defines_1 = require("../../../../scripts/Defines/Defines");
    var IGame_1 = require("../../../../scripts/Frameworks/IGame/IGame");
    var LayerBase_1 = require("../../../../scripts/Frameworks/LayerDirector/LayerBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameOverLayer = function(_super) {
      __extends(GameOverLayer, _super);
      function GameOverLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.backToMainBnt = null;
        _this.replayBtn = null;
        _this._delegate = null;
        return _this;
      }
      GameOverLayer_1 = GameOverLayer;
      GameOverLayer.show = function(param, completeCallback) {
        IGame_1.default.getInstance().addLayerWithPrefab(Defines_1.AssetBundleID.GameScene, "prefab/ui_layer/GameOverLayer", GameOverLayer_1.LayerName, param, function(error, layer) {
          completeCallback && completeCallback(error, layer);
        });
      };
      GameOverLayer.prototype.getLayerName = function() {
        return GameOverLayer_1.LayerName;
      };
      GameOverLayer.prototype.getDelegate = function() {
        return this._delegate;
      };
      GameOverLayer.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
      };
      GameOverLayer.prototype.onLayerLoad = function() {
        this.backToMainBnt.on(cc.Node.EventType.TOUCH_END, this.onBackToMainBtn, this);
        this.replayBtn.on(cc.Node.EventType.TOUCH_END, this.onReplayBtn, this);
      };
      GameOverLayer.prototype.onLayerEnable = function() {};
      GameOverLayer.prototype.onLayerEnter = function(param) {};
      GameOverLayer.prototype.onLayerStart = function() {};
      GameOverLayer.prototype.onLayerUpdate = function(dt) {};
      GameOverLayer.prototype.onLayerExit = function() {};
      GameOverLayer.prototype.onLayerDisable = function() {};
      GameOverLayer.prototype.onLayerDestroy = function() {};
      GameOverLayer.prototype.onBackToMainBtn = function(event) {
        this.close();
        this._delegate && this._delegate.backToMain(this);
      };
      GameOverLayer.prototype.onReplayBtn = function(event) {
        this.close();
        this._delegate && this._delegate.replay(this);
      };
      var GameOverLayer_1;
      GameOverLayer.LayerName = "GameOverLayer";
      __decorate([ property(cc.Node) ], GameOverLayer.prototype, "backToMainBnt", void 0);
      __decorate([ property(cc.Node) ], GameOverLayer.prototype, "replayBtn", void 0);
      GameOverLayer = GameOverLayer_1 = __decorate([ ccclass ], GameOverLayer);
      return GameOverLayer;
    }(LayerBase_1.default);
    exports.default = GameOverLayer;
    cc._RF.pop();
  }, {
    "../../../../scripts/Defines/Defines": void 0,
    "../../../../scripts/Frameworks/IGame/IGame": void 0,
    "../../../../scripts/Frameworks/LayerDirector/LayerBase": void 0
  } ],
  GameSceneStateBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4838abA8WROVJIy56FqoqcL", "GameSceneStateBase");
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
    exports.GameSceneStateType = void 0;
    var State_1 = require("../../../../scripts/Frameworks/EWS/FSM/State");
    var GameSceneStateType;
    (function(GameSceneStateType) {
      GameSceneStateType[GameSceneStateType["None"] = 0] = "None";
      GameSceneStateType[GameSceneStateType["Create"] = 1] = "Create";
      GameSceneStateType[GameSceneStateType["Playing"] = 2] = "Playing";
      GameSceneStateType[GameSceneStateType["GameOver"] = 3] = "GameOver";
    })(GameSceneStateType = exports.GameSceneStateType || (exports.GameSceneStateType = {}));
    var GameSceneStateBase = function(_super) {
      __extends(GameSceneStateBase, _super);
      function GameSceneStateBase(type) {
        var _this = _super.call(this) || this;
        _this._type = GameSceneStateType.None;
        _this._type = type;
        _this.reset();
        return _this;
      }
      GameSceneStateBase.prototype.getType = function() {
        return this._type;
      };
      GameSceneStateBase.prototype.reset = function() {};
      GameSceneStateBase.prototype.enter = function(onwer) {};
      GameSceneStateBase.prototype.update = function(onwer, deltaTime) {};
      GameSceneStateBase.prototype.exit = function(onwer) {};
      GameSceneStateBase.prototype.onMessage = function(message) {
        return false;
      };
      GameSceneStateBase.prototype.onTouchStart = function(onwer, event) {};
      GameSceneStateBase.prototype.onTouchMove = function(onwer, event) {};
      GameSceneStateBase.prototype.onTouchEnd = function(onwer, event) {};
      GameSceneStateBase.prototype.onTouchCancel = function(onwer, event) {};
      return GameSceneStateBase;
    }(State_1.default);
    exports.default = GameSceneStateBase;
    cc._RF.pop();
  }, {
    "../../../../scripts/Frameworks/EWS/FSM/State": void 0
  } ],
  GameSceneStateCreate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1ceab/W5mFD858n0OlbOuHx", "GameSceneStateCreate");
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
    var GameSceneStateBase_1 = require("./GameSceneStateBase");
    var GameSceneStatePool_1 = require("./GameSceneStatePool");
    var GameLayer_1 = require("../GameLayer/GameLayer");
    var GameSceneStatePlaying_1 = require("./GameSceneStatePlaying");
    var GameSceneStateCreate = function(_super) {
      __extends(GameSceneStateCreate, _super);
      function GameSceneStateCreate() {
        return _super.call(this, GameSceneStateBase_1.GameSceneStateType.Create) || this;
      }
      GameSceneStateCreate.create = function() {
        var instance = GameSceneStatePool_1.default.getInstance().getState(GameSceneStateBase_1.GameSceneStateType.Create);
        instance || (instance = new GameSceneStateCreate());
        instance.init();
        return instance;
      };
      GameSceneStateCreate.prototype.init = function() {};
      GameSceneStateCreate.prototype.enter = function(onwer) {
        this.createGameLayer(onwer);
        onwer.setCurrentState(GameSceneStatePlaying_1.default.create());
      };
      GameSceneStateCreate.prototype.createGameLayer = function(onwer) {
        var layer = GameLayer_1.default.create();
        onwer.setGameLayer(layer);
        layer.init();
      };
      return GameSceneStateCreate;
    }(GameSceneStateBase_1.default);
    exports.default = GameSceneStateCreate;
    cc._RF.pop();
  }, {
    "../GameLayer/GameLayer": "GameLayer",
    "./GameSceneStateBase": "GameSceneStateBase",
    "./GameSceneStatePlaying": "GameSceneStatePlaying",
    "./GameSceneStatePool": "GameSceneStatePool"
  } ],
  GameSceneStateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "03fbbSBOdxBsp3+hYpVPst4", "GameSceneStateMachine");
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
    var SimpleStateMachine_1 = require("../../../../scripts/Frameworks/EWS/FSM/SimpleStateMachine");
    var GameSceneStatePool_1 = require("./GameSceneStatePool");
    var GameSceneStateMachine = function(_super) {
      __extends(GameSceneStateMachine, _super);
      function GameSceneStateMachine(onwer) {
        return _super.call(this, onwer) || this;
      }
      GameSceneStateMachine.create = function(onwer) {
        var instance = new GameSceneStateMachine(onwer);
        return instance;
      };
      GameSceneStateMachine.prototype.setCurrentState = function(newState) {
        var oldState = this.getCurrentState();
        _super.prototype.setCurrentState.call(this, newState);
        GameSceneStatePool_1.default.getInstance().putState(oldState);
      };
      return GameSceneStateMachine;
    }(SimpleStateMachine_1.default);
    exports.default = GameSceneStateMachine;
    cc._RF.pop();
  }, {
    "../../../../scripts/Frameworks/EWS/FSM/SimpleStateMachine": void 0,
    "./GameSceneStatePool": "GameSceneStatePool"
  } ],
  GameSceneStateOver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20cc4bUv4BKDb3Effr3Cdr5", "GameSceneStateOver");
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
    var GameSceneStateBase_1 = require("./GameSceneStateBase");
    var GameSceneStatePool_1 = require("./GameSceneStatePool");
    var GameOverLayer_1 = require("../UILayer/GameOverLayer");
    var GameSceneStateOver = function(_super) {
      __extends(GameSceneStateOver, _super);
      function GameSceneStateOver() {
        return _super.call(this, GameSceneStateBase_1.GameSceneStateType.GameOver) || this;
      }
      GameSceneStateOver.create = function() {
        var instance = GameSceneStatePool_1.default.getInstance().getState(GameSceneStateBase_1.GameSceneStateType.GameOver);
        instance || (instance = new GameSceneStateOver());
        instance.init();
        return instance;
      };
      GameSceneStateOver.prototype.init = function() {};
      GameSceneStateOver.prototype.enter = function(onwer) {
        GameOverLayer_1.default.show(null, function(error, layer) {
          layer.setDelegate(onwer);
        });
      };
      return GameSceneStateOver;
    }(GameSceneStateBase_1.default);
    exports.default = GameSceneStateOver;
    cc._RF.pop();
  }, {
    "../UILayer/GameOverLayer": "GameOverLayer",
    "./GameSceneStateBase": "GameSceneStateBase",
    "./GameSceneStatePool": "GameSceneStatePool"
  } ],
  GameSceneStatePlaying: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ccd64FZyGlB94/OpkUAQyKE", "GameSceneStatePlaying");
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
    var GameSceneStateBase_1 = require("./GameSceneStateBase");
    var GameSceneStatePool_1 = require("./GameSceneStatePool");
    var GameSceneStatePlaying = function(_super) {
      __extends(GameSceneStatePlaying, _super);
      function GameSceneStatePlaying() {
        return _super.call(this, GameSceneStateBase_1.GameSceneStateType.Playing) || this;
      }
      GameSceneStatePlaying.create = function() {
        var instance = GameSceneStatePool_1.default.getInstance().getState(GameSceneStateBase_1.GameSceneStateType.Playing);
        instance || (instance = new GameSceneStatePlaying());
        instance.init();
        return instance;
      };
      GameSceneStatePlaying.prototype.init = function() {};
      return GameSceneStatePlaying;
    }(GameSceneStateBase_1.default);
    exports.default = GameSceneStatePlaying;
    cc._RF.pop();
  }, {
    "./GameSceneStateBase": "GameSceneStateBase",
    "./GameSceneStatePool": "GameSceneStatePool"
  } ],
  GameSceneStatePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "69532+OOLpGypwpTH+C347i", "GameSceneStatePool");
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
    var StatePool_1 = require("../../../../scripts/Frameworks/EWS/FSM/StatePool");
    var GameSceneStatePool = function(_super) {
      __extends(GameSceneStatePool, _super);
      function GameSceneStatePool() {
        return _super.call(this) || this;
      }
      GameSceneStatePool.getInstance = function() {
        null == this._instance && (this._instance = new GameSceneStatePool());
        return this._instance;
      };
      GameSceneStatePool.prototype.test = function() {};
      GameSceneStatePool._instance = null;
      return GameSceneStatePool;
    }(StatePool_1.default);
    exports.default = GameSceneStatePool;
    cc._RF.pop();
  }, {
    "../../../../scripts/Frameworks/EWS/FSM/StatePool": void 0
  } ],
  GameScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "31b85mCwPRHiKNp9lazyN59", "GameScene");
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
    exports.GameSceneEnterParam = void 0;
    var PauseLayer_1 = require("./UILayer/PauseLayer");
    var GameSceneStateMachine_1 = require("./State/GameSceneStateMachine");
    var GameSceneStateCreate_1 = require("./State/GameSceneStateCreate");
    var GameSceneStateOver_1 = require("./State/GameSceneStateOver");
    var SceneBase_1 = require("../../../scripts/Frameworks/SceneDirector/SceneBase");
    var IGame_1 = require("../../../scripts/Frameworks/IGame/IGame");
    var Defines_1 = require("../../../scripts/Defines/Defines");
    var PreloadAssetInfo_1 = require("../../../scripts/Frameworks/SceneDirector/PreloadAssetInfo");
    var SceneEnterParamBase_1 = require("../../../scripts/Frameworks/SceneDirector/SceneEnterParamBase");
    var GameSceneEnterParam = function(_super) {
      __extends(GameSceneEnterParam, _super);
      function GameSceneEnterParam() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      return GameSceneEnterParam;
    }(SceneEnterParamBase_1.default);
    exports.GameSceneEnterParam = GameSceneEnterParam;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameScene = function(_super) {
      __extends(GameScene, _super);
      function GameScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.gameLayerRoot = null;
        _this.pauseBtn = null;
        _this._gameLayer = null;
        _this._stateMachine = null;
        return _this;
      }
      GameScene.prototype.getSceneName = function() {
        return Defines_1.SceneName.GameScene;
      };
      GameScene.prototype.getGameLayer = function() {
        return this._gameLayer;
      };
      GameScene.prototype.setGameLayer = function(layer) {
        if (this._gameLayer) {
          this._gameLayer.node.destroy();
          this._gameLayer = null;
        }
        if (layer) {
          this._gameLayer = layer;
          this._gameLayer.setDelegate(this);
          this.gameLayerRoot.addChild(this._gameLayer.node);
        }
      };
      GameScene.prototype.getCurrentState = function() {
        return this._stateMachine.getCurrentState();
      };
      GameScene.prototype.setCurrentState = function(state) {
        this._stateMachine.setCurrentState(state);
      };
      GameScene.prototype.onSceneLoad = function() {};
      GameScene.prototype.onSceneEnable = function() {};
      GameScene.prototype.onSceneEnter = function(param) {
        this._stateMachine = GameSceneStateMachine_1.default.create(this);
        this.setCurrentState(GameSceneStateCreate_1.default.create());
        this.pauseBtn.on(cc.Node.EventType.TOUCH_END, this.onPauseBtn, this);
      };
      GameScene.prototype.onSceneStart = function() {};
      GameScene.prototype.onSceneUpdate = function(dt) {};
      GameScene.prototype.onSceneDisable = function() {};
      GameScene.prototype.onSceneExit = function() {};
      GameScene.prototype.onSceneDestroy = function() {};
      GameScene.prototype.onPauseBtn = function(event) {
        PauseLayer_1.default.show(null, function(error, layer) {});
      };
      GameScene.prototype.replay = function(layer) {
        this.setCurrentState(GameSceneStateCreate_1.default.create());
      };
      GameScene.prototype.onReadyForNextPiece = function(gameLayer) {};
      GameScene.prototype.onGameOver = function(gameLayer) {
        this.setCurrentState(GameSceneStateOver_1.default.create());
      };
      GameScene.prototype.backToMain = function(layer) {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.extiBundles = [ Defines_1.AssetBundleID.GameScene ];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.MainScene] = [];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.MainScene);
      };
      __decorate([ property(cc.Node) ], GameScene.prototype, "gameLayerRoot", void 0);
      __decorate([ property(cc.Node) ], GameScene.prototype, "pauseBtn", void 0);
      GameScene = __decorate([ ccclass ], GameScene);
      return GameScene;
    }(SceneBase_1.default);
    exports.default = GameScene;
    cc._RF.pop();
  }, {
    "../../../scripts/Defines/Defines": void 0,
    "../../../scripts/Frameworks/IGame/IGame": void 0,
    "../../../scripts/Frameworks/SceneDirector/PreloadAssetInfo": void 0,
    "../../../scripts/Frameworks/SceneDirector/SceneBase": void 0,
    "../../../scripts/Frameworks/SceneDirector/SceneEnterParamBase": void 0,
    "./State/GameSceneStateCreate": "GameSceneStateCreate",
    "./State/GameSceneStateMachine": "GameSceneStateMachine",
    "./State/GameSceneStateOver": "GameSceneStateOver",
    "./UILayer/PauseLayer": "PauseLayer"
  } ],
  MegerPath: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1b079J1PdNHu4rXHymbykYI", "MegerPath");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.MergePathNode = void 0;
    var MergePathNode = function() {
      function MergePathNode(fromIndex, position) {
        this.fromIndex = 0;
        this.position = cc.v2(0, 0);
        this.fromIndex = fromIndex;
        this.position = position;
      }
      MergePathNode.create = function(fromIndex, position) {
        var instance = new MergePathNode(fromIndex, position);
        return instance;
      };
      return MergePathNode;
    }();
    exports.MergePathNode = MergePathNode;
    var MegerPath = function() {
      function MegerPath(nodes, level) {
        this.nodes = [];
        this.megerTileLevel = 0;
        this.nodes = nodes;
        this.megerTileLevel = level;
      }
      MegerPath.create = function(nodes, level) {
        var instance = new MegerPath(nodes, level);
        return instance;
      };
      MegerPath.prototype.findIndex = function(pos) {
        var index = this.nodes.findIndex(function(node, index) {
          return node.position.x == pos.x && node.position.y == pos.y;
        });
        return index;
      };
      MegerPath.prototype.isContainPos = function(pos) {
        return -1 != this.findIndex(pos);
      };
      MegerPath.prototype.getMegerPosition = function() {
        return this.nodes[0].position;
      };
      return MegerPath;
    }();
    exports.default = MegerPath;
    cc._RF.pop();
  }, {} ],
  PauseLayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9cd0bFpXQhKq67bwhM+K5z8", "PauseLayer");
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
    var Defines_1 = require("../../../../scripts/Defines/Defines");
    var IGame_1 = require("../../../../scripts/Frameworks/IGame/IGame");
    var LayerBase_1 = require("../../../../scripts/Frameworks/LayerDirector/LayerBase");
    var PreloadAssetInfo_1 = require("../../../../scripts/Frameworks/SceneDirector/PreloadAssetInfo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PauseLayer = function(_super) {
      __extends(PauseLayer, _super);
      function PauseLayer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.giveUpBtn = null;
        _this.resumeBtn = null;
        return _this;
      }
      PauseLayer_1 = PauseLayer;
      PauseLayer.show = function(param, completeCallback) {
        IGame_1.default.getInstance().addLayerWithPrefab(Defines_1.AssetBundleID.GameScene, "prefab/ui_layer/PauseLayer", PauseLayer_1.LayerName, param, function(error, layer) {
          completeCallback && completeCallback(error, layer);
        });
      };
      PauseLayer.prototype.getLayerName = function() {
        return PauseLayer_1.LayerName;
      };
      PauseLayer.prototype.onLayerLoad = function() {
        this.giveUpBtn.on(cc.Node.EventType.TOUCH_END, this.onGiveUpBtn, this);
        this.resumeBtn.on(cc.Node.EventType.TOUCH_END, this.onResumeBtn, this);
      };
      PauseLayer.prototype.onLayerEnable = function() {};
      PauseLayer.prototype.onLayerEnter = function(param) {};
      PauseLayer.prototype.onLayerStart = function() {};
      PauseLayer.prototype.onLayerUpdate = function(dt) {};
      PauseLayer.prototype.onLayerExit = function() {};
      PauseLayer.prototype.onLayerDisable = function() {};
      PauseLayer.prototype.onLayerDestroy = function() {};
      PauseLayer.prototype.onGiveUpBtn = function(event) {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.extiBundles = [ Defines_1.AssetBundleID.GameScene ];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.MainScene] = [];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.MainScene);
      };
      PauseLayer.prototype.onResumeBtn = function(event) {
        this.close();
      };
      var PauseLayer_1;
      PauseLayer.LayerName = "PauseLayer";
      __decorate([ property(cc.Node) ], PauseLayer.prototype, "giveUpBtn", void 0);
      __decorate([ property(cc.Node) ], PauseLayer.prototype, "resumeBtn", void 0);
      PauseLayer = PauseLayer_1 = __decorate([ ccclass ], PauseLayer);
      return PauseLayer;
    }(LayerBase_1.default);
    exports.default = PauseLayer;
    cc._RF.pop();
  }, {
    "../../../../scripts/Defines/Defines": void 0,
    "../../../../scripts/Frameworks/IGame/IGame": void 0,
    "../../../../scripts/Frameworks/LayerDirector/LayerBase": void 0,
    "../../../../scripts/Frameworks/SceneDirector/PreloadAssetInfo": void 0
  } ],
  TileBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3687moSN1Na6mUKzqVGGq4", "TileBase");
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
    exports.TileType = void 0;
    var EntityBase_1 = require("../../../../../scripts/Frameworks/EWS/Entity/EntityBase");
    var TileType;
    (function(TileType) {
      TileType[TileType["None"] = 0] = "None";
      TileType[TileType["Tile"] = 1] = "Tile";
      TileType[TileType["Slot"] = 2] = "Slot";
    })(TileType = exports.TileType || (exports.TileType = {}));
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TileBase = function(_super) {
      __extends(TileBase, _super);
      function TileBase() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._type = TileType.None;
        _this._position = cc.v2(0, 0);
        return _this;
      }
      TileBase.prototype.getType = function() {
        return this._type;
      };
      TileBase.prototype.initWithType = function(world, type) {
        _super.prototype.initEntity.call(this, world);
        this._type = type;
      };
      TileBase.prototype.getLogicalPosition = function() {
        return this._position;
      };
      TileBase.prototype.setLogicalPostion = function(pos) {
        this._position = pos;
      };
      TileBase = __decorate([ ccclass ], TileBase);
      return TileBase;
    }(EntityBase_1.default);
    exports.default = TileBase;
    cc._RF.pop();
  }, {
    "../../../../../scripts/Frameworks/EWS/Entity/EntityBase": void 0
  } ],
  TileMapStateBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "27033KvVBlLaaTmMD/hYlyd", "TileMapStateBase");
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
    exports.TileMapStateType = void 0;
    var State_1 = require("../../../../../../scripts/Frameworks/EWS/FSM/State");
    var TileMapStateType;
    (function(TileMapStateType) {
      TileMapStateType[TileMapStateType["None"] = 0] = "None";
      TileMapStateType[TileMapStateType["Create"] = 1] = "Create";
      TileMapStateType[TileMapStateType["Inlay"] = 2] = "Inlay";
      TileMapStateType[TileMapStateType["CheckMatch"] = 3] = "CheckMatch";
      TileMapStateType[TileMapStateType["Meger"] = 4] = "Meger";
      TileMapStateType[TileMapStateType["GameOver"] = 5] = "GameOver";
    })(TileMapStateType = exports.TileMapStateType || (exports.TileMapStateType = {}));
    var TileMapStateBase = function(_super) {
      __extends(TileMapStateBase, _super);
      function TileMapStateBase(type) {
        var _this = _super.call(this) || this;
        _this._type = TileMapStateType.None;
        _this._type = type;
        _this.reset();
        return _this;
      }
      TileMapStateBase.prototype.getType = function() {
        return this._type;
      };
      TileMapStateBase.prototype.reset = function() {};
      TileMapStateBase.prototype.enter = function(onwer) {};
      TileMapStateBase.prototype.update = function(onwer, deltaTime) {};
      TileMapStateBase.prototype.exit = function(onwer) {};
      TileMapStateBase.prototype.onMessage = function(message) {
        return false;
      };
      return TileMapStateBase;
    }(State_1.default);
    exports.default = TileMapStateBase;
    cc._RF.pop();
  }, {
    "../../../../../../scripts/Frameworks/EWS/FSM/State": void 0
  } ],
  TileMapStateCheckMatch: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13205hSmTpOM7ETVeVRwV4d", "TileMapStateCheckMatch");
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
    var TileMapStateBase_1 = require("./TileMapStateBase");
    var TileMapStatePool_1 = require("./TileMapStatePool");
    var GameLayerStateInlay_1 = require("../../State/GameLayerStateInlay");
    var MegerPath_1 = require("../../GameDefines/MegerPath");
    var GameLayerStateMeger_1 = require("../../State/GameLayerStateMeger");
    var TileMapStateCheckMatch = function(_super) {
      __extends(TileMapStateCheckMatch, _super);
      function TileMapStateCheckMatch() {
        var _this = _super.call(this, TileMapStateBase_1.TileMapStateType.CheckMatch) || this;
        _this._updateLogicalPositions = [];
        return _this;
      }
      TileMapStateCheckMatch.create = function(positions) {
        var instance = TileMapStatePool_1.default.getInstance().getState(TileMapStateBase_1.TileMapStateType.CheckMatch);
        instance || (instance = new TileMapStateCheckMatch());
        instance.init(positions);
        return instance;
      };
      TileMapStateCheckMatch.prototype.init = function(positions) {
        this._updateLogicalPositions = positions;
      };
      TileMapStateCheckMatch.prototype.enter = function(onwer) {
        this._updateLogicalPositions.sort(function(a, b) {
          var tileA = onwer.getTileWithLogicalPos(a);
          var tileB = onwer.getTileWithLogicalPos(b);
          return tileA.getLevel() - tileB.getLevel();
        });
        var megerPaths = [];
        for (var index = 0; index < this._updateLogicalPositions.length; index++) {
          var checkPos = this._updateLogicalPositions[index];
          var willMeger = false;
          for (var j = 0; j < megerPaths.length; j++) {
            var path = megerPaths[j];
            if (path.isContainPos(checkPos)) {
              willMeger = true;
              break;
            }
          }
          if (!willMeger) {
            var path = this.getMegerPathFromPos(onwer, checkPos);
            path.megerTileLevel > 0 && megerPaths.push(path);
          }
        }
        megerPaths.length > 0 ? onwer.getGameLayer().setCurrentState(GameLayerStateMeger_1.default.create(megerPaths)) : onwer.getGameLayer().setCurrentState(GameLayerStateInlay_1.default.create());
      };
      TileMapStateCheckMatch.prototype.getMegerPathFromPos = function(onwer, pos) {
        var pathNodes = [];
        var checkedPositions = [];
        pathNodes.push(MegerPath_1.MergePathNode.create(-1, pos));
        checkedPositions.push(pos);
        for (var i = 0; i < pathNodes.length; i++) {
          var pathNode = pathNodes[i];
          var tile = onwer.getTileWithLogicalPos(pathNode.position);
          var neighbourPositions = onwer.getAllNeighbourPositions(pathNode.position);
          for (var j = 0; j < neighbourPositions.length; j++) {
            var neighbourPos = neighbourPositions[j];
            if (!this.isPostionChecked(checkedPositions, neighbourPos)) {
              checkedPositions.push(neighbourPos);
              var neighbourTile = onwer.getTileWithLogicalPos(neighbourPos);
              neighbourTile && tile.getLevel() == neighbourTile.getLevel() && pathNodes.push(MegerPath_1.MergePathNode.create(i, neighbourPos));
            }
          }
        }
        var level = 0;
        if (pathNodes.length >= 3) {
          var tile = onwer.getTileWithLogicalPos(pos);
          level = tile.getLevel() + 1;
        }
        return MegerPath_1.default.create(pathNodes, level);
      };
      TileMapStateCheckMatch.prototype.isPostionChecked = function(checkedPositions, pos) {
        var index = checkedPositions.findIndex(function(value, index) {
          return value.x == pos.x && value.y == pos.y;
        });
        return -1 != index;
      };
      return TileMapStateCheckMatch;
    }(TileMapStateBase_1.default);
    exports.default = TileMapStateCheckMatch;
    cc._RF.pop();
  }, {
    "../../GameDefines/MegerPath": "MegerPath",
    "../../State/GameLayerStateInlay": "GameLayerStateInlay",
    "../../State/GameLayerStateMeger": "GameLayerStateMeger",
    "./TileMapStateBase": "TileMapStateBase",
    "./TileMapStatePool": "TileMapStatePool"
  } ],
  TileMapStateCreate: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d1f02OZXBlHZLEZmG04KVfR", "TileMapStateCreate");
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
    var TileMap_1 = require("../TileMap");
    var TileMapStateBase_1 = require("./TileMapStateBase");
    var TileSlot_1 = require("../../Tile/TileSlot");
    var TileMapStateInlay_1 = require("./TileMapStateInlay");
    var TileMapStatePool_1 = require("./TileMapStatePool");
    var TileMapStateCreate = function(_super) {
      __extends(TileMapStateCreate, _super);
      function TileMapStateCreate() {
        var _this = _super.call(this, TileMapStateBase_1.TileMapStateType.Create) || this;
        _this._mapSize = cc.size(0, 0);
        _this._tileSize = cc.size(0, 0);
        return _this;
      }
      TileMapStateCreate.create = function(mapSize, tileSize) {
        var instance = TileMapStatePool_1.default.getInstance().getState(TileMapStateBase_1.TileMapStateType.Create);
        instance || (instance = new TileMapStateCreate());
        instance.init(mapSize, tileSize);
        return instance;
      };
      TileMapStateCreate.prototype.init = function(mapSize, tileSize) {
        this._mapSize = mapSize;
        this._tileSize = tileSize;
      };
      TileMapStateCreate.prototype.enter = function(onwer) {
        this.initCoordinate(onwer);
        this.initSlots(onwer);
        onwer.setCurrentState(TileMapStateInlay_1.default.create());
      };
      TileMapStateCreate.prototype.initCoordinate = function(onwer) {
        var slotRootSize = onwer.getTileRoot().getContentSize();
        var y = .5 * (slotRootSize.height - this._tileSize.height * this._mapSize.height);
        var x = .5 * (slotRootSize.width - this._tileSize.width * this._mapSize.width);
        onwer.setTileSize(this._tileSize);
        onwer.setMapSize(this._mapSize);
        onwer.setOrigin(cc.v2(x + .5 * this._tileSize.width, y + .5 * this._tileSize.height));
        var evenRowDirectionToOffsetDict = {};
        evenRowDirectionToOffsetDict[TileMap_1.TileMapDirection.Right] = cc.v2(1, 0);
        evenRowDirectionToOffsetDict[TileMap_1.TileMapDirection.RightTop] = cc.v2(1, 1);
        evenRowDirectionToOffsetDict[TileMap_1.TileMapDirection.LeftTop] = cc.v2(0, 1);
        evenRowDirectionToOffsetDict[TileMap_1.TileMapDirection.Left] = cc.v2(-1, 0);
        evenRowDirectionToOffsetDict[TileMap_1.TileMapDirection.LeftBottom] = cc.v2(0, -1);
        evenRowDirectionToOffsetDict[TileMap_1.TileMapDirection.RightBottom] = cc.v2(1, -1);
        onwer.setEvenRowDirectionToOffsetDict(evenRowDirectionToOffsetDict);
        var oddRowDirectionToOffsetDict = {};
        oddRowDirectionToOffsetDict[TileMap_1.TileMapDirection.Right] = cc.v2(1, 0);
        oddRowDirectionToOffsetDict[TileMap_1.TileMapDirection.RightTop] = cc.v2(0, 1);
        oddRowDirectionToOffsetDict[TileMap_1.TileMapDirection.LeftTop] = cc.v2(-1, 1);
        oddRowDirectionToOffsetDict[TileMap_1.TileMapDirection.Left] = cc.v2(-1, 0);
        oddRowDirectionToOffsetDict[TileMap_1.TileMapDirection.LeftBottom] = cc.v2(-1, -1);
        oddRowDirectionToOffsetDict[TileMap_1.TileMapDirection.RightBottom] = cc.v2(0, -1);
        onwer.setOddRowDirectionToOffsetDict(oddRowDirectionToOffsetDict);
      };
      TileMapStateCreate.prototype.initSlots = function(onwer) {
        for (var i = 0; i < this._mapSize.height; i++) {
          var delta = Math.abs(Math.floor(i - this.getCenterRow()));
          var startX = 0;
          var endX = this._mapSize.width;
          if (delta % 2 == 0) {
            startX += Math.floor(.5 * delta);
            endX -= Math.floor(.5 * delta);
          } else {
            startX += Math.floor(.5 * delta);
            endX -= Math.ceil(.5 * delta);
          }
          for (var j = startX; j < endX; j++) {
            var slot = TileSlot_1.default.create(onwer.getWorld());
            onwer.addSlotWithLogicalPos(slot, cc.v2(j, i));
          }
        }
      };
      TileMapStateCreate.prototype.getCenterRow = function() {
        return Math.floor(.5 * this._mapSize.height);
      };
      TileMapStateCreate.prototype.getCenterColumn = function() {
        return Math.floor(.5 * this._mapSize.width);
      };
      return TileMapStateCreate;
    }(TileMapStateBase_1.default);
    exports.default = TileMapStateCreate;
    cc._RF.pop();
  }, {
    "../../Tile/TileSlot": "TileSlot",
    "../TileMap": "TileMap",
    "./TileMapStateBase": "TileMapStateBase",
    "./TileMapStateInlay": "TileMapStateInlay",
    "./TileMapStatePool": "TileMapStatePool"
  } ],
  TileMapStateGameOver: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b48a4I2jCpPcpi9ym5AWDVZ", "TileMapStateGameOver");
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
    var TileMapStateBase_1 = require("./TileMapStateBase");
    var TileMapStatePool_1 = require("./TileMapStatePool");
    var TileMapStateGameOver = function(_super) {
      __extends(TileMapStateGameOver, _super);
      function TileMapStateGameOver() {
        return _super.call(this, TileMapStateBase_1.TileMapStateType.GameOver) || this;
      }
      TileMapStateGameOver.create = function() {
        var instance = TileMapStatePool_1.default.getInstance().getState(TileMapStateBase_1.TileMapStateType.GameOver);
        instance || (instance = new TileMapStateGameOver());
        instance.init();
        return instance;
      };
      TileMapStateGameOver.prototype.init = function() {};
      TileMapStateGameOver.prototype.enter = function(onwer) {};
      return TileMapStateGameOver;
    }(TileMapStateBase_1.default);
    exports.default = TileMapStateGameOver;
    cc._RF.pop();
  }, {
    "./TileMapStateBase": "TileMapStateBase",
    "./TileMapStatePool": "TileMapStatePool"
  } ],
  TileMapStateInlay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0fd17Wi+KxG04DCCLiHAWEA", "TileMapStateInlay");
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
    var TileMapStateBase_1 = require("./TileMapStateBase");
    var Tile_1 = require("../../Tile/Tile");
    var TileMapStatePool_1 = require("./TileMapStatePool");
    var TileMapStateInlay = function(_super) {
      __extends(TileMapStateInlay, _super);
      function TileMapStateInlay() {
        return _super.call(this, TileMapStateBase_1.TileMapStateType.Inlay) || this;
      }
      TileMapStateInlay.create = function() {
        var instance = TileMapStatePool_1.default.getInstance().getState(TileMapStateBase_1.TileMapStateType.Inlay);
        instance || (instance = new TileMapStateInlay());
        instance.init();
        return instance;
      };
      TileMapStateInlay.prototype.init = function() {};
      TileMapStateInlay.prototype.inlayTilePiece = function(tileMap, tilePiece) {
        var logicalPositions = [];
        var tiles = tilePiece.getTiles();
        if (tiles.length > 0) {
          for (var index = 0; index < tiles.length; index++) {
            var tile = tiles[index];
            var worldPos = tile.node.parent.convertToWorldSpaceAR(tile.getPosition());
            var mapPos = tileMap.getTileRoot().convertToNodeSpaceAR(worldPos);
            var logicalPos = tileMap.getLogicalPosWithPixelPos(cc.v2(mapPos));
            logicalPositions.push(logicalPos);
          }
          for (var index = 0; index < logicalPositions.length; index++) {
            var pos = logicalPositions[index];
            if (!tileMap.isTileSlotEmptyAtLogicalPos(pos)) {
              logicalPositions = [];
              break;
            }
          }
          for (var index = 0; index < logicalPositions.length; index++) {
            var pos = logicalPositions[index];
            var tile = tiles[index];
            var newTile = Tile_1.default.create(tileMap.getWorld(), tile.getLevel());
            tileMap.addTileWithLogicalPos(newTile, pos);
          }
        }
        return logicalPositions;
      };
      TileMapStateInlay.prototype.haveEnoughSlotForTilePiece = function(tileMap, tilePiece) {
        var tilePieceCount = tilePiece.getLevels().length;
        var validPostions = tileMap.getAllValidPositions();
        for (var index = 0; index < validPostions.length; index++) {
          var logicalPos = validPostions[index];
          if (tileMap.isTileSlotEmptyAtLogicalPos(logicalPos)) {
            if (1 == tilePieceCount) return true;
            if (2 == tilePieceCount) {
              var neighbourPostions = tileMap.getAllNeighbourPositions(logicalPos);
              for (var index_1 = 0; index_1 < neighbourPostions.length; index_1++) {
                var checkPos = neighbourPostions[index_1];
                if (tileMap.isTileSlotEmptyAtLogicalPos(checkPos)) return true;
              }
            }
          }
        }
        return false;
      };
      return TileMapStateInlay;
    }(TileMapStateBase_1.default);
    exports.default = TileMapStateInlay;
    cc._RF.pop();
  }, {
    "../../Tile/Tile": "Tile",
    "./TileMapStateBase": "TileMapStateBase",
    "./TileMapStatePool": "TileMapStatePool"
  } ],
  TileMapStateMachine: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "155e1p04NFAM4LWFZpF/4jk", "TileMapStateMachine");
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
    var SimpleStateMachine_1 = require("../../../../../../scripts/Frameworks/EWS/FSM/SimpleStateMachine");
    var TileMapStatePool_1 = require("./TileMapStatePool");
    var TileMapStateMachine = function(_super) {
      __extends(TileMapStateMachine, _super);
      function TileMapStateMachine(onwer) {
        return _super.call(this, onwer) || this;
      }
      TileMapStateMachine.create = function(onwer) {
        var instance = new TileMapStateMachine(onwer);
        return instance;
      };
      TileMapStateMachine.prototype.setCurrentState = function(newState) {
        var oldState = this.getCurrentState();
        _super.prototype.setCurrentState.call(this, newState);
        TileMapStatePool_1.default.getInstance().putState(oldState);
      };
      return TileMapStateMachine;
    }(SimpleStateMachine_1.default);
    exports.default = TileMapStateMachine;
    cc._RF.pop();
  }, {
    "../../../../../../scripts/Frameworks/EWS/FSM/SimpleStateMachine": void 0,
    "./TileMapStatePool": "TileMapStatePool"
  } ],
  TileMapStateMeger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22d29NU1GxG/qmTE1Ldig7u", "TileMapStateMeger");
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
    var TileMapStateBase_1 = require("./TileMapStateBase");
    var TileMapStatePool_1 = require("./TileMapStatePool");
    var Tile_1 = require("../../Tile/Tile");
    var GameLayerStateMatch_1 = require("../../State/GameLayerStateMatch");
    var NewTileFinishMegerData = function() {
      function NewTileFinishMegerData(tileMap, megerPath) {
        this.tileMap = tileMap;
        this.megerPath = megerPath;
      }
      return NewTileFinishMegerData;
    }();
    var OldTileFinishMegerData = function() {
      function OldTileFinishMegerData(tileMap, tile) {
        this.tileMap = tileMap;
        this.tile = tile;
      }
      return OldTileFinishMegerData;
    }();
    var TileMapStateMeger = function(_super) {
      __extends(TileMapStateMeger, _super);
      function TileMapStateMeger() {
        var _this = _super.call(this, TileMapStateBase_1.TileMapStateType.Meger) || this;
        _this._megerPaths = [];
        _this._pendMegerPath = [];
        _this._pendingTiles = [];
        _this._moveDuration = .25;
        _this._disappearDuration = .25;
        return _this;
      }
      TileMapStateMeger.create = function(megerPaths) {
        var instance = TileMapStatePool_1.default.getInstance().getState(TileMapStateBase_1.TileMapStateType.Meger);
        instance || (instance = new TileMapStateMeger());
        instance.init(megerPaths);
        return instance;
      };
      TileMapStateMeger.prototype.init = function(megerPaths) {
        this._megerPaths = megerPaths;
      };
      TileMapStateMeger.prototype.enter = function(onwer) {
        for (var index = 0; index < this._megerPaths.length; index++) {
          var path = this._megerPaths[index];
          this.createNewTileMegerAnimation(onwer, path);
        }
      };
      TileMapStateMeger.prototype.exit = function(onwer) {
        this._megerPaths.length = 0;
      };
      TileMapStateMeger.prototype.createNewTileMegerAnimation = function(onwer, path) {
        this._pendMegerPath.push(path);
        for (var index = path.nodes.length - 1; index > -1; index--) {
          var nodeIndexes = this.getNodeIndexesWithPathIndex(path, index);
          this.createOldTileMegerAnimation(onwer, path, nodeIndexes);
        }
        var newTile = Tile_1.default.create(onwer.getWorld(), path.megerTileLevel);
        onwer.addTileWithLogicalPos(newTile, path.getMegerPosition());
        newTile.node.scale = 0;
        var delay = cc.delayTime(this._moveDuration);
        var appear = cc.spawn(cc.scaleTo(.3, 1).easing(cc.easeBackOut()), cc.fadeIn(.3));
        var action = cc.sequence(delay, appear, cc.callFunc(this.newTileFinishMeger, this, new NewTileFinishMegerData(onwer, path)));
        newTile.node.runAction(action);
      };
      TileMapStateMeger.prototype.getNodeIndexesWithPathIndex = function(path, index) {
        var result = [];
        while (index > -1) {
          var node = path.nodes[index];
          result.push(index);
          index = node.fromIndex;
        }
        return result;
      };
      TileMapStateMeger.prototype.newTileFinishMeger = function(node, data) {
        var tileMap = data.tileMap;
        var megerPath = data.megerPath;
        var index = this._pendMegerPath.indexOf(megerPath);
        -1 != index && this._pendMegerPath.splice(index, 1);
        var checkPostions = [];
        for (var index_1 = 0; index_1 < this._megerPaths.length; index_1++) {
          var path = this._megerPaths[index_1];
          checkPostions.push(path.getMegerPosition());
        }
        this._pendingTiles.length <= 0 && tileMap.getGameLayer().setCurrentState(GameLayerStateMatch_1.default.create(checkPostions));
      };
      TileMapStateMeger.prototype.createOldTileMegerAnimation = function(onwer, path, indexes) {
        var startNode = path.nodes[indexes[0]];
        var tile = onwer.removeTileWithLogicalPos(startNode.position);
        onwer.addAnimationTileWithLogicalPos(tile, startNode.position);
        this._pendMegerPath.push(path);
        var moveAction = [];
        if (indexes.length > 1) {
          var stepDuration = this._moveDuration / (indexes.length - 1);
          for (var i = 1; i < indexes.length; i++) {
            var nodeIndex = indexes[i];
            var node = path.nodes[nodeIndex];
            var pixelPos = onwer.getPixelPosWithLogicalPos(node.position);
            var move = cc.moveTo(stepDuration, pixelPos);
            moveAction.push(move);
          }
        } else moveAction.push(cc.delayTime(this._moveDuration));
        moveAction.push(cc.spawn(cc.fadeOut(this._disappearDuration).easing(cc.easeOut(2)), cc.scaleTo(this._disappearDuration, 0)));
        moveAction.push(cc.callFunc(this.oldTileFinishMerge, this, new OldTileFinishMegerData(onwer, tile)));
        var action = cc.sequence(moveAction);
        tile.node.runAction(action);
      };
      TileMapStateMeger.prototype.oldTileFinishMerge = function(node, data) {
        var tileMap = data.tileMap;
        var tile = data.tile;
        tileMap.removeAnimationTile(tile);
      };
      return TileMapStateMeger;
    }(TileMapStateBase_1.default);
    exports.default = TileMapStateMeger;
    cc._RF.pop();
  }, {
    "../../State/GameLayerStateMatch": "GameLayerStateMatch",
    "../../Tile/Tile": "Tile",
    "./TileMapStateBase": "TileMapStateBase",
    "./TileMapStatePool": "TileMapStatePool"
  } ],
  TileMapStatePool: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48c3fiM3p1PYIAFQOl1rO0Q", "TileMapStatePool");
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
    var StatePool_1 = require("../../../../../../scripts/Frameworks/EWS/FSM/StatePool");
    var TileMapStatePool = function(_super) {
      __extends(TileMapStatePool, _super);
      function TileMapStatePool() {
        return _super.call(this) || this;
      }
      TileMapStatePool.getInstance = function() {
        null == this._instance && (this._instance = new TileMapStatePool());
        return this._instance;
      };
      TileMapStatePool.prototype.test = function() {};
      TileMapStatePool._instance = null;
      return TileMapStatePool;
    }(StatePool_1.default);
    exports.default = TileMapStatePool;
    cc._RF.pop();
  }, {
    "../../../../../../scripts/Frameworks/EWS/FSM/StatePool": void 0
  } ],
  TileMap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0f2b2nDY1tP3LOovZ1JhppF", "TileMap");
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
    exports.TileMapDirection = void 0;
    var TileMapStateMachine_1 = require("./State/TileMapStateMachine");
    var TileMapStateCreate_1 = require("./State/TileMapStateCreate");
    var TileMapStateBase_1 = require("./State/TileMapStateBase");
    var EntityBase_1 = require("../../../../../scripts/Frameworks/EWS/Entity/EntityBase");
    var AssetCache_1 = require("../../../../../scripts/Frameworks/AssetCache/AssetCache");
    var Defines_1 = require("../../../../../scripts/Defines/Defines");
    var GameMath_1 = require("../../../../../scripts/Frameworks/Utils/GameMath");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TileMapDirection;
    (function(TileMapDirection) {
      TileMapDirection[TileMapDirection["None"] = 0] = "None";
      TileMapDirection[TileMapDirection["Right"] = 1] = "Right";
      TileMapDirection[TileMapDirection["RightTop"] = 2] = "RightTop";
      TileMapDirection[TileMapDirection["LeftTop"] = 3] = "LeftTop";
      TileMapDirection[TileMapDirection["Left"] = 4] = "Left";
      TileMapDirection[TileMapDirection["LeftBottom"] = 5] = "LeftBottom";
      TileMapDirection[TileMapDirection["RightBottom"] = 6] = "RightBottom";
    })(TileMapDirection = exports.TileMapDirection || (exports.TileMapDirection = {}));
    var TileMap = function(_super) {
      __extends(TileMap, _super);
      function TileMap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.slotRoot = null;
        _this._gameLayer = null;
        _this._tileSize = cc.size(90, 78);
        _this._mapSize = cc.size(7, 7);
        _this._origin = cc.v2(0, 0);
        _this._evenRowDirectionToOffsetDict = {};
        _this._oddRowDirectionToOffsetDict = {};
        _this._stateMachine = null;
        _this._tileSlots = {};
        _this._tiles = {};
        return _this;
      }
      TileMap_1 = TileMap;
      TileMap.create = function(world) {
        var node = null;
        var res = AssetCache_1.default.getInstance().getAssetSync(Defines_1.AssetBundleID.GameScene, "prefab/game_layer/TileMap", cc.Prefab);
        res && (node = cc.instantiate(res));
        if (node) {
          node.setPosition(cc.v2(0, 0));
          var component = node.getComponent(TileMap_1);
          return component;
        }
        return null;
      };
      TileMap.prototype.init = function(world) {
        if (null == this._stateMachine) {
          _super.prototype.initEntity.call(this, world);
          this._stateMachine = TileMapStateMachine_1.default.create(this);
          var width = 90;
          var height = Math.round(width * Math.sin(GameMath_1.default.degreeToRadian(60)));
          this.setCurrentState(TileMapStateCreate_1.default.create(cc.size(7, 7), cc.size(width, height)));
        }
      };
      TileMap.prototype.getTileRoot = function() {
        return this.slotRoot;
      };
      TileMap.prototype.getGameLayer = function() {
        return this._gameLayer;
      };
      TileMap.prototype.setGameLayer = function(gameLayer) {
        this._gameLayer = gameLayer;
      };
      TileMap.prototype.getTileSize = function() {
        return this._tileSize;
      };
      TileMap.prototype.setTileSize = function(size) {
        this._tileSize = size;
      };
      TileMap.prototype.getMapSize = function() {
        return this._mapSize;
      };
      TileMap.prototype.setMapSize = function(size) {
        this._mapSize = size;
      };
      TileMap.prototype.getOrigin = function() {
        return this._origin;
      };
      TileMap.prototype.setOrigin = function(origin) {
        this._origin = origin;
      };
      TileMap.prototype.getEvenRowDirectionToOffsetDict = function() {
        return this._evenRowDirectionToOffsetDict;
      };
      TileMap.prototype.setEvenRowDirectionToOffsetDict = function(dict) {
        this._evenRowDirectionToOffsetDict = dict;
      };
      TileMap.prototype.getOddRowDirectionToOffsetDict = function() {
        return this._oddRowDirectionToOffsetDict;
      };
      TileMap.prototype.setOddRowDirectionToOffsetDict = function(dict) {
        this._oddRowDirectionToOffsetDict = dict;
      };
      TileMap.prototype.getCurrentState = function() {
        return this._stateMachine.getCurrentState();
      };
      TileMap.prototype.setCurrentState = function(state) {
        this._stateMachine.setCurrentState(state);
      };
      TileMap.prototype.isSameWithCenter = function(row) {
        var isSameWithCenter = Math.floor(.5 * this._mapSize.height) % 2 == row % 2;
        return isSameWithCenter;
      };
      TileMap.prototype.getPixelPosWithLogicalPos = function(pos) {
        var isSameWithCenter = this.isSameWithCenter(pos.y);
        var leftStart = .5 * this._tileSize.width;
        isSameWithCenter && (leftStart = 0);
        var x = leftStart + pos.x * this._tileSize.width;
        var y = pos.y * this._tileSize.height;
        return cc.v2(x, y).add(this._origin);
      };
      TileMap.prototype.getLogicalPosWithPixelPos = function(pos) {
        var origin = this._origin.sub(cc.v2(.5 * this._tileSize.width, .5 * this._tileSize.height));
        var offset = pos.sub(origin);
        var row = Math.floor(offset.y / this._tileSize.height);
        var isSameWithCenter = this.isSameWithCenter(row);
        var leftStart = .5 * this._tileSize.width;
        isSameWithCenter && (leftStart = 0);
        var column = Math.floor((offset.x - leftStart) / this._tileSize.width);
        return cc.v2(column, row);
      };
      TileMap.prototype.getOffsetWithPositionAndDirection = function(pos, direction) {
        var isSameWithCenter = this.isSameWithCenter(pos.y);
        return isSameWithCenter ? this._oddRowDirectionToOffsetDict[direction] : this._evenRowDirectionToOffsetDict[direction];
      };
      TileMap.prototype.getAllNeighbourPositions = function(pos) {
        var result = [];
        var directions = [ TileMapDirection.Right, TileMapDirection.RightTop, TileMapDirection.LeftTop, TileMapDirection.Left, TileMapDirection.LeftBottom, TileMapDirection.RightBottom ];
        for (var index = 0; index < directions.length; index++) {
          var direction = directions[index];
          var offset = this.getOffsetWithPositionAndDirection(pos, direction);
          var neighbourPos = pos.add(offset);
          result.push(neighbourPos);
        }
        return result;
      };
      TileMap.prototype.getKeyWithLogicalPos = function(pos) {
        return pos.toString();
      };
      TileMap.prototype.addSlotWithLogicalPos = function(slot, pos) {
        this.removeSlotWithLogicalPos(pos);
        slot.setLogicalPostion(pos);
        slot.node.setPosition(this.getPixelPosWithLogicalPos(pos));
        this.slotRoot.addChild(slot.node, 0);
        var key = this.getKeyWithLogicalPos(pos);
        this._tileSlots[key] = slot;
      };
      TileMap.prototype.removeSlotWithLogicalPos = function(pos) {
        var key = this.getKeyWithLogicalPos(pos);
        var slot = this._tileSlots[key];
        slot && slot.node.removeFromParent(false);
        delete this._tileSlots[key];
        return slot;
      };
      TileMap.prototype.getSlotWithLogicalPos = function(pos) {
        var key = this.getKeyWithLogicalPos(pos);
        return this._tileSlots[key];
      };
      TileMap.prototype.getAllSlots = function() {
        return this._tileSlots;
      };
      TileMap.prototype.getAllValidPositions = function() {
        var result = [];
        for (var key in this._tileSlots) {
          var slot = this._tileSlots[key];
          var logicalPos = slot.getLogicalPosition();
          result.push(logicalPos);
        }
        return result;
      };
      TileMap.prototype.addTileWithLogicalPos = function(tile, pos) {
        var slot = this.getSlotWithLogicalPos(pos);
        if (slot) {
          this.removeTileWithLogicalPos(pos);
          tile.setLogicalPostion(pos);
          tile.node.setPosition(this.getPixelPosWithLogicalPos(pos));
          this.slotRoot.addChild(tile.node, 1);
          var key = this.getKeyWithLogicalPos(pos);
          this._tiles[key] = tile;
        }
      };
      TileMap.prototype.removeTileWithLogicalPos = function(pos) {
        var key = this.getKeyWithLogicalPos(pos);
        var tile = this._tiles[key];
        tile && tile.node.removeFromParent(false);
        delete this._tiles[key];
        return tile;
      };
      TileMap.prototype.getTileWithLogicalPos = function(pos) {
        var key = this.getKeyWithLogicalPos(pos);
        return this._tiles[key];
      };
      TileMap.prototype.isTileSlotEmptyAtLogicalPos = function(pos) {
        var slot = this.getSlotWithLogicalPos(pos);
        if (slot) {
          var tile = this.getTileWithLogicalPos(pos);
          if (!tile) return true;
        }
        return false;
      };
      TileMap.prototype.insertTilePiece = function(tilePiece) {
        var state = this.getCurrentState();
        if (state.getType() == TileMapStateBase_1.TileMapStateType.Inlay) {
          var idleState = state;
          return idleState.inlayTilePiece(this, tilePiece);
        }
        return [];
      };
      TileMap.prototype.haveEnoughSlotForTilePiece = function(tilePiece) {
        var state = this.getCurrentState();
        if (state.getType() == TileMapStateBase_1.TileMapStateType.Inlay) {
          var inlayState = state;
          return inlayState.haveEnoughSlotForTilePiece(this, tilePiece);
        }
        return false;
      };
      TileMap.prototype.addAnimationTileWithLogicalPos = function(tile, pos) {
        tile.node.setPosition(this.getPixelPosWithLogicalPos(pos));
        this.slotRoot.addChild(tile.node, 2);
      };
      TileMap.prototype.removeAnimationTile = function(tile) {
        tile.recycle();
      };
      var TileMap_1;
      __decorate([ property(cc.Node) ], TileMap.prototype, "slotRoot", void 0);
      TileMap = TileMap_1 = __decorate([ ccclass ], TileMap);
      return TileMap;
    }(EntityBase_1.default);
    exports.default = TileMap;
    cc._RF.pop();
  }, {
    "../../../../../scripts/Defines/Defines": void 0,
    "../../../../../scripts/Frameworks/AssetCache/AssetCache": void 0,
    "../../../../../scripts/Frameworks/EWS/Entity/EntityBase": void 0,
    "../../../../../scripts/Frameworks/Utils/GameMath": void 0,
    "./State/TileMapStateBase": "TileMapStateBase",
    "./State/TileMapStateCreate": "TileMapStateCreate",
    "./State/TileMapStateMachine": "TileMapStateMachine"
  } ],
  TilePiece: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f022fOimUpLPZbVMwl8zMSK", "TilePiece");
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
    exports.TilePieceInfo = void 0;
    var Defines_1 = require("../../../../../scripts/Defines/Defines");
    var EntityBase_1 = require("../../../../../scripts/Frameworks/EWS/Entity/EntityBase");
    var EntityNodePool_1 = require("../../../../../scripts/Frameworks/EWS/Entity/EntityNodePool");
    var GameMath_1 = require("../../../../../scripts/Frameworks/Utils/GameMath");
    var Tile_1 = require("../Tile/Tile");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TilePieceInfo = function() {
      function TilePieceInfo(levels, angleIndex) {
        this.levels = [];
        this.angleIndex = 0;
        this.levels = levels;
        this.angleIndex = angleIndex;
      }
      return TilePieceInfo;
    }();
    exports.TilePieceInfo = TilePieceInfo;
    var TilePiece = function(_super) {
      __extends(TilePiece, _super);
      function TilePiece() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.tile1 = null;
        _this.tile2 = null;
        _this._radius = 45;
        _this._levels = [];
        _this._angleIndex = 0;
        return _this;
      }
      TilePiece.create = function(world, info) {
        var entity = EntityNodePool_1.default.getInstance().getEntityNode(Defines_1.AssetBundleID.GameScene, "prefab/game_layer/TilePiece", "TilePiece");
        if (entity) {
          var tile = entity;
          tile.init(world, info);
          return tile;
        }
        return null;
      };
      TilePiece.prototype.getLevels = function() {
        return this._levels;
      };
      TilePiece.prototype.setLevels = function(levels) {
        if (1 == levels.length) {
          this._levels = levels;
          this.tile2.node.active = false;
          this.tile1.node.active = true;
        } else if (2 == levels.length) {
          this._levels = levels;
          this.tile1.node.active = true;
          this.tile1.setLevel(levels[0]);
          this.tile2.node.active = true;
          this.tile2.setLevel(levels[1]);
        } else {
          this._levels = [];
          this.tile1.node.active = false;
          this.tile2.node.active = false;
          console.error("Tile Piece should have 1 or 2 tiles");
        }
      };
      TilePiece.prototype.getAngleIndex = function() {
        return this._angleIndex;
      };
      TilePiece.prototype.setAngleIndex = function(index, animated) {
        void 0 === animated && (animated = false);
        if (1 == this._levels.length) {
          this._angleIndex = 0;
          this.tile1.setPosition(cc.v2(0, 0));
          this.tile2.setPosition(cc.v2(0, 0));
        } else {
          this._angleIndex = index % 6;
          var radins = GameMath_1.default.degreeToRadian(-60 * this._angleIndex + 180);
          var pos1 = cc.v2(Math.cos(radins) * this._radius, Math.sin(radins) * this._radius);
          var pos2 = pos1.mul(-1);
          this.tile1.node.stopActionByTag(1001);
          this.tile2.node.stopActionByTag(1001);
          if (animated) {
            var move1 = cc.moveTo(.2, pos1).easing(cc.easeOut(2));
            move1.setTag(1001);
            this.tile1.node.runAction(move1);
            var move2 = cc.moveTo(.2, pos2).easing(cc.easeOut(2));
            move2.setTag(1001);
            this.tile2.node.runAction(move2);
          } else {
            this.tile1.setPosition(pos1);
            this.tile2.setPosition(pos2);
          }
        }
      };
      TilePiece.prototype.init = function(world, info) {
        this.initEntity(world);
        this.setTilePieceInfo(info);
      };
      TilePiece.prototype.getTilePieceInfo = function() {
        var levels = this._levels.slice(0);
        var angleIndex = this._angleIndex;
        var result = new TilePieceInfo(levels, angleIndex);
        return result;
      };
      TilePiece.prototype.setTilePieceInfo = function(info) {
        this.setLevels(info.levels);
        this.setAngleIndex(info.angleIndex);
      };
      TilePiece.prototype.rotate = function() {
        this.setAngleIndex(this.getAngleIndex() + 1, true);
      };
      TilePiece.prototype.getTiles = function() {
        var result = [];
        if (1 == this._levels.length) result.push(this.tile1); else if (2 == this._levels.length) {
          result.push(this.tile1);
          result.push(this.tile2);
        }
        return result;
      };
      __decorate([ property(Tile_1.default) ], TilePiece.prototype, "tile1", void 0);
      __decorate([ property(Tile_1.default) ], TilePiece.prototype, "tile2", void 0);
      TilePiece = __decorate([ ccclass ], TilePiece);
      return TilePiece;
    }(EntityBase_1.default);
    exports.default = TilePiece;
    cc._RF.pop();
  }, {
    "../../../../../scripts/Defines/Defines": void 0,
    "../../../../../scripts/Frameworks/EWS/Entity/EntityBase": void 0,
    "../../../../../scripts/Frameworks/EWS/Entity/EntityNodePool": void 0,
    "../../../../../scripts/Frameworks/Utils/GameMath": void 0,
    "../Tile/Tile": "Tile"
  } ],
  TileSlot: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd7662sZodAT6OClRY7tgnE", "TileSlot");
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
    var Defines_1 = require("../../../../../scripts/Defines/Defines");
    var EntityNodePool_1 = require("../../../../../scripts/Frameworks/EWS/Entity/EntityNodePool");
    var TileBase_1 = require("./TileBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TileSlot = function(_super) {
      __extends(TileSlot, _super);
      function TileSlot() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      TileSlot.create = function(world) {
        var entity = EntityNodePool_1.default.getInstance().getEntityNode(Defines_1.AssetBundleID.GameScene, "prefab/game_layer/TileSlot", "TileSlot");
        if (entity) {
          var tileSlot = entity;
          tileSlot.init(world);
          return tileSlot;
        }
        return null;
      };
      TileSlot.prototype.init = function(world) {
        this.initWithType(world, TileBase_1.TileType.Slot);
      };
      TileSlot = __decorate([ ccclass ], TileSlot);
      return TileSlot;
    }(TileBase_1.default);
    exports.default = TileSlot;
    cc._RF.pop();
  }, {
    "../../../../../scripts/Defines/Defines": void 0,
    "../../../../../scripts/Frameworks/EWS/Entity/EntityNodePool": void 0,
    "./TileBase": "TileBase"
  } ],
  Tile: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13b465qR9VD2rs13kxyDrnT", "Tile");
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
    var Defines_1 = require("../../../../../scripts/Defines/Defines");
    var AssetCache_1 = require("../../../../../scripts/Frameworks/AssetCache/AssetCache");
    var EntityNodePool_1 = require("../../../../../scripts/Frameworks/EWS/Entity/EntityNodePool");
    var TileBase_1 = require("./TileBase");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Tile = function(_super) {
      __extends(Tile, _super);
      function Tile() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.tile = null;
        _this._level = Tile_1.MinLevel;
        return _this;
      }
      Tile_1 = Tile;
      Tile.create = function(world, level) {
        var entity = EntityNodePool_1.default.getInstance().getEntityNode(Defines_1.AssetBundleID.GameScene, "prefab/game_layer/Tile", "Tile");
        if (entity) {
          var tile = entity;
          tile.initWithLevel(world, level);
          return tile;
        }
        return null;
      };
      Tile.prototype.start = function() {};
      Tile.prototype.getLevel = function() {
        return this._level;
      };
      Tile.prototype.setLevel = function(level) {
        this._level = Math.max(Tile_1.MinLevel, Math.min(level, Tile_1.MaxLevel));
        this.label.string = this._level.toString();
        var frameName = "texture/game_layer/kuaizi_" + this._level;
        var spriteFrame = AssetCache_1.default.getInstance().getAssetSync(Defines_1.AssetBundleID.GameScene, frameName, cc.SpriteFrame);
        spriteFrame && (this.tile.spriteFrame = spriteFrame);
      };
      Tile.prototype.initWithLevel = function(world, level) {
        this.initWithType(world, TileBase_1.TileType.Tile);
        this.setLevel(level);
      };
      Tile.prototype.onRecycle = function() {
        _super.prototype.onRecycle.call(this);
        this.node.rotation = 0;
        this.node.scale = 1;
        this.node.anchorX = .5;
        this.node.anchorY = .5;
        this.node.opacity = 255;
        this.node.color = cc.color(255, 255, 255, 255);
      };
      var Tile_1;
      Tile.MaxLevel = 7;
      Tile.MinLevel = 1;
      __decorate([ property(cc.Label) ], Tile.prototype, "label", void 0);
      __decorate([ property(cc.Sprite) ], Tile.prototype, "tile", void 0);
      Tile = Tile_1 = __decorate([ ccclass ], Tile);
      return Tile;
    }(TileBase_1.default);
    exports.default = Tile;
    cc._RF.pop();
  }, {
    "../../../../../scripts/Defines/Defines": void 0,
    "../../../../../scripts/Frameworks/AssetCache/AssetCache": void 0,
    "../../../../../scripts/Frameworks/EWS/Entity/EntityNodePool": void 0,
    "./TileBase": "TileBase"
  } ]
}, {}, [ "GameDefines", "MegerPath", "GameLayer", "GameLayerStateBase", "GameLayerStateCreate", "GameLayerStateGameOver", "GameLayerStateInlay", "GameLayerStateMachine", "GameLayerStateMatch", "GameLayerStateMeger", "GameLayerStatePool", "TileMapStateBase", "TileMapStateCheckMatch", "TileMapStateCreate", "TileMapStateGameOver", "TileMapStateInlay", "TileMapStateMachine", "TileMapStateMeger", "TileMapStatePool", "TileMap", "TilePiece", "Tile", "TileBase", "TileSlot", "GameScene", "GameSceneStateBase", "GameSceneStateCreate", "GameSceneStateMachine", "GameSceneStateOver", "GameSceneStatePlaying", "GameSceneStatePool", "GameOverLayer", "PauseLayer" ]);
//# sourceMappingURL=index.js.map
