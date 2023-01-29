
export default function CoverData(props: any) {
    return (
        <p className={`${props.className ? props.className : ''
            }`}
            style={{ color: `${props.color}`, fontSize: `${props.size}rem` }}
        >{props.children}</p>
    );
}