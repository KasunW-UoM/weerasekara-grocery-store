import { TruckIcon, XIcon, ZapIcon } from "lucide-react"
import { useState } from "react"


const Banner = () => {

    const [bannerVisible, setBannerVisible] = useState(()=>{
        return sessionStorage.getItem("banner_dismissed") !== "true"
    })
    const dismissBanner =()=>{
        setBannerVisible(false)
        sessionStorage.setItem("banner_dismissed", "true")
    }
  return (
    <div>
      {bannerVisible && (
        <div className="bg-linear-to-r from-app-green via-emerald-800 to-app-green text-white text-xs 
        sm:text-sm relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex-center gap-6">
                <div className="flex items-center gap-2">
                    <TruckIcon size={18} className="shrink-0" />
                    <span className="font-medium">Free delivery on orders over Rs 3000</span>
                </div>
                <span className="hidden sm:inline text-white/40"></span>
                <div className="hidden sm:flex items-center gap-2">
                    <ZapIcon size={18} className="fill-yellow-400 text-yellow-400 shrink-0" />
                    <span>Farm-fresh produce delivered Daily</span>
                </div>
            </div>

            <button onClick={dismissBanner} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full 
            hover:bg-white/10 transition-colors">
                <XIcon size={14} />
            </button>
        </div>
      )}
    </div>
  )
}

export default Banner
