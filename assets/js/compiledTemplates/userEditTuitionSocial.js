this["template"]["userEditTuitionSocial"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"form-group\">\n    <label for=\"facebookLink\" class=\"\">Facebook</label>\n    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.facebook || (depth0 != null ? depth0.facebook : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facebook","hash":{},"data":data}) : helper)))
    + "\" id=\"facebookLink\"\n           name=\"fbLink\">\n</div>\n<div class=\"form-group\">\n    <label for=\"instaLink\">Instagram</label>\n    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.instagram || (depth0 != null ? depth0.instagram : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instagram","hash":{},"data":data}) : helper)))
    + "\" id=\"instaLink\"\n           name=\"instaLink\">\n</div>\n<div class=\"form-group\">\n    <label for=\"youtubeLink\">Youtube</label>\n    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.youtube || (depth0 != null ? depth0.youtube : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"youtube","hash":{},"data":data}) : helper)))
    + "\" id=\"youtubeLink\"\n           name=\"youtubeLink\">\n</div>";
},"useData":true});