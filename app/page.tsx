// import Header from "@/components/Header";
// import About from "@/components/About";
// import ForgeSection from "@/components/ForgeSection";
// import Skills from "@/components/Skills";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-white text-black">
//       <Header />
//       <About />
//       <ForgeSection />
//       <Skills />
//       <Contact />
//       <Footer />
//     </main>
//   );
// }  
import Header from "@/components/Header";
import About from "@/components/About";
import ForgeSection from "@/components/ForgeSection";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* Background blur circles */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 -right-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl animate-pulse"></div>

      <div className="relative z-10">
        <Header />
        <About />
        <ForgeSection />
        <Skills />
        <Contact />
        <Footer />
      </div>

    </main>
  );
}
