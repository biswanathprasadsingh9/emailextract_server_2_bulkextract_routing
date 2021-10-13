const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BulkDomainExtractEmailSchema = new Schema({
  uuid:{
    type:String
  },
  userid:{
    type:String
  },
  username:{
    type:String
  },
  useremail:{
    type:String
  },
  domain:{
    type:String
  },
  email:{
    type:String
  },
  isvaliddomain:{
    type:Boolean
  },
  isfoundemails:{
    type:Boolean
  },
  totalemails:{
    type:Number
  }
},{timestamps:true})

const BulkDomainExtractEmail = mongoose.model('BulkDomainExtractEmail',BulkDomainExtractEmailSchema);
module.exports=BulkDomainExtractEmail;
