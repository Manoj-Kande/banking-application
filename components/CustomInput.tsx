import React, { useState } from "react";
import {Control, FieldPath, Form} from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { Input } from "@/components/ui/input";
import { authFormSchema } from "@/lib/utils";
  
const formSchema =authFormSchema('sign-up');

  
  interface CustomInput{
    control : Control<z.infer<typeof formSchema>>
    name:FieldPath<z.infer<typeof formSchema>>,
    label:string,
    placeholder:string
  }
  
const CustomInput = ({control,name,label,placeholder}:CustomInput) => {
    
  return (
    
              <FormField
                control={control}
                name={name}
                render={({ field }) => (
                  <div className="form-item">
                    
                    <FormLabel className="form-label">{label}</FormLabel>
                    <div className="flex w-full ">
                      <FormControl>
                        <Input placeholder={placeholder}
                        className="input-class"
                        type={name==='password'?'password':"text"}
                        {...field} />
                      </FormControl>
                    </div>
                    
                    <FormMessage className="form-message mt-2" />
                  
                  </div>
                )}
              />
         
    
  )
}

export default CustomInput