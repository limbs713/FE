import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-56px)] px-4 text-center bg-[#F7F7F8]">
      {/* Pill badge */}
      <div className="flex items-center gap-2 bg-white border border-[#E5E7EB] rounded-full px-4 py-2 mb-12 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#EF4444] inline-block shrink-0" />
        <span className="text-[13px] text-[#555]">
          광고가 나가기 <strong className="text-[#111]">전에</strong> , 사고를 거른다
        </span>
      </div>

      {/* Headline */}
      <h1 className="text-[58px] font-black leading-[1.15] tracking-tight mb-5 max-w-2xl">
        사람이 놓친 한 단어가
        <br />
        <span className="text-[#BBBBBB]">브랜드를 무너뜨립니다.</span>
      </h1>

      {/* Sub */}
      <p className="text-[16px] text-[#555] max-w-[480px] leading-[1.8] mb-12">
        광고 문구·포스터를 넣으면 사회적·역사적으로 민감하게 해석될 위험을{" "}
        <strong className="text-[#111] font-semibold">근거·대체문구와 함께</strong>{" "}
        진단합니다. 최신 신조어부터 과거 논란 사례까지, 결재 라인이 못 거른
        빈틈을 메웁니다.
      </p>

      {/* CTA buttons */}
      <div className="flex items-center gap-3">
        <Link
          href="/review"
          className="bg-[#111] text-white px-7 py-3 rounded-xl text-[14px] font-semibold hover:bg-[#222] transition-colors"
        >
          문구 검토 시작 →
        </Link>
        <Link
          href="/generate"
          className="bg-white text-[#111] border border-[#D1D5DB] px-7 py-3 rounded-xl text-[14px] font-semibold hover:bg-[#F3F4F6] transition-colors"
        >
          트렌드 문구 생성
        </Link>
      </div>
    </div>
  );
}
