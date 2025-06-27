import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { Usuario } from '../entities/usuario.entity'; // Adjust the import path as necessary

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario) private usuarioRepo: Repository<Usuario>,
  ) {}

  findAll(){
    return this.usuarioRepo.find();
  }
  findOne(id: number) {
    return this.usuarioRepo.findOne(id);
  }
  create(body: any){
    const newUsuario = this.usuarioRepo.create(body);
    return this.usuarioRepo.save(newUsuario);
  }
  async update(id: number, body: any) {
    const usuario = await this.usuarioRepo.findOne(id);
    this.usuarioRepo.merge(usuario, body);
    return this.usuarioRepo.save(usuario);
  }
  async delete(id: number) {
    await this.usuarioRepo.delete(id);
    return true;
  }
}
