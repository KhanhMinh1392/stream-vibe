import instance from '@/configs/axiosInstance';
import { API_PATH } from '@/constants/path';
import { useSuspenseQuery } from '@tanstack/react-query';

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  genre_ids: number[];
  backdrop_path: string;
};

interface GetMovieListResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const getMovieList = async (): Promise<GetMovieListResponse> => {
  const { data } = await instance.get(API_PATH.DISCOVER_MOVIE);
  return data;
};

export const useMovieList = () => {
  return useSuspenseQuery({
    queryKey: ['movies'],
    queryFn: getMovieList,
  });
};
