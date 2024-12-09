import Image from 'next/image'
import { Star, TrendingUp, BookOpen } from 'lucide-react'

const bestsellers = [
  {
    id: '1',
    title: '诗经集注（宋元本）',
    author: '朱熹',
    price: 15800,
    rating: 4.9,
    sales: 128,
    imageUrl: 'https://picsum.photos/id/24/400/500'
  },
  {
    id: '2',
    title: '论语注疏（明刻本）',
    author: '何晏',
    price: 12600,
    rating: 4.8,
    sales: 156,
    imageUrl: 'https://picsum.photos/id/25/400/500'
  },
  {
    id: '3',
    title: '文选（南宋本）',
    author: '萧统',
    price: 18900,
    rating: 4.7,
    sales: 98,
    imageUrl: 'https://picsum.photos/id/26/400/500'
  },
]

export default function BestsellersPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 页面标题 */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
          <TrendingUp className="text-amber-600" />
          畅销榜单
        </h1>
        <div className="flex gap-4">
          <select className="px-4 py-2 border border-gray-200 rounded-md text-gray-600">
            <option>按销量排序</option>
            <option>按价格排序</option>
            <option>按评分排序</option>
          </select>
        </div>
      </div>

      {/* 畅销书网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bestsellers.map((book, index) => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 bg-amber-600 text-white px-3 py-1 rounded-full text-sm">
                TOP {index + 1}
              </div>
              <div className="relative h-[320px]">
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {book.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{book.author}</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl font-bold text-amber-600">
                  ¥{book.price.toLocaleString()}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span className="text-gray-600">{book.rating}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  月销 {book.sales} 本
                </span>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700">
                  立即购买
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 