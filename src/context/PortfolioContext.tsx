"use client";

import React, { createContext, useContext } from "react";
import { PortfolioDataType } from "@/types/portfolio";

const PortfolioContext = createContext<PortfolioDataType | null>(null);



export function PortfolioProvider({
  children,
  data,
}: {
  children: React.ReactNode;
  data: PortfolioDataType;
}) {
  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
}
