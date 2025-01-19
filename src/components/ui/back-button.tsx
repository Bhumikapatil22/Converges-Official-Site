'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function BackButton() {
  const router = useRouter();

  const goToEventsPage = () => {
    router.push('/events#events'); // Navigate to /events and include the hash
  };

  return (
    <Button
      variant="ghost"
      className="mb-6"
      onClick={goToEventsPage}
    >
      <ChevronLeft className="w-4 h-4 mr-2" />
      Back to Events
    </Button>
  );
}
