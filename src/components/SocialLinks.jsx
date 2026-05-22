import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="fixed bottom-8 left-8 flex gap-4 z-50 pointer-events-auto">
      <a
        href="https://github.com/AdithyaDevi3"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
      >
        <FaGithub size={24}/>
      </a>

      <a
        href="https://www.linkedin.com/in/adithya-devi"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
      >
        <FaLinkedin size={24} />
      
      </a>

      <a
        href="mailto:adithya.r@example.com"
        className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
      >
        <FaEnvelope size={24}/>
      </a>
    </div>
  );
}

export default SocialLinks