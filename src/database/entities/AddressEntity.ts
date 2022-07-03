import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { v4 as uuid } from 'uuid';
import { PersonEntity } from './PersonEntity';

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

  @ManyToOne(type => PersonEntity, person => person.address)
  @JoinColumn({
    name: 'person_id',
    referencedColumnName: 'id'
  })
  person?: PersonEntity[];

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