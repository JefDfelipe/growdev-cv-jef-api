import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity({ name: 'contact' })
export class ContactEntity extends BaseEntity {
  @PrimaryColumn()
  id?: number;

  @Column({ name: 'phone_number' })
  phoneNumber: string;

  @Column()
  email: string;

  @ManyToOne(type => UserEntity, user => user.contact)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id'
  })
  user?: UserEntity[];

  constructor(
    phoneNumber: string,
    email: string
  ) {
    super();
    this.phoneNumber = phoneNumber;
    this.email = email;
  };
};