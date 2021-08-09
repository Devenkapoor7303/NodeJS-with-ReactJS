// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development - return the dev keys!!!
  module.exports = require('./dev');
}
// module.exports = {
//   googleClientID: '16683490964-c5ll61qakslc0u85k3taqtmo2mdnntp3.apps.googleusercontent.com',
//   googleClientSecret: '_9L4Yet_nBcvwUEqyVVIId-t',
//   mongoURI: 'mongodb+srv://Devenkapoor:Deven1234@@emaily.pu5ls.mongodb.net/emailydev?retryWrites=true&w=majority',
//   cookieKey: 'vxhbjxxkhcxujnxbjfzu',
//   stripePublishableKey:'pk_test_51JMDUzSCBVTOBEHTruECq1PCmuRUbzo4QKtRALgVMcSBXWBKr5mgqUJXC9ECMB2161sFBvotbmUczQ3zHxOMMdeN00G3hOQERv',
//   stripeSecretKey:'sk_test_51JMDUzSCBVTOBEHTv9ACxhQpnt2pcuN5u26bAlgn8zT7WKYyK9iWH1AB70yHu9nLVieHYRnlQRmtsVMuicbNQnhr00rxvf4SsR'
// };
