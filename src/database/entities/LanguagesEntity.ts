import { Entity, BaseEntity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { PersonEntity } from './PersonEntity';

@Entity({ name: "languages" })
export class LanguagesEntity extends BaseEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  language: string;

  @ManyToOne(type => PersonEntity, person => person.language)
  @JoinColumn({
    name: 'person_id',
    referencedColumnName: 'id'
  })
  person?: PersonEntity[];

  constructor(
    language: string
  ) {
    super();
    this.language = language;

    if (!this.id) {
      this.id = uuid()
    };
  };
};