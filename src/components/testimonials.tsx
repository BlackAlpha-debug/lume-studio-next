import { ScrollView } from "./scroll-view";
import { TestimonialCarousel } from "./ui/profile-card-testimonial-carousel";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-32" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              What Our Clients Say
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              We take pride in delivering exceptional results for our clients.
              Here&apos;s what they have to say about working with Lume Studio.
            </p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          <TestimonialCarousel />
        </ScrollView>
      </div>
    </section>
  );
}
