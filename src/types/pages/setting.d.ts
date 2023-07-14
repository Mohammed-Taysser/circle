// Hobbies
type HobbiesMockData = 'musics' | 'tvShows' | 'books' | 'movies' | 'activities';

type HobbiesMockDataState = {
  [key in HobbiesMockData]: { value: string; label: string }[];
};

// Basic info tap
interface BasicInfoFormInitValues {
  username: string;
  avatar: File | string;
  cover: File | string;
}
