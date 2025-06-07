"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Target, RefreshCw, Calendar, Trophy, Flame } from "lucide-react"
import {
  FadeIn,
  SlideInRight,
  SlideInLeft,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  PulseElement,
  AnimatedCounter,
  PageTransition,
} from "@/components/animations"

export default function TrackerPage() {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [cleanDays, setCleanDays] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load data from localStorage
    const savedStartDate = localStorage.getItem("recoveryStartDate")
    const savedHasStarted = localStorage.getItem("hasStarted")

    if (savedStartDate && savedHasStarted === "true") {
      const start = new Date(savedStartDate)
      setStartDate(start)
      setHasStarted(true)
      calculateDays(start)
    }
  }, [])

  useEffect(() => {
    if (mounted && startDate && hasStarted) {
      const interval = setInterval(
        () => {
          calculateDays(startDate)
        },
        1000 * 60 * 60,
      ) // Update every hour

      return () => clearInterval(interval)
    }
  }, [startDate, hasStarted, mounted])

  const calculateDays = (start: Date) => {
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - start.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    setCleanDays(diffDays)
  }

  const startChallenge = () => {
    const now = new Date()
    setStartDate(now)
    setHasStarted(true)
    setCleanDays(0)

    // Save to localStorage
    localStorage.setItem("recoveryStartDate", now.toISOString())
    localStorage.setItem("hasStarted", "true")
  }

  const resetChallenge = () => {
    setStartDate(null)
    setHasStarted(false)
    setCleanDays(0)

    // Clear localStorage
    localStorage.removeItem("recoveryStartDate")
    localStorage.removeItem("hasStarted")
  }

  const getMilestoneMessage = (days: number) => {
    if (days >= 365) return "مبروك! عام كامل من الطهارة 🎉"
    if (days >= 100) return "إنجاز رائع! 100 يوم من القوة 💪"
    if (days >= 30) return "شهر كامل من النجاح! 🌟"
    if (days >= 7) return "أسبوع من الإنجاز! 🔥"
    if (days >= 1) return "بداية موفقة! استمر 💚"
    return "ابدأ رحلتك اليوم!"
  }

  const getMotivationalVerse = (days: number) => {
    const verses = [
      {
        arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
        reference: "سورة الطلاق - آية 2",
      },
      {
        arabic: "وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا",
        reference: "سورة العنكبوت - آية 69",
      },
      {
        arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
        reference: "سورة الشرح - آية 6",
      },
    ]

    return verses[days % verses.length]
  }

  if (!mounted) {
    return null
  }

  return (
    <PageTransition className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <FloatingElement className="flex justify-center mb-4">
            <Target className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </FloatingElement>
          <FadeIn>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">متابع التعافي</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">تابع تقدمك اليومي في رحلة التطهر</p>
          </FadeIn>
        </div>

        {!hasStarted ? (
          /* Start Challenge Section */
          <div className="text-center">
            <ScaleIn>
              <Card className="bg-white/90 dark:bg-slate-800/90 border-blue-200 dark:border-blue-800 max-w-2xl mx-auto hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-3xl text-blue-700 dark:text-blue-400">ابدأ تحديك الآن</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <SlideInRight delay={0.2}>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                      اتخذ القرار اليوم وابدأ رحلة التطهر والقوة الروحية. كل يوم تمضيه في الطهارة هو انتصار لإرادتك.
                    </p>
                  </SlideInRight>

                  <SlideInLeft delay={0.4}>
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
                      <p className="text-xl text-blue-800 dark:text-blue-200 font-semibold mb-2">
                        "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا"
                      </p>
                      <p className="text-blue-700 dark:text-blue-300">سورة الطلاق - آية 2</p>
                    </div>
                  </SlideInLeft>

                  <FadeIn delay={0.6}>
                    <Button
                      onClick={startChallenge}
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-transform duration-200"
                    >
                      <Calendar className="ml-2 h-5 w-5" />
                      ابدأ التحدي الآن
                    </Button>
                  </FadeIn>
                </CardContent>
              </Card>
            </ScaleIn>
          </div>
        ) : (
          /* Active Challenge Section */
          <div className="space-y-8">
            {/* Main Counter */}
            <ScaleIn>
              <Card className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center py-12">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <PulseElement>
                        <div className="text-8xl font-bold text-green-600 dark:text-green-400">
                          <AnimatedCounter value={cleanDays} duration={1.5} />
                        </div>
                      </PulseElement>
                      <FloatingElement>
                        <Flame className="absolute -top-2 -right-2 h-8 w-8 text-orange-500" />
                      </FloatingElement>
                    </div>
                  </div>
                  <FadeIn delay={0.3}>
                    <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-4">
                      {cleanDays === 1 ? "يوم واحد" : `${cleanDays} أيام`}
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">من الطهارة والقوة</p>
                  </FadeIn>
                  <SlideInRight delay={0.5}>
                    <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                      <p className="text-lg font-semibold text-green-700 dark:text-green-300">
                        {getMilestoneMessage(cleanDays)}
                      </p>
                    </div>
                  </SlideInRight>
                </CardContent>
              </Card>
            </ScaleIn>

            {/* Motivational Verse */}
            <SlideInLeft delay={0.2}>
              <Card className="bg-white/90 dark:bg-slate-800/90 border-amber-200 dark:border-amber-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center py-8">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-6 rounded-lg">
                    <p className="text-2xl text-amber-800 dark:text-amber-200 font-semibold mb-2 arabic-text">
                      {getMotivationalVerse(cleanDays).arabic}
                    </p>
                    <p className="text-amber-700 dark:text-amber-300">{getMotivationalVerse(cleanDays).reference}</p>
                  </div>
                </CardContent>
              </Card>
            </SlideInLeft>

            {/* Progress Milestones */}
            <StaggerContainer className="grid md:grid-cols-3 gap-6">
              <StaggerItem>
                <Card
                  className={`transition-all duration-300 hover:shadow-lg ${
                    cleanDays >= 7
                      ? "bg-green-100 dark:bg-green-900/30 border-green-300 transform scale-105"
                      : "bg-gray-100 dark:bg-gray-800 border-gray-300"
                  }`}
                >
                  <CardContent className="text-center py-6">
                    <Trophy
                      className={`h-8 w-8 mx-auto mb-2 transition-colors duration-300 ${
                        cleanDays >= 7 ? "text-green-600" : "text-gray-400"
                      }`}
                    />
                    <h3 className="font-bold mb-1">أسبوع واحد</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">7 أيام</p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card
                  className={`transition-all duration-300 hover:shadow-lg ${
                    cleanDays >= 30
                      ? "bg-blue-100 dark:bg-blue-900/30 border-blue-300 transform scale-105"
                      : "bg-gray-100 dark:bg-gray-800 border-gray-300"
                  }`}
                >
                  <CardContent className="text-center py-6">
                    <Trophy
                      className={`h-8 w-8 mx-auto mb-2 transition-colors duration-300 ${
                        cleanDays >= 30 ? "text-blue-600" : "text-gray-400"
                      }`}
                    />
                    <h3 className="font-bold mb-1">شهر كامل</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">30 يوم</p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card
                  className={`transition-all duration-300 hover:shadow-lg ${
                    cleanDays >= 100
                      ? "bg-purple-100 dark:bg-purple-900/30 border-purple-300 transform scale-105"
                      : "bg-gray-100 dark:bg-gray-800 border-gray-300"
                  }`}
                >
                  <CardContent className="text-center py-6">
                    <Trophy
                      className={`h-8 w-8 mx-auto mb-2 transition-colors duration-300 ${
                        cleanDays >= 100 ? "text-purple-600" : "text-gray-400"
                      }`}
                    />
                    <h3 className="font-bold mb-1">مئة يوم</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">100 يوم</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            </StaggerContainer>

            {/* Reset Section */}
            <FadeIn delay={0.8}>
              <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="text-center py-8">
                  <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-4">
                    هل تحتاج للبدء من جديد؟
                  </h3>
                  <p className="text-orange-700 dark:text-orange-300 mb-6">
                    لا تيأس، التوبة باب مفتوح دائماً. ابدأ من جديد بعزيمة أقوى.
                  </p>
                  <Button
                    onClick={resetChallenge}
                    variant="outline"
                    className="border-orange-300 text-orange-700 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-400 dark:hover:bg-orange-900/20 transform hover:scale-105 transition-transform duration-200"
                  >
                    <RefreshCw className="ml-2 h-4 w-4" />
                    ابدأ من جديد
                  </Button>
                </CardContent>
              </Card>
            </FadeIn>

            {/* Challenge Info */}
            <SlideInRight delay={1.0}>
              <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
                <Calendar className="h-4 w-4" />
                <AlertDescription className="text-blue-800 dark:text-blue-200">
                  <strong>بدأت التحدي في:</strong>{" "}
                  {startDate?.toLocaleDateString("ar-SA", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </AlertDescription>
              </Alert>
            </SlideInRight>
          </div>
        )}
      </div>
    </PageTransition>
  )
}
