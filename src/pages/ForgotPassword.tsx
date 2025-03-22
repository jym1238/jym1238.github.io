import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';
import userIcon from '../assets/images/yhm.svg';
import captchaIcon from '../assets/images/jym.svg';

export default function ForgotPassword() {
  const [username, setUsername] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [email, setEmail] = useState('');

  // 模拟验证码刷新
  const refreshCaptcha = () => {
    console.log('刷新验证码');
    // 实际应用中，这里应该调用API获取新的验证码
  };

  // 模拟提交找回密码请求
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('找回密码请求', { username, email, captcha });
    // 实际应用中，这里应该发送找回密码请求
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
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

      {/* 找回密码表单 */}
      <div className="mx-auto mt-16 w-full max-w-md px-8">
        <h1 className="mb-4 text-center text-2xl font-normal">找回密码</h1>
        <p className="mb-6 text-center text-sm text-gray-500">
          请输入您的账号信息，系统将向您的绑定邮箱发送重置链接
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* 用户名输入框 */}
          <div className="relative">
            <img src={userIcon} alt="用户名" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="用户名"
              className="w-full rounded border border-gray-300 py-3 pl-10 pr-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* 邮箱输入框 */}
          <div className="relative">
            <img src={userIcon} alt="邮箱" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="绑定的邮箱"
              className="w-full rounded border border-gray-300 py-3 pl-10 pr-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          {/* 验证码输入框 */}
          <div className="relative">
            <img src={captchaIcon} alt="验证码" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
            <div className="flex space-x-2">
              <input
                type="text"
                value={captcha}
                onChange={(e) => setCaptcha(e.target.value)}
                placeholder="验证码"
                className="w-full rounded border border-gray-300 py-3 pl-10 pr-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <div
                onClick={refreshCaptcha}
                className="captcha-image flex items-center justify-center bg-gray-100 p-2 text-xs"
              >
                验证码图片
              </div>
            </div>
          </div>

          <div className="text-xs text-gray-500">
            请在此输入由字母或数字组成的验证码
          </div>

          {/* 提交按钮 */}
          <button
            type="submit"
            className="login-btn w-full rounded bg-primary py-3 text-white hover:bg-blue-600 focus:outline-none"
          >
            提交
          </button>

          {/* 返回登录 */}
          <div className="flex justify-center text-sm">
            <Link to="/" className="text-gray-600 hover:text-primary">
              返回登录
            </Link>
          </div>
        </form>
      </div>

      {/* 页脚 */}
      <footer className="mt-auto p-4 text-center text-xs text-gray-500">
        <p>Copyright © 2003-2025 <Link to="/" className="text-gray-600 hover:text-primary">学信网</Link> All Rights Reserved</p>
      </footer>
    </div>
  );
}
