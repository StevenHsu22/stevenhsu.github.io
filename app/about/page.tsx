"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import '@/app/ui/aboutme.css';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(425);
  const timelineEventRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const updateScrollAmount = () => {
      if (timelineEventRef.current) {
        const eventWidth = timelineEventRef.current.offsetWidth;
        const gap = 20;
        setScrollAmount(eventWidth + gap);
      }
    };
  
    updateScrollAmount();
    window.addEventListener('resize', updateScrollAmount);
    
    return () => {
      window.removeEventListener('resize', updateScrollAmount);
    };
  }, []);

  return (
    <div className="main-container">
      <section className="aboutme-section">
        <div className="heading__wrap">
          <p className="heading-num">01</p>
          <h2 className="heading-title">Who I am</h2>
        </div>
        <div className="text__wrap">
          <div className="who__wrap">
            <div className="who__name">
              <h3 className="who__jp">いせん
                <p className="who__tw">徐偉瑄</p> 
              </h3>
              <p className="who__en">Steven Hsu</p>
            </div>
            <div className="who__content">
              <p className="who__text">1997年12月、台湾出身です。
              大学は商学部を卒業し、卒業後はコミュニティデータアナリストとして勤務しました。
              それと同時に、データの取得や管理についてさらに学びたいと考えるようになりました。<br />
              2022年3月に AI データ人材養成コースに参加し、Python やデータベース、API 連携について学びました。<br />
              2022年10月に、SETN にデータエンジニアとして就職し、プログラミングスキルを実務のプロジェクトに応用しました。
              </p>
              <div className="who__image">
                <img src="/maple_picture.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutme-section">
        <div className="heading__wrap">
          <p className="heading-num">02</p>
          <h2 className="heading-title">Career</h2>
        </div>
        <div className="timeline-container">
          <button className="scroll-button left" onClick={scrollLeft}>
            <ArrowLeftIcon className="h-6 w-6" />
          </button>

          <div className="timeline" ref={scrollContainer}>

            <div className="timeline-event" ref={timelineEventRef}> 
              <p className="event-date">2024.10 ~ 2025.8</p>
              <div className="event-content">
                <h3>慶應義塾大学</h3>
                <p>別科・日本語研修課程</p>
                <p className='event-description'>
                1.日本の技術と文化を理解する<br />
                2.日本の技術コミュニティや開発コミュニティに参加する<br />
                3.個人の競争力と語学スキルを向上させる<br />
                4.KCS（慶應義塾大学のコンピュータサークル）に所属し、Web班の一員として活動<br />
                5.2025年3月、Progateハッカソンに参加し、AWS賞を受賞<br />
                </p>
              </div>
            </div>

            <div className="timeline-event" ref={timelineEventRef}>
              <p className="event-date">2022.10 ~ 2024.07
                <Link 
                  href="https://www.canva.com/design/DAF8elJt09Q/9nsRIRpdMKmkPKObkf3nag/view?utm_content=DAF8elJt09Q&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h999c3a0bbd" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <button className="event-portfolio-btn">Project Timeline</button>
                </Link>
              </p>
              <div className="event-content">
                <h3>Sanlih E-Television</h3>
                <p>データエンジニア / ソフトウェアエンジニア</p>
                <p className='event-description'>
                1.同僚の作業効率を向上させるために、ソーシャルメディア意見分析用のウェブプラットフォーム「VOICE」を開発しました。<br />
                2.画像著作権コストを削減するために、StableDiffusionのアプリケーションのAPIを開発しました。<br />
                3.YouTubeのショート動画にVirtual anchorを導入し、クリック率が30%向上しました。<br />
                4.BERT-WWMを使用して、3クラスの感情分析モデルを構築し、評価精度0.797を達成しました。<br />
                5.ニュース推薦モデルのトレーニングに取り組み、ユーザーの平均セッション時間を15%向上させ、クリック率を10%向上させました。<br />
                6.LINE Botでリアルタイムのソーシャルメディア意見分析を実装しました。<br />
                <span style={{
                    fontSize: "12px",
                    color: "#aaa5a5",
                    padding: "10px 0 0 0",
                    display: "inline-block",
                  }}>#Website #StableDiffusion #FastAPI #BERT #LINEBot #RecommendSystem #ELK
                </span>
                </p>
              </div>
            </div>

            <div className="timeline-event" ref={timelineEventRef}>
              <p className="event-date">2022.03 ~ 2022.08</p>
              <div className="event-content">
                <h3>AI データ人材養成コース</h3>
                <p>インターン</p>
                <p className='event-description'>
                1.Pythonを使用して関連データをスクレイピングする<br />
                2.SQLデータベースの構築と利用<br />
                3.APIの連携、およびデータの可視化<br />
                4.プロジェクトの推進を支援します<br />
                <span style={{
                    fontSize: "12px",
                    color: "#aaa5a5",
                    padding: "10px 0 0 0",
                    display: "inline-block",
                  }}>#Python #Linux #Tableau #ELK #Grafana #MySQL
                </span>
                </p>
              </div>
            </div>

            <div className="timeline-event" ref={timelineEventRef}>
              <p className="event-date">2021.05 ~ 2021.11</p>
              <div className="event-content">
                <h3>eLAND インフォメーション</h3>
                <p>コミュニティデータアナリスト</p>
                <p className='event-description'>
                1.分析レポートを 20 件実行<br />
                2.多業界レポート<br />
                3.クライアント管理<br />
                4.クライアントに戦略的方向性を提供<br />
                5.教育トレーニング最適化
                </p>
              </div>
            </div>

            <div className="timeline-event" ref={timelineEventRef}>
              <p className="event-date">2016.09 ~ 2020.06</p>
              <div className="event-content">
                <h3>台北市立大学</h3>
                <p>都市產業管理とマーケティング学科</p>
                <p className='event-description'>
                1.市場調査 - 産業調査、競合他社分析<br />
                2.報告作成 - 企画書の作成、プレゼンテーションスキル<br />
                3.ブランドマーケティング<br />
                4.チームワーク
                </p>
              </div>
            </div>

          </div>
          <button className="scroll-button right" onClick={scrollRight}>
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </div>
      </section>

      <section className="aboutme-section">
        <div className="heading__wrap">
          <p className="heading-num">03</p>
          <h2 className="heading-title">Skill Stack</h2>
        </div>
        <table>
          <thead>
            <tr style={{ backgroundColor: 'gray' }}>
              <th>Category</th>
              <th>Experienced</th>
              <th>Familiar</th>
              <th>Personal Projects</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Programming Languages</td>
              <td>Python</td>
              <td>HTML, CSS, JavaScript</td>
              <td>TypeScript</td>
            </tr>
            <tr>
              <td>Frameworks</td>
              <td>Flask, FastAPI</td>
              <td>-</td>
              <td>Next.js, React</td>
            </tr>
            <tr>
              <td>Database</td>
              <td>Elasticsearch, MySQL</td>
              <td>MongoDB, Redis, Amazon S3</td>
              <td>Neo4j</td>
            </tr>
            <tr>
              <td>Infrastructure / Cloud</td>
              <td>-</td>
              <td>GCP, AWS, Azure</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Machine Learning</td>
              <td>-</td>
              <td>scikit-learn, TensorFlow, PyTorch</td>
              <td>-</td>
            </tr>
            <tr>
              <td>AI Tools</td>
              <td>StableDiffusion</td>
              <td>LangChain, Langflow, Prompt engineering</td>
              <td>Dify</td>
            </tr>
            <tr>
              <td>Search Engine</td>
              <td>Elasticsearch</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Analytics / Monitoring Tools</td>
              <td>Kibana</td>
              <td>GA4</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Dev Environment</td>
              <td>Docker, Docker Compose</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Code Management</td>
              <td>GitLab</td>
              <td>-</td>
              <td>GitHub</td>
            </tr>
            <tr>
              <td>Testing Tools</td>
              <td>Postman</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <div className="note-container">
          備考：
          <ul>
            <li><strong>Experienced</strong>：実務で頻繁に使用</li>
            <li><strong>Familiar</strong>：実務で触れたことがあり、基本的な理解と簡単な実装経験はある</li>
            <li><strong>Personal Projects</strong>：自学またはサイドプロジェクトで使用経験ある</li>
          </ul>
        </div>
      </section>

    </div>
  );
}