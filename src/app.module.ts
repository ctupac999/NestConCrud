import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [AlbumModule, UserModule, MongooseModule.forRoot('mongodb+srv://correofrg:felix@book-api.nbz0kit.mongodb.net/apiMusic')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
