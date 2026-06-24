import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, Ship, Train } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function FloatingContainer({
  className,
  delay = 0,
  width = 220,
  height = 110,
  rotate = 0,
  bodyFrom = "#003566",
  bodyTo = "#001D3D",
  stamp = "KG",
  stampLabel = "EXPRESS",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  bodyFrom?: string;
  bodyTo?: string;
  stamp?: string;
  stampLabel?: string;
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
        {/* Container body */}
        <div
          className="absolute inset-0 rounded-[6px] border border-[#000814]/60 shadow-[0_12px_40px_-6px_rgba(0,8,20,0.55)] overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(180deg, ${bodyFrom} 0%, ${bodyTo} 100%)`,
          }}
        >
          {/* Top rail */}
          <div className="absolute inset-x-0 top-0 h-[8%] bg-black/30 border-b border-black/40" />
          {/* Bottom rail */}
          <div className="absolute inset-x-0 bottom-0 h-[8%] bg-black/35 border-t border-black/40" />

          {/* Corrugated vertical ridges */}
          <div
            className="absolute inset-x-0 top-[8%] bottom-[8%] opacity-80"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0 2px, rgba(0,0,0,0.18) 2px 8px)",
            }}
          />

          {/* Right door divider + hinges */}
          <div className="absolute right-[22%] top-[8%] bottom-[8%] w-[1.5px] bg-black/50" />
          <div className="absolute right-[20.5%] top-[14%] h-2 w-1 bg-[#B8C4CF]/70 rounded-sm" />
          <div className="absolute right-[20.5%] bottom-[14%] h-2 w-1 bg-[#B8C4CF]/70 rounded-sm" />

          {/* Stamp / label badge */}
          <div className="absolute left-[6%] top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            <div className="px-1.5 py-0.5 rounded-[2px] bg-[#F8FAFC] text-[#001D3D] font-black text-[10px] leading-none tracking-tight shadow-sm">
              {stamp}
            </div>
            <div className="hidden sm:block px-1.5 py-0.5 rounded-[2px] border border-[#B8C4CF]/70 text-[#F8FAFC] font-bold text-[8px] leading-none tracking-[0.15em]">
              {stampLabel}
            </div>
          </div>

          {/* Serial code stencil */}
          <div className="absolute right-[26%] top-[18%] text-[7px] font-mono font-bold text-[#F8FAFC]/70 tracking-wider">
            KGLU 482 015 7
          </div>

          {/* Inner highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20 pointer-events-none" />
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
          className="text-white/80"
        >
          <Truck className="h-16 w-16 sm:h-28 sm:w-28 drop-shadow-[0_8px_24px_rgba(127,179,224,0.5)]" strokeWidth={1.2} />
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
          className="text-white/80"
        >
          <Ship className="h-16 w-16 sm:h-28 sm:w-28 drop-shadow-[0_8px_24px_rgba(127,179,224,0.5)]" strokeWidth={1.2} />
        </motion.div>
      </motion.div>

      {/* Floating shipping containers — visible on every breakpoint */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingContainer delay={0.3} width={210} height={95} rotate={10} bodyFrom="#003566" bodyTo="#001D3D" stamp="KG" stampLabel="EXPRESS" className="left-[-5%] top-[16%]" />
        <FloatingContainer delay={0.5} width={190} height={85} rotate={-14} bodyFrom="#4F8FC9" bodyTo="#003566" stamp="SEA" stampLabel="FRAGILE" className="right-[-4%] top-[58%]" />
        <FloatingContainer delay={0.4} width={150} height={70} rotate={-6} bodyFrom="#001D3D" bodyTo="#000814" stamp="ROAD" stampLabel="PRIORITY" className="left-[6%] bottom-[20%]" />
        <FloatingContainer delay={0.6} width={130} height={62} rotate={18} bodyFrom="#003566" bodyTo="#001D3D" stamp="40HC" stampLabel="EXPORT" className="right-[16%] top-[10%]" />
        <FloatingContainer delay={0.7} width={120} height={58} rotate={-20} bodyFrom="#4F8FC9" bodyTo="#001D3D" stamp="20FT" stampLabel="GLOBAL" className="left-[28%] top-[5%] hidden sm:block" />
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
          KG Logistics moves your cargo across sea, road and rail with dedicated
          care and guaranteed on-time delivery from Coimbatore to the world.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact"
            className="group inline-flex items-center gap-2 rounded-full glass-btn-primary px-7 py-3.5 text-sm font-semibold hover:-translate-y-0.5">
            Get a Quote
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
          className="mt-14 flex items-center justify-center gap-8 sm:gap-12 text-white/40">
          {[Ship, Truck, Train].map((Icon, i) => (
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