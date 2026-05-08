import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CourseForge – Turn YouTube Videos into Structured Courses",
  description:
    "Convert YouTube playlists into organized course modules with quizzes, notes, and progress tracking. Built for online educators and course creators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="97767038-b038-4f6a-bb4f-79ca6dab828a"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
