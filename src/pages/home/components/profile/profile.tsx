import { Avatar } from '../../../../uis/avatar/avatar'

type Props = {
  initials: string
  nameJa: string
  nameEn: string
  affiliation: string
  location: string
  bio: string
}

export const Profile = ({
  initials,
  nameJa,
  nameEn,
  affiliation,
  location,
  bio,
}: Props) => {
  return (
    <div className="flex flex-col items-center text-center gap-3 pt-12 pb-2">
      <Avatar initials={initials} size={96} />
      <div className="mt-2">
        <h1 className="text-2xl font-bold text-[#3a3028] m-0">{nameJa}</h1>
        <p className="text-sm text-[#8a7a6c] mt-0.5">{nameEn}</p>
      </div>
      <p className="text-sm text-[#6b5744]">{affiliation}</p>
      <p className="text-xs text-[#8a7a6c]">📍 {location}</p>
      <p className="text-sm text-[#6b5744] leading-relaxed max-w-[320px] mt-1">
        {bio}
      </p>
    </div>
  )
}
