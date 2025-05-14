import './globals.css';

export const metadata = {
  title: 'AI Dashboard',
  description: 'Manage your avatars',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gray-50 text-gray-900 h-[100%]">
        {children}
      </body>
    </html>
  );
}