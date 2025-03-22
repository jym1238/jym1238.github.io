import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 左侧Logo */}
          <div className="flex items-center">
            <img src={logoImage} alt="中国研究生招生信息网" className="h-10" />
          </div>

          {/* 桌面端导航链接 */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-primary text-sm font-medium">首页</Link>
            <Link to="#" className="text-gray-700 hover:text-primary text-sm font-medium">政策</Link>
            <Link to="#" className="text-gray-700 hover:text-primary text-sm font-medium">资讯</Link>
            <Link to="#" className="text-gray-700 hover:text-primary text-sm font-medium">院校库</Link>
            <Link to="#" className="text-gray-700 hover:text-primary text-sm font-medium">专业库</Link>
            <Link to="#" className="text-gray-700 hover:text-primary text-sm font-medium">硕士目录</Link>
            <Link to="#" className="text-primary font-medium text-sm">成绩查询</Link>
            <Link to="#" className="text-gray-700 hover:text-primary text-sm font-medium">网上调剂</Link>
            <Link to="/help" className="text-gray-700 hover:text-primary text-sm font-medium">帮助中心</Link>
          </div>

          {/* 用户菜单 */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/score-query" className="text-gray-700 hover:text-primary text-sm">
              张三 <span className="text-gray-400">|</span>
            </Link>
            <Link to="/" className="text-gray-700 hover:text-primary text-sm">退出</Link>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 移动端导航菜单 */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              首页
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              政策
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              资讯
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              院校库
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              专业库
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              硕士目录
            </Link>
            <Link
              to="/score-query"
              className="block px-3 py-2 text-base font-medium text-primary"
            >
              成绩查询
            </Link>
            <Link
              to="#"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              网上调剂
            </Link>
            <Link
              to="/help"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
            >
              帮助中心
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3">
                <div className="text-base font-medium text-gray-800">张三</div>
                <Link
                  to="/"
                  className="ml-auto text-gray-700 hover:text-primary text-sm font-medium"
                >
                  退出
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
