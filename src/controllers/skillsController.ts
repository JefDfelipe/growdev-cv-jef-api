import { Request, Response } from 'express';
import { SkillsService } from '../services';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';
import { SkillsDTO } from '../dto';

export class SkillsController {
  async index(response: Response) {
    const service = new SkillsService();

    try {
      const skills = await service.find();

      return response.json(skills.map(skills => {
        return {
          skill: skills.skill.toUpperCase()
        }
      }));
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const service = new SkillsService();

    try {
      const skills = await service.findOne(parseInt(id));

      return response.json({
        skill: skills?.skill.toUpperCase()
      });
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async store(request: Request, response: Response) {
    const { skill }: SkillsDTO = request.body;
    const service = new SkillsService();

    try {
      const skills = await service.create({
        skill: skill
      });

      return response.json(skills);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { skill }: SkillsDTO = request.body;
    const service = new SkillsService();

    try {
      const skills = await service.update({
        id: parseInt(id),
        skill: skill
      });

      return response.json(skills);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = new SkillsService();

    try {
      await service.delete(parseInt(id));

      return response.sendStatus(204);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };
};