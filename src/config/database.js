module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  port: 5432,
  username: 'postgres',
  password: '12345678',
  database: 'gympoint',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
