// step 5
"use strict";

module.exports = function (app) {
  var myjson = require("./controller");

  app.route('/').get(myjson.index);
  // step 8
  app.route('/tampil').get(myjson.tampilsemuamahasiswa);
  // step 10
  app.route('/tampil/:id').get(myjson.tampilberdasarkanid);
  // Step 12
  app.route('/tambah').post(myjson.tambahMahasiswa);
  // Step 14
  app.route('/ubah').put(myjson.ubahMahasiswa);
};
