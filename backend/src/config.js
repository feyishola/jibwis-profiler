const {
  APP_PORT,
  MONGO_URI,
  JWT_SECRET,
  GEMINI_KEY,
  STRIPE_SECRET,
  MAILGUN_API,
  MAILGUN_DOMAIN,
  DOMAIN,
} = process.env;

module.exports = {
  appPort: APP_PORT,
  mongoURI: MONGO_URI,
  jwtSecret: JWT_SECRET || "klhikhukgyurttetyuiouyguyfyug",
  stripeSecret: STRIPE_SECRET,
  mailgunApiKey: MAILGUN_API,
  mailgunDomain: MAILGUN_DOMAIN,
  domain: DOMAIN,
  geminiKey: GEMINI_KEY,
};
