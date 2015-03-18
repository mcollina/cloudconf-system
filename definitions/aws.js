
// AWS specific infrastructure
exports.awsRoot = {
  type: 'blank-container'
};

exports.cloudbSg = {
  type: 'aws-sg',
  specific: {
    GroupName: 'webSg',
    Description: 'Web security group',
    IpPermissions: [
      { 'IpProtocol': 'tcp', 'FromPort': 3000, 'ToPort': 3000, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] },
      { 'IpProtocol': 'tcp', 'FromPort': 22, 'ToPort': 22, 'IpRanges': [ { 'CidrIp': '0.0.0.0/0' } ] }
    ],
    IpPermissionsEgress: [
      { IpProtocol: '-1', UserIdGroupPairs: [], IpRanges: [ { 'CidrIp': '0.0.0.0/0' } ] } ],
    Tags: []
  }
};

exports.cloudbAmi = {
  type: 'aws-ami',
  name: 'demo2',
  specific: {
    ImageId: 'ami-4b90b27b'
  }
};
