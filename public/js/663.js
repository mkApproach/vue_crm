"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[663],{509:(e,t,o)=>{o.d(t,{Z:()=>r});var n=o(3645),a=o.n(n)()((function(e){return e[1]}));a.push([e.id,".error_txt[data-v-2dd92764]{color:red;display:block;font-size:13px;margin-bottom:10px}li[data-v-2dd92764]{list-style:none;margin-bottom:15px}.red[data-v-2dd92764]{color:red}.gray[data-v-2dd92764]{color:#33a}.taskComponent[data-v-2dd92764]{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;width:40%}@media (min-width:576px){.taskComponent[data-v-2dd92764]{max-width:540px}}@media (min-width:768px){.taskComponent[data-v-2dd92764]{max-width:720px}}@media (min-width:992px){.taskComponent[data-v-2dd92764]{max-width:960px}}@media (min-width:1200px){.taskComponent[data-v-2dd92764]{max-width:1140px}}.taskComponent-fluid[data-v-2dd92764]{margin-left:auto;margin-right:auto;padding-left:15px;padding-right:15px;width:100%}",""]);const r=a},1663:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});const n={data:function(){return{newrole:{name:"",memo:""},roles:[],errors:{}}},methods:{roleCreate:function(){var e=this;if(""!=this.newrole.name){var t=this;axios.post("/api/role/create",this.newrole).then((function(t){e.newrole.name="",e.newrole.memo="",e.roleRead()})).catch((function(e){var o={};for(var n in e.response.data.errors)o[n]=e.response.data.errors[n].join("<br>");t.errors=o}))}},roleUpdate:function(e){var t=this;this.roles[e].edit=!1,axios.put("/api/role/update",this.roles[e]).then((function(e){t.roleRead()}))},roleDelete:function(e){var t=this;axios.delete("/api/role/delete/"+e).then((function(e){t.roleRead()}))},roleRead:function(){var e=this;axios.get("/api/role/read").then((function(t){e.roles=t.data,e.roles.forEach((function(t){e.$set(t,"edit",!1)}))})),this.errors={}}},mounted:function(){this.roleRead()}};var a=o(3379),r=o.n(a),i=o(509),d={insert:"head",singleton:!1};r()(i.Z,d);i.Z.locals;const s=(0,o(1900).Z)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"taskComponent"},[o("form",{on:{submit:function(t){return t.preventDefault(),e.roleCreate.apply(null,arguments)}}},[o("label",[e._v("役職cd：\n            "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newrole.name,expression:"newrole.name"}],attrs:{type:"text"},domProps:{value:e.newrole.name},on:{input:function(t){t.target.composing||e.$set(e.newrole,"name",t.target.value)}}}),e._v(" "),o("div",{staticClass:"error_txt",domProps:{innerHTML:e._s(e.errors.name)}})]),e._v(" "),o("br"),e._v(" "),o("label",[e._v("役職名：\n            "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.newrole.memo,expression:"newrole.memo"}],attrs:{type:"text"},domProps:{value:e.newrole.memo},on:{input:function(t){t.target.composing||e.$set(e.newrole,"memo",t.target.value)}}}),e._v(" "),o("button",[e._v("新規作成")]),e._v(" "),o("div",{staticClass:"error_txt",domProps:{innerHTML:e._s(e.errors.memo)}})])]),e._v(" "),o("table",{staticClass:"vue_tbl",attrs:{width:"100%",border:"1",margin:"100%"}},[e._m(0),e._v(" "),o("tbody",e._l(e.roles,(function(t,n){return o("tr",{key:n},[o("td",[e._v(e._s(t.id))]),e._v(" "),o("td",[t.edit?e._e():o("span",[e._v(e._s(t.name))]),e._v(" "),t.edit?o("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"role.name"}],attrs:{type:"text"},domProps:{value:t.name},on:{input:function(o){o.target.composing||e.$set(t,"name",o.target.value)}}}):e._e()]),e._v(" "),o("td",[t.edit?e._e():o("span",[e._v(e._s(t.memo))]),e._v(" "),t.edit?o("input",{directives:[{name:"model",rawName:"v-model",value:t.memo,expression:"role.memo"}],attrs:{type:"text"},domProps:{value:t.memo},on:{input:function(o){o.target.composing||e.$set(t,"memo",o.target.value)}}}):e._e()]),e._v(" "),o("td",[t.edit?e._e():o("button",{on:{click:function(e){t.edit=!0}}},[e._v("編集")]),e._v(" "),t.edit?o("button",{on:{click:function(t){return e.roleUpdate(n)}}},[e._v("更新")]):e._e()]),e._v(" "),o("td",[o("button",{on:{click:function(o){return e.roleDelete(t.id)}}},[e._v("削除")])])])})),0)])])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",{attrs:{bgcolor:"lightgray"}},[o("td",[e._v("ID")]),e._v(" "),o("td",[e._v("役職コード")]),e._v(" "),o("td",[e._v("役職")]),e._v(" "),o("td"),e._v(" "),o("td")])])}],!1,null,"2dd92764",null).exports}}]);