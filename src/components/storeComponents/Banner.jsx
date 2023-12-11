import { useEffect, useState } from 'react';
import styles from './Banner.module.css';

function Banner() {
    const [isMobile, setIsMobile] = useState(true);

    useEffect(() => {
        const checkScreen = () => {
            if (window.screen.width >= 768) {
                setIsMobile(false);
            } else {
                setIsMobile(true);
            }
        }

        checkScreen();

        window.addEventListener('resize', checkScreen);

        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    return(
        <div className={styles.banner_container}>
            {isMobile && <div className={styles.slides}>
                <input type="radio" name="radio-btn" id="radio1" className={styles.radio1} />
                <input type="radio" name="radio-btn" id="radio2" className={styles.radio2} />
                <input type="radio" name="radio-btn" id="radio3" className={styles.radio3} />

                <div className={`${styles.slide} ${styles.first} first`}>
                    <img src="/img/slides/slide1.png"
                        alt="as palavras oferta e peritech em sequência 
                        embaixo da outra oferta possui cor alaranjada e peritech em branco" 
                    />
                </div>
                <div className={styles.slide}>
                    <img src="/img/slides/slide2.png" 
                        alt="a imagem possui dois fones de ouvidos do tipo headset, e uma
                        legenda os apresentando" 
                    />
                </div>
                <div className={styles.slide}>
                    <img src="/img/slides/slide3.png" 
                        alt="a imagem possui dois mouses do tipo gamer, e uma
                        legenda os apresentando" />
                </div>

                <div className={styles.manual_navigation}>
                    <label htmlFor="radio1" className={styles.manual_btn}></label>
                    <label htmlFor="radio2" className={styles.manual_btn}></label>
                    <label htmlFor="radio3" className={styles.manual_btn}></label>
                </div>
            </div>}
            {!isMobile &&
                <img src="/img/slides/banner.png" 
                    className={styles.banner}
                    alt="as palavras oferta e peritech em sequência 
                    embaixo da outra oferta possui cor alaranjada e peritech em branco,
                    possuem dois grupos de imagem, uma imagem possui dois fones de ouvidos do tipo headset, e uma
                    legenda os apresentando, a outra possui dois mouses do tipo gamer, e uma
                    legenda os apresentando" 
                />
            }
        </div>
    )
}

export default Banner;