"use client"

import { useState } from "react"
import WelcomePage from "@/pages/WelcomePage"
import MusicPlayer from "@/pages/MusicPlayer"
import BirthdayCard from "@/pages/BirthdayCard"

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"welcome" | "music" | "card">("welcome")

  const renderPage = () => {
    switch (currentPage) {
      case "welcome":
        return <WelcomePage onNext={() => setCurrentPage("music")} />
      case "music":
        return <MusicPlayer onNext={() => setCurrentPage("card")} onPrev={() => setCurrentPage("welcome")} />
      case "card":
        return <BirthdayCard onPrev={() => setCurrentPage("music")} />
      default:
        return <WelcomePage onNext={() => setCurrentPage("music")} />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <main className="transition-all duration-500">{renderPage()}</main>
    </div>
  )
}
