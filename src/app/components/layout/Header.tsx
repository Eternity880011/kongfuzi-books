'use client'

import { Search, ShoppingCart, User,Book, BookOpen, History, Star } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-2xl font-bold text-red-800">
            孔夫子旧书网
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-red-800">首页</Link>
            <Link href="/categories" className="text-gray-600 hover:text-red-800">书店区</Link>
            <Link href="/bestsellers" className="text-gray-600 hover:text-red-800">书籍分类</Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="search"
              placeholder="搜索书籍..."
              className="w-64 rounded-full border px-4 py-2 pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="p-2 hover:text-red-800">
            <ShoppingCart className="h-6 w-6" />
          </button>
          <button className="p-2 hover:text-red-800">
            <User className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 flex-col border-r bg-white p-4">
      <h2 className="mb-4 text-lg font-semibold">图书分类</h2>
      <nav className="space-y-2">
        <a href="#" className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100">
          <Book className="h-5 w-5" />
          <span>文学艺术</span>
        </a>
        <a href="#" className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100">
          <BookOpen className="h-5 w-5" />
          <span>历史哲学</span>
        </a>
        <a href="#" className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100">
          <History className="h-5 w-5" />
          <span>古籍善本</span>
        </a>
        <a href="#" className="flex items-center space-x-2 rounded-lg px-3 py-2 hover:bg-gray-100">
          <Star className="h-5 w-5" />
          <span>特色藏品</span>
        </a>
      </nav>
    </aside>
  )
}