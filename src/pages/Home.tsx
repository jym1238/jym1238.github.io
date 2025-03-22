import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import bgImage from '../assets/images/bg.png';
import userIcon from '../assets/images/yhm.svg';
import passwordIcon from '../assets/images/mm.svg';
import captchaIcon from '../assets/images/jym.svg';
import wechatIcon from '../assets/images/wx.svg';
import alipayIcon from '../assets/images/zfb.svg';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // 模拟验证码刷新
  const refreshCaptcha = () => {
    console.log('刷新验证码');
    // 实际应用中，这里应该调用API获取新的验证码
  };

  // 模拟登录
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password || !captcha) {
      alert('请填写完整的登录信息');
      return;
    }

    setLoading(true);

    // 模拟网络请求
    setTimeout(() => {
      console.log('登录请求', { username, password, captcha });
      setLoading(false);

      // 登录成功，跳转到成绩查询页面
      navigate('/score-query');
    }, 1000);
  };

  return (
    <Layout>
      <div className="flex">
        {/* 左侧图片区域 */}
        <div className="hidden w-[520px] items-center justify-center lg:flex">
          <img src={bgImage} alt="背景图片" className="max-w-full" />
        </div>

        {/* 右侧登录区域 */}
        <div className="flex-1 px-4">
          {/* 登录表单 */}
          <div className="mx-auto mt-16 w-full max-w-md">
            <h1 className="mb-4 text-center text-2xl font-normal">登录</h1>
            <p className="mb-6 text-center text-sm text-gray-500">
              请输入学信网账号登录
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

              {/* 密码输入框 */}
              <div className="relative">
                <img src={passwordIcon} alt="密码" className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="密码"
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

              {/* 登录按钮 */}
              <button
                type="submit"
                disabled={loading}
                className={`login-btn w-full rounded py-3 text-white focus:outline-none ${
                  loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-primary hover:bg-blue-600'
                }`}
              >
                {loading ? '登录中...' : '登录'}
              </button>

              {/* 注册和找回密码 */}
              <div className="flex justify-between text-sm">
                <Link to="/forgot-password" className="text-gray-600 hover:text-primary">
                  忘记密码
                </Link>
                <Link to="/register" className="text-gray-600 hover:text-primary">
                  注册
                </Link>
              </div>

              {/* 第三方登录 */}
              <div className="pt-6">
                <div className="flex items-center justify-center space-x-8">
                  <a href="#" className="third-party-icon flex items-center justify-center rounded-full p-2 hover:bg-gray-100">
                    <img src={wechatIcon} alt="微信登录" className="h-8 w-8" />
                  </a>
                  <a href="#" className="third-party-icon flex items-center justify-center rounded-full p-2 hover:bg-gray-100">
                    <img src={alipayIcon} alt="支付宝登录" className="h-8 w-8" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
