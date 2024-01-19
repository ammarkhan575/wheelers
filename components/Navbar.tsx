import Link from "next/link"
import Image from "next/image"
import { CustomButton } from "@/components"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <h3 className="font-bold text-2xl">Wheelers.</h3>
            <CustomButton 
                title="Sign In"
                btnType="button"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"

            />
        </nav>
    </header>
  )
}

export default Navbar