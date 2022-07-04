import { Request, Response } from 'express';
import { LanguagesService } from '../services';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';
import { LanguagesDTO } from '../dto';

export class LanguagesController {
  async index(response: Response) {
    const service = new LanguagesService();

    try {
      const languages = await service.find();

      return response.json(languages.map(languages => {
        return {
          language: languages.language.toUpperCase()
        }
      }));
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const service = new LanguagesService();

    try {
      const languages = await service.findOne(id);

      return response.json({
        language: languages?.language.toUpperCase()
      });
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async store(request: Request, response: Response) {
    const { language }: LanguagesDTO = request.body;
    const service = new LanguagesService();

    try {
      const languages = await service.create({
        language: language
      });

      return response.json(languages);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { language }: LanguagesDTO = request.body;
    const service = new LanguagesService();

    try {
      const languages = await service.update({
        id: id,
        language: language
      });

      return response.json(languages);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = new LanguagesService();

    try {
      await service.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };
};