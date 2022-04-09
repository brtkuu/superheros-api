import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type HeroDocument = Hero & Document;

@Schema()
export class Hero {
  @Prop()
  name: string;

  @Prop()
  realName: string;

  @Prop()
  height: string;

  @Prop()
  weight: string;

  @Prop()
  city: string;
}

export const HeroSchema = SchemaFactory.createForClass(Hero);