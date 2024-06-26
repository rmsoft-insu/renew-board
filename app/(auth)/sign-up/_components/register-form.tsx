"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const FormSchema = z.object({
  email: z.string().trim().email({ message: "이메일 형식이 아닙니다." }),
  password: z.string().trim().min(1, { message: "비밀번호를 입력하세요." }),
  name: z.string().trim().min(1, { message: "이름을 입력하세요." }),
});

export const UserRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log("Submit Success", values);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    /*  axios
      .post("/api/register", values)
      .then(() => {
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Done");
      }); */
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="min-h-[420px] w-[400px] rounded-md bg-white p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-bold">회원가입</h1>
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="이메일을 입력하세요."
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="비밀번호를 입력하세요."
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="이름을 입력하세요."
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="my-8 w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 size-5 animate-spin" />}
              회원가입
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
