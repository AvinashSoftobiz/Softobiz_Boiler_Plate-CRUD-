import { Module } from '@nestjs/common';
import { ConfigurationModule } from './infrastructure/configuration/configuration.module';
import { ProductModule } from "./application/use-cases/product/product.module";
import { UserModule } from "./application/use-cases/user/user.module";

@Module({
	imports: [ConfigurationModule, ProductModule, ProductModule, UserModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
