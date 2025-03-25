'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import { ControllerRenderProps, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { insertProjectSchema } from '../schemas/currency'
import { SubmitButton } from '@/components/shared/submit-button'

export default function NewProjectForm() {
  const form = useForm<z.infer<typeof insertProjectSchema>>({
    resolver: zodResolver(insertProjectSchema),
    defaultValues: {
      name: '',
      description: ''
    }
  })

  function onSubmit(values: z.infer<typeof insertProjectSchema>) {
    try {
      console.log(values)
      toast(
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
        </pre>
      )
    } catch (error) {
      console.error('Form submission error', error)
      toast.error('Failed to submit the form. Please try again.')
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mx-auto w-[350px] space-y-8 py-10 md:w-[500px] lg:w-[700px]'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='w-'>
              <FormLabel>Name</FormLabel>
              <FormControl className=''>
                <Input className='' placeholder='Project name' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='Project description' {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* <Button type='submit'>Submit</Button> */}
        <SubmitButton text='Submit' variant='default' />
      </form>
    </Form>
  )
}
