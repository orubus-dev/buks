// buks vendor bundle (generated) — cheerio/htmlparser2/dayjs/protobufjs + lib shims
globalThis.__buksVendorModules = {};
globalThis.__buksVendorCache = {};
function __buksVendorReg(id, factory) { globalThis.__buksVendorModules[id] = factory; }
var __buksVendorAliases = {
  'cheerio': 'cheerio', 'htmlparser2': 'htmlparser2', 'dayjs': 'dayjs', 'protobufjs': 'protobufjs',
  '@libs/novelStatus': '@libs/novelStatus', '@libs/defaultCover': '@libs/defaultCover',
  '@libs/filterInputs': '@libs/filterInputs', '@libs/isAbsoluteUrl': '@libs/isAbsoluteUrl',
  '@libs/aes': '@libs/aes', '@/types/constants': '@/types/constants',
  'libs/novelStatus': '@libs/novelStatus', 'libs/defaultCover': '@libs/defaultCover',
  'libs/filterInputs': '@libs/filterInputs', 'libs/isAbsoluteUrl': '@libs/isAbsoluteUrl',
  'libs/aes': '@libs/aes', 'types/constants': '@/types/constants'
};
globalThis.__buksVendor = function (name) {
  var id = __buksVendorAliases[name];
  if (!id) { return undefined; }
  var f = globalThis.__buksVendorModules[id];
  if (!f) { throw new Error('vendor missing module: ' + name); }
  if (name in globalThis.__buksVendorCache) { return globalThis.__buksVendorCache[name]; }
  var m = { exports: {} };
  f(function (req) { return globalThis.__buksVendor(req); }, m, m.exports);
  globalThis.__buksVendorCache[name] = m.exports;
  return m.exports;
};
__buksVendorReg("@libs/fetch-shims", function(require, module, exports){

  module.exports = {};

});
__buksVendorReg("@libs/isAbsoluteUrl", function(require, module, exports){

  var isUrlAbsolute = function (url) {
    if (url) {
      if (url.indexOf('//') === 0) { return true; }
      if (url.indexOf('://') === -1) { return false; }
      if (url.indexOf('.') === -1) { return false; }
      if (url.indexOf('/') === -1) { return false; }
      if (url.indexOf(':') > url.indexOf('/')) { return false; }
      if (url.indexOf('://') < url.indexOf('.')) { return true; }
    }
    return false;
  };
  module.exports = { isUrlAbsolute: isUrlAbsolute };

});
__buksVendorReg("cheerio", function(require, module, exports){
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/options.js
var require_options = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.flattenOptions = flattenOptions;
    var defaultOpts = {
      _useHtmlParser2: false
    };
    function flattenOptions(options, baseOptions) {
      if (!options) {
        return baseOptions !== null && baseOptions !== void 0 ? baseOptions : defaultOpts;
      }
      const opts = {
        _useHtmlParser2: !!options.xmlMode,
        ...baseOptions,
        ...options
      };
      if (options.xml) {
        opts._useHtmlParser2 = true;
        opts.xmlMode = true;
        if (options.xml !== true) {
          Object.assign(opts, options.xml);
        }
      } else if (options.xmlMode) {
        opts._useHtmlParser2 = true;
      }
      return opts;
    }
  }
});

// ../lnr-plugins/node_modules/domelementtype/lib/index.js
var require_lib = __commonJS({
  "../lnr-plugins/node_modules/domelementtype/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Doctype = exports2.CDATA = exports2.Tag = exports2.Style = exports2.Script = exports2.Comment = exports2.Directive = exports2.Text = exports2.Root = exports2.isTag = exports2.ElementType = void 0;
    var ElementType;
    (function(ElementType2) {
      ElementType2["Root"] = "root";
      ElementType2["Text"] = "text";
      ElementType2["Directive"] = "directive";
      ElementType2["Comment"] = "comment";
      ElementType2["Script"] = "script";
      ElementType2["Style"] = "style";
      ElementType2["Tag"] = "tag";
      ElementType2["CDATA"] = "cdata";
      ElementType2["Doctype"] = "doctype";
    })(ElementType = exports2.ElementType || (exports2.ElementType = {}));
    function isTag(elem) {
      return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
    }
    exports2.isTag = isTag;
    exports2.Root = ElementType.Root;
    exports2.Text = ElementType.Text;
    exports2.Directive = ElementType.Directive;
    exports2.Comment = ElementType.Comment;
    exports2.Script = ElementType.Script;
    exports2.Style = ElementType.Style;
    exports2.Tag = ElementType.Tag;
    exports2.CDATA = ElementType.CDATA;
    exports2.Doctype = ElementType.Doctype;
  }
});

// ../lnr-plugins/node_modules/domhandler/lib/node.js
var require_node = __commonJS({
  "../lnr-plugins/node_modules/domhandler/lib/node.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ (function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    })();
    var __assign = exports2 && exports2.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.cloneNode = exports2.hasChildren = exports2.isDocument = exports2.isDirective = exports2.isComment = exports2.isText = exports2.isCDATA = exports2.isTag = exports2.Element = exports2.Document = exports2.CDATA = exports2.NodeWithChildren = exports2.ProcessingInstruction = exports2.Comment = exports2.Text = exports2.DataNode = exports2.Node = void 0;
    var domelementtype_1 = require_lib();
    var Node = (
      /** @class */
      (function() {
        function Node2() {
          this.parent = null;
          this.prev = null;
          this.next = null;
          this.startIndex = null;
          this.endIndex = null;
        }
        Object.defineProperty(Node2.prototype, "parentNode", {
          // Read-write aliases for properties
          /**
           * Same as {@link parent}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.parent;
          },
          set: function(parent) {
            this.parent = parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "previousSibling", {
          /**
           * Same as {@link prev}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.prev;
          },
          set: function(prev) {
            this.prev = prev;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "nextSibling", {
          /**
           * Same as {@link next}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.next;
          },
          set: function(next) {
            this.next = next;
          },
          enumerable: false,
          configurable: true
        });
        Node2.prototype.cloneNode = function(recursive) {
          if (recursive === void 0) {
            recursive = false;
          }
          return cloneNode(this, recursive);
        };
        return Node2;
      })()
    );
    exports2.Node = Node;
    var DataNode = (
      /** @class */
      (function(_super) {
        __extends(DataNode2, _super);
        function DataNode2(data) {
          var _this = _super.call(this) || this;
          _this.data = data;
          return _this;
        }
        Object.defineProperty(DataNode2.prototype, "nodeValue", {
          /**
           * Same as {@link data}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.data;
          },
          set: function(data) {
            this.data = data;
          },
          enumerable: false,
          configurable: true
        });
        return DataNode2;
      })(Node)
    );
    exports2.DataNode = DataNode;
    var Text = (
      /** @class */
      (function(_super) {
        __extends(Text2, _super);
        function Text2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.Text;
          return _this;
        }
        Object.defineProperty(Text2.prototype, "nodeType", {
          get: function() {
            return 3;
          },
          enumerable: false,
          configurable: true
        });
        return Text2;
      })(DataNode)
    );
    exports2.Text = Text;
    var Comment = (
      /** @class */
      (function(_super) {
        __extends(Comment2, _super);
        function Comment2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.Comment;
          return _this;
        }
        Object.defineProperty(Comment2.prototype, "nodeType", {
          get: function() {
            return 8;
          },
          enumerable: false,
          configurable: true
        });
        return Comment2;
      })(DataNode)
    );
    exports2.Comment = Comment;
    var ProcessingInstruction = (
      /** @class */
      (function(_super) {
        __extends(ProcessingInstruction2, _super);
        function ProcessingInstruction2(name, data) {
          var _this = _super.call(this, data) || this;
          _this.name = name;
          _this.type = domelementtype_1.ElementType.Directive;
          return _this;
        }
        Object.defineProperty(ProcessingInstruction2.prototype, "nodeType", {
          get: function() {
            return 1;
          },
          enumerable: false,
          configurable: true
        });
        return ProcessingInstruction2;
      })(DataNode)
    );
    exports2.ProcessingInstruction = ProcessingInstruction;
    var NodeWithChildren = (
      /** @class */
      (function(_super) {
        __extends(NodeWithChildren2, _super);
        function NodeWithChildren2(children) {
          var _this = _super.call(this) || this;
          _this.children = children;
          return _this;
        }
        Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
          // Aliases
          /** First child of the node. */
          get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
          /** Last child of the node. */
          get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
          /**
           * Same as {@link children}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.children;
          },
          set: function(children) {
            this.children = children;
          },
          enumerable: false,
          configurable: true
        });
        return NodeWithChildren2;
      })(Node)
    );
    exports2.NodeWithChildren = NodeWithChildren;
    var CDATA = (
      /** @class */
      (function(_super) {
        __extends(CDATA2, _super);
        function CDATA2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.CDATA;
          return _this;
        }
        Object.defineProperty(CDATA2.prototype, "nodeType", {
          get: function() {
            return 4;
          },
          enumerable: false,
          configurable: true
        });
        return CDATA2;
      })(NodeWithChildren)
    );
    exports2.CDATA = CDATA;
    var Document = (
      /** @class */
      (function(_super) {
        __extends(Document2, _super);
        function Document2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.Root;
          return _this;
        }
        Object.defineProperty(Document2.prototype, "nodeType", {
          get: function() {
            return 9;
          },
          enumerable: false,
          configurable: true
        });
        return Document2;
      })(NodeWithChildren)
    );
    exports2.Document = Document;
    var Element = (
      /** @class */
      (function(_super) {
        __extends(Element2, _super);
        function Element2(name, attribs, children, type) {
          if (children === void 0) {
            children = [];
          }
          if (type === void 0) {
            type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
          }
          var _this = _super.call(this, children) || this;
          _this.name = name;
          _this.attribs = attribs;
          _this.type = type;
          return _this;
        }
        Object.defineProperty(Element2.prototype, "nodeType", {
          get: function() {
            return 1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element2.prototype, "tagName", {
          // DOM Level 1 aliases
          /**
           * Same as {@link name}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.name;
          },
          set: function(name) {
            this.name = name;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element2.prototype, "attributes", {
          get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
              var _a, _b;
              return {
                name,
                value: _this.attribs[name],
                namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
              };
            });
          },
          enumerable: false,
          configurable: true
        });
        return Element2;
      })(NodeWithChildren)
    );
    exports2.Element = Element;
    function isTag(node) {
      return (0, domelementtype_1.isTag)(node);
    }
    exports2.isTag = isTag;
    function isCDATA(node) {
      return node.type === domelementtype_1.ElementType.CDATA;
    }
    exports2.isCDATA = isCDATA;
    function isText(node) {
      return node.type === domelementtype_1.ElementType.Text;
    }
    exports2.isText = isText;
    function isComment(node) {
      return node.type === domelementtype_1.ElementType.Comment;
    }
    exports2.isComment = isComment;
    function isDirective(node) {
      return node.type === domelementtype_1.ElementType.Directive;
    }
    exports2.isDirective = isDirective;
    function isDocument(node) {
      return node.type === domelementtype_1.ElementType.Root;
    }
    exports2.isDocument = isDocument;
    function hasChildren(node) {
      return Object.prototype.hasOwnProperty.call(node, "children");
    }
    exports2.hasChildren = hasChildren;
    function cloneNode(node, recursive) {
      if (recursive === void 0) {
        recursive = false;
      }
      var result;
      if (isText(node)) {
        result = new Text(node.data);
      } else if (isComment(node)) {
        result = new Comment(node.data);
      } else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function(child) {
          return child.parent = clone_1;
        });
        if (node.namespace != null) {
          clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
          clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
          clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
      } else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function(child) {
          return child.parent = clone_2;
        });
        result = clone_2;
      } else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function(child) {
          return child.parent = clone_3;
        });
        if (node["x-mode"]) {
          clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
      } else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
          instruction["x-name"] = node["x-name"];
          instruction["x-publicId"] = node["x-publicId"];
          instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
      } else {
        throw new Error("Not implemented yet: ".concat(node.type));
      }
      result.startIndex = node.startIndex;
      result.endIndex = node.endIndex;
      if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
      }
      return result;
    }
    exports2.cloneNode = cloneNode;
    function cloneChildren(childs) {
      var children = childs.map(function(child) {
        return cloneNode(child, true);
      });
      for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
      }
      return children;
    }
  }
});

// ../lnr-plugins/node_modules/domhandler/lib/index.js
var require_lib2 = __commonJS({
  "../lnr-plugins/node_modules/domhandler/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DomHandler = void 0;
    var domelementtype_1 = require_lib();
    var node_js_1 = require_node();
    __exportStar(require_node(), exports2);
    var defaultOpts = {
      withStartIndices: false,
      withEndIndices: false,
      xmlMode: false
    };
    var DomHandler = (
      /** @class */
      (function() {
        function DomHandler2(callback, options, elementCB) {
          this.dom = [];
          this.root = new node_js_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
          if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
          }
          if (typeof callback === "object") {
            options = callback;
            callback = void 0;
          }
          this.callback = callback !== null && callback !== void 0 ? callback : null;
          this.options = options !== null && options !== void 0 ? options : defaultOpts;
          this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
        }
        DomHandler2.prototype.onparserinit = function(parser) {
          this.parser = parser;
        };
        DomHandler2.prototype.onreset = function() {
          this.dom = [];
          this.root = new node_js_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
        };
        DomHandler2.prototype.onend = function() {
          if (this.done)
            return;
          this.done = true;
          this.parser = null;
          this.handleCallback(null);
        };
        DomHandler2.prototype.onerror = function(error) {
          this.handleCallback(error);
        };
        DomHandler2.prototype.onclosetag = function() {
          this.lastNode = null;
          var elem = this.tagStack.pop();
          if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
          }
          if (this.elementCB)
            this.elementCB(elem);
        };
        DomHandler2.prototype.onopentag = function(name, attribs) {
          var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
          var element = new node_js_1.Element(name, attribs, void 0, type);
          this.addNode(element);
          this.tagStack.push(element);
        };
        DomHandler2.prototype.ontext = function(data) {
          var lastNode = this.lastNode;
          if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
              lastNode.endIndex = this.parser.endIndex;
            }
          } else {
            var node = new node_js_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
          }
        };
        DomHandler2.prototype.oncomment = function(data) {
          if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
          }
          var node = new node_js_1.Comment(data);
          this.addNode(node);
          this.lastNode = node;
        };
        DomHandler2.prototype.oncommentend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.oncdatastart = function() {
          var text = new node_js_1.Text("");
          var node = new node_js_1.CDATA([text]);
          this.addNode(node);
          text.parent = node;
          this.lastNode = text;
        };
        DomHandler2.prototype.oncdataend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.onprocessinginstruction = function(name, data) {
          var node = new node_js_1.ProcessingInstruction(name, data);
          this.addNode(node);
        };
        DomHandler2.prototype.handleCallback = function(error) {
          if (typeof this.callback === "function") {
            this.callback(error, this.dom);
          } else if (error) {
            throw error;
          }
        };
        DomHandler2.prototype.addNode = function(node) {
          var parent = this.tagStack[this.tagStack.length - 1];
          var previousSibling = parent.children[parent.children.length - 1];
          if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
          }
          if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
          }
          parent.children.push(node);
          if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
          }
          node.parent = parent;
          this.lastNode = null;
        };
        return DomHandler2;
      })()
    );
    exports2.DomHandler = DomHandler;
    exports2.default = DomHandler;
  }
});

// ../lnr-plugins/node_modules/entities/lib/generated/decode-data-html.js
var require_decode_data_html = __commonJS({
  "../lnr-plugins/node_modules/entities/lib/generated/decode-data-html.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = new Uint16Array(
      // prettier-ignore
      '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(c) {
        return c.charCodeAt(0);
      })
    );
  }
});

// ../lnr-plugins/node_modules/entities/lib/generated/decode-data-xml.js
var require_decode_data_xml = __commonJS({
  "../lnr-plugins/node_modules/entities/lib/generated/decode-data-xml.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = new Uint16Array(
      // prettier-ignore
      "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(c) {
        return c.charCodeAt(0);
      })
    );
  }
});

// ../lnr-plugins/node_modules/entities/lib/decode_codepoint.js
var require_decode_codepoint = __commonJS({
  "../lnr-plugins/node_modules/entities/lib/decode_codepoint.js"(exports2) {
    "use strict";
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.replaceCodePoint = exports2.fromCodePoint = void 0;
    var decodeMap = /* @__PURE__ */ new Map([
      [0, 65533],
      // C1 Unicode control character reference replacements
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    exports2.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
    (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
      var output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    };
    function replaceCodePoint(codePoint) {
      var _a2;
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return 65533;
      }
      return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
    }
    exports2.replaceCodePoint = replaceCodePoint;
    function decodeCodePoint(codePoint) {
      return (0, exports2.fromCodePoint)(replaceCodePoint(codePoint));
    }
    exports2.default = decodeCodePoint;
  }
});

// ../lnr-plugins/node_modules/entities/lib/decode.js
var require_decode = __commonJS({
  "../lnr-plugins/node_modules/entities/lib/decode.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeXML = exports2.decodeHTMLStrict = exports2.decodeHTMLAttribute = exports2.decodeHTML = exports2.determineBranch = exports2.EntityDecoder = exports2.DecodingMode = exports2.BinTrieFlags = exports2.fromCodePoint = exports2.replaceCodePoint = exports2.decodeCodePoint = exports2.xmlDecodeTree = exports2.htmlDecodeTree = void 0;
    var decode_data_html_js_1 = __importDefault2(require_decode_data_html());
    exports2.htmlDecodeTree = decode_data_html_js_1.default;
    var decode_data_xml_js_1 = __importDefault2(require_decode_data_xml());
    exports2.xmlDecodeTree = decode_data_xml_js_1.default;
    var decode_codepoint_js_1 = __importStar(require_decode_codepoint());
    exports2.decodeCodePoint = decode_codepoint_js_1.default;
    var decode_codepoint_js_2 = require_decode_codepoint();
    Object.defineProperty(exports2, "replaceCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.replaceCodePoint;
    } });
    Object.defineProperty(exports2, "fromCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.fromCodePoint;
    } });
    var CharCodes;
    (function(CharCodes2) {
      CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
      CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
      CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
      CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
      CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
      CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
      CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
      CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
      CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
      CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
      CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
      CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
    })(CharCodes || (CharCodes = {}));
    var TO_LOWER_BIT = 32;
    var BinTrieFlags;
    (function(BinTrieFlags2) {
      BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
      BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
      BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
    })(BinTrieFlags = exports2.BinTrieFlags || (exports2.BinTrieFlags = {}));
    function isNumber(code) {
      return code >= CharCodes.ZERO && code <= CharCodes.NINE;
    }
    function isHexadecimalCharacter(code) {
      return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
    }
    function isAsciiAlphaNumeric(code) {
      return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
    }
    function isEntityInAttributeInvalidEnd(code) {
      return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
    }
    var EntityDecoderState;
    (function(EntityDecoderState2) {
      EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
      EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
      EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
      EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
      EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
    })(EntityDecoderState || (EntityDecoderState = {}));
    var DecodingMode;
    (function(DecodingMode2) {
      DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
      DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
      DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
    })(DecodingMode = exports2.DecodingMode || (exports2.DecodingMode = {}));
    var EntityDecoder = (
      /** @class */
      (function() {
        function EntityDecoder2(decodeTree, emitCodePoint, errors) {
          this.decodeTree = decodeTree;
          this.emitCodePoint = emitCodePoint;
          this.errors = errors;
          this.state = EntityDecoderState.EntityStart;
          this.consumed = 1;
          this.result = 0;
          this.treeIndex = 0;
          this.excess = 1;
          this.decodeMode = DecodingMode.Strict;
        }
        EntityDecoder2.prototype.startEntity = function(decodeMode) {
          this.decodeMode = decodeMode;
          this.state = EntityDecoderState.EntityStart;
          this.result = 0;
          this.treeIndex = 0;
          this.excess = 1;
          this.consumed = 1;
        };
        EntityDecoder2.prototype.write = function(str, offset) {
          switch (this.state) {
            case EntityDecoderState.EntityStart: {
              if (str.charCodeAt(offset) === CharCodes.NUM) {
                this.state = EntityDecoderState.NumericStart;
                this.consumed += 1;
                return this.stateNumericStart(str, offset + 1);
              }
              this.state = EntityDecoderState.NamedEntity;
              return this.stateNamedEntity(str, offset);
            }
            case EntityDecoderState.NumericStart: {
              return this.stateNumericStart(str, offset);
            }
            case EntityDecoderState.NumericDecimal: {
              return this.stateNumericDecimal(str, offset);
            }
            case EntityDecoderState.NumericHex: {
              return this.stateNumericHex(str, offset);
            }
            case EntityDecoderState.NamedEntity: {
              return this.stateNamedEntity(str, offset);
            }
          }
        };
        EntityDecoder2.prototype.stateNumericStart = function(str, offset) {
          if (offset >= str.length) {
            return -1;
          }
          if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(str, offset + 1);
          }
          this.state = EntityDecoderState.NumericDecimal;
          return this.stateNumericDecimal(str, offset);
        };
        EntityDecoder2.prototype.addToNumericResult = function(str, start, end, base) {
          if (start !== end) {
            var digitCount = end - start;
            this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
            this.consumed += digitCount;
          }
        };
        EntityDecoder2.prototype.stateNumericHex = function(str, offset) {
          var startIdx = offset;
          while (offset < str.length) {
            var char = str.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) {
              offset += 1;
            } else {
              this.addToNumericResult(str, startIdx, offset, 16);
              return this.emitNumericEntity(char, 3);
            }
          }
          this.addToNumericResult(str, startIdx, offset, 16);
          return -1;
        };
        EntityDecoder2.prototype.stateNumericDecimal = function(str, offset) {
          var startIdx = offset;
          while (offset < str.length) {
            var char = str.charCodeAt(offset);
            if (isNumber(char)) {
              offset += 1;
            } else {
              this.addToNumericResult(str, startIdx, offset, 10);
              return this.emitNumericEntity(char, 2);
            }
          }
          this.addToNumericResult(str, startIdx, offset, 10);
          return -1;
        };
        EntityDecoder2.prototype.emitNumericEntity = function(lastCp, expectedLength) {
          var _a;
          if (this.consumed <= expectedLength) {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
          }
          if (lastCp === CharCodes.SEMI) {
            this.consumed += 1;
          } else if (this.decodeMode === DecodingMode.Strict) {
            return 0;
          }
          this.emitCodePoint((0, decode_codepoint_js_1.replaceCodePoint)(this.result), this.consumed);
          if (this.errors) {
            if (lastCp !== CharCodes.SEMI) {
              this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
          }
          return this.consumed;
        };
        EntityDecoder2.prototype.stateNamedEntity = function(str, offset) {
          var decodeTree = this.decodeTree;
          var current = decodeTree[this.treeIndex];
          var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
          for (; offset < str.length; offset++, this.excess++) {
            var char = str.charCodeAt(offset);
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) {
              return this.result === 0 || // If we are parsing an attribute
              this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
              (valueLength === 0 || // And there should be no invalid characters.
              isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
            }
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            if (valueLength !== 0) {
              if (char === CharCodes.SEMI) {
                return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
              }
              if (this.decodeMode !== DecodingMode.Strict) {
                this.result = this.treeIndex;
                this.consumed += this.excess;
                this.excess = 0;
              }
            }
          }
          return -1;
        };
        EntityDecoder2.prototype.emitNotTerminatedNamedEntity = function() {
          var _a;
          var _b = this, result = _b.result, decodeTree = _b.decodeTree;
          var valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
          this.emitNamedEntityData(result, valueLength, this.consumed);
          (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
          return this.consumed;
        };
        EntityDecoder2.prototype.emitNamedEntityData = function(result, valueLength, consumed) {
          var decodeTree = this.decodeTree;
          this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
          if (valueLength === 3) {
            this.emitCodePoint(decodeTree[result + 2], consumed);
          }
          return consumed;
        };
        EntityDecoder2.prototype.end = function() {
          var _a;
          switch (this.state) {
            case EntityDecoderState.NamedEntity: {
              return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            }
            // Otherwise, emit a numeric entity if we have one.
            case EntityDecoderState.NumericDecimal: {
              return this.emitNumericEntity(0, 2);
            }
            case EntityDecoderState.NumericHex: {
              return this.emitNumericEntity(0, 3);
            }
            case EntityDecoderState.NumericStart: {
              (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
              return 0;
            }
            case EntityDecoderState.EntityStart: {
              return 0;
            }
          }
        };
        return EntityDecoder2;
      })()
    );
    exports2.EntityDecoder = EntityDecoder;
    function getDecoder(decodeTree) {
      var ret = "";
      var decoder = new EntityDecoder(decodeTree, function(str) {
        return ret += (0, decode_codepoint_js_1.fromCodePoint)(str);
      });
      return function decodeWithTrie(str, decodeMode) {
        var lastIndex = 0;
        var offset = 0;
        while ((offset = str.indexOf("&", offset)) >= 0) {
          ret += str.slice(lastIndex, offset);
          decoder.startEntity(decodeMode);
          var len = decoder.write(
            str,
            // Skip the "&"
            offset + 1
          );
          if (len < 0) {
            lastIndex = offset + decoder.end();
            break;
          }
          lastIndex = offset + len;
          offset = len === 0 ? lastIndex + 1 : lastIndex;
        }
        var result = ret + str.slice(lastIndex);
        ret = "";
        return result;
      };
    }
    function determineBranch(decodeTree, current, nodeIdx, char) {
      var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
      var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
      if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
      }
      if (jumpOffset) {
        var value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
      }
      var lo = nodeIdx;
      var hi = lo + branchCount - 1;
      while (lo <= hi) {
        var mid = lo + hi >>> 1;
        var midVal = decodeTree[mid];
        if (midVal < char) {
          lo = mid + 1;
        } else if (midVal > char) {
          hi = mid - 1;
        } else {
          return decodeTree[mid + branchCount];
        }
      }
      return -1;
    }
    exports2.determineBranch = determineBranch;
    var htmlDecoder = getDecoder(decode_data_html_js_1.default);
    var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
    function decodeHTML(str, mode) {
      if (mode === void 0) {
        mode = DecodingMode.Legacy;
      }
      return htmlDecoder(str, mode);
    }
    exports2.decodeHTML = decodeHTML;
    function decodeHTMLAttribute(str) {
      return htmlDecoder(str, DecodingMode.Attribute);
    }
    exports2.decodeHTMLAttribute = decodeHTMLAttribute;
    function decodeHTMLStrict(str) {
      return htmlDecoder(str, DecodingMode.Strict);
    }
    exports2.decodeHTMLStrict = decodeHTMLStrict;
    function decodeXML(str) {
      return xmlDecoder(str, DecodingMode.Strict);
    }
    exports2.decodeXML = decodeXML;
  }
});

// ../lnr-plugins/node_modules/entities/lib/generated/encode-html.js
var require_encode_html = __commonJS({
  "../lnr-plugins/node_modules/entities/lib/generated/encode-html.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function restoreDiff(arr) {
      for (var i = 1; i < arr.length; i++) {
        arr[i][0] += arr[i - 1][0] + 1;
      }
      return arr;
    }
    exports2.default = new Map(/* @__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
  }
});

// ../lnr-plugins/node_modules/entities/lib/escape.js
var require_escape = __commonJS({
  "../lnr-plugins/node_modules/entities/lib/escape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.escapeText = exports2.escapeAttribute = exports2.escapeUTF8 = exports2.escape = exports2.encodeXML = exports2.getCodePoint = exports2.xmlReplacer = void 0;
    exports2.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
    var xmlCodeMap = /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"]
    ]);
    exports2.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt != null ? function(str, index) {
      return str.codePointAt(index);
    } : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      function(c, index) {
        return (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
      }
    );
    function encodeXML(str) {
      var ret = "";
      var lastIdx = 0;
      var match;
      while ((match = exports2.xmlReplacer.exec(str)) !== null) {
        var i = match.index;
        var char = str.charCodeAt(i);
        var next = xmlCodeMap.get(char);
        if (next !== void 0) {
          ret += str.substring(lastIdx, i) + next;
          lastIdx = i + 1;
        } else {
          ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports2.getCodePoint)(str, i).toString(16), ";");
          lastIdx = exports2.xmlReplacer.lastIndex += Number((char & 64512) === 55296);
        }
      }
      return ret + str.substr(lastIdx);
    }
    exports2.encodeXML = encodeXML;
    exports2.escape = encodeXML;
    function getEscaper(regex, map) {
      return function escape(data) {
        var match;
        var lastIdx = 0;
        var result = "";
        while (match = regex.exec(data)) {
          if (lastIdx !== match.index) {
            result += data.substring(lastIdx, match.index);
          }
          result += map.get(match[0].charCodeAt(0));
          lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
      };
    }
    exports2.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
    exports2.escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [160, "&nbsp;"]
    ]));
    exports2.escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [160, "&nbsp;"]
    ]));
  }
});

// ../lnr-plugins/node_modules/entities/lib/encode.js
var require_encode = __commonJS({
  "../lnr-plugins/node_modules/entities/lib/encode.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.encodeNonAsciiHTML = exports2.encodeHTML = void 0;
    var encode_html_js_1 = __importDefault2(require_encode_html());
    var escape_js_1 = require_escape();
    var htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
    function encodeHTML(data) {
      return encodeHTMLTrieRe(htmlReplacer, data);
    }
    exports2.encodeHTML = encodeHTML;
    function encodeNonAsciiHTML(data) {
      return encodeHTMLTrieRe(escape_js_1.xmlReplacer, data);
    }
    exports2.encodeNonAsciiHTML = encodeNonAsciiHTML;
    function encodeHTMLTrieRe(regExp, str) {
      var ret = "";
      var lastIdx = 0;
      var match;
      while ((match = regExp.exec(str)) !== null) {
        var i = match.index;
        ret += str.substring(lastIdx, i);
        var char = str.charCodeAt(i);
        var next = encode_html_js_1.default.get(char);
        if (typeof next === "object") {
          if (i + 1 < str.length) {
            var nextChar = str.charCodeAt(i + 1);
            var value = typeof next.n === "number" ? next.n === nextChar ? next.o : void 0 : next.n.get(nextChar);
            if (value !== void 0) {
              ret += value;
              lastIdx = regExp.lastIndex += 1;
              continue;
            }
          }
          next = next.v;
        }
        if (next !== void 0) {
          ret += next;
          lastIdx = i + 1;
        } else {
          var cp = (0, escape_js_1.getCodePoint)(str, i);
          ret += "&#x".concat(cp.toString(16), ";");
          lastIdx = regExp.lastIndex += Number(cp !== char);
        }
      }
      return ret + str.substr(lastIdx);
    }
  }
});

// ../lnr-plugins/node_modules/entities/lib/index.js
var require_lib3 = __commonJS({
  "../lnr-plugins/node_modules/entities/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeXMLStrict = exports2.decodeHTML5Strict = exports2.decodeHTML4Strict = exports2.decodeHTML5 = exports2.decodeHTML4 = exports2.decodeHTMLAttribute = exports2.decodeHTMLStrict = exports2.decodeHTML = exports2.decodeXML = exports2.DecodingMode = exports2.EntityDecoder = exports2.encodeHTML5 = exports2.encodeHTML4 = exports2.encodeNonAsciiHTML = exports2.encodeHTML = exports2.escapeText = exports2.escapeAttribute = exports2.escapeUTF8 = exports2.escape = exports2.encodeXML = exports2.encode = exports2.decodeStrict = exports2.decode = exports2.EncodingMode = exports2.EntityLevel = void 0;
    var decode_js_1 = require_decode();
    var encode_js_1 = require_encode();
    var escape_js_1 = require_escape();
    var EntityLevel;
    (function(EntityLevel2) {
      EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
      EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
    })(EntityLevel = exports2.EntityLevel || (exports2.EntityLevel = {}));
    var EncodingMode;
    (function(EncodingMode2) {
      EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
      EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
      EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
      EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
      EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
    })(EncodingMode = exports2.EncodingMode || (exports2.EncodingMode = {}));
    function decode(data, options) {
      if (options === void 0) {
        options = EntityLevel.XML;
      }
      var level = typeof options === "number" ? options : options.level;
      if (level === EntityLevel.HTML) {
        var mode = typeof options === "object" ? options.mode : void 0;
        return (0, decode_js_1.decodeHTML)(data, mode);
      }
      return (0, decode_js_1.decodeXML)(data);
    }
    exports2.decode = decode;
    function decodeStrict(data, options) {
      var _a;
      if (options === void 0) {
        options = EntityLevel.XML;
      }
      var opts = typeof options === "number" ? { level: options } : options;
      (_a = opts.mode) !== null && _a !== void 0 ? _a : opts.mode = decode_js_1.DecodingMode.Strict;
      return decode(data, opts);
    }
    exports2.decodeStrict = decodeStrict;
    function encode(data, options) {
      if (options === void 0) {
        options = EntityLevel.XML;
      }
      var opts = typeof options === "number" ? { level: options } : options;
      if (opts.mode === EncodingMode.UTF8)
        return (0, escape_js_1.escapeUTF8)(data);
      if (opts.mode === EncodingMode.Attribute)
        return (0, escape_js_1.escapeAttribute)(data);
      if (opts.mode === EncodingMode.Text)
        return (0, escape_js_1.escapeText)(data);
      if (opts.level === EntityLevel.HTML) {
        if (opts.mode === EncodingMode.ASCII) {
          return (0, encode_js_1.encodeNonAsciiHTML)(data);
        }
        return (0, encode_js_1.encodeHTML)(data);
      }
      return (0, escape_js_1.encodeXML)(data);
    }
    exports2.encode = encode;
    var escape_js_2 = require_escape();
    Object.defineProperty(exports2, "encodeXML", { enumerable: true, get: function() {
      return escape_js_2.encodeXML;
    } });
    Object.defineProperty(exports2, "escape", { enumerable: true, get: function() {
      return escape_js_2.escape;
    } });
    Object.defineProperty(exports2, "escapeUTF8", { enumerable: true, get: function() {
      return escape_js_2.escapeUTF8;
    } });
    Object.defineProperty(exports2, "escapeAttribute", { enumerable: true, get: function() {
      return escape_js_2.escapeAttribute;
    } });
    Object.defineProperty(exports2, "escapeText", { enumerable: true, get: function() {
      return escape_js_2.escapeText;
    } });
    var encode_js_2 = require_encode();
    Object.defineProperty(exports2, "encodeHTML", { enumerable: true, get: function() {
      return encode_js_2.encodeHTML;
    } });
    Object.defineProperty(exports2, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return encode_js_2.encodeNonAsciiHTML;
    } });
    Object.defineProperty(exports2, "encodeHTML4", { enumerable: true, get: function() {
      return encode_js_2.encodeHTML;
    } });
    Object.defineProperty(exports2, "encodeHTML5", { enumerable: true, get: function() {
      return encode_js_2.encodeHTML;
    } });
    var decode_js_2 = require_decode();
    Object.defineProperty(exports2, "EntityDecoder", { enumerable: true, get: function() {
      return decode_js_2.EntityDecoder;
    } });
    Object.defineProperty(exports2, "DecodingMode", { enumerable: true, get: function() {
      return decode_js_2.DecodingMode;
    } });
    Object.defineProperty(exports2, "decodeXML", { enumerable: true, get: function() {
      return decode_js_2.decodeXML;
    } });
    Object.defineProperty(exports2, "decodeHTML", { enumerable: true, get: function() {
      return decode_js_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTMLStrict", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeHTMLAttribute", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLAttribute;
    } });
    Object.defineProperty(exports2, "decodeHTML4", { enumerable: true, get: function() {
      return decode_js_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTML5", { enumerable: true, get: function() {
      return decode_js_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTML4Strict", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeHTML5Strict", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeXMLStrict", { enumerable: true, get: function() {
      return decode_js_2.decodeXML;
    } });
  }
});

// ../lnr-plugins/node_modules/dom-serializer/lib/foreignNames.js
var require_foreignNames = __commonJS({
  "../lnr-plugins/node_modules/dom-serializer/lib/foreignNames.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.attributeNames = exports2.elementNames = void 0;
    exports2.elementNames = new Map([
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "textPath"
    ].map(function(val) {
      return [val.toLowerCase(), val];
    }));
    exports2.attributeNames = new Map([
      "definitionURL",
      "attributeName",
      "attributeType",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPathUnits",
      "diffuseConstant",
      "edgeMode",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan"
    ].map(function(val) {
      return [val.toLowerCase(), val];
    }));
  }
});

// ../lnr-plugins/node_modules/dom-serializer/lib/index.js
var require_lib4 = __commonJS({
  "../lnr-plugins/node_modules/dom-serializer/lib/index.js"(exports2) {
    "use strict";
    var __assign = exports2 && exports2.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.render = void 0;
    var ElementType = __importStar(require_lib());
    var entities_1 = require_lib3();
    var foreignNames_js_1 = require_foreignNames();
    var unencodedElements = /* @__PURE__ */ new Set([
      "style",
      "script",
      "xmp",
      "iframe",
      "noembed",
      "noframes",
      "plaintext",
      "noscript"
    ]);
    function replaceQuotes(value) {
      return value.replace(/"/g, "&quot;");
    }
    function formatAttributes(attributes, opts) {
      var _a;
      if (!attributes)
        return;
      var encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? entities_1.encodeXML : entities_1.escapeAttribute;
      return Object.keys(attributes).map(function(key) {
        var _a2, _b;
        var value = (_a2 = attributes[key]) !== null && _a2 !== void 0 ? _a2 : "";
        if (opts.xmlMode === "foreign") {
          key = (_b = foreignNames_js_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
          return key;
        }
        return "".concat(key, '="').concat(encode(value), '"');
      }).join(" ");
    }
    var singleTag = /* @__PURE__ */ new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    function render(node, options) {
      if (options === void 0) {
        options = {};
      }
      var nodes = "length" in node ? node : [node];
      var output = "";
      for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
      }
      return output;
    }
    exports2.render = render;
    exports2.default = render;
    function renderNode(node, options) {
      switch (node.type) {
        case ElementType.Root:
          return render(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case ElementType.Doctype:
        case ElementType.Directive:
          return renderDirective(node);
        case ElementType.Comment:
          return renderComment(node);
        case ElementType.CDATA:
          return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
          return renderTag(node, options);
        case ElementType.Text:
          return renderText(node, options);
      }
    }
    var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ]);
    var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
    function renderTag(elem, opts) {
      var _a;
      if (opts.xmlMode === "foreign") {
        elem.name = (_a = foreignNames_js_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
          opts = __assign(__assign({}, opts), { xmlMode: false });
        }
      }
      if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
      }
      var tag = "<".concat(elem.name);
      var attribs = formatAttributes(elem.attribs, opts);
      if (attribs) {
        tag += " ".concat(attribs);
      }
      if (elem.children.length === 0 && (opts.xmlMode ? (
        // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
        opts.selfClosingTags !== false
      ) : (
        // User explicitly asked for self-closing tags, even in HTML mode
        opts.selfClosingTags && singleTag.has(elem.name)
      ))) {
        if (!opts.xmlMode)
          tag += " ";
        tag += "/>";
      } else {
        tag += ">";
        if (elem.children.length > 0) {
          tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
          tag += "</".concat(elem.name, ">");
        }
      }
      return tag;
    }
    function renderDirective(elem) {
      return "<".concat(elem.data, ">");
    }
    function renderText(elem, opts) {
      var _a;
      var data = elem.data || "";
      if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, entities_1.encodeXML)(data) : (0, entities_1.escapeText)(data);
      }
      return data;
    }
    function renderCdata(elem) {
      return "<![CDATA[".concat(elem.children[0].data, "]]>");
    }
    function renderComment(elem) {
      return "<!--".concat(elem.data, "-->");
    }
  }
});

// ../lnr-plugins/node_modules/domutils/lib/stringify.js
var require_stringify = __commonJS({
  "../lnr-plugins/node_modules/domutils/lib/stringify.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.innerText = exports2.textContent = exports2.getText = exports2.getInnerHTML = exports2.getOuterHTML = void 0;
    var domhandler_1 = require_lib2();
    var dom_serializer_12 = __importDefault2(require_lib4());
    var domelementtype_1 = require_lib();
    function getOuterHTML(node, options) {
      return (0, dom_serializer_12.default)(node, options);
    }
    exports2.getOuterHTML = getOuterHTML;
    function getInnerHTML(node, options) {
      return (0, domhandler_1.hasChildren)(node) ? node.children.map(function(node2) {
        return getOuterHTML(node2, options);
      }).join("") : "";
    }
    exports2.getInnerHTML = getInnerHTML;
    function getText(node) {
      if (Array.isArray(node))
        return node.map(getText).join("");
      if ((0, domhandler_1.isTag)(node))
        return node.name === "br" ? "\n" : getText(node.children);
      if ((0, domhandler_1.isCDATA)(node))
        return getText(node.children);
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    exports2.getText = getText;
    function textContent(node) {
      if (Array.isArray(node))
        return node.map(textContent).join("");
      if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
        return textContent(node.children);
      }
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    exports2.textContent = textContent;
    function innerText(node) {
      if (Array.isArray(node))
        return node.map(innerText).join("");
      if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
        return innerText(node.children);
      }
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    exports2.innerText = innerText;
  }
});

// ../lnr-plugins/node_modules/domutils/lib/traversal.js
var require_traversal = __commonJS({
  "../lnr-plugins/node_modules/domutils/lib/traversal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.prevElementSibling = exports2.nextElementSibling = exports2.getName = exports2.hasAttrib = exports2.getAttributeValue = exports2.getSiblings = exports2.getParent = exports2.getChildren = void 0;
    var domhandler_1 = require_lib2();
    function getChildren(elem) {
      return (0, domhandler_1.hasChildren)(elem) ? elem.children : [];
    }
    exports2.getChildren = getChildren;
    function getParent(elem) {
      return elem.parent || null;
    }
    exports2.getParent = getParent;
    function getSiblings(elem) {
      var _a, _b;
      var parent = getParent(elem);
      if (parent != null)
        return getChildren(parent);
      var siblings = [elem];
      var prev = elem.prev, next = elem.next;
      while (prev != null) {
        siblings.unshift(prev);
        _a = prev, prev = _a.prev;
      }
      while (next != null) {
        siblings.push(next);
        _b = next, next = _b.next;
      }
      return siblings;
    }
    exports2.getSiblings = getSiblings;
    function getAttributeValue(elem, name) {
      var _a;
      return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
    }
    exports2.getAttributeValue = getAttributeValue;
    function hasAttrib(elem, name) {
      return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
    }
    exports2.hasAttrib = hasAttrib;
    function getName(elem) {
      return elem.name;
    }
    exports2.getName = getName;
    function nextElementSibling(elem) {
      var _a;
      var next = elem.next;
      while (next !== null && !(0, domhandler_1.isTag)(next))
        _a = next, next = _a.next;
      return next;
    }
    exports2.nextElementSibling = nextElementSibling;
    function prevElementSibling(elem) {
      var _a;
      var prev = elem.prev;
      while (prev !== null && !(0, domhandler_1.isTag)(prev))
        _a = prev, prev = _a.prev;
      return prev;
    }
    exports2.prevElementSibling = prevElementSibling;
  }
});

// ../lnr-plugins/node_modules/domutils/lib/manipulation.js
var require_manipulation = __commonJS({
  "../lnr-plugins/node_modules/domutils/lib/manipulation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.prepend = exports2.prependChild = exports2.append = exports2.appendChild = exports2.replaceElement = exports2.removeElement = void 0;
    function removeElement(elem) {
      if (elem.prev)
        elem.prev.next = elem.next;
      if (elem.next)
        elem.next.prev = elem.prev;
      if (elem.parent) {
        var childs = elem.parent.children;
        var childsIndex = childs.lastIndexOf(elem);
        if (childsIndex >= 0) {
          childs.splice(childsIndex, 1);
        }
      }
      elem.next = null;
      elem.prev = null;
      elem.parent = null;
    }
    exports2.removeElement = removeElement;
    function replaceElement(elem, replacement) {
      var prev = replacement.prev = elem.prev;
      if (prev) {
        prev.next = replacement;
      }
      var next = replacement.next = elem.next;
      if (next) {
        next.prev = replacement;
      }
      var parent = replacement.parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
      }
    }
    exports2.replaceElement = replaceElement;
    function appendChild(parent, child) {
      removeElement(child);
      child.next = null;
      child.parent = parent;
      if (parent.children.push(child) > 1) {
        var sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
      } else {
        child.prev = null;
      }
    }
    exports2.appendChild = appendChild;
    function append(elem, next) {
      removeElement(next);
      var parent = elem.parent;
      var currNext = elem.next;
      next.next = currNext;
      next.prev = elem;
      elem.next = next;
      next.parent = parent;
      if (currNext) {
        currNext.prev = next;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
      } else if (parent) {
        parent.children.push(next);
      }
    }
    exports2.append = append;
    function prependChild(parent, child) {
      removeElement(child);
      child.parent = parent;
      child.prev = null;
      if (parent.children.unshift(child) !== 1) {
        var sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
      } else {
        child.next = null;
      }
    }
    exports2.prependChild = prependChild;
    function prepend(elem, prev) {
      removeElement(prev);
      var parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
      }
      if (elem.prev) {
        elem.prev.next = prev;
      }
      prev.parent = parent;
      prev.prev = elem.prev;
      prev.next = elem;
      elem.prev = prev;
    }
    exports2.prepend = prepend;
  }
});

// ../lnr-plugins/node_modules/domutils/lib/querying.js
var require_querying = __commonJS({
  "../lnr-plugins/node_modules/domutils/lib/querying.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.findAll = exports2.existsOne = exports2.findOne = exports2.findOneChild = exports2.find = exports2.filter = void 0;
    var domhandler_1 = require_lib2();
    function filter(test, node, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return find(test, Array.isArray(node) ? node : [node], recurse, limit);
    }
    exports2.filter = filter;
    function find(test, nodes, recurse, limit) {
      var result = [];
      var nodeStack = [nodes];
      var indexStack = [0];
      for (; ; ) {
        if (indexStack[0] >= nodeStack[0].length) {
          if (indexStack.length === 1) {
            return result;
          }
          nodeStack.shift();
          indexStack.shift();
          continue;
        }
        var elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
          result.push(elem);
          if (--limit <= 0)
            return result;
        }
        if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
          indexStack.unshift(0);
          nodeStack.unshift(elem.children);
        }
      }
    }
    exports2.find = find;
    function findOneChild(test, nodes) {
      return nodes.find(test);
    }
    exports2.findOneChild = findOneChild;
    function findOne(test, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      var elem = null;
      for (var i = 0; i < nodes.length && !elem; i++) {
        var node = nodes[i];
        if (!(0, domhandler_1.isTag)(node)) {
          continue;
        } else if (test(node)) {
          elem = node;
        } else if (recurse && node.children.length > 0) {
          elem = findOne(test, node.children, true);
        }
      }
      return elem;
    }
    exports2.findOne = findOne;
    function existsOne(test, nodes) {
      return nodes.some(function(checked) {
        return (0, domhandler_1.isTag)(checked) && (test(checked) || existsOne(test, checked.children));
      });
    }
    exports2.existsOne = existsOne;
    function findAll(test, nodes) {
      var result = [];
      var nodeStack = [nodes];
      var indexStack = [0];
      for (; ; ) {
        if (indexStack[0] >= nodeStack[0].length) {
          if (nodeStack.length === 1) {
            return result;
          }
          nodeStack.shift();
          indexStack.shift();
          continue;
        }
        var elem = nodeStack[0][indexStack[0]++];
        if (!(0, domhandler_1.isTag)(elem))
          continue;
        if (test(elem))
          result.push(elem);
        if (elem.children.length > 0) {
          indexStack.unshift(0);
          nodeStack.unshift(elem.children);
        }
      }
    }
    exports2.findAll = findAll;
  }
});

// ../lnr-plugins/node_modules/domutils/lib/legacy.js
var require_legacy = __commonJS({
  "../lnr-plugins/node_modules/domutils/lib/legacy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getElementsByTagType = exports2.getElementsByTagName = exports2.getElementById = exports2.getElements = exports2.testElement = void 0;
    var domhandler_1 = require_lib2();
    var querying_js_1 = require_querying();
    var Checks = {
      tag_name: function(name) {
        if (typeof name === "function") {
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && name(elem.name);
          };
        } else if (name === "*") {
          return domhandler_1.isTag;
        }
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && elem.name === name;
        };
      },
      tag_type: function(type) {
        if (typeof type === "function") {
          return function(elem) {
            return type(elem.type);
          };
        }
        return function(elem) {
          return elem.type === type;
        };
      },
      tag_contains: function(data) {
        if (typeof data === "function") {
          return function(elem) {
            return (0, domhandler_1.isText)(elem) && data(elem.data);
          };
        }
        return function(elem) {
          return (0, domhandler_1.isText)(elem) && elem.data === data;
        };
      }
    };
    function getAttribCheck(attrib, value) {
      if (typeof value === "function") {
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
        };
      }
      return function(elem) {
        return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
      };
    }
    function combineFuncs(a, b) {
      return function(elem) {
        return a(elem) || b(elem);
      };
    }
    function compileTest(options) {
      var funcs = Object.keys(options).map(function(key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
      });
      return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
    }
    function testElement(options, node) {
      var test = compileTest(options);
      return test ? test(node) : true;
    }
    exports2.testElement = testElement;
    function getElements(options, nodes, recurse, limit) {
      if (limit === void 0) {
        limit = Infinity;
      }
      var test = compileTest(options);
      return test ? (0, querying_js_1.filter)(test, nodes, recurse, limit) : [];
    }
    exports2.getElements = getElements;
    function getElementById(id, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (!Array.isArray(nodes))
        nodes = [nodes];
      return (0, querying_js_1.findOne)(getAttribCheck("id", id), nodes, recurse);
    }
    exports2.getElementById = getElementById;
    function getElementsByTagName(tagName, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return (0, querying_js_1.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
    }
    exports2.getElementsByTagName = getElementsByTagName;
    function getElementsByTagType(type, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return (0, querying_js_1.filter)(Checks["tag_type"](type), nodes, recurse, limit);
    }
    exports2.getElementsByTagType = getElementsByTagType;
  }
});

// ../lnr-plugins/node_modules/domutils/lib/helpers.js
var require_helpers = __commonJS({
  "../lnr-plugins/node_modules/domutils/lib/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.uniqueSort = exports2.compareDocumentPosition = exports2.DocumentPosition = exports2.removeSubsets = void 0;
    var domhandler_1 = require_lib2();
    function removeSubsets(nodes) {
      var idx = nodes.length;
      while (--idx >= 0) {
        var node = nodes[idx];
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
          nodes.splice(idx, 1);
          continue;
        }
        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
          if (nodes.includes(ancestor)) {
            nodes.splice(idx, 1);
            break;
          }
        }
      }
      return nodes;
    }
    exports2.removeSubsets = removeSubsets;
    var DocumentPosition;
    (function(DocumentPosition2) {
      DocumentPosition2[DocumentPosition2["DISCONNECTED"] = 1] = "DISCONNECTED";
      DocumentPosition2[DocumentPosition2["PRECEDING"] = 2] = "PRECEDING";
      DocumentPosition2[DocumentPosition2["FOLLOWING"] = 4] = "FOLLOWING";
      DocumentPosition2[DocumentPosition2["CONTAINS"] = 8] = "CONTAINS";
      DocumentPosition2[DocumentPosition2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
    })(DocumentPosition = exports2.DocumentPosition || (exports2.DocumentPosition = {}));
    function compareDocumentPosition(nodeA, nodeB) {
      var aParents = [];
      var bParents = [];
      if (nodeA === nodeB) {
        return 0;
      }
      var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
      while (current) {
        aParents.unshift(current);
        current = current.parent;
      }
      current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
      while (current) {
        bParents.unshift(current);
        current = current.parent;
      }
      var maxIdx = Math.min(aParents.length, bParents.length);
      var idx = 0;
      while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
      }
      if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
      }
      var sharedParent = aParents[idx - 1];
      var siblings = sharedParent.children;
      var aSibling = aParents[idx];
      var bSibling = bParents[idx];
      if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
          return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
      }
      if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
      }
      return DocumentPosition.PRECEDING;
    }
    exports2.compareDocumentPosition = compareDocumentPosition;
    function uniqueSort(nodes) {
      nodes = nodes.filter(function(node, i, arr) {
        return !arr.includes(node, i + 1);
      });
      nodes.sort(function(a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
          return -1;
        } else if (relative & DocumentPosition.FOLLOWING) {
          return 1;
        }
        return 0;
      });
      return nodes;
    }
    exports2.uniqueSort = uniqueSort;
  }
});

// ../lnr-plugins/node_modules/domutils/lib/feeds.js
var require_feeds = __commonJS({
  "../lnr-plugins/node_modules/domutils/lib/feeds.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getFeed = void 0;
    var stringify_js_1 = require_stringify();
    var legacy_js_1 = require_legacy();
    function getFeed(doc) {
      var feedRoot = getOneElement(isValidFeed, doc);
      return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
    }
    exports2.getFeed = getFeed;
    function getAtomFeed(feedRoot) {
      var _a;
      var childs = feedRoot.children;
      var feed = {
        type: "atom",
        items: (0, legacy_js_1.getElementsByTagName)("entry", childs).map(function(item) {
          var _a2;
          var children = item.children;
          var entry = { media: getMediaElements(children) };
          addConditionally(entry, "id", "id", children);
          addConditionally(entry, "title", "title", children);
          var href2 = (_a2 = getOneElement("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs["href"];
          if (href2) {
            entry.link = href2;
          }
          var description = fetch("summary", children) || fetch("content", children);
          if (description) {
            entry.description = description;
          }
          var pubDate = fetch("updated", children);
          if (pubDate) {
            entry.pubDate = new Date(pubDate);
          }
          return entry;
        })
      };
      addConditionally(feed, "id", "id", childs);
      addConditionally(feed, "title", "title", childs);
      var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
      if (href) {
        feed.link = href;
      }
      addConditionally(feed, "description", "subtitle", childs);
      var updated = fetch("updated", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "email", childs, true);
      return feed;
    }
    function getRssFeed(feedRoot) {
      var _a, _b;
      var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
      var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_js_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
          var children = item.children;
          var entry = { media: getMediaElements(children) };
          addConditionally(entry, "id", "guid", children);
          addConditionally(entry, "title", "title", children);
          addConditionally(entry, "link", "link", children);
          addConditionally(entry, "description", "description", children);
          var pubDate = fetch("pubDate", children) || fetch("dc:date", children);
          if (pubDate)
            entry.pubDate = new Date(pubDate);
          return entry;
        })
      };
      addConditionally(feed, "title", "title", childs);
      addConditionally(feed, "link", "link", childs);
      addConditionally(feed, "description", "description", childs);
      var updated = fetch("lastBuildDate", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "managingEditor", childs, true);
      return feed;
    }
    var MEDIA_KEYS_STRING = ["url", "type", "lang"];
    var MEDIA_KEYS_INT = [
      "fileSize",
      "bitrate",
      "framerate",
      "samplingrate",
      "channels",
      "duration",
      "height",
      "width"
    ];
    function getMediaElements(where) {
      return (0, legacy_js_1.getElementsByTagName)("media:content", where).map(function(elem) {
        var attribs = elem.attribs;
        var media = {
          medium: attribs["medium"],
          isDefault: !!attribs["isDefault"]
        };
        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
          var attrib = MEDIA_KEYS_STRING_1[_i];
          if (attribs[attrib]) {
            media[attrib] = attribs[attrib];
          }
        }
        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
          var attrib = MEDIA_KEYS_INT_1[_a];
          if (attribs[attrib]) {
            media[attrib] = parseInt(attribs[attrib], 10);
          }
        }
        if (attribs["expression"]) {
          media.expression = attribs["expression"];
        }
        return media;
      });
    }
    function getOneElement(tagName, node) {
      return (0, legacy_js_1.getElementsByTagName)(tagName, node, true, 1)[0];
    }
    function fetch(tagName, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      return (0, stringify_js_1.textContent)((0, legacy_js_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
    }
    function addConditionally(obj, prop, tagName, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      var val = fetch(tagName, where, recurse);
      if (val)
        obj[prop] = val;
    }
    function isValidFeed(value) {
      return value === "rss" || value === "feed" || value === "rdf:RDF";
    }
  }
});

// ../lnr-plugins/node_modules/domutils/lib/index.js
var require_lib5 = __commonJS({
  "../lnr-plugins/node_modules/domutils/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.hasChildren = exports2.isDocument = exports2.isComment = exports2.isText = exports2.isCDATA = exports2.isTag = void 0;
    __exportStar(require_stringify(), exports2);
    __exportStar(require_traversal(), exports2);
    __exportStar(require_manipulation(), exports2);
    __exportStar(require_querying(), exports2);
    __exportStar(require_legacy(), exports2);
    __exportStar(require_helpers(), exports2);
    __exportStar(require_feeds(), exports2);
    var domhandler_1 = require_lib2();
    Object.defineProperty(exports2, "isTag", { enumerable: true, get: function() {
      return domhandler_1.isTag;
    } });
    Object.defineProperty(exports2, "isCDATA", { enumerable: true, get: function() {
      return domhandler_1.isCDATA;
    } });
    Object.defineProperty(exports2, "isText", { enumerable: true, get: function() {
      return domhandler_1.isText;
    } });
    Object.defineProperty(exports2, "isComment", { enumerable: true, get: function() {
      return domhandler_1.isComment;
    } });
    Object.defineProperty(exports2, "isDocument", { enumerable: true, get: function() {
      return domhandler_1.isDocument;
    } });
    Object.defineProperty(exports2, "hasChildren", { enumerable: true, get: function() {
      return domhandler_1.hasChildren;
    } });
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/static.js
var require_static = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/static.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.html = html;
    exports2.xml = xml;
    exports2.text = text;
    exports2.parseHTML = parseHTML;
    exports2.root = root;
    exports2.contains = contains;
    exports2.extract = extract;
    exports2.merge = merge;
    var domutils_1 = require_lib5();
    var options_js_1 = require_options();
    function render(that, dom, options) {
      if (!that)
        return "";
      return that(dom !== null && dom !== void 0 ? dom : that._root.children, null, void 0, options).toString();
    }
    function isOptions(dom, options) {
      return !options && typeof dom === "object" && dom != null && !("length" in dom) && !("type" in dom);
    }
    function html(dom, options) {
      const toRender = isOptions(dom) ? (options = dom, void 0) : dom;
      const opts = {
        ...this === null || this === void 0 ? void 0 : this._options,
        ...(0, options_js_1.flattenOptions)(options)
      };
      return render(this, toRender, opts);
    }
    function xml(dom) {
      const options = { ...this._options, xmlMode: true };
      return render(this, dom, options);
    }
    function text(elements) {
      const elems = elements !== null && elements !== void 0 ? elements : this ? this.root() : [];
      let ret = "";
      for (let i = 0; i < elems.length; i++) {
        ret += (0, domutils_1.textContent)(elems[i]);
      }
      return ret;
    }
    function parseHTML(data, context, keepScripts = typeof context === "boolean" ? context : false) {
      if (!data || typeof data !== "string") {
        return null;
      }
      if (typeof context === "boolean") {
        keepScripts = context;
      }
      const parsed = this.load(data, this._options, false);
      if (!keepScripts) {
        parsed("script").remove();
      }
      return [...parsed.root()[0].children];
    }
    function root() {
      return this(this._root);
    }
    function contains(container, contained) {
      if (contained === container) {
        return false;
      }
      let next = contained;
      while (next && next !== next.parent) {
        next = next.parent;
        if (next === container) {
          return true;
        }
      }
      return false;
    }
    function extract(map) {
      return this.root().extract(map);
    }
    function merge(arr1, arr2) {
      if (!isArrayLike(arr1) || !isArrayLike(arr2)) {
        return;
      }
      let newLength = arr1.length;
      const len = +arr2.length;
      for (let i = 0; i < len; i++) {
        arr1[newLength++] = arr2[i];
      }
      arr1.length = newLength;
      return arr1;
    }
    function isArrayLike(item) {
      if (Array.isArray(item)) {
        return true;
      }
      if (typeof item !== "object" || item === null || !("length" in item) || typeof item.length !== "number" || item.length < 0) {
        return false;
      }
      for (let i = 0; i < item.length; i++) {
        if (!(i in item)) {
          return false;
        }
      }
      return true;
    }
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/utils.js
var require_utils = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/utils.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isCheerio = isCheerio;
    exports2.camelCase = camelCase;
    exports2.cssCase = cssCase;
    exports2.domEach = domEach;
    exports2.isHtml = isHtml;
    function isCheerio(maybeCheerio) {
      return maybeCheerio.cheerio != null;
    }
    function camelCase(str) {
      return str.replace(/[._-](\w|$)/g, (_, x) => x.toUpperCase());
    }
    function cssCase(str) {
      return str.replace(/[A-Z]/g, "-$&").toLowerCase();
    }
    function domEach(array, fn) {
      const len = array.length;
      for (let i = 0; i < len; i++)
        fn(array[i], i);
      return array;
    }
    var CharacterCodes;
    (function(CharacterCodes2) {
      CharacterCodes2[CharacterCodes2["LowerA"] = 97] = "LowerA";
      CharacterCodes2[CharacterCodes2["LowerZ"] = 122] = "LowerZ";
      CharacterCodes2[CharacterCodes2["UpperA"] = 65] = "UpperA";
      CharacterCodes2[CharacterCodes2["UpperZ"] = 90] = "UpperZ";
      CharacterCodes2[CharacterCodes2["Exclamation"] = 33] = "Exclamation";
    })(CharacterCodes || (CharacterCodes = {}));
    function isHtml(str) {
      const tagStart = str.indexOf("<");
      if (tagStart < 0 || tagStart > str.length - 3)
        return false;
      const tagChar = str.charCodeAt(tagStart + 1);
      return (tagChar >= CharacterCodes.LowerA && tagChar <= CharacterCodes.LowerZ || tagChar >= CharacterCodes.UpperA && tagChar <= CharacterCodes.UpperZ || tagChar === CharacterCodes.Exclamation) && str.includes(">", tagStart + 2);
    }
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/api/attributes.js
var require_attributes = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/api/attributes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.attr = attr;
    exports2.prop = prop;
    exports2.data = data;
    exports2.val = val;
    exports2.removeAttr = removeAttr;
    exports2.hasClass = hasClass;
    exports2.addClass = addClass;
    exports2.removeClass = removeClass;
    exports2.toggleClass = toggleClass;
    var static_js_12 = require_static();
    var utils_js_1 = require_utils();
    var domhandler_1 = require_lib2();
    var domutils_1 = require_lib5();
    var hasOwn = Object.prototype.hasOwnProperty;
    var rspace = /\s+/;
    var dataAttrPrefix = "data-";
    var rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
    var rbrace = /^{[^]*}$|^\[[^]*]$/;
    function getAttr(elem, name, xmlMode) {
      var _a;
      if (!elem || !(0, domhandler_1.isTag)(elem))
        return void 0;
      (_a = elem.attribs) !== null && _a !== void 0 ? _a : elem.attribs = {};
      if (!name) {
        return elem.attribs;
      }
      if (hasOwn.call(elem.attribs, name)) {
        return !xmlMode && rboolean.test(name) ? name : elem.attribs[name];
      }
      if (elem.name === "option" && name === "value") {
        return (0, static_js_12.text)(elem.children);
      }
      if (elem.name === "input" && (elem.attribs["type"] === "radio" || elem.attribs["type"] === "checkbox") && name === "value") {
        return "on";
      }
      return void 0;
    }
    function setAttr(el, name, value) {
      if (value === null) {
        removeAttribute(el, name);
      } else {
        el.attribs[name] = `${value}`;
      }
    }
    function attr(name, value) {
      if (typeof name === "object" || value !== void 0) {
        if (typeof value === "function") {
          if (typeof name !== "string") {
            {
              throw new Error("Bad combination of arguments.");
            }
          }
          return (0, utils_js_1.domEach)(this, (el, i) => {
            if ((0, domhandler_1.isTag)(el))
              setAttr(el, name, value.call(el, i, el.attribs[name]));
          });
        }
        return (0, utils_js_1.domEach)(this, (el) => {
          if (!(0, domhandler_1.isTag)(el))
            return;
          if (typeof name === "object") {
            for (const objName of Object.keys(name)) {
              const objValue = name[objName];
              setAttr(el, objName, objValue);
            }
          } else {
            setAttr(el, name, value);
          }
        });
      }
      return arguments.length > 1 ? this : getAttr(this[0], name, this.options.xmlMode);
    }
    function getProp(el, name, xmlMode) {
      return name in el ? (
        // @ts-expect-error TS doesn't like us accessing the value directly here.
        el[name]
      ) : !xmlMode && rboolean.test(name) ? getAttr(el, name, false) !== void 0 : getAttr(el, name, xmlMode);
    }
    function setProp(el, name, value, xmlMode) {
      if (name in el) {
        el[name] = value;
      } else {
        setAttr(el, name, !xmlMode && rboolean.test(name) ? value ? "" : null : `${value}`);
      }
    }
    function prop(name, value) {
      var _a;
      if (typeof name === "string" && value === void 0) {
        const el = this[0];
        if (!el || !(0, domhandler_1.isTag)(el))
          return void 0;
        switch (name) {
          case "style": {
            const property = this.css();
            const keys = Object.keys(property);
            for (let i = 0; i < keys.length; i++) {
              property[i] = keys[i];
            }
            property.length = keys.length;
            return property;
          }
          case "tagName":
          case "nodeName": {
            return el.name.toUpperCase();
          }
          case "href":
          case "src": {
            const prop2 = (_a = el.attribs) === null || _a === void 0 ? void 0 : _a[name];
            if (typeof URL !== "undefined" && (name === "href" && (el.tagName === "a" || el.tagName === "link") || name === "src" && (el.tagName === "img" || el.tagName === "iframe" || el.tagName === "audio" || el.tagName === "video" || el.tagName === "source")) && prop2 !== void 0 && this.options.baseURI) {
              return new URL(prop2, this.options.baseURI).href;
            }
            return prop2;
          }
          case "innerText": {
            return (0, domutils_1.innerText)(el);
          }
          case "textContent": {
            return (0, domutils_1.textContent)(el);
          }
          case "outerHTML": {
            return this.clone().wrap("<container />").parent().html();
          }
          case "innerHTML": {
            return this.html();
          }
          default: {
            return getProp(el, name, this.options.xmlMode);
          }
        }
      }
      if (typeof name === "object" || value !== void 0) {
        if (typeof value === "function") {
          if (typeof name === "object") {
            throw new TypeError("Bad combination of arguments.");
          }
          return (0, utils_js_1.domEach)(this, (el, i) => {
            if ((0, domhandler_1.isTag)(el)) {
              setProp(el, name, value.call(el, i, getProp(el, name, this.options.xmlMode)), this.options.xmlMode);
            }
          });
        }
        return (0, utils_js_1.domEach)(this, (el) => {
          if (!(0, domhandler_1.isTag)(el))
            return;
          if (typeof name === "object") {
            for (const key of Object.keys(name)) {
              const val2 = name[key];
              setProp(el, key, val2, this.options.xmlMode);
            }
          } else {
            setProp(el, name, value, this.options.xmlMode);
          }
        });
      }
      return void 0;
    }
    function setData(elem, name, value) {
      var _a;
      (_a = elem.data) !== null && _a !== void 0 ? _a : elem.data = {};
      if (typeof name === "object")
        Object.assign(elem.data, name);
      else if (typeof name === "string" && value !== void 0) {
        elem.data[name] = value;
      }
    }
    function readAllData(el) {
      for (const domName of Object.keys(el.attribs)) {
        if (!domName.startsWith(dataAttrPrefix)) {
          continue;
        }
        const jsName = (0, utils_js_1.camelCase)(domName.slice(dataAttrPrefix.length));
        if (!hasOwn.call(el.data, jsName)) {
          el.data[jsName] = parseDataValue(el.attribs[domName]);
        }
      }
      return el.data;
    }
    function readData(el, name) {
      const domName = dataAttrPrefix + (0, utils_js_1.cssCase)(name);
      const data2 = el.data;
      if (hasOwn.call(data2, name)) {
        return data2[name];
      }
      if (hasOwn.call(el.attribs, domName)) {
        return data2[name] = parseDataValue(el.attribs[domName]);
      }
      return void 0;
    }
    function parseDataValue(value) {
      if (value === "null")
        return null;
      if (value === "true")
        return true;
      if (value === "false")
        return false;
      const num = Number(value);
      if (value === String(num))
        return num;
      if (rbrace.test(value)) {
        try {
          return JSON.parse(value);
        } catch {
        }
      }
      return value;
    }
    function data(name, value) {
      var _a;
      const elem = this[0];
      if (!elem || !(0, domhandler_1.isTag)(elem))
        return;
      const dataEl = elem;
      (_a = dataEl.data) !== null && _a !== void 0 ? _a : dataEl.data = {};
      if (name == null) {
        return readAllData(dataEl);
      }
      if (typeof name === "object" || value !== void 0) {
        (0, utils_js_1.domEach)(this, (el) => {
          if ((0, domhandler_1.isTag)(el)) {
            if (typeof name === "object")
              setData(el, name);
            else
              setData(el, name, value);
          }
        });
        return this;
      }
      return readData(dataEl, name);
    }
    function val(value) {
      const querying = arguments.length === 0;
      const element = this[0];
      if (!element || !(0, domhandler_1.isTag)(element))
        return querying ? void 0 : this;
      switch (element.name) {
        case "textarea": {
          return this.text(value);
        }
        case "select": {
          const option = this.find("option:selected");
          if (!querying) {
            if (this.attr("multiple") == null && typeof value === "object") {
              return this;
            }
            this.find("option").removeAttr("selected");
            const values = typeof value === "object" ? value : [value];
            for (const val2 of values) {
              this.find(`option[value="${val2}"]`).attr("selected", "");
            }
            return this;
          }
          return this.attr("multiple") ? option.toArray().map((el) => (0, static_js_12.text)(el.children)) : option.attr("value");
        }
        case "input":
        case "option": {
          return querying ? this.attr("value") : this.attr("value", value);
        }
      }
      return void 0;
    }
    function removeAttribute(elem, name) {
      if (!elem.attribs || !hasOwn.call(elem.attribs, name))
        return;
      delete elem.attribs[name];
    }
    function splitNames(names) {
      return names ? names.trim().split(rspace) : [];
    }
    function removeAttr(name) {
      const attrNames = splitNames(name);
      for (const attrName of attrNames) {
        (0, utils_js_1.domEach)(this, (elem) => {
          if ((0, domhandler_1.isTag)(elem))
            removeAttribute(elem, attrName);
        });
      }
      return this;
    }
    function hasClass(className) {
      return this.toArray().some((elem) => {
        const clazz = (0, domhandler_1.isTag)(elem) && elem.attribs["class"];
        let idx = -1;
        if (clazz && className.length > 0) {
          while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
            const end = idx + className.length;
            if ((idx === 0 || rspace.test(clazz[idx - 1])) && (end === clazz.length || rspace.test(clazz[end]))) {
              return true;
            }
          }
        }
        return false;
      });
    }
    function addClass(value) {
      if (typeof value === "function") {
        return (0, utils_js_1.domEach)(this, (el, i) => {
          if ((0, domhandler_1.isTag)(el)) {
            const className = el.attribs["class"] || "";
            addClass.call([el], value.call(el, i, className));
          }
        });
      }
      if (!value || typeof value !== "string")
        return this;
      const classNames = value.split(rspace);
      const numElements = this.length;
      for (let i = 0; i < numElements; i++) {
        const el = this[i];
        if (!(0, domhandler_1.isTag)(el))
          continue;
        const className = getAttr(el, "class", false);
        if (className) {
          let setClass = ` ${className} `;
          for (const cn of classNames) {
            const appendClass = `${cn} `;
            if (!setClass.includes(` ${appendClass}`))
              setClass += appendClass;
          }
          setAttr(el, "class", setClass.trim());
        } else {
          setAttr(el, "class", classNames.join(" ").trim());
        }
      }
      return this;
    }
    function removeClass(name) {
      if (typeof name === "function") {
        return (0, utils_js_1.domEach)(this, (el, i) => {
          if ((0, domhandler_1.isTag)(el)) {
            removeClass.call([el], name.call(el, i, el.attribs["class"] || ""));
          }
        });
      }
      const classes = splitNames(name);
      const numClasses = classes.length;
      const removeAll = arguments.length === 0;
      return (0, utils_js_1.domEach)(this, (el) => {
        if (!(0, domhandler_1.isTag)(el))
          return;
        if (removeAll) {
          el.attribs["class"] = "";
        } else {
          const elClasses = splitNames(el.attribs["class"]);
          let changed = false;
          for (let j = 0; j < numClasses; j++) {
            const index = elClasses.indexOf(classes[j]);
            if (index >= 0) {
              elClasses.splice(index, 1);
              changed = true;
              j--;
            }
          }
          if (changed) {
            el.attribs["class"] = elClasses.join(" ");
          }
        }
      });
    }
    function toggleClass(value, stateVal) {
      if (typeof value === "function") {
        return (0, utils_js_1.domEach)(this, (el, i) => {
          if ((0, domhandler_1.isTag)(el)) {
            toggleClass.call([el], value.call(el, i, el.attribs["class"] || "", stateVal), stateVal);
          }
        });
      }
      if (!value || typeof value !== "string")
        return this;
      const classNames = value.split(rspace);
      const numClasses = classNames.length;
      const state = typeof stateVal === "boolean" ? stateVal ? 1 : -1 : 0;
      const numElements = this.length;
      for (let i = 0; i < numElements; i++) {
        const el = this[i];
        if (!(0, domhandler_1.isTag)(el))
          continue;
        const elementClasses = splitNames(el.attribs["class"]);
        for (let j = 0; j < numClasses; j++) {
          const index = elementClasses.indexOf(classNames[j]);
          if (state >= 0 && index < 0) {
            elementClasses.push(classNames[j]);
          } else if (state <= 0 && index >= 0) {
            elementClasses.splice(index, 1);
          }
        }
        el.attribs["class"] = elementClasses.join(" ");
      }
      return this;
    }
  }
});

// ../lnr-plugins/node_modules/css-what/lib/es/types.js
var SelectorType, IgnoreCaseMode, AttributeAction;
var init_types = __esm({
  "../lnr-plugins/node_modules/css-what/lib/es/types.js"() {
    (function(SelectorType2) {
      SelectorType2["Attribute"] = "attribute";
      SelectorType2["Pseudo"] = "pseudo";
      SelectorType2["PseudoElement"] = "pseudo-element";
      SelectorType2["Tag"] = "tag";
      SelectorType2["Universal"] = "universal";
      SelectorType2["Adjacent"] = "adjacent";
      SelectorType2["Child"] = "child";
      SelectorType2["Descendant"] = "descendant";
      SelectorType2["Parent"] = "parent";
      SelectorType2["Sibling"] = "sibling";
      SelectorType2["ColumnCombinator"] = "column-combinator";
    })(SelectorType || (SelectorType = {}));
    IgnoreCaseMode = {
      Unknown: null,
      QuirksMode: "quirks",
      IgnoreCase: true,
      CaseSensitive: false
    };
    (function(AttributeAction2) {
      AttributeAction2["Any"] = "any";
      AttributeAction2["Element"] = "element";
      AttributeAction2["End"] = "end";
      AttributeAction2["Equals"] = "equals";
      AttributeAction2["Exists"] = "exists";
      AttributeAction2["Hyphen"] = "hyphen";
      AttributeAction2["Not"] = "not";
      AttributeAction2["Start"] = "start";
    })(AttributeAction || (AttributeAction = {}));
  }
});

// ../lnr-plugins/node_modules/css-what/lib/es/parse.js
function isTraversal(selector) {
  switch (selector.type) {
    case SelectorType.Adjacent:
    case SelectorType.Child:
    case SelectorType.Descendant:
    case SelectorType.Parent:
    case SelectorType.Sibling:
    case SelectorType.ColumnCombinator:
      return true;
    default:
      return false;
  }
}
function funescape(_, escaped, escapedWhitespace) {
  const high = parseInt(escaped, 16) - 65536;
  return high !== high || escapedWhitespace ? escaped : high < 0 ? (
    // BMP codepoint
    String.fromCharCode(high + 65536)
  ) : (
    // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
  );
}
function unescapeCSS(str) {
  return str.replace(reEscape, funescape);
}
function isQuote(c) {
  return c === 39 || c === 34;
}
function isWhitespace(c) {
  return c === 32 || c === 9 || c === 10 || c === 12 || c === 13;
}
function parse(selector) {
  const subselects = [];
  const endIndex = parseSelector(subselects, `${selector}`, 0);
  if (endIndex < selector.length) {
    throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
  }
  return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
  let tokens = [];
  function getName(offset) {
    const match = selector.slice(selectorIndex + offset).match(reName);
    if (!match) {
      throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
    }
    const [name] = match;
    selectorIndex += offset + name.length;
    return unescapeCSS(name);
  }
  function stripWhitespace(offset) {
    selectorIndex += offset;
    while (selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))) {
      selectorIndex++;
    }
  }
  function readValueWithParenthesis() {
    selectorIndex += 1;
    const start = selectorIndex;
    let counter = 1;
    for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
      if (selector.charCodeAt(selectorIndex) === 40 && !isEscaped(selectorIndex)) {
        counter++;
      } else if (selector.charCodeAt(selectorIndex) === 41 && !isEscaped(selectorIndex)) {
        counter--;
      }
    }
    if (counter) {
      throw new Error("Parenthesis not matched");
    }
    return unescapeCSS(selector.slice(start, selectorIndex - 1));
  }
  function isEscaped(pos) {
    let slashCount = 0;
    while (selector.charCodeAt(--pos) === 92)
      slashCount++;
    return (slashCount & 1) === 1;
  }
  function ensureNotTraversal() {
    if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
      throw new Error("Did not expect successive traversals.");
    }
  }
  function addTraversal(type) {
    if (tokens.length > 0 && tokens[tokens.length - 1].type === SelectorType.Descendant) {
      tokens[tokens.length - 1].type = type;
      return;
    }
    ensureNotTraversal();
    tokens.push({ type });
  }
  function addSpecialAttribute(name, action) {
    tokens.push({
      type: SelectorType.Attribute,
      name,
      action,
      value: getName(1),
      namespace: null,
      ignoreCase: "quirks"
    });
  }
  function finalizeSubselector() {
    if (tokens.length && tokens[tokens.length - 1].type === SelectorType.Descendant) {
      tokens.pop();
    }
    if (tokens.length === 0) {
      throw new Error("Empty sub-selector");
    }
    subselects.push(tokens);
  }
  stripWhitespace(0);
  if (selector.length === selectorIndex) {
    return selectorIndex;
  }
  loop: while (selectorIndex < selector.length) {
    const firstChar = selector.charCodeAt(selectorIndex);
    switch (firstChar) {
      // Whitespace
      case 32:
      case 9:
      case 10:
      case 12:
      case 13: {
        if (tokens.length === 0 || tokens[0].type !== SelectorType.Descendant) {
          ensureNotTraversal();
          tokens.push({ type: SelectorType.Descendant });
        }
        stripWhitespace(1);
        break;
      }
      // Traversals
      case 62: {
        addTraversal(SelectorType.Child);
        stripWhitespace(1);
        break;
      }
      case 60: {
        addTraversal(SelectorType.Parent);
        stripWhitespace(1);
        break;
      }
      case 126: {
        addTraversal(SelectorType.Sibling);
        stripWhitespace(1);
        break;
      }
      case 43: {
        addTraversal(SelectorType.Adjacent);
        stripWhitespace(1);
        break;
      }
      // Special attribute selectors: .class, #id
      case 46: {
        addSpecialAttribute("class", AttributeAction.Element);
        break;
      }
      case 35: {
        addSpecialAttribute("id", AttributeAction.Equals);
        break;
      }
      case 91: {
        stripWhitespace(1);
        let name;
        let namespace = null;
        if (selector.charCodeAt(selectorIndex) === 124) {
          name = getName(1);
        } else if (selector.startsWith("*|", selectorIndex)) {
          namespace = "*";
          name = getName(2);
        } else {
          name = getName(0);
          if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 61) {
            namespace = name;
            name = getName(1);
          }
        }
        stripWhitespace(0);
        let action = AttributeAction.Exists;
        const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
        if (possibleAction) {
          action = possibleAction;
          if (selector.charCodeAt(selectorIndex + 1) !== 61) {
            throw new Error("Expected `=`");
          }
          stripWhitespace(2);
        } else if (selector.charCodeAt(selectorIndex) === 61) {
          action = AttributeAction.Equals;
          stripWhitespace(1);
        }
        let value = "";
        let ignoreCase = null;
        if (action !== "exists") {
          if (isQuote(selector.charCodeAt(selectorIndex))) {
            const quote = selector.charCodeAt(selectorIndex);
            let sectionEnd = selectorIndex + 1;
            while (sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
              sectionEnd += 1;
            }
            if (selector.charCodeAt(sectionEnd) !== quote) {
              throw new Error("Attribute value didn't end");
            }
            value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
            selectorIndex = sectionEnd + 1;
          } else {
            const valueStart = selectorIndex;
            while (selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 || isEscaped(selectorIndex))) {
              selectorIndex += 1;
            }
            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
          }
          stripWhitespace(0);
          const forceIgnore = selector.charCodeAt(selectorIndex) | 32;
          if (forceIgnore === 115) {
            ignoreCase = false;
            stripWhitespace(1);
          } else if (forceIgnore === 105) {
            ignoreCase = true;
            stripWhitespace(1);
          }
        }
        if (selector.charCodeAt(selectorIndex) !== 93) {
          throw new Error("Attribute selector didn't terminate");
        }
        selectorIndex += 1;
        const attributeSelector = {
          type: SelectorType.Attribute,
          name,
          action,
          value,
          namespace,
          ignoreCase
        };
        tokens.push(attributeSelector);
        break;
      }
      case 58: {
        if (selector.charCodeAt(selectorIndex + 1) === 58) {
          tokens.push({
            type: SelectorType.PseudoElement,
            name: getName(2).toLowerCase(),
            data: selector.charCodeAt(selectorIndex) === 40 ? readValueWithParenthesis() : null
          });
          continue;
        }
        const name = getName(1).toLowerCase();
        let data = null;
        if (selector.charCodeAt(selectorIndex) === 40) {
          if (unpackPseudos.has(name)) {
            if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
              throw new Error(`Pseudo-selector ${name} cannot be quoted`);
            }
            data = [];
            selectorIndex = parseSelector(data, selector, selectorIndex + 1);
            if (selector.charCodeAt(selectorIndex) !== 41) {
              throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
            }
            selectorIndex += 1;
          } else {
            data = readValueWithParenthesis();
            if (stripQuotesFromPseudos.has(name)) {
              const quot = data.charCodeAt(0);
              if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                data = data.slice(1, -1);
              }
            }
            data = unescapeCSS(data);
          }
        }
        tokens.push({ type: SelectorType.Pseudo, name, data });
        break;
      }
      case 44: {
        finalizeSubselector();
        tokens = [];
        stripWhitespace(1);
        break;
      }
      default: {
        if (selector.startsWith("/*", selectorIndex)) {
          const endIndex = selector.indexOf("*/", selectorIndex + 2);
          if (endIndex < 0) {
            throw new Error("Comment was not terminated");
          }
          selectorIndex = endIndex + 2;
          if (tokens.length === 0) {
            stripWhitespace(0);
          }
          break;
        }
        let namespace = null;
        let name;
        if (firstChar === 42) {
          selectorIndex += 1;
          name = "*";
        } else if (firstChar === 124) {
          name = "";
          if (selector.charCodeAt(selectorIndex + 1) === 124) {
            addTraversal(SelectorType.ColumnCombinator);
            stripWhitespace(2);
            break;
          }
        } else if (reName.test(selector.slice(selectorIndex))) {
          name = getName(0);
        } else {
          break loop;
        }
        if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 124) {
          namespace = name;
          if (selector.charCodeAt(selectorIndex + 1) === 42) {
            name = "*";
            selectorIndex += 2;
          } else {
            name = getName(1);
          }
        }
        tokens.push(name === "*" ? { type: SelectorType.Universal, namespace } : { type: SelectorType.Tag, name, namespace });
      }
    }
  }
  finalizeSubselector();
  return selectorIndex;
}
var reName, reEscape, actionTypes, unpackPseudos, stripQuotesFromPseudos;
var init_parse = __esm({
  "../lnr-plugins/node_modules/css-what/lib/es/parse.js"() {
    init_types();
    reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
    reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
    actionTypes = /* @__PURE__ */ new Map([
      [126, AttributeAction.Element],
      [94, AttributeAction.Start],
      [36, AttributeAction.End],
      [42, AttributeAction.Any],
      [33, AttributeAction.Not],
      [124, AttributeAction.Hyphen]
    ]);
    unpackPseudos = /* @__PURE__ */ new Set([
      "has",
      "not",
      "matches",
      "is",
      "where",
      "host",
      "host-context"
    ]);
    stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
  }
});

// ../lnr-plugins/node_modules/css-what/lib/es/stringify.js
function stringify(selector) {
  return selector.map((token) => token.map(stringifyToken).join("")).join(", ");
}
function stringifyToken(token, index, arr) {
  switch (token.type) {
    // Simple types
    case SelectorType.Child:
      return index === 0 ? "> " : " > ";
    case SelectorType.Parent:
      return index === 0 ? "< " : " < ";
    case SelectorType.Sibling:
      return index === 0 ? "~ " : " ~ ";
    case SelectorType.Adjacent:
      return index === 0 ? "+ " : " + ";
    case SelectorType.Descendant:
      return " ";
    case SelectorType.ColumnCombinator:
      return index === 0 ? "|| " : " || ";
    case SelectorType.Universal:
      return token.namespace === "*" && index + 1 < arr.length && "name" in arr[index + 1] ? "" : `${getNamespace(token.namespace)}*`;
    case SelectorType.Tag:
      return getNamespacedName(token);
    case SelectorType.PseudoElement:
      return `::${escapeName(token.name, charsToEscapeInName)}${token.data === null ? "" : `(${escapeName(token.data, charsToEscapeInPseudoValue)})`}`;
    case SelectorType.Pseudo:
      return `:${escapeName(token.name, charsToEscapeInName)}${token.data === null ? "" : `(${typeof token.data === "string" ? escapeName(token.data, charsToEscapeInPseudoValue) : stringify(token.data)})`}`;
    case SelectorType.Attribute: {
      if (token.name === "id" && token.action === AttributeAction.Equals && token.ignoreCase === "quirks" && !token.namespace) {
        return `#${escapeName(token.value, charsToEscapeInName)}`;
      }
      if (token.name === "class" && token.action === AttributeAction.Element && token.ignoreCase === "quirks" && !token.namespace) {
        return `.${escapeName(token.value, charsToEscapeInName)}`;
      }
      const name = getNamespacedName(token);
      if (token.action === AttributeAction.Exists) {
        return `[${name}]`;
      }
      return `[${name}${getActionValue(token.action)}="${escapeName(token.value, charsToEscapeInAttributeValue)}"${token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s"}]`;
    }
  }
}
function getActionValue(action) {
  switch (action) {
    case AttributeAction.Equals:
      return "";
    case AttributeAction.Element:
      return "~";
    case AttributeAction.Start:
      return "^";
    case AttributeAction.End:
      return "$";
    case AttributeAction.Any:
      return "*";
    case AttributeAction.Not:
      return "!";
    case AttributeAction.Hyphen:
      return "|";
    case AttributeAction.Exists:
      throw new Error("Shouldn't be here");
  }
}
function getNamespacedName(token) {
  return `${getNamespace(token.namespace)}${escapeName(token.name, charsToEscapeInName)}`;
}
function getNamespace(namespace) {
  return namespace !== null ? `${namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName)}|` : "";
}
function escapeName(str, charsToEscape) {
  let lastIdx = 0;
  let ret = "";
  for (let i = 0; i < str.length; i++) {
    if (charsToEscape.has(str.charCodeAt(i))) {
      ret += `${str.slice(lastIdx, i)}\\${str.charAt(i)}`;
      lastIdx = i + 1;
    }
  }
  return ret.length > 0 ? ret + str.slice(lastIdx) : str;
}
var attribValChars, pseudoValChars, charsToEscapeInAttributeValue, charsToEscapeInPseudoValue, charsToEscapeInName;
var init_stringify = __esm({
  "../lnr-plugins/node_modules/css-what/lib/es/stringify.js"() {
    init_types();
    attribValChars = ["\\", '"'];
    pseudoValChars = [...attribValChars, "(", ")"];
    charsToEscapeInAttributeValue = new Set(attribValChars.map((c) => c.charCodeAt(0)));
    charsToEscapeInPseudoValue = new Set(pseudoValChars.map((c) => c.charCodeAt(0)));
    charsToEscapeInName = new Set([
      ...pseudoValChars,
      "~",
      "^",
      "$",
      "*",
      "+",
      "!",
      "|",
      ":",
      "[",
      "]",
      " ",
      "."
    ].map((c) => c.charCodeAt(0)));
  }
});

// ../lnr-plugins/node_modules/css-what/lib/es/index.js
var es_exports = {};
__export(es_exports, {
  AttributeAction: () => AttributeAction,
  IgnoreCaseMode: () => IgnoreCaseMode,
  SelectorType: () => SelectorType,
  isTraversal: () => isTraversal,
  parse: () => parse,
  stringify: () => stringify
});
var init_es = __esm({
  "../lnr-plugins/node_modules/css-what/lib/es/index.js"() {
    init_types();
    init_parse();
    init_stringify();
  }
});

// ../lnr-plugins/node_modules/boolbase/index.js
var require_boolbase = __commonJS({
  "../lnr-plugins/node_modules/boolbase/index.js"(exports2, module2) {
    module2.exports = {
      trueFunc: function trueFunc() {
        return true;
      },
      falseFunc: function falseFunc() {
        return false;
      }
    };
  }
});

// ../lnr-plugins/node_modules/css-select/lib/sort.js
var require_sort = __commonJS({
  "../lnr-plugins/node_modules/css-select/lib/sort.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isTraversal = void 0;
    var css_what_1 = (init_es(), __toCommonJS(es_exports));
    var procedure = /* @__PURE__ */ new Map([
      [css_what_1.SelectorType.Universal, 50],
      [css_what_1.SelectorType.Tag, 30],
      [css_what_1.SelectorType.Attribute, 1],
      [css_what_1.SelectorType.Pseudo, 0]
    ]);
    function isTraversal2(token) {
      return !procedure.has(token.type);
    }
    exports2.isTraversal = isTraversal2;
    var attributes = /* @__PURE__ */ new Map([
      [css_what_1.AttributeAction.Exists, 10],
      [css_what_1.AttributeAction.Equals, 8],
      [css_what_1.AttributeAction.Not, 7],
      [css_what_1.AttributeAction.Start, 6],
      [css_what_1.AttributeAction.End, 6],
      [css_what_1.AttributeAction.Any, 5]
    ]);
    function sortByProcedure(arr) {
      var procs = arr.map(getProcedure);
      for (var i = 1; i < arr.length; i++) {
        var procNew = procs[i];
        if (procNew < 0)
          continue;
        for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
          var token = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = token;
          procs[j + 1] = procs[j];
          procs[j] = procNew;
        }
      }
    }
    exports2.default = sortByProcedure;
    function getProcedure(token) {
      var _a, _b;
      var proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
      if (token.type === css_what_1.SelectorType.Attribute) {
        proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === css_what_1.AttributeAction.Equals && token.name === "id") {
          proc = 9;
        }
        if (token.ignoreCase) {
          proc >>= 1;
        }
      } else if (token.type === css_what_1.SelectorType.Pseudo) {
        if (!token.data) {
          proc = 3;
        } else if (token.name === "has" || token.name === "contains") {
          proc = 0;
        } else if (Array.isArray(token.data)) {
          proc = Math.min.apply(Math, token.data.map(function(d) {
            return Math.min.apply(Math, d.map(getProcedure));
          }));
          if (proc < 0) {
            proc = 0;
          }
        } else {
          proc = 2;
        }
      }
      return proc;
    }
  }
});

// ../lnr-plugins/node_modules/css-select/lib/attributes.js
var require_attributes2 = __commonJS({
  "../lnr-plugins/node_modules/css-select/lib/attributes.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.attributeRules = void 0;
    var boolbase_1 = __importDefault2(require_boolbase());
    var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
    function escapeRegex(value) {
      return value.replace(reChars, "\\$&");
    }
    var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
      "accept",
      "accept-charset",
      "align",
      "alink",
      "axis",
      "bgcolor",
      "charset",
      "checked",
      "clear",
      "codetype",
      "color",
      "compact",
      "declare",
      "defer",
      "dir",
      "direction",
      "disabled",
      "enctype",
      "face",
      "frame",
      "hreflang",
      "http-equiv",
      "lang",
      "language",
      "link",
      "media",
      "method",
      "multiple",
      "nohref",
      "noresize",
      "noshade",
      "nowrap",
      "readonly",
      "rel",
      "rev",
      "rules",
      "scope",
      "scrolling",
      "selected",
      "shape",
      "target",
      "text",
      "type",
      "valign",
      "valuetype",
      "vlink"
    ]);
    function shouldIgnoreCase(selector, options) {
      return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
    }
    exports2.attributeRules = {
      equals: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
          };
        }
        return function(elem) {
          return adapter.getAttributeValue(elem, name) === value && next(elem);
        };
      },
      hyphen: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function hyphenIC(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
          };
        }
        return function hyphen(elem) {
          var attr = adapter.getAttributeValue(elem, name);
          return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
        };
      },
      element: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (/\s/.test(value)) {
          return boolbase_1.default.falseFunc;
        }
        var regex = new RegExp("(?:^|\\s)".concat(escapeRegex(value), "(?:$|\\s)"), shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
          var attr = adapter.getAttributeValue(elem, name);
          return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
        };
      },
      exists: function(next, _a, _b) {
        var name = _a.name;
        var adapter = _b.adapter;
        return function(elem) {
          return adapter.hasAttrib(elem, name) && next(elem);
        };
      },
      start: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (len === 0) {
          return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
          };
        }
        return function(elem) {
          var _a;
          return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) && next(elem);
        };
      },
      end: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = -value.length;
        if (len === 0) {
          return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var _a;
            return ((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
          };
        }
        return function(elem) {
          var _a;
          return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) && next(elem);
        };
      },
      any: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (value === "") {
          return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
          var regex_1 = new RegExp(escapeRegex(value), "i");
          return function anyIC(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex_1.test(attr) && next(elem);
          };
        }
        return function(elem) {
          var _a;
          return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) && next(elem);
        };
      },
      not: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (value === "") {
          return function(elem) {
            return !!adapter.getAttributeValue(elem, name) && next(elem);
          };
        } else if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
          };
        }
        return function(elem) {
          return adapter.getAttributeValue(elem, name) !== value && next(elem);
        };
      }
    };
  }
});

// ../lnr-plugins/node_modules/nth-check/lib/parse.js
var require_parse = __commonJS({
  "../lnr-plugins/node_modules/nth-check/lib/parse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parse = void 0;
    var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
    var ZERO = "0".charCodeAt(0);
    var NINE = "9".charCodeAt(0);
    function parse2(formula) {
      formula = formula.trim().toLowerCase();
      if (formula === "even") {
        return [2, 0];
      } else if (formula === "odd") {
        return [2, 1];
      }
      var idx = 0;
      var a = 0;
      var sign = readSign();
      var number = readNumber();
      if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
          sign = readSign();
          skipWhitespace();
          number = readNumber();
        } else {
          sign = number = 0;
        }
      }
      if (number === null || idx < formula.length) {
        throw new Error("n-th rule couldn't be parsed ('".concat(formula, "')"));
      }
      return [a, sign * number];
      function readSign() {
        if (formula.charAt(idx) === "-") {
          idx++;
          return -1;
        }
        if (formula.charAt(idx) === "+") {
          idx++;
        }
        return 1;
      }
      function readNumber() {
        var start = idx;
        var value = 0;
        while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
          value = value * 10 + (formula.charCodeAt(idx) - ZERO);
          idx++;
        }
        return idx === start ? null : value;
      }
      function skipWhitespace() {
        while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
          idx++;
        }
      }
    }
    exports2.parse = parse2;
  }
});

// ../lnr-plugins/node_modules/nth-check/lib/compile.js
var require_compile = __commonJS({
  "../lnr-plugins/node_modules/nth-check/lib/compile.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generate = exports2.compile = void 0;
    var boolbase_1 = __importDefault2(require_boolbase());
    function compile(parsed) {
      var a = parsed[0];
      var b = parsed[1] - 1;
      if (b < 0 && a <= 0)
        return boolbase_1.default.falseFunc;
      if (a === -1)
        return function(index) {
          return index <= b;
        };
      if (a === 0)
        return function(index) {
          return index === b;
        };
      if (a === 1)
        return b < 0 ? boolbase_1.default.trueFunc : function(index) {
          return index >= b;
        };
      var absA = Math.abs(a);
      var bMod = (b % absA + absA) % absA;
      return a > 1 ? function(index) {
        return index >= b && index % absA === bMod;
      } : function(index) {
        return index <= b && index % absA === bMod;
      };
    }
    exports2.compile = compile;
    function generate(parsed) {
      var a = parsed[0];
      var b = parsed[1] - 1;
      var n = 0;
      if (a < 0) {
        var aPos_1 = -a;
        var minValue_1 = (b % aPos_1 + aPos_1) % aPos_1;
        return function() {
          var val = minValue_1 + aPos_1 * n++;
          return val > b ? null : val;
        };
      }
      if (a === 0)
        return b < 0 ? (
          // There are no result — always return `null`
          function() {
            return null;
          }
        ) : (
          // Return `b` exactly once
          function() {
            return n++ === 0 ? b : null;
          }
        );
      if (b < 0) {
        b += a * Math.ceil(-b / a);
      }
      return function() {
        return a * n++ + b;
      };
    }
    exports2.generate = generate;
  }
});

// ../lnr-plugins/node_modules/nth-check/lib/index.js
var require_lib6 = __commonJS({
  "../lnr-plugins/node_modules/nth-check/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sequence = exports2.generate = exports2.compile = exports2.parse = void 0;
    var parse_js_12 = require_parse();
    Object.defineProperty(exports2, "parse", { enumerable: true, get: function() {
      return parse_js_12.parse;
    } });
    var compile_js_1 = require_compile();
    Object.defineProperty(exports2, "compile", { enumerable: true, get: function() {
      return compile_js_1.compile;
    } });
    Object.defineProperty(exports2, "generate", { enumerable: true, get: function() {
      return compile_js_1.generate;
    } });
    function nthCheck(formula) {
      return (0, compile_js_1.compile)((0, parse_js_12.parse)(formula));
    }
    exports2.default = nthCheck;
    function sequence(formula) {
      return (0, compile_js_1.generate)((0, parse_js_12.parse)(formula));
    }
    exports2.sequence = sequence;
  }
});

// ../lnr-plugins/node_modules/css-select/lib/pseudo-selectors/filters.js
var require_filters = __commonJS({
  "../lnr-plugins/node_modules/css-select/lib/pseudo-selectors/filters.js"(exports2) {
    "use strict";
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.filters = void 0;
    var nth_check_1 = __importDefault2(require_lib6());
    var boolbase_1 = __importDefault2(require_boolbase());
    function getChildFunc(next, adapter) {
      return function(elem) {
        var parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
      };
    }
    exports2.filters = {
      contains: function(next, text, _a) {
        var adapter = _a.adapter;
        return function contains(elem) {
          return next(elem) && adapter.getText(elem).includes(text);
        };
      },
      icontains: function(next, text, _a) {
        var adapter = _a.adapter;
        var itext = text.toLowerCase();
        return function icontains(elem) {
          return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
        };
      },
      // Location specific methods
      "nth-child": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthChild(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = 0; i < siblings.length; i++) {
            if (equals(elem, siblings[i]))
              break;
            if (adapter.isTag(siblings[i])) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-last-child": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
              break;
            if (adapter.isTag(siblings[i])) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-of-type": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthOfType(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = 0; i < siblings.length; i++) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              break;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-last-of-type": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = siblings.length - 1; i >= 0; i--) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              break;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      // TODO determine the actual root element
      root: function(next, _rule, _a) {
        var adapter = _a.adapter;
        return function(elem) {
          var parent = adapter.getParent(elem);
          return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
      },
      scope: function(next, rule, options, context) {
        var equals = options.equals;
        if (!context || context.length === 0) {
          return exports2.filters["root"](next, rule, options);
        }
        if (context.length === 1) {
          return function(elem) {
            return equals(context[0], elem) && next(elem);
          };
        }
        return function(elem) {
          return context.includes(elem) && next(elem);
        };
      },
      hover: dynamicStatePseudo("isHovered"),
      visited: dynamicStatePseudo("isVisited"),
      active: dynamicStatePseudo("isActive")
    };
    function dynamicStatePseudo(name) {
      return function dynamicPseudo(next, _rule, _a) {
        var adapter = _a.adapter;
        var func = adapter[name];
        if (typeof func !== "function") {
          return boolbase_1.default.falseFunc;
        }
        return function active(elem) {
          return func(elem) && next(elem);
        };
      };
    }
  }
});

// ../lnr-plugins/node_modules/css-select/lib/pseudo-selectors/pseudos.js
var require_pseudos = __commonJS({
  "../lnr-plugins/node_modules/css-select/lib/pseudo-selectors/pseudos.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.verifyPseudoArgs = exports2.pseudos = void 0;
    exports2.pseudos = {
      empty: function(elem, _a) {
        var adapter = _a.adapter;
        return !adapter.getChildren(elem).some(function(elem2) {
          return adapter.isTag(elem2) || adapter.getText(elem2) !== "";
        });
      },
      "first-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        if (adapter.prevElementSibling) {
          return adapter.prevElementSibling(elem) == null;
        }
        var firstChild = adapter.getSiblings(elem).find(function(elem2) {
          return adapter.isTag(elem2);
        });
        return firstChild != null && equals(elem, firstChild);
      },
      "last-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
          if (equals(elem, siblings[i]))
            return true;
          if (adapter.isTag(siblings[i]))
            break;
        }
        return false;
      },
      "first-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for (var i = 0; i < siblings.length; i++) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling))
            return true;
          if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
            break;
          }
        }
        return false;
      },
      "last-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling))
            return true;
          if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
            break;
          }
        }
        return false;
      },
      "only-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var elemName = adapter.getName(elem);
        return adapter.getSiblings(elem).every(function(sibling) {
          return equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName;
        });
      },
      "only-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        return adapter.getSiblings(elem).every(function(sibling) {
          return equals(elem, sibling) || !adapter.isTag(sibling);
        });
      }
    };
    function verifyPseudoArgs(func, name, subselect, argIndex) {
      if (subselect === null) {
        if (func.length > argIndex) {
          throw new Error("Pseudo-class :".concat(name, " requires an argument"));
        }
      } else if (func.length === argIndex) {
        throw new Error("Pseudo-class :".concat(name, " doesn't have any arguments"));
      }
    }
    exports2.verifyPseudoArgs = verifyPseudoArgs;
  }
});

// ../lnr-plugins/node_modules/css-select/lib/pseudo-selectors/aliases.js
var require_aliases = __commonJS({
  "../lnr-plugins/node_modules/css-select/lib/pseudo-selectors/aliases.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.aliases = void 0;
    exports2.aliases = {
      // Links
      "any-link": ":is(a, area, link)[href]",
      link: ":any-link:not(:visited)",
      // Forms
      // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
      disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
      enabled: ":not(:disabled)",
      checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
      required: ":is(input, select, textarea)[required]",
      optional: ":is(input, select, textarea):not([required])",
      // JQuery extensions
      // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
      selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
      checkbox: "[type=checkbox]",
      file: "[type=file]",
      password: "[type=password]",
      radio: "[type=radio]",
      reset: "[type=reset]",
      image: "[type=image]",
      submit: "[type=submit]",
      parent: ":not(:empty)",
      header: ":is(h1, h2, h3, h4, h5, h6)",
      button: ":is(button, input[type=button])",
      input: ":is(input, textarea, select, button)",
      text: "input:is(:not([type!='']), [type=text])"
    };
  }
});

// ../lnr-plugins/node_modules/css-select/lib/pseudo-selectors/subselects.js
var require_subselects = __commonJS({
  "../lnr-plugins/node_modules/css-select/lib/pseudo-selectors/subselects.js"(exports2) {
    "use strict";
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.subselects = exports2.getNextSiblings = exports2.ensureIsTag = exports2.PLACEHOLDER_ELEMENT = void 0;
    var boolbase_1 = __importDefault2(require_boolbase());
    var sort_js_1 = require_sort();
    exports2.PLACEHOLDER_ELEMENT = {};
    function ensureIsTag(next, adapter) {
      if (next === boolbase_1.default.falseFunc)
        return boolbase_1.default.falseFunc;
      return function(elem) {
        return adapter.isTag(elem) && next(elem);
      };
    }
    exports2.ensureIsTag = ensureIsTag;
    function getNextSiblings(elem, adapter) {
      var siblings = adapter.getSiblings(elem);
      if (siblings.length <= 1)
        return [];
      var elemIndex = siblings.indexOf(elem);
      if (elemIndex < 0 || elemIndex === siblings.length - 1)
        return [];
      return siblings.slice(elemIndex + 1).filter(adapter.isTag);
    }
    exports2.getNextSiblings = getNextSiblings;
    function copyOptions(options) {
      return {
        xmlMode: !!options.xmlMode,
        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
        lowerCaseTags: !!options.lowerCaseTags,
        quirksMode: !!options.quirksMode,
        cacheResults: !!options.cacheResults,
        pseudos: options.pseudos,
        adapter: options.adapter,
        equals: options.equals
      };
    }
    var is = function(next, token, options, context, compileToken) {
      var func = compileToken(token, copyOptions(options), context);
      return func === boolbase_1.default.trueFunc ? next : func === boolbase_1.default.falseFunc ? boolbase_1.default.falseFunc : function(elem) {
        return func(elem) && next(elem);
      };
    };
    exports2.subselects = {
      is,
      /**
       * `:matches` and `:where` are aliases for `:is`.
       */
      matches: is,
      where: is,
      not: function(next, token, options, context, compileToken) {
        var func = compileToken(token, copyOptions(options), context);
        return func === boolbase_1.default.falseFunc ? next : func === boolbase_1.default.trueFunc ? boolbase_1.default.falseFunc : function(elem) {
          return !func(elem) && next(elem);
        };
      },
      has: function(next, subselect, options, _context, compileToken) {
        var adapter = options.adapter;
        var opts = copyOptions(options);
        opts.relativeSelector = true;
        var context = subselect.some(function(s) {
          return s.some(sort_js_1.isTraversal);
        }) ? (
          // Used as a placeholder. Will be replaced with the actual element.
          [exports2.PLACEHOLDER_ELEMENT]
        ) : void 0;
        var compiled = compileToken(subselect, opts, context);
        if (compiled === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        var hasElement = ensureIsTag(compiled, adapter);
        if (context && compiled !== boolbase_1.default.trueFunc) {
          var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings_1 = _a === void 0 ? false : _a;
          return function(elem) {
            if (!next(elem))
              return false;
            context[0] = elem;
            var childs = adapter.getChildren(elem);
            var nextElements = shouldTestNextSiblings_1 ? __spreadArray(__spreadArray([], childs, true), getNextSiblings(elem, adapter), true) : childs;
            return adapter.existsOne(hasElement, nextElements);
          };
        }
        return function(elem) {
          return next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
        };
      }
    };
  }
});

// ../lnr-plugins/node_modules/css-select/lib/pseudo-selectors/index.js
var require_pseudo_selectors = __commonJS({
  "../lnr-plugins/node_modules/css-select/lib/pseudo-selectors/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.compilePseudoSelector = exports2.aliases = exports2.pseudos = exports2.filters = void 0;
    var css_what_1 = (init_es(), __toCommonJS(es_exports));
    var filters_js_1 = require_filters();
    Object.defineProperty(exports2, "filters", { enumerable: true, get: function() {
      return filters_js_1.filters;
    } });
    var pseudos_js_1 = require_pseudos();
    Object.defineProperty(exports2, "pseudos", { enumerable: true, get: function() {
      return pseudos_js_1.pseudos;
    } });
    var aliases_js_1 = require_aliases();
    Object.defineProperty(exports2, "aliases", { enumerable: true, get: function() {
      return aliases_js_1.aliases;
    } });
    var subselects_js_1 = require_subselects();
    function compilePseudoSelector(next, selector, options, context, compileToken) {
      var _a;
      var name = selector.name, data = selector.data;
      if (Array.isArray(data)) {
        if (!(name in subselects_js_1.subselects)) {
          throw new Error("Unknown pseudo-class :".concat(name, "(").concat(data, ")"));
        }
        return subselects_js_1.subselects[name](next, data, options, context, compileToken);
      }
      var userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
      var stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases_js_1.aliases[name];
      if (typeof stringPseudo === "string") {
        if (data != null) {
          throw new Error("Pseudo ".concat(name, " doesn't have any arguments"));
        }
        var alias = (0, css_what_1.parse)(stringPseudo);
        return subselects_js_1.subselects["is"](next, alias, options, context, compileToken);
      }
      if (typeof userPseudo === "function") {
        (0, pseudos_js_1.verifyPseudoArgs)(userPseudo, name, data, 1);
        return function(elem) {
          return userPseudo(elem, data) && next(elem);
        };
      }
      if (name in filters_js_1.filters) {
        return filters_js_1.filters[name](next, data, options, context);
      }
      if (name in pseudos_js_1.pseudos) {
        var pseudo_1 = pseudos_js_1.pseudos[name];
        (0, pseudos_js_1.verifyPseudoArgs)(pseudo_1, name, data, 2);
        return function(elem) {
          return pseudo_1(elem, options, data) && next(elem);
        };
      }
      throw new Error("Unknown pseudo-class :".concat(name));
    }
    exports2.compilePseudoSelector = compilePseudoSelector;
  }
});

// ../lnr-plugins/node_modules/css-select/lib/general.js
var require_general = __commonJS({
  "../lnr-plugins/node_modules/css-select/lib/general.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.compileGeneralSelector = void 0;
    var attributes_js_1 = require_attributes2();
    var index_js_1 = require_pseudo_selectors();
    var css_what_1 = (init_es(), __toCommonJS(es_exports));
    function getElementParent(node, adapter) {
      var parent = adapter.getParent(node);
      if (parent && adapter.isTag(parent)) {
        return parent;
      }
      return null;
    }
    function compileGeneralSelector(next, selector, options, context, compileToken) {
      var adapter = options.adapter, equals = options.equals;
      switch (selector.type) {
        case css_what_1.SelectorType.PseudoElement: {
          throw new Error("Pseudo-elements are not supported by css-select");
        }
        case css_what_1.SelectorType.ColumnCombinator: {
          throw new Error("Column combinators are not yet supported by css-select");
        }
        case css_what_1.SelectorType.Attribute: {
          if (selector.namespace != null) {
            throw new Error("Namespaced attributes are not yet supported by css-select");
          }
          if (!options.xmlMode || options.lowerCaseAttributeNames) {
            selector.name = selector.name.toLowerCase();
          }
          return attributes_js_1.attributeRules[selector.action](next, selector, options);
        }
        case css_what_1.SelectorType.Pseudo: {
          return (0, index_js_1.compilePseudoSelector)(next, selector, options, context, compileToken);
        }
        // Tags
        case css_what_1.SelectorType.Tag: {
          if (selector.namespace != null) {
            throw new Error("Namespaced tag names are not yet supported by css-select");
          }
          var name_1 = selector.name;
          if (!options.xmlMode || options.lowerCaseTags) {
            name_1 = name_1.toLowerCase();
          }
          return function tag(elem) {
            return adapter.getName(elem) === name_1 && next(elem);
          };
        }
        // Traversal
        case css_what_1.SelectorType.Descendant: {
          if (options.cacheResults === false || typeof WeakSet === "undefined") {
            return function descendant(elem) {
              var current = elem;
              while (current = getElementParent(current, adapter)) {
                if (next(current)) {
                  return true;
                }
              }
              return false;
            };
          }
          var isFalseCache_1 = /* @__PURE__ */ new WeakSet();
          return function cachedDescendant(elem) {
            var current = elem;
            while (current = getElementParent(current, adapter)) {
              if (!isFalseCache_1.has(current)) {
                if (adapter.isTag(current) && next(current)) {
                  return true;
                }
                isFalseCache_1.add(current);
              }
            }
            return false;
          };
        }
        case "_flexibleDescendant": {
          return function flexibleDescendant(elem) {
            var current = elem;
            do {
              if (next(current))
                return true;
            } while (current = getElementParent(current, adapter));
            return false;
          };
        }
        case css_what_1.SelectorType.Parent: {
          return function parent(elem) {
            return adapter.getChildren(elem).some(function(elem2) {
              return adapter.isTag(elem2) && next(elem2);
            });
          };
        }
        case css_what_1.SelectorType.Child: {
          return function child(elem) {
            var parent = adapter.getParent(elem);
            return parent != null && adapter.isTag(parent) && next(parent);
          };
        }
        case css_what_1.SelectorType.Sibling: {
          return function sibling(elem) {
            var siblings = adapter.getSiblings(elem);
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter.isTag(currentSibling) && next(currentSibling)) {
                return true;
              }
            }
            return false;
          };
        }
        case css_what_1.SelectorType.Adjacent: {
          if (adapter.prevElementSibling) {
            return function adjacent(elem) {
              var previous = adapter.prevElementSibling(elem);
              return previous != null && next(previous);
            };
          }
          return function adjacent(elem) {
            var siblings = adapter.getSiblings(elem);
            var lastElement;
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter.isTag(currentSibling)) {
                lastElement = currentSibling;
              }
            }
            return !!lastElement && next(lastElement);
          };
        }
        case css_what_1.SelectorType.Universal: {
          if (selector.namespace != null && selector.namespace !== "*") {
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
          }
          return next;
        }
      }
    }
    exports2.compileGeneralSelector = compileGeneralSelector;
  }
});

// ../lnr-plugins/node_modules/css-select/lib/compile.js
var require_compile2 = __commonJS({
  "../lnr-plugins/node_modules/css-select/lib/compile.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.compileToken = exports2.compileUnsafe = exports2.compile = void 0;
    var css_what_1 = (init_es(), __toCommonJS(es_exports));
    var boolbase_1 = __importDefault2(require_boolbase());
    var sort_js_1 = __importStar(require_sort());
    var general_js_1 = require_general();
    var subselects_js_1 = require_subselects();
    function compile(selector, options, context) {
      var next = compileUnsafe(selector, options, context);
      return (0, subselects_js_1.ensureIsTag)(next, options.adapter);
    }
    exports2.compile = compile;
    function compileUnsafe(selector, options, context) {
      var token = typeof selector === "string" ? (0, css_what_1.parse)(selector) : selector;
      return compileToken(token, options, context);
    }
    exports2.compileUnsafe = compileUnsafe;
    function includesScopePseudo(t) {
      return t.type === css_what_1.SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function(data) {
        return data.some(includesScopePseudo);
      }));
    }
    var DESCENDANT_TOKEN = { type: css_what_1.SelectorType.Descendant };
    var FLEXIBLE_DESCENDANT_TOKEN = {
      type: "_flexibleDescendant"
    };
    var SCOPE_TOKEN = {
      type: css_what_1.SelectorType.Pseudo,
      name: "scope",
      data: null
    };
    function absolutize(token, _a, context) {
      var adapter = _a.adapter;
      var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function(e) {
        var parent = adapter.isTag(e) && adapter.getParent(e);
        return e === subselects_js_1.PLACEHOLDER_ELEMENT || parent && adapter.isTag(parent);
      }));
      for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
        var t = token_1[_i];
        if (t.length > 0 && (0, sort_js_1.isTraversal)(t[0]) && t[0].type !== css_what_1.SelectorType.Descendant) {
        } else if (hasContext && !t.some(includesScopePseudo)) {
          t.unshift(DESCENDANT_TOKEN);
        } else {
          continue;
        }
        t.unshift(SCOPE_TOKEN);
      }
    }
    function compileToken(token, options, context) {
      var _a;
      token.forEach(sort_js_1.default);
      context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
      var isArrayContext = Array.isArray(context);
      var finalContext = context && (Array.isArray(context) ? context : [context]);
      if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
      } else if (token.some(function(t) {
        return t.length > 0 && (0, sort_js_1.isTraversal)(t[0]);
      })) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
      }
      var shouldTestNextSiblings = false;
      var query = token.map(function(rules) {
        if (rules.length >= 2) {
          var first = rules[0], second = rules[1];
          if (first.type !== css_what_1.SelectorType.Pseudo || first.name !== "scope") {
          } else if (isArrayContext && second.type === css_what_1.SelectorType.Descendant) {
            rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
          } else if (second.type === css_what_1.SelectorType.Adjacent || second.type === css_what_1.SelectorType.Sibling) {
            shouldTestNextSiblings = true;
          }
        }
        return compileRules(rules, options, finalContext);
      }).reduce(reduceRules, boolbase_1.default.falseFunc);
      query.shouldTestNextSiblings = shouldTestNextSiblings;
      return query;
    }
    exports2.compileToken = compileToken;
    function compileRules(rules, options, context) {
      var _a;
      return rules.reduce(function(previous, rule) {
        return previous === boolbase_1.default.falseFunc ? boolbase_1.default.falseFunc : (0, general_js_1.compileGeneralSelector)(previous, rule, options, context, compileToken);
      }, (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.default.trueFunc);
    }
    function reduceRules(a, b) {
      if (b === boolbase_1.default.falseFunc || a === boolbase_1.default.trueFunc) {
        return a;
      }
      if (a === boolbase_1.default.falseFunc || b === boolbase_1.default.trueFunc) {
        return b;
      }
      return function combine(elem) {
        return a(elem) || b(elem);
      };
    }
  }
});

// ../lnr-plugins/node_modules/css-select/lib/index.js
var require_lib7 = __commonJS({
  "../lnr-plugins/node_modules/css-select/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.aliases = exports2.pseudos = exports2.filters = exports2.is = exports2.selectOne = exports2.selectAll = exports2.prepareContext = exports2._compileToken = exports2._compileUnsafe = exports2.compile = void 0;
    var DomUtils = __importStar(require_lib5());
    var boolbase_1 = __importDefault2(require_boolbase());
    var compile_js_1 = require_compile2();
    var subselects_js_1 = require_subselects();
    var defaultEquals = function(a, b) {
      return a === b;
    };
    var defaultOptions = {
      adapter: DomUtils,
      equals: defaultEquals
    };
    function convertOptionFormats(options) {
      var _a, _b, _c, _d;
      var opts = options !== null && options !== void 0 ? options : defaultOptions;
      (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = DomUtils;
      (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
      return opts;
    }
    function wrapCompile(func) {
      return function addAdapter(selector, options, context) {
        var opts = convertOptionFormats(options);
        return func(selector, opts, context);
      };
    }
    exports2.compile = wrapCompile(compile_js_1.compile);
    exports2._compileUnsafe = wrapCompile(compile_js_1.compileUnsafe);
    exports2._compileToken = wrapCompile(compile_js_1.compileToken);
    function getSelectorFunc(searchFunc) {
      return function select(query, elements, options) {
        var opts = convertOptionFormats(options);
        if (typeof query !== "function") {
          query = (0, compile_js_1.compileUnsafe)(query, opts, elements);
        }
        var filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
        return searchFunc(query, filteredElements, opts);
      };
    }
    function prepareContext(elems, adapter, shouldTestNextSiblings) {
      if (shouldTestNextSiblings === void 0) {
        shouldTestNextSiblings = false;
      }
      if (shouldTestNextSiblings) {
        elems = appendNextSiblings(elems, adapter);
      }
      return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
    }
    exports2.prepareContext = prepareContext;
    function appendNextSiblings(elem, adapter) {
      var elems = Array.isArray(elem) ? elem.slice(0) : [elem];
      var elemsLength = elems.length;
      for (var i = 0; i < elemsLength; i++) {
        var nextSiblings = (0, subselects_js_1.getNextSiblings)(elems[i], adapter);
        elems.push.apply(elems, nextSiblings);
      }
      return elems;
    }
    exports2.selectAll = getSelectorFunc(function(query, elems, options) {
      return query === boolbase_1.default.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems);
    });
    exports2.selectOne = getSelectorFunc(function(query, elems, options) {
      return query === boolbase_1.default.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems);
    });
    function is(elem, query, options) {
      var opts = convertOptionFormats(options);
      return (typeof query === "function" ? query : (0, compile_js_1.compile)(query, opts))(elem);
    }
    exports2.is = is;
    exports2.default = exports2.selectAll;
    var index_js_1 = require_pseudo_selectors();
    Object.defineProperty(exports2, "filters", { enumerable: true, get: function() {
      return index_js_1.filters;
    } });
    Object.defineProperty(exports2, "pseudos", { enumerable: true, get: function() {
      return index_js_1.pseudos;
    } });
    Object.defineProperty(exports2, "aliases", { enumerable: true, get: function() {
      return index_js_1.aliases;
    } });
  }
});

// ../lnr-plugins/node_modules/cheerio-select/lib/positionals.js
var require_positionals = __commonJS({
  "../lnr-plugins/node_modules/cheerio-select/lib/positionals.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getLimit = exports2.isFilter = exports2.filterNames = void 0;
    exports2.filterNames = /* @__PURE__ */ new Set([
      "first",
      "last",
      "eq",
      "gt",
      "nth",
      "lt",
      "even",
      "odd"
    ]);
    function isFilter(s) {
      if (s.type !== "pseudo")
        return false;
      if (exports2.filterNames.has(s.name))
        return true;
      if (s.name === "not" && Array.isArray(s.data)) {
        return s.data.some(function(s2) {
          return s2.some(isFilter);
        });
      }
      return false;
    }
    exports2.isFilter = isFilter;
    function getLimit(filter, data, partLimit) {
      var num = data != null ? parseInt(data, 10) : NaN;
      switch (filter) {
        case "first":
          return 1;
        case "nth":
        case "eq":
          return isFinite(num) ? num >= 0 ? num + 1 : Infinity : 0;
        case "lt":
          return isFinite(num) ? num >= 0 ? Math.min(num, partLimit) : Infinity : 0;
        case "gt":
          return isFinite(num) ? Infinity : 0;
        case "odd":
          return 2 * partLimit;
        case "even":
          return 2 * partLimit - 1;
        case "last":
        case "not":
          return Infinity;
      }
    }
    exports2.getLimit = getLimit;
  }
});

// ../lnr-plugins/node_modules/cheerio-select/lib/helpers.js
var require_helpers2 = __commonJS({
  "../lnr-plugins/node_modules/cheerio-select/lib/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.groupSelectors = exports2.getDocumentRoot = void 0;
    var positionals_js_1 = require_positionals();
    function getDocumentRoot(node) {
      while (node.parent)
        node = node.parent;
      return node;
    }
    exports2.getDocumentRoot = getDocumentRoot;
    function groupSelectors(selectors) {
      var filteredSelectors = [];
      var plainSelectors = [];
      for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
        var selector = selectors_1[_i];
        if (selector.some(positionals_js_1.isFilter)) {
          filteredSelectors.push(selector);
        } else {
          plainSelectors.push(selector);
        }
      }
      return [plainSelectors, filteredSelectors];
    }
    exports2.groupSelectors = groupSelectors;
  }
});

// ../lnr-plugins/node_modules/cheerio-select/lib/index.js
var require_lib8 = __commonJS({
  "../lnr-plugins/node_modules/cheerio-select/lib/index.js"(exports2) {
    "use strict";
    var __assign = exports2 && exports2.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.select = exports2.filter = exports2.some = exports2.is = exports2.aliases = exports2.pseudos = exports2.filters = void 0;
    var css_what_1 = (init_es(), __toCommonJS(es_exports));
    var css_select_1 = require_lib7();
    var DomUtils = __importStar(require_lib5());
    var boolbase = __importStar(require_boolbase());
    var helpers_js_1 = require_helpers2();
    var positionals_js_1 = require_positionals();
    var css_select_2 = require_lib7();
    Object.defineProperty(exports2, "filters", { enumerable: true, get: function() {
      return css_select_2.filters;
    } });
    Object.defineProperty(exports2, "pseudos", { enumerable: true, get: function() {
      return css_select_2.pseudos;
    } });
    Object.defineProperty(exports2, "aliases", { enumerable: true, get: function() {
      return css_select_2.aliases;
    } });
    var UNIVERSAL_SELECTOR = {
      type: css_what_1.SelectorType.Universal,
      namespace: null
    };
    var SCOPE_PSEUDO = {
      type: css_what_1.SelectorType.Pseudo,
      name: "scope",
      data: null
    };
    function is(element, selector, options) {
      if (options === void 0) {
        options = {};
      }
      return some([element], selector, options);
    }
    exports2.is = is;
    function some(elements, selector, options) {
      if (options === void 0) {
        options = {};
      }
      if (typeof selector === "function")
        return elements.some(selector);
      var _a = (0, helpers_js_1.groupSelectors)((0, css_what_1.parse)(selector)), plain = _a[0], filtered = _a[1];
      return plain.length > 0 && elements.some((0, css_select_1._compileToken)(plain, options)) || filtered.some(function(sel) {
        return filterBySelector(sel, elements, options).length > 0;
      });
    }
    exports2.some = some;
    function filterByPosition(filter2, elems, data, options) {
      var num = typeof data === "string" ? parseInt(data, 10) : NaN;
      switch (filter2) {
        case "first":
        case "lt":
          return elems;
        case "last":
          return elems.length > 0 ? [elems[elems.length - 1]] : elems;
        case "nth":
        case "eq":
          return isFinite(num) && Math.abs(num) < elems.length ? [num < 0 ? elems[elems.length + num] : elems[num]] : [];
        case "gt":
          return isFinite(num) ? elems.slice(num + 1) : [];
        case "even":
          return elems.filter(function(_, i) {
            return i % 2 === 0;
          });
        case "odd":
          return elems.filter(function(_, i) {
            return i % 2 === 1;
          });
        case "not": {
          var filtered_1 = new Set(filterParsed(data, elems, options));
          return elems.filter(function(e) {
            return !filtered_1.has(e);
          });
        }
      }
    }
    function filter(selector, elements, options) {
      if (options === void 0) {
        options = {};
      }
      return filterParsed((0, css_what_1.parse)(selector), elements, options);
    }
    exports2.filter = filter;
    function filterParsed(selector, elements, options) {
      if (elements.length === 0)
        return [];
      var _a = (0, helpers_js_1.groupSelectors)(selector), plainSelectors = _a[0], filteredSelectors = _a[1];
      var found;
      if (plainSelectors.length) {
        var filtered = filterElements(elements, plainSelectors, options);
        if (filteredSelectors.length === 0) {
          return filtered;
        }
        if (filtered.length) {
          found = new Set(filtered);
        }
      }
      for (var i = 0; i < filteredSelectors.length && (found === null || found === void 0 ? void 0 : found.size) !== elements.length; i++) {
        var filteredSelector = filteredSelectors[i];
        var missing = found ? elements.filter(function(e) {
          return DomUtils.isTag(e) && !found.has(e);
        }) : elements;
        if (missing.length === 0)
          break;
        var filtered = filterBySelector(filteredSelector, elements, options);
        if (filtered.length) {
          if (!found) {
            if (i === filteredSelectors.length - 1) {
              return filtered;
            }
            found = new Set(filtered);
          } else {
            filtered.forEach(function(el) {
              return found.add(el);
            });
          }
        }
      }
      return typeof found !== "undefined" ? found.size === elements.length ? elements : (
        // Filter elements to preserve order
        elements.filter(function(el) {
          return found.has(el);
        })
      ) : [];
    }
    function filterBySelector(selector, elements, options) {
      var _a;
      if (selector.some(css_what_1.isTraversal)) {
        var root = (_a = options.root) !== null && _a !== void 0 ? _a : (0, helpers_js_1.getDocumentRoot)(elements[0]);
        var opts = __assign(__assign({}, options), { context: elements, relativeSelector: false });
        selector.push(SCOPE_PSEUDO);
        return findFilterElements(root, selector, opts, true, elements.length);
      }
      return findFilterElements(elements, selector, options, false, elements.length);
    }
    function select(selector, root, options, limit) {
      if (options === void 0) {
        options = {};
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      if (typeof selector === "function") {
        return find(root, selector);
      }
      var _a = (0, helpers_js_1.groupSelectors)((0, css_what_1.parse)(selector)), plain = _a[0], filtered = _a[1];
      var results = filtered.map(function(sel) {
        return findFilterElements(root, sel, options, true, limit);
      });
      if (plain.length) {
        results.push(findElements(root, plain, options, limit));
      }
      if (results.length === 0) {
        return [];
      }
      if (results.length === 1) {
        return results[0];
      }
      return DomUtils.uniqueSort(results.reduce(function(a, b) {
        return __spreadArray(__spreadArray([], a, true), b, true);
      }));
    }
    exports2.select = select;
    function findFilterElements(root, selector, options, queryForSelector, totalLimit) {
      var filterIndex = selector.findIndex(positionals_js_1.isFilter);
      var sub = selector.slice(0, filterIndex);
      var filter2 = selector[filterIndex];
      var partLimit = selector.length - 1 === filterIndex ? totalLimit : Infinity;
      var limit = (0, positionals_js_1.getLimit)(filter2.name, filter2.data, partLimit);
      if (limit === 0)
        return [];
      var elemsNoLimit = sub.length === 0 && !Array.isArray(root) ? DomUtils.getChildren(root).filter(DomUtils.isTag) : sub.length === 0 ? (Array.isArray(root) ? root : [root]).filter(DomUtils.isTag) : queryForSelector || sub.some(css_what_1.isTraversal) ? findElements(root, [sub], options, limit) : filterElements(root, [sub], options);
      var elems = elemsNoLimit.slice(0, limit);
      var result = filterByPosition(filter2.name, elems, filter2.data, options);
      if (result.length === 0 || selector.length === filterIndex + 1) {
        return result;
      }
      var remainingSelector = selector.slice(filterIndex + 1);
      var remainingHasTraversal = remainingSelector.some(css_what_1.isTraversal);
      if (remainingHasTraversal) {
        if ((0, css_what_1.isTraversal)(remainingSelector[0])) {
          var type = remainingSelector[0].type;
          if (type === css_what_1.SelectorType.Sibling || type === css_what_1.SelectorType.Adjacent) {
            result = (0, css_select_1.prepareContext)(result, DomUtils, true);
          }
          remainingSelector.unshift(UNIVERSAL_SELECTOR);
        }
        options = __assign(__assign({}, options), {
          // Avoid absolutizing the selector
          relativeSelector: false,
          /*
           * Add a custom root func, to make sure traversals don't match elements
           * that aren't a part of the considered tree.
           */
          rootFunc: function(el) {
            return result.includes(el);
          }
        });
      } else if (options.rootFunc && options.rootFunc !== boolbase.trueFunc) {
        options = __assign(__assign({}, options), { rootFunc: boolbase.trueFunc });
      }
      return remainingSelector.some(positionals_js_1.isFilter) ? findFilterElements(result, remainingSelector, options, false, totalLimit) : remainingHasTraversal ? (
        // Query existing elements to resolve traversal.
        findElements(result, [remainingSelector], options, totalLimit)
      ) : (
        // If we don't have any more traversals, simply filter elements.
        filterElements(result, [remainingSelector], options)
      );
    }
    function findElements(root, sel, options, limit) {
      var query = (0, css_select_1._compileToken)(sel, options, root);
      return find(root, query, limit);
    }
    function find(root, query, limit) {
      if (limit === void 0) {
        limit = Infinity;
      }
      var elems = (0, css_select_1.prepareContext)(root, DomUtils, query.shouldTestNextSiblings);
      return DomUtils.find(function(node) {
        return DomUtils.isTag(node) && query(node);
      }, elems, true, limit);
    }
    function filterElements(elements, sel, options) {
      var els = (Array.isArray(elements) ? elements : [elements]).filter(DomUtils.isTag);
      if (els.length === 0)
        return els;
      var query = (0, css_select_1._compileToken)(sel, options);
      return query === boolbase.trueFunc ? els : els.filter(query);
    }
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/api/traversing.js
var require_traversing = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/api/traversing.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.children = exports2.siblings = exports2.prevUntil = exports2.prevAll = exports2.prev = exports2.nextUntil = exports2.nextAll = exports2.next = exports2.parentsUntil = exports2.parents = exports2.parent = void 0;
    exports2.find = find;
    exports2._findBySelector = _findBySelector;
    exports2.closest = closest;
    exports2.contents = contents;
    exports2.each = each;
    exports2.map = map;
    exports2.filter = filter;
    exports2.filterArray = filterArray;
    exports2.is = is;
    exports2.not = not;
    exports2.has = has;
    exports2.first = first;
    exports2.last = last;
    exports2.eq = eq;
    exports2.get = get;
    exports2.toArray = toArray;
    exports2.index = index;
    exports2.slice = slice;
    exports2.end = end;
    exports2.add = add;
    exports2.addBack = addBack;
    var domhandler_1 = require_lib2();
    var select = __importStar(require_lib8());
    var utils_js_1 = require_utils();
    var static_js_12 = require_static();
    var domutils_1 = require_lib5();
    var reSiblingSelector = /^\s*[+~]/;
    function find(selectorOrHaystack) {
      if (!selectorOrHaystack) {
        return this._make([]);
      }
      if (typeof selectorOrHaystack !== "string") {
        const haystack = (0, utils_js_1.isCheerio)(selectorOrHaystack) ? selectorOrHaystack.toArray() : [selectorOrHaystack];
        const context = this.toArray();
        return this._make(haystack.filter((elem) => context.some((node) => (0, static_js_12.contains)(node, elem))));
      }
      return this._findBySelector(selectorOrHaystack, Number.POSITIVE_INFINITY);
    }
    function _findBySelector(selector, limit) {
      var _a;
      const context = this.toArray();
      const elems = reSiblingSelector.test(selector) ? context : this.children().toArray();
      const options = {
        context,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
        // Pass options that are recognized by `cheerio-select`
        xmlMode: this.options.xmlMode,
        lowerCaseTags: this.options.lowerCaseTags,
        lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
        pseudos: this.options.pseudos,
        quirksMode: this.options.quirksMode
      };
      return this._make(select.select(selector, elems, options, limit));
    }
    function _getMatcher(matchMap) {
      return function(fn, ...postFns) {
        return function(selector) {
          var _a;
          let matched = matchMap(fn, this);
          if (selector) {
            matched = filterArray(matched, selector, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]);
          }
          return this._make(
            // Post processing is only necessary if there is more than one element.
            this.length > 1 && matched.length > 1 ? postFns.reduce((elems, fn2) => fn2(elems), matched) : matched
          );
        };
      };
    }
    var _matcher = _getMatcher((fn, elems) => {
      let ret = [];
      for (let i = 0; i < elems.length; i++) {
        const value = fn(elems[i]);
        if (value.length > 0)
          ret = ret.concat(value);
      }
      return ret;
    });
    var _singleMatcher = _getMatcher((fn, elems) => {
      const ret = [];
      for (let i = 0; i < elems.length; i++) {
        const value = fn(elems[i]);
        if (value !== null) {
          ret.push(value);
        }
      }
      return ret;
    });
    function _matchUntil(nextElem, ...postFns) {
      let matches = null;
      const innerMatcher = _getMatcher((nextElem2, elems) => {
        const matched = [];
        (0, utils_js_1.domEach)(elems, (elem) => {
          for (let next; next = nextElem2(elem); elem = next) {
            if (matches === null || matches === void 0 ? void 0 : matches(next, matched.length))
              break;
            matched.push(next);
          }
        });
        return matched;
      })(nextElem, ...postFns);
      return function(selector, filterSelector) {
        matches = typeof selector === "string" ? (elem) => select.is(elem, selector, this.options) : selector ? getFilterFn(selector) : null;
        const ret = innerMatcher.call(this, filterSelector);
        matches = null;
        return ret;
      };
    }
    function _removeDuplicates(elems) {
      return elems.length > 1 ? Array.from(new Set(elems)) : elems;
    }
    exports2.parent = _singleMatcher(({ parent }) => parent && !(0, domhandler_1.isDocument)(parent) ? parent : null, _removeDuplicates);
    exports2.parents = _matcher((elem) => {
      const matched = [];
      while (elem.parent && !(0, domhandler_1.isDocument)(elem.parent)) {
        matched.push(elem.parent);
        elem = elem.parent;
      }
      return matched;
    }, domutils_1.uniqueSort, (elems) => elems.reverse());
    exports2.parentsUntil = _matchUntil(({ parent }) => parent && !(0, domhandler_1.isDocument)(parent) ? parent : null, domutils_1.uniqueSort, (elems) => elems.reverse());
    function closest(selector) {
      var _a;
      const set = [];
      if (!selector) {
        return this._make(set);
      }
      const selectOpts = {
        xmlMode: this.options.xmlMode,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]
      };
      const selectFn = typeof selector === "string" ? (elem) => select.is(elem, selector, selectOpts) : getFilterFn(selector);
      (0, utils_js_1.domEach)(this, (elem) => {
        if (elem && !(0, domhandler_1.isDocument)(elem) && !(0, domhandler_1.isTag)(elem)) {
          elem = elem.parent;
        }
        while (elem && (0, domhandler_1.isTag)(elem)) {
          if (selectFn(elem, 0)) {
            if (!set.includes(elem)) {
              set.push(elem);
            }
            break;
          }
          elem = elem.parent;
        }
      });
      return this._make(set);
    }
    exports2.next = _singleMatcher((elem) => (0, domutils_1.nextElementSibling)(elem));
    exports2.nextAll = _matcher((elem) => {
      const matched = [];
      while (elem.next) {
        elem = elem.next;
        if ((0, domhandler_1.isTag)(elem))
          matched.push(elem);
      }
      return matched;
    }, _removeDuplicates);
    exports2.nextUntil = _matchUntil((el) => (0, domutils_1.nextElementSibling)(el), _removeDuplicates);
    exports2.prev = _singleMatcher((elem) => (0, domutils_1.prevElementSibling)(elem));
    exports2.prevAll = _matcher((elem) => {
      const matched = [];
      while (elem.prev) {
        elem = elem.prev;
        if ((0, domhandler_1.isTag)(elem))
          matched.push(elem);
      }
      return matched;
    }, _removeDuplicates);
    exports2.prevUntil = _matchUntil((el) => (0, domutils_1.prevElementSibling)(el), _removeDuplicates);
    exports2.siblings = _matcher((elem) => (0, domutils_1.getSiblings)(elem).filter((el) => (0, domhandler_1.isTag)(el) && el !== elem), domutils_1.uniqueSort);
    exports2.children = _matcher((elem) => (0, domutils_1.getChildren)(elem).filter(domhandler_1.isTag), _removeDuplicates);
    function contents() {
      const elems = this.toArray().reduce((newElems, elem) => (0, domhandler_1.hasChildren)(elem) ? newElems.concat(elem.children) : newElems, []);
      return this._make(elems);
    }
    function each(fn) {
      let i = 0;
      const len = this.length;
      while (i < len && fn.call(this[i], i, this[i]) !== false)
        ++i;
      return this;
    }
    function map(fn) {
      let elems = [];
      for (let i = 0; i < this.length; i++) {
        const el = this[i];
        const val = fn.call(el, i, el);
        if (val != null) {
          elems = elems.concat(val);
        }
      }
      return this._make(elems);
    }
    function getFilterFn(match) {
      if (typeof match === "function") {
        return (el, i) => match.call(el, i, el);
      }
      if ((0, utils_js_1.isCheerio)(match)) {
        return (el) => Array.prototype.includes.call(match, el);
      }
      return function(el) {
        return match === el;
      };
    }
    function filter(match) {
      var _a;
      return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]));
    }
    function filterArray(nodes, match, xmlMode, root) {
      return typeof match === "string" ? select.filter(match, nodes, { xmlMode, root }) : nodes.filter(getFilterFn(match));
    }
    function is(selector) {
      const nodes = this.toArray();
      return typeof selector === "string" ? select.some(nodes.filter(domhandler_1.isTag), selector, this.options) : selector ? nodes.some(getFilterFn(selector)) : false;
    }
    function not(match) {
      let nodes = this.toArray();
      if (typeof match === "string") {
        const matches = new Set(select.filter(match, nodes, this.options));
        nodes = nodes.filter((el) => !matches.has(el));
      } else {
        const filterFn = getFilterFn(match);
        nodes = nodes.filter((el, i) => !filterFn(el, i));
      }
      return this._make(nodes);
    }
    function has(selectorOrHaystack) {
      return this.filter(typeof selectorOrHaystack === "string" ? (
        // Using the `:has` selector here short-circuits searches.
        `:has(${selectorOrHaystack})`
      ) : (_, el) => this._make(el).find(selectorOrHaystack).length > 0);
    }
    function first() {
      return this.length > 1 ? this._make(this[0]) : this;
    }
    function last() {
      return this.length > 0 ? this._make(this[this.length - 1]) : this;
    }
    function eq(i) {
      var _a;
      i = +i;
      if (i === 0 && this.length <= 1)
        return this;
      if (i < 0)
        i = this.length + i;
      return this._make((_a = this[i]) !== null && _a !== void 0 ? _a : []);
    }
    function get(i) {
      if (i == null) {
        return this.toArray();
      }
      return this[i < 0 ? this.length + i : i];
    }
    function toArray() {
      return Array.prototype.slice.call(this);
    }
    function index(selectorOrNeedle) {
      let $haystack;
      let needle;
      if (selectorOrNeedle == null) {
        $haystack = this.parent().children();
        needle = this[0];
      } else if (typeof selectorOrNeedle === "string") {
        $haystack = this._make(selectorOrNeedle);
        needle = this[0];
      } else {
        $haystack = this;
        needle = (0, utils_js_1.isCheerio)(selectorOrNeedle) ? selectorOrNeedle[0] : selectorOrNeedle;
      }
      return Array.prototype.indexOf.call($haystack, needle);
    }
    function slice(start, end2) {
      return this._make(Array.prototype.slice.call(this, start, end2));
    }
    function end() {
      var _a;
      return (_a = this.prevObject) !== null && _a !== void 0 ? _a : this._make([]);
    }
    function add(other, context) {
      const selection = this._make(other, context);
      const contents2 = (0, domutils_1.uniqueSort)([...this.get(), ...selection.get()]);
      return this._make(contents2);
    }
    function addBack(selector) {
      return this.prevObject ? this.add(selector ? this.prevObject.filter(selector) : this.prevObject) : this;
    }
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/parse.js
var require_parse2 = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/parse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getParse = getParse;
    exports2.update = update;
    var domutils_1 = require_lib5();
    var domhandler_1 = require_lib2();
    function getParse(parser) {
      return function parse2(content, options, isDocument, context) {
        if (typeof Buffer !== "undefined" && Buffer.isBuffer(content)) {
          content = content.toString();
        }
        if (typeof content === "string") {
          return parser(content, options, isDocument, context);
        }
        const doc = content;
        if (!Array.isArray(doc) && (0, domhandler_1.isDocument)(doc)) {
          return doc;
        }
        const root = new domhandler_1.Document([]);
        update(doc, root);
        return root;
      };
    }
    function update(newChilds, parent) {
      const arr = Array.isArray(newChilds) ? newChilds : [newChilds];
      if (parent) {
        parent.children = arr;
      } else {
        parent = null;
      }
      for (let i = 0; i < arr.length; i++) {
        const node = arr[i];
        if (node.parent && node.parent.children !== arr) {
          (0, domutils_1.removeElement)(node);
        }
        if (parent) {
          node.prev = arr[i - 1] || null;
          node.next = arr[i + 1] || null;
        } else {
          node.prev = node.next = null;
        }
        node.parent = parent;
      }
      return parent;
    }
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/api/manipulation.js
var require_manipulation2 = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/api/manipulation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.wrapInner = exports2.wrap = exports2.prepend = exports2.append = void 0;
    exports2._makeDomArray = _makeDomArray;
    exports2.appendTo = appendTo;
    exports2.prependTo = prependTo;
    exports2.unwrap = unwrap;
    exports2.wrapAll = wrapAll;
    exports2.after = after;
    exports2.insertAfter = insertAfter;
    exports2.before = before;
    exports2.insertBefore = insertBefore;
    exports2.remove = remove;
    exports2.replaceWith = replaceWith;
    exports2.empty = empty;
    exports2.html = html;
    exports2.toString = toString;
    exports2.text = text;
    exports2.clone = clone;
    var domhandler_1 = require_lib2();
    var parse_js_12 = require_parse2();
    var static_js_12 = require_static();
    var utils_js_1 = require_utils();
    var domutils_1 = require_lib5();
    function _makeDomArray(elem, clone2) {
      if (elem == null) {
        return [];
      }
      if (typeof elem === "string") {
        return this._parse(elem, this.options, false, null).children.slice(0);
      }
      if ("length" in elem) {
        if (elem.length === 1) {
          return this._makeDomArray(elem[0], clone2);
        }
        const result = [];
        for (let i = 0; i < elem.length; i++) {
          const el = elem[i];
          if (typeof el === "object") {
            if (el == null) {
              continue;
            }
            if (!("length" in el)) {
              result.push(clone2 ? (0, domhandler_1.cloneNode)(el, true) : el);
              continue;
            }
          }
          result.push(...this._makeDomArray(el, clone2));
        }
        return result;
      }
      return [clone2 ? (0, domhandler_1.cloneNode)(elem, true) : elem];
    }
    function _insert(concatenator) {
      return function(...elems) {
        const lastIdx = this.length - 1;
        return (0, utils_js_1.domEach)(this, (el, i) => {
          if (!(0, domhandler_1.hasChildren)(el))
            return;
          const domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, this._render(el.children)) : elems;
          const dom = this._makeDomArray(domSrc, i < lastIdx);
          concatenator(dom, el.children, el);
        });
      };
    }
    function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent) {
      var _a, _b;
      const spliceArgs = [
        spliceIdx,
        spliceCount,
        ...newElems
      ];
      const prev = spliceIdx === 0 ? null : array[spliceIdx - 1];
      const next = spliceIdx + spliceCount >= array.length ? null : array[spliceIdx + spliceCount];
      for (let idx = 0; idx < newElems.length; ++idx) {
        const node = newElems[idx];
        const oldParent = node.parent;
        if (oldParent) {
          const oldSiblings = oldParent.children;
          const prevIdx = oldSiblings.indexOf(node);
          if (prevIdx > -1) {
            oldParent.children.splice(prevIdx, 1);
            if (parent === oldParent && spliceIdx > prevIdx) {
              spliceArgs[0]--;
            }
          }
        }
        node.parent = parent;
        if (node.prev) {
          node.prev.next = (_a = node.next) !== null && _a !== void 0 ? _a : null;
        }
        if (node.next) {
          node.next.prev = (_b = node.prev) !== null && _b !== void 0 ? _b : null;
        }
        node.prev = idx === 0 ? prev : newElems[idx - 1];
        node.next = idx === newElems.length - 1 ? next : newElems[idx + 1];
      }
      if (prev) {
        prev.next = newElems[0];
      }
      if (next) {
        next.prev = newElems[newElems.length - 1];
      }
      return array.splice(...spliceArgs);
    }
    function appendTo(target) {
      const appendTarget = (0, utils_js_1.isCheerio)(target) ? target : this._make(target);
      appendTarget.append(this);
      return this;
    }
    function prependTo(target) {
      const prependTarget = (0, utils_js_1.isCheerio)(target) ? target : this._make(target);
      prependTarget.prepend(this);
      return this;
    }
    exports2.append = _insert((dom, children, parent) => {
      uniqueSplice(children, children.length, 0, dom, parent);
    });
    exports2.prepend = _insert((dom, children, parent) => {
      uniqueSplice(children, 0, 0, dom, parent);
    });
    function _wrap(insert) {
      return function(wrapper) {
        const lastIdx = this.length - 1;
        const lastParent = this.parents().last();
        for (let i = 0; i < this.length; i++) {
          const el = this[i];
          const wrap = typeof wrapper === "function" ? wrapper.call(el, i, el) : typeof wrapper === "string" && !(0, utils_js_1.isHtml)(wrapper) ? lastParent.find(wrapper).clone() : wrapper;
          const [wrapperDom] = this._makeDomArray(wrap, i < lastIdx);
          if (!wrapperDom || !(0, domhandler_1.hasChildren)(wrapperDom))
            continue;
          let elInsertLocation = wrapperDom;
          let j = 0;
          while (j < elInsertLocation.children.length) {
            const child = elInsertLocation.children[j];
            if ((0, domhandler_1.isTag)(child)) {
              elInsertLocation = child;
              j = 0;
            } else {
              j++;
            }
          }
          insert(el, elInsertLocation, [wrapperDom]);
        }
        return this;
      };
    }
    exports2.wrap = _wrap((el, elInsertLocation, wrapperDom) => {
      const { parent } = el;
      if (!parent)
        return;
      const siblings = parent.children;
      const index = siblings.indexOf(el);
      (0, parse_js_12.update)([el], elInsertLocation);
      uniqueSplice(siblings, index, 0, wrapperDom, parent);
    });
    exports2.wrapInner = _wrap((el, elInsertLocation, wrapperDom) => {
      if (!(0, domhandler_1.hasChildren)(el))
        return;
      (0, parse_js_12.update)(el.children, elInsertLocation);
      (0, parse_js_12.update)(wrapperDom, el);
    });
    function unwrap(selector) {
      this.parent(selector).not("body").each((_, el) => {
        this._make(el).replaceWith(el.children);
      });
      return this;
    }
    function wrapAll(wrapper) {
      const el = this[0];
      if (el) {
        const wrap = this._make(typeof wrapper === "function" ? wrapper.call(el, 0, el) : wrapper).insertBefore(el);
        let elInsertLocation;
        for (let i = 0; i < wrap.length; i++) {
          if (wrap[i].type === "tag")
            elInsertLocation = wrap[i];
        }
        let j = 0;
        while (elInsertLocation && j < elInsertLocation.children.length) {
          const child = elInsertLocation.children[j];
          if (child.type === "tag") {
            elInsertLocation = child;
            j = 0;
          } else {
            j++;
          }
        }
        if (elInsertLocation)
          this._make(elInsertLocation).append(this);
      }
      return this;
    }
    function after(...elems) {
      const lastIdx = this.length - 1;
      return (0, utils_js_1.domEach)(this, (el, i) => {
        if (!(0, domhandler_1.hasChildren)(el) || !el.parent) {
          return;
        }
        const siblings = el.parent.children;
        const index = siblings.indexOf(el);
        if (index < 0)
          return;
        const domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, this._render(el.children)) : elems;
        const dom = this._makeDomArray(domSrc, i < lastIdx);
        uniqueSplice(siblings, index + 1, 0, dom, el.parent);
      });
    }
    function insertAfter(target) {
      if (typeof target === "string") {
        target = this._make(target);
      }
      this.remove();
      const clones = [];
      for (const el of this._makeDomArray(target)) {
        const clonedSelf = this.clone().toArray();
        const { parent } = el;
        if (!parent) {
          continue;
        }
        const siblings = parent.children;
        const index = siblings.indexOf(el);
        if (index < 0)
          continue;
        uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
        clones.push(...clonedSelf);
      }
      return this._make(clones);
    }
    function before(...elems) {
      const lastIdx = this.length - 1;
      return (0, utils_js_1.domEach)(this, (el, i) => {
        if (!(0, domhandler_1.hasChildren)(el) || !el.parent) {
          return;
        }
        const siblings = el.parent.children;
        const index = siblings.indexOf(el);
        if (index < 0)
          return;
        const domSrc = typeof elems[0] === "function" ? elems[0].call(el, i, this._render(el.children)) : elems;
        const dom = this._makeDomArray(domSrc, i < lastIdx);
        uniqueSplice(siblings, index, 0, dom, el.parent);
      });
    }
    function insertBefore(target) {
      const targetArr = this._make(target);
      this.remove();
      const clones = [];
      (0, utils_js_1.domEach)(targetArr, (el) => {
        const clonedSelf = this.clone().toArray();
        const { parent } = el;
        if (!parent) {
          return;
        }
        const siblings = parent.children;
        const index = siblings.indexOf(el);
        if (index < 0)
          return;
        uniqueSplice(siblings, index, 0, clonedSelf, parent);
        clones.push(...clonedSelf);
      });
      return this._make(clones);
    }
    function remove(selector) {
      const elems = selector ? this.filter(selector) : this;
      (0, utils_js_1.domEach)(elems, (el) => {
        (0, domutils_1.removeElement)(el);
        el.prev = el.next = el.parent = null;
      });
      return this;
    }
    function replaceWith(content) {
      return (0, utils_js_1.domEach)(this, (el, i) => {
        const { parent } = el;
        if (!parent) {
          return;
        }
        const siblings = parent.children;
        const cont = typeof content === "function" ? content.call(el, i, el) : content;
        const dom = this._makeDomArray(cont);
        (0, parse_js_12.update)(dom, null);
        const index = siblings.indexOf(el);
        uniqueSplice(siblings, index, 1, dom, parent);
        if (!dom.includes(el)) {
          el.parent = el.prev = el.next = null;
        }
      });
    }
    function empty() {
      return (0, utils_js_1.domEach)(this, (el) => {
        if (!(0, domhandler_1.hasChildren)(el))
          return;
        for (const child of el.children) {
          child.next = child.prev = child.parent = null;
        }
        el.children.length = 0;
      });
    }
    function html(str) {
      if (str === void 0) {
        const el = this[0];
        if (!el || !(0, domhandler_1.hasChildren)(el))
          return null;
        return this._render(el.children);
      }
      return (0, utils_js_1.domEach)(this, (el) => {
        if (!(0, domhandler_1.hasChildren)(el))
          return;
        for (const child of el.children) {
          child.next = child.prev = child.parent = null;
        }
        const content = (0, utils_js_1.isCheerio)(str) ? str.toArray() : this._parse(`${str}`, this.options, false, el).children;
        (0, parse_js_12.update)(content, el);
      });
    }
    function toString() {
      return this._render(this);
    }
    function text(str) {
      if (str === void 0) {
        return (0, static_js_12.text)(this);
      }
      if (typeof str === "function") {
        return (0, utils_js_1.domEach)(this, (el, i) => this._make(el).text(str.call(el, i, (0, static_js_12.text)([el]))));
      }
      return (0, utils_js_1.domEach)(this, (el) => {
        if (!(0, domhandler_1.hasChildren)(el))
          return;
        for (const child of el.children) {
          child.next = child.prev = child.parent = null;
        }
        const textNode = new domhandler_1.Text(`${str}`);
        (0, parse_js_12.update)(textNode, el);
      });
    }
    function clone() {
      const clone2 = Array.prototype.map.call(this.get(), (el) => (0, domhandler_1.cloneNode)(el, true));
      const root = new domhandler_1.Document(clone2);
      for (const node of clone2) {
        node.parent = root;
      }
      return this._make(clone2);
    }
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/api/css.js
var require_css = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/api/css.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.css = css;
    var utils_js_1 = require_utils();
    var domhandler_1 = require_lib2();
    function css(prop, val) {
      if (prop != null && val != null || // When `prop` is a "plain" object
      typeof prop === "object" && !Array.isArray(prop)) {
        return (0, utils_js_1.domEach)(this, (el, i) => {
          if ((0, domhandler_1.isTag)(el)) {
            setCss(el, prop, val, i);
          }
        });
      }
      if (this.length === 0) {
        return void 0;
      }
      return getCss(this[0], prop);
    }
    function setCss(el, prop, value, idx) {
      if (typeof prop === "string") {
        const styles = getCss(el);
        const val = typeof value === "function" ? value.call(el, idx, styles[prop]) : value;
        if (val === "") {
          delete styles[prop];
        } else if (val != null) {
          styles[prop] = val;
        }
        el.attribs["style"] = stringify2(styles);
      } else if (typeof prop === "object") {
        const keys = Object.keys(prop);
        for (let i = 0; i < keys.length; i++) {
          const k = keys[i];
          setCss(el, k, prop[k], i);
        }
      }
    }
    function getCss(el, prop) {
      if (!el || !(0, domhandler_1.isTag)(el))
        return;
      const styles = parse2(el.attribs["style"]);
      if (typeof prop === "string") {
        return styles[prop];
      }
      if (Array.isArray(prop)) {
        const newStyles = {};
        for (const item of prop) {
          if (styles[item] != null) {
            newStyles[item] = styles[item];
          }
        }
        return newStyles;
      }
      return styles;
    }
    function stringify2(obj) {
      return Object.keys(obj).reduce((str, prop) => `${str}${str ? " " : ""}${prop}: ${obj[prop]};`, "");
    }
    function parse2(styles) {
      styles = (styles || "").trim();
      if (!styles)
        return {};
      const obj = {};
      let key;
      for (const str of styles.split(";")) {
        const n = str.indexOf(":");
        if (n < 1 || n === str.length - 1) {
          const trimmed = str.trimEnd();
          if (trimmed.length > 0 && key !== void 0) {
            obj[key] += `;${trimmed}`;
          }
        } else {
          key = str.slice(0, n).trim();
          obj[key] = str.slice(n + 1).trim();
        }
      }
      return obj;
    }
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/api/forms.js
var require_forms = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/api/forms.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.serialize = serialize;
    exports2.serializeArray = serializeArray;
    var domhandler_1 = require_lib2();
    var submittableSelector = "input,select,textarea,keygen";
    var r20 = /%20/g;
    var rCRLF = /\r?\n/g;
    function serialize() {
      const arr = this.serializeArray();
      const retArr = arr.map((data) => `${encodeURIComponent(data.name)}=${encodeURIComponent(data.value)}`);
      return retArr.join("&").replace(r20, "+");
    }
    function serializeArray() {
      return this.map((_, elem) => {
        const $elem = this._make(elem);
        if ((0, domhandler_1.isTag)(elem) && elem.name === "form") {
          return $elem.find(submittableSelector).toArray();
        }
        return $elem.filter(submittableSelector).toArray();
      }).filter(
        // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
        '[name!=""]:enabled:not(:submit, :button, :image, :reset, :file):matches([checked], :not(:checkbox, :radio))'
      ).map((_, elem) => {
        var _a;
        const $elem = this._make(elem);
        const name = $elem.attr("name");
        const value = (_a = $elem.val()) !== null && _a !== void 0 ? _a : "";
        if (Array.isArray(value)) {
          return value.map((val) => (
            /*
             * We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
             * These can occur inside of `<textarea>'s`
             */
            { name, value: val.replace(rCRLF, "\r\n") }
          ));
        }
        return { name, value: value.replace(rCRLF, "\r\n") };
      }).toArray();
    }
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/api/extract.js
var require_extract = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/api/extract.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.extract = extract;
    function getExtractDescr(descr) {
      var _a;
      if (typeof descr === "string") {
        return { selector: descr, value: "textContent" };
      }
      return {
        selector: descr.selector,
        value: (_a = descr.value) !== null && _a !== void 0 ? _a : "textContent"
      };
    }
    function extract(map) {
      const ret = {};
      for (const key in map) {
        const descr = map[key];
        const isArray = Array.isArray(descr);
        const { selector, value } = getExtractDescr(isArray ? descr[0] : descr);
        const fn = typeof value === "function" ? value : typeof value === "string" ? (el) => this._make(el).prop(value) : (el) => this._make(el).extract(value);
        if (isArray) {
          ret[key] = this._findBySelector(selector, Number.POSITIVE_INFINITY).map((_, el) => fn(el, key, ret)).get();
        } else {
          const $ = this._findBySelector(selector, 1);
          ret[key] = $.length > 0 ? fn($[0], key, ret) : void 0;
        }
      }
      return ret;
    }
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/cheerio.js
var require_cheerio = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/cheerio.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Cheerio = void 0;
    var Attributes = __importStar(require_attributes());
    var Traversing = __importStar(require_traversing());
    var Manipulation = __importStar(require_manipulation2());
    var Css = __importStar(require_css());
    var Forms = __importStar(require_forms());
    var Extract = __importStar(require_extract());
    var Cheerio = class {
      /**
       * Instance of cheerio. Methods are specified in the modules. Usage of this
       * constructor is not recommended. Please use `$.load` instead.
       *
       * @private
       * @param elements - The new selection.
       * @param root - Sets the root node.
       * @param options - Options for the instance.
       */
      constructor(elements, root, options) {
        this.length = 0;
        this.options = options;
        this._root = root;
        if (elements) {
          for (let idx = 0; idx < elements.length; idx++) {
            this[idx] = elements[idx];
          }
          this.length = elements.length;
        }
      }
    };
    exports2.Cheerio = Cheerio;
    Cheerio.prototype.cheerio = "[cheerio object]";
    Cheerio.prototype.splice = Array.prototype.splice;
    Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    Object.assign(Cheerio.prototype, Attributes, Traversing, Manipulation, Css, Forms, Extract);
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/load.js
var require_load = __commonJS({
  "../lnr-plugins/node_modules/cheerio/dist/commonjs/load.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getLoad = getLoad;
    var options_js_1 = require_options();
    var staticMethods = __importStar(require_static());
    var cheerio_js_1 = require_cheerio();
    var utils_js_1 = require_utils();
    function getLoad(parse2, render) {
      return function load(content, options, isDocument = true) {
        if (content == null) {
          throw new Error("cheerio.load() expects a string");
        }
        const internalOpts = (0, options_js_1.flattenOptions)(options);
        const initialRoot = parse2(content, internalOpts, isDocument, null);
        class LoadedCheerio extends cheerio_js_1.Cheerio {
          _make(selector, context) {
            const cheerio = initialize(selector, context);
            cheerio.prevObject = this;
            return cheerio;
          }
          _parse(content2, options2, isDocument2, context) {
            return parse2(content2, options2, isDocument2, context);
          }
          _render(dom) {
            return render(dom, this.options);
          }
        }
        function initialize(selector, context, root = initialRoot, opts) {
          if (selector && (0, utils_js_1.isCheerio)(selector))
            return selector;
          const options2 = (0, options_js_1.flattenOptions)(opts, internalOpts);
          const r = typeof root === "string" ? [parse2(root, options2, false, null)] : "length" in root ? root : [root];
          const rootInstance = (0, utils_js_1.isCheerio)(r) ? r : new LoadedCheerio(r, null, options2);
          rootInstance._root = rootInstance;
          if (!selector) {
            return new LoadedCheerio(void 0, rootInstance, options2);
          }
          const elements = typeof selector === "string" && (0, utils_js_1.isHtml)(selector) ? (
            // $(<html>)
            parse2(selector, options2, false, null).children
          ) : isNode(selector) ? (
            // $(dom)
            [selector]
          ) : Array.isArray(selector) ? (
            // $([dom])
            selector
          ) : void 0;
          const instance = new LoadedCheerio(elements, rootInstance, options2);
          if (elements) {
            return instance;
          }
          if (typeof selector !== "string") {
            throw new TypeError("Unexpected type of selector");
          }
          let search = selector;
          const searchContext = context ? (
            // If we don't have a context, maybe we have a root, from loading
            typeof context === "string" ? (0, utils_js_1.isHtml)(context) ? (
              // $('li', '<ul>...</ul>')
              new LoadedCheerio([parse2(context, options2, false, null)], rootInstance, options2)
            ) : (
              // $('li', 'ul')
              (search = `${context} ${search}`, rootInstance)
            ) : (0, utils_js_1.isCheerio)(context) ? (
              // $('li', $)
              context
            ) : (
              // $('li', node), $('li', [nodes])
              new LoadedCheerio(Array.isArray(context) ? context : [context], rootInstance, options2)
            )
          ) : rootInstance;
          if (!searchContext)
            return instance;
          return searchContext.find(search);
        }
        Object.assign(initialize, staticMethods, {
          load,
          // `_root` and `_options` are used in static methods.
          _root: initialRoot,
          _options: internalOpts,
          // Add `fn` for plugins
          fn: LoadedCheerio.prototype,
          // Add the prototype here to maintain `instanceof` behavior.
          prototype: LoadedCheerio.prototype
        });
        return initialize;
      };
    }
    function isNode(obj) {
      return !!obj.name || obj.type === "root" || obj.type === "text" || obj.type === "comment";
    }
  }
});

// ../lnr-plugins/node_modules/htmlparser2/lib/Tokenizer.js
var require_Tokenizer = __commonJS({
  "../lnr-plugins/node_modules/htmlparser2/lib/Tokenizer.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.QuoteType = void 0;
    var decode_js_1 = require_decode();
    var CharCodes;
    (function(CharCodes2) {
      CharCodes2[CharCodes2["Tab"] = 9] = "Tab";
      CharCodes2[CharCodes2["NewLine"] = 10] = "NewLine";
      CharCodes2[CharCodes2["FormFeed"] = 12] = "FormFeed";
      CharCodes2[CharCodes2["CarriageReturn"] = 13] = "CarriageReturn";
      CharCodes2[CharCodes2["Space"] = 32] = "Space";
      CharCodes2[CharCodes2["ExclamationMark"] = 33] = "ExclamationMark";
      CharCodes2[CharCodes2["Number"] = 35] = "Number";
      CharCodes2[CharCodes2["Amp"] = 38] = "Amp";
      CharCodes2[CharCodes2["SingleQuote"] = 39] = "SingleQuote";
      CharCodes2[CharCodes2["DoubleQuote"] = 34] = "DoubleQuote";
      CharCodes2[CharCodes2["Dash"] = 45] = "Dash";
      CharCodes2[CharCodes2["Slash"] = 47] = "Slash";
      CharCodes2[CharCodes2["Zero"] = 48] = "Zero";
      CharCodes2[CharCodes2["Nine"] = 57] = "Nine";
      CharCodes2[CharCodes2["Semi"] = 59] = "Semi";
      CharCodes2[CharCodes2["Lt"] = 60] = "Lt";
      CharCodes2[CharCodes2["Eq"] = 61] = "Eq";
      CharCodes2[CharCodes2["Gt"] = 62] = "Gt";
      CharCodes2[CharCodes2["Questionmark"] = 63] = "Questionmark";
      CharCodes2[CharCodes2["UpperA"] = 65] = "UpperA";
      CharCodes2[CharCodes2["LowerA"] = 97] = "LowerA";
      CharCodes2[CharCodes2["UpperF"] = 70] = "UpperF";
      CharCodes2[CharCodes2["LowerF"] = 102] = "LowerF";
      CharCodes2[CharCodes2["UpperZ"] = 90] = "UpperZ";
      CharCodes2[CharCodes2["LowerZ"] = 122] = "LowerZ";
      CharCodes2[CharCodes2["LowerX"] = 120] = "LowerX";
      CharCodes2[CharCodes2["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
    })(CharCodes || (CharCodes = {}));
    var State;
    (function(State2) {
      State2[State2["Text"] = 1] = "Text";
      State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
      State2[State2["InTagName"] = 3] = "InTagName";
      State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
      State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
      State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
      State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
      State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
      State2[State2["InAttributeName"] = 9] = "InAttributeName";
      State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
      State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
      State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
      State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
      State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
      State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
      State2[State2["InDeclaration"] = 16] = "InDeclaration";
      State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
      State2[State2["BeforeComment"] = 18] = "BeforeComment";
      State2[State2["CDATASequence"] = 19] = "CDATASequence";
      State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
      State2[State2["InCommentLike"] = 21] = "InCommentLike";
      State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
      State2[State2["BeforeSpecialT"] = 23] = "BeforeSpecialT";
      State2[State2["SpecialStartSequence"] = 24] = "SpecialStartSequence";
      State2[State2["InSpecialTag"] = 25] = "InSpecialTag";
      State2[State2["InEntity"] = 26] = "InEntity";
    })(State || (State = {}));
    function isWhitespace2(c) {
      return c === CharCodes.Space || c === CharCodes.NewLine || c === CharCodes.Tab || c === CharCodes.FormFeed || c === CharCodes.CarriageReturn;
    }
    function isEndOfTagSection(c) {
      return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace2(c);
    }
    function isASCIIAlpha(c) {
      return c >= CharCodes.LowerA && c <= CharCodes.LowerZ || c >= CharCodes.UpperA && c <= CharCodes.UpperZ;
    }
    var QuoteType;
    (function(QuoteType2) {
      QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
      QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
      QuoteType2[QuoteType2["Single"] = 2] = "Single";
      QuoteType2[QuoteType2["Double"] = 3] = "Double";
    })(QuoteType || (exports2.QuoteType = QuoteType = {}));
    var Sequences = {
      Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
      // CDATA[
      CdataEnd: new Uint8Array([93, 93, 62]),
      // ]]>
      CommentEnd: new Uint8Array([45, 45, 62]),
      // `-->`
      ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
      // `<\/script`
      StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
      // `</style`
      TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
      // `</title`
      TextareaEnd: new Uint8Array([
        60,
        47,
        116,
        101,
        120,
        116,
        97,
        114,
        101,
        97
      ])
      // `</textarea`
    };
    var Tokenizer = (
      /** @class */
      (function() {
        function Tokenizer2(_a, cbs) {
          var _b = _a.xmlMode, xmlMode = _b === void 0 ? false : _b, _c = _a.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
          var _this = this;
          this.cbs = cbs;
          this.state = State.Text;
          this.buffer = "";
          this.sectionStart = 0;
          this.index = 0;
          this.entityStart = 0;
          this.baseState = State.Text;
          this.isSpecial = false;
          this.running = true;
          this.offset = 0;
          this.currentSequence = void 0;
          this.sequenceIndex = 0;
          this.xmlMode = xmlMode;
          this.decodeEntities = decodeEntities;
          this.entityDecoder = new decode_js_1.EntityDecoder(xmlMode ? decode_js_1.xmlDecodeTree : decode_js_1.htmlDecodeTree, function(cp, consumed) {
            return _this.emitCodePoint(cp, consumed);
          });
        }
        Tokenizer2.prototype.reset = function() {
          this.state = State.Text;
          this.buffer = "";
          this.sectionStart = 0;
          this.index = 0;
          this.baseState = State.Text;
          this.currentSequence = void 0;
          this.running = true;
          this.offset = 0;
        };
        Tokenizer2.prototype.write = function(chunk) {
          this.offset += this.buffer.length;
          this.buffer = chunk;
          this.parse();
        };
        Tokenizer2.prototype.end = function() {
          if (this.running)
            this.finish();
        };
        Tokenizer2.prototype.pause = function() {
          this.running = false;
        };
        Tokenizer2.prototype.resume = function() {
          this.running = true;
          if (this.index < this.buffer.length + this.offset) {
            this.parse();
          }
        };
        Tokenizer2.prototype.stateText = function(c) {
          if (c === CharCodes.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes.Lt)) {
            if (this.index > this.sectionStart) {
              this.cbs.ontext(this.sectionStart, this.index);
            }
            this.state = State.BeforeTagName;
            this.sectionStart = this.index;
          } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
          }
        };
        Tokenizer2.prototype.stateSpecialStartSequence = function(c) {
          var isEnd = this.sequenceIndex === this.currentSequence.length;
          var isMatch = isEnd ? (
            // If we are at the end of the sequence, make sure the tag name has ended
            isEndOfTagSection(c)
          ) : (
            // Otherwise, do a case-insensitive comparison
            (c | 32) === this.currentSequence[this.sequenceIndex]
          );
          if (!isMatch) {
            this.isSpecial = false;
          } else if (!isEnd) {
            this.sequenceIndex++;
            return;
          }
          this.sequenceIndex = 0;
          this.state = State.InTagName;
          this.stateInTagName(c);
        };
        Tokenizer2.prototype.stateInSpecialTag = function(c) {
          if (this.sequenceIndex === this.currentSequence.length) {
            if (c === CharCodes.Gt || isWhitespace2(c)) {
              var endOfText = this.index - this.currentSequence.length;
              if (this.sectionStart < endOfText) {
                var actualIndex = this.index;
                this.index = endOfText;
                this.cbs.ontext(this.sectionStart, endOfText);
                this.index = actualIndex;
              }
              this.isSpecial = false;
              this.sectionStart = endOfText + 2;
              this.stateInClosingTagName(c);
              return;
            }
            this.sequenceIndex = 0;
          }
          if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
            this.sequenceIndex += 1;
          } else if (this.sequenceIndex === 0) {
            if (this.currentSequence === Sequences.TitleEnd) {
              if (this.decodeEntities && c === CharCodes.Amp) {
                this.startEntity();
              }
            } else if (this.fastForwardTo(CharCodes.Lt)) {
              this.sequenceIndex = 1;
            }
          } else {
            this.sequenceIndex = Number(c === CharCodes.Lt);
          }
        };
        Tokenizer2.prototype.stateCDATASequence = function(c) {
          if (c === Sequences.Cdata[this.sequenceIndex]) {
            if (++this.sequenceIndex === Sequences.Cdata.length) {
              this.state = State.InCommentLike;
              this.currentSequence = Sequences.CdataEnd;
              this.sequenceIndex = 0;
              this.sectionStart = this.index + 1;
            }
          } else {
            this.sequenceIndex = 0;
            this.state = State.InDeclaration;
            this.stateInDeclaration(c);
          }
        };
        Tokenizer2.prototype.fastForwardTo = function(c) {
          while (++this.index < this.buffer.length + this.offset) {
            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
              return true;
            }
          }
          this.index = this.buffer.length + this.offset - 1;
          return false;
        };
        Tokenizer2.prototype.stateInCommentLike = function(c) {
          if (c === this.currentSequence[this.sequenceIndex]) {
            if (++this.sequenceIndex === this.currentSequence.length) {
              if (this.currentSequence === Sequences.CdataEnd) {
                this.cbs.oncdata(this.sectionStart, this.index, 2);
              } else {
                this.cbs.oncomment(this.sectionStart, this.index, 2);
              }
              this.sequenceIndex = 0;
              this.sectionStart = this.index + 1;
              this.state = State.Text;
            }
          } else if (this.sequenceIndex === 0) {
            if (this.fastForwardTo(this.currentSequence[0])) {
              this.sequenceIndex = 1;
            }
          } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
            this.sequenceIndex = 0;
          }
        };
        Tokenizer2.prototype.isTagStartChar = function(c) {
          return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
        };
        Tokenizer2.prototype.startSpecial = function(sequence, offset) {
          this.isSpecial = true;
          this.currentSequence = sequence;
          this.sequenceIndex = offset;
          this.state = State.SpecialStartSequence;
        };
        Tokenizer2.prototype.stateBeforeTagName = function(c) {
          if (c === CharCodes.ExclamationMark) {
            this.state = State.BeforeDeclaration;
            this.sectionStart = this.index + 1;
          } else if (c === CharCodes.Questionmark) {
            this.state = State.InProcessingInstruction;
            this.sectionStart = this.index + 1;
          } else if (this.isTagStartChar(c)) {
            var lower = c | 32;
            this.sectionStart = this.index;
            if (this.xmlMode) {
              this.state = State.InTagName;
            } else if (lower === Sequences.ScriptEnd[2]) {
              this.state = State.BeforeSpecialS;
            } else if (lower === Sequences.TitleEnd[2]) {
              this.state = State.BeforeSpecialT;
            } else {
              this.state = State.InTagName;
            }
          } else if (c === CharCodes.Slash) {
            this.state = State.BeforeClosingTagName;
          } else {
            this.state = State.Text;
            this.stateText(c);
          }
        };
        Tokenizer2.prototype.stateInTagName = function(c) {
          if (isEndOfTagSection(c)) {
            this.cbs.onopentagname(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
          }
        };
        Tokenizer2.prototype.stateBeforeClosingTagName = function(c) {
          if (isWhitespace2(c)) {
          } else if (c === CharCodes.Gt) {
            this.state = State.Text;
          } else {
            this.state = this.isTagStartChar(c) ? State.InClosingTagName : State.InSpecialComment;
            this.sectionStart = this.index;
          }
        };
        Tokenizer2.prototype.stateInClosingTagName = function(c) {
          if (c === CharCodes.Gt || isWhitespace2(c)) {
            this.cbs.onclosetag(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.state = State.AfterClosingTagName;
            this.stateAfterClosingTagName(c);
          }
        };
        Tokenizer2.prototype.stateAfterClosingTagName = function(c) {
          if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.state = State.Text;
            this.sectionStart = this.index + 1;
          }
        };
        Tokenizer2.prototype.stateBeforeAttributeName = function(c) {
          if (c === CharCodes.Gt) {
            this.cbs.onopentagend(this.index);
            if (this.isSpecial) {
              this.state = State.InSpecialTag;
              this.sequenceIndex = 0;
            } else {
              this.state = State.Text;
            }
            this.sectionStart = this.index + 1;
          } else if (c === CharCodes.Slash) {
            this.state = State.InSelfClosingTag;
          } else if (!isWhitespace2(c)) {
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
          }
        };
        Tokenizer2.prototype.stateInSelfClosingTag = function(c) {
          if (c === CharCodes.Gt) {
            this.cbs.onselfclosingtag(this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
            this.isSpecial = false;
          } else if (!isWhitespace2(c)) {
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
          }
        };
        Tokenizer2.prototype.stateInAttributeName = function(c) {
          if (c === CharCodes.Eq || isEndOfTagSection(c)) {
            this.cbs.onattribname(this.sectionStart, this.index);
            this.sectionStart = this.index;
            this.state = State.AfterAttributeName;
            this.stateAfterAttributeName(c);
          }
        };
        Tokenizer2.prototype.stateAfterAttributeName = function(c) {
          if (c === CharCodes.Eq) {
            this.state = State.BeforeAttributeValue;
          } else if (c === CharCodes.Slash || c === CharCodes.Gt) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.sectionStart = -1;
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
          } else if (!isWhitespace2(c)) {
            this.cbs.onattribend(QuoteType.NoValue, this.sectionStart);
            this.state = State.InAttributeName;
            this.sectionStart = this.index;
          }
        };
        Tokenizer2.prototype.stateBeforeAttributeValue = function(c) {
          if (c === CharCodes.DoubleQuote) {
            this.state = State.InAttributeValueDq;
            this.sectionStart = this.index + 1;
          } else if (c === CharCodes.SingleQuote) {
            this.state = State.InAttributeValueSq;
            this.sectionStart = this.index + 1;
          } else if (!isWhitespace2(c)) {
            this.sectionStart = this.index;
            this.state = State.InAttributeValueNq;
            this.stateInAttributeValueNoQuotes(c);
          }
        };
        Tokenizer2.prototype.handleInAttributeValue = function(c, quote) {
          if (c === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(quote === CharCodes.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index + 1);
            this.state = State.BeforeAttributeName;
          } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
          }
        };
        Tokenizer2.prototype.stateInAttributeValueDoubleQuotes = function(c) {
          this.handleInAttributeValue(c, CharCodes.DoubleQuote);
        };
        Tokenizer2.prototype.stateInAttributeValueSingleQuotes = function(c) {
          this.handleInAttributeValue(c, CharCodes.SingleQuote);
        };
        Tokenizer2.prototype.stateInAttributeValueNoQuotes = function(c) {
          if (isWhitespace2(c) || c === CharCodes.Gt) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = -1;
            this.cbs.onattribend(QuoteType.Unquoted, this.index);
            this.state = State.BeforeAttributeName;
            this.stateBeforeAttributeName(c);
          } else if (this.decodeEntities && c === CharCodes.Amp) {
            this.startEntity();
          }
        };
        Tokenizer2.prototype.stateBeforeDeclaration = function(c) {
          if (c === CharCodes.OpeningSquareBracket) {
            this.state = State.CDATASequence;
            this.sequenceIndex = 0;
          } else {
            this.state = c === CharCodes.Dash ? State.BeforeComment : State.InDeclaration;
          }
        };
        Tokenizer2.prototype.stateInDeclaration = function(c) {
          if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.ondeclaration(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
          }
        };
        Tokenizer2.prototype.stateInProcessingInstruction = function(c) {
          if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
          }
        };
        Tokenizer2.prototype.stateBeforeComment = function(c) {
          if (c === CharCodes.Dash) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CommentEnd;
            this.sequenceIndex = 2;
            this.sectionStart = this.index + 1;
          } else {
            this.state = State.InDeclaration;
          }
        };
        Tokenizer2.prototype.stateInSpecialComment = function(c) {
          if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
            this.cbs.oncomment(this.sectionStart, this.index, 0);
            this.state = State.Text;
            this.sectionStart = this.index + 1;
          }
        };
        Tokenizer2.prototype.stateBeforeSpecialS = function(c) {
          var lower = c | 32;
          if (lower === Sequences.ScriptEnd[3]) {
            this.startSpecial(Sequences.ScriptEnd, 4);
          } else if (lower === Sequences.StyleEnd[3]) {
            this.startSpecial(Sequences.StyleEnd, 4);
          } else {
            this.state = State.InTagName;
            this.stateInTagName(c);
          }
        };
        Tokenizer2.prototype.stateBeforeSpecialT = function(c) {
          var lower = c | 32;
          if (lower === Sequences.TitleEnd[3]) {
            this.startSpecial(Sequences.TitleEnd, 4);
          } else if (lower === Sequences.TextareaEnd[3]) {
            this.startSpecial(Sequences.TextareaEnd, 4);
          } else {
            this.state = State.InTagName;
            this.stateInTagName(c);
          }
        };
        Tokenizer2.prototype.startEntity = function() {
          this.baseState = this.state;
          this.state = State.InEntity;
          this.entityStart = this.index;
          this.entityDecoder.startEntity(this.xmlMode ? decode_js_1.DecodingMode.Strict : this.baseState === State.Text || this.baseState === State.InSpecialTag ? decode_js_1.DecodingMode.Legacy : decode_js_1.DecodingMode.Attribute);
        };
        Tokenizer2.prototype.stateInEntity = function() {
          var length = this.entityDecoder.write(this.buffer, this.index - this.offset);
          if (length >= 0) {
            this.state = this.baseState;
            if (length === 0) {
              this.index = this.entityStart;
            }
          } else {
            this.index = this.offset + this.buffer.length - 1;
          }
        };
        Tokenizer2.prototype.cleanup = function() {
          if (this.running && this.sectionStart !== this.index) {
            if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
              this.cbs.ontext(this.sectionStart, this.index);
              this.sectionStart = this.index;
            } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
              this.cbs.onattribdata(this.sectionStart, this.index);
              this.sectionStart = this.index;
            }
          }
        };
        Tokenizer2.prototype.shouldContinue = function() {
          return this.index < this.buffer.length + this.offset && this.running;
        };
        Tokenizer2.prototype.parse = function() {
          while (this.shouldContinue()) {
            var c = this.buffer.charCodeAt(this.index - this.offset);
            switch (this.state) {
              case State.Text: {
                this.stateText(c);
                break;
              }
              case State.SpecialStartSequence: {
                this.stateSpecialStartSequence(c);
                break;
              }
              case State.InSpecialTag: {
                this.stateInSpecialTag(c);
                break;
              }
              case State.CDATASequence: {
                this.stateCDATASequence(c);
                break;
              }
              case State.InAttributeValueDq: {
                this.stateInAttributeValueDoubleQuotes(c);
                break;
              }
              case State.InAttributeName: {
                this.stateInAttributeName(c);
                break;
              }
              case State.InCommentLike: {
                this.stateInCommentLike(c);
                break;
              }
              case State.InSpecialComment: {
                this.stateInSpecialComment(c);
                break;
              }
              case State.BeforeAttributeName: {
                this.stateBeforeAttributeName(c);
                break;
              }
              case State.InTagName: {
                this.stateInTagName(c);
                break;
              }
              case State.InClosingTagName: {
                this.stateInClosingTagName(c);
                break;
              }
              case State.BeforeTagName: {
                this.stateBeforeTagName(c);
                break;
              }
              case State.AfterAttributeName: {
                this.stateAfterAttributeName(c);
                break;
              }
              case State.InAttributeValueSq: {
                this.stateInAttributeValueSingleQuotes(c);
                break;
              }
              case State.BeforeAttributeValue: {
                this.stateBeforeAttributeValue(c);
                break;
              }
              case State.BeforeClosingTagName: {
                this.stateBeforeClosingTagName(c);
                break;
              }
              case State.AfterClosingTagName: {
                this.stateAfterClosingTagName(c);
                break;
              }
              case State.BeforeSpecialS: {
                this.stateBeforeSpecialS(c);
                break;
              }
              case State.BeforeSpecialT: {
                this.stateBeforeSpecialT(c);
                break;
              }
              case State.InAttributeValueNq: {
                this.stateInAttributeValueNoQuotes(c);
                break;
              }
              case State.InSelfClosingTag: {
                this.stateInSelfClosingTag(c);
                break;
              }
              case State.InDeclaration: {
                this.stateInDeclaration(c);
                break;
              }
              case State.BeforeDeclaration: {
                this.stateBeforeDeclaration(c);
                break;
              }
              case State.BeforeComment: {
                this.stateBeforeComment(c);
                break;
              }
              case State.InProcessingInstruction: {
                this.stateInProcessingInstruction(c);
                break;
              }
              case State.InEntity: {
                this.stateInEntity();
                break;
              }
            }
            this.index++;
          }
          this.cleanup();
        };
        Tokenizer2.prototype.finish = function() {
          if (this.state === State.InEntity) {
            this.entityDecoder.end();
            this.state = this.baseState;
          }
          this.handleTrailingData();
          this.cbs.onend();
        };
        Tokenizer2.prototype.handleTrailingData = function() {
          var endIndex = this.buffer.length + this.offset;
          if (this.sectionStart >= endIndex) {
            return;
          }
          if (this.state === State.InCommentLike) {
            if (this.currentSequence === Sequences.CdataEnd) {
              this.cbs.oncdata(this.sectionStart, endIndex, 0);
            } else {
              this.cbs.oncomment(this.sectionStart, endIndex, 0);
            }
          } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {
          } else {
            this.cbs.ontext(this.sectionStart, endIndex);
          }
        };
        Tokenizer2.prototype.emitCodePoint = function(cp, consumed) {
          if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
            if (this.sectionStart < this.entityStart) {
              this.cbs.onattribdata(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.onattribentity(cp);
          } else {
            if (this.sectionStart < this.entityStart) {
              this.cbs.ontext(this.sectionStart, this.entityStart);
            }
            this.sectionStart = this.entityStart + consumed;
            this.index = this.sectionStart - 1;
            this.cbs.ontextentity(cp, this.sectionStart);
          }
        };
        return Tokenizer2;
      })()
    );
    exports2.default = Tokenizer;
  }
});

// ../lnr-plugins/node_modules/htmlparser2/lib/Parser.js
var require_Parser = __commonJS({
  "../lnr-plugins/node_modules/htmlparser2/lib/Parser.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Parser = void 0;
    var Tokenizer_js_1 = __importStar(require_Tokenizer());
    var decode_js_1 = require_decode();
    var formTags = /* @__PURE__ */ new Set([
      "input",
      "option",
      "optgroup",
      "select",
      "button",
      "datalist",
      "textarea"
    ]);
    var pTag = /* @__PURE__ */ new Set(["p"]);
    var tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
    var ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
    var rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
    var openImpliesClose = /* @__PURE__ */ new Map([
      ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
      ["th", /* @__PURE__ */ new Set(["th"])],
      ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
      ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
      ["li", /* @__PURE__ */ new Set(["li"])],
      ["p", pTag],
      ["h1", pTag],
      ["h2", pTag],
      ["h3", pTag],
      ["h4", pTag],
      ["h5", pTag],
      ["h6", pTag],
      ["select", formTags],
      ["input", formTags],
      ["output", formTags],
      ["button", formTags],
      ["datalist", formTags],
      ["textarea", formTags],
      ["option", /* @__PURE__ */ new Set(["option"])],
      ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
      ["dd", ddtTags],
      ["dt", ddtTags],
      ["address", pTag],
      ["article", pTag],
      ["aside", pTag],
      ["blockquote", pTag],
      ["details", pTag],
      ["div", pTag],
      ["dl", pTag],
      ["fieldset", pTag],
      ["figcaption", pTag],
      ["figure", pTag],
      ["footer", pTag],
      ["form", pTag],
      ["header", pTag],
      ["hr", pTag],
      ["main", pTag],
      ["nav", pTag],
      ["ol", pTag],
      ["pre", pTag],
      ["section", pTag],
      ["table", pTag],
      ["ul", pTag],
      ["rt", rtpTags],
      ["rp", rtpTags],
      ["tbody", tableSectionTags],
      ["tfoot", tableSectionTags]
    ]);
    var voidElements = /* @__PURE__ */ new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    var foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
    var htmlIntegrationElements = /* @__PURE__ */ new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignobject",
      "desc",
      "title"
    ]);
    var reNameEnd = /\s|\//;
    var Parser = (
      /** @class */
      (function() {
        function Parser2(cbs, options) {
          if (options === void 0) {
            options = {};
          }
          var _a, _b, _c, _d, _e, _f;
          this.options = options;
          this.startIndex = 0;
          this.endIndex = 0;
          this.openTagStart = 0;
          this.tagname = "";
          this.attribname = "";
          this.attribvalue = "";
          this.attribs = null;
          this.stack = [];
          this.buffers = [];
          this.bufferOffset = 0;
          this.writeIndex = 0;
          this.ended = false;
          this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
          this.htmlMode = !this.options.xmlMode;
          this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : this.htmlMode;
          this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : this.htmlMode;
          this.recognizeSelfClosing = (_c = options.recognizeSelfClosing) !== null && _c !== void 0 ? _c : !this.htmlMode;
          this.tokenizer = new ((_d = options.Tokenizer) !== null && _d !== void 0 ? _d : Tokenizer_js_1.default)(this.options, this);
          this.foreignContext = [!this.htmlMode];
          (_f = (_e = this.cbs).onparserinit) === null || _f === void 0 ? void 0 : _f.call(_e, this);
        }
        Parser2.prototype.ontext = function(start, endIndex) {
          var _a, _b;
          var data = this.getSlice(start, endIndex);
          this.endIndex = endIndex - 1;
          (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
          this.startIndex = endIndex;
        };
        Parser2.prototype.ontextentity = function(cp, endIndex) {
          var _a, _b;
          this.endIndex = endIndex - 1;
          (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0, decode_js_1.fromCodePoint)(cp));
          this.startIndex = endIndex;
        };
        Parser2.prototype.isVoidElement = function(name) {
          return this.htmlMode && voidElements.has(name);
        };
        Parser2.prototype.onopentagname = function(start, endIndex) {
          this.endIndex = endIndex;
          var name = this.getSlice(start, endIndex);
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          this.emitOpenTag(name);
        };
        Parser2.prototype.emitOpenTag = function(name) {
          var _a, _b, _c, _d;
          this.openTagStart = this.startIndex;
          this.tagname = name;
          var impliesClose = this.htmlMode && openImpliesClose.get(name);
          if (impliesClose) {
            while (this.stack.length > 0 && impliesClose.has(this.stack[0])) {
              var element = this.stack.shift();
              (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, true);
            }
          }
          if (!this.isVoidElement(name)) {
            this.stack.unshift(name);
            if (this.htmlMode) {
              if (foreignContextElements.has(name)) {
                this.foreignContext.unshift(true);
              } else if (htmlIntegrationElements.has(name)) {
                this.foreignContext.unshift(false);
              }
            }
          }
          (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
          if (this.cbs.onopentag)
            this.attribs = {};
        };
        Parser2.prototype.endOpenTag = function(isImplied) {
          var _a, _b;
          this.startIndex = this.openTagStart;
          if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
          }
          if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
          }
          this.tagname = "";
        };
        Parser2.prototype.onopentagend = function(endIndex) {
          this.endIndex = endIndex;
          this.endOpenTag(false);
          this.startIndex = endIndex + 1;
        };
        Parser2.prototype.onclosetag = function(start, endIndex) {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          this.endIndex = endIndex;
          var name = this.getSlice(start, endIndex);
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          if (this.htmlMode && (foreignContextElements.has(name) || htmlIntegrationElements.has(name))) {
            this.foreignContext.shift();
          }
          if (!this.isVoidElement(name)) {
            var pos = this.stack.indexOf(name);
            if (pos !== -1) {
              for (var index = 0; index <= pos; index++) {
                var element = this.stack.shift();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, element, index !== pos);
              }
            } else if (this.htmlMode && name === "p") {
              this.emitOpenTag("p");
              this.closeCurrentTag(true);
            }
          } else if (this.htmlMode && name === "br") {
            (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, "br");
            (_f = (_e = this.cbs).onopentag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", {}, true);
            (_h = (_g = this.cbs).onclosetag) === null || _h === void 0 ? void 0 : _h.call(_g, "br", false);
          }
          this.startIndex = endIndex + 1;
        };
        Parser2.prototype.onselfclosingtag = function(endIndex) {
          this.endIndex = endIndex;
          if (this.recognizeSelfClosing || this.foreignContext[0]) {
            this.closeCurrentTag(false);
            this.startIndex = endIndex + 1;
          } else {
            this.onopentagend(endIndex);
          }
        };
        Parser2.prototype.closeCurrentTag = function(isOpenImplied) {
          var _a, _b;
          var name = this.tagname;
          this.endOpenTag(isOpenImplied);
          if (this.stack[0] === name) {
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.shift();
          }
        };
        Parser2.prototype.onattribname = function(start, endIndex) {
          this.startIndex = start;
          var name = this.getSlice(start, endIndex);
          this.attribname = this.lowerCaseAttributeNames ? name.toLowerCase() : name;
        };
        Parser2.prototype.onattribdata = function(start, endIndex) {
          this.attribvalue += this.getSlice(start, endIndex);
        };
        Parser2.prototype.onattribentity = function(cp) {
          this.attribvalue += (0, decode_js_1.fromCodePoint)(cp);
        };
        Parser2.prototype.onattribend = function(quote, endIndex) {
          var _a, _b;
          this.endIndex = endIndex;
          (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === Tokenizer_js_1.QuoteType.Double ? '"' : quote === Tokenizer_js_1.QuoteType.Single ? "'" : quote === Tokenizer_js_1.QuoteType.NoValue ? void 0 : null);
          if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
          }
          this.attribvalue = "";
        };
        Parser2.prototype.getInstructionName = function(value) {
          var index = value.search(reNameEnd);
          var name = index < 0 ? value : value.substr(0, index);
          if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
          }
          return name;
        };
        Parser2.prototype.ondeclaration = function(start, endIndex) {
          this.endIndex = endIndex;
          var value = this.getSlice(start, endIndex);
          if (this.cbs.onprocessinginstruction) {
            var name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!".concat(name), "!".concat(value));
          }
          this.startIndex = endIndex + 1;
        };
        Parser2.prototype.onprocessinginstruction = function(start, endIndex) {
          this.endIndex = endIndex;
          var value = this.getSlice(start, endIndex);
          if (this.cbs.onprocessinginstruction) {
            var name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?".concat(name), "?".concat(value));
          }
          this.startIndex = endIndex + 1;
        };
        Parser2.prototype.oncomment = function(start, endIndex, offset) {
          var _a, _b, _c, _d;
          this.endIndex = endIndex;
          (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
          (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
          this.startIndex = endIndex + 1;
        };
        Parser2.prototype.oncdata = function(start, endIndex, offset) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
          this.endIndex = endIndex;
          var value = this.getSlice(start, endIndex - offset);
          if (!this.htmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
          } else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, "[CDATA[".concat(value, "]]"));
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
          }
          this.startIndex = endIndex + 1;
        };
        Parser2.prototype.onend = function() {
          var _a, _b;
          if (this.cbs.onclosetag) {
            this.endIndex = this.startIndex;
            for (var index = 0; index < this.stack.length; index++) {
              this.cbs.onclosetag(this.stack[index], true);
            }
          }
          (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        Parser2.prototype.reset = function() {
          var _a, _b, _c, _d;
          (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
          this.tokenizer.reset();
          this.tagname = "";
          this.attribname = "";
          this.attribs = null;
          this.stack.length = 0;
          this.startIndex = 0;
          this.endIndex = 0;
          (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
          this.buffers.length = 0;
          this.foreignContext.length = 0;
          this.foreignContext.unshift(!this.htmlMode);
          this.bufferOffset = 0;
          this.writeIndex = 0;
          this.ended = false;
        };
        Parser2.prototype.parseComplete = function(data) {
          this.reset();
          this.end(data);
        };
        Parser2.prototype.getSlice = function(start, end) {
          while (start - this.bufferOffset >= this.buffers[0].length) {
            this.shiftBuffer();
          }
          var slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
          while (end - this.bufferOffset > this.buffers[0].length) {
            this.shiftBuffer();
            slice += this.buffers[0].slice(0, end - this.bufferOffset);
          }
          return slice;
        };
        Parser2.prototype.shiftBuffer = function() {
          this.bufferOffset += this.buffers[0].length;
          this.writeIndex--;
          this.buffers.shift();
        };
        Parser2.prototype.write = function(chunk) {
          var _a, _b;
          if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
            return;
          }
          this.buffers.push(chunk);
          if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
          }
        };
        Parser2.prototype.end = function(chunk) {
          var _a, _b;
          if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".end() after done!"));
            return;
          }
          if (chunk)
            this.write(chunk);
          this.ended = true;
          this.tokenizer.end();
        };
        Parser2.prototype.pause = function() {
          this.tokenizer.pause();
        };
        Parser2.prototype.resume = function() {
          this.tokenizer.resume();
          while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
            this.tokenizer.write(this.buffers[this.writeIndex++]);
          }
          if (this.ended)
            this.tokenizer.end();
        };
        Parser2.prototype.parseChunk = function(chunk) {
          this.write(chunk);
        };
        Parser2.prototype.done = function(chunk) {
          this.end(chunk);
        };
        return Parser2;
      })()
    );
    exports2.Parser = Parser;
  }
});

// ../lnr-plugins/node_modules/htmlparser2/lib/index.js
var require_lib9 = __commonJS({
  "../lnr-plugins/node_modules/htmlparser2/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    }) : (function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    }));
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? (function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault2 = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DomUtils = exports2.parseFeed = exports2.getFeed = exports2.ElementType = exports2.QuoteType = exports2.Tokenizer = exports2.createDomStream = exports2.createDocumentStream = exports2.parseDOM = exports2.parseDocument = exports2.DefaultHandler = exports2.DomHandler = exports2.Parser = void 0;
    var Parser_js_1 = require_Parser();
    var Parser_js_2 = require_Parser();
    Object.defineProperty(exports2, "Parser", { enumerable: true, get: function() {
      return Parser_js_2.Parser;
    } });
    var domhandler_1 = require_lib2();
    var domhandler_2 = require_lib2();
    Object.defineProperty(exports2, "DomHandler", { enumerable: true, get: function() {
      return domhandler_2.DomHandler;
    } });
    Object.defineProperty(exports2, "DefaultHandler", { enumerable: true, get: function() {
      return domhandler_2.DomHandler;
    } });
    function parseDocument(data, options) {
      var handler = new domhandler_1.DomHandler(void 0, options);
      new Parser_js_1.Parser(handler, options).end(data);
      return handler.root;
    }
    exports2.parseDocument = parseDocument;
    function parseDOM(data, options) {
      return parseDocument(data, options).children;
    }
    exports2.parseDOM = parseDOM;
    function createDocumentStream(callback, options, elementCallback) {
      var handler = new domhandler_1.DomHandler(function(error) {
        return callback(error, handler.root);
      }, options, elementCallback);
      return new Parser_js_1.Parser(handler, options);
    }
    exports2.createDocumentStream = createDocumentStream;
    function createDomStream(callback, options, elementCallback) {
      var handler = new domhandler_1.DomHandler(callback, options, elementCallback);
      return new Parser_js_1.Parser(handler, options);
    }
    exports2.createDomStream = createDomStream;
    var Tokenizer_js_1 = require_Tokenizer();
    Object.defineProperty(exports2, "Tokenizer", { enumerable: true, get: function() {
      return __importDefault2(Tokenizer_js_1).default;
    } });
    Object.defineProperty(exports2, "QuoteType", { enumerable: true, get: function() {
      return Tokenizer_js_1.QuoteType;
    } });
    exports2.ElementType = __importStar(require_lib());
    var domutils_1 = require_lib5();
    var domutils_2 = require_lib5();
    Object.defineProperty(exports2, "getFeed", { enumerable: true, get: function() {
      return domutils_2.getFeed;
    } });
    var parseFeedDefaultOptions = { xmlMode: true };
    function parseFeed(feed, options) {
      if (options === void 0) {
        options = parseFeedDefaultOptions;
      }
      return (0, domutils_1.getFeed)(parseDOM(feed, options));
    }
    exports2.parseFeed = parseFeed;
    exports2.DomUtils = __importStar(require_lib5());
  }
});

// ../lnr-plugins/node_modules/cheerio/dist/commonjs/slim.js
var __importDefault = exports && exports.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = exports.merge = exports.contains = void 0;
var load_js_1 = require_load();
var parse_js_1 = require_parse2();
var dom_serializer_1 = __importDefault(require_lib4());
var htmlparser2_1 = require_lib9();
var static_js_1 = require_static();
Object.defineProperty(exports, "contains", { enumerable: true, get: function() {
  return static_js_1.contains;
} });
Object.defineProperty(exports, "merge", { enumerable: true, get: function() {
  return static_js_1.merge;
} });
exports.load = (0, load_js_1.getLoad)((0, parse_js_1.getParse)(htmlparser2_1.parseDocument), dom_serializer_1.default);

});
__buksVendorReg("dayjs", function(require, module, exports){
// ../lnr-plugins/node_modules/dayjs/dayjs.min.js
!(function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
})(exports, (function() {
  "use strict";
  var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
    var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
    return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
  } }, m = function(t2, e2, n2) {
    var r2 = String(t2);
    return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
  }, v = { s: m, z: function(t2) {
    var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
    return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
  }, m: function t2(e2, n2) {
    if (e2.date() < n2.date()) return -t2(n2, e2);
    var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
    return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
  }, a: function(t2) {
    return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
  }, p: function(t2) {
    return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
  }, u: function(t2) {
    return void 0 === t2;
  } }, g = "en", D = {};
  D[g] = M;
  var p = "$isDayjsObject", S = function(t2) {
    return t2 instanceof _ || !(!t2 || !t2[p]);
  }, w = function t2(e2, n2, r2) {
    var i2;
    if (!e2) return g;
    if ("string" == typeof e2) {
      var s2 = e2.toLowerCase();
      D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
      var u2 = e2.split("-");
      if (!i2 && u2.length > 1) return t2(u2[0]);
    } else {
      var a2 = e2.name;
      D[a2] = e2, i2 = a2;
    }
    return !r2 && i2 && (g = i2), i2 || !r2 && g;
  }, O = function(t2, e2) {
    if (S(t2)) return t2.clone();
    var n2 = "object" == typeof e2 ? e2 : {};
    return n2.date = t2, n2.args = arguments, new _(n2);
  }, b = v;
  b.l = w, b.i = S, b.w = function(t2, e2) {
    return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
  };
  var _ = (function() {
    function M2(t2) {
      this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
    }
    var m2 = M2.prototype;
    return m2.parse = function(t2) {
      this.$d = (function(t3) {
        var e2 = t3.date, n2 = t3.utc;
        if (null === e2) return /* @__PURE__ */ new Date(NaN);
        if (b.u(e2)) return /* @__PURE__ */ new Date();
        if (e2 instanceof Date) return new Date(e2);
        if ("string" == typeof e2 && !/Z$/i.test(e2)) {
          var r2 = e2.match($);
          if (r2) {
            var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
            return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
          }
        }
        return new Date(e2);
      })(t2), this.init();
    }, m2.init = function() {
      var t2 = this.$d;
      this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
    }, m2.$utils = function() {
      return b;
    }, m2.isValid = function() {
      return !(this.$d.toString() === l);
    }, m2.isSame = function(t2, e2) {
      var n2 = O(t2);
      return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
    }, m2.isAfter = function(t2, e2) {
      return O(t2) < this.startOf(e2);
    }, m2.isBefore = function(t2, e2) {
      return this.endOf(e2) < O(t2);
    }, m2.$g = function(t2, e2, n2) {
      return b.u(t2) ? this[e2] : this.set(n2, t2);
    }, m2.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }, m2.valueOf = function() {
      return this.$d.getTime();
    }, m2.startOf = function(t2, e2) {
      var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
        var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
        return r2 ? i2 : i2.endOf(a);
      }, $2 = function(t3, e3) {
        return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
      }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
      switch (f2) {
        case h:
          return r2 ? l2(1, 0) : l2(31, 11);
        case c:
          return r2 ? l2(1, M3) : l2(0, M3 + 1);
        case o:
          var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
          return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
        case a:
        case d:
          return $2(v2 + "Hours", 0);
        case u:
          return $2(v2 + "Minutes", 1);
        case s:
          return $2(v2 + "Seconds", 2);
        case i:
          return $2(v2 + "Milliseconds", 3);
        default:
          return this.clone();
      }
    }, m2.endOf = function(t2) {
      return this.startOf(t2, false);
    }, m2.$set = function(t2, e2) {
      var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
      if (o2 === c || o2 === h) {
        var y2 = this.clone().set(d, 1);
        y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
      } else l2 && this.$d[l2]($2);
      return this.init(), this;
    }, m2.set = function(t2, e2) {
      return this.clone().$set(t2, e2);
    }, m2.get = function(t2) {
      return this[b.p(t2)]();
    }, m2.add = function(r2, f2) {
      var d2, l2 = this;
      r2 = Number(r2);
      var $2 = b.p(f2), y2 = function(t2) {
        var e2 = O(l2);
        return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
      };
      if ($2 === c) return this.set(c, this.$M + r2);
      if ($2 === h) return this.set(h, this.$y + r2);
      if ($2 === a) return y2(1);
      if ($2 === o) return y2(7);
      var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
      return b.w(m3, this);
    }, m2.subtract = function(t2, e2) {
      return this.add(-1 * t2, e2);
    }, m2.format = function(t2) {
      var e2 = this, n2 = this.$locale();
      if (!this.isValid()) return n2.invalidDate || l;
      var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
        return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
      }, d2 = function(t3) {
        return b.s(s2 % 12 || 12, t3, "0");
      }, $2 = f2 || function(t3, e3, n3) {
        var r3 = t3 < 12 ? "AM" : "PM";
        return n3 ? r3.toLowerCase() : r3;
      };
      return r2.replace(y, (function(t3, r3) {
        return r3 || (function(t4) {
          switch (t4) {
            case "YY":
              return String(e2.$y).slice(-2);
            case "YYYY":
              return b.s(e2.$y, 4, "0");
            case "M":
              return a2 + 1;
            case "MM":
              return b.s(a2 + 1, 2, "0");
            case "MMM":
              return h2(n2.monthsShort, a2, c2, 3);
            case "MMMM":
              return h2(c2, a2);
            case "D":
              return e2.$D;
            case "DD":
              return b.s(e2.$D, 2, "0");
            case "d":
              return String(e2.$W);
            case "dd":
              return h2(n2.weekdaysMin, e2.$W, o2, 2);
            case "ddd":
              return h2(n2.weekdaysShort, e2.$W, o2, 3);
            case "dddd":
              return o2[e2.$W];
            case "H":
              return String(s2);
            case "HH":
              return b.s(s2, 2, "0");
            case "h":
              return d2(1);
            case "hh":
              return d2(2);
            case "a":
              return $2(s2, u2, true);
            case "A":
              return $2(s2, u2, false);
            case "m":
              return String(u2);
            case "mm":
              return b.s(u2, 2, "0");
            case "s":
              return String(e2.$s);
            case "ss":
              return b.s(e2.$s, 2, "0");
            case "SSS":
              return b.s(e2.$ms, 3, "0");
            case "Z":
              return i2;
          }
          return null;
        })(t3) || i2.replace(":", "");
      }));
    }, m2.utcOffset = function() {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, m2.diff = function(r2, d2, l2) {
      var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
        return b.m(y2, m3);
      };
      switch (M3) {
        case h:
          $2 = D2() / 12;
          break;
        case c:
          $2 = D2();
          break;
        case f:
          $2 = D2() / 3;
          break;
        case o:
          $2 = (g2 - v2) / 6048e5;
          break;
        case a:
          $2 = (g2 - v2) / 864e5;
          break;
        case u:
          $2 = g2 / n;
          break;
        case s:
          $2 = g2 / e;
          break;
        case i:
          $2 = g2 / t;
          break;
        default:
          $2 = g2;
      }
      return l2 ? $2 : b.a($2);
    }, m2.daysInMonth = function() {
      return this.endOf(c).$D;
    }, m2.$locale = function() {
      return D[this.$L];
    }, m2.locale = function(t2, e2) {
      if (!t2) return this.$L;
      var n2 = this.clone(), r2 = w(t2, e2, true);
      return r2 && (n2.$L = r2), n2;
    }, m2.clone = function() {
      return b.w(this.$d, this);
    }, m2.toDate = function() {
      return new Date(this.valueOf());
    }, m2.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }, m2.toISOString = function() {
      return this.$d.toISOString();
    }, m2.toString = function() {
      return this.$d.toUTCString();
    }, M2;
  })(), k = _.prototype;
  return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach((function(t2) {
    k[t2[1]] = function(e2) {
      return this.$g(e2, t2[0], t2[1]);
    };
  })), O.extend = function(t2, e2) {
    return t2.$i || (t2(e2, _, O), t2.$i = true), O;
  }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
    return O(1e3 * t2);
  }, O.en = D[g], O.Ls = D, O.p = {}, O;
}));

});
__buksVendorReg("protobufjs", function(require, module, exports){
// ../lnr-plugins/node_modules/protobufjs/dist/light/protobuf.js
(function(undefined) {
  "use strict";
  (function prelude(modules, cache, entries) {
    function $require(name) {
      var $module = cache[name];
      if (!$module)
        modules[name][0].call($module = cache[name] = { exports: {} }, $require, $module, $module.exports);
      return $module.exports;
    }
    var protobuf = $require(entries[0]);
    protobuf.util.global.protobuf = protobuf;
    if (typeof define === "function" && define.amd)
      define(["long"], function(Long) {
        if (Long && Long.isLong) {
          protobuf.util.Long = Long;
          protobuf.configure();
        }
        return protobuf;
      });
    if (typeof module === "object" && module && module.exports)
      module.exports = protobuf;
  })({ 1: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = asPromise;
    function asPromise(fn, ctx) {
      var params = new Array(arguments.length - 1), offset = 0, index = 2, pending = true;
      while (index < arguments.length)
        params[offset++] = arguments[index++];
      return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err) {
          if (pending) {
            pending = false;
            if (err)
              reject(err);
            else {
              var params2 = new Array(arguments.length - 1), offset2 = 0;
              while (offset2 < params2.length)
                params2[offset2++] = arguments[offset2];
              resolve.apply(null, params2);
            }
          }
        };
        try {
          fn.apply(ctx || null, params);
        } catch (err) {
          if (pending) {
            pending = false;
            reject(err);
          }
        }
      });
    }
  }, {}], 2: [function(require2, module2, exports2) {
    "use strict";
    var base64 = exports2;
    base64.length = function length(string) {
      var p = string.length;
      if (!p)
        return 0;
      var n = 0;
      while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
      return Math.ceil(string.length * 3) / 4 - n;
    };
    var b64 = new Array(64);
    var s64 = new Array(123);
    for (var i = 0; i < 64; )
      s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
    base64.encode = function encode(buffer, start, end) {
      var parts = null, chunk = [];
      var i2 = 0, j = 0, t;
      while (start < end) {
        var b = buffer[start++];
        switch (j) {
          case 0:
            chunk[i2++] = b64[b >> 2];
            t = (b & 3) << 4;
            j = 1;
            break;
          case 1:
            chunk[i2++] = b64[t | b >> 4];
            t = (b & 15) << 2;
            j = 2;
            break;
          case 2:
            chunk[i2++] = b64[t | b >> 6];
            chunk[i2++] = b64[b & 63];
            j = 0;
            break;
        }
        if (i2 > 8191) {
          (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
          i2 = 0;
        }
      }
      if (j) {
        chunk[i2++] = b64[t];
        chunk[i2++] = 61;
        if (j === 1)
          chunk[i2++] = 61;
      }
      if (parts) {
        if (i2)
          parts.push(String.fromCharCode.apply(String, chunk.slice(0, i2)));
        return parts.join("");
      }
      return String.fromCharCode.apply(String, chunk.slice(0, i2));
    };
    var invalidEncoding = "invalid encoding";
    base64.decode = function decode(string, buffer, offset) {
      var start = offset;
      var j = 0, t;
      for (var i2 = 0; i2 < string.length; ) {
        var c = string.charCodeAt(i2++);
        if (c === 61 && j > 1)
          break;
        if ((c = s64[c]) === undefined)
          throw Error(invalidEncoding);
        switch (j) {
          case 0:
            t = c;
            j = 1;
            break;
          case 1:
            buffer[offset++] = t << 2 | (c & 48) >> 4;
            t = c;
            j = 2;
            break;
          case 2:
            buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
            t = c;
            j = 3;
            break;
          case 3:
            buffer[offset++] = (t & 3) << 6 | c;
            j = 0;
            break;
        }
      }
      if (j === 1)
        throw Error(invalidEncoding);
      return offset - start;
    };
    base64.test = function test(string) {
      return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
    };
  }, {}], 3: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = codegen;
    var reservedRe = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
    function codegen(functionParams, functionName) {
      if (typeof functionParams === "string") {
        functionName = functionParams;
        functionParams = undefined;
      }
      var body = [];
      function Codegen(formatStringOrScope) {
        if (typeof formatStringOrScope !== "string") {
          var source = toString();
          if (codegen.verbose)
            console.log("codegen: " + source);
          source = "return " + source;
          if (formatStringOrScope) {
            var scopeKeys = Object.keys(formatStringOrScope), scopeParams = new Array(scopeKeys.length + 1), scopeValues = new Array(scopeKeys.length), scopeOffset = 0;
            while (scopeOffset < scopeKeys.length) {
              scopeParams[scopeOffset] = scopeKeys[scopeOffset];
              scopeValues[scopeOffset] = formatStringOrScope[scopeKeys[scopeOffset++]];
            }
            scopeParams[scopeOffset] = source;
            return Function.apply(null, scopeParams).apply(null, scopeValues);
          }
          return Function(source)();
        }
        var formatParams = new Array(arguments.length - 1), formatOffset = 0;
        while (formatOffset < formatParams.length)
          formatParams[formatOffset] = arguments[++formatOffset];
        formatOffset = 0;
        formatStringOrScope = formatStringOrScope.replace(/%([%dfijs])/g, function replace($0, $1) {
          var value = formatParams[formatOffset++];
          switch ($1) {
            case "d":
            case "f":
              return String(Number(value));
            case "i":
              return String(Math.floor(value));
            case "j":
              return JSON.stringify(value);
            case "s":
              return String(value);
          }
          return "%";
        });
        if (formatOffset !== formatParams.length)
          throw Error("parameter count mismatch");
        body.push(formatStringOrScope);
        return Codegen;
      }
      function toString(functionNameOverride) {
        return "function " + safeFunctionName(functionNameOverride || functionName) + "(" + (functionParams && functionParams.join(",") || "") + "){\n  " + body.join("\n  ") + "\n}";
      }
      Codegen.toString = toString;
      return Codegen;
    }
    codegen.verbose = false;
    function safeFunctionName(name) {
      if (!name)
        return "";
      name = String(name).replace(/[^\w$]/g, "");
      if (!name)
        return "";
      if (/^\d/.test(name))
        name = "_" + name;
      return reservedRe.test(name) ? name + "_" : name;
    }
  }, {}], 4: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = EventEmitter;
    function EventEmitter() {
      this._listeners = /* @__PURE__ */ Object.create(null);
    }
    EventEmitter.prototype.on = function on(evt, fn, ctx) {
      (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn,
        ctx: ctx || this
      });
      return this;
    };
    EventEmitter.prototype.off = function off(evt, fn) {
      if (evt === undefined)
        this._listeners = /* @__PURE__ */ Object.create(null);
      else {
        if (fn === undefined)
          this._listeners[evt] = [];
        else {
          var listeners = this._listeners[evt];
          if (!listeners)
            return this;
          for (var i = 0; i < listeners.length; )
            if (listeners[i].fn === fn)
              listeners.splice(i, 1);
            else
              ++i;
        }
      }
      return this;
    };
    EventEmitter.prototype.emit = function emit(evt) {
      var listeners = this._listeners[evt];
      if (listeners) {
        var args = [], i = 1;
        for (; i < arguments.length; )
          args.push(arguments[i++]);
        for (i = 0; i < listeners.length; )
          listeners[i].fn.apply(listeners[i++].ctx, args);
      }
      return this;
    };
  }, {}], 5: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = fetch;
    var asPromise = require2(1), fs = require2(6);
    function fetch(filename, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = {};
      } else if (!options)
        options = {};
      if (!callback)
        return asPromise(fetch, this, filename, options);
      if (!options.xhr && fs && fs.readFile)
        return fs.readFile(filename, function fetchReadFileCallback(err, contents) {
          return err && typeof XMLHttpRequest !== "undefined" ? fetch.xhr(filename, options, callback) : err ? callback(err) : callback(null, options.binary ? contents : contents.toString("utf8"));
        });
      return fetch.xhr(filename, options, callback);
    }
    fetch.xhr = function fetch_xhr(filename, options, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function fetchOnReadyStateChange() {
        if (xhr.readyState !== 4)
          return undefined;
        if (xhr.status !== 0 && xhr.status !== 200)
          return callback(Error("status " + xhr.status));
        if (options.binary) {
          var buffer = xhr.response;
          if (!buffer) {
            buffer = [];
            for (var i = 0; i < xhr.responseText.length; ++i)
              buffer.push(xhr.responseText.charCodeAt(i) & 255);
          }
          return callback(null, typeof Uint8Array !== "undefined" ? new Uint8Array(buffer) : buffer);
        }
        return callback(null, xhr.responseText);
      };
      if (options.binary) {
        if ("overrideMimeType" in xhr)
          xhr.overrideMimeType("text/plain; charset=x-user-defined");
        xhr.responseType = "arraybuffer";
      }
      xhr.open("GET", filename);
      xhr.send();
    };
  }, { "1": 1, "6": 6 }], 6: [function(require2, module2, exports2) {
    "use strict";
    var fs = null;
    try {
      fs = require2(11);
      if (!fs || !fs.readFile || !fs.readFileSync)
        fs = null;
    } catch (e) {
    }
    module2.exports = fs;
  }, { "11": 11 }], 7: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = factory(factory);
    function factory(exports3) {
      if (typeof Float32Array !== "undefined") (function() {
        var f32 = new Float32Array([-0]), f8b = new Uint8Array(f32.buffer), le = f8b[3] === 128;
        function writeFloat_f32_cpy(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
        }
        function writeFloat_f32_rev(val, buf, pos) {
          f32[0] = val;
          buf[pos] = f8b[3];
          buf[pos + 1] = f8b[2];
          buf[pos + 2] = f8b[1];
          buf[pos + 3] = f8b[0];
        }
        exports3.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        exports3.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;
        function readFloat_f32_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          return f32[0];
        }
        function readFloat_f32_rev(buf, pos) {
          f8b[3] = buf[pos];
          f8b[2] = buf[pos + 1];
          f8b[1] = buf[pos + 2];
          f8b[0] = buf[pos + 3];
          return f32[0];
        }
        exports3.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        exports3.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;
      })();
      else (function() {
        function writeFloat_ieee754(writeUint, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0)
            writeUint(1 / val > 0 ? (
              /* positive */
              0
            ) : (
              /* negative 0 */
              2147483648
            ), buf, pos);
          else if (isNaN(val))
            writeUint(2143289344, buf, pos);
          else if (val > 34028234663852886e22)
            writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
          else if (val < 11754943508222875e-54)
            writeUint((sign << 31 | Math.round(val / 1401298464324817e-60)) >>> 0, buf, pos);
          else {
            var exponent = Math.floor(Math.log(val) / Math.LN2), mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
            writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
          }
        }
        exports3.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports3.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);
        function readFloat_ieee754(readUint, buf, pos) {
          var uint = readUint(buf, pos), sign = (uint >> 31) * 2 + 1, exponent = uint >>> 23 & 255, mantissa = uint & 8388607;
          return exponent === 255 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 1401298464324817e-60 * mantissa : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }
        exports3.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports3.readFloatBE = readFloat_ieee754.bind(null, readUintBE);
      })();
      if (typeof Float64Array !== "undefined") (function() {
        var f64 = new Float64Array([-0]), f8b = new Uint8Array(f64.buffer), le = f8b[7] === 128;
        function writeDouble_f64_cpy(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[0];
          buf[pos + 1] = f8b[1];
          buf[pos + 2] = f8b[2];
          buf[pos + 3] = f8b[3];
          buf[pos + 4] = f8b[4];
          buf[pos + 5] = f8b[5];
          buf[pos + 6] = f8b[6];
          buf[pos + 7] = f8b[7];
        }
        function writeDouble_f64_rev(val, buf, pos) {
          f64[0] = val;
          buf[pos] = f8b[7];
          buf[pos + 1] = f8b[6];
          buf[pos + 2] = f8b[5];
          buf[pos + 3] = f8b[4];
          buf[pos + 4] = f8b[3];
          buf[pos + 5] = f8b[2];
          buf[pos + 6] = f8b[1];
          buf[pos + 7] = f8b[0];
        }
        exports3.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        exports3.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;
        function readDouble_f64_cpy(buf, pos) {
          f8b[0] = buf[pos];
          f8b[1] = buf[pos + 1];
          f8b[2] = buf[pos + 2];
          f8b[3] = buf[pos + 3];
          f8b[4] = buf[pos + 4];
          f8b[5] = buf[pos + 5];
          f8b[6] = buf[pos + 6];
          f8b[7] = buf[pos + 7];
          return f64[0];
        }
        function readDouble_f64_rev(buf, pos) {
          f8b[7] = buf[pos];
          f8b[6] = buf[pos + 1];
          f8b[5] = buf[pos + 2];
          f8b[4] = buf[pos + 3];
          f8b[3] = buf[pos + 4];
          f8b[2] = buf[pos + 5];
          f8b[1] = buf[pos + 6];
          f8b[0] = buf[pos + 7];
          return f64[0];
        }
        exports3.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        exports3.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;
      })();
      else (function() {
        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
          var sign = val < 0 ? 1 : 0;
          if (sign)
            val = -val;
          if (val === 0) {
            writeUint(0, buf, pos + off0);
            writeUint(1 / val > 0 ? (
              /* positive */
              0
            ) : (
              /* negative 0 */
              2147483648
            ), buf, pos + off1);
          } else if (isNaN(val)) {
            writeUint(0, buf, pos + off0);
            writeUint(2146959360, buf, pos + off1);
          } else if (val > 17976931348623157e292) {
            writeUint(0, buf, pos + off0);
            writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
          } else {
            var mantissa;
            if (val < 22250738585072014e-324) {
              mantissa = val / 5e-324;
              writeUint(mantissa >>> 0, buf, pos + off0);
              writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
            } else {
              var exponent = Math.floor(Math.log(val) / Math.LN2);
              if (exponent === 1024)
                exponent = 1023;
              mantissa = val * Math.pow(2, -exponent);
              writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
              writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
            }
          }
        }
        exports3.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports3.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);
        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
          var lo = readUint(buf, pos + off0), hi = readUint(buf, pos + off1);
          var sign = (hi >> 31) * 2 + 1, exponent = hi >>> 20 & 2047, mantissa = 4294967296 * (hi & 1048575) + lo;
          return exponent === 2047 ? mantissa ? NaN : sign * Infinity : exponent === 0 ? sign * 5e-324 * mantissa : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }
        exports3.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports3.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);
      })();
      return exports3;
    }
    function writeUintLE(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    function writeUintBE(val, buf, pos) {
      buf[pos] = val >>> 24;
      buf[pos + 1] = val >>> 16 & 255;
      buf[pos + 2] = val >>> 8 & 255;
      buf[pos + 3] = val & 255;
    }
    function readUintLE(buf, pos) {
      return (buf[pos] | buf[pos + 1] << 8 | buf[pos + 2] << 16 | buf[pos + 3] << 24) >>> 0;
    }
    function readUintBE(buf, pos) {
      return (buf[pos] << 24 | buf[pos + 1] << 16 | buf[pos + 2] << 8 | buf[pos + 3]) >>> 0;
    }
  }, {}], 8: [function(require2, module2, exports2) {
    "use strict";
    var path = exports2;
    var isAbsolute = (
      /**
       * Tests if the specified path is absolute.
       * @param {string} path Path to test
       * @returns {boolean} `true` if path is absolute
       */
      path.isAbsolute = function isAbsolute2(path2) {
        return /^(?:\/|\w+:)/.test(path2);
      }
    );
    var normalize = (
      /**
       * Normalizes the specified path.
       * @param {string} path Path to normalize
       * @returns {string} Normalized path
       */
      path.normalize = function normalize2(path2) {
        path2 = path2.replace(/\\/g, "/").replace(/\/{2,}/g, "/");
        var parts = path2.split("/"), absolute = isAbsolute(path2), prefix = "";
        if (absolute)
          prefix = parts.shift() + "/";
        for (var i = 0; i < parts.length; ) {
          if (parts[i] === "..") {
            if (i > 0 && parts[i - 1] !== "..")
              parts.splice(--i, 2);
            else if (absolute)
              parts.splice(i, 1);
            else
              ++i;
          } else if (parts[i] === ".")
            parts.splice(i, 1);
          else
            ++i;
        }
        return prefix + parts.join("/");
      }
    );
    path.resolve = function resolve(originPath, includePath, alreadyNormalized) {
      if (!alreadyNormalized)
        includePath = normalize(includePath);
      if (isAbsolute(includePath))
        return includePath;
      if (!alreadyNormalized)
        originPath = normalize(originPath);
      return (originPath = originPath.replace(/(?:\/|^)[^/]+$/, "")).length ? normalize(originPath + "/" + includePath) : includePath;
    };
  }, {}], 9: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = pool;
    function pool(alloc, slice, size) {
      var SIZE = size || 8192;
      var MAX = SIZE >>> 1;
      var slab = null;
      var offset = SIZE;
      return function pool_alloc(size2) {
        if (size2 < 1 || size2 > MAX)
          return alloc(size2);
        if (offset + size2 > SIZE) {
          slab = alloc(SIZE);
          offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size2);
        if (offset & 7)
          offset = (offset | 7) + 1;
        return buf;
      };
    }
  }, {}], 10: [function(require2, module2, exports2) {
    "use strict";
    var utf8 = exports2, replacementChar = "\uFFFD";
    utf8.length = function utf8_length(string) {
      var len = 0, c = 0;
      for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
          len += 1;
        else if (c < 2048)
          len += 2;
        else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
          ++i;
          len += 4;
        } else
          len += 3;
      }
      return len;
    };
    utf8.read = function utf8_read(buffer, start, end) {
      if (end - start < 1) {
        return "";
      }
      var str = "";
      for (var i = start; i < end; ) {
        var t = buffer[i++];
        if (t <= 127) {
          str += String.fromCharCode(t);
        } else if (t >= 192 && t < 224) {
          var c2 = (t & 31) << 6 | buffer[i++] & 63;
          str += c2 >= 128 ? String.fromCharCode(c2) : replacementChar;
        } else if (t >= 224 && t < 240) {
          var c3 = (t & 15) << 12 | (buffer[i++] & 63) << 6 | buffer[i++] & 63;
          str += c3 >= 2048 ? String.fromCharCode(c3) : replacementChar;
        } else if (t >= 240) {
          var t2 = (t & 7) << 18 | (buffer[i++] & 63) << 12 | (buffer[i++] & 63) << 6 | buffer[i++] & 63;
          if (t2 < 65536 || t2 > 1114111)
            str += replacementChar;
          else {
            t2 -= 65536;
            str += String.fromCharCode(55296 + (t2 >> 10));
            str += String.fromCharCode(56320 + (t2 & 1023));
          }
        }
      }
      return str;
    };
    utf8.write = function utf8_write(string, buffer, offset) {
      var start = offset, c1, c2;
      for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
          buffer[offset++] = c1;
        } else if (c1 < 2048) {
          buffer[offset++] = c1 >> 6 | 192;
          buffer[offset++] = c1 & 63 | 128;
        } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
          c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
          ++i;
          buffer[offset++] = c1 >> 18 | 240;
          buffer[offset++] = c1 >> 12 & 63 | 128;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        } else {
          buffer[offset++] = c1 >> 12 | 224;
          buffer[offset++] = c1 >> 6 & 63 | 128;
          buffer[offset++] = c1 & 63 | 128;
        }
      }
      return offset - start;
    };
  }, {}], 11: [function(require2, module2, exports2) {
  }, {}], 12: [function(require2, module2, exports2) {
    "use strict";
    var converter = exports2;
    var Enum = require2(15), util = require2(34);
    function genValuePartial_fromObject(gen, field, fieldIndex, prop) {
      var defaultAlreadyEmitted = false;
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) {
          gen("switch(d%s){", prop);
          for (var values = field.resolvedType.values, keys = Object.keys(values), i = 0; i < keys.length; ++i) {
            if (values[keys[i]] === field.typeDefault && !defaultAlreadyEmitted) {
              gen("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', prop, prop, prop);
              if (!field.repeated) gen("break");
              defaultAlreadyEmitted = true;
            }
            gen("case%j:", keys[i])("case %i:", values[keys[i]])("m%s=%j", prop, values[keys[i]])("break");
          }
          gen("}");
        } else gen("if(!util.isObject(d%s))", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s=types[%i].fromObject(d%s,n+1)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field.type) {
          case "double":
          case "float":
            gen("m%s=Number(d%s)", prop, prop);
            break;
          case "uint32":
          case "fixed32":
            gen("m%s=d%s>>>0", prop, prop);
            break;
          case "int32":
          case "sint32":
          case "sfixed32":
            gen("m%s=d%s|0", prop, prop);
            break;
          case "uint64":
          case "fixed64":
            isUnsigned = true;
          // eslint-disable-next-line no-fallthrough
          case "int64":
          case "sint64":
          case "sfixed64":
            gen("if(util.Long)")("m%s=util.Long.fromValue(d%s,%j)", prop, prop, isUnsigned)('else if(typeof d%s==="string")', prop)("m%s=parseInt(d%s,10)", prop, prop)('else if(typeof d%s==="number")', prop)("m%s=d%s", prop, prop)('else if(typeof d%s==="object")', prop)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", prop, prop, prop, isUnsigned ? "true" : "");
            break;
          case "bytes":
            gen('if(typeof d%s==="string")', prop)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", prop, prop, prop)("else if(d%s.length >= 0)", prop)("m%s=d%s", prop, prop);
            break;
          case "string":
            gen("m%s=String(d%s)", prop, prop);
            break;
          case "bool":
            gen("m%s=Boolean(d%s)", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter.fromObject = function fromObject(mtype) {
      var fields = mtype.fieldsArray;
      var gen = util.codegen(["d", "n"], mtype.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
      if (!fields.length) return gen("return new this.ctor");
      gen("if(!util.isObject(d))")("throw TypeError(%j)", mtype.fullName + ": object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")('throw Error("maximum nesting depth exceeded")');
      gen("var m=new this.ctor");
      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(), prop = util.safeProp(field.name);
        if (field.map) {
          gen("if(d%s){", prop)("if(!util.isObject(d%s))", prop)("throw TypeError(%j)", field.fullName + ": object expected")("m%s={}", prop)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", prop);
          gen('if(ks[i]==="__proto__")')("util.makeProp(m%s,ks[i])", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop + "[ks[i]]"
          )("}")("}");
        } else if (field.repeated) {
          gen("if(d%s){", prop)("if(!Array.isArray(d%s))", prop)("throw TypeError(%j)", field.fullName + ": array expected")("m%s=[]", prop)("for(var i=0;i<d%s.length;++i){", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop + "[i]"
          )("}")("}");
        } else {
          if (!(field.resolvedType instanceof Enum)) gen("if(d%s!=null){", prop);
          genValuePartial_fromObject(
            gen,
            field,
            /* not sorted */
            i,
            prop
          );
          if (!(field.resolvedType instanceof Enum)) gen("}");
        }
      }
      return gen("return m");
    };
    function genValuePartial_toObject(gen, field, fieldIndex, prop) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", prop, fieldIndex, prop, prop, fieldIndex, prop, prop);
        else gen("d%s=types[%i].toObject(m%s,o,q+1)", prop, fieldIndex, prop);
      } else {
        var isUnsigned = false;
        switch (field.type) {
          case "double":
          case "float":
            gen("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", prop, prop, prop, prop);
            break;
          case "uint64":
          case "fixed64":
            isUnsigned = true;
          // eslint-disable-next-line no-fallthrough
          case "int64":
          case "sint64":
          case "sfixed64":
            gen('if(typeof BigInt!=="undefined"&&o.longs===BigInt)')('d%s=typeof m%s==="number"?BigInt(m%s):util.Long.fromBits(m%s.low>>>0,m%s.high>>>0,%j).toBigInt()', prop, prop, prop, prop, prop, isUnsigned)('else if(typeof m%s==="number")', prop)("d%s=o.longs===String?String(m%s):m%s", prop, prop, prop)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", prop, prop, prop, prop, isUnsigned ? "true" : "", prop);
            break;
          case "bytes":
            gen("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", prop, prop, prop, prop, prop);
            break;
          default:
            gen("d%s=m%s", prop, prop);
            break;
        }
      }
      return gen;
    }
    converter.toObject = function toObject(mtype) {
      var fields = mtype.fieldsArray.slice().sort(util.compareFieldsById);
      if (!fields.length)
        return util.codegen()("return {}");
      var gen = util.codegen(["m", "o", "q"], mtype.name + "$toObject")("if(!o)")("o={}")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")')("var d={}");
      var repeatedFields = [], mapFields = [], normalFields = [], i = 0;
      for (; i < fields.length; ++i)
        if (!fields[i].partOf)
          (fields[i].resolve().repeated ? repeatedFields : fields[i].map ? mapFields : normalFields).push(fields[i]);
      if (repeatedFields.length) {
        gen("if(o.arrays||o.defaults){");
        for (i = 0; i < repeatedFields.length; ++i) gen("d%s=[]", util.safeProp(repeatedFields[i].name));
        gen("}");
      }
      if (mapFields.length) {
        gen("if(o.objects||o.defaults){");
        for (i = 0; i < mapFields.length; ++i) gen("d%s={}", util.safeProp(mapFields[i].name));
        gen("}");
      }
      if (normalFields.length) {
        gen("if(o.defaults){");
        for (i = 0; i < normalFields.length; ++i) {
          var field = normalFields[i], prop = util.safeProp(field.name);
          if (field.resolvedType instanceof Enum) gen("d%s=o.enums===String?%j:%j", prop, field.resolvedType.valuesById[field.typeDefault], field.typeDefault);
          else if (field.long) gen("if(util.Long){")("var n=new util.Long(%i,%i,%j)", field.typeDefault.low, field.typeDefault.high, field.typeDefault.unsigned)('d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():typeof BigInt!=="undefined"&&o.longs===BigInt?n.toBigInt():n', prop)("}else")('d%s=o.longs===String?%j:typeof BigInt!=="undefined"&&o.longs===BigInt?BigInt(%j):%i', prop, field.typeDefault.toString(), field.typeDefault.toString(), field.typeDefault.toNumber());
          else if (field.bytes) {
            var arrayDefault = Array.prototype.slice.call(field.typeDefault);
            gen("if(o.bytes===String)d%s=%j", prop, String.fromCharCode.apply(String, field.typeDefault))("else{")("d%s=%j", prop, arrayDefault)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", prop, prop)("}");
          } else gen("d%s=%j", prop, field.typeDefault);
        }
        gen("}");
      }
      var hasKs2 = false;
      for (i = 0; i < fields.length; ++i) {
        var field = fields[i], index = mtype._fieldsArray.indexOf(field), prop = util.safeProp(field.name);
        if (field.map) {
          if (!hasKs2) {
            hasKs2 = true;
            gen("var ks2");
          }
          gen("if(m%s&&(ks2=Object.keys(m%s)).length){", prop, prop)("d%s={}", prop)("for(var j=0;j<ks2.length;++j){");
          gen('if(ks2[j]==="__proto__")')("util.makeProp(d%s,ks2[j])", prop);
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop + "[ks2[j]]"
          )("}");
        } else if (field.repeated) {
          gen("if(m%s&&m%s.length){", prop, prop)("d%s=[]", prop)("for(var j=0;j<m%s.length;++j){", prop);
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop + "[j]"
          )("}");
        } else {
          gen("if(m%s!=null&&Object.hasOwnProperty.call(m,%j)){", prop, field.name);
          genValuePartial_toObject(
            gen,
            field,
            /* sorted */
            index,
            prop
          );
          if (field.partOf) gen("if(o.oneofs)")("d%s=%j", util.safeProp(field.partOf.name), field.name);
        }
        gen("}");
      }
      return gen("return d");
    };
  }, { "15": 15, "34": 34 }], 13: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = decoder;
    var Enum = require2(15), types = require2(33), util = require2(34);
    function missing(field) {
      return "missing required '" + field.name + "'";
    }
    function decoder(mtype) {
      var gen = util.codegen(["r", "l", "e", "n"], mtype.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("if(n===undefined)n=0")("if(n>Reader.recursionLimit)")('throw Error("maximum nesting depth exceeded")')("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (mtype.fieldsArray.filter(function(field2) {
        return field2.map;
      }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){");
      var i = 0;
      for (; i < /* initializes */
      mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(), type = field.resolvedType instanceof Enum ? "int32" : field.type, ref = "m" + util.safeProp(field.name);
        gen("case %i: {", field.id);
        if (field.map) {
          gen("if(%s===util.emptyObject)", ref)("%s={}", ref)("var c2 = r.uint32()+r.pos");
          if (types.defaults[field.keyType] !== undefined) gen("k=%j", types.defaults[field.keyType]);
          else gen("k=null");
          if (types.defaults[type] !== undefined) gen("value=%j", types.defaults[type]);
          else gen("value=null");
          gen("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", field.keyType)("case 2:");
          if (types.basic[type] === undefined) gen("value=types[%i].decode(r,r.uint32(),undefined,n+1)", i);
          else gen("value=r.%s()", type);
          gen("break")("default:")("r.skipType(tag2&7,n)")("break")("}")("}");
          if (types.long[field.keyType] !== undefined) gen('%s[typeof k==="object"?util.longToHash(k):k]=value', ref);
          else {
            if (field.keyType === "string") gen('if(k==="__proto__")')("util.makeProp(%s,k)", ref);
            gen("%s[k]=value", ref);
          }
        } else if (field.repeated) {
          gen("if(!(%s&&%s.length))", ref, ref)("%s=[]", ref);
          if (types.packed[type] !== undefined) gen("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", ref, type)("}else");
          if (types.basic[type] === undefined) gen(field.delimited ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4),n+1))" : "%s.push(types[%i].decode(r,r.uint32(),undefined,n+1))", ref, i);
          else gen("%s.push(r.%s())", ref, type);
        } else if (types.basic[type] === undefined) gen(field.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4),n+1)" : "%s=types[%i].decode(r,r.uint32(),undefined,n+1)", ref, i);
        else gen("%s=r.%s()", ref, type);
        gen("break")("}");
      }
      gen("default:")("r.skipType(t&7,n)")("break")("}")("}");
      for (i = 0; i < mtype._fieldsArray.length; ++i) {
        var rfield = mtype._fieldsArray[i];
        if (rfield.required) gen("if(!Object.hasOwnProperty.call(m,%j))", rfield.name)("throw util.ProtocolError(%j,{instance:m})", missing(rfield));
      }
      return gen("return m");
    }
  }, { "15": 15, "33": 33, "34": 34 }], 14: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = encoder;
    var Enum = require2(15), types = require2(33), util = require2(34);
    function genTypePartial(gen, field, fieldIndex, ref) {
      return field.delimited ? gen("types[%i].encode(%s,w.uint32(%i),q+1).uint32(%i)", fieldIndex, ref, (field.id << 3 | 3) >>> 0, (field.id << 3 | 4) >>> 0) : gen("types[%i].encode(%s,w.uint32(%i).fork(),q+1).ldelim()", fieldIndex, ref, (field.id << 3 | 2) >>> 0);
    }
    function encoder(mtype) {
      var gen = util.codegen(["m", "w", "q"], mtype.name + "$encode")("if(!w)")("w=Writer.create()")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")');
      var i, ref;
      var fields = (
        /* initializes */
        mtype.fieldsArray.slice().sort(util.compareFieldsById)
      );
      for (var i = 0; i < fields.length; ++i) {
        var field = fields[i].resolve(), index = mtype._fieldsArray.indexOf(field), type = field.resolvedType instanceof Enum ? "int32" : field.type, wireType = types.basic[type];
        ref = "m" + util.safeProp(field.name);
        if (field.map) {
          gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", ref)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (field.id << 3 | 2) >>> 0, 8 | types.mapKey[field.keyType], field.keyType);
          if (wireType === undefined) gen("types[%i].encode(%s[ks[i]],w.uint32(18).fork(),q+1).ldelim().ldelim()", index, ref);
          else gen(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | wireType, type, ref);
          gen("}")("}");
        } else if (field.repeated) {
          gen("if(%s!=null&&%s.length){", ref, ref);
          if (field.packed && types.packed[type] !== undefined) {
            gen("w.uint32(%i).fork()", (field.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", ref)("w.%s(%s[i])", type, ref)("w.ldelim()");
          } else {
            gen("for(var i=0;i<%s.length;++i)", ref);
            if (wireType === undefined)
              genTypePartial(gen, field, index, ref + "[i]");
            else gen("w.uint32(%i).%s(%s[i])", (field.id << 3 | wireType) >>> 0, type, ref);
          }
          gen("}");
        } else {
          if (field.optional) gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", ref, field.name);
          if (wireType === undefined)
            genTypePartial(gen, field, index, ref);
          else gen("w.uint32(%i).%s(%s)", (field.id << 3 | wireType) >>> 0, type, ref);
        }
      }
      return gen("return w");
    }
  }, { "15": 15, "33": 33, "34": 34 }], 15: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Enum;
    var ReflectionObject = require2(23);
    ((Enum.prototype = Object.create(ReflectionObject.prototype)).constructor = Enum).className = "Enum";
    var Namespace = require2(22), util = require2(34);
    function Enum(name, values, options, comment, comments, valuesOptions) {
      ReflectionObject.call(this, name, options);
      if (values && typeof values !== "object")
        throw TypeError("values must be an object");
      this.valuesById = {};
      this.values = Object.create(this.valuesById);
      this.comment = comment;
      this.comments = comments || {};
      this.valuesOptions = valuesOptions;
      this._valuesFeatures = {};
      this.reserved = undefined;
      if (values) {
        for (var keys = Object.keys(values), i = 0; i < keys.length; ++i)
          if (keys[i] !== "__proto__" && typeof values[keys[i]] === "number")
            this.valuesById[this.values[keys[i]] = values[keys[i]]] = keys[i];
      }
    }
    Enum.prototype._resolveFeatures = function _resolveFeatures(edition) {
      edition = this._edition || edition;
      ReflectionObject.prototype._resolveFeatures.call(this, edition);
      Object.keys(this.values).forEach((key) => {
        var parentFeaturesCopy = util.merge({}, this._features);
        this._valuesFeatures[key] = util.merge(parentFeaturesCopy, this.valuesOptions && this.valuesOptions[key] && this.valuesOptions[key].features || {});
      });
      return this;
    };
    Enum.fromJSON = function fromJSON(name, json) {
      var enm = new Enum(name, json.values, json.options, json.comment, json.comments);
      enm.reserved = json.reserved;
      if (json.edition)
        enm._edition = json.edition;
      enm._defaultEdition = "proto3";
      return enm;
    };
    Enum.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "edition",
        this._editionToJSON(),
        "options",
        this.options,
        "valuesOptions",
        this.valuesOptions,
        "values",
        this.values,
        "reserved",
        this.reserved && this.reserved.length ? this.reserved : undefined,
        "comment",
        keepComments ? this.comment : undefined,
        "comments",
        keepComments ? this.comments : undefined
      ]);
    };
    Enum.prototype.add = function add(name, id, comment, options) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      if (!util.isInteger(id))
        throw TypeError("id must be an integer");
      if (name === "__proto__")
        return this;
      if (this.values[name] !== undefined)
        throw Error("duplicate name '" + name + "' in " + this);
      if (this.isReservedId(id))
        throw Error("id " + id + " is reserved in " + this);
      if (this.isReservedName(name))
        throw Error("name '" + name + "' is reserved in " + this);
      if (this.valuesById[id] !== undefined) {
        if (!(this.options && this.options.allow_alias))
          throw Error("duplicate id " + id + " in " + this);
        this.values[name] = id;
      } else
        this.valuesById[this.values[name] = id] = name;
      if (options) {
        if (this.valuesOptions === undefined)
          this.valuesOptions = {};
        this.valuesOptions[name] = options || null;
      }
      this.comments[name] = comment || null;
      return this;
    };
    Enum.prototype.remove = function remove(name) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      var val = this.values[name];
      if (val == null)
        throw Error("name '" + name + "' does not exist in " + this);
      delete this.valuesById[val];
      delete this.values[name];
      delete this.comments[name];
      if (this.valuesOptions)
        delete this.valuesOptions[name];
      return this;
    };
    Enum.prototype.isReservedId = function isReservedId(id) {
      return Namespace.isReservedId(this.reserved, id);
    };
    Enum.prototype.isReservedName = function isReservedName(name) {
      return Namespace.isReservedName(this.reserved, name);
    };
  }, { "22": 22, "23": 23, "34": 34 }], 16: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Field;
    var ReflectionObject = require2(23);
    ((Field.prototype = Object.create(ReflectionObject.prototype)).constructor = Field).className = "Field";
    var Enum = require2(15), types = require2(33), util = require2(34);
    var Type;
    var ruleRe = /^required|optional|repeated$/;
    Field.fromJSON = function fromJSON(name, json) {
      var field = new Field(name, json.id, json.type, json.rule, json.extend, json.options, json.comment);
      if (json.edition)
        field._edition = json.edition;
      field._defaultEdition = "proto3";
      return field;
    };
    function Field(name, id, type, rule, extend, options, comment) {
      if (util.isObject(rule)) {
        comment = extend;
        options = rule;
        rule = extend = undefined;
      } else if (util.isObject(extend)) {
        comment = options;
        options = extend;
        extend = undefined;
      }
      ReflectionObject.call(this, name, options);
      if (!util.isInteger(id) || id < 0)
        throw TypeError("id must be a non-negative integer");
      if (!util.isString(type))
        throw TypeError("type must be a string");
      if (rule !== undefined && !ruleRe.test(rule = rule.toString().toLowerCase()))
        throw TypeError("rule must be a string rule");
      if (extend !== undefined && !util.isString(extend))
        throw TypeError("extend must be a string");
      if (rule === "proto3_optional") {
        rule = "optional";
      }
      this.rule = rule && rule !== "optional" ? rule : undefined;
      this.type = type;
      this.id = id;
      this.extend = extend || undefined;
      this.repeated = rule === "repeated";
      this.map = false;
      this.message = null;
      this.partOf = null;
      this.typeDefault = null;
      this.defaultValue = null;
      this.long = util.Long ? types.long[type] !== undefined : (
        /* istanbul ignore next */
        false
      );
      this.bytes = type === "bytes";
      this.resolvedType = null;
      this.extensionField = null;
      this.declaringField = null;
      this.comment = comment;
    }
    Object.defineProperty(Field.prototype, "required", {
      get: function() {
        return this._features.field_presence === "LEGACY_REQUIRED";
      }
    });
    Object.defineProperty(Field.prototype, "optional", {
      get: function() {
        return !this.required;
      }
    });
    Object.defineProperty(Field.prototype, "delimited", {
      get: function() {
        return this.resolvedType instanceof Type && this._features.message_encoding === "DELIMITED";
      }
    });
    Object.defineProperty(Field.prototype, "packed", {
      get: function() {
        return this._features.repeated_field_encoding === "PACKED";
      }
    });
    Object.defineProperty(Field.prototype, "hasPresence", {
      get: function() {
        if (this.repeated || this.map) {
          return false;
        }
        return this.partOf || // oneofs
        this.declaringField || this.extensionField || // extensions
        this._features.field_presence !== "IMPLICIT";
      }
    });
    Field.prototype.setOption = function setOption(name, value, ifNotSet) {
      return ReflectionObject.prototype.setOption.call(this, name, value, ifNotSet);
    };
    Field.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "edition",
        this._editionToJSON(),
        "rule",
        this.rule !== "optional" && this.rule || undefined,
        "type",
        this.type,
        "id",
        this.id,
        "extend",
        this.extend,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : undefined
      ]);
    };
    Field.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if ((this.typeDefault = types.defaults[this.type]) === undefined) {
        this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type);
        if (this.resolvedType instanceof Type)
          this.typeDefault = null;
        else
          this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]];
      } else if (this.options && this.options.proto3_optional) {
        this.typeDefault = null;
      }
      if (this.options && this.options["default"] != null) {
        this.typeDefault = this.options["default"];
        if (this.resolvedType instanceof Enum && typeof this.typeDefault === "string")
          this.typeDefault = this.resolvedType.values[this.typeDefault];
      }
      if (this.options) {
        if (this.options.packed !== undefined && this.resolvedType && !(this.resolvedType instanceof Enum))
          delete this.options.packed;
        if (!Object.keys(this.options).length)
          this.options = undefined;
      }
      if (this.long) {
        this.typeDefault = util.Long.fromNumber(this.typeDefault, this.type === "uint64" || this.type === "fixed64");
        if (Object.freeze)
          Object.freeze(this.typeDefault);
      } else if (this.bytes && typeof this.typeDefault === "string") {
        var buf;
        if (util.base64.test(this.typeDefault))
          util.base64.decode(this.typeDefault, buf = util.newBuffer(util.base64.length(this.typeDefault)), 0);
        else
          util.utf8.write(this.typeDefault, buf = util.newBuffer(util.utf8.length(this.typeDefault)), 0);
        this.typeDefault = buf;
      }
      if (this.map)
        this.defaultValue = util.emptyObject;
      else if (this.repeated)
        this.defaultValue = util.emptyArray;
      else
        this.defaultValue = this.typeDefault;
      if (this.parent instanceof Type)
        this.parent.ctor.prototype[this.name] = this.defaultValue;
      return ReflectionObject.prototype.resolve.call(this);
    };
    Field.prototype._inferLegacyProtoFeatures = function _inferLegacyProtoFeatures(edition) {
      if (edition !== "proto2" && edition !== "proto3") {
        return {};
      }
      var features = {};
      if (this.rule === "required") {
        features.field_presence = "LEGACY_REQUIRED";
      }
      if (this.parent && types.defaults[this.type] === undefined) {
        var type = this.parent.get(this.type.split(".").pop());
        if (type && type instanceof Type && type.group) {
          features.message_encoding = "DELIMITED";
        }
      }
      if (this.getOption("packed") === true) {
        features.repeated_field_encoding = "PACKED";
      } else if (this.getOption("packed") === false) {
        features.repeated_field_encoding = "EXPANDED";
      }
      return features;
    };
    Field.prototype._resolveFeatures = function _resolveFeatures(edition) {
      return ReflectionObject.prototype._resolveFeatures.call(this, this._edition || edition);
    };
    Field.d = function decorateField(fieldId, fieldType, fieldRule, defaultValue) {
      if (typeof fieldType === "function")
        fieldType = util.decorateType(fieldType).name;
      else if (fieldType && typeof fieldType === "object")
        fieldType = util.decorateEnum(fieldType).name;
      return function fieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor).add(new Field(fieldName, fieldId, fieldType, fieldRule, { "default": defaultValue }));
      };
    };
    Field._configure = function configure(Type_) {
      Type = Type_;
    };
  }, { "15": 15, "23": 23, "33": 33, "34": 34 }], 17: [function(require2, module2, exports2) {
    "use strict";
    var protobuf = module2.exports = require2(18);
    protobuf.build = "light";
    function load(filename, root, callback) {
      if (typeof root === "function") {
        callback = root;
        root = new protobuf.Root();
      } else if (!root)
        root = new protobuf.Root();
      return root.load(filename, callback);
    }
    protobuf.load = load;
    function loadSync(filename, root) {
      if (!root)
        root = new protobuf.Root();
      return root.loadSync(filename);
    }
    protobuf.loadSync = loadSync;
    protobuf.encoder = require2(14);
    protobuf.decoder = require2(13);
    protobuf.verifier = require2(39);
    protobuf.converter = require2(12);
    protobuf.ReflectionObject = require2(23);
    protobuf.Namespace = require2(22);
    protobuf.Root = require2(27);
    protobuf.Enum = require2(15);
    protobuf.Type = require2(32);
    protobuf.Field = require2(16);
    protobuf.OneOf = require2(24);
    protobuf.MapField = require2(19);
    protobuf.Service = require2(31);
    protobuf.Method = require2(21);
    protobuf.Message = require2(20);
    protobuf.wrappers = require2(40);
    protobuf.types = require2(33);
    protobuf.util = require2(34);
    protobuf.ReflectionObject._configure(protobuf.Root);
    protobuf.Namespace._configure(protobuf.Type, protobuf.Service, protobuf.Enum);
    protobuf.Root._configure(protobuf.Type);
    protobuf.Field._configure(protobuf.Type);
  }, { "12": 12, "13": 13, "14": 14, "15": 15, "16": 16, "18": 18, "19": 19, "20": 20, "21": 21, "22": 22, "23": 23, "24": 24, "27": 27, "31": 31, "32": 32, "33": 33, "34": 34, "39": 39, "40": 40 }], 18: [function(require2, module2, exports2) {
    "use strict";
    var protobuf = exports2;
    protobuf.build = "minimal";
    protobuf.Writer = require2(41);
    protobuf.BufferWriter = require2(42);
    protobuf.Reader = require2(25);
    protobuf.BufferReader = require2(26);
    protobuf.util = require2(37);
    protobuf.rpc = require2(29);
    protobuf.roots = require2(28);
    protobuf.configure = configure;
    function configure() {
      protobuf.util._configure();
      protobuf.Writer._configure(protobuf.BufferWriter);
      protobuf.Reader._configure(protobuf.BufferReader);
    }
    configure();
  }, { "25": 25, "26": 26, "28": 28, "29": 29, "37": 37, "41": 41, "42": 42 }], 19: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = MapField;
    var Field = require2(16);
    ((MapField.prototype = Object.create(Field.prototype)).constructor = MapField).className = "MapField";
    var types = require2(33), util = require2(34);
    function MapField(name, id, keyType, type, options, comment) {
      Field.call(this, name, id, type, undefined, undefined, options, comment);
      if (!util.isString(keyType))
        throw TypeError("keyType must be a string");
      this.keyType = keyType;
      this.resolvedKeyType = null;
      this.map = true;
    }
    MapField.fromJSON = function fromJSON(name, json) {
      return new MapField(name, json.id, json.keyType, json.type, json.options, json.comment);
    };
    MapField.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "keyType",
        this.keyType,
        "type",
        this.type,
        "id",
        this.id,
        "extend",
        this.extend,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : undefined
      ]);
    };
    MapField.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if (types.mapKey[this.keyType] === undefined)
        throw Error("invalid key type: " + this.keyType);
      return Field.prototype.resolve.call(this);
    };
    MapField.d = function decorateMapField(fieldId, fieldKeyType, fieldValueType) {
      if (typeof fieldValueType === "function")
        fieldValueType = util.decorateType(fieldValueType).name;
      else if (fieldValueType && typeof fieldValueType === "object")
        fieldValueType = util.decorateEnum(fieldValueType).name;
      return function mapFieldDecorator(prototype, fieldName) {
        util.decorateType(prototype.constructor).add(new MapField(fieldName, fieldId, fieldKeyType, fieldValueType));
      };
    };
  }, { "16": 16, "33": 33, "34": 34 }], 20: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Message;
    var util = require2(37);
    function Message(properties) {
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (key === "__proto__")
            continue;
          this[key] = properties[key];
        }
    }
    Message.create = function create(properties) {
      return this.$type.create(properties);
    };
    Message.encode = function encode(message, writer) {
      return this.$type.encode(message, writer);
    };
    Message.encodeDelimited = function encodeDelimited(message, writer) {
      return this.$type.encodeDelimited(message, writer);
    };
    Message.decode = function decode(reader) {
      return this.$type.decode(reader);
    };
    Message.decodeDelimited = function decodeDelimited(reader) {
      return this.$type.decodeDelimited(reader);
    };
    Message.verify = function verify(message) {
      return this.$type.verify(message);
    };
    Message.fromObject = function fromObject(object) {
      return this.$type.fromObject(object);
    };
    Message.toObject = function toObject(message, options) {
      return this.$type.toObject(message, options);
    };
    Message.prototype.toJSON = function toJSON() {
      return this.$type.toObject(this, util.toJSONOptions);
    };
  }, { "37": 37 }], 21: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Method;
    var ReflectionObject = require2(23);
    ((Method.prototype = Object.create(ReflectionObject.prototype)).constructor = Method).className = "Method";
    var util = require2(34);
    function Method(name, type, requestType, responseType, requestStream, responseStream, options, comment, parsedOptions) {
      if (util.isObject(requestStream)) {
        options = requestStream;
        requestStream = responseStream = undefined;
      } else if (util.isObject(responseStream)) {
        options = responseStream;
        responseStream = undefined;
      }
      if (!(type === undefined || util.isString(type)))
        throw TypeError("type must be a string");
      if (!util.isString(requestType))
        throw TypeError("requestType must be a string");
      if (!util.isString(responseType))
        throw TypeError("responseType must be a string");
      ReflectionObject.call(this, name, options);
      this.type = type || "rpc";
      this.requestType = requestType;
      this.requestStream = requestStream ? true : undefined;
      this.responseType = responseType;
      this.responseStream = responseStream ? true : undefined;
      this.resolvedRequestType = null;
      this.resolvedResponseType = null;
      this.comment = comment;
      this.parsedOptions = parsedOptions;
    }
    Method.fromJSON = function fromJSON(name, json) {
      return new Method(name, json.type, json.requestType, json.responseType, json.requestStream, json.responseStream, json.options, json.comment, json.parsedOptions);
    };
    Method.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "type",
        this.type !== "rpc" && /* istanbul ignore next */
        this.type || undefined,
        "requestType",
        this.requestType,
        "requestStream",
        this.requestStream,
        "responseType",
        this.responseType,
        "responseStream",
        this.responseStream,
        "options",
        this.options,
        "comment",
        keepComments ? this.comment : undefined,
        "parsedOptions",
        this.parsedOptions
      ]);
    };
    Method.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      this.resolvedRequestType = this.parent.lookupType(this.requestType);
      this.resolvedResponseType = this.parent.lookupType(this.responseType);
      return ReflectionObject.prototype.resolve.call(this);
    };
  }, { "23": 23, "34": 34 }], 22: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Namespace;
    var ReflectionObject = require2(23);
    ((Namespace.prototype = Object.create(ReflectionObject.prototype)).constructor = Namespace).className = "Namespace";
    var Field = require2(16), util = require2(34), OneOf = require2(24);
    var Type, Service, Enum;
    Namespace.fromJSON = function fromJSON(name, json, depth) {
      depth = util.checkDepth(depth);
      return new Namespace(name, json.options).addJSON(json.nested, depth);
    };
    function arrayToJSON(array, toJSONOptions) {
      if (!(array && array.length))
        return undefined;
      var obj = {};
      for (var i = 0; i < array.length; ++i)
        obj[array[i].name] = array[i].toJSON(toJSONOptions);
      return obj;
    }
    Namespace.arrayToJSON = arrayToJSON;
    Namespace.isReservedId = function isReservedId(reserved, id) {
      if (reserved) {
        for (var i = 0; i < reserved.length; ++i)
          if (typeof reserved[i] !== "string" && reserved[i][0] <= id && reserved[i][1] > id)
            return true;
      }
      return false;
    };
    Namespace.isReservedName = function isReservedName(reserved, name) {
      if (reserved) {
        for (var i = 0; i < reserved.length; ++i)
          if (reserved[i] === name)
            return true;
      }
      return false;
    };
    function Namespace(name, options) {
      ReflectionObject.call(this, name, options);
      this.nested = undefined;
      this._nestedArray = null;
      this._lookupCache = /* @__PURE__ */ Object.create(null);
      this._needsRecursiveFeatureResolution = true;
      this._needsRecursiveResolve = true;
    }
    function clearCache(namespace) {
      namespace._nestedArray = null;
      namespace._lookupCache = /* @__PURE__ */ Object.create(null);
      var parent = namespace;
      while (parent = parent.parent) {
        parent._lookupCache = /* @__PURE__ */ Object.create(null);
      }
      return namespace;
    }
    Object.defineProperty(Namespace.prototype, "nestedArray", {
      get: function() {
        return this._nestedArray || (this._nestedArray = util.toArray(this.nested));
      }
    });
    Namespace.prototype.toJSON = function toJSON(toJSONOptions) {
      return util.toObject([
        "options",
        this.options,
        "nested",
        arrayToJSON(this.nestedArray, toJSONOptions)
      ]);
    };
    Namespace.prototype.addJSON = function addJSON(nestedJson, depth) {
      depth = util.checkDepth(depth);
      var ns = this;
      if (nestedJson) {
        for (var names = Object.keys(nestedJson), i = 0, nested; i < names.length; ++i) {
          nested = nestedJson[names[i]];
          ns.add(
            // most to least likely
            (nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : nested.id !== undefined ? Field.fromJSON : Namespace.fromJSON)(names[i], nested, depth + 1)
          );
        }
      }
      return this;
    };
    Namespace.prototype.get = function get(name) {
      return this.nested && Object.prototype.hasOwnProperty.call(this.nested, name) ? this.nested[name] : null;
    };
    Namespace.prototype.getEnum = function getEnum(name) {
      if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, name) && this.nested[name] instanceof Enum)
        return this.nested[name].values;
      throw Error("no such enum: " + name);
    };
    Namespace.prototype.add = function add(object) {
      if (!(object instanceof Field && object.extend !== undefined || object instanceof Type || object instanceof OneOf || object instanceof Enum || object instanceof Service || object instanceof Namespace))
        throw TypeError("object must be a valid nested object");
      if (object.name === "__proto__")
        return this;
      if (!this.nested)
        this.nested = {};
      else {
        var prev = this.get(object.name);
        if (prev) {
          if (prev instanceof Namespace && object instanceof Namespace && !(prev instanceof Type || prev instanceof Service)) {
            var nested = prev.nestedArray;
            for (var i = 0; i < nested.length; ++i)
              object.add(nested[i]);
            this.remove(prev);
            if (!this.nested)
              this.nested = {};
            object.setOptions(prev.options, true);
          } else
            throw Error("duplicate name '" + object.name + "' in " + this);
        }
      }
      this.nested[object.name] = object;
      if (!(this instanceof Type || this instanceof Service || this instanceof Enum || this instanceof Field)) {
        if (!object._edition) {
          object._edition = object._defaultEdition;
        }
      }
      this._needsRecursiveFeatureResolution = true;
      this._needsRecursiveResolve = true;
      var parent = this;
      while (parent = parent.parent) {
        parent._needsRecursiveFeatureResolution = true;
        parent._needsRecursiveResolve = true;
      }
      object.onAdd(this);
      return clearCache(this);
    };
    Namespace.prototype.remove = function remove(object) {
      if (!(object instanceof ReflectionObject))
        throw TypeError("object must be a ReflectionObject");
      if (object.parent !== this)
        throw Error(object + " is not a member of " + this);
      delete this.nested[object.name];
      if (!Object.keys(this.nested).length)
        this.nested = undefined;
      object.onRemove(this);
      return clearCache(this);
    };
    Namespace.prototype.define = function define2(path, json) {
      if (util.isString(path))
        path = path.split(".");
      else if (!Array.isArray(path))
        throw TypeError("illegal path");
      if (path && path.length && path[0] === "")
        throw Error("path must be relative");
      if (path.length > util.recursionLimit)
        throw Error("max depth exceeded");
      var ptr = this;
      while (path.length > 0) {
        var part = path.shift();
        if (ptr.nested && ptr.nested[part]) {
          ptr = ptr.nested[part];
          if (!(ptr instanceof Namespace))
            throw Error("path conflicts with non-namespace objects");
        } else
          ptr.add(ptr = new Namespace(part));
      }
      if (json)
        ptr.addJSON(json);
      return ptr;
    };
    Namespace.prototype.resolveAll = function resolveAll() {
      if (!this._needsRecursiveResolve) return this;
      this._resolveFeaturesRecursive(this._edition);
      var nested = this.nestedArray, i = 0;
      this.resolve();
      while (i < nested.length)
        if (nested[i] instanceof Namespace)
          nested[i++].resolveAll();
        else
          nested[i++].resolve();
      this._needsRecursiveResolve = false;
      return this;
    };
    Namespace.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
      if (!this._needsRecursiveFeatureResolution) return this;
      this._needsRecursiveFeatureResolution = false;
      edition = this._edition || edition;
      ReflectionObject.prototype._resolveFeaturesRecursive.call(this, edition);
      this.nestedArray.forEach((nested) => {
        nested._resolveFeaturesRecursive(edition);
      });
      return this;
    };
    Namespace.prototype.lookup = function lookup(path, filterTypes, parentAlreadyChecked) {
      if (typeof filterTypes === "boolean") {
        parentAlreadyChecked = filterTypes;
        filterTypes = undefined;
      } else if (filterTypes && !Array.isArray(filterTypes))
        filterTypes = [filterTypes];
      if (util.isString(path) && path.length) {
        if (path === ".")
          return this.root;
        path = path.split(".");
      } else if (!path.length)
        return this;
      var flatPath = path.join(".");
      if (path[0] === "")
        return this.root.lookup(path.slice(1), filterTypes);
      var found = this.root._fullyQualifiedObjects && this.root._fullyQualifiedObjects["." + flatPath];
      if (found && (!filterTypes || filterTypes.indexOf(found.constructor) > -1)) {
        return found;
      }
      found = this._lookupImpl(path, flatPath);
      if (found && (!filterTypes || filterTypes.indexOf(found.constructor) > -1)) {
        return found;
      }
      if (parentAlreadyChecked)
        return null;
      var current = this;
      while (current.parent) {
        found = current.parent._lookupImpl(path, flatPath);
        if (found && (!filterTypes || filterTypes.indexOf(found.constructor) > -1)) {
          return found;
        }
        current = current.parent;
      }
      return null;
    };
    Namespace.prototype._lookupImpl = function lookup(path, flatPath) {
      if (Object.prototype.hasOwnProperty.call(this._lookupCache, flatPath)) {
        return this._lookupCache[flatPath];
      }
      var found = this.get(path[0]);
      var exact = null;
      if (found) {
        if (path.length === 1) {
          exact = found;
        } else if (found instanceof Namespace) {
          path = path.slice(1);
          exact = found._lookupImpl(path, path.join("."));
        }
      } else {
        for (var i = 0; i < this.nestedArray.length; ++i)
          if (this._nestedArray[i] instanceof Namespace && (found = this._nestedArray[i]._lookupImpl(path, flatPath))) {
            exact = found;
            break;
          }
      }
      this._lookupCache[flatPath] = exact;
      return exact;
    };
    Namespace.prototype.lookupType = function lookupType(path) {
      var found = this.lookup(path, [Type]);
      if (!found)
        throw Error("no such type: " + path);
      return found;
    };
    Namespace.prototype.lookupEnum = function lookupEnum(path) {
      var found = this.lookup(path, [Enum]);
      if (!found)
        throw Error("no such Enum '" + path + "' in " + this);
      return found;
    };
    Namespace.prototype.lookupTypeOrEnum = function lookupTypeOrEnum(path) {
      var found = this.lookup(path, [Type, Enum]);
      if (!found)
        throw Error("no such Type or Enum '" + path + "' in " + this);
      return found;
    };
    Namespace.prototype.lookupService = function lookupService(path) {
      var found = this.lookup(path, [Service]);
      if (!found)
        throw Error("no such Service '" + path + "' in " + this);
      return found;
    };
    Namespace._configure = function(Type_, Service_, Enum_) {
      Type = Type_;
      Service = Service_;
      Enum = Enum_;
    };
  }, { "16": 16, "23": 23, "24": 24, "34": 34 }], 23: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = ReflectionObject;
    ReflectionObject.className = "ReflectionObject";
    const OneOf = require2(24);
    var util = require2(34);
    var Root;
    var editions2023Defaults = { enum_type: "OPEN", field_presence: "EXPLICIT", json_format: "ALLOW", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "PACKED", utf8_validation: "VERIFY" };
    var proto2Defaults = { enum_type: "CLOSED", field_presence: "EXPLICIT", json_format: "LEGACY_BEST_EFFORT", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "EXPANDED", utf8_validation: "NONE" };
    var proto3Defaults = { enum_type: "OPEN", field_presence: "IMPLICIT", json_format: "ALLOW", message_encoding: "LENGTH_PREFIXED", repeated_field_encoding: "PACKED", utf8_validation: "VERIFY" };
    function ReflectionObject(name, options) {
      if (!util.isString(name))
        throw TypeError("name must be a string");
      if (options && !util.isObject(options))
        throw TypeError("options must be an object");
      this.options = options;
      this.parsedOptions = null;
      this.name = name;
      this._edition = null;
      this._defaultEdition = "proto2";
      this._features = {};
      this._featuresResolved = false;
      this.parent = null;
      this.resolved = false;
      this.comment = null;
      this.filename = null;
    }
    Object.defineProperties(ReflectionObject.prototype, {
      /**
       * Reference to the root namespace.
       * @name ReflectionObject#root
       * @type {Root}
       * @readonly
       */
      root: {
        get: function() {
          var ptr = this;
          while (ptr.parent !== null)
            ptr = ptr.parent;
          return ptr;
        }
      },
      /**
       * Full name including leading dot.
       * @name ReflectionObject#fullName
       * @type {string}
       * @readonly
       */
      fullName: {
        get: function() {
          var path = [this.name], ptr = this.parent;
          while (ptr) {
            path.unshift(ptr.name);
            ptr = ptr.parent;
          }
          return path.join(".");
        }
      }
    });
    ReflectionObject.prototype.toJSON = /* istanbul ignore next */
    function toJSON() {
      throw Error();
    };
    ReflectionObject.prototype.onAdd = function onAdd(parent) {
      if (this.parent && this.parent !== parent)
        this.parent.remove(this);
      this.parent = parent;
      this.resolved = false;
      var root = parent.root;
      if (root instanceof Root)
        root._handleAdd(this);
    };
    ReflectionObject.prototype.onRemove = function onRemove(parent) {
      var root = parent.root;
      if (root instanceof Root)
        root._handleRemove(this);
      this.parent = null;
      this.resolved = false;
    };
    ReflectionObject.prototype.resolve = function resolve() {
      if (this.resolved)
        return this;
      if (this.root instanceof Root)
        this.resolved = true;
      return this;
    };
    ReflectionObject.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
      return this._resolveFeatures(this._edition || edition);
    };
    ReflectionObject.prototype._resolveFeatures = function _resolveFeatures(edition) {
      if (this._featuresResolved) {
        return;
      }
      var defaults = {};
      if (!edition) {
        throw new Error("Unknown edition for " + this.fullName);
      }
      var protoFeatures = util.merge(
        {},
        this.options && this.options.features,
        this._inferLegacyProtoFeatures(edition)
      );
      if (this._edition) {
        if (edition === "proto2") {
          defaults = Object.assign({}, proto2Defaults);
        } else if (edition === "proto3") {
          defaults = Object.assign({}, proto3Defaults);
        } else if (edition === "2023") {
          defaults = Object.assign({}, editions2023Defaults);
        } else {
          throw new Error("Unknown edition: " + edition);
        }
        this._features = util.merge(defaults, protoFeatures);
        this._featuresResolved = true;
        return;
      }
      if (this.partOf instanceof OneOf) {
        var lexicalParentFeaturesCopy = util.merge({}, this.partOf._features);
        this._features = util.merge(lexicalParentFeaturesCopy, protoFeatures);
      } else if (this.declaringField) {
      } else if (this.parent) {
        var parentFeaturesCopy = util.merge({}, this.parent._features);
        this._features = util.merge(parentFeaturesCopy, protoFeatures);
      } else {
        throw new Error("Unable to find a parent for " + this.fullName);
      }
      if (this.extensionField) {
        this.extensionField._features = this._features;
      }
      this._featuresResolved = true;
    };
    ReflectionObject.prototype._inferLegacyProtoFeatures = function _inferLegacyProtoFeatures() {
      return {};
    };
    ReflectionObject.prototype.getOption = function getOption(name) {
      if (this.options)
        return this.options[name];
      return undefined;
    };
    ReflectionObject.prototype.setOption = function setOption(name, value, ifNotSet) {
      if (name === "__proto__")
        return this;
      if (!this.options)
        this.options = {};
      if (/^features\./.test(name)) {
        util.setProperty(this.options, name, value, ifNotSet);
      } else if (!ifNotSet || this.options[name] === undefined) {
        if (this.getOption(name) !== value) this.resolved = false;
        this.options[name] = value;
      }
      return this;
    };
    ReflectionObject.prototype.setParsedOption = function setParsedOption(name, value, propName) {
      if (name === "__proto__")
        return this;
      if (!this.parsedOptions) {
        this.parsedOptions = [];
      }
      var parsedOptions = this.parsedOptions;
      if (propName) {
        var opt = parsedOptions.find(function(opt2) {
          return Object.prototype.hasOwnProperty.call(opt2, name);
        });
        if (opt) {
          var newValue = opt[name];
          util.setProperty(newValue, propName, value);
        } else {
          opt = {};
          opt[name] = util.setProperty({}, propName, value);
          parsedOptions.push(opt);
        }
      } else {
        var newOpt = {};
        newOpt[name] = value;
        parsedOptions.push(newOpt);
      }
      return this;
    };
    ReflectionObject.prototype.setOptions = function setOptions(options, ifNotSet) {
      if (options)
        for (var keys = Object.keys(options), i = 0; i < keys.length; ++i)
          this.setOption(keys[i], options[keys[i]], ifNotSet);
      return this;
    };
    ReflectionObject.prototype.toString = function toString() {
      var className = this.constructor.className, fullName = this.fullName;
      if (fullName.length)
        return className + " " + fullName;
      return className;
    };
    ReflectionObject.prototype._editionToJSON = function _editionToJSON() {
      if (!this._edition || this._edition === "proto3") {
        return undefined;
      }
      return this._edition;
    };
    ReflectionObject._configure = function(Root_) {
      Root = Root_;
    };
  }, { "24": 24, "34": 34 }], 24: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = OneOf;
    var ReflectionObject = require2(23);
    ((OneOf.prototype = Object.create(ReflectionObject.prototype)).constructor = OneOf).className = "OneOf";
    var Field = require2(16), util = require2(34);
    function OneOf(name, fieldNames, options, comment) {
      if (!Array.isArray(fieldNames)) {
        options = fieldNames;
        fieldNames = undefined;
      }
      ReflectionObject.call(this, name, options);
      if (!(fieldNames === undefined || Array.isArray(fieldNames)))
        throw TypeError("fieldNames must be an Array");
      this.oneof = fieldNames || [];
      this.fieldsArray = [];
      this.comment = comment;
    }
    OneOf.fromJSON = function fromJSON(name, json) {
      return new OneOf(name, json.oneof, json.options, json.comment);
    };
    OneOf.prototype.toJSON = function toJSON(toJSONOptions) {
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "options",
        this.options,
        "oneof",
        this.oneof,
        "comment",
        keepComments ? this.comment : undefined
      ]);
    };
    function addFieldsToParent(oneof) {
      if (oneof.parent) {
        for (var i = 0; i < oneof.fieldsArray.length; ++i)
          if (!oneof.fieldsArray[i].parent)
            oneof.parent.add(oneof.fieldsArray[i]);
      }
    }
    OneOf.prototype.add = function add(field) {
      if (!(field instanceof Field))
        throw TypeError("field must be a Field");
      if (field.parent && field.parent !== this.parent)
        field.parent.remove(field);
      this.oneof.push(field.name);
      this.fieldsArray.push(field);
      field.partOf = this;
      addFieldsToParent(this);
      return this;
    };
    OneOf.prototype.remove = function remove(field) {
      if (!(field instanceof Field))
        throw TypeError("field must be a Field");
      var index = this.fieldsArray.indexOf(field);
      if (index < 0)
        throw Error(field + " is not a member of " + this);
      this.fieldsArray.splice(index, 1);
      index = this.oneof.indexOf(field.name);
      if (index > -1)
        this.oneof.splice(index, 1);
      field.partOf = null;
      return this;
    };
    OneOf.prototype.onAdd = function onAdd(parent) {
      ReflectionObject.prototype.onAdd.call(this, parent);
      var self2 = this;
      for (var i = 0; i < this.oneof.length; ++i) {
        var field = parent.get(this.oneof[i]);
        if (field && !field.partOf) {
          field.partOf = self2;
          self2.fieldsArray.push(field);
        }
      }
      addFieldsToParent(this);
    };
    OneOf.prototype.onRemove = function onRemove(parent) {
      for (var i = 0, field; i < this.fieldsArray.length; ++i)
        if ((field = this.fieldsArray[i]).parent)
          field.parent.remove(field);
      ReflectionObject.prototype.onRemove.call(this, parent);
    };
    Object.defineProperty(OneOf.prototype, "isProto3Optional", {
      get: function() {
        if (this.fieldsArray == null || this.fieldsArray.length !== 1) {
          return false;
        }
        var field = this.fieldsArray[0];
        return field.options != null && field.options["proto3_optional"] === true;
      }
    });
    OneOf.d = function decorateOneOf() {
      var fieldNames = new Array(arguments.length), index = 0;
      while (index < arguments.length)
        fieldNames[index] = arguments[index++];
      return function oneOfDecorator(prototype, oneofName) {
        util.decorateType(prototype.constructor).add(new OneOf(oneofName, fieldNames));
        Object.defineProperty(prototype, oneofName, {
          get: util.oneOfGetter(fieldNames),
          set: util.oneOfSetter(fieldNames)
        });
      };
    };
  }, { "16": 16, "23": 23, "34": 34 }], 25: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Reader;
    var util = require2(37);
    var BufferReader;
    var LongBits = util.LongBits, utf8 = util.utf8;
    function indexOutOfRange(reader, writeLength) {
      return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
    }
    function Reader(buffer) {
      this.buf = buffer;
      this.pos = 0;
      this.len = buffer.length;
    }
    var create_array = typeof Uint8Array !== "undefined" ? function create_typed_array(buffer) {
      if (buffer instanceof Uint8Array || Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    } : function create_array2(buffer) {
      if (Array.isArray(buffer))
        return new Reader(buffer);
      throw Error("illegal buffer");
    };
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup(buffer) {
        return (Reader.create = function create_buffer(buffer2) {
          return util.Buffer.isBuffer(buffer2) ? new BufferReader(buffer2) : create_array(buffer2);
        })(buffer);
      } : create_array;
    };
    Reader.create = create();
    Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */
    util.Array.prototype.slice;
    Reader.prototype.uint32 = /* @__PURE__ */ (function read_uint32_setup() {
      var value = 4294967295;
      return function read_uint32() {
        value = (this.buf[this.pos] & 127) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 7) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 15) << 28) >>> 0;
        if (this.buf[this.pos++] < 128) return value;
        if ((this.pos += 5) > this.len) {
          this.pos = this.len;
          throw indexOutOfRange(this, 10);
        }
        return value;
      };
    })();
    Reader.prototype.int32 = function read_int32() {
      return this.uint32() | 0;
    };
    Reader.prototype.sint32 = function read_sint32() {
      var value = this.uint32();
      return value >>> 1 ^ -(value & 1) | 0;
    };
    function readLongVarint() {
      var bits = new LongBits(0, 0);
      var i = 0;
      if (this.len - this.pos > 4) {
        for (; i < 4; ++i) {
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >> 4) >>> 0;
        if (this.buf[this.pos++] < 128)
          return bits;
        i = 0;
      } else {
        for (; i < 3; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
      }
      if (this.len - this.pos > 4) {
        for (; i < 5; ++i) {
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      } else {
        for (; i < 5; ++i) {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
          bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
          if (this.buf[this.pos++] < 128)
            return bits;
        }
      }
      throw Error("invalid varint encoding");
    }
    Reader.prototype.bool = function read_bool() {
      return this.uint32() !== 0;
    };
    function readFixed32_end(buf, end) {
      return (buf[end - 4] | buf[end - 3] << 8 | buf[end - 2] << 16 | buf[end - 1] << 24) >>> 0;
    }
    Reader.prototype.fixed32 = function read_fixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4);
    };
    Reader.prototype.sfixed32 = function read_sfixed32() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      return readFixed32_end(this.buf, this.pos += 4) | 0;
    };
    function readFixed64() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);
      return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
    }
    Reader.prototype.float = function read_float() {
      if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readFloatLE(this.buf, this.pos);
      this.pos += 4;
      return value;
    };
    Reader.prototype.double = function read_double() {
      if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);
      var value = util.float.readDoubleLE(this.buf, this.pos);
      this.pos += 8;
      return value;
    };
    Reader.prototype.bytes = function read_bytes() {
      var length = this.uint32(), start = this.pos, end = this.pos + length;
      if (end > this.len)
        throw indexOutOfRange(this, length);
      this.pos += length;
      if (Array.isArray(this.buf))
        return this.buf.slice(start, end);
      if (start === end) {
        var nativeBuffer = util.Buffer;
        return nativeBuffer ? nativeBuffer.alloc(0) : new this.buf.constructor(0);
      }
      return this._slice.call(this.buf, start, end);
    };
    Reader.prototype.string = function read_string() {
      var bytes = this.bytes();
      return utf8.read(bytes, 0, bytes.length);
    };
    Reader.prototype.skip = function skip(length) {
      if (typeof length === "number") {
        if (this.pos + length > this.len)
          throw indexOutOfRange(this, length);
        this.pos += length;
      } else {
        do {
          if (this.pos >= this.len)
            throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
      }
      return this;
    };
    Reader.recursionLimit = util.recursionLimit;
    Reader.prototype.skipType = function(wireType, depth) {
      if (depth === undefined) depth = 0;
      if (depth > Reader.recursionLimit)
        throw Error("maximum nesting depth exceeded");
      switch (wireType) {
        case 0:
          this.skip();
          break;
        case 1:
          this.skip(8);
          break;
        case 2:
          this.skip(this.uint32());
          break;
        case 3:
          while ((wireType = this.uint32() & 7) !== 4) {
            this.skipType(wireType, depth + 1);
          }
          break;
        case 5:
          this.skip(4);
          break;
        /* istanbul ignore next */
        default:
          throw Error("invalid wire type " + wireType + " at offset " + this.pos);
      }
      return this;
    };
    Reader._configure = function(BufferReader_) {
      BufferReader = BufferReader_;
      Reader.create = create();
      BufferReader._configure();
      var fn = util.Long ? "toLong" : (
        /* istanbul ignore next */
        "toNumber"
      );
      util.merge(Reader.prototype, {
        int64: function read_int64() {
          return readLongVarint.call(this)[fn](false);
        },
        uint64: function read_uint64() {
          return readLongVarint.call(this)[fn](true);
        },
        sint64: function read_sint64() {
          return readLongVarint.call(this).zzDecode()[fn](false);
        },
        fixed64: function read_fixed64() {
          return readFixed64.call(this)[fn](true);
        },
        sfixed64: function read_sfixed64() {
          return readFixed64.call(this)[fn](false);
        }
      });
    };
  }, { "37": 37 }], 26: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = BufferReader;
    var Reader = require2(25);
    (BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;
    var util = require2(37);
    function BufferReader(buffer) {
      Reader.call(this, buffer);
    }
    BufferReader._configure = function() {
      if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
    };
    BufferReader.prototype.string = function read_string_buffer() {
      var len = this.uint32();
      return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
    };
    BufferReader._configure();
  }, { "25": 25, "37": 37 }], 27: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Root;
    var Namespace = require2(22);
    ((Root.prototype = Object.create(Namespace.prototype)).constructor = Root).className = "Root";
    var Field = require2(16), Enum = require2(15), OneOf = require2(24), util = require2(34);
    var Type, parse, common;
    function Root(options) {
      Namespace.call(this, "", options);
      this.deferred = [];
      this.files = [];
      this._edition = "proto2";
      this._fullyQualifiedObjects = {};
    }
    Root.fromJSON = function fromJSON(json, root, depth) {
      depth = util.checkDepth(depth);
      if (!root)
        root = new Root();
      if (json.options)
        root.setOptions(json.options);
      return root.addJSON(json.nested, depth).resolveAll();
    };
    Root.prototype.resolvePath = util.path.resolve;
    Root.prototype.fetch = util.fetch;
    function SYNC() {
    }
    Root.prototype.load = function load(filename, options, callback) {
      if (typeof options === "function") {
        callback = options;
        options = undefined;
      }
      var self2 = this;
      if (!callback) {
        return util.asPromise(load, self2, filename, options);
      }
      var sync = callback === SYNC;
      function finish(err, root) {
        if (!callback) {
          return;
        }
        if (sync) {
          throw err;
        }
        if (root) {
          root.resolveAll();
        }
        var cb = callback;
        callback = null;
        cb(err, root);
      }
      function getBundledFileName(filename2) {
        var idx = filename2.lastIndexOf("google/protobuf/");
        if (idx > -1) {
          var altname = filename2.substring(idx);
          if (altname in common) return altname;
        }
        return null;
      }
      function process(filename2, source, depth) {
        if (depth === undefined)
          depth = 0;
        try {
          if (depth > util.recursionLimit)
            throw Error("max depth exceeded");
          if (util.isString(source) && source.charAt(0) === "{")
            source = JSON.parse(source);
          if (!util.isString(source))
            self2.setOptions(source.options).addJSON(source.nested);
          else {
            parse.filename = filename2;
            var parsed = parse(source, self2, options), resolved2, i2 = 0;
            if (parsed.imports) {
              for (; i2 < parsed.imports.length; ++i2)
                if (resolved2 = getBundledFileName(parsed.imports[i2]) || self2.resolvePath(filename2, parsed.imports[i2]))
                  fetch(resolved2, false, depth + 1);
            }
            if (parsed.weakImports) {
              for (i2 = 0; i2 < parsed.weakImports.length; ++i2)
                if (resolved2 = getBundledFileName(parsed.weakImports[i2]) || self2.resolvePath(filename2, parsed.weakImports[i2]))
                  fetch(resolved2, true, depth + 1);
            }
          }
        } catch (err) {
          finish(err);
        }
        if (!sync && !queued) {
          finish(null, self2);
        }
      }
      function fetch(filename2, weak, depth) {
        if (depth === undefined)
          depth = 0;
        filename2 = getBundledFileName(filename2) || filename2;
        if (self2.files.indexOf(filename2) > -1) {
          return;
        }
        self2.files.push(filename2);
        if (filename2 in common) {
          if (sync) {
            process(filename2, common[filename2], depth);
          } else {
            ++queued;
            setTimeout(function() {
              --queued;
              process(filename2, common[filename2], depth);
            });
          }
          return;
        }
        if (sync) {
          var source;
          try {
            source = util.fs.readFileSync(filename2).toString("utf8");
          } catch (err) {
            if (!weak)
              finish(err);
            return;
          }
          process(filename2, source, depth);
        } else {
          ++queued;
          self2.fetch(filename2, function(err, source2) {
            --queued;
            if (!callback) {
              return;
            }
            if (err) {
              if (!weak)
                finish(err);
              else if (!queued)
                finish(null, self2);
              return;
            }
            process(filename2, source2, depth);
          });
        }
      }
      var queued = 0;
      if (util.isString(filename)) {
        filename = [filename];
      }
      for (var i = 0, resolved; i < filename.length; ++i)
        if (resolved = self2.resolvePath("", filename[i]))
          fetch(resolved);
      if (sync) {
        self2.resolveAll();
        return self2;
      }
      if (!queued) {
        finish(null, self2);
      }
      return self2;
    };
    Root.prototype.loadSync = function loadSync(filename, options) {
      if (!util.isNode)
        throw Error("not supported");
      return this.load(filename, options, SYNC);
    };
    Root.prototype.resolveAll = function resolveAll() {
      if (!this._needsRecursiveResolve) return this;
      if (this.deferred.length)
        throw Error("unresolvable extensions: " + this.deferred.map(function(field) {
          return "'extend " + field.extend + "' in " + field.parent.fullName;
        }).join(", "));
      return Namespace.prototype.resolveAll.call(this);
    };
    var exposeRe = /^[A-Z]/;
    function tryHandleExtension(root, field) {
      var extendedType = field.parent.lookup(field.extend);
      if (extendedType) {
        var sisterField = new Field(field.fullName, field.id, field.type, field.rule, undefined, field.options);
        if (extendedType.get(sisterField.name)) {
          return true;
        }
        sisterField.declaringField = field;
        field.extensionField = sisterField;
        extendedType.add(sisterField);
        return true;
      }
      return false;
    }
    Root.prototype._handleAdd = function _handleAdd(object) {
      if (object instanceof Field) {
        if (
          /* an extension field (implies not part of a oneof) */
          object.extend !== undefined && /* not already handled */
          !object.extensionField
        ) {
          if (!tryHandleExtension(this, object))
            this.deferred.push(object);
        }
      } else if (object instanceof Enum) {
        if (exposeRe.test(object.name))
          object.parent[object.name] = object.values;
      } else if (!(object instanceof OneOf)) {
        if (object instanceof Type)
          for (var i = 0; i < this.deferred.length; )
            if (tryHandleExtension(this, this.deferred[i]))
              this.deferred.splice(i, 1);
            else
              ++i;
        for (var j = 0; j < /* initializes */
        object.nestedArray.length; ++j)
          this._handleAdd(object._nestedArray[j]);
        if (exposeRe.test(object.name))
          object.parent[object.name] = object;
      }
      if (object instanceof Type || object instanceof Enum || object instanceof Field) {
        this._fullyQualifiedObjects[object.fullName] = object;
      }
    };
    Root.prototype._handleRemove = function _handleRemove(object) {
      if (object instanceof Field) {
        if (
          /* an extension field */
          object.extend !== undefined
        ) {
          if (
            /* already handled */
            object.extensionField
          ) {
            object.extensionField.parent.remove(object.extensionField);
            object.extensionField = null;
          } else {
            var index = this.deferred.indexOf(object);
            if (index > -1)
              this.deferred.splice(index, 1);
          }
        }
      } else if (object instanceof Enum) {
        if (exposeRe.test(object.name))
          delete object.parent[object.name];
      } else if (object instanceof Namespace) {
        for (var i = 0; i < /* initializes */
        object.nestedArray.length; ++i)
          this._handleRemove(object._nestedArray[i]);
        if (exposeRe.test(object.name))
          delete object.parent[object.name];
      }
      delete this._fullyQualifiedObjects[object.fullName];
    };
    Root._configure = function(Type_, parse_, common_) {
      Type = Type_;
      parse = parse_;
      common = common_;
    };
  }, { "15": 15, "16": 16, "22": 22, "24": 24, "34": 34 }], 28: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = /* @__PURE__ */ Object.create(null);
  }, {}], 29: [function(require2, module2, exports2) {
    "use strict";
    var rpc = exports2;
    rpc.Service = require2(30);
  }, { "30": 30 }], 30: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Service;
    var util = require2(37);
    (Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;
    function Service(rpcImpl, requestDelimited, responseDelimited) {
      if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");
      util.EventEmitter.call(this);
      this.rpcImpl = rpcImpl;
      this.requestDelimited = Boolean(requestDelimited);
      this.responseDelimited = Boolean(responseDelimited);
    }
    Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {
      if (!request)
        throw TypeError("request must be specified");
      var self2 = this;
      if (!callback)
        return util.asPromise(rpcCall, self2, method, requestCtor, responseCtor, request);
      if (!self2.rpcImpl) {
        setTimeout(function() {
          callback(Error("already ended"));
        }, 0);
        return undefined;
      }
      try {
        return self2.rpcImpl(
          method,
          requestCtor[self2.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
          function rpcCallback(err, response) {
            if (err) {
              self2.emit("error", err, method);
              return callback(err);
            }
            if (response === null) {
              self2.end(
                /* endedByRPC */
                true
              );
              return undefined;
            }
            if (!(response instanceof responseCtor)) {
              try {
                response = responseCtor[self2.responseDelimited ? "decodeDelimited" : "decode"](response);
              } catch (err2) {
                self2.emit("error", err2, method);
                return callback(err2);
              }
            }
            self2.emit("data", response, method);
            return callback(null, response);
          }
        );
      } catch (err) {
        self2.emit("error", err, method);
        setTimeout(function() {
          callback(err);
        }, 0);
        return undefined;
      }
    };
    Service.prototype.end = function end(endedByRPC) {
      if (this.rpcImpl) {
        if (!endedByRPC)
          this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
      }
      return this;
    };
  }, { "37": 37 }], 31: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Service;
    var Namespace = require2(22);
    ((Service.prototype = Object.create(Namespace.prototype)).constructor = Service).className = "Service";
    var Method = require2(21), util = require2(34), rpc = require2(29);
    function Service(name, options) {
      Namespace.call(this, name, options);
      this.methods = {};
      this._methodsArray = null;
    }
    Service.fromJSON = function fromJSON(name, json, depth) {
      depth = util.checkDepth(depth);
      var service = new Service(name, json.options);
      if (json.methods)
        for (var names = Object.keys(json.methods), i = 0; i < names.length; ++i)
          service.add(Method.fromJSON(names[i], json.methods[names[i]]));
      if (json.nested)
        service.addJSON(json.nested, depth);
      if (json.edition)
        service._edition = json.edition;
      service.comment = json.comment;
      service._defaultEdition = "proto3";
      return service;
    };
    Service.prototype.toJSON = function toJSON(toJSONOptions) {
      var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "edition",
        this._editionToJSON(),
        "options",
        inherited && inherited.options || undefined,
        "methods",
        Namespace.arrayToJSON(this.methodsArray, toJSONOptions) || /* istanbul ignore next */
        {},
        "nested",
        inherited && inherited.nested || undefined,
        "comment",
        keepComments ? this.comment : undefined
      ]);
    };
    Object.defineProperty(Service.prototype, "methodsArray", {
      get: function() {
        return this._methodsArray || (this._methodsArray = util.toArray(this.methods));
      }
    });
    function clearCache(service) {
      service._methodsArray = null;
      return service;
    }
    Service.prototype.get = function get(name) {
      return Object.prototype.hasOwnProperty.call(this.methods, name) ? this.methods[name] : Namespace.prototype.get.call(this, name);
    };
    Service.prototype.resolveAll = function resolveAll() {
      if (!this._needsRecursiveResolve) return this;
      Namespace.prototype.resolve.call(this);
      var methods = this.methodsArray;
      for (var i = 0; i < methods.length; ++i)
        methods[i].resolve();
      return this;
    };
    Service.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
      if (!this._needsRecursiveFeatureResolution) return this;
      edition = this._edition || edition;
      Namespace.prototype._resolveFeaturesRecursive.call(this, edition);
      this.methodsArray.forEach((method) => {
        method._resolveFeaturesRecursive(edition);
      });
      return this;
    };
    Service.prototype.add = function add(object) {
      if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
      if (object instanceof Method) {
        if (object.name === "__proto__")
          return this;
        this.methods[object.name] = object;
        object.parent = this;
        return clearCache(this);
      }
      return Namespace.prototype.add.call(this, object);
    };
    Service.prototype.remove = function remove(object) {
      if (object instanceof Method) {
        if (this.methods[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.methods[object.name];
        object.parent = null;
        return clearCache(this);
      }
      return Namespace.prototype.remove.call(this, object);
    };
    Service.prototype.create = function create(rpcImpl, requestDelimited, responseDelimited) {
      var rpcService = new rpc.Service(rpcImpl, requestDelimited, responseDelimited);
      for (var i = 0, method; i < /* initializes */
      this.methodsArray.length; ++i) {
        var methodName = util.lcFirst((method = this._methodsArray[i]).resolve().name).replace(/[^$\w_]/g, "");
        rpcService[methodName] = /* @__PURE__ */ (function(method2, requestType, responseType) {
          return function rpcMethod(request, callback) {
            return rpc.Service.prototype.rpcCall.call(this, method2, requestType, responseType, request, callback);
          };
        })(method, method.resolvedRequestType.ctor, method.resolvedResponseType.ctor);
      }
      return rpcService;
    };
  }, { "21": 21, "22": 22, "29": 29, "34": 34 }], 32: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Type;
    var Namespace = require2(22);
    ((Type.prototype = Object.create(Namespace.prototype)).constructor = Type).className = "Type";
    var Enum = require2(15), OneOf = require2(24), Field = require2(16), MapField = require2(19), Service = require2(31), Message = require2(20), Reader = require2(25), Writer = require2(41), util = require2(34), encoder = require2(14), decoder = require2(13), verifier = require2(39), converter = require2(12), wrappers = require2(40);
    function Type(name, options) {
      name = name.replace(/\W/g, "");
      Namespace.call(this, name, options);
      this.fields = {};
      this.oneofs = undefined;
      this.extensions = undefined;
      this.reserved = undefined;
      this.group = undefined;
      this._fieldsById = null;
      this._fieldsArray = null;
      this._oneofsArray = null;
      this._ctor = null;
    }
    Object.defineProperties(Type.prototype, {
      /**
       * Message fields by id.
       * @name Type#fieldsById
       * @type {Object.<number,Field>}
       * @readonly
       */
      fieldsById: {
        get: function() {
          if (this._fieldsById)
            return this._fieldsById;
          this._fieldsById = {};
          for (var names = Object.keys(this.fields), i = 0; i < names.length; ++i) {
            var field = this.fields[names[i]], id = field.id;
            if (this._fieldsById[id])
              throw Error("duplicate id " + id + " in " + this);
            this._fieldsById[id] = field;
          }
          return this._fieldsById;
        }
      },
      /**
       * Fields of this message as an array for iteration.
       * @name Type#fieldsArray
       * @type {Field[]}
       * @readonly
       */
      fieldsArray: {
        get: function() {
          return this._fieldsArray || (this._fieldsArray = util.toArray(this.fields));
        }
      },
      /**
       * Oneofs of this message as an array for iteration.
       * @name Type#oneofsArray
       * @type {OneOf[]}
       * @readonly
       */
      oneofsArray: {
        get: function() {
          return this._oneofsArray || (this._oneofsArray = util.toArray(this.oneofs));
        }
      },
      /**
       * The registered constructor, if any registered, otherwise a generic constructor.
       * Assigning a function replaces the internal constructor. If the function does not extend {@link Message} yet, its prototype will be setup accordingly and static methods will be populated. If it already extends {@link Message}, it will just replace the internal constructor.
       * @name Type#ctor
       * @type {Constructor<{}>}
       */
      ctor: {
        get: function() {
          return this._ctor || (this.ctor = Type.generateConstructor(this)());
        },
        set: function(ctor) {
          var prototype = ctor.prototype;
          if (!(prototype instanceof Message)) {
            (ctor.prototype = new Message()).constructor = ctor;
            util.merge(ctor.prototype, prototype);
          }
          ctor.$type = ctor.prototype.$type = this;
          util.merge(ctor, Message, true);
          this._ctor = ctor;
          var i = 0;
          for (; i < /* initializes */
          this.fieldsArray.length; ++i)
            this._fieldsArray[i].resolve();
          var ctorProperties = {};
          for (i = 0; i < /* initializes */
          this.oneofsArray.length; ++i)
            ctorProperties[this._oneofsArray[i].resolve().name] = {
              get: util.oneOfGetter(this._oneofsArray[i].oneof),
              set: util.oneOfSetter(this._oneofsArray[i].oneof)
            };
          if (i)
            Object.defineProperties(ctor.prototype, ctorProperties);
        }
      }
    });
    Type.generateConstructor = function generateConstructor(mtype) {
      var gen = util.codegen(["p"], mtype.name);
      for (var i = 0, field; i < mtype.fieldsArray.length; ++i)
        if ((field = mtype._fieldsArray[i]).map) gen("this%s={}", util.safeProp(field.name));
        else if (field.repeated) gen("this%s=[]", util.safeProp(field.name));
      return gen('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null&&ks[i]!=="__proto__")')("this[ks[i]]=p[ks[i]]");
    };
    function clearCache(type) {
      type._fieldsById = type._fieldsArray = type._oneofsArray = null;
      delete type.encode;
      delete type.decode;
      delete type.verify;
      return type;
    }
    Type.fromJSON = function fromJSON(name, json, depth) {
      if (depth === undefined)
        depth = 0;
      if (depth > util.nestingLimit)
        throw Error("max depth exceeded");
      var type = new Type(name, json.options);
      type.extensions = json.extensions;
      type.reserved = json.reserved;
      var names = Object.keys(json.fields), i = 0;
      for (; i < names.length; ++i)
        type.add(
          (typeof json.fields[names[i]].keyType !== "undefined" ? MapField.fromJSON : Field.fromJSON)(names[i], json.fields[names[i]])
        );
      if (json.oneofs)
        for (names = Object.keys(json.oneofs), i = 0; i < names.length; ++i)
          type.add(OneOf.fromJSON(names[i], json.oneofs[names[i]]));
      if (json.nested)
        for (names = Object.keys(json.nested), i = 0; i < names.length; ++i) {
          var nested = json.nested[names[i]];
          type.add(
            // most to least likely
            (nested.id !== undefined ? Field.fromJSON : nested.fields !== undefined ? Type.fromJSON : nested.values !== undefined ? Enum.fromJSON : nested.methods !== undefined ? Service.fromJSON : Namespace.fromJSON)(names[i], nested, depth + 1)
          );
        }
      if (json.extensions && json.extensions.length)
        type.extensions = json.extensions;
      if (json.reserved && json.reserved.length)
        type.reserved = json.reserved;
      if (json.group)
        type.group = true;
      if (json.comment)
        type.comment = json.comment;
      if (json.edition)
        type._edition = json.edition;
      type._defaultEdition = "proto3";
      return type;
    };
    Type.prototype.toJSON = function toJSON(toJSONOptions) {
      var inherited = Namespace.prototype.toJSON.call(this, toJSONOptions);
      var keepComments = toJSONOptions ? Boolean(toJSONOptions.keepComments) : false;
      return util.toObject([
        "edition",
        this._editionToJSON(),
        "options",
        inherited && inherited.options || undefined,
        "oneofs",
        Namespace.arrayToJSON(this.oneofsArray, toJSONOptions),
        "fields",
        Namespace.arrayToJSON(this.fieldsArray.filter(function(obj) {
          return !obj.declaringField;
        }), toJSONOptions) || {},
        "extensions",
        this.extensions && this.extensions.length ? this.extensions : undefined,
        "reserved",
        this.reserved && this.reserved.length ? this.reserved : undefined,
        "group",
        this.group || undefined,
        "nested",
        inherited && inherited.nested || undefined,
        "comment",
        keepComments ? this.comment : undefined
      ]);
    };
    Type.prototype.resolveAll = function resolveAll() {
      if (!this._needsRecursiveResolve) return this;
      Namespace.prototype.resolveAll.call(this);
      var oneofs = this.oneofsArray;
      i = 0;
      while (i < oneofs.length)
        oneofs[i++].resolve();
      var fields = this.fieldsArray, i = 0;
      while (i < fields.length)
        fields[i++].resolve();
      return this;
    };
    Type.prototype._resolveFeaturesRecursive = function _resolveFeaturesRecursive(edition) {
      if (!this._needsRecursiveFeatureResolution) return this;
      edition = this._edition || edition;
      Namespace.prototype._resolveFeaturesRecursive.call(this, edition);
      this.oneofsArray.forEach((oneof) => {
        oneof._resolveFeatures(edition);
      });
      this.fieldsArray.forEach((field) => {
        field._resolveFeatures(edition);
      });
      return this;
    };
    Type.prototype.get = function get(name) {
      if (Object.prototype.hasOwnProperty.call(this.fields, name))
        return this.fields[name];
      if (this.oneofs && Object.prototype.hasOwnProperty.call(this.oneofs, name))
        return this.oneofs[name];
      if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, name))
        return this.nested[name];
      return null;
    };
    Type.prototype.add = function add(object) {
      if (this.get(object.name))
        throw Error("duplicate name '" + object.name + "' in " + this);
      if (object instanceof Field && object.extend === undefined) {
        if (this._fieldsById ? (
          /* istanbul ignore next */
          this._fieldsById[object.id]
        ) : this.fieldsById[object.id])
          throw Error("duplicate id " + object.id + " in " + this);
        if (this.isReservedId(object.id))
          throw Error("id " + object.id + " is reserved in " + this);
        if (this.isReservedName(object.name) || object.name.charAt(0) === "$")
          throw Error("name '" + object.name + "' is reserved in " + this);
        if (object.name === "__proto__")
          return this;
        if (object.parent)
          object.parent.remove(object);
        this.fields[object.name] = object;
        object.message = this;
        object.onAdd(this);
        return clearCache(this);
      }
      if (object instanceof OneOf) {
        if (object.name.charAt(0) === "$")
          throw Error("name '" + object.name + "' is reserved in " + this);
        if (object.name === "__proto__")
          return this;
        if (!this.oneofs)
          this.oneofs = {};
        this.oneofs[object.name] = object;
        object.onAdd(this);
        return clearCache(this);
      }
      return Namespace.prototype.add.call(this, object);
    };
    Type.prototype.remove = function remove(object) {
      if (object instanceof Field && object.extend === undefined) {
        if (!this.fields || this.fields[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.fields[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
      }
      if (object instanceof OneOf) {
        if (!this.oneofs || this.oneofs[object.name] !== object)
          throw Error(object + " is not a member of " + this);
        delete this.oneofs[object.name];
        object.parent = null;
        object.onRemove(this);
        return clearCache(this);
      }
      return Namespace.prototype.remove.call(this, object);
    };
    Type.prototype.isReservedId = function isReservedId(id) {
      return Namespace.isReservedId(this.reserved, id);
    };
    Type.prototype.isReservedName = function isReservedName(name) {
      return Namespace.isReservedName(this.reserved, name);
    };
    Type.prototype.create = function create(properties) {
      return new this.ctor(properties);
    };
    Type.prototype.setup = function setup() {
      var fullName = this.fullName, types = [];
      for (var i = 0; i < /* initializes */
      this.fieldsArray.length; ++i)
        types.push(this._fieldsArray[i].resolve().resolvedType);
      this.encode = encoder(this)({
        Writer,
        types,
        util
      });
      this.decode = decoder(this)({
        Reader,
        types,
        util
      });
      this.verify = verifier(this)({
        types,
        util
      });
      this.fromObject = converter.fromObject(this)({
        types,
        util
      });
      this.toObject = converter.toObject(this)({
        types,
        util
      });
      var wrapper = wrappers[fullName];
      if (wrapper) {
        var originalThis = Object.create(this);
        originalThis.fromObject = this.fromObject;
        this.fromObject = wrapper.fromObject.bind(originalThis);
        originalThis.toObject = this.toObject;
        this.toObject = wrapper.toObject.bind(originalThis);
      }
      return this;
    };
    Type.prototype.encode = function encode_setup(message, writer) {
      return this.setup().encode.apply(this, arguments);
    };
    Type.prototype.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
    };
    Type.prototype.decode = function decode_setup(reader, length, end, depth) {
      return this.setup().decode(reader, length, end, depth);
    };
    Type.prototype.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof Reader))
        reader = Reader.create(reader);
      return this.decode(reader, reader.uint32());
    };
    Type.prototype.verify = function verify_setup(message, depth) {
      return this.setup().verify(message, depth);
    };
    Type.prototype.fromObject = function fromObject(object, depth) {
      return this.setup().fromObject(object, depth);
    };
    Type.prototype.toObject = function toObject(message, options) {
      return this.setup().toObject.apply(this, arguments);
    };
    Type.d = function decorateType(typeName) {
      return function typeDecorator(target) {
        util.decorateType(target, typeName);
      };
    };
  }, { "12": 12, "13": 13, "14": 14, "15": 15, "16": 16, "19": 19, "20": 20, "22": 22, "24": 24, "25": 25, "31": 31, "34": 34, "39": 39, "40": 40, "41": 41 }], 33: [function(require2, module2, exports2) {
    "use strict";
    var types = exports2;
    var util = require2(34);
    var s = [
      "double",
      // 0
      "float",
      // 1
      "int32",
      // 2
      "uint32",
      // 3
      "sint32",
      // 4
      "fixed32",
      // 5
      "sfixed32",
      // 6
      "int64",
      // 7
      "uint64",
      // 8
      "sint64",
      // 9
      "fixed64",
      // 10
      "sfixed64",
      // 11
      "bool",
      // 12
      "string",
      // 13
      "bytes"
      // 14
    ];
    function bake(values, offset) {
      var i = 0, o = /* @__PURE__ */ Object.create(null);
      offset |= 0;
      while (i < values.length) o[s[i + offset]] = values[i++];
      return o;
    }
    types.basic = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2,
      /* bytes    */
      2
    ]);
    types.defaults = bake([
      /* double   */
      0,
      /* float    */
      0,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      0,
      /* sfixed32 */
      0,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      0,
      /* sfixed64 */
      0,
      /* bool     */
      false,
      /* string   */
      "",
      /* bytes    */
      util.emptyArray,
      /* message  */
      null
    ]);
    types.long = bake([
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1
    ], 7);
    types.mapKey = bake([
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0,
      /* string   */
      2
    ], 2);
    types.packed = bake([
      /* double   */
      1,
      /* float    */
      5,
      /* int32    */
      0,
      /* uint32   */
      0,
      /* sint32   */
      0,
      /* fixed32  */
      5,
      /* sfixed32 */
      5,
      /* int64    */
      0,
      /* uint64   */
      0,
      /* sint64   */
      0,
      /* fixed64  */
      1,
      /* sfixed64 */
      1,
      /* bool     */
      0
    ]);
  }, { "34": 34 }], 34: [function(require2, module2, exports2) {
    "use strict";
    var util = module2.exports = require2(37);
    var roots = require2(28);
    var Type, Enum;
    util.codegen = require2(3);
    util.fetch = require2(5);
    util.path = require2(8);
    util.patterns = require2(38);
    var reservedRe = util.patterns.reservedRe;
    util.fs = require2(35);
    util.checkDepth = function checkDepth(depth) {
      if (depth === undefined)
        depth = 0;
      if (depth > util.recursionLimit)
        throw Error("max depth exceeded");
      return depth;
    };
    util.toArray = function toArray(object) {
      if (object) {
        var keys = Object.keys(object), array = new Array(keys.length), index = 0;
        while (index < keys.length)
          array[index] = object[keys[index++]];
        return array;
      }
      return [];
    };
    util.toObject = function toObject(array) {
      var object = {}, index = 0;
      while (index < array.length) {
        var key = array[index++], val = array[index++];
        if (val !== undefined)
          object[key] = val;
      }
      return object;
    };
    util.isReserved = function isReserved(name) {
      return reservedRe.test(name);
    };
    util.safeProp = function safeProp(prop) {
      if (!/^[$\w_]+$/.test(prop) || reservedRe.test(prop))
        return "[" + JSON.stringify(prop) + "]";
      return "." + prop;
    };
    util.ucFirst = function ucFirst(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    };
    var camelCaseRe = /_([a-z])/g;
    util.camelCase = function camelCase(str) {
      return str.substring(0, 1) + str.substring(1).replace(camelCaseRe, function($0, $1) {
        return $1.toUpperCase();
      });
    };
    util.compareFieldsById = function compareFieldsById(a, b) {
      return a.id - b.id;
    };
    util.decorateType = function decorateType(ctor, typeName) {
      if (ctor.$type) {
        if (typeName && ctor.$type.name !== typeName) {
          util.decorateRoot.remove(ctor.$type);
          ctor.$type.name = typeName;
          util.decorateRoot.add(ctor.$type);
        }
        return ctor.$type;
      }
      if (!Type)
        Type = require2(32);
      var type = new Type(typeName || ctor.name);
      util.decorateRoot.add(type);
      type.ctor = ctor;
      Object.defineProperty(ctor, "$type", { value: type, enumerable: false });
      Object.defineProperty(ctor.prototype, "$type", { value: type, enumerable: false });
      return type;
    };
    var decorateEnumIndex = 0;
    util.decorateEnum = function decorateEnum(object) {
      if (object.$type)
        return object.$type;
      if (!Enum)
        Enum = require2(15);
      var enm = new Enum("Enum" + decorateEnumIndex++, object);
      util.decorateRoot.add(enm);
      Object.defineProperty(object, "$type", { value: enm, enumerable: false });
      return enm;
    };
    util.setProperty = function setProperty(dst, path, value, ifNotSet) {
      function setProp(dst2, path2, value2) {
        var part = path2.shift();
        if (util.isUnsafeProperty(part))
          return dst2;
        if (path2.length > 0) {
          dst2[part] = setProp(dst2[part] || {}, path2, value2);
        } else {
          var prevValue = dst2[part];
          if (prevValue && ifNotSet)
            return dst2;
          if (prevValue)
            value2 = [].concat(prevValue).concat(value2);
          dst2[part] = value2;
        }
        return dst2;
      }
      if (typeof dst !== "object")
        throw TypeError("dst must be an object");
      if (!path)
        throw TypeError("path must be specified");
      path = path.split(".");
      if (path.length > util.recursionLimit)
        throw Error("max depth exceeded");
      return setProp(dst, path, value);
    };
    Object.defineProperty(util, "decorateRoot", {
      get: function() {
        return roots["decorated"] || (roots["decorated"] = new (require2(27))());
      }
    });
  }, { "15": 15, "27": 27, "28": 28, "3": 3, "32": 32, "35": 35, "37": 37, "38": 38, "5": 5, "8": 8 }], 35: [function(require2, module2, exports2) {
    "use strict";
    var fs = null;
    try {
      fs = require2(11);
      if (!fs || !fs.readFile || !fs.readFileSync)
        fs = null;
    } catch (e) {
    }
    module2.exports = fs;
  }, { "11": 11 }], 36: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = LongBits;
    var util = require2(37);
    function LongBits(lo, hi) {
      this.lo = lo >>> 0;
      this.hi = hi >>> 0;
    }
    var zero = LongBits.zero = new LongBits(0, 0);
    zero.toNumber = function() {
      return 0;
    };
    zero.zzEncode = zero.zzDecode = function() {
      return this;
    };
    zero.length = function() {
      return 1;
    };
    var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";
    LongBits.fromNumber = function fromNumber(value) {
      if (value === 0)
        return zero;
      var sign = value < 0;
      if (sign)
        value = -value;
      var lo = value >>> 0, hi = (value - lo) / 4294967296 >>> 0;
      if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
          lo = 0;
          if (++hi > 4294967295)
            hi = 0;
        }
      }
      return new LongBits(lo, hi);
    };
    LongBits.from = function from(value) {
      if (typeof value === "number")
        return LongBits.fromNumber(value);
      if (util.isString(value)) {
        if (util.Long)
          value = util.Long.fromString(value);
        else
          return LongBits.fromNumber(parseInt(value, 10));
      }
      return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
    };
    LongBits.prototype.toNumber = function toNumber(unsigned) {
      if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0, hi = ~this.hi >>> 0;
        if (!lo)
          hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
      }
      return this.lo + this.hi * 4294967296;
    };
    LongBits.prototype.toLong = function toLong(unsigned) {
      return util.Long ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned)) : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
    };
    var charCodeAt = String.prototype.charCodeAt;
    LongBits.fromHash = function fromHash(hash) {
      if (hash === zeroHash)
        return zero;
      return new LongBits(
        (charCodeAt.call(hash, 0) | charCodeAt.call(hash, 1) << 8 | charCodeAt.call(hash, 2) << 16 | charCodeAt.call(hash, 3) << 24) >>> 0,
        (charCodeAt.call(hash, 4) | charCodeAt.call(hash, 5) << 8 | charCodeAt.call(hash, 6) << 16 | charCodeAt.call(hash, 7) << 24) >>> 0
      );
    };
    LongBits.prototype.toHash = function toHash() {
      return String.fromCharCode(
        this.lo & 255,
        this.lo >>> 8 & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24,
        this.hi & 255,
        this.hi >>> 8 & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
      );
    };
    LongBits.prototype.zzEncode = function zzEncode() {
      var mask = this.hi >> 31;
      this.hi = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
      this.lo = (this.lo << 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.zzDecode = function zzDecode() {
      var mask = -(this.lo & 1);
      this.lo = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
      this.hi = (this.hi >>> 1 ^ mask) >>> 0;
      return this;
    };
    LongBits.prototype.length = function length() {
      var part0 = this.lo, part1 = (this.lo >>> 28 | this.hi << 4) >>> 0, part2 = this.hi >>> 24;
      return part2 === 0 ? part1 === 0 ? part0 < 16384 ? part0 < 128 ? 1 : 2 : part0 < 2097152 ? 3 : 4 : part1 < 16384 ? part1 < 128 ? 5 : 6 : part1 < 2097152 ? 7 : 8 : part2 < 128 ? 9 : 10;
    };
  }, { "37": 37 }], 37: [function(require2, module2, exports2) {
    "use strict";
    var util = exports2;
    util.asPromise = require2(1);
    util.base64 = require2(2);
    util.EventEmitter = require2(4);
    util.float = require2(7);
    util.utf8 = require2(10);
    util.pool = require2(9);
    util.LongBits = require2(36);
    function isUnsafeProperty(key) {
      return key === "__proto__" || key === "prototype" || key === "constructor";
    }
    util.isUnsafeProperty = isUnsafeProperty;
    util.isNode = Boolean(typeof global !== "undefined" && global && global.process && global.process.versions && global.process.versions.node);
    util.global = util.isNode && global || typeof window !== "undefined" && window || typeof self !== "undefined" && self || this;
    util.emptyArray = Object.freeze ? Object.freeze([]) : (
      /* istanbul ignore next */
      []
    );
    util.emptyObject = Object.freeze ? Object.freeze({}) : (
      /* istanbul ignore next */
      {}
    );
    util.isInteger = Number.isInteger || /* istanbul ignore next */
    function isInteger(value) {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    };
    util.isString = function isString(value) {
      return typeof value === "string" || value instanceof String;
    };
    util.isObject = function isObject(value) {
      return value && typeof value === "object";
    };
    util.isset = /**
     * Checks if a property on a message is considered to be present.
     * @param {Object} obj Plain object or message instance
     * @param {string} prop Property name
     * @returns {boolean} `true` if considered to be present, otherwise `false`
     */
    util.isSet = function isSet(obj, prop) {
      var value = obj[prop];
      if (value != null && Object.hasOwnProperty.call(obj, prop))
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
      return false;
    };
    util.Buffer = (function() {
      try {
        var Buffer = util.global.Buffer;
        return Buffer.prototype.utf8Write ? Buffer : (
          /* istanbul ignore next */
          null
        );
      } catch (e) {
        return null;
      }
    })();
    util._Buffer_from = null;
    util._Buffer_allocUnsafe = null;
    util.newBuffer = function newBuffer(sizeOrArray) {
      return typeof sizeOrArray === "number" ? util.Buffer ? util._Buffer_allocUnsafe(sizeOrArray) : new util.Array(sizeOrArray) : util.Buffer ? util._Buffer_from(sizeOrArray) : typeof Uint8Array === "undefined" ? sizeOrArray : new Uint8Array(sizeOrArray);
    };
    util.Array = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
    util.Long = /* istanbul ignore next */
    util.global.dcodeIO && /* istanbul ignore next */
    util.global.dcodeIO.Long || /* istanbul ignore next */
    util.global.Long || (function() {
      try {
        var Long = require2("long");
        return Long && Long.isLong ? Long : null;
      } catch (e) {
        return null;
      }
    })();
    util.key2Re = /^true|false|0|1$/;
    util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
    util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
    util.longToHash = function longToHash(value) {
      return value ? util.LongBits.from(value).toHash() : util.LongBits.zeroHash;
    };
    util.longFromHash = function longFromHash(hash, unsigned) {
      var bits = util.LongBits.fromHash(hash);
      if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
      return bits.toNumber(Boolean(unsigned));
    };
    function merge(dst) {
      var ifNotSet = typeof arguments[arguments.length - 1] === "boolean", limit = ifNotSet ? arguments.length - 1 : arguments.length;
      ifNotSet = ifNotSet && arguments[arguments.length - 1];
      for (var a = 1; a < limit; ++a) {
        var src = arguments[a];
        if (!src)
          continue;
        for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
          if (!isUnsafeProperty(keys[i]) && (dst[keys[i]] === undefined || !ifNotSet))
            dst[keys[i]] = src[keys[i]];
      }
      return dst;
    }
    util.merge = merge;
    util.nestingLimit = 32;
    util.recursionLimit = 100;
    util.makeProp = function makeProp(obj, key) {
      Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true
      });
    };
    util.lcFirst = function lcFirst(str) {
      return str.charAt(0).toLowerCase() + str.substring(1);
    };
    function newError(name) {
      function CustomError(message, properties) {
        if (!(this instanceof CustomError))
          return new CustomError(message, properties);
        Object.defineProperty(this, "message", { get: function() {
          return message;
        } });
        if (Error.captureStackTrace)
          Error.captureStackTrace(this, CustomError);
        else
          Object.defineProperty(this, "stack", { value: new Error().stack || "" });
        if (properties)
          merge(this, properties);
      }
      CustomError.prototype = Object.create(Error.prototype, {
        constructor: {
          value: CustomError,
          writable: true,
          enumerable: false,
          configurable: true
        },
        name: {
          get: function get() {
            return name;
          },
          set: undefined,
          enumerable: false,
          // configurable: false would accurately preserve the behavior of
          // the original, but I'm guessing that was not intentional.
          // For an actual error subclass, this property would
          // be configurable.
          configurable: true
        },
        toString: {
          value: function value() {
            return this.name + ": " + this.message;
          },
          writable: true,
          enumerable: false,
          configurable: true
        }
      });
      return CustomError;
    }
    util.newError = newError;
    util.ProtocolError = newError("ProtocolError");
    util.oneOfGetter = function getOneOf(fieldNames) {
      var fieldMap = {};
      for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;
      return function() {
        for (var keys = Object.keys(this), i2 = keys.length - 1; i2 > -1; --i2)
          if (fieldMap[keys[i2]] === 1 && this[keys[i2]] !== undefined && this[keys[i2]] !== null)
            return keys[i2];
      };
    };
    util.oneOfSetter = function setOneOf(fieldNames) {
      return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
          if (fieldNames[i] !== name)
            delete this[fieldNames[i]];
      };
    };
    util.toJSONOptions = {
      longs: String,
      enums: String,
      bytes: String,
      json: true
    };
    util._configure = function() {
      var Buffer = util.Buffer;
      if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
      }
      util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from || /* istanbul ignore next */
      function Buffer_from(value, encoding) {
        return new Buffer(value, encoding);
      };
      util._Buffer_allocUnsafe = Buffer.allocUnsafe || /* istanbul ignore next */
      function Buffer_allocUnsafe(size) {
        return new Buffer(size);
      };
    };
  }, { "1": 1, "10": 10, "2": 2, "36": 36, "4": 4, "7": 7, "9": 9, "long": "long" }], 38: [function(require2, module2, exports2) {
    "use strict";
    var patterns = exports2;
    patterns.numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
    patterns.typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
    patterns.reservedRe = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
  }, {}], 39: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = verifier;
    var Enum = require2(15), util = require2(34);
    function invalid(field, expected) {
      return field.name + ": " + expected + (field.repeated && expected !== "array" ? "[]" : field.map && expected !== "object" ? "{k:" + field.keyType + "}" : "") + " expected";
    }
    function genVerifyValue(gen, field, fieldIndex, ref) {
      if (field.resolvedType) {
        if (field.resolvedType instanceof Enum) {
          gen("switch(%s){", ref)("default:")("return%j", invalid(field, "enum value"));
          for (var keys = Object.keys(field.resolvedType.values), j = 0; j < keys.length; ++j) gen("case %i:", field.resolvedType.values[keys[j]]);
          gen("break")("}");
        } else {
          gen("{")("var e=types[%i].verify(%s,n+1);", fieldIndex, ref)("if(e)")("return%j+e", field.name + ".")("}");
        }
      } else {
        switch (field.type) {
          case "int32":
          case "uint32":
          case "sint32":
          case "fixed32":
          case "sfixed32":
            gen("if(!util.isInteger(%s))", ref)("return%j", invalid(field, "integer"));
            break;
          case "int64":
          case "uint64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            gen("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", ref, ref, ref, ref)("return%j", invalid(field, "integer|Long"));
            break;
          case "float":
          case "double":
            gen('if(typeof %s!=="number")', ref)("return%j", invalid(field, "number"));
            break;
          case "bool":
            gen('if(typeof %s!=="boolean")', ref)("return%j", invalid(field, "boolean"));
            break;
          case "string":
            gen("if(!util.isString(%s))", ref)("return%j", invalid(field, "string"));
            break;
          case "bytes":
            gen('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', ref, ref, ref)("return%j", invalid(field, "buffer"));
            break;
        }
      }
      return gen;
    }
    function genVerifyKey(gen, field, ref) {
      switch (field.keyType) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          gen("if(!util.key32Re.test(%s))", ref)("return%j", invalid(field, "integer key"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          gen("if(!util.key64Re.test(%s))", ref)("return%j", invalid(field, "integer|Long key"));
          break;
        case "bool":
          gen("if(!util.key2Re.test(%s))", ref)("return%j", invalid(field, "boolean key"));
          break;
      }
      return gen;
    }
    function verifier(mtype) {
      var gen = util.codegen(["m", "n"], mtype.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")("return%j", "maximum nesting depth exceeded");
      var oneofs = mtype.oneofsArray, seenFirstField = {};
      if (oneofs.length) gen("var p={}");
      for (var i = 0; i < /* initializes */
      mtype.fieldsArray.length; ++i) {
        var field = mtype._fieldsArray[i].resolve(), ref = "m" + util.safeProp(field.name);
        if (field.optional) gen("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", ref, field.name);
        if (field.map) {
          gen("if(!util.isObject(%s))", ref)("return%j", invalid(field, "object"))("var k=Object.keys(%s)", ref)("for(var i=0;i<k.length;++i){");
          genVerifyKey(gen, field, "k[i]");
          genVerifyValue(gen, field, i, ref + "[k[i]]")("}");
        } else if (field.repeated) {
          gen("if(!Array.isArray(%s))", ref)("return%j", invalid(field, "array"))("for(var i=0;i<%s.length;++i){", ref);
          genVerifyValue(gen, field, i, ref + "[i]")("}");
        } else {
          if (field.partOf) {
            var oneofProp = util.safeProp(field.partOf.name);
            if (seenFirstField[field.partOf.name] === 1) gen("if(p%s===1)", oneofProp)("return%j", field.partOf.name + ": multiple values");
            seenFirstField[field.partOf.name] = 1;
            gen("p%s=1", oneofProp);
          }
          genVerifyValue(gen, field, i, ref);
        }
        if (field.optional) gen("}");
      }
      return gen("return null");
    }
  }, { "15": 15, "34": 34 }], 40: [function(require2, module2, exports2) {
    "use strict";
    var wrappers = exports2;
    var Message = require2(20), util = require2(37);
    wrappers[".google.protobuf.Any"] = {
      fromObject: function(object, depth) {
        if (object && object["@type"]) {
          var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
          var type = this.lookup(name);
          if (type) {
            var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"];
            if (type_url.indexOf("/") === -1) {
              type_url = "/" + type_url;
            }
            return this.create({
              type_url,
              value: type.encode(type.fromObject(object, depth === undefined ? 1 : depth + 1)).finish()
            });
          }
        }
        return this.fromObject(object, depth);
      },
      toObject: function(message, options, depth) {
        if (depth === undefined)
          depth = 0;
        if (depth > util.recursionLimit)
          throw Error("max depth exceeded");
        var googleApi = "type.googleapis.com/";
        var prefix = "";
        var name = "";
        if (options && options.json && message.type_url && message.value) {
          name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1);
          prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
          var type = this.lookup(name);
          if (type)
            message = type.decode(message.value, undefined, undefined, depth + 1);
        }
        if (!(message instanceof this.ctor) && message instanceof Message) {
          var object = message.$type.toObject(message, options, depth + 1);
          var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName;
          if (prefix === "") {
            prefix = googleApi;
          }
          name = prefix + messageName;
          object["@type"] = name;
          return object;
        }
        return this.toObject(message, options, depth);
      }
    };
  }, { "20": 20, "37": 37 }], 41: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = Writer;
    var util = require2(37);
    var BufferWriter;
    var LongBits = util.LongBits, base64 = util.base64, utf8 = util.utf8;
    function Op(fn, len, val) {
      this.fn = fn;
      this.len = len;
      this.next = undefined;
      this.val = val;
    }
    function noop() {
    }
    function State(writer) {
      this.head = writer.head;
      this.tail = writer.tail;
      this.len = writer.len;
      this.next = writer.states;
    }
    function Writer() {
      this.len = 0;
      this.head = new Op(noop, 0, 0);
      this.tail = this.head;
      this.states = null;
    }
    var create = function create2() {
      return util.Buffer ? function create_buffer_setup() {
        return (Writer.create = function create_buffer() {
          return new BufferWriter();
        })();
      } : function create_array() {
        return new Writer();
      };
    };
    Writer.create = create();
    Writer.alloc = function alloc(size) {
      return new util.Array(size);
    };
    if (util.Array !== Array)
      Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);
    Writer.prototype._push = function push(fn, len, val) {
      this.tail = this.tail.next = new Op(fn, len, val);
      this.len += len;
      return this;
    };
    function writeByte(val, buf, pos) {
      buf[pos] = val & 255;
    }
    function writeVarint32(val, buf, pos) {
      while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
      }
      buf[pos] = val;
    }
    function VarintOp(len, val) {
      this.len = len;
      this.next = undefined;
      this.val = val;
    }
    VarintOp.prototype = Object.create(Op.prototype);
    VarintOp.prototype.fn = writeVarint32;
    Writer.prototype.uint32 = function write_uint32(value) {
      this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0) < 128 ? 1 : value < 16384 ? 2 : value < 2097152 ? 3 : value < 268435456 ? 4 : 5,
        value
      )).len;
      return this;
    };
    Writer.prototype.int32 = function write_int32(value) {
      return (value |= 0) < 0 ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) : this.uint32(value);
    };
    Writer.prototype.sint32 = function write_sint32(value) {
      return this.uint32((value << 1 ^ value >> 31) >>> 0);
    };
    function writeVarint64(val, buf, pos) {
      var lo = val.lo, hi = val.hi;
      while (hi) {
        buf[pos++] = lo & 127 | 128;
        lo = (lo >>> 7 | hi << 25) >>> 0;
        hi >>>= 7;
      }
      while (lo > 127) {
        buf[pos++] = lo & 127 | 128;
        lo = lo >>> 7;
      }
      buf[pos++] = lo;
    }
    Writer.prototype.uint64 = function write_uint64(value) {
      var bits = LongBits.from(value);
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.int64 = Writer.prototype.uint64;
    Writer.prototype.sint64 = function write_sint64(value) {
      var bits = LongBits.from(value).zzEncode();
      return this._push(writeVarint64, bits.length(), bits);
    };
    Writer.prototype.bool = function write_bool(value) {
      return this._push(writeByte, 1, value ? 1 : 0);
    };
    function writeFixed32(val, buf, pos) {
      buf[pos] = val & 255;
      buf[pos + 1] = val >>> 8 & 255;
      buf[pos + 2] = val >>> 16 & 255;
      buf[pos + 3] = val >>> 24;
    }
    Writer.prototype.fixed32 = function write_fixed32(value) {
      return this._push(writeFixed32, 4, value >>> 0);
    };
    Writer.prototype.sfixed32 = Writer.prototype.fixed32;
    Writer.prototype.fixed64 = function write_fixed64(value) {
      var bits = LongBits.from(value);
      return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
    };
    Writer.prototype.sfixed64 = Writer.prototype.fixed64;
    Writer.prototype.float = function write_float(value) {
      return this._push(util.float.writeFloatLE, 4, value);
    };
    Writer.prototype.double = function write_double(value) {
      return this._push(util.float.writeDoubleLE, 8, value);
    };
    var writeBytes = util.Array.prototype.set ? function writeBytes_set(val, buf, pos) {
      buf.set(val, pos);
    } : function writeBytes_for(val, buf, pos) {
      for (var i = 0; i < val.length; ++i)
        buf[pos + i] = val[i];
    };
    Writer.prototype.bytes = function write_bytes(value) {
      var len = value.length >>> 0;
      if (!len)
        return this._push(writeByte, 1, 0);
      if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
      }
      return this.uint32(len)._push(writeBytes, len, value);
    };
    Writer.prototype.string = function write_string(value) {
      var len = utf8.length(value);
      return len ? this.uint32(len)._push(utf8.write, len, value) : this._push(writeByte, 1, 0);
    };
    Writer.prototype.fork = function fork() {
      this.states = new State(this);
      this.head = this.tail = new Op(noop, 0, 0);
      this.len = 0;
      return this;
    };
    Writer.prototype.reset = function reset() {
      if (this.states) {
        this.head = this.states.head;
        this.tail = this.states.tail;
        this.len = this.states.len;
        this.states = this.states.next;
      } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len = 0;
      }
      return this;
    };
    Writer.prototype.ldelim = function ldelim() {
      var head = this.head, tail = this.tail, len = this.len;
      this.reset().uint32(len);
      if (len) {
        this.tail.next = head.next;
        this.tail = tail;
        this.len += len;
      }
      return this;
    };
    Writer.prototype.finish = function finish() {
      var head = this.head.next, buf = this.constructor.alloc(this.len), pos = 0;
      while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
      }
      return buf;
    };
    Writer._configure = function(BufferWriter_) {
      BufferWriter = BufferWriter_;
      Writer.create = create();
      BufferWriter._configure();
    };
  }, { "37": 37 }], 42: [function(require2, module2, exports2) {
    "use strict";
    module2.exports = BufferWriter;
    var Writer = require2(41);
    (BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;
    var util = require2(37);
    function BufferWriter() {
      Writer.call(this);
    }
    BufferWriter._configure = function() {
      BufferWriter.alloc = util._Buffer_allocUnsafe;
      BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set" ? function writeBytesBuffer_set(val, buf, pos) {
        buf.set(val, pos);
      } : function writeBytesBuffer_copy(val, buf, pos) {
        if (val.copy)
          val.copy(buf, pos, 0, val.length);
        else for (var i = 0; i < val.length; )
          buf[pos++] = val[i++];
      };
    };
    BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
      if (util.isString(value))
        value = util._Buffer_from(value, "base64");
      var len = value.length >>> 0;
      this.uint32(len);
      if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
      return this;
    };
    function writeStringBuffer(val, buf, pos) {
      if (val.length < 40)
        util.utf8.write(val, buf, pos);
      else if (buf.utf8Write)
        buf.utf8Write(val, pos);
      else
        buf.write(val, pos);
    }
    BufferWriter.prototype.string = function write_string_buffer(value) {
      var len = util.Buffer.byteLength(value);
      this.uint32(len);
      if (len)
        this._push(writeStringBuffer, len, value);
      return this;
    };
    BufferWriter._configure();
  }, { "37": 37, "41": 41 }] }, {}, [17]);
})();
/*! Bundled license information:

protobufjs/dist/light/protobuf.js:
  (*!
   * protobuf.js v7.6.5 (c) 2016, daniel wirtz
   * compiled sat, 04 jul 2026 01:13:07 utc
   * licensed under the bsd-3-clause license
   * see: https://github.com/dcodeio/protobuf.js for details
   *)
*/

});
__buksVendorReg("@libs/novelStatus", function(require, module, exports){
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../lnr-plugins/src/libs/novelStatus.ts
var novelStatus_exports = {};
__export(novelStatus_exports, {
  NovelStatus: () => NovelStatus
});
module.exports = __toCommonJS(novelStatus_exports);

// ../lnr-plugins/src/types/constants.ts
var NovelStatus = {
  Unknown: "Unknown",
  Ongoing: "Ongoing",
  Completed: "Completed",
  Licensed: "Licensed",
  PublishingFinished: "Publishing Finished",
  Cancelled: "Cancelled",
  OnHiatus: "On Hiatus",
  STUB: "STUB",
  Inactive: "Inactive"
};

});
__buksVendorReg("@libs/defaultCover", function(require, module, exports){
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../lnr-plugins/src/libs/defaultCover.ts
var defaultCover_exports = {};
__export(defaultCover_exports, {
  defaultCover: () => defaultCover
});
module.exports = __toCommonJS(defaultCover_exports);

// ../lnr-plugins/src/types/constants.ts
var defaultCover = "https://github.com/LNReader/lnreader-plugins/blob/main/icons/src/coverNotAvailable.jpg?raw=true";

});
__buksVendorReg("@libs/filterInputs", function(require, module, exports){
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../lnr-plugins/src/types/filters.ts
var filters_exports = {};
__export(filters_exports, {
  FilterTypes: () => FilterTypes
});
module.exports = __toCommonJS(filters_exports);
var FilterTypes = /* @__PURE__ */ ((FilterTypes2) => {
  FilterTypes2["TextInput"] = "Text";
  FilterTypes2["Picker"] = "Picker";
  FilterTypes2["CheckboxGroup"] = "Checkbox";
  FilterTypes2["Switch"] = "Switch";
  FilterTypes2["ExcludableCheckboxGroup"] = "XCheckbox";
  return FilterTypes2;
})(FilterTypes || {});

});
__buksVendorReg("@/types/constants", function(require, module, exports){
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../lnr-plugins/src/types/constants.ts
var constants_exports = {};
__export(constants_exports, {
  NovelStatus: () => NovelStatus,
  defaultCover: () => defaultCover
});
module.exports = __toCommonJS(constants_exports);
var NovelStatus = {
  Unknown: "Unknown",
  Ongoing: "Ongoing",
  Completed: "Completed",
  Licensed: "Licensed",
  PublishingFinished: "Publishing Finished",
  Cancelled: "Cancelled",
  OnHiatus: "On Hiatus",
  STUB: "STUB",
  Inactive: "Inactive"
};
var defaultCover = "https://github.com/LNReader/lnreader-plugins/blob/main/icons/src/coverNotAvailable.jpg?raw=true";

});
__buksVendorReg("@libs/aes", function(require, module, exports){
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// ../lnr-plugins/src/lib/aes.ts
var aes_exports = {};
__export(aes_exports, {
  gcm: () => gcm
});
module.exports = __toCommonJS(aes_exports);

// ../lnr-plugins/node_modules/@noble/ciphers/utils.js
function isBytes(a) {
  return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
}
function abool(b) {
  if (typeof b !== "boolean")
    throw new Error(`boolean expected, not ${b}`);
}
function abytes(value, length, title = "") {
  const bytes = isBytes(value);
  const len = value?.length;
  const needsLen = length !== void 0;
  if (!bytes || needsLen && len !== length) {
    const prefix = title && `"${title}" `;
    const ofLen = needsLen ? ` of length ${length}` : "";
    const got = bytes ? `length=${len}` : `type=${typeof value}`;
    throw new Error(prefix + "expected Uint8Array" + ofLen + ", got " + got);
  }
  return value;
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes(out, void 0, "output");
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}
function u8(arr) {
  return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
}
function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].fill(0);
  }
}
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
var isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
function equalBytes(a, b) {
  if (a.length !== b.length)
    return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++)
    diff |= a[i] ^ b[i];
  return diff === 0;
}
var wrapCipher = /* @__NO_SIDE_EFFECTS__ */ (params, constructor) => {
  function wrappedCipher(key, ...args) {
    abytes(key, void 0, "key");
    if (!isLE)
      throw new Error("Non little-endian hardware is not yet supported");
    if (params.nonceLength !== void 0) {
      const nonce = args[0];
      abytes(nonce, params.varSizeNonce ? void 0 : params.nonceLength, "nonce");
    }
    const tagl = params.tagLength;
    if (tagl && args[1] !== void 0)
      abytes(args[1], void 0, "AAD");
    const cipher = constructor(key, ...args);
    const checkOutput = (fnLength, output) => {
      if (output !== void 0) {
        if (fnLength !== 2)
          throw new Error("cipher output not supported");
        abytes(output, void 0, "output");
      }
    };
    let called = false;
    const wrCipher = {
      encrypt(data, output) {
        if (called)
          throw new Error("cannot encrypt() twice with same key + nonce");
        called = true;
        abytes(data);
        checkOutput(cipher.encrypt.length, output);
        return cipher.encrypt(data, output);
      },
      decrypt(data, output) {
        abytes(data);
        if (tagl && data.length < tagl)
          throw new Error('"ciphertext" expected length bigger than tagLength=' + tagl);
        checkOutput(cipher.decrypt.length, output);
        return cipher.decrypt(data, output);
      }
    };
    return wrCipher;
  }
  Object.assign(wrappedCipher, params);
  return wrappedCipher;
};
function getOutput(expectedLength, out, onlyAligned = true) {
  if (out === void 0)
    return new Uint8Array(expectedLength);
  if (out.length !== expectedLength)
    throw new Error('"output" expected Uint8Array of length ' + expectedLength + ", got: " + out.length);
  if (onlyAligned && !isAligned32(out))
    throw new Error("invalid output, must be aligned");
  return out;
}
function u64Lengths(dataLength, aadLength, isLE2) {
  abool(isLE2);
  const num = new Uint8Array(16);
  const view = createView(num);
  view.setBigUint64(0, BigInt(aadLength), isLE2);
  view.setBigUint64(8, BigInt(dataLength), isLE2);
  return num;
}
function isAligned32(bytes) {
  return bytes.byteOffset % 4 === 0;
}
function copyBytes(bytes) {
  return Uint8Array.from(bytes);
}

// ../lnr-plugins/node_modules/@noble/ciphers/_polyval.js
var BLOCK_SIZE = 16;
var ZEROS16 = /* @__PURE__ */ new Uint8Array(16);
var ZEROS32 = u32(ZEROS16);
var POLY = 225;
var mul2 = (s0, s1, s2, s3) => {
  const hiBit = s3 & 1;
  return {
    s3: s2 << 31 | s3 >>> 1,
    s2: s1 << 31 | s2 >>> 1,
    s1: s0 << 31 | s1 >>> 1,
    s0: s0 >>> 1 ^ POLY << 24 & -(hiBit & 1)
    // reduce % poly
  };
};
var swapLE = (n) => (n >>> 0 & 255) << 24 | (n >>> 8 & 255) << 16 | (n >>> 16 & 255) << 8 | n >>> 24 & 255 | 0;
function _toGHASHKey(k) {
  k.reverse();
  const hiBit = k[15] & 1;
  let carry = 0;
  for (let i = 0; i < k.length; i++) {
    const t = k[i];
    k[i] = t >>> 1 | carry;
    carry = (t & 1) << 7;
  }
  k[0] ^= -hiBit & 225;
  return k;
}
var estimateWindow = (bytes) => {
  if (bytes > 64 * 1024)
    return 8;
  if (bytes > 1024)
    return 4;
  return 2;
};
var GHASH = class {
  // We select bits per window adaptively based on expectedLength
  constructor(key, expectedLength) {
    __publicField(this, "blockLen", BLOCK_SIZE);
    __publicField(this, "outputLen", BLOCK_SIZE);
    __publicField(this, "s0", 0);
    __publicField(this, "s1", 0);
    __publicField(this, "s2", 0);
    __publicField(this, "s3", 0);
    __publicField(this, "finished", false);
    __publicField(this, "t");
    __publicField(this, "W");
    __publicField(this, "windowSize");
    abytes(key, 16, "key");
    key = copyBytes(key);
    const kView = createView(key);
    let k0 = kView.getUint32(0, false);
    let k1 = kView.getUint32(4, false);
    let k2 = kView.getUint32(8, false);
    let k3 = kView.getUint32(12, false);
    const doubles = [];
    for (let i = 0; i < 128; i++) {
      doubles.push({ s0: swapLE(k0), s1: swapLE(k1), s2: swapLE(k2), s3: swapLE(k3) });
      ({ s0: k0, s1: k1, s2: k2, s3: k3 } = mul2(k0, k1, k2, k3));
    }
    const W = estimateWindow(expectedLength || 1024);
    if (![1, 2, 4, 8].includes(W))
      throw new Error("ghash: invalid window size, expected 2, 4 or 8");
    this.W = W;
    const bits = 128;
    const windows = bits / W;
    const windowSize = this.windowSize = 2 ** W;
    const items = [];
    for (let w = 0; w < windows; w++) {
      for (let byte = 0; byte < windowSize; byte++) {
        let s0 = 0, s1 = 0, s2 = 0, s3 = 0;
        for (let j = 0; j < W; j++) {
          const bit = byte >>> W - j - 1 & 1;
          if (!bit)
            continue;
          const { s0: d0, s1: d1, s2: d2, s3: d3 } = doubles[W * w + j];
          s0 ^= d0, s1 ^= d1, s2 ^= d2, s3 ^= d3;
        }
        items.push({ s0, s1, s2, s3 });
      }
    }
    this.t = items;
  }
  _updateBlock(s0, s1, s2, s3) {
    s0 ^= this.s0, s1 ^= this.s1, s2 ^= this.s2, s3 ^= this.s3;
    const { W, t, windowSize } = this;
    let o0 = 0, o1 = 0, o2 = 0, o3 = 0;
    const mask = (1 << W) - 1;
    let w = 0;
    for (const num of [s0, s1, s2, s3]) {
      for (let bytePos = 0; bytePos < 4; bytePos++) {
        const byte = num >>> 8 * bytePos & 255;
        for (let bitPos = 8 / W - 1; bitPos >= 0; bitPos--) {
          const bit = byte >>> W * bitPos & mask;
          const { s0: e0, s1: e1, s2: e2, s3: e3 } = t[w * windowSize + bit];
          o0 ^= e0, o1 ^= e1, o2 ^= e2, o3 ^= e3;
          w += 1;
        }
      }
    }
    this.s0 = o0;
    this.s1 = o1;
    this.s2 = o2;
    this.s3 = o3;
  }
  update(data) {
    aexists(this);
    abytes(data);
    data = copyBytes(data);
    const b32 = u32(data);
    const blocks = Math.floor(data.length / BLOCK_SIZE);
    const left = data.length % BLOCK_SIZE;
    for (let i = 0; i < blocks; i++) {
      this._updateBlock(b32[i * 4 + 0], b32[i * 4 + 1], b32[i * 4 + 2], b32[i * 4 + 3]);
    }
    if (left) {
      ZEROS16.set(data.subarray(blocks * BLOCK_SIZE));
      this._updateBlock(ZEROS32[0], ZEROS32[1], ZEROS32[2], ZEROS32[3]);
      clean(ZEROS32);
    }
    return this;
  }
  destroy() {
    const { t } = this;
    for (const elm of t) {
      elm.s0 = 0, elm.s1 = 0, elm.s2 = 0, elm.s3 = 0;
    }
  }
  digestInto(out) {
    aexists(this);
    aoutput(out, this);
    this.finished = true;
    const { s0, s1, s2, s3 } = this;
    const o32 = u32(out);
    o32[0] = s0;
    o32[1] = s1;
    o32[2] = s2;
    o32[3] = s3;
    return out;
  }
  digest() {
    const res = new Uint8Array(BLOCK_SIZE);
    this.digestInto(res);
    this.destroy();
    return res;
  }
};
var Polyval = class extends GHASH {
  constructor(key, expectedLength) {
    abytes(key);
    const ghKey = _toGHASHKey(copyBytes(key));
    super(ghKey, expectedLength);
    clean(ghKey);
  }
  update(data) {
    aexists(this);
    abytes(data);
    data = copyBytes(data);
    const b32 = u32(data);
    const left = data.length % BLOCK_SIZE;
    const blocks = Math.floor(data.length / BLOCK_SIZE);
    for (let i = 0; i < blocks; i++) {
      this._updateBlock(swapLE(b32[i * 4 + 3]), swapLE(b32[i * 4 + 2]), swapLE(b32[i * 4 + 1]), swapLE(b32[i * 4 + 0]));
    }
    if (left) {
      ZEROS16.set(data.subarray(blocks * BLOCK_SIZE));
      this._updateBlock(swapLE(ZEROS32[3]), swapLE(ZEROS32[2]), swapLE(ZEROS32[1]), swapLE(ZEROS32[0]));
      clean(ZEROS32);
    }
    return this;
  }
  digestInto(out) {
    aexists(this);
    aoutput(out, this);
    this.finished = true;
    const { s0, s1, s2, s3 } = this;
    const o32 = u32(out);
    o32[0] = s0;
    o32[1] = s1;
    o32[2] = s2;
    o32[3] = s3;
    return out.reverse();
  }
};
function wrapConstructorWithKey(hashCons) {
  const hashC = (msg, key) => hashCons(key, msg.length).update(msg).digest();
  const tmp = hashCons(new Uint8Array(16), 0);
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (key, expectedLength) => hashCons(key, expectedLength);
  return hashC;
}
var ghash = wrapConstructorWithKey((key, expectedLength) => new GHASH(key, expectedLength));
var polyval = wrapConstructorWithKey((key, expectedLength) => new Polyval(key, expectedLength));

// ../lnr-plugins/node_modules/@noble/ciphers/aes.js
var BLOCK_SIZE2 = 16;
var BLOCK_SIZE32 = 4;
var EMPTY_BLOCK = /* @__PURE__ */ new Uint8Array(BLOCK_SIZE2);
var POLY2 = 283;
function validateKeyLength(key) {
  if (![16, 24, 32].includes(key.length))
    throw new Error('"aes key" expected Uint8Array of length 16/24/32, got length=' + key.length);
}
function mul22(n) {
  return n << 1 ^ POLY2 & -(n >> 7);
}
function mul(a, b) {
  let res = 0;
  for (; b > 0; b >>= 1) {
    res ^= a & -(b & 1);
    a = mul22(a);
  }
  return res;
}
var sbox = /* @__PURE__ */ (() => {
  const t = new Uint8Array(256);
  for (let i = 0, x = 1; i < 256; i++, x ^= mul22(x))
    t[i] = x;
  const box = new Uint8Array(256);
  box[0] = 99;
  for (let i = 0; i < 255; i++) {
    let x = t[255 - i];
    x |= x << 8;
    box[t[i]] = (x ^ x >> 4 ^ x >> 5 ^ x >> 6 ^ x >> 7 ^ 99) & 255;
  }
  clean(t);
  return box;
})();
var rotr32_8 = (n) => n << 24 | n >>> 8;
var rotl32_8 = (n) => n << 8 | n >>> 24;
function genTtable(sbox2, fn) {
  if (sbox2.length !== 256)
    throw new Error("Wrong sbox length");
  const T0 = new Uint32Array(256).map((_, j) => fn(sbox2[j]));
  const T1 = T0.map(rotl32_8);
  const T2 = T1.map(rotl32_8);
  const T3 = T2.map(rotl32_8);
  const T01 = new Uint32Array(256 * 256);
  const T23 = new Uint32Array(256 * 256);
  const sbox22 = new Uint16Array(256 * 256);
  for (let i = 0; i < 256; i++) {
    for (let j = 0; j < 256; j++) {
      const idx = i * 256 + j;
      T01[idx] = T0[i] ^ T1[j];
      T23[idx] = T2[i] ^ T3[j];
      sbox22[idx] = sbox2[i] << 8 | sbox2[j];
    }
  }
  return { sbox: sbox2, sbox2: sbox22, T0, T1, T2, T3, T01, T23 };
}
var tableEncoding = /* @__PURE__ */ genTtable(sbox, (s) => mul(s, 3) << 24 | s << 16 | s << 8 | mul(s, 2));
var xPowers = /* @__PURE__ */ (() => {
  const p = new Uint8Array(16);
  for (let i = 0, x = 1; i < 16; i++, x = mul22(x))
    p[i] = x;
  return p;
})();
function expandKeyLE(key) {
  abytes(key);
  const len = key.length;
  validateKeyLength(key);
  const { sbox2 } = tableEncoding;
  const toClean = [];
  if (!isAligned32(key))
    toClean.push(key = copyBytes(key));
  const k32 = u32(key);
  const Nk = k32.length;
  const subByte = (n) => applySbox(sbox2, n, n, n, n);
  const xk = new Uint32Array(len + 28);
  xk.set(k32);
  for (let i = Nk; i < xk.length; i++) {
    let t = xk[i - 1];
    if (i % Nk === 0)
      t = subByte(rotr32_8(t)) ^ xPowers[i / Nk - 1];
    else if (Nk > 6 && i % Nk === 4)
      t = subByte(t);
    xk[i] = xk[i - Nk] ^ t;
  }
  clean(...toClean);
  return xk;
}
function apply0123(T01, T23, s0, s1, s2, s3) {
  return T01[s0 << 8 & 65280 | s1 >>> 8 & 255] ^ T23[s2 >>> 8 & 65280 | s3 >>> 24 & 255];
}
function applySbox(sbox2, s0, s1, s2, s3) {
  return sbox2[s0 & 255 | s1 & 65280] | sbox2[s2 >>> 16 & 255 | s3 >>> 16 & 65280] << 16;
}
function encrypt(xk, s0, s1, s2, s3) {
  const { sbox2, T01, T23 } = tableEncoding;
  let k = 0;
  s0 ^= xk[k++], s1 ^= xk[k++], s2 ^= xk[k++], s3 ^= xk[k++];
  const rounds = xk.length / 4 - 2;
  for (let i = 0; i < rounds; i++) {
    const t02 = xk[k++] ^ apply0123(T01, T23, s0, s1, s2, s3);
    const t12 = xk[k++] ^ apply0123(T01, T23, s1, s2, s3, s0);
    const t22 = xk[k++] ^ apply0123(T01, T23, s2, s3, s0, s1);
    const t32 = xk[k++] ^ apply0123(T01, T23, s3, s0, s1, s2);
    s0 = t02, s1 = t12, s2 = t22, s3 = t32;
  }
  const t0 = xk[k++] ^ applySbox(sbox2, s0, s1, s2, s3);
  const t1 = xk[k++] ^ applySbox(sbox2, s1, s2, s3, s0);
  const t2 = xk[k++] ^ applySbox(sbox2, s2, s3, s0, s1);
  const t3 = xk[k++] ^ applySbox(sbox2, s3, s0, s1, s2);
  return { s0: t0, s1: t1, s2: t2, s3: t3 };
}
function ctr32(xk, isLE2, nonce, src, dst) {
  abytes(nonce, BLOCK_SIZE2, "nonce");
  abytes(src);
  dst = getOutput(src.length, dst);
  const ctr = nonce;
  const c32 = u32(ctr);
  const view = createView(ctr);
  const src32 = u32(src);
  const dst32 = u32(dst);
  const ctrPos = isLE2 ? 0 : 12;
  const srcLen = src.length;
  let ctrNum = view.getUint32(ctrPos, isLE2);
  let { s0, s1, s2, s3 } = encrypt(xk, c32[0], c32[1], c32[2], c32[3]);
  for (let i = 0; i + 4 <= src32.length; i += 4) {
    dst32[i + 0] = src32[i + 0] ^ s0;
    dst32[i + 1] = src32[i + 1] ^ s1;
    dst32[i + 2] = src32[i + 2] ^ s2;
    dst32[i + 3] = src32[i + 3] ^ s3;
    ctrNum = ctrNum + 1 >>> 0;
    view.setUint32(ctrPos, ctrNum, isLE2);
    ({ s0, s1, s2, s3 } = encrypt(xk, c32[0], c32[1], c32[2], c32[3]));
  }
  const start = BLOCK_SIZE2 * Math.floor(src32.length / BLOCK_SIZE32);
  if (start < srcLen) {
    const b32 = new Uint32Array([s0, s1, s2, s3]);
    const buf = u8(b32);
    for (let i = start, pos = 0; i < srcLen; i++, pos++)
      dst[i] = src[i] ^ buf[pos];
    clean(b32);
  }
  return dst;
}
function computeTag(fn, isLE2, key, data, AAD) {
  const aadLength = AAD ? AAD.length : 0;
  const h = fn.create(key, data.length + aadLength);
  if (AAD)
    h.update(AAD);
  const num = u64Lengths(8 * data.length, 8 * aadLength, isLE2);
  h.update(data);
  h.update(num);
  const res = h.digest();
  clean(num);
  return res;
}
var gcm = /* @__PURE__ */ wrapCipher({ blockSize: 16, nonceLength: 12, tagLength: 16, varSizeNonce: true }, function aesgcm(key, nonce, AAD) {
  if (nonce.length < 8)
    throw new Error("aes/gcm: invalid nonce length");
  const tagLength = 16;
  function _computeTag(authKey, tagMask, data) {
    const tag = computeTag(ghash, false, authKey, data, AAD);
    for (let i = 0; i < tagMask.length; i++)
      tag[i] ^= tagMask[i];
    return tag;
  }
  function deriveKeys() {
    const xk = expandKeyLE(key);
    const authKey = EMPTY_BLOCK.slice();
    const counter = EMPTY_BLOCK.slice();
    ctr32(xk, false, counter, counter, authKey);
    if (nonce.length === 12) {
      counter.set(nonce);
    } else {
      const nonceLen = EMPTY_BLOCK.slice();
      const view = createView(nonceLen);
      view.setBigUint64(8, BigInt(nonce.length * 8), false);
      const g = ghash.create(authKey).update(nonce).update(nonceLen);
      g.digestInto(counter);
      g.destroy();
    }
    const tagMask = ctr32(xk, false, counter, EMPTY_BLOCK);
    return { xk, authKey, counter, tagMask };
  }
  return {
    encrypt(plaintext) {
      const { xk, authKey, counter, tagMask } = deriveKeys();
      const out = new Uint8Array(plaintext.length + tagLength);
      const toClean = [xk, authKey, counter, tagMask];
      if (!isAligned32(plaintext))
        toClean.push(plaintext = copyBytes(plaintext));
      ctr32(xk, false, counter, plaintext, out.subarray(0, plaintext.length));
      const tag = _computeTag(authKey, tagMask, out.subarray(0, out.length - tagLength));
      toClean.push(tag);
      out.set(tag, plaintext.length);
      clean(...toClean);
      return out;
    },
    decrypt(ciphertext) {
      const { xk, authKey, counter, tagMask } = deriveKeys();
      const toClean = [xk, authKey, tagMask, counter];
      if (!isAligned32(ciphertext))
        toClean.push(ciphertext = copyBytes(ciphertext));
      const data = ciphertext.subarray(0, -tagLength);
      const passedTag = ciphertext.subarray(-tagLength);
      const tag = _computeTag(authKey, tagMask, data);
      toClean.push(tag);
      if (!equalBytes(tag, passedTag))
        throw new Error("aes/gcm: invalid ghash tag");
      const out = ctr32(xk, false, counter, data);
      clean(...toClean);
      return out;
    }
  };
});
function isBytes32(a) {
  return a instanceof Uint32Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint32Array";
}
function encryptBlock(xk, block) {
  abytes(block, 16, "block");
  if (!isBytes32(xk))
    throw new Error("_encryptBlock accepts result of expandKeyLE");
  const b32 = u32(block);
  let { s0, s1, s2, s3 } = encrypt(xk, b32[0], b32[1], b32[2], b32[3]);
  b32[0] = s0, b32[1] = s1, b32[2] = s2, b32[3] = s3;
  return block;
}
function dbl(block) {
  let carry = 0;
  for (let i = BLOCK_SIZE2 - 1; i >= 0; i--) {
    const newCarry = (block[i] & 128) >>> 7;
    block[i] = block[i] << 1 | carry;
    carry = newCarry;
  }
  if (carry) {
    block[BLOCK_SIZE2 - 1] ^= 135;
  }
  return block;
}
function xorBlock(a, b) {
  if (a.length !== b.length)
    throw new Error("xorBlock: blocks must have same length");
  for (let i = 0; i < a.length; i++) {
    a[i] = a[i] ^ b[i];
  }
  return a;
}
var _CMAC = class {
  constructor(key) {
    __publicField(this, "buffer");
    __publicField(this, "destroyed");
    __publicField(this, "k1");
    __publicField(this, "k2");
    __publicField(this, "xk");
    abytes(key);
    validateKeyLength(key);
    this.xk = expandKeyLE(key);
    this.buffer = new Uint8Array(0);
    this.destroyed = false;
    const L = new Uint8Array(BLOCK_SIZE2);
    encryptBlock(this.xk, L);
    this.k1 = dbl(L);
    this.k2 = dbl(new Uint8Array(this.k1));
  }
  update(data) {
    const { destroyed, buffer } = this;
    if (destroyed)
      throw new Error("CMAC instance was destroyed");
    abytes(data);
    const newBuffer = new Uint8Array(buffer.length + data.length);
    newBuffer.set(buffer);
    newBuffer.set(data, buffer.length);
    this.buffer = newBuffer;
    return this;
  }
  // see https://www.rfc-editor.org/rfc/rfc4493.html#section-2.4
  digest() {
    if (this.destroyed)
      throw new Error("CMAC instance was destroyed");
    const { buffer } = this;
    const msgLen = buffer.length;
    let n = Math.ceil(msgLen / BLOCK_SIZE2);
    let flag;
    if (n === 0) {
      n = 1;
      flag = false;
    } else {
      flag = msgLen % BLOCK_SIZE2 === 0;
    }
    const lastBlockStart = (n - 1) * BLOCK_SIZE2;
    const lastBlockData = buffer.subarray(lastBlockStart);
    let m_last;
    if (flag) {
      m_last = xorBlock(new Uint8Array(lastBlockData), this.k1);
    } else {
      const padded = new Uint8Array(BLOCK_SIZE2);
      padded.set(lastBlockData);
      padded[lastBlockData.length] = 128;
      m_last = xorBlock(padded, this.k2);
    }
    let x = new Uint8Array(BLOCK_SIZE2);
    for (let i = 0; i < n - 1; i++) {
      const m_i = buffer.subarray(i * BLOCK_SIZE2, (i + 1) * BLOCK_SIZE2);
      xorBlock(x, m_i);
      encryptBlock(this.xk, x);
    }
    xorBlock(x, m_last);
    encryptBlock(this.xk, x);
    clean(m_last);
    return x;
  }
  destroy() {
    const { buffer, destroyed, xk, k1, k2 } = this;
    if (destroyed)
      return;
    this.destroyed = true;
    clean(buffer, xk, k1, k2);
  }
};
var cmac = (key, message) => new _CMAC(key).update(message).digest();
cmac.create = (key) => new _CMAC(key);
/*! Bundled license information:

@noble/ciphers/utils.js:
  (*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) *)
*/

});
