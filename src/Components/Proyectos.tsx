import React from 'react'


const team = [
  {
      avatar: "src/img/Proyectos-img/pasteleria01.jpeg",
      name: "Tienda web de pasteleria",
      title: "Tecnologias usadas: html,css,js,react"
  },
  {
      avatar: "src/img/Proyectos-img/Zapatillastienda01.jpeg",
      name: "Tienda web de zapatillas",
      title: "Tecnologias usadas: html,css,js,react"
  },
  {
      avatar: "src/img/Proyectos-img/codigo-img.jpg",
      name: "LandingPage .....",
      title: "Tecnologias usadas: html,css,js,react"
  },
  {
      avatar: "src/img/Proyectos-img/codigo-img02.jpg",
      name: "Blog Completo ",
      title: "Tecnologias usadas: html,css,js,react"
  },
  {
      avatar: "src/img/Proyectos-img/codigo-img.jpg",
      name: "ApiRest ",
      title: "NestJs"
  },
  {
      avatar: "src/img/Proyectos-img/codigo-img02.jpg",
      name: "Red Social Completa",
      title: "Tecnologias usadas: html,css,js,react,MongoDB,NodeJs,"
  },
]

export const Proyectos = () => {
  return (
    <section className="py-14 bg-gray-900 dark:bg-gradient-to-r from-slate-50 to-gray-200">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 ">

                <div className="max-w-xl mx-auto sm:text-center text-center ">
                    <h3 className="text-white 0 text-3xl font-semibold sm:text-6xl dark:text-blue-400 ">
                        Proyectos
                    </h3>
                    
                        <p className="text-white mt-3 dark:text-slate-950 sm:text-2xl">
                         Aquí encontrarás una muestra de mi trabajo en desarrollo web. Desde sitios web responsivos hasta aplicaciones web interactivas, cada proyecto representa un desafío único y una oportunidad para innovar. ¡Échales un vistazo y descubre lo que puedo hacer!
                        </p>
                    
                </div>
                <div className="mt-12">
                    <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 sm:text-xl">
                        {
                            team.map((item, idx) => (
                                <li key={idx}>
                                    <div className="w-full h-60 sm:h-52 md:h-56  ">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                            alt=""
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="text-lg text-white font-semibold dark:text-slate-950 sm:text-2xl">{item.name}</h4>
                                        <p className="text-blue-400">{item.title}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
  )
}
