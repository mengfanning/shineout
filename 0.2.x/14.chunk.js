webpackJsonp([14],{510:function(e,t,n){"use strict";t.a=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};var r=t[t.length-1],o=t.slice(0,-1);return function(){return o.reduceRight(function(e,t){return t(e)},r.apply(void 0,arguments))}},t.b=function e(t){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];if(r.length>=t.length)return t.apply(void 0,r);return function(){for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return e.apply(void 0,[t.bind.apply(t,[t].concat(r))].concat(o))}}},511:function(e,t,n){"use strict";t.a=function(e){return null===e||void 0===e||e!=e||(void 0!==e.length?0===e.length:!(e instanceof Date)&&"object"===(void 0===e?"undefined":r(e))&&0===Object.keys(e).length)};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},514:function(e,t,n){"use strict";t.a=function(e){return e&&e[0].toUpperCase()+e.slice(1)},t.b=function(e,t){if("string"==typeof e)return e.indexOf("{")<0?e:e.replace(/\\?\{([^{}]+)\}/g,function(e,n){return"\\"===e.charAt(0)?e.slice(1):null===t[n]||void 0===t[n]?"":t[n]});if("function"==typeof e){var n=e(t);return n===t&&"object"===(void 0===n?"undefined":r(n))&&(n=Object.assign({},t)),n}return""};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}},517:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"b",function(){return a});var r,o,a,u=n(1),i=(n.n(u),n(4));n.n(i);throw new Error('Cannot find module "create-react-context"')},519:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(4),u=(n.n(a),n(510)),i=n(117),s=n(523),c=n(517),l=n(524),f=n(525),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var p=Object(u.a)(Object(c.b)(["formDatum","disabled","onError"]),l.a,f.a);t.a=Object(u.b)(function(e,t){var n,a,u=e.delay,c=void 0===u?0:u;return p((a=n=function(e){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e)),r=e.formDatum,o=e.loopContext,a=e.name,u=e.defaultValue;return t.state={error:void 0,value:e.value||u},t.itemName=Object(i.b)(),t.handleChange=t.handleChange.bind(t),t.handleUpdate=t.handleUpdate.bind(t),t.handleDatumBind=t.handleDatumBind.bind(t),t.validate=t.validate.bind(t),r&&a&&(r.bind(a,t.handleUpdate,u,t.validate),t.state.value=r.get(a)),o&&o.bind(t.validate),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r["PureComponent"]),d(n,[{key:"componentWillUnmount",value:function(){var e=this.props,t=e.formDatum,n=e.name,r=e.loopContext;t&&n&&t.unbind(n,this.handleUpdate),r&&r.unbind(this.validate)}},{key:"getValue",value:function(){if(this.changeLocked)return this.state.value;var e=this.props,t=e.formDatum,n=e.name,r=e.value;return t&&n?t.get(n):void 0===r?this.state.value:r}},{key:"handleDatumBind",value:function(e){this.datum=e}},{key:"validate",value:function(e,t){var n=this,r=this.props,o=r.onError,a=r.name,u=r.formDatum,i=r.type;void 0===e&&(e=this.getValue());var c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(this.props.rules));return u&&a&&(c=c.concat(u.getRule(a)),t||(t=u.getValue())),this.datum&&(e=this.datum),Object(s.a)(e,t,c,i).then(function(){return o(n.itemName,null),n.setState({error:void 0}),!0},function(e){return o(n.itemName,e),n.setState({error:e}),e})}},{key:"change",value:function(e){var t,n=this.props,r=n.formDatum,o=n.name;r&&o?r.set(o,e):this.validate(e);for(var a=arguments.length,u=Array(a>1?a-1:0),i=1;i<a;i++)u[i-1]=arguments[i];this.props.onChange&&(t=this.props).onChange.apply(t,[e].concat(u))}},{key:"handleUpdate",value:function(e){this.setState({value:e}),this.validate(e)}},{key:"handleChange",value:function(e){for(var t=this,n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];0!==this.props.delay?(this.setState({value:e}),this.changeLocked=!0,this.changeTimer&&clearTimeout(this.changeTimer),this.changeTimer=setTimeout(function(){t.changeLocked=!1,t.change.apply(t,[e].concat(r))},this.props.delay)):this.change.apply(this,[e].concat(r))}},{key:"render",value:function(){var e=this.props,n=(e.formDatum,e.value,e.required,e.loopContext,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["formDatum","value","required","loopContext"]));return o.a.createElement(t,Object.assign({},n,{error:this.state.error,value:this.getValue(),onChange:this.handleChange,onDatumBind:this.handleDatumBind}))}}]),n}(),n.defaultProps={delay:c,onError:function(){},rules:[]},a))})},523:function(e,t,n){"use strict";var r=n(514),o=n(511),a=function(e){return function(t,n,r){Object(o.a)(t)?r(!0):e(t,n,r)}},u=function(e){return a(function(t,n,r){var o=e.min,a=e.max,u=e.message,i=parseFloat(t);r(!("number"==typeof o&&i<o||"number"==typeof a&&i>a)||new Error(u))})},i=function(e){return function(t,n,r){var a=e.min,u=e.max,i=e.message,s=new Error(i);if(Object(o.a)(t))r(!a||s);else{var c=t.length;r(!("number"==typeof a&&c<a||"number"==typeof u&&c>u)||s)}}},s=function(e){return function(t,n,r){var o=e.message;void 0===t||null===t||0===t.length?r(new Error(o)):r(!0)}},c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l={email:/^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,integer:/^[-+]?[0-9]*$/,number:/^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,tel:/^[\d\s ().-]+$/,hex:/^#[0-9a-f]{6}?$/i,rgb:new RegExp("^rgb\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*\\)$"),rgba:new RegExp("^rgba\\(\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*(0|[1-9]\\d?|1\\d\\d?|2[0-4]\\d|25[0-5])\\s*,\\s*((0.[1-9]*)|[01])\\s*\\)$"),hsv:new RegExp("^hsv\\(\\s*(0|[1-9]\\d?|[12]\\d\\d|3[0-5]\\d)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*,\\s*((0|[1-9]\\d?|100)%)\\s*\\)$"),url:new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$")},f=function(e,t){return a(function(n,r,o){var a=new Error(t);if("json"!==e){var u=l[e];u||(console.error("Type '"+e+"' not existed."),o(new Error("Validate failured. Type '"+e+"' not existed."))),u.test(n)?o(!0):o(a)}else!function(e){if("object"===(void 0===e?"undefined":c(e)))return!0;if(!/^[\],:{}\s]*$/.test(e.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return!1;try{return JSON.parse(e),!0}catch(e){return!1}}(n)?o(a):o(!0)})},d=function(e,t){return a(function(n,r,o){var a=t.message;("string"==typeof e?new RegExp(e):e).test(n)?o(!0):o(new Error(a))})};function p(e,t){if("function"==typeof e)return e;var n=e.type,o=void 0===n?t:n,a=e.message,c=e.regExp,l=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["type","message","regExp"]);if(l.message=Object(r.b)(a,l),l.required)return s(l);if(c)return d(c,l);if(void 0!==l.min||void 0!==l.max)return"number"===o||"integer"===o?u(l):i(l);if(o)return f(o,l.message);var p=new Error("Rule "+JSON.stringify(e)+" is not valid.");throw console.error(p),p}t.a=function e(t,n,r,o){return new Promise(function(a,u){var i=r.shift();i?p(i,o)(t,n,function(i){!0===i?e(t,n,r,o).then(a,u):u(i)}):a(!0)})}},524:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r,o,a=n(1);n.n(a),n(171);throw new Error('Cannot find module "create-react-context"')},525:function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r,o,a=n(1);n.n(a);throw new Error('Cannot find module "create-react-context"')},528:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(4),u=(n.n(a),n(48)),i=n.n(u),s=n(171),c=n(510),l=n(56),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.a=Object(c.b)(function(e,t){var n,a;return a=n=function(n){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={focus:e.autoFocus,errors:{}},t.handleBlur=t.handleBlur.bind(t),t.handleFocus=t.handleFocus.bind(t),t.handleError=t.handleError.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,r["Component"]),f(a,[{key:"handleBlur",value:function(){this.setState({focus:!1});var e=this.props.onBlur;e&&e()}},{key:"handleFocus",value:function(){this.setState({focus:!0});var e=this.props.onFocus;e&&e()}},{key:"handleError",value:function(e,t){this.state.errors[e]!==t&&(this.setState(Object(s.a)(function(n){t?n.errors[e]=t:delete n.errors[e]})),this.props.onError&&this.props.onError(e,t))}},{key:"renderHelp",value:function(e){var t=this.state.errors,n=this.props,r=n.tip,a=n.popover,u=["tip",a||"bottom-left"],i=function(e){var t=Object.keys(e);return 0!==t.length&&e[t[0]]}(t);return i&&a?(u.push("error"),o.a.createElement("div",{className:l.j.apply(void 0,u)},i.message)):r&&e?o.a.createElement("div",{className:Object(l.j)([].concat(u))},r):null}},{key:"render",value:function(){var n=this.props,r=(n.className,n.border),a=n.size,u=(n.tip,n.popover,n.width),s=n.style,c=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(n,["className","border","size","tip","popover","width","style"]),f=this.state,d=f.errors,p=f.focus,h=e.tag||"label",b=Object.assign({width:u},s),y=i()(Object(l.j)("_",p&&"focus",c.disabled&&"disabled",e.isGroup&&"group",a,b.width&&"inline",!r&&"no-border",e.noPadding&&"no-padding",e.overflow&&"overflow-"+e.overflow,Object.keys(d).length>0&&"invalid"),Object(l.c)(e.isGroup&&"group"),e.className,this.props.className);return o.a.createElement(h,{className:y,style:b},o.a.createElement(t,Object.assign({},c,{size:a,onError:this.handleError,onFocus:this.handleFocus,onBlur:this.handleBlur})),this.renderHelp(p))}}]),a}(),n.defaultProps={border:!0,style:{}},a})},530:function(e,t,n){"use strict";var r=n(171),o=["delay","onDatumBind","rules"];t.a=function(e){return Object(r.a)(e,function(e){o.forEach(function(t){return delete e[t]})})}},542:function(e,t,n){"use strict";var r=n(510),o=n(519),a=n(528),u=n(1),i=n.n(u),s=(n(4),n(56)),c=n(530),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={height:0},n.bindShadow=n.bindShadow.bind(n),n.handleChange=n.handleChange.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u["PureComponent"]),l(t,[{key:"bindShadow",value:function(e){this.shadow=e}},{key:"handleChange",value:function(e){if(this.props.onChange(e.target.value),this.props.autosize){this.shadow.value=e.target.value;var t=this.shadow.scrollHeight;this.setState({height:t})}}},{key:"render",value:function(){var e=this.props,t=e.autosize,n=(e.onChange,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["autosize","onChange"])),r=this.state.height||"auto",o=t?Object(s.j)("auto-size"):"",a=[i.a.createElement("textarea",Object.assign({},Object(c.a)(n),{key:"t",className:o,style:{height:r},onChange:this.handleChange}))];return t&&a.push(i.a.createElement("textarea",{key:"s",ref:this.bindShadow,className:Object(s.j)("shadow"),rows:n.rows,defaultValue:n.value})),a}}]),t}();f.defaultProps={value:"",rows:4};var d=f,p=Object(r.a)(Object(o.a)({delay:400}),Object(a.a)({noPadding:!0,overflow:"auto"}));t.a=p(d)},693:function(e,t){e.exports="# Textarea *多行文本框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| autosize | bool | false | 高度是否随内容自动变化 |\n| defaultValue | string \\| number | | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(d) | | 值改变回调函数 |\n| placeholder | string | | 同原生 input 标签的 placeholder |\n| popover | string | | 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| rows | number | 4 | 最小行高，同原生 textarea rows 属性 |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string \\| ReactElement | | 提示信息 |\n| value | string \\| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n"},694:function(e,t){e.exports=""},695:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(542),o=n(1),a=n.n(o);t.default=function(){return a.a.createElement(r.a,{rows:6,placeholder:"input something"})}},696:function(e,t){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nexport default function () {\n  return (\n    <Textarea rows={6} placeholder=\"input something\" />\n  )\n}\n"},697:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(542),o=n(1),a=n.n(o);t.default=function(){return a.a.createElement(r.a,{rows:2,autosize:!0,style:{maxHeight:200},placeholder:"autosize"})}},698:function(e,t){e.exports="/**\n * cn - 自适应高度\n *    -- autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 style.maxHeight 即可\n * en - Autosize\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nexport default function () {\n  return (\n    <Textarea rows={2} autosize style={{ maxHeight: 200 }} placeholder=\"autosize\" />\n  )\n}\n"},897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n.n(r),a=n(119),u=n(118),i=n(78),s=n(693),c=n.n(s),l=n(694),f=n.n(l),d=Object(i.a)(c.a,f.a),p=[{title:Object(i.a)("基本用法","Base"),component:n(695).default,rawText:n(696)},{title:Object(i.a)("自适应高度 \n autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 style.maxHeight 即可","Autosize"),component:n(697).default,rawText:n(698)}];t.default=Object(a.a)(function(e){return o.a.createElement(u.b,Object.assign({},e,{codes:void 0,source:d,examples:p}))})}});