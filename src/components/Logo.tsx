interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeMap = {
    sm: "w-20 h-20",  // tightened from 28
    md: "w-32 h-32",  // tightened from 40
    lg: "w-44 h-44",  // tightened from 56
    xl: "w-60 h-60"   // tightened from 72
  };

  const textSizeMap = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl"
  };

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {/* Logo Circle */}
      <div
        className={`relative ${sizeMap[size]} rounded-full border-[3px] border-auto-blue/60 bg-auto-dark shadow-[0_0_80px_rgba(2,153,255,0.75)] flex items-center justify-center overflow-hidden`}
      >
        <img
          src="/images/car-logo-transparent.png"
          alt="Car logo"
          className="w-full h-full object-cover scale-125 drop-shadow-[0_2px_14px_rgba(255,255,255,0.85)] transition-transform duration-300"
        />
      </div>

      {/* One-Line Text */}
      {showText && (
        <span
          className={`font-bold tracking-wide whitespace-nowrap ${textSizeMap[size]}`}
        >
          <span className="text-white">TOP AUTO </span>
          <span className="text-auto-blue">ADVISORS</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
