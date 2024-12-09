import Image from 'next/image'
import { BookOpen, Filter } from 'lucide-react'

const categories = [
  { id: 'classics', name: '经部', count: 1250 },
  { id: 'history', name: '史部', count: 980 },
  { id: 'philosophy', name: '子部', count: 760 },
  { id: 'literature', name: '集部', count: 1100 },
]

const books = [
  {
    id: '1',
    title: '四书章句集注（明嘉靖本）',
    category: '经部',
    price: 8600,
    imageUrl: 'https://picsum.photos/id/24/400/500'
  },
  {
    id: '2',
    title: '资治通鉴（宋刻本）',
    category: '史部',
    price: 12800,
    imageUrl: 'https://picsum.photos/id/25/400/500'
  },
  {
    id: '3',
    title: '老子道德经（明万历本）',
    category: '子部',
    price: 9200,
    imageUrl: 'https://picsum.photos/id/26/400/500'
  },
  // ... 更多书籍
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* 面包屑导航 */}
      <div className="text-sm text-gray-600 mb-8">
        <span className="hover:text-amber-600 cursor-pointer">首页</span>
        <span className="mx-2">/</span>
        <span className="text-gray-900">图书分类</span>
      </div>

      <div className="flex gap-8">
        {/* 左侧分类菜单 */}
        <aside className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">分类筛选</h2>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button className="w-full flex items-center justify-between py-2 px-3 rounded-md hover:bg-amber-50 text-left">
                    <span className="text-gray-700">{category.name}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* 主内容区域 */}
        <main className="flex-1">
          {/* 筛选工具栏 */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">全部图书</h1>
            <button className="flex items-center gap-2 text-gray-600 hover:text-amber-600">
              <Filter className="w-4 h-4" />
              筛选
            </button>
          </div>

          {/* 书籍网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="relative h-[240px]">
                  <Image
                    src={book.imageUrl}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{book.category}</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {book.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-600">
                      ¥{book.price.toLocaleString()}
                    </span>
                    <button className="text-sm text-amber-600 hover:text-amber-700">
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
} 