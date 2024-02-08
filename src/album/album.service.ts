import { Injectable } from '@nestjs/common';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './schemas/album.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AlbumService {
  constructor(@InjectModel('Album') private readonly albumModel: Model<Album>) { }

  async createAlbum(createAlbumDto: CreateAlbumDto): Promise<Album> {
    const albumCreated = new this.albumModel(createAlbumDto)
    return await albumCreated.save();
  }
  async findOneAlbum(id: string): Promise<Album> {
    const findAlbum = await this.albumModel.findById(id);
    return findAlbum
  }


  async findAllAlbum(): Promise<Album[]> {
    const allAlbum = await this.albumModel.find();
    console.log(allAlbum);
    return allAlbum;
  }

  async updateAlbum(
    id: string,
    updateAlbumDto: UpdateAlbumDto):
    Promise<Album> {
    const updateAlbum = await this.albumModel.findByIdAndUpdate(id, updateAlbumDto);
    return updateAlbum
  }

  async removeAlbum(id: string): Promise<Album> {
    const removeAlbum = await this.albumModel.findByIdAndDelete(id);
    return removeAlbum
  }
}
