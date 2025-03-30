import Card from '@/components/Card';
import { CarouselButton } from '@/components/Carousel';
import Image from '@/components/Image';
import ListComponent from '@/components/List';
import Title from '@/components/Title';
import { useCarousel } from '@/hooks';
import { cn } from '@/lib/utils';
import { useGenreList } from '@/services/genres';
import { useMovieList } from '@/services/movies';

const GENRE_DEFAULT = 4;

export default function Categories() {
  const { activeIndex, next, prev } = useCarousel();

  const {
    data: { genres },
  } = useGenreList();

  const {
    data: { results: movies },
  } = useMovieList();

  return (
    <div className="mx-auto max-w-full px-20 pt-80 2xl:px-40">
      <div className="flex items-center justify-between gap-5">
        <div className="w-[62rem] space-y-3.5">
          <Title title="Explore our wide variety of categories" />
          <p className="text-base text-gray-600 2xl:text-lg">
            Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn
            something new
          </p>
        </div>
        <CarouselButton dot={activeIndex} onNext={next} onPrev={prev} />
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-4 gap-7">
          <ListComponent
            items={genres.slice(activeIndex * GENRE_DEFAULT, activeIndex * GENRE_DEFAULT + GENRE_DEFAULT)}
            renderItem={(genre) => {
              const moviesByGenre = movies.filter((movie) => movie.genre_ids.includes(genre.id)).slice(0, 4);
              const moreThanTwo = moviesByGenre.length > 2;
              return (
                <Card key={genre.id} title={genre.name}>
                  <div className={cn('grid h-60 grid-cols-1 gap-1.5', moreThanTwo && 'grid-cols-2')}>
                    <ListComponent
                      items={moviesByGenre}
                      renderItem={(movie) => (
                        <div key={movie.id} className="h-full rounded-xl bg-gray-400/20">
                          <Image
                            size="w500"
                            path={movie.backdrop_path}
                            alt={movie.title}
                            className="h-full w-full rounded-[.625rem] object-cover"
                          />
                        </div>
                      )}
                    />
                  </div>
                </Card>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
