import type { ReactNode } from 'react';

export const metadata = {
  title: "GPA Calculator for College & University Students | Toolup",
  description:
    "Calculate your GPA quickly using grades and credit hours. Free GPA calculator based on the 4.0 grading system used by most international universities.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
