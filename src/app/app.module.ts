import { Module } from '@nestjs/common';
import { AppController } from '@/app/controllers/app.controller';
import { AppService } from '@/app/services/app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
