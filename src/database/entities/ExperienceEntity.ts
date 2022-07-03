import { Entity, BaseEntity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { PersonEntity } from './PersonEntity';

@Entity({ name: "experience" })
export class ExperienceEntity extends BaseEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  company: string;

  @Column({ name: "work_period" })
  workPeriod: string;

  @Column()
  description: string;

  @ManyToOne(type => PersonEntity, person => person.experience)
  @JoinColumn({
    name: 'person_id',
    referencedColumnName: 'id'
  })
  person?: PersonEntity[];

  constructor(
    company: string,
    workPeriod: string,
    description: string
  ) {
    super();
    this.company = company;
    this.workPeriod = workPeriod;
    this.description = description;

    if (!this.id) {
      this.id = uuid()
    };
  };
};