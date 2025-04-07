import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">React Examples</h1>
        
        <div className="grid gap-4">
          <Link 
            href="/hooks" 
            className="p-6 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">React Hooks Examples →</h2>
            <p>Explore examples of useState, useEffect, useContext, and custom hooks</p>
          </Link>
          
          <Link 
            href="/lifecycle" 
            className="p-6 border rounded-lg hover:border-blue-500 transition-colors"
          >
            <h2 className="text-2xl font-semibold mb-2">React Lifecycle Methods →</h2>
            <p>Learn about component lifecycle methods including mounting, updating, unmounting, and error handling</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
