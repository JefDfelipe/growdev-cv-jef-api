import { UserEntity } from '../entities';
import { UserDTO } from '../../dto';

export class UserRepository {
  async find() {
    const user = await UserEntity.find();

    return user;
  };

  async findOne(id: string) {
    const user = await UserEntity.findOne(id);

    return user;
  };

  async create(userDTO: UserDTO) {
    const user = new UserEntity(
      userDTO.name,
      userDTO.profile,
      userDTO.addressId,
      userDTO.experienceId,
      userDTO.contactId,
      userDTO.languagesId,
      userDTO.skillsId
    );

    user.save();

    return user;
  };

  async update(userDTO: UserDTO) {
    const user = await UserEntity.findOne(userDTO.id);

    if (user) {
      user.name = userDTO.name;
      await user.save();
    };

    return user;
  };

  async delete(userID: string) {
    await UserEntity.delete(userID);
  };
}