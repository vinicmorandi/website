import Head from 'next/head'
import { BsVimeo } from 'react-icons/bs';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from './components/button';
import { useRef } from 'react';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import { Share, Twitter, GitHub, LinkedIn, Email } from '@mui/icons-material';

export default function Home() {
    const apresentacao = useRef(null)
    const skills = useRef(null)
    const experiencias = useRef(null)
    const interesses = useRef(null)


    const executeScroll = (ref) => ref.current.scrollIntoView()

    return (
        <main className="container">
            <Head>
                <title>Vinícius Morandi | Frontend Developer</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
            </Head>

            <header className='animate__animated animate__fadeInDown'>
                <div>
                    <svg class="svg-inline--fa fa-mf-logo fa-4x" aria-hidden="true" focusable="false" data-prefix="fak" data-icon="mf-logo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style={{ width: `80px` }}><path fill="var(--roxo1)" d="M458.566 321.7c-19.552 0-37.558-10.598-46.947-27.745l-28.553-52.116-24.007 44.217c-12.003 23.505-45.69 26.588-57.886 3.179l-25.168-48.263-37.945 69.938-45.495.289 54.4-102.691c11.52-21.771 42.592-22.157 54.789-.77l27.104 47.78 26.33-47.684c11.807-21.386 42.783-21.483 54.591-.097l36.883 66.277c6.679 12.042 24.973 7.322 24.973-6.358l.096-88.144c0-32.753-26.813-59.437-59.725-59.437h-183.82c-32.911 0-59.724 26.684-59.724 59.437v152.782c0 32.756 26.813 59.44 59.725 59.44h246.642V432H228.187C172.915 432 128 387.302 128 332.294v-152.59C128 124.602 172.818 80 228.187 80h183.627C467.181 80 512 124.602 512 179.704v88.82c0 29.38-23.91 53.175-53.434 53.175z"></path></svg>
                </div>
                <div className='buttons'>
                    <span className={`pointer hvr-underline-from-center`} onClick={() => { executeScroll(apresentacao) }}>Introduction</span>
                    <span className={`pointer hvr-underline-from-center`} onClick={() => { executeScroll(skills) }}>Skills</span>
                    <span className={`pointer hvr-underline-from-center`} onClick={() => { executeScroll(experiencias) }}>Experiences</span>
                    <a href='mailto:viniciuscmorandi@gmail.com'><Button titulo="contact me" /></a>
                </div>
            </header>

            <section id='presentation' ref={apresentacao}>
                <div id='presentation-text'>
                    <AnimationOnScroll animateOnce delay={100} animateIn="animate__fadeInUp">
                        <p>Hey there, my name is</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce delay={200} animateIn="animate__fadeInUp"><h1 className="title">VINÍCIUS <span className='emp1'>MORANDI :)</span></h1></AnimationOnScroll>
                    <AnimationOnScroll animateOnce delay={1000} animateIn="animate__fadeInUp"><h2>I like to design and develop <span className='emp2'>fashionable</span> and <span className='emp2'>clean</span> websites, in order to give its users the best experience possible.</h2></AnimationOnScroll>
                    <div className='presentation-items'>
                        <AnimationOnScroll animateOnce delay={1500} animateIn="animate__fadeInUp"><p>Highly skilled at progressive enhancement, design systems & UI Development.</p></AnimationOnScroll>
                        <AnimationOnScroll animateOnce delay={1500} animateIn="animate__fadeInUp"><p>Eager to learn and do whatever is possible to help you and your users achieve your goals.</p></AnimationOnScroll>
                    </div>
                </div>
                <div class='center'>
                    <AnimationOnScroll animateOnce delay={2000} animateIn="animate__fadeInUp">
                        <span className='small'>(this picture isn't actually me lol)</span>
                    </AnimationOnScroll>
                    <img id="foto" src="/foto.jpg" />
                </div>
            </section>


            <section id='skills' ref={skills}>
                <div id='teste' className='skills-text flex-left'>
                    <AnimationOnScroll animateOnce delay={100} animateIn="animate__fadeInUp">
                        <h2><span className='emp2 bold'>// </span>Design</h2>
                        <p>My design philosophy is entirely user-focused. I often look towards simpler, more consistent design systems, so our users have a more fluent and hassle-free experience, while still keeping it stylish. My most commonly used are Adobe XD, Figma, and JustinMind.</p>
                    </AnimationOnScroll>
                </div>
                <div className='skills-text flex-right'>
                    <AnimationOnScroll animateOnce delay={500} animateIn="animate__fadeInUp">
                        <h2><span className='emp2 bold'>// </span>Frontend</h2>
                        <p>I'm very profficient at multiple front-end frameworks, such as React, Next, Vue, Angular, and React Native, in order of experience. I'm also comfortable with most popular component libraries, such as Bootstrap, Tailwind, MUI, etc.</p>
                    </AnimationOnScroll>
                </div>
                <div className='skills-text flex-left'>
                    <AnimationOnScroll animateOnce delay={900} animateIn="animate__fadeInUp">
                        <h2><span className='emp2 bold'>// </span>Backend</h2>
                        <p>Although it's not my main focus right now, I've also gathered quite a lot of experience in back-end languages, such as PHP, Laravel, and Node. I'm also secently acquainted with a few Sequential Query Languages, like MySQL, MariaDB, and PostgreSQL, integrated through both REST and GraphQL APIs.</p>
                    </AnimationOnScroll>
                </div>
            </section>

            <section id='experiences' ref={experiencias}>
                <AnimationOnScroll animateOnce delay={100} animateIn="animate__fadeInUp">
                    <h1 id='experiences-title'>EXPERIENCES</h1>
                    <p>Welp, there's not a lot here yet, but it's enough to give a glimpse into my trajectory and potential as a developer.</p>
                    <p className='small'>psst... maybe your company could be the next on this list ;)</p>
                </AnimationOnScroll>
                <div id='experience-items'>
                    <AnimationOnScroll animateOnce delay={800} animateIn="animate__fadeInUp">
                        <a href='https://ifrs.edu.br/bento/' target='_blank'>
                            <div className='cardExperience'>
                                <img src='https://ifrs.edu.br/wp-content/uploads/2017/08/logo_vertical-01-1.jpg' />
                            </div>
                        </a>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce delay={900} animateIn="animate__fadeInUp">
                        <a href='https://www.ucs.br/site/' target='_blank'>
                            <div className='cardExperience'>
                                <img src='https://www.ucs.br/site/midia/arquivos/Logo-UCS-Horizontal.jpg' />
                            </div>
                        </a>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce delay={1300} animateIn="animate__fadeInUp">
                        <a href='https://eccosys.com.br/' target='_blank'>
                            <div className='cardExperience'>
                                <img src='https://eccosys.com.br/assets/img/logo/logo-eccosys.svg' />
                            </div>
                        </a>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateOnce delay={1700} animateIn="animate__fadeInUp">
                        <a href='https://www.includer.com.br/' target='_blank'>
                            <div id='includer' className='cardExperience'>
                                <img src='https://www.includer.com.br/img/includer.png' />
                            </div>
                        </a>
                    </AnimationOnScroll>
                </div>
            </section>

            <div id='ondinhas'></div>
            <footer>
                <div>
                    <SpeedDialAction
                        key={'Twitter'}
                        icon={<a href='https://twitter.com/vinicmorandi' target="_blank" style={{ height: '26px', width: '26px' }}><Twitter /></a>}
                        tooltipPlacement={'top'}
                        tooltipTitle='@vinicmorandi'
                        open
                    />
                    <SpeedDialAction
                        key={'GitHub'}
                        icon={<a href='https://github.com/vinicmorandi' target="_blank" style={{ height: '26px', width: '26px' }}><GitHub /></a>}
                        tooltipPlacement={'top'}
                        tooltipTitle='vinicmorandi'
                        open
                    />
                    <SpeedDialAction
                        key={'LinkedIn'}
                        icon={<a href='https://www.linkedin.com/in/vin%C3%ADcius-carrer-morandi-b00b5120b/' target="_blank" style={{ height: '26px', width: '26px' }}><LinkedIn /></a>}
                        tooltipPlacement={'top'}
                        tooltipTitle='Vinícius Carrer Morandi'
                        open
                    />

                    <SpeedDialAction
                        key={'Email'}
                        icon={<a href='mailto:viniciuscmorandi@gmail.com' style={{ height: '26px', width: '26px', color: 'var(--roxo1)' }}><Email /></a>}
                        tooltipPlacement={'top'}
                        tooltipTitle='viniciuscmorandi@gmail.com'
                        open
                    />
                </div>
                <p>
                    <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
                        Powered by{' '}
                        <svg aria-label="Vercel Logotype" fill="var(--branco)" height="19" style={{ marginBottom: '-2px' }} viewBox="0 0 284 65"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path></svg>
                    </a>
                </p>
            </footer>

            <style jsx>
                {`

                header {
                    position: absolute;
                    top:0px;
                    width:100%;
                    padding: 0px 300px;
                    display:flex;
                    justify-content:space-between;
                    align-items: center;
                    height: 80px;
                    font-size:30px;
                    color: var(--roxo1);
                    background-color: var(--branco);
                    z-index: 1000;
                    box-shadow: var(--shadow0)
                }

                #nome {
                    font-size: 30px;
                }

                .buttons {
                    display:flex;
                    gap: 20px;
                    font-size: 18px;
                    line-height: 35px;
                }

                .title {
                    font-size: 60px;
                    margin-bottom: 20px;
                    margin-top: 0px;
                }

                #ondinhas {
                    
                }

                footer {
                    padding: 200px 300px 200px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 50px 300px;
                    gap: 30px;
                    background-color: #3725AD;
                }

                footer img{
                    height: 20px;
                }

                section {
                    height: 100vh;
                    width: 100%;
                    display: flex;
                    align-items:center;
                    padding: 20px 300px;
                    overflow: hidden;
                    scroll-snap-align: start;
                }

                #presentation {
                    background-position-y: bottom;
                    background-repeat: no-repeat;
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='300' preserveAspectRatio='none' viewBox='0 0 1920 300'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1098%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c116 C 96%2c101 288%2c36.4 480%2c41 C 672%2c45.6 768%2c144.4 960%2c139 C 1152%2c133.6 1248%2c24.2 1440%2c14 C 1632%2c3.8 1824%2c73.2 1920%2c88L1920 300L0 300z' fill='rgba(105%2c 90%2c 197%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c270 C 64%2c249.6 192%2c171.4 320%2c168 C 448%2c164.6 512%2c253.6 640%2c253 C 768%2c252.4 832%2c159.6 960%2c165 C 1088%2c170.4 1152%2c269 1280%2c280 C 1408%2c291 1472%2c224.4 1600%2c220 C 1728%2c215.6 1856%2c250.4 1920%2c258L1920 300L0 300z' fill='rgba(72%2c 49%2c 212%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1098'%3e%3crect width='1920' height='300' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
                    padding-bottom: 150px;
                    display: flex;
                    justify-content: space-between;
                }


                #skills {
                    color: var(--branco);
                    background: var(--roxo1);
                    flex-direction: column;
                    padding-top: 150px;
                }

                #foto {
                    height: 400px;
                    width: 400px;
                    object-fit: cover;
                    box-shadow: var(--shadowPurple);
                    border-radius: 10px;
                }

                .containerExperience {
                    display:flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    width: 100%;
                    gap: 40px
                }

                .cardExperience {
                    width: 350px;
                    height: 250px;
                    box-shadow: var(--shadow2);
                    background: #fff;
                    padding: 30px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content:center;
                    border-radius: 20px;
                    transition: 0.2s;
                    cursor: pointer;
                }

                .cardExperience:hover {
                    transform: scale(1.05);
                    transition: 0.2s ease-in;
                    box-shadow: var(--shadow2)
                }

                #includer {
                   background: #222;
                }

                .cardExperience img {
                    max-width: 100%;
                    max-height: 100%;
                }

                a {
                    text-decoration:none !important;
                    color: var(--roxo1) !important;
                    font-weight: 400;
                }

                p {
                    margin: 5px 0px;
                }
                

                .presentation-items {
                    display: flex;
                    gap: 0px;
                }

                #presentation-text {
                    width: 60%;
                }

                footer p *{
                    color: var(--branco) !important;
                }

                #contact {
                    display:flex;
                    width: 70%;
                    position:relative;
                    justify-content: space-between;
                    margin: auto auto -50px;
                    background-color: var(--roxo2);
                    color: var(--branco);
                    align-items: center;
                    padding: 50px 100px;
                    border-radius: 20px;
                }

                #skills h2, #experiences h2 {
                    font-size: 50px;
                    text-transform: uppercase;
                    margin-bottom: 15px;
                    margin-top: 0px;
                }

                .skills-text {
                    width: 45%;
                    line-height: 1.5;
                }

                #skills {
                    justify-content: space-between;
                    background-position-y: bottom;
                    padding: 160px 320px;
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='1080' preserveAspectRatio='none' viewBox='0 0 1920 1080'%3e%3cg mask='url(%26quot%3b%23SvgjsMask12164%26quot%3b)' fill='none'%3e%3crect width='672' height='672' clip-path='url(%26quot%3b%23SvgjsClipPath12165%26quot%3b)' x='-322.91' y='462.77' fill='url(%23SvgjsPattern12166)' transform='rotate(289.1%2c 13.09%2c 798.77)'%3e%3c/rect%3e%3crect width='588' height='588' clip-path='url(%26quot%3b%23SvgjsClipPath12167%26quot%3b)' x='1335.39' y='538.78' fill='url(%23SvgjsPattern12168)' transform='rotate(114.97%2c 1629.39%2c 832.78)'%3e%3c/rect%3e%3cpath d='M1775.69 700.47 L1779.55 470L1644.8411344254698 452.4561344254699z' stroke='rgba(105%2c 90%2c 197%2c 1)' stroke-width='1.47' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='355.68' height='355.68' clip-path='url(%26quot%3b%23SvgjsClipPath12169%26quot%3b)' x='-15.93' y='173.97' fill='url(%23SvgjsPattern12170)' transform='rotate(303.91%2c 161.91%2c 351.81)'%3e%3c/rect%3e%3cpath d='M174.72 897.89 L295.05 1044.3L364.67865161648626 966.3013483835138z' stroke='rgba(105%2c 90%2c 197%2c 1)' stroke-width='2.85' stroke-dasharray='2%2c 2'%3e%3c/path%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath12171%26quot%3b)' x='1174.96' y='698.43' fill='url(%23SvgjsPattern12172)' transform='rotate(82.14%2c 1204.96%2c 728.43)'%3e%3c/rect%3e%3cpath d='M1007.05 822.68L995.28 817.65 997.6 805.05 985.83 800.02 988.15 787.42 976.38 782.39 978.71 769.8M1014.1 818.9L1002.33 813.87 1004.65 801.27 992.88 796.24 995.21 783.65 983.43 778.61 985.76 766.02M1021.15 815.12L1009.38 810.09 1011.7 797.49 999.93 792.46 1002.26 779.87 990.48 774.83 992.81 762.24' stroke='rgba(105%2c 90%2c 197%2c 1)' stroke-width='1.2' stroke-dasharray='3%2c 2'%3e%3c/path%3e%3crect width='252' height='252' clip-path='url(%26quot%3b%23SvgjsClipPath12173%26quot%3b)' x='92.37' y='598.81' fill='url(%23SvgjsPattern1217)' transform='rotate(307.65%2c 218.37%2c 724.81)'%3e%3c/rect%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask12164'%3e%3crect width='1920' height='1080' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern12166'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(105%2c 90%2c 197%2c 1)' fill='none' stroke-width='1.38'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12165'%3e%3ccircle r='168' cx='13.09' cy='798.77'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern12168'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(105%2c 90%2c 197%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12167'%3e%3ccircle r='147' cx='1629.39' cy='832.78'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='355.68' height='6.84' patternUnits='userSpaceOnUse' id='SvgjsPattern12170'%3e%3crect width='355.68' height='3.42' x='0' y='0' fill='rgba(105%2c 90%2c 197%2c 1)'%3e%3c/rect%3e%3crect width='355.68' height='3.42' x='0' y='3.42' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12169'%3e%3ccircle r='88.92' cx='161.91' cy='351.81'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='60' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern12172'%3e%3crect width='60' height='3' x='0' y='0' fill='rgba(105%2c 90%2c 197%2c 1)'%3e%3c/rect%3e%3crect width='60' height='3' x='0' y='3' fill='rgba(0%2c 0%2c 0%2c 0)'%3e%3c/rect%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath12171'%3e%3ccircle r='15' cx='1204.96' cy='728.43'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern12174'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(105%2c 90%2c 197%2c 1)' fill='none' stroke-width='1.37'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath121721'%3e%3ccircle r='63' cx='218.37' cy='724.81'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
                }

                #experiences {
                    color: var(--branco);
                    background: var(--roxo1);
                    flex-direction: column;
                    justify-content: space-evenly;
                    background-position-y: bottom;
                    padding: 0px 200px 200px;
                    background-repeat: no-repeat;
                    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1920' height='300' preserveAspectRatio='none' viewBox='0 0 1920 300'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1073%26quot%3b)' fill='none'%3e%3cpath d='M 0%2c44 C 76.8%2c79.8 230.4%2c207.8 384%2c223 C 537.6%2c238.2 614.4%2c121.2 768%2c120 C 921.6%2c118.8 998.4%2c222.8 1152%2c217 C 1305.6%2c211.2 1382.4%2c86.4 1536%2c91 C 1689.6%2c95.6 1843.2%2c210.2 1920%2c240L1920 300L0 300z' fill='rgba(55%2c 37%2c 173%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1073'%3e%3crect width='1920' height='300' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
                }

                #experiences-title {
                    font-size: 60px;
                    margin: 0px auto;
                    text-align:center;
                    width: 100%;
                    margin-bottom: 30px;
                }

                #experiences p {
                    text-align: center;
                }

                #experience-items {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

            `}</style>

            <style jsx global>{`

                @import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                
                :root {
                    --roxo1: #4831d4;
                    --roxo2: #695ac5;
                    --verde1: #ccf381;

                    --branco: #f9f9f9;

                    --shadow0: rgba(60, 64, 67, 0.1) 0px 1px 1px 0px, rgba(60, 64, 67, 0.05) 0px 1px 1px 1px;
                    --shadow1: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
                    --shadow2: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
                    --shadow3: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
                    --shadow4: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
                    --shadowPurple: rgba(72, 49, 212, 0.4) 5px 5px, rgba(72, 49, 212, 0.3) 10px 10px, rgba(72, 49, 212, 0.2) 15px 15px, rgba(72, 49, 212, 0.1) 20px 20px, rgba(72, 49, 212, 0.05) 25px 25px;;

                    --borda: 1px solid #eaeaea;
                }

                html,
                body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                    background-color: var(--branco);
                    scroll-behavior: smooth;
                }

                .flex-column {
                    flex-direction: column;
                    justify-content:center;
                    gap: 30px;
                }

                * {
                    box-sizing: border-box;
                    font-family: 'Montserrat', sans-serif;
                }

                /* Underline From Center */
                .hvr-underline-from-center {
                    display: inline-block;
                    vertical-align: middle;
                    -webkit-transform: perspective(1px) translateZ(0);
                    transform: perspective(1px) translateZ(0);
                    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
                    position: relative;
                    overflow: hidden;
                }
                .hvr-underline-from-center:before {
                    content: "";
                    position: absolute;
                    z-index: -1;
                    left: 51%;
                    right: 51%;
                    bottom: 0;
                    background: var(--roxo1);
                    height: 1px;
                    -webkit-transition-property: left, right;
                    transition-property: left, right;
                    -webkit-transition-duration: 0.2s;
                    transition-duration: 0.2s;
                    -webkit-transition-timing-function: ease-out;
                    transition-timing-function: ease-out;
                }
                .hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before, hvr-underline-from-center-active:before{
                    left: 0;
                    right: 0;
                }

                .emp1 {
                    color: var(--roxo1)
                }

                .emp2 {
                    color: var(--roxo2)
                }

                .center {
                    text-align:center;
                }

                .flex-left {
                    align-self: flex-start;
                }

                .flex-right {
                    align-self: flex-end;
                }

                .small {
                    font-size: 12px;
                }

                .bold {
                    font-weight: 900;
                }

                .pointer {
                    cursor: pointer;
                }

        `}
            </style>
        </main>
    )
}
