import { AddressEntity } from '../entities';
import { AddressDTO } from '../../dto';

export class AddressRepository {
  async find() {
    const address = await AddressEntity.find();

    return address;
  };

  async findOne(id: number) {
    const address = await AddressEntity.findOne(id);

    return address;
  };

  async create(addressDTO: AddressDTO) {
    const address = new AddressEntity(
      addressDTO.street,
      addressDTO.city,
      addressDTO.state,
      addressDTO.cep,
      addressDTO.country
    );

    address.save();

    return address;
  };

  async update(addressDTO: AddressDTO) {
    const address = await AddressEntity.findOne(addressDTO.id);

    if (address) {
      address.street = addressDTO.street;
      address.city = addressDTO.city;
      address.state = addressDTO.state;
      address.cep = addressDTO.cep;
      address.country = addressDTO.country;

      await address.save();
    };

    return address;
  };

  async delete(addressID: number) {
    await AddressEntity.delete(addressID);
  };
};