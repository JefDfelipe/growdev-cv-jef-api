import { Request, Response } from 'express';
import {
  UserService,
  AddressService,
  ContactService,
  ExperienceService,
  LanguagesService,
  SkillsService
} from '../services';
import { HttpError } from '../errors';
import { defaultErrorMessage, HttpInternalErrorCode } from '../constants';
import { UserDTO } from '../dto';

export class UserController {
  async index(response: Response) {
    const service = new UserService();

    try {
      const user = await service.find();

      return response.json(user.map(user => {
        return {
          name: user.name.toUpperCase(),
          profile: user.profile.toUpperCase(),
        }
      }));
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const service = new UserService();

    try {
      const user = await service.findOne(parseInt(id));

      return response.json({
        name: user?.name.toUpperCase()
      });
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async store(request: Request, response: Response) {
    const { name, profile, address, contact, experience, languages, skills } = request.body;
    const userService = new UserService();
    const addressService = new AddressService();
    const contactService = new ContactService();
    const experienceService = new ExperienceService();
    const languageService = new LanguagesService();
    const skillService = new SkillsService();
    const dto: UserDTO = {
      name,
      profile,
      address: [],
      contact: [],
      experience: [],
      languages: [],
      skills: []
    };

    try {
      address.forEach(async (address: number) => {
        const resultQuery = await addressService.findOne(address);

        if (resultQuery && resultQuery.id) {
          dto.address?.push(resultQuery.id);
        };
      });

      contact.forEach(async (contact: number) => {
        const resultQuery = await contactService.findOne(contact);

        if (resultQuery && resultQuery.id) {
          dto.contact?.push(resultQuery.id);
        };
      });

      experience.forEach(async (experience: number) => {
        const resultQuery = await experienceService.findOne(experience);

        if (resultQuery && resultQuery.id) {
          dto.experience?.push(resultQuery.id);
        };
      });

      languages.forEach(async (language: number) => {
        const resultQuery = await languageService.findOne(language);

        if (resultQuery && resultQuery.id) {
          dto.languages?.push(resultQuery.id);
        };
      });

      skills.forEach(async (skill: number) => {
        const resultQuery = await skillService.findOne(skill);

        if (resultQuery && resultQuery.id) {
          dto.skills?.push(resultQuery.id);
        };
      });

      const user = await userService.create(dto);

      return response.json(user);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { name, profile }: UserDTO = request.body;
    const service = new UserService();

    try {
      const user = await service.update({
        id: parseInt(id),
        name: name,
        profile: profile
      });

      return response.json(user);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const service = new UserService();

    try {
      await service.delete(parseInt(id));

      return response.sendStatus(204);
    } catch (error) {
      throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
    };
  };
};