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
exports.newChanges1674327806207 = void 0;
class newChanges1674327806207 {
    constructor() {
        this.name = 'newChanges1674327806207';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "deletedAt"`);
            yield queryRunner.query(`ALTER TABLE "pets" DROP COLUMN "isActive"`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "pets" ADD "isActive" boolean NOT NULL DEFAULT true`);
            yield queryRunner.query(`ALTER TABLE "pets" ADD "deletedAt" TIMESTAMP`);
        });
    }
}
exports.newChanges1674327806207 = newChanges1674327806207;
//# sourceMappingURL=1674327806207-newChanges.js.map