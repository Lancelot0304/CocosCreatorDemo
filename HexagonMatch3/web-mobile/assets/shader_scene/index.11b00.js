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
  CheckBox: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e993fMBG5pDYJ855JiggchY", "CheckBox");
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
    var CheckBox = function(_super) {
      __extends(CheckBox, _super);
      function CheckBox() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.toggle = null;
        return _this;
      }
      CheckBox.prototype.onLoad = function() {};
      CheckBox.prototype.start = function() {
        this.toggle.checkEvents.push(this.createEventHandler("onCheckEvent"));
      };
      CheckBox.prototype.onCheckEvent = function(toggle) {};
      CheckBox.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "SliderWithValue";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      CheckBox.prototype.pushEventHandler = function(hanlder) {
        this.toggle.checkEvents.push(hanlder);
      };
      Object.defineProperty(CheckBox.prototype, "isChecked", {
        get: function() {
          return this.toggle.isChecked;
        },
        enumerable: false,
        configurable: true
      });
      __decorate([ property(cc.Label) ], CheckBox.prototype, "nameLabel", void 0);
      __decorate([ property(cc.Toggle) ], CheckBox.prototype, "toggle", void 0);
      CheckBox = __decorate([ ccclass ], CheckBox);
      return CheckBox;
    }(cc.Component);
    exports.default = CheckBox;
    cc._RF.pop();
  }, {} ],
  FlashLight: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0c83fX1kxxFD6EizsrlgoxX", "FlashLight");
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
    var SliderWithValue_1 = require("../ui_component/SliderWithValue");
    var CheckBox_1 = require("../ui_component/CheckBox");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FlashLight = function(_super) {
      __extends(FlashLight, _super);
      function FlashLight() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.red = null;
        _this.green = null;
        _this.blue = null;
        _this.alpha = null;
        _this.lineAngle = null;
        _this.lineWidth = null;
        _this.gradient = null;
        _this.cropAlpha = null;
        _this.enableFrog = null;
        return _this;
      }
      FlashLight.prototype.start = function() {
        this.red.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.green.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.blue.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.alpha.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.lineAngle.pushEventHandler(this.createEventHandler("onAngleSliderEvent"));
        this.lineWidth.pushEventHandler(this.createEventHandler("onWidthSliderEvent"));
        this.gradient.pushEventHandler(this.createEventHandler("onGradientCheckEvent"));
        this.cropAlpha.pushEventHandler(this.createEventHandler("onCropAlphaCheckEvent"));
        this.enableFrog.pushEventHandler(this.createEventHandler("onEnableFrogCheckEvent"));
        this.image.node.on(cc.Node.EventType.TOUCH_START, this.onImageTouchStartEvent, this);
        this.image.node.on(cc.Node.EventType.TOUCH_MOVE, this.onImageTouchStartEvent, this);
        this.image.node.on(cc.Node.EventType.TOUCH_END, this.onImageTouchStartEvent, this);
      };
      FlashLight.prototype.onColorSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("lightColor", new cc.Vec4(this.red.progress, this.green.progress, this.blue.progress, this.alpha.progress));
        this.image.setMaterial(0, material);
      };
      FlashLight.prototype.onImageTouchStartEvent = function(event) {
        var localPos = this.image.node.convertToNodeSpace(event.getLocation());
        var x = localPos.x / this.image.node.getContentSize().width;
        var y = 1 - localPos.y / this.image.node.getContentSize().height;
        var material = this.image.getMaterial(0);
        material.setProperty("centerPoint", new cc.Vec2(x, y));
        this.image.setMaterial(0, material);
      };
      FlashLight.prototype.onAngleSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("angle", 180 * this.lineAngle.progress);
        this.image.setMaterial(0, material);
      };
      FlashLight.prototype.onWidthSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("width", this.lineWidth.progress);
        this.image.setMaterial(0, material);
      };
      FlashLight.prototype.onGradientCheckEvent = function(toggle) {
        var material = this.image.getMaterial(0);
        material.setProperty("gradient", this.gradient.isChecked);
        this.image.setMaterial(0, material);
      };
      FlashLight.prototype.onCropAlphaCheckEvent = function(toggle) {
        var material = this.image.getMaterial(0);
        material.setProperty("cropAlpha", this.cropAlpha.isChecked);
        this.image.setMaterial(0, material);
      };
      FlashLight.prototype.onEnableFrogCheckEvent = function(toggle) {
        var material = this.image.getMaterial(0);
        material.setProperty("enableFog", this.enableFrog.isChecked);
        this.image.setMaterial(0, material);
      };
      FlashLight.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "FlashLight";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      __decorate([ property(cc.Sprite) ], FlashLight.prototype, "image", void 0);
      __decorate([ property(SliderWithValue_1.default) ], FlashLight.prototype, "red", void 0);
      __decorate([ property(SliderWithValue_1.default) ], FlashLight.prototype, "green", void 0);
      __decorate([ property(SliderWithValue_1.default) ], FlashLight.prototype, "blue", void 0);
      __decorate([ property(SliderWithValue_1.default) ], FlashLight.prototype, "alpha", void 0);
      __decorate([ property(SliderWithValue_1.default) ], FlashLight.prototype, "lineAngle", void 0);
      __decorate([ property(SliderWithValue_1.default) ], FlashLight.prototype, "lineWidth", void 0);
      __decorate([ property(CheckBox_1.default) ], FlashLight.prototype, "gradient", void 0);
      __decorate([ property(CheckBox_1.default) ], FlashLight.prototype, "cropAlpha", void 0);
      __decorate([ property(CheckBox_1.default) ], FlashLight.prototype, "enableFrog", void 0);
      FlashLight = __decorate([ ccclass ], FlashLight);
      return FlashLight;
    }(cc.Component);
    exports.default = FlashLight;
    cc._RF.pop();
  }, {
    "../ui_component/CheckBox": "CheckBox",
    "../ui_component/SliderWithValue": "SliderWithValue"
  } ],
  FlowLight: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cca4aON7zVHhaP8rbvg2evo", "FlowLight");
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
    var SliderWithValue_1 = require("../ui_component/SliderWithValue");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FlowLight = function(_super) {
      __extends(FlowLight, _super);
      function FlowLight() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.density = null;
        _this.frequency = null;
        return _this;
      }
      FlowLight.prototype.onLoad = function() {};
      FlowLight.prototype.start = function() {
        this.density.pushEventHandler(this.createEventHandler("onDensitySliderEvent"));
        this.frequency.pushEventHandler(this.createEventHandler("onFrequencySliderEvent"));
      };
      FlowLight.prototype.onDensitySliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("density", 10 * slider.progress);
      };
      FlowLight.prototype.onFrequencySliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("frequency", slider.progress);
      };
      FlowLight.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "FlowLight";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      __decorate([ property(cc.Sprite) ], FlowLight.prototype, "image", void 0);
      __decorate([ property(SliderWithValue_1.default) ], FlowLight.prototype, "density", void 0);
      __decorate([ property(SliderWithValue_1.default) ], FlowLight.prototype, "frequency", void 0);
      FlowLight = __decorate([ ccclass ], FlowLight);
      return FlowLight;
    }(cc.Component);
    exports.default = FlowLight;
    cc._RF.pop();
  }, {
    "../ui_component/SliderWithValue": "SliderWithValue"
  } ],
  InnerGlow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "384aetIxfVI1JMYiayB6wtJ", "InnerGlow");
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
    var SliderWithValue_1 = require("../ui_component/SliderWithValue");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var InnerGlow = function(_super) {
      __extends(InnerGlow, _super);
      function InnerGlow() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.red = null;
        _this.green = null;
        _this.blue = null;
        _this.level = null;
        _this.threshold = null;
        return _this;
      }
      InnerGlow.prototype.onLoad = function() {};
      InnerGlow.prototype.start = function() {
        this.red.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.green.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.blue.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.level.pushEventHandler(this.createEventHandler("onLevelSliderEvent"));
        this.threshold.pushEventHandler(this.createEventHandler("onThresoldSliderEvent"));
      };
      InnerGlow.prototype.onColorSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("glowColor", new cc.Vec4(this.red.progress, this.green.progress, this.blue.progress, 1));
        this.image.setMaterial(0, material);
      };
      InnerGlow.prototype.onLevelSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("glowLevel", this.level.progress);
        this.image.setMaterial(0, material);
      };
      InnerGlow.prototype.onThresoldSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("glowThreshold", this.threshold.progress);
        this.image.setMaterial(0, material);
      };
      InnerGlow.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "InnerGlow";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      __decorate([ property(cc.Sprite) ], InnerGlow.prototype, "image", void 0);
      __decorate([ property(SliderWithValue_1.default) ], InnerGlow.prototype, "red", void 0);
      __decorate([ property(SliderWithValue_1.default) ], InnerGlow.prototype, "green", void 0);
      __decorate([ property(SliderWithValue_1.default) ], InnerGlow.prototype, "blue", void 0);
      __decorate([ property(SliderWithValue_1.default) ], InnerGlow.prototype, "level", void 0);
      __decorate([ property(SliderWithValue_1.default) ], InnerGlow.prototype, "threshold", void 0);
      InnerGlow = __decorate([ ccclass ], InnerGlow);
      return InnerGlow;
    }(cc.Component);
    exports.default = InnerGlow;
    cc._RF.pop();
  }, {
    "../ui_component/SliderWithValue": "SliderWithValue"
  } ],
  Lighting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "334cf6bJOdLBZNxYsUba59k", "Lighting");
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
    var SliderWithValue_1 = require("../ui_component/SliderWithValue");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Lighting = function(_super) {
      __extends(Lighting, _super);
      function Lighting() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.red = null;
        _this.green = null;
        _this.blue = null;
        _this.alpha = null;
        _this.threshold = null;
        return _this;
      }
      Lighting.prototype.onLoad = function() {};
      Lighting.prototype.start = function() {
        this.red.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.green.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.blue.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.alpha.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.threshold.pushEventHandler(this.createEventHandler("onThresoldSliderEvent"));
      };
      Lighting.prototype.onColorSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("blendColor", new cc.Vec4(this.red.progress, this.green.progress, this.blue.progress, this.alpha.progress));
        this.image.setMaterial(0, material);
      };
      Lighting.prototype.onThresoldSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("blendThreshold", this.threshold.progress);
        this.image.setMaterial(0, material);
      };
      Lighting.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "Lighting";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      __decorate([ property(cc.Sprite) ], Lighting.prototype, "image", void 0);
      __decorate([ property(SliderWithValue_1.default) ], Lighting.prototype, "red", void 0);
      __decorate([ property(SliderWithValue_1.default) ], Lighting.prototype, "green", void 0);
      __decorate([ property(SliderWithValue_1.default) ], Lighting.prototype, "blue", void 0);
      __decorate([ property(SliderWithValue_1.default) ], Lighting.prototype, "alpha", void 0);
      __decorate([ property(SliderWithValue_1.default) ], Lighting.prototype, "threshold", void 0);
      Lighting = __decorate([ ccclass ], Lighting);
      return Lighting;
    }(cc.Component);
    exports.default = Lighting;
    cc._RF.pop();
  }, {
    "../ui_component/SliderWithValue": "SliderWithValue"
  } ],
  Mosaic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16f7fALQkRBU4/czIjYleSa", "Mosaic");
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
    var SliderWithValue_1 = require("../ui_component/SliderWithValue");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Mosaic = function(_super) {
      __extends(Mosaic, _super);
      function Mosaic() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.xLevel = null;
        _this.yLevel = null;
        _this.bothLevel = null;
        return _this;
      }
      Mosaic.prototype.onLoad = function() {};
      Mosaic.prototype.start = function() {
        this.xLevel.pushEventHandler(this.createEventHandler("onXLevelSliderEvent"));
        this.yLevel.pushEventHandler(this.createEventHandler("onYLevelSliderEvent"));
        this.bothLevel.pushEventHandler(this.createEventHandler("onBothLevelSliderEvent"));
      };
      Mosaic.prototype.onXLevelSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("xLevel", slider.progress);
        this.image.setMaterial(0, material);
      };
      Mosaic.prototype.onYLevelSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("yLevel", slider.progress);
        this.image.setMaterial(0, material);
      };
      Mosaic.prototype.onBothLevelSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("xLevel", slider.progress);
        material.setProperty("yLevel", slider.progress);
        this.image.setMaterial(0, material);
      };
      Mosaic.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "Mosaic";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      __decorate([ property(cc.Sprite) ], Mosaic.prototype, "image", void 0);
      __decorate([ property(SliderWithValue_1.default) ], Mosaic.prototype, "xLevel", void 0);
      __decorate([ property(SliderWithValue_1.default) ], Mosaic.prototype, "yLevel", void 0);
      __decorate([ property(SliderWithValue_1.default) ], Mosaic.prototype, "bothLevel", void 0);
      Mosaic = __decorate([ ccclass ], Mosaic);
      return Mosaic;
    }(cc.Component);
    exports.default = Mosaic;
    cc._RF.pop();
  }, {
    "../ui_component/SliderWithValue": "SliderWithValue"
  } ],
  OldPhoto: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3ba53pFeM5PbozPNk0lEIId", "OldPhoto");
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
    var SliderWithValue_1 = require("../ui_component/SliderWithValue");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var OldPhoto = function(_super) {
      __extends(OldPhoto, _super);
      function OldPhoto() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.slider = null;
        return _this;
      }
      OldPhoto.prototype.onLoad = function() {};
      OldPhoto.prototype.start = function() {
        this.slider.pushEventHandler(this.createEventHandler("onSliderEvent"));
      };
      OldPhoto.prototype.onSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("oldLevel", slider.progress);
      };
      OldPhoto.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "OldPhoto";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      __decorate([ property(cc.Sprite) ], OldPhoto.prototype, "image", void 0);
      __decorate([ property(SliderWithValue_1.default) ], OldPhoto.prototype, "slider", void 0);
      OldPhoto = __decorate([ ccclass ], OldPhoto);
      return OldPhoto;
    }(cc.Component);
    exports.default = OldPhoto;
    cc._RF.pop();
  }, {
    "../ui_component/SliderWithValue": "SliderWithValue"
  } ],
  PointLight: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "40ea15aRwRGGIkhx8na4Wt5", "PointLight");
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
    var SliderWithValue_1 = require("../ui_component/SliderWithValue");
    var CheckBox_1 = require("../ui_component/CheckBox");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PointLight = function(_super) {
      __extends(PointLight, _super);
      function PointLight() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.red = null;
        _this.green = null;
        _this.blue = null;
        _this.alpha = null;
        _this.radius = null;
        _this.cropAlpha = null;
        _this.enableFrog = null;
        return _this;
      }
      PointLight.prototype.start = function() {
        this.red.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.green.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.blue.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.alpha.pushEventHandler(this.createEventHandler("onColorSliderEvent"));
        this.radius.pushEventHandler(this.createEventHandler("onRadiusSliderEvent"));
        this.cropAlpha.pushEventHandler(this.createEventHandler("onCropAlphaCheckEvent"));
        this.enableFrog.pushEventHandler(this.createEventHandler("onEnableFrogCheckEvent"));
        this.image.node.on(cc.Node.EventType.TOUCH_START, this.onImageTouchStartEvent, this);
        this.image.node.on(cc.Node.EventType.TOUCH_MOVE, this.onImageTouchStartEvent, this);
        this.image.node.on(cc.Node.EventType.TOUCH_END, this.onImageTouchStartEvent, this);
      };
      PointLight.prototype.onColorSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("centerColor", new cc.Vec4(this.red.progress, this.green.progress, this.blue.progress, this.alpha.progress));
        this.image.setMaterial(0, material);
      };
      PointLight.prototype.onImageTouchStartEvent = function(event) {
        var localPos = this.image.node.convertToNodeSpace(event.getLocation());
        var x = localPos.x / this.image.node.getContentSize().width;
        var y = 1 - localPos.y / this.image.node.getContentSize().height;
        var material = this.image.getMaterial(0);
        material.setProperty("centerPoint", new cc.Vec2(x, y));
        this.image.setMaterial(0, material);
      };
      PointLight.prototype.onRadiusSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("radius", this.radius.progress);
        this.image.setMaterial(0, material);
      };
      PointLight.prototype.onCropAlphaCheckEvent = function(toggle) {
        var material = this.image.getMaterial(0);
        material.setProperty("cropAlpha", this.cropAlpha.isChecked);
        this.image.setMaterial(0, material);
      };
      PointLight.prototype.onEnableFrogCheckEvent = function(toggle) {
        var material = this.image.getMaterial(0);
        material.setProperty("enableFog", this.enableFrog.isChecked);
        this.image.setMaterial(0, material);
      };
      PointLight.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "PointLight";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      __decorate([ property(cc.Sprite) ], PointLight.prototype, "image", void 0);
      __decorate([ property(SliderWithValue_1.default) ], PointLight.prototype, "red", void 0);
      __decorate([ property(SliderWithValue_1.default) ], PointLight.prototype, "green", void 0);
      __decorate([ property(SliderWithValue_1.default) ], PointLight.prototype, "blue", void 0);
      __decorate([ property(SliderWithValue_1.default) ], PointLight.prototype, "alpha", void 0);
      __decorate([ property(SliderWithValue_1.default) ], PointLight.prototype, "radius", void 0);
      __decorate([ property(CheckBox_1.default) ], PointLight.prototype, "cropAlpha", void 0);
      __decorate([ property(CheckBox_1.default) ], PointLight.prototype, "enableFrog", void 0);
      PointLight = __decorate([ ccclass ], PointLight);
      return PointLight;
    }(cc.Component);
    exports.default = PointLight;
    cc._RF.pop();
  }, {
    "../ui_component/CheckBox": "CheckBox",
    "../ui_component/SliderWithValue": "SliderWithValue"
  } ],
  ShaderScene: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22e63XA9YtBzbgg8QSn9PiD", "ShaderScene");
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
    var ShaderScene = function(_super) {
      __extends(ShaderScene, _super);
      function ShaderScene() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.layerContainer = null;
        _this.previousBtn = null;
        _this.quitBtn = null;
        _this.nextBtn = null;
        _this.testPrefabs = [];
        _this._layer = null;
        _this._testIndex = 0;
        return _this;
      }
      ShaderScene.prototype.getSceneName = function() {
        return Defines_1.SceneName.ShaderScene;
      };
      ShaderScene.prototype.onSceneLoad = function() {
        this.setTestWithIndex(0);
      };
      ShaderScene.prototype.onSceneEnable = function() {};
      ShaderScene.prototype.onSceneEnter = function(param) {};
      ShaderScene.prototype.onSceneStart = function() {
        this.previousBtn.on(cc.Node.EventType.TOUCH_END, this.onPreviousBtn, this);
        this.quitBtn.on(cc.Node.EventType.TOUCH_END, this.onQuitBtn, this);
        this.nextBtn.on(cc.Node.EventType.TOUCH_END, this.onNextBtn, this);
      };
      ShaderScene.prototype.onSceneUpdate = function(dt) {};
      ShaderScene.prototype.onSceneExit = function() {};
      ShaderScene.prototype.onSceneDisable = function() {};
      ShaderScene.prototype.onSceneDestroy = function() {};
      ShaderScene.prototype.onLoad = function() {
        this.setTestWithIndex(0);
      };
      ShaderScene.prototype.start = function() {
        this.previousBtn.on(cc.Node.EventType.TOUCH_END, this.onPreviousBtn, this);
        this.quitBtn.on(cc.Node.EventType.TOUCH_END, this.onQuitBtn, this);
        this.nextBtn.on(cc.Node.EventType.TOUCH_END, this.onNextBtn, this);
      };
      ShaderScene.prototype.onPreviousBtn = function() {
        this.setTestWithIndex(this._testIndex - 1);
      };
      ShaderScene.prototype.onNextBtn = function() {
        this.setTestWithIndex(this._testIndex + 1);
      };
      ShaderScene.prototype.onQuitBtn = function() {
        var preloadInfo = PreloadAssetInfo_1.default.create();
        preloadInfo.extiBundles = [ Defines_1.AssetBundleID.ShaderScene ];
        preloadInfo.enterBundles[Defines_1.AssetBundleID.MainScene] = [];
        IGame_1.default.getInstance().replaceSceneWithSwitchScene(preloadInfo, Defines_1.SceneName.MainScene);
      };
      ShaderScene.prototype.setTestWithIndex = function(index) {
        this._testIndex = (index + this.testPrefabs.length) % this.testPrefabs.length;
        this._layer && this._layer.destroy();
        this._layer = cc.instantiate(this.testPrefabs[this._testIndex]);
        this.layerContainer.addChild(this._layer);
      };
      __decorate([ property(cc.Node) ], ShaderScene.prototype, "layerContainer", void 0);
      __decorate([ property(cc.Node) ], ShaderScene.prototype, "previousBtn", void 0);
      __decorate([ property(cc.Node) ], ShaderScene.prototype, "quitBtn", void 0);
      __decorate([ property(cc.Node) ], ShaderScene.prototype, "nextBtn", void 0);
      __decorate([ property([ cc.Prefab ]) ], ShaderScene.prototype, "testPrefabs", void 0);
      ShaderScene = __decorate([ ccclass ], ShaderScene);
      return ShaderScene;
    }(SceneBase_1.default);
    exports.default = ShaderScene;
    cc._RF.pop();
  }, {
    "../../../scripts/Defines/Defines": void 0,
    "../../../scripts/Frameworks/IGame/IGame": void 0,
    "../../../scripts/Frameworks/SceneDirector/PreloadAssetInfo": void 0,
    "../../../scripts/Frameworks/SceneDirector/SceneBase": void 0
  } ],
  SliderWithValue: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d154b6EG0RGqqXe2MnSrfbv", "SliderWithValue");
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
    var SliderWithValue = function(_super) {
      __extends(SliderWithValue, _super);
      function SliderWithValue() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.slider = null;
        _this.valueLabel = null;
        return _this;
      }
      SliderWithValue.prototype.onLoad = function() {
        this.onSliderEvent(this.slider);
      };
      SliderWithValue.prototype.start = function() {
        this.slider.slideEvents.push(this.createEventHandler("onSliderEvent"));
      };
      SliderWithValue.prototype.onSliderEvent = function(slider) {
        this.valueLabel.string = slider.progress.toFixed(2);
      };
      SliderWithValue.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "SliderWithValue";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      SliderWithValue.prototype.pushEventHandler = function(hanlder) {
        this.slider.slideEvents.push(hanlder);
      };
      Object.defineProperty(SliderWithValue.prototype, "progress", {
        get: function() {
          return this.slider.progress;
        },
        enumerable: false,
        configurable: true
      });
      __decorate([ property(cc.Label) ], SliderWithValue.prototype, "nameLabel", void 0);
      __decorate([ property(cc.Slider) ], SliderWithValue.prototype, "slider", void 0);
      __decorate([ property(cc.Label) ], SliderWithValue.prototype, "valueLabel", void 0);
      SliderWithValue = __decorate([ ccclass ], SliderWithValue);
      return SliderWithValue;
    }(cc.Component);
    exports.default = SliderWithValue;
    cc._RF.pop();
  }, {} ],
  WaterRing: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0167GHCd9Fm7ThfMsGrHSa", "WaterRing");
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
    var SliderWithValue_1 = require("../ui_component/SliderWithValue");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WaterRing = function(_super) {
      __extends(WaterRing, _super);
      function WaterRing() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.radius = null;
        _this.offset = null;
        return _this;
      }
      WaterRing.prototype.onLoad = function() {};
      WaterRing.prototype.start = function() {
        this.radius.pushEventHandler(this.createEventHandler("onRadiusSliderEvent"));
        this.offset.pushEventHandler(this.createEventHandler("onOffsetSliderEvent"));
        this.image.node.on(cc.Node.EventType.TOUCH_START, this.onImageTouchStartEvent, this);
        this.image.node.on(cc.Node.EventType.TOUCH_MOVE, this.onImageTouchStartEvent, this);
        this.image.node.on(cc.Node.EventType.TOUCH_END, this.onImageTouchStartEvent, this);
      };
      WaterRing.prototype.onRadiusSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("radius", 10 * slider.progress);
      };
      WaterRing.prototype.onOffsetSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("offset", 10 * slider.progress);
      };
      WaterRing.prototype.onImageTouchStartEvent = function(event) {
        var localPos = this.image.node.convertToNodeSpace(event.getLocation());
        var x = localPos.x / this.image.node.getContentSize().width;
        var y = 1 - localPos.y / this.image.node.getContentSize().height;
        var material = this.image.getMaterial(0);
        material.setProperty("center", new cc.Vec2(x, y));
        this.image.setMaterial(0, material);
      };
      WaterRing.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "WaterRing";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      __decorate([ property(cc.Sprite) ], WaterRing.prototype, "image", void 0);
      __decorate([ property(SliderWithValue_1.default) ], WaterRing.prototype, "radius", void 0);
      __decorate([ property(SliderWithValue_1.default) ], WaterRing.prototype, "offset", void 0);
      WaterRing = __decorate([ ccclass ], WaterRing);
      return WaterRing;
    }(cc.Component);
    exports.default = WaterRing;
    cc._RF.pop();
  }, {
    "../ui_component/SliderWithValue": "SliderWithValue"
  } ],
  WaveMask: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0a1bbosd1Kw6prClLSS1i6", "WaveMask");
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
    var SliderWithValue_1 = require("../ui_component/SliderWithValue");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var WaveMask = function(_super) {
      __extends(WaveMask, _super);
      function WaveMask() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.image = null;
        _this.amplitude = null;
        _this.angularVelocity = null;
        _this.frequency = null;
        _this.offset = null;
        return _this;
      }
      WaveMask.prototype.onLoad = function() {};
      WaveMask.prototype.start = function() {
        this.amplitude.pushEventHandler(this.createEventHandler("onAmplitudeSliderEvent"));
        this.angularVelocity.pushEventHandler(this.createEventHandler("onAngularVelocitySliderEvent"));
        this.frequency.pushEventHandler(this.createEventHandler("onFrequencySliderEvent"));
        this.offset.pushEventHandler(this.createEventHandler("onOffsetSliderEvent"));
      };
      WaveMask.prototype.onAmplitudeSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("amplitude", slider.progress);
      };
      WaveMask.prototype.onAngularVelocitySliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("angularVelocity", Math.round(360 * slider.progress));
      };
      WaveMask.prototype.onFrequencySliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("frequency", Math.round(100 * slider.progress));
      };
      WaveMask.prototype.onOffsetSliderEvent = function(slider) {
        var material = this.image.getMaterial(0);
        material.setProperty("offset", slider.progress);
      };
      WaveMask.prototype.createEventHandler = function(hanlder) {
        var sliderEventHandler = new cc.Component.EventHandler();
        sliderEventHandler.target = this.node;
        sliderEventHandler.component = "WaveMask";
        sliderEventHandler.handler = hanlder;
        return sliderEventHandler;
      };
      __decorate([ property(cc.Sprite) ], WaveMask.prototype, "image", void 0);
      __decorate([ property(SliderWithValue_1.default) ], WaveMask.prototype, "amplitude", void 0);
      __decorate([ property(SliderWithValue_1.default) ], WaveMask.prototype, "angularVelocity", void 0);
      __decorate([ property(SliderWithValue_1.default) ], WaveMask.prototype, "frequency", void 0);
      __decorate([ property(SliderWithValue_1.default) ], WaveMask.prototype, "offset", void 0);
      WaveMask = __decorate([ ccclass ], WaveMask);
      return WaveMask;
    }(cc.Component);
    exports.default = WaveMask;
    cc._RF.pop();
  }, {
    "../ui_component/SliderWithValue": "SliderWithValue"
  } ]
}, {}, [ "ShaderScene", "FlashLight", "FlowLight", "InnerGlow", "Lighting", "Mosaic", "OldPhoto", "PointLight", "WaterRing", "WaveMask", "CheckBox", "SliderWithValue" ]);
//# sourceMappingURL=index.js.map
