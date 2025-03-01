import instance from '@/configs/axiosInstance';
import { API_PATH } from '@/constants/path';
import { useSuspenseQuery } from '@tanstack/react-query';

type Genre = {
  id: number;
  name: string;
};

interface GetGenreListResponse {
  genres: Genre[];
}

const getGenreList = async (): Promise<GetGenreListResponse> => {
  const { data } = await instance.get(API_PATH.GENRE_MOVIE_LIST);
  return data;
};

export const useGenreList = () => {
  return useSuspenseQuery({
    queryKey: ['genres'],
    queryFn: getGenreList,
  });
};
