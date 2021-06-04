import './ContactForm.css'

const ContactForm = () => {
    return (
        <div>
            <form action="#" method="POST" target="_blank">
                <h3 className="texto-centrado">Contáctenos</h3>

                <div className="form-group">
                    <label>Correo Electrónico</label>
                    <input name="email" type="email" className="form-control" id="email" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Mensaje</label>
                    <textarea name="message" className="form-control" id="message" rows={5} placeholder="Enter message" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary float-right">Enviar</button>
            </form>
        </div>        
    )
}

export default ContactForm