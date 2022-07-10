import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { UserEntity } from './UserEntity';

@Entity({ name: 'experience' })
export class ExperienceEntity extends BaseEntity {
  @PrimaryColumn()
  id?: number;

  @Column()
  company: string;

  @Column({ name: 'work_period' })
  workPeriod: string;

  @Column()
  description: string;

  @ManyToOne(type => UserEntity, user => user.experience)
  user?: UserEntity[];

  constructor(
    company: string,
    workPeriod: string,
    description: string
  ) {
    super();
    this.company = company;
    this.workPeriod = workPeriod;
    this.description = description;
  };
};