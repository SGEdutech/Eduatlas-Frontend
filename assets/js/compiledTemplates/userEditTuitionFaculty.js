this["template"]["userEditTuitionFaculty"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-4\" id=\"faculty"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\r\n        <div class=\"card card-nav-tabs\">\r\n            <span style=\"position: absolute;left: 92%;top: -6%;\">\r\n            <!-- send (name of the faculty , id of card) as arguments for function deleteFaculty()-->\r\n            <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\r\n                    onclick=\"deleteFaculty('"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "','faculty"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "')\">\r\n                <i class=\"material-icons\">\r\n                    delete\r\n                </i>\r\n            </button>\r\n            </span>\r\n            <img class=\"card-img-bottom\" src=\"images/"
    + alias4(((helper = (helper = helpers.img_path || (depth0 != null ? depth0.img_path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_path","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\r\n            <div class=\"card-body\">\r\n                <div class=\"card-title\">\r\n                    "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n                </div>\r\n                <div class=\"card-subtitle mb-2 text-muted\">\r\n                    "
    + alias4(((helper = (helper = helpers.qualification || (depth0 != null ? depth0.qualification : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qualification","hash":{},"data":data}) : helper)))
    + "\r\n                </div>\r\n                <p class=\"card-text\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.key : depth0),{"name":"list","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});