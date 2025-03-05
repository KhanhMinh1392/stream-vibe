import { Button } from '@/components/Button';
import ListComponent from '@/components/List';

const pricingList = [
  {
    title: 'Basic Plan',
    price: '$9.99',
    description:
      'Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.',
  },
  {
    title: 'Standard Plan',
    price: '$14.99',
    description: 'Access to a wider selection of movies and shows, including most new releases and exclusive content',
  },
  {
    title: 'Premium Plan',
    price: '$19.99',
    description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
  },
];

export default function Pricing() {
  return (
    <div className="m-auto max-w-full px-20 py-32 2xl:px-40 2xl:py-36">
      <div className="flex items-center justify-between gap-20">
        <div className="space-y-1">
          <h1 className="text-[1.75rem] font-bold 2xl:text-[2.25rem]">Choose the plan that's right for you</h1>
          <p className="text-base text-gray-600 2xl:text-lg">
            Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences.
            Get ready for non-stop entertainment!
          </p>
        </div>
        <div className="flex items-center rounded-lg border border-gray-800 bg-black p-2">
          <Button className="px-5 py-3">Monthly</Button>
          <Button className="bg-black px-5 py-3">Yearly</Button>
        </div>
      </div>
      <div className="mt-14 grid grid-cols-3 gap-5 2xl:gap-8">
        <ListComponent
          items={pricingList}
          renderItem={(pricing, index) => (
            <div
              key={index}
              className="flex flex-col gap-10 rounded-xl border border-gray-800 bg-gray-500/10 p-10 2xl:p-[3.125rem]"
            >
              <div className="space-y-3">
                <h1 className="text-xl font-bold 2xl:text-2xl">{pricing.title}</h1>
                <p className="text-justify text-base text-gray-600 2xl:text-lg">{pricing.description}</p>
              </div>
              <p className="text-4xl font-bold">
                {pricing.price}
                <small className="text-base font-medium text-gray-400">/month</small>
              </p>
              <div className="flex items-center gap-3">
                <Button className="h-12 w-full bg-black">Start Free Trial</Button>
                <Button className="h-12 w-full bg-red-600 px-5 py-3 text-sm font-semibold text-white">
                  Choose Plan
                </Button>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
}
