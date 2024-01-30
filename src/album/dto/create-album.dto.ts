export class CreateAlbumDto {
    name: string;
    releaseDate: string;
    tracks: number;
    famousSongs: {
        song1: string,
        song2: string,
        song3: string
    };
    albumCover: string;
    description: string;
    artistInfo: string;
    duration: string
}
