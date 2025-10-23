
// // Component: Header
// function Header({ route, setRoute }) {
//   return (
//     <div className="fixed top-0 left-0 w-full z-50 pointer-events-none">
//       <div className="pointer-events-auto flex items-center justify-between bg-black/60 backdrop-blur-sm px-6 py-4 m-2 rounded-lg border border-cyan-500/20">
//         {/* Left side — name */}
//         <h1 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
//           Hi, I'm Adithya
//         </h1>

//         {/* Right side — nav buttons */}
//         <div className="flex gap-4">
//           <button
//             onClick={() => setRoute('home')}
//             className={`text-cyan-300 hover:text-white transition ${
//               route === 'home' ? 'font-semibold text-white' : ''
//             }`}
//           >
//             Home
//           </button>
//           <button
//             onClick={() => setRoute('about')}
//             className={`text-cyan-300 hover:text-white transition ${
//               route === 'about' ? 'font-semibold text-white' : ''
//             }`}
//           >
//             About
//           </button>
//           <button
//             onClick={() => setRoute('contact')}
//             className={`text-cyan-300 hover:text-white transition ${
//               route === 'contact' ? 'font-semibold text-white' : ''
//             }`}
//           >
//             Contact
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
function Header() {
  return (
    <div className="fixed top-0 left-0 p-6 md:p-8 z-50 pointer-events-none">
      <div className="pointer-events-auto bg-black/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-cyan-500/20">
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          Hi, I'm Adithya
        </h1>
      </div>
    </div>
  );
}
export default Header