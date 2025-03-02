import React from 'react'

const HumanVerification = ({isToggled,setIsToggled}) => {
    
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-medium text-amber-600">Let&apos;s confirm you are human</h1>

          <p className="mx-auto max-w-sm text-sm text-gray-600">
            Complete the security check before continuing. This step verifies that you are not a bot, which helps to
            protect your account and prevent spam.
          </p>
        </div>

        <div className="flex justify-center">
        <button
      onClick={() => setIsToggled(!isToggled)}
      className={`px-4 py-2 font-bold border rounded transition-all duration-300 ${
        isToggled
          ? "bg-white text-black border-black"
          : " text-white bg-black border border-white"
      }`}
    >
      Visit Website
    </button>

        </div>

        <div className="pt-4">
          <select className="rounded border border-gray-300 bg-white px-3 py-1 text-sm" defaultValue="English">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Deutsch</option>
            <option>中文</option>
            <option>日本語</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default HumanVerification