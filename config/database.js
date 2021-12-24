const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "strapi-labs2.postgres.database.azure.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapidb"),
      user: env("DATABASE_USERNAME", "strapilabadmin@strapi-labs2"),
      password: env("DATABASE_PASSWORD", "@Strapilabsadmin"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    useNullAsDefault: true,
  },
});
