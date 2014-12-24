ace.define("ace/theme/promo",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = false;
exports.cssClass = "ace-promo";
exports.cssText = ".ace-promo .ace_gutter {\
display: none\
}\
.ace-promo .ace_print-margin {\
display: none\
}\
.ace-promo {\
background-color: transparent;\
color: #fff\
}\
.ace-promo .ace_cursor {\
color: transparent\
}\
.ace-promo .ace_marker-layer .ace_selection {\
background: rgba(221, 240, 255, 0.20)\
}\
.ace-promo.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #141414;\
border-radius: 2px\
}\
.ace-promo .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-promo .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid rgba(255, 255, 255, 0.25)\
}\
.ace-promo .ace_marker-layer .ace_active-line {\
background: rgba(255, 255, 255, 0.031)\
}\
.ace-promo .ace_gutter-active-line {\
background-color: rgba(255, 255, 255, 0.031)\
}\
.ace-promo .ace_marker-layer .ace_selected-word {\
border: 1px solid rgba(221, 240, 255, 0.20)\
}\
.ace-promo .ace_invisible {\
color: rgba(255, 255, 255, 0.25)\
}\
.ace-promo .ace_keyword,\
.ace-promo .ace_meta {\
color: #CDA869\
}\
.ace-promo .ace_constant,\
.ace-promo .ace_constant.ace_character,\
.ace-promo .ace_constant.ace_character.ace_escape,\
.ace-promo .ace_constant.ace_other,\
.ace-promo .ace_heading,\
.ace-promo .ace_markup.ace_heading,\
.ace-promo .ace_support.ace_constant {\
color: #CF6A4C\
}\
.ace-promo .ace_invalid.ace_illegal {\
color: #F8F8F8;\
background-color: rgba(86, 45, 86, 0.75)\
}\
.ace-promo .ace_invalid.ace_deprecated {\
text-decoration: underline;\
font-style: italic;\
color: #D2A8A1\
}\
.ace-promo .ace_support {\
color: #9B859D\
}\
.ace-promo .ace_fold {\
background-color: #AC885B;\
border-color: #F8F8F8\
}\
.ace-promo .ace_support.ace_function {\
color: #DAD085\
}\
.ace-promo .ace_list,\
.ace-promo .ace_markup.ace_list,\
.ace-promo .ace_storage {\
color: #F9EE98\
}\
.ace-promo .ace_entity.ace_name.ace_function,\
.ace-promo .ace_meta.ace_tag,\
.ace-promo .ace_variable {\
color: #AC885B\
}\
.ace-promo .ace_string {\
color: #8F9D6A\
}\
.ace-promo .ace_string.ace_regexp {\
color: #E9C062\
}\
.ace-promo .ace_comment {\
font-style: italic;\
color: #5F5A60\
}\
.ace-promo .ace_variable {\
color: #7587A6\
}\
.ace-promo .ace_xml-pe {\
color: #494949\
}\
.ace-promo .ace_indent-guide {\
background: transparent\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});