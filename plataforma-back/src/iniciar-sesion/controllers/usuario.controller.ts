import {
  Controller,
  Param,
  Put,
  Delete,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private usuarioService: UsuarioService) {}

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }
  @Post()
  create(@Body() body: any) {
    return this.usuarioService.create(body);
  }
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.usuarioService.findOne(id);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.usuarioService.update(id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.usuarioService.delete(id);
  }
}
