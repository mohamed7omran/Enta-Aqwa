"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Sun, Moon, Star } from "lucide-react"
import {
  FadeIn,
  SlideInRight,
  SlideInLeft,
  StaggerContainer,
  StaggerItem,
  FloatingElement,
  PageTransition,
} from "@/components/animations"

export default function AzkarPage() {
  const morningAzkar = [
    {
      arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
      translation: "أصبحنا وأصبح الملك لله، والحمد لله",
      count: "مرة واحدة",
    },
    {
      arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ",
      translation: "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت وإليك النشور",
      count: "مرة واحدة",
    },
    {
      arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
      translation: "سبحان الله وبحمده",
      count: "100 مرة",
    },
    {
      arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
      translation: "لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير",
      count: "10 مرات",
    },
  ]

  const eveningAzkar = [
    {
      arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ",
      translation: "أمسينا وأمسى الملك لله، والحمد لله",
      count: "مرة واحدة",
    },
    {
      arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا وَبِكَ أَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ",
      translation: "اللهم بك أمسينا وبك أصبحنا وبك نحيا وبك نموت وإليك المصير",
      count: "مرة واحدة",
    },
    {
      arabic: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ",
      translation: "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه",
      count: "3 مرات",
    },
  ]

  const dailySunnah = {
    title: "سنة اليوم: الوضوء قبل النوم",
    description: "قال رسول الله صلى الله عليه وسلم: 'إذا أتيت مضجعك فتوضأ وضوءك للصلاة'",
    benefit: "الوضوء قبل النوم يطهر النفس ويجلب البركة في النوم",
  }

  return (
    <PageTransition className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <FloatingElement className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-green-600 dark:text-green-400" />
          </FloatingElement>
          <FadeIn>
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">أذكار اليوم</h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">اذكر الله يذكرك</p>
          </FadeIn>
        </div>

        {/* Morning Azkar */}
        <section className="mb-16">
          <SlideInRight>
            <div className="flex items-center gap-3 mb-8">
              <Sun className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">أذكار الصباح</h2>
            </div>
          </SlideInRight>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {morningAzkar.map((zikr, index) => (
              <StaggerItem key={index}>
                <Card className="bg-white/90 dark:bg-slate-800/90 border-yellow-200 dark:border-yellow-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge
                        variant="secondary"
                        className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                      >
                        {zikr.count}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-slate-800 dark:text-white leading-relaxed mb-4 arabic-text">
                      {zikr.arabic}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">{zikr.translation}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Evening Azkar */}
        <section className="mb-16">
          <SlideInLeft>
            <div className="flex items-center gap-3 mb-8">
              <Moon className="h-8 w-8 text-blue-500" />
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">أذكار المساء</h2>
            </div>
          </SlideInLeft>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {eveningAzkar.map((zikr, index) => (
              <StaggerItem key={index}>
                <Card className="bg-white/90 dark:bg-slate-800/90 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      >
                        {zikr.count}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-slate-800 dark:text-white leading-relaxed mb-4 arabic-text">
                      {zikr.arabic}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">{zikr.translation}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* Daily Sunnah */}
        <section>
          <SlideInRight delay={0.4}>
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-8 w-8 text-purple-500" />
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">سنة اليوم</h2>
            </div>
          </SlideInRight>

          <FadeIn delay={0.6}>
            <Card className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800 dark:text-purple-200">{dailySunnah.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-purple-700 dark:text-purple-300 mb-4 arabic-text">
                  {dailySunnah.description}
                </p>
                <div className="bg-white/50 dark:bg-slate-800/50 p-4 rounded-lg">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>الفائدة:</strong> {dailySunnah.benefit}
                  </p>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </section>
      </div>
    </PageTransition>
  )
}
