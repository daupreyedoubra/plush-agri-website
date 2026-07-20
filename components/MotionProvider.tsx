"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Disables transform-based motion (scale, x, y) sitewide when the user has
 * prefers-reduced-motion enabled, without threading useReducedMotion() into
 * every section. Opacity fades still play.
 */
export default function MotionProvider({
  children,
}: {
  children: ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
