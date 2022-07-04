import { Request, Response } from 'express';
import { ContactService } from '../services';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';
import { ContactDTO } from '../dto';

export class ContactController {
  async index(response: Response) {
    const service = new ContactService();

    try {
      const contact = await service.find();

      return response.json(contact.map(contact => {
        return {
          phoneNumber: contact.phoneNumber.toUpperCase(),
          email: contact.email.toUpperCase()
        }
      }));
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ContactService();

    try {
      const contact = await service.findOne(id);

      return response.json({
        phoneNumber: contact?.phoneNumber.toUpperCase(),
        email: contact?.email.toUpperCase()
      });
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async store(request: Request, response: Response) {
    const { phoneNumber, email }: ContactDTO = request.body;
    const service = new ContactService();

    try {
      const contact = await service.create({
        phoneNumber: phoneNumber,
        email: email
      });

      return response.json(contact);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { phoneNumber, email }: ContactDTO = request.body;
    const service = new ContactService();
    try {
      const contact = await service.update({
        id: id,
        phoneNumber: phoneNumber,
        email: email
      });

      return response.json(contact);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ContactService();

    try {
      await service.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };
};