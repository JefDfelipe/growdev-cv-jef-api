import { AddressRepository } from '../database/repositories';
import { PersonDTO } from '../dto';

export class GeneroService {
    async find() {
        const repository = new AddressRepository();
        const genero = await repository.find();

        return genero;
    };

    async findOne(id: number) {
        const repository = new AddressRepository();
        const genero = await repository.findOne(id);

        return genero;
    };

    async create(generoDTO: PersonDTO) {
        const repository = new AddressRepository();
        const genero = await repository.create(generoDTO);

        return genero;
    };

    async update(generoDTO: PersonDTO) {
        const repository = new AddressRepository();
        const genero = await repository.update(generoDTO);

        return genero;
    };

    async delete(generoID: number) {
        const repository = new AddressRepository();
        await repository.delete(generoID);
    };
};