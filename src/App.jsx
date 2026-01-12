import { Hero }  from "@/components/Hero";
import { About }  from "@/components/About";
import { Contacts }  from "@/components/Contacts";
import { Navbar }  from "@/components/Navbar";
import { Projects }  from "@/components/Projects";
import { useState } from "react";

function App() { 
  // Toggle between English and Japanese
  const [lang, setLang] = useState('en');
  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'jp' : 'en'));
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar lang={lang} toggleLanguage={toggleLanguage}/>

      <main>
        <Hero lang={lang} />
        <About lang={lang} />
        <Projects lang={lang} />
        <Contacts lang={lang} />
      </main>
    </div>
);
}

export default App
