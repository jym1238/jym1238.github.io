import { Link } from 'react-router-dom';
import logoImage from '../assets/images/logo.png';

export default function Help() {
  return (
    <div className="min-h-screen bg-background">
      {/* 顶部导航 */}
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logoImage} alt="中国研究生招生信息网" className="h-12" />
        </div>
        <div className="flex space-x-4 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary">首页</Link>
          <Link to="/help" className="text-primary font-medium">帮助</Link>
          <a href="#" className="hover:text-primary">在线客服</a>
          <a href="#" className="hover:text-primary">联系我们</a>
        </div>
      </header>

      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-medium text-center mb-8">帮助中心</h1>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-medium mb-4">常见问题</h2>

          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="font-medium text-primary mb-2">1. 如何注册学信网账号？</h3>
              <p className="text-gray-600">
                您可以通过点击登录页面的"注册"按钮，按照提示完成注册流程。注册需要验证您的身份信息，请确保填写真实有效的个人信息。
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-medium text-primary mb-2">2. 忘记密码怎么办？</h3>
              <p className="text-gray-600">
                如果您忘记了密码，可以点击登录页面的"忘记密码"链接，系统将引导您通过绑定的手机号或邮箱进行密码重置。
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-medium text-primary mb-2">3. 账号被锁定怎么解锁？</h3>
              <p className="text-gray-600">
                如果您的账号因多次输入错误密码而被锁定，请等待24小时后再尝试登录，或联系客服人员处理。
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="font-medium text-primary mb-2">4. 如何修改个人信息？</h3>
              <p className="text-gray-600">
                登录后，您可以在"个人中心"页面修改您的联系方式等信息。请注意，部分重要信息（如姓名、身份证号）修改可能需要提供相关证明材料。
              </p>
            </div>

            <div>
              <h3 className="font-medium text-primary mb-2">5. 系统使用过程中遇到问题怎么办？</h3>
              <p className="text-gray-600">
                如果您在使用过程中遇到任何问题，可以：
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>查阅网站提供的帮助文档</li>
                <li>联系在线客服获取即时帮助</li>
                <li>拨打客服热线电话：010-12345678（工作日 9:00-17:00）</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 p-4 text-center text-xs text-gray-500 border-t">
        <p>Copyright © 2003-2025 <Link to="/" className="text-gray-600 hover:text-primary">学信网</Link> All Rights Reserved</p>
      </footer>
    </div>
  );
}
