import ListComponent from '@/components/List';
import NextButton from '../NextButton';
import PrevButton from '../PrevButton';
import { cn } from '@/lib/utils';

interface CarouselButtonProps {
  dot: number;
  onNext: () => void;
  onPrev: () => void;
}

const MINIMUM_INDEX = 0;
const MAXIMUM_INDEX = 3;

export default function CarouselButton(props: CarouselButtonProps) {
  const { dot, onNext, onPrev } = props;

  return (
    <div className="flex items-center gap-4 rounded-xl bg-gray-900/40 p-3">
      <PrevButton disabled={dot === MINIMUM_INDEX} onClick={onPrev} />
      <div className="flex items-center gap-1">
        <ListComponent
          items={Array.from({ length: 4 }, (_, i) => i)}
          renderItem={(_item, index) => (
            <div key={index} className={cn('h-1 w-4 rounded-full bg-gray-600', dot === index && 'w-6 bg-red-600')} />
          )}
        />
      </div>
      <NextButton disabled={dot === MAXIMUM_INDEX} onClick={onNext} />
    </div>
  );
}
