import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google";
import Navbar from "./componets/navbar/Navbar";
import ClientOnly from "./componets/ClientOnly";
import RegisterModal from "./componets/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./componets/modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata: Metadata = {
  title: "Airbnb Clone",
  description:
    "Create Airbnb clone with Typescript, Next.js, Tailwind CSS, Prisma and MongoDB",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
