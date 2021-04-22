import redis from 'redis';

var client = redis.createClient({
  host: process.env.NEXT_REDIS_HOST,
  port: process.env.NEXT_REDIS_PORT,
  password: process.env.NEXT_REDIS_PASSWORD,
});

client.on('error', function (err) {
  throw err;
});

export const cache = {
  set: (key: string, value: any) => 
    client.set(key, JSON.stringify(value)),
  get: (key: string) =>
    client.get(key),
  delete: (key: string) =>
    client.delete(key),
}
