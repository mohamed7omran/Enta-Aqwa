"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Heart, Shield, Target, Lightbulb, Book, Users } from "lucide-react"
import Link from "next/link"
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

export default function HomePage() {
  return (
    <PageTransition className="min-h-screen bg-gradient-to-br from-amber-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-12">
            <FloatingElement className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-blue-600 dark:text-blue-400" />
            </FloatingElement>

            <FadeIn delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
                أنا أقوى من شهواتي
              </h1>
            </FadeIn>

            <SlideInRight delay={0.4}>
              <div className="bg-blue-100 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
                <p className="text-xl md:text-2xl text-blue-800 dark:text-blue-200 font-semibold mb-2">
                  "وَالَّذِينَ هُمْ لِفُرُوجِهِمْ حَافِظُونَ"
                </p>
                <p className="text-lg text-blue-700 dark:text-blue-300">سورة المؤمنون - آية 5</p>
              </div>
            </SlideInRight>

            <SlideInLeft delay={0.6}>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                مرحباً بك في رحلة التطهر والقوة الروحية. هنا ستجد كل ما تحتاجه لبناء إرادة قوية بالإيمان والعزيمة
              </p>
            </SlideInLeft>
          </div>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={0.8}>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">اختر قسمك المفضل</h2>
              <p className="text-slate-600 dark:text-slate-300">ابدأ رحلتك من هنا</p>
            </div>
          </FadeIn>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quran Card */}
            <StaggerItem>
              <Link href="/quran">
                <Card className="bg-white/80 dark:bg-slate-800/80 border-amber-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Book className="h-12 w-12 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl text-slate-800 dark:text-white">القرآن الكريم</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      اقرأ وتدبر كلام الله العظيم مع التفسير والبحث
                    </p>
                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white transform hover:scale-105 transition-transform duration-200">
                      اقرأ الآن
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>

            {/* Azkar Card */}
            <StaggerItem>
              <Link href="/azkar">
                <Card className="bg-white/80 dark:bg-slate-800/80 border-amber-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <BookOpen className="h-12 w-12 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl text-slate-800 dark:text-white">أذكار اليوم</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      أذكار الصباح والمساء مع سنن يومية لتقوية الإيمان
                    </p>
                    <Button className="bg-green-600 hover:bg-green-700 text-white transform hover:scale-105 transition-transform duration-200">
                      ادخل الآن
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>

            {/* Recovery Tracker Card */}
            <StaggerItem>
              <Link href="/tracker">
                <Card className="bg-white/80 dark:bg-slate-800/80 border-amber-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl text-slate-800 dark:text-white">متابع التعافي</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">تابع تقدمك اليومي وابدأ تحدي جديد للتطهر</p>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105 transition-transform duration-200">
                      ابدأ التحدي
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>

            {/* Stories Card */}
            <StaggerItem>
              <Link href="/stories">
                <Card className="bg-white/80 dark:bg-slate-800/80 border-amber-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Heart className="h-12 w-12 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl text-slate-800 dark:text-white">قصص ملهمة</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      قصص الأنبياء والصحابة والتابعين في مقاومة الفتن
                    </p>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-transform duration-200">
                      اقرأ القصص
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>

            {/* Awareness Card */}
            <StaggerItem>
              <Link href="/awareness">
                <Card className="bg-white/80 dark:bg-slate-800/80 border-amber-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <Lightbulb className="h-12 w-12 text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-2xl text-slate-800 dark:text-white">قسم التوعية</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">مقالات ونصائح للبقاء على الطريق المستقيم</p>
                    <Button className="bg-orange-600 hover:bg-orange-700 text-white transform hover:scale-105 transition-transform duration-200">
                      تعلم المزيد
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>

            {/* Community Card */}
            <StaggerItem>
              <Card className="bg-white/80 dark:bg-slate-800/80 border-amber-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Users className="h-12 w-12 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800 dark:text-white">مجتمع الدعم</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-600 dark:text-slate-300 mb-4">انضم لمجتمع من الإخوة في نفس الرحلة</p>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white transform hover:scale-105 transition-transform duration-200">
                    قريباً
                  </Button>
                </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto max-w-4xl">
          <StaggerContainer className="grid md:grid-cols-3 gap-8 text-center">
            <StaggerItem>
              <ScaleIn delay={1.2}>
                <div>
                  <PulseElement>
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      <AnimatedCounter value={1000} />+
                    </div>
                  </PulseElement>
                  <p className="text-slate-600 dark:text-slate-300">مستخدم نشط</p>
                </div>
              </ScaleIn>
            </StaggerItem>

            <StaggerItem>
              <ScaleIn delay={1.4}>
                <div>
                  <PulseElement>
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                      <AnimatedCounter value={50} />+
                    </div>
                  </PulseElement>
                  <p className="text-slate-600 dark:text-slate-300">قصة ملهمة</p>
                </div>
              </ScaleIn>
            </StaggerItem>

            <StaggerItem>
              <ScaleIn delay={1.6}>
                <div>
                  <PulseElement>
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
                  </PulseElement>
                  <p className="text-slate-600 dark:text-slate-300">دعم متواصل</p>
                </div>
              </ScaleIn>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </PageTransition>
  )
}
