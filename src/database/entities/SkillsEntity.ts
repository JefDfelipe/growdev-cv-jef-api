import { Entity, BaseEntity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { UserEntity } from './UserEntity';

@Entity({ name: 'skills' })
export class SkillsEntity extends BaseEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  skill: string;

  @ManyToOne(type => UserEntity, user => user.skill)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id'
  })
  user?: UserEntity[];

  constructor(
    skill: string
  ) {
    super();
    this.skill = skill;

    if (!this.id) {
      this.id = uuid()
    };
  };
};