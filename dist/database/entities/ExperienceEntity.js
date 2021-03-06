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
exports.ExperienceEntity = void 0;
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("./UserEntity");
let ExperienceEntity = class ExperienceEntity extends typeorm_1.BaseEntity {
    constructor(company, workPeriod, description) {
        super();
        this.company = company;
        this.workPeriod = workPeriod;
        this.description = description;
    }
    ;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ExperienceEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExperienceEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'work_period' }),
    __metadata("design:type", String)
], ExperienceEntity.prototype, "workPeriod", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExperienceEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => UserEntity_1.UserEntity, user => user.experience),
    __metadata("design:type", Array)
], ExperienceEntity.prototype, "user", void 0);
ExperienceEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'experience' }),
    __metadata("design:paramtypes", [String, String, String])
], ExperienceEntity);
exports.ExperienceEntity = ExperienceEntity;
;
