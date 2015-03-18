// Define the system topology here. The topolgy should reference 
// containers defined in definitions/services.js

exports.name = 'cloudconf';
exports.namespace = 'cloudconf';
exports.id = '4e89e590-f5c7-4775-9e78-08a577763f4e';

exports.topology = {
  development: {
    root: ['web']
  }
};
