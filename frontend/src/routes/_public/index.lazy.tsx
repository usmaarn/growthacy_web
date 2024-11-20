/** @format */

import { createLazyFileRoute } from "@tanstack/react-router";
import Hero from "@/components/home-page/hero";
import SubHero from "@/components/home-page/sub-hero";
import Features from "@/components/home-page/features";
import CallToActionOne from "@/components/home-page/call-to-action";
import Pricing from "@/components/home-page/pricing";
import Feedbacks from "@/components/home-page/feedbacks";
import FAQs from "@/components/home-page/faqs";
import RecentBlogs from "@/components/home-page/recent-blogs";

export const Route = createLazyFileRoute("/_public/")({
  component: HomePage,
});

function HomePage() {
  return (
    <main>
        <Hero />
        <SubHero />
        <Features />
        <CallToActionOne />
        <Pricing />
        <Feedbacks />
        <FAQs />
        <RecentBlogs />
    </main>
  );
}
