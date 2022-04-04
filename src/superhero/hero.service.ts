import { Injectable } from "@nestjs/common";

@Injectable()
export class HeroService {
  getHero(): string {
    return 'superhero';
  }
}