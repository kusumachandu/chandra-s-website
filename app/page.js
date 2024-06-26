import Image from "next/image";

import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import Carousel from "@/components/Carousel";
import { NavbarProvider } from "@/context/NavbarContext";

const images = [
  "/images/projects/js.png",
  "/images/projects/html.png",
  "/images/projects/css.jpg",
  "/images/projects/react.png",
  "/images/projects/mongo.png",
  "/images/projects/nextjs.jpg",
  "/images/projects/postman.png",
  "/images/projects/github.jpg",
  "/images/projects/express-js.png",
  "/images/projects/stripe.png"
];

export default function Home() {
  return (
    <NavbarProvider>
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-2 lg:px-12 py-4">
        <HeroSection />
        <div className="container mx-auto mt-16 mb-8">
          <Carousel images={images} />
        </div>
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
    </NavbarProvider>
  );
}

// import { Resend } from 'resend';

// const resend = new Resend('re_Q1FyZudA_2cWLxYN5GSVak4Rb27DHvqix');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'kusumachandu43@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });
