import { Module } from '@nestjs/common';
import { UsuarioService } from './services/usuario.service';
import { UsuarioController } from './controllers/usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]), // Add your entities here if needed
  ],
  providers: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule {}
