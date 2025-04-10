import React, { useState, useRef } from 'react'
import { X, Trash2 } from 'lucide-react'
import TiltedCard from './TiltedCard'
import AudioPlayer from './AudioPlayer'
import { assets } from '../assets/assets'

const Space = ({ onClose }) => {
  const [selectedAudios, setSelectedAudios] = useState([])
  const [uploadedAudios, setUploadedAudios] = useState([])
  const fileInputRef = useRef(null)

  const handleUpload = (e) => {
    const files = Array.from(e.target.files)
    const newAudios = files.map(file => ({
      file,
      name: file.name,
      url: URL.createObjectURL(file),
      id: Date.now() + Math.random(),
    }))
    setSelectedAudios(prev => [...prev, ...newAudios])
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  const handleDeleteSelected = (id) => {
    setSelectedAudios(prev => prev.filter(audio => audio.id !== id))
  }

  const handleSubmit = () => {
    setUploadedAudios(prev => [...prev, ...selectedAudios])
    setSelectedAudios([])
  }

  const renderAudioCard = (audio, isDeletable = true) => (
    <TiltedCard
      key={audio.id}
      imageSrc={assets.audio_bg}
      altText={audio.name}
      captionText={audio.name}
      containerHeight="140px"
      containerWidth="140px"
      imageHeight="140px"
      imageWidth="140px"
      rotateAmplitude={5}
      scaleOnHover={1}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={true}
      overlayContent={
        <div className="text-white max-w-[140px] text-center p-3 flex flex-col items-center space-y-10">
          <div className="flex items-center justify-between w-full px-1">
            <p className="text-[9px] text-black font-semibold truncate">{audio.name}</p>
            {isDeletable && (
              <button
                onClick={() => handleDeleteSelected(audio.id)}
                className="bg-black/50 ml-1 rounded-full p-1 text-white hover:text-red-400"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            )}
          </div>
          <AudioPlayer src={audio.url} />
        </div>
      }
    />
  )

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-2 sm:px-4">
      <div className="w-full max-w-6xl bg-white/10 border border-white/20 backdrop-blur-xl px-2 p-6 sm:p-8 rounded-3xl text-white shadow-2xl relative overflow-y-auto max-h-[90vh]">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-neutral-300">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center">Upload Your Audio</h2>

        {/* Input & selected audios */}
        <div className="w-full border-2 border-dashed border-white/30 rounded-xl p-4 sm:p-6 hover:border-white transition">
          <label className="block text-center cursor-pointer mb-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="audio/*"
              multiple
              onChange={handleUpload}
              className="hidden"
            />
            <p className="text-sm">Click or drag to upload your audio files</p>
          </label>

          {selectedAudios.length > 0 && (
            <>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
                {selectedAudios.map(audio => renderAudioCard(audio, true))}
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={handleSubmit}
                  className="bg-white/20 hover:bg-white/30 px-5 py-2 rounded-xl text-white font-semibold transition"
                >
                  Submit Files
                </button>
              </div>
            </>
          )}
        </div>

        {/* Uploaded audios */}
        {uploadedAudios.length > 0 && (
          <>
            <h3 className="mt-10 text-lg font-semibold text-center">Uploaded Audios</h3>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-y-10 w-fit sm:w-full mx-auto">
              {uploadedAudios.map(audio => renderAudioCard(audio))}
            </div>

          </>
        )}
      </div>
    </div>
  )
}

export default Space
