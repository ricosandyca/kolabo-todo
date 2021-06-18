import { useRecoilValue } from "recoil";
import { themeState } from "../store/view";

export default function NyanAnimation(props) {
  const theme = useRecoilValue(themeState);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" {...props}>
      <defs>
        <g
          id="sparkle"
          transform="scale(2)"
          stroke={theme === "light" ? "black" : "white"}
        >
          <style>
            {
              "@keyframes sparkle{0%,16.666666%{opacity:1}16.6666666%,to{opacity:0}}"
            }
          </style>
          <path
            d="M3.5 0v2M7 3.5H5M3.5 7V5M0 3.5h2m1 0h1"
            style={{
              animation: "sparkle .42s linear 0s infinite",
            }}
          />
          <path
            d="M3 .5h1m1 1h1m0 2h1m-2 2h1m-3 1h1m-3-1h1m-2-2h1m0-2h1"
            style={{
              animation: "sparkle .42s linear .07s infinite",
            }}
          />
          <path
            d="M3 .5h1m2 3h1m-4 3h1m-4-3h1"
            style={{
              animation: "sparkle .42s linear .14s infinite",
            }}
          />
          <path
            d="M3 3.5h1"
            style={{
              animation: "sparkle .42s linear .21s infinite",
            }}
          />
          <path
            d="M3 2.5h1m0 1h1m-2 1h1m-2-1h1"
            style={{
              animation: "sparkle .42s linear .28s infinite",
            }}
          />
          <path
            d="M3.5 1v2m.5.5h2M3.5 4v2M1 3.5h2"
            style={{
              animation: "sparkle .42s linear .35s infinite",
            }}
          />
        </g>
      </defs>
      <rect
        id="background"
        width="100%"
        height="100%"
        fill="url('#BackgroundGradient')"
      />
      <use href="#sparkle" id="sparkle1">
        <animateMotion
          dur="0.77s"
          repeatCount="indefinite"
          path="M250 10 70 10"
        />
      </use>
      <use href="#sparkle" id="sparkle2">
        <animateMotion
          begin={0.257}
          dur="0.77s"
          repeatCount="indefinite"
          path="M255 23 65 23"
        />
      </use>
      <use href="#sparkle" id="sparkle3">
        <animateMotion
          begin={0.513}
          dur="0.77s"
          repeatCount="indefinite"
          path="M260 36 60 36"
        />
      </use>
      <use href="#sparkle" id="sparkle4">
        <animateMotion
          begin={0.128}
          dur="0.77s"
          repeatCount="indefinite"
          path="M260 130 60 130"
        />
      </use>
      <use href="#sparkle" id="sparkle5">
        <animateMotion
          begin={0.385}
          dur="0.77s"
          repeatCount="indefinite"
          path="M255 143 65 143"
        />
      </use>
      <use href="#sparkle" id="sparkle6">
        <animateMotion
          begin={0.642}
          dur="0.77s"
          repeatCount="indefinite"
          path="M250 166 70 166"
        />
      </use>
      <use href="#sparkle" id="sparkle7">
        <animateMotion
          dur="0.84s"
          repeatCount="indefinite"
          path="M250 105 70 105"
        />
      </use>
      <use href="#sparkle" id="sparkle8">
        <animateMotion
          begin={0.28}
          dur="0.84s"
          repeatCount="indefinite"
          path="M250 73 70 73"
        />
      </use>
      <svg id="rainbow" y={58.5}>
        <defs>
          <linearGradient id="RainbowGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#FD1B00" />
            <stop offset="16.66%" stopColor="#FD1B00" />
            <stop offset="16.67%" stopColor="#FD9B01" />
            <stop offset="33.33%" stopColor="#FD9B01" />
            <stop offset="33.34%" stopColor="#FDEF01" />
            <stop offset="49.99%" stopColor="#FDEF01" />
            <stop offset="50%" stopColor="#20DB01" />
            <stop offset="66.66%" stopColor="#20DB01" />
            <stop offset="66.67%" stopColor="#008AFC" />
            <stop offset="83.33%" stopColor="#008AFC" />
            <stop offset="83.34%" stopColor="#6D3FFC" />
            <stop offset="100%" stopColor="#6D3FFC" />
          </linearGradient>
        </defs>
        <style>
          {
            "@keyframes rainbow-updown{0%,49.99%{transform:translate(0,0)}50%,to{transform:translate(0,4px)}}@keyframes rainbow-leftright{0%,49.99%{transform:translate(0,0)}50%,to{transform:translate(-4px,0)}}.rainbow-piece0{animation:rainbow-updown .42s linear infinite}.rainbow-piece1{animation:rainbow-updown .42s linear -.21s infinite}"
          }
        </style>
        <g
          style={{
            animation: "rainbow-leftright .42s linear infinite",
          }}
        >
          <path
            className="rainbow-piece rainbow-piece0"
            fill="url('#RainbowGradient')"
            d="M0 0h30v54H0z"
          />
          <path
            className="rainbow-piece rainbow-piece1"
            fill="url('#RainbowGradient')"
            d="M29.5 0h30v54h-30z"
          />
          <path
            className="rainbow-piece rainbow-piece0"
            fill="url('#RainbowGradient')"
            d="M59 0h30v54H59z"
          />
          <path
            className="rainbow-piece rainbow-piece1"
            fill="url('#RainbowGradient')"
            d="M88.5 0h30v54h-30z"
          />
          <path
            className="rainbow-piece rainbow-piece0"
            fill="url('#RainbowGradient')"
            d="M118 0h30v54h-30z"
          />
        </g>
      </svg>
      <svg
        id="cat"
        x={120}
        y={58.5}
        width={102}
        height={73}
        viewBox="0 0 34 21"
        preserveAspectRatio="xMinYMin meet"
      >
        <style>
          {
            "@keyframes catrun{0%,16.666666%{opacity:1}16.6666666%,to{opacity:0}}.cat-frame{opacity:0}"
          }
        </style>
        <g
          className="cat-frame"
          style={{
            animation: "catrun .42s linear 0s infinite",
          }}
        >
          <g transform="translate(1)" id="layer1" display="inline">
            <g
              transform="translate(4 -1032.362)"
              id="g3832"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M0 50v-3h1v-1h4v3H4v1z"
                transform="translate(0 1002.362)"
                id="path3050"
                fill="#000"
              />
              <path
                d="M1 49v-2h3v1H3v1z"
                transform="translate(0 1002.362)"
                id="path3830"
                fill="#999"
              />
            </g>
            <g
              transform="translate(4 -1032.362)"
              id="g3841"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3836"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="rect3838"
                fill="#999"
              />
            </g>
            <g
              transform="matrix(-1 0 0 1 29 -1032.362)"
              id="g3935"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3937"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="path3939"
                fill="#999"
              />
            </g>
            <g
              transform="translate(0 -1032.362)"
              id="g3948"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M24 49v-1h4v1h-1v1h-2v-1z"
                transform="translate(0 1002.362)"
                id="path3941"
                fill="#000"
              />
              <path
                d="M25 48h2v1h-2z"
                transform="translate(0 1002.362)"
                id="rect3943"
                fill="#999"
              />
            </g>
            <g transform="translate(0 -1032.362)" id="layer1-0" fillOpacity={1}>
              <path d="M7 1033.362h19v16H7z" id="rect5270" fill="#fc9" />
              <path
                d="M8 1046.362v-10h1v-1h1v-1h13v1h1v1h1v10h-1v1h-1v1H10v-1H9v-1z"
                id="path5272"
                fill="#f9f"
                stroke="none"
              />
              <path
                d="M22 1037.362h1v1h-1zm-4-2h1v1h-1zm-3 0h1v1h-1zm-1 4h1v1h-1zm1 3h1v1h-1zm-2 3h1v1h-1zm-2-4h1v1h-1zm-2 2h1v1H9zm1 3h1v1h-1zm0-10h1v1h-1z"
                id="rect5030-3-6"
                fill="#f39"
              />
              <path
                d="M8 1049.362h17v1H8zm0-17h17v1H8zm18 16v-14h1v14zm-20 0v-14h1v14zm1 0h1v1H7zm0-15h1v1H7zm18 0h1v1h-1zm0 15h1v1h-1z"
                id="path5412"
                fill="#000"
              />
            </g>
            <g transform="translate(6)" id="layer3">
              <g id="g5869" fillOpacity={1} stroke="none">
                <path
                  d="M11 15v-5h1V6h2v1h1v1h1v1h4V8h1V7h1V6h2v4h1v5h-1v1h-1v1H13v-1h-1v-1z"
                  id="path5777"
                  fill="#999"
                />
                <path
                  d="M23 16h1v1h-1zm1-1h1v1h-1zm1-5h1v5h-1zm-1-4h1v4h-1zm-2-1h2v1h-2zm-6 3h4v1h-4zm-4-3h2v1h-2zm-1 1h1v4h-1zm-1 4h1v5h-1zm11-4h1v1h-1zm-1 1h1v1h-1zm-5 0h1v1h-1zm-1-1h1v1h-1zm-1 11h10v1H13zm-1-1h1v1h-1zm-1-1h1v1h-1z"
                  id="rect5496-38"
                  fill="#000"
                />
                <path d="M12 13h2v2h-2z" id="rect5779" fill="#f99" />
                <path d="M23 13h2v2h-2z" id="rect5781" fill="#f99" />
                <path
                  d="M15 16v-2h1v1h2v-1h1v1h2v-1h1v2z"
                  id="path5785"
                  fill="#000"
                />
                <path d="M19 12h1v1h-1z" id="rect5787" fill="#000" />
                <g id="g5857">
                  <path d="M21 13v-1h1v-1h1v2z" id="path5795" fill="#000" />
                  <path d="M21 11h1v1h-1z" id="path5797" fill="#fff" />
                </g>
                <g transform="translate(-7)" id="g5861">
                  <path d="M21 13v-1h1v-1h1v2z" id="path5863" fill="#000" />
                  <path d="M21 11h1v1h-1z" id="path5865" fill="#fff" />
                </g>
              </g>
            </g>
            <g id="g3486" fillOpacity={1} stroke="none">
              <path
                d="M0 10V7h4v1h1v1h1v5H5v-1H3v-1H2v-1H1v-1z"
                id="path3954"
                fill="#000"
              />
              <path
                d="M1 9V8h2v1h1v1h1v1h1v1H4v-1H3v-1H2V9z"
                id="path3956"
                fill="#999"
              />
            </g>
          </g>
        </g>
        <g
          className="cat-frame"
          style={{
            animation: "catrun .42s linear .07s infinite",
          }}
        >
          <g transform="translate(1 -1)" id="g4196">
            <g transform="translate(0 -1031.362)" id="layer1">
              <g id="g3982" fillOpacity={1} stroke="none">
                <path
                  d="M5 20v-3h1v-1h3v3H8v1z"
                  transform="translate(0 1032.362)"
                  id="path3977"
                  fill="#000"
                />
                <path
                  d="M6 17h2v2H6z"
                  transform="translate(0 1032.362)"
                  id="rect3979"
                  fill="#999"
                />
              </g>
              <g
                transform="matrix(-1 0 0 1 20 0)"
                id="g3841"
                fillOpacity={1}
                stroke="none"
              >
                <path
                  d="M6 50v-2h4v1H9v1z"
                  transform="translate(0 1002.362)"
                  id="path3836"
                  fill="#000"
                />
                <path
                  d="M7 48h2v1H7z"
                  transform="translate(0 1002.362)"
                  id="rect3838"
                  fill="#999"
                />
              </g>
              <g
                transform="matrix(-1 0 0 1 30 0)"
                id="g3935"
                fillOpacity={1}
                stroke="none"
              >
                <path
                  d="M6 50v-2h4v1H9v1z"
                  transform="translate(0 1002.362)"
                  id="path3937"
                  fill="#000"
                />
                <path
                  d="M7 48h2v1H7z"
                  transform="translate(0 1002.362)"
                  id="path3939"
                  fill="#999"
                />
              </g>
              <g id="layer1-0" fillOpacity={1}>
                <path d="M7 1033.362h19v16H7z" id="rect5270" fill="#fc9" />
                <path
                  d="M8 1046.362v-10h1v-1h1v-1h13v1h1v1h1v10h-1v1h-1v1H10v-1H9v-1z"
                  id="path5272"
                  fill="#f9f"
                  stroke="none"
                />
                <path
                  d="M22 1037.362h1v1h-1zm-4-2h1v1h-1zm-3 0h1v1h-1zm-1 4h1v1h-1zm1 3h1v1h-1zm-2 3h1v1h-1zm-2-4h1v1h-1zm-2 2h1v1H9zm1 3h1v1h-1zm0-10h1v1h-1z"
                  id="rect5030-3-6"
                  fill="#f39"
                />
                <path
                  d="M8 1049.362h17v1H8zm0-17h17v1H8zm18 16v-14h1v14zm-20 0v-14h1v14zm1 0h1v1H7zm0-15h1v1H7zm18 0h1v1h-1zm0 15h1v1h-1z"
                  id="path5412"
                  fill="#000"
                />
              </g>
              <g transform="translate(7 1032.362)" id="layer3">
                <g id="g5869" fillOpacity={1} stroke="none">
                  <path
                    d="M11 15v-5h1V6h2v1h1v1h1v1h4V8h1V7h1V6h2v4h1v5h-1v1h-1v1H13v-1h-1v-1z"
                    id="path5777"
                    fill="#999"
                  />
                  <path
                    d="M23 16h1v1h-1zm1-1h1v1h-1zm1-5h1v5h-1zm-1-4h1v4h-1zm-2-1h2v1h-2zm-6 3h4v1h-4zm-4-3h2v1h-2zm-1 1h1v4h-1zm-1 4h1v5h-1zm11-4h1v1h-1zm-1 1h1v1h-1zm-5 0h1v1h-1zm-1-1h1v1h-1zm-1 11h10v1H13zm-1-1h1v1h-1zm-1-1h1v1h-1z"
                    id="rect5496-38"
                    fill="#000"
                  />
                  <path d="M12 13h2v2h-2z" id="rect5779" fill="#f99" />
                  <path d="M23 13h2v2h-2z" id="rect5781" fill="#f99" />
                  <path
                    d="M15 16v-2h1v1h2v-1h1v1h2v-1h1v2z"
                    id="path5785"
                    fill="#000"
                  />
                  <path d="M19 12h1v1h-1z" id="rect5787" fill="#000" />
                  <g id="g5857">
                    <path d="M21 13v-1h1v-1h1v2z" id="path5795" fill="#000" />
                    <path d="M21 11h1v1h-1z" id="path5797" fill="#fff" />
                  </g>
                  <g transform="translate(-7)" id="g5861">
                    <path d="M21 13v-1h1v-1h1v2z" id="path5863" fill="#000" />
                    <path d="M21 11h1v1h-1z" id="path5865" fill="#fff" />
                  </g>
                </g>
              </g>
              <g
                transform="matrix(-1 0 0 1 35 0)"
                id="g3986"
                fillOpacity={1}
                stroke="none"
              >
                <path
                  d="M6 50v-2h4v1H9v1z"
                  transform="translate(0 1002.362)"
                  id="path3988"
                  fill="#000"
                />
                <path
                  d="M7 48h2v1H7z"
                  transform="translate(0 1002.362)"
                  id="path3990"
                  fill="#999"
                />
              </g>
              <g id="g3996" stroke="none">
                <path
                  d="M1 12H0v-2h1V9h2v1h1v1h2v4H4v-1H2v-1H1z"
                  transform="translate(0 1032.362)"
                  id="path3992"
                  fill="#000"
                />
                <path
                  d="M1 12v-2h2v2h3v2H4v-1H2v-1z"
                  transform="translate(0 1032.362)"
                  id="path3994"
                  fill="#999"
                  fillOpacity={1}
                />
              </g>
            </g>
          </g>
        </g>
        <g
          className="cat-frame"
          style={{
            animation: "catrun .42s linear .14s infinite",
          }}
        >
          <g transform="translate(1 1)" id="g4137">
            <g id="g3806" fillOpacity={1} stroke="none">
              <path d="M6 20v-4h4v3H9v1z" id="path3977" fill="#000" />
              <path d="M7 17h2v2H7z" id="rect3979" fill="#999" />
            </g>
            <g
              transform="matrix(-1 0 0 1 21 -1032.362)"
              id="g3841"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3836"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="rect3838"
                fill="#999"
              />
            </g>
            <g
              transform="matrix(-1 0 0 1 31 -1032.362)"
              id="g3935"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3937"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="path3939"
                fill="#999"
              />
            </g>
            <g transform="translate(0 -1032.362)" id="layer1-0" fillOpacity={1}>
              <path d="M7 1033.362h19v16H7z" id="rect5270" fill="#fc9" />
              <path
                d="M8 1046.362v-10h1v-1h1v-1h13v1h1v1h1v10h-1v1h-1v1H10v-1H9v-1z"
                id="path5272"
                fill="#f9f"
                stroke="none"
              />
              <path
                d="M22 1037.362h1v1h-1zm-4-2h1v1h-1zm-3 0h1v1h-1zm-1 4h1v1h-1zm1 3h1v1h-1zm-2 3h1v1h-1zm-2-4h1v1h-1zm-2 2h1v1H9zm1 3h1v1h-1zm0-10h1v1h-1z"
                id="rect5030-3-6"
                fill="#f39"
              />
              <path
                d="M8 1049.362h17v1H8zm0-17h17v1H8zm18 16v-14h1v14zm-20 0v-14h1v14zm1 0h1v1H7zm0-15h1v1H7zm18 0h1v1h-1zm0 15h1v1h-1z"
                id="path5412"
                fill="#000"
              />
            </g>
            <g transform="translate(7)" id="layer3">
              <g id="g5869" fillOpacity={1} stroke="none">
                <path
                  d="M11 15v-5h1V6h2v1h1v1h1v1h4V8h1V7h1V6h2v4h1v5h-1v1h-1v1H13v-1h-1v-1z"
                  id="path5777"
                  fill="#999"
                />
                <path
                  d="M23 16h1v1h-1zm1-1h1v1h-1zm1-5h1v5h-1zm-1-4h1v4h-1zm-2-1h2v1h-2zm-6 3h4v1h-4zm-4-3h2v1h-2zm-1 1h1v4h-1zm-1 4h1v5h-1zm11-4h1v1h-1zm-1 1h1v1h-1zm-5 0h1v1h-1zm-1-1h1v1h-1zm-1 11h10v1H13zm-1-1h1v1h-1zm-1-1h1v1h-1z"
                  id="rect5496-38"
                  fill="#000"
                />
                <path d="M12 13h2v2h-2z" id="rect5779" fill="#f99" />
                <path d="M23 13h2v2h-2z" id="rect5781" fill="#f99" />
                <path
                  d="M15 16v-2h1v1h2v-1h1v1h2v-1h1v2z"
                  id="path5785"
                  fill="#000"
                />
                <path d="M19 12h1v1h-1z" id="rect5787" fill="#000" />
                <g id="g5857">
                  <path d="M21 13v-1h1v-1h1v2z" id="path5795" fill="#000" />
                  <path d="M21 11h1v1h-1z" id="path5797" fill="#fff" />
                </g>
                <g transform="translate(-7)" id="g5861">
                  <path d="M21 13v-1h1v-1h1v2z" id="path5863" fill="#000" />
                  <path d="M21 11h1v1h-1z" id="path5865" fill="#fff" />
                </g>
              </g>
            </g>
            <g
              transform="matrix(-1 0 0 1 36 -1032.362)"
              id="g3986"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3988"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="path3990"
                fill="#999"
              />
            </g>
            <g id="g4584" stroke="none">
              <path
                d="M0 14v-2h2v-1h3v-1h1v4H5v1H1v-1z"
                id="path3812"
                fill="#000"
              />
              <path d="M1 14v-1h1v-1h4v1H4v1z" id="path3814" fill="#999" />
            </g>
          </g>
        </g>
        <g
          className="cat-frame"
          style={{
            animation: "catrun .42s linear .21s infinite",
          }}
        >
          <g transform="translate(1)" id="g4082">
            <g
              transform="translate(0 -1031.362)"
              id="g3982"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M5 20v-3h1v-1h3v3H8v1z"
                transform="translate(0 1032.362)"
                id="path3977-4"
                fill="#000"
              />
              <path
                d="M6 17h2v2H6z"
                transform="translate(0 1032.362)"
                id="rect3979-3"
                fill="#999"
              />
            </g>
            <g
              transform="matrix(-1 0 0 1 20 -1031.362)"
              id="g3841"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3836"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="rect3838"
                fill="#999"
              />
            </g>
            <g
              transform="matrix(-1 0 0 1 30 -1031.362)"
              id="g3935"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3937"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="path3939"
                fill="#999"
              />
            </g>
            <g transform="translate(0 -1031.362)" id="layer1-0" fillOpacity={1}>
              <path d="M7 1033.362h19v16H7z" id="rect5270" fill="#fc9" />
              <path
                d="M8 1046.362v-10h1v-1h1v-1h13v1h1v1h1v10h-1v1h-1v1H10v-1H9v-1z"
                id="path5272"
                fill="#f9f"
                stroke="none"
              />
              <path
                d="M22 1037.362h1v1h-1zm-4-2h1v1h-1zm-3 0h1v1h-1zm-1 4h1v1h-1zm1 3h1v1h-1zm-2 3h1v1h-1zm-2-4h1v1h-1zm-2 2h1v1H9zm1 3h1v1h-1zm0-10h1v1h-1z"
                id="rect5030-3-6"
                fill="#f39"
              />
              <path
                d="M8 1049.362h17v1H8zm0-17h17v1H8zm18 16v-14h1v14zm-20 0v-14h1v14zm1 0h1v1H7zm0-15h1v1H7zm18 0h1v1h-1zm0 15h1v1h-1z"
                id="path5412"
                fill="#000"
              />
            </g>
            <g transform="translate(7 1)" id="layer3">
              <g id="g5869" fillOpacity={1} stroke="none">
                <path
                  d="M11 15v-5h1V6h2v1h1v1h1v1h4V8h1V7h1V6h2v4h1v5h-1v1h-1v1H13v-1h-1v-1z"
                  id="path5777"
                  fill="#999"
                />
                <path
                  d="M23 16h1v1h-1zm1-1h1v1h-1zm1-5h1v5h-1zm-1-4h1v4h-1zm-2-1h2v1h-2zm-6 3h4v1h-4zm-4-3h2v1h-2zm-1 1h1v4h-1zm-1 4h1v5h-1zm11-4h1v1h-1zm-1 1h1v1h-1zm-5 0h1v1h-1zm-1-1h1v1h-1zm-1 11h10v1H13zm-1-1h1v1h-1zm-1-1h1v1h-1z"
                  id="rect5496-38"
                  fill="#000"
                />
                <path d="M12 13h2v2h-2z" id="rect5779" fill="#f99" />
                <path d="M23 13h2v2h-2z" id="rect5781" fill="#f99" />
                <path
                  d="M15 16v-2h1v1h2v-1h1v1h2v-1h1v2z"
                  id="path5785"
                  fill="#000"
                />
                <path d="M19 12h1v1h-1z" id="rect5787" fill="#000" />
                <g id="g5857">
                  <path d="M21 13v-1h1v-1h1v2z" id="path5795" fill="#000" />
                  <path d="M21 11h1v1h-1z" id="path5797" fill="#fff" />
                </g>
                <g transform="translate(-7)" id="g5861">
                  <path d="M21 13v-1h1v-1h1v2z" id="path5863" fill="#000" />
                  <path d="M21 11h1v1h-1z" id="path5865" fill="#fff" />
                </g>
              </g>
            </g>
            <g
              transform="matrix(-1 0 0 1 35 -1031.362)"
              id="g3986"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3988"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="path3990"
                fill="#999"
              />
            </g>
            <g transform="matrix(1 0 0 -1 0 1058.362)" id="g4887" stroke="none">
              <path
                d="M1 12H0v-2h1V9h2v1h1v1h2v4H4v-1H2v-1H1z"
                transform="translate(0 1032.362)"
                id="path4889"
                fill="#000"
              />
              <path
                d="M1 12v-2h2v2h3v2H4v-1H2v-1z"
                transform="translate(0 1032.362)"
                id="path4891"
                fill="#999"
                fillOpacity={1}
              />
            </g>
          </g>
        </g>
        <g
          className="cat-frame"
          style={{
            animation: "catrun .42s linear .28s infinite",
          }}
        >
          <g transform="translate(1)" id="g4025">
            <g transform="translate(0 1)" id="g5089" stroke="none">
              <path
                d="M3 20v-3h1v-1h1v-1h3v3H7v1H6v1z"
                id="path5085"
                fill="#000"
              />
              <path d="M4 19v-2h1v-1h2v2H6v1z" id="path5087" fill="#999" />
            </g>
            <g
              transform="matrix(-1 0 0 1 20 -1031.362)"
              id="g3841"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3836"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="rect3838"
                fill="#999"
              />
            </g>
            <g
              transform="matrix(-1 0 0 1 28 -1031.362)"
              id="g3935"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3937"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="path3939"
                fill="#999"
              />
            </g>
            <g transform="translate(0 -1031.362)" id="layer1-0" fillOpacity={1}>
              <path d="M7 1033.362h19v16H7z" id="rect5270" fill="#fc9" />
              <path
                d="M8 1046.362v-10h1v-1h1v-1h13v1h1v1h1v10h-1v1h-1v1H10v-1H9v-1z"
                id="path5272"
                fill="#f9f"
                stroke="none"
              />
              <path
                d="M22 1037.362h1v1h-1zm-4-2h1v1h-1zm-3 0h1v1h-1zm-1 4h1v1h-1zm1 3h1v1h-1zm-2 3h1v1h-1zm-2-4h1v1h-1zm-2 2h1v1H9zm1 3h1v1h-1zm0-10h1v1h-1z"
                id="rect5030-3-6"
                fill="#f39"
              />
              <path
                d="M8 1049.362h17v1H8zm0-17h17v1H8zm18 16v-14h1v14zm-20 0v-14h1v14zm1 0h1v1H7zm0-15h1v1H7zm18 0h1v1h-1zm0 15h1v1h-1z"
                id="path5412"
                fill="#000"
              />
            </g>
            <g transform="translate(6 1)" id="layer3">
              <g id="g5869" fillOpacity={1} stroke="none">
                <path
                  d="M11 15v-5h1V6h2v1h1v1h1v1h4V8h1V7h1V6h2v4h1v5h-1v1h-1v1H13v-1h-1v-1z"
                  id="path5777"
                  fill="#999"
                />
                <path
                  d="M23 16h1v1h-1zm1-1h1v1h-1zm1-5h1v5h-1zm-1-4h1v4h-1zm-2-1h2v1h-2zm-6 3h4v1h-4zm-4-3h2v1h-2zm-1 1h1v4h-1zm-1 4h1v5h-1zm11-4h1v1h-1zm-1 1h1v1h-1zm-5 0h1v1h-1zm-1-1h1v1h-1zm-1 11h10v1H13zm-1-1h1v1h-1zm-1-1h1v1h-1z"
                  id="rect5496-38"
                  fill="#000"
                />
                <path d="M12 13h2v2h-2z" id="rect5779" fill="#f99" />
                <path d="M23 13h2v2h-2z" id="rect5781" fill="#f99" />
                <path
                  d="M15 16v-2h1v1h2v-1h1v1h2v-1h1v2z"
                  id="path5785"
                  fill="#000"
                />
                <path d="M19 12h1v1h-1z" id="rect5787" fill="#000" />
                <g id="g5857">
                  <path d="M21 13v-1h1v-1h1v2z" id="path5795" fill="#000" />
                  <path d="M21 11h1v1h-1z" id="path5797" fill="#fff" />
                </g>
                <g transform="translate(-7)" id="g5861">
                  <path d="M21 13v-1h1v-1h1v2z" id="path5863" fill="#000" />
                  <path d="M21 11h1v1h-1z" id="path5865" fill="#fff" />
                </g>
              </g>
            </g>
            <g
              transform="matrix(-1 0 0 1 33 -1031.362)"
              id="g3986"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3988"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="path3990"
                fill="#999"
              />
            </g>
            <g transform="translate(0 1)" id="g5097" stroke="none">
              <path
                d="M-1 11V9h1V8h4v1h2v4H4v-1H1v-1z"
                id="path5093"
                fill="#000"
              />
              <path
                d="M0 10V9h3v1h2v1h1v1H5v-1H1v-1z"
                id="path5095"
                fill="#999"
              />
            </g>
          </g>
        </g>
        <g
          className="cat-frame"
          style={{
            animation: "catrun .42s linear .35s infinite",
          }}
        >
          <g transform="translate(1)" id="g3968">
            <g transform="translate(0 1)" id="g5089" stroke="none">
              <path
                d="M3 20v-3h1v-1h1v-1h3v3H7v1H6v1z"
                id="path5085"
                fill="#000"
              />
              <path d="M4 19v-2h1v-1h1v1h1v1H6v1z" id="path5087" fill="#999" />
            </g>
            <g
              transform="matrix(-1 0 0 1 32 -1031.362)"
              id="g3982"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M5 20v-3h1v-1h3v3H8v1z"
                transform="translate(0 1032.362)"
                id="path3977"
                fill="#000"
              />
              <path
                d="M6 17h2v2H6z"
                transform="translate(0 1032.362)"
                id="rect3979"
                fill="#999"
              />
            </g>
            <g
              transform="translate(3 -1031.362)"
              id="g3841"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3836"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="rect3838"
                fill="#999"
              />
            </g>
            <g
              transform="translate(12 -1031.362)"
              id="g3935"
              fillOpacity={1}
              stroke="none"
            >
              <path
                d="M6 50v-2h4v1H9v1z"
                transform="translate(0 1002.362)"
                id="path3937"
                fill="#000"
              />
              <path
                d="M7 48h2v1H7z"
                transform="translate(0 1002.362)"
                id="path3939"
                fill="#999"
              />
            </g>
            <g transform="translate(0 -1031.362)" id="layer1-0" fillOpacity={1}>
              <path d="M7 1033.362h19v16H7z" id="rect5270" fill="#fc9" />
              <path
                d="M8 1046.362v-10h1v-1h1v-1h13v1h1v1h1v10h-1v1h-1v1H10v-1H9v-1z"
                id="path5272"
                fill="#f9f"
                stroke="none"
              />
              <path
                d="M22 1037.362h1v1h-1zm-4-2h1v1h-1zm-3 0h1v1h-1zm-1 4h1v1h-1zm1 3h1v1h-1zm-2 3h1v1h-1zm-2-4h1v1h-1zm-2 2h1v1H9zm1 3h1v1h-1zm0-10h1v1h-1z"
                id="rect5030-3-6"
                fill="#f39"
              />
              <path
                d="M8 1049.362h17v1H8zm0-17h17v1H8zm18 16v-14h1v14zm-20 0v-14h1v14zm1 0h1v1H7zm0-15h1v1H7zm18 0h1v1h-1zm0 15h1v1h-1z"
                id="path5412"
                fill="#000"
              />
            </g>
            <g transform="translate(6)" id="layer3">
              <g id="g5869" fillOpacity={1} stroke="none">
                <path
                  d="M11 15v-5h1V6h2v1h1v1h1v1h4V8h1V7h1V6h2v4h1v5h-1v1h-1v1H13v-1h-1v-1z"
                  id="path5777"
                  fill="#999"
                />
                <path
                  d="M23 16h1v1h-1zm1-1h1v1h-1zm1-5h1v5h-1zm-1-4h1v4h-1zm-2-1h2v1h-2zm-6 3h4v1h-4zm-4-3h2v1h-2zm-1 1h1v4h-1zm-1 4h1v5h-1zm11-4h1v1h-1zm-1 1h1v1h-1zm-5 0h1v1h-1zm-1-1h1v1h-1zm-1 11h10v1H13zm-1-1h1v1h-1zm-1-1h1v1h-1z"
                  id="rect5496-38"
                  fill="#000"
                />
                <path d="M12 13h2v2h-2z" id="rect5779" fill="#f99" />
                <path d="M23 13h2v2h-2z" id="rect5781" fill="#f99" />
                <path
                  d="M15 16v-2h1v1h2v-1h1v1h2v-1h1v2z"
                  id="path5785"
                  fill="#000"
                />
                <path d="M19 12h1v1h-1z" id="rect5787" fill="#000" />
                <g id="g5857">
                  <path d="M21 13v-1h1v-1h1v2z" id="path5795" fill="#000" />
                  <path d="M21 11h1v1h-1z" id="path5797" fill="#fff" />
                </g>
                <g transform="translate(-7)" id="g5861">
                  <path d="M21 13v-1h1v-1h1v2z" id="path5863" fill="#000" />
                  <path d="M21 11h1v1h-1z" id="path5865" fill="#fff" />
                </g>
              </g>
            </g>
            <g transform="translate(0 -1033.362)" id="g3996" stroke="none">
              <path
                d="M1 12H0v-2h1V9h2v1h1v1h2v4H4v-1H2v-1H1z"
                transform="translate(0 1032.362)"
                id="path3992"
                fill="#000"
              />
              <path
                d="M1 12v-2h2v2h3v2H4v-1H2v-1z"
                transform="translate(0 1032.362)"
                id="path3994"
                fill="#999"
                fillOpacity={1}
              />
            </g>
          </g>
        </g>
      </svg>
    </svg>
  );
}
