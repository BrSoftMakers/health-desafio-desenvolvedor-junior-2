import { Cat, Dog } from 'phosphor-react'


interface CardProps {
    name: string
    image: string
    type: string
}

export const Card = ({ image, name, type }: CardProps) => {
    return (
        <div className="bg-gray-100 w-[280px] relative rounded-2xl">
            <img src={image} className="w-[280px] h-[135px] object-cover rounded-2xl" />
            <div className={` p-3 ${type === 'gato' ? "bg-red-500" : "bg-yellow-400"} absolute right-[113px] bottom-[56px] rounded-xl`}>
                {type === 'gato' ? <Cat size={30} color="#fff" /> : <Dog size={30} color="#fff" />}
            </div>
            <p className="flex items-center justify-center py-5 font-medium text-xl mt-4">{name}</p>
        </div>
    )
}

