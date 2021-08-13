import React from 'react'
import { FaHome } from 'react-icons/fa';
import './contact.css'
export default function contact() {
    return (

        <body className="body">
            <header className="navBar-g">
                <a className="a" href="/"><FaHome /></a>
            </header>

            <div className="div-b">
                <div className="text">
                    <h2 >راسلنا</h2>
                    <p>اسمح لنا أن نعرف ما هو رأيك! من أجل تقديم خدمة أفضل من فضلك لا تتردد في إرسال ملاحظاتك إلينا. </p><hr />
                </div>

                <form name="contact" method="post">
                    <input type="hidden" name="form-name" value="contact" />
                    <div class="form-group">
                        <input
                            class="form-control"
                            type="text"
                            name="name"
                            placeholder="الاسم"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <input
                            class="form-control"
                            type="email"
                            name="email"
                            placeholder="البريد الالكتروني"
                            required
                        />
                    </div>
                    <div class="form-group">
                        <textarea
                            class="form-control"
                            name="message"
                            placeholder="النص"
                            required
                        />
                    </div>
                    <button class="btn btn-block btn-lg btn-primary" type="submit">
                        ارسال
                    </button>
                </form>
            </div>


        </body>
    )
}
