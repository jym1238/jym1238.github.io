import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

// 模拟的考生数据
const studentData = {
  name: '张三',
  studentId: '202512340001',
  examId: '100123456',
  schoolName: '北京大学',
  majorName: '计算机科学与技术',
  majorCode: '085400',
  totalScore: 375,
  subjects: [
    { name: '思想政治理论(101)', score: 65, fullScore: 100 },
    { name: '英语一(201)', score: 72, fullScore: 100 },
    { name: '数学一(301)', score: 118, fullScore: 150 },
    { name: '计算机专业基础综合(408)', score: 120, fullScore: 150 }
  ],
  examYear: '2025',
  queryTime: '2025-02-26 19:45:23',
  rank: {
    majorRank: 15,
    totalApplicants: 325
  }
};

export default function ScoreQuery() {
  const [loading, setLoading] = useState(true);
  const [scoreData, setScoreData] = useState<typeof studentData | null>(null);

  // 模拟加载数据
  useEffect(() => {
    const timer = setTimeout(() => {
      setScoreData(studentData);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout showNavbar={true}>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-center text-primary mb-2">
            {scoreData?.examYear || '2025'}年全国硕士研究生招生考试初试成绩查询
          </h1>
          <p className="text-center text-gray-500 text-sm">
            本系统所有数据均为招生单位提供，招生单位对查询结果负责解释。
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* 考生基本信息 */}
              <div className="bg-gray-50 p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-700">考生信息</h2>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex">
                  <span className="font-medium text-gray-600 w-24">姓名：</span>
                  <span>{scoreData?.name}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-600 w-24">考生编号：</span>
                  <span>{scoreData?.examId}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-600 w-24">报考单位：</span>
                  <span>{scoreData?.schoolName}</span>
                </div>
                <div className="flex">
                  <span className="font-medium text-gray-600 w-24">报考专业：</span>
                  <span>{scoreData?.majorName} ({scoreData?.majorCode})</span>
                </div>
              </div>

              {/* 成绩信息 */}
              <div className="bg-gray-50 p-4 border-b border-t">
                <h2 className="text-lg font-semibold text-gray-700">成绩信息</h2>
              </div>
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">考试科目</th>
                        <th className="border border-gray-300 px-4 py-2 text-center w-32">满分</th>
                        <th className="border border-gray-300 px-4 py-2 text-center w-32">成绩</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scoreData?.subjects.map((subject, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="border border-gray-300 px-4 py-2">{subject.name}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center">{subject.fullScore}</td>
                          <td className="border border-gray-300 px-4 py-2 text-center font-medium">{subject.score}</td>
                        </tr>
                      ))}
                      <tr className="bg-blue-50">
                        <td className="border border-gray-300 px-4 py-2 font-bold">总分</td>
                        <td className="border border-gray-300 px-4 py-2 text-center">500</td>
                        <td className="border border-gray-300 px-4 py-2 text-center font-bold text-primary">{scoreData?.totalScore}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* 排名信息 */}
                <div className="mt-6 p-4 bg-gray-50 rounded-md">
                  <h3 className="text-md font-semibold text-gray-700 mb-2">排名信息</h3>
                  <p className="text-sm text-gray-600">
                    您在{scoreData?.schoolName}{scoreData?.majorName}专业中的排名为：
                    <span className="font-bold text-primary mx-1">{scoreData?.rank.majorRank}</span>
                    /
                    <span className="mx-1">{scoreData?.rank.totalApplicants}</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    (排名仅供参考，具体录取情况以招生单位公布的复试名单为准)
                  </p>
                </div>

                {/* 查询信息 */}
                <div className="mt-4 text-right text-sm text-gray-500">
                  查询时间：{scoreData?.queryTime}
                </div>

                {/* 操作按钮 */}
                <div className="mt-6 flex justify-center space-x-4">
                  <button
                    onClick={() => window.print()}
                    className="px-6 py-2 bg-primary text-white rounded hover:bg-blue-600 transition-colors"
                  >
                    打印成绩单
                  </button>
                  <Link
                    to="/"
                    className="px-6 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    返回首页
                  </Link>
                </div>
              </div>
            </div>

            {/* 说明提示 */}
            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
              <h3 className="text-md font-semibold text-gray-700 mb-2">温馨提示</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>本成绩单为电子版，与纸质成绩单具有同等效力</li>
                <li>如对成绩有异议，可于2025年3月1日前申请成绩复核</li>
                <li>复试分数线预计将于3月中旬公布，请考生及时关注报考院校研究生院官网通知</li>
                <li>成绩查询结果保留至2025年9月30日，请及时保存或打印</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
