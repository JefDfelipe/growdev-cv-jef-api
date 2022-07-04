import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { v4 as uuid } from 'uuid'
import { AddressEntity } from './AddressEntity'
import { ContactEntity } from './ContactEntity';
import { ExperienceEntity } from './ExperienceEntity';
import { LanguagesEntity } from './LanguagesEntity';
import { SkillsEntity } from './SkillsEntity';

@Entity({ name: "user" })
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  profile: string;

  @OneToMany(type => AddressEntity, address => address.user)
  address?: AddressEntity[];

  @OneToMany(type => ContactEntity, contact => contact.user)
  contact?: ContactEntity[];

  @OneToMany(type => ExperienceEntity, experience => experience.user)
  experience?: ExperienceEntity[];

  @OneToMany(type => SkillsEntity, skill => skill.user)
  skill?: SkillsEntity[];

  @ManyToMany(type => LanguagesEntity, language => language.user)
  @JoinTable({
    name: 'user_languages',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'languages_id',
      referencedColumnName: 'id'
    }
  })
  language?: LanguagesEntity[];

  constructor(
    name: string,
    profile: string,
  ) {
    super();
    this.name = name;
    this.profile = profile;

    if (!this.id) {
      this.id = uuid()
    };
  };
};