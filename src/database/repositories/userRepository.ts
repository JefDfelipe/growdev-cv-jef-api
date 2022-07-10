import { UserEntity } from '../entities';
import { UserDTO } from '../../dto';

export class UserRepository {
  async find() {
    const user = await UserEntity.find();

    return user;
  };

  async findOne(id: number) {
    const user = await UserEntity.findOne(id);

    return user;
  };

  async create(userDTO: UserDTO) {
    const user = new UserEntity(
      userDTO.name,
      userDTO.profile
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

  async delete(userID: number) {
    await UserEntity.delete(userID);
  };
}