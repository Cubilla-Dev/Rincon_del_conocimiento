const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const devFormat = ':method :url :status :response-time ms - :res[content-length]';

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, '../../logs/access.log'),
  { flags: 'a' }
);

const prodFormat = ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"';

function configureLogger(app, env) {
  if (env === 'development') {
    app.use(morgan(devFormat));
  } else {
    app.use(morgan(prodFormat, { stream: accessLogStream }));
  }
}

// Exporta como objeto nombrado
module.exports = {
  configureLogger
};