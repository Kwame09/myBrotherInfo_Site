import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  tel: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      tel: "",
      message: "",
    },
  });

  async function onSubmit(values) {
    setIsLoading(true);
    try {
      console.log(values);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full h-[70vh] p-6 md:p-8 rounded-lg">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 md:space-y-8 h-full flex flex-col justify-between"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <label className=" text-gray-400 text-sm">
                        First Name*
                      </label>
                      <Input
                        {...field}
                        className="bg-transparent border-2 border-silver/50 text-white focus:outline-none focus:border-white rounded-md px-4 py-2"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs mt-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <label className="text-gray-400 text-sm">
                        Last Name*
                      </label>
                      <Input
                        {...field}
                        className="bg-transparent border-2 border-silver/50 text-white focus:outline-none focus:border-white rounded-md px-4 py-2"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs mt-1" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <label className="text-gray-400 text-sm">
                        Email Address*
                      </label>
                      <Input
                        type="email"
                        {...field}
                        className="bg-transparent border-2 border-silver/50 text-white focus:outline-none focus:border-white rounded-md px-4 py-2"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs mt-1" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tel"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <label className="text-gray-400 text-sm">
                        Phone Number*
                      </label>
                      <Input
                        type="tel"
                        {...field}
                        className="bg-transparent border-2 border-silver/50 text-white focus:outline-none focus:border-white rounded-md px-4 py-2"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-500 text-xs mt-1" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex flex-col space-y-2">
                    <label className="text-gray-400 text-sm">Message*</label>
                    <Textarea
                      {...field}
                      className="bg-transparent border-2 border-silver/50 text-white focus:outline-none focus:border-white rounded-md px-4 py-2 min-h-[150px] resize-none"
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-red-500 text-xs mt-1" />
              </FormItem>
            )}
          />

          <div className="flex items-start w-full">
            <Button
              type="submit"
              className="bg-orange-500 text-white px-10 py-3 hover:bg-orange-600 transition-colors rounded-md"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
