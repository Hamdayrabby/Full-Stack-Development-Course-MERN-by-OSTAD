
const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
		productID:{type:mongoose.Schema.Types.ObjectId,required:true},
		userID:{type:mongoose.Schema.Types.ObjectId,required:true},
		color:{type:String,required:true},
		qty:{type:Number,required:true},
		size:{type:String,required:true},
		price:{type:Number,required:true},
		totalPrice:{type:Number,required:true},
		status:{type:String,default:"active",enum:["active","inactive","pending","completed","cancelled"]}
	},
	{timestamps:true,versionKey:false}
);

const CartModel = mongoose.model('carts',DataSchema);
module.exports = CartModel;
