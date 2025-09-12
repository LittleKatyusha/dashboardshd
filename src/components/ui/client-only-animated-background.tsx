"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const AnimatedBackground = dynamic(() => import("./animated-background"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
  ),
});

export default function ClientOnlyAnimatedBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
    );
  }

  return <AnimatedBackground />;
}
