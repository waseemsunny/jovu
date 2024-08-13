import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FeedModuleBase } from "./base/feed.module.base";
import { FeedService } from "./feed.service";
import { FeedController } from "./feed.controller";
import { FeedResolver } from "./feed.resolver";

@Module({
  imports: [FeedModuleBase, forwardRef(() => AuthModule)],
  controllers: [FeedController],
  providers: [FeedService, FeedResolver],
  exports: [FeedService],
})
export class FeedModule {}
