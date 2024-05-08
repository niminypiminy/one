import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import BlogPostHeader3 from '../components/blog-post-header3'
import Footer1 from '../components/footer1'

const Page = (props) => {
  return (
    <>
      <div className="page-container">
        <Head>
          <title>Page - Danneskiold & Associates</title>
          <meta
            name="description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:title"
            content="Page - Danneskiold &amp; Associates"
          />
          <meta
            property="og:description"
            content="Danneskiold &amp; Associates is a boutique law firm in Bangkok, providing expertise in criminal, immigration, tort, contract, and corporate law."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/3b36eceb-15bd-4df9-a03b-c15ec4324845/b54c7d9e-85ad-41bf-8d00-bf6410be3d15?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <div className="page-container1">
          <Link href="/criminal-proceedings-in-thailand">
            <a className="page-link">
              <img
                alt="image"
                src="/united-kingdom-200h.png"
                className="page-image"
              />
            </a>
          </Link>
          <Link href="/page">
            <a className="page-link1">
              <img
                alt="image"
                src="/thailand-200h.png"
                className="page-image1"
              />
            </a>
          </Link>
        </div>
        <BlogPostHeader3 text1="Manita"></BlogPostHeader3>
        <div className="page-container2">
          <span className="page-text">การดำเนินคดีอาญาในประเทศไทย</span>
          <span className="page-text01">
            <span className="page-text02">                 </span>
            <br className="page-text03"></br>
            <br className="page-text04"></br>
            <span className="page-text05">       </span>
            <span className="page-text06">
              ตามประมวลกฎหมายวิธีพิจารณาความอาญา มาตรา 28
              ได้กำหนดให้บุคคลที่มีอำนาจฟ้องคดีอาญาได้แก่
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="page-text07">พนักงานอัยการและผู้เสียหาย</span>
            <span className="page-text08">
              {' '}
              จะเห็นได้ว่าตามกฎหมายไทยสามารถดำเนินคดีอาญาได้โดยรัฐ (State
              Prosecution) และดำเนินคดีอาญาได้โดยเอกชน (Private Prosecution)
              กล่าวคือ
              กฎหมายให้สิทธิแก่ผู้เสียหายในการฟ้องคดีอาญาได้เช่นเดียวกับพนักงานอัยการ
              และอำนาจในการฟ้องคดีอาญาของพนักงานอัยการและผู้เสียหายนั้น
              มีความเป็นอิสระแยกต่างหากออกจากกัน
            </span>
            <br className="page-text09"></br>
            <br className="page-text10"></br>
            <span className="page-text11">
              การดำเนินคดีอาญาโดยเอกชน (ผู้เสียหาย)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="page-text12"></br>
            <br className="page-text13"></br>
            <span className="page-text14">
                    ตามกฎหมายไทย
              ผู้เสียหายมีอำนาจฟ้องคดีอาญาได้เท่าเทียมกับพนักงานอัยการ
              โดยไม่ต้องคำนึงว่าคดีนั้นจะได้มีการร้องทุกข์ต่อตำรวจหรือมีการสอบสวนของพนักงานสอบสวนหรือไม่
              โดยผู้เสียหายสามารถแต่งตั้งทนายความยื่นคำฟ้องคดีอาญาต่อศาลที่มีเขตอำนาจได้
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="page-text15"></br>
            <br className="page-text16"></br>
            <span className="page-text17">
                    โดยการฟ้องคดีอาญาโดยผู้เสียหายนั้นกฎหมายกำหนดให้
            </span>
            <span className="page-text18">ศาลต้องทำการไต่สวนมูลฟ้อง</span>
            <span className="page-text19">
              {' '}
              (กระบวนการที่ศาลทำการตรวจสอบข้อเท็จจริงในคดีที่ฟ้องว่ามีมูลเพียงพอที่ศาลจะรับฟ้องไว้พิจารณาต่อไปหรือไม่)
              ซึ่งแตกต่างจากคดีอาญาที่พนักงานอัยการเป็นผู้ฟ้องคดี
              (การดำเนินคดีอาญาโดยรัฐ) ซึ่งศาลไม่จำต้องไต่สวนมูลฟ้องก่อน
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="page-text20"></br>
            <br className="page-text21"></br>
            <span className="page-text22">
                    ในกรณีที่ผู้เสียหายเป็นผู้เยาว์หรือผู้ไร้ความสามารถ
              ให้ผู้แทนโดยชอบธรรม (บิดา มารดา ผู้ปกครองหรือผู้รับบุตรบุญธรรม)
              ของผู้เยาว์หรือผู้อนุบาลของผู้ไร้ความสามารถเป็นผู้มีอำนาจดำเนินคดีอาญาแทนผู้เสียหาย
            </span>
            <br className="page-text23"></br>
            <br className="page-text24"></br>
            <span className="page-text25">
                   
              ในกรณีที่ผู้เสียหายถึงแก่ความตายหรือได้รับบาดเจ็บถึงขนาดไม่สามารถดำเนินคดีเองได้
              ผู้บุพการี ผู้สืบสันดาน
              สามีหรือภริยาของผู้เสียหายมีอำนาจดำเนินคดีอาญาแทนผู้เสียหายได้
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="page-text26"></br>
            <br className="page-text27"></br>
            <span className="page-text28">
                   
              ในกรณีที่ผู้เสียหายได้ยื่นฟ้องคดีอาญาไว้แล้วต่อมาเสียชีวิตในขณะที่คดีอาญากำลังอยู่ในระหว่างการพิจารณา
              ผู้บุพการี ผู้สืบสันดาน
              สามีหรือภริยาของผู้เสียหายที่เสียชีวิตสามารถดำเนินคดีแทนต่อไปโดยยื่นคำร้องขอเข้ามาในคดีเพื่อดำเนินคดีต่างผู้ตายได้
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="page-text29"></br>
            <br className="page-text30"></br>
            <span className="page-text31">
              การดำเนินคดีอาญาโดยรัฐ (พนักงานอัยการ)
            </span>
            <br className="page-text32"></br>
            <br className="page-text33"></br>
            <span className="page-text34">
                    หากผู้เสียหายต้องการดำเนินคดีอาญาโดยพนักงานอัยการ
              ผู้เสียหายจะต้อง
            </span>
            <span className="page-text35">ดำเนินการร้องทุกข์</span>
            <span className="page-text36">
              ต่อสถานีตำรวจและพนักงานสอบสวนต้องทำการสอบสวนก่อน
              เพราะในการดำเนินคดีอาญาโดยรัฐนั้นกฎหมายห้ามไม่ให้พนักงานอัยการฟ้องคดี
              หากคดีนั้นไม่ได้มีการสอบสวนมาก่อน
              (แตกต่างจากการฟ้องคดีอาญาโดยผู้เสียหายที่ไม่จำต้องมีการสอบสวนมาก่อน)
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="page-text37"></br>
            <br className="page-text38"></br>
            <span className="page-text39">
                    ในกรณีที่มีการสอบสวนในความผิดนั้นแล้ว
              พนักงานอัยการจะคำสั่งฟ้องคดีนั้นหรือไม่ก็ได้
              หากพนักงานอัยการมีคำสั่งฟ้องคดี
              พนักงานอัยการก็จะดำเนินคดีนั้นต่อไป
              (ซึ่งผู้เสียหายสามารถยื่นคำร้องขอเข้าเป็นโจทก์ร่วมกับพนักงานอัยการได้)
              หากพนักงานอัยการมีคำสั่งไม่ฟ้องคดี
              ย่อมไม่ตัดสิทธิผู้เสียหายที่จะฟ้องคดีอาญาต่อศาลเอง
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="page-text40"></br>
            <br className="page-text41"></br>
            <span className="page-text42">หมายเหตุ:</span>
            <br className="page-text43"></br>
            <br className="page-text44"></br>
            <span className="page-text45">
                    ในคดีอาญาความผิดต่อส่วนตัวหรือความผิดอันยอมความได้
            </span>
            <span className="page-text46">
              {' '}
              กล่าวคือ ความผิดที่มีผลกระทบต่อผู้ที่ถูกกระทำโดยตรงเท่านั้น
              มิได้ก่อให้เกิดความเสียหายแก่รัฐหรือสังคม เช่น
              ความผิดฐานหมิ่นประมาท ฉ้อโกง ยักยอกทรัพย์ ทำให้เสียทรัพย์ อนาจาร
              ข่มขืนกระทำชำเรา เป็นต้น
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br className="page-text47"></br>
            <br className="page-text48"></br>
            <span className="page-text49">
                    หากผู้เสียหายดำเนินคดีอาญาด้วยตนเอง
              ผู้เสียหายจะต้องฟ้องคดีต่อศาลภายใน 3 เดือน นับแต่วันที่
              “รู้เรื่องความผิด” และ “รู้ตัวผู้กระทำความผิด”
              โดยผู้เสียหายไม่ต้องร้องทุกข์ต่อสถานีตำรวจ
              แต่หากผู้เสียหายต้องการดำเนินคดีอาญาโดยพนักงานอัยการ
              ผู้เสียหายจะต้องไปร้องทุกข์ภายในกำหนดเวลา 3
              เดือนนับแต่รู้ถึงความผิดและรู้ตัวผู้กระทำผิดเช่นกัน
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="page-text50">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="page-container3">
          <Link href="/contact">
            <a className="page-link2 button">Contact</a>
          </Link>
        </div>
        <Footer1 rootClassName="footer1-root-class-name1"></Footer1>
      </div>
      <style jsx>
        {`
          .page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-container1 {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: flex-end;
          }
          .page-link {
            display: contents;
          }
          .page-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            text-decoration: none;
          }
          .page-link1 {
            display: contents;
          }
          .page-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            margin-right: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .page-container2 {
            flex: 0 0 auto;
            width: 75%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .page-text {
            font-size: 1.5rem;
            font-style: normal;
            text-align: center;
            font-family: 'Noto Sans Thai';
            font-weight: 700;
          }
          .page-text01 {
            width: 60%;
            font-size: 1.5rem;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text02 {
            font-style: normal;
          }
          .page-text03 {
            font-style: normal;
          }
          .page-text04 {
            font-style: normal;
          }
          .page-text05 {
            font-style: normal;
          }
          .page-text06 {
            font-style: normal;
          }
          .page-text07 {
            font-weight: 600;
          }
          .page-text08 {
            font-style: normal;
          }
          .page-text09 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text10 {
            font-style: normal;
          }
          .page-text11 {
            font-weight: 600;
          }
          .page-text12 {
            font-size: 1.5rem;
            font-family: 'Noto Sans Thai';
            font-weight: 600;
          }
          .page-text13 {
            font-style: normal;
          }
          .page-text14 {
            font-style: normal;
          }
          .page-text15 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text16 {
            font-style: normal;
          }
          .page-text17 {
            font-style: normal;
          }
          .page-text18 {
            font-weight: 600;
          }
          .page-text19 {
            font-style: normal;
          }
          .page-text20 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text21 {
            font-style: normal;
          }
          .page-text22 {
            font-style: normal;
          }
          .page-text23 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text24 {
            font-style: normal;
          }
          .page-text25 {
            font-style: normal;
          }
          .page-text26 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text27 {
            font-style: normal;
          }
          .page-text28 {
            font-style: normal;
          }
          .page-text29 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text30 {
            font-style: normal;
          }
          .page-text31 {
            font-weight: 600;
          }
          .page-text32 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text33 {
            font-style: normal;
          }
          .page-text34 {
            font-style: normal;
          }
          .page-text35 {
            font-weight: 600;
          }
          .page-text36 {
            font-style: normal;
          }
          .page-text37 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text38 {
            font-style: normal;
          }
          .page-text39 {
            font-style: normal;
          }
          .page-text40 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text41 {
            font-style: normal;
          }
          .page-text42 {
            font-weight: 600;
          }
          .page-text43 {
            font-size: 1.5rem;
            font-family: 'Noto Sans Thai';
            font-weight: 600;
          }
          .page-text44 {
            font-style: normal;
          }
          .page-text45 {
            font-weight: 600;
          }
          .page-text46 {
            font-style: normal;
          }
          .page-text47 {
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Noto Sans Thai';
            font-weight: 400;
          }
          .page-text48 {
            font-style: normal;
          }
          .page-text49 {
            font-style: normal;
          }
          .page-text50 {
            font-style: normal;
          }
          .page-container3 {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            justify-content: center;
          }
          .page-link2 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 1.5rem;
            font-style: normal;
            font-family: 'Josefin Sans';
            font-weight: 300;
            text-decoration: none;
            background-color: #ffff00;
          }
          @media (max-width: 1600px) {
            .page-text01 {
              width: 70%;
              font-size: 1.5rem;
            }
            .page-text02 {
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 1200px) {
            .page-text01 {
              width: 80%;
              font-size: 1.5rem;
            }
            .page-text02 {
              font-style: normal;
              font-weight: 700;
            }
          }
          @media (max-width: 991px) {
            .page-container2 {
              width: 80%;
            }
          }
          @media (max-width: 767px) {
            .page-container2 {
              width: 85%;
            }
            .page-text01 {
              width: 90%;
            }
          }
          @media (max-width: 479px) {
            .page-container2 {
              width: 90%;
              margin-top: var(--dl-space-space-twounits);
            }
            .page-text01 {
              width: 90%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Page
