import Image from "next/image"
import me from "public/me.jpg"
const HeroSection = () => {
  return (
    <div className="relative h-screen">
        <div className="absolute inset-0 -z-10">
        <Image
            src={me}
            fill
            alt="hehe"
            style={{objectFit:"cover"}}
        />
        </div>
        <div className="flex item justify-center pt-64">
            <h1 className="text-6xl text-black">HeHe HeHE</h1>
        </div>
    </div>
  )
}

export default HeroSection