this["template"]["userEditTuitionCover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"cover_image\" class=\"page-header header-filter header-small\" data-parallax=\"true\" filter-color=\"dark\"\n     style=\"background-image: url('./public/images/tuitionCoverPics"
    + container.escapeExpression(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"path","hash":{},"data":data}) : helper)))
    + "');\">\n</div>";
},"useData":true});