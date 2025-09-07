import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { Contact } from '@/components/sections/Contact'

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="bg-card/50 backdrop-blur-sm py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Yowhans Nigus. Built with React, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
