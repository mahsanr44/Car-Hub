import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className='w-full absolute z-10 '>
      <nav className='max-w-screen-2xl mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href={'/'} className='flex justify-center items-center mt-5'>
            <Image src={'/logo.svg'} alt='cars logo' width={100} height={100} className='object-contain'/>
        </Link>
<CustomButton title={'Sign In'} btnType='button' containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]' />
      </nav>
    </header>
  )
}

export default Navbar
