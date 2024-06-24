Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (!['columns', 'container', 'datagrid'].includes(ctx.component.type)) { ;
__p += '\n<label\n    class="\n        ' +
((__t = ( ctx.label.className )) == null ? '' : __t) +
'\n        govuk-label\n        ';
 if (ctx.label.hidden) { ;
__p += ' govuk-!-display-none';
 } ;
__p += '\n    "\n    for="' +
((__t = ( ctx.instance.id )) == null ? '' : __t) +
'-' +
((__t = ( ctx.component.key )) == null ? '' : __t) +
'"\n>\n    ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'\n</label>\n';
 } else if (!ctx.label.hidden) { ;
__p += '\n<span class="govuk-body">\n    ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'\n</span>\n';
 } ;
__p += '\n';
return __p
}