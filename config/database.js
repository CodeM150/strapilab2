module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("INSTANCE_CONNECTION_NAME"),
      port: env.int("DATABASE_PORT"),
      database: env("DATABASE_NAME"),
      user: env("DATABASE_USERNAME"),
      password: env("DATABASE_PASSWORD"),
      ssl: env.bool("DATABASE_SSL"),
    },
    useNullAsDefault: true,
  },
});
