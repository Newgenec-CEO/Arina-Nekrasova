import { useState, useRef } from "react";
import {
  ChevronDown,
  ArrowRight,
  MapPin,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Send,
  Menu,
  X,
} from "lucide-react";

const SAGE = "#8B9A7D";
const TAUPE = "#C9A88F";
const CREAM = "#FAF6F1";
const WARM = "#F3EDE5";
const CHARCOAL = "#2D2D2D";
const BODY = "#4A4A4A";
const CAPTION = "#6B6B6B";

const HERO_IMG = "/photos/portrait_0_main.jpg";
const ABOUT_IMG = "/photos/portrait_1.jpg";

const GALLERY = [
  {
    src: "/photos/portrait_2.jpg",
    caption: "Внимательный и бережный профессиональный подход",
  },
  {
    src: "/photos/portrait_3.jpg",
    caption: "Тёплое и доверительное общение",
  },
  {
    src: "/photos/portrait_4.jpg",
    caption: "Пространство для открытого диалога",
  },
  {
    src: "/photos/portrait_5.jpg",
    caption: "Поддержка на каждом этапе пути",
  },
  {
    src: "/photos/portrait_6.jpg",
    caption: "Работа с детьми и их семьями",
  },
  {
    src: "/photos/portait_7.jpg",
    caption: "Индивидуальный подход к каждому ребёнку",
  },
  {
    src: "/photos/portait_8.jpg",
    caption: "Создание атмосферы принятия и безопасности",
  },
  {
    src: "/photos/portrait_9.jpg",
    caption: "Профессиональное сопровождение семей",
  },
  {
    src: "/photos/portrait_10.jpg",
    caption: "Забота, эмпатия и внимание к деталям",
  },
];

const APPROACH = [
  {
    num: "01",
    title: "Безопасное пространство",
    body: "Создаю атмосферу полного принятия, где ребёнок может быть собой. Особый опыт — психологическое сопровождение приёмных и замещающих семей, адаптация детей с травматическим опытом.",
  },
  {
    num: "02",
    title: "Творческие методы",
    body: "Использую арт-терапию, песочную терапию и сказкотерапию — естественные способы, через которые дети выражают чувства и переживания.",
  },
  {
    num: "03",
    title: "Семья как союзник",
    body: "Провожу индивидуальное и семейное консультирование родителей, групповые тренинги. Помогаю выстроить поддерживающие отношения в семье.",
  },
  {
    num: "04",
    title: "Индивидуальный план",
    body: "Каждый ребёнок уникален. Программа работы выстраивается с учётом возраста, запроса и особенностей — от раннего развития до подготовки к школе.",
  },
];

const TIMELINE = [
  {
    year: "2011",
    title: "МГОУ — высшее образование",
    desc: "Специальность «Психология», квалификация психолог, преподаватель психологии. Специализация: психологическое консультирование.",
  },
  {
    year: "2011",
    title: "Центр раннего развития «Выше радуги»",
    desc: "Развивающие занятия с детьми 1–3 лет, консультирование родителей по вопросам раннего развития.",
  },
  {
    year: "2012",
    title: "Психологическая лаборатория СИЗО-1",
    desc: "Психодиагностика, подготовка психологических заключений, проективные техники.",
  },
  {
    year: "2013",
    title: "Монтессори-педагогика",
    desc: "Международный институт Монтессори-педагогики — «Введение в Монтессори-педагогику».",
  },
  {
    year: "2013",
    title: "Детский сад «Лотос», Дмитров",
    desc: "Монтессори-педагог и психолог: адаптация детей, арт- и песочная терапия, консультирование родителей.",
  },
  {
    year: "2021",
    title: "Когнитивно-поведенческая терапия",
    desc: "Профессиональная переподготовка по направлению КПТ.",
  },
  {
    year: "2025",
    title: "ЦИСС, г. Дмитров",
    desc: "Психологическое сопровождение приёмных семей, тренинги для школы приёмных родителей, кураторство постинтернатного сопровождения.",
  },
];

const FORMATS = [
  {
    title: "Индивидуальные консультации",
    desc: "Развивающие и коррекционно-развивающие занятия с детьми 3–7 лет. Очно в Дмитрове или онлайн.",
  },
  {
    title: "Сопровождение приёмных семей",
    desc: "Индивидуальная работа с родителями и детьми, помощь в адаптации, привязанности и преодолении травматического опыта.",
  },
  {
    title: "Консультации и тренинги для родителей",
    desc: "Семейное консультирование, групповые тренинги, рекомендации по детско-родительским отношениям и раннему развитию.",
  },
];

const NAV_LINKS = [
  ["about", "Обо мне"],
  ["approach", "Подход"],
  ["journey", "Опыт"],
  ["gallery", "Галерея"],
  ["contact", "Контакт"],
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function Nav() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b"
      style={{
        backgroundColor: "rgba(250,246,241,0.94)",
        borderColor: "rgba(201,168,143,0.22)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-heading text-sm font-semibold tracking-[0.14em] uppercase"
          style={{ color: CHARCOAL }}
        >
          Арина Некрасова
        </button>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm transition-colors duration-200 hover:text-foreground"
              style={{ color: CAPTION }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85"
            style={{ backgroundColor: SAGE }}
          >
            Записаться
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          style={{ color: CHARCOAL }}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-3"
          style={{
            backgroundColor: CREAM,
            borderColor: "rgba(201,168,143,0.22)",
          }}
        >
          {NAV_LINKS.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              className="text-sm text-left py-1"
              style={{ color: BODY }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => go("contact")}
            className="mt-1 px-5 py-2.5 rounded-full text-sm font-medium text-white w-fit"
            style={{ backgroundColor: SAGE }}
          >
            Записаться
          </button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-16 overflow-hidden">
      <div
        className="grid grid-cols-1 md:grid-cols-[55%_45%]"
        style={{ minHeight: "calc(100svh - 4rem)" }}
      >
        <div
          className="relative h-[62vw] md:h-auto overflow-hidden"
          style={{ backgroundColor: "#D9CFC3" }}
        >
          <img
            src={HERO_IMG}
            alt="Арина Некрасова, детский психолог"
            className="w-full h-full object-cover object-[center_15%]"
          />
          <div
            className="hidden md:block absolute inset-y-0 right-0 w-16 pointer-events-none"
            style={{
              background: `linear-gradient(to right, transparent, ${CREAM})`,
            }}
          />
        </div>

        <div
          className="flex flex-col justify-center px-8 md:px-12 xl:px-16 py-14 md:py-0 relative"
          style={{ backgroundColor: CREAM }}
        >
          <p
            className="font-heading text-[0.68rem] font-medium tracking-[0.24em] uppercase mb-6"
            style={{ color: SAGE }}
          >
            Детский психолог · Дмитров
          </p>

          <h1
            className="font-heading text-5xl xl:text-6xl leading-[1.03] font-semibold mb-6"
            style={{ color: CHARCOAL }}
          >
            Арина
            <br />
            <span className="font-light italic" style={{ color: SAGE }}>
              Некрасова
            </span>
          </h1>

          <div className="w-10 h-[1.5px] mb-7" style={{ backgroundColor: TAUPE }} />

          <p
            className="text-base leading-[1.85] max-w-[360px] mb-10"
            style={{ color: BODY }}
          >
            Психологическое сопровождение детей и семей — в том числе приёмных.
            Более 14 лет опыта, арт-терапия, песочная и сказкотерапия.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85 group"
              style={{ backgroundColor: SAGE }}
            >
              Записаться
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium border transition-colors duration-200 hover:bg-white/70"
              style={{ color: BODY, borderColor: "rgba(201,168,143,0.5)" }}
            >
              Узнать больше
            </button>
          </div>

          <div className="absolute bottom-8 right-0 mr-10 hidden md:flex flex-col items-center gap-1.5">
            <div
              className="w-px h-10"
              style={{ backgroundColor: TAUPE, opacity: 0.7 }}
            />
            <ChevronDown className="w-3.5 h-3.5" style={{ color: TAUPE }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ backgroundColor: CREAM }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p
              className="font-heading text-[0.68rem] font-medium tracking-[0.24em] uppercase mb-4"
              style={{ color: SAGE }}
            >
              Обо мне
            </p>
            <h2
              className="font-heading text-4xl md:text-5xl font-semibold leading-[1.1] mb-7"
              style={{ color: CHARCOAL }}
            >
              Каждый ребёнок несёт в себе ресурс для роста
            </h2>
            <div className="w-10 h-[1.5px] mb-8" style={{ backgroundColor: TAUPE }} />
            <div className="space-y-5 text-base leading-[1.85]" style={{ color: BODY }}>
              <p>
                Меня зовут Арина Некрасова. Я детский психолог с более чем 14-летним
                стажем работы с детьми дошкольного возраста и их семьями.
              </p>
              <p>
                Специализируюсь на психологическом сопровождении приёмных и
                замещающих семей, адаптации детей в детском саду и семейном
                консультировании. Владею методами арт-терапии, песочной терапии и
                сказкотерапии, имею квалификацию по когнитивно-поведенческой терапии
                и Монтессори-педагогике.
              </p>
              <p>
                Работаю очно в г. Дмитров и Московской области, а также в формате
                онлайн-консультирования. Верю, что тёплые, доверительные отношения
                между специалистом, ребёнком и родителями — основа любых изменений.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[3/4] rounded-3xl overflow-hidden"
              style={{ backgroundColor: "#D9CFC3" }}
            >
              <img
                src={ABOUT_IMG}
                alt="Арина Некрасова"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl -z-10 hidden md:block"
              style={{ backgroundColor: TAUPE, opacity: 0.18 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32" style={{ backgroundColor: WARM }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="font-heading text-[0.68rem] font-medium tracking-[0.24em] uppercase mb-4"
            style={{ color: SAGE }}
          >
            Мой подход
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold leading-[1.1]"
            style={{ color: CHARCOAL }}
          >
            Принципы работы
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {APPROACH.map((item) => (
            <div
              key={item.num}
              className="group p-8 rounded-2xl bg-card border transition-shadow duration-300 hover:shadow-[0_4px_24px_rgba(139,154,125,0.12)]"
              style={{ borderColor: "rgba(201,168,143,0.28)" }}
            >
              <p
                className="font-heading text-xs font-medium tracking-[0.18em] mb-5"
                style={{ color: TAUPE }}
              >
                {item.num}
              </p>
              <h3
                className="font-heading text-xl font-semibold mb-3 transition-colors duration-200 group-hover:text-primary"
                style={{ color: CHARCOAL }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-[1.8]" style={{ color: BODY }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32" style={{ backgroundColor: CREAM }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="font-heading text-[0.68rem] font-medium tracking-[0.24em] uppercase mb-4"
            style={{ color: SAGE }}
          >
            Путь
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold leading-[1.1]"
            style={{ color: CHARCOAL }}
          >
            Образование и опыт
          </h2>
        </div>

        <div className="max-w-2xl">
          {TIMELINE.map((item, i) => (
            <div
              key={i}
              className="flex gap-8 md:gap-12 items-start pb-10 border-b last:border-b-0 last:pb-0"
              style={{ borderColor: "rgba(201,168,143,0.22)" }}
            >
              <div className="flex-shrink-0 pt-0.5">
                <span
                  className="font-heading text-sm font-medium tabular-nums"
                  style={{ color: TAUPE }}
                >
                  {item.year}
                </span>
              </div>

              <div className="flex-1">
                <div
                  className="w-1.5 h-1.5 rounded-full mb-3 mt-1.5"
                  style={{ backgroundColor: SAGE }}
                />
                <h3
                  className="font-heading text-lg font-semibold mb-1.5"
                  style={{ color: CHARCOAL }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.75]" style={{ color: CAPTION }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const nudge = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 420 : -420, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 md:py-32 overflow-hidden" style={{ backgroundColor: WARM }}>
      <div className="max-w-6xl mx-auto px-6 mb-10 flex items-end justify-between">
        <div>
          <p
            className="font-heading text-[0.68rem] font-medium tracking-[0.24em] uppercase mb-4"
            style={{ color: SAGE }}
          >
            Галерея
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold leading-[1.1]"
            style={{ color: CHARCOAL }}
          >
            Профессиональный портрет
          </h2>
        </div>

        <div className="hidden md:flex gap-3 pb-1">
          {(["left", "right"] as const).map((dir) => (
            <button
              key={dir}
              onClick={() => nudge(dir)}
              className="w-11 h-11 rounded-full border flex items-center justify-center transition-colors duration-200 hover:bg-white/70"
              style={{ borderColor: "rgba(201,168,143,0.45)" }}
              aria-label={dir === "left" ? "Назад" : "Вперёд"}
            >
              {dir === "left" ? (
                <ChevronLeft className="w-5 h-5" style={{ color: CAPTION }} />
              ) : (
                <ChevronRight className="w-5 h-5" style={{ color: CAPTION }} />
              )}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-4 overflow-x-auto"
        style={{
          paddingLeft: "max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem))",
          paddingRight: "1.5rem",
          paddingBottom: "0.5rem",
          scrollSnapType: "x mandatory",
        }}
      >
        {GALLERY.map((item, i) => (
          <div
            key={item.src}
            className="flex-shrink-0 relative rounded-2xl overflow-hidden"
            style={{
              width: "300px",
              height: "460px",
              scrollSnapAlign: "start",
              backgroundColor: "#D9CFC3",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={item.src}
              alt={item.caption}
              className="w-full h-full object-cover transition-transform duration-700"
              style={{ transform: hovered === i ? "scale(1.04)" : "scale(1)" }}
            />
            <div
              className="absolute inset-0 flex items-end p-6 transition-opacity duration-400"
              style={{
                background: "linear-gradient(to top, rgba(30,25,20,0.58) 0%, transparent 55%)",
                opacity: hovered === i ? 1 : 0,
              }}
            >
              <p className="text-white text-sm font-light leading-relaxed">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowIWork() {
  return (
    <section id="work" className="py-24 md:py-32" style={{ backgroundColor: CREAM }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p
            className="font-heading text-[0.68rem] font-medium tracking-[0.24em] uppercase mb-4"
            style={{ color: SAGE }}
          >
            Формат работы
          </p>
          <h2
            className="font-heading text-4xl md:text-5xl font-semibold leading-[1.1]"
            style={{ color: CHARCOAL }}
          >
            Как я работаю
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {FORMATS.map((f, i) => (
            <div key={i} className="group">
              <div
                className="w-8 h-[1.5px] mb-7 transition-all duration-300 group-hover:w-14"
                style={{ backgroundColor: SAGE }}
              />
              <h3
                className="font-heading text-lg font-semibold mb-3"
                style={{ color: CHARCOAL }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-[1.8]" style={{ color: BODY }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-20 md:mt-24 p-10 md:p-14 rounded-3xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          style={{ borderColor: "rgba(201,168,143,0.4)", backgroundColor: WARM }}
        >
          <div>
            <p
              className="font-heading text-[0.68rem] font-medium tracking-[0.24em] uppercase mb-3"
              style={{ color: SAGE }}
            >
              Первый шаг
            </p>
            <p
              className="font-heading text-2xl md:text-3xl font-semibold leading-snug"
              style={{ color: CHARCOAL }}
            >
              Свяжитесь со мной —<br className="hidden md:block" /> обсудим ваш запрос
            </p>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85 group"
            style={{ backgroundColor: SAGE }}
          >
            Записаться на консультацию
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const update =
    (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase: React.CSSProperties = {
    backgroundColor: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "0.75rem",
  };

  return (
    <section id="contact" className="py-24 md:py-32" style={{ backgroundColor: CHARCOAL }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <p
              className="font-heading text-[0.68rem] font-medium tracking-[0.24em] uppercase mb-4"
              style={{ color: SAGE }}
            >
              Связаться
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold leading-[1.1] mb-7 text-white">
              Сделайте первый шаг
            </h2>
            <div
              className="w-10 h-[1.5px] mb-8"
              style={{ backgroundColor: TAUPE, opacity: 0.5 }}
            />
            <p
              className="text-base leading-[1.85] mb-12 max-w-sm"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Готова ответить на ваше обращение. Очные консультации — в г. Дмитров,
              также доступен формат онлайн-консультирования.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p
                    className="text-[11px] tracking-wide mb-0.5"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    Локация
                  </p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    г. Дмитров, Московская область
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p
                    className="text-[11px] tracking-wide mb-0.5"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    Формат
                  </p>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
                    Очно и онлайн-консультирование
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            {submitted ? (
              <div>
                <div className="w-10 h-[1.5px] mb-7" style={{ backgroundColor: SAGE }} />
                <p className="font-heading text-2xl font-semibold text-white mb-3">
                  Спасибо за обращение
                </p>
                <p style={{ color: "rgba(255,255,255,0.5)" }}>
                  Я свяжусь с вами в ближайшее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  {
                    key: "name",
                    label: "Ваше имя",
                    type: "text",
                    placeholder: "Как вас зовут?",
                  },
                  {
                    key: "contact",
                    label: "Телефон или Telegram",
                    type: "text",
                    placeholder: "+7 или @username",
                  },
                ].map((f) => (
                  <div key={f.key}>
                    <label
                      className="block text-[11px] tracking-wide mb-2"
                      style={{ color: "rgba(255,255,255,0.38)" }}
                    >
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={form[f.key as keyof typeof form]}
                      onChange={update(f.key)}
                      required
                      className="w-full px-4 py-3.5 text-sm text-white outline-none transition-all duration-200 focus:ring-1 placeholder:text-white/20"
                      style={{ ...inputBase, "--tw-ring-color": SAGE } as React.CSSProperties}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block text-[11px] tracking-wide mb-2"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                  >
                    Сообщение
                  </label>
                  <textarea
                    placeholder="Расскажите о вашем запросе..."
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className="w-full px-4 py-3.5 text-sm text-white outline-none resize-none transition-all duration-200 focus:ring-1 placeholder:text-white/20"
                    style={{ ...inputBase, "--tw-ring-color": SAGE } as React.CSSProperties}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-medium text-white transition-opacity duration-200 hover:opacity-85"
                  style={{ backgroundColor: SAGE }}
                >
                  Отправить заявку
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="py-7 border-t"
      style={{ backgroundColor: CHARCOAL, borderColor: "rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-heading text-sm font-medium text-white/60">Арина Некрасова</p>
        <p className="text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
          © 2026 Детский психолог. Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Approach />
      <Journey />
      <Gallery />
      <HowIWork />
      <Contact />
      <Footer />
    </div>
  );
}