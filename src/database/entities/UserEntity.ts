import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  JoinColumn
} from 'typeorm';
import { AddressEntity } from './AddressEntity'
import { ContactEntity } from './ContactEntity';
import { ExperienceEntity } from './ExperienceEntity';
import { LanguagesEntity } from './LanguagesEntity';
import { SkillsEntity } from './SkillsEntity';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  profile: string;

  @OneToMany(type => AddressEntity, address => address.user)
  @JoinColumn({ name: 'address_id', referencedColumnName: 'id' })
  address?: AddressEntity[];

  @OneToMany(type => ContactEntity, contact => contact.user)
  @JoinColumn({ name: 'contact_id', referencedColumnName: 'id' })
  contact?: ContactEntity[];

  @OneToMany(type => ExperienceEntity, experience => experience.user)
  @JoinColumn({ name: 'experience_id', referencedColumnName: 'id' })
  experience?: ExperienceEntity[];

  @OneToMany(type => SkillsEntity, skill => skill.user)
  @JoinColumn({ name: 'skills_id', referencedColumnName: 'id' })
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
    profile: string
  ) {
    super();
    this.name = name;
    this.profile = profile;
  };
};