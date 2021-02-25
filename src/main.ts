import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(process.env.PORT);
}
bootstrap();