import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  ClipboardList,
  FileText,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Star,
  Target,
  Trophy,
} from "lucide-react";

import heroTutoring from "./assets/hero-tutoring.png";
import daltonAdmission from "./assets/results/dalton-admission-success.png";
import parentFeedback from "./assets/results/parent-feedback.png";
import sat1590 from "./assets/results/sat-1590.png";
import apLang5 from "./assets/results/AP-Lang-5.png";
import apLit5 from "./assets/results/AP-Lit-5.png";
import apPsych5 from "./assets/results/AP-Psych-5.png";
import apUsh5 from "./assets/results/AP-USH-5.png";

const formLinks = {
  en: "https://docs.google.com/forms/d/e/1FAIpQLScfkCpsJgIqkLJju_n4mnwXhdEVOS_OXDhOd40aDUdrZjkJ0g/viewform?usp=header",
  ko: "https://docs.google.com/forms/d/e/1FAIpQLScmo2_eAHxpXjAcn8K4B4uQtjpziVVlKcBMZIhTLFFK2R6FSQ/viewform?usp=header",
};

const blogLink = "https://blog.naver.com/primepath_education";
const contactEmail = "primepatheducation.kr@gmail.com";

const content = {
  en: {
    brand: "PrimePath Education",
    subBrand: "Premium 1:1 Academic Mentoring",
    nav: ["Programs", "Process", "Why us", "Results", "Consultation"],
    book: "Book Consultation",
    switchLang: "한국어",
    blog: "Naver Blog",
    emailLabel: "Email",
    heroBadge: "AP · SAT · SSAT · TOEFL · GED · Admissions · English · Math",
    heroTitle:
      "Premium 1:1 academic mentoring for students with ambitious goals.",
    heroText:
      "We help students prepare for AP, Digital SAT, SSAT, TOEFL, GED, international school admissions, English, and math through personalized tutoring, careful mentor matching, and parent-facing progress management.",
    request: "Request a Consultation",
    viewPrograms: "View Programs",
    stats: [
      ["1:1", "Private classes"],
      ["8+", "Programs offered"],
      ["Reports", "Parent updates"],
    ],
    roadmapSmall: "Sample student roadmap",
    roadmapTitle: "What a personalized plan can look like",
    premiumMatch: "Custom Plan",
    roadmapSamples: [
      {
        title: "AP + SAT Student",
        rows: [
          ["Goal", "AP Calculus BC 5 + SAT Math improvement"],
          ["Student", "International school student"],
          ["Focus", "Weak-point analysis, timed practice, weekly review"],
          ["Parent Update", "Lesson report + homework plan after each class"],
        ],
      },
      {
        title: "SSAT Applicant",
        rows: [
          ["Goal", "SSAT verbal, reading, and vocabulary improvement"],
          ["Student", "Student preparing for admissions"],
          ["Focus", "Vocabulary building, reading accuracy, test strategy"],
          ["Parent Update", "Targeted vocabulary homework + progress tracking"],
        ],
      },
      {
        title: "TOEFL Student",
        rows: [
          ["Goal", "Improve TOEFL speaking, writing, and reading score"],
          ["Student", "Student preparing for an international pathway"],
          ["Focus", "Speaking structure, essay correction, timed practice"],
          ["Parent Update", "Score-targeted practice report + next steps"],
        ],
      },
      {
        title: "Admissions Prep Student",
        rows: [
          ["Goal", "International school interview and writing preparation"],
          ["Student", "Student applying abroad or in Korea"],
          ["Focus", "Self-introduction, interview speaking, writing assessment"],
          ["Parent Update", "Mock interview feedback + weekly readiness notes"],
        ],
      },
      {
        title: "English Student",
        rows: [
          ["Goal", "Improve reading, writing, and speaking confidence"],
          ["Student", "Student needing stronger English foundation"],
          ["Focus", "Reading comprehension, grammar, guided writing"],
          ["Parent Update", "Writing corrections + growth notes"],
        ],
      },
    ],
    mentorTitle: "Matched Academic Mentor",
    mentorText:
      "Selected based on subject expertise, curriculum familiarity, teaching style, and student personality fit.",
    programsIntro: "Programs",
    programsTitle: "Focused support for high-stakes academic goals.",
    programsText:
      "Choose a program, or let us design a custom plan after a consultation.",
    programs: [
      {
        title: "AP 1:1 Classes",
        description:
          "Personalized AP tutoring for students who need concept mastery, exam strategy, FRQ or essay structure, and structured practice across subjects such as Calculus, Statistics, Economics, Psychology, English, Biology, Chemistry, and Physics.",
        tag: "Score-focused",
      },
      {
        title: "Digital SAT Prep",
        description:
          "Private SAT coaching built around diagnostics, weak-point analysis, timing strategy, vocabulary, reading accuracy, grammar, and math problem-solving speed.",
        tag: "Strategy-driven",
      },
      {
        title: "SSAT Prep",
        description:
          "Private SSAT support focused on vocabulary, reading comprehension, verbal reasoning, writing, and test strategy for students preparing for private or international school admissions.",
        tag: "Admissions test",
      },
      {
        title: "TOEFL Prep",
        description:
          "1:1 TOEFL support focused on reading, listening, speaking, writing, vocabulary, timing, and score-targeted practice for students preparing for international school or university requirements.",
        tag: "English test",
      },
      {
        title: "GED Prep",
        description:
          "Personalized GED preparation for students who need structured support across core subjects, test strategy, study planning, and confidence-building practice.",
        tag: "Pathway support",
      },
      {
        title: "International School Admissions Preparation",
        description:
          "Interview practice, writing support, entrance assessment preparation, and school-fit guidance for students applying to international schools in Korea or abroad.",
        tag: "Admissions-ready",
      },
      {
        title: "English Reading, Writing & Speaking",
        description:
          "Structured English support for students who need stronger reading comprehension, vocabulary, grammar, academic writing, speaking confidence, and interview answers.",
        tag: "English fluency",
      },
      {
        title: "Math Support",
        description:
          "1:1 math support for elementary, middle, and high school students who need stronger fundamentals, schoolwork support, or international curriculum alignment.",
        tag: "Foundation-building",
      },
    ],
    methodIntro: "Our Method",
    methodTitle: "A clear process from diagnosis to progress.",
    process: [
      [
        "Academic Diagnosis",
        "We first understand the student's level, school curriculum, target score, timeline, and learning style.",
      ],
      [
        "Personalized Roadmap",
        "Each student receives a clear learning plan based on goals such as AP 5, SAT improvement, SSAT prep, TOEFL, GED, school GPA, or entrance preparation.",
      ],
      [
        "Matched 1:1 Mentor",
        "Students are matched with a suitable tutor based on subject expertise, teaching style, and personality fit.",
      ],
      [
        "Progress Reporting",
        "Parents receive clear updates on lesson content, homework, weaknesses, and next steps.",
      ],
    ],
    whyIntro: "Why Families Choose Us",
    whyTitle:
      "Premium tutoring should feel structured, transparent, and reliable.",
    whyText:
      "Parents should not have to guess whether a class is working. We combine careful tutor matching, clear academic planning, and consistent communication.",
    trustPoints: [
      "Verified academic background and subject ability",
      "English-capable tutors for international curriculum students",
      "1:1 personalized lesson plans, not generic academy classes",
      "Parent communication and progress reports",
      "Replacement support if the match is not the right fit",
      "Premium yet flexible alternative to expensive large academies",
    ],
    parentTab: "For Parents",
    studentTab: "For Students",
    parentTitle:
      "Know exactly what your child is learning and where they need to improve.",
    parentText:
      "Our service is designed for parents who want premium academic support without the confusion of large academy classes or random tutor matching.",
    parentCards: [
      "Reliable tutor screening",
      "Clear parent communication",
      "Curriculum-aligned classes",
      "Goal-focused learning plan",
    ],
    studentTitle:
      "Study with a mentor who understands your goals, not just your homework.",
    studentText:
      "Whether you are preparing for AP exams, SAT, SSAT, TOEFL, GED, admissions interviews, or school math and English, we help you build a practical plan and stay accountable.",
    studentSupport: "Student support includes",
    studentItems: [
      "Customized study plan",
      "Weakness-based practice",
      "Homework and test preparation",
      "Confidence-building reading, speaking, and writing support",
    ],
    consultIntro: "Start Here",
    consultTitle: "Request a private consultation.",
    consultText:
      "Share the student’s grade, school type, target subjects, timeline, and goals. We will recommend the most suitable class structure and mentor profile.",
    consultCardTitle: "Start with a short consultation request.",
    consultCardText:
      "The form will ask about the student’s grade, school type, curriculum, target subjects, schedule, and goals so we can recommend the right 1:1 plan.",
    consultSteps: ["Submit request", "Review by team", "Receive class plan"],
    submit: "Submit Consultation Request",
    formNote:
      "Click the consultation button to submit your request through our Google Form.",
    footer:
      "AP · SAT · SSAT · TOEFL · GED · Admissions Preparation · English · Math · 1:1 Premium Mentoring",
  },

  ko: {
    brand: "PrimePath Education",
    subBrand: "프리미엄 1:1 맞춤 학습 멘토링",
    nav: ["프로그램", "진행 방식", "신뢰 포인트", "성과", "상담 신청"],
    book: "상담 신청",
    switchLang: "English",
    blog: "네이버 블로그",
    emailLabel: "이메일 문의",
    heroBadge: "AP · SAT · SSAT · TOEFL · GED · 입학 준비 · 영어 · 수학",
    heroTitle: "목표가 뚜렷한 학생을 위한 프리미엄 1:1 학습 멘토링.",
    heroText:
      "AP, Digital SAT, SSAT, TOEFL, GED, 국제학교 입학 준비, 영어, 수학 수업을 학생의 수준과 목표에 맞춰 1:1로 설계하고, 적합한 멘토 매칭과 학부모 진행 보고까지 함께 관리합니다.",
    request: "상담 신청하기",
    viewPrograms: "프로그램 보기",
    stats: [
      ["1:1", "개인 맞춤 수업"],
      ["8+", "제공 프로그램"],
      ["리포트", "학부모 피드백"],
    ],
    roadmapSmall: "학생 맞춤 플랜 예시",
    roadmapTitle: "개인별 로드맵은 이렇게 설계됩니다",
    premiumMatch: "맞춤 플랜",
    roadmapSamples: [
      {
        title: "AP + SAT 학생",
        rows: [
          ["목표", "AP Calculus BC 5점 + SAT Math 향상"],
          ["학생", "국제학교 학생"],
          ["집중 영역", "약점 분석, 시간 관리 연습, 주간 복습"],
          ["학부모 리포트", "수업 내용 + 숙제 플랜 전달"],
        ],
      },
      {
        title: "SSAT 준비 학생",
        rows: [
          ["목표", "SSAT Verbal, Reading, Vocabulary 향상"],
          ["학생", "입학 시험을 준비하는 학생"],
          ["집중 영역", "어휘, 독해 정확도, 문제풀이 전략"],
          ["학부모 리포트", "목표 단어 숙제 + 진도 확인"],
        ],
      },
      {
        title: "TOEFL 준비 학생",
        rows: [
          ["목표", "TOEFL speaking, writing, reading 점수 향상"],
          ["학생", "국제학교 또는 해외 진학을 준비하는 학생"],
          ["집중 영역", "speaking 구조, essay 첨삭, 시간 관리 연습"],
          ["학부모 리포트", "목표 점수별 연습 리포트 + 다음 단계"],
        ],
      },
      {
        title: "국제학교 입학 준비 학생",
        rows: [
          ["목표", "국제학교 인터뷰 및 writing assessment 준비"],
          ["학생", "국내외 국제학교 지원을 준비하는 학생"],
          ["집중 영역", "자기소개, 인터뷰 답변, writing 연습"],
          ["학부모 리포트", "모의 인터뷰 피드백 + 준비도 점검"],
        ],
      },
      {
        title: "영어 학생",
        rows: [
          ["목표", "독해, writing, speaking 자신감 향상"],
          ["학생", "영어 기초와 표현력을 보완해야 하는 학생"],
          ["집중 영역", "독해력, 문법, guided writing"],
          ["학부모 리포트", "첨삭 내용 + 성장 포인트 전달"],
        ],
      },
    ],
    mentorTitle: "매칭된 전문 학습 멘토",
    mentorText:
      "과목 전문성, 커리큘럼 이해도, 수업 스타일, 학생 성향을 고려하여 적합한 멘토를 매칭합니다.",
    programsIntro: "프로그램",
    programsTitle: "중요한 학업 목표를 위한 집중 1:1 수업.",
    programsText:
      "원하는 프로그램을 선택하거나, 상담 후 학생에게 맞는 맞춤 플랜을 설계할 수 있습니다.",
    programs: [
      {
        title: "AP 1:1 수업",
        description:
          "Calculus, Statistics, Economics, Psychology, English, Biology, Chemistry, Physics 등 AP 과목의 개념 이해, 문제풀이, FRQ 또는 essay 답안 구성, 시험 전략을 학생 수준에 맞춰 진행합니다.",
        tag: "점수 목표형",
      },
      {
        title: "Digital SAT 대비",
        description:
          "진단 테스트, 약점 분석, 시간 관리, 어휘, 독해 정확도, 문법, 수학 문제풀이 속도 향상을 중심으로 SAT 전략을 1:1로 코칭합니다.",
        tag: "전략 중심",
      },
      {
        title: "SSAT 대비",
        description:
          "사립학교 또는 국제학교 입학을 준비하는 학생을 위해 vocabulary, reading comprehension, verbal reasoning, writing, 시험 전략을 1:1로 지원합니다.",
        tag: "입학 시험",
      },
      {
        title: "TOEFL 대비",
        description:
          "국제학교 또는 해외 대학 지원을 준비하는 학생을 위해 reading, listening, speaking, writing, vocabulary, 시간 관리, 목표 점수별 실전 연습을 1:1로 지원합니다.",
        tag: "영어 시험",
      },
      {
        title: "GED 대비",
        description:
          "GED 준비가 필요한 학생을 위해 주요 과목별 개념 정리, 시험 전략, 학습 계획, 실전 문제풀이를 체계적으로 지원합니다.",
        tag: "진학 경로 지원",
      },
      {
        title: "국제학교 입학 준비",
        description:
          "국내외 국제학교 지원 학생을 위한 인터뷰 연습, writing 지원, entrance assessment 대비, 학교별 준비 전략을 제공합니다.",
        tag: "입학 대비형",
      },
      {
        title: "영어 독해·Writing·Speaking",
        description:
          "독해력, 어휘, 문법, academic writing, speaking 자신감, 인터뷰 답변 구성을 학생 수준에 맞춰 체계적으로 지도합니다.",
        tag: "영어 실력 강화",
      },
      {
        title: "수학 수업",
        description:
          "초·중·고 학생의 수학 기초, 학교 과제, 국제 커리큘럼 적응, 시험 대비를 1:1 맞춤형으로 지원합니다.",
        tag: "기초 강화형",
      },
    ],
    methodIntro: "진행 방식",
    methodTitle: "진단부터 수업, 피드백까지 체계적으로 관리합니다.",
    process: [
      [
        "학업 진단",
        "학생의 현재 수준, 학교 커리큘럼, 목표 점수, 준비 기간, 학습 성향을 먼저 파악합니다.",
      ],
      [
        "맞춤 로드맵 설계",
        "AP 5점, SAT/SSAT 점수 향상, TOEFL, GED, 내신 관리, 입학 준비 등 목표에 따라 구체적인 학습 계획을 세웁니다.",
      ],
      [
        "1:1 멘토 매칭",
        "과목 전문성, 수업 스타일, 학생 성향을 고려해 가장 적합한 멘토를 매칭합니다.",
      ],
      [
        "진행 리포트",
        "수업 내용, 숙제, 약점, 다음 수업 계획을 학부모님께 명확하게 전달합니다.",
      ],
    ],
    whyIntro: "왜 PrimePath인가요?",
    whyTitle:
      "프리미엄 수업은 체계적이고, 투명하고, 믿을 수 있어야 합니다.",
    whyText:
      "학부모님이 수업이 잘 진행되고 있는지 추측하지 않도록, 멘토 매칭부터 학습 계획, 수업 후 피드백까지 명확하게 관리합니다.",
    trustPoints: [
      "검증된 학업 배경과 과목 실력",
      "국제 커리큘럼 학생을 위한 영어 가능 멘토",
      "대형 학원식 수업이 아닌 1:1 맞춤 플랜",
      "학부모 소통 및 수업 진행 리포트",
      "학생과 맞지 않을 경우 멘토 재매칭 지원",
      "고가 대형 학원의 부담을 줄인 프리미엄 대안",
    ],
    parentTab: "학부모님께",
    studentTab: "학생에게",
    parentTitle:
      "우리 아이가 무엇을 배우고, 어디에서 어려움을 겪는지 명확하게 확인하세요.",
    parentText:
      "PrimePath는 대형 학원 수업이나 무작위 과외 매칭이 아닌, 체계적인 1:1 프리미엄 학습 관리를 원하는 학부모님을 위해 설계되었습니다.",
    parentCards: [
      "신뢰 가능한 멘토 검증",
      "명확한 학부모 소통",
      "커리큘럼 맞춤 수업",
      "목표 중심 학습 플랜",
    ],
    studentTitle:
      "숙제만 도와주는 선생님이 아닌, 목표를 이해하는 멘토와 공부하세요.",
    studentText:
      "AP, SAT, SSAT, TOEFL, GED, 입학 인터뷰, 학교 영어와 수학까지 학생의 목표에 맞춰 현실적인 계획을 세우고 꾸준히 관리합니다.",
    studentSupport: "학생 지원 내용",
    studentItems: [
      "맞춤형 학습 계획",
      "약점 중심 문제 연습",
      "숙제 및 시험 대비",
      "독해, 말하기, writing 자신감 향상",
    ],
    consultIntro: "상담 신청",
    consultTitle: "1:1 비공개 상담을 신청하세요.",
    consultText:
      "학생의 학년, 학교 유형, 목표 과목, 준비 기간, 현재 수준을 알려주시면 가장 적합한 수업 구조와 멘토 프로필을 추천드립니다.",
    consultCardTitle: "간단한 상담 신청부터 시작하세요.",
    consultCardText:
      "학생의 학년, 학교 유형, 커리큘럼, 목표 과목, 희망 일정, 학습 목표를 확인한 뒤 가장 적합한 1:1 수업 방향을 추천드립니다.",
    consultSteps: ["상담 신청", "학습 상황 확인", "수업 방향 추천"],
    submit: "상담 신청 제출하기",
    formNote:
      "상담 신청 버튼을 누르면 Google Form으로 이동하여 상담 요청을 제출하실 수 있습니다.",
    footer:
      "AP · SAT · SSAT · TOEFL · GED · 입학 준비 · 영어 · 수학 · 1:1 프리미엄 멘토링",
  },
};

const processIcons = [ClipboardList, Target, GraduationCap, FileText];
const parentIcons = [ShieldCheck, MessageCircle, BookOpen, Star];
const navLinks = [
  "#programs",
  "#process",
  "#why-us",
  "#results",
  "#consultation",
];

const logoPath = "/primepath-logo.png";

function BrandLogo({ size = "h-10 w-10", rounded = "rounded-2xl" }) {
  return (
    <img
      src={logoPath}
      alt="PrimePath Education logo"
      className={`${size} ${rounded} object-cover shadow-lg shadow-black/10`}
    />
  );
}

function LanguageGate({ onSelect }) {
  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#18212F]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-[2.5rem] border border-black/5 bg-white/80 p-8 text-center shadow-2xl shadow-black/10 backdrop-blur md:p-14"
        >
          <div className="mx-auto mb-6 flex items-center justify-center">
            <BrandLogo size="h-14 w-14" rounded="rounded-2xl" />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#9A6A2F]">
            PrimePath Education
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Choose your language
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Select the language you would like to use for your consultation and
            website experience.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <button
              onClick={() => onSelect("en")}
              className="group rounded-[2rem] border border-black/5 bg-[#F7F3EA] p-8 text-left shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-black/10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#18212F] text-white">
                EN
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                English Speakers
              </h2>
              <p className="mt-4 leading-7 text-gray-600">
                For international school families, foreign students, and
                English-speaking parents.
              </p>
              <div className="mt-6 inline-flex items-center text-sm font-bold text-[#9A6A2F]">
                Continue in English <ArrowRight className="ml-2" size={17} />
              </div>
            </button>

            <button
              onClick={() => onSelect("ko")}
              className="group rounded-[2rem] border border-black/5 bg-[#18212F] p-8 text-left text-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/15"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                KR
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                한국어 상담
              </h2>
              <p className="mt-4 leading-7 text-white/70">
                국내 학부모님과 한국어 상담을 원하시는 분들을 위한
                페이지입니다.
              </p>
              <div className="mt-6 inline-flex items-center text-sm font-bold text-[#D9C29A]">
                한국어로 보기 <ArrowRight className="ml-2" size={17} />
              </div>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function PremiumTutoringLandingPage() {
  const [language, setLanguage] = useState(null);
  const [audience, setAudience] = useState("parent");
  const [sampleIndex, setSampleIndex] = useState(0);

  useEffect(() => {
    if (!language) return;
    setSampleIndex(0);
  }, [language]);

  useEffect(() => {
    if (!language) return;
    const timer = setInterval(() => {
      setSampleIndex(
        (current) => (current + 1) % content[language].roadmapSamples.length
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [language]);

  if (!language) {
    return <LanguageGate onSelect={setLanguage} />;
  }

  const t = content[language];
  const oppositeLanguage = language === "en" ? "ko" : "en";
  const activeFormLink = formLinks[language];
  const activeSample = t.roadmapSamples[sampleIndex];

  return (
    <div className="min-h-screen bg-[#F7F3EA] text-[#18212F]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F7F3EA]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <BrandLogo size="h-10 w-10" rounded="rounded-2xl" />
            <div>
              <p className="text-lg font-bold tracking-tight">{t.brand}</p>
              <p className="hidden text-xs tracking-wide text-gray-500 sm:block">
                {t.subBrand}
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            {t.nav.map((item, index) => (
              <a
                key={item}
                href={navLinks[index]}
                className="hover:text-[#18212F]"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLanguage(oppositeLanguage)}
              className="rounded-full border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-semibold text-[#18212F] shadow-sm transition hover:bg-white"
            >
              {t.switchLang}
            </button>

            <a
              href={activeFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#18212F] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:bg-[#0F172A]"
            >
              {t.book}
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-20 pt-20 md:pb-28 md:pt-28">
          <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#D9C29A]/40 blur-3xl" />
          <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#9FB7C9]/25 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                <Award size={16} className="text-[#9A6A2F]" />
                {t.heroBadge}
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">
                {t.heroTitle}
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                {t.heroText}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={activeFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#18212F] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-black/10 transition hover:bg-[#0F172A]"
                >
                  {t.request} <ArrowRight className="ml-2" size={18} />
                </a>

                <a
                  href="#programs"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/75 px-7 py-4 text-sm font-semibold text-[#18212F] shadow-sm transition hover:bg-white"
                >
                  {t.viewPrograms}
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
                {t.stats.map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-3xl border border-black/5 bg-white/65 p-4 shadow-sm"
                  >
                    <p className="text-2xl font-bold text-[#18212F]">
                      {number}
                    </p>
                    <p className="mt-1 text-sm text-gray-600">{label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-3 shadow-2xl shadow-black/10 backdrop-blur">
                <img
                  src={heroTutoring}
                  alt="PrimePath 1:1 academic mentoring session"
                  className="h-[420px] w-full rounded-[1.6rem] object-cover object-center"
                />
              </div>

              <div className="mt-5 rounded-[2rem] border border-white/70 bg-white/90 p-6 shadow-xl shadow-black/5 backdrop-blur">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      {t.roadmapSmall}
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                      {t.roadmapTitle}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-[#9A6A2F]">
                      {activeSample.title}
                    </p>
                  </div>

                  <div className="rounded-full bg-[#E9F7EF] px-3 py-1 text-sm font-semibold text-[#247A4D]">
                    {t.premiumMatch}
                  </div>
                </div>

                <motion.div
                  key={`${language}-${sampleIndex}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="grid gap-3 sm:grid-cols-2"
                >
                  {activeSample.rows.map(([label, value]) => (
                    <div key={label} className="rounded-3xl bg-[#F7F3EA] p-4">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A6A2F]">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-6 text-[#18212F]">
                        {value}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <div className="mt-5 flex justify-center gap-2">
                  {t.roadmapSamples.map((sample, index) => (
                    <button
                      key={sample.title}
                      onClick={() => setSampleIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === sampleIndex
                          ? "w-8 bg-[#9A6A2F]"
                          : "w-2 bg-gray-300"
                      }`}
                      aria-label={`View sample ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="programs" className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#9A6A2F]">
                  {t.programsIntro}
                </p>
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  {t.programsTitle}
                </h2>
              </div>
              <p className="max-w-md text-lg leading-8 text-gray-600">
                {t.programsText}
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {t.programs.map((program) => (
                <div
                  key={program.title}
                  className="group rounded-[2rem] border border-black/5 bg-[#F7F3EA] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10"
                >
                  <div className="mb-5 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#9A6A2F]">
                    {program.tag}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {program.title}
                  </h3>
                  <p className="mt-4 leading-8 text-gray-600">
                    {program.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#9A6A2F]">
                {t.methodIntro}
              </p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                {t.methodTitle}
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {t.process.map(([title, text], index) => {
                const Icon = processIcons[index];
                return (
                  <div
                    key={title}
                    className="rounded-[2rem] bg-white p-6 shadow-sm"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F3EA] text-[#9A6A2F]">
                        <Icon size={22} />
                      </div>
                      <span className="text-sm font-bold text-gray-300">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-3 leading-7 text-gray-600">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="why-us" className="bg-[#18212F] px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#D9C29A]">
                {t.whyIntro}
              </p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                {t.whyTitle}
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/70">
                {t.whyText}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-3xl bg-white/8 p-5 ring-1 ring-white/10"
                >
                  <CheckCircle className="mb-4 text-[#D9C29A]" size={22} />
                  <p className="font-medium leading-7">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[2rem] bg-[#F7F3EA] p-8 md:p-12">
              <div className="mb-8 flex gap-3">
                <button
                  onClick={() => setAudience("parent")}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    audience === "parent"
                      ? "bg-[#18212F] text-white"
                      : "bg-white text-gray-600"
                  }`}
                >
                  {t.parentTab}
                </button>
                <button
                  onClick={() => setAudience("student")}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                    audience === "student"
                      ? "bg-[#18212F] text-white"
                      : "bg-white text-gray-600"
                  }`}
                >
                  {t.studentTab}
                </button>
              </div>

              {audience === "parent" ? (
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div>
                    <h2 className="text-4xl font-semibold tracking-tight">
                      {t.parentTitle}
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-gray-600">
                      {t.parentText}
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {t.parentCards.map((text, index) => {
                      const Icon = parentIcons[index];
                      return (
                        <div
                          key={text}
                          className="rounded-3xl bg-white p-5 shadow-sm"
                        >
                          <Icon className="mb-4 text-[#9A6A2F]" />
                          <p className="font-semibold">{text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div>
                    <h2 className="text-4xl font-semibold tracking-tight">
                      {t.studentTitle}
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-gray-600">
                      {t.studentText}
                    </p>
                  </div>
                  <div className="rounded-[2rem] bg-white p-6 shadow-sm">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#9A6A2F]">
                      {t.studentSupport}
                    </p>
                    <ul className="mt-5 space-y-4 text-gray-700">
                      {t.studentItems.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle
                            className="mt-0.5 shrink-0 text-[#9A6A2F]"
                            size={19}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="results" className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#9A6A2F]">
                  {language === "en" ? "Results & Proof" : "성과 및 증빙"}
                </p>
                <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                  {language === "en"
                    ? "Real outcomes, backed by real evidence."
                    : "실제 결과로 보여주는 신뢰."}
                </h2>
              </div>

              <p className="text-lg leading-8 text-gray-600">
                {language === "en"
                  ? "Selected anonymized results from students and families supported through SAT, AP, international school admissions, English, and academic mentoring."
                  : "SAT, AP, 국제학교 입학 준비, 영어 및 학습 멘토링에서 실제로 지원한 학생들의 익명화된 성과를 선별하여 보여드립니다."}
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-xl shadow-black/5">
                <div className="flex items-start gap-4 p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F7F3EA] text-[#9A6A2F]">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A6A2F]">
                      {language === "en" ? "Admissions Success" : "입학 성과"}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {language === "en"
                        ? "Cheongna Dalton School admission result"
                        : "청라달튼스쿨 입학 성과"}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {language === "en"
                        ? "Supported international school admissions preparation through interview practice, answer structuring, and writing support."
                        : "인터뷰 연습, 답변 구성, writing 준비를 통해 국제학교 입학 준비를 지원했습니다."}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7">
                  <div className="rounded-[1.5rem] bg-[#F7F3EA] p-3">
                    <img
                      src={daltonAdmission}
                      alt="Cheongna Dalton School admission result"
                      className="w-full rounded-[1.2rem] border border-black/10 object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs leading-6 text-gray-500">
                    {language === "en"
                      ? "Personal details removed."
                      : "개인정보는 삭제 또는 가림 처리되었습니다."}
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-xl shadow-black/5">
                <div className="flex items-start gap-4 p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F7F3EA] text-[#9A6A2F]">
                    <Trophy size={24} />
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A6A2F]">
                      {language === "en" ? "SAT Result" : "SAT 성과"}
                    </p>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {language === "en"
                        ? "SAT 1590 result"
                        : "SAT 1590점 성과"}
                    </h3>
                    <p className="mt-3 leading-7 text-gray-600">
                      {language === "en"
                        ? "Supported SAT preparation through weak-point analysis, reading accuracy, grammar review, and math strategy."
                        : "약점 분석, 독해 정확도, 문법 리뷰, 수학 전략을 중심으로 SAT 대비를 지원했습니다."}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7">
                  <div className="rounded-[1.5rem] bg-[#F7F3EA] p-3">
                    <img
                      src={sat1590}
                      alt="SAT 1590 result"
                      className="w-full rounded-[1.2rem] border border-black/10 object-cover"
                    />
                  </div>
                  <p className="mt-3 text-xs leading-6 text-gray-500">
                    {language === "en"
                      ? "Personal details removed."
                      : "개인정보는 삭제 또는 가림 처리되었습니다."}
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-xl shadow-black/5 lg:col-span-2">
                <div className="grid gap-8 p-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F3EA] text-[#9A6A2F]">
                      <Award size={24} />
                    </div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A6A2F]">
                      {language === "en" ? "AP Results" : "AP 성과"}
                    </p>
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {language === "en"
                        ? "Multiple AP score 5 results"
                        : "다수의 AP 5점 성과"}
                    </h3>
                    <p className="mt-4 leading-8 text-gray-600">
                      {language === "en"
                        ? "Supported AP preparation through concept review, essay and FRQ practice, exam strategy, and structured revision across multiple subjects."
                        : "여러 AP 과목에서 개념 복습, essay 및 FRQ 연습, 시험 전략, 체계적인 복습을 통해 AP 대비를 지원했습니다."}
                    </p>
                    <p className="mt-4 text-xs leading-6 text-gray-500">
                      {language === "en"
                        ? "Personal details removed."
                        : "개인정보는 삭제 또는 가림 처리되었습니다."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { image: apLang5, label: "AP Language" },
                      { image: apLit5, label: "AP Literature" },
                      { image: apPsych5, label: "AP Psychology" },
                      { image: apUsh5, label: "AP U.S. History" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-[1.4rem] bg-[#F7F3EA] p-2"
                      >
                        <img
                          src={item.image}
                          alt={`${item.label} score 5 result`}
                          className="h-48 w-full rounded-[1.1rem] border border-black/10 object-cover object-top"
                        />
                        <p className="mt-2 px-1 text-xs font-semibold text-gray-600">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#18212F] text-white shadow-xl shadow-black/10 lg:col-span-2">
                <div className="grid gap-8 p-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#D9C29A]">
                      <MessageCircle size={24} />
                    </div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#D9C29A]">
                      {language === "en"
                        ? "Parent Feedback"
                        : "학부모 피드백"}
                    </p>
                    <h3 className="text-3xl font-semibold tracking-tight">
                      {language === "en"
                        ? "Clear progress that parents noticed"
                        : "학부모님이 직접 느낀 수업 만족도"}
                    </h3>
                    <p className="mt-4 leading-8 text-white/70">
                      {language === "en"
                        ? "Parents valued the student’s learning experience, steady effort, and the quality of academic support."
                        : "학생이 좋은 선생님을 만나 잘 배우고 있다는 학부모님의 피드백을 받았습니다."}
                    </p>
                    <p className="mt-4 text-xs leading-6 text-white/50">
                      {language === "en"
                        ? "Personal details removed."
                        : "개인정보는 삭제 또는 가림 처리되었습니다."}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] bg-white/10 p-3">
                    <img
                      src={parentFeedback}
                      alt="Parent feedback message"
                      className="w-full rounded-[1.2rem] border border-white/10 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-semibold text-[#18212F] shadow-sm transition hover:bg-[#F7F3EA]"
              >
                {t.blog} <ArrowRight className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </section>

        <section id="consultation" className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[#9A6A2F]">
                {t.consultIntro}
              </p>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
                {t.consultTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-600">
                {t.consultText}
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-xl shadow-black/5 md:p-10">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F3EA] text-[#9A6A2F]">
                <MessageCircle size={26} />
              </div>
              <h3 className="text-3xl font-semibold tracking-tight">
                {t.consultCardTitle}
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                {t.consultCardText}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {t.consultSteps.map((step, index) => (
                  <div key={step} className="rounded-3xl bg-[#F7F3EA] p-5">
                    <p className="text-sm font-bold text-[#9A6A2F]">
                      0{index + 1}
                    </p>
                    <p className="mt-2 font-semibold text-[#18212F]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={activeFormLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#18212F] px-7 py-4 text-center text-sm font-semibold text-white transition hover:bg-[#0F172A]"
              >
                {t.submit} <ArrowRight className="ml-2" size={18} />
              </a>

              <div className="mt-5 text-center text-sm leading-7 text-gray-600">
                <p>{t.formNote}</p>

                <div className="mt-3 flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-4">
                  <a
                    href={blogLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#9A6A2F] underline-offset-4 hover:underline"
                  >
                    {t.blog}
                  </a>

                  <span className="hidden text-gray-300 sm:inline">|</span>

                  <a
                    href={`mailto:${contactEmail}`}
                    className="font-semibold text-[#9A6A2F] underline-offset-4 hover:underline"
                  >
                    {t.emailLabel}: {contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>© 2023 {t.brand}. All rights reserved.</p>

          <div className="flex flex-col gap-2 md:items-end">
            <p>{t.footer}</p>

            <div className="flex flex-wrap gap-3">
              <a
                href={blogLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#9A6A2F] underline-offset-4 hover:underline"
              >
                {t.blog}
              </a>

              <span className="text-gray-300">|</span>

              <a
                href={`mailto:${contactEmail}`}
                className="font-semibold text-[#9A6A2F] underline-offset-4 hover:underline"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}