import { Menu, BookOpen, FileText, Video, GraduationCap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
          <GraduationCap size={32} />
          <h1 className="text-2xl font-bold">ABPEdutech</h1>
        </div>

        <div className="hidden md:flex items-center gap-8 font-medium">
          
          <a href="#home" className="hover:text-yellow-300 transition">
            Home
          </a>

          <a
            href="#notes"
            className="hover:text-yellow-300 transition flex items-center gap-1"
          >
            <BookOpen size={18} />
            Notes
          </a>

          <a
            href="#tests"
            className="hover:text-yellow-300 transition flex items-center gap-1"
          >
            <FileText size={18} />
            Mock Tests
          </a>

          <a
            href="#tutorials"
            className="hover:text-yellow-300 transition flex items-center gap-1"
          >
            <Video size={18} />
            Tutorials
          </a>

          <button className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold hover:bg-yellow-300 transition">
            Login
          </button>
        </div>

        <div className="md:hidden">
          <Menu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;