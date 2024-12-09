import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '孔夫子旧书网 - 古籍善本收藏交易平台',
  description: '中国领先的古籍善本图书交易平台，提供珍贵古籍、善本、字画的收藏与交易服务',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <h1 className="text-2xl font-bold text-amber-600">孔夫子旧书网</h1>
                <div className="hidden md:flex space-x-6">
                  <a href="/" className="text-gray-600 hover:text-amber-600">首页</a>
                  <a href="/stores" className="text-gray-600 hover:text-amber-600">书店区</a>
                  <a href="/categories" className="text-gray-600 hover:text-amber-600">书籍分类</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="搜索古籍善本..."
                    className="w-64 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-amber-600"
                  />
                </div>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700">
                  登录
                </button>
              </div>
            </div>
          </nav>
        </header>
        
        <div className="flex min-h-screen">
          <aside className="w-64 bg-white shadow-sm hidden lg:block">
            <nav className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">图书分类</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/category/classics" className="text-gray-600 hover:text-amber-600 block py-2">
                    经部
                  </a>
                </li>
                <li>
                  <a href="/category/history" className="text-gray-600 hover:text-amber-600 block py-2">
                    史部
                  </a>
                </li>
                <li>
                  <a href="/category/philosophy" className="text-gray-600 hover:text-amber-600 block py-2">
                    子部
                  </a>
                </li>
                <li>
                  <a href="/category/literature" className="text-gray-600 hover:text-amber-600 block py-2">
                    集部
                  </a>
                </li>
              </ul>
            </nav>
          </aside>
          
          <main className="flex-1 bg-gray-50">
            {children}
          </main>
        </div>
        
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">关于我们</h3>
                <p className="text-gray-400">
                  孔夫子旧书网是中国领先的古籍善本交易平台，
                  致力于为收藏家提供最优质的古籍善本。
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">联系方式</h3>
                <p className="text-gray-400">
                  客服电话：400-100-1000<br />
                  营业时间：周一至周日 9:00-18:00
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">关注我们</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">微信</a>
                  <a href="#" className="text-gray-400 hover:text-white">微博</a>
                  <a href="#" className="text-gray-400 hover:text-white">知乎</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
              <p>© 2024 孔夫子旧书网. 保留所有权利.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
