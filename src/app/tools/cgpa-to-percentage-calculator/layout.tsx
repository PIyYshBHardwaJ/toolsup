import type { ReactNode } from 'react';

export const metadata = {
  title: "CGPA to Percentage Calculator | Toolup",
  description:
    "Convert CGPA to percentage instantly using the standard 9.5 formula. Free CGPA to percentage calculator for Indian colleges and universities.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
