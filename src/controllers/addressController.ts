import { Request, Response } from 'express';
import { AddressService } from '../services';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';
import { AddressDTO } from '../dto';

export class AddressController {
  async index(response: Response) {
    const service = new AddressService();

    try {
      const address = await service.find();

      return response.json(address.map(address => {
        return {
          street: address.street.toUpperCase(),
          city: address.city.toUpperCase(),
          state: address.state.toUpperCase(),
          cep: address.cep.toUpperCase(),
          country: address.country.toUpperCase()
        };
      }));
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const service = new AddressService();

    try {
      const address = await service.findOne(id);

      return response.json({
        street: address?.street.toUpperCase(),
        city: address?.city.toUpperCase(),
        state: address?.state.toUpperCase(),
        cep: address?.cep.toUpperCase(),
        country: address?.country.toUpperCase()
      });
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async store(request: Request, response: Response) {
    const { street, city, state, cep, country }: AddressDTO = request.body;
    const service = new AddressService();

    try {
      const address = await service.create({
        street: street,
        city: city,
        state: state,
        cep: cep,
        country: country
      });

      return response.json(address);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { street, city, state, cep, country }: AddressDTO = request.body;
    const service = new AddressService();

    try {
      const address = await service.update({
        id: id,
        street: street,
        city: city,
        state: state,
        cep: cep,
        country: country
      });

      return response.json(address);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = new AddressService();

    try {
      await service.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };
};