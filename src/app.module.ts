import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockController } from './mock/mock.controller';
import { OrganizationModule } from './modules/organization/organization.module';

@Module({
  imports: [OrganizationModule],
  controllers: [AppController, MockController],
  providers: [AppService],
})
export class AppModule {}
