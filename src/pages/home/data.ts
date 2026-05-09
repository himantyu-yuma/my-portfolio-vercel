type SocialLink = {
  platform: string
  iconSrc?: string
  handle: string
  url: string
}

type ExternalLink = {
  title: string
  iconSrc?: string
  subtitle?: string
  url: string
}

export type ProfileData = {
  initials: string
  nameJa: string
  nameEn: string
  affiliation: string
  location: string
  bio: string
  tags: string[]
  socialLinks: SocialLink[]
  externalLinks: ExternalLink[]
}

export const profileData: ProfileData = {
  initials: 'TG',
  nameJa: '技育 太郎',
  nameEn: 'Taro Giiku',
  affiliation: '技育大学 情報工学科 1年',
  location: '東京',
  bio: 'Webとゲーム開発に興味のある大学生です。最近Reactを勉強中！ものづくりが好きな人とつながりたいです！',
  tags: ['React', 'TypeScript', 'Unity', 'ゲーム制作', '写真'],
  socialLinks: [
    {
      platform: 'X (Twitter)',
      handle: '@taro_dev',
      url: 'https://x.com',
    },
    {
      platform: 'GitHub',
      handle: 'taro-yamada',
      url: 'https://github.com',
    },
    {
      platform: 'Instagram',
      handle: '@taro.photo',
      url: 'https://instagram.com',
    },
    {
      platform: 'YouTube',
      handle: 'Taro Channel',
      url: 'https://youtube.com',
    },
    {
      platform: 'Email',
      handle: 'taro@example.com',
      url: 'mailto:taro@example.com',
    },
  ],
  externalLinks: [
    {
      title: 'ポートフォリオサイト',
      subtitle: 'portfolio.example.com',
      url: 'https://portfolio.example.com',
    },
    {
      title: '技術ブログ',
      subtitle: 'エンジニアブログ',
      url: 'https://taro-blog.example.com',
    },
  ],
}
