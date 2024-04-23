import { Button } from '@/components/ui/button';

export default function StyleGuidePage() {
  return (
    <div className="container mt-4">
      <div className="flex flex-col gap-4">
        <h1>Button</h1>
        <div className="flex flex-row gap-4">
          <Button>Default</Button>
          <Button variant={'secondary'}>Secondary</Button>
          <Button variant={'ghost'}>Ghost</Button>
          <Button variant={'link'}>Link</Button>
          <Button variant={'outline'}>Outline</Button>
          <Button variant={'destructive'}>Destructive</Button>
        </div>
        <div className="flex flex-row gap-4">
          <Button>Default</Button>
          <Button size={'icon'}>Icon</Button>
          <Button size={'sm'}>Small</Button>
          <Button size={'lg'}>Large</Button>
        </div>
      </div>
    </div>
  );
}
