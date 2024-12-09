'use client'

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        联系我们
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* 联系表单 */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            发送询问
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                您的姓名
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="请输入您的姓名"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                电子邮箱
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="请输入您的邮箱"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                咨询内容
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="请详细描述您的需求"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 rounded-md hover:bg-amber-700 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              发送消息
            </button>
          </form>
        </div>

        {/* 联系信息 */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            联系方式
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-50 p-3 rounded-full">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">客服电话</h3>
                <p className="text-gray-600">400-100-1000</p>
                <p className="text-sm text-gray-500">周一至周日 9:00-18:00</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-50 p-3 rounded-full">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">电子邮箱</h3>
                <p className="text-gray-600">service@kongfz.com</p>
                <p className="text-sm text-gray-500">24小时内回复</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-50 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">公司地址</h3>
                <p className="text-gray-600">北京市朝阳区建国路88号</p>
                <p className="text-sm text-gray-500">孔夫子古籍大厦15层</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-amber-50 p-3 rounded-full">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">营业时间</h3>
                <p className="text-gray-600">周一至周五：9:00-18:00</p>
                <p className="text-gray-600">周六至周日：10:00-17:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 