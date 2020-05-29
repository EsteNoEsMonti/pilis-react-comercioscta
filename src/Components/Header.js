import React from 'react';

const Header = () => {
    return (
        <header>
            <nav class="navbar navbar-dark bg-dark">
                <h1 class="navbar-brand">Comercios en Catamarca from Monti</h1>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar Comercios" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </nav>
        </header>
    );
}
 
export default Header;