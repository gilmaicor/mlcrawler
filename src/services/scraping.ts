import axios from 'axios';
import cheerio from 'cheerio';

interface Items {
  name: string;
  price: number;
  link?: string;
  store: string | null;
  state: string | null;
}

const mercadoLivreScraping = async function (search: string, limit: number) {
  try {
    const items: Array<Items> = [];
    do {
      const response = await axios.get(
        'https://lista.mercadolivre.com.br/' + search.replace(' ', '-'),
      );
      const $ = cheerio.load(response.data);
      const $$ = $('.items-item');
      if (!$$) throw new Error('Failed to load response');
      $$.slice(0, limit > $$.length ? $$.length - 1 : limit).each(function (
        i,
        elem,
      ) {
        const price = {
          fraction: $(elem)
            .find('.item__price > .price__fraction')
            .text()
            .trim()
            .replace('.', ''),
          decimals:
            $(elem).find('.item__price > .price__decimals').text().trim() ||
            '00',
        };
        const title = $(elem).find('.item__title').text().split('por');
        const item: Items = {
          name: title[0].trim(),
          price: Number(`${price.fraction}.${price.decimals}`),
          link: $(elem).find('a').attr('href'),
          store: title[1] ? title[1].trim() : null,
          state: !!$(elem).find('.item__status').text().trim()
            ? $(elem).find('.item__status').text().trim()
            : null,
        };
        items.push(item);
        limit--;
      });
      search = search + '_Desde_' + items.length;
    } while (limit);

    return items;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default mercadoLivreScraping;
