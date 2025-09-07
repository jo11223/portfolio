import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
  },
  // {
  //   title: 'Mobile',
  //   icon: Smartphone,
  //   skills: ['React Native', 'Expo', 'Flutter', 'iOS', 'Android']
  // },
  // {
  //   title: 'Tools',
  //   icon: Code,
  //   skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma']
  // },
  // {
  //   title: 'Design',
  //   icon: Palette,
  //   skills: ['UI/UX', 'Responsive Design', 'Prototyping', 'User Research']
  // }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4 gradient-text">
                {category.title}
              </h3>

              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + skillIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="skill-badge py-2 px-3 rounded-lg text-sm font-medium inline-block mr-2 mb-2"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
