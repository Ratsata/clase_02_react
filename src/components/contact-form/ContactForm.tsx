import './ContactForm.css'
import { useEffect, useState } from "react"

interface Contact {
    correo: string,
    mensaje: string
}

const ContactForm = () => {
    const [contacto, setContacto] = useState<Contact>({
        correo: '',
        mensaje: ''
    });
    const [correo, setCorreo] = useState('')
    const [mensaje, setMensaje] = useState('')

    const handlerCorreoChange = (event: any) => {
        setCorreo(event.target.value);
    }

    const handlerMensajeChange = (event: any) => {
        setMensaje(event.target.value);
    }

    const handlerClick = () => {
        setContacto({ correo, mensaje });
    }

    useEffect(() => {
        if(contacto.correo != '' && contacto.mensaje != '')
            alert(JSON.stringify(contacto));
    }, [contacto])

    return (
        <div>
            <h3 className="texto-centrado">Contáctenos</h3>
            <div className="form-group">
                <label>Correo Electrónico</label>
                <input name="email" type="email" className="form-control" id="email" placeholder="Enter email" required
                    value={correo} onChange={handlerCorreoChange} />
            </div>

            <div className="form-group">
                <label>Mensaje</label>
                <textarea name="message" className="form-control" id="message" rows={5} placeholder="Enter message" required
                    value={mensaje} onChange={handlerMensajeChange}></textarea>
            </div>

            <button className="btn btn-primary float-right" onClick={handlerClick}>Enviar</button>
        </div>
    )
}

export default ContactForm