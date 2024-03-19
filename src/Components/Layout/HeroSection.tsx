import React from 'react'

const HeroSection = () => {
  return (

    <section>

    <div className="hero min-h-screen ">


      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <img src="src\Img\Proyectos-img\yo01.jpg" className=" m-6  md:w-3/4   xl:w-6/12 max-sm:w-10/12 rounded-lg shadow-2xl   " />
        <div >
          <h1 className="NombreCompleto  text-5xl font-bold bg-gradient-to-r from-cyan-500 to-sky-400 bg-clip-text text-transparent sm:text-6xl  ">Rodrigo Martinez Duvivier</h1>
          <p className="DescripcionInicio py-6 xl:text-2xl ">Informacion de mi Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque minima quae doloribus eligendi, fugiat atque voluptatum rem qui dolore repellendus, ab nobis, assumenda consectetur aspernatur tempore ullam ducimus voluptate cupiditate.</p>
          <button className="  btn glass btn-lg   text-gray-50 bg-slate-600 sm:text-2xl " >Curriculum</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection