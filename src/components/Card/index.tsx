import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { PropsWithChildren } from 'react';

interface CardProps {
  title: string;
  className?: string;
}

export default function Card({ children, className, title }: PropsWithChildren<CardProps>) {
  return (
    <div className={cn('rounded-xl bg-gray-400/10 p-7', className)}>
      {children}
      <div className="flex items-center justify-between">
        <p className="text-lg font-semibold">{title}</p>
        <ArrowRight width={18} height={18} />
      </div>
    </div>
  );
}
