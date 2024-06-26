"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import axios from "axios";

export const FormTestComponent = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const onSubmit = async (values: any) => {
    console.log("submit values", values);
    const response = await axios.post("/api/user", values).catch((error) => {
      console.log("error", error);
    });
    console.log("response", response);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200">
      <div className="h-[320px] w-[400px] rounded-md bg-white p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <FormField
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input placeholder="이메일" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름</FormLabel>
                    <FormControl>
                      <Input placeholder="이름" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="mt-8 w-full">
              제출하기
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
