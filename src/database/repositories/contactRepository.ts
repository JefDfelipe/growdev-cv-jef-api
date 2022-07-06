import { ContactEntity } from '../entities';
import { ContactDTO } from '../../dto';

export class ContactRepository {
  async find() {
    const contact = await ContactEntity.find();

    return contact;
  };

  async findOne(id: number) {
    const contact = await ContactEntity.findOne(id);

    return contact;
  };

  async create(contactDTO: ContactDTO) {
    const contact = new ContactEntity(
      contactDTO.phoneNumber,
      contactDTO.email
    );

    contact.save();

    return contact;
  };

  async update(contactDTO: ContactDTO) {
    const contact = await ContactEntity.findOne(contactDTO.id);

    if (contact) {
      contact.phoneNumber = contactDTO.phoneNumber;
      contact.email = contactDTO.email;

      await contact.save();
    };

    return contact;
  };

  async delete(contactID: number) {
    await ContactEntity.delete(contactID);
  };
};