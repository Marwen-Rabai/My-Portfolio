"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { CyberGlitch } from "./CyberGlitch";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error in development only
    if (process.env.NODE_ENV === 'development') {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center max-w-md mx-auto p-6">
            <div className="mb-6">
              <CyberGlitch
                text="ERROR_DETECTED"
                className="text-2xl font-bold text-cyber-magenta mb-4"
                glitchIntensity="high"
              />
            </div>
            
            <div className="mb-6">
              <h2 className="text-cyber-teal text-lg font-mono mb-2">
                SYSTEM_MALFUNCTION
              </h2>
              <p className="text-white/70 text-sm">
                Something went wrong. The system is recovering...
              </p>
            </div>

            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-cyber-teal/20 border border-cyber-teal/40 hover:border-cyber-teal/80 text-white rounded-sm font-mono transition-all"
            >
              RELOAD_SYSTEM
            </button>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="text-cyber-magenta text-xs font-mono cursor-pointer">
                  DEBUG_INFO
                </summary>
                <pre className="text-xs text-white/50 mt-2 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 