import { Request, Response } from 'express';
import { ExperienceService } from '../services';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';
import { ExperienceDTO } from '../dto';

export class ExperienceController {
  async index(response: Response) {
    const service = new ExperienceService();

    try {
      const experience = await service.find();

      return response.json(experience.map(experience => {
        return {
          company: experience.company.toUpperCase(),
          workPeriod: experience.workPeriod.toUpperCase(),
          description: experience.description.toUpperCase()
        }
      }));
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ExperienceService();

    try {
      const experience = await service.findOne(id);

      return response.json({
        company: experience?.company.toUpperCase(),
        workPeriod: experience?.workPeriod.toUpperCase(),
        description: experience?.description.toUpperCase()
      });
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async store(request: Request, response: Response) {
    const { company, workPeriod, description }: ExperienceDTO = request.body;
    const service = new ExperienceService();

    try {
      const experience = await service.create({
        company: company,
        workPeriod: workPeriod,
        description: description
      });

      return response.json(experience);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { company, workPeriod, description }: ExperienceDTO = request.body;
    const service = new ExperienceService();

    try {
      const experience = await service.update({
        id: id,
        company: company,
        workPeriod: workPeriod,
        description: description
      });

      return response.json(experience);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = new ExperienceService();

    try {
      await service.delete(id);

      return response.sendStatus(204);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };
};