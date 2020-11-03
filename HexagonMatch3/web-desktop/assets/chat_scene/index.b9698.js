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
  ChatScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "ChatScene");
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
    var HttpWrapperWeb_1 = require("../../../scripts/Frameworks/Network/Http/HttpWrapper/Web/HttpWrapperWeb");
    var PlayerInfo_1 = require("../../../scripts/Frameworks/PlayerInfo/PlayerInfo");
    var SceneBase_1 = require("../../../scripts/Frameworks/SceneDirector/SceneBase");
    var LogicBase_1 = require("./Logic/Base/LogicBase");
    var LogicCenter_1 = require("./LogicCenter/LogicCenter");
    var proto_1 = require("./SocketCenter/Proto/proto");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ChatScene = function(_super) {
      __extends(ChatScene, _super);
      function ChatScene() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      ChatScene.prototype.getSceneName = function() {
        return Defines_1.SceneName.ChatScene;
      };
      ChatScene.prototype.onSceneLoad = function() {
        PlayerInfo_1.default.getInstance().setUserID("player_10001");
      };
      ChatScene.prototype.onSceneEnable = function() {};
      ChatScene.prototype.onSceneEnter = function(param) {};
      ChatScene.prototype.onSceneStart = function() {};
      ChatScene.prototype.onSceneUpdate = function(dt) {};
      ChatScene.prototype.onSceneExit = function() {};
      ChatScene.prototype.onSceneDisable = function() {};
      ChatScene.prototype.onSceneDestroy = function() {};
      ChatScene.prototype.onSocketConnectBtn = function(event) {
        this.login();
      };
      ChatScene.prototype.onSocketSendBtn = function(event) {
        this.sendWord("Hello Everyone");
      };
      ChatScene.prototype.onSocketCloseBtn = function(event) {
        this.logout();
      };
      ChatScene.prototype.onHttpSendBtn = function(event) {
        var http = HttpWrapperWeb_1.default.create("http://10.12.131.39:3000");
        http.connect();
        http.send("test");
      };
      ChatScene.prototype.getChatLogic = function() {
        return LogicCenter_1.default.getInstance().getLogic(LogicBase_1.LogicName.Chat);
      };
      ChatScene.prototype.login = function() {
        var logic = this.getChatLogic();
        if (null == logic) return;
        logic.run();
      };
      ChatScene.prototype.sendWord = function(word, receuverID) {
        void 0 === receuverID && (receuverID = "");
        var logic = this.getChatLogic();
        if (null == logic) return;
        var msg = proto_1.Chat.MessageRequest.create();
        msg.senderId = PlayerInfo_1.default.getInstance().getUserID();
        msg.receiverId = receuverID;
        msg.message = proto_1.Chat.Message.create();
        msg.message.word = word;
        var buffer = proto_1.Chat.MessageRequest.encode(msg).finish();
        logic.sendMessage({
          cmd: proto_1.Chat.C2S_CMD.Message,
          data: buffer
        });
      };
      ChatScene.prototype.logout = function() {
        var logic = this.getChatLogic();
        if (null == logic) return;
        logic.stop();
      };
      ChatScene = __decorate([ ccclass ], ChatScene);
      return ChatScene;
    }(SceneBase_1.default);
    exports.default = ChatScene;
    cc._RF.pop();
  }, {
    "../../../scripts/Defines/Defines": void 0,
    "../../../scripts/Frameworks/Network/Http/HttpWrapper/Web/HttpWrapperWeb": void 0,
    "../../../scripts/Frameworks/PlayerInfo/PlayerInfo": void 0,
    "../../../scripts/Frameworks/SceneDirector/SceneBase": void 0,
    "./Logic/Base/LogicBase": "LogicBase",
    "./LogicCenter/LogicCenter": "LogicCenter",
    "./SocketCenter/Proto/proto": "proto"
  } ],
  LogicBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2d808A51CdEZJvDUAHRV9hQ", "LogicBase");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.LogicName = void 0;
    var LogicName;
    (function(LogicName) {
      LogicName["None"] = "None";
      LogicName["Chat"] = "Chat";
    })(LogicName = exports.LogicName || (exports.LogicName = {}));
    var LogicBase = function() {
      function LogicBase() {
        this._name = LogicName.None;
      }
      LogicBase.prototype.initBase = function(name) {
        this._name = name;
      };
      return LogicBase;
    }();
    exports.default = LogicBase;
    cc._RF.pop();
  }, {} ],
  LogicCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c984rJ/h5C364zR47o1roK", "LogicCenter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LogicFactory_1 = require("./Logic/LogicFactory");
    var LogicCenter = function() {
      function LogicCenter() {
        this._logicDict = {};
      }
      LogicCenter.getInstance = function() {
        null == this._instance && (this._instance = new LogicCenter());
        return this._instance;
      };
      LogicCenter.prototype.getLogic = function(name) {
        var logic = this._logicDict[name];
        if (null == logic) {
          logic = LogicFactory_1.default.createLogic(name);
          logic && (this._logicDict[name] = logic);
        }
        return logic;
      };
      LogicCenter._instance = null;
      return LogicCenter;
    }();
    exports.default = LogicCenter;
    cc._RF.pop();
  }, {
    "./Logic/LogicFactory": "LogicFactory"
  } ],
  LogicChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4b210D0bChEaZ1/CySQVDmr", "LogicChat");
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
    var SocketDispatcherBase_1 = require("../../../../../../scripts/Frameworks/Network/Socket/SocketDispatcher/Base/SocketDispatcherBase");
    var PlayerInfo_1 = require("../../../../../../scripts/Frameworks/PlayerInfo/PlayerInfo");
    var LogicBase_1 = require("../../../Logic/Base/LogicBase");
    var proto_1 = require("../../../SocketCenter/Proto/proto");
    var SocketCenter_1 = require("../../../SocketCenter/SocketCenter");
    var LogicChatState;
    (function(LogicChatState) {
      LogicChatState[LogicChatState["Stopped"] = 0] = "Stopped";
      LogicChatState[LogicChatState["Running"] = 1] = "Running";
    })(LogicChatState || (LogicChatState = {}));
    var LogicChat = function(_super) {
      __extends(LogicChat, _super);
      function LogicChat() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._state = LogicChatState.Stopped;
        return _this;
      }
      LogicChat.create = function() {
        var instance = new LogicChat();
        instance.init();
        return instance;
      };
      LogicChat.prototype.init = function() {
        _super.prototype.initBase.call(this, LogicBase_1.LogicName.Chat);
        var dispatcher = SocketCenter_1.default.getInstance().getDispatcher(SocketDispatcherBase_1.SocketName.Chat);
        if (dispatcher) {
          dispatcher.registListener(proto_1.Login.S2C_CMD.Open, this.onOpen, this);
          dispatcher.registListener(proto_1.Login.S2C_CMD.Login, this.onLogin, this);
          dispatcher.registListener(proto_1.Chat.S2C_CMD.Message, this.onMessage, this);
          dispatcher.registListener(proto_1.Login.S2C_CMD.Error, this.onError, this);
          dispatcher.registListener(proto_1.Login.S2C_CMD.Closed, this.onClosed, this);
        }
      };
      LogicChat.prototype.getSocketDispatcher = function() {
        return SocketCenter_1.default.getInstance().getDispatcher(SocketDispatcherBase_1.SocketName.Chat);
      };
      LogicChat.prototype.onOpen = function(event) {
        var req = proto_1.Login.LoginRequest.create();
        req.userId = PlayerInfo_1.default.getInstance().getUserID();
        var reqBuf = proto_1.Login.LoginRequest.encode(req).finish();
        var dispatcher = SocketCenter_1.default.getInstance().getDispatcher(SocketDispatcherBase_1.SocketName.Chat);
        dispatcher && dispatcher.sendMessage({
          cmd: proto_1.Login.C2S_CMD.Login,
          data: reqBuf
        });
      };
      LogicChat.prototype.onError = function(event) {
        this._state = LogicChatState.Stopped;
      };
      LogicChat.prototype.onClosed = function(event) {
        this._state = LogicChatState.Stopped;
      };
      LogicChat.prototype.onLogin = function(event) {
        var buffer = event.getUserData();
        var resp = proto_1.Login.LoginRespone.decode(buffer);
        if (resp.result == proto_1.Login.LoginErrorCode.Succeed) {
          this._state = LogicChatState.Running;
          console.log("LogicChat.onLogin Succeed");
        } else console.error("LogicChat.onLogin Failed:", resp.result);
      };
      LogicChat.prototype.onMessage = function(event) {
        var buffer = event.getUserData();
        var message = proto_1.Chat.MessageRespone.decode(buffer);
        console.log("LogicChat.onMessage", message);
      };
      LogicChat.prototype.run = function() {
        var dispatcher = this.getSocketDispatcher();
        dispatcher.connect();
      };
      LogicChat.prototype.sendMessage = function(msg) {
        if (this._state != LogicChatState.Running) return;
        var dispatcher = this.getSocketDispatcher();
        dispatcher.sendMessage(msg);
      };
      LogicChat.prototype.stop = function() {
        this._state = LogicChatState.Stopped;
        var dispatcher = this.getSocketDispatcher();
        dispatcher.close();
      };
      return LogicChat;
    }(LogicBase_1.default);
    exports.default = LogicChat;
    cc._RF.pop();
  }, {
    "../../../../../../scripts/Frameworks/Network/Socket/SocketDispatcher/Base/SocketDispatcherBase": void 0,
    "../../../../../../scripts/Frameworks/PlayerInfo/PlayerInfo": void 0,
    "../../../Logic/Base/LogicBase": "LogicBase",
    "../../../SocketCenter/Proto/proto": "proto",
    "../../../SocketCenter/SocketCenter": "SocketCenter"
  } ],
  LogicFactory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7f331corCFLELViZQhRu17o", "LogicFactory");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LogicBase_1 = require("../../Logic/Base/LogicBase");
    var LogicChat_1 = require("./Chat/LogicChat");
    var LogicFactory = function() {
      function LogicFactory() {}
      LogicFactory.createLogic = function(name) {
        switch (name) {
         case LogicBase_1.LogicName.Chat:
          return LogicChat_1.default.create();
        }
        return null;
      };
      return LogicFactory;
    }();
    exports.default = LogicFactory;
    cc._RF.pop();
  }, {
    "../../Logic/Base/LogicBase": "LogicBase",
    "./Chat/LogicChat": "LogicChat"
  } ],
  SocketCenter: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "95ab4NlnlZKWY1YD9ofahtg", "SocketCenter");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SocketDsipatcherFactory_1 = require("./Dispatchers/SocketDsipatcherFactory");
    var SocketCenter = function() {
      function SocketCenter() {
        this._dispatcherDict = {};
      }
      SocketCenter.getInstance = function() {
        null == this._instance && (this._instance = new SocketCenter());
        return this._instance;
      };
      SocketCenter.prototype.getDispatcher = function(name) {
        var dispatcher = this._dispatcherDict[name];
        if (null == dispatcher) {
          dispatcher = SocketDsipatcherFactory_1.default.createSocketDispatcher(name);
          dispatcher && (this._dispatcherDict[name] = dispatcher);
        }
        return dispatcher;
      };
      SocketCenter._instance = null;
      return SocketCenter;
    }();
    exports.default = SocketCenter;
    cc._RF.pop();
  }, {
    "./Dispatchers/SocketDsipatcherFactory": "SocketDsipatcherFactory"
  } ],
  SocketDispatcherBattle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a244b+xse9AaKmJDrxWWO+u", "SocketDispatcherBattle");
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
    var SocketDispatcherBase_1 = require("../../../../../../scripts/Frameworks/Network/Socket/SocketDispatcher/Base/SocketDispatcherBase");
    var SocketFactory_1 = require("../../../../../../scripts/Frameworks/Network/Socket/SocketWrapper/SocketFactory");
    var SocketDispatcherCommon_1 = require("../Common/SocketDispatcherCommon");
    var SocketHeartBeatBattle_1 = require("./SocketHeartBeatBattle");
    var SocketMessagePhraserBattle_1 = require("./SocketMessagePhraserBattle");
    var SocketDispatcherBattle = function(_super) {
      __extends(SocketDispatcherBattle, _super);
      function SocketDispatcherBattle() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SocketDispatcherBattle.create = function() {
        var instance = new SocketDispatcherBattle();
        instance.init(SocketDispatcherBase_1.SocketName.Battle, SocketFactory_1.default.createSocketWrapper("ws://10.12.131.39:8182", instance), SocketHeartBeatBattle_1.default.create(), SocketMessagePhraserBattle_1.default.create());
        return instance;
      };
      SocketDispatcherBattle.prototype.init = function(name, socket, heartBeat, messagePhraser) {
        _super.prototype.initCommon.call(this, name, socket, heartBeat, messagePhraser);
      };
      return SocketDispatcherBattle;
    }(SocketDispatcherCommon_1.default);
    exports.default = SocketDispatcherBattle;
    cc._RF.pop();
  }, {
    "../../../../../../scripts/Frameworks/Network/Socket/SocketDispatcher/Base/SocketDispatcherBase": void 0,
    "../../../../../../scripts/Frameworks/Network/Socket/SocketWrapper/SocketFactory": void 0,
    "../Common/SocketDispatcherCommon": "SocketDispatcherCommon",
    "./SocketHeartBeatBattle": "SocketHeartBeatBattle",
    "./SocketMessagePhraserBattle": "SocketMessagePhraserBattle"
  } ],
  SocketDispatcherChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "536811po51J2LfZ0EkdoLjN", "SocketDispatcherChat");
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
    var SocketDispatcherBase_1 = require("../../../../../../scripts/Frameworks/Network/Socket/SocketDispatcher/Base/SocketDispatcherBase");
    var SocketFactory_1 = require("../../../../../../scripts/Frameworks/Network/Socket/SocketWrapper/SocketFactory");
    var SocketDispatcherCommon_1 = require("../Common/SocketDispatcherCommon");
    var SocketHeartBeatChat_1 = require("./SocketHeartBeatChat");
    var SocketMessagePhraserChat_1 = require("./SocketMessagePhraserChat");
    var SocketDispatcherChat = function(_super) {
      __extends(SocketDispatcherChat, _super);
      function SocketDispatcherChat() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SocketDispatcherChat.create = function() {
        var instance = new SocketDispatcherChat();
        instance.init(SocketDispatcherBase_1.SocketName.Chat, SocketFactory_1.default.createSocketWrapper("ws://10.12.131.39:8181", instance), SocketHeartBeatChat_1.default.create(), SocketMessagePhraserChat_1.default.create());
        return instance;
      };
      SocketDispatcherChat.prototype.init = function(name, socket, heartBeat, messagePhraser) {
        _super.prototype.initCommon.call(this, name, socket, heartBeat, messagePhraser);
      };
      return SocketDispatcherChat;
    }(SocketDispatcherCommon_1.default);
    exports.default = SocketDispatcherChat;
    cc._RF.pop();
  }, {
    "../../../../../../scripts/Frameworks/Network/Socket/SocketDispatcher/Base/SocketDispatcherBase": void 0,
    "../../../../../../scripts/Frameworks/Network/Socket/SocketWrapper/SocketFactory": void 0,
    "../Common/SocketDispatcherCommon": "SocketDispatcherCommon",
    "./SocketHeartBeatChat": "SocketHeartBeatChat",
    "./SocketMessagePhraserChat": "SocketMessagePhraserChat"
  } ],
  SocketDispatcherCommon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d33efIWBy5NYqkLPqObNSEF", "SocketDispatcherCommon");
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
    var SocketDispatcherBase_1 = require("../../../../../../scripts/Frameworks/Network/Socket/SocketDispatcher/Base/SocketDispatcherBase");
    var proto_1 = require("../../Proto/proto");
    var SocketDispatcherCommon = function(_super) {
      __extends(SocketDispatcherCommon, _super);
      function SocketDispatcherCommon() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SocketDispatcherCommon.prototype.initCommon = function(name, socket, heartBeat, messagePhraser) {
        _super.prototype.initBase.call(this, name, socket, heartBeat, messagePhraser);
      };
      SocketDispatcherCommon.prototype.onOpen = function(msg) {
        console.log("SocketDispatcherChat.onOpen");
        this.dispatchEvent(msg.cmd, msg.data);
      };
      SocketDispatcherCommon.prototype.onMessage = function(msg) {
        if (msg.cmd == proto_1.Login.S2C_CMD.HeartBeat) return;
        console.log("SocketDispatcherChat.onMessage", msg.cmd);
        this.dispatchEvent(msg.cmd, msg.data);
      };
      SocketDispatcherCommon.prototype.onError = function(msg) {
        console.log("SocketDispatcherChat.onError");
        this.dispatchEvent(msg.cmd, msg.data);
      };
      SocketDispatcherCommon.prototype.onClosed = function(msg) {
        console.log("SocketDispatcherChat.onClosed");
        this.dispatchEvent(msg.cmd, msg.data);
      };
      SocketDispatcherCommon.prototype.sendMessage = function(msg) {
        msg.cmd != proto_1.Login.C2S_CMD.HeartBeat && console.log("SocketDispatcherChat.sendMessage", msg.cmd);
        _super.prototype.sendMessage.call(this, msg);
      };
      return SocketDispatcherCommon;
    }(SocketDispatcherBase_1.default);
    exports.default = SocketDispatcherCommon;
    cc._RF.pop();
  }, {
    "../../../../../../scripts/Frameworks/Network/Socket/SocketDispatcher/Base/SocketDispatcherBase": void 0,
    "../../Proto/proto": "proto"
  } ],
  SocketDsipatcherFactory: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1958xNaE9KHJwHRIniuZ2K", "SocketDsipatcherFactory");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SocketDispatcherBase_1 = require("../../../../../scripts/Frameworks/Network/Socket/SocketDispatcher/Base/SocketDispatcherBase");
    var SocketDispatcherBattle_1 = require("./Battle/SocketDispatcherBattle");
    var SocketDispatcherChat_1 = require("./Chat/SocketDispatcherChat");
    var SocketDispatcherFactory = function() {
      function SocketDispatcherFactory() {}
      SocketDispatcherFactory.createSocketDispatcher = function(name) {
        switch (name) {
         case SocketDispatcherBase_1.SocketName.Battle:
          return SocketDispatcherBattle_1.default.create();

         case SocketDispatcherBase_1.SocketName.Chat:
          return SocketDispatcherChat_1.default.create();
        }
        return null;
      };
      return SocketDispatcherFactory;
    }();
    exports.default = SocketDispatcherFactory;
    cc._RF.pop();
  }, {
    "../../../../../scripts/Frameworks/Network/Socket/SocketDispatcher/Base/SocketDispatcherBase": void 0,
    "./Battle/SocketDispatcherBattle": "SocketDispatcherBattle",
    "./Chat/SocketDispatcherChat": "SocketDispatcherChat"
  } ],
  SocketHeartBeatBattle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67408OuxNZDH7TeqcNzucDU", "SocketHeartBeatBattle");
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
    var SocketHeartBeatCommon_1 = require("../Common/SocketHeartBeatCommon");
    var SocketHeartBeatBattle = function(_super) {
      __extends(SocketHeartBeatBattle, _super);
      function SocketHeartBeatBattle() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SocketHeartBeatBattle.create = function() {
        var instance = new SocketHeartBeatBattle();
        instance.init();
        return instance;
      };
      SocketHeartBeatBattle.prototype.init = function() {
        _super.prototype.initCommon.call(this);
      };
      return SocketHeartBeatBattle;
    }(SocketHeartBeatCommon_1.default);
    exports.default = SocketHeartBeatBattle;
    cc._RF.pop();
  }, {
    "../Common/SocketHeartBeatCommon": "SocketHeartBeatCommon"
  } ],
  SocketHeartBeatChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "544893+tsZB/Z30oUzyFp7V", "SocketHeartBeatChat");
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
    var SocketHeartBeatCommon_1 = require("../Common/SocketHeartBeatCommon");
    var SocketHeartBeatChat = function(_super) {
      __extends(SocketHeartBeatChat, _super);
      function SocketHeartBeatChat() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SocketHeartBeatChat.create = function() {
        var instance = new SocketHeartBeatChat();
        instance.init();
        return instance;
      };
      SocketHeartBeatChat.prototype.init = function() {
        _super.prototype.initCommon.call(this);
      };
      return SocketHeartBeatChat;
    }(SocketHeartBeatCommon_1.default);
    exports.default = SocketHeartBeatChat;
    cc._RF.pop();
  }, {
    "../Common/SocketHeartBeatCommon": "SocketHeartBeatCommon"
  } ],
  SocketHeartBeatCommon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1633CevSFK+a0AHTXXlMzR", "SocketHeartBeatCommon");
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
    var SocketHeartBeatBase_1 = require("../../../../../../scripts/Frameworks/Network/Socket/SocketHeartBeat/Base/SocketHeartBeatBase");
    var PlayerInfo_1 = require("../../../../../../scripts/Frameworks/PlayerInfo/PlayerInfo");
    var proto_1 = require("../../Proto/proto");
    var SocketHeartBeatCommon = function(_super) {
      __extends(SocketHeartBeatCommon, _super);
      function SocketHeartBeatCommon() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SocketHeartBeatCommon.prototype.initCommon = function() {
        _super.prototype.initBase.call(this);
      };
      SocketHeartBeatCommon.prototype.getRequestData = function() {
        var msg = proto_1.Login.HeartBeatRequest.create();
        msg.userId = PlayerInfo_1.default.getInstance().getUserID();
        var buffer = proto_1.Login.HeartBeatRequest.encode(msg).finish();
        return {
          cmd: proto_1.Login.C2S_CMD.HeartBeat,
          data: buffer
        };
      };
      SocketHeartBeatCommon.prototype.onResponeMessage = function(msg) {
        msg.cmd == proto_1.Login.S2C_CMD.HeartBeat && this.onHeartRespone();
      };
      return SocketHeartBeatCommon;
    }(SocketHeartBeatBase_1.default);
    exports.default = SocketHeartBeatCommon;
    cc._RF.pop();
  }, {
    "../../../../../../scripts/Frameworks/Network/Socket/SocketHeartBeat/Base/SocketHeartBeatBase": void 0,
    "../../../../../../scripts/Frameworks/PlayerInfo/PlayerInfo": void 0,
    "../../Proto/proto": "proto"
  } ],
  SocketMessagePhraserBattle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "24bed7KNWdHW7bMghj03mN4", "SocketMessagePhraserBattle");
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
    var SocketMessagePhraserCommon_1 = require("../Common/SocketMessagePhraserCommon");
    var SocketMessagePhraserBattle = function(_super) {
      __extends(SocketMessagePhraserBattle, _super);
      function SocketMessagePhraserBattle() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SocketMessagePhraserBattle.create = function() {
        var instance = new SocketMessagePhraserBattle();
        instance.init();
        return instance;
      };
      SocketMessagePhraserBattle.prototype.init = function() {
        _super.prototype.initCommon.call(this);
      };
      return SocketMessagePhraserBattle;
    }(SocketMessagePhraserCommon_1.default);
    exports.default = SocketMessagePhraserBattle;
    cc._RF.pop();
  }, {
    "../Common/SocketMessagePhraserCommon": "SocketMessagePhraserCommon"
  } ],
  SocketMessagePhraserChat: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6caebKO+lJPtIZnp4rcMkIM", "SocketMessagePhraserChat");
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
    var SocketMessagePhraserCommon_1 = require("../Common/SocketMessagePhraserCommon");
    var SocketMessagePhraserChat = function(_super) {
      __extends(SocketMessagePhraserChat, _super);
      function SocketMessagePhraserChat() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SocketMessagePhraserChat.create = function() {
        var instance = new SocketMessagePhraserChat();
        instance.init();
        return instance;
      };
      SocketMessagePhraserChat.prototype.init = function() {
        _super.prototype.initCommon.call(this);
      };
      return SocketMessagePhraserChat;
    }(SocketMessagePhraserCommon_1.default);
    exports.default = SocketMessagePhraserChat;
    cc._RF.pop();
  }, {
    "../Common/SocketMessagePhraserCommon": "SocketMessagePhraserCommon"
  } ],
  SocketMessagePhraserCommon: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f5de5FB4rhLSLYwEBBBqWXZ", "SocketMessagePhraserCommon");
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
    var SocketMessagePhraserBase_1 = require("../../../../../../scripts/Frameworks/Network/Socket/SocketMessagePhraser/Base/SocketMessagePhraserBase");
    var proto_1 = require("../../Proto/proto");
    var CMD_LENGTH = 4;
    var SocketMessagePhraserCommon = function(_super) {
      __extends(SocketMessagePhraserCommon, _super);
      function SocketMessagePhraserCommon() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SocketMessagePhraserCommon.prototype.initCommon = function() {
        _super.prototype.initBase.call(this);
      };
      SocketMessagePhraserCommon.prototype.openInfoToMsg = function(openInfo) {
        var msg = {
          cmd: proto_1.Login.S2C_CMD.Open,
          data: openInfo
        };
        return msg;
      };
      SocketMessagePhraserCommon.prototype.bufferToMsg = function(recvBuf) {
        var u8Array = new Uint8Array(recvBuf);
        var recvView = new DataView(u8Array.buffer);
        var cmd = recvView.getInt32(0);
        var buffer = recvBuf.slice(CMD_LENGTH, recvBuf.byteLength);
        var data = new Uint8Array(buffer);
        var msg = {
          cmd: cmd,
          data: data
        };
        return msg;
      };
      SocketMessagePhraserCommon.prototype.msgToBuffer = function(msg) {
        var dataLength = msg.data.byteLength + CMD_LENGTH;
        var binary = new Uint8Array(dataLength);
        binary.set(msg.data, CMD_LENGTH);
        var dataView = new DataView(binary.buffer);
        dataView.setUint32(0, msg.cmd);
        return dataView.buffer;
      };
      SocketMessagePhraserCommon.prototype.errorInfoToMsg = function(errorInfo) {
        var msg = {
          cmd: proto_1.Login.S2C_CMD.Error,
          data: errorInfo
        };
        return msg;
      };
      SocketMessagePhraserCommon.prototype.closedInfoToMsg = function(closedInfo) {
        var msg = {
          cmd: proto_1.Login.S2C_CMD.Closed,
          data: closedInfo
        };
        return msg;
      };
      return SocketMessagePhraserCommon;
    }(SocketMessagePhraserBase_1.default);
    exports.default = SocketMessagePhraserCommon;
    cc._RF.pop();
  }, {
    "../../../../../../scripts/Frameworks/Network/Socket/SocketMessagePhraser/Base/SocketMessagePhraserBase": void 0,
    "../../Proto/proto": "proto"
  } ],
  proto: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "dd200LcxI5OF4FzeH1zESym", "proto");
    "use strict";
    var $protobuf = require("protobufjs/minimal");
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    $root.Battle = function() {
      var Battle = {};
      Battle.C2S_CMD = function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[10001] = "Test"] = 10001;
        return values;
      }();
      Battle.S2C_CMD = function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[20001] = "Test"] = 20001;
        return values;
      }();
      Battle.Person = function() {
        function Person(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        Person.prototype.name = "";
        Person.prototype.id = 0;
        Person.prototype.email = "";
        Person.create = function create(properties) {
          return new Person(properties);
        };
        Person.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.name && message.hasOwnProperty("name") && writer.uint32(10).string(message.name);
          null != message.id && message.hasOwnProperty("id") && writer.uint32(16).int32(message.id);
          null != message.email && message.hasOwnProperty("email") && writer.uint32(26).string(message.email);
          return writer;
        };
        Person.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Person.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.Battle.Person();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.name = reader.string();
              break;

             case 2:
              message.id = reader.int32();
              break;

             case 3:
              message.email = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        Person.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        Person.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.name && message.hasOwnProperty("name") && !$util.isString(message.name)) return "name: string expected";
          if (null != message.id && message.hasOwnProperty("id") && !$util.isInteger(message.id)) return "id: integer expected";
          if (null != message.email && message.hasOwnProperty("email") && !$util.isString(message.email)) return "email: string expected";
          return null;
        };
        Person.fromObject = function fromObject(object) {
          if (object instanceof $root.Battle.Person) return object;
          var message = new $root.Battle.Person();
          null != object.name && (message.name = String(object.name));
          null != object.id && (message.id = 0 | object.id);
          null != object.email && (message.email = String(object.email));
          return message;
        };
        Person.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.name = "";
            object.id = 0;
            object.email = "";
          }
          null != message.name && message.hasOwnProperty("name") && (object.name = message.name);
          null != message.id && message.hasOwnProperty("id") && (object.id = message.id);
          null != message.email && message.hasOwnProperty("email") && (object.email = message.email);
          return object;
        };
        Person.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Person;
      }();
      return Battle;
    }();
    $root.Chat = function() {
      var Chat = {};
      Chat.C2S_CMD = function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[10001] = "Message"] = 10001;
        return values;
      }();
      Chat.S2C_CMD = function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[20001] = "Message"] = 20001;
        return values;
      }();
      Chat.Message = function() {
        function Message(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        Message.prototype.word = "";
        Message.prototype.timestamp = 0;
        Message.create = function create(properties) {
          return new Message(properties);
        };
        Message.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.word && message.hasOwnProperty("word") && writer.uint32(10).string(message.word);
          null != message.timestamp && message.hasOwnProperty("timestamp") && writer.uint32(16).int32(message.timestamp);
          return writer;
        };
        Message.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        Message.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.Chat.Message();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.word = reader.string();
              break;

             case 2:
              message.timestamp = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        Message.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        Message.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.word && message.hasOwnProperty("word") && !$util.isString(message.word)) return "word: string expected";
          if (null != message.timestamp && message.hasOwnProperty("timestamp") && !$util.isInteger(message.timestamp)) return "timestamp: integer expected";
          return null;
        };
        Message.fromObject = function fromObject(object) {
          if (object instanceof $root.Chat.Message) return object;
          var message = new $root.Chat.Message();
          null != object.word && (message.word = String(object.word));
          null != object.timestamp && (message.timestamp = 0 | object.timestamp);
          return message;
        };
        Message.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.word = "";
            object.timestamp = 0;
          }
          null != message.word && message.hasOwnProperty("word") && (object.word = message.word);
          null != message.timestamp && message.hasOwnProperty("timestamp") && (object.timestamp = message.timestamp);
          return object;
        };
        Message.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return Message;
      }();
      Chat.MessageRequest = function() {
        function MessageRequest(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        MessageRequest.prototype.senderId = "";
        MessageRequest.prototype.receiverId = "";
        MessageRequest.prototype.message = null;
        MessageRequest.create = function create(properties) {
          return new MessageRequest(properties);
        };
        MessageRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.senderId && message.hasOwnProperty("senderId") && writer.uint32(10).string(message.senderId);
          null != message.receiverId && message.hasOwnProperty("receiverId") && writer.uint32(18).string(message.receiverId);
          null != message.message && message.hasOwnProperty("message") && $root.Chat.Message.encode(message.message, writer.uint32(26).fork()).ldelim();
          return writer;
        };
        MessageRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        MessageRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.Chat.MessageRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.senderId = reader.string();
              break;

             case 2:
              message.receiverId = reader.string();
              break;

             case 3:
              message.message = $root.Chat.Message.decode(reader, reader.uint32());
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        MessageRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        MessageRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.senderId && message.hasOwnProperty("senderId") && !$util.isString(message.senderId)) return "senderId: string expected";
          if (null != message.receiverId && message.hasOwnProperty("receiverId") && !$util.isString(message.receiverId)) return "receiverId: string expected";
          if (null != message.message && message.hasOwnProperty("message")) {
            var error = $root.Chat.Message.verify(message.message);
            if (error) return "message." + error;
          }
          return null;
        };
        MessageRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.Chat.MessageRequest) return object;
          var message = new $root.Chat.MessageRequest();
          null != object.senderId && (message.senderId = String(object.senderId));
          null != object.receiverId && (message.receiverId = String(object.receiverId));
          if (null != object.message) {
            if ("object" !== typeof object.message) throw TypeError(".Chat.MessageRequest.message: object expected");
            message.message = $root.Chat.Message.fromObject(object.message);
          }
          return message;
        };
        MessageRequest.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.senderId = "";
            object.receiverId = "";
            object.message = null;
          }
          null != message.senderId && message.hasOwnProperty("senderId") && (object.senderId = message.senderId);
          null != message.receiverId && message.hasOwnProperty("receiverId") && (object.receiverId = message.receiverId);
          null != message.message && message.hasOwnProperty("message") && (object.message = $root.Chat.Message.toObject(message.message, options));
          return object;
        };
        MessageRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MessageRequest;
      }();
      Chat.MessageErrorCode = function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Succeed"] = 0;
        values[valuesById[1] = "Failed"] = 1;
        return values;
      }();
      Chat.MessageRespone = function() {
        function MessageRespone(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        MessageRespone.prototype.senderId = "";
        MessageRespone.prototype.receiverId = "";
        MessageRespone.prototype.message = null;
        MessageRespone.prototype.result = 0;
        MessageRespone.create = function create(properties) {
          return new MessageRespone(properties);
        };
        MessageRespone.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.senderId && message.hasOwnProperty("senderId") && writer.uint32(10).string(message.senderId);
          null != message.receiverId && message.hasOwnProperty("receiverId") && writer.uint32(18).string(message.receiverId);
          null != message.message && message.hasOwnProperty("message") && $root.Chat.Message.encode(message.message, writer.uint32(26).fork()).ldelim();
          null != message.result && message.hasOwnProperty("result") && writer.uint32(32).int32(message.result);
          return writer;
        };
        MessageRespone.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        MessageRespone.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.Chat.MessageRespone();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.senderId = reader.string();
              break;

             case 2:
              message.receiverId = reader.string();
              break;

             case 3:
              message.message = $root.Chat.Message.decode(reader, reader.uint32());
              break;

             case 4:
              message.result = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        MessageRespone.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        MessageRespone.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.senderId && message.hasOwnProperty("senderId") && !$util.isString(message.senderId)) return "senderId: string expected";
          if (null != message.receiverId && message.hasOwnProperty("receiverId") && !$util.isString(message.receiverId)) return "receiverId: string expected";
          if (null != message.message && message.hasOwnProperty("message")) {
            var error = $root.Chat.Message.verify(message.message);
            if (error) return "message." + error;
          }
          if (null != message.result && message.hasOwnProperty("result") && !$util.isInteger(message.result)) return "result: integer expected";
          return null;
        };
        MessageRespone.fromObject = function fromObject(object) {
          if (object instanceof $root.Chat.MessageRespone) return object;
          var message = new $root.Chat.MessageRespone();
          null != object.senderId && (message.senderId = String(object.senderId));
          null != object.receiverId && (message.receiverId = String(object.receiverId));
          if (null != object.message) {
            if ("object" !== typeof object.message) throw TypeError(".Chat.MessageRespone.message: object expected");
            message.message = $root.Chat.Message.fromObject(object.message);
          }
          null != object.result && (message.result = 0 | object.result);
          return message;
        };
        MessageRespone.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.senderId = "";
            object.receiverId = "";
            object.message = null;
            object.result = 0;
          }
          null != message.senderId && message.hasOwnProperty("senderId") && (object.senderId = message.senderId);
          null != message.receiverId && message.hasOwnProperty("receiverId") && (object.receiverId = message.receiverId);
          null != message.message && message.hasOwnProperty("message") && (object.message = $root.Chat.Message.toObject(message.message, options));
          null != message.result && message.hasOwnProperty("result") && (object.result = message.result);
          return object;
        };
        MessageRespone.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return MessageRespone;
      }();
      return Chat;
    }();
    $root.Login = function() {
      var Login = {};
      Login.C2S_CMD = function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1001] = "Open"] = 1001;
        values[valuesById[1002] = "Error"] = 1002;
        values[valuesById[1003] = "Close"] = 1003;
        values[valuesById[1004] = "Login"] = 1004;
        values[valuesById[1005] = "HeartBeat"] = 1005;
        return values;
      }();
      Login.S2C_CMD = function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[2001] = "Open"] = 2001;
        values[valuesById[2002] = "Error"] = 2002;
        values[valuesById[2003] = "Closed"] = 2003;
        values[valuesById[2004] = "Login"] = 2004;
        values[valuesById[2005] = "HeartBeat"] = 2005;
        return values;
      }();
      Login.LoginRequest = function() {
        function LoginRequest(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        LoginRequest.prototype.userId = "";
        LoginRequest.create = function create(properties) {
          return new LoginRequest(properties);
        };
        LoginRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.userId && message.hasOwnProperty("userId") && writer.uint32(10).string(message.userId);
          return writer;
        };
        LoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        LoginRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.Login.LoginRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.userId = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        LoginRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        LoginRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.userId && message.hasOwnProperty("userId") && !$util.isString(message.userId)) return "userId: string expected";
          return null;
        };
        LoginRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.Login.LoginRequest) return object;
          var message = new $root.Login.LoginRequest();
          null != object.userId && (message.userId = String(object.userId));
          return message;
        };
        LoginRequest.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          options.defaults && (object.userId = "");
          null != message.userId && message.hasOwnProperty("userId") && (object.userId = message.userId);
          return object;
        };
        LoginRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return LoginRequest;
      }();
      Login.LoginErrorCode = function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Succeed"] = 0;
        values[valuesById[1] = "Failed"] = 1;
        return values;
      }();
      Login.LoginRespone = function() {
        function LoginRespone(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        LoginRespone.prototype.userId = "";
        LoginRespone.prototype.result = 0;
        LoginRespone.create = function create(properties) {
          return new LoginRespone(properties);
        };
        LoginRespone.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.userId && message.hasOwnProperty("userId") && writer.uint32(10).string(message.userId);
          null != message.result && message.hasOwnProperty("result") && writer.uint32(16).int32(message.result);
          return writer;
        };
        LoginRespone.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        LoginRespone.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.Login.LoginRespone();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.userId = reader.string();
              break;

             case 2:
              message.result = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        LoginRespone.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        LoginRespone.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.userId && message.hasOwnProperty("userId") && !$util.isString(message.userId)) return "userId: string expected";
          if (null != message.result && message.hasOwnProperty("result") && !$util.isInteger(message.result)) return "result: integer expected";
          return null;
        };
        LoginRespone.fromObject = function fromObject(object) {
          if (object instanceof $root.Login.LoginRespone) return object;
          var message = new $root.Login.LoginRespone();
          null != object.userId && (message.userId = String(object.userId));
          null != object.result && (message.result = 0 | object.result);
          return message;
        };
        LoginRespone.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.userId = "";
            object.result = 0;
          }
          null != message.userId && message.hasOwnProperty("userId") && (object.userId = message.userId);
          null != message.result && message.hasOwnProperty("result") && (object.result = message.result);
          return object;
        };
        LoginRespone.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return LoginRespone;
      }();
      Login.HeartBeatRequest = function() {
        function HeartBeatRequest(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        HeartBeatRequest.prototype.userId = "";
        HeartBeatRequest.create = function create(properties) {
          return new HeartBeatRequest(properties);
        };
        HeartBeatRequest.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.userId && message.hasOwnProperty("userId") && writer.uint32(10).string(message.userId);
          return writer;
        };
        HeartBeatRequest.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        HeartBeatRequest.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.Login.HeartBeatRequest();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.userId = reader.string();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        HeartBeatRequest.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        HeartBeatRequest.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.userId && message.hasOwnProperty("userId") && !$util.isString(message.userId)) return "userId: string expected";
          return null;
        };
        HeartBeatRequest.fromObject = function fromObject(object) {
          if (object instanceof $root.Login.HeartBeatRequest) return object;
          var message = new $root.Login.HeartBeatRequest();
          null != object.userId && (message.userId = String(object.userId));
          return message;
        };
        HeartBeatRequest.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          options.defaults && (object.userId = "");
          null != message.userId && message.hasOwnProperty("userId") && (object.userId = message.userId);
          return object;
        };
        HeartBeatRequest.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return HeartBeatRequest;
      }();
      Login.HeartBeatErrorCode = function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Succeed"] = 0;
        values[valuesById[1] = "Failed"] = 1;
        return values;
      }();
      Login.HeartBeatRespone = function() {
        function HeartBeatRespone(properties) {
          if (properties) for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) null != properties[keys[i]] && (this[keys[i]] = properties[keys[i]]);
        }
        HeartBeatRespone.prototype.userId = "";
        HeartBeatRespone.prototype.result = 0;
        HeartBeatRespone.create = function create(properties) {
          return new HeartBeatRespone(properties);
        };
        HeartBeatRespone.encode = function encode(message, writer) {
          writer || (writer = $Writer.create());
          null != message.userId && message.hasOwnProperty("userId") && writer.uint32(10).string(message.userId);
          null != message.result && message.hasOwnProperty("result") && writer.uint32(16).int32(message.result);
          return writer;
        };
        HeartBeatRespone.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };
        HeartBeatRespone.decode = function decode(reader, length) {
          reader instanceof $Reader || (reader = $Reader.create(reader));
          var end = void 0 === length ? reader.len : reader.pos + length, message = new $root.Login.HeartBeatRespone();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
             case 1:
              message.userId = reader.string();
              break;

             case 2:
              message.result = reader.int32();
              break;

             default:
              reader.skipType(7 & tag);
            }
          }
          return message;
        };
        HeartBeatRespone.decodeDelimited = function decodeDelimited(reader) {
          reader instanceof $Reader || (reader = new $Reader(reader));
          return this.decode(reader, reader.uint32());
        };
        HeartBeatRespone.verify = function verify(message) {
          if ("object" !== typeof message || null === message) return "object expected";
          if (null != message.userId && message.hasOwnProperty("userId") && !$util.isString(message.userId)) return "userId: string expected";
          if (null != message.result && message.hasOwnProperty("result") && !$util.isInteger(message.result)) return "result: integer expected";
          return null;
        };
        HeartBeatRespone.fromObject = function fromObject(object) {
          if (object instanceof $root.Login.HeartBeatRespone) return object;
          var message = new $root.Login.HeartBeatRespone();
          null != object.userId && (message.userId = String(object.userId));
          null != object.result && (message.result = 0 | object.result);
          return message;
        };
        HeartBeatRespone.toObject = function toObject(message, options) {
          options || (options = {});
          var object = {};
          if (options.defaults) {
            object.userId = "";
            object.result = 0;
          }
          null != message.userId && message.hasOwnProperty("userId") && (object.userId = message.userId);
          null != message.result && message.hasOwnProperty("result") && (object.result = message.result);
          return object;
        };
        HeartBeatRespone.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };
        return HeartBeatRespone;
      }();
      return Login;
    }();
    module.exports = $root;
    cc._RF.pop();
  }, {
    "protobufjs/minimal": void 0
  } ]
}, {}, [ "ChatScene", "LogicCenter", "LogicChat", "LogicFactory", "LogicBase", "SocketDispatcherBattle", "SocketHeartBeatBattle", "SocketMessagePhraserBattle", "SocketDispatcherChat", "SocketHeartBeatChat", "SocketMessagePhraserChat", "SocketDispatcherCommon", "SocketHeartBeatCommon", "SocketMessagePhraserCommon", "SocketDsipatcherFactory", "proto", "SocketCenter" ]);
//# sourceMappingURL=index.js.map
