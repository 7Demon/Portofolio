const FloatingOrb = () => {
  return (
    <div data-reveal style={{ '--reveal-delay': '20ms' }} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Soft Ambient Light Gradient Orbs */}
      <div className="absolute w-[500px] h-[500px] -top-32 -left-32 rounded-full bg-primary/10 dark:bg-primary/15 blur-[120px] animate-pulse-slow" />
      <div className="absolute w-[600px] h-[600px] top-1/3 -right-48 rounded-full bg-blue-500/10 dark:bg-indigo-500/10 blur-[140px]" />
      <div className="absolute w-[400px] h-[400px] bottom-10 left-1/4 rounded-full bg-primary/8 dark:bg-primary/12 blur-[100px]" />

      {/* Subtle Mesh Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-60 pointer-events-none" />
    </div>
  );
};

export default FloatingOrb;
