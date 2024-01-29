import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AlbumModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
