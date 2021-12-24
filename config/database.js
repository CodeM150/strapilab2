const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "postgres"),
      port: env.int("DATABASE_PORT", 15432),
      database: env("DATABASE_NAME", "datasheets"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    useNullAsDefault: true,
  },
});
