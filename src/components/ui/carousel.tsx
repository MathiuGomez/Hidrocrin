import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  autoPlayInterval?: number
  className?: string
}

export function Carousel({ images, autoPlayInterval = 5000, className = "" }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(new Array(images.length).fill(false))
  const [imageError, setImageError] = useState<boolean[]>(new Array(images.length).fill(false))

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [currentIndex, images.length, autoPlayInterval, isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }

  const handleImageError = (index: number) => {
    setImageError(prev => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }

  if (images.length === 0) {
    return null
  }

  return (
    <div className={`relative group ${className}`}>
      {/* Main Image */}
      <div className="aspect-square rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl relative bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Loading Skeleton */}
        {!imageLoaded[currentIndex] && !imageError[currentIndex] && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
        )}

        {/* Error State */}
        {imageError[currentIndex] && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="text-center p-6">
              <svg
                className="mx-auto h-16 w-16 sm:h-20 sm:w-20 text-gray-400 mb-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm text-gray-500">Imagen no disponible</p>
            </div>
          </div>
        )}

        {/* Image */}
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          loading={currentIndex === 0 ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => handleImageLoad(currentIndex)}
          onError={() => handleImageError(currentIndex)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            imageLoaded[currentIndex] ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ 
            aspectRatio: '1/1',
            maxWidth: '100%',
            height: 'auto'
          }}
        />
        
        {/* Gradient Overlay for better button visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-3 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-3 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-1.5 sm:p-2 md:p-3 shadow-lg opacity-80 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Siguiente imagen"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 md:gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-5 sm:w-6 md:w-8 h-1.5 sm:h-2 md:h-2.5"
                  : "bg-white/60 hover:bg-white/80 w-1.5 sm:w-2 md:w-2.5 h-1.5 sm:h-2 md:h-2.5"
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-2.5 sm:top-3 md:top-4 right-2.5 sm:right-3 md:right-4 bg-black/60 text-white px-2 sm:px-2.5 md:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs md:text-sm font-medium backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  )
}

