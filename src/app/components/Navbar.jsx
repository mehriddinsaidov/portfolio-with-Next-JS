export const Navbar = () => {
    return (
        <nav className="fixed w-full bg-white shadow-sm z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-gray-800">Имя<span
                            className="text-indigo-600">Разработчика</span></span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home"
                            className="nav-link text-gray-700 hover:text-indigo-600 px-2 py-1 text-sm font-medium transition-colors duration-200">Главная</a>
                        <a href="#about"
                            className="nav-link text-gray-700 hover:text-indigo-600 px-2 py-1 text-sm font-medium transition-colors duration-200">Обо
                            мне</a>
                        <a href="#projects"
                            className="nav-link text-gray-700 hover:text-indigo-600 px-2 py-1 text-sm font-medium transition-colors duration-200">Проекты</a>
                        <a href="#contact"
                            className="nav-link text-gray-700 hover:text-indigo-600 px-2 py-1 text-sm font-medium transition-colors duration-200">Контакты</a>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button id="mobile-menu-button" className="text-gray-500 hover:text-indigo-600 focus:outline-none">
                            {/* <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg> */}
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className="hidden md:hidden bg-white shadow-md">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#home"
                        className="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Главная</a>
                    <a href="#about"
                        className="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Обо
                        мне</a>
                    <a href="#projects"
                        className="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Проекты</a>
                    <a href="#contact"
                        className="mobile-nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">Контакты</a>
                </div>
            </div>
        </nav>
    )
}
