(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['flightItem'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"flight\">\n    <div class=\"details\">\n        <div class=\"price\">\n            <h3>"
    + alias4(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"price","hash":{},"data":data}) : helper)))
    + "</h3>\n            <p>"
    + alias4(((helper = (helper = helpers.airlineName || (depth0 != null ? depth0.airlineName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"airlineName","hash":{},"data":data}) : helper)))
    + "</p>\n        </div>\n        <div class=\"info\">\n            <p>\n                <span>"
    + alias4(((helper = (helper = helpers.originCityName || (depth0 != null ? depth0.originCityName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"originCityName","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.originCountryCode || (depth0 != null ? depth0.originCountryCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"originCountryCode","hash":{},"data":data}) : helper)))
    + "</span>\n                <span>("
    + alias4(((helper = (helper = helpers.originCode || (depth0 != null ? depth0.originCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"originCode","hash":{},"data":data}) : helper)))
    + ")</span>\n                <span>"
    + alias4(((helper = (helper = helpers.originDateTime || (depth0 != null ? depth0.originDateTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"originDateTime","hash":{},"data":data}) : helper)))
    + "</span> -\n                <span>"
    + alias4(((helper = (helper = helpers.destinationCityName || (depth0 != null ? depth0.destinationCityName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"destinationCityName","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.destinationCountryCode || (depth0 != null ? depth0.destinationCountryCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"destinationCountryCode","hash":{},"data":data}) : helper)))
    + "</span>\n                <span>("
    + alias4(((helper = (helper = helpers.destinationCode || (depth0 != null ? depth0.destinationCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"destinationCode","hash":{},"data":data}) : helper)))
    + ")</span>\n                <span>"
    + alias4(((helper = (helper = helpers.destinationDateTime || (depth0 != null ? depth0.destinationDateTime : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"destinationDateTime","hash":{},"data":data}) : helper)))
    + "</span>\n            </p>\n            <small>\n                <span>Flight Number: "
    + alias4(((helper = (helper = helpers.flightNum || (depth0 != null ? depth0.flightNum : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"flightNum","hash":{},"data":data}) : helper)))
    + "</span> |\n                <span>Aircraft: "
    + alias4(((helper = (helper = helpers.plane || (depth0 != null ? depth0.plane : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"plane","hash":{},"data":data}) : helper)))
    + "</span> |\n                <span>Duration: "
    + alias4(((helper = (helper = helpers.durationMin || (depth0 != null ? depth0.durationMin : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"durationMin","hash":{},"data":data}) : helper)))
    + "</span> |\n                <span>Distance: "
    + alias4(((helper = (helper = helpers.distance || (depth0 != null ? depth0.distance : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"distance","hash":{},"data":data}) : helper)))
    + "</span>\n            </small>\n        </div>\n    </div>\n</li>\n";
},"useData":true});
templates['notificationItem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "class=\""
    + container.escapeExpression(((helper = (helper = helpers.className || (depth0 != null ? depth0.className : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"className","hash":{},"data":data}) : helper)))
    + "\"";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<p "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.className : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\n";
},"useData":true});
templates['tabItem'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.flightItem,depth0,{"name":"flightItem","data":data,"indent":"            ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"panel hidden\" data-date=\""
    + container.escapeExpression(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\">\n    <ul class=\"flightList\">\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.flights : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\n</div>\n";
},"usePartial":true,"useData":true});
templates['tabListItem'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li>\n    <a class=\"tab\" data-date=\""
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "</a>\n</li>\n";
},"useData":true});
})();
