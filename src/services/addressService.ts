import { AddressRepository } from '../database/repositories';
import { AddressDTO } from '../dto';

export class AddressService {
  async find() {
    const repository = new AddressRepository();
    const user = await repository.find();

    return user;
  };

  async findOne(id: number) {
    const repository = new AddressRepository();
    const user = await repository.findOne(id);

    return user;
  };

  async create(userDTO: AddressDTO) {
    const repository = new AddressRepository();
    const user = await repository.create(userDTO);

    return user;
  };

  async update(userDTO: AddressDTO) {
    const repository = new AddressRepository();
    const user = await repository.update(userDTO);

    return user;
  };

  async delete(userID: number) {
    const repository = new AddressRepository();
    await repository.delete(userID);
  };
};