

type Props = {

    time: number
    changeTime: React.Dispatch<React.SetStateAction<number>>
}

export default function Time({time, changeTime}: Props) {
    return(
        <div className="w-2/3 h-8 flex flex-row items-center justify-between bg-inherit ">
            <div className="flex flex-row items-center justify-around w-1/4 h-full">
                <div>15s</div>
                <div>30s</div>
                <div>60s</div>
            </div>
        </div>
    )
}