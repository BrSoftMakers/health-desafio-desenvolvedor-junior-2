"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changesTables1674311127925 = void 0;
class changesTables1674311127925 {
    constructor() {
        this.name = 'changesTables1674311127925';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "pet_owner" DROP COLUMN "createdAt"`);
            yield queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb"`);
            yield queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "UQ_275e1bb3fdeea68f8356d8e1ebb" UNIQUE ("ownerId")`);
            yield queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb" FOREIGN KEY ("ownerId") REFERENCES "pet_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb"`);
            yield queryRunner.query(`ALTER TABLE "pets" DROP CONSTRAINT "UQ_275e1bb3fdeea68f8356d8e1ebb"`);
            yield queryRunner.query(`ALTER TABLE "pets" ADD CONSTRAINT "FK_275e1bb3fdeea68f8356d8e1ebb" FOREIGN KEY ("ownerId") REFERENCES "pet_owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "pet_owner" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        });
    }
}
exports.changesTables1674311127925 = changesTables1674311127925;
//# sourceMappingURL=1674311127925-changesTables.js.map