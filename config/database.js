// const path = require("path");

const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  const { host, port, database, user, password } = parse("postgres://kzgfjcbjdwbggr:ca4eba89b585c7a90eefe4389c427549de0343649bc4958d62851e2b3080eabc@ec2-99-81-137-11.eu-west-1.compute.amazonaws.com:5432/d9mjfahoq3vfn7");

  return {
    connection: {
      client: "postgres",
      connection: {
        host,
        port,
        database,
        user,
        password,
        schema: env("DATABASE_SCHEMA", "public"), // Not required
        ssl: {
          rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
        },
      },
      debug: false,
    },
  };
};

// Use this configuration for an SQLite database on your machine.
// module.exports = ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: path.join(
//         __dirname,
//         "..",
//         env("DATABASE_FILENAME", ".tmp/data.db")
//       ),
//     },
//     useNullAsDefault: true,
//   },
// });
