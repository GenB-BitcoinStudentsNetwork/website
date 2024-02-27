"use client";

import BioCard from "../bioCard";
import Heading2 from "../heading2";
import BoardDepartment from "./boardDepartmentLayout";
import BoardLayout from "./boardLayout";

const Board = () => {
  return (
    <div className="flex px-4 lg:px-[6.5rem] py-8 lg:py-16 justify-center items-center gap-2">
      <div className="flex flex-col items-center gap-8 w-full">
        <Heading2 text="Advisory Board" className="text-center" />
        <div className="flex flex-col items-start gap-16 lg:gap-24 w-full">
          <BoardLayout>
            <BoardDepartment title="General Advisors">
              <BioCard
                imagePath="/jeff.png"
                name="Jeff Booth"
                info="Entrepreneur, Technology Leader, General Partner at egodeath.capital, and Best Selling Author"
                twitterLink="https://twitter.com/JeffBooth"
                linkedinLink="https://www.linkedin.com/in/jeffdbooth/?originalSubdomain=ca"
                npub="npub1s05p3ha7en49dv8429tkk07nnfa9pcwczkf5x5qrdraqshxdje9sq6eyhe"
                bio={[
                  "Jeff Booth is a visionary leader, technology entrepreneur and best-selling author of The Price of Tomorrow – Why Deflation is Key to an Abundant Future.  With his expertise in technology, system thinking and design, he is at the forefront of a transition from an economic system built for the past, and one built for the future. ",
                  "Jeff has been featured in Forbes, TechCrunch, Inc.com, The Globe and Mail, BNN, Fast Company, Entrepreneur, Bloomberg, TIME, and The Wall Street Journal. In 2015, he was named BC Technology Industry Association’s (BCTIA) Person of the Year, and in 2016 Goldman Sachs named him among its 100 Most Intriguing Entrepreneurs.He is a Founding Partner of ego death capital, Co-Founder of addy and NocNoc. He has been a Young Presidents Organization member since 2004 and contributes time as a Founding Fellow at the Creative Destruction Lab.",
                  "Jeff currently sits on the boards of Core Scientific, Scoop Solar, Fedi and Breez.",
                ]}
              />
              <BioCard
                imagePath="/michael.png"
                name="Michael Rihani"
                info="Bitcoin Product Lead Cash App at Block"
                twitterLink="https://twitter.com/michaelrihani"
                linkedinLink="https://www.linkedin.com/in/michaelrihani/"
                npub="npub1zvrwm4n0rk3hftwyzl8csjaulatuvwvk2c3kc8u89mssgq7qrvks5zvf63"
                bio={[
                  "Michael Rihani is the Bitcoin Product Lead at Cash App (part of Block, Inc., a global technology company with a focus on financial services). He has been integral in bringing key bitcoin products and infrastructure to market, including the Lightning Network on Cash App. Previously, he led product at Tesla where he helped integrate bitcoin as a payment method on Tesla.com. He also worked at Apple where he launched and scaled Apple Pay on the Web, Apple Cash, and Apple Card. Michael holds a M.S. in Computer Science from Georgia Tech and a B.S. in Business Information Technology from Virginia Tech.",
                ]}
              />
            </BoardDepartment>
            <BoardDepartment title="Finance & Operations">
              <BioCard
                imagePath="/abubakar.png"
                name="Abubakar Nur Khalil"
                info="Bitcoin core contributor | CEO & CTO at Recursive Capital | Board Member of ₿trust"
                twitterLink="https://twitter.com/ihate1999"
                linkedinLink="https://www.linkedin.com/in/abubakar-nur-khalil-29923b1a0/"
                npub="npub1sn0q3zptdcm8qh8ktyhwtrnr9htwpykav8qnryhusr9mcr9ustxqe4tr2x"
                bio={[
                  "Abubakar is a Nigerian programmer, Bitcoin core contributor, and CEO & CTO at Recursive Capital. He is also a board member of ₿trust, a non-profit focused on training African bitcoin and lightning developers via ₿trust builders and growing the Bitcoin ecosystem in Africa.",
                ]}
              />
              <BioCard
                imagePath="/lucas.png"
                name="Lucas Ferreira"
                info="Evangelist at Lightning Labs | Cofounder and Executive Director at Vinteum | Organizer of Satsconf"
                twitterLink="https://twitter.com/lucasdcf"
                linkedinLink="https://www.linkedin.com/in/ldecferreira/"
                npub="npub1pumdyz7qfu0suamv4nrl0vcg574dtl5mwazva6nyjxhpwc4ccxxqca3ane"
                bio={[
                  "Lucas is a Lightning Evangelist at Lightning Labs, where he dedicates himself to assisting developers and businesses in leveraging the Lightning Network, alongside nurturing the community's growth.",
                  "He is the organizer of Satsconf, a Bitcoin conference in Brazil, and the founder of Vinteum, a non-profit aimed at enhancing the Bitcoin developer ecosystem in Brazil by providing support, education and funding to open-source contributors.",
                ]}
              />
            </BoardDepartment>
          </BoardLayout>
          <BoardLayout>
            <BoardDepartment title="University Outreach">
              <BioCard
                imagePath="/andrew.png"
                name="Andrew Bailey"
                info="Associate Professor at Yale-NUS College"
                twitterLink="https://twitter.com/resistancemoney?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                linkedinLink="https://www.linkedin.com/in/andrew-bailey-7100214/"
                npub="npub1yezu4atsdgchvlyjz5efwks8n7ze2rssq674qe04m5pp8e5y32tqfdawc7"
                bio={[
                  "Andrew M. Bailey is an interdisciplinary teacher and scholar whose work spans philosophy, politics, and economics. He is Associate Professor of Humanities at Yale-NUS College (Singapore), a Fellow at the Bitcoin Policy Institute, and one third of Resistance Money, a bitcoin research collective.",
                ]}
              />
              <BioCard
                imagePath="/burak.png"
                name="Burak Tamaç"
                info="Adjunct Professor at Montclair State University"
                twitterLink="https://twitter.com/burak_tamac"
                linkedinLink="https://www.linkedin.com/in/buraktamac/"
                npub=""
                bio={[
                  "Burak Tamac studied theories of freedom in his Ph.D. dissertation. His journey with Bitcoin began in 2020 with a curiosity to understand the concept of Bitcoin and its connection to freedom.",
                  "Currently, he has been teaching a course on the politics of cryptocurrency and blockchain at Montclair State University. The course explores the fundamentals of freedom, money, and the evolving role of cryptocurrencies in shaping their dynamics both presently and in the future.",
                ]}
              />
            </BoardDepartment>
            <BoardDepartment title="Bitcoin Community Relationship">
              <BioCard
                imagePath="/caralie.png"
                name="Caralie Chrisco"
                info="Program Director at Wolf"
                twitterLink="https://twitter.com/Caralie_C"
                linkedinLink="https://www.linkedin.com/in/caralie-chrisco/"
                npub=""
                bio={[
                  "Caralie Chrisco currently serves as Program Director at Wolf, a NYC based accelerator empowering businesses building on bitcoin. She started her Bitcoin career at Chaincode Labs and was an original organizer of the Chaincode Seminar Series, Summer of Bitcoin, Qala and the ₿trust Board selection committee. She then went on to build out Gemini’s bitcoin developer & developer education grant program through its subsidiary Superlunar. The first part of her career was spent as a talent manager for actors in theater, film, and television and she’s thrilled to still nurture and develop talent within the bitcoin space.",
                ]}
              />
              <BioCard
                imagePath="/lisa.png"
                name="Lisa Neigut"
                info="Founder Base58"
                twitterLink="https://twitter.com/niftynei"
                linkedinLink="https://www.linkedin.com/in/lisaneigut/"
                npub="npub1e0z776cpe0gllgktjk54fuzv8pdfxmq6smsmh8xd7t8s7n474n9smk0txy"
                bio={[
                  "Founder Base58 | Founder bitcoin++ | Lightning Protocol Engineer @ Blockstream",
                ]}
              />
            </BoardDepartment>
          </BoardLayout>
          <BoardLayout>
            <BoardDepartment title="Career Development & Opportunities">
              <BioCard
                imagePath="/eric.png"
                name="Eric Podwojski"
                info="Co-Founder of Bitcoin Talent Co."
                twitterLink="https://twitter.com/epodrulz"
                linkedinLink="https://www.linkedin.com/in/eric-podwojski/"
                npub="npub15fyjxjaq0jpjerhfny2lz3wq9quzg4yetzdx4w98gc0jaulwcayqz937zg"
                bio={[
                  "Eric is the Co-founder of Bitcoin Talent Co., the leading provider of hiring solutions for businesses building on Bitcoin. Before that, he worked in the Bitcoin industry as a Sales Account Manager at both Bitcoin Magazine and The Bitcoin Conference.",
                  "He holds a Bachelor of Science in Energy Engineering from Penn State University, where he first became involved with Bitcoin.",
                ]}
              />
              <BioCard
                imagePath="/fox.png"
                name="Martell Fox"
                info="Founder of Layer 4 Talent | Advisor at Librería de Satoshi | Advisor at Apollo"
                twitterLink="https://twitter.com/Martellfox"
                linkedinLink="https://www.linkedin.com/in/martellfox/"
                npub="npub1jaxs73m0zadd7fkwmkef73srdpfkxs6krwdhvkp0axzefqlsrpuqcvsjkt"
                bio={[
                  "Martell Fox is the Founder of Layer4 Talent: the first dedicated search firm for Technical and Executive talent in the Bitcoin industry. Prior to Layer4, Martell was the COO and Chief People Officer at IBEX, and Chief People Officer & Head of Talent at Swapcard (AI event-tech startup).",
                  "Martell has spent her career leading People, Recruitment and Operations teams and scaling startups both in and out of the Bitcoin ecosystem.",
                ]}
              />
            </BoardDepartment>
            <BoardDepartment title="Club Development & Support ">
              <BioCard
                imagePath="/chris.png"
                name="Chris Smith"
                info="Head of Relations at BTC Inc."
                twitterLink="https://twitter.com/ChrisSmithBTC"
                linkedinLink="https://www.linkedin.com/in/christianosmith/"
                npub="npub18evdx4jnsj03vgx95jsv25kcvp04rkstcfg6y2kcxjen9wd57v2sa7tjdt"
                bio={[
                  "Chris is the Relations & Partnerships lead for the Bitcoin Conference, focused on expanding community initiatives and relations in pursuit of the comapnies goal, which is hyperbitcoinization. Chris has also spent a lot of his time leading the initiative to make student attendance free at BTC Inc events. Alongside this, he enjoys contributing as an author to Bitcoin Magazine.",
                  "He is a graduate from Lipscomb University's College of Business with a degree in Finance. During his time at Lipscomb, he was a key orchestrator to the success of Sigma Alpha being the first fraternity in the nation to accept dues in bitcoin and hold bitcoin on it's balance sheet.",
                ]}
              />
              <BioCard
                imagePath="/d.png"
                name="D++"
                info="Bitcoin Professor | Revolutionary Cypherpunk"
                twitterLink="https://twitter.com/d_plus__plus"
                linkedinLink=""
                npub="npub1337xxyne0pw52zgd984xqqs2q7qhqpt7phhn7xp6t9yt406vrvescdpkdt"
                bio={[
                  "D++ is a bitcoin educator known for her work in pioneering PLEBNET, a community furthering bitcoin's Lightning Network adoption worldwide. In 2022, she developed and led a graduate-level bitcoin engineering course at the University of Texas at Austin. A bitcoiner since 2013, her unique talent is translating complex, technical topics into simple language that anyone can understand.",
                ]}
              />
            </BoardDepartment>
          </BoardLayout>
        </div>
      </div>
    </div>
  );
};

export default Board;
