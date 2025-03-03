import Thumbnail from '@/assets/images/thumbnail.png';
import { Banner, Categories, FAQ, Pricing, VariousDevices } from './components';
import { Button } from '@/components/Button';
import { Play } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="relative">
        <img src={Thumbnail} className="w-full object-cover" />
        <div className="absolute inset-x-0 -bottom-36 z-10">
          <h1 className="mb-3.5 text-center text-6xl font-bold text-white">The Best Streaming Experience</h1>
          <p className="mx-auto max-w-5xl text-center text-lg text-gray-400">
            StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime,
            anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters,
            classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find
            the content you want to watch.
          </p>
          <Button className="mx-auto mt-8 flex h-14 rounded-lg bg-red-600 px-8 py-3 text-lg text-white 2xl:h-16">
            <Play className="fill-background" />
            Start Watching Now
          </Button>
        </div>
      </div>
      <Categories />
      <VariousDevices />
      <FAQ />
      <Pricing />
      <Banner />
    </>
  );
}
