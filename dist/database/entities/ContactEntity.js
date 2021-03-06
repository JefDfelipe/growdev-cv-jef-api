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
exports.ContactEntity = void 0;
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("./UserEntity");
let ContactEntity = class ContactEntity extends typeorm_1.BaseEntity {
    constructor(phoneNumber, email) {
        super();
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    ;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ContactEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_number' }),
    __metadata("design:type", String)
], ContactEntity.prototype, "phoneNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ContactEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => UserEntity_1.UserEntity, user => user.contact),
    __metadata("design:type", Array)
], ContactEntity.prototype, "user", void 0);
ContactEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'contact' }),
    __metadata("design:paramtypes", [String, String])
], ContactEntity);
exports.ContactEntity = ContactEntity;
;
