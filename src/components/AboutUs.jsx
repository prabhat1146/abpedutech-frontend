
import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const values = [
    {
      icon: "🎯",
      title: "Our Mission",
      description:
        "To make quality education accessible and affordable by providing learners with useful study resources, practice questions, and exam preparation tools.",
    },
    {
      icon: "🌟",
      title: "Our Vision",
      description:
        "To build a trusted learning platform where students can develop knowledge, strengthen their skills, and prepare confidently for their academic and career goals.",
    },
    {
      icon: "🤝",
      title: "Our Commitment",
      description:
        "To create a learner-focused experience that encourages consistency, independent learning, and continuous improvement.",
    },
  ];

  const features = [
    {
      icon: "📚",
      title: "Learning Resources",
      description:
        "Access organized learning materials and subject-wise resources designed to support your preparation.",
    },
    {
      icon: "✍️",
      title: "Practice Questions",
      description:
        "Strengthen your understanding by practicing questions and reviewing your answers.",
    },
    {
      icon: "🌐",
      title: "Bilingual Learning",
      description:
        "Learn more comfortably with English and Hindi content wherever available.",
    },
    {
      icon: "📈",
      title: "Continuous Improvement",
      description:
        "Build effective study habits, identify areas for improvement, and keep moving toward your goals.",
    },
  ];

  const principles = [
    "Learner-first approach",
    "Accessible educational resources",
    "Clear and organized content",
    "Consistent practice and progress",
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-2 lg:px-10">
          <div>
            <span className="inline-flex items-center rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
              About ABPEdutech
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Welcome Back to{" "}
              <span className="text-cyan-300">ABPEdutech</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              Your learning journey matters. ABPEdutech aims to make learning
              more accessible, structured, and engaging through educational
              resources and practice tools that help learners move forward
              with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/subjects"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Explore Subjects
              </Link>

              <Link
                to="/contact"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur sm:p-8">
              <div className="rounded-2xl bg-white p-6 text-gray-800 sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl">
                  🎓
                </div>

                <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-blue-700">
                  Learn · Practice · Improve
                </p>

                <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
                  Every step forward begins with learning.
                </h2>

                <p className="mt-4 leading-7 text-gray-600">
                  Explore new concepts, practice what you learn, and build
                  confidence one question at a time.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    "Explore learning resources",
                    "Practice at your own pace",
                    "Keep improving every day",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-700">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-gray-100 bg-white px-5 py-4 text-gray-800 shadow-xl sm:-left-6">
              <p className="text-sm font-semibold">Your future starts here</p>
              <p className="mt-1 text-xs text-gray-500">
                One lesson at a time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Who We Are
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Empowering Learners Through Better Education
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            ABPEdutech is an education-focused platform designed to support
            students and lifelong learners with structured learning resources
            and opportunities for practice. We believe that learning becomes
            more effective when educational content is easy to explore,
            practice is consistent, and learners are encouraged to keep
            improving.
          </p>

          <p className="mt-4 text-base leading-8 text-gray-600">
            Whether you are revising familiar concepts or exploring a new
            subject, our goal is to help make your learning experience more
            organized, useful, and motivating.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Commitment */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              What Guides Us
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Purpose and Values
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              The principles that shape the learning experience we aim to
              provide.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Why ABPEdutech
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              Learning Designed Around Your Goals
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Every learner has a different goal and learning pace. We aim to
              provide a straightforward platform that helps you find useful
              resources, practice important concepts, and build a consistent
              learning routine.
            </p>

            <div className="mt-8 space-y-4">
              {principles.map((principle) => (
                <div key={principle} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    ✓
                  </span>
                  <p className="font-medium text-gray-700">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <span className="text-3xl">{feature.icon}</span>

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Philosophy */}
      <section className="bg-blue-50">
        <div className="mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <span className="text-4xl">💡</span>

          <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
            We Believe Every Learner Can Grow
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Progress is built through curiosity, regular practice, and the
            willingness to learn from mistakes. ABPEdutech is here to support
            that journey with a learning experience focused on growth,
            understanding, and confidence.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-800 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ready to Continue Your Learning Journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">
            Explore subjects, practice questions, and take the next step toward
            your learning goals with ABPEdutech.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/subjects"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
            >
              Start Learning
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
