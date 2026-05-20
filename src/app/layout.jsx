import {Toaster} from 'react-hot-toast';
import './globals.css'; // Import CSS global kamu di sini

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {/* 'children' adalah konten halaman yang sedang dibuka */}
        {children}
        
        {/* Pindahkan Toaster dari App.jsx lama ke sini */}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}