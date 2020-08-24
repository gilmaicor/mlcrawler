import request from 'supertest';
import app from '../src/server';

describe('Scraping', function () {
  it('mercado livre scraping', async function () {
    const response = await request(app).post('/scraping/mercadolivre').send({
      search: 'cadeado',
      limit: 10,
    });

    expect(response.status).toBe(200);
  }, 30000);
});
