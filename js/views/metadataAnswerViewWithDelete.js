var template = require("../tmpl/metadataAnswerWithDelete");
var bbDestroy = require("../net/bbDestroy");
var View = require("../view");


module.exports = View.extend({
  name: "metadataAnswerViewWithDelete",
  template: template,
  allowDelete: true,
  deleteAnswer: function() {
    this.model.destroy();
    // bbDestroy(this.model, {wait: true, data: $.param({zid: this.model.get("zid")})}).then(function() {
    //   // ok
    // }, function(err) {
    //   alert("couldn't delete answer");
    //   console.dir(arguments);
    // });
  },
  initialize: function(options) {
      this.model = options.model;
      this.zid = options.zid;
  }
});