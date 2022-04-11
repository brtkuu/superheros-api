import { Controller, Get, Param, Query } from "@nestjs/common";
import { filter } from "rxjs";
import { HeroService } from "./hero.service";

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {};

  @Get('/hero')
  async getHero() {
    return await this.heroService.getAllHeros();
  }

  @Get('/hero/id/:id')
  async getHeroById(@Param('id') id: number) {
    return await this.heroService.getHeroById(id);
  }

  @Get('/hero/find')
  async findHero(@Query('name') name: string, @Query('realName') realName: string, @Query('city') city: string) {
    const filters: Record<string, string> | any = {};

    if(name) {
      filters.name = name;
    }

    if(realName) {
      filters.realName = realName;
    }

    if(city) {
      filters.city = city;
    }

    return await this.heroService.filterHeros(filters);
  }
}
