import { Request, Response } from 'express';

import mercadoLivreScraping from './../services/scraping';

export default class crawlerCtrl {
  async index(req: Request, res: Response) {
    try {
      const { search, limit } = req.body;
      const response = await mercadoLivreScraping(search, limit);

      return res.status(200).json(response);
    } catch (err) {
      return res.status(err.httpStatusCode || 500).json({
        success: false,
        message: 'Não foi possível concluir a solicitação',
        error: err.message,
      });
    }
  }
}
