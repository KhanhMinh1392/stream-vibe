import instance from '@/configs/axiosInstance';
import { API_PATH } from '@/constants/path';
import { useSuspenseQuery } from '@tanstack/react-query';
import { Movie } from './use-movie-list';

interface GetPopularMovies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const getPopularMovies = async (): Promise<GetPopularMovies> => {
  const { data } = await instance.get(API_PATH.POPULAR_MOVIE);
  return data;
};

export const usePopularMovies = () => {
  return useSuspenseQuery({
    queryKey: ['popular-movies'],
    queryFn: getPopularMovies,
  });
};
