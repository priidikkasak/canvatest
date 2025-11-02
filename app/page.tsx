'use client';

import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0e27]">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1729] via-[#1a1e47] to-[#0a0e27]"></div>

      {/* Chaotic animated code background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Code Block 1 */}
        <div className="absolute left-[5%] top-[10%] w-[450px] bg-[#1a1e2e] bg-opacity-55 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-6 font-mono text-sm animate-chaos-1"
             style={{ animationDelay: '-5s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`const fetchData = async () => {
  const res = await fetch('/api');
  return res.json();
};

useEffect(() => {
  fetchData().then(setData);
}, []);`}
            </code>
          </pre>
        </div>

        {/* Code Block 2 */}
        <div className="absolute right-[8%] top-[15%] w-[420px] bg-[#1a1e2e] bg-opacity-60 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-5 font-mono text-sm animate-chaos-2"
             style={{ animationDelay: '-8s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 100%
  );
}`}
            </code>
          </pre>
        </div>

        {/* Code Block 3 */}
        <div className="absolute left-[30%] top-[5%] w-[480px] bg-[#1a1e2e] bg-opacity-50 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-6 font-mono text-sm animate-chaos-3"
             style={{ animationDelay: '-3s' }}>
          <pre className="text-gray-500 leading-relaxed text-xs">
            <code>
{`interface AppConfig {
  theme: 'light' | 'dark';
  language: string;
  features: {
    analytics: boolean;
    darkMode: boolean;
  };
}

const config: AppConfig = {
  theme: 'dark',
  language: 'en',
  features: {
    analytics: true,
    darkMode: true
  }
};`}
            </code>
          </pre>
        </div>

        {/* Code Block 4 */}
        <div className="absolute right-[15%] bottom-[20%] w-[500px] bg-[#1a1e2e] bg-opacity-65 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-6 font-mono text-sm animate-chaos-4"
             style={{ animationDelay: '-10s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const gen = fibonacci();
console.log(gen.next().value);`}
            </code>
          </pre>
        </div>

        {/* Code Block 5 */}
        <div className="absolute left-[10%] bottom-[15%] w-[440px] bg-[#1a1e2e] bg-opacity-58 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-5 font-mono text-sm animate-chaos-5"
             style={{ animationDelay: '-7s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated {
  animation: slideIn 0.5s ease-out;
}`}
            </code>
          </pre>
        </div>

        {/* Code Block 6 */}
        <div className="absolute left-[45%] bottom-[10%] w-[460px] bg-[#1a1e2e] bg-opacity-52 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-6 font-mono text-sm animate-chaos-6"
             style={{ animationDelay: '-12s' }}>
          <pre className="text-gray-500 leading-relaxed text-xs">
            <code>
{`const memoizedValue = useMemo(
  () => computeExpensive(a, b),
  [a, b]
);

const handleClick = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b]
);`}
            </code>
          </pre>
        </div>

        {/* Code Block 7 */}
        <div className="absolute right-[25%] top-[25%] w-[410px] bg-[#1a1e2e] bg-opacity-48 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-5 font-mono text-sm animate-chaos-1"
             style={{ animationDelay: '-4s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`const router = express.Router();

router.get('/users/:id', async (req, res) => {
  const user = await User.findById(
    req.params.id
  );
  res.json(user);
});

export default router;`}
            </code>
          </pre>
        </div>

        {/* Code Block 8 */}
        <div className="absolute left-[20%] top-[30%] w-[470px] bg-[#1a1e2e] bg-opacity-62 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-6 font-mono text-sm animate-chaos-2"
             style={{ animationDelay: '-11s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(
        listener => listener(...args)
      );
    }
  }
}`}
            </code>
          </pre>
        </div>

        {/* Code Block 9 */}
        <div className="absolute right-[5%] bottom-[35%] w-[490px] bg-[#1a1e2e] bg-opacity-56 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-6 font-mono text-sm animate-chaos-3"
             style={{ animationDelay: '-6s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};`}
            </code>
          </pre>
        </div>

        {/* Code Block 10 */}
        <div className="absolute left-[35%] top-[40%] w-[430px] bg-[#1a1e2e] bg-opacity-45 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-5 font-mono text-sm animate-chaos-4"
             style={{ animationDelay: '-2s' }}>
          <pre className="text-gray-500 leading-relaxed text-xs">
            <code>
{`SELECT users.name, orders.total
FROM users
INNER JOIN orders
  ON users.id = orders.user_id
WHERE orders.status = 'completed'
ORDER BY orders.created_at DESC
LIMIT 10;`}
            </code>
          </pre>
        </div>

        {/* Code Block 11 */}
        <div className="absolute left-[12%] top-[50%] w-[455px] bg-[#1a1e2e] bg-opacity-54 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-6 font-mono text-sm animate-chaos-5"
             style={{ animationDelay: '-9s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    await delay(1000);
    yield i++;
  }
}

for await (const num of asyncGen()) {
  console.log(num);
}`}
            </code>
          </pre>
        </div>

        {/* Code Block 12 */}
        <div className="absolute right-[20%] top-[55%] w-[425px] bg-[#1a1e2e] bg-opacity-50 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-5 font-mono text-sm animate-chaos-6"
             style={{ animationDelay: '-13s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`git commit -m "feat: add new feature"
git push origin main

# Rebase feature branch
git checkout feature
git rebase main
git push --force-with-lease`}
            </code>
          </pre>
        </div>

        {/* Code Block 13 */}
        <div className="absolute left-[50%] top-[65%] w-[485px] bg-[#1a1e2e] bg-opacity-58 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-6 font-mono text-sm animate-chaos-1"
             style={{ animationDelay: '-1s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`docker-compose up -d

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db`}
            </code>
          </pre>
        </div>

        {/* Code Block 14 */}
        <div className="absolute right-[30%] bottom-[5%] w-[440px] bg-[#1a1e2e] bg-opacity-52 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-5 font-mono text-sm animate-chaos-2"
             style={{ animationDelay: '-14s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  initial="hidden"
  animate="visible"
  variants={variants}
/>`}
            </code>
          </pre>
        </div>

        {/* Code Block 15 */}
        <div className="absolute left-[5%] bottom-[40%] w-[465px] bg-[#1a1e2e] bg-opacity-60 backdrop-blur-sm border border-[#2a3a5a] rounded-lg p-6 font-mono text-sm animate-chaos-3"
             style={{ animationDelay: '-15s' }}>
          <pre className="text-gray-400 leading-relaxed text-xs">
            <code>
{`const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(
      () => func(...args),
      delay
    );
  };
};`}
            </code>
          </pre>
        </div>
      </div>

      {/* Chaotic animated glow effects */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[500px] bg-emerald-500 blur-[120px] rounded-full pointer-events-none animate-chaos-glow-1" style={{ animationDelay: '-5s' }}></div>
      <div className="absolute bottom-[5%] right-[10%] w-[450px] h-[550px] bg-green-400 blur-[100px] rounded-full pointer-events-none animate-chaos-glow-2" style={{ animationDelay: '-8s' }}></div>
      <div className="absolute top-[40%] right-[5%] w-[380px] h-[480px] bg-teal-500 blur-[90px] rounded-full pointer-events-none animate-chaos-glow-1" style={{ animationDelay: '-12s' }}></div>
      <div className="absolute bottom-[30%] left-[15%] w-[420px] h-[520px] bg-cyan-400 blur-[110px] rounded-full pointer-events-none animate-chaos-glow-2" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-[20%] left-[40%] w-[350px] h-[450px] bg-lime-400 blur-[100px] rounded-full pointer-events-none animate-chaos-glow-1" style={{ animationDelay: '-10s' }}></div>
      <div className="absolute bottom-[50%] right-[35%] w-[400px] h-[500px] bg-emerald-300 blur-[115px] rounded-full pointer-events-none animate-chaos-glow-2" style={{ animationDelay: '-7s' }}></div>

      {/* Main content */}
      <div className="relative z-30">
        {/* Hamburger Menu Button - Mobile Only */}
        <button
          className="md:hidden absolute top-6 right-6 z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-7 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
             style={{
               background: 'linear-gradient(135deg, #0a1e1a 0%, #0f2e2a 25%, #1a3e35 50%, #0f2e2a 75%, #0a1e1a 100%)'
             }}>
          {/* Green glow effects in menu */}
          <div className="absolute top-[20%] left-[10%] w-[300px] h-[400px] bg-emerald-500 blur-[120px] rounded-full pointer-events-none opacity-20"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[400px] bg-green-400 blur-[100px] rounded-full pointer-events-none opacity-20"></div>

          <div className="relative h-full flex flex-col px-6 py-8">
            {/* Menu Header */}
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-4xl font-black text-white">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-12 h-12 flex items-center justify-center text-white text-3xl"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 flex flex-col gap-4">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-6 py-5 rounded-3xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(160, 240, 208, 0.2)'
                }}>
                <span className="text-2xl font-bold text-white">About</span>
                <span className="text-emerald-400 text-2xl">→</span>
              </a>

              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-6 py-5 rounded-3xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(160, 240, 208, 0.2)'
                }}>
                <span className="text-2xl font-bold text-white">Services</span>
                <span className="text-emerald-400 text-2xl">→</span>
              </a>

              <a
                href="#portfolio"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-6 py-5 rounded-3xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(160, 240, 208, 0.2)'
                }}>
                <span className="text-2xl font-bold text-white">Portfolio</span>
                <span className="text-emerald-400 text-2xl">→</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-6 py-5 rounded-3xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(160, 240, 208, 0.2)'
                }}>
                <span className="text-2xl font-bold text-white">Contact</span>
                <span className="text-emerald-400 text-2xl">→</span>
              </a>
            </nav>

            {/* Hire Me Button */}
            <a
              href="#hire"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-auto px-8 py-5 rounded-full text-white text-xl font-bold text-center transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)'
              }}>
              Hire Me 🤝
            </a>
          </div>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex absolute top-12 left-1/2 transform -translate-x-1/2 gap-12">
          <a href="#about" className="text-white text-lg font-black tracking-[0.3em] uppercase hover:text-emerald-400 transition-all duration-300 hover:scale-110 relative group"
             style={{
               fontFamily: "'Impact', 'Arial Black', sans-serif",
               textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(160, 255, 200, 0.3)'
             }}>
            ABOUT
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#services" className="text-white text-lg font-black tracking-[0.3em] uppercase hover:text-emerald-400 transition-all duration-300 hover:scale-110 relative group"
             style={{
               fontFamily: "'Impact', 'Arial Black', sans-serif",
               textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(160, 255, 200, 0.3)'
             }}>
            SERVICES
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#portfolio" className="text-white text-lg font-black tracking-[0.3em] uppercase hover:text-emerald-400 transition-all duration-300 hover:scale-110 relative group"
             style={{
               fontFamily: "'Impact', 'Arial Black', sans-serif",
               textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(160, 255, 200, 0.3)'
             }}>
            PORTFOLIO
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-white text-lg font-black tracking-[0.3em] uppercase hover:text-emerald-400 transition-all duration-300 hover:scale-110 relative group"
             style={{
               fontFamily: "'Impact', 'Arial Black', sans-serif",
               textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5), 0 0 20px rgba(160, 255, 200, 0.3)'
             }}>
            CONTACT
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Center content */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center px-6 md:px-4 max-w-6xl">
            {/* Main title with glow effect */}
            <h1 className="text-[clamp(2.5rem,12vw,12rem)] md:text-[clamp(3rem,15vw,12rem)] font-black italic tracking-tighter leading-none mb-4 md:mb-6"
                style={{
                  background: 'linear-gradient(to bottom, #ffffff 30%, #a0f0d0 70%, #60d0a0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 80px rgba(160, 255, 200, 0.5), 0 0 40px rgba(160, 255, 200, 0.3)',
                  filter: 'drop-shadow(0 0 30px rgba(160, 255, 200, 0.4))'
                }}>
              <span className="inline-block tracking-[0.3em] md:tracking-tighter">WEB</span>{' '}
              <span className="inline-block">DEVELOPER</span>
            </h1>

            {/* Subtitle */}
            <p className="text-white text-[clamp(0.875rem,2.5vw,2rem)] md:text-[clamp(1rem,3vw,2rem)] font-bold italic tracking-wider">
              BUILDING THE DIGITAL WORLD
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
