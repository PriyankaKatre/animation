'use client'
import { useState, useEffect} from 'react';
import Container from '../components/container'
import ProviderContextPattern from '../components/providerContextPattern'


const ThemeToggle =() =>{
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-white dark:bg-green-200"
    >
      Toggle {isDark ? 'Light' : 'Dark'} Mode
    </button>
  );
}


export default function Home() {
    useEffect(() => {
    window.document.documentElement.classList.add('dark');
    // const root = window.document.documentElement.classList.add('dark');
    // const storedTheme = localStorage.getItem('dark');
    // if (storedTheme === 'dark') {
    //   root.classList.add('dark');
    //   setIsDark(true);
    // }
  }, []);
  return (
    <div className="p-8 bg-gray-400 dark:bg-purple-500">
      <h1 className="text-2xl font-bold ">Dark Mode Test</h1>
      <ThemeToggle />
    </div>


  );
}
