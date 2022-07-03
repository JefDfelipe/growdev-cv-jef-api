import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  OneToMany,
  ManyToMany
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

  @Column({ name: "address_id" })
  addressId: string;

  @Column({ name: "experience_id" })
  experienceId: string;

  @Column({ name: "contact_id" })
  contactId: string;

  @Column({ name: "languages_id" })
  languagesId: string;

  @Column({ name: "skills_id" })
  skillsId: string;

  @OneToMany(type => AddressEntity, address => address.user)
  address?: AddressEntity[];

  @OneToMany(type => ContactEntity, contact => contact.user)
  contact?: ContactEntity[];

  @OneToMany(type => ExperienceEntity, experience => experience.user)
  experience?: ExperienceEntity[];

  @ManyToMany(type => LanguagesEntity, language => language.user)
  language?: LanguagesEntity[];

  @OneToMany(type => SkillsEntity, skill => skill.user)
  skill?: SkillsEntity[];


  constructor(
    name: string,
    profile: string,
    addressId: string,
    experienceId: string,
    contactId: string,
    languagesId: string,
    skillsId: string
  ) {
    super();
    this.name = name;
    this.profile = profile;
    this.addressId = addressId;
    this.experienceId = experienceId;
    this.contactId = contactId;
    this.languagesId = languagesId;
    this.skillsId = skillsId;

    if (!this.id) {
      this.id = uuid()
    };
  };
};