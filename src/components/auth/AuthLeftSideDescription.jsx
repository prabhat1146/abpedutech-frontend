import React from 'react';

const AuthLeftSideDescription = () => {
    return (
        <div>
            <div className="relative hidden overflow-hidden bg-gradient-to-br from-slate-950 via-blue-900 to-indigo-900 lg:flex items-center">
          {/* Background Blur */}
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 w-full px-16">
            {/* Logo */}
            <div className="mb-4 mt-4 flex justify-center">
              {/* <img
                src="/assets/logo/logo-1-1-round.png"
                alt="ABPEdutech"
                className="h-20 w-20 object-contain"
              /> */}
            </div>

            {/* Heading */}

            <h1 className="text-4xl lg:text-4xl font-extrabold tracking-tight text-white">
              Welcome <span className='text-green-500'>Back</span> to <span className="text-cyan-400">ABPEdutech</span>
            </h1>
            

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              India's complete online examination platform for schools, coaching
              institutes and competitive exam preparation.
            </p>

            {/* Features */}

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
                <div className="text-4xl">📝</div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  Mock Tests
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Practice real exam pattern tests with timer, auto evaluation
                  and instant results.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
                <div className="text-4xl">📚</div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  Previous Year Papers
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Solve previous year questions with detailed explanations and
                  solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
                <div className="text-4xl">📖</div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  Question Bank
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Thousands of chapter-wise and topic-wise questions for
                  unlimited practice.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-lg">
                <div className="text-4xl">🏆</div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  All India Ranking
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Compare your performance with students across India and
                  improve your ranking.
                </p>
              </div>
            </div>

            {/* Bottom */}

            <div className="mt-10 flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-green-400"></div>

              <p className="text-sm text-slate-300">
                Trusted by thousands of students preparing for competitive
                exams.
              </p>
            </div>
          </div>
        </div>
        </div>
    );
}

export default AuthLeftSideDescription;
