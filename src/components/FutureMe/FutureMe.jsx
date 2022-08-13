import React from 'react';
import './FutureMe.css';
import typescript from '../../images/typescript.png';
import nextjs from '../../images/nextjs2.png';
import jest from '../../images/jest.png';
import threejs from '../../images/threejs.png';
import redux from '../../images/redux.png';
import storybookjs from '../../images/storybook.png';
import figma from '../../images/figma.png';
import blockchain from '../../images/blockchain.png';

const FutureMe = () => {
  return (
    <div className="futureme">
      <div className="futureme-header">What I Am Going To Learn Next</div>
      <div className="futureme-cards">
        <div className="futureme-card card1">
          <div className="futureme-box">
            <div className="futureme-content">
              <div className="futureme-details">
                <h3>01</h3>
                <h4>TypeScript</h4>
                <p>
                  I have learnt about the fundamental of TypeScript, but still
                  not familiar with it. I am planning to use it to build more
                  small project. TypeScript is so useful for type checking at
                  compile-time, reduces bug before apps deploy.
                </p>
              </div>
              <div className="futureme-img">
                <img src={typescript} alt="typescript" />
              </div>
            </div>
          </div>
        </div>
        <div className="futureme-card card1">
          <div className="futureme-box">
            <div className="futureme-content">
              <div className="futureme-details">
                <h3>02</h3>
                <h4>Next.js</h4>
                <p>
                  Search engines can easily crawl web content before web page is
                  loaded due to SSR feattures of Next.js. Besides that, Next.js
                  has automatic image optimization features, I plan to build
                  more apps with Next.js to get familiar with it.
                </p>
              </div>
              <div className="futureme-img">
                <img src={nextjs} alt="nextjs" />
              </div>
            </div>
          </div>
        </div>
        <div className="futureme-card card1">
          <div className="futureme-box">
            <div className="futureme-content">
              <div className="futureme-details">
                <h3>03</h3>
                <h4>Jest</h4>
                <p>
                  Jest is a JavaScript testing framework, can be used to test
                  front-end and back-end JS application, ensure the code is
                  working as expected and reducing bugs
                </p>
              </div>
              <div className="futureme-img">
                <img src={jest} alt="jest" />
              </div>
            </div>
          </div>
        </div>
        <div className="futureme-card card1">
          <div className="futureme-box">
            <div className="futureme-content">
              <div className="futureme-details">
                <h3>04</h3>
                <h4>Three.js</h4>
                <p>
                  3D animation, objects and effect can be very creative and
                  bring more visual enjoyment for user. And I think 3D features
                  would be great for web apps which related to music, design,
                  entertaiment.
                </p>
              </div>
              <div className="futureme-img">
                <img src={threejs} alt="threejs" />
              </div>
            </div>
          </div>
        </div>
        <div className="futureme-card card1">
          <div className="futureme-box">
            <div className="futureme-content">
              <div className="futureme-details">
                <h3>05</h3>
                <h4>Redux</h4>
                <p>
                  Have basic understanding of Redux, but not familiar with Redux
                  toolkit as there is slightly different when writing code.
                  Practice make perfect, would try to use Redux toolkit instead
                  of Redux or React Context.
                </p>
              </div>
              <div className="futureme-img">
                <img src={redux} alt="redux" />
              </div>
            </div>
          </div>
        </div>
        <div className="futureme-card card1">
          <div className="futureme-box">
            <div className="futureme-content">
              <div className="futureme-details">
                <h3>06</h3>
                <h4>Storybook.js</h4>
                <p>
                  This is an eye-opener for me, developing each component
                  isolatedly. Can write different stories for each component
                  story due to different scenario. Would like to dive deep in
                  this.
                </p>
              </div>
              <div className="futureme-img">
                <img src={storybookjs} alt="storybookjs" />
              </div>
            </div>
          </div>
        </div>
        <div className="futureme-card card1">
          <div className="futureme-box">
            <div className="futureme-content">
              <div className="futureme-details">
                <h3>07</h3>
                <h4>Figma</h4>
                <p>
                  I have used Adobe Xd before, it is easy to use. The different
                  of Figma and Xd is that no need for cloud syncing, and Figma
                  is more easy to share files which better for collaboration.
                  Would like to try Figma in future, and it is free.
                </p>
              </div>
              <div className="futureme-img">
                <img src={figma} alt="figma" />
              </div>
            </div>
          </div>
        </div>
        <div className="futureme-card card1">
          <div className="futureme-box">
            <div className="futureme-content">
              <div className="futureme-details">
                <h3>08</h3>
                <h4>Blockchain</h4>
                <p>
                  Before exploring Web 3.0, I would like to know what exactly is
                  blockchain. I can't judge whether Web 3.0 is the future of
                  internet or hype before I have understand what are them.
                </p>
              </div>
              <div className="futureme-img">
                <img src={blockchain} alt="blockchain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureMe;
