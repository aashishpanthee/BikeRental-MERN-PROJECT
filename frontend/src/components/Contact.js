import emailjs from "@emailjs/browser";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";
export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rg77nne",
        "template_h2fpo2k",
        e.target,
        "rKJvlPIG0AD4GKbDI"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error("Somthing went wrong !!");
        }
      );
    e.target.reset();
  };

  return (
    <div id='contact' className='py-10 bg-gray-50 sm:py-14'>
      <div className="text-center px-4 font-['Open_Sans']">
        <h2
          className='text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl text-slate-900'
          data-aos='zoom-in'
          data-aos-duration='1000'
        >
          {" "}
          Let's give a try
        </h2>
      </div>
      <div className='px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-10 lg:gap-16'>
          <div className='mb-10 md:mb-0'>
            <h2
              className='mb-8 text-2xl font-extrabold sm:text-3xl'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              Get in touch
            </h2>

            <div className='space-y-6'>
              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <PhoneIcon
                    className='w-7 h-7 text-orange'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-4 text-base'>
                  <p className='text-lg font-bold text-gray-900'>Phone no</p>
                  <p className='mt-1 text-gray-600'>
                    <a href='tel:+9779864858784' className='transition-colors hover:text-orange'>+977 9864858784</a>
                  </p>
                </div>
              </div>
              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <EnvelopeIcon
                    className='w-7 h-7 text-orange'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-4 text-base'>
                  <p className='text-lg font-bold text-gray-900'>Email</p>
                  <p className='mt-1 text-gray-600'>
                    <a href='mailto:bikebook@gmail.com' className='transition-colors hover:text-orange'>
                      bikebook@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className='flex items-start'>
                <div className='flex-shrink-0'>
                  <MapPinIcon
                    className='w-7 h-7 text-orange'
                    aria-hidden='true'
                  />
                </div>
                <div className='ml-4 text-base'>
                  <p className='text-lg font-bold text-gray-900'>Location</p>
                  <div className='mt-1 text-base text-gray-600'>
                    <p>Lumbini Province, Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8'>
            <div className='mb-6 text-center'>
              <h2
                className='text-2xl font-extrabold tracking-tight sm:text-3xl'
                data-aos='fade-left'
                data-aos-duration='1000'
              >
                {" "}
                Message us
              </h2>
            </div>
            <form
              onSubmit={sendEmail}
              className='grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-6'
            >
              <div>
                <label
                  htmlFor='user_firstname'
                  className='block text-sm font-medium'
                >
                  First name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='user_firstname'
                    id='user_firstname'
                    autoComplete='given_name'
                    required
                    className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='user_lastname'
                  className='block text-sm font-medium'
                >
                  Last name
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='user_lastname'
                    id='lastname'
                    required
                    autoComplete='family_name'
                    className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label htmlFor='email' className='block text-sm font-medium'>
                  Email
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='user_email'
                    type='email'
                    autoComplete='email'
                    required
                    className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                  />
                </div>
              </div>

              <div className='sm:col-span-2'>
                <label htmlFor='message' className='block text-sm font-medium'>
                  Message
                </label>
                <div className='mt-1'>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    required
                    className='block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <button
                  type='submit'
                  className='inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-orange hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  formTarget='_blank'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
