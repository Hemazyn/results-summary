import './App.css';
import { results } from "./constants/index";
function App() {

  return (
    <>
      <div className="flex justify-center items-center h-full md:h-screen">

        <div className="flex flex-col md:flex-row w-full md:w-[600px] shadow-Light-lavender shadow-2xl rounded-none md:rounded-[30px] borde">
          <div className="flex flex-col w-full md:w-1/2 bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue rounded-b-[30px] md:rounded-[30px]  items-center py-8">
            <p className="text-Pale-blue mb-5 text-lg">Your Result</p>
            <div className="grid place-items-center rounded-full bg-gradient-to-b from-Violetblue(circle) to-Persian-blue(circle) py-[50px] px-[60px]">
              <h1 className="text-6xl font-extrabold font-HankenGrotesk text-White mb-0">76</h1>
              <span className="text-Pale-blue text-sm">of 100</span>
            </div>
            <h1 className="mt-5 text-3xl text-White font-HankenGrotesk font-medium">Great</h1>
            <p className="text-center mt-3 text-Pale-blue text-sm">You scored higher than 65% of <br /> the people who have taken <br /> these tests.</p>
          </div>
          <div className="flex flex-col w-full md:w-1/2 p-8">
            <p className="text-Dark-gray-blue text-lg font-bold mb-5">Summary</p>
            <div className="flex flex-row">
              <div className="flex flex-col w-full gap-y-3 mb-5">
                {results.map(({ id, icon, alt, iconName, score, textColor, bg, overall }) => {
                  return (
                    <div key={id} className="flex flex-row justify-between px-2 py-3 rounded-lg angle" style={{ backgroundColor: bg }}>
                      <div className="flex flex-row text-sm items-center gap-x-2">
                        <img src={icon} alt={alt} className="w-[16px]" />
                        <p className="" style={{ color: textColor }}>{iconName}</p>
                      </div>
                      <div className="flex flex-row gap-x-2 items-center">
                        <span className="text-sm font-medium">{score} </span>
                        <span style={{ color: overall }}>/</span>
                        <span style={{ color: overall }}>100</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>



            <button className="bg-Dark-gray-blue py-3 rounded-[30px] text-White bg mt-3 hover:bg-gradient-to-b hover:from-Light-slate-blue hover:to-Cobalt-blue cursor-pointer">Continue</button>
          </div>

        </div>

      </div>
      <div className="attribution text-[11px] text-center">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-blueC">Frontend Mentor</a>.
        Coded by <a href="https://devemma.netlify.app/" target="_blank" className="text-blueC">Emmanuel Tofunmi</a>.
      </div>
    </>
  )
}

export default App
