import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EcommerceAdminService } from "./ecommerceAdmin.service";
import { EcommerceAdminControllerBase } from "./base/ecommerceAdmin.controller.base";

@swagger.ApiTags("ecommerceAdmins")
@common.Controller("ecommerceAdmins")
export class EcommerceAdminController extends EcommerceAdminControllerBase {
  constructor(
    protected readonly service: EcommerceAdminService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
