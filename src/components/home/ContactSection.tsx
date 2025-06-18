import * as React from "react";
import ContactForm from "./ContactForm";
import bgImg from "../../assets/heroimage.jpg";

const ContactSection: React.FC = () => {
  const handleSubmit = (data: {
    fullName: string;
    contactNumber: string;
    email: string;
    message: string;
  }) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="relative">
      {/* Background wrapper with image */}
      <section
        className="relative max-h-[740px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-80 z-0" />

        {/* Content wrapper */}
        <div className="relative z-10 text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 pt-12 md:pt-24">
          {/* Left Text */}
          <div className="flex-1 max-w-md md:max-w-lg mb-12 md:mb-0">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Wanna Know more? <span>Let’s Connect</span>
            </h2>
            <p className="text-gray-200 text-base max-w-md">
              Have a project in mind or just want to say hi? We’d love to hear
              from you. Fill out the form and we’ll get back to you shortly.
            </p>
          </div>

          {/* Right Form */}
          <div className="w-full max-w-md md:max-w-lg z-20 relative">
            <div className="bg-white rounded-xl shadow-lg relative ">
              <ContactForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </section>

    
      <div className="w-full h-[196px] bg-[#4682B4] mt-[-100px] z-0 relative"></div>
    </div>
  );
};

export default ContactSection;
  