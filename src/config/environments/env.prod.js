const path = require('path')

const envPath = path.resolve(__dirname, '..', '..', '..', '.env.prod')
require('dotenv').config({ path: envPath })

module.exports = {
  "ENVIRONMENT": "prod",
  "DB_NAME": process.env.DB_NAME,
  "DB_HOSTNAME": process.env.DB_HOSTNAME,
  "DB_USERNAME": process.env.DB_USERNAME,
  "DB_PASSWORD": process.env.DB_PASSWORD,
  "DB_PORT": process.env.DB_PORT,
}