import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => void;
}

//  Zod schema
const contactSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  contactNumber: z.string().regex(/^\+977\s?\d{7,10}$/, {
    message:
      "Phone number must be a valid number with country code and 10 digits",
  }),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const submitForm = (data: ContactFormData) => {
    onSubmit?.(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="w-full max-w-[555px] px-6"
      noValidate
    >
      <div className="flex flex-col gap-4 py-6 sm:py-8">
        {/* Full Name */}
        <label htmlFor="fullName" className="text-gray-700 font-semibold">
          Full Name
        </label>
        <input
          id="fullName"
          {...register("fullName")}
          placeholder="Full name"
          className="w-full h-[50px] text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4682B4] placeholder-gray-300"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm">{errors.fullName.message}</p>
        )}

        {/* Contact Number */}
        <label htmlFor="contactNumber" className="text-gray-700 font-semibold">
          Contact Number
        </label>
        <input
          id="contactNumber"
          {...register("contactNumber")}
          placeholder="+977 9XXXXXXXX"
          className="w-full h-[50px] text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4682B4] placeholder-gray-300"
        />
        {errors.contactNumber && (
          <p className="text-red-500 text-sm">{errors.contactNumber.message}</p>
        )}

        {/* Email */}
        <label htmlFor="email" className="text-gray-700 font-semibold">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Email address"
          className="w-full h-[50px] text-black border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#4682B4] placeholder-gray-300"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        {/* Message */}
        <label htmlFor="message" className="text-gray-700 font-semibold">
          Message
        </label>
        <textarea
          id="message"
          {...register("message")}
          placeholder="Enter your message..."
          className="w-full h-[100px] text-black border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#4682B4] placeholder-gray-300"
          rows={4}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full h-[50px] bg-[#4682B4] text-white font-semibold py-3 rounded hover:bg-[#5A9BD4] transition"
        >
          Let&apos;s Connect
        </button>

        {isSubmitSuccessful && (
          <p className="text-green-600 font-semibold mt-2">
            Thank you! Your message has been sent.
          </p>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
