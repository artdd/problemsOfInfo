import { createConnection } from 'typeorm';

const initConnection = () =>
  createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'webMagazine',
    entities: ['./dist/src/models/*.js'],
    synchronize: true,
  });

export default initConnection;
