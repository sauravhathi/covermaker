const FileInput = (props: any) => {
    const { icon, defaultValue, setDefaultData, dataKey } = props;

    const handleFile = (e: any) => {
        if (e.target.files) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                setDefaultData([
                    {
                        ...defaultValue[0],
                        [dataKey]: reader.result as string
                    }
                ])
            }
        }
    }

    return (
        <label className='fileImageLable'>
            {icon}
            <input type="file" name={dataKey}
                accept="image/*"
                onChange={handleFile}
                className="hidden" />
            {defaultValue[0][dataKey] ? `Change ${dataKey}` : `Upload ${dataKey}`}
        </label>
    )
}

export default FileInput