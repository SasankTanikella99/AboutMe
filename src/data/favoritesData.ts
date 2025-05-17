export interface FavoriteItem {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
  link?: string;
}

type FavoritesData = {
  [key: string]: FavoriteItem[];
}

export const favoritesData: FavoritesData = {
  music: [
    {
      id: 1,
      title: 'Greatest Hits',
      subtitle: 'Michael Jackson',
      imageUrl: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://open.spotify.com/playlist/2oKgQmWLlAgCqw0YD8SvEg'
    },
    {
      id: 2,
      title: 'Songs',
      subtitle: 'Samuel Kim',
      imageUrl: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://open.spotify.com/artist/2bdcBjvuI9worc472GbeU0'
    },
    {
      id: 3,
      title: 'Top hits',
      subtitle: 'Anirudh Ravichander',
      imageUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://open.spotify.com/playlist/1emunKa3wYUdJoJVUs80O2'
    },
    {
      id: 4,
      title: 'All Time Hits',
      subtitle: 'Arijit Singh',
      imageUrl: 'https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://open.spotify.com/playlist/37i9dQZF1DWYztMONFqfvX'
    }
  ],
  books: [
    {
      id: 1,
      title: 'Meditations',
      subtitle: 'Marcus Aurelius',
      imageUrl: 'https://images.pexels.com/photos/2465877/pexels-photo-2465877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.amazon.com/MEDITATIONS-MARCUS-AURELIUS-Translation-Illustrated/dp/B0DK8VCQLM/ref=asc_df_B0DK8VCQLM?mcid=d966fba2bb98365cb607fea473c805da&hvocijid=15934338219376899803-B0DK8VCQLM-&hvexpln=73&tag=hyprod-20&linkCode=df0&hvadid=721245378154&hvpos=&hvnetw=g&hvrand=15934338219376899803&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9032443&hvtargid=pla-2281435178778&psc=1'
    },
    {
      id: 2,
      title: 'The power of unwavering focus',
      subtitle: 'Dandapani',
      imageUrl: 'https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.amazon.com/power-unwavering-focus-Dandapani/dp/B0B4FQ8Z5B'
    },
    {
      id: 3,
      title: 'The Alchemist',
      subtitle: 'Paulo Coelho',
      imageUrl: 'https://images.pexels.com/photos/904616/pexels-photo-904616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0061122416'
    },
    {
      id: 4,
      title: 'The Intelligent Investor',
      subtitle: 'Benjamin Graham',
      imageUrl: 'https://images.pexels.com/photos/2898170/pexels-photo-2898170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.amazon.com/Intelligent-Investor-Benjamin-Graham/dp/0060555661'
    }
  ],
  movies: [
    {
      id: 1,
      title: 'Shawshank Redemption',
      subtitle: 'Frank Darabont',
      imageUrl: 'https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.imdb.com/title/tt0111161/'
    },
    {
      id: 2,
      title: 'The Godfather',
      subtitle: 'Francis Ford Coppola',
      imageUrl: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.imdb.com/title/tt0068646/'
    },
    {
      id: 3,
      title: 'Predestination',
      subtitle: 'Michael Spierig, Peter Spierig',
      imageUrl: 'https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.imdb.com/title/tt2397535/'
    },
    {
      id: 4,
      title: 'Okeokkadu',
      subtitle: 'Shankar',
      imageUrl: 'https://images.pexels.com/photos/9738069/pexels-photo-9738069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      link: 'https://www.imdb.com/title/tt9738069/'
    }
  ],
  
};