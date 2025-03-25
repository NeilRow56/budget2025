import FormPage from '@/app/form'
import BackButton from '@/components/shared/back-button'

import React from 'react'

export default function NewCurrencyPage() {
  return (
    <section>
      <BackButton href='/wizard' text='Back' />

      <div className='mt-4 max-w-2xl'>
        <h2 className='text-2xl font-semibold tracking-tight'>New Project</h2>

        <FormPage />
      </div>
    </section>
  )
}
