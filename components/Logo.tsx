interface LogoProps {
  variant?: 'full' | 'header';
}

export default function Logo({ variant = 'header' }: LogoProps) {
  const emblem = (
    <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M120 100 Q145 110 160 111" stroke="#F0BE35" strokeWidth="8" strokeLinecap="round"/>
      <path d="M155 60 Q175 85 180 105" stroke="#F0BE35" strokeWidth="9" strokeLinecap="round"/>
      <path d="M200 35 L200 100" stroke="#F0BE35" strokeWidth="10" strokeLinecap="round"/>
      <path d="M245 60 Q225 85 220 105" stroke="#F0BE35" strokeWidth="9" strokeLinecap="round"/>
      <path d="M280 100 Q255 110 240 111" stroke="#F0BE35" strokeWidth="8" strokeLinecap="round"/>
      <path d="M100 135 Q150 115 200 135 Q250 115 300 135" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none"/>
    </svg>
  );

  if (variant === 'full') {
    return (
      <div className="bg-[#1e4285] text-white rounded-xl p-6 flex flex-col items-center justify-center text-center shadow-lg border border-blue-900/40">
        <div className="w-44 h-20">{emblem}</div>
        <h2 className="font-serif text-3xl font-normal text-[#F0BE35] tracking-wide mb-0.5 leading-none">
          UsefulMall
        </h2>
        <p className="text-[11px] tracking-[0.25em] text-white/90 uppercase font-normal pt-1">
          Be Inspired
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      <div className="w-11 h-8 flex-shrink-0 bg-[#1e4285] rounded-md p-0.5 shadow-sm border border-blue-400/20 flex items-center justify-center">
        <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120 100 Q145 110 160 111" stroke="#F0BE35" strokeWidth="10" strokeLinecap="round"/>
          <path d="M155 60 Q175 85 180 105" stroke="#F0BE35" strokeWidth="11" strokeLinecap="round"/>
          <path d="M200 35 L200 100" stroke="#F0BE35" strokeWidth="12" strokeLinecap="round"/>
          <path d="M245 60 Q225 85 220 105" stroke="#F0BE35" strokeWidth="11" strokeLinecap="round"/>
          <path d="M280 100 Q255 110 240 111" stroke="#F0BE35" strokeWidth="10" strokeLinecap="round"/>
          <path d="M100 135 Q150 115 200 135 Q250 115 300 135" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <span className="font-serif text-sm font-black tracking-wide text-slate-900 leading-tight">
          UsefulMall
        </span>
        <span className="text-[8px] font-mono font-bold tracking-widest text-slate-400 uppercase -mt-0.5">
          Be Inspired
        </span>
      </div>
    </div>
  );
}
