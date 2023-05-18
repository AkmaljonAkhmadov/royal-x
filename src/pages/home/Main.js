import React, {Component} from 'react';
class Main extends Component {

    render() {
        return (
            <>
                <main>
                    <section>
                            <h1>Royal X - Nima beradi</h1>

                            <p>IELTS imtihonidan 8 balldan yuqori olmoqchi bo’lsangiz unda siz <br/>
                            ko’rsatkchi 8 dan yuqori bo’lgan tajribali o’qituvchilardan ta’lim <br/>
                            oling biz sizga shunday imkoniyatni beramiz.</p>

                            <span><a href="#">Xoziroq bog’lanish</a></span>

                        <div className="images">
                            <img src="assets/imgs/Screen.png" alt="Screen"/>
                            <img className="ply" src="assets/icons/playb.svg" alt="Play Button"/>
                        </div>

                    </section>

                    <section>
                        <h2>Royal X sizga qanday <br/>
                            yordam beradi ?</h2>

                        <h6>IELTS imtihonidan 8 balldan yuqori olmoqchi <br/>
                        bo’lsangiz unda siz ko’rsatkchi 8 dan yuqori <br/>
                        bo’lgan tajribali o’qituvchilardan ta’lim oling biz sizga <br/>
                        shunday imkoniyatni beramiz.</h6>

                        <div className="container1">
                            <img src="assets/imgs/1.png" alt="1"/>
                            <img src="assets/imgs/2.png" alt="2"/>
                            <img src="assets/imgs/3.png" alt="3"/>
                            <img src="assets/imgs/4.png" alt="4"/>
                        </div>

                    </section>

                    <section>
                        <div className="container2">
                            <img src="assets/icons/batgul.svg" alt="Batgul"/>

                            <p>
                                Miss Durdona rus tili fani boyicha oqtuvchi kop yilik tajribaga ega 10 dan ortiq <br/>
                                davlatlarda bolgan, rus tilini mukamal biladi 10 yildan oshiq tajriba va 1000 dan ziyod <br/>
                                oquvchilarni oqitgan. Miss Durdona rus tili fani boyicha oqtuvchi kop yilik tajribaga ega <br/>
                                10 dan ortiq davlatlarda bolgan, rus tilini mukamal biladi 10 yildan oshiq tajriba va 1000 <br/>
                                dan ziyod oquvchilarni oqitgan. Miss Durdona rus tili fani boyicha oqtuvchi kop yilik <br/>
                                tajribaga ega 10 dan ortiq davlatlarda bolgan, rus tilini mukamal biladi 10 yildan oshiq <br/>
                                tajriba va 1000 dan ziyod oquvchilarni oqitgan. Miss Durdona rus tili fani boyicha <br/>
                                oqtuvchi kop yilik tajribaga ega 10 dan ortiq davlatlarda bolgan, rus tilini mukamal biladi.
                            </p>

                            <h5 className="name">Durdona Qurbonova</h5>
                            <h6 className="subject">Rus tili o'qtuvchisi</h6>


                            <div className="dots">
                                <div className="toch"></div>
                                <div className="toch1"></div>
                                <div className="toch2"></div>
                            </div>

                            <img className="person" src="assets/imgs/person.png" alt="Person"/>


                        </div>
                    </section>

                    <section>
                        <div className="wrap__left">
                            <span className="US">Biz haqimizda <br/> o‘quvchilar fikri qanday</span>

                            <p>Royal X xozirga qadar 1000 dan ortiq oquvchilarni muomolariga <br/>
                            yechim berib kelmoqda, Kursni muafaqiyatli tugatgan o’quvchilarimiz <br/>
                            esa xalqaro unversitetlar, chet el unversitetlarida ta’lim olishmoqda <br/>
                            agar siz ham shunday natijalarga erishmoqchi bo’lsangiz xozirqor <br/>
                            Royal X ga  tashrif buyuring va o’zingiz bunga guvoh bo’lasiz</p>
                        </div>

                        <div className="wrap__right">
                            <img className="qosh" src="assets/icons/batgul.svg" alt="Batgul"/>
                            <img className="people" src="assets/icons/ismoil.svg" alt="ismoil"/>

                            <h5 className="ismo">Ismoiljon Erkinov</h5>
                            <h6 className="inh">INHA talabasi</h6>


                            <p>Men 1 yil oldin ingliz tilini umuman tushunmas edim va <br/>
                            bundan siqilardim shunda ingliz tilini o’rganishga qaror <br/>
                            qildim va  juda ham ko’p o’quv markazlarga bordim deyarli <br/>
                            foydasi bo’lmadi. Royal X da o’qiydigan bir do’stimning <br/>
                            taklifi bilan Royal X ga bordim. 1-oyning o’zidanoq men <br/>
                            o’zimda o’zgarishalar sezishni boshladim oradan 6 oy <br/>
                            o’tmasdan IELTS imtohonidan 6 ball olib INHA unversitetiga <br/>
                            o’qishga kirdim. Agar siz ham 1 yilda ingliz tilini tez va oson <br/>
                            o’rganmoqchi bo’lsangiz Royal X o’quv markaziga boring.</p>

                            <img className="left1" src="assets/icons/arr.svg" alt="Arrow"/>
                            <img className="right1" src="assets/icons/arr.svg" alt="Arrow"/>
                        </div>



                    </section>

                    <section>
                        <div className="chap__t">
                            <h1>Istalgan vaqtda telefon
                                qiling: <a className="nomer" href="#">+998 88 890 90 10</a></h1>

                            <p>RoyalX o’quv markazi bir vaqtda ko‘plab o’quvchialar bilan <br/>
                            ishlaydigan tajribali katta jamoadir. O’quvchilarimiz qatorida sizni <br/>
                            ham ko’rishdan mamnunmiz.</p>

                            <span className="onli"><a href="#">Online yozing</a></span>


                        </div>

                        <div className="ong__t">
                            <img src="assets/imgs/phone.png" alt="Phone"/>
                        </div>
                    </section>
                </main>
            </>
        );
    }
}

export default Main;