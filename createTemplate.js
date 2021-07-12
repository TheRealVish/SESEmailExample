// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'eu-west-2'});

// Create createTemplate params
var params = {
  Template: { 
    TemplateName: 'NewTemplate', /* required */
    HtmlPart: '<h1> {{title}}</h1>',
    SubjectPart: 'template subject',
    TextPart: 'hello hello'
  }
};

// Create the promise and SES service object
var templatePromise = new AWS.SES({apiVersion: '2010-12-01'}).createTemplate(params).promise();

// Handle promise's fulfilled/rejected states
templatePromise.then(
  function(data) {
    console.log(data);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });

