import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <>
                <footer>
                    <div className="birinchi">
                        <img src="assets/icons/LOGO.svg" alt="LOGO"/>

                        <p>RoyalX o’quv markazi bir vaqtda ko‘plab <br/>
                        o’quvchialar bilan ishlaydigan tajribali <br/>
                        katta jamoadir. O’quvchilarimiz qatorida <br/>
                        sizni ham ko’rishdan mamnunmiz.</p>
                    </div>

                    <div className="ikkinchi">
                        <h3>Xizmatlar</h3>


                        <div className="list">
                            <a href="#">Bosh sahifa</a> <br/>
                            <a href="#">Sabablar</a> <br/>
                            <a href="#">O'quvchilarimiz</a> <br/>
                            <a href="#">Sabablar</a>
                        </div>

                    </div>

                    <div className="uchinchi">
                        <h3>Tarmoqlar</h3>


                        <div className="list">
                            <a href="#">Telegram</a> <br/>
                            <a href="#">Instagram</a> <br/>
                            <a href="#">Tiktok</a> <br/>
                            <a href="#">Facebook</a>
                        </div>

                    </div>

                    <div className="tortinchi">
                        <h3>Contact</h3>


                        <div className="list">
                            <img src="assets/icons/Message.svg" alt="Message"/> <a href="#">info@apoint.uz</a> <br/>
                            <img src="assets/icons/Mobile.svg" alt="Mobile"/> <a href="#">+998 (88) 890 90 10</a> <br/>
                            <img src="assets/icons/Location.svg" alt="Location"/> <a href="#">Tashkent, Chilonzor metro, Integro 8-qavat</a>
                        </div>

                    </div>



                </footer>
            </>
        );
    }
}

export default Footer;