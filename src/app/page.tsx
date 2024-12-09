import Image from 'next/image'
import { BookOpen, Camera, TrendingUp } from 'lucide-react'
import FeaturedSection from './components/books/FeaturedSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 英雄区域 */}
      <section className="relative h-[500px] bg-amber-50">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/id/20/1920/1080"
            alt="古籍善本"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">发现珍贵古籍善本</h1>
            <p className="text-xl mb-8">
              探索数千年文化瑰宝，寻找您的心仪藏品
            </p>
            <div className="flex space-x-4">
              <button className="bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                浏览藏品
              </button>
              <button className="bg-white text-gray-800 px-8 py-3 rounded-md hover:bg-gray-100 flex items-center gap-2">
                <Camera className="w-5 h-5" />
                直拍活动
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 活动公告 */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-600">
              <TrendingUp className="w-5 h-5" />
              <span className="font-semibold">最新活动：</span>
              <span className="text-gray-600">
                &ldquo;明清善本专场&rdquo; 直播预告 - 12月20日 14:00
              </span>
            </div>
            <a href="/events" className="text-amber-600 hover:text-amber-700">
              查看更多 →
            </a>
          </div>
        </div>
      </section>

      {/* 特色书籍区域 */}
      <FeaturedSection />

      {/* 推荐书店 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">推荐书店</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="relative h-40 mb-4">
                  <Image
                    src={`https://picsum.photos/id/${30 + i}/400/300`}
                    alt={`推荐书店 ${i}`}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  古韵轩书店 {i}号店
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  专营明清善本、名家手稿
                </p>
                <div className="flex items-center text-amber-600">
                  <span className="text-sm">查看店铺 →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
