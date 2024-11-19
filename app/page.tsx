"use client"

import { useEffect } from "react";
import Link from 'next/link';
import anime from 'animejs'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/app/ui/slick-styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function PageContent() {

  useEffect(() => {

    document.body.style.transition = 'background-image 0.5s ease';
    document.body.style.backgroundImage = "url('/background.svg')";
    initializeAnimations();

    const sections = document.querySelectorAll('section');
    const body = document.body;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const body = document.body;
            const isMobile = window.innerWidth <= 768;
    
            switch (sectionId) {
              case 'home':
                body.style.backgroundImage = isMobile
                  ? "url('/background_app.svg')" 
                  : "url('/background.svg')";
                break;
              default:
                body.style.backgroundImage = isMobile
                  ? "url('/background_app2.svg')" 
                  : "url('/background2.svg')";
                break;
            }
            // initializeAnimations(sectionId);
          }
        });
      },
      {
        threshold: 0.5, // 根據這個條件決定何時觸發
      }
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
    
  }, []);

    const initializeAnimations = () => {
      anime({
        targets: "#border1",
        translateX: ["-100%", "0"], 
        opacity: [0, 1],
        duration: 500,
        delay: 500,
        easing: "easeOutQuad",
      });
    
      anime({
        targets: "#other_border2",
        translateX: ["-100%", "0"],
        opacity: [0, 1],
        duration: 500,
        delay: 300,
        easing: "easeOutQuad",
      });
      
      anime({
        targets: "#other_border1",
        translateX: ["-100%", "0"], 
        opacity: [0, 1],
        duration: 500,
        delay: 500,
        easing: "easeOutQuad",
      });
    
      anime({
        targets: "#border2",
        translateX: ["-100%", "0"],
        opacity: [0, 1],
        duration: 500,
        delay: 300,
        easing: "easeOutQuad",
      });

      anime({
        targets: ".name span",
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 100,
        delay: (el, i) => i * 50, 
        loop: false,
      });

      anime({
        targets: ".name_wrapper name span",
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 100,
        delay: (el, i) => i * 50, 
        loop: false,
      });

      anime({
        targets: ".second_name span",
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 100,
        delay: (el, i) => i * 50,
        loop: false,
      });
  
      anime({
        targets: ".job_title span",
        opacity: [0, 1], 
        easing: "easeOutQuad",
        duration: 100,
        delay: (el, i) => 300 + i * 20,
        loop: false,
      });
  
      anime({
        targets: ".content_title span",
        opacity: [0, 1],
        easing: "easeOutQuad",
        duration: 100,
        delay: (el, i) => i * 100,
        loop: false,
      });
    };
  

  return (
    <div className="main-container">

      <section id="home" className="section">
        <div className="name_wrapper">
          <div className="name">
            {"STEVEN".split("").map((char, index) => (
              <span key={`line1-${index}`}>{char}</span>
            ))}
            <br />
            {"HSU".split("").map((char, index) => (
              <span key={`line2-${index}`}>{char}</span>
            ))}
          </div>
          <div className="border_name">
            <span id="border1"></span>
            <span id="border2"></span>
          </div>
        </div>
        <div className="job_title">
          {"data engineer / ".split(" ").map((part, index, arr) => (
            <span key={`line1-${index}`}>
              {part.split("").map((char, idx) => (
                <span key={`char1-${index}-${idx}`}>{char}</span>
              ))}
              {index < arr.length - 1 && <span>&nbsp;</span>}
            </span>
          ))}
          <br />
          {"backend engineer.".split(" ").map((part, index) => (
            <span key={`line2-${index}`}>
              {part.split("").map((char, idx) => (
                <span key={`char2-${index}-${idx}`}>{char}</span>
              ))}
              {index < 1 && <span>&nbsp;</span>}
            </span>
          ))}
        </div>
        <div className="content_title">
          {"portfolio".split("").map((char, index) => (
            <span key={`line1-${index}`}>{char}</span>
          ))}
        </div>
      </section>

      <section id="aboutme" className="section">
        <div className="second_name">
          <span>About Me</span>
          <div className="border_name">
            <span id="other_border1"></span>
            <span id="other_border2"></span>
          </div>
        </div>
        <div className="aboutme_info">
          <Swiper
            slidesPerView={1}
            // cssMode={true}
            navigation={true}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            speed={500}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-content">
                <h3 className="slide-title">Who I am</h3>
                <div className="underline"></div>
                <p className="slide-description">商学部を卒業しました<br />
                  データアナリスト(半年間)<br />
                  データエンジニア(2年間)<br />
                  <span style={{
                    letterSpacing: "10px",
                    fontSize: "12px",
                    color: "#aaa5a5",
                    padding: "10px 0 0 0",
                    display: "inline-block",
                  }}>目標は「データを使って実際の問題を解決するデータサイエンティスト」になることです。</span>
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-content">
                <h3 className="slide-title">Career</h3>
                <div className="underline"></div>
                <Link 
                  href="https://www.canva.com/design/DAF8elJt09Q/9nsRIRpdMKmkPKObkf3nag/view?utm_content=DAF8elJt09Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h999c3a0bbd" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="portfolio-btn">Project Timeline</button>
                </Link>
                <p className="slide-description">
                1. APIの設計、開発<br />
                2. ウェブプラットフォームの開発<br />
                3. データパイプラインの構築<br />
                4. データ分析、可視化<br />
                5. 最新の技術とトレンドを追いかけて開発を行う<br />
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-content">
                <h3 className="slide-title">自己PR - 1</h3>
                <div className="underline"></div>
                <p className="slide-description">「スピーディに進む」が私の座右の銘<br />
                商学部を卒業した私は、単にプログラミングができるエンジニアではなく、<br /><br />
                同時に以下のような強みも持っています。</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-content">
                <h3 className="slide-title">自己PR - 2</h3>
                <div className="underline"></div>
                <p className="slide-description">
                  <span style={{
                    letterSpacing: "10px",
                    fontSize: "12px",
                    color: "#ff4d5a"
                  }}>ビジネス＆クロスドメイン思考-</span>
                  ビジネス、マネジメント、技術を結びつけ、技術をビジネスニーズに適用する方法を理解しています。<br />
                  <span style={{
                    letterSpacing: "10px",
                    fontSize: "12px",
                    color: "#ff4d5a"
                  }}>データ分析能力-</span>
                  データアナリストとしての経験があり、データに精通しているため、企業がデータ駆動型の決定を支援できます。
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="slide-content">
                <h3 className="slide-title">自己PR - 3</h3>
                <div className="underline"></div>
                <p className="slide-description">
                  <span style={{
                    letterSpacing: "10px",
                    fontSize: "12px",
                    color: "#ff4d5a"
                  }}>問題を解決する能力-</span>
                  豊富な想像力と創造的思考能力を持ち、新しい解決策を提案し、新しいアイデアを生み出すことができます。<br />
                  <span style={{
                    letterSpacing: "10px",
                    fontSize: "12px",
                    color: "#ff4d5a"
                  }}>探求と挑戦を楽しむ-</span>
                  プログラミングスキルの学習のために快く挑戦。</p>
              </div>
            </SwiperSlide>
          </Swiper>
          <Link href="/about">
            <button className="btn">View Profile</button>
          </Link>
        </div>
        <div className="image_over_wrapper">
          <div className="image_over">
            <img src="/aboutme_img.png" />
          </div>
        </div>
      </section>

      <section id="works" className="section">
        <div className="second_name">
          <span>Works</span>
          <div className="border_name">
            <span id="other_border1"></span>
            <span id="other_border2"></span>
          </div>
        </div>
        <div className="works_content">
          <Swiper
            slidesPerView={1}
            centeredSlides={false}
            grabCursor={true}
            breakpoints={{
              769: {
                slidesPerView: 2,
                // slidesPerGroup: 2,
              },
            }}
            loop={true}
            navigation={true}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            speed={500}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide-work-content">
                <Link
                  href="https://github.com/StevenHsu22/API_shoppingcart"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/works_image/Flask_api.png" 
                    alt="Flask API" 
                    className="slide-work-image"
                  />
                </Link>
                <div className="slide-work-text-content">
                  <p className="slide-work-category">Practice</p>
                  <h3 className="slide-work-title">Python Flask API</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-work-content">
                <Link
                  href="https://github.com/StevenHsu22/ELK_dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/works_image/ELK.png" 
                    alt="ELK" 
                    className="slide-work-image"
                  />
                </Link>
                <div className="slide-work-text-content">
                  <p className="slide-work-category">Practice</p>
                  <h3 className="slide-work-title">ElasticSearch / Kibana</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-work-content">
                <Link
                  href="https://github.com/StevenHsu22/Grafana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slide-work-image"
                >
                  <img
                    src="/works_image/grafana.png" 
                    alt="Grafana" 
                    className="slide-work-image"
                  />
                </Link>
                <div className="slide-work-text-content">
                  <p className="slide-work-category">Research</p>
                  <h3 className="slide-work-title">Grafana Data Visualization</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-work-content">
                <Link
                  href="https://github.com/StevenHsu22/Conjur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/works_image/Conjur.png" 
                    alt="Conjur" 
                    className="slide-work-image"
                  />
                </Link>
                <div className="slide-work-text-content">
                  <p className="slide-work-category">Research</p>
                  <h3 className="slide-work-title">Conjur Secrets Management</h3>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide-work-content">
                <Link
                  href="https://github.com/StevenHsu22/Crawler-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/works_image/web_crawler.png" 
                    alt="Web Crawler" 
                    className="slide-work-image"
                  />
                </Link>
                <div className="slide-work-text-content">
                  <p className="slide-work-category">Practice</p>
                  <h3 className="slide-work-title">Web Crawler</h3>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="name_wrapper">
          <div className="contact_name">
            <span>Get In Touch</span>
          </div>
          <div className="border_name">
            <span id="contact_border1"></span>
            <span id="contact_border2"></span>
          </div>
        </div>
        <div className="contact_info">
          <a href="mailto:stevenhsu@keio.jp">
            stevenhsu@keio.jp
          </a>
          <div className="nav-items">
            <Link
              href="https://github.com/StevenHsu22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm nav-item"
            >
              <img
                src="/github-mark-text-white.svg"
                alt="GitHub"
                className="h-8 w-8 filter hue-rotate-90"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/steven-hsu-b7a705289/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm nav-item"
            >
              <img
                src="/LI-In-Bug.png"
                alt="linkedin"
                className="h-8 w-10 filter"
              />
            </Link>
          </div>
        </div>
        <div className="image_over_wrapper">
          <div className="image_over">
            <img src="/contact_img.png" />
          </div>
        </div>
      </section>
    </div>
  );
}
