import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const pareshAvatar = "/Paresh.jpg";
const MikeAvatar = "/Mike.jpg";
const JessicaAvatar = "/Jessica.jpg";
const CoachKyrlAvatar = "/Kyrl.jpeg";

const testimonials = [
  {
    quote:
      "If you ever need a reference Miguel, put me down. I am glad I got the pleasure to teach you and I am sure you will do great things in the future.",
    author: "Paresh Garjria",
    role: "Product & Agile Transformation Leader | Delivery Manager & Technical Product Owner  Educator",
    avatar: pareshAvatar,
  },
  {
    quote:
      "I watched Miguel grow through his Federated internship, and with time I could see his confidence and skills flourish. Even his vocabulary changed as he becomes more comfortable with the work. He is a quick learner and a great student, and I have no doubt he will excel in any future role.",
    author: "Mike Wells",
    role: "Professor in Computer Information Science",
    avatar: MikeAvatar,
  },
  {
    quote:
      "I loved working with Miguel. He is a natural problem solver and always approaches challenges with a positive attitude. His ability to quickly grasp new concepts and technologies is impressive, and he consistently delivers high-quality work. Beyond his technical skills, Miguel is a fantastic communicator and team player, making him a pleasure to collaborate with.",
    author: "Jess Dickhaus",
    role: "IT Manager at Federated Insurance",
    avatar: JessicaAvatar,
  },
    {
    quote:
      "Miguel was my swiss army knife. He would take on any challenge and always delivered. He was a key part of our team, a great captain and I have no doubt he will be successful in whatever he chooses to do.",
    author: "Coach Kyrl",
    role: "Assistant Coach at Chaska High School Soccer",
    avatar: CoachKyrlAvatar,
  },
];

export const References = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <section id="references" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What People Say
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Kind words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              amazing people.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                "{testimonials[activeIdx].quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIdx].avatar}
                  alt={testimonials[activeIdx].author}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <div className="font-semibold">
                    {testimonials[activeIdx].author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[activeIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};