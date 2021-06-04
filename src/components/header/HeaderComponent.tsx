import MenuComponent from './../menu/MenuComponent';

const HeaderComponent = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    <img src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
                </a>
                
                <MenuComponent />

                <form>
                    <div className="row">
                        <div className="col-6">
                            <input className="form-control mr-sm-2" type="search" placeholder="frutas" aria-label="frutas" />
                        </div>
                        <div className="col-3">
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        </div>
                    </div>
                </form>
            </nav>
        </div>
    )
}

export default HeaderComponent