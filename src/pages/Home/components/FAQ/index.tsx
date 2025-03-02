import { Button } from '@/components/Button';

export default function FAQ() {
  return (
    <div className="mx-auto px-20">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-[1.75rem] font-bold 2xl:text-4xl">Frequently Asked Questions</h1>
          <p className="text-base text-gray-600 2xl:text-lg">
            Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions
            about StreamVibe.
          </p>
        </div>
        <Button className="h-12 bg-red-600 px-5 py-3.5 text-sm font-semibold text-white">Ask a Question</Button>
      </div>
    </div>
  );
}
