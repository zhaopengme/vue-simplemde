webpackJsonp([3,1],{0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var o=n(21),s=i(o),r=n(402),a=i(r);n(213);var d=n(397),c=i(d);new a.default((0,s.default)({},c.default)).$mount("#app")},17:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(19),s=i(o),r=n(392),a=i(r);t.default={name:"markdown-editor",props:{value:String,previewClass:String,configs:{type:Object,default:function(){return{}}}},mounted:function(){this.initialize()},methods:{initialize:function(){var e=this,t=JSON.parse((0,s.default)(this.configs));t.element=t.element||this.$el.firstChild,t.initialValue=t.initialValue||this.value,t.renderingConfig&&t.renderingConfig.codeSyntaxHighlighting&&n.e(0,function(){var e=t.renderingConfig.highlightingTheme||"default";window.hljs=n(217),n(387)("./"+e+".css")}),this.simplemde=new a.default(t),this.addPreviewClass(),this.simplemde.codemirror.on("change",function(){e.$emit("input",e.simplemde.value())})},addPreviewClass:function(){var e=this.configs.renderingConfig&&this.configs.renderingConfig.codeSyntaxHighlighting?(this.previewClass||"")+" hljs":this.previewClass||"",t=this.simplemde.codemirror.getWrapperElement(),n=document.createElement("div");t.nextSibling.className+=" "+e,n.className="editor-preview "+e,t.appendChild(n)}},watch:{value:function(e){e!==this.simplemde.value()&&this.simplemde.value(e)}}}},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(401);n(135),t.default={name:"index",data:function(){return{content:'``` \nconsole.log("lalala") \n```',configs1:{status:!1},configs2:{renderingConfig:{codeSyntaxHighlighting:!0}},configs3:{renderingConfig:{codeSyntaxHighlighting:!0,highlightingTheme:"atom-one-dark"}}}},computed:{simplemde:function(){return this.$refs.markdownEditor.simplemde}},mounted:function(){},methods:{handleInput:function(e){console.log(e)}},components:{markdownEditor:i.markdownEditor}}},135:function(e,t){},213:function(e,t){},214:function(e,t){},215:function(e,t){},397:function(e,t,n){var i,o;n(214),i=n(18);var s=n(399);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,e.exports=i},398:function(e,t,n){var i,o;n(215),i=n(17);var s=n(400);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,e.exports=i},399:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor-wrap"}},[n("div",{staticClass:"editor"},[n("h4",{staticClass:"title"},[e._v("默认配置")]),e._v(" "),n("markdown-editor",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],domProps:{value:e.content},on:{input:function(t){e.content=t}}})],1),e._v(" "),n("div",{staticClass:"editor"},[n("h4",{staticClass:"title"},[e._v("隐藏底部统计栏&使用github的markdown样式")]),e._v(" "),n("markdown-editor",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{configs:e.configs1,"preview-class":"markdown-body"},domProps:{value:e.content},on:{input:function(t){e.content=t}}})],1),e._v(" "),n("div",{staticClass:"editor"},[n("h4",{staticClass:"title"},[e._v("开启代码高亮")]),e._v(" "),n("markdown-editor",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{configs:e.configs2,"preview-class":"markdown-body"},domProps:{value:e.content},on:{input:function(t){e.content=t}}})],1),e._v(" "),n("div",{staticClass:"editor theme"},[n("h4",{staticClass:"title"},[e._v("代码块使用highlight的主题背景色")]),e._v(" "),n("markdown-editor",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{configs:e.configs3,"preview-class":"markdown-body"},domProps:{value:e.content},on:{input:function(t){e.content=t}}})],1)])},staticRenderFns:[]}},400:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c||t;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"markdown-editor"},[n("textarea")])}]}},403:function(e,t){}});