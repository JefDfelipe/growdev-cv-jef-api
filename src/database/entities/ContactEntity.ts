import { Entity, BaseEntity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import { PersonEntity } from './PersonEntity';

@Entity({ name: "contact" })
export class ContactEntity extends BaseEntity {
  @PrimaryColumn()
  id?: string;

  @Column({ name: "phone_number" })
  phoneNumber: string;

  @Column()
  email: string;

  @ManyToOne(type => PersonEntity, person => person.contact)
  @JoinColumn({
    name: 'person_id',
    referencedColumnName: 'id'
  })
  person?: PersonEntity[];

  constructor(
    phoneNumber: string,
    email: string
  ) {
    super();
    this.phoneNumber = phoneNumber;
    this.email = email;

    if (!this.id) {
      this.id = uuid()
    };
  };
};