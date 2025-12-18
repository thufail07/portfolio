// src/components/common/loader.jsx
import React from 'react';

function Loader() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
            {/* Glass container (optional but on-brand) */}
            <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-full w-24 h-24 flex items-center justify-center">
                {/* Animated ring */}
                <div className="w-12 h-12 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin"></div>
            </div>
        </div>
    );
}

export default Loader;