import { Controller, Get, Param, Query } from "@nestjs/common";
import { filter } from "rxjs";
import { HeroService } from "./hero.service";

type SortByType = "realName" | "name" | "city";

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
  async findHero(@Query('name') name: string, @Query('realName') realName: string, @Query('city') city: string, @Query('sortBy') sortBy: SortByType, @Query('asc') asc: number) {
    const filters: Record<string, string> = {};

    const sort: Record<string, string | number> = {};

    if(sortBy) {
      sort[sortBy] = asc;
    }

    if(name) {
      filters.name = name;
    }

    if(realName) {
      filters.realName = realName;
    }

    if(city) {
      filters.city = city;
    }

    return await this.heroService.filterHeros(filters, sort);
  }
}
