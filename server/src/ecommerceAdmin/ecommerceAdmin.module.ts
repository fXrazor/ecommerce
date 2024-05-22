import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EcommerceAdminModuleBase } from "./base/ecommerceAdmin.module.base";
import { EcommerceAdminService } from "./ecommerceAdmin.service";
import { EcommerceAdminController } from "./ecommerceAdmin.controller";
import { EcommerceAdminResolver } from "./ecommerceAdmin.resolver";

@Module({
  imports: [EcommerceAdminModuleBase, forwardRef(() => AuthModule)],
  controllers: [EcommerceAdminController],
  providers: [EcommerceAdminService, EcommerceAdminResolver],
  exports: [EcommerceAdminService],
})
export class EcommerceAdminModule {}
