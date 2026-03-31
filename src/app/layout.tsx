import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'INAMICE 2026',
    description: 'Empowering Jakarta’s Smart Economy through Digital Transformation in the MICE Industry',
};

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="antialiased font-sans text-slate-900 bg-inamice-bg">
                <div className="min-h-screen flex flex-col">
                    <Navbar />
                    <main className="flex-grow">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
