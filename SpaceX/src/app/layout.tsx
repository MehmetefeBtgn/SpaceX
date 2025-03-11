"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useState } from "react";
import "./globals.css";



export default function RootLayout({ children }: { children: React.ReactNode }) {

/**
 * Sets up the global QueryClientProvider for React Query.
 *
 * - Initializes a `QueryClient` instance using `useState` to persist it across re-renders.
 * - Wraps the application with `QueryClientProvider` to enable React Query.
 *
 * @returns {JSX.Element} The HTML structure with the QueryClientProvider.
 */
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        
      <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
      </body>
    </html>
  );
}
