// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
var fs = require('fs'), path = require('path'); 

// Set the region 
AWS.config.update({region: 'eu-west-2'});
var toEmail = 'vish_m@aol.com';
var dataEmail = '<img src="https://emailassetsnews.s3.eu-west-2.amazonaws.com/blur.png" height="200px" width="200px" border="1px">';
var params = {
  Destination: { /* required */
    ToAddresses: [
      toEmail
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: dataEmail
      },
      Text: {
       Charset: "UTF-8",
       Data: "image"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: 'news@vish.ac', /* required */
  ReplyToAddresses: [
     'news@vish.ac',
    /* more items */
  ],
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });