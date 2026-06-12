export function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#eef4fb] via-white to-[#e1ecf7]" />
      {/* Drifting color blobs */}
      <div className="blob-1 absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[#004990]/25 blur-[120px]" />
      <div className="blob-2 absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[#1565b8]/20 blur-[140px]" />
      <div className="blob-3 absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[#A7A9AC]/30 blur-[130px]" />
      <div className="blob-1 absolute top-1/2 left-1/2 h-[400px] w-[400px] rounded-full bg-[#7fb3e0]/20 blur-[120px]" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,73,144,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,73,144,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}