interface AnimeImages {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

interface AnimeImageFormats {
  jpg: AnimeImages;
  webp: AnimeImages;
}

interface TrailerImages {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
}

interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: TrailerImages;
}

interface AnimeTitle {
  type: string;
  title: string;
}

interface DateProp {
  day: number;
  month: number;
  year: number;
}

interface AiredInfo {
  from: string;
  to: string;
  prop: {
    from: DateProp;
    to: DateProp;
  };
  string: string;
}

interface BroadcastInfo {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

interface AnimeEntity {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface AnimeGenre {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

interface Anime {
  mal_id: number;
  url: string;
  images: AnimeImageFormats;
  trailer: Trailer;
  approved: boolean;
  titles: AnimeTitle[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: AiredInfo;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: BroadcastInfo;
  producers: AnimeEntity[];
  licensors: AnimeEntity[];
  studios: AnimeEntity[];
  genres: AnimeGenre[];
  explicit_genres: AnimeGenre[];
  themes: AnimeGenre[];
  demographics: AnimeGenre[];
}