import { Request, Response, NextFunction } from 'express';

export const logMiddleware = (request: Request, next: NextFunction) => {
    const { ip, method } = request;
    console.log(ip, method);

    next();
}