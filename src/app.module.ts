import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AlbumModule, MongooseModule.forRoot('mongodb+srv://cristiands9999:mongo2024@album.efxv4lm.mongodb.net/album1')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
