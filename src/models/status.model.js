// status-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const status = new Schema({
    name: { type: String, required: true, enum: ["Not Approved", "Approved", "Canceled", "Completed"] }
  }, {
    timestamps: false
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('Status');
  } catch (e) {
    return mongooseClient.model('Status', status);
  }
};
