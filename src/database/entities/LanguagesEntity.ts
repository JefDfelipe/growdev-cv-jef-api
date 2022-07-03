import { Entity, BaseEntity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { UserEntity } from './UserEntity';

@Entity({ name: "languages" })
export class LanguagesEntity extends BaseEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  language: string;

  @ManyToOne(type => UserEntity, user => user.language)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id'
  })
  user?: UserEntity[];

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