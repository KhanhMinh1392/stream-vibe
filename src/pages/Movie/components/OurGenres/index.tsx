import Card from '@/components/Card';
import { CarouselButton } from '@/components/Carousel';
import Image from '@/components/Image';
import ListComponent from '@/components/List';
import Title from '@/components/Title';
import { useCarousel } from '@/hooks';
import { cn } from '@/lib/utils';
import { Genre } from '@/services/genres';
import { Movie } from '@/services/movies';

interface OurGenresProps {
  movies: Movie[];
  genres: Genre[];
}

export default function OurGenres(props: OurGenresProps) {
  const { movies, genres } = props;
  const { activeIndex, next, prev } = useCarousel();

  return (
    <div className="space-y-10">
      <div className="flex items-center justify-between">
        <Title title="Our Genres" />
        <CarouselButton dot={activeIndex} onNext={next} onPrev={prev} />
      </div>
      <div className="grid grid-cols-4 gap-7">
        <ListComponent
          items={genres.slice(activeIndex * 4, activeIndex * 4 + 4)}
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
  );
}
