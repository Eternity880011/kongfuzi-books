import Image from 'next/image'
import { BookOpen, Star } from 'lucide-react'
import FeaturedSection from '../components/books/FeaturedSection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 直播拍卖区域 */}
      <section className="relative h-[400px] bg-amber-50">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/id/21/1920/1080"
            alt="直播拍卖"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block bg-red-600 text-sm px-3 py-1 rounded-full mb-4">
              正在直播
            </div>
            <h1 className="text-4xl font-bold mb-4">明清善本专场拍卖会</h1>
            <p className="text-xl mb-6 text-gray-200">
              超过200件珍贵古籍正在等��您的竞拍
            </p>
            <button className="bg-amber-600 text-white px-6 py-3 rounded-md hover:bg-amber-700">
              立即参与
            </button>
          </div>
        </div>
      </section>

      {/* 特色书籍区域 */}
      <FeaturedSection />

      {/* 推荐区域 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-2">
            <Star className="text-amber-600" />
            根据您的兴趣推荐
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i}
                className="bg-white border border-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={`https://picsum.photos/id/${40 + i}/400/300`}
                    alt={`推荐书籍 ${i}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">明清文学</span>
                </div>
                <h3 className="font-semibold text-gray-800">
                  珍品推荐 #{i}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 