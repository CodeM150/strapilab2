module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2018b5886e2273fc9b2afeb73737d01c'),
  },
});
