"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_task_Task_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      newtask: {
        content: "",
        emergency: false
      },
      tasks: []
    };
  },
  methods: {
    taskCreate: function taskCreate() {
      var _this = this;

      if (this.newtask.content != "") {
        axios.post("/api/task/create", this.newtask).then(function (res) {
          _this.newtask.emergency = false;
          _this.newtask.content = "";

          _this.taskRead();
        });
      }
    },
    taskUpdate: function taskUpdate(index) {
      var _this2 = this;

      this.tasks[index].edit = false;
      axios.put("/api/task/update", this.tasks[index]).then(function (res) {
        _this2.taskRead();
      });
    },
    taskDelete: function taskDelete(id) {
      var _this3 = this;

      axios["delete"]("/api/task/delete/" + id).then(function (res) {
        _this3.taskRead();
      });
    },
    taskRead: function taskRead() {
      var _this4 = this;

      axios.get("/api/task/read").then(function (res) {
        _this4.tasks = res.data;

        _this4.tasks.forEach(function (task) {
          _this4.$set(task, "edit", false);
        });
      });
    }
  },
  mounted: function mounted() {
    this.taskRead();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "li[data-v-1d315ab4] {\n  list-style: none;\n  margin-bottom: 15px;\n}\n.red[data-v-1d315ab4] {\n  color: red;\n}\n.gray[data-v-1d315ab4] {\n  color: #3333aa;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_id_1d315ab4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_id_1d315ab4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_id_1d315ab4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/task/Task.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/task/Task.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task_vue_vue_type_template_id_1d315ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.vue?vue&type=template&id=1d315ab4&scoped=true& */ "./resources/js/components/task/Task.vue?vue&type=template&id=1d315ab4&scoped=true&");
/* harmony import */ var _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.vue?vue&type=script&lang=js& */ "./resources/js/components/task/Task.vue?vue&type=script&lang=js&");
/* harmony import */ var _Task_vue_vue_type_style_index_0_id_1d315ab4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true& */ "./resources/js/components/task/Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Task_vue_vue_type_template_id_1d315ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Task_vue_vue_type_template_id_1d315ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1d315ab4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/task/Task.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/task/Task.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/task/Task.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/task/Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/task/Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_style_index_0_id_1d315ab4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=style&index=0&id=1d315ab4&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/task/Task.vue?vue&type=template&id=1d315ab4&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/task/Task.vue?vue&type=template&id=1d315ab4&scoped=true& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_1d315ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_1d315ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Task_vue_vue_type_template_id_1d315ab4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Task.vue?vue&type=template&id=1d315ab4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=template&id=1d315ab4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=template&id=1d315ab4&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/task/Task.vue?vue&type=template&id=1d315ab4&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "taskComponent" }, [
    _c(
      "form",
      {
        on: {
          submit: function ($event) {
            $event.preventDefault()
            return _vm.taskCreate.apply(null, arguments)
          },
        },
      },
      [
        _vm._v("\n        緊急："),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newtask.emergency,
              expression: "newtask.emergency",
            },
          ],
          attrs: { type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.newtask.emergency)
              ? _vm._i(_vm.newtask.emergency, null) > -1
              : _vm.newtask.emergency,
          },
          on: {
            change: function ($event) {
              var $$a = _vm.newtask.emergency,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 &&
                    _vm.$set(_vm.newtask, "emergency", $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    _vm.$set(
                      _vm.newtask,
                      "emergency",
                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                    )
                }
              } else {
                _vm.$set(_vm.newtask, "emergency", $$c)
              }
            },
          },
        }),
        _c("br"),
        _vm._v("\n        内容："),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newtask.content,
              expression: "newtask.content",
            },
          ],
          attrs: { type: "text" },
          domProps: { value: _vm.newtask.content },
          on: {
            input: function ($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.newtask, "content", $event.target.value)
            },
          },
        }),
        _vm._v(" "),
        _c("button", [_vm._v("create")]),
      ]
    ),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c("hr"),
    _vm._v(" "),
    _c(
      "ul",
      _vm._l(_vm.tasks, function (task, index) {
        return _c("li", { key: index }, [
          _vm._v("\n            緊急："),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: task.emergency,
                expression: "task.emergency",
              },
            ],
            attrs: { type: "checkbox" },
            domProps: {
              checked: Array.isArray(task.emergency)
                ? _vm._i(task.emergency, null) > -1
                : task.emergency,
            },
            on: {
              change: [
                function ($event) {
                  var $$a = task.emergency,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && _vm.$set(task, "emergency", $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        _vm.$set(
                          task,
                          "emergency",
                          $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                        )
                    }
                  } else {
                    _vm.$set(task, "emergency", $$c)
                  }
                },
                function ($event) {
                  return _vm.taskUpdate(index)
                },
              ],
            },
          }),
          _c("br"),
          _vm._v("\n            内容："),
          !task.edit
            ? _c("span", { class: { red: task.emergency } }, [
                _vm._v(_vm._s(task.content)),
              ])
            : _vm._e(),
          _vm._v(" "),
          task.edit
            ? _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: task.content,
                    expression: "task.content",
                  },
                ],
                attrs: { type: "text" },
                domProps: { value: task.content },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(task, "content", $event.target.value)
                  },
                },
              })
            : _vm._e(),
          _vm._v(" "),
          !task.edit
            ? _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      task.edit = true
                    },
                  },
                },
                [_vm._v("edit")]
              )
            : _vm._e(),
          _vm._v(" "),
          task.edit
            ? _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      return _vm.taskUpdate(index)
                    },
                  },
                },
                [_vm._v("update")]
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "button",
            {
              on: {
                click: function ($event) {
                  return _vm.taskDelete(task.id)
                },
              },
            },
            [_vm._v("delete")]
          ),
        ])
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);