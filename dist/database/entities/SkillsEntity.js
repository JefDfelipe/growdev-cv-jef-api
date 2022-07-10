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
exports.SkillsEntity = void 0;
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("./UserEntity");
let SkillsEntity = class SkillsEntity extends typeorm_1.BaseEntity {
    constructor(skill) {
        super();
        this.skill = skill;
    }
    ;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], SkillsEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SkillsEntity.prototype, "skill", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => UserEntity_1.UserEntity, user => user.skill),
    __metadata("design:type", Array)
], SkillsEntity.prototype, "user", void 0);
SkillsEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'skills' }),
    __metadata("design:paramtypes", [String])
], SkillsEntity);
exports.SkillsEntity = SkillsEntity;
;
