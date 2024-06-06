import React from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../Components/ui/form";
import { Textarea } from "../../Components/ui/textarea";
import { Input } from "../../Components/ui/input";
import { Button } from "../../Components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { contactValidation } from "../../lib/form_validation/index";
import { MdArrowOutward } from "react-icons/md";

const Contform = () => {
  const form = useForm({
    resolver: zodResolver(contactValidation),
    defaultValues: {
      email: "",
      senderName: "",
      message: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }
  return (
    <section className="py-20 bg-black text-white">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
          <div className="md:col-span-4">
            <p className="mb-4">Have an idea?</p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl leadind-[2] font-bold max-w-md">
              Drop us a line!
            </h1>
          </div>
          <div className="md:col-span-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 gap-x-2 gap-y-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="senderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="bg-transparent outline-none ring-0 border-gray-200 focus-visible:ring-lime-200 focus-visible:border-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="bg-transparent outline-none ring-0 border-gray-200 focus-visible:ring-lime-200 focus-visible:border-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="bg-transparent outline-none ring-0 border-gray-200 focus-visible:ring-lime-200 focus-visible:border-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="flex md:gap-2">
                  Submit <MdArrowOutward />
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contform;
