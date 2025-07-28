import { Car } from "lucide-react";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
}

const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-16 h-16",
    xl: "w-24 h-24"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl", 
    xl: "text-2xl"
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Circle with Car */}
      <div className={`${sizeClasses[size]} bg-gradient-primary rounded-full flex items-center justify-center shadow-glow relative`}>
        {/* Outer glow ring */}
        <div className={`${sizeClasses[size]} absolute inset-0 rounded-full bg-gradient-to-r from-auto-blue to-primary opacity-50 blur-sm`}></div>
        {/* Inner logo */}
        <div className={`${sizeClasses[size]} relative bg-auto-dark rounded-full flex items-center justify-center border-2 border-auto-blue/30`}>
          <Car className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : size === 'lg' ? 'w-8 h-8' : 'w-12 h-12'} text-auto-blue`} />
        </div>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${textSizeClasses[size]} font-bold text-foreground leading-tight`}>TOP AUTO</span>
          <span className={`${textSizeClasses[size]} font-bold text-primary leading-tight`}>ADVISORS</span>
        </div>
      )}
    </div>
  );
};

export default Logo;