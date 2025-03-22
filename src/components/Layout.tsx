import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import logoImage from '../assets/images/logo.png';

type LayoutProps = {
  children: React.ReactNode;
  showNavbar?: boolean;
};

export default function Layout({ children, showNavbar = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {showNavbar ? (
        <Navbar />
      ) : (
        /* 简单的顶部导航 */
        <header className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <img src={logoImage} alt="中国研究生招生信息网" className="h-12" />
          </div>
          <div className="flex space-x-4 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">首页</Link>
            <Link to="/help" className="hover:text-primary">帮助</Link>
            <a href="#" className="hover:text-primary">在线客服</a>
            <a href="#" className="hover:text-primary">联系我们</a>
          </div>
        </header>
      )}

      {/* 主要内容 */}
      <main className="flex-1">
        {children}
      </main>

      {/* 页脚 */}
      <footer className="p-4 text-center text-xs text-gray-500 border-t">
        <p>Copyright © 2003-2025 <Link to="/" className="text-gray-600 hover:text-primary">学信网</Link> All Rights Reserved</p>
      </footer>
    </div>
  );
}
