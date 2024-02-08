import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { AlbumService } from './album.service';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';

@Get('find')
async findAllAlbum(@Res() response) {
  const allAlbum = await this.albumService.findAllAlbum();
  response.status(HttpStatus.OK).json({
    message: 'los albunes encontrados son:',
    allAlbum
  })

}

@Get(':id')
async findOneAlbum(@Res() response, @Param('id') id: string) {
  const findOneAlbum = await this.albumService.findOneAlbum(id);
  if (!findOneAlbum) throw new NotFoundException('Album does not exist')
  response.status(HttpStatus.OK).json({
    message: "tu albun buscado es:",
    findOneAlbum

  })
  // const findOneAlbum = await this.albumService.findOneAlbum(id);
  // return this.albumService.findOne(+id);
}

@Patch(':id')
async updateAlbum(@Res() response, @Param('id') id: string, @Body() updateAlbumDto: UpdateAlbumDto) {
  const updateAlbum = await this.albumService.updateAlbum(id, updateAlbumDto);
  const findOneAlbum = await this.albumService.findOneAlbum(id);
  return response.status(HttpStatus.OK).json({
    message1: "lo que quieres cambiar en el album es esto:",
    updateAlbumDto,
    message2: "el album a actualizar es:",
    updateAlbum,
    message3: "el album actualizado queda así:",
    findOneAlbum,
  })
}

@Delete(':id')
async removeAlbum(@Res() response, @Param('id') id: string) {
  const removeAlbum = await this.albumService.removeAlbum(id);
  if (!removeAlbum) throw new NotFoundException('user does not exist')
  return response.status(HttpStatus.OK).json({
    message: 'the user has been deleted succefully',
    removeAlbum
  })


}
}
