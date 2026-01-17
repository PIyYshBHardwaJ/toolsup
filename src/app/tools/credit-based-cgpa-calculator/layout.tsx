import type { ReactNode } from 'react';

export const metadata = {
  title: "Credit Based CGPA Calculator for College Students | Toolup",
  description:
    "Calculate your overall CGPA using semester-wise SGPA and credits. Free credit based CGPA calculator for Indian universities, engineering and degree colleges.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
