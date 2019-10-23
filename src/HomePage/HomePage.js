import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer/Footer';

import '../App.css';

class HomePage extends Component {

    render() {
        return(
            <>
            <div className="container">
                <h2>Transylvania's Treasures - The Fortified Churches</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={"images/trans11.jpg"}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3 className="font-carousel">Biertan, Sibiu</h3>
                        <p className="font-carousel">Aceasta veche asezare saseasca este cunoscuta in lume datodita bisericii-cetate,inclusa in 1993 pe lista monumentelor UNESCO. </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={"images/trans4.jpg"}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3 className="font-carousel">Viscri, Brasov</h3>
                        <p className="font-carousel">Biserica fortificata din Viscri este un exemplu impresionant de arhitectura defensiva transilvana.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={"images/trans12.jpg"}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3 className="font-carousel">Cetatea Rupea</h3>
                        <p className="font-carousel">Construita pe un masiv de bazalt, este o cetate taraneasca cu patru zone intarite cu tunuri poligonale.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div>
                    <p className="padding-top">
                    Satele transilvane cu biserici fortificate săseşti oferă o imagine plină de viaţă peisajului cultural din sudul Transilvaniei. Aceste sate sunt caracterizate de un sistem specific de cultivare al terenului, un model de aşezare şi organizare a gospodăriilor ţărănesti păstrate încă din Evul Mediu.
                    </p>
                    <p>
                    Colonizarea saşilor în pământurile regale s-a încheiat la începutul secolului al XIV-lea, localităţile fondate de aceştia (cca. 250) acoperind un teritoriu îngust, în sudul şi estul Transilvaniei, de-a lungul arcului carpatic. Dispoziţia geografică a acestor aşezări şi drumurile istorice dintre ele confirmă planul şi rolul colonizării.
                    Grupurile de coloni erau conduse de greavi. Aceştia organizau coloniile, trasau teritoriul, asigurau legătura între coloni şi regalitate. Ca mod de organizare a aşezărilor a fost aleasă "sesia flamandă", caracterizată prin grupuri compacte de gospodării, deoarece dădea un plus de coeziune colectivităţilor, ceea ce va fi decisiv pentru evoluţia lor ulterioară. În centrul aşezării sau pe o colină în imediata apropiere a acesteia se aflau biserica şi, adesea, locuinţa comitelui. Tipurile de sate datând din perioada colonizării-cu una sau două uliţe, cu pajişte interioară sau cu piaţă centrală-sunt uşor de recunoscut şi în prezent în structura localităţilor săseşti din Transilvania. 
                    </p>
                    <p>
                    Această evoluţie are ca fundal o istorie locală frământată, dominată de ameninţări interne şi externe. Primul eveniment catastrofal pentru coloniile în curs de constituire a fost năvălirea tătară din 1241-1242. Ca urmare, regalitatea a încurajat fortificarea localităţilor, iar colonii au aplicat practicile defensive din regiunile de origine:localitatea era lăsată pradă invadatorilor, comunitatea refugiindu-se într-o fortificaţie uşor accesibilă. Grupuri de localităţi apropiate au construit cetăţi de refugiu (ex. Saschiz), bisericile au fost înconjurate cu incinte fortificate (ex. Cisnădioara), turnurile vestice ale bisericilor au fost transformate în reduit. 
                    </p>
                    <p>
                    Din patrimoniul UNESCO fac parte: Saschiz, Prejmer, Valea Viilor, Câlnic, Dârjiu, Biertan, Viscri. 
                    </p>
                </div>
            </div>
            <div className="container-fluid">
                <Footer />
            </div>
            </>
        );
    }
}

export default HomePage;