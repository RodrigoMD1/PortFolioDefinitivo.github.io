import codigo02 from '/Img/proyectos-img/codigo-img02.jpg'

export const About = () => {
    return (
        <section className="cta-sec relative  py-4 px-4 md:px-1  " >
            <div className="absolute top-0 left-0 w-full h-full  bg-gray-900 dark:bg-gradient-to-r from-slate-50 to-gray-200  "></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left px-12 ">

                    <h3 className="text-3xl text-white font-semibold md:text-7xl  dark:text-slate-950  ">
                        Sobre mi  <span className="bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text text-transparent">soy un desarrollador web</span>
                    </h3>


                    <p className="text-white leading-relaxed mt-3 dark:text-slate-950 sm:text-3xl ">
                    ¡Hola! Soy Rodrigo, un desarrollador web especializado en tecnologías front-end como TypeScript, React.js y HTML. Me apasiona crear interfaces de usuario intuitivas y atractivas que brinden experiencias memorables a los usuarios. También estoy explorando el desarrollo back-end para ofrecer soluciones completas a mis clientes. ¡Si necesitas ayuda con tu próximo proyecto, estaré encantado de colaborar contigo!
                    </p>

                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <img
                        src={codigo02}
                        alt=""
                        className="w-full"
                    />
                </div>
            </div>
        </section>

        
    )
}
