

import {
  BookOpen,
  FileText,
  Video,
  Award,
  Users,
  CheckCircle,
} from "lucide-react";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      <section
        id="home"
        className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-24"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Crack Government Exams with ABPEdutech
            </h1>

            <p className="text-xl text-gray-200 leading-8 mb-8">
              Access PDF Notes, Mock Tests, Video Tutorials, and Previous
              Year Question Banks for SSC, Railway, Banking, UPSC,
              BPSC, and more.
            </p>

            <div className="flex gap-4 flex-wrap">
              
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-2xl font-semibold hover:bg-yellow-300 transition">
                Start Learning
              </button>

              <button className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition">
                Explore Courses
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Students"
              className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Everything Students Need
          </h2>

          <p className="text-gray-600 text-lg">
            Smart learning tools for all competitive government exams.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          
          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
            <BookOpen className="text-blue-600 mb-4" size={40} />

            <h3 className="text-2xl font-semibold mb-3">
              Notes PDF
            </h3>

            <p className="text-gray-600 leading-7">
              High-quality handwritten and digital notes for every subject.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
            <FileText className="text-green-600 mb-4" size={40} />

            <h3 className="text-2xl font-semibold mb-3">
              Mock Tests
            </h3>

            <p className="text-gray-600 leading-7">
              Practice online tests with real exam patterns and rankings.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
            <Video className="text-red-600 mb-4" size={40} />

            <h3 className="text-2xl font-semibold mb-3">
              Video Tutorials
            </h3>

            <p className="text-gray-600 leading-7">
              Learn concepts easily with expert video explanations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition">
            <Award className="text-yellow-500 mb-4" size={40} />

            <h3 className="text-2xl font-semibold mb-3">
              Question Bank
            </h3>

            <p className="text-gray-600 leading-7">
              Solve previous year and topic-wise important questions.
            </p>
          </div>
        </div>
      </section>

      {/* Exams */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Popular Government Exams
            </h2>

            <p className="text-gray-600 text-lg">
              Prepare for all major competitive exams from one platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {[
              "SSC",
              "Railway",
              "Banking",
              "UPSC",
              "BPSC",
              "Teaching Exams",
            ].map((exam, index) => (
              
              <div
                key={index}
                className="bg-gray-100 rounded-3xl p-8 hover:bg-blue-700 hover:text-white transition"
              >
                <h3 className="text-3xl font-bold mb-4">
                  {exam}
                </h3>

                <ul className="space-y-3">
                  
                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} />
                    PDF Notes
                  </li>

                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} />
                    Online Tests
                  </li>

                  <li className="flex items-center gap-2">
                    <CheckCircle size={18} />
                    Video Classes
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-blue-700 text-white">
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          
          <div>
            <Users size={50} className="mx-auto mb-4" />

            <h2 className="text-5xl font-bold mb-2">
              50K+
            </h2>

            <p className="text-xl">
              Students Learning
            </p>
          </div>

          <div>
            <BookOpen size={50} className="mx-auto mb-4" />

            <h2 className="text-5xl font-bold mb-2">
              10K+
            </h2>

            <p className="text-xl">
              Study Materials
            </p>
          </div>

          <div>
            <Award size={50} className="mx-auto mb-4" />

            <h2 className="text-5xl font-bold mb-2">
              500+
            </h2>

            <p className="text-xl">
              Mock Tests
            </p>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;