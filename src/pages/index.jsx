import { useState } from "react";
import FloatingOrb from '../components/floatingOrb'
import Navbar from "../components/Navbar.jsx";
import Home from "../components/home.jsx";

const Index = () => {
    return (
    <div className='min-h-screen bg-background relative'>
        <FloatingOrb />
        <Navbar />
        <main className="relative z-10">
            <Home />
        </main>
    </div>
    )
}

export default Index;