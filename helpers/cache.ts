import redis from 'redis';
import { promisify } from 'util';

var client = redis.createClient({
  host: process.env.NEXT_REDIS_HOST,
  port: process.env.NEXT_REDIS_PORT,
  password: process.env.NEXT_REDIS_PASSWORD,
});

client.on('error', function (err) {
  throw err;
});

const getAsync = promisify(client.get).bind(client);
const setAsync = promisify(client.set).bind(client);
const deleteAsync = promisify(client.del).bind(client);

export const cache = {
  set: (key: string, value: any) => 
    setAsync(key, JSON.stringify(value)),
  get: (key: string) =>
    getAsync(key),
  delete: (key: string) =>
    deleteAsync(key),
}
