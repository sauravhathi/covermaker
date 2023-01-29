
export default function CoverImage({ src, objectPosition, bgColor }: any) {
    return (
        src ? <img src={src} alt="cover" className="w-full h-full object-cover" style={{ objectPosition: `${objectPosition}` }} />
            : <div className="w-full h-full rounded-sm" style={{ backgroundColor: `${bgColor}` }}></div>
    )
}
