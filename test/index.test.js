const request = require('supertest');
const app = require('../app.js');

describe('Sanity test', () => {
  test('1 should equal 1', () => {
    expect(1).toBe(1);
  });
});

describe('health endpoint', () => {
  test('should return status code 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
  });
});

describe('root endpoint', () => {
  test('should return status code 200 and index.html', async () => {
    const expected =
      '<title>Natours | Exciting tours for adventurous people</title>';

    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.type).toEqual('text/html');
    expect(res.text).toEqual(expect.stringContaining(expected));
  });
});
