import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';
import userIcon from '../assets/images/yhm.svg';
import passwordIcon from '../assets/images/mm.svg';
import captchaIcon from '../assets/images/jym.svg';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [captcha, setCaptcha] = useState('');

  // 模拟验证码刷新
  const refreshCaptcha = () => {
    console.log('刷新验证码');
    // 实际应用中，这里应该调用API获取新的验证码
  };

  // 模拟提交注册请求
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('注册请求', { username, password, confirmPassword, email, phone, captcha });
    // 实际应用中，这里应该发送注册请求
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

      {/* 注册表单 */}
      <div className="mx-auto mt-8 w-full max-w-md px-8">
        <h1 className="mb-4 text-center text-2xl font-normal">注册账号</h1>
        <p className="mb-6 text-center text-sm text-gray-500">
          请填写以下信息完成注册
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* 用户名输入框 */}
          <div className="relative">
            <img src={userIcon} alt="用户名" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="用户名 (必填)"
              className="w-full rounded border border-gray-300 py-3 pl-10 pr-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>

          {/* 密码输入框 */}
          <div className="relative">
            <img src={passwordIcon} alt="密码" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="密码 (必填)"
              className="w-full rounded border border-gray-300 py-3 pl-10 pr-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>

          {/* 确认密码输入框 */}
          <div className="relative">
            <img src={passwordIcon} alt="确认密码" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="确认密码 (必填)"
              className="w-full rounded border border-gray-300 py-3 pl-10 pr-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>

          {/* 邮箱输入框 */}
          <div className="relative">
            <img src={userIcon} alt="邮箱" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="邮箱 (必填)"
              className="w-full rounded border border-gray-300 py-3 pl-10 pr-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
            />
          </div>

          {/* 手机输入框 */}
          <div className="relative">
            <img src={userIcon} alt="手机" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="手机号码 (必填)"
              className="w-full rounded border border-gray-300 py-3 pl-10 pr-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              required
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
                required
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

          {/* 用户协议 */}
          <div className="flex items-start space-x-2">
            <input
              type="checkbox"
              id="agreement"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
              required
            />
            <label htmlFor="agreement" className="text-sm text-gray-600">
              我已阅读并同意 <a href="#" className="text-primary hover:underline">《学信网用户协议》</a> 和 <a href="#" className="text-primary hover:underline">《隐私政策》</a>
            </label>
          </div>

          {/* 提交按钮 */}
          <button
            type="submit"
            className="login-btn w-full rounded bg-primary py-3 text-white hover:bg-blue-600 focus:outline-none"
          >
            注册
          </button>

          {/* 返回登录 */}
          <div className="flex justify-center text-sm">
            <span className="text-gray-600">已有账号？</span>
            <Link to="/" className="ml-1 text-primary hover:underline">
              立即登录
            </Link>
          </div>
        </form>
      </div>

      {/* 页脚 */}
      <footer className="mt-12 p-4 text-center text-xs text-gray-500">
        <p>Copyright © 2003-2025 <Link to="/" className="text-gray-600 hover:text-primary">学信网</Link> All Rights Reserved</p>
      </footer>
    </div>
  );
}
