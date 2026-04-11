import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
import { testimonials } from "../../data/testimonialsData";
import classes from "../../assets/css/home.module.css";
import swiperLeft from '../../assets/icon-svg/swiperLeft.svg'
import swiperUser from '../../assets/images/HomePageImages/woman.png'

export default function ClientsReview() {
    return (
        <section className={`reveal ${classes.testimonialSection}`}>
            <div className="container">
                <div className={classes.testimonialWrapper}>
                    <div className={classes.testimonialLeft}>
                        <h2>What our clients say about us</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>

                    <div className={classes.testimonialRight}>

                        <div className={classes.navigationBtns}>
                            <div className={`my-prev ${classes.prevBtn}`}>
                                <img src={swiperLeft} alt="" />
                            </div>
                            <div className={`my-next ${classes.nextBtn}`}>
                                <img src={swiperLeft} alt="" />
                            </div>
                        </div>

                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                prevEl: ".my-prev",
                                nextEl: ".my-next",
                            }}
                            slidesPerView={1}
                            loop={true}
                            className={classes.testimonialSwiper}
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={classes.testimonialCard}>
                                        <p className={classes.quote}>
                                            "{item.quote}"
                                        </p>

                                        <div className={classes.bottomRow}>
                                            <div className={classes.author}>
                                                <img src={swiperUser} alt='img' />
                                                <div>
                                                    <h6>{item.name}</h6>
                                                    <span>{item.position}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    );
}