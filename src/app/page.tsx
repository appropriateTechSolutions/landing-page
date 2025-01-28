import { HeroSection } from "@/components/Content/HeroSection";
import { ClientsSection } from "@/components/Content/Clients";
import { ContactUs } from "@/components/Content/ContactUs";
import { Features } from "@/components/Content/Features";
import { HowItWork } from "@/components/Content/HowItWork";
import { Pricing } from "@/components/Content/Pricing";
import { Testimonials } from "@/components/Content/Testimonials";
import type { Metadata } from "next";
import { Projects } from "@/components/Content/Projects";

export const metadata: Metadata = {
  title: "Appropriate Tech Solutions",
  description: "Under work",
};

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Features />
      <HowItWork />
      <Projects />
      <ClientsSection />
      <Testimonials />
      
      
      
      <ContactUs />
    </main>
  );
}
