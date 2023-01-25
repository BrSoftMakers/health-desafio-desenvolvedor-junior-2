import { createClient } from "redis";

export const redis = createClient({
    url: process.env.REDIS_URL,
});

export const cachExpiration = 10000;
export const cacheKeys = {
    pets: "pets",
};

export async function redisConnect() {
    await redis.connect();
}

export async function redisDisconnect() {
    await redis.disconnect();
}
