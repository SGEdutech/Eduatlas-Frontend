this["template"] = this["template"] || {};
this["template"]["listgoCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-12 tuition-cards\" onclick=\"openTuitionPage('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\">\n    <article class=\"popular-listing-post\">\n        <div class=\"post-thumb\">\n            <img src=\"nav/img//10.jpg\" alt=\"img\" class=\"img-responsive\">\n            <div class=\"listing-info\">\n                 <h4><a href=\"javascript:void(0)\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></h4>\n            </div>\n            <div class=\"rating-area\">\n                <ul>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                </ul>\n                <span>(2.5/5)</span>\n            </div>\n            <!--<div class=\"option-block\">-->\n                <!--<ul>-->\n                    <!--<li>-->\n                        <!--<a href=\"javascript:void(0)\" class=\"bookmark\"></a>-->\n                    <!--</li>-->\n                    <!--<li>-->\n                        <!--<a href=\"javascript:void(0)\" data-toggle=\"modal\"-->\n                           <!--data-target=\"#post_listing_modal_two\">-->\n                            <!--<i class=\"fa fa-eye\" aria-hidden=\"true\"></i>-->\n                        <!--</a>-->\n                    <!--</li>-->\n                <!--</ul>-->\n            <!--</div>-->\n            <div class=\"overlay\"></div>\n        </div>\n        <div class=\"post-details\">\n            <div class=\"post-meta\">\n                <div class=\"location\">\n                    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                    <h5>"
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "</h5>\n                </div>\n                <!--<div class=\"tag\">-->\n                <!--<span>Ad</span>-->\n                <!--<i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>-->\n                <!--</div>-->\n            </div>\n            <div class=\"post-entry-block\">\n                <p class=\"post-entry\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n            <div class=\"post-footer\">\n                <div class=\"contact-no\">\n                    <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                    <h5>"
    + alias4(((helper = (helper = helpers.primaryNumber || (depth0 != null ? depth0.primaryNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryNumber","hash":{},"data":data}) : helper)))
    + "</h5>\n                </div>\n                <div class=\"schedule-info closed\">\n                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                    <h5>Opened Now</h5>\n                </div>\n            </div>\n        </div>\n    </article>\n</div>";
},"useData":true});