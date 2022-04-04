import { Controller, Get } from "@nestjs/common";
import { HeroService } from "./hero.service";

@Controller()
export class HeroController {
  constructor(private readonly heroService: HeroService) {};

  @Get('/hero')
  getHero() {
    return this.heroService.getHero();
  }
}