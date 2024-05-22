import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordService } from "../auth/password.service";
import { EcommerceAdminServiceBase } from "./base/ecommerceAdmin.service.base";

@Injectable()
export class EcommerceAdminService extends EcommerceAdminServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {
    super(prisma, passwordService);
  }
}
