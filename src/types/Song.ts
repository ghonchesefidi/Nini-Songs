interface Song {
    id: string;
    name: SongName;
    image: string;
    translation: string;
    src: string;
}

interface SongName {
    persian: string;
    english: string;
}

export default Song