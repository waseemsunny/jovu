import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FeedService } from "./feed.service";
import { FeedControllerBase } from "./base/feed.controller.base";

@swagger.ApiTags("feeds")
@common.Controller("feeds")
export class FeedController extends FeedControllerBase {
  constructor(
    protected readonly service: FeedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
