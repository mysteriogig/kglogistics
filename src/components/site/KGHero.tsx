import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, Plane, Ship } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function FloatingParcel({
  className,
  delay = 0,
  width = 360,
  height = 90,
  rotate = 0,
  tone = "from-[#004990]/25 to-[#004990]/5",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  tone?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -120, rotate: rotate - 12 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 2.2, delay, ease: [0.23, 0.86, 0.39, 0.96], opacity: { duration: 1.0 } }}
      className={cn("absolute hidden md:block", className)}
    >
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-2xl bg-gradient-to-br backdrop-blur-[2px] border-2 border-white/15 shadow-[0_8px_32px_0_rgba(0,73,144,0.25)]",
            tone,
          )}
        >
          <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 h-[2px] bg-white/30" />
          <div className="absolute top-3 left-3 right-3 h-3 rounded-sm bg-white/10" />
          <div className="absolute bottom-3 left-3 w-12 h-3 rounded-sm bg-white/15" />
        </div>
      </motion.div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay: 0.4 + i * 0.18, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export function KGHero() {
  return (
    <section className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden">
      {/* Deep tinted glass over the global animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001a35]/85 via-[#003a73]/75 to-[#004990]/70 backdrop-blur-sm" />
      <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-[#7fb3e0]/30 blur-[140px]" />

      {/* Floating parcels */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingParcel delay={0.3} width={500} height={120} rotate={12} tone="from-[#004990]/30 to-[#004990]/5" className="left-[-8%] top-[14%]" />
        <FloatingParcel delay={0.5} width={420} height={110} rotate={-15} tone="from-[#DCDDDE]/25 to-[#DCDDDE]/5" className="right-[-6%] top-[68%]" />
        <FloatingParcel delay={0.4} width={280} height={80} rotate={-8} tone="from-[#1565b8]/30 to-[#1565b8]/5" className="left-[6%] bottom-[8%]" />
        <FloatingParcel delay={0.6} width={200} height={70} rotate={20} tone="from-[#A7A9AC]/30 to-[#A7A9AC]/5" className="right-[14%] top-[12%]" />
        <FloatingParcel delay={0.7} width={160} height={60} rotate={-22} tone="from-[#004990]/30 to-[#004990]/5" className="left-[22%] top-[8%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 backdrop-blur mb-8">
          <Package className="h-3.5 w-3.5 text-[#7fb3e0]" />
          <span className="text-xs font-medium text-white/70 tracking-wide">End-to-End Cargo Solutions</span>
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.02]">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
            Seamless Logistics
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7fb3e0] via-[#a8cdec] to-[#DCDDDE]">
            Delivered With Care
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-white/55 leading-relaxed font-light px-4">
          KG Logistics moves your cargo across sea, air, road and rail with real-time tracking
          and guaranteed on-time delivery from Coimbatore to the world.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact"
            className="group inline-flex items-center gap-2 rounded-full glass-btn-primary px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5">
            Get a Quote
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link to="/tracking"
            className="inline-flex items-center gap-2 rounded-full glass-btn text-white px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5">
            Track Shipment
          </Link>
        </motion.div>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-14 flex items-center justify-center gap-8 sm:gap-12 text-white/40">
          {[Ship, Plane, Truck, Package].map((Icon, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade to page */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
    </section>
  );
}