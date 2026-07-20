import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SavedPlacesService, SavedPlacesRecord } from './saved-places.service';

@Controller('saved-places')
export class SavedPlacesController {
  constructor(private readonly service: SavedPlacesService) {}

  @Post()
  create(@Body() payload: Omit<SavedPlacesRecord, 'id'>) {
    return this.service.create(payload);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.service.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload: Partial<SavedPlacesRecord>) {
    return this.service.update(id, payload);
  }
}
