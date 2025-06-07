"use client"

import React from "react"
import type { Icon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Star, Crown } from "lucide-react"

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      title: "يوسف عليه السلام - مقاومة الفتنة",
      category: "الأنبياء",
      icon: Crown as Icon,
      summary: "كيف قاوم نبي الله يوسف فتنة امرأة العزيز وحافظ على عفته",
      quote: "قَالَ مَعَاذَ اللَّهِ إِنَّهُ رَبِّي أَحْسَنَ مَثْوَايَ",
      reference: "سورة يوسف - آية 23",
      lesson: "الاستعاذة بالله والتذكر بنعمه وسيلة للنجاة من الفتن",
      fullStory: `
        عندما راودت امرأة العزيز يوسف عليه السلام عن نفسه، لم يستسلم للشهوة رغم توفر كل الأسباب:
        
        • كان شاباً في ريعان الشباب
        • كان بعيداً عن أهله وقومه
        • كانت المرأة جميلة وذات مكانة
        • كان الباب مغلقاً ولا أحد يراهما
        
        لكنه اختار طاعة الله على طاعة الشهوة، وقال كلمته الخالدة: "معاذ الله إنه ربي أحسن مثواي"
        
        الدروس المستفادة:
        1. تذكر نعم الله عليك يقويك على مقاومة المعصية
        2. الاستعاذة بالله من أقوى وسائل الحماية
        3. تذكر أن الله يراك في كل مكان
        4. العفة والطهارة طريق إلى العزة والكرامة
      `,
    },
    {
      id: 2,
      title: "أبو بكر الصديق - قوة الإيمان",
      category: "الصحابة",
      icon: Star as Icon,
      summary: "كيف كان إيمان أبي بكر الصديق مثالاً في القوة والثبات",
      quote: "لو وُزن إيمان أبي بكر بإيمان الأمة لرجح إيمان أبي بكر",
      reference: "حديث شريف",
      lesson: "الإيمان القوي يجعل المؤمن يتغلب على كل الشهوات والفتن",
      fullStory: `
        كان أبو بكر الصديق رضي الله عنه مثالاً في قوة الإيمان والثبات على الحق:
        
        • صدق النبي صلى الله عليه وسلم في كل ما جاء به
        • لم يتردد لحظة واحدة في الإسلام
        • ضحى بماله وحياته في سبيل الله
        • كان أول من آمن من الرجال
        
        قوة إيمانه جعلته:
        - يقاوم كل الشبهات والشهوات
        - يثبت في أصعب المواقف
        - يكون قدوة للمؤمنين في كل العصور
        
        الدروس المستفادة:
        1. الإيمان القوي أساس مقاومة الفتن
        2. اليقين بالله يجعل كل صعب سهلاً
        3. الصحبة الصالحة تقوي الإيمان
        4. التضحية في سبيل الله تزيد الإيمان
      `,
    },
    {
      id: 3,
      title: "عمر بن الخطاب - التوبة النصوح",
      category: "الصحابة",
      icon: Heart as Icon,
      summary: "كيف تاب عمر بن الخطاب من الجاهلية وأصبح من أعظم المؤمنين",
      quote: "اللهم أعز الإسلام بأحب هذين الرجلين إليك: بأبي جهل أو بعمر بن الخطاب",
      reference: "دعاء النبي صلى الله عليه وسلم",
      lesson: "التوبة الصادقة تغير الإنسان من أسوأ حال إلى أحسن حال",
      fullStory: `
        كان عمر بن الخطاب رضي الله عنه من أشد الناس عداوة للإسلام، ولكن الله هداه:
        
        قبل الإسلام:
        • كان من أشد المعارضين للدعوة
        • كان يعذب المسلمين
        • خرج يوماً يريد قتل النبي صلى الله عليه وسلم
        
        لحظة التحول:
        • سمع القرآن في بيت أخته
        • تأثر بكلام الله العظيم
        • أسلم في نفس اللحظة
        
        بعد الإسلام:
        • أصبح من أقوى المدافعين عن الإسلام
        • كان الشيطان يفر من طريقه
        • أصبح ثاني الخلفاء الراشدين
        
        الدروس المستفادة:
        1. لا تيأس مهما كانت ذنوبك
        2. التوبة الصادقة تمحو كل الماضي
        3. الله يحب التوابين
        4. التغيير الحقيقي يبدأ من القلب
      `,
    },
    {
      id: 4,
      title: "الفضيل بن عياض - من قاطع طريق إلى عابد",
      category: "التابعين",
      icon: BookOpen as Icon,
      summary: "قصة توبة الفضيل بن عياض من قطع الطريق إلى العبادة والزهد",
      quote: "إذا لم تستطع قيام الليل وصيام النهار فاعلم أنك محروم مكبل بخطيئتك",
      reference: "الفضيل بن عياض",
      lesson: "مهما كان ماضيك مظلماً، باب التوبة مفتوح دائماً",
      fullStory: `
        كان الفضيل بن عياض قاطع طريق يسرق الناس ويخيفهم، ولكن الله هداه:
        
        حياته قبل التوبة:
        • كان يقطع الطريق على المسافرين
        • كان يسرق ويعتدي على الناس
        • كان غارقاً في المعاصي والذنوب
        
        لحظة التوبة:
        • سمع آية من القرآن: "ألم يأن للذين آمنوا أن تخشع قلوبهم لذكر الله"
        • تأثر تأثراً شديداً
        • تاب توبة نصوحاً في نفس اللحظة
        
        حياته بعد التوبة:
        • أصبح من أعظم العباد والزهاد
        • كان يقوم الليل ويصوم النهار
        • أصبح مرجعاً في العلم والدين
        • كان الناس يأتون إليه من كل مكان للتعلم
        
        الدروس المستفادة:
        1. الله يقبل توبة كل تائب مهما كانت ذنوبه
        2. التوبة الصادقة تغير الإنسان تماماً
        3. من تاب من ذنب كان كمن لا ذنب له
        4. العبرة بالخواتيم وليس بالبدايات
      `,
    },
  ]

  const [selectedStory, setSelectedStory] = React.useState<(typeof stories)[0] | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Heart className="h-12 w-12 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">قصص ملهمة</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">تعلم من قصص الأنبياء والصالحين</p>
        </div>

        {!selectedStory ? (
          /* Stories Grid */
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story) => {
              const IconComponent = story.icon
              return (
                <Card
                  key={story.id}
                  className="bg-white/90 dark:bg-slate-800/90 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedStory(story)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <Badge
                        variant="secondary"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                      >
                        {story.category}
                      </Badge>
                      <IconComponent className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle className="text-xl text-slate-800 dark:text-white mb-2">{story.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">{story.summary}</p>
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg mb-4">
                      <p className="text-purple-800 dark:text-purple-200 font-semibold mb-1 arabic-text">
                        "{story.quote}"
                      </p>
                      <p className="text-sm text-purple-700 dark:text-purple-300">{story.reference}</p>
                    </div>
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg mb-4">
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        <strong>الدرس:</strong> {story.lesson}
                      </p>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">اقرأ القصة كاملة</Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        ) : (
          /* Full Story View */
          <div className="max-w-4xl mx-auto">
            <Button onClick={() => setSelectedStory(null)} variant="outline" className="mb-6">
              ← العودة للقصص
            </Button>

            <Card className="bg-white/90 dark:bg-slate-800/90 border-purple-200 dark:border-purple-800">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <selectedStory.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                  >
                    {selectedStory.category}
                  </Badge>
                </div>
                <CardTitle className="text-3xl text-slate-800 dark:text-white mb-4">{selectedStory.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-purple-100 dark:bg-purple-900/30 p-6 rounded-lg mb-8">
                  <p className="text-xl text-purple-800 dark:text-purple-200 font-semibold mb-2 arabic-text">
                    "{selectedStory.quote}"
                  </p>
                  <p className="text-purple-700 dark:text-purple-300">{selectedStory.reference}</p>
                </div>

                <div className="prose prose-lg max-w-none text-slate-700 dark:text-slate-300">
                  {selectedStory.fullStory.split("\n").map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-200 mb-3">الدرس الرئيسي:</h3>
                  <p className="text-amber-700 dark:text-amber-300 text-lg">{selectedStory.lesson}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
