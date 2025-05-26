"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



const formSchema = z.object({

  name: z.string().min(1, {message: 'Companion is required'}),
  subject: z.string().min(1, {message: 'Subject is required'}),
  topic: z.string().min(1, {message: 'Topic is required'}),
  voice: z.string().min(1, {message: 'Voice is required'}),
  style: z.string().min(1, {message: 'Style is required'}),
  duration: z.coerce.number().min(1, {message: 'Duration is required'}),

})


const CompanionForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      topic: "",
      voice: "",
      style: "",
      duration: 15,
    },
  })
 

  function onSubmit(values: z.infer<typeof formSchema>) {

    console.log(values)
  }


  return (
    <div>CompanionForm</div>
  )
}

export default CompanionForm