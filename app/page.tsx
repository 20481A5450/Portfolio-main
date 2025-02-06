"use client";
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <Link href="https://github.com/20481A5450">
        <Github /> My GitHub
      </Link>
    </div>
  );
}
