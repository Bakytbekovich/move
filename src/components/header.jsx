import { Link } from "react-router-dom";
function Header() {
    return (
        <div className="col-12 bb2">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-2 bb bg-dark">
                    <a href="/" className="text-white"><h5>Главная</h5></a>
                </div>
                <div className="col-2 bb bg-dark">
                    <a href="/novinki" className="text-white"><h5>Новинки</h5></a>
                </div>
                <div className="col-2 bb bg-dark">
                    <a href="/Popular" className="text-white"><h5>Популярные</h5></a>
                </div>
                <div className="col-2 bb bg-dark">
                    <a href="/filmy" className="text-white"><h5> Фильмы</h5></a>
                </div>
                <div className="col-2">
                </div>
            </div>
        </div>

    )
}
export default Header;