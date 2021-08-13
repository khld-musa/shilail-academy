import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './page.css';
import { FaFacebook, FaTwitter, FaInstagram, FaMailBulk, FaArrowUp, FaPhone } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';





function Home() {


    const items = [
        {
            src: 'img/3.jpg',
            key: '1'
        },
        {
            src: 'img/4.jpg',
            key: '2'
        },
        {
            src: 'img/5.jpg',
            key: '3'
        },
        {
            src: 'img/6.jpg',
            key: '3'
        },
        {
            src: 'img/7.jpg',
            key: '3'
        },
        {
            src: 'img/8.jpg',
            key: '3'
        },
        {
            src: 'img/9.jpg',
            key: '3'
        },
        {
            src: 'img/10.jpg',
            key: '3'
        },
        {
            src: 'img/11.jpg',
            key: '3'
        }
    ];

    const Example = () => <UncontrolledCarousel items={items} />;




    return (
        <body className="home">



            <div class="navBar">
                <nav>
                    <a className="a" href="/">الرئيسية</a>
                    <a className="a" href="/gallery">الصور</a>
                    <a className="a" href="/contact">راسلنا</a>

                </nav>
            </div>
            <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="titlle-body">
                    <h1>Shlail-academy/أكاديمية شليل</h1>
                    <p class="lead">كاديمية شليل للرياضة وتنمية القدرات
                        أكاديمية رياضية تعليمية تربوية تنشط في كرة القدم فتيات وفتيان وكذلك كرة الريشة الطائره وقريبا سيتم افتتاح مناشط العاب القوي والكرة الطائرة والسلة والسباحة</p>
                </div>

            </div>


            <main class="container">




                <div class="col p-4 d-flex flex-column position-static">

                    <div class="row-1 g-0 rounded overflow-hidden flex-md-row mb-4 position-relative">
                        <div class="col-lg-4">
                            <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="/img/20.jpg" alt="" />

                            <h2>محمد الطيب</h2>
                            <p>الأمين المالي</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="/img/21.jpg" alt="" />

                            <h2>شاهين حسن</h2>
                            <p>رئيس الأكاديمية</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="bd-placeholder-img rounded-circle" width="140" height="140" src="/img/22.jpg" alt="" />

                            <h2>عبدالمنعم يوسف</h2>
                            <p>الأمين العام</p>
                        </div>

                    </div>
                    <div className="pic">
                        <Example />
                    </div>

                </div>




                <div class="row">

                    <div class="col-md-8">
                        <article class="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <p>أكاديمية شليل تأسست عام 2019, وتم اعتمادها لدى الاتحاد السوداني في العام 2021 أكاديمية شليل تقدم بنية تعليمية رياضية صحية للطلاب الموهوبين رياضيا</p>
                            <p>          <ul className="goals">
                                . ارثاء مكانة الأكاديمية لدى المجتمع باعتبارها الوجهة الصحية التي تقصدها المواهب الرياضية- <br />
                                . رفع الأداء الرياضي عن طريق التدريب عالي المستوى- <br />
                                . فتح التعاون مع المؤسسات الرياضية في دول الجوار- <br />

                            </ul></p>
                        </article>

                        <article class="row g-0 rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <h2 class="blog-post-title">ابرز الأخبار</h2>
                            <p>
                                في يوم رياضي مميز لاكاديمية شليل تميز  بالاحتفاء بزيارة الأستاذة هنادي الصديق رئيسة الاتحاد السوداني للريشة الطائرة لتدشين المنشط بصورة رسمية بعد مشوار تدريبي لفترة امتدت قرابة الشهرين عن طريق الخبيرة اماني تميم

                                اشادة الأستاذة هنادي الصديق بالمواهب الموجودة وبالجهد التدريبي المبذول والعمل الأداري المنظم والحضور الأسرى الذي يعكس الترابط بين الأكاديمية والأسر

                                اكتملت اللوحة الجمالية بمشاركة الزهور ب والزهرات والبراعم لمنشط كرة القدم

                                ليكون مسك الختام الإعلان عن تدشين منشط العاب القوة عن طريق الكوتش والمحاضرة

                                عزاز الصافي عبر يوم العاب القوة المقام يوم الجمعة الموافق ٦/٨/٢٠٢١

                                وكذلك شهد اليوم ظهور مدرب الملاكمة مصطفى وسوف يعلن عن بداية التسجيل لمنشط الملاكمة

                                شكر خاص للأستاذ  والكابتن على كدمبس والأستاذ ادروب  على التغطية المتميزة
                            </p>
                        </article>
                        <div className="news">
                            <div class="row featurette">
                                <div class="col-md-5">
                                    <img class="img bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                                        height="500" src="/img/25.jpg" alt="" />

                                </div>
                                <div class="col-md-7">
                                    <h2 class="featurette-heading">السفارة البريطانية</h2>
                                    <p class="lead">الخبيرة سلمى الماجدي و الكابتن عبدالمنعم يوسف الجهاز الفني للأكاديمية قي جزء من فعاليات اليونسيف بالسفارة البريطانية.</p>
                                </div>

                            </div>
                            <div class="row featurette">
                                <div class="col-md-5">
                                    <img class="img bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                                        height="500" src="/img/28.jpg" alt="" />

                                </div>
                                <div class="col-md-7">
                                    <h2 class="featurette-heading">ممثلي المنتخب </h2>
                                    <p class="lead">نجوم شليل بشعار منتخب السودان للبراعم حسام عبدالمنعم,عمر نصرالدين,حسين نزار و فائز أحمد السيد.</p>
                                </div>

                            </div>
                            <div class="row featurette">
                                <div class="col-md-5">
                                    <img class="img bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                                        height="500" src="/img/12.jpg" alt="" />

                                </div>
                                <div class="col-md-7">
                                    <h2 class="featurette-heading">التمارين</h2>
                                    <p class="lead">تمرين يجمع فئات البراعم و الزهور و الزهرات بقيادة الكابتن الفاتح عضل و المدرب دراج و الكابتن عبدالمنعم يوسف والكابتن محمد سيد بملعب الأكاديمية.</p>
                                </div>

                            </div>
                            <div class="row featurette">
                                <div class="col-md-5">
                                    <img class=" img bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                                        height="500" src="/img/13.jpg" alt="" />

                                </div>
                                <div class="col-md-7">
                                    <h2 class="featurette-heading">ما قبل المباراة</h2>
                                    <p class="lead">تمرين على ملعب الأكاديمية للناشئين بقيادة الكابتن علاءالدين يوسف و الكوتش دراج رئيس هيئة البراعم بحري و مدرب الأكاديمية للناشئين.</p>
                                </div>

                            </div>
                            <div class="row featurette">
                                <div class="col-md-5">
                                    <img class="img bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                                        height="500" src="/img/2.jpg" alt="" />

                                </div>
                                <div class="col-md-7">
                                    <h2 class="featurette-heading">زيارة مسؤول الأكاديميات</h2>
                                    <p class="lead">جانب من زيارة مسؤول الأكاديميات من قبل الاتحاد  العام السوداني الكوتش القدير عادل صالح مسؤول أكاديميات بحري و حضوره المباراة مع أكاديمية ماستر.</p>
                                </div>

                            </div>
                            <div class="row featurette">
                                <div class="col-md-5 order-md-1">
                                    <img class="img bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
                                        height="500" src="/img/15.jpg" alt="" />

                                </div>
                                <div class="col-md-7 order-md-2">
                                    <h2 class="featurette-heading">مباراة ودية ضد النقر</h2>
                                    <p class="lead">شهد استاد التحرير ضمن المباريات الودية مباراة ودية ضد أكاديمية النقر, الثلاث فئات ناشئين و براعم و زهور انتهت بفوز ناشئين شليل و خسارة البراعم و تعادل الزهور, ومن أكبر المكاسب الإحتكاك و تقوية العلاقة التعاونية بين شليل و النقر.</p>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="p-4-1 mb-3 bg-light g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

                            <div class="row g-0 rounded overflow-hidden flex-md-row mb-4 position-relative">

                                <img src="/img/logo.webp" alt="" />

                            </div>

                            <h4 class="font-italic">حول</h4>
                            <p class="mb-0">أكاديمية شليل للرياضة وتنمية القدرات

                                أكاديمية رياضية تعليمية تربوية تنشط في كرة القدم فتيات وفتيان وكذلك كرة الريشة الطائره وقريبا سيتم افتتاح مناشط العاب القوي والكرة الطائرة والسلة والسباحة
                                للاكاديميه جانب مجتمعي متمثل في الاهتمام بمختلف شرائح المجتمع
                                أطفال مشردين وأصحاب الاعاقات والجانحين والموهبين من الشرائح الفقيرة أصحاب الأعمال الهامشية.</p>
                        </div>

                        <div class="p-4">
                            <h4 class="font-italic">صفحاتنا على مواقع التواصل الإجتماعي</h4>
                            <ol class="list-unstyled">
                                <li><a className="a" href="https://www.facebook.com/shlailacademy" target="_blank"><FaFacebook /></a></li>
                                <li><a className="a" href="https://www.twitter.com/shlail_acadeemy" target="_blank"><FaTwitter/> </a></li>
                                <li><a className="a" href="https://www.instagram.com/shlail_acadeemy" target="_blank"><FaInstagram /></a></li>
                            </ol>

                        </div>
                    </div>

                </div>

            </main>


            <footer class="blog-footer">
                <h4>
                    للمزيد من المعلومات

                </h4>
                <p>
                    <ul>
                        <i className="i"> sascb2021@gmail.com <FaMailBulk  /> </i> <br />
                        <i className="i"> ------------------ <FaPhone /></i> <br />
                        <i className="i">------------------ <ImLocation2 /> </i>
                    </ul>
                </p>
                <div className="arrow">
                    <a className="a" href="#"><FaArrowUp /></a>
                </div>
            </footer>



        </body>

    );

}




export default Home;