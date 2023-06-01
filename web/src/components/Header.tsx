import Logo from '../assets/logo.svg'


export const Header = () => {
    return (
        <header className= 'bg-red-500'>
            <div className='flex items-center justify-start gap-3 max-w-[1200px] w-full mx-auto py-8 px-5'>
                <img src={Logo} alt="cachorro" />   
                <h2 className='text-gray-100 font-semibold text-3xl'>Pet House</h2>
            </div>   
        </header>
    ) 
}