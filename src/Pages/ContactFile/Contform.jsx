import React from "react";

import {
  Form,
  FormControl,
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
import { contactValidation } from "../../lib/form_validation/index";
import { MdArrowOutward } from "react-icons/md";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";

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
    <section className="py-20 text-white" id="contact">
      <div className="container ">
        <div className="mb-10">
          <h2 className="underline mb-2 font-semibold">Ready to Build?</h2>
          <h3 className="text-3xl lg:text-6xl font-bold lg:w-[60%] text-pry">
            let's bring your idea to life
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
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
                            className="border-b bg-transparent ring-0 rounded-none"
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
                            className="border-b bg-transparent ring-0 focus-within::ring-0 rounded-none"
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
                      <FormLabel>Tell us about your project</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="border-b bg-transparent ring-0 rounded-none"
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

          <div className="md:col-span-4 space-y-8">
            <div className="card">
              <div className="header">
                <p>Project Talk - Sheriff Ibrahim</p>
                <small>CEO, CTO, Project Manager</small>
              </div>
              <div className="box flex gap-2 mt-3">
                <p className="flex-1 p-3 border border-white border-opacity-30 font-bold flex justify-center items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  sheezeyofficial@gmail.com
                </p>
                <p className="p-3 border border-white border-opacity-30 font-bold flex justify-center items-center">
                  <a href="https://x.com/sheezey_">
                    <FaXTwitter size={30} />
                  </a>
                </p>
                <p className="p-3 border border-white border-opacity-30 font-bold flex justify-center items-center">
                  <a href="https://t.me/sheezey1">
                    <FaTelegram size={30} />
                  </a>
                </p>
              </div>
            </div>

            <div className="card w-full">
              <div className="header">
                <p>Enquiries and Consultation - Ireoluwa Akinloye</p>
                <small>Virtual Assistant</small>
              </div>
              <div className="box flex gap-2 mt-3">
                <p className="w-full p-3 border border-white border-opacity-30 font-bold flex justify-center items-center overflow-hidden text-ellipsis whitespace-nowrap">
                  cs@galdunx.com
                </p>
                <p className="p-3 border border-white border-opacity-30 font-bold flex justify-center items-center">
                  <a href="https://t.me/sheezey1">
                    <PiTelegramLogo size={30} />
                  </a>
                </p>
                <p className="p-3 border border-white border-opacity-30 font-bold flex justify-center items-center">
                  <a href="https://wa.me/message/QS2JAZOIL7ZCJ1">
                    <FaWhatsapp size={30} />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contform;
