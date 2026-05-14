"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Moon, Sun } from "lucide-react"

function Footerdemo() {
    const [isDarkMode, setIsDarkMode] = React.useState(false)

    React.useEffect(() => {
        const isDark = document.documentElement.classList.contains("dark")
        setIsDarkMode(isDark)
    }, [])

    React.useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDarkMode])

    return (
        <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
            <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Col 1: CTA */}
                    <div className="relative">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight">Let's work together.</h2>
                        <p className="mb-6 text-muted-foreground text-sm leading-relaxed">
                            If you have a problem that needs thinking through — not just designing around — get in touch. Available for select projects in 2026.
                        </p>
                        <a
                            href="mailto:kelvinwamuiga@gmail.com"
                            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
                        >
                            kelvinwamuiga@gmail.com →
                        </a>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <nav className="space-y-2 text-sm">
                            <Link href="/" className="block transition-colors hover:text-primary">
                                Home
                            </Link>
                            <Link href="/about" className="block transition-colors hover:text-primary">
                                About
                            </Link>
                            <Link href="/work" className="block transition-colors hover:text-primary">
                                Work
                            </Link>
                        </nav>
                    </div>

                    {/* Col 3: Contact */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Contact</h3>
                        <address className="space-y-2 text-sm not-italic text-muted-foreground">
                            <p>Nairobi, Kenya</p>
                            <p>+254 724 719 748</p>
                            <p>kelvinwamuiga@gmail.com</p>
                        </address>
                    </div>

                    {/* Col 4: Social + dark mode */}
                    <div className="relative">
                        <h3 className="mb-4 text-lg font-semibold">Follow</h3>
                        <div className="mb-6 flex space-x-4">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                                            <a href="https://www.linkedin.com/in/kelvin-wamuiga" target="_blank" rel="noopener noreferrer">
                                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                </svg>
                                                <span className="sr-only">LinkedIn</span>
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent><p>LinkedIn</p></TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                                            <a href="https://github.com/254wamuiga" target="_blank" rel="noopener noreferrer">
                                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                                </svg>
                                                <span className="sr-only">GitHub</span>
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent><p>GitHub</p></TooltipContent>
                                </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Button variant="outline" size="icon" className="rounded-full" asChild>
                                            <a href="https://www.behance.net/kelvinwamuiga" target="_blank" rel="noopener noreferrer">
                                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M22 14.4c0-2.4-1.1-4.4-3.5-4.4-2.4 0-3.5 1.9-3.5 4.5s1.2 4.3 3.5 4.3c2.1 0 3-1.6 3-1.6l-1.6-1c0 0-.6.8-1.5.8s-1.4-.6-1.4-1.5H22zm-3.5-2.6c1.1 0 1.5.8 1.5 1.6h-3.1s0-1.6 1.6-1.6zM0 6.1v11.8h5.3c3.4 0 5.3-1.6 5.3-4.3 0-1.8-1-3.2-2.7-3.8 1.4-.5 2.1-1.7 2.1-3.2 0-2.3-1.8-3.9-4.8-3.9H0zm2.7 2.2h2.2c1.4 0 2.2.6 2.2 1.6s-.8 1.6-2.2 1.6H2.7V8.3zm0 5.4h2.4c1.6 0 2.6.7 2.6 1.9s-1 1.9-2.6 1.9H2.7v-3.8zM15.3 7.8h6.4v1.6h-6.4V7.8z" />
                                                </svg>
                                                <span className="sr-only">Behance</span>
                                            </a>
                                        </Button>
                                    </TooltipTrigger>
                                    <TooltipContent><p>Behance</p></TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>

                        {/* Dark mode toggle */}
                        <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4" />
                            <Switch
                                id="dark-mode"
                                checked={isDarkMode}
                                onCheckedChange={setIsDarkMode}
                            />
                            <Moon className="h-4 w-4" />
                            <Label htmlFor="dark-mode" className="sr-only">Toggle dark mode</Label>
                        </div>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
                    <p className="text-sm text-muted-foreground">
                        © 2026 Kamau Wamuiga. All rights reserved.
                    </p>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
                        Nairobi, Kenya
                    </p>
                </div>
            </div>
        </footer>
    )
}

export { Footerdemo }
