export function AnimatedBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient — deep navy */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000814] via-[#001D3D] to-[#003566]" />
      {/* Drifting color blobs */}
      <div className="blob-1 absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-[#003566]/60 blur-[120px]" />
      <div className="blob-2 absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[#4F8FC9]/30 blur-[140px]" />
      <div className="blob-3 absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[#001D3D]/70 blur-[130px]" />
      <div className="blob-1 absolute top-1/2 left-1/2 h-[400px] w-[400px] rounded-full bg-[#4F8FC9]/20 blur-[120px]" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(184,196,207,1) 1px, transparent 1px), linear-gradient(90deg, rgba(184,196,207,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}