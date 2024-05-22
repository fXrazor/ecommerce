import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { EcommerceAdminResolverBase } from "./base/ecommerceAdmin.resolver.base";
import { EcommerceAdmin } from "./base/EcommerceAdmin";
import { EcommerceAdminService } from "./ecommerceAdmin.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => EcommerceAdmin)
export class EcommerceAdminResolver extends EcommerceAdminResolverBase {
  constructor(
    protected readonly service: EcommerceAdminService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
