"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { BookOpen, Search, ChevronRight, ChevronLeft, Volume2, Info, ArrowRight } from "lucide-react"

// Sample Quran data - In a real app, this would come from an API
const quranData = [
  {
    number: 1,
    name: "الفاتحة",
    englishName: "Al-Fatihah",
    revelationType: "مكية",
    numberOfAyahs: 7,
    verses: [
      {
        number: 1,
        arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translation: "بسم الله الرحمن الرحيم",
        tafsir: "افتتاح الكلام بذكر اسم الله تعالى تبركاً وتيمناً، والرحمن الرحيم صفتان من صفات الله تدلان على سعة رحمته",
      },
      {
        number: 2,
        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        translation: "الحمد لله رب العالمين",
        tafsir: "الثناء والشكر لله وحده، فهو رب جميع المخلوقات ومالكها ومدبر أمورها",
      },
      {
        number: 3,
        arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
        translation: "الرحمن الرحيم",
        tafsir: "تأكيد على صفة الرحمة الإلهية، فالرحمن رحمة عامة لجميع الخلق، والرحيم رحمة خاصة بالمؤمنين",
      },
      {
        number: 4,
        arabic: "مَالِكِ يَوْمِ الدِّينِ",
        translation: "مالك يوم الدين",
        tafsir: "الله تعالى هو المالك الحقيقي ليوم القيامة، يوم الجزاء والحساب",
      },
      {
        number: 5,
        arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        translation: "إياك نعبد وإياك نستعين",
        tafsir: "إقرار بالعبودية لله وحده، وطلب العون والمساعدة منه سبحانه في جميع الأمور",
      },
      {
        number: 6,
        arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        translation: "اهدنا الصراط المستقيم",
        tafsir: "دعاء بطلب الهداية إلى الطريق المستقيم، وهو دين الإسلام والعمل بما يرضي الله",
      },
      {
        number: 7,
        arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        translation: "صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين",
        tafsir: "طلب الهداية لطريق الأنبياء والصالحين، وتجنب طريق من غضب الله عليهم أو ضلوا عن الحق",
      },
    ],
  },
  {
    number: 2,
    name: "البقرة",
    englishName: "Al-Baqarah",
    revelationType: "مدنية",
    numberOfAyahs: 286,
    verses: [
      {
        number: 1,
        arabic: "الم",
        translation: "الم",
        tafsir: "من الحروف المقطعة التي افتتحت بها بعض السور، والله أعلم بمرادها",
      },
      {
        number: 2,
        arabic: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ",
        translation: "ذلك الكتاب لا ريب فيه هدى للمتقين",
        tafsir: "هذا القرآن الكريم كتاب لا شك فيه ولا ارتياب، وهو هداية ونور للمتقين الذين يخافون الله",
      },
      {
        number: 3,
        arabic: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
        translation: "الذين يؤمنون بالغيب ويقيمون الصلاة ومما رزقناهم ينفقون",
        tafsir: "صفات المتقين: الإيمان بالغيب، إقامة الصلاة، والإنفاق مما رزقهم الله في سبيله",
      },
      {
        number: 255,
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
        translation: "الله لا إله إلا هو الحي القيوم لا تأخذه سنة ولا نوم",
        tafsir:
          "آية الكرسي: تؤكد وحدانية الله وأنه الحي الذي لا يموت، القيوم الذي لا يحتاج لأحد، لا يصيبه نعاس ولا نوم",
      },
    ],
  },
  {
    number: 3,
    name: "آل عمران",
    englishName: "Aal-E-Imran",
    revelationType: "مدنية",
    numberOfAyahs: 200,
    verses: [
      {
        number: 1,
        arabic: "الم",
        translation: "الم",
        tafsir: "من الحروف المقطعة التي افتتحت بها بعض السور",
      },
      {
        number: 2,
        arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
        translation: "الله لا إله إلا هو الحي القيوم",
        tafsir: "تأكيد على وحدانية الله وأنه الحي الذي لا يموت والقيوم الذي يقوم بأمر كل شيء",
      },
    ],
  },
  {
    number: 112,
    name: "الإخلاص",
    englishName: "Al-Ikhlas",
    revelationType: "مكية",
    numberOfAyahs: 4,
    verses: [
      {
        number: 1,
        arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        translation: "قل هو الله أحد",
        tafsir: "إعلان وحدانية الله المطلقة، فهو الواحد الأحد الذي لا شريك له",
      },
      {
        number: 2,
        arabic: "اللَّهُ الصَّمَدُ",
        translation: "الله الصمد",
        tafsir: "الله هو الصمد الذي تصمد إليه الخلائق في حوائجها، وهو الذي لا يحتاج إلى أحد",
      },
      {
        number: 3,
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
        translation: "لم يلد ولم يولد",
        tafsir: "تنزيه الله عن الولادة والوالدية، فهو منزه عن صفات المخلوقين",
      },
      {
        number: 4,
        arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
        translation: "ولم يكن له كفواً أحد",
        tafsir: "لا يوجد أحد مساوٍ لله أو مثيل له، فهو فريد في ذاته وصفاته وأفعاله",
      },
    ],
  },
]

export default function QuranPage() {
  const [selectedSurah, setSelectedSurah] = useState<(typeof quranData)[0] | null>(null)
  const [selectedVerse, setSelectedVerse] = useState<(typeof quranData)[0]["verses"][0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [showTafsir, setShowTafsir] = useState(false)

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []

    const results: Array<{
      surah: (typeof quranData)[0]
      verse: (typeof quranData)[0]["verses"][0]
    }> = []

    quranData.forEach((surah) => {
      surah.verses.forEach((verse) => {
        if (
          verse.arabic.includes(searchQuery) ||
          verse.translation.includes(searchQuery) ||
          verse.tafsir.includes(searchQuery)
        ) {
          results.push({ surah, verse })
        }
      })
    })

    return results
  }, [searchQuery])

  const handleVerseClick = (verse: (typeof quranData)[0]["verses"][0]) => {
    setSelectedVerse(verse)
    setShowTafsir(true)
  }

  const navigateToSurah = (direction: "next" | "prev") => {
    if (!selectedSurah) return

    const currentIndex = quranData.findIndex((s) => s.number === selectedSurah.number)
    const newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1

    if (newIndex >= 0 && newIndex < quranData.length) {
      setSelectedSurah(quranData[newIndex])
      setShowTafsir(false)
      setSelectedVerse(null)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">القرآن الكريم</h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">اقرأ وتدبر كلام الله العظيم</p>
        </div>

        {/* Search Bar */}
        <Card className="bg-white/90 dark:bg-slate-800/90 border-emerald-200 dark:border-emerald-800 mb-8">
          <CardContent className="p-6">
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="ابحث في القرآن الكريم..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-right bg-white dark:bg-slate-700 border-emerald-200 dark:border-slate-600 text-lg py-3"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 px-8">
                <Search className="h-5 w-5 ml-2" />
                بحث
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Search Results */}
        {searchQuery && searchResults.length > 0 && (
          <Card className="bg-white/90 dark:bg-slate-800/90 border-emerald-200 dark:border-emerald-800 mb-8">
            <CardHeader>
              <CardTitle className="text-emerald-700 dark:text-emerald-300">
                نتائج البحث ({searchResults.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <div
                    key={index}
                    className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg cursor-pointer hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-colors"
                    onClick={() => {
                      setSelectedSurah(result.surah)
                      setSelectedVerse(result.verse)
                      setShowTafsir(true)
                      setSearchQuery("")
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300"
                      >
                        {result.surah.name} - آية {result.verse.number}
                      </Badge>
                    </div>
                    <p className="text-lg text-slate-800 dark:text-white mb-2 arabic-text leading-relaxed">
                      {result.verse.arabic}
                    </p>
                    <p className="text-slate-600 dark:text-slate-300">{result.verse.translation}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {!selectedSurah ? (
          /* Surah List */
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8">فهرس السور</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quranData.map((surah) => (
                <Card
                  key={surah.number}
                  className="bg-white/90 dark:bg-slate-800/90 border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => setSelectedSurah(surah)}
                >
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge
                        variant="secondary"
                        className={`${
                          surah.revelationType === "مكية"
                            ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        }`}
                      >
                        {surah.revelationType}
                      </Badge>
                      <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{surah.number}</span>
                    </div>
                    <CardTitle className="text-xl text-slate-800 dark:text-white text-center">{surah.name}</CardTitle>
                    <p className="text-center text-slate-600 dark:text-slate-300 text-sm">{surah.englishName}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-slate-600 dark:text-slate-300 mb-4">{surah.numberOfAyahs} آية</p>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">اقرأ السورة</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          /* Surah View */
          <div>
            {/* Surah Header */}
            <div className="flex items-center justify-between mb-8">
              <Button onClick={() => setSelectedSurah(null)} variant="outline" className="flex items-center gap-2">
                <ArrowRight className="h-4 w-4" />
                العودة للفهرس
              </Button>

              <div className="flex items-center gap-4">
                <Button
                  onClick={() => navigateToSurah("prev")}
                  variant="outline"
                  disabled={selectedSurah.number === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronRight className="h-4 w-4" />
                  السورة السابقة
                </Button>
                <Button
                  onClick={() => navigateToSurah("next")}
                  variant="outline"
                  disabled={selectedSurah.number === quranData[quranData.length - 1].number}
                  className="flex items-center gap-2"
                >
                  السورة التالية
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Surah Info */}
            <Card className="bg-white/90 dark:bg-slate-800/90 border-emerald-200 dark:border-emerald-800 mb-8">
              <CardContent className="p-8 text-center">
                <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">سورة {selectedSurah.name}</h2>
                <div className="flex justify-center items-center gap-6 text-slate-600 dark:text-slate-300">
                  <span className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className={`${
                        selectedSurah.revelationType === "مكية"
                          ? "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      }`}
                    >
                      {selectedSurah.revelationType}
                    </Badge>
                  </span>
                  <span>{selectedSurah.numberOfAyahs} آية</span>
                  <span>رقم {selectedSurah.number}</span>
                </div>
              </CardContent>
            </Card>

            {/* Verses */}
            <div className="space-y-6">
              {selectedSurah.verses.map((verse) => (
                <Card
                  key={verse.number}
                  className="bg-white/90 dark:bg-slate-800/90 border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleVerseClick(verse)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold">
                          {verse.number}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-emerald-600 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30"
                        >
                          <Volume2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-slate-500 dark:text-slate-400"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleVerseClick(verse)
                        }}
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="text-center mb-4">
                      <p className="text-2xl md:text-3xl text-slate-800 dark:text-white leading-relaxed arabic-text mb-4">
                        {verse.arabic}
                      </p>
                      <p className="text-lg text-slate-600 dark:text-slate-300">{verse.translation}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Tafsir Modal */}
        {showTafsir && selectedVerse && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="bg-white dark:bg-slate-800 border-emerald-200 dark:border-emerald-800 max-w-4xl w-full max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-2xl text-slate-800 dark:text-white">
                    التفسير - آية {selectedVerse.number}
                  </CardTitle>
                  <Button
                    onClick={() => setShowTafsir(false)}
                    variant="ghost"
                    size="sm"
                    className="text-slate-500 dark:text-slate-400"
                  >
                    ✕
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Verse */}
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg text-center">
                    <p className="text-2xl md:text-3xl text-slate-800 dark:text-white leading-relaxed arabic-text mb-4">
                      {selectedVerse.arabic}
                    </p>
                    <p className="text-lg text-slate-600 dark:text-slate-300">{selectedVerse.translation}</p>
                  </div>

                  {/* Tafsir */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                      التفسير
                    </h3>
                    <div className="bg-slate-50 dark:bg-slate-700/50 p-6 rounded-lg">
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                        {selectedVerse.tafsir}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-center gap-4 pt-4">
                    <Button variant="outline" className="flex items-center gap-2">
                      <Volume2 className="h-4 w-4" />
                      استمع للآية
                    </Button>
                    <Button
                      onClick={() => setShowTafsir(false)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white"
                    >
                      إغلاق
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* No Search Results */}
        {searchQuery && searchResults.length === 0 && (
          <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800">
            <Search className="h-4 w-4" />
            <AlertDescription className="text-amber-800 dark:text-amber-200">
              لم نجد نتائج لبحثك "{searchQuery}". جرب كلمات أخرى أو تأكد من الإملاء.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}
