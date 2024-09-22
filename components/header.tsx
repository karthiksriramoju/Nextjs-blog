import Image from "next/image";
import Link from "next/link";


const Header = () => {
  return (
    <header>
      <Link href={"/"}>
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className="w-[35px] h-[35px]"
          width="35"
          height="35"
        />
      </Link>  
    </header>
  )
}

export default Header
