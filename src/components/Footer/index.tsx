import { Facebook, LinkedinIcon, TwitchIcon } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-black px-20 pb-10 pt-20 2xl:px-40 2xl:pt-28">
      <ul className="grid grid-cols-6 gap-5">
        <li>
          <h6 className="mb-5 text-lg font-semibold">Home</h6>
          <ul className="space-y-2.5 font-medium text-gray-400">
            <li>Categories</li>
            <li>Devices</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </li>
        <li>
          <h6 className="mb-5 text-lg font-semibold">Movies</h6>
          <ul className="space-y-2.5 font-medium text-gray-400">
            <li>Genres</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
        </li>
        <li>
          <h6 className="mb-5 text-lg font-semibold">Shows</h6>
          <ul className="space-y-2.5 font-medium text-gray-400">
            <li>Genres</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
        </li>
        <li>
          <h6 className="mb-5 text-lg font-semibold">Support</h6>
          <ul className="font-medium text-gray-400">
            <li>Contact Us</li>
          </ul>
        </li>
        <li>
          <h6 className="mb-5 text-lg font-semibold">Subscription</h6>
          <ul className="space-y-2.5 font-medium text-gray-400">
            <li>Plans</li>
            <li>Features</li>
          </ul>
        </li>
        <li>
          <h6 className="mb-5 text-lg font-semibold">Connect With Us</h6>
          <ul className="grid grid-cols-3">
            <li className="w-fit rounded-md border border-gray-500 bg-gray-950 p-3">
              <Facebook className="fill-background" />
            </li>
            <li className="w-fit rounded-md border border-gray-500 bg-gray-950 p-3">
              <TwitchIcon />
            </li>
            <li className="w-fit rounded-md border border-gray-500 bg-gray-950 p-3">
              <LinkedinIcon className="fill-background" />
            </li>
          </ul>
        </li>
      </ul>
      <div className="mt-20 flex items-center justify-between border-t border-gray-100/30 pt-5">
        <p className="text-sm text-gray-400">@2023 stream vibe, All Rights Reserved</p>
        <ul className="grid grid-cols-3 gap-5 text-sm text-gray-400">
          <li>Terms Of Use</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
}
