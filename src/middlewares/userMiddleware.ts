import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors';
import { HttpBadRequestCode, invalidField } from '../constants';

export const userNameValidateMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const { name } = request.body;

    if (name.length < 2 || name.length > 255) {
        throw new HttpError(invalidField('Nome'), HttpBadRequestCode);
    };

    next();
};