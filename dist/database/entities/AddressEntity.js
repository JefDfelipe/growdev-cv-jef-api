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
exports.AddressEntity = void 0;
const typeorm_1 = require("typeorm");
const UserEntity_1 = require("./UserEntity");
let AddressEntity = class AddressEntity extends typeorm_1.BaseEntity {
    constructor(street, city, state, cep, country) {
        super();
        this.street = street;
        this.city = city;
        this.state = state;
        this.cep = cep;
        this.country = country;
    }
    ;
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], AddressEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AddressEntity.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AddressEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AddressEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AddressEntity.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AddressEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => UserEntity_1.UserEntity, user => user.address),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", Array)
], AddressEntity.prototype, "user", void 0);
AddressEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'address' }),
    __metadata("design:paramtypes", [String, String, String, String, String])
], AddressEntity);
exports.AddressEntity = AddressEntity;
;
