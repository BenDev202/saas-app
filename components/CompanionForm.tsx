"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"

const formSchema = z.object({

  companionName: z.string().min(2).max(50),
  subject: z.string().min(2).max(50),
  topic: z.string().min(2).max(50),
  voiceType: z.string().min(2).max(50),
  speakStyle: z.string().min(2).max(50),
  language: z.string({required_error: "Please select a language",}),

})


const CompanionForm = () => {

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companionName: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }


  return (
    <div>CompanionForm</div>
  )
}

export default CompanionForm