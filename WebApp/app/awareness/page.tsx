"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Lightbulb, AlertTriangle, Heart, Brain, Shield, BookOpen, Play } from "lucide-react"

export default function AwarenessPage() {
  const articles = [
    {
      id: 1,
      title: "الأضرار النفسية والجسدية للعادة السرية",
      category: "الأضرار",
      icon: AlertTriangle,
      summary: "تعرف على الأضرار الحقيقية للعادة السرية على الصحة النفسية والجسدية",
      content: `
        الأضرار النفسية:
        • الشعور بالذنب والندم المستمر
        • انخفاض الثقة بالنفس
        • القلق والاكتئاب
        • العزلة الاجتماعية
        • ضعف التركيز والذاكرة
        
        الأضرار الجسدية:
        • ضعف عام في الجسم
        • مشاكل في النوم
        • آلام في الظهر والمفاصل
        • ضعف في البصر
        • مشاكل في الجهاز التناسلي
        
        الأضرار الروحية:
        • البعد عن الله تعالى
        • ضعف في العبادة
        • قسوة القلب
        • ضعف الإيمان
      `,
      tips: [
        "اطلب المساعدة من الله بالدعاء",
        "احرص على الوضوء دائماً",
        "اشغل وقتك بالعبادة والذكر",
        "تجنب الخلوة والفراغ",
      ],
    },
    {
      id: 2,
      title: "فوائد التوقف عن العادة السرية",
      category: "الفوائد",
      icon: Heart,
      summary: "اكتشف الفوائد العظيمة للتوقف عن هذه العادة على حياتك",
      content: `
        الفوائد النفسية:
        • زيادة الثقة بالنفس
        • تحسن المزاج والسعادة
        • قوة الإرادة والعزيمة
        • تحسن العلاقات الاجتماعية
        • زيادة التركيز والإنتاجية
        
        الفوائد الجسدية:
        • زيادة الطاقة والحيوية
        • تحسن جودة النوم
        • قوة الجسم والعضلات
        • تحسن صحة البشرة
        • تحسن الصحة العامة
        
        الفوائد الروحية:
        • القرب من الله تعالى
        • قوة الإيمان
        • حلاوة العبادة
        • راحة الضمير
        • البركة في الحياة
      `,
      tips: [
        "احتفل بكل إنجاز صغير",
        "اكتب يومياتك لتتابع التحسن",
        "شارك نجاحك مع من تثق بهم",
        "استمر في الدعاء والشكر",
      ],
    },
    {
      id: 3,
      title: "كيفية مقاومة الرغبة والشهوة",
      category: "العلاج",
      icon: Shield,
      summary: "طرق عملية وفعالة لمقاومة الرغبة والتغلب على الشهوة",
      content: `
        الطرق الروحية:
        • الاستعاذة بالله من الشيطان
        • قراءة القرآن والأذكار
        • الصلاة والدعاء
        • الصوم لتهذيب النفس
        • تذكر الآخرة والحساب
        
        الطرق العملية:
        • ممارسة الرياضة بانتظام
        • تجنب المثيرات والمحفزات
        • تغيير البيئة والمكان
        • الانشغال بأنشطة مفيدة
        • طلب المساعدة من الأصدقاء
        
        الطرق النفسية:
        • تحديد الأهداف الواضحة
        • مكافأة النفس عند النجاح
        • تعلم تقنيات الاسترخاء
        • التفكير الإيجابي
        • بناء عادات صحية جديدة
      `,
      tips: [
        "اجعل هاتفك بعيداً عنك عند النوم",
        "املأ وقت فراغك بأنشطة مفيدة",
        "اطلب الدعم من الأصدقاء الصالحين",
        "تذكر أهدافك وأحلامك دائماً",
      ],
    },
    {
      id: 4,
      title: "بناء عادات إيجابية بديلة",
      category: "التطوير",
      icon: Brain,
      summary: "كيفية بناء عادات إيجابية تحل محل العادات السلبية",
      content: `
        عادات روحية:
        • قراءة القرآن يومياً
        • الذكر والتسبيح
        • الصلاة في وقتها
        • الدعاء والاستغفار
        • قيام الليل
        
        عادات جسدية:
        • ممارسة الرياضة
        • المشي في الطبيعة
        • تناول طعام صحي
        • شرب الماء بكثرة
        • النوم المبكر
        
        عادات عقلية:
        • القراءة والتعلم
        • حل الألغاز والألعاب الذهنية
        • تعلم مهارات جديدة
        • الكتابة والتدوين
        • التأمل والتفكر
        
        عادات اجتماعية:
        • قضاء وقت مع الأصدقاء
        • مساعدة الآخرين
        • المشاركة في الأنشطة الخيرية
        • تعلم مهارات التواصل
        • بناء علاقات إيجابية
      `,
      tips: [
        "ابدأ بعادة واحدة فقط",
        "اجعل العادة سهلة في البداية",
        "اربط العادة الجديدة بعادة موجودة",
        "تتبع تقدمك يومياً",
      ],
    },
  ]

  const [selectedArticle, setSelectedArticle] = React.useState<(typeof articles)[0] | null>(null)

  const motivationalVideos = [
    {
      title: "كيف تتوب من العادة السرية - الشيخ محمد العريفي",
      duration: "15:30",
      views: "2.5M",
    },
    {
      title: "قصة شاب تاب من الإدمان - مؤثر جداً",
      duration: "12:45",
      views: "1.8M",
    },
    {
      title: "فوائد ترك العادة السرية - تجربة شخصية",
      duration: "20:15",
      views: "950K",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Lightbulb className="h-12 w-12 text-orange-600 dark:text-orange-400" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">قسم التوعية</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">مقالات ونصائح للبقاء على الطريق المستقيم</p>
        </div>

        {!selectedArticle ? (
          <div className="space-y-12">
            {/* Articles Grid */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                المقالات التوعوية
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {articles.map((article) => {
                  const IconComponent = article.icon
                  return (
                    <Card
                      key={article.id}
                      className="bg-white/90 dark:bg-slate-800/90 border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <Badge
                            variant="secondary"
                            className={`${
                              article.category === "الأضرار"
                                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                : article.category === "الفوائد"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                  : article.category === "العلاج"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                    : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                            }`}
                          >
                            {article.category}
                          </Badge>
                          <IconComponent className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                        </div>
                        <CardTitle className="text-xl text-slate-800 dark:text-white mb-2">{article.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{article.summary}</p>
                        <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                          اقرأ المقال كاملاً
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </section>

            {/* Videos Section */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 flex items-center gap-3">
                <Play className="h-6 w-6 text-red-600 dark:text-red-400" />
                فيديوهات تحفيزية
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {motivationalVideos.map((video, index) => (
                  <Card
                    key={index}
                    className="bg-white/90 dark:bg-slate-800/90 border-red-200 dark:border-red-800 hover:shadow-lg transition-shadow cursor-pointer"
                  >
                    <CardContent className="p-6">
                      <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-4 mb-4 flex items-center justify-center">
                        <Play className="h-12 w-12 text-red-600 dark:text-red-400" />
                      </div>
                      <h3 className="font-bold text-slate-800 dark:text-white mb-2 leading-tight">{video.title}</h3>
                      <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                        <span>{video.duration}</span>
                        <span>{video.views} مشاهدة</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* Full Article View */
          <div className="max-w-4xl mx-auto">
            <Button onClick={() => setSelectedArticle(null)} variant="outline" className="mb-6">
              ← العودة للمقالات
            </Button>

            <Card className="bg-white/90 dark:bg-slate-800/90 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <selectedArticle.icon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  <Badge
                    variant="secondary"
                    className={`${
                      selectedArticle.category === "الأضرار"
                        ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                        : selectedArticle.category === "الفوائد"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : selectedArticle.category === "العلاج"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                    }`}
                  >
                    {selectedArticle.category}
                  </Badge>
                </div>
                <CardTitle className="text-3xl text-slate-800 dark:text-white mb-4">{selectedArticle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-lg max-w-none text-slate-700 dark:text-slate-300 mb-8">
                  {selectedArticle.content.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-4">نصائح عملية:</h3>
                  <ul className="space-y-2">
                    {selectedArticle.tips.map((tip, index) => (
                      <li key={index} className="text-blue-700 dark:text-blue-300 flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
