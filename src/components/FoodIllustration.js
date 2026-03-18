import React from "react";

const illustrations = {
    "boiled-eggs-hard": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="plate1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f5f0eb" />
                    <stop offset="100%" stopColor="#e8e0d8" />
                </linearGradient>
            </defs>
            <ellipse cx="100" cy="150" rx="85" ry="22" fill="url(#plate1)" />
            <ellipse cx="100" cy="148" rx="70" ry="16" fill="#fff" opacity="0.3" />
            {/* Left half egg */}
            <ellipse cx="72" cy="108" rx="30" ry="40" fill="#faf8f5" stroke="#e8e0d8" strokeWidth="1.5" />
            <ellipse cx="72" cy="108" rx="18" ry="22" fill="#fff" />
            <circle cx="72" cy="105" r="12" fill="#f5c542" />
            <circle cx="68" cy="101" r="4" fill="#f5d76e" opacity="0.6" />
            {/* Right half egg */}
            <ellipse cx="128" cy="108" rx="30" ry="40" fill="#faf8f5" stroke="#e8e0d8" strokeWidth="1.5" />
            <ellipse cx="128" cy="108" rx="18" ry="22" fill="#fff" />
            <circle cx="128" cy="105" r="12" fill="#f5c542" />
            <circle cx="124" cy="101" r="4" fill="#f5d76e" opacity="0.6" />
            {/* Steam */}
            <path d="M60,60 Q55,45 60,30" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M100,55 Q95,40 100,25" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M140,60 Q135,45 140,30" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.5" />
        </svg>
    ),

    "boiled-eggs-soft": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Egg cup */}
            <path d="M70,160 L80,120 L120,120 L130,160 Z" fill="#b39ddb" />
            <ellipse cx="100" cy="160" rx="30" ry="8" fill="#9575cd" />
            <ellipse cx="100" cy="120" rx="20" ry="6" fill="#ce93d8" />
            {/* Egg */}
            <ellipse cx="100" cy="90" rx="28" ry="38" fill="#faf8f5" stroke="#e8e0d8" strokeWidth="1.5" />
            {/* Cracked top */}
            <path d="M78,72 L85,65 L92,75 L100,60 L108,75 L115,65 L122,72" fill="#faf8f5" stroke="#e8e0d8" strokeWidth="1.5" />
            {/* Runny yolk */}
            <circle cx="100" cy="82" r="14" fill="#f5c542" />
            <circle cx="100" cy="82" r="10" fill="#f0a830" opacity="0.7" />
            <circle cx="96" cy="78" r="4" fill="#f5d76e" opacity="0.5" />
            {/* Yolk drip */}
            <path d="M95,96 Q93,105 96,110" stroke="#f0a830" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Steam */}
            <path d="M90,45 Q85,30 90,15" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M110,45 Q105,30 110,15" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
    ),

    "fried-eggs": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <radialGradient id="panGrad" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#555" />
                    <stop offset="100%" stopColor="#333" />
                </radialGradient>
            </defs>
            {/* Pan */}
            <ellipse cx="100" cy="120" rx="80" ry="55" fill="url(#panGrad)" />
            <ellipse cx="100" cy="118" rx="70" ry="48" fill="#444" />
            {/* Handle */}
            <rect x="165" y="110" width="30" height="12" rx="3" fill="#888" />
            {/* Egg white */}
            <path d="M60,110 Q50,80 80,75 Q100,60 130,78 Q155,85 150,115 Q145,140 110,145 Q70,148 60,110Z" fill="#fff" opacity="0.95" />
            {/* Yolk */}
            <circle cx="105" cy="108" r="20" fill="#f5c542" />
            <circle cx="105" cy="108" r="16" fill="#f0a830" />
            <circle cx="100" cy="103" r="6" fill="#f5d76e" opacity="0.5" />
            {/* Pepper dots */}
            <circle cx="80" cy="95" r="1" fill="#333" opacity="0.5" />
            <circle cx="125" cy="100" r="1" fill="#333" opacity="0.5" />
            <circle cx="90" cy="125" r="1" fill="#333" opacity="0.5" />
        </svg>
    ),

    "omelet": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="plateg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f5f0eb" />
                    <stop offset="100%" stopColor="#e0d8d0" />
                </linearGradient>
            </defs>
            {/* Plate */}
            <ellipse cx="100" cy="145" rx="85" ry="25" fill="url(#plateg)" />
            <ellipse cx="100" cy="143" rx="70" ry="18" fill="#fff" opacity="0.3" />
            {/* Omelet body */}
            <ellipse cx="100" cy="115" rx="55" ry="30" fill="#f0c850" />
            <ellipse cx="100" cy="112" rx="50" ry="26" fill="#f5d76e" />
            {/* Fold line */}
            <path d="M55,115 Q100,95 145,115" stroke="#e8b430" strokeWidth="2" fill="none" />
            {/* Surface texture */}
            <ellipse cx="85" cy="108" rx="8" ry="4" fill="#e8c44a" opacity="0.5" />
            <ellipse cx="115" cy="105" rx="10" ry="5" fill="#e8c44a" opacity="0.4" />
            {/* Herbs */}
            <circle cx="90" cy="112" r="2" fill="#4caf50" />
            <circle cx="108" cy="108" r="1.5" fill="#4caf50" />
            <circle cx="100" cy="118" r="1.5" fill="#4caf50" />
            {/* Steam */}
            <path d="M80,75 Q75,60 80,45" stroke="#ddd" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M120,75 Q115,60 120,45" stroke="#ddd" strokeWidth="1.5" fill="none" opacity="0.4" />
        </svg>
    ),

    "scrambled-eggs": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Plate */}
            <ellipse cx="100" cy="145" rx="85" ry="25" fill="#f0ebe5" />
            <ellipse cx="100" cy="143" rx="70" ry="18" fill="#fff" opacity="0.3" />
            {/* Scrambled egg chunks */}
            <ellipse cx="85" cy="110" rx="18" ry="12" fill="#f5d76e" />
            <ellipse cx="105" cy="105" rx="15" ry="10" fill="#f0c850" />
            <ellipse cx="115" cy="118" rx="16" ry="11" fill="#f5d76e" />
            <ellipse cx="90" cy="122" rx="14" ry="9" fill="#f0c850" />
            <ellipse cx="75" cy="118" rx="12" ry="10" fill="#f5d76e" />
            <ellipse cx="120" cy="108" rx="12" ry="8" fill="#f5d76e" />
            <ellipse cx="100" cy="115" rx="10" ry="7" fill="#f0c850" />
            {/* Green onion */}
            <line x1="80" y1="108" x2="86" y2="104" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" />
            <line x1="110" y1="112" x2="116" y2="108" stroke="#4caf50" strokeWidth="2" strokeLinecap="round" />
            <circle cx="80" cy="108" r="2" fill="#66bb6a" />
            <circle cx="110" cy="112" r="2" fill="#66bb6a" />
            {/* Toast */}
            <rect x="135" y="105" width="30" height="35" rx="3" fill="#d4a54a" transform="rotate(15,150,122)" />
            <rect x="137" y="108" width="26" height="29" rx="2" fill="#e8c06a" transform="rotate(15,150,122)" />
        </svg>
    ),

    "pasta-bolognese": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Bowl */}
            <ellipse cx="100" cy="150" rx="80" ry="22" fill="#e0d5cc" />
            <path d="M25,130 Q25,170 100,170 Q175,170 175,130" fill="#f0ebe5" />
            <ellipse cx="100" cy="130" rx="75" ry="20" fill="#f5f0eb" />
            <ellipse cx="100" cy="130" rx="65" ry="16" fill="#fff" opacity="0.3" />
            {/* Spaghetti */}
            <path d="M45,125 Q70,110 100,120 Q130,130 155,118" stroke="#f0d58c" strokeWidth="3" fill="none" />
            <path d="M50,130 Q80,118 110,128 Q140,138 160,122" stroke="#e8c86a" strokeWidth="3" fill="none" />
            <path d="M42,128 Q75,115 105,125 Q135,135 158,120" stroke="#f0d58c" strokeWidth="2.5" fill="none" />
            <path d="M48,132 Q78,120 108,130 Q138,140 155,125" stroke="#e8c86a" strokeWidth="2.5" fill="none" />
            {/* Meat sauce */}
            <ellipse cx="100" cy="118" rx="30" ry="15" fill="#c0392b" opacity="0.9" />
            <ellipse cx="95" cy="116" rx="20" ry="10" fill="#e74c3c" opacity="0.7" />
            {/* Meat chunks */}
            <circle cx="90" cy="115" r="4" fill="#8b4513" opacity="0.6" />
            <circle cx="105" cy="118" r="3" fill="#8b4513" opacity="0.5" />
            <circle cx="98" cy="112" r="3.5" fill="#8b4513" opacity="0.5" />
            {/* Parmesan */}
            <circle cx="85" cy="110" r="1.5" fill="#f5f0e0" />
            <circle cx="100" cy="108" r="1" fill="#f5f0e0" />
            <circle cx="112" cy="112" r="1.5" fill="#f5f0e0" />
        </svg>
    ),

    "pasta-carbonara": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Bowl */}
            <ellipse cx="100" cy="150" rx="80" ry="22" fill="#ddd5cc" />
            <path d="M25,130 Q25,170 100,170 Q175,170 175,130" fill="#f0ebe5" />
            <ellipse cx="100" cy="130" rx="75" ry="20" fill="#f5f0eb" />
            {/* Spaghetti with cream */}
            <path d="M45,125 Q70,112 100,122 Q130,132 155,118" stroke="#f0d58c" strokeWidth="3" fill="none" />
            <path d="M50,130 Q80,118 110,128 Q140,138 160,122" stroke="#f0d58c" strokeWidth="3" fill="none" />
            <path d="M48,128 Q78,116 108,126 Q138,136 158,120" stroke="#e8c86a" strokeWidth="2.5" fill="none" />
            {/* Cream sauce */}
            <ellipse cx="100" cy="120" rx="35" ry="12" fill="#f5e6cc" opacity="0.7" />
            {/* Bacon bits */}
            <rect x="82" y="115" width="8" height="4" rx="1" fill="#c0392b" opacity="0.7" transform="rotate(-10,86,117)" />
            <rect x="100" y="118" width="7" height="3.5" rx="1" fill="#c0392b" opacity="0.6" transform="rotate(15,103,120)" />
            <rect x="112" y="114" width="6" height="3" rx="1" fill="#c0392b" opacity="0.7" transform="rotate(-5,115,116)" />
            {/* Pepper */}
            <circle cx="95" cy="112" r="1" fill="#333" opacity="0.4" />
            <circle cx="108" cy="116" r="0.8" fill="#333" opacity="0.4" />
            <circle cx="90" cy="120" r="0.8" fill="#333" opacity="0.3" />
            {/* Egg yolk on top */}
            <circle cx="100" cy="115" r="8" fill="#f5c542" opacity="0.6" />
        </svg>
    ),

    "pasta-aglio": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Plate */}
            <ellipse cx="100" cy="150" rx="85" ry="22" fill="#e8e0d8" />
            <ellipse cx="100" cy="148" rx="70" ry="16" fill="#fff" opacity="0.3" />
            {/* Spaghetti */}
            <path d="M40,125 Q70,108 100,118 Q130,128 160,112" stroke="#f0d58c" strokeWidth="3" fill="none" />
            <path d="M45,130 Q75,115 105,125 Q135,135 160,118" stroke="#e8c86a" strokeWidth="3" fill="none" />
            <path d="M42,128 Q72,112 102,122 Q132,132 158,115" stroke="#f0d58c" strokeWidth="2.5" fill="none" />
            <path d="M48,132 Q78,118 108,128 Q138,138 155,122" stroke="#e8c86a" strokeWidth="2.5" fill="none" />
            {/* Oil sheen */}
            <ellipse cx="100" cy="120" rx="35" ry="12" fill="#c8e06a" opacity="0.2" />
            {/* Garlic slices */}
            <ellipse cx="85" cy="118" rx="5" ry="3" fill="#f5f0e0" stroke="#e8e0d0" strokeWidth="0.5" transform="rotate(-15,85,118)" />
            <ellipse cx="108" cy="115" rx="4" ry="2.5" fill="#f5f0e0" stroke="#e8e0d0" strokeWidth="0.5" transform="rotate(10,108,115)" />
            <ellipse cx="95" cy="122" rx="4.5" ry="2.5" fill="#f5f0e0" stroke="#e8e0d0" strokeWidth="0.5" />
            {/* Chili flakes */}
            <circle cx="90" cy="112" r="1.5" fill="#e74c3c" opacity="0.7" />
            <circle cx="112" cy="120" r="1" fill="#e74c3c" opacity="0.6" />
            <circle cx="100" cy="108" r="1" fill="#e74c3c" opacity="0.5" />
            {/* Parsley */}
            <path d="M75,115 Q72,110 76,108" stroke="#4caf50" strokeWidth="1.5" fill="#66bb6a" />
            <path d="M120,118 Q117,113 121,111" stroke="#4caf50" strokeWidth="1.5" fill="#66bb6a" />
        </svg>
    ),

    "bliny": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Plate */}
            <ellipse cx="100" cy="160" rx="85" ry="20" fill="#e8e0d8" />
            {/* Stack of bliny */}
            <ellipse cx="100" cy="140" rx="50" ry="12" fill="#d4a54a" />
            <ellipse cx="100" cy="138" rx="48" ry="11" fill="#e8c06a" />
            <ellipse cx="100" cy="132" rx="50" ry="12" fill="#d4a54a" />
            <ellipse cx="100" cy="130" rx="48" ry="11" fill="#e8c06a" />
            <ellipse cx="100" cy="124" rx="50" ry="12" fill="#d4a54a" />
            <ellipse cx="100" cy="122" rx="48" ry="11" fill="#e8c06a" />
            <ellipse cx="100" cy="116" rx="50" ry="12" fill="#d4a54a" />
            <ellipse cx="100" cy="114" rx="48" ry="11" fill="#e8c06a" />
            <ellipse cx="100" cy="108" rx="50" ry="12" fill="#d4a54a" />
            <ellipse cx="100" cy="106" rx="48" ry="11" fill="#e8c06a" />
            {/* Top blin */}
            <ellipse cx="100" cy="100" rx="50" ry="12" fill="#d4a54a" />
            <ellipse cx="100" cy="98" rx="46" ry="10" fill="#e8c06a" />
            {/* Butter on top */}
            <rect x="90" y="90" width="20" height="12" rx="2" fill="#f5d76e" />
            <rect x="92" y="92" width="16" height="8" rx="1.5" fill="#ffe082" />
            {/* Honey drip */}
            <path d="M60,110 Q55,120 58,130" stroke="#e8a430" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
        </svg>
    ),

    "oladi": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Plate */}
            <ellipse cx="100" cy="155" rx="85" ry="22" fill="#e8e0d8" />
            <ellipse cx="100" cy="153" rx="70" ry="16" fill="#fff" opacity="0.2" />
            {/* Bottom oladi */}
            <ellipse cx="80" cy="130" rx="25" ry="10" fill="#c49040" />
            <ellipse cx="80" cy="128" rx="23" ry="8" fill="#d4a54a" />
            <ellipse cx="120" cy="132" rx="25" ry="10" fill="#c49040" />
            <ellipse cx="120" cy="130" rx="23" ry="8" fill="#d4a54a" />
            {/* Top oladi */}
            <ellipse cx="100" cy="118" rx="25" ry="10" fill="#c49040" />
            <ellipse cx="100" cy="116" rx="23" ry="8" fill="#d4a54a" />
            {/* Smetana dollop */}
            <ellipse cx="100" cy="110" rx="12" ry="6" fill="#fff" />
            <ellipse cx="100" cy="108" rx="10" ry="4" fill="#fafafa" />
            {/* Berries */}
            <circle cx="70" cy="120" r="5" fill="#e74c3c" />
            <circle cx="65" cy="125" r="4" fill="#c0392b" />
            <circle cx="130" cy="122" r="4.5" fill="#9c27b0" />
            <circle cx="135" cy="127" r="4" fill="#7b1fa2" />
            <circle cx="75" cy="126" r="3.5" fill="#9c27b0" />
        </svg>
    ),

    "ovsyanka": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Bowl */}
            <ellipse cx="100" cy="155" rx="70" ry="18" fill="#8d6e63" />
            <path d="M35,125 Q35,165 100,165 Q165,165 165,125" fill="#a1887f" />
            <ellipse cx="100" cy="125" rx="65" ry="18" fill="#bcaaa4" />
            {/* Oatmeal */}
            <ellipse cx="100" cy="120" rx="55" ry="14" fill="#f5e6cc" />
            <ellipse cx="100" cy="118" rx="50" ry="12" fill="#f0dbb8" />
            {/* Berries */}
            <circle cx="80" cy="115" r="5" fill="#e74c3c" />
            <circle cx="75" cy="120" r="4" fill="#c0392b" />
            <circle cx="120" cy="114" r="4.5" fill="#3f51b5" />
            <circle cx="125" cy="118" r="4" fill="#303f9f" />
            <circle cx="115" cy="118" r="3.5" fill="#3f51b5" />
            {/* Banana slices */}
            <ellipse cx="95" cy="112" rx="6" ry="4" fill="#f5d76e" stroke="#e8c06a" strokeWidth="0.5" />
            <ellipse cx="107" cy="110" rx="5.5" ry="3.5" fill="#f5d76e" stroke="#e8c06a" strokeWidth="0.5" />
            {/* Honey drizzle */}
            <path d="M85,108 Q100,104 115,108" stroke="#e8a430" strokeWidth="1.5" fill="none" opacity="0.6" />
        </svg>
    ),

    "syrniki": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Plate */}
            <ellipse cx="100" cy="155" rx="85" ry="22" fill="#e8e0d8" />
            <ellipse cx="100" cy="153" rx="70" ry="16" fill="#fff" opacity="0.2" />
            {/* Syrniki stack */}
            <ellipse cx="75" cy="130" rx="22" ry="8" fill="#c49040" />
            <ellipse cx="75" cy="128" rx="20" ry="7" fill="#d4a54a" />
            <ellipse cx="100" cy="128" rx="22" ry="8" fill="#c49040" />
            <ellipse cx="100" cy="126" rx="20" ry="7" fill="#d4a54a" />
            <ellipse cx="125" cy="130" rx="22" ry="8" fill="#c49040" />
            <ellipse cx="125" cy="128" rx="20" ry="7" fill="#d4a54a" />
            {/* Top syrnik */}
            <ellipse cx="100" cy="118" rx="22" ry="8" fill="#c49040" />
            <ellipse cx="100" cy="116" rx="20" ry="7" fill="#d4a54a" />
            {/* Smetana */}
            <ellipse cx="100" cy="112" rx="14" ry="5" fill="#fff" />
            <ellipse cx="100" cy="110" rx="11" ry="3.5" fill="#fafafa" />
            {/* Berry sauce drip */}
            <path d="M95,115 Q88,125 85,135" stroke="#c0392b" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
            <path d="M105,115 Q112,122 115,132" stroke="#c0392b" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
            {/* Mint leaf */}
            <path d="M100,108 Q105,102 100,98 Q95,102 100,108Z" fill="#4caf50" />
        </svg>
    ),

    "rice": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Bowl */}
            <ellipse cx="100" cy="155" rx="65" ry="16" fill="#1565c0" />
            <path d="M40,125 Q40,165 100,165 Q160,165 160,125" fill="#1976d2" />
            <ellipse cx="100" cy="125" rx="60" ry="16" fill="#1e88e5" />
            {/* White pattern on bowl */}
            <path d="M55,140 Q70,148 85,140" stroke="#fff" strokeWidth="1" fill="none" opacity="0.3" />
            <path d="M115,140 Q130,148 145,140" stroke="#fff" strokeWidth="1" fill="none" opacity="0.3" />
            {/* Rice mound */}
            <ellipse cx="100" cy="118" rx="50" ry="14" fill="#fff" />
            <path d="M55,118 Q100,85 145,118" fill="#fafafa" />
            <ellipse cx="100" cy="118" rx="50" ry="14" fill="#f8f8f8" />
            {/* Rice grains texture */}
            <ellipse cx="85" cy="105" rx="3" ry="1.5" fill="#fff" transform="rotate(-20,85,105)" />
            <ellipse cx="95" cy="100" rx="3" ry="1.5" fill="#fff" transform="rotate(10,95,100)" />
            <ellipse cx="108" cy="102" rx="3" ry="1.5" fill="#fff" transform="rotate(-15,108,102)" />
            <ellipse cx="100" cy="108" rx="3" ry="1.5" fill="#fff" transform="rotate(5,100,108)" />
            <ellipse cx="115" cy="108" rx="3" ry="1.5" fill="#fff" transform="rotate(-10,115,108)" />
            {/* Steam */}
            <path d="M85,78 Q80,65 85,52" stroke="#ddd" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M115,78 Q110,65 115,52" stroke="#ddd" strokeWidth="1.5" fill="none" opacity="0.4" />
        </svg>
    ),

    "buckwheat": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Bowl */}
            <ellipse cx="100" cy="155" rx="65" ry="16" fill="#5d4037" />
            <path d="M40,125 Q40,165 100,165 Q160,165 160,125" fill="#6d4c41" />
            <ellipse cx="100" cy="125" rx="60" ry="16" fill="#795548" />
            {/* Buckwheat mound */}
            <ellipse cx="100" cy="118" rx="50" ry="14" fill="#8b6f47" />
            <path d="M55,118 Q100,88 145,118" fill="#9e8060" />
            <ellipse cx="100" cy="118" rx="50" ry="14" fill="#8b6f47" />
            {/* Grain texture */}
            <circle cx="80" cy="110" r="2" fill="#7a5e3a" />
            <circle cx="90" cy="105" r="2" fill="#a08060" />
            <circle cx="100" cy="108" r="2" fill="#7a5e3a" />
            <circle cx="110" cy="104" r="2" fill="#a08060" />
            <circle cx="120" cy="110" r="2" fill="#7a5e3a" />
            <circle cx="95" cy="112" r="1.5" fill="#a08060" />
            <circle cx="105" cy="114" r="1.5" fill="#7a5e3a" />
            {/* Butter pat */}
            <rect x="90" y="98" width="18" height="10" rx="2" fill="#f5d76e" />
            <rect x="92" y="100" width="14" height="6" rx="1.5" fill="#ffe082" />
            {/* Steam */}
            <path d="M90,80 Q85,65 90,50" stroke="#ddd" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M110,80 Q105,65 110,50" stroke="#ddd" strokeWidth="1.5" fill="none" opacity="0.4" />
        </svg>
    ),

    "mashed-potatoes": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Plate */}
            <ellipse cx="100" cy="155" rx="85" ry="22" fill="#e8e0d8" />
            <ellipse cx="100" cy="153" rx="70" ry="16" fill="#fff" opacity="0.2" />
            {/* Mashed potato mound */}
            <ellipse cx="100" cy="125" rx="55" ry="20" fill="#f5e6cc" />
            <path d="M50,125 Q75,80 100,90 Q125,80 150,125" fill="#f0dbb8" />
            <ellipse cx="100" cy="125" rx="55" ry="20" fill="#f5e6cc" opacity="0.5" />
            {/* Swirl texture */}
            <path d="M70,115 Q85,105 100,115 Q115,125 130,115" stroke="#e8d5b0" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M80,108 Q95,100 110,108" stroke="#e8d5b0" strokeWidth="1.5" fill="none" opacity="0.4" />
            {/* Butter melting */}
            <rect x="88" y="95" width="22" height="14" rx="3" fill="#f5d76e" />
            <rect x="90" y="97" width="18" height="10" rx="2" fill="#ffe082" />
            {/* Butter drip */}
            <path d="M95,109 Q93,118 95,125" stroke="#f0c850" strokeWidth="2" fill="none" opacity="0.6" />
            {/* Herbs */}
            <circle cx="75" cy="118" r="1.5" fill="#4caf50" />
            <circle cx="82" cy="112" r="1" fill="#4caf50" />
            <circle cx="120" cy="115" r="1.5" fill="#4caf50" />
        </svg>
    ),

    "fried-potatoes": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Pan */}
            <ellipse cx="100" cy="145" rx="80" ry="30" fill="#555" />
            <ellipse cx="100" cy="142" rx="72" ry="25" fill="#444" />
            {/* Handle */}
            <rect x="162" y="135" width="30" height="10" rx="3" fill="#888" />
            {/* Potato pieces */}
            <rect x="55" y="120" width="25" height="12" rx="3" fill="#e8c06a" transform="rotate(-10,67,126)" />
            <rect x="78" y="115" width="22" height="11" rx="3" fill="#d4a54a" transform="rotate(5,89,120)" />
            <rect x="98" y="118" width="24" height="12" rx="3" fill="#e8c06a" transform="rotate(-5,110,124)" />
            <rect x="120" y="122" width="22" height="11" rx="3" fill="#d4a54a" transform="rotate(10,131,127)" />
            <rect x="65" y="128" width="20" height="10" rx="3" fill="#d4a54a" transform="rotate(8,75,133)" />
            <rect x="88" y="130" width="25" height="11" rx="3" fill="#e8c06a" transform="rotate(-3,100,135)" />
            <rect x="115" y="132" width="20" height="10" rx="3" fill="#d4a54a" transform="rotate(-8,125,137)" />
            {/* Golden crust */}
            <rect x="60" y="122" width="12" height="5" rx="2" fill="#c49040" opacity="0.5" transform="rotate(-10,66,124)" />
            <rect x="105" y="120" width="10" height="4" rx="2" fill="#c49040" opacity="0.5" />
            {/* Herbs */}
            <circle cx="80" cy="125" r="1.5" fill="#4caf50" />
            <circle cx="110" cy="128" r="1.5" fill="#4caf50" />
            <circle cx="130" cy="125" r="1" fill="#4caf50" />
        </svg>
    ),

    "chicken-breast": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Plate */}
            <ellipse cx="100" cy="155" rx="85" ry="22" fill="#e8e0d8" />
            <ellipse cx="100" cy="153" rx="70" ry="16" fill="#fff" opacity="0.2" />
            {/* Chicken breast */}
            <ellipse cx="100" cy="120" rx="45" ry="25" fill="#c4713b" />
            <ellipse cx="100" cy="118" rx="42" ry="22" fill="#d4894d" />
            {/* Grill marks */}
            <line x1="70" y1="110" x2="130" y2="110" stroke="#a85d2f" strokeWidth="2.5" opacity="0.5" />
            <line x1="72" y1="118" x2="128" y2="118" stroke="#a85d2f" strokeWidth="2.5" opacity="0.5" />
            <line x1="75" y1="126" x2="125" y2="126" stroke="#a85d2f" strokeWidth="2.5" opacity="0.5" />
            {/* Slices */}
            <line x1="85" y1="100" x2="82" y2="135" stroke="#c4713b" strokeWidth="1" opacity="0.4" />
            <line x1="100" y1="98" x2="100" y2="138" stroke="#c4713b" strokeWidth="1" opacity="0.4" />
            <line x1="115" y1="100" x2="118" y2="135" stroke="#c4713b" strokeWidth="1" opacity="0.4" />
            {/* Herbs */}
            <path d="M60,130 Q55,122 60,118 Q65,122 60,130Z" fill="#4caf50" />
            <path d="M140,128 Q135,120 140,116 Q145,120 140,128Z" fill="#4caf50" />
            {/* Lemon slice */}
            <circle cx="145" cy="135" r="10" fill="#f5d76e" stroke="#e8c06a" strokeWidth="1" />
            <line x1="145" y1="127" x2="145" y2="143" stroke="#e8c06a" strokeWidth="0.5" />
            <line x1="137" y1="135" x2="153" y2="135" stroke="#e8c06a" strokeWidth="0.5" />
            <line x1="139" y1="129" x2="151" y2="141" stroke="#e8c06a" strokeWidth="0.5" />
            <line x1="139" y1="141" x2="151" y2="129" stroke="#e8c06a" strokeWidth="0.5" />
        </svg>
    ),

    "chicken-soup": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Bowl */}
            <ellipse cx="100" cy="158" rx="70" ry="16" fill="#e0d5cc" />
            <path d="M35,128 Q35,168 100,168 Q165,168 165,128" fill="#f0ebe5" />
            <ellipse cx="100" cy="128" rx="65" ry="18" fill="#f5f0eb" />
            {/* Broth */}
            <ellipse cx="100" cy="124" rx="58" ry="15" fill="#f5c542" opacity="0.4" />
            <ellipse cx="100" cy="122" rx="55" ry="13" fill="#f0a830" opacity="0.2" />
            {/* Noodles */}
            <path d="M60,120 Q75,112 90,120 Q105,128 120,118" stroke="#f0d58c" strokeWidth="2.5" fill="none" />
            <path d="M65,125 Q80,118 95,125 Q110,132 125,122" stroke="#e8c86a" strokeWidth="2" fill="none" />
            <path d="M70,118 Q85,110 100,118" stroke="#f0d58c" strokeWidth="2" fill="none" />
            {/* Chicken pieces */}
            <ellipse cx="80" cy="118" rx="8" ry="5" fill="#d4894d" opacity="0.7" />
            <ellipse cx="120" cy="120" rx="7" ry="4" fill="#d4894d" opacity="0.6" />
            {/* Carrot */}
            <circle cx="90" cy="122" r="3.5" fill="#ff9800" />
            <circle cx="110" cy="116" r="3" fill="#ff9800" />
            {/* Herbs */}
            <circle cx="100" cy="118" r="1.5" fill="#4caf50" />
            <circle cx="75" cy="122" r="1" fill="#4caf50" />
            {/* Steam */}
            <path d="M80,100 Q75,85 80,70" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M100,98 Q95,83 100,68" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M120,100 Q115,85 120,70" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
    ),

    "borsch": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Bowl */}
            <ellipse cx="100" cy="158" rx="70" ry="16" fill="#e0d5cc" />
            <path d="M35,128 Q35,168 100,168 Q165,168 165,128" fill="#f0ebe5" />
            <ellipse cx="100" cy="128" rx="65" ry="18" fill="#f5f0eb" />
            {/* Borsch (red) */}
            <ellipse cx="100" cy="124" rx="58" ry="15" fill="#c0392b" opacity="0.8" />
            <ellipse cx="100" cy="122" rx="55" ry="13" fill="#e74c3c" opacity="0.5" />
            {/* Vegetables floating */}
            <rect x="70" y="118" width="8" height="5" rx="1" fill="#8b4513" opacity="0.5" />
            <rect x="110" y="120" width="7" height="4" rx="1" fill="#8b4513" opacity="0.4" />
            <ellipse cx="95" cy="120" rx="4" ry="2.5" fill="#9c27b0" opacity="0.4" />
            {/* Cabbage */}
            <path d="M82,116 Q86,112 90,116" stroke="#66bb6a" strokeWidth="1.5" fill="none" opacity="0.5" />
            <path d="M115,118 Q119,114 123,118" stroke="#66bb6a" strokeWidth="1.5" fill="none" opacity="0.5" />
            {/* Smetana dollop */}
            <ellipse cx="100" cy="118" rx="12" ry="6" fill="#fff" opacity="0.9" />
            <ellipse cx="100" cy="116" rx="9" ry="4" fill="#fafafa" />
            {/* Herbs on smetana */}
            <circle cx="97" cy="116" r="1" fill="#4caf50" />
            <circle cx="103" cy="117" r="0.8" fill="#4caf50" />
            {/* Steam */}
            <path d="M80,100 Q75,85 80,70" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.4" />
            <path d="M100,98 Q95,83 100,68" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M120,100 Q115,85 120,70" stroke="#ddd" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
    ),

    "caesar-salad": (
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Bowl */}
            <ellipse cx="100" cy="155" rx="75" ry="18" fill="#8d6e63" />
            <path d="M30,125 Q30,165 100,165 Q170,165 170,125" fill="#a1887f" />
            <ellipse cx="100" cy="125" rx="70" ry="18" fill="#bcaaa4" />
            {/* Lettuce base */}
            <ellipse cx="100" cy="120" rx="60" ry="15" fill="#66bb6a" />
            <ellipse cx="90" cy="115" rx="20" ry="8" fill="#81c784" />
            <ellipse cx="115" cy="118" rx="18" ry="7" fill="#4caf50" />
            <ellipse cx="100" cy="112" rx="22" ry="8" fill="#a5d6a7" />
            {/* Chicken slices */}
            <rect x="75" y="108" width="18" height="7" rx="2" fill="#d4894d" transform="rotate(-15,84,111)" />
            <rect x="105" y="106" width="16" height="6" rx="2" fill="#c4713b" transform="rotate(10,113,109)" />
            {/* Croutons */}
            <rect x="85" y="104" width="8" height="8" rx="1" fill="#e8c06a" transform="rotate(15,89,108)" />
            <rect x="115" y="112" width="7" height="7" rx="1" fill="#d4a54a" transform="rotate(-10,118,115)" />
            <rect x="68" y="114" width="7" height="7" rx="1" fill="#e8c06a" transform="rotate(5,71,117)" />
            {/* Parmesan shavings */}
            <ellipse cx="95" cy="106" rx="5" ry="2" fill="#f5f0e0" opacity="0.8" transform="rotate(20,95,106)" />
            <ellipse cx="110" cy="108" rx="4" ry="1.5" fill="#f5f0e0" opacity="0.7" transform="rotate(-15,110,108)" />
            {/* Sauce drizzle */}
            <path d="M70,112 Q85,106 100,112 Q115,118 130,110" stroke="#f5e6cc" strokeWidth="2" fill="none" opacity="0.6" />
        </svg>
    )
};

export default function FoodIllustration({ recipeId, className }) {
    const svg = illustrations[recipeId];

    if (!svg) {
        return (
            <div className={className} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "4rem",
                background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)"
            }}>
                🍽️
            </div>
        );
    }

    return (
        <div className={className} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {svg}
        </div>
    );
}
