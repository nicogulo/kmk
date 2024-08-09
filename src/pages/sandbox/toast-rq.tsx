import * as React from 'react';
import toast from 'react-hot-toast';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';

export default function SandboxPage() {
  return (
    <>
      <Seo templateTitle='Sandbox' />

      <section className='bg-gray-100'>
        <div className='layout flex min-h-screen flex-col items-start space-y-3 py-20'>
          <Button onClick={() => toast.success('Hello!')}>Open Toast</Button>
        </div>
      </section>
    </>
  );
}
