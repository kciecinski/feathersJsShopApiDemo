// orders-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const orders = new Schema({
    confirmation_date: {type: Date, default: null},
    status: { type: Schema.Types.ObjectId, ref:'Status'},
    statusName: {type: String},
    username: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    products: [{
      name: String,
      amount: Number
    }]
  }, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://github.com/Automattic/mongoose/issues/1251
  try {
    return mongooseClient.model('orders');
  } catch (e) {
    return mongooseClient.model('orders', orders);
  }
};
