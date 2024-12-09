'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, Star, TrendingUp } from 'lucide-react'

interface Book {
  id: string
  title: string
  author: string
  price: number
  imageUrl: string
  rating: number
}

const featuredBooks: Book[] = [
  {
    id: '1',
    title: '红楼梦（清康熙年间初刻本）',
    author: '曹雪芹',
    price: 12800,
    imageUrl: 'https://picsum.photos/id/24/400/500',
    rating: 4.9
  },
  {
    id: '2',
    title: '史记（清乾隆宫廷版）',
    author: '司马迁',
    price: 15600,
    imageUrl: 'https://picsum.photos/id/25/400/500',
    rating: 4.8
  },
  {
    id: '3',
    title: '唐诗三百首（明万历刻本）',
    author: '蘅塘退士',
    price: 9800,
    imageUrl: 'https://picsum.photos/id/26/400/500',
    rating: 4.7
  }
]

export default function FeaturedSection() {
  return (
    <section className="py-12 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Star className="text-amber-600" />
            特色珍本
          </h2>
          <Link 
            href="/featured" 
            className="text-amber-600 hover:text-amber-700 flex items-center gap-1"
          >
            查看更多
            <TrendingUp className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <div 
              key={book.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-[300px]">
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.title}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-600">{book.author}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-amber-600">
                    ¥{book.price.toLocaleString()}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span className="text-gray-600">{book.rating}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors duration-300">
                  立即购买
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
