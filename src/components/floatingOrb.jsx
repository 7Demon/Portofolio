const FloatingOrb = () =>{
    return (
        <div data-reveal style={{ '--reveal-delay': '20ms' }} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="floating-orb orb-1 w-125 h-125 -top-20 -left-20" />
        <div className="floating-orb orb-2 w-150 h-150 top-1/3 -right-40" />
        <div className="floating-orb orb-1 w-100 h-100 bottom-0 left-1/4" />
        <div className="floating-orb orb-2 w-75 h-75 top-2/3 right-1/4" />

        <div className="absolute inset-0 grid pattern opacity-50" />
        </div>
)}
export default FloatingOrb;
