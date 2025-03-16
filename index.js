const { Client, logger } = require('./lib/client')
const { DATABASE, VERSION } = require('./config')
const { stopInstance } = require('./lib/pm2')

const start = async () => {
  logger.info(`levanter ${VERSION}`)
  try {
    await DATABASE.authenticate({ retry: { max: 3 } })
  } catch (error) {
    const databaseUrl = process.env.DATABASE_URL
    logger.error({ msg: 'Unable to connect to the database', error: error.message, databaseUrl })
   require('dotenv').config();

const ownerNumber = process.env.OWNER_NUMBER || '918293316342'; // Default fallback
const botMode = process.env.BOT_MODE || 'private';

module.exports = { ownerNumber, botMode };
    return stopInstance()
  }
  try {
    const bot = new Client()
    await bot.connect()
  } catch (error) {
    logger.error(error)
  }
}
start()
