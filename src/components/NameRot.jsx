import React from "react";
import { motion, useMotionValue, useTransform, useScroll, useVelocity, useSpring, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

const ParallaxText = ({ children, baseVelocity = 3 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  
  // Adjusts the speed dynamically based on scroll direction
  const velocityFactor = useTransform(smoothVelocity, [0, 0, 1000], [-5, 0, 5], { clamp: false });

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    
    // Reverse direction based on scroll velocity
    moveBy += moveBy * velocityFactor.get();
    
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  return (
    <div className="parallax w-full overflow-hidden whitespace-nowrap flex">
      <motion.div className="scroller flex whitespace-nowrap" style={{ x }}>
        {Array(10).fill(children).map((text, index) => (
          <span key={index} className="block mr-4">{text}</span>
        ))}
      </motion.div>
    </div>
  );
};

const NameRot = () => {
  return (
    <section className="mt-50 md:mt-60 mb-20 md:mb-20 overflow-hidden py-8 space-y-4 ">
      <ParallaxText baseVelocity={-3}>rosh.D • </ParallaxText>
      <ParallaxText baseVelocity={3}>rosh.D • </ParallaxText>
    </section>
  );
};

export default NameRot;
