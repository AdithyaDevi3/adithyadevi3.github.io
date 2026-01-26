function SocialLinks() {
  return (
    <div className="fixed bottom-8 left-8 flex gap-4 z-50 pointer-events-auto">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
      >
        LinkedIn
      </a>

      <a
        href="mailto:your.email@example.com"
        className="bg-black/40 backdrop-blur-sm text-cyan-300 hover:text-white hover:bg-black/60 border border-cyan-500/30 px-4 py-2 rounded-lg transition-all"
      >
        Email
      </a>
    </div>
  );
}

export default SocialLinks