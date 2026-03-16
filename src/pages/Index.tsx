import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-3xl text-center">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 font-body text-xs uppercase tracking-[0.35em] text-muted-foreground"
        >
          Define Your Presence
        </motion.p>

        {/* Main Slogan */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          What you wear speaks for you
          <span className="block mt-2 italic">
            and defines how the world treats you.
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mx-auto my-10 h-px w-24 bg-foreground origin-center"
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <a
            href="#collection"
            className="inline-block bg-accent px-10 py-4 font-body text-sm font-semibold uppercase tracking-[0.25em] text-accent-foreground transition-opacity duration-300 hover:opacity-85"
          >
            Command the Room. Shop the Collection.
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
