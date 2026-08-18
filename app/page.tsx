import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "등대독서회 | 책과 사람을 잇는 금요일",
  description:
    "㈜제주비 임직원 누구나 함께하는 사내 독서동호회. 매주 금요일 11:00~13:00, 본관 3층 회의실에서 만나요.",
};

const activities = [
  {
    number: "01",
    title: "함께 고르는 책",
    text: "문학부터 인문, 에세이, 비즈니스까지. 서로의 추천을 모아 다음 책을 함께 정합니다.",
  },
  {
    number: "02",
    title: "마음에 남은 문장",
    text: "밑줄 그은 한 문장과 그 이유를 나눕니다. 같은 문장도 서로 다른 시선으로 다시 빛납니다.",
  },
  {
    number: "03",
    title: "정답 없는 대화",
    text: "가벼운 감상부터 주제 발제까지, 자유롭게 질문하고 듣고 이야기합니다.",
  },
  {
    number: "04",
    title: "나만의 책 추천",
    text: "오래 아껴온 책, 요즘 나에게 필요한 책을 동료에게 소개하며 취향의 지도를 넓혀갑니다.",
  },
];

const values = [
  ["새로운 관점", "익숙한 생각에서 한 걸음 벗어나 봅니다."],
  ["꾸준한 독서", "금요일 두 시간이 자연스러운 독서 습관이 됩니다."],
  ["동료와의 연결", "부서를 넘어 사람과 사람으로 편안하게 만납니다."],
  ["한 주의 쉼표", "업무에서 잠시 벗어나 생각을 환기합니다."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="등대독서회 홈으로">
          <span className="brand-mark" aria-hidden="true">등</span>
          <span>등대독서회</span>
        </a>
        <nav aria-label="주요 메뉴">
          <a href="#about">소개</a>
          <a href="#activities">활동</a>
          <a href="#meeting">모임 안내</a>
        </nav>
        <a className="header-cta" href="#join">함께 읽기</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> ㈜제주비 사내 독서동호회</p>
          <h1>
            한 주의 끝,<br />
            <em>책과 사람</em>을 잇는 두 시간
          </h1>
          <p className="hero-description">
            잘 읽어야 한다는 부담은 잠시 내려놓으세요.<br />
            한 권의 책에서 시작된 생각이 서로를 비추는 곳,
            등대독서회입니다.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#join">
              이번 금요일 함께하기 <span aria-hidden="true">→</span>
            </a>
            <a className="button button-ghost" href="#meeting">모임 정보 보기</a>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="moon" />
          <div className="light-beam" />
          <div className="lighthouse">
            <div className="lighthouse-top"><span /></div>
            <div className="lighthouse-body"><i /><i /><i /></div>
          </div>
          <div className="cliff" />
          <div className="wave wave-one" />
          <div className="wave wave-two" />
          <div className="book-stack"><span /><span /><span /></div>
        </div>

        <div className="quick-facts" aria-label="정기모임 요약">
          <div><small>WHEN</small><strong>매주 금요일</strong><span>11:00 — 13:00</span></div>
          <div><small>WHERE</small><strong>본관 3층</strong><span>회의실</span></div>
          <div><small>WHO</small><strong>㈜제주비</strong><span>임직원 누구나</span></div>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-label"><span>01</span> ABOUT US</div>
        <div className="about-grid">
          <h2>책을 사이에 두고,<br /><em>조금 더 가까이</em></h2>
          <div className="about-copy">
            <p className="lead">
              등대독서회는 책을 매개로 서로의 생각과 일상을 나누는
              ㈜제주비의 사내 독서 모임입니다.
            </p>
            <p>
              한 주 동안 각자의 자리에서 바쁘게 달려온 사람들이 금요일에 모입니다.
              같은 책을 읽어도 마음에 남은 장면은 다르고, 던지고 싶은 질문도 다릅니다.
              우리는 그 다름을 천천히 듣고 이야기하며 서로의 세계를 넓혀갑니다.
            </p>
            <p>
              독서량도, 전문 지식도 필요하지 않습니다. 완독하지 못해도 괜찮고
              처음 참여해도 괜찮습니다. 읽은 만큼, 느낀 만큼 편안하게 머물러 주세요.
            </p>
          </div>
        </div>
        <blockquote>
          <span aria-hidden="true">“</span>
          혼자 읽으면 한 권의 책이지만,<br />함께 읽으면 여러 개의 세계가 됩니다.
        </blockquote>
      </section>

      <section className="activities section" id="activities">
        <div className="section-heading">
          <div>
            <div className="section-label light"><span>02</span> WHAT WE DO</div>
            <h2>금요일의 두 시간은<br />이렇게 흘러갑니다</h2>
          </div>
          <p>정해진 답도, 어려운 규칙도 없습니다.<br />책을 중심에 두고 자연스럽게 이야기합니다.</p>
        </div>
        <div className="activity-grid">
          {activities.map((activity) => (
            <article className="activity-card" key={activity.number}>
              <span>{activity.number}</span>
              <div className={`activity-icon icon-${activity.number}`} aria-hidden="true"><i /></div>
              <h3>{activity.title}</h3>
              <p>{activity.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="value-section section">
        <div className="section-label"><span>03</span> WHY JOIN</div>
        <div className="value-layout">
          <div className="value-intro">
            <h2>책 한 권이 만드는<br /><em>작지만 분명한 변화</em></h2>
            <p>독서는 혼자 하는 일이지만, 함께 나누는 순간 더 오래 남습니다.</p>
          </div>
          <div className="value-list">
            {values.map(([title, description], index) => (
              <div className="value-item" key={title}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <strong>{title}</strong>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="meeting section" id="meeting">
        <div className="meeting-card">
          <div className="meeting-copy">
            <div className="section-label light"><span>04</span> REGULAR MEETING</div>
            <p className="meeting-kicker">매주 금요일, 잠시 멈춰 책을 펼칩니다.</p>
            <h2>정기모임 안내</h2>
            <dl>
              <div><dt>일시</dt><dd>매주 금요일 <strong>11:00 — 13:00</strong></dd></div>
              <div><dt>장소</dt><dd>본관 3층 회의실</dd></div>
              <div><dt>대상</dt><dd>㈜제주비 임직원 누구나</dd></div>
            </dl>
          </div>
          <div className="meeting-note">
            <span className="note-pin" aria-hidden="true" />
            <p>처음 오시나요?</p>
            <strong>책을 다 읽지 못해도<br />그냥 오셔도 좋아요.</strong>
            <small>듣기만 해도, 한 문장만 나눠도<br />충분한 참여입니다.</small>
          </div>
        </div>
      </section>

      <section className="first-timer section">
        <div>
          <div className="section-label"><span>05</span> FIRST TIME?</div>
          <h2>처음이라도<br />어렵지 않아요</h2>
        </div>
        <ol className="steps">
          <li><b>01</b><div><strong>가볍게 찾아오세요</strong><p>금요일 11시, 본관 3층 회의실로 오시면 됩니다.</p></div></li>
          <li><b>02</b><div><strong>편안하게 들어보세요</strong><p>첫 모임에는 분위기를 살피며 듣기만 해도 괜찮습니다.</p></div></li>
          <li><b>03</b><div><strong>한 문장을 나눠보세요</strong><p>마음에 남은 문장 하나면 대화를 시작하기에 충분합니다.</p></div></li>
        </ol>
      </section>

      <section className="join section" id="join">
        <div className="join-rays" aria-hidden="true" />
        <p className="eyebrow centered"><span /> THE NEXT CHAPTER <span /></p>
        <h2>이번 금요일,<br /><em>당신이 발견한 한 문장</em>을 들려주세요.</h2>
        <p>등대독서회는 언제나 새로운 이야기를 기다리고 있습니다.</p>
        <div className="join-contact">
          <span>참여 및 문의</span>
          <strong>사내 메신저 채널 · 담당자 정보 입력 예정</strong>
        </div>
        <a className="button button-primary" href="#meeting">모임 안내 다시 보기 <span aria-hidden="true">↑</span></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark" aria-hidden="true">등</span>
          <span>등대독서회</span>
        </a>
        <p>책을 통해 서로의 생각을 비추는 곳</p>
        <small>㈜제주비 사내 독서동호회</small>
      </footer>
    </main>
  );
}
