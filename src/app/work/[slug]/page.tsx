'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { notFound } from 'next/navigation';

// Project data with full case study content
const PROJECT_DATA: Record<string, {
    title: string;
    subtitle: string;
    role: string;
    tools: string[];
    gallery: string[];
    client: {
        name: string;
        description: string;
    };
    problem: {
        description: string;
        points: string[];
        prose?: string[];
    };
    solution: {
        description: string;
        points: string[];
        prose?: string[];
    };
    impact: string[];
    impactProse?: string[];
    process: {
        title: string;
        description: string;
    }[];
    lessons: string;
    website?: string;
}> = {
    'visualizer-ef': {
        title: 'Slab Visualizer — Turning a Form Into a Decision',
        subtitle: 'Clients weren\'t struggling to fill the form. They were struggling to decide. This is what happened when we designed for that instead.',
        role: 'Product Designer · Front-End Developer · Automation Builder',
        tools: ['JavaScript', 'HTML/CSS', 'Figma', 'n8n', 'Git'],
        gallery: [
            '/SLoKW.webp',
            '/Desktop - 1.webp',
            '/about section.webp',
        ],
        client: {
            name: 'Elegant Fittings Ltd',
            description: 'Elegant Fittings Ltd is a leader in premium stone surfaces for kitchens, bathrooms, and architectural interiors across Africa. They work with brands like DEKTON, Caesarstone, Sensa, Scalea, and Atlas Porcelain — and their clients are people making expensive, permanent decisions about their homes. That context matters. When the stakes are high and the decision is permanent, the experience around the decision needs to be as considered as the product itself.'
        },
        problem: {
            description: '',
            points: [],
            prose: [
                'Before this tool existed, a client who wanted to request a stone sample had a simple process: find the surface they liked, write down the name, open a contact form, type it in, and submit.',
                'It worked. But watching how people actually moved through it — the hesitation, the back and forth, the uncertainty — something became clear. The problem wasn\'t the form.',
                'A small swatch and a product name couldn\'t answer the questions that actually mattered: What will this look like in my space? Does it work with my cabinets? Am I going to regret this?',
                'They weren\'t struggling to submit a form. They were struggling to decide.',
            ]
        },
        solution: {
            description: '',
            points: [],
            prose: [
                'The question shifted from "how do we improve the form?" to "what does someone actually need to feel confident enough to move forward?" That led somewhere different.',
                'Instead of a better form, we built a space where the decision could actually happen. A lightweight, mobile-first visualizer — no downloads, instant access — where a client could browse every surface in a real kitchen or bathroom setting, change the slab, change the cabinet colour, save combinations, and build a moodboard to share with their architect or interior designer.',
                'The sample request was still there. It just moved to the end — after the decision, not before it.',
                'On the backend, an n8n automation workflow handled everything that used to happen manually: a unique ticket for each request, an automatic email to the client with their tracking ID, an internal alert to the sales team, and a follow-up reminder after a set number of days.',
            ]
        },
        impact: [],
        impactProse: [
            'What surprised me most wasn\'t the metrics — it was what opened up.',
            '50% reduction in manual back-and-forth. Sales conversations changed because clients arrived already knowing what they wanted. Interior designers started using the moodboard tool with their own clients. Marketing started pulling visual content from user sessions as a byproduct.',
            'Nobody asked for any of that. It emerged because the experience was designed around the decision, not the data collection.',
        ],
        process: [
            { title: 'Research & UX', description: 'I started by mapping the old process end to end, looking for where people slowed down, hesitated, or dropped off. The drop-off wasn\'t at the form. It was earlier — at the moment they had to visualise something they couldn\'t yet see.' },
            { title: 'Design', description: 'Built in Figma, optimised for mobile first. The interface had to be fast, frictionless, and visually clear — because if it added any friction, it would just become another barrier between the client and their decision.' },
            { title: 'Development', description: 'Built the visualizer using HTML, CSS, and JavaScript. The front end connected to backend triggers that fired the automation layer without the user ever knowing it was there.' },
            { title: 'Automation', description: 'Configured n8n to handle lead capture, ticket creation, client emails, sales team notifications, and follow-up scheduling. The goal was to make the system do the coordination work so the team could focus on the conversation.' },
            { title: 'Testing', description: 'Internal testing with the sales team. They knew the old process better than anyone, so they were the right people to pressure-test whether the new one actually worked.' }
        ],
        lessons: 'I went into this project thinking about UX. I came out of it thinking about decision-making. The form wasn\'t broken. It was just asking people to commit before they were ready. Once I understood that, the design direction was obvious — but I wouldn\'t have seen it if I\'d started by trying to improve the form. That\'s the thing I keep coming back to: the interesting design work is rarely in the thing in front of you. It\'s in the thing underneath it.',
        website: 'https://visualize-f1c35.web.app/'
    },
    'bensonic': {
        title: 'Bensonic Tech — Making Everything Findable',
        subtitle: 'A tech retailer with a broad catalogue, expert services, and no online home. Built the platform that made all of it discoverable.',
        role: 'Web Designer · Front-End Developer',
        tools: ['Figma', 'HTML/CSS', 'JavaScript', 'E-Commerce'],
        gallery: [
            '/bsonic-gif.webm',
            '/Bensonic-prev.webp',
            '/bensonic-prev1.webp',
        ],
        client: {
            name: 'Bensonic Tech',
            description: 'Bensonic Tech sells a wide range of products and services across Kenya — laptops, CCTV systems, networking equipment, POS systems, installation, and repair. Their clients are businesses and individuals who need to be able to find what they\'re looking for, trust what they see, and make contact without friction.'
        },
        problem: {
            description: '',
            points: [],
            prose: [
                'Bensonic Tech sells a wide range of products and services — laptops, CCTV systems, networking equipment, POS systems, installation, repair. The problem was that none of it was easy to find online.',
                'Without a centralised platform, potential customers either didn\'t know the full scope of what Bensonic offered, or couldn\'t access it without picking up a phone. In a market where trust is built before the first conversation, that was costing them.',
            ]
        },
        solution: {
            description: '',
            points: [],
            prose: [
                'Built a full e-commerce platform organised around how customers actually think — not around how the business was structured internally.',
                'Product categories for laptops, gaming, POS, CCTV, and accessories. Dedicated service pages for installation and repair. Trust signals built in from the start — testimonials, service transparency, and clear contact paths. Mobile-responsive throughout, because most of their customers were coming from a phone.',
            ]
        },
        impact: [],
        impactProse: [
            'Bensonic now has a professional online presence that reflects the breadth of what they actually do. The full product catalogue is discoverable and shoppable. Services that were previously invisible to online visitors are now clearly communicated — which means the sales conversation starts further along.',
        ],
        process: [
            { title: 'Discovery', description: 'Mapped out the full range of products and services. The goal was to understand the business as a customer would encounter it — not as the team described it internally.' },
            { title: 'Information Architecture', description: 'Getting the navigation right before touching the visual design. When you sell a wide range of products and services, the IA is the product.' },
            { title: 'UI Design', description: 'Designed a clean, professional interface in Figma. Tech-forward without being cold — because the business also does personal service work like repair and installation.' },
            { title: 'Development', description: 'Built the e-commerce platform with product catalogue, service pages, and mobile-responsive layouts.' },
            { title: 'Launch', description: 'Deployed and refined based on real user behaviour.' }
        ],
        lessons: 'When you sell a wide range of products and services, the navigation is the product. A confused user doesn\'t ask for help — they leave. Getting the information architecture right before touching the visual design was what made everything else work on this project.',
        website: 'https://bensonic.co.ke/'
    },
    'linaya': {
        title: 'Linaya — A Digital Presence Worth the Brand',
        subtitle: 'The products were considered and premium. The website wasn\'t. Rebuilt the digital experience to match what the brand had actually earned.',
        role: 'UI/UX Designer · Front-End Developer',
        tools: ['Figma', 'React', 'CSS3', 'JavaScript'],
        gallery: [
            '/LINAYA-gif.webm',
            '/Linaya-prev.webp',
        ],
        client: {
            name: 'Linaya',
            description: 'Linaya is a lifestyle brand with real design sensibility — the kind that shows in the products themselves. They needed a digital presence that matched that sensibility, not one that undermined it.'
        },
        problem: {
            description: '',
            points: [],
            prose: [
                'Linaya is a lifestyle brand with real design sensibility. Their digital presence didn\'t reflect it.',
                'The site looked dated against what they were selling. The mobile experience lost people before they found what they came for. And the navigation made product discovery feel like work — which, for a brand built on ease and elegance, was the wrong feeling entirely.',
            ]
        },
        solution: {
            description: '',
            points: [],
            prose: [
                'Redesigned the full digital experience with one question guiding every decision: does this feel like the brand?',
                'Clean layout, considered spacing, a mobile-first build that didn\'t treat small screens as an afterthought. Streamlined the navigation so product discovery felt effortless rather than effortful. Added subtle motion to give the experience a sense of quality without making it feel heavy.',
            ]
        },
        impact: [],
        impactProse: [
            'The site now reflects the brand. Mobile engagement improved. Bounce rate dropped as navigation became more intuitive. More importantly — the first impression now matches the product.',
        ],
        process: [
            { title: 'Brand Audit', description: 'Studied what Linaya stood for and where the existing site was letting that down. The gap between the brand\'s values and its digital presence was the design brief.' },
            { title: 'Wireframing', description: 'Mapped the user flows before touching visual design. Product discovery was the priority.' },
            { title: 'Visual Design', description: 'Brought the brand\'s aesthetic into the interface — clean, warm, considered. Every spacing decision was a brand decision.' },
            { title: 'Development', description: 'Built mobile-first, with subtle motion that reinforces quality rather than decorating it.' },
            { title: 'Refinement', description: 'Iterated on navigation and product layouts based on how real users moved through the site.' }
        ],
        lessons: 'Premium brands don\'t get a second chance at a first impression. The gap between how a brand presents itself visually and how its digital experience feels is something users notice immediately — even if they can\'t name what\'s wrong. Closing that gap is most of the job.',
        website: 'https://linaya.co.ke/'
    },
    'jgateritherapy': {
        title: 'Jgateri Therapy — Professional Web Presence',
        subtitle: 'A professional and calming web presence designed to build trust, communicate services clearly, and make it easy for clients to connect.',
        role: 'Web Designer · Developer',
        tools: ['Figma', 'HTML/CSS', 'JavaScript', 'Responsive Design'],
        gallery: [
            '/jgateritherapygif.webm',
            '/Jgateritherapy.webp',
        ],
        client: {
            name: 'Jgateri Therapy',
            description: 'Jgateri Therapy is a professional therapy practice focused on mental health and wellness. They needed a digital presence that conveyed trust, professionalism, and warmth.'
        },
        problem: {
            description: 'The practice lacked an effective online presence to connect with potential clients:',
            points: [
                'No professional website to establish credibility',
                'Difficulty communicating available services',
                'Clients had no easy way to book or inquire online'
            ]
        },
        solution: {
            description: 'I designed and built a calming, professional website that:',
            points: [
                'Established trust through a warm, professional visual design',
                'Clearly communicated all therapy services offered',
                'Made it easy for potential clients to reach out and book sessions',
                'Ensured accessibility and mobile responsiveness'
            ]
        },
        impact: [
            'Established a professional online presence from scratch',
            'Made services easily discoverable for potential clients',
            'Simplified the inquiry and booking process',
            'Built trust through thoughtful, calming design'
        ],
        process: [
            { title: 'Consultation', description: 'Understood the therapist\'s values and target audience.' },
            { title: 'Content Strategy', description: 'Structured service information for clarity and trust.' },
            { title: 'Design', description: 'Created a calming, professional visual design.' },
            { title: 'Development', description: 'Built a fast, accessible, responsive website.' },
            { title: 'Testing', description: 'Ensured cross-browser compatibility and mobile performance.' }
        ],
        lessons: 'Designing for healthcare requires a careful balance of professionalism and warmth. The visual tone directly impacts whether a potential client feels safe reaching out.'
    },
    'jubu': {
        title: 'J A B U — Architecture Visualization',
        subtitle: 'An architecture visualization and interior design portfolio — featuring 3D renders, spatial design, and immersive visual storytelling for modern living spaces.',
        role: 'Visual Designer · 3D Artist',
        tools: ['Figma', 'Blender', '3D Rendering', 'Photoshop'],
        gallery: [
            '/juba-gif.webm',
            '/jubu-prev.webp',
        ],
        client: {
            name: 'JABU',
            description: 'JABU is an architecture and interior design visualization project exploring how 3D rendering and spatial design can transform how people experience and interact with living spaces before they are built.'
        },
        problem: {
            description: 'Architecture and interior design projects often struggle to communicate spatial vision to clients:',
            points: [
                'Static 2D floor plans fail to convey the feel of a space',
                'Clients struggle to visualize material choices and lighting in context',
                'The gap between design intent and client understanding leads to costly revisions'
            ]
        },
        solution: {
            description: 'I created an immersive visualization portfolio that brings architectural concepts to life:',
            points: [
                'Produced photorealistic 3D renders of interior spaces',
                'Explored material, lighting, and spatial compositions for modern interiors',
                'Created a visual portfolio showcasing architecture and design expertise',
                'Built immersive visual narratives that communicate spatial intent'
            ]
        },
        impact: [
            'Created a compelling architecture portfolio with photorealistic renders',
            'Demonstrated expertise in spatial design and 3D visualization',
            'Bridged the gap between architectural concepts and client understanding',
            'Strong portfolio piece showcasing rendering and visual design skills'
        ],
        process: [
            { title: 'Spatial Research', description: 'Studied modern interior design trends and architectural references.' },
            { title: '3D Modeling', description: 'Built detailed 3D models of interior spaces and architectural elements.' },
            { title: 'Material & Lighting', description: 'Applied realistic materials, textures, and lighting setups.' },
            { title: 'Rendering', description: 'Produced high-quality photorealistic renders.' },
            { title: 'Portfolio Design', description: 'Curated and presented the renders in a cohesive visual narrative.' }
        ],
        lessons: 'Architecture visualization is where design meets storytelling. A great render doesn\'t just show a space — it makes you feel what it would be like to live in it.',
        website: 'https://www.behance.net/gallery/225917703/J-A-B-U'
    },
    'kwetu': {
        title: 'Kwetu Nairobi — Curio Collection by Hilton',
        subtitle: 'A design project for Kwetu Nairobi — part of the Curio Collection by Hilton — capturing the essence of Nairobi\'s culture and hospitality through refined visual design.',
        role: 'Visual Designer · Brand Designer',
        tools: ['Figma', 'Adobe Illustrator', 'Photoshop'],
        gallery: [
            '/kwetu-gif.webm',
            '/kwetu-prev.webp',
        ],
        client: {
            name: 'Kwetu Nairobi, Curio Collection by Hilton',
            description: 'Kwetu Nairobi is part of the prestigious Curio Collection by Hilton — a boutique hotel experience that celebrates Nairobi\'s rich culture, art, and hospitality. The brand needed a visual identity that captured the intersection of luxury hospitality and local Kenyan character.'
        },
        problem: {
            description: 'The boutique hotel needed design work that captured its unique positioning:',
            points: [
                'Balancing Hilton\'s global luxury standards with authentic Nairobi character',
                'Creating visual assets that resonate with both international and local guests',
                'Communicating the curated, boutique nature of the Curio Collection brand'
            ]
        },
        solution: {
            description: 'I created a design project that bridges global hospitality with local culture:',
            points: [
                'Developed visual designs that celebrate Nairobi\'s culture within a luxury context',
                'Created design assets reflecting the boutique, curated hotel experience',
                'Balanced international design standards with authentic Kenyan aesthetics',
                'Designed for multiple touchpoints across the hospitality experience'
            ]
        },
        impact: [
            'Created design work that captures the essence of Nairobi\'s hospitality scene',
            'Successfully bridged global luxury branding with local cultural identity',
            'Delivered visual assets aligned with the Curio Collection brand standards',
            'Strong portfolio piece in hospitality and luxury brand design'
        ],
        process: [
            { title: 'Brand Research', description: 'Studied the Curio Collection brand guidelines and Nairobi\'s cultural identity.' },
            { title: 'Concept Development', description: 'Explored visual directions that merge luxury with local character.' },
            { title: 'Visual Design', description: 'Created high-fidelity designs across key touchpoints.' },
            { title: 'Refinement', description: 'Iterated based on brand alignment feedback.' },
            { title: 'Delivery', description: 'Packaged final assets and design documentation.' }
        ],
        lessons: 'Hospitality design is about creating a sense of place. When designing for a hotel that celebrates Nairobi, every visual choice should make guests feel they\'ve arrived somewhere special.',
        website: 'https://www.behance.net/gallery/203986385/Kwetu-Nairobi-Curio-Collection-by-Hilton'
    },
    'made-in-the-ke': {
        title: 'Made In THE 🇰🇪 — Celebrating Kenyan Craft',
        subtitle: 'A concept celebrating Kenyan-made artisan products — handmade fashion, earrings, and artwork — through photoshoot-driven storytelling and illustration.',
        role: 'Art Director · Illustrator · Photographer',
        tools: ['Adobe Illustrator', 'Photoshop', 'Photography'],
        gallery: [
            '/made in the ke-gif.webm',
            '/made in the ke-prev.webp',
        ],
        client: {
            name: 'Concept Brief',
            description: 'A self-initiated concept project celebrating Kenyan artisans and their handmade creations — from fashion and earrings to artwork — through visual storytelling, photoshoots, and illustration.'
        },
        problem: {
            description: 'Kenyan artisan products are incredibly rich in craft but often lack visibility:',
            points: [
                'Handmade fashion, jewelry, and artwork lack professional visual representation',
                'Artisan stories go untold in a market dominated by mass-produced goods',
                'Cultural identity and craftsmanship deserve a premium visual platform'
            ]
        },
        solution: {
            description: 'I created a visual concept that celebrates Kenyan craftsmanship:',
            points: [
                'Directed and produced photoshoots showcasing handmade earrings, fashion, and artwork',
                'Created custom illustrations that complement the artisan aesthetic',
                'Designed a visual identity rooted in Kenyan culture and pride',
                'Developed a storytelling-driven presentation highlighting the makers behind the products'
            ]
        },
        impact: [
            'Elevated the visual representation of Kenyan handmade products',
            'Demonstrated how art direction can amplify artisan stories',
            'Created a culturally rich visual portfolio celebrating local craft',
            'Explored the intersection of photography, illustration, and brand design'
        ],
        process: [
            { title: 'Cultural Research', description: 'Explored Kenyan fashion, jewelry-making traditions, and artisan culture.' },
            { title: 'Art Direction', description: 'Planned photoshoots and illustration styles for the concept.' },
            { title: 'Photography', description: 'Directed and produced product and lifestyle photoshoots.' },
            { title: 'Illustration', description: 'Created custom illustrations that complement the handmade aesthetic.' },
            { title: 'Presentation', description: 'Compiled the visual story into a cohesive portfolio piece.' }
        ],
        lessons: 'The most powerful design work amplifies the stories that already exist. Kenyan artisans don\'t need a new narrative — they need their existing craft to be seen in the best possible light.',
        website: 'https://www.behance.net/gallery/139943575/Made-In-THE-'
    },
    'yum-honey': {
        title: 'Yum Honey — A Brand That Earns the Shelf',
        subtitle: 'Artisan food brands live and die by the shelf moment. Built a brand identity that makes people stop, pick it up, and feel something before they read a word.',
        role: 'Brand Designer · Visual Storyteller',
        tools: ['Figma', 'Adobe Illustrator', 'Photoshop'],
        gallery: [
            '/Yum Honey-gif.webm',
            '/Yum Honey-prev.webp',
        ],
        client: {
            name: 'Concept Brief',
            description: 'A self-initiated brand concept exploring what it takes to build a premium artisan honey brand from the ground up — from positioning through to packaging and brand collateral.'
        },
        problem: {
            description: '',
            points: [],
            prose: [
                'Artisan honey is a crowded market. Good product alone doesn\'t win — because on a shelf full of glass jars and handwritten labels, everything starts to look the same.',
                'Yum Honey had a genuinely good product and no visual story to match it. The opportunity was to build a brand that felt warm, premium, and honest — without feeling generic.',
            ]
        },
        solution: {
            description: '',
            points: [],
            prose: [
                'Built the brand identity from scratch — logo, colour palette, typography, and packaging — around a single idea: honey as something made slowly, with care, in a specific place.',
                'The visual direction drew from nature without leaning on clichés. Warm tones, organic shapes, and a typographic system that felt hand-considered rather than mass-produced. The packaging was designed to earn attention on the shelf and hold it long enough to tell the story.',
            ]
        },
        impact: [],
        impactProse: [
            'A self-initiated concept that became a useful proof of what happens when brand strategy and visual craft work from the same brief. The identity demonstrates end-to-end brand design — from positioning through to packaging and brand collateral.',
        ],
        process: [
            { title: 'Mood Research', description: 'Pulled references from premium food, nature photography, and independent brands that do warmth without sentimentality.' },
            { title: 'Brand Identity', description: 'Designed the logo, colour system, and typography as a unified system rather than separate decisions.' },
            { title: 'Packaging', description: 'Designed labels and packaging mockups optimised for the shelf moment — the three seconds where the product either earns attention or doesn\'t.' },
            { title: 'Brand Collateral', description: 'Extended the identity to give a sense of how the brand would live across different touchpoints.' },
        ],
        lessons: 'Packaging design is the most honest form of storytelling I\'ve worked in. You can\'t write your way out of a weak visual. The brand either earns the moment or it doesn\'t, and you find out the second someone walks past it on a shelf.',
        website: 'https://www.behance.net/gallery/143861559/Yum-Honey'
    },
    'laketi': {
        title: 'LAKETI by RED — Bold Brand & App Concept',
        subtitle: 'A bold brand identity, landing page, and app concept exploring vibrant UI/UX design with culturally rich visual language.',
        role: 'Brand Designer · UI/UX Designer',
        tools: ['Figma', 'Adobe Illustrator'],
        gallery: [
            '/Laketi.webp',
        ],
        client: {
            name: 'Concept Brief',
            description: 'LAKETI by RED is a concept exploration spanning brand identity, landing page, and mobile app design — pushing boundaries with vibrant UI/UX and culturally authentic aesthetics.'
        },
        problem: {
            description: 'Fashion and lifestyle brands targeting young African audiences need identities that resonate:',
            points: [
                'Many fashion brands use Western-centric design templates',
                'Cultural richness is often diluted in pursuit of "global" appeal',
                'Need for identities that feel both local and internationally competitive'
            ]
        },
        solution: {
            description: 'I created a bold, unapologetic brand identity with a complete digital presence:',
            points: [
                'Designed a vibrant brand identity system rooted in cultural aesthetics',
                'Created a responsive landing page concept with modern UI patterns',
                'Designed a companion mobile app interface',
                'Balanced cultural authenticity with global design standards'
            ]
        },
        impact: [
            'Pushed creative boundaries across brand, web, and app design',
            'Demonstrated culturally informed design thinking',
            'Created a cohesive multi-platform design concept',
            'Strong portfolio piece spanning identity, web, and mobile'
        ],
        process: [
            { title: 'Inspiration', description: 'Drew from African textile patterns, street style, and contemporary art.' },
            { title: 'Brand Identity', description: 'Designed logo, typography, and color system.' },
            { title: 'Landing Page', description: 'Created a dynamic web concept with bold layouts.' },
            { title: 'App Design', description: 'Extended the brand into a mobile app interface.' },
            { title: 'Presentation', description: 'Compiled across all platforms for a cohesive case study.' }
        ],
        lessons: 'Bold design requires bold conviction. When you commit fully to a creative direction, the result speaks with clarity and confidence.',
        website: 'https://www.behance.net/gallery/157162697/L-A-K-E-T-I-by-RED'
    },
    'magol-car-hire': {
        title: 'MAGOL Executive Car Hire — Landing Page & UI/UX',
        subtitle: 'A sleek landing page and UI/UX concept for MAGOL Executive Car Hire — focused on trust, clarity, and seamless booking experiences.',
        role: 'UI/UX Designer · Web Designer',
        tools: ['Figma'],
        gallery: [
            '/Magol Car Hire-gif.webm',
            '/Magol Car Hire-prev.webp',
        ],
        client: {
            name: 'Concept Brief',
            description: 'A UI/UX and landing page concept for MAGOL Executive Car Hire — exploring how premium web design and user experience can elevate trust in executive transportation services.'
        },
        problem: {
            description: 'Executive car hire services need digital experiences that match their premium positioning:',
            points: [
                'Complex booking flows that frustrate busy professionals',
                'Designs that fail to build trust for high-value transportation services',
                'Poor user experiences that don\'t reflect executive service quality'
            ]
        },
        solution: {
            description: 'I designed a clean, professional landing page and UI/UX concept:',
            points: [
                'Created a sleek landing page that immediately conveys professionalism',
                'Designed a streamlined booking user experience reducing friction',
                'Built visual trust signals appropriate for executive services',
                'Focused on clean UI design with clear information hierarchy'
            ]
        },
        impact: [
            'Demonstrated how UI/UX design builds trust in service industries',
            'Created an intuitive booking flow concept for executive transportation',
            'Explored premium web design patterns for professional services',
            'Portfolio piece showcasing landing page and UX design skills'
        ],
        process: [
            { title: 'Competitive Analysis', description: 'Studied leading car hire and executive service platforms.' },
            { title: 'User Flows', description: 'Mapped the ideal booking journey for busy professionals.' },
            { title: 'UI Design', description: 'Designed the landing page and key screens in Figma.' },
            { title: 'UX Refinement', description: 'Iterated on interaction patterns for clarity and ease.' },
            { title: 'Presentation', description: 'Compiled the concept into a professional case study.' }
        ],
        lessons: 'Service design is trust design. When people are spending money on an executive service, every visual detail either builds or erodes confidence.',
        website: 'https://www.behance.net/gallery/162581607/MAGOL-Executive-Car-Hire'
    },
    'nft-project': {
        title: 'BR2078 — NFT Marketplace Concept',
        subtitle: 'A futuristic NFT marketplace concept exploring blockchain, cryptocurrency, and digital art through immersive dark-mode UI/UX on Ethereum.',
        role: 'UI/UX Designer · Visual Designer',
        tools: ['Figma', 'After Effects', 'Blender'],
        gallery: [
            '/nftproject-gif1.webm',
            '/nftproject-gif2.webm',
            '/nftproject-gif3.webm',
        ],
        client: {
            name: 'Concept Brief',
            description: 'BR2078 is a self-initiated concept exploring the visual design language of Web3 and NFT marketplaces on Ethereum — pushing the boundaries of dark-mode UI, blockchain interfaces, and digital art presentation.'
        },
        problem: {
            description: 'Most NFT platforms have derivative designs that fail to match the innovation of blockchain technology:',
            points: [
                'Generic marketplace UIs that don\'t showcase digital art properly',
                'Poor user experiences that confuse newcomers to cryptocurrency and Web3',
                'Lack of immersive, gallery-like browsing experiences for NFT collections'
            ]
        },
        solution: {
            description: 'I conceptualized BR2078 — an immersive NFT marketplace experience:',
            points: [
                'Designed a dark, cinematic UI that lets digital art and collectibles take center stage',
                'Created gallery-like browsing experiences for Ethereum-based NFT collections',
                'Explored futuristic interaction patterns for blockchain navigation',
                'Built a cohesive visual system spanning landing page and marketplace views'
            ]
        },
        impact: [
            'Pushed creative boundaries in Web3 and blockchain interface design',
            'Created an immersive digital art browsing and discovery experience',
            'Explored futuristic UI patterns for cryptocurrency platforms',
            'Strong portfolio piece for emerging technology and NFT design'
        ],
        process: [
            { title: 'Web3 Research', description: 'Studied existing NFT platforms on Ethereum and identified design gaps.' },
            { title: 'Visual Direction', description: 'Defined a futuristic, dark-mode aesthetic for the BR2078 brand.' },
            { title: 'UI Design', description: 'Designed marketplace screens, collection views, and landing page.' },
            { title: 'Animation', description: 'Created motion concepts for interactive blockchain elements.' },
            { title: 'Presentation', description: 'Compiled the concept into a cohesive case study.' }
        ],
        lessons: 'Designing for emerging technology means designing for the future. The best Web3 interfaces don\'t just display content — they create experiences that match the innovation of the technology itself.',
        website: 'https://www.behance.net/gallery/145796175/BR2078'
    },
    'bi-ci-or': {
        title: 'Bi-Ci-Or — New Drink in Town',
        subtitle: 'A 3D product design and landing page concept for a soft drink brand — featuring bold mockups, product visualization, and vibrant website design.',
        role: 'Product Designer · 3D Artist · UI/UX Designer',
        tools: ['Figma', 'Blender', 'Photoshop'],
        gallery: [
            '/Ba-Ci-Or-gif.webm',
            '/Ba-Cr-Or-prev.webp',
            '/Bi-Ci-Or-prev.webm',
        ],
        client: {
            name: 'Concept Brief',
            description: 'New Drink in Town — a concept exploring 3D product design, packaging mockups, and website design for a new soft drink brand entering the market with bold, vibrant energy.'
        },
        problem: {
            description: 'New beverage brands need to make a strong visual first impression:',
            points: [
                'The soft drink market is saturated with established brands',
                'New products need standout packaging and 3D product visualization',
                'A compelling web presence is essential for brand launch and awareness'
            ]
        },
        solution: {
            description: 'I created a comprehensive product design and web concept:',
            points: [
                'Produced 3D product mockups and packaging visualization for the soft drink',
                'Designed a vibrant, energetic website and landing page concept',
                'Created bold product photography compositions and mockup designs',
                'Developed a cohesive visual identity across product and digital touchpoints'
            ]
        },
        impact: [
            'Created a complete product launch visual concept from packaging to web',
            'Demonstrated expertise in 3D product visualization and mockup design',
            'Explored how product design and web design can work together for launch',
            'Strong portfolio piece spanning product, packaging, and UI/UX design'
        ],
        process: [
            { title: 'Product Research', description: 'Studied soft drink market trends and competitive packaging.' },
            { title: '3D Modeling', description: 'Built detailed 3D models of the drink bottle and packaging.' },
            { title: 'Product Mockups', description: 'Rendered photorealistic product shots and compositions.' },
            { title: 'Web Design', description: 'Designed the landing page and website concept.' },
            { title: 'Brand Cohesion', description: 'Ensured visual consistency across product and digital assets.' }
        ],
        lessons: 'Product design and web design are two sides of the same story. When launching a new product, the packaging and the website need to speak with exactly the same energy.',
        website: 'https://www.behance.net/gallery/142303909/New-Drink-in-Town'
    }
};

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = React.use(params);
    const project = PROJECT_DATA[slug];

    if (!project) {
        notFound();
    }

    return (
        <main className="pb-32 min-h-screen">
            {/* Back Link */}
            <div className="max-w-6xl mx-auto px-8 md:px-24 pt-32">
                <Link href="/work" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-mono text-[10px] uppercase tracking-widest mb-12 group">
                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Work
                </Link>
            </div>

            <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Centered Hero Header */}
                <header className="mb-16">
                    <div className="max-w-3xl mx-auto text-center px-8 md:px-24 mb-12">
                        {/* Role Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                            <span className="text-xs text-muted-foreground">{project.role}</span>
                        </motion.div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-6">{project.title}</h1>

                        {/* Subtitle */}
                        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-8">
                            {project.subtitle}
                        </p>

                        {/* CTAs */}
                        <div className="flex items-center justify-center gap-3 mb-10">
                            {project.website && (
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium bg-foreground text-background rounded-full px-5 py-2.5 hover:opacity-90 transition-opacity"
                                >
                                    {project.website.includes('behance.net') ? 'View on Behance' : 'View Live Website'}
                                </a>
                            )}
                            <Link
                                href="#case-study"
                                className="inline-flex items-center gap-2 text-sm font-medium border border-border rounded-full px-5 py-2.5 hover:bg-muted transition-colors"
                            >
                                Read Case Study <ArrowUpRight size={14} />
                            </Link>
                        </div>

                        {/* Tools */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {project.tools.map(tool => (
                                <span key={tool} className="text-xs border border-border rounded-full px-3 py-1 text-muted-foreground">{tool}</span>
                            ))}
                        </div>
                    </div>

                    {/* Image Gallery Grid — Responsive to asset types */}
                    {project.gallery.length > 0 && (
                        <div className="max-w-6xl mx-auto px-4 md:px-8">
                            <div className="flex flex-col md:flex-row gap-4 md:gap-6 min-h-[300px] md:min-h-[450px]">
                                {project.gallery.map((asset, index) => {
                                    const isVideo = asset.endsWith('.webm');
                                    return (
                                        <motion.div
                                            key={asset}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            className={`
                                                relative rounded-2xl overflow-hidden bg-muted/20 border border-border group
                                                ${isVideo ? 'flex-[2]' : 'flex-[1]'}
                                                min-h-[300px] flex items-center justify-center
                                            `}
                                        >
                                            {isVideo ? (
                                                <video
                                                    src={asset}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <img
                                                    src={asset}
                                                    alt={`${project.title} preview ${index + 1}`}
                                                    className="w-full h-full object-contain md:object-cover group-hover:object-contain transition-all duration-500"
                                                />
                                            )}
                                            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 pointer-events-none" />
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </header>

                {/* Case Study Content */}
                <div id="case-study" className="max-w-5xl mx-auto px-8 md:px-24">

                    {/* Problem Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="md:col-span-1">
                            <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">01 — Problem</h2>
                        </div>
                        <div className="md:col-span-2">
                            {project.problem.prose ? (
                                <div className="space-y-4">
                                    {project.problem.prose.map((p, i) => (
                                        <p key={i} className="leading-relaxed text-muted-foreground">{p}</p>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <p className="text-lg leading-relaxed mb-4">{project.problem.description}</p>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {project.problem.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-foreground">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </section>

                    {/* Solution Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="md:col-span-1">
                            <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">02 — Solution</h2>
                        </div>
                        <div className="md:col-span-2">
                            {project.solution.prose ? (
                                <div className="space-y-4">
                                    {project.solution.prose.map((p, i) => (
                                        <p key={i} className="leading-relaxed text-muted-foreground">{p}</p>
                                    ))}
                                </div>
                            ) : (
                                <>
                                    <p className="text-lg leading-relaxed mb-4">{project.solution.description}</p>
                                    <ul className="space-y-2 text-muted-foreground">
                                        {project.solution.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-foreground">•</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </section>

                    {/* Impact Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="md:col-span-1">
                            <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">03 — Impact</h2>
                        </div>
                        <div className="md:col-span-2">
                            {project.impactProse ? (
                                <div className="space-y-4">
                                    {project.impactProse.map((p, i) => (
                                        <p key={i} className="leading-relaxed text-muted-foreground">{p}</p>
                                    ))}
                                </div>
                            ) : (
                                <ul className="space-y-3">
                                    {project.impact.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-foreground">
                                            <span className="text-green-600 dark:text-green-400">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </section>

                    {/* Process Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="md:col-span-1">
                            <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">04 — My Process</h2>
                        </div>
                        <div className="md:col-span-2 space-y-4">
                            {project.process.map((step, i) => (
                                <div key={i} className="border-l-2 border-border pl-4">
                                    <h3 className="font-medium text-sm mb-1">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* About Client Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="md:col-span-1">
                            <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">05 — About {project.client.name}</h2>
                        </div>
                        <div className="md:col-span-2">
                            <p className="text-muted-foreground leading-relaxed">{project.client.description}</p>
                        </div>
                    </section>

                    {/* What I Learned Section */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="md:col-span-1">
                            <h2 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">06 — What I Learned</h2>
                        </div>
                        <div className="md:col-span-2">
                            <p className="text-muted-foreground leading-relaxed italic">{project.lessons}</p>
                        </div>
                    </section>

                </div>
            </motion.article>
        </main>
    );
}
