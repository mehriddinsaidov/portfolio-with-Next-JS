import React from 'react'

const Home = () => {
  return (
    <>
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center pt-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                  Привет, я <span className="text-indigo-600">Фронтенд-разработчик</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Создаю современные и отзывчивые веб-приложения с помощью передовых технологий
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">HTML5</span>
                  <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">CSS3</span>
                  <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">JavaScript</span>
                  <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">React</span>
                  <span className="skill-tag px-3 py-1 rounded-full text-sm font-medium">Tailwind CSS</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#projects"
                    className="gradient-bg text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Мои проекты
                  </a>
                  <a href="#contact"
                    className="bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
                    Связаться
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#4F46E5"
                      d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-1.5C87,13.4,81.3,26.8,73.4,38.4C65.4,50,55.3,59.9,43.1,67.4C30.9,74.9,15.4,80,0.1,79.9C-15.3,79.8,-30.6,74.4,-43.9,66.5C-57.3,58.5,-68.7,47.9,-75.1,35.1C-81.5,22.2,-82.9,7.1,-81.6,-7.8C-80.3,-22.7,-76.2,-37.5,-67.6,-49.8C-58.9,-62.1,-45.7,-71.9,-31.7,-79.1C-17.7,-86.3,-2.9,-91,10.3,-87.7C23.4,-84.4,30.5,-83.6,44.7,-76.4Z"
                      transform="translate(100 100)" />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="white"
                      fontSize="24" fontWeight="bold">Ваше фото</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Обо мне</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="bg-indigo-100 rounded-lg p-6 md:p-10 relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-600 rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-indigo-600 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Мой путь в разработке</h3>
                  <p className="text-gray-600 mb-6">
                    Я фронтенд-разработчик с опытом создания современных веб-приложений. Моя страсть к созданию
                    интуитивно понятных и привлекательных пользовательских интерфейсов привела меня к изучению
                    различных фреймворков и библиотек.
                  </p>
                  <p className="text-gray-600">
                    Я постоянно совершенствую свои навыки и слежу за последними тенденциями в мире
                    веб-разработки, чтобы создавать современные и эффективные решения.
                  </p>
                </div>
              </div>

              <div className="md:w-1/2 md:pl-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Мои навыки</h3>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">HTML & CSS</span>
                    <span className="text-indigo-600 font-medium">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">JavaScript</span>
                    <span className="text-indigo-600 font-medium">90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">React</span>
                    <span className="text-indigo-600 font-medium">85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">UI/UX Design</span>
                    <span className="text-indigo-600 font-medium">80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Мои проекты</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Вот некоторые из моих последних работ. Каждый проект был уникальным вызовом, который помог мне расти
                как разработчику.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="project-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
                <div className="h-48 bg-indigo-100 flex items-center justify-center">
                  <svg className="w-16 h-16 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Интернет-магазин</h3>
                  <p className="text-gray-600 mb-4">
                    Современный интернет-магазин с адаптивным дизайном, фильтрацией товаров и корзиной покупок.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">React</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Redux</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Tailwind CSS</span>
                  </div>
                  <a href="#"
                    className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors flex items-center">
                    Подробнее
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="project-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
                <div className="h-48 bg-indigo-100 flex items-center justify-center">
                  <svg className="w-16 h-16 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Дашборд аналитики</h3>
                  <p className="text-gray-600 mb-4">
                    Интерактивный дашборд с графиками и диаграммами для визуализации данных компании.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Vue.js</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Chart.js</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">SCSS</span>
                  </div>
                  <a href="#"
                    className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors flex items-center">
                    Подробнее
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="project-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
                <div className="h-48 bg-indigo-100 flex items-center justify-center">
                  <svg className="w-16 h-16 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd"
                      d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                      clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Лендинг для стартапа</h3>
                  <p className="text-gray-600 mb-4">
                    Современный лендинг с анимациями и формой подписки для технологического стартапа.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">HTML5</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">CSS3</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">JavaScript</span>
                    <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">GSAP</span>
                  </div>
                  <a href="#"
                    className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors flex items-center">
                    Подробнее
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a href="#"
                className="inline-block border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition-colors">
                Смотреть все проекты
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Связаться со мной</h2>
              <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Если у вас есть вопросы или вы хотите обсудить потенциальное сотрудничество, не стесняйтесь
                связаться со мной.
              </p>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Контактная информация</h3>

                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                        </path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Email</h4>
                      <p className="text-gray-600">mehriddinsaidovl8@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                        </path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Телефон</h4>
                      <p className="text-gray-600">+992 949-33-22-11</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z">
                        </path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-800">Локация</h4>
                      <p className="text-gray-600">Душанбе, Таджикистан</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-lg font-medium text-gray-800 mb-4">Социальные сети</h4>
                    <div className="flex space-x-4">
                      <a target='_blank' href="https://t.me/mehriddinsaidov"
                        className="bg-indigo-100 p-3 rounded-full hover:bg-indigo-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="w-5 h-5 text-indigo-600 bi bi-telegram" viewBox="0 0 16 16">
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                        </svg>
                      </a>
                      <a target='_blank' href="https://www.linkedin.com/in/mehriddinsaidov"
                        className="bg-indigo-100 p-3 rounded-full hover:bg-indigo-200 transition-colors">
                        <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                        </svg>
                      </a>
                      <a target='_blank' href="https://github.com/mehriddinsaidov"
                        className="bg-indigo-100 p-3 rounded-full hover:bg-indigo-200 transition-colors">
                        <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 md:pl-10">
                <form className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Отправьте мне сообщение</h3>

                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Имя</label>
                    <input type="text" id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Ваше имя" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input type="email" id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Ваш email" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Тема</label>
                    <input type="text" id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Тема сообщения" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Сообщение</label>
                    <textarea id="message" rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Ваше сообщение"></textarea>
                  </div>

                  <button type="submit"
                    className="w-full gradient-bg text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  )
}

export default Home