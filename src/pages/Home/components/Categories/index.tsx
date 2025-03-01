import { Button } from '@/components/Button';
import ListComponent from '@/components/List';
import { cn } from '@/lib/utils';
import { useGenreList } from '@/services/genres';
import { useMovieList } from '@/services/movies';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const GENRE_DEFAULT = 4;

export default function Categories() {
  const [dot, setDot] = useState(0);

  const {
    data: { genres },
  } = useGenreList();

  const {
    data: { results: movies },
  } = useMovieList();

  return (
    <div className="mx-auto max-w-full px-20 pt-80">
      <div className="flex items-center justify-between gap-5">
        <div className="w-[62rem] space-y-3.5">
          <h1 className="text-4xl font-bold">Explore our wide variety of categories</h1>
          <p className="text-lg text-gray-500">
            Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn
            something new
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button disabled={dot === 0} onClick={() => setDot((prev) => --prev)}>
            <ArrowLeft />
          </Button>
          <div className="flex items-center gap-1">
            <ListComponent
              items={Array.from({ length: 4 }, (_, i) => i)}
              renderItem={(_item, index) => (
                <div
                  key={index}
                  className={cn('h-1 w-4 rounded-full bg-gray-600', dot === index && 'w-6 bg-red-600')}
                />
              )}
            />
          </div>
          <Button disabled={dot === 3} onClick={() => setDot((prev) => ++prev)}>
            <ArrowRight width={28} height={28} />
          </Button>
        </div>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-4 gap-7">
          <ListComponent
            items={genres.slice(dot * GENRE_DEFAULT, dot * GENRE_DEFAULT + GENRE_DEFAULT)}
            renderItem={(genre) => (
              <div key={genre.id} className="h-80 min-w-56 rounded-xl bg-gray-400/10 p-7">
                <div className="grid h-60 grid-cols-2 gap-1.5">
                  <ListComponent
                    items={movies.filter((movie) => movie.genre_ids.includes(genre.id)).slice(0, 4)}
                    renderItem={(movie) => (
                      <div key={movie.id} className="h-28 w-28 rounded-xl bg-gray-400/20">
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                          alt={movie.title}
                          className="h-full rounded-[.625rem] object-cover"
                        />
                      </div>
                    )}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{genre.name}</p>
                  <ArrowRight width={18} height={18} />
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  );
}
