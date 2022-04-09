import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Hero, HeroDocument } from "./hero.schema";
import { Model } from 'mongoose';

@Injectable()
export class HeroService {
  constructor(@InjectModel(Hero.name) private heroModel: Model<HeroDocument>) {}

  async getHeros(): Promise<Hero[]> {
    console.log(this.heroModel.collection)
    return this.heroModel.find().exec();
  }
}