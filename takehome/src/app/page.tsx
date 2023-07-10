'use client'

import Image from 'next/image';
import '../styles/main.scss';
import  QuizComponent from '@/pages/QuizComponent';

export default function Home() {
  return (
    <div className="app">
      <QuizComponent />
    </div>
  );
}

