# Design System — 우리사이

> 카카오톡 대화 분석 서비스의 디자인 시스템.
> **index.html (랜딩 페이지)** 을 단일 소스로 추출·정리. 다른 페이지 전용 토큰은 `[future]` 표기.

---

## 1. 브랜드 무드

**"조용한 불안, 그리고 희미한 따뜻함"**

- 밤하늘 위에 별이 깜빡이는 어둠 — 연인 사이의 불확실함
- 핑크~로즈 계열 포인트 — 사랑, 온도, 감정
- 보라 보조색 — 신비, 궁금증, 심층 분석
- 극도로 절제된 UI — 글자와 빛만으로 감정 전달

---

## 2. Color Tokens

### 2.1 Base

| Token | Hex | CSS Variable | 용도 |
|-------|-----|:---:|------|
| `bg-primary` | `#0B0E1A` | ✅ | 전체 배경 (다크 네이비) |
| `text-primary` | `#E4DDF0` | ✅ | 본문 텍스트 (라벤더 화이트) |
| `text-heading` | `#F4D0DD` | ✅ | 헤딩 (연핑크) |

### 2.2 Accent (Rose)

| Token | Value | CSS Variable | 용도 |
|-------|-------|:---:|------|
| `accent` | `#D07080` | ✅ | 주 포인트 색 (로즈) |
| `accent-dark` | `#A25866` | ✅ | CTA 그라디언트 시작 |
| `accent-warm` | `#F0A0B8` | ✅ | 온도 숫자 ° 표기 등 밝은 핑크 |
| `accent-glow` | `rgba(208,112,128,0.3)` | ✅ | 글로우/쉐도우 |
| `accent-bg` | `rgba(208,112,128,0.12)` | ✅ | 포인트 배경 |
| `accent-border` | `rgba(208,112,128,0.25)` | ✅ | 포인트 보더 |

### 2.3 Secondary (Purple)

| Token | Value | CSS Variable | 용도 |
|-------|-------|:---:|------|
| `purple` | `#C8A0E8` | ✅ | 보조 강조 (상대방 수치 등) |
| `purple-soft` | `#C8A0DC` | — `[future]` | 라벨, 기간 태그 |
| `purple-bg` | `rgba(200,160,220,0.15)` | — `[future]` | 보조 배경 |
| `purple-border` | `rgba(200,160,220,0.25)` | — `[future]` | 보조 보더 |

### 2.4 Neutral (Muted Purple Scale)

밝은 순 → 어두운 순. 텍스트 위계용.

| Token | Hex | CSS Variable | 용도 |
|-------|-----|:---:|------|
| `neutral-100` | `#B8B0D0` | ✅ | 필 텍스트, 가이드 설명 |
| `neutral-200` | `#B0A0C8` | ⚠️ 하드코딩 | empathy-close 텍스트 |
| `neutral-300` | `#A098C0` | ✅ | 프리뷰 메시지, 알림링크 |
| `neutral-400` | `#9890B0` | ✅ | 히어로 서브카피, 모달 설명 |
| `neutral-500` | `#9088B0` | ✅ | 스크롤 힌트, 카드 부연 |
| `neutral-600` | `#8880A8` | — `[future]` | 가이드 세부설명, 힌트 |
| `neutral-700` | `#8878A0` | ✅ | 위스퍼 텍스트 |
| `neutral-800` | `#706890` | ✅ | 프라이버시, 라벨, placeholder, 모달 닫기 |
| `neutral-900` | `#605878` | ✅ | preview-more 텍스트 |
| `neutral-1000` | `#504868` | ✅ | CTA 하위 텍스트 |
| `neutral-1100` | `#383050` | ✅ | 푸터 |

**⚠️ 토큰화 필요 (index.html에 하드코딩):**

| 하드코딩 값 | 사용처 | 권장 토큰명 |
|------------|--------|------------|
| `#B0A0C8` | `.empathy-close` 텍스트 | `neutral-200` (CSS 변수로 승격) |
| `#7870A0` | `.stat-name` 텍스트 | `neutral-650` 또는 별도 토큰 |
| `#8878A8` | `.blur-row span:first-child` 텍스트 | neutral-700(`#8878A0`)과 거의 동일, 통일 권장 |

### 2.5 Semantic

| Token | Value | CSS Variable | 용도 |
|-------|-------|:---:|------|
| `error` | `#ff6b6b` | ⚠️ 하드코딩 | 전화번호 검증 실패 (input border) |
| `success` | `#82C8AA` | — `[future]` | 파일 업로드 완료 |
| `success-bg` | `rgba(130,200,170,0.06)` | — `[future]` | 업로드 완료 배경 |
| `success-border` | `rgba(130,200,170,0.15)` | — `[future]` | 업로드 완료 보더 |

### 2.6 Surface

| Token | Value | CSS Variable | 용도 |
|-------|-------|:---:|------|
| `surface-card` | `rgba(20,12,40,0.5)` | ✅ | 프리뷰 카드 그라디언트 끝점 |
| `surface-pill` | `rgba(18,14,36,0.4)` | ✅ | how-steps 필 |
| `surface-blur-row` | `rgba(36,28,64,0.4)` | ✅ | 블러 행 |
| `card-border` | `rgba(150,120,200,0.1)` | ✅ | 카드 보더 기본 |
| `surface-result` | `rgba(20,15,40,0.6)` | — `[future]` | 결과 카드 |
| `surface-stat` | `rgba(40,30,70,0.5)` | — `[future]` | 스탯 박스 |
| `card-border-hover` | `rgba(150,120,200,0.2)` | — `[future]` | 카드 보더 호버 |

**카드 그라디언트 패턴** (surface-card 변수 + 하드코딩 시작점):

```css
background: linear-gradient(160deg, rgba(60,30,90,0.35) 0%, var(--surface-card) 100%);
```

---

## 3. Typography

### 3.1 Font Stack

```
'Pretendard', -apple-system, sans-serif
```

> CDN: `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css`

### 3.2 Type Scale

index.html에서 실제 사용되는 값 기준.

| Name | Size | Weight | Letter-spacing | Line-height | 용도 |
|------|------|--------|---------------|-------------|------|
| `display` | 80px | 700 | -0.03em | 1 | 온도 숫자 |
| `h1` | 34px | 700 | -0.02em | 1.45 | 히어로 헤드카피 |
| `h2` | 22px | 700 | — | — | 스탯 값 |
| `modal-title` | 20px | 700 | — | 1.4 | 모달 제목 |
| `success-title` | 18px | 600 | — | — | 모달 성공 제목 |
| `h3` | 17px | 600 | — | — | CTA 버튼 |
| `body` | 15px | 400 | — | 1.9 | 히어로 서브카피 |
| `body-light` | 15px | 300 | — | 1.8 | 위스퍼 텍스트 |
| `body-sm` | 14px | 400~500 | — | — | empathy-close, 모달 설명, 알림링크 |
| `caption` | 13px | 400~500 | — | — | 프라이버시, blur-row, 성공 설명 |
| `label` | 12px | 500 | 2px | — | 섹션 라벨 (uppercase), 필 텍스트, CTA 하위 |
| `micro` | 11px | 400~700 | 0~1px | — | 스탯 이름, 스크롤 힌트, 푸터, 모달 프라이버시 |
| `nano` | 9~10px | — | — | — | `[future]` 히트맵 라벨, 차트 라벨 |

### 3.3 텍스트 위계 패턴

```
Heading  → text-heading (#F4D0DD) + h1
Sub      → neutral-400 (#9890B0) + body
Whisper  → neutral-700 (#8878A0) + body-light + 왼쪽 그라디언트 보더
Label    → neutral-800 (#706890) + label + uppercase
Value    → accent (#D07080) + h2
```

---

## 4. Spacing & Layout

### 4.1 Container

```
max-width: 480px
padding: 0 24px
margin: 0 auto
```

> 모바일 퍼스트. 480px 이상에서도 중앙 정렬 유지.

### 4.2 Section Padding (수직)

| Section | Top | Bottom |
|---------|-----|--------|
| Hero | 0 (flex center, 100svh) | 0 |
| Empathy | 72px | 24px |
| Preview | 56px | 64px |
| Bottom zone | 0 | 48px |

### 4.3 Gap Scale

| Value | 용도 |
|-------|------|
| 2px | how-pills 사이 |
| 4px | margin-top 미니멀 (stat-name, modal-privacy) |
| 6px | scroll hint gap, success-title margin-bottom |
| 8px | blur-row gap, privacy-line gap |
| 10px | phone-input-wrap gap |
| 12px | cta-sub margin-top, preview-msg margin-top, modal-privacy margin-bottom |
| 14px | preview-more margin-top, notify-link margin-bottom |
| 16px | hero h1 margin-bottom, success-check margin-bottom |
| 20px | blur items margin-top, privacy-line padding-bottom |
| 24px | 컨테이너 padding, 모달 overlay padding, preview-stats padding-top |
| 28px | whisper margin-bottom, preview-stats margin-top, 모달 설명 margin-bottom, 모달 label margin-bottom |
| 32px | how-steps margin-bottom, footer padding, 모달 카드 padding-bottom |
| 40px | card padding-top, 모달 카드 padding-top, empathy-close padding-top |
| 48px | hero dots margin-bottom |

### 4.4 Z-Index Scale

| Value | 용도 |
|-------|------|
| `0` | stars-layer (배경) |
| `1` | container (콘텐츠) |
| `100` | modal-overlay |

---

## 5. Border Radius

| Token | Value | CSS Variable | 용도 |
|-------|-------|:---:|------|
| `radius-card` | `20px` | ✅ | 프리뷰 카드, 모달 카드 |
| `radius-md` | `16px` | ✅ | CTA 버튼 |
| `radius-base` | `14px` | ✅ | how-steps 필 |
| `radius-sm` | `12px` | ✅ | 모달 인풋, 모달 서브밋 버튼 |
| `radius-xs` | `10px` | ✅ | blur row |
| `radius-pill` | `50%` | — | 동그라미 (dot, success-check) |

---

## 6. Effects

### 6.1 Backdrop Blur

```css
backdrop-filter: blur(16px);   /* 프리뷰 카드 */
backdrop-filter: blur(20px);   /* 모달 카드 */
backdrop-filter: blur(6px);    /* 모달 오버레이 */
```

### 6.2 Content Blur (잠금)

```css
filter: blur(4px);   /* 랜딩 프리뷰 blur row */
```

### 6.3 Glow

```css
box-shadow: 0 4px 28px var(--accent-glow);           /* CTA 버튼 (primary) */
box-shadow: 0 2px 16px var(--accent-glow);            /* 모달 서브밋 버튼 (secondary) */
box-shadow: 0 0 12px var(--accent-glow),
            0 0 32px var(--accent-glow);               /* 히어로 dot */
text-shadow: 0 0 24px var(--accent-glow);             /* 온도 숫자 (idle) */
text-shadow: 0 0 48px var(--accent-glow),
             0 0 80px rgba(208,112,128,0.06);          /* 온도 숫자 (pulse) */
```

### 6.4 Gradient Patterns

```css
/* CTA 버튼, 모달 서브밋 */
background: linear-gradient(135deg, var(--accent-dark), var(--accent));

/* 프리뷰 카드 surface */
background: linear-gradient(160deg, rgba(60,30,90,0.35), var(--surface-card));

/* 모달 카드 */
background: linear-gradient(160deg, rgba(40,24,72,0.95), rgba(16,10,32,0.98));

/* 위스퍼 왼쪽 보더 */
background: linear-gradient(180deg, rgba(200,140,180,0.25), transparent);

/* 히어로 배경 ambient */
background:
  radial-gradient(ellipse at 50% 50%, rgba(120,60,160,0.14), transparent 65%),
  radial-gradient(ellipse at 30% 70%, rgba(200,100,140,0.06), transparent 50%);

/* thread (hero dots 연결선) */
background: linear-gradient(90deg, transparent 5%, var(--accent-glow), transparent 95%);
```

---

## 7. Animation

### 7.1 Scroll Reveal

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}
[data-reveal].revealed {
  opacity: 1;
  transform: none;
}
```

stagger: 위스퍼 항목은 0.2s 간격으로 딜레이. empathy-close는 0.7s.

### 7.2 Star Field

- 밀도: ~90개 (density 0.9 × 100)
- 사이즈: 1.2~3px
- 투명도: 0.35~0.9
- 색상: 대부분 white, 6%가 lavender(`rgba(200,180,255,0.9)`) 또는 pink(`rgba(255,200,220,0.8)`)
- 초기 등장: `star-in` 2s ease-out, 이후 twinkle로 전환 (2.2~3.4s 후)
- twinkle 주기: 3~8s
- 18% 확률로 8~38초 후 서서히 사라짐 (opacity 6s ease-out transition)

### 7.3 Hero Dots

두 점(dot-a, dot-b)이 20s 주기로 가까워졌다 멀어지는 애니메이션.
- 가까울 때 opacity 1, 멀어지면 opacity 0.4
- 사이에 연결선(thread)이 같은 20s 주기로 페이드 (0.4 → 0.04)

### 7.4 Temperature Glow

```css
@keyframes temp-glow {
  0%   { text-shadow: 0 0 24px var(--accent-glow); }
  100% { text-shadow: 0 0 48px var(--accent-glow), 0 0 80px rgba(208,112,128,0.06); }
}
/* 3.5s ease-in-out infinite alternate */
```

### 7.5 Scroll Hint Bounce

```css
@keyframes hint-bounce {
  0%, 100% { opacity: 0.8; translateY(0); }
  50%      { opacity: 0.4; translateY(8px); }
}
/* 2s ease-in-out infinite */
```

### 7.6 Interaction

```css
button:active { transform: scale(0.97); }
transition: transform 0.15s;                          /* 서브밋 버튼 */
transition: transform 0.15s, box-shadow 0.2s;         /* CTA 버튼 */
transition: border-color 0.2s;                         /* 인풋 focus */
transition: color 0.15s;                               /* 알림링크 hover */
```

---

## 8. Components

### 8.1 CTA Button (Primary)

```
width: 100%
padding: 20px 0
background: linear-gradient(135deg, accent-dark, accent)
color: white
border: none
border-radius: radius-md (16px)
font: 17px / 600
box-shadow: 0 4px 28px accent-glow
:active → scale(0.97)
```

### 8.2 Preview Card

```
background: linear-gradient(160deg, rgba(60,30,90,0.35) 0%, surface-card 100%)
border: 1px solid card-border
border-radius: radius-card (20px)
padding: 40px 24px 32px
backdrop-filter: blur(16px)
text-align: center
overflow: hidden
::before → radial-gradient 글로우 (우상단)
```

### 8.3 Stat (Preview 내)

```
text-align: center
.stat-val → 22px / 700 / accent (또는 .purple → purple)
.stat-name → 11px / #7870A0 / margin-top 4px
```

### 8.4 Whisper Text

```
font: 15px / 300
color: neutral-700
padding-left: 4px
margin-bottom: 28px
line-height: 1.8
::before → 3px wide gradient bar (left -12px, top 6px)
           linear-gradient(180deg, rgba(200,140,180,0.25), transparent)
```

### 8.5 How-Steps (Pill Row)

```
display: flex, gap: 2px
margin-bottom: 32px

각 필:
  flex: 1
  padding: 16px 8px
  background: surface-pill
  첫 번째: border-radius radius-base 0 0 radius-base
  마지막:  border-radius 0 radius-base radius-base 0

.pill-num → 11px / 700 / accent / opacity 0.7
.pill-text → 12px / 500 / neutral-100 / line-height 1.4
```

### 8.6 Preview Blur Row

```
display: flex, justify-content: space-between
padding: 10px 16px
background: surface-blur-row
border-radius: radius-xs (10px)
filter: blur(4px)
user-select: none
font-size: 13px
label → #8878A8
value → accent / font-weight 600
```

### 8.7 Modal

```
Overlay:
  position: fixed, inset: 0
  background: rgba(0,0,0,0.75)
  backdrop-filter: blur(6px)
  z-index: 100
  display: flex, align-items: center, justify-content: center
  padding: 24px

Card:
  background: linear-gradient(160deg, rgba(40,24,72,0.95), rgba(16,10,32,0.98))
  border: 1px solid rgba(150,120,200,0.15)
  border-radius: radius-card (20px)
  backdrop-filter: blur(20px)
  padding: 40px 28px 32px
  max-width: 400px, width: 100%
  text-align: center

Close button:
  position: absolute, top: 16px, right: 16px
  color: neutral-800
  font-size: 20px

Title → 20px / 700 / text-heading / margin-bottom 8px
Desc  → 14px / 400 / neutral-400 / line-height 1.7 / margin-bottom 28px
```

### 8.8 Input (Phone/Text)

```
padding: 14px 16px
background: rgba(12,8,28,0.6)
border: 1px solid rgba(150,120,200,0.2)
border-radius: radius-sm (12px)
font-size: 16px
color: text-primary
::placeholder → neutral-800
:focus → border-color: accent-border
error → border-color: #ff6b6b
```

### 8.9 Submit Button (Secondary)

```
width: 100%
padding: 14px 24px
background: linear-gradient(135deg, accent-dark, accent)
color: white
border-radius: radius-sm (12px)
font: 15px / 600
box-shadow: 0 2px 16px accent-glow
:active → scale(0.97)
```

### 8.10 Success State (Modal 내)

```
.success-check:
  56px circle (border-radius: 50%)
  background: accent-bg
  border: 2px solid accent-border
  가운데 체크 SVG (accent 색)
  margin-bottom: 16px

.success-title → 18px / 600 / text-heading
.success-desc  → 13px / 400 / neutral-400 / line-height 1.6
```

### 8.11 Notify Link

```
font-size: 14px
color: neutral-300
text-decoration: underline
text-underline-offset: 3px
text-decoration-color: rgba(160,152,192,0.4)
cursor: pointer
:active → color: accent
transition: color 0.15s
margin-bottom: 14px
```

### 8.12 Privacy Line

```
display: flex, align-items: center, justify-content: center, gap: 8px
SVG icon → 14×14, neutral-800
span → 13px, neutral-800
(UTM variant=privacy 일 때만 표시)
```

---

## 9. 페이지별 톤 가이드

| 페이지 | 감정 흐름 | 카피 톤 |
|--------|----------|---------|
| Landing | 조용한 불안 → 호기심 → 행동 | 위스퍼 (속삭이듯), 질문형, 짧은 문장 |
| Upload | 안내 → 신뢰 | 친근하고 명확, "~해주세요", "~면 돼요" |
| Result | 긴장 → 숫자 → 해석 → 해소 | 통계 중심, 코멘트는 한 줄, 이모지 절제 |

---

## 10. 반응형

- 기본 뷰포트: **모바일 (< 480px)**
- `max-width: 480px` 컨테이너로 데스크톱에서도 모바일 레이아웃 유지
- `100svh` (small viewport height) 사용 — 모바일 주소창 대응
- 인앱 브라우저 감지: KAKAOTALK UA → 크롬 외부 브라우저 유도 `[future]`
