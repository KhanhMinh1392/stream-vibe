import { Button, ButtonProps } from '@/components/Button';
import { ArrowRight } from 'lucide-react';

type NextButtonProps = ButtonProps;

export default function NextButton({ ...props }: NextButtonProps) {
  return (
    <Button size={'icon'} variant={'outline'} {...props}>
      <ArrowRight />
    </Button>
  );
}
