import Header from "./Header";
import Slide from "./Slide";
function DefaultLayout({children}){
    return (
        <div>
            <Header/>
            <div className="container">
                <Slide/>
                <div className='content'>
                    {children}
                </div>
            </div>

        </div>
    )
}
export  default DefaultLayout;