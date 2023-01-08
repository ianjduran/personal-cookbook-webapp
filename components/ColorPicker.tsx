function ColorPicker({onChange }: {onChange: Function }) {
    
    const colors: string[] = [
        '#f87171',
        '#34d399',
        '#0ea5e9',
        '#3b82f6',
        '#a855f7',
        '#f43f5e',
        '#171717'
    ];
    return (
        <div className=" my-2 flex gap-2">
            {colors.map((color, i) => {
                return (
                    <div key={i}>
                        <div className={`h-6 w-6 rounded-full hover:brightness-[85%]`} style={{backgroundColor: color}}
                            onClick={()=>onChange(color)}></div>
                    </div>
                )
            })}
        </div>

    )
}

export default ColorPicker