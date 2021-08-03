import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action return coffees';
  }
  @Get('flavors')
  findFlavours() {
    return 'Latte';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return ${id} coffee`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
