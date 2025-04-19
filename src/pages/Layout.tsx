import React, { useState } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

export default function Layout() {
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (menu: string) => {
    setOpenMenu(prev => (prev === menu ? null : menu))
  }

  return (
    <div className={`${darkMode ? 'dark' : ''} flex h-screen`}>
      {/* Sidebar */}
      <div
        onMouseLeave={() => setOpenMenu(null)}
        className="group relative w-[60px] hover:w-[220px] transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 shadow-md overflow-hidden"
      >
        {/* Titolo cliccabile */}
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer p-4 pb-5 border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="flex items-center gap-2 text-gray-800 dark:text-white text-lg font-medium">
            <span>📋</span>
            <span className="ml-[50px] opacity-100 transition-all duration-300 whitespace-nowrap">
              Brickly
            </span>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col px-4 py-2 mt-6 gap-3 text-sm text-gray-800 dark:text-white">
          {/* Banche dati */}
          <div className="relative">
            <button onClick={() => toggleMenu('banche')} className="text-left relative w-full px-2 py-1 rounded flex items-center gap-2 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition-colors">
              <span className="text-xl">🗃️</span>
              <span className="ml-[50px] opacity-100 transition-all duration-300 whitespace-nowrap text-lg font-medium">
                Banche dati
              </span>
            </button>
            <div className={`transition-all overflow-hidden duration-300 ${openMenu === 'banche' ? 'max-h-60' : 'max-h-0'} flex flex-col space-y-2 pl-12`}>
              <button onClick={() => navigate('/catasto')} className="text-left text-sm px-2 py-1 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition-colors">📍 Catasto</button>
              <button onClick={() => navigate('/fornitori')} className="text-left text-sm px-2 py-1 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition-colors">🧑‍🔧 Fornitori</button>
              <button onClick={() => navigate('/province')} className="text-left text-sm px-2 py-1 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition-colors">🗺️ Province</button>
              <button onClick={() => navigate('/comuni')} className="text-left text-sm px-2 py-1 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition-colors">🏛️ Comuni</button>
            </div>
          </div>

          {/* Impostazioni */}
          <div className="relative">
            <button onClick={() => toggleMenu('impostazioni')} className="text-left relative w-full px-2 py-1 rounded flex items-center gap-2 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition-colors">
              <span className="text-xl">⚙️</span>
              <span className="ml-[50px] opacity-100 transition-all duration-300 whitespace-nowrap text-lg font-medium">
                Impostazioni
              </span>
            </button>
            <div className={`transition-all overflow-hidden duration-300 ${openMenu === 'impostazioni' ? 'max-h-40' : 'max-h-0'} flex flex-col space-y-2 pl-12`}>
              <button onClick={() => navigate('/utenti')} className="text-left text-sm px-2 py-1 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition-colors">🧑‍💼 Utenti Studio</button>
              <button onClick={() => setDarkMode(!darkMode)} className="text-left text-sm px-2 py-1 rounded hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 transition-colors">🌓 Tema</button>
            </div>
          </div>

          {/* Logout */}
          <button onClick={() => navigate('/login')} className="text-left text-red-600 relative hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 px-2 py-1 rounded transition-colors">
            <span className="text-xl">🔓</span>
            <span className="ml-[50px] opacity-100 transition-all duration-300 whitespace-nowrap text-lg font-medium">Logout</span>
          </button>
        </nav>
      </div>

      {/* Contenuto centrale */}
      <main className="flex-1 p-6 bg-gray-100 dark:bg-gray-800 text-black dark:text-white overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}
