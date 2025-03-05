import { Button } from '@/components/Button';

export default function Banner() {
  return (
    <div className="m-auto max-w-full px-20 pb-32 2xl:px-40 2xl:pb-36">
      <div className="flex h-[250px] w-full items-center justify-between bg-banner bg-cover px-14">
        <div className="space-y-1">
          <h1 className="text-3xl text-white">Start your free trial today!</h1>
          <p className="text-white">
            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
          </p>
        </div>
        <Button className="h-14 rounded-lg bg-red-600 px-5 py-3.5 text-lg text-white 2xl:h-16">
          Start a Free Trial
        </Button>
      </div>
    </div>
  );
}
