const FloatingOrb = () => {
  return (
    <div data-reveal style={{ '--reveal-delay': '20ms' }} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background ambient orbs */}
      <div className="floating-orb orb-1 w-[450px] h-[450px] -top-24 -left-24 opacity-60 dark:opacity-40" />
      <div className="floating-orb orb-2 w-[550px] h-[550px] top-1/3 -right-48 opacity-50 dark:opacity-35" />
      <div className="floating-orb orb-1 w-[350px] h-[350px] bottom-10 left-1/3 opacity-40 dark:opacity-25" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-60 dark:opacity-40" />
    </div>
  );
};

export default FloatingOrb;
