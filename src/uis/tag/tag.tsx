type Props = {
  label: string
}

export const Tag = ({ label }: Props) => {
  return (
    <span className="rounded-full bg-white px-4 py-1.5 text-sm text-[#1e3a5f]">
      {label}
    </span>
  )
}
