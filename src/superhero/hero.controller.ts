import { Controller, Get, Param } from "@nestjs/common";
import { get } from "http";
import { HeroService } from "./hero.service";

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {};

  @Get('/hero')
  async getHero() {
    return await this.heroService.getAllHeros();
  }

  @Get('/hero/:id')
  async getHeroById(@Param('id') id: number) {
    return await this.heroService.getHeroById(id);
  }
}