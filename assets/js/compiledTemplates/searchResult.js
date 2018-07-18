this["template"]["searchResult"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"test\"><a href=\"#\">"
    + container.escapeExpression(((helper = (helper = helpers.result || (depth0 != null ? depth0.result : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"result","hash":{},"data":data}) : helper)))
    + "</a></div>";
},"useData":true});