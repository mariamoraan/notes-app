import { sleep } from "./sleep";

const MAX_HTTP_RESPONSE_DELAY = 0.8;
const MIN_HTTP_RESPONSE_DELAY = 0.2;

export const mockHttpResponseTime = async () => {
  const resposnseTime =
    Math.random() * (MAX_HTTP_RESPONSE_DELAY + MIN_HTTP_RESPONSE_DELAY) * 1000;
  await sleep(resposnseTime);
};
