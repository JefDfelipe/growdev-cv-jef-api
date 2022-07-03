import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { UserEntity } from './UserEntity';

@Entity({ name: "address" })
export class AddressEntity extends BaseEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  cep: string;

  @Column()
  country: string;

  @ManyToOne(type => UserEntity, user => user.address)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id'
  })
  user?: UserEntity[];

  constructor(
    street: string,
    city: string,
    state: string,
    cep: string,
    country: string
  ) {
    super();
    this.street = street;
    this.city = city;
    this.state = state;
    this.cep = cep;
    this.country = country;

    if (!this.id) {
      this.id = uuid()
    };
  };
};