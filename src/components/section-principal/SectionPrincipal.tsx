import SectionSecondary from './../section-secondary/SectionSecondary';

const SectionPrincipal = () => {
    return (
        <main>
            <section id="section-principal">
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div className="col-md-5 p-lg-5 mx-auto my-5">
                        <h1 className="display-4 fw-normal">Frutas</h1>
                        <p className="lead fw-normal">
                            Seleccione su fruta
                        </p>
                    </div>
                    <div className="shadow-sm d-none d-md-block">
                        <SectionSecondary />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default SectionPrincipal