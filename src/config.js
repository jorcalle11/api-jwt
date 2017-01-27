module.exports = {
  KEY_SECRET_TOKEN: process.env.KEY_SECRET_TOKEN || 'fsfsfdfghgghfghfghfghfghfghvbcvdfd',
  PORT: process.env.PORT ||5000,
  NODE_ENV: process.env.NODE_ENV || 'dev',
  URL_DATABASE: 'mongodb://localhost/apiAuthUsers',
  DATABASE_PROD: {
    NAME: process.env.NAME_DB,
    USER: process.env.USER_DB,
    PASSWORD: process.env.PASSWORD_DB
  }
}