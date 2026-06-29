"use client";

import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const trendData = [
  { week: "W1", 갓생: 60, 물멍: 50, 알빠노: 45, "700": 55 },
  { week: "W2", 갓생: 62, 물멍: 53, 알빠노: 47, "700": 58 },
  { week: "W3", 갓생: 65, 물멍: 55, 알빠노: 48, "700": 61 },
  { week: "W4", 갓생: 68, 물멍: 57, 알빠노: 50, "700": 65 },
  { week: "W5", 갓생: 70, 물멍: 59, 알빠노: 52, "700": 68 },
  { week: "W6", 갓생: 72, 물멍: 60, 알빠노: 53, "700": 71 },
  { week: "W7", 갓생: 73, 물멍: 62, 알빠노: 54, "700": 74 },
  { week: "W8", 갓생: 75, 물멍: 63, 알빠노: 55, "700": 77 },
  { week: "W9", 갓생: 77, 물멍: 65, 알빠노: 56, "700": 80 },
  { week: "W10", 갓생: 80, 물멍: 67, 알빠노: 57, "700": 83 },
  { week: "W11", 갓생: 83, 물멍: 69, 알빠노: 58, "700": 87 },
  { week: "W12", 갓생: 85, 물멍: 72, 알빠노: 60, "700": 91 },
];

const ranking = [
  { rank: 1, term: "700",   score: 91, delta: "▲28", deltaColor: "#22C55E",  barColor: "#F59E0B" },
  { rank: 2, term: "갓생",  score: 85, delta: "▲12", deltaColor: "#22C55E",  barColor: "#2F6BFF" },
  { rank: 3, term: "물멍",  score: 72, delta: "▲6",  deltaColor: "#22C55E",  barColor: "#22C55E" },
  { rank: 4, term: "갓성비",score: 64, delta: "–",    deltaColor: "#9CA3AF", barColor: "#A78BFA" },
  { rank: 5, term: "여름나기", score: 58, delta: "▲3", deltaColor: "#22C55E", barColor: "#6B7280" },
  { rank: 6, term: "플렉스", score: 51, delta: "▲1", deltaColor: "#22C55E",  barColor: "#6B7280" },
  { rank: 7, term: "디톡스", score: 44, delta: "▲4", deltaColor: "#22C55E",  barColor: "#6B7280" },
  { rank: 8, term: "알빠노", score: 37, delta: "–",   deltaColor: "#9CA3AF", barColor: "#6B7280" },
];

const LINE_COLORS: Record<string, string> = {
  "700": "#F59E0B",
  갓생: "#2F6BFF",
  물멍: "#22C55E",
  알빠노: "#EF4444",
};

const periods = ["7일", "30일", "90일"];

export default function DashboardPage() {
  const [period, setPeriod] = useState("30일");

  return (
    <div className="max-w-[900px] mx-auto px-6 py-8">
      {/* Breadcrumb */}
      <p className="text-[11px] text-[#9CA3AF] font-semibold tracking-widest mb-1 uppercase">
        Dashboard · 리스크 모니터링
      </p>

      {/* Title row */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[26px] font-black text-[#111]">광고 리스크 한눈에 보기</h1>
        <div className="flex bg-[#F3F4F6] rounded-lg p-1 gap-0.5">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded-md text-[13px] font-medium transition-colors ${
                period === p
                  ? "bg-white text-[#111] shadow-sm"
                  : "text-[#6B7280] hover:text-[#111]"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-3 mb-5">
        {/* 추적 중 사건 */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[12px] text-[#6B7280] font-medium">민감 사건</span>
            <span className="text-[12px] font-semibold text-[#6B7280]">+2</span>
          </div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-[34px] font-black text-[#111] leading-none">24</span>
            <span className="text-[13px] text-[#9CA3AF]">건</span>
          </div>
          <p className="text-[11px] text-[#9CA3AF]">민감 이슈 DB</p>
        </div>

        {/* 매핑된 논란 광고 */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[12px] text-[#6B7280] font-medium">논란 광고</span>
            <span className="text-[12px] font-semibold text-[#6B7280]">+11</span>
          </div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-[34px] font-black text-[#111] leading-none">86</span>
            <span className="text-[13px] text-[#9CA3AF]">건</span>
          </div>
          <p className="text-[11px] text-[#9CA3AF]">사건 1:N 연결</p>
        </div>

        {/* 모니터링 신조어 — value in blue */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[12px] text-[#6B7280] font-medium">모니터링 신조어</span>
            <span className="text-[12px] font-semibold text-[#2F6BFF]">+9</span>
          </div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-[34px] font-black text-[#2F6BFF] leading-none">142</span>
            <span className="text-[13px] text-[#9CA3AF]">개</span>
          </div>
          <p className="text-[11px] text-[#9CA3AF]">네이버 데이터랩 연동</p>
        </div>

        {/* 활성도 급상승 — delta in amber */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
          <div className="flex justify-between items-start mb-3">
            <span className="text-[12px] text-[#6B7280] font-medium">활성도 급상승</span>
            <span className="text-[12px] font-semibold text-[#F59E0B]">주의 3</span>
          </div>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-[34px] font-black text-[#111] leading-none">9</span>
            <span className="text-[13px] text-[#9CA3AF]">개</span>
          </div>
          <p className="text-[11px] text-[#9CA3AF]">주간 ▲20% 이상</p>
        </div>
      </div>

      {/* Chart + ranking */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
        {/* Chart header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[15px] font-bold text-[#111]">신조어 활성도</span>
              <span className="text-[10px] bg-[#F3F4F6] text-[#6B7280] rounded px-2 py-0.5 font-semibold tracking-wide">
                NAVER DataLab
              </span>
            </div>
            <p className="text-[12px] text-[#9CA3AF]">검색 트렌드 기반 활성도 지수 · 최근 12주</p>
          </div>
          <div className="flex gap-4 text-[12px] text-[#6B7280]">
            {Object.entries(LINE_COLORS).map(([name, color]) => (
              <span key={name} className="flex items-center gap-1.5">
                <span className="w-4 h-0.5 inline-block rounded-full" style={{ backgroundColor: color }} />
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          {/* Line chart */}
          <div className="flex-1 h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData} margin={{ top: 4, right: 4, bottom: 0, left: -24 }}>
                <XAxis
                  dataKey="week"
                  tick={{ fontSize: 10, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fontSize: 10, fill: "#9CA3AF" }}
                  axisLine={false}
                  tickLine={false}
                  domain={[20, 100]}
                />
                <Tooltip
                  contentStyle={{
                    fontSize: 12,
                    borderRadius: 8,
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                />
                {Object.entries(LINE_COLORS).map(([name, color]) => (
                  <Line
                    key={name}
                    type="monotone"
                    dataKey={name}
                    stroke={color}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Ranking */}
          <div className="w-[230px] shrink-0">
            <p className="text-[11px] text-[#9CA3AF] font-semibold mb-3 uppercase tracking-wider">
              활성도 랭킹 · TOP 8
            </p>
            <div className="flex flex-col gap-2">
              {ranking.map((r) => (
                <div key={r.term} className="flex items-center gap-2">
                  <span className="text-[11px] text-[#9CA3AF] w-3 shrink-0">{r.rank}</span>
                  <span className="text-[12px] font-medium text-[#111] w-12 shrink-0">{r.term}</span>
                  <div className="flex-1 h-[6px] bg-[#F3F4F6] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${r.score}%`, backgroundColor: r.barColor }}
                    />
                  </div>
                  <span className="text-[12px] font-bold text-[#111] w-6 text-right shrink-0">{r.score}</span>
                  <span
                    className="text-[11px] font-semibold w-8 text-right shrink-0"
                    style={{ color: r.deltaColor }}
                  >
                    {r.delta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
