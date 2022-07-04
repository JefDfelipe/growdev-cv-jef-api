import { ContactRepository } from '../database/repositories';
import { ContactDTO } from '../dto';

export class ContactService {
  async find() {
    const repository = new ContactRepository();
    const contact = await repository.find();

    return contact;
  };

  async findOne(id: string) {
    const repository = new ContactRepository();
    const contact = await repository.findOne(id);

    return contact;
  };

  async create(contactDTO: ContactDTO) {
    const repository = new ContactRepository();
    const contact = await repository.create(contactDTO);

    return contact;
  };

  async update(contactDTO: ContactDTO) {
    const repository = new ContactRepository();
    const contact = await repository.update(contactDTO);

    return contact;
  };

  async delete(contactID: string) {
    const repository = new ContactRepository();
    await repository.delete(contactID);
  };
};