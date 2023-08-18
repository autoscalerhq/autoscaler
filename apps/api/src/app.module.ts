import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ AuthModule.forRoot({
    // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
    connectionURI: "https://try.supertokens.com",
    // apiKey: <API_KEY(if configured)>,
    appInfo: {
      // Learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
      appName: "Autoscalar",
      apiDomain: "https://localhost:8080",
      websiteDomain: "https://localhost:3000",
      apiBasePath: "/auth",
      websiteBasePath: "/auth"
    },
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
