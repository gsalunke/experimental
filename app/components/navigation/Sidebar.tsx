"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/hooks', label: 'React Hooks', icon: '🎣' },
    { href: '/lifecycle', label: 'Lifecycle Methods', icon: '⚡' },
    { href: '/promises', label: 'JS Promises', icon: '🔄' },
    { href: '/axios-examples', label: 'Axios Examples', icon: '📦' },
    { href: '/array-methods', label: 'Array Methods', icon: '📚' },
  ];

  return (
    <nav className="w-64 bg-gray-50 h-screen fixed left-0 top-0 p-4 border-r border-gray-200">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-gray-800">React Examples</h1>
      </div>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center p-3 rounded-lg transition-colors ${
                pathname === item.href
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
