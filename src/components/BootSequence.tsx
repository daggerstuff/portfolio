import { useState, useEffect, useCallback } from 'react';

interface BootLine {
  text: string;
  delay: number;
  status?: 'ok' | 'warn' | 'loading';
}

const BOOT_LINES: BootLine[] = [
  { text: '> BIOS v4.2.0 initializing...', delay: 300 },
  { text: '> POST: Memory check 16384MB ... OK', delay: 400, status: 'ok' },
  { text: '> CPU: Pixelated Empathy Engine ... detected', delay: 350, status: 'ok' },
  { text: '> Loading kernel pixOS 6.4.6 ...', delay: 500, status: 'loading' },
  { text: '> Mounting filesystems ... OK', delay: 450, status: 'ok' },
  { text: '> Network interface gemcity.xyz ... linked', delay: 350, status: 'ok' },
  { text: '> Starting window manager ...', delay: 600, status: 'loading' },
  { text: '> Desktop environment ready.', delay: 250, status: 'ok' },
];

interface BootSequenceProps {
  children: React.ReactNode;
}

const SESSION_KEY = 'pixos_boot_completed';

export default function BootSequence({ children }: BootSequenceProps) {
  const [phase, setPhase] = useState<'booting' | 'glitch' | 'revealing' | 'done'>('booting');
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [typedText, setTypedText] = useState<string>('');
  const [currentLineIndex, setCurrentLineIndex] = useState<number>(0);

  const prefersReducedMotion = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const alreadyBooted = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  }, []);

  useEffect(() => {
    if (prefersReducedMotion() || alreadyBooted()) {
      setPhase('done');
      return;
    }

    let lineTimeout: ReturnType<typeof setTimeout>;
    let charTimeout: ReturnType<typeof setTimeout>;

    const advanceLine = () => {
      if (currentLineIndex >= BOOT_LINES.length) {
        setPhase('glitch');
        lineTimeout = setTimeout(() => {
          setPhase('revealing');
          sessionStorage.setItem(SESSION_KEY, 'true');
          lineTimeout = setTimeout(() => {
            setPhase('done');
          }, 800);
        }, 400);
        return;
      }

      const line = BOOT_LINES[currentLineIndex];
      lineTimeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setVisibleLines((prev) => prev + 1);
        typeLine(line.text, 0);
      }, line.delay);
    };

    const typeLine = (text: string, charIndex: number) => {
      if (charIndex > text.length) {
        setTypedText('');
        advanceLine();
        return;
      }
      setTypedText(text.slice(0, charIndex));
      const charDelay = text[charIndex - 1] === '.' ? 30 : 12;
      const isStatusLine = text.includes(' ... ');
      const baseDelay = isStatusLine && charIndex > text.indexOf(' ... ') + 4 ? 8 : charDelay;
      charTimeout = setTimeout(() => typeLine(text, charIndex + 1), baseDelay);
    };

    advanceLine();

    return () => {
      clearTimeout(lineTimeout);
      clearTimeout(charTimeout);
    };
  }, [currentLineIndex, prefersReducedMotion, alreadyBooted]);

  if (phase === 'done') {
    return <>{children}</>;
  }

  const glitchActive = phase === 'glitch';

  return (
    <div className="fixed inset-0 z-[9999]">
      {/* Boot screen */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ${
          phase === 'revealing' ? 'opacity-0' : 'opacity-100'
        } ${glitchActive ? 'animate-flicker' : ''}`}
      >
        {/* CRT scanline overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,0,0.03) 2px, rgba(0,255,0,0.03) 4px)',
            backgroundSize: '100% 4px',
          }}
        />

        {/* Terminal output */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-2xl px-8 font-mono text-sm">
            {/* BIOS header */}
            <div className="text-green-400/60 mb-4 text-xs">
              ╔══════════════════════════════════════╗
            </div>
            <div className="text-green-400/60 mb-1 text-xs pl-6">
              ║  Pixelated Empathy Systems Inc.     ║
            </div>
            <div className="text-green-400/60 mb-4 text-xs">
              ╚══════════════════════════════════════╝
            </div>

            {/* Boot lines */}
            <div className="space-y-1">
              {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                <div
                  key={i}
                  className={`transition-opacity duration-150 ${
                    i === visibleLines - 1 ? 'text-green-400' : 'text-green-400/70'
                  }`}
                >
                  {line.text}
                  {line.status === 'ok' && (
                    <span className="text-green-300 font-bold"> OK</span>
                  )}
                </div>
              ))}
              {/* Currently typing line */}
              {typedText && (
                <div className="text-green-400">
                  {typedText}
                  <span className="animate-blink">█</span>
                </div>
              )}
            </div>

            {/* Cursor blink at bottom */}
            {!typedText && visibleLines > 0 && visibleLines <= BOOT_LINES.length && (
              <div className="text-green-400 mt-2 animate-blink">█</div>
            )}
          </div>
        </div>

        {/* Subtle CRT curvature vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 60%, rgba(0,0,0,0.4) 100%)',
          }}
        />
      </div>

      {/* Children rendered but hidden behind boot overlay */}
      <div className={phase === 'revealing' ? 'opacity-0' : 'opacity-0'}>
        {children}
      </div>

      <style>{`
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes flicker {
          0% { opacity: 1; }
          10% { opacity: 0.8; }
          20% { opacity: 1; }
          30% { opacity: 0.6; background: #0a0; }
          40% { opacity: 1; }
          50% { opacity: 0.9; }
          60% { opacity: 0.4; }
          70% { opacity: 1; }
          80% { opacity: 0.7; }
          90% { opacity: 1; }
          100% { opacity: 1; }
        }
        .animate-flicker {
          animation: flicker 0.4s step-end;
        }
      `}</style>
    </div>
  );
}
