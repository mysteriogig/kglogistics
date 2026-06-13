import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, Plane, Ship, Train } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function FloatingParcel({
  className,
  delay = 0,
  width = 360,
  height = 90,
  rotate = 0,
  tone = "from-[#003566]/40 to-[#001D3D]/10",
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
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        style={{ width, height }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-2xl bg-gradient-to-br backdrop-blur-[2px] border-2 border-[#B8C4CF]/25 shadow-[0_8px_32px_0_rgba(0,8,20,0.5)]",
            tone,
          )}
        >
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-[2px] bg-[#B8C4CF]/40" />
          <div className="absolute top-2 left-2 right-2 h-2 rounded-sm bg-[#B8C4CF]/15" />
          <div className="absolute bottom-2 left-2 w-8 h-2 rounded-sm bg-[#4F8FC9]/30" />
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#000814]/90 via-[#001D3D]/85 to-[#003566]/75 backdrop-blur-sm" />
      <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-[#4F8FC9]/25 blur-[140px]" />

      {/* Decorative plane — top right */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: -40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.6, delay: 0.2, ease: [0.23, 0.86, 0.39, 0.96] }}
        className="absolute top-6 right-4 sm:top-10 sm:right-10 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [-6, -2, -6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#4F8FC9]/70"
        >
          <Plane className="h-16 w-16 sm:h-28 sm:w-28 drop-shadow-[0_8px_24px_rgba(79,143,201,0.5)]" strokeWidth={1.2} />
        </motion.div>
      </motion.div>

      {/* Decorative ship — bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -80, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.6, delay: 0.35, ease: [0.23, 0.86, 0.39, 0.96] }}
        className="absolute bottom-10 left-4 sm:bottom-16 sm:left-10 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#B8C4CF]/70"
        >
          <Ship className="h-16 w-16 sm:h-28 sm:w-28 drop-shadow-[0_8px_24px_rgba(184,196,207,0.4)]" strokeWidth={1.2} />
        </motion.div>
      </motion.div>

      {/* Floating parcels — visible on every breakpoint */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingParcel delay={0.3} width={220} height={70} rotate={12} tone="from-[#003566]/45 to-[#001D3D]/10" className="left-[-6%] top-[18%] md:w-[500px]" />
        <FloatingParcel delay={0.5} width={200} height={65} rotate={-15} tone="from-[#4F8FC9]/35 to-[#003566]/10" className="right-[-4%] top-[60%]" />
        <FloatingParcel delay={0.4} width={150} height={55} rotate={-8} tone="from-[#B8C4CF]/30 to-[#4F8FC9]/10" className="left-[8%] bottom-[22%]" />
        <FloatingParcel delay={0.6} width={130} height={50} rotate={20} tone="from-[#003566]/40 to-[#001D3D]/10" className="right-[18%] top-[10%]" />
        <FloatingParcel delay={0.7} width={110} height={45} rotate={-22} tone="from-[#4F8FC9]/35 to-[#001D3D]/10" className="left-[28%] top-[6%] hidden sm:block" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 rounded-full border border-[#4F8FC9]/30 bg-[#001D3D]/40 px-4 py-1.5 backdrop-blur mb-8">
          <Package className="h-3.5 w-3.5 text-[#4F8FC9]" />
          <span className="text-xs font-medium text-[#B8C4CF] tracking-wide">End-to-End Cargo Solutions</span>
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.02]">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#F8FAFC] to-[#B8C4CF]">
            Seamless Logistics
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F8FC9] via-[#7fb3e0] to-[#B8C4CF]">
            Delivered With Care
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-6 max-w-2xl mx-auto text-base sm:text-lg lg:text-xl text-[#B8C4CF]/80 leading-relaxed font-light px-4">
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
          className="mt-14 flex items-center justify-center gap-8 sm:gap-12 text-[#B8C4CF]/50">
          {[Ship, Plane, Truck, Train].map((Icon, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade to page */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#000814]/80 to-transparent pointer-events-none" />
    </section>
  );
}