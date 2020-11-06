// step 5
"use strict";

module.exports = function (app) {
  var myjson = require("./controller");

  app.route('/').get(myjson.index);
  // step 8
  app.route('/tampil').get(myjson.tampilsemuamahasiswa);
};
