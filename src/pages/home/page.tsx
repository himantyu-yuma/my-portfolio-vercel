import { profileData } from './data'
import { Profile } from './components/profile/profile'
import { Section } from '../../uis/section/section'
import { SectionHeader } from '../../uis/sectionHeader/sectionHeader'
import { Tag } from '../../uis/tag/tag'
import { LinkCard } from '../../uis/linkCard/linkCard'

export const LinkPage = () => {
  const {
    initials,
    nameJa,
    nameEn,
    affiliation,
    location,
    bio,
    tags,
    socialLinks,
    externalLinks,
  } = profileData

  return (
    <div className="flex flex-col items-center gap-8 px-6 pb-16">
      <Profile
        initials={initials}
        nameJa={nameJa}
        nameEn={nameEn}
        affiliation={affiliation}
        location={location}
        bio={bio}
      />

      <Section>
        <div className="flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="SNS" />
        <div className="flex flex-col gap-3">
          {socialLinks.map((link) => (
            <LinkCard
              key={link.platform}
              href={link.url}
              iconSrc={link.iconSrc}
              title={link.platform}
              subtitle={link.handle}
            />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Links" />
        <div className="flex flex-col gap-3">
          {externalLinks.map((link) => (
            <LinkCard
              key={link.title}
              href={link.url}
              iconSrc={link.iconSrc}
              title={link.title}
              subtitle={link.subtitle}
              variant="accent"
            />
          ))}
        </div>
      </Section>
    </div>
  )
}
