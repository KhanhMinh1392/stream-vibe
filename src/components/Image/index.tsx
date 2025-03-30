import { ImgHTMLAttributes } from 'react';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  path: string;
  alt: string;
  size?: 'w185' | 'w300' | 'w500' | 'original';
}

export default function Image(props: ImageProps) {
  const { path, alt, size = 'original', ...rest } = props;

  const sizes = {
    w185: 'w185',
    w300: 'w300',
    w500: 'w500',
    original: 'original',
  };

  return <img src={`https://image.tmdb.org/t/p/${sizes[size]}/${path}`} alt={alt} loading="lazy" {...rest} />;
}
