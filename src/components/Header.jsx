
function Header() {
  return (
    <div className="fixed top-0 left-0 p-6 md:p-8 z-50 pointer-events-none">
      <div className="pointer-events-auto bg-black/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-cyan-500/20">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          Hi, I'm Adithya
        </h1>
        <div className="relative z-10 h-full pointer-events-auto">
        {/* {route === 'home' && <HomePage />}
        {route === 'about' && <AboutPage />}
        {route === 'contact' && <ContactPage />} */}
      </div>
      </div>

    </div>
    
  );
}
export default Header