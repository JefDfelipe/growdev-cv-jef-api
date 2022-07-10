import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity({ name: 'skills' })
export class SkillsEntity extends BaseEntity {
  @PrimaryColumn()
  id?: number;

  @Column()
  skill: string;

  @ManyToOne(type => UserEntity, user => user.skill)
  user?: UserEntity[];

  constructor(
    skill: string
  ) {
    super();
    this.skill = skill;
  };
};