import ListComponent from '@/components/List';
import { Laptop, Phone, Tablet } from 'lucide-react';

const devicesSVG = {
  phone: Phone,
  tablet: Tablet,
  laptop: Laptop,
};

const devices = [
  { name: 'phone', title: 'Smartphones' },
  { name: 'tablet', title: 'Tablet' },
  { name: 'laptop', title: 'Laptops' },
  { name: 'laptop', title: 'Laptops' },
];

export default function VariousDevices() {
  return (
    <div className="m-auto max-w-full px-20 py-32 2xl:py-36">
      <div className="space-y-3.5">
        <h1 className="text-[1.75rem] font-bold 2xl:text-4xl">
          We Provide you streaming experience across various devices.
        </h1>
        <p className="text-base text-gray-600 2xl:text-lg">
          With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed
          to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-3 gap-5 2xl:grid-cols-4 2xl:gap-8">
        <ListComponent
          items={devices}
          renderItem={(device, index) => {
            const Icon = devicesSVG[device.name as keyof typeof devicesSVG];
            return (
              <div
                key={index}
                className="w-full rounded-xl bg-gradient-to-bl from-red-700/40 to-black p-10 2xl:w-[32rem] 2xl:p-12"
              >
                <div className="flex items-center gap-4">
                  <div className="size-[4.5rem] rounded-xl border border-gray-600/50 bg-gray-800/50 p-4">
                    <Icon width={36} height={36} className="mx-auto text-red-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">{device.title}</h3>
                </div>
                <p className="mt-8 break-words text-justify text-base text-gray-600/90 2xl:text-lg">
                  StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play
                  Store or the Apple App Store
                </p>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
