import { Request, Response } from 'express';
import { UserService } from '../services';
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
            const user = await service.findOne(id);

            return response.json({
                name: user?.name.toUpperCase()
            });
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        };
    };

    async store(request: Request, response: Response) {
        const { name, profile, addressId, contactId, experienceId, languagesId, skillsId }: UserDTO = request.body;
        const service = new UserService();

        try {
            const user = await service.create({
                name: name,
                profile: profile,
                addressId: addressId,
                contactId: contactId,
                experienceId: experienceId,
                languagesId: languagesId,
                skillsId: skillsId
            });

            return response.json(user);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        };
    };

    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { name, profile, addressId, contactId, experienceId, languagesId, skillsId }: UserDTO = request.body;
        const service = new UserService();

        try {
            const user = await service.update({
                id: id,
                name: name,
                profile: profile,
                addressId: addressId,
                contactId: contactId,
                experienceId: experienceId,
                languagesId: languagesId,
                skillsId: skillsId
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
            await service.delete(id);

            return response.sendStatus(204);
        } catch (error) {
            throw new HttpError(defaultErrorMessage, HttpInternalErrorCode);
        };
    };
};