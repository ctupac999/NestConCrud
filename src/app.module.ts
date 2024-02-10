import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AlbumModule, MongooseModule.forRoot('mongodb+srv://cristian:nest2024@nestjs.e0teljn.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
