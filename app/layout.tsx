// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "FORGE Portfolio",
//   description: "FORGE apprenticeship portfolio starter",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//         style={{
//           margin: 0,
//           minHeight: "100vh",
//           overflowX: "hidden",
//           backgroundImage:
//             "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/background.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           backgroundAttachment: "fixed",
//           animation: "zoom 20s ease-in-out infinite alternate",
//         }}
//       >
//         <style>{`
//           @keyframes zoom {
//             0% {
//               background-size: 100%;
//             }
//             100% {
//               background-size: 115%;
//             }
//           }

//           .floating-bg {
//             position: fixed;
//             inset: 0;
//             pointer-events: none;
//             overflow: hidden;
//             z-index: -1;
//           }

//           .cube {
//             position: absolute;
//             width: 120px;
//             height: 120px;
//             border: 2px solid rgba(255,255,255,0.15);
//             transform-style: preserve-3d;
//             animation: rotateCube 20s linear infinite;
//           }

//           .cube:nth-child(1) {
//             top: 10%;
//             left: 15%;
//           }

//           .cube:nth-child(2) {
//             top: 55%;
//             left: 75%;
//             animation-duration: 28s;
//           }

//           .cube:nth-child(3) {
//             top: 75%;
//             left: 25%;
//             animation-duration: 35s;
//           }

//           @keyframes rotateCube {
//             from {
//               transform: rotateX(0deg) rotateY(0deg);
//             }
//             to {
//               transform: rotateX(360deg) rotateY(360deg);
//             }
//           }
//         `}</style>

//         <div className="floating-bg">
//           <div className="cube"></div>
//           <div className="cube"></div>
//           <div className="cube"></div>
//         </div>

//         {children}
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "FORGE Portfolio",
  description: "FORGE apprenticeship portfolio starter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
