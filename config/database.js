module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "app-91510196-b781-4b38-83f4-9700f3be635e-do-user-11643467-0.b.db.ondigitalocean.com"
      ),
      port: env.int("DATABASE_PORT", 25060),
      database: env("DATABASE_NAME", "defaultdb"),
      user: env("DATABASE_USERNAME", "doadmin"),
      password: env("DATABASE_PASSWORD", "AVNS_kPjGtHBB39jSlMfa5Wp"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    useNullAsDefault: true,
    debug: true,
  },
});
