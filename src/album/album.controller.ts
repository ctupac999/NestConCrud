import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Controller('album')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) { }

  @Get('find')
  async findAllAlbum() {
    const allAlbum = await this.albumService.findAllAlbum();
    return allAlbum
  }
  @Post('create')
  async createAlbum(@Body() createAlbumDto: CreateAlbumDto) {
    const albumCreated = await this.albumService.createAlbum(createAlbumDto);
    return albumCreated
  }


  @Get(':id')
  async findOneAlbum(@Param('id') id: string) {
    const findOneAlbum = await this.albumService.findOneAlbum(id);
    return findOneAlbum
  }

  // @Patch(':id')
  // async updateAlbum(@Res() response, @Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
  //   const updateAlbum = await this.albumService.updateAlbum(id, updateAlbumDto);
  //   const findOneAlbum = await this.albumService.findOneAlbum(id);
  //   return response.status(HttpStatus.OK).json({
  //     message1: "lo que quieres cambiar en el album es esto:",
  //     updateAlbumDto,
  //     message2: "el album a actualizar es:",
  //     updateAlbum,
  //     message3: "el album actualizado queda así:",
  //     findOneAlbum,
  //   })
  // }

  @Patch(':id')
  async updateAlbum(@Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
    const updateAlbum = await this.albumService.updateAlbum(id, updateAlbumDto);
    return updateAlbum
  }

  @Delete(':id')
  async removeAlbum(@Param('id') id: string) {
    const removeAlbum = await this.albumService.removeAlbum(id);
    return removeAlbum
  }
}