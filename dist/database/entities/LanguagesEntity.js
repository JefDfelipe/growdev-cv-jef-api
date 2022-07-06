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
exports.LanguagesEntity = void 0;
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("./UserEntity");
let LanguagesEntity = class LanguagesEntity extends typeorm_1.BaseEntity {
    constructor(language) {
        super();
        this.language = language;
    }
    ;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], LanguagesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LanguagesEntity.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(type => UserEntity_1.UserEntity, user => user.language),
    (0, typeorm_1.JoinTable)({
        name: 'user_languages',
        joinColumn: {
            name: 'languages_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        }
    }),
    __metadata("design:type", Array)
], LanguagesEntity.prototype, "user", void 0);
LanguagesEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'languages' }),
    __metadata("design:paramtypes", [String])
], LanguagesEntity);
exports.LanguagesEntity = LanguagesEntity;
;
