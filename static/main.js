/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(3);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _hdpVueComponents = __webpack_require__(4);
	
	var _hdpVueComponents2 = _interopRequireDefault(_hdpVueComponents);
	
	var _App = __webpack_require__(5);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Index = __webpack_require__(17);
	
	var _Index2 = _interopRequireDefault(_Index);
	
	var _modal = __webpack_require__(20);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _pagination = __webpack_require__(23);
	
	var _pagination2 = _interopRequireDefault(_pagination);
	
	var _datetimePicker = __webpack_require__(26);
	
	var _datetimePicker2 = _interopRequireDefault(_datetimePicker);
	
	var _taginput = __webpack_require__(29);
	
	var _taginput2 = _interopRequireDefault(_taginput);
	
	var _typeAhead = __webpack_require__(32);
	
	var _typeAhead2 = _interopRequireDefault(_typeAhead);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_hdpVueComponents2.default.components);
	
	var router = new _vueRouter2.default({});
	
	router.map({
		'/index': {
			component: _Index2.default
		},
		'/modal': {
			component: _modal2.default
		},
		'/pagination': {
			component: _pagination2.default
		},
		'/datetimepicker': {
			component: _datetimePicker2.default
		},
		'/taginput': {
			component: _taginput2.default
		},
		'/typeahead': {
			component: _typeAhead2.default
		}
	});
	
	router.redirect({
		'/': '/index'
	});
	router.start(_App2.default, '#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = lib;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(4);

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(5);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-95c6f75c/App.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Header = __webpack_require__(7);
	
	var _Header2 = _interopRequireDefault(_Header);
	
	var _Sidebar = __webpack_require__(10);
	
	var _Sidebar2 = _interopRequireDefault(_Sidebar);
	
	var _Footer = __webpack_require__(13);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	
		replace: false,
	
		name: 'App',
	
		components: {
			AppHeader: _Header2.default,
			AppSidebar: _Sidebar2.default,
			AppFooter: _Footer2.default
		}
	
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(8)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/common/Header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(9)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-750c833c/Header.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
	
		replace: false,
	
		name: 'Header'
	
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<header class=\"am-topbar am-topbar-inverse admin-header\">\n  <div class=\"am-topbar-brand\">\n    <strong>Amaze UI</strong> <small>后台管理模板</small>\n  </div>\n\n  <button class=\"am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only\" data-am-collapse=\"{target: '#topbar-collapse'}\"><span class=\"am-sr-only\">导航切换</span> <span class=\"am-icon-bars\"></span></button>\n\n  <div class=\"am-collapse am-topbar-collapse\" id=\"topbar-collapse\">\n\n    <ul class=\"am-nav am-nav-pills am-topbar-nav am-topbar-right admin-header-list\">\n      <li><a href=\"javascript:;\"><span class=\"am-icon-envelope-o\"></span> 收件箱 <span class=\"am-badge am-badge-warning\">5</span></a></li>\n      <li class=\"am-dropdown\" data-am-dropdown>\n        <a class=\"am-dropdown-toggle\" data-am-dropdown-toggle href=\"javascript:;\">\n          <span class=\"am-icon-users\"></span> 管理员 <span class=\"am-icon-caret-down\"></span>\n        </a>\n        <ul class=\"am-dropdown-content\">\n          <li><a href=\"#\"><span class=\"am-icon-user\"></span> 资料</a></li>\n          <li><a href=\"#\"><span class=\"am-icon-cog\"></span> 设置</a></li>\n          <li><a href=\"#\"><span class=\"am-icon-power-off\"></span> 退出</a></li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</header>";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/common/Sidebar.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-e5632052/Sidebar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
	
		replace: false,
	
		name: 'Sidebar',
	
		data: function data() {
			return {
				links: [{
					name: 'modal',
					iconClass: 'am-icon-file',
					url: '/modal'
				}, {
					name: 'pagination',
					iconClass: 'am-icon-file',
					url: '/pagination'
				}, {
					name: 'taginput',
					iconClass: 'am-icon-file',
					url: '/taginput'
				}, {
					name: 'typeahead',
					iconClass: 'am-icon-file',
					url: '/typeahead'
				}, {
					name: 'datetimepicker',
					iconClass: 'am-icon-file',
					url: '/datetimepicker'
				}]
			};
		}
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div class=\"admin-sidebar am-offcanvas\" id=\"admin-offcanvas\">\n    <div class=\"am-offcanvas-bar admin-offcanvas-bar\">\n        <ul class=\"am-list admin-sidebar-list\">\n            <li v-for=\"item in links\">\n                <a v-link=\"item.url\"><span :class=\"item.iconClass\"></span>&nbsp;{{ item.name }}</a>\n            </li>\n        </ul>\n    </div>\n</div>";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(14)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/common/Footer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(15)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-b7714b20/Footer.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
	
		replace: false,
	
		name: 'Footer'
	
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "<footer class=\"admin-content-footer\">\n    <hr>\n    <p class=\"am-padding-left\">© 2014 AllMobilize, Inc. Licensed under MIT license.</p>\n  </footer>";

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<app-header></app-header>\n\n<div class=\"am-cf admin-main\">\n  <!-- sidebar start -->\n  <app-sidebar></app-sidebar>\n  <!-- sidebar end -->\n\n  <!-- content start -->\n  <div class=\"admin-content\">\n    <div class=\"admin-content-body\" style=\"padding:20px;\">\n      \n      <router-view></router-view>\n\n    </div>\n  </div>\n  <!-- content end -->\n\n</div>\n\n<app-footer></app-footer>";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(18)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/Index.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-d50c5f7a/Index.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _vue = __webpack_require__(1);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
		replace: true,
	
		name: 'Index',
	
		data: function data() {
			return {
				text: 'hello world'
			};
		}
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "<p>{{ text }}</p>";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(21)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/modal/modal.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(22)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-20c7edc8/modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	
	    data: function data() {
	        return {
	            showModal: false,
	            showAlert: false,
	            showConfirm: false,
	            showDialog: false,
	            alertMsg: {
	                title: 'alert',
	                content: 'alert content'
	            },
	            confirmMsg: {
	                title: 'confirm',
	                content: 'alert content',
	                cancelText: false
	            },
	            dialogMsg: {
	                title: 'finish your message',
	                confirmText: '提交'
	            },
	            username: 'hdp'
	        };
	    },
	
	    methods: {
	        clickAlert: function clickAlert() {
	            this.showAlert = true;
	            this.alertMsg.title = this.alertMsg.title + 1;
	        },
	        clickAlertOK: function clickAlertOK() {
	            this.showAlert = false;
	        },
	        clickConfirm: function clickConfirm() {
	            this.showConfirm = true;
	            this.confirmMsg.title = this.alertMsg.title + 1;
	        },
	        clickConfirmOK: function clickConfirmOK() {
	            console.log('yeah');
	            this.showConfirm = false;
	        },
	        clickConfirmCancel: function clickConfirmCancel() {
	            console.log('no');
	            this.showConfirm = false;
	        },
	        clickDialog: function clickDialog() {
	            this.showDialog = true;
	        },
	        clickDialogOK: function clickDialogOK() {
	            this.showDialog = false;
	            console.log('submit name:' + this.username);
	        },
	        clickDialogCancel: function clickDialogCancel() {
	            this.showDialog = false;
	            console.log('cancel');
	        }
	    }
	
	};

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n    <!-- <button class=\"am-btn am-btn-default\" type=\"button\" v-on:click=\"showModal=true\">open modal</button> -->\r\n    \r\n    <button class=\"am-btn am-btn-primary\" type=\"button\" v-on:click=\"clickAlert\">open alert</button>\r\n    &nbsp;&nbsp;\r\n    <button class=\"am-btn am-btn-secondary\" type=\"button\" v-on:click=\"clickConfirm\">open confirm</button>\r\n    &nbsp;&nbsp;\r\n    <button class=\"am-btn am-btn-success\" type=\"button\" v-on:click=\"clickDialog\">open dialog</button>\r\n    &nbsp;&nbsp;\r\n\r\n</div>\r\n\r\n<hdp-modal :show.sync=\"showModal\">\r\n    <div class=\"am-modal-hd\" slot=\"header\">modal header</div>\r\n    <div class=\"am-modal-bd\" slot=\"body\">hello</div>\r\n</hdp-modal>\r\n\r\n<hdp-alert :show.sync=\"showAlert\" class-name=\"am-modal-sm\" :msg=\"alertMsg\" @alert.ok=\"clickAlertOK\"></hdp-alert>\r\n\r\n<hdp-confirm :show.sync=\"showConfirm\" class-name=\"am-modal-sm\" :msg=\"confirmMsg\" @confirm.ok=\"clickConfirmOK\" @confirm.cancel=\"clickConfirmCancel\"></hdp-confirm>\r\n\r\n<hdp-dialog :show.sync=\"showDialog\" :msg=\"dialogMsg\" @dialog.cancel=\"clickDialogCancel\" @dialog.ok=\"clickDialogOK\">\r\n    <label for=\"\">username</label>\r\n    <input type=\"text\" v-model=\"username\">\r\n</hdp-dialog>";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(24)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/pagination/pagination.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(25)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6469ec40/pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	
	  methods: {
	    createLink: function createLink(p) {
	      return '/pagination?page=' + p;
	    }
	  }
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n    \n    <div>\n        <hdp-pagination :pagesize=\"6\" :total=\"10\" :cur=\"1\" :link=\"createLink\"></hdp-pagination>\n    </div>\n\n    <div>\n        <hdp-pagination :pagesize=\"6\" :total=\"200\" :cur=\"1\"></hdp-pagination>\n    </div>\n\n</div>\n\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(27)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/datetime-picker/datetime-picker.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(28)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-5e2f1502/datetime-picker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    data: function data() {
	        return {
	            myDate1: new Date('2010-1-3 4:5:6'),
	            myDateMin1: '2010-1-1 4:5:6',
	            myDateMax1: '2010-1-20 4:5:6',
	            myDate2: '2015-12-12 13:14',
	            myDateMin2: '2015-12-1 13:14:15',
	            myDateMax2: '2015-12-30 13:14:15'
	        };
	    },
	
	
	    filters: {
	        formatDate: function formatDate(_date, format) {
	            if (isNaN(_date.getTime())) {
	                return '';
	            }
	
	            var map = {
	                "M": _date.getMonth() + 1,
	                "d": _date.getDate(),
	                "h": _date.getHours(),
	                "m": _date.getMinutes(),
	                "s": _date.getSeconds()
	            };
	
	            format = format.replace(/([yMdDhms])+/g, function (all, t) {
	                var v = map[t];
	                if (v !== undefined) {
	                    if (all.length > 1) {
	                        v = '0' + v;
	                        v = v.substr(v.length - 2);
	                    }
	                    return v;
	                } else if (t === 'y') {
	                    return (_date.getFullYear() + '').substr(4 - all.length);
	                } else if (t === 'D') {
	                    return ['日', '一', '二', '三', '四', '五', '六'][_date.getDay()];
	                }
	                return all;
	            });
	
	            return format;
	        }
	    },
	
	    methods: {
	        myDateChange1: function myDateChange1(changedDate) {
	            console.log(changedDate);
	        },
	        myDateChange2: function myDateChange2(changedDate) {
	            console.log(changedDate);
	        }
	    }
	
	};

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "\n\n<grid>\n    <p>{{ myDate1 | formatDate 'yyyy年MM月dd日,星期D hh:mm' }}</p>\n    <ul class=\"am-avg-sm-1 am-avg-md-3 am-margin am-padding am-text-center admin-content-list \">\n        <li>\n            <hdp-date-time-picker v-bind:date-time.sync=\"myDate1\"></hdp-date-time-picker>\n        </li>\n        <li>\n            <hdp-date-time-picker v-bind:date-time.sync=\"myDate1\" v-bind:show-time-picker=\"false\"></hdp-date-time-picker>\n        </li>\n\n        <li>\n            <hdp-date-time-picker v-bind:date-time.sync=\"myDate1\" v-bind:show-date-picker=\"false\"></hdp-date-time-picker>\n        </li>\n    </ul>\n    \n\n\n    <hdp-date-time-input v-bind:date-time.sync=\"myDate2\"></hdp-date-time-input>\n\n\n    <hdp-date-time-input v-bind:date-time.sync=\"myDate2\" date-only></hdp-date-time-input>\n\n\n    <hdp-date-time-input v-bind:date-time.sync=\"myDate2\" time-only></hdp-date-time-input>\n    \n</grid>\n\n";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(30)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/taginput/taginput.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(31)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-296e7a80/taginput.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	module.exports = {
	
	    data: function data() {
	        return {
	            tagList: [],
	            listData: ['abc', 'addd', 'asdgasd', 'asdfasge', 'gwesdf'],
	            tagList2: [],
	            textConfig: {
	                listFun: function listFun() {
	                    var data = ["@hudongpai.com", "@qq.com", "@163.com", "@outlook.com", "@gmail.com", "@hotmail.com"];
	                    var value = this.inputData;
	                    var index = value.indexOf('@');
	                    var host = '';
	                    if (index > -1) {
	                        host = value.slice(index);
	                        value = value.slice(0, index);
	                    }
	                    for (var i = data.length - 1; i >= 0; i--) {
	                        data[i] = value + data[i];
	                    }
	                    this.items = this.config.limit ? data.slice(0, this.config.limit) : data;
	                    this.current = -1;
	                },
	                alwaysHit: true
	            },
	            tagList3: [],
	            listObject: [{
	                id: 1,
	                text: 'joey',
	                desc: 'a sb'
	            }, {
	                id: 2,
	                text: 'tom',
	                desc: 'a man'
	            }, {
	                id: 3,
	                text: 'jame'
	            }],
	            tagList4: [],
	            objectConfig: {
	                listFun: function listFun() {
	                    var _this = this;
	
	                    this.loading = true;
	
	                    setTimeout(function () {
	                        _this.loading = false;
	                        var text = _this.inputData[_this.config.textName];
	                        var resultList = [{
	                            id: 1,
	                            name: '11111111'
	                        },, {
	                            id: 2,
	                            name: '1222222222'
	                        }, {
	                            id: 3,
	                            name: '123333'
	                        }, {
	                            id: 4,
	                            name: '1234444444'
	                        }, {
	                            id: 5,
	                            name: '123455555'
	                        }];
	
	                        var items = [];
	
	                        resultList.forEach(function (item) {
	                            if (item.name.indexOf(text) >= 0) {
	                                items.push({
	                                    id: item.id,
	                                    text: item.name
	                                });
	                            }
	                        });
	
	                        _this.items = items;
	                        _this.current = -1;
	                    }, 500);
	                }
	            }
	        };
	    },
	
	    methods: {}
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "\n\n<div>\n    <label for=\"\">文本输入</label>\n    <hdp-taginput :input-list.sync=\"tagList\" :dropdown-data=\"listData\"></hdp-taginput>\n</div>\n\n<div>\n    <label for=\"\">自定义文本输入</label>\n    <hdp-taginput :input-list.sync=\"tagList2\" :config=\"textConfig\"></hdp-taginput>\n</div>\n\n<div>\n    <label for=\"\">对象输入</label>\n    <hdp-taginput \n        type-ahead=\"object\"\n        :input-list.sync=\"tagList3\"\n        :dropdown-data=\"listObject\">\n    </hdp-taginput>\n</div>\n\n<div>\n    <label for=\"\">自定义(ajax)对象输入</label>\n    <hdp-taginput \n        type-ahead=\"object\"\n        :input-list.sync=\"tagList4\"\n        :config=\"objectConfig\">\n    </hdp-taginput>\n</div>\n\n";

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(33)
	__vue_script__ = __webpack_require__(37)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/app/type-ahead/type-ahead.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(38)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-790effc0/type-ahead.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(34);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./type-ahead.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?sourceMap!./../../../node_modules/vue-loader/lib/style-rewriter.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./type-ahead.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(35)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.hdp-dropdown-typeahead {\n    border: solid 1px #ccc\n}\n", "", {"version":3,"sources":["/./src/app/type-ahead/type-ahead.vue?71d9499c"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAwCA;IACA,sBAAA;CACA","file":"type-ahead.vue","sourcesContent":["<template>\n    <div class=\"am-form\">\n\n        <label for=\"\">普通下拉文本</label><br>\n        <hdp-ta-text :input-data.sync=\"textInput\" :dropdown-data=\"listData\"></hdp-ta-text><span>{{textInput}}</span>\n        \n        \n        <br><br>\n\n        <label for=\"\">自定义下拉文本列表</label><br>\n        <hdp-ta-text :input-data.sync=\"textInput2\" :config=\"textConfig\"></hdp-ta-text><span>{{textInput2}}</span>\n\n        <br><br>\n\n        <label for=\"\">普通下拉对象列表</label><br>\n        <hdp-ta-object\n            :input-data.sync=\"objectInput\"\n            :config=\"objectConfig\"\n            :dropdown-data=\"listObject\">\n        </hdp-ta-object>\n        <span>id:{{objectInput.id}},name:{{objectInput.name}}</span>\n\n        <br><br>\n\n        <label for=\"\">自定义(ajax)下拉对象列表</label><br>\n        <hdp-ta-object\n            :input-data.sync=\"objectInput2\"\n            :config=\"object2Config\">\n        </hdp-ta-object>\n        <span>id:{{objectInput2.id}},name:{{objectInput2.name}}</span>\n    \n    </div>\n\n    <br><br>\n\n    <p>本着单一职责的原则，本来还想把ajax下拉也做成一个组件，但ajax库比较多样，就不做了</p>\n\n</template>\n\n<style>\n    .hdp-dropdown-typeahead {\n        border: solid 1px #ccc\n    }\n</style>\n\n<script>\n\nimport hdpVueComponents from 'hdp-vue-components';\n\nmodule.exports = {\n\n    data: function() {\n        return {\n            textInput: '',\n            listData: ['abc','addd','asdgasd','asdfasge','gwesdf'],\n            textInput2: '',\n            textConfig: {\n                // 邮件下拉\n                listFun: function() {\n                    let data = [\"@hudongpai.com\", \"@qq.com\", \"@163.com\", \"@outlook.com\", \"@gmail.com\", \"@hotmail.com\"];\n                    let value = this.inputData;\n                    let index = value.indexOf('@');\n                    let host = '';\n                    if (index > -1) {\n                        host = value.slice(index);\n                        value = value.slice(0, index);\n                    }\n                    for (var i = data.length - 1; i >= 0; i--) {\n                        data[i] = value + data[i];\n                    }\n                    this.items = this.config.limit ? data.slice(0, this.config.limit)\n                        : data\n                    this.current = -1\n                },\n                alwaysHit: true\n            },\n            objectInput: {\n                id: '',\n                name: ''\n            },\n            objectConfig: {\n                textName: 'name',    // 传入input的值属性名\n                idName: 'id'         // 传入input的id属性名\n            },\n            // listObject数组元素必须有id与text属性\n            listObject: [\n                {\n                    id: 1,\n                    text: 'joey',\n                    desc: 'a sb'\n                },{\n                    id: 2,\n                    text: 'tom',\n                    desc: 'a man'\n                },{\n                    id: 3,\n                    text: 'jame'\n                }\n            ],\n            objectInput2: {\n                id: '',\n                name: ''\n            },\n            object2Config: {\n                textName: 'name',\n                idName: 'id',\n                listFun: function() {\n                    this.loading = true;\n                    // setTimeout当ajax啦\n                    setTimeout(() => {\n                        this.loading = false;\n                        let text = this.inputData[this.config.textName];\n                        let resultList = [{\n                            id: 1,\n                            name: '11111111'\n                        },,{\n                            id: 2,\n                            name: '1222222222'\n                        },{\n                            id: 3,\n                            name: '123333'\n                        },{\n                            id: 4,\n                            name: '1234444444'\n                        },{\n                            id: 5,\n                            name: '123455555'\n                        }];\n\n                        let items = [];\n\n                        resultList.forEach((item) => {\n                            if (item.name.indexOf(text) >= 0) {\n                                items.push({\n                                    id: item.id,\n                                    text: item.name\n                                })\n                            }\n                        })\n\n                        this.items = items\n                        this.current = -1\n\n                    },500);\n                }\n            }\n        };\n    },\n\n    ready: function() {\n        \n    },\n\n    methods: {\n        \n    }\n\n};\n\n</script>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 35 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _hdpVueComponents = __webpack_require__(4);
	
	var _hdpVueComponents2 = _interopRequireDefault(_hdpVueComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	
	    data: function data() {
	        return {
	            textInput: '',
	            listData: ['abc', 'addd', 'asdgasd', 'asdfasge', 'gwesdf'],
	            textInput2: '',
	            textConfig: {
	                listFun: function listFun() {
	                    var data = ["@hudongpai.com", "@qq.com", "@163.com", "@outlook.com", "@gmail.com", "@hotmail.com"];
	                    var value = this.inputData;
	                    var index = value.indexOf('@');
	                    var host = '';
	                    if (index > -1) {
	                        host = value.slice(index);
	                        value = value.slice(0, index);
	                    }
	                    for (var i = data.length - 1; i >= 0; i--) {
	                        data[i] = value + data[i];
	                    }
	                    this.items = this.config.limit ? data.slice(0, this.config.limit) : data;
	                    this.current = -1;
	                },
	                alwaysHit: true
	            },
	            objectInput: {
	                id: '',
	                name: ''
	            },
	            objectConfig: {
	                textName: 'name',
	                idName: 'id' },
	
	            listObject: [{
	                id: 1,
	                text: 'joey',
	                desc: 'a sb'
	            }, {
	                id: 2,
	                text: 'tom',
	                desc: 'a man'
	            }, {
	                id: 3,
	                text: 'jame'
	            }],
	            objectInput2: {
	                id: '',
	                name: ''
	            },
	            object2Config: {
	                textName: 'name',
	                idName: 'id',
	                listFun: function listFun() {
	                    var _this = this;
	
	                    this.loading = true;
	
	                    setTimeout(function () {
	                        _this.loading = false;
	                        var text = _this.inputData[_this.config.textName];
	                        var resultList = [{
	                            id: 1,
	                            name: '11111111'
	                        },, {
	                            id: 2,
	                            name: '1222222222'
	                        }, {
	                            id: 3,
	                            name: '123333'
	                        }, {
	                            id: 4,
	                            name: '1234444444'
	                        }, {
	                            id: 5,
	                            name: '123455555'
	                        }];
	
	                        var items = [];
	
	                        resultList.forEach(function (item) {
	                            if (item.name.indexOf(text) >= 0) {
	                                items.push({
	                                    id: item.id,
	                                    text: item.name
	                                });
	                            }
	                        });
	
	                        _this.items = items;
	                        _this.current = -1;
	                    }, 500);
	                }
	            }
	        };
	    },
	
	    ready: function ready() {},
	
	    methods: {}
	
	};

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"am-form\">\n\n    <label for=\"\">普通下拉文本</label><br>\n    <hdp-ta-text :input-data.sync=\"textInput\" :dropdown-data=\"listData\"></hdp-ta-text><span>{{textInput}}</span>\n    \n    \n    <br><br>\n\n    <label for=\"\">自定义下拉文本列表</label><br>\n    <hdp-ta-text :input-data.sync=\"textInput2\" :config=\"textConfig\"></hdp-ta-text><span>{{textInput2}}</span>\n\n    <br><br>\n\n    <label for=\"\">普通下拉对象列表</label><br>\n    <hdp-ta-object\n        :input-data.sync=\"objectInput\"\n        :config=\"objectConfig\"\n        :dropdown-data=\"listObject\">\n    </hdp-ta-object>\n    <span>id:{{objectInput.id}},name:{{objectInput.name}}</span>\n\n    <br><br>\n\n    <label for=\"\">自定义(ajax)下拉对象列表</label><br>\n    <hdp-ta-object\n        :input-data.sync=\"objectInput2\"\n        :config=\"object2Config\">\n    </hdp-ta-object>\n    <span>id:{{objectInput2.id}},name:{{objectInput2.name}}</span>\n\n</div>\n\n<br><br>\n\n<p>本着单一职责的原则，本来还想把ajax下拉也做成一个组件，但ajax库比较多样，就不做了</p>\n\n";

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map