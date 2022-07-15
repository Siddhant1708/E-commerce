var braintree = require("braintree");

var gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: 'rzczn5m6vq4j4fsy',
    publicKey: '8j22h3zsb6n6934z',
    privateKey: '9ab62fd2aad7c053af688e84e99cb231'
  }); 




exports.getToken = (req,res) => {

 gateway.clientToken.generate({},function(err,response){
  if(err){
       res.status(500).send(err);
  }else{
    res.send(response);
  }

 });
};              


exports.processPayment = (req,res) => {
    let nonceFromTheClient = req.body.PaymentMethodNonce
    let amountFromTheClient = req.boyd.amount
    gateway.transaction.sale({
        Amount: amountFromTheClient,
        PaymentMethodNonce: nonceFromTheClient,
        DeviceData: deviceDataFromTheClient,
        options: {
            submitForSettlement: true
        }
    },function(err,result){
           if(err){
               res.status(500).send(error)
           }else {
               res.send(result)
           }
        }
    );


};