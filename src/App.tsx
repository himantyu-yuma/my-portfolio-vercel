import { Flex } from './uis/flex/flex'
import { Header } from './uis/header/header'
import { LinkCard } from './uis/linkCard/linkCard'
import { Avatar } from './uis/avatar/avatar'
import { Tag } from './uis/tag/tag'
import iconImage from './assets/icon.jpeg'

/* === プロフィール部分 === */
const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center text-center gap-3 pt-12 pb-2">
      {/* === Step 1. アイコンを表示させる */}
      <Avatar iconPath={iconImage} initials="" size={96} />

      {/* === Step 2. 自分の名前、所属、一言を表示させる === */}
      {/* 💡自分の情報に書き換えよう */}

      <div className="mt-2">
        <span className="text-2xl font-bold text-[#3a3028] m-0">笠原 有真</span>
        <p className="text-sm text-[#8a7a6c] mt-0.5">Yuma Kasahara</p>
      </div>
      <p className="text-sm text-[#6b5744]">技育キャンプ公式メンター</p>
      <p className="text-xs text-[#8a7a6c]">📍 東京</p>
      <p className="text-sm text-[#6b5744] leading-relaxed max-w-[320px] mt-1">
        ゲームグラフィックスエンジニアです！Webも好きです！
      </p>
    </div>
  )
}

type LinkData = {
  title: string
  subtitle: string
  url: string
}

/* === Step 3. リンクを表示させる */
const SocialLinkSection = () => {
  const socialLinks: LinkData[] = [
    {
      title: 'X (Twitter)',
      subtitle: '@kshrdsg',
      url: 'https://x.com/kshrdsg',
    },
    {
      title: 'GitHub',
      subtitle: 'himantyu-yuma',
      url: 'https://github.com/himantyu-yuma',
    },
  ]

  return (
    <Flex direction="column" gap="md">
      <Header title="SNS" as="h2" />

      {/* 💡ここに自分のSNSリンクを貼り付けよう */}

      {socialLinks.map((link) => (
        <LinkCard
          title={link.title}
          subtitle={link.subtitle}
          href={link.url}
          key={link.url}
        />
      ))}
    </Flex>
  )
}

/* Step Ex1. SNS以外のリンクも表示させる */
const PersonalLinkSection = () => {
  const personalLinks: LinkData[] = [
    {
      title: 'ポートフォリオサイト',
      subtitle: 'これまで作った作品',
      url: 'https://himantyu-yuma.github.io/portfolio/',
    },
    {
      title: 'Qiita',
      subtitle: 'たまに書いてます',
      url: 'https://qiita.com/tsuchi-noko',
    },
  ]

  return (
    <Flex direction="column" gap="md">
      <Header title="Links" as="h2" />

      {/* 💡SNS以外のリンクを表示させるコードを書いてみよう */}
      {personalLinks.map((link) => (
        <LinkCard
          key={link.title}
          title={link.title}
          subtitle={link.subtitle}
          href={link.url}
          variant="accent"
        />
      ))}
    </Flex>
  )
}

/* === Step Ex2. タグを表示させる */
const TagSection = () => {
  const tags = ['Web', 'React', 'ゲーム開発', 'VJ', 'チェロ']

  {
    /* 💡完成画像を参考に、タグを表示させるコードを書いてみましょう
    タグは Tag コンポーネントで表示できます
    App 内に TagSection を配置するのも忘れずに！ */
  }
  return (
    <Flex direction="row" gap="sm" wrap="wrap" justify="center">
      {tags.map((tag) => (
        <Tag label={tag} />
      ))}
    </Flex>
  )
}

/* === ページ本体 === */
function App() {
  return (
    <div className="flex flex-col items-center gap-8 px-6 pb-16">
      <ProfileSection />

      <TagSection />

      <SocialLinkSection />

      <PersonalLinkSection />
    </div>
  )
}

export default App
