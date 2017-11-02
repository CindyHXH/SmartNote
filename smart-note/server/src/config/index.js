const development_env = require('./development');
const production_env = require('./production');

//According to different NODE_ENV，output different dev
module.exports = {
    development: development_env,
    production: production_env
}[process.env.NODE_ENV || 'development']
