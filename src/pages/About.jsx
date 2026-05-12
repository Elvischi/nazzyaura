import React from "react";
import BG from "../images/per6.jpg";
import perfume5 from "../images/per15.jpg";

function About() {
  return (
    <div className="bg-gray-950">
      <AboutHeader />
      <AboutShortContent />
      <AboutValues />
      <AboutFounder />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Pinyon+Script&display=swap');
      `}</style>
    </div>
  );
}

// ─── Hero Section ──────────────────────────────────────────
function AboutHeader() {
  return (
    <div
      style={{ backgroundImage: `url(${BG})` }}
      className="relative w-full min-h-[80vh] bg-no-repeat bg-cover bg-center flex items-center justify-center"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-10 max-w-3xl">
        {/* Script label */}
        <p
          style={{ fontFamily: "'Pinyon Script', cursive" }}
          className="text-yellow-500 text-3xl mb-4"
        >
          Our Story
        </p>

        {/* Main heading */}
        <h1
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-6xl font-bold text-white mb-6 tracking-wide"
        >
          About Us
        </h1>

        {/* Gold divider */}
        <div className="w-16 h-[2px] bg-yellow-500 mb-8" />

        {/* Description */}
        <p className="text-gray-300 text-lg font-light leading-relaxed">
          At Nazzy Perfume, we are passionate about crafting exquisite
          fragrances that captivate the senses and evoke deep emotions. Our
          journey began with a vision to create unique scents that blend
          artistry and nature — resulting in perfumes that tell a story.
        </p>
      </div>
    </div>
  );
}

// ─── Short Content Section ─────────────────────────────────
function AboutShortContent() {
  return (
    <div className="bg-gray-950 py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Script label */}
        <p
          style={{ fontFamily: "'Pinyon Script', cursive" }}
          className="text-yellow-500 text-2xl"
        >
          What We Believe
        </p>

        {/* Heading */}
        <h2
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
          className="text-4xl font-bold text-white tracking-wide"
        >
          More Than Just a Scent
        </h2>

        {/* Gold divider */}
        <div className="w-16 h-[2px] bg-yellow-500" />

        {/* Body text */}
        <p className="text-gray-500 text-lg font-light leading-relaxed">
          We believe that fragrance is more than just a scent — it's an
          experience. Our passion for perfumery drives us to curate a collection
          of unique, high-quality fragrances that inspire confidence and
          self-expression. Each scent in our collection is crafted with care,
          using the finest ingredients to create unforgettable olfactory
          journeys.
        </p>

        {/* Stats row */}
        <div className="flex items-center gap-12 mt-6">
          <div className="flex flex-col items-center gap-1">
            <p className="text-white text-3xl font-bold">200+</p>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Fragrances
            </p>
          </div>
          <div className="w-[1px] h-12 bg-yellow-900" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-white text-3xl font-bold">50k+</p>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Happy Clients
            </p>
          </div>
          <div className="w-[1px] h-12 bg-yellow-900" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-white text-3xl font-bold">15+</p>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Awards Won
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Values Section ────────────────────────────────────────
const values = [
  {
    id: 1,
    title: "Craftsmanship",
    description:
      "Every bottle is a masterpiece. We obsess over every detail, from the first note to the final dry-down.",
  },
  {
    id: 2,
    title: "Authenticity",
    description:
      "We source only the finest raw ingredients from around the world — no shortcuts, no compromises.",
  },
  {
    id: 3,
    title: "Emotion",
    description:
      "Great fragrance doesn't just smell beautiful — it makes you feel something. That is our standard.",
  },
];

function AboutValues() {
  return (
    <div className="bg-gray-900 py-20 px-6 border-t border-b border-yellow-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <p
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            className="text-yellow-500 text-2xl mb-2"
          >
            What Drives Us
          </p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-4xl font-bold text-white tracking-wide"
          >
            Our Core Values
          </h2>
          <div className="w-16 h-[2px] bg-yellow-500 mt-4" />
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col items-center text-center gap-4 bg-gray-950 border border-yellow-900/30 rounded-xl p-8 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-900/20 transition duration-300"
            >
              {/* Number */}
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-yellow-500/30 text-6xl font-bold"
              >
                0{value.id}
              </p>

              {/* Title */}
              <h3
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-2xl font-semibold"
              >
                {value.title}
              </h3>

              {/* Gold divider */}
              <div className="w-8 h-[1px] bg-yellow-700" />

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Founder Section ───────────────────────────────────────
function AboutFounder() {
  return (
    <div className="bg-gray-950 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <p
            style={{ fontFamily: "'Pinyon Script', cursive" }}
            className="text-yellow-500 text-2xl mb-2"
          >
            The Person Behind It All
          </p>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-4xl font-bold text-white tracking-wide"
          >
            Meet Our Founder
          </h2>
          <div className="w-16 h-[2px] bg-yellow-500 mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={perfume5}
              alt="founder"
              className="w-full h-[600px] object-cover bg-center rounded-xl shadow-2xl shadow-black/50 hidden md:block"
            />
          </div>

          {/* Story */}
          <div className="flex flex-col gap-6">
            {/* Founder name */}
            <div>
              <p
                style={{ fontFamily: "'Pinyon Script', cursive" }}
                className="text-yellow-500 text-3xl"
              >
                Aria Nazzy
              </p>
              <p className="text-gray-600 text-xs tracking-widest uppercase mt-1">
                Founder & Master Perfumer
              </p>
            </div>

            {/* Gold divider */}
            <div className="w-10 h-[1px] bg-yellow-700" />

            {/* Story paragraphs */}
            <div className="flex flex-col gap-4">
              <p className="text-gray-400 text-base leading-relaxed">
                As a child, she would sit beside her grandmother, who smelled of
                orange blossoms and warm vanilla. When her grandmother passed,
                the house lost its soul. Determined not to forget, Aria began
                mixing oils in her tiny apartment, chasing that familiar scent.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                She failed countless times — too sharp, too sweet, too empty.
                Years later, after studying chemistry by day and experimenting
                by night, she finally recreated something close — not exact, but
                alive. When she wore it outside, strangers stopped her, asking
                what she had on.
              </p>
              <p className="text-gray-400 text-base leading-relaxed">
                That was the moment she realized scent wasn't just memory — it
                was connection. With borrowed money and relentless belief, she
                launched her brand from a single formula. She named it{" "}
                <span className="text-yellow-500 italic">"Echo"</span> — because
                every fragrance carried a story meant to linger.
              </p>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-yellow-600 pl-5 mt-2">
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-white text-xl italic"
              >
                "Every time I create a new scent, I smile softly — knowing it
                all began with love I refused to forget."
              </p>
              <p className="text-yellow-600 text-xs tracking-widest uppercase mt-2">
                — Aria Nazzy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
