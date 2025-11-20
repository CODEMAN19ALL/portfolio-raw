import { motion } from "motion/react";

export function Logo() {
  return (
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        {/* Outer hexagon */}
        <path
          d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
          fill="currentColor"
          className="opacity-20"
        />
        {/* Inner geometric pattern */}
        <path
          d="M24 8L36 15V33L24 40L12 33V15L24 8Z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        {/* G letter stylized */}
        <path
          d="M28 18H20C18.8954 18 18 18.8954 18 20V28C18 29.1046 18.8954 30 20 30H28C29.1046 30 30 29.1046 30 28V24H26"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="2" fill="white" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-xl tracking-tight">Gospel Uwaoma</span>
        <span className="text-xs text-muted-foreground tracking-wide">Creative Professional</span>
      </div>
    </motion.div>
  );
}
