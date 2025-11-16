interface VideoProps {
  /**
   * URL del video. Puede ser:
   * - Link de YouTube (ej: https://www.youtube.com/watch?v=VIDEO_ID)
   * - Link de Vimeo (ej: https://vimeo.com/VIDEO_ID)
   * - URL directa de video (ej: https://ejemplo.com/video.mp4)
   */
  src: string
  /**
   * Título del video para accesibilidad
   */
  title?: string
  /**
   * Clases CSS adicionales
   */
  className?: string
  /**
   * Si es true, el video se reproducirá automáticamente (solo para videos HTML5)
   */
  autoPlay?: boolean
  /**
   * Si es true, el video se reproducirá en bucle (solo para videos HTML5)
   */
  loop?: boolean
  /**
   * Si es true, el video se reproducirá sin sonido (solo para videos HTML5)
   */
  muted?: boolean
  /**
   * Si es true, mostrará controles de reproducción (solo para videos HTML5)
   */
  controls?: boolean
}

/**
 * Componente de video que soporta YouTube, Vimeo y videos HTML5
 */
export function Video({ 
  src, 
  title = "Video", 
  className = "",
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true
}: VideoProps) {
  // Detectar si es un link de YouTube
  const isYouTube = src.includes("youtube.com") || src.includes("youtu.be")
  
  // Detectar si es un link de Vimeo
  const isVimeo = src.includes("vimeo.com")
  
  // Extraer ID de YouTube
  const getYouTubeId = (url: string): string | null => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }
  
  // Extraer ID de Vimeo (y hash de privacidad si existe)
  const getVimeoId = (url: string): { videoId: string | null; hash?: string } => {
    // Patrón para videos con hash de privacidad: vimeo.com/VIDEO_ID/HASH
    const hashPattern = /vimeo\.com\/(\d+)\/([a-f0-9]+)/
    const hashMatch = url.match(hashPattern)
    if (hashMatch) {
      return { videoId: hashMatch[1], hash: hashMatch[2] }
    }
    
    // Patrón estándar: vimeo.com/VIDEO_ID
    const standardPattern = /vimeo\.com\/(\d+)/
    const standardMatch = url.match(standardPattern)
    if (standardMatch) {
      return { videoId: standardMatch[1] }
    }
    
    return { videoId: null }
  }
  
  // Si es YouTube
  if (isYouTube) {
    const videoId = getYouTubeId(src)
    if (!videoId) {
      return (
        <div className={`aspect-video rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center ${className}`}>
          <p className="text-gray-500">URL de YouTube inválida</p>
        </div>
      )
    }
    
    const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
    
    return (
      <div className={`aspect-video rounded-2xl overflow-hidden ${className}`}>
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    )
  }
  
  // Si es Vimeo
  if (isVimeo) {
    const { videoId, hash } = getVimeoId(src)
    if (!videoId) {
      return (
        <div className={`aspect-video rounded-2xl overflow-hidden bg-gray-200 flex items-center justify-center ${className}`}>
          <p className="text-gray-500">URL de Vimeo inválida</p>
        </div>
      )
    }
    
    // Si hay hash de privacidad, incluirlo en la URL de embed
    let embedUrl = `https://player.vimeo.com/video/${videoId}?title=0&byline=0&portrait=0`
    if (hash) {
      embedUrl += `&h=${hash}`
    }
    
    return (
      <div className={`aspect-video rounded-2xl overflow-hidden ${className}`}>
        <iframe
          src={embedUrl}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    )
  }
  
  // Si es un video HTML5 (URL directa)
  return (
    <div className={`aspect-video rounded-2xl overflow-hidden ${className}`}>
      <video
        src={src}
        title={title}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        className="w-full h-full object-cover"
        playsInline
      >
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  )
}

