import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1Image from "@/assets/ADINA.png";
import project2Image from "@/assets/SHEQLEE.png";
import project3Image from "@/assets/Gezana.png";

const projects = [
  {
    id: 1,
    title: "ADINA",
    description:
      "A website showcasing a company’s pure water packaging, highlighting products, processes, and quality standards.",
    image: project1Image,
    tags: ["Next js", "Typescript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "https://github.com/jo11223/Adina-Natural-spring-water",
  },
  {
    id: 2,
    title: "SHEQLEE",
    description:
      "A freelancing marketplace connecting clients and freelancers, allowing job postings, applications, and seamless collaboration.",
    image: project2Image,
    tags: ["React.js", "Express", "MongoDB", "Node.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/jo11223/Sheqlee",
  },
  {
    id: 3,
    title: "Gezana",
    description:
      "A hotel management system for booking rooms, managing reservations, and ensuring smooth guest services.",
    image: project3Image,
    tags: [
      "Next js",
      "Framer Motion",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card project-card h-full overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 gradient-text">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-badge px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" className="btn-hero text-white flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo coming soon
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() =>
                        project.githubUrl !== "#" &&
                        window.open(project.githubUrl, "_blank")
                      }
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
