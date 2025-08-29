import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
}

export function ScrollAnimation({ 
  children, 
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 600
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all ease-out';
    const durationClass = duration === 600 ? 'duration-600' : `duration-[${duration}ms]`;
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClass} ${durationClass} opacity-0`;
        case 'slideUp':
          return `${baseClass} ${durationClass} opacity-0 translate-y-8`;
        case 'slideLeft':
          return `${baseClass} ${durationClass} opacity-0 translate-x-8`;
        case 'slideRight':
          return `${baseClass} ${durationClass} opacity-0 -translate-x-8`;
        case 'scale':
          return `${baseClass} ${durationClass} opacity-0 scale-95`;
        default:
          return `${baseClass} ${durationClass} opacity-0`;
      }
    } else {
      return `${baseClass} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
}