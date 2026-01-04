import type { ReactNode } from 'react';

export const metadata = {
  title: "CGPA Calculator for College Students | Toolup",
  description:
    "Calculate your semester CGPA using subject-wise grades and credits. Free CGPA calculator for Indian colleges and universities.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
