import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile-pic.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">
                Passionate Developer
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Full-stack developer with strong experience in React.js and
                Node.js, building scalable MERN applications and deploying
                production-ready solutions. Skilled in debugging, performance
                optimization, and integrating frontend with backend services.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing and mentoring other developers.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Team Collaboration",
                  "Continuous Learning",
                ].map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 scale-105"></div>
              <img
                src={profileImage}
                alt="Yowhans Nigus Profile"
                className="relative w-80 h-80 object-cover rounded-2xl shadow-elegant"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
