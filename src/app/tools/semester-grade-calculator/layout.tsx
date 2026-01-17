import type { ReactNode } from 'react';

export const metadata = {
  title: "Semester Grade Calculator for College Students | Toolup",
  description:
    "Calculate your semester GPA (SGPA) using subject-wise grades and credits. Free semester grade calculator for Indian colleges and universities.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
