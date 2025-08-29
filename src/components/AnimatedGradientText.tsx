import { useEffect, useState } from 'react';

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
}

export function AnimatedGradientText({ 
  children, 
  className = '',
  colors = ['#0A2540', '#C9A227', '#0A2540'],
  duration = 3000
}: AnimatedGradientTextProps) {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition(prev => (prev + 1) % 200);
    }, duration / 200);

    return () => clearInterval(interval);
  }, [duration]);

  const gradientStyle = {
    background: `linear-gradient(90deg, ${colors.join(', ')})`,
    backgroundSize: '200% 100%',
    backgroundPosition: `${gradientPosition}% 0%`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    transition: 'background-position 0.1s ease-out'
  };

  return (
    <span 
      className={className}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}