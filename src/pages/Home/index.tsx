import ListComponent from '@/components/List';
import Thumbnail from '@/assets/images/thumbnail.png';
import { Button } from '@/components/Button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [dot, setDot] = useState(0);
  return (
    <>
      <div className="relative">
        <img src={Thumbnail} />
        <div className="absolute inset-x-0 -bottom-36 z-10">
          <h1 className="mb-3.5 text-center text-6xl text-white">The Best Streaming Experience</h1>
          <p className="mx-auto max-w-5xl text-center text-lg text-gray-400">
            StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime,
            anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters,
            classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find
            the content you want to watch.
          </p>
          <button className="mx-auto mt-8 block rounded-lg bg-red-600 px-8 py-3 text-lg text-white">
            Start Watching Now
          </button>
        </div>
      </div>
      <div className="m-auto flex h-[1092px] w-fit flex-col items-center justify-center">
        <div className="flex items-center justify-between gap-5">
          <div className="w-[48.75rem] space-y-3.5">
            <h1 className="text-4xl font-bold">Explore our wide variety of categories</h1>
            <p className="text-lg text-gray-500">
              Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to
              learn something new
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
          <div className="flex items-center justify-center gap-8">
            <ListComponent
              items={Array.from({ length: 4 }, (_, i) => i)}
              renderItem={(_item, index) => (
                <div key={index} className="h-60 min-w-56 rounded-lg border">
                  Card
                </div>
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}
