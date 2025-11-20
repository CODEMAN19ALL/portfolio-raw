import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";
import { CounterAnimation } from "./CounterAnimation";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Hi, I'm{" "}
            <span className="text-primary">Gospel Uwaoma</span>
            <br />
            Creative Professional
          </motion.h1>

          <motion.p
            className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I craft exceptional digital experiences through design, development, and innovation.
            Let's bring your vision to life.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center group-hover:text-primary-foreground transition-colors">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </span>
              <span className="absolute inset-0 bg-background border-2 border-primary scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center group-hover:text-background transition-colors">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </span>
              <span className="absolute inset-0 bg-primary scale-0 group-hover:scale-100 transition-transform duration-300 rounded-md" />
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div>
              <div className="text-4xl text-primary mb-2">
                <CounterAnimation end={50} suffix="+" />
              </div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl text-primary mb-2">
                <CounterAnimation end={30} suffix="+" />
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl text-primary mb-2">
                <CounterAnimation end={5} suffix="+" />
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}