"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const AddressEntity_1 = require("./AddressEntity");
const ContactEntity_1 = require("./ContactEntity");
const ExperienceEntity_1 = require("./ExperienceEntity");
const LanguagesEntity_1 = require("./LanguagesEntity");
const SkillsEntity_1 = require("./SkillsEntity");
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
    constructor(name, profile) {
        super();
        this.name = name;
        this.profile = profile;
        // this.addressId = addressId;
        // this.contactId = contactId;
        // this.experienceId = experienceId;
        // this.skillsId = skillsId;
        // this.languagesId = languagesId;
    }
    ;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserEntity.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => AddressEntity_1.AddressEntity, address => address.user),
    (0, typeorm_1.JoinColumn)({ name: 'address_id', referencedColumnName: 'id' }),
    __metadata("design:type", Array)
], UserEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ContactEntity_1.ContactEntity, contact => contact.user),
    (0, typeorm_1.JoinColumn)({ name: 'contact_id', referencedColumnName: 'id' }),
    __metadata("design:type", Array)
], UserEntity.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => ExperienceEntity_1.ExperienceEntity, experience => experience.user),
    (0, typeorm_1.JoinColumn)({ name: 'experience_id', referencedColumnName: 'id' }),
    __metadata("design:type", Array)
], UserEntity.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => SkillsEntity_1.SkillsEntity, skill => skill.user),
    (0, typeorm_1.JoinColumn)({ name: 'skills_id', referencedColumnName: 'id' }),
    __metadata("design:type", Array)
], UserEntity.prototype, "skill", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => LanguagesEntity_1.LanguagesEntity, language => language.user),
    (0, typeorm_1.JoinTable)({
        name: 'user_languages',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'languages_id',
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], UserEntity.prototype, "language", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'user' }),
    __metadata("design:paramtypes", [String, String])
], UserEntity);
exports.UserEntity = UserEntity;
;
