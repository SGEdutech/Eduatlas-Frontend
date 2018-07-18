this["template"]["userEditTuitionCategory"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\n    <input value=\""
    + container.escapeExpression(((helper = (helper = helpers.cate || (depth0 != null ? depth0.cate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cate","hash":{},"data":data}) : helper)))
    + "\" name=\"category\" class=\"form-control\"\n           id=\"category\">\n</div>";
},"useData":true});