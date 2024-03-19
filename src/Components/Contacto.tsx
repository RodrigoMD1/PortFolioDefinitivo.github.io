/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import user_emailjs from '@emailjs/browser'
import { useForm, SubmitHandler } from 'react-hook-form'
import Swal from 'sweetalert2'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


// esta parte valida la informacion que el usuario pone ejemplo verifica que sea string lo que uno escribio
const formSchema = z.object({
    user_name: z.string().min(2),
    user_email: z.string().min(2),
    message: z.string().min(2),

})

// esta parte verifica si lo que nosotros ponemos en el formulario es string y eso 
interface FormValues {
    user_name: string,
    user_email: string,
    message: string,

}


export const Contacto = () => {


    const [value, setValue] = useState<FormValues>({
        user_name: "",
        user_email: "",
        message: "",
    })


    const { formState: { errors }, handleSubmit, register } = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })


    const showAlert = () => {
        Swal.fire('Mensaje enviado con exito', 'Gracias por contactarte', 'success')
    }
    const errorAlert = () => {
        Swal.fire('Necesitas completar el formulario', ':)', 'error')
    }



    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
        console.log(value, setValue)
        console.log(data);


        if (!form.current) {
            console.error('Form is not available.');
            return;
        }


        if (Object.keys(errors).length === 0) {
            // No errors, show success alert
            showAlert();

            user_emailjs
                .sendForm('service_n6abozc', 'template_a61uahn', form.current as HTMLFormElement, {
                    publicKey: 'Ylw0HGG5WgP5iNpjZ',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            errorAlert()
            // There are errors in the form, do not proceed with sending user_email
            console.log('Form has errors. Please correct them before submitting.');
        }
    };

    const form = useRef<HTMLFormElement>(null);


    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "Rodrigo.martinez224@gmil.com"
        },


        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "Zarate, Buenos Aires, Argentina."
        },
    ]





    return (
        <main className="flex overflow-hidden bg-gray-900 mt-20 ">

            <div className="flex-1 hidden lg:block m-9">
                <img src="src/img/Proyectos-img/coding03.jpg" className="w-full h-screen object-cover" />
            </div>

            <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto">
                <div className="max-w-lg flex-1 mx-auto px-4 text-white">
                    <div>
                        <h3 className="text-white text-4xl font-semibold sm:text-5xl">
                            Ponete en contacto
                        </h3>
                        <p className="mt-3 sm:text-xl">
                            Cualquier consulta o duda que tengas o queres info solo completa el formulario y nos ponemos en contacto
                        </p>



                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3 sm:text-xl">
                                            <div className="flex-none text-gray-400 ">
                                                {item.icon}
                                            </div>
                                            <p>{item.contact}</p>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className='iconos  '>
                                <ul className='me-auto flex  gap-3 mt-6 ml-9'>


                                    <NavLink to="https://twitter.com/Rodrigoduvivier" target="_blank" className="inline-block">
                                        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                                    </NavLink>
                                    <NavLink to="https://twitter.com/Rodrigoduvivier" target="_blank" className="inline-block" >
                                        <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                                    </NavLink>
                                    <NavLink to="https://github.com/RodrigoMD1" target="_blank" className="inline-block" >
                                        <img src="https://www.svgrepo.com/show/94698/github.svg" className="" width="30" height="30" alt="gt" />
                                    </NavLink>

                                    <NavLink to="https://www.linkedin.com/in/rodrigo-martinez-duvivier-525066252/" target="_blank" className="inline-block" >
                                        <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                                    </NavLink>



                                </ul>
                            </div>

                        </div>

                    </div>


                    <form
                        ref={form}
                        onSubmit={handleSubmit(onSubmit)}

                        className="space-y-5 mt-12 lg:pb-12"
                    >
                        <div>
                            <label className="font-medium sm:text-xl">
                                Nombre completo
                            </label>


                            <input
                                placeholder='Nombre y apellido '
                                {...register("user_name", { required: true, minLength: 2 })}

                                className="w-full mt-2 px-3 py-2 text-white bg-transparent  border focus:border-gray-800 shadow-sm rounded-lg"
                            />

                        </div>
                        <div>
                            <label className="font-medium sm:text-xl">
                                Email
                            </label>

                            <input
                                type='email'
                                placeholder='Email'
                                {...register("user_email", { required: true, minLength: 2 })}
                                className="w-full mt-2 px-3 py-2 text-white bg-transparent  border focus:border-gray-800 shadow-sm rounded-lg"
                            />


                        </div>


                        <div>
                            <label className="font-medium sm:text-xl">

                                Mensaje
                            </label>

                            <textarea
                                placeholder='Escribi tus consultas o dudas'
                                {...register("message", { required: true, minLength: 2 })}
                                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg" name='message'></textarea>
                        </div>




                        <button

                            className="w-full px-4 py-2 text-white sm:text-xl font-medium bg-blue-400 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                            type="submit"
                            value='Send'
                        >
                            Enviar
                        </button>






                    </form>
                </div>
            </div>
        </main>


    )
}



