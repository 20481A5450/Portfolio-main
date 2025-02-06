"use client";  // Ensures this runs only on the client

import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      console.log("Service Worker is available in the browser.");
    }
  }, []);

  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Link href="https://github.com/20481A5450">
        <Github /> My GitHub
      </Link>
    </div>
  );
}
