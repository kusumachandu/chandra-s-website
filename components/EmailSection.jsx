"use client"

import React, { useState } from "react";
import GithubIcon from "../public/github-icon.svg";
import LinkedinIcon from "../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }

    const jsonData = JSON.stringify(data);
    console.log(jsonData)
    const endpoint = "/api/send";

    const options = {
      method: 'POST',

      // headers: {
      //   'Content-Type': 'application/json',
      // },

      body: jsonData,
    }

    const response = await fetch(endpoint, options);
    // const responseData = await response.json();
    console.log(response);
    if(response.status === 200) {
      console.log('message sent');
      setSubmitted(true);
    }
  }

  return (
    <section className="grid md:grid-cols-2 my-4 md:my-12 py-8 md:py-24 gap-4 relative" id='contact'>
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full absolute top-2/3 md:top-3/4 -left-4 transform -translate-x-1/2 md:-translate-x-1/2 lg:-translate-x-3/4 translate-y-4 md:translate-y-12 h-80 w-80 md:w-60 md:h-60 z-0 blur-lg"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently looking for an opportunity, my inbox is always open,
          Whether you have a question or just want to say hi, I&apos;ll try my
          best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.github.com/kusumachandu">
            <Image src={GithubIcon} alt="Github image" />
          </Link>
          <Link href="https://www.linkedin.com/in/chandrashekar-kusuma-49b65219a/">
            <Image src={LinkedinIcon} alt="Linkedin image" />
          </Link>
        </div>
      </div>
      <div className="text-left md:text-right">
        <form className="flex flex-col pt-8 md:pt-0" onSubmit={handleSubmit}>
          <div className="mb-6 lg:text-right">
            <label
              htmlFor="email"
              className="text-white block font-bold mb-2"
            >
              Email
            </label>
            <p className="text-right">kusumachandu43@gmail.com</p>
            {/* <input
              name='email'
              type="email"
              id="email"
              required
              placeholder="john@gmail.com"
              className="text-gray-100 w-full bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  p-2.5 rounded-lg block"
            /> */}
          </div>
          <div className="mb-6 lg:text-right ">
            <p className="font-bold">Mobile</p>
            <p>+91 87090133883</p>
            {/* <label
              htmlFor="subject"
              className="text-white mb-2 block text-sm font-medium "
            >
              Your Subject
            </label>
            <input
              name='subject'
              type="text"
              id="subject"
              required
              placeholder="hello there!"
              className="text-gray-100 w-full bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  p-2.5 rounded-lg block"
            /> */}
          </div>
          {/* <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white mb-2 block text-sm font-medium "
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Leave your message here...!"
              className="text-gray-100 w-full bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]  p-2.5 rounded-lg block"
            />
          </div>
          <button 
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg w-full"
          >
            Send Message
          </button>
          {
            submitted && (
              <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
            )
          } */}
          <div className="lg:text-right">
            <p className="font-bold">Address:</p>
            <div>
              <p>masjid street, mandadam</p>
              <p>Guntur, 522503</p>
              <p>Andhra Pradesh</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
