module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env(
        "DATABASE_HOST",
        "app-91510196-b781-4b38-83f4-9700f3be635e-do-user-11643467-0.b.db.ondigitalocean.com"
      ),
      port: env.int("DATABASE_PORT", 25060),
      database: env("DATABASE_NAME", "db"),
      user: env("DATABASE_USERNAME", "db"),
      password: env("DATABASE_PASSWORD", "AVNS_aCr0Sx9OVkslqage0TX"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    useNullAsDefault: true,
    debug: true,
  },
});
