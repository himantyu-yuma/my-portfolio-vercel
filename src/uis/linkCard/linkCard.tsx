type Props = {
  href: string
  iconSrc?: string
  title: string
  subtitle?: string
  variant?: 'default' | 'accent'
}

export const LinkCard = ({
  href,
  iconSrc,
  title,
  subtitle,
  variant = 'default',
}: Props) => {
  const baseClasses =
    'flex items-center gap-3 rounded-xl px-4 py-3.5 no-underline transition-all'
  const variantClasses =
    variant === 'accent'
      ? 'bg-[#2e7cb8] text-white hover:opacity-90'
      : 'bg-white shadow-sm hover:shadow-md text-[#1e3a5f]'

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${variantClasses}`}
    >
      {iconSrc && <img src={iconSrc} alt="" className="w-5 h-5 shrink-0" />}
      <div className="flex flex-col min-w-0">
        <span className="font-medium text-sm">{title}</span>
        {subtitle && (
          <span
            className={`text-xs ${
              variant === 'accent' ? 'text-white/70' : 'text-[#5a7a9f]'
            }`}
          >
            {subtitle}
          </span>
        )}
      </div>
    </a>
  )
}
