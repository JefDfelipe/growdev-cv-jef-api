import { Entity, BaseEntity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { PersonEntity } from './PersonEntity';

@Entity({ name: "skills" })
export class SkillsEntity extends BaseEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  skill: string;

  @ManyToOne(type => PersonEntity, person => person.skill)
  @JoinColumn({
    name: 'person_id',
    referencedColumnName: 'id'
  })
  person?: PersonEntity[];

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