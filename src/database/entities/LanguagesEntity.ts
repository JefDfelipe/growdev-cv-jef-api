import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  ManyToMany, 
  JoinTable } from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity({ name: 'languages' })
export class LanguagesEntity extends BaseEntity {
  @PrimaryColumn()
  id?: number;

  @Column()
  language: string;

  @ManyToMany(type => UserEntity, user => user.language)
  @JoinTable({
    name: 'user_languages',
    joinColumn: {
      name: 'languages_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id'
    }
  })
  user?: UserEntity[];

  constructor(
    language: string
  ) {
    super();
    this.language = language;
  };
};