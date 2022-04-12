import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Hero, HeroDocument } from "./hero.schema";
import { Model } from 'mongoose';

@Injectable()
export class HeroService {
  constructor(@InjectModel(Hero.name) private heroModel: Model<HeroDocument>) {}

  async getAllHeros(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }

  async getHeroById(id: number): Promise<Hero> {
    return this.heroModel.findOne({id}).exec();
  }

  async filterHeros(filters: Record<string, string> | {}, sortBy: Record<string, string | number>): Promise<Hero[]> {
    if (filters !== {}) {
      return this.heroModel.find(filters).sort(sortBy).exec();
    }
    return this.heroModel.find().exec();
  }
}
