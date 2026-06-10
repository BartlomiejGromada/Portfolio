"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

export function CodeWindow() {
  const [activeTab, setActiveTab] = useState<"csharp" | "typescript">("csharp");
  const { codeWindow } = portfolioData;

  const renderCSharp = () => {
    const data = codeWindow.csharp;
    return (
      <motion.div
        key="csharp"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        className="font-mono text-[13px] md:text-sm leading-relaxed overflow-x-auto text-foreground/80 absolute inset-0 p-6 md:p-7"
      >
        <div>
          <span>public class </span>
          <span className="text-primary">{data.className}</span>
          <span> {"{"}</span>
        </div>

        {data.properties.map((prop, index) => {
          return (
            <div key={index} className="pl-8">
              <span>public {prop.type} {prop.name} {"{ "}{prop.getter}{" } = "}</span>
              <span className="text-primary">{prop.value}</span>
              <span>;</span>
            </div>
          );
        })}
        
        {/* Skills Render */}
        <div className="pl-8">
          <span>public string[] Stack {"{ get; } = "}</span>
          <>
            <span>{"{"}</span>
            {portfolioData.skills.map((val: string, i: number, arr: string[]) => (
              <div key={i} className="pl-8 text-primary">
                "{val}"{i < arr.length - 1 ? <span className="text-foreground/80">,</span> : ""}
              </div>
            ))}
            <div>{"};"}</div>
          </>
        </div> <div className="pl-8 mt-4">
          {data.methods.map((method, index) => {
            const parts = method.signature.split("true");
            return (
              <div key={index}>
                <span>{parts[0]}</span>
                <span className="text-primary">true</span>
                <span>{parts[1]}</span>
              </div>
            );
          })}
        </div>

        <div>
          <span>{"}"}</span>
        </div>
      </motion.div>
    );
  };

  const renderTypeScript = () => {
    const data = codeWindow.typescript;
    return (
      <motion.div
        key="typescript"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.2 }}
        className="font-mono text-[13px] md:text-sm leading-relaxed overflow-x-auto text-foreground/80 absolute inset-0 p-6 md:p-7"
      >
        <div>
          <span className="text-foreground/60">interface </span>
          <span className="text-primary">{data.interfaceName}</span>
          <span> {"{"}</span>
        </div>
        {data.properties.map((prop, index) => (
          <div key={index} className="pl-8">
            <span className="text-foreground">{prop.name}</span>
            <span className="text-foreground/60">: </span>
            <span className="text-foreground/60">{prop.type}</span>
            <span className="text-foreground/60">;</span>
          </div>
        ))}
        {/* Skills Interface Property */}
        <div className="pl-8">
          <span className="text-foreground">stack</span>
          <span className="text-foreground/60">: </span>
          <span className="text-foreground/60">string[]</span>
          <span className="text-foreground/60">;</span>
        </div>
        {data.methods.map((method, index) => (
          <div key={`m-${index}`} className="pl-8 mt-2">
            <span className="text-foreground">{method.name}</span>
            <span className="text-foreground/60">: () =&gt; </span>
            <span className="text-foreground/60">{method.returnType}</span>
            <span className="text-foreground/60">;</span>
          </div>
        ))}
        <div>
          <span>{"}"}</span>
        </div>

        <div className="mt-6">
          <span className="text-foreground/60">const </span>
          <span className="text-foreground">me</span>
          <span className="text-foreground/60">: </span>
          <span className="text-primary">{data.interfaceName}</span>
          <span className="text-foreground/60"> = {"{"}</span>
        </div>
        {data.properties.map((prop, index) => {
          return (
            <div key={`v-${index}`} className="pl-8">
              <span className="text-foreground">{prop.name}</span>
              <span className="text-foreground/60">: </span>
              <span className="text-primary">{prop.value}</span>
              <span className="text-foreground/60">,</span>
            </div>
          );
        })}
        {/* Skills Value */}
        <div className="pl-8">
          <span className="text-foreground">stack</span>
          <span className="text-foreground/60">: </span>
          <>
            <span className="text-foreground/60">{"["}</span>
            {portfolioData.skills.map((val: string, i: number, arr: string[]) => (
              <div key={i} className="pl-8 text-primary">
                "{val}"{i < arr.length - 1 ? <span className="text-foreground/60">,</span> : ""}
              </div>
            ))}
            <div className="text-foreground/60">{"],"}</div>
          </>
        </div>
        {data.methods.map((method, index) => (
          <div key={`vm-${index}`} className="pl-8 mt-2">
            <span className="text-foreground">{method.name}</span>
            <span className="text-foreground/60">: </span>
            <span className="text-foreground/60">() =&gt; </span>
            <span className="text-primary">true</span>
            <span className="text-foreground/60">,</span>
          </div>
        ))}
        <div>
          <span>{"};"}</span>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full rounded-lg border border-border bg-card overflow-hidden">
      {/* Window Controls & Tabs */}
      <div className="flex items-center justify-between pl-4 pr-1 border-b border-border/30 bg-card/50">
        <div className="flex items-center space-x-2 py-4">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
          <div className="w-3 h-3 rounded-full bg-primary/80" />
        </div>
        <div className="flex items-end mt-2">
          <button
            onClick={() => setActiveTab("csharp")}
            className={`px-4 py-2 text-xs font-mono rounded-t-md transition-colors ${
              activeTab === "csharp"
                ? "bg-background border-t border-l border-r border-border/30 text-primary"
                : "text-foreground/50 hover:text-foreground hover:bg-background/30"
            }`}
          >
            Developer.cs
          </button>
          <button
            onClick={() => setActiveTab("typescript")}
            className={`px-4 py-2 text-xs font-mono rounded-t-md transition-colors ml-1 ${
              activeTab === "typescript"
                ? "bg-background border-t border-l border-r border-border/30 text-primary"
                : "text-foreground/50 hover:text-foreground hover:bg-background/30"
            }`}
          >
            developer.ts
          </button>
        </div>
      </div>

      {/* Code Content */}
      <div className="relative min-h-[380px] bg-background">
        <AnimatePresence mode="wait">
          {activeTab === "csharp" ? renderCSharp() : renderTypeScript()}
        </AnimatePresence>
      </div>
    </div>
  );
}
