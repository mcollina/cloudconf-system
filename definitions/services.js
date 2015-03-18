// Place service container definitions here.

exports.root = {
  type: 'blank-container'
};

exports.cloudb = {
  type: 'docker',
  specific: {
    repositoryUrl: 'git@github.com:mcollina/cloudconf-kv.git',
    execute: {
      // docker run <ARGS> image <EXEC>
      args: '-p 3000:3000 -e REDIS_HOST=__TARGETIP__ -d',
      exec: ''
    }
  }
};

exports.redis = {
  type: 'docker',
  specific: {
    name: 'redis:2.8',
    execute: {
      // docker run <ARGS> image <EXEC>
      args: '-p 6379:6379 -d',
      exec: ''
    }
  }
};
