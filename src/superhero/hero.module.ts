import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HeroController } from "./hero.controller";
import { Hero, HeroSchema } from "./hero.schema";
import { HeroService } from "./hero.service";

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:20723/superheros'),
    MongooseModule.forFeature([{name: Hero.name, schema: HeroSchema}]),
  ],
  controllers: [HeroController],
  providers: [HeroService]
})

export class HeroModule{};

