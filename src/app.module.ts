import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroModule } from './superhero/hero.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:20723/superheros'),
    HeroModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
