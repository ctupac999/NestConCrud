import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type AlbumDocument = HydratedDocument<Album>;
@Schema()
export class Album {
        @Prop({ unique: true, default: Date.now })
        _id: string;
        @Prop({ unique: true, required: true })
        name: string;
        @Prop({ required: true })
        releaseDate: string;
        @Prop({ required: true })
        tracks: number;
        @Prop({ type: {} })
        famousSongs: {
                song1: string,
                song2: string,
                song3: string,
        };
        @Prop({ required: true })
        albumCover: string;
        @Prop({ required: true })
        description: string;
        @Prop({ required: true })
        artistInfo: string;
        @Prop({ required: true })
        duration: string;
};

export const AlbumSchema = SchemaFactory.createForClass(Album);


// export class Album {
//         name: string;
//         _id: string;
//         releaseDate: string;
//         tracks: number;
//         famousSongs: {
//                 song1: string,
//                 song2: string,
//                 song3: string
//         };
//         albumCover: string;
//         description: string;
//         artistInfo: string;
//         duration: string
// }
