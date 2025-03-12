import { useMovieList } from '@/services/movies';
import Image from '@/components/Image';
import { Button } from '@/components/Button';
import { ArrowLeft, ArrowRight, Heart, Play, Plus, Volume2 } from 'lucide-react';
import ListComponent from '@/components/List';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const MAXIMUM_DOT = 3;
const MAXIMUM_INDEX = 2;
const MINIMUM_INDEX = 0;

export default function Movies() {
  const [dot, setDot] = useState(MINIMUM_INDEX);

  const { data: movies } = useMovieList();
  const movie = movies.results[dot];

  useEffect(() => {
    const timer = setInterval(() => {
      setDot((prev) => (prev === MAXIMUM_INDEX ? MINIMUM_INDEX : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [dot]);

  return (
    <div className="mt-36 px-20">
      <div className="relative">
        <Image
          path={movie.backdrop_path}
          alt={movie.title}
          className="h-full w-full rounded-xl object-cover delay-700 ease-in-out"
        />
        <div className="absolute inset-x-0 top-[63%] px-10">
          <h1 className="text-center text-3xl font-bold">{movie.title}</h1>
          <p className="mx-auto h-16 max-w-4xl text-center text-base font-medium text-gray-300">{movie.overview}</p>
          <div className="mt-6 flex items-center justify-center gap-5">
            <Button size={'lg'}>
              <Play className="fill-background" />
              PlayNow
            </Button>
            <div className="space-x-2">
              <Button size={'icon'} variant={'outline'}>
                <Plus />
              </Button>
              <Button size={'icon'} variant={'outline'}>
                <Heart />
              </Button>
              <Button size={'icon'} variant={'outline'}>
                <Volume2 />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <Button
              disabled={dot === MINIMUM_INDEX}
              size={'icon'}
              variant={'outline'}
              onClick={() => setDot((prev) => --prev)}
            >
              <ArrowLeft />
            </Button>
            <div className="flex items-center gap-2">
              <ListComponent
                items={movies.results.slice(0, MAXIMUM_DOT)}
                renderItem={(_item, index) => (
                  <div
                    key={index}
                    className={cn('h-1 w-4 rounded-full bg-gray-600', dot === index && 'w-6 bg-red-600')}
                  />
                )}
              />
            </div>
            <Button
              disabled={dot === MAXIMUM_INDEX}
              size={'icon'}
              variant={'outline'}
              onClick={() => setDot((prev) => ++prev)}
            >
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
