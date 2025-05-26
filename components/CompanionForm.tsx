"use client"

import { z } from 'zod'
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm} from 'react-hook-form'

const formSchema = z.object({
    // username: z.string().min(minLength: 2).max(maxLength: 50),
})

const CompanionForm = () => {
  return (
    <div>CompanionForm</div>
  )
}

export default CompanionForm