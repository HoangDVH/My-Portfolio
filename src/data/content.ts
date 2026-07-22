import type { Lang } from '../context/AppContext'
import easymartImg from '../assets/projects/easymart.png'
import managementImg from '../assets/projects/management.png'
import netflixImg from '../assets/projects/netflix.png'

export const profileMeta = {
  name: 'Đấu Vũ Hoàng',
  brand: 'Đấu Vũ Hoàng',
  location: 'Hồ Chí Minh, Vietnam',
  phone: '0337095980',
  phoneDisplay: '+84 337 095 980',
  phoneHref: 'tel:+84337095980',
  email: 'dauvuhoang01@gmail.com',
  linkedin: 'https://www.linkedin.com/in/%C4%91%E1%BA%A5u-v%C5%A9-ho%C3%A0ng-5a2929212',
  github: 'https://github.com/HoangDVH',
  cv: '/Dau-Vu-Hoang-CV.pdf',
} as const

type Localized<T> = Record<Lang, T>

export const ui = {
  nav: {
    work: { en: 'Work', vi: 'Dự án' },
    experience: { en: 'Experience', vi: 'Kinh nghiệm' },
    skills: { en: 'Skills', vi: 'Kỹ năng' },
    about: { en: 'About', vi: 'Giới thiệu' },
    contact: { en: 'Contact', vi: 'Liên hệ' },
    hire: { en: 'Hire me', vi: 'Thuê tôi' },
    cv: { en: 'CV PDF', vi: 'CV PDF' },
  },
  hero: {
    available: {
      en: 'Open to opportunities · Hồ Chí Minh',
      vi: 'Sẵn sàng nhận việc · Hồ Chí Minh',
    },
    role: {
      en: 'Full Stack Java Developer',
      vi: 'Full Stack Java Developer',
    },
    headline: {
      en: 'Secure, scalable web apps — from Spring Boot APIs to React UI.',
      vi: 'Ứng dụng web bảo mật, mở rộng được — từ API Spring Boot đến UI React.',
    },
    lead: {
      en: 'Fullstack with strong backend focus: JWT/RBAC, Redis, PostgreSQL, and TypeScript. Ready to join a team and deliver production-quality software.',
      vi: 'Fullstack lệch backend: JWT/RBAC, Redis, PostgreSQL và TypeScript. Sẵn sàng join team và deliver phần mềm chất lượng production.',
    },
    ctaWork: { en: 'See my work', vi: 'Xem dự án' },
    ctaMail: { en: 'Email me', vi: 'Gửi email' },
    scroll: { en: 'Scroll', vi: 'Cuộn' },
  },
  proof: {
    eyebrow: { en: 'Why hire me', vi: 'Vì sao nên tuyển' },
    items: [
      {
        label: { en: 'Impact', vi: 'Tác động' },
        value: {
          en: 'Redis cut DB load ~60–70% on EasyMart',
          vi: 'Redis giảm ~60–70% tải DB trên EasyMart',
        },
      },
      {
        label: { en: 'Proof', vi: 'Bằng chứng' },
        value: {
          en: 'Live demos + GitHub for main projects',
          vi: 'Có demo sống + GitHub cho dự án chính',
        },
      },
      {
        label: { en: 'Fit', vi: 'Phù hợp' },
        value: {
          en: 'Java/Spring + React/TS · UIT · JLPT N3',
          vi: 'Java/Spring + React/TS · UIT · JLPT N3',
        },
      },
    ],
  },
  work: {
    eyebrow: { en: 'Selected work', vi: 'Dự án nổi bật' },
    title: {
      en: 'Work recruiters can verify',
      vi: 'Dự án nhà tuyển dụng có thể kiểm chứng',
    },
    desc: {
      en: 'Click live demo or case study — stack, problem, and outcome in one place.',
      vi: 'Bấm demo hoặc case study — stack, bài toán và kết quả ở một chỗ.',
    },
    caseStudy: { en: 'Case study', vi: 'Case study' },
    live: { en: 'Live demo', vi: 'Xem demo' },
    github: { en: 'GitHub', vi: 'GitHub' },
    also: { en: 'Also built', vi: 'Dự án khác' },
  },
  experience: {
    eyebrow: { en: 'Experience', vi: 'Kinh nghiệm' },
    title: { en: 'Timeline at a glance', vi: 'Timeline nhìn một phát là hiểu' },
    desc: {
      en: 'Internship → military service → back to shipping web products.',
      vi: 'Thực tập → nghĩa vụ → quay lại ship sản phẩm web.',
    },
    related: { en: 'Related project', vi: 'Dự án liên quan' },
  },
  skills: {
    eyebrow: { en: 'Tech stack', vi: 'Tech stack' },
    title: {
      en: 'Java · Spring · React — my daily stack',
      vi: 'Java · Spring · React — stack dùng hàng ngày',
    },
    desc: {
      en: 'Six core strengths up front. Supporting tools listed cleanly below.',
      vi: 'Sáu thế mạnh chính lên trước. Tool hỗ trợ liệt kê gọn bên dưới.',
    },
    core: { en: 'Core', vi: 'Core' },
    languages: { en: 'Spoken languages', vi: 'Ngôn ngữ' },
    professional: { en: 'How I work', vi: 'Cách tôi làm việc' },
  },
  about: {
    eyebrow: { en: 'About', vi: 'Giới thiệu' },
    title: {
      en: 'From UIT to production code',
      vi: 'Từ UIT đến code production',
    },
    p1: {
      en: 'Information Technology graduate (UIT). After military service, I returned to building real products — business websites and fullstack apps with Spring Boot and React.',
      vi: 'Tốt nghiệp CNTT (UIT). Sau nghĩa vụ quân sự, tôi quay lại xây sản phẩm thật — website doanh nghiệp và app fullstack với Spring Boot và React.',
    },
    p2: {
      en: 'I care about secure APIs, clear UI, and work that recruiters can verify through live demos and source code.',
      vi: 'Tôi chú trọng API bảo mật, UI rõ ràng, và sản phẩm recruiter có thể kiểm chứng qua demo và source code.',
    },
    education: { en: 'Education', vi: 'Học vấn' },
    certifications: { en: 'Certifications', vi: 'Chứng chỉ' },
    activities: { en: 'Activities', vi: 'Hoạt động' },
  },
  contact: {
    eyebrow: { en: 'Next step', vi: 'Bước tiếp theo' },
    title: { en: 'Let’s talk — I’m ready to join', vi: 'Nói chuyện nào — mình sẵn sàng join' },
    lead: {
      en: 'Full-time, freelance, or collaborator. Email or LinkedIn — I reply fast.',
      vi: 'Full-time, freelance hoặc CTV. Email hoặc LinkedIn — mình reply nhanh.',
    },
    emailMe: { en: 'Email me now', vi: 'Gửi email ngay' },
    email: { en: 'Email', vi: 'Email' },
    phone: { en: 'Phone', vi: 'Điện thoại' },
    based: { en: 'Based in', vi: 'Địa điểm' },
  },
  caseStudy: {
    back: { en: 'Back to work', vi: 'Về dự án' },
    overview: { en: 'Overview', vi: 'Tổng quan' },
    challenge: { en: 'Challenge', vi: 'Thách thức' },
    solution: { en: 'Solution', vi: 'Giải pháp' },
    outcome: { en: 'Outcome', vi: 'Kết quả' },
    stack: { en: 'Tech stack', vi: 'Công nghệ' },
    role: { en: 'Role', vi: 'Vai trò' },
    period: { en: 'Timeline', vi: 'Thời gian' },
    team: { en: 'Team', vi: 'Nhóm' },
    notFound: { en: 'Case study not found.', vi: 'Không tìm thấy case study.' },
  },
  theme: {
    light: { en: 'Light', vi: 'Sáng' },
    dark: { en: 'Dark', vi: 'Tối' },
  },
  footer: {
    role: {
      en: 'Full Stack Java Developer · Hồ Chí Minh',
      vi: 'Full Stack Java Developer · Hồ Chí Minh',
    },
  },
} as const

export function t(value: Localized<string>, lang: Lang) {
  return value[lang]
}

export const coreStack = [
  'Java',
  'Spring Boot',
  'React',
  'TypeScript',
  'PostgreSQL',
  'Redis',
] as const

export const skillGroupLabels: Localized<string>[] = [
  { en: 'Languages', vi: 'Ngôn ngữ lập trình' },
  { en: 'Frontend', vi: 'Frontend' },
  { en: 'Backend', vi: 'Backend' },
  { en: 'State & Data', vi: 'State & Data' },
  { en: 'Tools', vi: 'Công cụ' },
]

export const skillItems = [
  ['JavaScript (ES6+)', 'TypeScript', 'Java'],
  [
    'React',
    'Next.js',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Bootstrap',
    'Ant Design',
  ],
  [
    'Spring Boot',
    'Spring Security',
    'JWT',
    'Node.js',
    'Express.js',
    'REST APIs',
    'Hibernate/JPA',
  ],
  [
    'Redux Toolkit',
    'Zustand',
    'React Query',
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Redis',
  ],
  ['Git & GitHub', 'Docker', 'Postman', 'Swagger', 'WordPress', 'Figma'],
] as const

export const softSkills: Localized<string>[] = [
  { en: 'Problem-solving', vi: 'Giải quyết vấn đề' },
  { en: 'Teamwork', vi: 'Làm việc nhóm' },
  { en: 'Technical reading', vi: 'Đọc tài liệu kỹ thuật' },
  { en: 'Fast learning', vi: 'Học nhanh' },
]

export const spokenLanguages = [
  {
    name: { en: 'English', vi: 'Tiếng Anh' },
    level: {
      en: 'Technical reading proficiency',
      vi: 'Đọc hiểu tài liệu kỹ thuật',
    },
  },
  {
    name: { en: 'Japanese', vi: 'Tiếng Nhật' },
    level: { en: 'JLPT N3 certified', vi: 'Chứng chỉ JLPT N3' },
  },
] as const

export const education = {
  school: {
    en: 'University of Information Technology (UIT)',
    vi: 'Trường Đại học Công nghệ Thông tin (UIT)',
  },
  degree: {
    en: 'Information Technology',
    vi: 'Công nghệ thông tin',
  },
  period: '2019 – 2023',
} as const

export const certifications = [
  {
    name: 'JLPT N3',
    detail: {
      en: 'Japanese Language Proficiency Test',
      vi: 'Kỳ thi năng lực tiếng Nhật',
    },
    year: '2025',
  },
] as const

export const activities = [
  {
    name: { en: 'Military Service', vi: 'Nghĩa vụ quân sự' },
    period: 'Feb 2024 – Feb 2026',
  },
] as const

export type ProjectId = 'easymart' | 'management' | 'netflix'

export type Project = {
  id: ProjectId
  accent: string
  image: string
  featured: boolean
  stack: string[]
  live: string | null
  github: string
  name: Localized<string>
  tagline: Localized<string>
  period: string
  role: Localized<string>
  team: Localized<string>
  highlights: Localized<string>[]
  caseStudy: {
    overview: Localized<string>
    challenge: Localized<string>
    solution: Localized<string>
    outcome: Localized<string>
    bullets: Localized<string>[]
  }
}

export const projects: Project[] = [
  {
    id: 'easymart',
    accent: '#1a6b5c',
    image: easymartImg,
    featured: true,
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
    ],
    live: 'https://easy-mart-vert.vercel.app/',
    github: 'https://github.com/HoangDVH/EasyMart',
    name: { en: 'EasyMart', vi: 'EasyMart' },
    tagline: {
      en: 'Fullstack e-commerce web application',
      vi: 'Ứng dụng e-commerce fullstack',
    },
    period: 'Apr 2026 – Present',
    role: { en: 'Fullstack Developer', vi: 'Fullstack Developer' },
    team: { en: 'Solo', vi: 'Solo' },
    highlights: [
      {
        en: 'Result: Redis caching cut catalog/session DB load by ~60–70%.',
        vi: 'Kết quả: Redis giảm ~60–70% tải DB catalog/session.',
      },
      {
        en: 'Secure JWT + refresh tokens + RBAC across Admin/Seller/User.',
        vi: 'JWT + refresh token + RBAC cho Admin/Seller/User.',
      },
      {
        en: 'End-to-end commerce: cart, orders, dashboards, Docker + Cloudinary.',
        vi: 'Commerce end-to-end: giỏ hàng, đơn, dashboard, Docker + Cloudinary.',
      },
    ],
    caseStudy: {
      overview: {
        en: 'EasyMart is a production-minded e-commerce platform covering catalog browsing, cart/checkout flows, order tracking, and Admin/Seller management — built as a solo fullstack project.',
        vi: 'EasyMart là nền tảng e-commerce hướng production: duyệt catalog, giỏ hàng/checkout, theo dõi đơn và quản trị Admin/Seller — dự án fullstack solo.',
      },
      challenge: {
        en: 'Deliver secure multi-role commerce flows while keeping the storefront fast under repeated catalog and session reads.',
        vi: 'Cần commerce đa vai trò bảo mật, đồng thời giữ storefront nhanh khi catalog và session bị đọc lặp lại nhiều lần.',
      },
      solution: {
        en: 'Spring Boot + Spring Security with JWT access/refresh tokens and RBAC; React/TypeScript UI with Zustand and React Query; Redis for catalog/session caching; message queue for async order status updates; Cloudinary for media; Docker for packaging.',
        vi: 'Spring Boot + Spring Security với JWT access/refresh và RBAC; UI React/TypeScript dùng Zustand + React Query; Redis cache catalog/session; message queue cập nhật đơn; Cloudinary cho media; Docker đóng gói.',
      },
      outcome: {
        en: 'End-to-end commerce workflows shipped with measurable cache gains (≈60–70% fewer DB hits on hot paths) and a deployable Dockerized stack.',
        vi: 'Ship được luồng commerce end-to-end, giảm ≈60–70% truy vấn DB trên hot path nhờ cache, và stack Docker sẵn sàng deploy.',
      },
      bullets: [
        {
          en: 'Auth & authorization: JWT + refresh rotation + role checks',
          vi: 'Auth & phân quyền: JWT + refresh + kiểm tra role',
        },
        {
          en: 'Performance: Redis cache for products and sessions',
          vi: 'Hiệu năng: Redis cache sản phẩm và session',
        },
        {
          en: 'Async ops: queue-driven order status notifications',
          vi: 'Bất đồng bộ: thông báo trạng thái đơn qua queue',
        },
        {
          en: 'Ops: Cloudinary media + Docker containers',
          vi: 'Ops: media Cloudinary + container Docker',
        },
      ],
    },
  },
  {
    id: 'management',
    accent: '#2c4a6e',
    image: managementImg,
    featured: true,
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    live: 'https://management-frontend-alpha-two.vercel.app/',
    github: 'https://github.com/HoangDVH/Management-Project',
    name: {
      en: 'Project Management System',
      vi: 'Hệ thống quản lý dự án',
    },
    tagline: {
      en: 'Workspace & task platform',
      vi: 'Nền tảng workspace & task',
    },
    period: 'Mar 2023 – Jun 2023',
    role: { en: 'Fullstack Developer', vi: 'Fullstack Developer' },
    team: { en: '2 members', vi: '2 thành viên' },
    highlights: [
      {
        en: 'Result: collaborative workspace/task product with OAuth + RBAC.',
        vi: 'Kết quả: sản phẩm workspace/task có OAuth + RBAC.',
      },
      {
        en: 'Node/Express APIs + MongoDB; React UI with Zustand & React Query.',
        vi: 'API Node/Express + MongoDB; UI React với Zustand & React Query.',
      },
      {
        en: 'Live demo available for recruiters to click through login flow.',
        vi: 'Có demo sống để recruiter click thử luồng login.',
      },
    ],
    caseStudy: {
      overview: {
        en: 'A collaborative project management system for workspaces, member invites, projects, and task assignment — similar to a lightweight CMS/dashboard product.',
        vi: 'Hệ thống quản lý dự án cộng tác: workspace, mời thành viên, project và giao task — gần với sản phẩm CMS/dashboard nhẹ.',
      },
      challenge: {
        en: 'Support secure multi-user collaboration with clear permissions while keeping the React UI responsive and free of redundant fetches.',
        vi: 'Hỗ trợ cộng tác đa user với phân quyền rõ, đồng thời giữ UI React mượt và tránh gọi API thừa.',
      },
      solution: {
        en: 'Node/Express REST APIs with session auth, Google OAuth, and RBAC; MongoDB/Mongoose schemas; React + Tailwind UI; Zustand for client state and React Query for server cache; Zod for validation.',
        vi: 'REST API Node/Express với session auth, Google OAuth và RBAC; schema MongoDB/Mongoose; UI React + Tailwind; Zustand + React Query; validate Zod.',
      },
      outcome: {
        en: 'A usable end-to-end management product with OAuth login, role-aware access, and optimized client/server state handling.',
        vi: 'Sản phẩm quản lý end-to-end dùng được với OAuth, phân quyền theo role và tối ưu state client/server.',
      },
      bullets: [
        {
          en: 'Auth: email/password sessions + Google OAuth',
          vi: 'Auth: session email/password + Google OAuth',
        },
        {
          en: 'Core: workspaces, invites, projects, task CRUD',
          vi: 'Core: workspace, mời thành viên, project, CRUD task',
        },
        {
          en: 'UX performance: fewer re-renders and API round-trips',
          vi: 'UX: giảm re-render và số lần gọi API',
        },
      ],
    },
  },
  {
    id: 'netflix',
    accent: '#8b3a3a',
    image: netflixImg,
    featured: false,
    stack: ['React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'],
    live: null,
    github: 'https://github.com/HoangDVH/netflix-clone',
    name: { en: 'Netflix Clone', vi: 'Netflix Clone' },
    tagline: {
      en: 'Streaming-inspired web app',
      vi: 'Ứng dụng web phong cách streaming',
    },
    period: 'Sep 2023 – Jan 2024',
    role: { en: 'Frontend Developer', vi: 'Frontend Developer' },
    team: { en: '3 members', vi: '3 thành viên' },
    highlights: [
      {
        en: 'Responsive UI with auth, RBAC, and CRUD over REST APIs.',
        vi: 'UI responsive với auth, RBAC và CRUD qua REST API.',
      },
      {
        en: 'Lazy loading and Redux Toolkit for clearer state flow.',
        vi: 'Lazy loading và Redux Toolkit để luồng state rõ hơn.',
      },
    ],
    caseStudy: {
      overview: {
        en: 'A Netflix-inspired frontend built during a WATA Software internship in a 3-person Agile-like team.',
        vi: 'Frontend phong cách Netflix làm trong kỳ thực tập tại WATA Software, nhóm 3 người theo quy trình gần Agile.',
      },
      challenge: {
        en: 'Ship a consistent responsive UI with authentication and role-based access while keeping initial load times reasonable.',
        vi: 'Ship UI responsive thống nhất có auth và phân quyền, đồng thời giữ thời gian tải ban đầu hợp lý.',
      },
      solution: {
        en: 'React + TypeScript + TailwindCSS with Redux Toolkit/thunk, react-router, hooks, REST CRUD, and lazy loading for route/code splitting.',
        vi: 'React + TypeScript + TailwindCSS với Redux Toolkit/thunk, react-router, hooks, CRUD REST và lazy loading.',
      },
      outcome: {
        en: 'Delivered a collaborative frontend with secure access patterns and improved perceived performance via lazy loading.',
        vi: 'Hoàn thành frontend nhóm với auth/RBAC và cải thiện cảm nhận tốc độ nhờ lazy loading.',
      },
      bullets: [
        {
          en: 'UI consistency across devices with TailwindCSS',
          vi: 'UI thống nhất đa thiết bị với TailwindCSS',
        },
        {
          en: 'Auth + RBAC for secure user management',
          vi: 'Auth + RBAC cho quản lý user',
        },
        {
          en: 'Global state simplified with Redux Toolkit',
          vi: 'State toàn cục gọn hơn với Redux Toolkit',
        },
      ],
    },
  },
]

export const experiences = [
  {
    company: 'Jieum Sangsa',
    period: 'Mar 2026 – Present',
    role: {
      en: 'Web Developer (WordPress)',
      vi: 'Web Developer (WordPress)',
    },
    team: null as Localized<string> | null,
    stack: ['HTML5', 'CSS3', 'JavaScript', 'WordPress'],
    highlights: [
      {
        en: 'Developed and maintained responsive website interfaces across devices and browsers.',
        vi: 'Phát triển và duy trì giao diện website responsive trên nhiều thiết bị/trình duyệt.',
      },
      {
        en: 'Customized WordPress themes and plugins to match business requirements.',
        vi: 'Tùy biến theme/plugin WordPress theo yêu cầu nghiệp vụ.',
      },
      {
        en: 'Monitored site performance and resolved technical issues to keep systems stable.',
        vi: 'Theo dõi hiệu năng và xử lý sự cố kỹ thuật để hệ thống ổn định.',
      },
      {
        en: 'Improved UX with image optimization and load-time reductions.',
        vi: 'Tối ưu ảnh và giảm thời gian tải để cải thiện UX.',
      },
    ],
  },
  {
    company: {
      en: 'Military Service',
      vi: 'Nghĩa vụ quân sự',
    },
    period: 'Feb 2024 – Feb 2026',
    role: {
      en: 'Completed national service',
      vi: 'Hoàn thành nghĩa vụ quân sự',
    },
    team: null as Localized<string> | null,
    stack: [] as string[],
    highlights: [
      {
        en: 'Completed military service — explains the career gap before returning to software work.',
        vi: 'Hoàn thành nghĩa vụ quân sự — giải thích khoảng trống trước khi quay lại làm phần mềm.',
      },
    ],
  },
  {
    company: 'WATA Software',
    period: 'Sep 2023 – Jan 2024',
    role: {
      en: 'Frontend Developer Intern',
      vi: 'Thực tập sinh Frontend Developer',
    },
    team: { en: '3 members', vi: '3 thành viên' },
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    highlights: [
      {
        en: 'Shipped responsive UI features in a 3-person Agile-like team.',
        vi: 'Ship tính năng UI responsive trong nhóm 3 người theo quy trình gần Agile.',
      },
      {
        en: 'Owned auth/RBAC screens and REST-driven CRUD flows on a streaming-inspired product.',
        vi: 'Phụ trách màn auth/RBAC và luồng CRUD qua REST trên sản phẩm phong cách streaming.',
      },
      {
        en: 'Improved perceived performance with lazy loading and clearer Redux Toolkit state.',
        vi: 'Cải thiện cảm nhận tốc độ bằng lazy loading và state Redux Toolkit rõ hơn.',
      },
    ],
    link: 'https://github.com/HoangDVH/netflix-clone',
  },
] as const
