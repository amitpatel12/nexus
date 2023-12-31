import React, { useState } from "react";
import { BiMessage } from "react-icons/bi";
import { AiOutlineMinus } from "react-icons/ai";

const ChatBox = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-10 right-10 ">
      {
         !open ?
      <div className='p-2 rounded-[50%] border-[1px] border-white bg-[#333333] cursor-pointer grid place-content-center z-[1500]' onClick={()=> setOpen(true)}>
      <BiMessage color='white' size={25}/>
      </div>

    : (
        <div className="bg-white w-[300px] h-[50vh] sm:w-[350px] sm:h-[70vh] rounded-xl py-4 px-4 text-[14px] text-[#333333] flex flex-col gap-5 ">
          <div className="text-center relative">
            <p className="text-[15px]">Help</p>
            <AiOutlineMinus className="p-1 text-[24px] absolute right-2 top-0 cursor-pointer hover:bg-yellow-200 duration-200" onClick={()=> setOpen(false)}/>
          </div>

          <div className="flex flex-col gap-4 font-[300] text-[14px]">
            <div className="add p-2 py-3 rounded-[5px] flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 88 69"
                aria-hidden="true"
                style={{
                  height: "22px",
                  width: "70px",
                  color: "#1F73B7",
                  stroke: "#1F73B7",
                  strokeWidth: "2px",
                  fill: "#fff",
                }}
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_2-2" data-name="Layer 2">
                    <path
                      class="cls-1"
                      d="M9.91,14.08H56.59c.75,0,1.36-.44,1.36-1s-.61-1-1.36-1H9.91c-.75,0-1.36.45-1.36,1S9.16,14.08,9.91,14.08Z"
                    ></path>
                    <path
                      class="cls-1"
                      d="M9.91,22.25H56.59c.75,0,1.36-.44,1.36-1s-.61-1-1.36-1H9.91c-.75,0-1.36.45-1.36,1S9.16,22.25,9.91,22.25Z"
                    ></path>
                    <path
                      class="cls-1"
                      d="M31.89,28.42h-22c-.75,0-1.36.45-1.36,1s.61,1,1.36,1h22c.75,0,1.36-.45,1.36-1S32.64,28.42,31.89,28.42Z"
                    ></path>
                    <path
                      class="cls-2"
                      d="M66,39.58A6.3,6.3,0,0,1,59.92,46H48.66v6.06h15a8.81,8.81,0,0,0,8.85-8.78V34.68H66Z"
                    ></path>
                    <path
                      class="cls-1"
                      d="M64,39.5c-.1.55-.19,1.09-.26,1.61A4.82,4.82,0,0,0,64,39.58Z"
                    ></path>
                    <path
                      class="cls-1"
                      d="M83.85,32.68H66V6.44A6.3,6.3,0,0,0,59.92,0H6.12A6.3,6.3,0,0,0,0,6.44V39.58A6.3,6.3,0,0,0,6.12,46h9.39v8.35a3.71,3.71,0,0,0,2.21,3.44,3.38,3.38,0,0,0,3.73-.67L33.66,46h13V57.28a4.25,4.25,0,0,0,4.15,4.33h16l7.38,6.69a2.49,2.49,0,0,0,1.72.7,2.56,2.56,0,0,0,1-.21,2.65,2.65,0,0,0,1.58-2.46V61.61h5.38A4.25,4.25,0,0,0,88,57.28V37A4.25,4.25,0,0,0,83.85,32.68ZM47.66,44H32.88L20.08,55.69a1.41,1.41,0,0,1-1.57.3,1.71,1.71,0,0,1-1-1.61V44H6.12A4.3,4.3,0,0,1,2,39.58V6.44A4.29,4.29,0,0,1,6.12,2h53.8A4.29,4.29,0,0,1,64,6.44V39.58a4.82,4.82,0,0,1-.26,1.53A4.16,4.16,0,0,1,59.92,44H47.66ZM86,57.28a2.25,2.25,0,0,1-2.15,2.34H76.47v6.71a.65.65,0,0,1-.38.63.48.48,0,0,1-.56-.12l-8-7.22H50.81a2.25,2.25,0,0,1-2.15-2.34V46H59.92A6.3,6.3,0,0,0,66,39.58v-4.9H83.85A2.25,2.25,0,0,1,86,37Z"
                    ></path>
                  </g>
                </g>
              </svg>
              <p className="py-3">Live Assistance</p>
            </div>
            <div className="add p-2 py-3 rounded-[5px] flex items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="67"
                viewBox="0 0 64 67"
                aria-hidden="true"
                style={{
                  height: "22px",
                  width: "70px",
                  color: "#1F73B7",
                  stroke: "#1F73B7",
                  strokeWidth: "2px",
                  fill: "#fff",
                }}
              >
                <g fill="none" fill-rule="evenodd">
                  <rect
                    width="28.44"
                    height="1.76"
                    x="17.75"
                    y="17.63"
                    fill="#CCCCCB"
                    fill-rule="nonzero"
                    rx="0.88"
                  ></rect>
                  <rect
                    width="28.44"
                    height="1.76"
                    x="17.75"
                    y="24.66"
                    fill="#CCCCCB"
                    fill-rule="nonzero"
                    rx="0.88"
                  ></rect>
                  <rect
                    width="14.22"
                    height="1.76"
                    x="17.75"
                    y="31.7"
                    fill="#CCCCCB"
                    fill-rule="nonzero"
                    rx="0.88"
                  ></rect>
                  <path
                    fill="#CCC"
                    fill-rule="nonzero"
                    opacity="0.3"
                    d="M59.55 25.45 59.55 26.67 60.23 26.06z"
                  ></path>
                  <path
                    fill="#CCC"
                    fill-rule="nonzero"
                    d="M34.17,2.64 C32.9602921,1.46901693 31.0397079,1.46901693 29.83,2.64 L24.32,7.58 L39.67,7.58 L34.17,2.64 Z"
                    opacity="0.3"
                  ></path>
                  <path
                    fill="#CCC"
                    fill-rule="nonzero"
                    opacity="0.3"
                    d="M4.44 25.43 3.79 26.02 4.44 26.62z"
                  ></path>
                  <path
                    fill="#CCCCCB"
                    fill-rule="nonzero"
                    d="M61.94,25.22 L59.56,23.08 L59.56,10.22 C59.5489939,8.75483096 58.3551999,7.57445035 56.89,7.58 L42.32,7.58 L35.32,1.34 C34.4116287,0.506803917 33.2322363,0.0307841003 32,0 C30.7608256,0.0259691317 29.5735159,0.502314936 28.66,1.34 L21.68,7.58 L7.11,7.58 C5.64480013,7.57445035 4.45100611,8.75483096 4.44,10.22 L4.44,23.08 L2.06,25.22 C0.761654382,26.1372135 -0.00732041035,27.6303685 -1.77635684e-15,29.22 L-1.77635684e-15,62.6 C0.00529234566,63.7722606 0.476052836,64.8944048 1.30871697,65.7195674 C2.1413811,66.5447301 3.26773949,67.0053163 4.44,67 L59.56,67 C60.7322605,67.0053163 61.8586189,66.5447301 62.691283,65.7195674 C63.5239472,64.8944048 63.9947077,63.7722606 64,62.6 L64,29.18 C63.9943193,27.6044909 63.2268011,26.1290676 61.94,25.22 Z M62.22,62.6 C62.2180961,63.3287368 61.9139113,64.0240164 61.38,64.52 L44.89,53.31 L43.59,52.43 L42.3,51.55 L38,48.63 L57.77,30.63 L58.66,29.82 L59.55,29.02 L61.55,27.21 C61.9694358,27.767562 62.203733,28.4424779 62.22,29.14 L62.22,62.6 Z M4.75,65.24 L22.31,53.31 L23.6,52.43 L24.89,51.55 L29.89,48.13 C31.1675001,47.2895573 32.8224999,47.2895573 34.1,48.13 L39.1,51.55 L40.39,52.43 L41.69,53.31 L59.3,65.24 L4.75,65.24 Z M1.75,29.18 C1.75791921,28.4563016 1.99999618,27.7546292 2.44,27.18 L4.44,28.97 L5.33,29.78 L6.22,30.58 L26.05,48.58 L21.75,51.5 L20.46,52.38 L19.17,53.26 L2.65,64.54 C2.09781346,64.0461122 1.78152825,63.3408325 1.78,62.6 L1.75,29.18 Z M4.41,25.43 L4.41,26.62 L3.79,26 L4.41,25.43 Z M60.2,26.06 L59.53,26.67 L59.53,25.45 L60.2,26.06 Z M39.67,7.58 L24.32,7.58 L29.83,2.64 C31.0397079,1.46901693 32.9602921,1.46901693 34.17,2.64 L39.67,7.58 Z M6.22,21.48 L6.22,10.22 C6.21998482,9.9848665 6.31407029,9.75950615 6.48127146,9.59418364 C6.64847264,9.42886113 6.87488168,9.33732803 7.11,9.34 L56.89,9.34 C57.1251183,9.33732803 57.3515274,9.42886113 57.5187285,9.59418364 C57.6859297,9.75950615 57.7800152,9.9848665 57.78,10.22 L57.78,28.28 L36.5,47.61 L35.14,46.68 C34.2071896,46.067607 33.1158672,45.7409054 32,45.74 C30.8971551,45.7446232 29.8196853,46.0713398 28.9,46.68 L27.53,47.61 L6.22,28.23 L6.22,21.48 Z"
                  ></path>
                </g>
              </svg>

              <p className="py-3 text-[#333333]">Send us a message</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
