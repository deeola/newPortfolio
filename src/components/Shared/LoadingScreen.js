import React from "react";
import { ColoredA, ColoredB, ColoredREC,  LoadingScreenContainer, TransA, TransB, TransREC } from "./NavbarStyled";


const LoadingScreen = ({height}) => {
  return (
    <LoadingScreenContainer height={height} >
      <svg
        width="112"
        height="117"
        viewBox="0 0 112 117"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="splash">
          <g id="Group 13">
            <g id="Group 11">
              <g id="Group 10">
                <g id="Group 5">
                  <g id="Group 4">
                    <g id="letterB">
                      <TransB id="transB">
                        <path
                          id="B"
                          d="M44.448 58.552L44.176 57.5897L44.3256 59.5445L44.448 58.552ZM54.816 63.064L54.0805 63.7415L54.0897 63.7515L54.0993 63.7614L54.816 63.064ZM54.336 81.88L53.569 81.2382L53.5613 81.2476L54.336 81.88ZM44.448 89.176L44.8137 90.1068L44.8279 90.1012L44.8419 90.0951L44.448 89.176ZM37.344 90.712L37.2359 89.7179L37.2336 89.7181L37.344 90.712ZM12.672 89.752L12.4759 90.7326L12.486 90.7346L12.4962 90.7364L12.672 89.752ZM9.6 88.312L9 89.112L9.01154 89.1207L9.02332 89.129L9.6 88.312ZM8.064 84.952H9.06406L9.06394 84.9411L8.064 84.952ZM7.392 60.376L6.39217 60.3942L6.39233 60.4034L6.39267 60.4126L7.392 60.376ZM7.296 55.096L8.29592 55.0778L8.29551 55.0648L7.296 55.096ZM8.352 32.92L7.60459 32.2556L7.60216 32.2584L8.352 32.92ZM12 31V30H11.9546L11.9095 30.0041L12 31ZM14.4 30.904L14.4831 31.9006L14.4969 31.8993L14.4 30.904ZM41.568 31.288L41.3135 32.2551L41.3234 32.2577L41.3334 32.2601L41.568 31.288ZM50.784 36.28L51.5366 35.6215L51.5147 35.5964L51.4911 35.5729L50.784 36.28ZM52.992 40.216L52.051 40.5547L52.0557 40.5671L52.992 40.216ZM53.856 44.728H52.856V44.7382L52.8562 44.7484L53.856 44.728ZM51.36 53.368L50.5248 52.818L50.5201 52.8252L50.5155 52.8325L51.36 53.368ZM22.656 38.392L22.5485 37.3978L22.5456 37.3981L22.656 38.392ZM16.8 39.352L16.5666 38.3796L15.7747 38.5697L15.8005 39.3837L16.8 39.352ZM17.376 57.496L16.3765 57.5277L16.4081 58.5233L17.4038 58.4956L17.376 57.496ZM20.832 57.4L20.8598 58.3996L20.8974 58.3986L20.9349 58.3947L20.832 57.4ZM33.12 55.96L33.2648 56.9495L33.3051 56.9436L33.3449 56.9344L33.12 55.96ZM38.016 53.752L38.5783 54.5789L38.5894 54.5714L38.6003 54.5635L38.016 53.752ZM41.952 50.2L41.1901 49.5523L41.1871 49.5559L41.952 50.2ZM43.008 44.44L42.0717 44.7911L42.0755 44.8013L42.0795 44.8114L43.008 44.44ZM41.76 42.232L42.4671 41.5249L42.4604 41.5182L42.4536 41.5117L41.76 42.232ZM17.664 82.744L16.6642 82.7248L16.6471 83.6138L17.528 83.7347L17.664 82.744ZM42.24 80.92L42.6491 81.8325L42.6561 81.8293L42.24 80.92ZM43.584 66.328L43.1779 67.2418L43.1779 67.2418L43.584 66.328ZM25.728 65.176L25.8662 66.1664L25.8745 66.1652L25.728 65.176ZM17.664 65.944L17.6153 64.9452L16.6318 64.9932L16.6646 65.9773L17.664 65.944ZM17.76 77.752L16.7619 77.6896L16.7606 77.7112L16.7602 77.7328L17.76 77.752ZM44.3256 59.5445C48.8606 60.1036 52.0573 61.5449 54.0805 63.7415L55.5515 62.3865C53.0947 59.7191 49.3794 58.1524 44.5704 57.5595L44.3256 59.5445ZM54.0993 63.7614C56.2089 65.9296 57.272 68.6177 57.272 71.896H59.272C59.272 68.1343 58.0311 64.9344 55.5327 62.3666L54.0993 63.7614ZM57.272 71.896C57.272 75.1443 56.0681 78.2516 53.5691 81.2383L55.1029 82.5217C57.8519 79.2364 59.272 75.6877 59.272 71.896H57.272ZM53.5613 81.2476C51.1117 84.2485 47.9506 86.5869 44.0541 88.2569L44.8419 90.0951C49.0094 88.3091 52.4403 85.7835 55.1107 82.5124L53.5613 81.2476ZM44.0824 88.2452C42.4048 88.9043 40.1336 89.4029 37.2359 89.7179L37.4521 91.7061C40.4424 91.3811 42.9072 90.8557 44.8137 90.1068L44.0824 88.2452ZM37.2336 89.7181C34.3924 90.0338 31.4533 90.192 28.416 90.192V92.192C31.5227 92.192 34.5356 92.0302 37.4544 91.7059L37.2336 89.7181ZM28.416 90.192C23.3587 90.192 18.1696 89.7179 12.8478 88.7676L12.4962 90.7364C17.9264 91.7061 23.2333 92.192 28.416 92.192V90.192ZM12.8681 88.7714C12.0849 88.6148 11.1893 88.2099 10.1767 87.495L9.02332 89.129C10.1867 89.9501 11.3391 90.5052 12.4759 90.7326L12.8681 88.7714ZM10.2 87.512C9.46793 86.9629 9.064 86.163 9.064 84.952H7.064C7.064 86.685 7.68407 88.1251 9 89.112L10.2 87.512ZM9.06394 84.9411C8.9998 79.0404 8.77544 70.8385 8.39133 60.3394L6.39267 60.4126C6.77656 70.9055 7.0002 79.0876 7.06406 84.9629L9.06394 84.9411ZM8.39184 60.3578L8.29584 55.0778L6.29617 55.1142L6.39217 60.3942L8.39184 60.3578ZM8.29551 55.0648C8.03964 46.8767 7.912 40.4567 7.912 35.8H5.912C5.912 40.4873 6.04037 46.9313 6.29649 55.1272L8.29551 55.0648ZM7.912 35.8C7.912 35.3374 8.19386 34.6107 9.10184 33.5816L7.60216 32.2584C6.59014 33.4053 5.912 34.5986 5.912 35.8H7.912ZM9.09941 33.5844C9.97116 32.6036 10.9595 32.0987 12.0905 31.9959L11.9095 30.0041C10.2245 30.1573 8.78085 30.9323 7.60459 32.2556L9.09941 33.5844ZM12 32C12.8576 32 13.6854 31.967 14.483 31.9005L14.317 29.9075C13.5787 29.969 12.8064 30 12 30V32ZM14.4969 31.8993C21.7368 31.1945 26.5206 30.848 28.896 30.848V28.848C26.4074 28.848 21.5272 29.2055 14.3031 29.9087L14.4969 31.8993ZM28.896 30.848C33.6322 30.848 37.7675 31.3219 41.3135 32.2551L41.8225 30.3209C38.0725 29.3341 33.7598 28.848 28.896 28.848V30.848ZM41.3334 32.2601C44.8868 33.1178 47.789 34.6992 50.0769 36.9871L51.4911 35.5729C48.915 32.9968 45.6732 31.2502 41.8026 30.3159L41.3334 32.2601ZM50.0314 36.9385C50.8276 37.8484 51.5072 39.0439 52.0511 40.5547L53.9329 39.8773C53.3248 38.1881 52.5324 36.7596 51.5366 35.6215L50.0314 36.9385ZM52.0557 40.5671C52.5944 42.0036 52.856 43.3888 52.856 44.728H54.856C54.856 43.1231 54.5416 41.5004 53.9283 39.8649L52.0557 40.5671ZM52.8562 44.7484C52.9161 47.6816 52.1417 50.3628 50.5248 52.818L52.1952 53.918C54.0343 51.1252 54.9239 48.0464 54.8558 44.7076L52.8562 44.7484ZM50.5155 52.8325C48.981 55.2522 46.8791 56.8258 44.176 57.5897L44.72 59.5143C47.9049 58.6142 50.411 56.7318 52.2045 53.9035L50.5155 52.8325ZM29.472 37.008C27.2569 37.008 24.9489 37.1383 22.5485 37.3978L22.7635 39.3862C25.0991 39.1337 27.3351 39.008 29.472 39.008V37.008ZM22.5456 37.3981C20.2155 37.657 18.2197 37.9829 16.5666 38.3796L17.0334 40.3244C18.5803 39.9531 20.4885 39.639 22.7664 39.3859L22.5456 37.3981ZM15.8005 39.3837L16.3765 57.5277L18.3755 57.4643L17.7995 39.3203L15.8005 39.3837ZM17.4038 58.4956L20.8598 58.3996L20.8042 56.4004L17.3482 56.4964L17.4038 58.4956ZM20.9349 58.3947C26.5051 57.8185 30.6187 57.3367 33.2648 56.9495L32.9752 54.9705C30.3733 55.3513 26.2949 55.8295 20.7291 56.4053L20.9349 58.3947ZM33.3449 56.9344C35.1445 56.5191 36.8894 55.7274 38.5783 54.5789L37.4537 52.9251C35.9426 53.9526 34.4235 54.6329 32.8951 54.9856L33.3449 56.9344ZM38.6003 54.5635C40.2519 53.3744 41.6289 52.1361 42.7169 50.8441L41.1871 49.5559C40.2271 50.6959 38.9801 51.8256 37.4317 52.9405L38.6003 54.5635ZM42.7139 50.8476C43.28 50.1817 43.7313 49.5683 44.046 49.013C44.3494 48.4777 44.584 47.8964 44.584 47.32H42.584C42.584 47.3836 42.5466 47.6023 42.306 48.027C42.0767 48.4317 41.712 48.9383 41.1901 49.5524L42.7139 50.8476ZM44.584 47.32C44.584 46.2233 44.3641 45.1376 43.9365 44.0686L42.0795 44.8114C42.4199 45.6624 42.584 46.4967 42.584 47.32H44.584ZM43.9443 44.0889C43.5415 43.0146 43.0642 42.122 42.4671 41.5249L41.0529 42.9391C41.3518 43.238 41.7065 43.8174 42.0717 44.7911L43.9443 44.0889ZM42.4536 41.5117C40.645 39.77 38.7574 38.5536 36.786 37.92L36.174 39.824C37.7866 40.3424 39.419 41.366 41.0664 42.9523L42.4536 41.5117ZM36.786 37.92C34.8574 37.3 32.4069 37.008 29.472 37.008V39.008C32.2971 39.008 34.5186 39.2919 36.174 39.824L36.786 37.92ZM17.528 83.7347C20.8319 84.1882 23.9815 84.416 26.976 84.416V82.416C24.0825 82.416 21.0241 82.1958 17.8 81.7533L17.528 83.7347ZM26.976 84.416C33.5072 84.416 38.7548 83.5782 42.6491 81.8325L41.8309 80.0075C38.3012 81.5898 33.3728 82.416 26.976 82.416V84.416ZM42.6561 81.8293C44.7127 80.8882 46.2953 79.5064 47.3536 77.6767C48.4066 75.8563 48.904 73.6567 48.904 71.128H46.904C46.904 73.3993 46.4574 75.2317 45.6224 76.6753C44.7927 78.1096 43.5433 79.2238 41.8239 80.0107L42.6561 81.8293ZM48.904 71.128C48.904 68.5948 46.9774 66.7419 43.9901 65.4142L43.1779 67.2418C45.9506 68.4741 46.904 69.8212 46.904 71.128H48.904ZM43.9901 65.4142C40.9752 64.0742 37.7319 63.408 34.272 63.408V65.408C37.4681 65.408 40.4328 66.0218 43.1779 67.2418L43.9901 65.4142ZM34.272 63.408C31.9638 63.408 29.0623 63.6711 25.5815 64.1868L25.8745 66.1652C29.3057 65.6569 32.1002 65.408 34.272 65.408V63.408ZM25.5898 64.1856C22.8658 64.5657 20.2077 64.8187 17.6153 64.9452L17.7127 66.9428C20.3683 66.8133 23.0862 66.5543 25.8662 66.1664L25.5898 64.1856ZM16.6646 65.9773C16.7927 69.8228 16.856 72.2362 16.856 73.24H18.856C18.856 72.1958 18.7913 69.7452 18.6634 65.9107L16.6646 65.9773ZM16.856 73.24C16.856 75.2186 16.824 76.6975 16.7619 77.6896L18.7581 77.8144C18.824 76.7585 18.856 75.2294 18.856 73.24H16.856ZM16.7602 77.7328L16.6642 82.7248L18.6638 82.7632L18.7598 77.7712L16.7602 77.7328Z"
                          fill="black"
                        />
                      </TransB>
                      <ColoredB id="coloredB">
                        <path
                          id="B_2"
                          d="M44.448 58.552C49.12 59.128 52.576 60.632 54.816 63.064C57.12 65.432 58.272 68.376 58.272 71.896C58.272 75.416 56.96 78.744 54.336 81.88C51.776 85.016 48.48 87.448 44.448 89.176C42.656 89.88 40.288 90.392 37.344 90.712C34.464 91.032 31.488 91.192 28.416 91.192C23.296 91.192 18.048 90.712 12.672 89.752C11.712 89.56 10.688 89.08 9.6 88.312C8.576 87.544 8.064 86.424 8.064 84.952C8 79.064 7.776 70.872 7.392 60.376L7.296 55.096C7.04 46.904 6.912 40.472 6.912 35.8C6.912 34.968 7.392 34.008 8.352 32.92C9.376 31.768 10.592 31.128 12 31C12.832 31 13.632 30.968 14.4 30.904C21.632 30.2 26.464 29.848 28.896 29.848C33.696 29.848 37.92 30.328 41.568 31.288C45.28 32.184 48.352 33.848 50.784 36.28C51.68 37.304 52.416 38.616 52.992 40.216C53.568 41.752 53.856 43.256 53.856 44.728C53.92 47.864 53.088 50.744 51.36 53.368C49.696 55.992 47.392 57.72 44.448 58.552ZM29.472 38.008C27.296 38.008 25.024 38.136 22.656 38.392C20.352 38.648 18.4 38.968 16.8 39.352L17.376 57.496L20.832 57.4C26.4 56.824 30.496 56.344 33.12 55.96C34.784 55.576 36.416 54.84 38.016 53.752C39.616 52.6 40.928 51.416 41.952 50.2C43.04 48.92 43.584 47.96 43.584 47.32C43.584 46.36 43.392 45.4 43.008 44.44C42.624 43.416 42.208 42.68 41.76 42.232C40.032 40.568 38.272 39.448 36.48 38.872C34.688 38.296 32.352 38.008 29.472 38.008ZM17.664 82.744C20.928 83.192 24.032 83.416 26.976 83.416C33.44 83.416 38.528 82.584 42.24 80.92C46.016 79.192 47.904 75.928 47.904 71.128C47.904 69.208 46.464 67.608 43.584 66.328C40.704 65.048 37.6 64.408 34.272 64.408C32.032 64.408 29.184 64.664 25.728 65.176C22.976 65.56 20.288 65.816 17.664 65.944C17.792 69.784 17.856 72.216 17.856 73.24C17.856 75.224 17.824 76.728 17.76 77.752L17.664 82.744Z"
                          fill="#1B3766"
                        />
                      </ColoredB>
                    </g>
                    <g id="letterA">
                      <TransA id="transA">
                        <path
                          id="a"
                          d="M106.464 89.944L105.934 89.096L105.926 89.1011L105.918 89.1064L106.464 89.944ZM96.48 90.52L96.0662 91.4304L96.0906 91.4415L96.1156 91.4512L96.48 90.52ZM92.544 87.064L93.3514 86.474L92.7037 85.5876L91.8814 86.315L92.544 87.064ZM85.728 90.424L85.9655 91.3954L85.9756 91.3929L85.9857 91.3902L85.728 90.424ZM67.968 88.312L67.3204 89.0739L67.326 89.0787L67.3316 89.0834L67.968 88.312ZM65.568 73.912L66.4056 74.4583L66.4109 74.4502L66.416 74.442L65.568 73.912ZM69.504 69.88L68.956 69.0435L68.9453 69.0505L68.9348 69.0578L69.504 69.88ZM75.84 67.096L76.1009 68.0614L76.113 68.0581L76.125 68.0545L75.84 67.096ZM88.032 66.808L87.7661 67.772L87.7661 67.772L88.032 66.808ZM92.352 68.44L91.8617 69.3116L93.352 70.1498V68.44H92.352ZM89.856 59.8L89.2277 60.5779L89.2369 60.5854L89.2463 60.5926L89.856 59.8ZM78.528 58.456L78.1473 57.5313L78.1372 57.5355L78.1272 57.5398L78.528 58.456ZM74.976 60.28L75.4482 61.1615L75.4603 61.155L75.4721 61.1482L74.976 60.28ZM68.256 60.568L67.4043 61.0921L67.4139 61.1076L67.424 61.1227L68.256 60.568ZM70.08 53.56L69.48 52.76L69.473 52.7653L69.4661 52.7706L70.08 53.56ZM76.416 50.584L76.6705 51.5511L76.6823 51.548L76.6941 51.5446L76.416 50.584ZM89.568 50.68L89.2739 51.6358L89.2852 51.6392L89.2965 51.6424L89.568 50.68ZM95.712 53.656L96.3669 52.9003L96.3521 52.8874L96.3367 52.8751L95.712 53.656ZM100.128 59.512L99.2185 59.9278L99.2258 59.9436L99.2336 59.9592L100.128 59.512ZM101.568 70.456L100.571 70.3793L100.571 70.3848L101.568 70.456ZM101.184 77.656L100.19 77.5456L100.189 77.5555L100.188 77.5655L101.184 77.656ZM101.856 83.032L101.149 83.7391L101.17 83.7599L101.192 83.7794L101.856 83.032ZM103.872 83.8V84.8H103.89L103.908 84.7994L103.872 83.8ZM106.56 83.704V82.704H106.542L106.524 82.7046L106.56 83.704ZM108.192 84.472L108.992 83.872L108.992 83.872L108.192 84.472ZM84.768 83.032L85.0644 83.9871L85.0644 83.9871L84.768 83.032ZM91.488 79.864L91.9932 80.727L92.3632 80.5104L92.4614 80.093L91.488 79.864ZM91.968 75.544L92.9674 75.5797L92.9909 74.9214L92.3954 74.6399L91.968 75.544ZM76.224 74.488L76.6484 75.3935L76.6484 75.3935L76.224 74.488ZM74.688 82.648L75.3186 81.8719L75.3186 81.8719L74.688 82.648ZM107.768 86.392C107.768 87.3562 107.273 88.2593 105.934 89.096L106.994 90.792C108.727 89.7087 109.768 88.2438 109.768 86.392H107.768ZM105.918 89.1064C104.55 89.9987 103.362 90.384 102.336 90.384V92.384C103.87 92.384 105.434 91.8093 107.01 90.7816L105.918 89.1064ZM102.336 90.384C99.9687 90.384 98.1551 90.1016 96.8444 89.5888L96.1156 91.4512C97.7489 92.0904 99.8393 92.384 102.336 92.384V90.384ZM96.8938 89.6096C95.6859 89.0606 94.4985 88.0437 93.3514 86.474L91.7366 87.654C93.0215 89.4123 94.4581 90.6994 96.0662 91.4304L96.8938 89.6096ZM91.8814 86.315C90.3665 87.6552 88.2492 88.7167 85.4703 89.4578L85.9857 91.3902C88.9668 90.5953 91.3936 89.4168 93.2066 87.813L91.8814 86.315ZM85.4905 89.4526C82.672 90.1416 80.0968 90.48 77.76 90.48V92.48C80.2872 92.48 83.024 92.1144 85.9655 91.3954L85.4905 89.4526ZM77.76 90.48C73.9769 90.48 70.9518 89.4773 68.6044 87.5406L67.3316 89.0834C70.1042 91.3707 73.6071 92.48 77.76 92.48V90.48ZM68.6156 87.5501C66.3313 85.6083 65.128 82.7507 65.128 78.808H63.128C63.128 83.1853 64.4847 86.6637 67.3204 89.0739L68.6156 87.5501ZM65.128 78.808C65.128 77.2059 65.5538 75.7644 66.4056 74.4583L64.7304 73.3657C63.6622 75.0036 63.128 76.8261 63.128 78.808H65.128ZM66.416 74.442C67.2959 73.0342 68.5079 71.7859 70.0732 70.7022L68.9348 69.0578C67.1721 70.2781 65.7601 71.7178 64.72 73.382L66.416 74.442ZM70.052 70.7165C71.8109 69.5641 73.8242 68.6767 76.1009 68.0614L75.5791 66.1306C73.1198 66.7953 70.9091 67.7639 68.956 69.0435L70.052 70.7165ZM76.125 68.0545C78.3972 67.379 80.765 67.04 83.232 67.04V65.04C80.579 65.04 78.0188 65.405 75.555 66.1375L76.125 68.0545ZM83.232 67.04C84.4566 67.04 85.9627 67.2745 87.7661 67.772L88.2979 65.844C86.3893 65.3175 84.6954 65.04 83.232 65.04V67.04ZM87.7661 67.772C89.5867 68.2742 90.9389 68.7925 91.8617 69.3116L92.8423 67.5684C91.7171 66.9355 90.1893 66.3658 88.2979 65.844L87.7661 67.772ZM93.352 68.44V66.904H91.352V68.44H93.352ZM93.352 66.904C93.352 63.3366 92.4993 60.5717 90.4657 59.0074L89.2463 60.5926C90.5407 61.5883 91.352 63.5594 91.352 66.904H93.352ZM90.4843 59.0221C88.5523 57.4616 85.581 56.784 81.792 56.784V58.784C85.427 58.784 87.8317 59.4504 89.2277 60.5779L90.4843 59.0221ZM81.792 56.784C80.5631 56.784 79.3461 57.0377 78.1473 57.5313L78.9088 59.3807C79.8859 58.9783 80.8449 58.784 81.792 58.784V56.784ZM78.1272 57.5398C77.0609 58.0063 75.844 58.6323 74.4799 59.4118L75.4721 61.1482C76.796 60.3917 77.9471 59.8017 78.9288 59.3722L78.1272 57.5398ZM74.5038 59.3985C72.8186 60.3013 71.2846 60.72 69.888 60.72V62.72C71.6914 62.72 73.5494 62.1787 75.4482 61.1615L74.5038 59.3985ZM69.888 60.72C69.8109 60.72 69.5296 60.6757 69.0881 60.0133L67.424 61.1227C68.0064 61.9963 68.8131 62.72 69.888 62.72V60.72ZM69.1077 60.0439C68.6454 59.2928 68.488 58.7418 68.488 58.36H66.488C66.488 59.2582 66.8426 60.1792 67.4043 61.0921L69.1077 60.0439ZM68.488 58.36C68.488 56.8699 69.1604 55.5421 70.6939 54.3494L69.4661 52.7706C67.5436 54.2659 66.488 56.1381 66.488 58.36H68.488ZM70.68 54.36C72.3568 53.1024 74.3481 52.1622 76.6705 51.5511L76.1615 49.6169C73.6199 50.2858 71.3872 51.3296 69.48 52.76L70.68 54.36ZM76.6941 51.5446C79.0626 50.8589 81.1425 50.528 82.944 50.528V48.528C80.9055 48.528 78.6334 48.9011 76.1379 49.6234L76.6941 51.5446ZM82.944 50.528C84.7357 50.528 86.8414 50.8873 89.2739 51.6358L89.8621 49.7242C87.3026 48.9367 84.9923 48.528 82.944 48.528V50.528ZM89.2965 51.6424C91.6968 52.3194 93.6155 53.2594 95.0873 54.4369L96.3367 52.8751C94.6085 51.4926 92.4312 50.4486 89.8395 49.7175L89.2965 51.6424ZM95.0571 54.4117C96.8724 55.9849 98.256 57.8221 99.2185 59.9278L101.037 59.0962C99.952 56.7219 98.3916 54.655 96.3669 52.9003L95.0571 54.4117ZM99.2336 59.9592C100.247 61.9856 100.76 64.2308 100.76 66.712H102.76C102.76 63.9452 102.185 61.3904 101.022 59.0648L99.2336 59.9592ZM100.76 66.712C100.76 67.5041 100.699 68.7209 100.571 70.3793L102.565 70.5327C102.693 68.8631 102.76 67.5839 102.76 66.712H100.76ZM100.571 70.3848C100.441 72.1918 100.376 73.7529 100.376 75.064H102.376C102.376 73.8151 102.439 72.3042 102.565 70.5272L100.571 70.3848ZM100.376 75.064C100.376 75.5824 100.317 76.4014 100.19 77.5456L102.178 77.7664C102.307 76.6066 102.376 75.6976 102.376 75.064H100.376ZM100.188 77.5655C100.059 78.9859 99.992 80.1401 99.992 81.016H101.992C101.992 80.2279 102.053 79.1421 102.18 77.7465L100.188 77.5655ZM99.992 81.016C99.992 82.0666 100.398 82.9882 101.149 83.7391L102.563 82.3249C102.162 81.9238 101.992 81.5014 101.992 81.016H99.992ZM101.192 83.7794C101.95 84.4535 102.858 84.8 103.872 84.8V82.8C103.35 82.8 102.914 82.6345 102.52 82.2846L101.192 83.7794ZM103.908 84.7994L106.596 84.7034L106.524 82.7046L103.836 82.8006L103.908 84.7994ZM106.56 84.704C106.986 84.704 107.218 84.8395 107.392 85.072L108.992 83.872C108.398 83.0805 107.542 82.704 106.56 82.704V84.704ZM107.392 85.072C107.622 85.3784 107.768 85.7959 107.768 86.392H109.768C109.768 85.4521 109.53 84.5896 108.992 83.872L107.392 85.072ZM77.856 84.896C80.6703 84.896 83.0817 84.6024 85.0644 83.9871L84.4716 82.0769C82.7423 82.6136 80.5457 82.896 77.856 82.896V84.896ZM85.0644 83.9871C87.0221 83.3795 89.3358 82.2825 91.9932 80.727L90.9828 79.001C88.3922 80.5175 86.2259 81.5325 84.4716 82.0769L85.0644 83.9871ZM92.4614 80.093C92.7385 78.9154 92.9023 77.4029 92.9674 75.5797L90.9686 75.5083C90.9058 77.2691 90.7495 78.6366 90.5146 79.635L92.4614 80.093ZM92.3954 74.6399C88.8219 72.9506 85.7523 72.048 83.232 72.048V74.048C85.3197 74.048 88.0741 74.8094 91.5406 76.4481L92.3954 74.6399ZM83.232 72.048C80.4847 72.048 78.0001 72.5511 75.7996 73.5825L76.6484 75.3935C78.5439 74.5049 80.7313 74.048 83.232 74.048V72.048ZM75.7996 73.5825C74.6226 74.1343 73.6922 74.9226 73.0639 75.9631C72.4385 76.9991 72.152 78.2192 72.152 79.576H74.152C74.152 78.5008 74.3775 77.6569 74.7761 76.9969C75.1718 76.3414 75.7774 75.8017 76.6484 75.3935L75.7996 73.5825ZM72.152 79.576C72.152 81.1212 72.8224 82.4207 74.0574 83.4241L75.3186 81.8719C74.5056 81.2113 74.152 80.4628 74.152 79.576H72.152ZM74.0574 83.4241C75.2204 84.3691 76.4924 84.896 77.856 84.896V82.896C77.0436 82.896 76.2036 82.5909 75.3186 81.8719L74.0574 83.4241Z"
                          fill="black"
                        />
                      </TransA>
                      <ColoredA id="coloredA">
                        <path
                          id="a_2"
                          d="M108.768 86.392C108.768 87.8 108 88.984 106.464 89.944C104.992 90.904 103.616 91.384 102.336 91.384C99.904 91.384 97.952 91.096 96.48 90.52C95.072 89.88 93.76 88.728 92.544 87.064C90.88 88.536 88.608 89.656 85.728 90.424C82.848 91.128 80.192 91.48 77.76 91.48C73.792 91.48 70.528 90.424 67.968 88.312C65.408 86.136 64.128 82.968 64.128 78.808C64.128 77.016 64.608 75.384 65.568 73.912C66.528 72.376 67.84 71.032 69.504 69.88C71.36 68.664 73.472 67.736 75.84 67.096C78.208 66.392 80.672 66.04 83.232 66.04C84.576 66.04 86.176 66.296 88.032 66.808C89.888 67.32 91.328 67.864 92.352 68.44V66.904C92.352 63.448 91.52 61.08 89.856 59.8C88.192 58.456 85.504 57.784 81.792 57.784C80.704 57.784 79.616 58.008 78.528 58.456C77.504 58.904 76.32 59.512 74.976 60.28C73.184 61.24 71.488 61.72 69.888 61.72C69.312 61.72 68.768 61.336 68.256 60.568C67.744 59.736 67.488 59 67.488 58.36C67.488 56.504 68.352 54.904 70.08 53.56C71.872 52.216 73.984 51.224 76.416 50.584C78.848 49.88 81.024 49.528 82.944 49.528C84.864 49.528 87.072 49.912 89.568 50.68C92.064 51.384 94.112 52.376 95.712 53.656C97.632 55.32 99.104 57.272 100.128 59.512C101.216 61.688 101.76 64.088 101.76 66.712C101.76 67.544 101.696 68.792 101.568 70.456C101.44 72.248 101.376 73.784 101.376 75.064C101.376 75.64 101.312 76.504 101.184 77.656C101.056 79.064 100.992 80.184 100.992 81.016C100.992 81.784 101.28 82.456 101.856 83.032C102.432 83.544 103.104 83.8 103.872 83.8L106.56 83.704C107.264 83.704 107.808 83.96 108.192 84.472C108.576 84.984 108.768 85.624 108.768 86.392ZM77.856 83.896C80.608 83.896 82.912 83.608 84.768 83.032C86.624 82.456 88.864 81.4 91.488 79.864C91.744 78.776 91.904 77.336 91.968 75.544C88.448 73.88 85.536 73.048 83.232 73.048C80.608 73.048 78.272 73.528 76.224 74.488C74.176 75.448 73.152 77.144 73.152 79.576C73.152 80.792 73.664 81.816 74.688 82.648C75.712 83.48 76.768 83.896 77.856 83.896Z"
                          fill="#5390D9"
                        />
                      </ColoredA>
                    </g>
                    <g id="recshape">
                      <TransREC id="transRec">
                        <rect
                          id="Rectangle 1"
                          x="64.0728"
                          y="32.7909"
                          width="42.3909"
                          height="6.06364"
                          stroke="black"
                        />
                      </TransREC>
                      <ColoredREC id="coloredRec">
                        <rect
                          id="Rectangle 2"
                          x="64"
                          y="32"
                          width="43.3909"
                          height="7.06364"
                          fill="#5390D9"
                        />
                      </ColoredREC>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
