"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Shield, Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { useState } from "react"

export function Navigation() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "الرئيسية" },
    { href: "/quran", label: "القرآن" },
    { href: "/azkar", label: "الأذكار" },
    { href: "/tracker", label: "المتابعة" },
    { href: "/stories", label: "القصص" },
    { href: "/awareness", label: "التوعية" },
  ]

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-amber-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white">أنا أقوى</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-slate-700 dark:text-slate-300"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-slate-700 dark:text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-amber-200 dark:border-slate-700 pt-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 px-3 rounded-lg transition-colors ${
                    pathname === item.href
                      ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 font-semibold"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
