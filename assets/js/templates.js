this["template"] = this["template"] || {};
this["template"]["dashboardReviews"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\" id=\""
    + alias4(((helper = (helper = helpers.reviewId || (depth0 != null ? depth0.reviewId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewId","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n        <h6 class=\"card-subtitle mb-2 text-muted\">"
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data}) : helper)))
    + "/5</h6>\n        <p class=\"card-text\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n        <button class=\"btn btn-danger btn-round\" onclick=\"deleteReview('"
    + alias4(((helper = (helper = helpers.userId || (depth0 != null ? depth0.userId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"userId","hash":{},"data":data}) : helper)))
    + "','"
    + alias4(((helper = (helper = helpers.tuitionId || (depth0 != null ? depth0.tuitionId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tuitionId","hash":{},"data":data}) : helper)))
    + "','"
    + alias4(((helper = (helper = helpers.reviewId || (depth0 != null ? depth0.reviewId : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"reviewId","hash":{},"data":data}) : helper)))
    + "')\">Delete</button>\n    </div>\n</div>";
},"useData":true});
this["template"]["galleryImg"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"image-container col-md-4 p-1\">\n    <a href=\"images/"
    + alias4(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
    + "\" data-lightbox=\"gallery\">\n        <img class=\"img-thumbnail\" src=\"images/"
    + alias4(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"path","hash":{},"data":data}) : helper)))
    + "\">\n    </a>\n</div>";
},"useData":true});
this["template"]["listgoCard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                        <li>\n                            <div class=\"tag\">\n                                <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\n                            </div>\n                        </li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"schedule-info closed\">\n                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                    <h6>Open Now</h6>\n                </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"popular-listing-post\">\n    <div class=\" tuition-cards\" onclick=\"openTuitionPage('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\">\n        <div class=\"post-thumb\">\n            <img src=\"/assets/img/fourgirls.jpeg\" alt=\"img\" class=\"img-responsive\">\n            <div class=\"listing-info\">\n                <h4 class=\"font-weight-bold\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n            </div>\n            <div class=\"rating-area\">\n                <ul>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                </ul>\n                <span>(2.5/5)</span>\n            </div>\n            <div class=\"option-block\">\n                <ul>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.claimedBy : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <!-- <li>\n                         <a href=\"javascript:void(0)\" data-toggle=\"modal\"\n                            data-target=\"#post_listing_modal_two\">\n                             <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                         </a>\n                     </li>-->\n                </ul>\n            </div>\n            <div class=\"overlay\"></div>\n        </div>\n    </div>\n    <div class=\"post-details\">\n        <div class=\" tuition-cards\" onclick=\"openTuitionPage('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\">\n            <div class=\"post-meta\">\n                <div class=\"location\">\n                    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                    <div class=\"col-12\">"
    + alias4(((helper = (helper = helpers.addressLine1 || (depth0 != null ? depth0.addressLine1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine1","hash":{},"data":data}) : helper)))
    + ","
    + alias4(((helper = (helper = helpers.addressLine2 || (depth0 != null ? depth0.addressLine2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine2","hash":{},"data":data}) : helper)))
    + ","
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ","
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "</div>\n                </div>\n            </div>\n            <div class=\"post-meta\">\n                <div class=\"location\">\n                    <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                    <h5>"
    + alias4(((helper = (helper = helpers.primaryNumber || (depth0 != null ? depth0.primaryNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryNumber","hash":{},"data":data}) : helper)))
    + "</h5>\n                </div>\n            </div>\n            <!-- <div class=\"post-meta\">\n                <div class=\"location\">\n                    <i class=\"material-icons\">\n                        email\n                    </i>\n                    <h5>"
    + alias4(((helper = (helper = helpers.primaryEmail || (depth0 != null ? depth0.primaryEmail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryEmail","hash":{},"data":data}) : helper)))
    + "</h5>\n                </div>\n            </div>-->\n            <!--<div class=\"post-entry-block\">\n                <p class=\"post-entry\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>-->\n        </div>\n        <div class=\"post-footer\">\n            <div class=\"contact-no\">\n                <!--<i class=\"material-icons\">\n                    share\n                </i>-->\n                <i class=\"fa fa-bookmark\" onclick=\"bookmark('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\" style=\"cursor: pointer\"></i>\n            </div>\n            <!-- <span class=\"contact-no\">\n                 <a onclick=\"bookmark()\" class=\"bookmark\"></a>\n             </span>-->\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.openedNow : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n    </div>\n</article>";
},"useData":true});
this["template"]["listgoCardBookmark"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                        <li>\n                            <div class=\"tag\">\n                                <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\n                            </div>\n                        </li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"popular-listing-post\" id=\""
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\" tuition-cards\" onclick=\"openTuitionPage('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\">\n        <div class=\"post-thumb\">\n            <img src=\"/assets/img/fourgirls.jpeg\" alt=\"img\" class=\"img-responsive\">\n            <div class=\"listing-info\">\n                <h4 class=\"font-weight-bold\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n            </div>\n            <div class=\"rating-area\">\n                <ul>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                </ul>\n                <span>(2.5/5)</span>\n            </div>\n            <div class=\"option-block\">\n                <ul>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.claimedBy : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    <!-- <li>\n                         <a href=\"javascript:void(0)\" data-toggle=\"modal\"\n                            data-target=\"#post_listing_modal_two\">\n                             <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                         </a>\n                     </li>-->\n                </ul>\n            </div>\n            <div class=\"overlay\"></div>\n        </div>\n    </div>\n    <div class=\"post-details\">\n        <div class=\" tuition-cards\" onclick=\"openTuitionPage('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\">\n            <div class=\"post-meta\">\n                <div class=\"location\">\n                    <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                    <h5>"
    + alias4(((helper = (helper = helpers.primaryNumber || (depth0 != null ? depth0.primaryNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryNumber","hash":{},"data":data}) : helper)))
    + "</h5>\n                </div>\n            </div>\n            <!-- <div class=\"post-meta\">\n                <div class=\"location\">\n                    <i class=\"material-icons\">\n                        email\n                    </i>\n                    <h5>"
    + alias4(((helper = (helper = helpers.primaryEmail || (depth0 != null ? depth0.primaryEmail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryEmail","hash":{},"data":data}) : helper)))
    + "</h5>\n                </div>\n            </div>-->\n            <!--<div class=\"post-entry-block\">\n                <p class=\"post-entry\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>-->\n        </div>\n        <div class=\"post-footer\">\n            <!-- <span class=\"contact-no\">\n                 <a onclick=\"bookmark()\" class=\"bookmark\"></a>\n             </span>-->\n            <div class=\"schedule-info closed\">\n                <div class=\"row justify-content-around mb-md-4\">\n                    <button class=\"btn btn-info\" onclick=\"removeBookmarks('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\">remove</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>";
},"useData":true});
this["template"]["newCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-12\">\n                        <!-- Restaurant Item -->\n                        <div class=\"item\">\n                            <!-- Item's image -->\n                            <img class=\"img-responsive\" src=\"https://lorempixel.com/200/200/food/1/\" alt=\"\">\n                            <!-- Item details -->\n                            <div class=\"item-dtls\">\n                                <!-- product title -->\n                                <h4>\n                                  <a href=\"#\"> <i class=\"fas fa-address-card aicon\" style=\"color:#337ab7;\"></i></a>\n                                    <a href=\"#\" class=\"content\">"
    + alias4(((helper = (helper = helpers.Address || (depth0 != null ? depth0.Address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Address","hash":{},"data":data}) : helper)))
    + " </a></h4>\n                                    <h4>\n                                    <a href=\"#\"><i class=\"fa fa-envelope aicon\" aria-hidden=\"true\" style=\"color:#337ab7;\"></i></a>\n                                     <a href=\"#\" class=\"content\">"
    + alias4(((helper = (helper = helpers.Email || (depth0 != null ? depth0.Email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Email","hash":{},"data":data}) : helper)))
    + "</a></h4>\n                                     </a>\n                                   <a href=\"#\"><i class=\"fa fa-mobile aicon\" aria-hidden=\"true\" style=\"color:#337ab7;\"></i></a>\n                                    <a href=\"#\" class=\"content\">"
    + alias4(((helper = (helper = helpers.Phone || (depth0 != null ? depth0.Phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Phone","hash":{},"data":data}) : helper)))
    + "</a></h4>\n                                <!-- price -->\n                                <span class=\"price lblue\" class=\"content\">2.5</span>\n                                <i class=\"fa fa-star\" aria-hidden=\"true\" style=\"color:#337ab7;\"></i>\n                                <i class=\"fa fa-star\" aria-hidden=\"true\" style=\"color:#337ab7;\"></i>                           \n                               <i class=\"fa fa-star-half-o\" aria-hidden=\"true\" style=\"color:#337ab7;\"></i>\n                            </div>\n                            <!-- add to cart btn -->\n                            <div class=\"ecom bg-lblue\">\n                                <a class=\"btn\" href=\"#\">Details</a>\n                            </div>\n                        </div>\n                    </div>   ";
},"useData":true});
this["template"]["paginationT"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"page-item\">\n    <a class=\"page-link\"\n       href=\"searchdetails.html?page="
    + alias4(((helper = (helper = helpers.pageM1 || (depth0 != null ? depth0.pageM1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageM1","hash":{},"data":data}) : helper)))
    + "&items="
    + alias4(((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"items","hash":{},"data":data}) : helper)))
    + "&c="
    + alias4(((helper = (helper = helpers.c || (depth0 != null ? depth0.c : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c","hash":{},"data":data}) : helper)))
    + "&state="
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "&city="
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "&name="
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "&soryBy="
    + alias4(((helper = (helper = helpers.sortBy || (depth0 != null ? depth0.sortBy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sortBy","hash":{},"data":data}) : helper)))
    + "\"\n       tabindex=\"-1\">Previous</a>\n</li>\n<li class=\"page-item\"><a class=\"page-link\"\n                         href=\"searchdetails.html?page="
    + alias4(((helper = (helper = helpers.pageM1 || (depth0 != null ? depth0.pageM1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageM1","hash":{},"data":data}) : helper)))
    + "&items="
    + alias4(((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"items","hash":{},"data":data}) : helper)))
    + "&c="
    + alias4(((helper = (helper = helpers.c || (depth0 != null ? depth0.c : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c","hash":{},"data":data}) : helper)))
    + "&state="
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "&city="
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "&name="
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "&soryBy="
    + alias4(((helper = (helper = helpers.sortBy || (depth0 != null ? depth0.sortBy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sortBy","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.pageM1 || (depth0 != null ? depth0.pageM1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageM1","hash":{},"data":data}) : helper)))
    + "</a>\n</li>\n<li class=\"page-item active\">\n    <a class=\"page-link\" href=\"#\">"
    + alias4(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page","hash":{},"data":data}) : helper)))
    + "<span class=\"sr-only\">(current)</span></a>\n</li>\n<li class=\"page-item\"><a class=\"page-link\"\n                         href=\"searchdetails.html?page="
    + alias4(((helper = (helper = helpers.pageP1 || (depth0 != null ? depth0.pageP1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageP1","hash":{},"data":data}) : helper)))
    + "&items="
    + alias4(((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"items","hash":{},"data":data}) : helper)))
    + "&c="
    + alias4(((helper = (helper = helpers.c || (depth0 != null ? depth0.c : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c","hash":{},"data":data}) : helper)))
    + "&state="
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "&city="
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "&name="
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "&soryBy="
    + alias4(((helper = (helper = helpers.sortBy || (depth0 != null ? depth0.sortBy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sortBy","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.pageP1 || (depth0 != null ? depth0.pageP1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageP1","hash":{},"data":data}) : helper)))
    + "</a>\n</li>\n<li class=\"page-item\">\n    <a class=\"page-link\"\n       href=\"searchdetails.html?page="
    + alias4(((helper = (helper = helpers.pageP1 || (depth0 != null ? depth0.pageP1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pageP1","hash":{},"data":data}) : helper)))
    + "&items="
    + alias4(((helper = (helper = helpers.items || (depth0 != null ? depth0.items : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"items","hash":{},"data":data}) : helper)))
    + "&c="
    + alias4(((helper = (helper = helpers.c || (depth0 != null ? depth0.c : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"c","hash":{},"data":data}) : helper)))
    + "&state="
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "&city="
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "&name="
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "&soryBy="
    + alias4(((helper = (helper = helpers.sortBy || (depth0 != null ? depth0.sortBy : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sortBy","hash":{},"data":data}) : helper)))
    + "\">Next</a>\n</li>";
},"useData":true});
this["template"]["searchPageCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-lg-3 col-md-4\">\n    <article class=\"popular-listing-post\">\n        <div class=\"post-thumb\">\n            <img src=\"nav/img/9.jpg\" alt=\"img\" class=\"img-responsive\">\n            <div class=\"listing-info\">\n                <!-- <h4><a href=\"javascript:void(0)\">Hotel California</a></h4> -->\n                <p><i class=\"fa fa-bed\" aria-hidden=\"true\"></i>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n            <div class=\"rating-area\">\n                <ul>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                    <li><i class=\"fa fa-star\" aria-hidden=\"true\"></i></li>\n                </ul>\n                <span>(5.0/4)</span>\n            </div>\n            <div class=\"option-block\">\n                <ul>\n                    <li>\n                        <a href=\"javascript:void(0)\" class=\"bookmark\">\n\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"javascript:void(0)\" data-lat=\"40.715877,-73.993959\" data-toggle=\"modal\" data-target=\"#post_listing_modal_one\">\n                            <i class=\"fa fa-eye\" aria-hidden=\"true\"></i>\n                        </a>\n                    </li>\n                </ul>\n            </div>\n            <div class=\"overlay\"></div>\n        </div>\n        <div class=\"post-details\">\n            <div class=\"post-meta post-meta-search\">\n                <div class=\"location\">\n                    <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n                    <h5>"
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "</h5>\n                </div>\n                <div class=\"tag\">\n                    <span>Ad</span>\n                    <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\n                </div>\n            </div>\n            <div class=\"post-entry-block post-entry-block-search\">\n                <div class=\"post-author\">\n                    <img src=\"nav/img/1.jpg\" alt=\"img\" class=\"img-responsive\">\n                </div>\n                <p class=\"post-entry\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n            <div class=\"post-footer post-footer-search\">\n                <div class=\"contact-no\">\n                    <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                    <h5>"
    + alias4(((helper = (helper = helpers.primaryNumber || (depth0 != null ? depth0.primaryNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryNumber","hash":{},"data":data}) : helper)))
    + "</h5>\n                </div>\n                <div class=\"schedule-info closed\">\n                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                    <h5>Opened Now</h5>\n                </div>\n            </div>\n        </div>\n    </article>\n</div>";
},"useData":true});
this["template"]["searchResult"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"/TuitionDetails2.0.html?_id="
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" style=\"display: block\">\n    <div class=\"test\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div>\n</a>";
},"useData":true});
this["template"]["showSearchResult"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"complexSearchContainer\" class=\"card mb-0\">\n    <div class=\"card-body\">\n        <p class=\"m-0\">Showing Results for: <span class=\"font-weight-bold\">&nbsp State-</span>\""
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "\" <span class=\"font-weight-bold\">&nbsp City-</span>\""
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "\"<span class=\"font-weight-bold\">&nbsp Query-</span>\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\"</p>\n    </div>\n</div>";
},"useData":true});
this["template"]["smoothCard"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                        <span class=\"badge badge-info\">verified</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                    <p class=\"font-weight-bold text-success\">Open Now</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-4\">\n    <div class=\"card newFont\">\n        <div class=\" tuition-cards\" onclick=\"openTuitionPage('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\">\n            <div class=\"card p-0 m-0 rounded-0 rounded-top\"\n                 style=\"overflow: hidden;text-overflow: ellipsis\">\n                <div class=\"rounded-top\"\n                     style=\"position: absolute; height: 192px;width: 100%;background-color: rgba(0,0,0,0.5)\">\n                </div>\n                <img class=\"card-img-top\" src=\"/assets/img/fourgirls.jpeg\" alt=\"Tuition Image\"\n                     style=\"height: 192px;width: 100%;\">\n                <div class=\"card-img-overlay\">\n                    <h4 class=\"card-title text-white\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n                    <span class=\"badge badge-info\">"
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data}) : helper)))
    + "/5</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.claimedBy : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n            </div>\n        </div>\n        <div class=\"card-body pb-0\">\n            <div class=\"row\">\n                <div class=\"col-1 px-0\">\n                    <i class=\"material-icons md-18\" style=\"color: #00bcd4\">\n                        location_on\n                    </i>\n                </div>\n                <div class=\"col-11\">\n                    <p id=\"address\">"
    + alias4(((helper = (helper = helpers.addressLine1 || (depth0 != null ? depth0.addressLine1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine1","hash":{},"data":data}) : helper)))
    + ","
    + alias4(((helper = (helper = helpers.addressLine2 || (depth0 != null ? depth0.addressLine2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine2","hash":{},"data":data}) : helper)))
    + ","
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ","
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-1 px-0\">\n                    <i class=\"material-icons md-18\" style=\"color: #00bcd4\">\n                        phone\n                    </i>\n                </div>\n                <div class=\"col-11\">\n                    <p id=\"phone\">"
    + alias4(((helper = (helper = helpers.primaryNumber || (depth0 != null ? depth0.primaryNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryNumber","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-1 px-0\">\n                    <i class=\"material-icons md-18\" style=\"color: #00bcd4\">\n                        email\n                    </i>\n                </div>\n                <div class=\"col-11\">\n                    <p id=\"email\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"pb-0 pt-2 rounded-0 card-footer justify-content-center\">\n            <div class=\"col\">\n                <!--<i class=\"material-icons\" style=\"cursor: pointer\">\n                    bookmark\n                </i>-->\n                <i class=\"material-icons\" style=\"cursor: pointer\" onclick=\"bookmark('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\">\n                    bookmark_border\n                </i>\n            </div>\n            <div class=\"col-6 text-center\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.openedNow : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n            <div class=\"col\">\n                <i class=\"material-icons\">\n                    share\n                </i>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["template"]["smoothCardHomePage"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "                    <span class=\"badge badge-info\">verified</span>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <p class=\"font-weight-bold text-success\">Open Now</p>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card newFont\">\n    <div class=\" tuition-cards\" onclick=\"openTuitionPage('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\">\n        <div class=\"card p-0 m-0 rounded-0 rounded-top\"\n             style=\"overflow: hidden;text-overflow: ellipsis\">\n            <div class=\"rounded-top\"\n                 style=\"position: absolute; height: 192px;width: 100%;background-color: rgba(0,0,0,0.5)\">\n            </div>\n            <img class=\"card-img-top\" src=\"/assets/img/fourgirls.jpeg\" alt=\"Tuition Image\"\n                 style=\"height: 192px;width: 100%;\">\n            <div class=\"card-img-overlay\">\n                <h4 class=\"card-title text-white\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n                <span class=\"badge badge-info\">"
    + alias4(((helper = (helper = helpers.averageRating || (depth0 != null ? depth0.averageRating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"averageRating","hash":{},"data":data}) : helper)))
    + "/5</span>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.claimedBy : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </div>\n        </div>\n    </div>\n    <div class=\"card-body pb-0\">\n        <div class=\"row\">\n            <div class=\"col-1 px-0\">\n                <i class=\"material-icons md-18\" style=\"color: #00bcd4\">\n                    location_on\n                </i>\n            </div>\n            <div class=\"col-11\">\n                <p id=\"address\">"
    + alias4(((helper = (helper = helpers.addressLine1 || (depth0 != null ? depth0.addressLine1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine1","hash":{},"data":data}) : helper)))
    + ","
    + alias4(((helper = (helper = helpers.addressLine2 || (depth0 != null ? depth0.addressLine2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine2","hash":{},"data":data}) : helper)))
    + ","
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ","
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-1 px-0\">\n                <i class=\"material-icons md-18\" style=\"color: #00bcd4\">\n                    phone\n                </i>\n            </div>\n            <div class=\"col-11\">\n                <p id=\"phone\">"
    + alias4(((helper = (helper = helpers.primaryNumber || (depth0 != null ? depth0.primaryNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryNumber","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-1 px-0\">\n                <i class=\"material-icons md-18\" style=\"color: #00bcd4\">\n                    email\n                </i>\n            </div>\n            <div class=\"col-11\">\n                <p id=\"email\">"
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"pb-0 pt-2 rounded-0 card-footer justify-content-center\">\n        <div class=\"col\">\n            <!--<i class=\"material-icons\" style=\"cursor: pointer\">\n                bookmark\n            </i>-->\n            <i class=\"material-icons\" style=\"cursor: pointer\" onclick=\"bookmark('"
    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
    + "')\">\n                bookmark_border\n            </i>\n        </div>\n        <div class=\"col-6 text-center\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.openedNow : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </div>\n        <div class=\"col\">\n            <i class=\"material-icons\">\n                share\n            </i>\n        </div>\n    </div>\n</div>";
},"useData":true});
this["template"]["tuitionCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"p-2\">\n    <div class=\"\">\n        <div class=\"card\" style=\"\">\n            <!--put src = \"assets/img/"
    + alias4(((helper = (helper = helpers.coverPic || (depth0 != null ? depth0.coverPic : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"coverPic","hash":{},"data":data}) : helper)))
    + "\" -->\n            <img class=\"card-img tinted\" src=\"assets/img/tuition2.jpg\" alt=\"Card image cap\">\n            <div class=\"card-img-overlay color-white m-0 p-3\">\n                <div class=\"row\">\n                    <div class=\"col-9\">\n                        <h4 class=\"card-title color-white m-0 p-0\">"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</h4>\n                    </div>\n                    <div class=\"col-2\">\n                        <!-- todo - uncomment when verification data there -->\n                        <!--<button class=\"btn btn-info btn-fab btn-fab-mini btn-round position-absolute\">\n                            <i class=\"material-icons\">\n                                verified_user\n                            </i>\n                        </button>-->\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-8\">\n                        <p class=\"card-text m-0 color-white\">"
    + alias4(((helper = (helper = helpers.Category || (depth0 != null ? depth0.Category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Category","hash":{},"data":data}) : helper)))
    + "</p>\n                    </div>\n                    <div class=\"col-3\">\n                        <!--<span class=\"badge badge-info\">"
    + alias4(((helper = (helper = helpers.ifAd || (depth0 != null ? depth0.ifAd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ifAd","hash":{},"data":data}) : helper)))
    + "</span>-->\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"card-body px-4 position-relative\">\n                <!-- todo uncomment when rating available-->\n                <button class=\"btn btn-warning btn-fab btn-round position-absolute moveUp\">\n                    "
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data}) : helper)))
    + "\n                </button>\n                <div class=\"row\">\n                    <i class=\"material-icons d-inline-flex icon-small\">\n                        place\n                    </i>\n                    <p class=\"card-text text m-0 \">"
    + alias4(((helper = (helper = helpers.Address || (depth0 != null ? depth0.Address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Address","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n                <div class=\"row\">\n                    <i class=\"material-icons d-inline-flex icon-small\">\n                        local_phone\n                    </i>\n                    <p class=\"card-text m-0 row\">"
    + alias4(((helper = (helper = helpers.Phone || (depth0 != null ? depth0.Phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Phone","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n\n                <div class=\"row\">\n                    <i class=\"material-icons d-inline-flex icon-small\">\n                        alternate_email\n                    </i>\n                    <p class=\"card-text m-0 row\">"
    + alias4(((helper = (helper = helpers.Email || (depth0 != null ? depth0.Email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Email","hash":{},"data":data}) : helper)))
    + " </p>\n                </div>\n\n\n                <a href=\"                            "
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-info\">Details</a>\n            </div>\n\n        </div>\n    </div>\n</div>";
},"useData":true});
this["template"]["tuitionCardCol4"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-md-4\">\n    <div class=\"card\" style=\"\">\n        <!--put src = \"assets/img/"
    + alias4(((helper = (helper = helpers.coverPic || (depth0 != null ? depth0.coverPic : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"coverPic","hash":{},"data":data}) : helper)))
    + "\" -->\n        <img class=\"card-img tinted\" src=\"assets/img/tuition2.jpg\" alt=\"Card image cap\">\n        <div class=\"card-img-overlay color-white m-0 p-3\">\n            <div class=\"row\">\n                <div class=\"col-9\">\n                    <h4 class=\"card-title color-white m-0 p-0\">"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</h4>\n                </div>\n                <div class=\"col-2\">\n                    <!-- todo - uncomment when verification data there -->\n                    <!--<button class=\"btn btn-info btn-fab btn-fab-mini btn-round position-absolute\">\n                        <i class=\"material-icons\">\n                            verified_user\n                        </i>\n                    </button>-->\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-8\">\n                    <p class=\"card-text m-0 color-white\">"
    + alias4(((helper = (helper = helpers.Category || (depth0 != null ? depth0.Category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Category","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n                <div class=\"col-3\">\n                    <!--<span class=\"badge badge-info\">"
    + alias4(((helper = (helper = helpers.ifAd || (depth0 != null ? depth0.ifAd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ifAd","hash":{},"data":data}) : helper)))
    + "</span>-->\n                </div>\n\n            </div>\n        </div>\n        <div class=\"card-body px-4 position-relative\">\n            <!-- todo uncomment when rating available-->\n            <button class=\"btn btn-warning btn-fab btn-round position-absolute moveUp\">\n                "
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data}) : helper)))
    + "\n            </button>\n            <div class=\"row\">\n                <i class=\"material-icons d-inline-flex icon-small\">\n                    place\n                </i>\n                <p class=\"card-text text m-0 \">"
    + alias4(((helper = (helper = helpers.Address || (depth0 != null ? depth0.Address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Address","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n            <div class=\"row\">\n                <i class=\"material-icons d-inline-flex icon-small\">\n                    local_phone\n                </i>\n                <p class=\"card-text m-0 row\">"
    + alias4(((helper = (helper = helpers.Phone || (depth0 != null ? depth0.Phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Phone","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n\n            <div class=\"row\">\n                <i class=\"material-icons d-inline-flex icon-small\">\n                    alternate_email\n                </i>\n                <p class=\"card-text m-0 row\">"
    + alias4(((helper = (helper = helpers.Email || (depth0 != null ? depth0.Email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Email","hash":{},"data":data}) : helper)))
    + " </p>\n            </div>\n\n\n            <a href=\"TuitionDetails2.0.html?_id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-info\">Details</a>\n        </div>\n\n    </div>\n</div>";
},"useData":true});
this["template"]["tuitionCategory"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <span class=\"badge badge-success\">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["template"]["tuitionCourses"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-4\" id=\"course"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"card\">\n            <span style=\"position: absolute;left: 92%;top: -6%;\">\n                <!-- send title of course and id of card in function deleteCourse()-->\n            </span>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n                <h6 class=\" mb-2 text-muted\">Standard/Age Group</h6>\n                <h6 class=\"card-text\">"
    + alias4(((helper = (helper = helpers.ageGroup || (depth0 != null ? depth0.ageGroup : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ageGroup","hash":{},"data":data}) : helper)))
    + "</h6>\n                <hr>\n                <h6 class=\" mb-2 text-muted\">Duration</h6>\n                <h6 class=\"card-text\">"
    + alias4(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data}) : helper)))
    + "</h6>\n                <hr>\n                <h6 class=\" mb-2 text-muted\">Fee</h6>\n                <h6 class=\"card-text\">INR "
    + alias4(((helper = (helper = helpers.fee || (depth0 != null ? depth0.fee : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fee","hash":{},"data":data}) : helper)))
    + "</h6>\n                <hr>\n            </div>\n            <h4 class=\"card-header card-header-info\">Next Batch - "
    + alias4(((helper = (helper = helpers.nextBatch || (depth0 != null ? depth0.nextBatch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextBatch","hash":{},"data":data}) : helper)))
    + "</h4>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.key : depth0),{"name":"list","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["template"]["tuitionFacility"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div>\n        <i class=\"material-icons facility-icon\">check_circle_outline</i>\n        <span>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</span>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.facilities : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["template"]["tuitionFaculty"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-4\" id=\"faculty"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"card card-nav-tabs\">\n            <span style=\"position: absolute;left: 92%;top: -6%;\">\n            <!-- send (name of the faculty , id of card) as arguments for function deleteFaculty()-->\n            </span>\n            <img class=\"card-img-bottom\" src=\"images/"
    + alias4(((helper = (helper = helpers.img_path || (depth0 != null ? depth0.img_path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_path","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">\n                    "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <div class=\"card-subtitle mb-2 text-muted\">\n                    "
    + alias4(((helper = (helper = helpers.qualification || (depth0 != null ? depth0.qualification : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qualification","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <p class=\"card-text\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.key : depth0),{"name":"list","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["template"]["tuitionLinks"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\""
    + alias4(((helper = (helper = helpers.facebook || (depth0 != null ? depth0.facebook : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"facebook","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\"\n   class=\"btn btn-just-icon btn-round btn-facebook social-icons\">\n    <i class=\"fa fa-facebook\"> </i>\n</a>\n<a href=\""
    + alias4(((helper = (helper = helpers.youtube || (depth0 != null ? depth0.youtube : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"youtube","hash":{},"data":data}) : helper)))
    + "\"\n   class=\"btn btn-just-icon btn-round btn-youtube social-icons\">\n    <i class=\"fa fa-youtube\"> </i>\n</a>\n<a href=\""
    + alias4(((helper = (helper = helpers.instagram || (depth0 != null ? depth0.instagram : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instagram","hash":{},"data":data}) : helper)))
    + "\"\n   class=\"btn btn-just-icon btn-round btn-dribbble social-icons\">\n    <i class=\"fa fa-instagram\"></i>\n</a>";
},"useData":true});
this["template"]["tuitionOperationHours"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-6\">\n    Monday:\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.monFrom || (depth0 != null ? depth0.monFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monFrom","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.monTo || (depth0 != null ? depth0.monTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monTo","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n\n\n<div class=\"col-6\">\n    Tuesday:\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.tueFrom || (depth0 != null ? depth0.tueFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tueFrom","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.tueTo || (depth0 != null ? depth0.tueTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tueTo","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n\n\n<div class=\"col-6\">\n    Wednsday:\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.wedFrom || (depth0 != null ? depth0.wedFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wedFrom","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.wedTo || (depth0 != null ? depth0.wedTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wedTo","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n\n\n<div class=\"col-6\">\n    Thursday:\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.thrFrom || (depth0 != null ? depth0.thrFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thrFrom","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.thrTo || (depth0 != null ? depth0.thrTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thrTo","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n\n\n<div class=\"col-6\">\n    Friday:\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.friFrom || (depth0 != null ? depth0.friFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"friFrom","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.friTo || (depth0 != null ? depth0.friTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"friTo","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n\n\n<div class=\"col-6\">\n    Saturday:\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.satFrom || (depth0 != null ? depth0.satFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"satFrom","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.satTo || (depth0 != null ? depth0.satTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"satTo","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n\n\n<div class=\"col-6\">\n    Sunday:\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.sunFrom || (depth0 != null ? depth0.sunFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunFrom","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>\n<div class=\"col-3\">\n    <div class=\"h6\">\n        "
    + alias4(((helper = (helper = helpers.sunTo || (depth0 != null ? depth0.sunTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunTo","hash":{},"data":data}) : helper)))
    + "\n    </div>\n</div>";
},"useData":true});
this["template"]["tuitionResult"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-4\" id=\"result"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"card\">\n            <span style=\"position: absolute;left: 92%;top: -6%;\">\n                <!-- send (_id of result obj received , id of card) as arguments for function deleteResult()-->\n            </span>\n            <img class=\"card-img-top\" src=\"images/"
    + alias4(((helper = (helper = helpers.img_path || (depth0 != null ? depth0.img_path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_path","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">\n                    "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <p class=\"card-text\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.key : depth0),{"name":"list","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["template"]["tuitionReviews"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\">\n    <div class=\"card-body\">\n        <h4 class=\"card-title\">"
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data}) : helper)))
    + "/5</h4>\n        <p class=\"card-text\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n    </div>\n</div>";
},"useData":true});
this["template"]["userDashboardTuitionCard"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-md-4\">\n    <div class=\"card\" style=\"\">\n        <!--put src = \"assets/img/"
    + alias4(((helper = (helper = helpers.coverPic || (depth0 != null ? depth0.coverPic : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"coverPic","hash":{},"data":data}) : helper)))
    + "\" -->\n        <img class=\"card-img tinted\" src=\"assets/img/tuition2.jpg\"\n             alt=\"Card image cap\">\n        <div class=\"card-img-overlay color-white m-0 p-3\">\n            <div class=\"row\">\n                <div class=\"col-9\">\n                    <h4 class=\"card-title color-white m-0 p-0\">"
    + alias4(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Name","hash":{},"data":data}) : helper)))
    + "</h4>\n                </div>\n                <div class=\"col-2\">\n                    <!-- todo - uncomment when verification data there -->\n                    <!--<button class=\"btn btn-info btn-fab btn-fab-mini btn-round position-absolute\">\n                        <i class=\"material-icons\">\n                            verified_user\n                        </i>\n                    </button>-->\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-8\">\n                    <p class=\"card-text m-0 color-white\">"
    + alias4(((helper = (helper = helpers.Category || (depth0 != null ? depth0.Category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Category","hash":{},"data":data}) : helper)))
    + "</p>\n                </div>\n                <div class=\"col-3\">\n                    <!--<span class=\"badge badge-info\">"
    + alias4(((helper = (helper = helpers.ifAd || (depth0 != null ? depth0.ifAd : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ifAd","hash":{},"data":data}) : helper)))
    + "</span>-->\n                </div>\n\n            </div>\n        </div>\n        <div class=\"card-body px-4 position-relative\">\n            <!-- todo uncomment when rating available-->\n            <!--<button class=\"btn btn-info btn-fab btn-round position-absolute moveUp\">\n                                                        "
    + alias4(((helper = (helper = helpers.rating || (depth0 != null ? depth0.rating : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"rating","hash":{},"data":data}) : helper)))
    + "\n                                                    </button>-->\n            <div class=\"row\">\n                <i class=\"material-icons d-inline-flex icon-small\">\n                    place\n                </i>\n                <p class=\"card-text text m-0 \">"
    + alias4(((helper = (helper = helpers.Address || (depth0 != null ? depth0.Address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Address","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n            <div class=\"row\">\n                <i class=\"material-icons d-inline-flex icon-small\">\n                    local_phone\n                </i>\n                <p class=\"card-text m-0 row\">"
    + alias4(((helper = (helper = helpers.Phone || (depth0 != null ? depth0.Phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Phone","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n\n            <div class=\"row\">\n                <i class=\"material-icons d-inline-flex icon-small\">\n                    alternate_email\n                </i>\n                <p class=\"card-text m-0 row\">"
    + alias4(((helper = (helper = helpers.Email || (depth0 != null ? depth0.Email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Email","hash":{},"data":data}) : helper)))
    + " </p>\n            </div>\n            <a href=\"TuitionDetails2.0.html?_id="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n               class=\"btn btn-info\">Details</a>\n            <a href=\"User-editTuition.html?a="
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"\n               class=\"btn btn-info\">edit</a>\n        </div>\n\n    </div>\n</div>";
},"useData":true});
this["template"]["userEditTuitionBasic"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\">\n    <div class=\"card-body\">\n        <h2 class=\"card-title h3\">Basic Details:</h2>\n        <div class=\"row align-items-center\">\n            <div class=\"col-md-3\">\n                <h6>Institute Name</h6>\n            </div>\n            <div class=\"col-md-9\">\n                <input id=\"tName\" value=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\"form-control\" type=\"text\"\n                       name=\"name\">\n            </div>\n\n        </div>\n        <hr>\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"row\">\n                    <h6>Address</h6>\n                </div>\n                <div class=\"row form-group\">\n                    <label for=\"al1\">Address Line 1</label>\n                    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.addressLine1 || (depth0 != null ? depth0.addressLine1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine1","hash":{},"data":data}) : helper)))
    + "\" type=\"text\"\n                           id=\"al1\" name=\"addressLine1\">\n                </div>\n                <div class=\"row form-group\">\n                    <label for=\"al2\">Address Line 2</label>\n                    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.addressLine2 || (depth0 != null ? depth0.addressLine2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine2","hash":{},"data":data}) : helper)))
    + "\" type=\"text\"\n                           id=\"al2\" name=\"addressLine2\">\n                </div>\n                <div class=\"row form-group\">\n                    <label for=\"city\">City</label>\n                    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "\" type=\"text\"\n                           id=\"city\"\n                           name=\"city\">\n                </div>\n                <div class=\"row form-group\">\n                    <label for=\"dist\">District</label>\n                    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.district || (depth0 != null ? depth0.district : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"district","hash":{},"data":data}) : helper)))
    + "\" type=\"text\"\n                           id=\"dist\"\n                           name=\"district\">\n                </div>\n                <div class=\"row form-group\">\n                    <label for=\"state\">State</label>\n                    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "\" type=\"text\"\n                           id=\"state\"\n                           name=\"state\">\n                </div>\n                <div class=\"row form-group\">\n                    <label for=\"country\">Country</label>\n                    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data}) : helper)))
    + "\" type=\"text\"\n                           id=\"country\"\n                           name=\"country\">\n                </div>\n                <div class=\"row form-group\">\n                    <label for=\"pin\">Pin</label>\n                    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.pin || (depth0 != null ? depth0.pin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pin","hash":{},"data":data}) : helper)))
    + "\" type=\"number\"\n                           id=\"pin\"\n                           name=\"pin\">\n                </div>\n\n\n            </div>\n        </div>\n\n    </div>\n</div>";
},"useData":true});
this["template"]["userEditTuitionCategory"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\n    <input value=\""
    + container.escapeExpression(((helper = (helper = helpers.cate || (depth0 != null ? depth0.cate : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"cate","hash":{},"data":data}) : helper)))
    + "\" name=\"category\" class=\"form-control\"\n           id=\"category\">\n</div>";
},"useData":true});
this["template"]["userEditTuitionContactP"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card-title h3\">\n    Contact Us:\n</div>\n<div class=\"card-title h4\">\n    Contact Person Name\n</div>\n<div>\n    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.contactPerson || (depth0 != null ? depth0.contactPerson : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"contactPerson","hash":{},"data":data}) : helper)))
    + "\"\n           name=\"contactPerson\">\n</div>\n<div class=\"card-title h4\">\n    Primary Number\n</div>\n<div>\n    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.primaryNumber || (depth0 != null ? depth0.primaryNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryNumber","hash":{},"data":data}) : helper)))
    + "\"\n           name=\"primaryNumber\">\n</div>\n<div class=\"card-title h4\">\n    Alternate Number\n</div>\n<div>\n    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.secondaryNumber || (depth0 != null ? depth0.secondaryNumber : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondaryNumber","hash":{},"data":data}) : helper)))
    + "\"\n           name=\"secondaryNumber\">\n</div>\n<div class=\"card-title h4\">\n    Email\n</div>\n<div>\n    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.email || (depth0 != null ? depth0.email : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"email","hash":{},"data":data}) : helper)))
    + "\" name=\"email\">\n</div>\n<div class=\"card-title h4\">\n    Website\n</div>\n<div>\n    <input class=\"form-control\" value=\""
    + alias4(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"website","hash":{},"data":data}) : helper)))
    + "\" name=\"website\">\n</div>";
},"useData":true});
this["template"]["userEditTuitionCourses"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-4\" id=\"course"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"card\">\n                                    <span style=\"position: absolute;left: 92%;top: -6%;\">\n                                        <!-- send title of course and id of card in function deleteCourse()-->\n                                        <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\n                                                onclick=\"deleteCourse('"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "','course"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "')\">\n                                            <i class=\"material-icons\">\n                                                delete\n                                            </i>\n                                        </button>\n                                    </span>\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h4>\n                <h6 class=\" mb-2 text-muted\">Standard/Age Group</h6>\n                <h6 class=\"card-text\">"
    + alias4(((helper = (helper = helpers.ageGroup || (depth0 != null ? depth0.ageGroup : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ageGroup","hash":{},"data":data}) : helper)))
    + "</h6>\n                <hr>\n                <h6 class=\" mb-2 text-muted\">Duration</h6>\n                <h6 class=\"card-text\">"
    + alias4(((helper = (helper = helpers.duration || (depth0 != null ? depth0.duration : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"duration","hash":{},"data":data}) : helper)))
    + "</h6>\n                <hr>\n                <h6 class=\" mb-2 text-muted\">Fee</h6>\n                <h6 class=\"card-text\">INR "
    + alias4(((helper = (helper = helpers.fee || (depth0 != null ? depth0.fee : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fee","hash":{},"data":data}) : helper)))
    + "</h6>\n                <hr>\n            </div>\n            <h4 class=\"card-header card-header-info\">Next Batch - "
    + alias4(((helper = (helper = helpers.nextBatch || (depth0 != null ? depth0.nextBatch : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nextBatch","hash":{},"data":data}) : helper)))
    + "</h4>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.key : depth0),{"name":"list","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["template"]["userEditTuitionCover"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div id=\"cover_image\" class=\"page-header header-filter header-small\" data-parallax=\"true\" filter-color=\"dark\"\n     style=\"background-image: url('images/"
    + container.escapeExpression(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"path","hash":{},"data":data}) : helper)))
    + "');\">\n</div>";
},"useData":true});
this["template"]["userEditTuitionDesc"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\n    <input value=\""
    + container.escapeExpression(((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"desc","hash":{},"data":data}) : helper)))
    + "\" name=\"description\" class=\"form-control\"\n           id=\"description\">\n</div>";
},"useData":true});
this["template"]["userEditTuitionFacility"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\n    <input value=\""
    + container.escapeExpression(((helper = (helper = helpers.facilities || (depth0 != null ? depth0.facilities : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"facilities","hash":{},"data":data}) : helper)))
    + "\" name=\"facilities\" class=\"form-control\"\n           id=\"\">\n</div>";
},"useData":true});
this["template"]["userEditTuitionFaculty"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-4\" id=\"faculty"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"card card-nav-tabs\">\n            <span style=\"position: absolute;left: 92%;top: -6%;\">\n            <!-- send (name of the faculty , id of card) as arguments for function deleteFaculty()-->\n            <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\n                    onclick=\"deleteFaculty('"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "','faculty"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "')\">\n                <i class=\"material-icons\">\n                    delete\n                </i>\n            </button>\n            </span>\n            <img class=\"card-img-bottom\" src=\"images/"
    + alias4(((helper = (helper = helpers.img_path || (depth0 != null ? depth0.img_path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_path","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">\n                    "
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <div class=\"card-subtitle mb-2 text-muted\">\n                    "
    + alias4(((helper = (helper = helpers.qualification || (depth0 != null ? depth0.qualification : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"qualification","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <p class=\"card-text\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.key : depth0),{"name":"list","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["template"]["userEditTuitionHours"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<form class=\"row\" id=\"monForm\">\n    <div class=\"col-4\">\n        Monday:\n        <input hidden name=\"day\" value=\"Monday\">\n    </div>\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.monFrom || (depth0 != null ? depth0.monFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\"\n           type=\"time\">\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.monTo || (depth0 != null ? depth0.monTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"monTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\"\n           type=\"time\">\n</form>\n\n\n<form class=\"row\" id=\"tueForm\">\n    <div class=\"col-4\">\n        Tuesday:\n        <input hidden name=\"day\" value=\"Tuesday\">\n    </div>\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.tueFrom || (depth0 != null ? depth0.tueFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tueFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\" type=\"time\">\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.tueTo || (depth0 != null ? depth0.tueTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tueTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\" type=\"time\">\n\n</form>\n\n\n<form class=\"row\" id=\"wedForm\">\n    <div class=\"col-4\">\n        Wednesday:\n        <input hidden name=\"day\" value=\"Wednesday\">\n    </div>\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.wedFrom || (depth0 != null ? depth0.wedFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wedFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\" type=\"time\">\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.wedTo || (depth0 != null ? depth0.wedTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wedTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\" type=\"time\">\n</form>\n\n\n<form class=\"row\" id=\"thrForm\">\n    <div class=\"col-4\">\n        Thursday:\n        <input hidden name=\"day\" value=\"Thursday\">\n    </div>\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.thrFrom || (depth0 != null ? depth0.thrFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thrFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\" type=\"time\">\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.thrTo || (depth0 != null ? depth0.thrTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"thrTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\" type=\"time\">\n</form>\n\n\n<form class=\"row\" id=\"friForm\">\n    <div class=\"col-4\">\n        Friday:\n        <input hidden name=\"day\" value=\"Friday\">\n    </div>\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.friFrom || (depth0 != null ? depth0.friFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"friFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\" type=\"time\">\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.friTo || (depth0 != null ? depth0.friTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"friTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\" type=\"time\">\n</form>\n\n\n<form class=\"row\" id=\"satForm\">\n    <div class=\"col-4\">\n        Saturday:\n        <input hidden name=\"day\" value=\"Saturday\">\n    </div>\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.satFrom || (depth0 != null ? depth0.satFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"satFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\" type=\"time\">\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.satTo || (depth0 != null ? depth0.satTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"satTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\" type=\"time\">\n</form>\n\n\n<form class=\"row\" id=\"sunForm\">\n    <div class=\"col-4\">\n        Sunday:\n        <input hidden name=\"day\" value=\"Sunday\">\n    </div>\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.sunFrom || (depth0 != null ? depth0.sunFrom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunFrom","hash":{},"data":data}) : helper)))
    + "\" name=\"fromTime\" type=\"time\">\n    <input class=\"form-control col-4 m-md-0 p-md-1\" value=\""
    + alias4(((helper = (helper = helpers.sunTo || (depth0 != null ? depth0.sunTo : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sunTo","hash":{},"data":data}) : helper)))
    + "\" name=\"toTime\" type=\"time\">\n</form>";
},"useData":true});
this["template"]["userEditTuitionResults"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"col-4\" id=\"result"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">\n        <div class=\"card\">\n            <span style=\"position: absolute;left: 92%;top: -6%;\">\n                <!-- send (_id of result obj received , id of card) as arguments for function deleteResult()-->\n                <button class=\"btn btn-danger btn-fab btn-fab-mini btn-round deleteBtn\"\n                        onclick=\"deleteResult('"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "','result"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "')\">\n                    <i class=\"material-icons\">\n                        delete\n                    </i>\n                </button>\n            </span>\n            <img class=\"card-img-top\" src=\"images/"
    + alias4(((helper = (helper = helpers.img_path || (depth0 != null ? depth0.img_path : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img_path","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">\n                    "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\n                </div>\n                <p class=\"card-text\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.key : depth0),{"name":"list","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
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
this["template"]["userProfileInput"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card\">\n    <div class=\"card-body\">\n        <h2 class=\"card-title h3\">Personal Info:</h2>\n        <div class=\"row align-items-center\">\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"firstName\" class=\"\">First Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"firstName\"\n                       name=\"firstName\" value=\""
    + alias4(((helper = (helper = helpers.firstName || (depth0 != null ? depth0.firstName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"firstName","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"exampleInput2\" class=\"bmd-label-floating\">Middle\n                    Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInput2\"\n                       name=\"middleName\" value=\""
    + alias4(((helper = (helper = helpers.middleName || (depth0 != null ? depth0.middleName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"middleName","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n\n            <div class=\"form-group col-md-4\">\n                <label for=\"exampleInput3\" class=\"bmd-label-floating\">Last\n                    Name</label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInput3\"\n                       name=\"lastName\" value=\""
    + alias4(((helper = (helper = helpers.lastName || (depth0 != null ? depth0.lastName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"lastName","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"primaryEmail\" class=\"\">Primary\n                    Email/Username (can't change)</label>\n                <input type=\"email\" class=\"form-control\" id=\"primaryEmail\" name=\"\"\n                       value=\""
    + alias4(((helper = (helper = helpers.primaryEmail || (depth0 != null ? depth0.primaryEmail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"primaryEmail","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"exampleInput5\" class=\"bmd-label-floating\">Secondary\n                    Email\n                    (optional)</label>\n                <input type=\"email\" class=\"form-control\" id=\"exampleInput5\"\n                       name=\"secondaryEmail\" value=\""
    + alias4(((helper = (helper = helpers.secondaryEmail || (depth0 != null ? depth0.secondaryEmail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"secondaryEmail","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"exampleInput6\" class=\"bmd-label-floating\">Contact\n                    Number</label>\n                <input type=\"number\" class=\"form-control\" id=\"exampleInput6\"\n                       name=\"phone\" value=\""
    + alias4(((helper = (helper = helpers.phone || (depth0 != null ? depth0.phone : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"phone","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"exampleInput7\" class=\"bmd-label-floating\">Address Line\n                    1</label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInput7\"\n                       name=\"addressLine1\" value=\""
    + alias4(((helper = (helper = helpers.addressLine1 || (depth0 != null ? depth0.addressLine1 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine1","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"exampleInput8\" class=\"bmd-label-floating\">Address Line\n                    2</label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInput8\"\n                       name=\"addressLine2\" value=\""
    + alias4(((helper = (helper = helpers.addressLine2 || (depth0 != null ? depth0.addressLine2 : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"addressLine2","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"exampleInput9\" class=\"bmd-label-floating\">City</label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInput9\"\n                       name=\"city\" value=\""
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"exampleInput10\"\n                       class=\"bmd-label-floating\">District</label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInput10\"\n                       name=\"district\" value=\""
    + alias4(((helper = (helper = helpers.district || (depth0 != null ? depth0.district : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"district","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"exampleInput11\" class=\"bmd-label-floating\">State</label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInput11\"\n                       name=\"state\" value=\""
    + alias4(((helper = (helper = helpers.state || (depth0 != null ? depth0.state : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"state","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"exampleInput12\"\n                       class=\"bmd-label-floating\">Country</label>\n                <input type=\"text\" class=\"form-control\" id=\"exampleInput12\"\n                       name=\"country\" value=\""
    + alias4(((helper = (helper = helpers.country || (depth0 != null ? depth0.country : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"country","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"exampleInput13\" class=\"bmd-label-floating\">Pin</label>\n                <input type=\"number\" class=\"form-control\" id=\"exampleInput13\"\n                       name=\"pin\" value=\""
    + alias4(((helper = (helper = helpers.pin || (depth0 != null ? depth0.pin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pin","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"form-group col-12\">\n                <label for=\"exampleInput14\" class=\"\">Date of birth</label>\n                <input type=\"date\" class=\"form-control\" id=\"exampleInput14\"\n                       name=\"dateOfBirth\" value=\""
    + alias4(((helper = (helper = helpers.dateOfBirth || (depth0 != null ? depth0.dateOfBirth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dateOfBirth","hash":{},"data":data}) : helper)))
    + "\">\n            </div>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12\">\n\n                <div class=\"row\">\n                    <p class=\"text-muted\">Gender</p>\n                </div>\n                <div class=\"row justify-content-around\">\n                    <div class=\"form-check form-check-radio\">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"radio\"\n                                   name=\"isMale\" id=\"exampleRadios2\" value=\"true\"\n                                "
    + alias4(((helper = (helper = helpers.maleChecked || (depth0 != null ? depth0.maleChecked : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"maleChecked","hash":{},"data":data}) : helper)))
    + ">\n                            Male\n                            <span class=\"circle\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                        </label>\n                    </div>\n                    <div class=\"form-check form-check-radio \">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"radio\"\n                                   name=\"isMale\" id=\"exampleRadios1\" value=\"false\"\n                                "
    + alias4(((helper = (helper = helpers.femaleChecked || (depth0 != null ? depth0.femaleChecked : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"femaleChecked","hash":{},"data":data}) : helper)))
    + ">\n                            Female\n                            <span class=\"circle\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                        </label>\n                    </div>\n                    <div class=\"form-check form-check-radio \">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" disabled type=\"radio\"\n                                   name=\"isMale\" id=\"exampleRadios0\" value=\"\">\n                            Other\n                            <span class=\"circle\">\n                                                            <span class=\"check\"></span>\n                                                        </span>\n                        </label>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-12\">\n\n                <div class=\"row\">\n                    <p class=\"text-muted\">Role</p>\n                </div>\n\n                <div class=\"row justify-content-around\">\n\n                    <div class=\"form-check form-check-radio\">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"radio\"\n                                   name=\"primaryRole\"\n                                   id=\"exampleRadios3\" value=\"Student\"\n                                "
    + alias4(((helper = (helper = helpers.studentChecked || (depth0 != null ? depth0.studentChecked : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"studentChecked","hash":{},"data":data}) : helper)))
    + ">\n                            Student\n                            <span class=\"circle\">\n                                                                <span class=\"check\"></span>\n                                                            </span>\n                        </label>\n                    </div>\n\n                    <div class=\"form-check form-check-radio\">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"radio\"\n                                   name=\"primaryRole\"\n                                   id=\"exampleRadios4\" value=\"Parent\"\n                                "
    + alias4(((helper = (helper = helpers.parentChecked || (depth0 != null ? depth0.parentChecked : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"parentChecked","hash":{},"data":data}) : helper)))
    + ">\n                            Parent\n                            <span class=\"circle\">\n                                                                <span class=\"check\"></span>\n                                                            </span>\n                        </label>\n                    </div>\n\n                    <div class=\"form-check form-check-radio\">\n                        <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"radio\"\n                                   name=\"primaryRole\"\n                                   id=\"exampleRadios5\" value=\"Institute\"\n                                "
    + alias4(((helper = (helper = helpers.instituteChecked || (depth0 != null ? depth0.instituteChecked : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instituteChecked","hash":{},"data":data}) : helper)))
    + ">\n                            Institute\n                            <span class=\"circle\">\n                                                                <span class=\"check\"></span>\n                                                            </span>\n                        </label>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>";
},"useData":true});
this["template"]["userSocialInput"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"card-body\">\n    <h2 class=\"card-title h3\">Social Connect:</h2>\n\n    <div class=\"row\">\n        <div class=\"form-group col-12\">\n            <label for=\"fbLink\" class=\"bmd-label-floating\">Facebook Link</label>\n            <input type=\"text\" class=\"form-control\" id=\"fbLink\" name=\"fbLink\"\n                   value=\""
    + alias4(((helper = (helper = helpers.fbLink || (depth0 != null ? depth0.fbLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fbLink","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"form-group col-12\">\n            <label for=\"twitterLink\" class=\"bmd-label-floating\">Twitter Link</label>\n            <input type=\"text\" class=\"form-control\" id=\"twitterLink\" name=\"fbLink\"\n                   value=\""
    + alias4(((helper = (helper = helpers.twitterLink || (depth0 != null ? depth0.twitterLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"twitterLink","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"form-group col-12\">\n            <label for=\"youtubeLink\" class=\"bmd-label-floating\">Youtube Link</label>\n            <input type=\"text\" class=\"form-control\" id=\"youtubeLink\"\n                   name=\"youtubeLink\"\n                   value=\""
    + alias4(((helper = (helper = helpers.youtubeLink || (depth0 != null ? depth0.youtubeLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"youtubeLink","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"form-group col-12\">\n            <label for=\"instaLink\" class=\"bmd-label-floating\">Instagram Link</label>\n            <input type=\"text\" class=\"form-control\" id=\"instaLink\" name=\"instaLink\"\n                   value=\""
    + alias4(((helper = (helper = helpers.instaLink || (depth0 != null ? depth0.instaLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"instaLink","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"form-group col-12\">\n            <label for=\"linkedinLink\" class=\"bmd-label-floating\">LinkedIn\n                Link</label>\n            <input type=\"text\" class=\"form-control\" id=\"linkedinLink\"\n                   name=\"linkedinLink\"\n                   value=\""
    + alias4(((helper = (helper = helpers.linkedinLink || (depth0 != null ? depth0.linkedinLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linkedinLink","hash":{},"data":data}) : helper)))
    + "\">\n        </div>\n    </div>\n</div>";
},"useData":true});
this["template"]["userStatus"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <a href=\"#\" class=\"profile-photo dropdown-toggle nav-link\" data-toggle=\"dropdown\">\n        <div class=\"profile-photo-small\">\n            <img src=\"/assets/img/logo.png\" alt=\"Circle Image\"\n                 class=\"rounded img-fluid w-100 h-100\">\n        </div>\n    </a>\n    <div class=\"dropdown-menu dropdown-menu-right\">\n        <h6 class=\"dropdown-header\">${data.firstName}</h6>\n        <a class=\"dropdown-item\" style=\"cursor: pointer\" href=\"/User-dashboard.html\">Dashboard</a>\n        <a class=\"dropdown-item\" style=\"cursor: pointer\" href=\"User-addTuition.html\">\n        Add Institute/Tuition\n        </a>\n        <a class=\"btn btn-sm btn-outline-info dropdown-item\" onclick=\"logout()\">Logout</a>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "    <button class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</button>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.user : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data})) != null ? stack1 : "");
},"useData":true});