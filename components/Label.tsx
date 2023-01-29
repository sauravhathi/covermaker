
const Label = ({ htmlFor, text }: any) => {
    return (
        <label htmlFor={htmlFor} className='mt-2'>
            {text}
        </label>
    )
}

export default Label