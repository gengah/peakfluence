"use client";

import { FC, ReactNode, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const navItems = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  const path = usePathname();
  const isActive = path === href;
  return (
    <Link
      href={href}
      className={`relative inline-block px-3 py-2 font-medium transition
        ${isActive ? 'text-blue-800' : 'text-blue-600 hover:text-blue-800'}
        focus:outline-none focus:ring-2 focus:ring-blue-300 rounded
      `}
    >
      {children}
      {isActive && (
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-800 rounded-full" />
      )}
    </Link>
  );
};

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '100%' },
};

const Hero: FC = () => (
  <section
    id="home"
    className="relative w-full min-h-screen pt-24 bg-gradient-to-br from-amber-500 to-blue-700 text-white flex flex-col overflow-hidden"
  >
    <div className="absolute inset-0 mix-blend-overlay bg-[url('/hero-bg.jpg')] bg-center bg-cover opacity-30" />
    {/* Navigation */}
  <nav className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-300 shadow-md">
  <div className="container mx-auto flex items-center justify-between py-4 md:py-6 px-4 md:px-0">
    <Image
      src="/logo.jpeg"
      alt="Logo"
      width={128}
      height={40}
      className="h-10 md:h-12 w-32 md:w-40"
    />
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink href={item.href}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>

    <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 md:px-0">
      <motion.h2
        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        Ignite Your Brand. Conquer New Peaks.
      </motion.h2>
      <motion.p
        className="max-w-xl text-lg md:text-2xl mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: 'easeOut' }}
      >
        At PeakFluence, we don’t just market; we spark revolutions. Let's turn your story into
        unstoppable influence.
      </motion.p>
      <motion.h2
        className="text-5xl md:text-7xl font-bold leading-tight mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Let's Elevate Your Brand
      </motion.h2>
      <motion.div
        className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <Link href="#services">
          <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
            Our Services
          </button>
        </Link>
        <Link href="#about">
          <button className="px-8 py-4 border-2 border-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition">
            Learn More
          </button>
        </Link>
      </motion.div>
    </div>

    {/* Scroll Down Indicator */}
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8v16M24 16l-8 8-8-8" />
      </svg>
    </motion.div>
  </section>
);

const Page: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Define the pricing plans array
  const plans = [
    {
      name: "Basic Plan",
      price: "Ksh 15,000",
      features: [
        "Social Media Management (2 platforms: Facebook & Instagram)",
        "10 custom posters per month",
        "2 targeted ad campaigns per month",
        "Monthly performance report & insights",
      ],
    },
    {
      name: "Standard Plan",
      price: "Ksh 30,000",
      features: [
        "Social Media Management (4 platforms: Facebook, Instagram, LinkedIn, Twitter)",
        "20 custom posters per month",
        "4 targeted ad campaigns per month",
        "Basic SEO optimization (keyword research & blog recommendations)",
        "Monthly performance report & strategy consultation",
      ],
    },
    {
      name: "Premium Plan",
      price: "Ksh 60,000",
      features: [
        "Social Media Management (all major platforms: Facebook, Instagram, LinkedIn, Twitter, TikTok)",
        "30 custom posters per month",
        "6 highly optimized ad campaigns per month",
        "Full SEO optimization & keyword strategy",
        "Website design updates & maintenance",
        "PPC Advertising (Google Ads & Social Media Ads)",
        "Bi-weekly performance report & in-depth consultation",
      ],
    },
    {
      name: "Business Starter Package",
      price: "Ksh 25,000",
      features: [
        "Creation and setup of social media pages (Facebook, Instagram, LinkedIn, Twitter, TikTok)",
        "Custom branding (Profile & Cover Images, Bio Optimization)",
        "10 introductory posts to establish brand presence",
        "1-month social media strategy & consultation",
      ],
    },
    {
      name: "New Business Digital Launch",
      price: "Ksh 45,000",
      features: [
        "Full social media page setup and branding",
        "20 custom-designed posts for launch",
        "3 ad campaigns to boost initial engagement",
        "SEO-friendly website development (basic landing page)",
        "1-month content plan & performance tracking",
      ],
    },
    {
      name: "Business Portfolio Creation",
      price: "Ksh 35,000",
      features: [
        "Professionally designed company portfolio (digital & printable format)",
        "5-page company profile including services, mission, vision, and key strengths",
        "Content writing & design tailored to industry standards",
        "Consultation on brand positioning and messaging",
      ],
    },
    {
      name: "Corporate Digital Domination",
      price: "Starting at Ksh 100,000",
      features: [
        "Full-scale Social Media Management (all platforms)",
        "Bulk SMS and Email Marketing Campaigns",
        "40+ custom posters and premium ad creatives",
        "Influencer Marketing strategy & execution",
        "Advanced SEO strategy and competitor analysis",
        "PPC Advertising (Google Ads & Social Media Ads)",
        "Website Optimization, E-commerce integration & Advanced Analytics",
        "Experiential Marketing Services (event-based brand activations)",
        "Monthly performance report with in-depth insights",
        "Dedicated account manager & 24/7 priority support",
      ],
    },
  ];

  return (
    <>
      <Hero />

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-20 p-6 flex flex-col"
          >
            <button onClick={() => setMenuOpen(false)} className="self-end mb-8">
              <HiX size={24} />
            </button>
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xl font-medium text-gray-800 hover:text-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Floating Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg md:hidden z-20"
      >
        <HiMenu size={24} />
      </button>

      <section id="about" className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <motion.h2
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Born to Build Legends
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed"
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            At PeakFluence, we believe marketing is not just about selling; it’s about stirring souls.
            We are a new breed of marketing agency, built for ambitious brands that refuse to be average.
            Powered by passion, creativity and Kenyan resilience, we help businesses rise above the noise;
            and stay unforgettable.
            Whether you're a bold startup or an empire in the making, PeakFluence is your launchpad.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
      >
        <div className="container mx-auto px-4 lg:px-0">
          <motion.h3
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card */}
            {[
              {
                icon: "📈",
                title: "Marketing Solutions for the Modern Brand",
                subtitle: "Full-Spectrum & Tailored",
                items: [
                  "Digital & Social Media Marketing",
                  "SEO & Website Design",
                  "Experiential Campaigns",
                  "Influencer Marketing",
                  "E-commerce Development",
                  "PPC (Google & YouTube Ads)",
                ],
              },
              {
                icon: "💻",
                title: "Digital Marketing",
                subtitle: "Strategic. Creative. Targeted.",
                items: [
                  "Paid Ads (Google, YouTube, Display & Search)",
                  "Social Media Campaigns",
                  "Custom Content Creation",
                  "Email Marketing",
                  "Analytics & Reporting",
                ],
              },
              {
                icon: "🌐",
                title: "Websites",
                subtitle: "Your Digital Storefront – Designed to Convert",
                items: [
                  "Custom Headers & CTAs",
                  "Blog & Social Media Integration",
                  "WhatsApp Chat Plug-in",
                  "Lead Capture Forms",
                  "On-page SEO & Speed Optimization",
                ],
              },
              {
                icon: "🔍",
                title: "SEO",
                subtitle: "Be Found. Stay Relevant. Grow Organically.",
                items: [
                  "Keyword Research & Analysis",
                  "Technical & On-page SEO",
                  "Local SEO Optimization",
                  "Blog & Link Building",
                  "Performance Audits",
                ],
              },
              {
                icon: "🎯",
                title: "Experiential Marketing",
                subtitle: "Engage Offline. Amplify Online.",
                items: [
                  "Event Branding & Setup",
                  "Influencer Takeovers",
                  "Roadshows & Pop-up Experiences",
                  "Compliance & Logistics Support",
                  "Cross-platform Digital Promotion",
                ],
              },
            ].map((svc, i) => (
              <motion.div
                key={svc.title}
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-md dark:shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-4xl">{svc.icon}</span>
                  <h4 className="ml-3 text-xl font-bold text-blue-600 dark:text-blue-400">
                    {svc.title}
                  </h4>
                </div>
                <p className="italic text-gray-600 dark:text-gray-400 mb-4">
                  {svc.subtitle}
                </p>
                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300 flex-1">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="mr-2 text-blue-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gray-50 text-gray-800">
        <div className="container mx-auto px-4 md:px-0">
          <motion.h3
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Pricing Plans
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col"
              >
                <h4 className="text-2xl font-bold mb-2">{plan.name}</h4>
                <p className="text-3xl font-semibold text-blue-600 mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="#contact">
                  <button className="mt-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
                    Choose Plan
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-4 md:px-0">
          <motion.h3
            className="text-4xl md:text-5xl text-center font-bold mb-12"
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.8 }}
          >
            The Brands We've Launched to the Top
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="italic text-gray-700 mb-4">"PeakFluence turned our small dream into a movement. They don't just market, they believe in you."</p>
              <p className="font-semibold text-blue-700">Wanjiku - Founder, Thrive Kenya</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="italic text-gray-700 mb-4">“PeakFluence transformed our online presence overnight. Their energy is contagious – we truly felt like Nairobi’s heartbeat was powering our campaign!”</p>
              <p className="font-semibold text-blue-700">Amina, CEO of Safiri Ventures</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="italic text-gray-700 mb-4">“Working with PeakFluence felt like finding the perfect blend of creativity and strategy. Our brand has never been this alive!”</p>
              <p className="font-semibold text-blue-700">James, Founder of SlayQueen Boutique</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="italic text-gray-700 mb-4">“From the first brainstorm to the final launch, PeakFluence moved mountains for our brand. It was truly a breath of fresh Nairobi air!”</p>
              <p className="font-semibold text-blue-700">Fatuma, Marketing Manager at Mama’s Kitchen</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="italic text-gray-700 mb-4">"PeakFluence didn’t just understand our vision — they amplified it beyond what we thought possible!"</p>
              <p className="font-semibold text-blue-700">Derrick, Founder, AfriTrendz</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="italic text-gray-700 mb-4">"They brought the energy, the creativity, and the strategy. Our growth numbers are proof."</p>
              <p className="font-semibold text-blue-700">Susan, Marketing Director, JengaPay</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <p className="italic text-gray-700 mb-4">"With PeakFluence, we found a team that roots for us like it’s personal. It shows in every campaign."</p>
              <p className="font-semibold text-blue-700">Moses, CEO, Shwari Rides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white text-gray-800">
        <div className="container mx-auto px-4 md:px-0 max-w-lg">
          <motion.h3
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            whileInView={{ opacity: [0, 1], y: [50, 0] }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h3>
          <motion.div
            className="flex justify-center"
            whileInView={{ opacity: [0, 1], y: [30, 0] }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a
              href="mailto:bobgenga3@gmail.com"
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-100 text-gray-600">
        <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© {new Date().getHours()}:{new Date().getMinutes()} PeakFluence. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/profile.php?id=61574739723447" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
              <svg width="24" height="24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.4 3h-1.8v7A10 10 0 0 0 22 12" />
              </svg>
            </Link>
            <Link href="https://x.com/PeakInsightsKE">
              <svg width="24" height="24" fill="currentColor" className="hover:text-blue-600 transition">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.73 1.04 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3 5.1a4.28 4.28 0 0 0 1.33 5.72 4.27 4.27 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2 4.29 4.29 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.6 8.6 0 0 1-5.32 1.84A8.76 8.76 0 0 1 2 19.54a12.12 12.12 0 0 0 6.56 1.92c7.88 0 12.19-6.53 12.19-12.19 0-.19 0-.38-.01-.57A8.7 8.7 0 0 0 22.46 6" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/106979795" className="hover:text-blue-600 transition">
              <svg width="24" height="24" fill="currentColor">
                <path d="M20 0H4C1.8 0 0 1.8 0 4v16c0 2.2 1.8 4 4 4h16c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM6.9 19H3.5V8.5h3.4V19zM5.2 7.1C4 7.1 3 6 3 4.8c0-1.2 1-2.3 2.3-2.3s2.3 1 2.3 2.3c0 1.2-1 2.3-2.4 2.3zM20.5 19h-3.4v-5.3c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9V19h-3.4V8.5h3.3v1.4h.1c.5-1 1.6-2 3.4-2 3.7 0 4.4 2.4 4.4 5.6V19z" />
              </svg>
            </Link>
            <Link href="#" className="hover:text-blue-600 transition">
              <svg width="24" height="24" fill="currentColor">
                <path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-1-1.7-1-2.1-1.1C16.6 2.5 12 2.5 12 2.5h-.1s-4.6 0-8.6.3c-.4.1-1.3.1-2.1 1.1C.7 4.6.5 6.2.5 6.2S.3 8 .3 9.8v1.4c0 1.8.2 3.6.2 3.6s.2 1.6.8 2.3c.8 1 1.8 1 2.2 1.1 1.6.1 6.7.3 6.7.3s4.6 0 8.6-.3c.4-.1 1.3-.1 2.1-1.1.6-.7.8-2.3.8-2.3s.2-1.8.2-3.6V9.8c0-1.8-.2-3.6-.2-3.6zM9.6 14.6V9.4l5.1 2.6-5.1 2.6z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;
