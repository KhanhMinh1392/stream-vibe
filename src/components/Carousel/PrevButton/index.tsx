import { Button, ButtonProps } from '@/components/Button';
import { ArrowLeft } from 'lucide-react';

type PrevButtonProps = ButtonProps;

export default function PrevButton({ ...props }: PrevButtonProps) {
  return (
    <Button size={'icon'} variant={'outline'} {...props}>
      <ArrowLeft />
    </Button>
  );
}
