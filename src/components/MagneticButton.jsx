import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function MagneticButton({
  children,
  className = "",
  onClick,
  strength = 0.35,
  as: Component = "button",
  ...props
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches) return;

    const toX = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const toY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      toX(deltaX);
      toY(deltaY);
    };

    const handleMouseLeave = () => {
      toX(0);
      toY(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <Component
      ref={elRef}
      data-cursor="grow"
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}
