// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-2'});

// Create sendTemplatedEmail params 
var params = {
  Destination: { /* required */
    ToAddresses: [
      'vish_m@aol.com',
      /* more To email addresses */
    ]
  },
  Source: 'news@vish.ac', /* required */
  Template: 'NewTemplate', /* required */
  TemplateData: '{ \"title\":\"REPLACEMENT_VALUE\" }', /* required */
  ReplyToAddresses: [
    'news@vish.ac'
  ],
};


// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendTemplatedEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });

