import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/Accordion';
import { Button } from '@/components/Button';
import ListComponent from '@/components/List';

const FAQList = [
  {
    question: 'What is StreamVibe?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'How much does StreamVibe cost?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'What content is available on StreamVibe?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'How can I watch StreamVibe?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'How do I sign up for StreamVibe?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'What is the StreamVibe free trial?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'How do I contact StreamVibe customer support?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
  },
  {
    question: 'What are the StreamVibe payment methods?',
    answer: 'StreamVibe is a streaming service that allows you to watch movies and shows on demand.',
  },
];

export default function FAQ() {
  return (
    <div className="mx-auto px-20 2xl:px-40">
      <div className="mb-14 flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-[1.75rem] font-bold 2xl:text-[2.25rem]">Frequently Asked Questions</h1>
          <p className="text-base text-gray-600 2xl:text-lg">
            Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions
            about StreamVibe.
          </p>
        </div>
        <Button className="h-12 bg-red-600 px-5 py-3.5 text-sm font-semibold text-white">Ask a Question</Button>
      </div>
      <div className="grid grid-cols-2 gap-x-20">
        <ListComponent
          items={FAQList}
          renderItem={(item, index) => {
            return (
              <div key={index} className="flex items-start gap-5 px-8 py-[1.875rem]">
                <p className="w-fit rounded-xl border border-gray-400/50 bg-gray-700/50 px-4 py-2.5 text-base font-semibold 2xl:p-5 2xl:text-xl">
                  {index + 1 > 10 ? index + 1 : `0${index + 1}`}
                </p>
                <Accordion type="single" collapsible className="flex-1">
                  <AccordionItem value={`item-${index + 1}`} className="border-none">
                    <AccordionTrigger>{item.question}</AccordionTrigger>
                    <AccordionContent>{item.answer}</AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}
