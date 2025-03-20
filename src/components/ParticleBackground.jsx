import { useRef, useEffect } from 'react';
import { createNoise3D } from 'simplex-noise';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const noise3D = createNoise3D();

    // Create bubble particles
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100; // Start below screen

        // More variable bubble sizes - increased range significantly
        this.size = Math.random() * 12 + 2;

        // Adjust speed based on size - smaller bubbles move faster
        this.speedY = (Math.random() * 2 + 0.5) * (8 / (this.size + 2));

        // Varied opacity
        this.opacity = Math.random() * 0.6 + 0.1;

        // Add slight color variation for more natural look
        this.blueShade = Math.random() * 50;

        this.wobble = 0;
      }

      update(time) {
        // Move upward
        this.y -= this.speedY;

        // Wobble effect using noise
        this.wobble += 0.01;
        const noiseX = noise3D(this.x * 0.005, this.y * 0.005, time * 0.1) * 2;
        this.x += noiseX;

        // Reset if out of bounds
        if (this.y < -this.size * 2) {
          this.reset();
        }
      }

      draw(ctx) {
        // Draw bubble - CHANGED COLOR TO BLUE
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        // Blue bubble with color variation - using cyan blue shades
        ctx.fillStyle = `rgba(56, ${170 + this.blueShade}, 246, ${
          this.opacity * 0.3
        })`;
        ctx.fill();

        // Bubble border for larger bubbles
        if (this.size > 8) {
          ctx.strokeStyle = `rgba(14, 165, 233, ${this.opacity * 0.5})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }

        // Add shine to bubble
        ctx.beginPath();
        ctx.arc(
          this.x - this.size * 0.3,
          this.y - this.size * 0.3,
          this.size * 0.2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.5})`;
        ctx.fill();
      }
    }

    // Initialize particles - more particles for better effect
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p) => {
        p.update(time);
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.forEach((p) => p.reset());
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='opacity-40' // Slightly increased opacity for better visibility
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Ensures clicks pass through the canvas
      }}
    />
  );
};

export default ParticleBackground;
