"use client";

import React from "react";
import "@styles/globals.css";
import LeniScroll from "@/hooks/Lenis";
import { Footer, Header } from "@/components";
import { motion } from "framer-motion";

export default function RootLayout({ children }) {
  LeniScroll();

  return (
    <html lang="en">
      <head>
        <title>Sarah - Graphic Designer from Berlin</title>
        <link rel="icon" type="image/x-icon" href="/fav.ico" />
        {/* SEO Meta Tags */}
        <meta
          name="description"
          content="Sarah is a talented graphic designer from Berlin, specializing in creative design and visual communication. Explore her portfolio and design work."
        />
        <meta
          name="keywords"
          content="Graphic designer, Berlin, portfolio, creative design, visual communication"
        />
        <meta name="author" content="Sarah" />
        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Sarah - Graphic Designer from Berlin"
        />
        <meta
          property="og:description"
          content="Explore the portfolio of Sarah, a graphic designer from Berlin, showcasing creative design and visual communication skills."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="your-website-url" />
        <meta property="og:image" content="path-to-your-image.jpg" />
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sarah - Graphic Designer from Berlin"
        />
        <meta
          name="twitter:description"
          content="Discover Sarah's creative graphic design work and portfolio. Based in Berlin."
        />
        <meta name="twitter:image" content="path-to-your-image.jpg" />
      </head>
      <motion.body
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <>
          <Header />
          {children}
          <Footer />
        </>
      </motion.body>
    </html>
  );
}
