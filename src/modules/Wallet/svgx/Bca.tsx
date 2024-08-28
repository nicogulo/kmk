/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const Bca: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='34' height='20' viewBox='0 0 34 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M17.6243 9.9984C19.3867 9.19902 19.6473 6.59038 17.1404 6.59038H14.2372L13.1643 8.69412H13.6692L12.386 13.722H15.7519C18.2076 13.743 19.312 10.8514 17.6243 9.9984ZM15.7519 11.8918H14.9104L15.226 10.7558H16.0254C16.9721 10.9451 16.3831 11.9338 15.7519 11.8918ZM16.2568 9.47246H15.5416L15.7519 8.48372H16.5513C17.3237 8.67307 16.6566 9.51456 16.2568 9.47246Z'
            fill='#005FAF'
        />
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M14.2188 6.56022H17.1404C17.7722 6.56022 18.2336 6.72463 18.5411 6.98755C18.8488 7.25069 18.9993 7.61004 19.0135 7.99351C19.0413 8.74304 18.5492 9.58571 17.6919 10C18.0891 10.2186 18.325 10.5538 18.4183 10.9359C18.5156 11.3343 18.4576 11.7819 18.2694 12.2003C17.8927 13.0374 16.9923 13.7628 15.7517 13.7522L12.3471 13.7522L13.6304 8.72428H13.1151L14.2188 6.56022ZM14.2557 6.62055L13.2136 8.66396H13.7081L12.4248 13.6919H15.7521L15.7522 13.6919C16.9672 13.7023 17.8468 12.9924 18.2143 12.1756C18.3982 11.7671 18.4533 11.3332 18.3597 10.9502C18.2664 10.5679 18.0246 10.2345 17.6107 10.0253L17.5545 9.99693L17.6118 9.97094C18.483 9.5758 18.9806 8.73442 18.9532 7.99574C18.9395 7.62713 18.7953 7.28435 18.5019 7.0334C18.2082 6.78222 17.7621 6.62055 17.1404 6.62055H14.2557ZM15.7275 8.45355H16.555L16.5585 8.45442C16.7573 8.50317 16.871 8.59596 16.9156 8.7133C16.9597 8.82937 16.9326 8.96045 16.8703 9.07891C16.8079 9.19783 16.7078 9.30849 16.5976 9.38693C16.4886 9.46449 16.3652 9.51359 16.2553 9.50262H15.5043L15.7275 8.45355ZM15.7763 8.51388L15.5788 9.44229H16.2584L16.26 9.44246C16.3495 9.45189 16.4588 9.4117 16.5626 9.33778C16.6658 9.26437 16.7592 9.16072 16.8169 9.05085C16.8749 8.94053 16.8948 8.82836 16.8592 8.73472C16.8243 8.64292 16.7327 8.55999 16.5476 8.51388H15.7763ZM15.2031 10.7256H16.0284L16.0313 10.7262C16.2731 10.7746 16.4231 10.8753 16.4969 11.0041C16.5708 11.1329 16.5646 11.2831 16.5083 11.4219C16.3966 11.697 16.0814 11.9434 15.7509 11.922H14.8708L15.2031 10.7256ZM15.2489 10.786L14.9501 11.8616H15.7529L15.7539 11.8617C16.0542 11.8817 16.3486 11.655 16.4524 11.3992C16.5038 11.2724 16.5068 11.1426 16.4446 11.0341C16.3826 10.926 16.2521 10.8325 16.0224 10.786H15.2489Z'
            fill='#005FAF'
        />
        <path
            d='M24.516 9.27713L25.6182 7.3315L24.1268 6.55359L23.9323 6.79367C23.1278 6.3678 18.9149 6.95582 18.6511 11.1116C18.8088 14.5978 22.7152 13.9707 23.0984 13.7495L24.1728 11.5285C23.1205 12.2216 20.9659 12.5543 20.8748 10.4723C21.0638 8.75541 23.0908 8.11424 24.516 9.27713ZM30.0158 6.59038H26.6276L25.5506 8.63114H26.1039L23.5504 13.722H26.022L26.5294 12.4941H28.0466L28.0844 13.722H30.3596L30.0158 6.59038ZM27.2168 10.8409L28.0465 8.86031L28.0844 10.8409H27.2168Z'
            fill='#005FAF'
        />
        <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M24.1189 6.51544L25.6598 7.3192L24.5246 9.3231L24.4969 9.3005C23.792 8.72534 22.9396 8.5972 22.2411 8.82349C21.5437 9.04942 20.9989 9.62869 20.905 10.4733C20.9279 10.9873 21.0778 11.3487 21.3027 11.5927C21.5281 11.8371 21.8317 11.9666 22.1673 12.0112C22.84 12.1004 23.6345 11.8469 24.1562 11.5033L24.2476 11.4431L23.1215 13.771L23.1135 13.7756C23.0612 13.8058 22.9542 13.8405 22.8102 13.8721C22.665 13.9039 22.479 13.9331 22.2665 13.9509C21.8417 13.9865 21.3092 13.9767 20.7831 13.8501C20.2571 13.7235 19.736 13.4796 19.3365 13.046C18.9366 12.6121 18.6607 11.9905 18.621 11.113L18.6209 11.1113L18.621 11.1097C18.7537 9.01971 19.8803 7.82508 21.0751 7.20772C21.6719 6.8993 22.2857 6.73488 22.8013 6.67432C23.059 6.64404 23.2927 6.63967 23.4878 6.65643C23.669 6.67201 23.8189 6.70599 23.9241 6.75585L24.1189 6.51544ZM24.1347 6.59173L23.9401 6.83193L23.9182 6.82033C23.8228 6.76983 23.6736 6.73295 23.4826 6.71653C23.2923 6.70017 23.0627 6.70434 22.8083 6.73423C22.2994 6.79401 21.6927 6.95648 21.1028 7.26131C19.9243 7.87026 18.8129 9.04708 18.6813 11.1119C18.7207 11.9765 18.9922 12.5834 19.3808 13.0052C19.7701 13.4276 20.2791 13.6668 20.7973 13.7915C21.3154 13.9162 21.8412 13.9261 22.2615 13.8908C22.4716 13.8732 22.6549 13.8444 22.7973 13.8132C22.9328 13.7835 23.0285 13.7522 23.0754 13.7277L24.0997 11.6103C23.5705 11.9305 22.812 12.1575 22.1594 12.071C21.8134 12.0251 21.4955 11.8907 21.2584 11.6336C21.0212 11.3764 20.8677 10.9994 20.8447 10.4736L20.8445 10.4713L20.8448 10.469C20.9407 9.59796 21.5035 8.99905 22.2225 8.7661C22.9319 8.5363 23.7924 8.66269 24.5073 9.23136L25.5765 7.3438L24.1347 6.59173ZM26.6094 6.56022H30.0446L30.3912 13.7522H28.0552L28.0174 12.5243H26.5496L26.0422 13.7522H23.5016L26.055 8.6613H25.5006L26.6094 6.56022ZM26.6458 6.62055L25.6006 8.60098H26.1527L23.5993 13.6919H26.0018L26.5093 12.464H28.0758L28.1137 13.6919H30.3279L29.9871 6.62055H26.6458ZM27.2621 10.8107H28.0536L28.0191 9.00383L27.2621 10.8107ZM28.0187 8.84865L28.0767 8.85973L28.1151 10.871H27.1715L28.0187 8.84865Z'
            fill='#005FAF'
        />
        <path
            d='M8.85686 13.3816L8.98849 13.3434L8.84414 13.1439L8.85686 13.3816ZM6.69601 13.3476L6.67055 13.5259C6.73606 13.5195 6.81671 13.576 6.84886 13.4495C6.84645 13.3509 6.77141 13.3455 6.69601 13.3476ZM7.74465 13.3434C7.73373 13.2948 7.69319 13.2591 7.59179 13.2925L7.62575 13.4749C7.70906 13.4565 7.75188 13.4072 7.74465 13.3434ZM5.37574 13.194L5.3352 13.3562C5.40035 13.3589 5.47665 13.4117 5.51991 13.3156C5.5228 13.2554 5.52527 13.1955 5.37574 13.194ZM7.65549 13.6109L7.68523 13.7977C7.75478 13.7994 7.81824 13.7576 7.79984 13.6703C7.78211 13.5864 7.71159 13.5996 7.65549 13.6109Z'
            fill='#005FAF'
        />
        <path
            d='M10.4163 6.68654C8.16829 5.54132 5.48353 5.57317 3.34161 6.63659C2.23712 8.58096 2.20195 11.3014 3.34161 13.7109C5.70135 14.9051 8.31125 14.8264 10.4329 13.7609C11.43 11.7152 11.5947 9.25355 10.4163 6.68654ZM6.61964 12.4924L6.48639 12.4939C6.45339 12.1257 6.36538 11.8163 6.17657 11.5794C5.31077 10.4937 3.54092 11.3111 3.99569 9.46594C4.23215 8.52262 6.92933 7.96627 6.61964 12.4924ZM3.99888 10.67C4.18793 11.0548 5.37236 11.1178 5.78351 11.4124C6.43572 11.8796 6.3421 12.4941 6.3421 12.4941H6.18827C5.88546 11.5659 5.03558 12.3008 4.35484 12.0509C3.92746 11.8989 3.61716 11.24 3.99888 10.67ZM6.15685 13.6958L6.22055 13.1906L6.33516 13.1991L6.28419 13.7552C6.23279 14.0002 5.86754 13.9674 5.82146 13.734L5.88087 13.1566L6.01672 13.1779L5.9573 13.6618C5.96484 13.822 6.12548 13.8124 6.15685 13.6958ZM5.54693 13.8337L5.41627 13.8022C5.43159 13.6942 5.55966 13.4745 5.30655 13.4745L5.23609 13.7617L5.09192 13.7346L5.24508 13.0453C5.61944 13.0861 5.65219 13.1903 5.65961 13.3021C5.64483 13.3889 5.62173 13.4494 5.54699 13.4643C5.63446 13.5437 5.54802 13.71 5.54693 13.8337ZM4.71708 13.0617C4.68107 13.1095 4.60898 13.2764 4.59855 13.4094C4.58745 13.5504 4.72287 13.5207 4.75659 13.5042C4.78379 13.491 4.804 13.3778 4.804 13.3778L4.70918 13.3462L4.74078 13.2514L4.9542 13.3225L4.85148 13.6782L4.76455 13.6544L4.77245 13.5991C4.66605 13.6476 4.47127 13.6112 4.4484 13.4885C4.42554 13.3898 4.49479 13.0908 4.60645 12.9511C4.71497 12.8153 4.97936 12.948 4.98581 13.0301C4.99221 13.1119 4.95993 13.204 4.95993 13.204L4.8604 13.1852C4.8604 13.1852 4.8665 13.1557 4.87518 13.1091C4.88435 13.0598 4.75568 13.0103 4.71708 13.0617ZM6.65782 13.6405L6.63237 13.9462L6.52626 13.942L6.56444 13.216C6.82944 13.2215 6.98133 13.2582 6.97626 13.4453C6.96046 13.701 6.75343 13.6435 6.65782 13.6405ZM6.92197 12.4941H6.74444C6.7287 11.8654 6.84959 10.7155 6.51926 9.86919C6.26899 9.22767 5.6356 8.93909 5.49523 8.42086C5.27301 7.6006 5.65123 6.71308 6.92197 6.64474C8.02364 6.75784 8.3621 7.60832 8.1742 8.40017C7.85111 9.1919 7.52797 9.07813 7.12568 9.86678C6.79711 10.7122 6.92221 11.8198 6.92197 12.4941ZM8.89083 13.6575L8.76771 13.7L8.72946 12.9698L8.87382 12.9316L9.23044 13.5344L9.13278 13.5981L9.01388 13.4284L8.87804 13.4793L8.89083 13.6575ZM7.4545 12.4941H7.3125C7.42952 10.8795 9.45846 11.2302 9.64389 10.67C9.96456 11.2254 9.84929 11.6938 9.51444 11.9338C8.68235 12.5307 7.88447 11.4922 7.4545 12.4941ZM8.20738 13.3095L8.27108 13.6449C8.31071 13.7222 8.33761 13.7079 8.39842 13.7001C8.46893 13.649 8.45422 13.5993 8.44088 13.5345L8.564 13.5175C8.59609 13.7605 8.48058 13.7853 8.39419 13.802C8.20895 13.8152 8.17263 13.7792 8.1225 13.5388C8.09331 13.333 8.04288 13.1157 8.21588 13.076C8.49988 13.0327 8.48311 13.1605 8.50881 13.2501L8.38569 13.2714C8.36602 13.1944 8.33773 13.1639 8.2753 13.1695C8.21842 13.1957 8.19507 13.2379 8.20738 13.3095ZM7.94841 13.6575C7.95433 13.7633 7.91843 13.8335 7.85075 13.8571L7.56205 13.9165L7.44744 13.216C7.50668 13.2064 7.79713 13.1 7.8677 13.2925C7.90251 13.4101 7.86644 13.4523 7.82524 13.5047C7.90335 13.5298 7.92971 13.5906 7.94841 13.6575ZM7.20706 10.1424C7.85021 8.33152 9.32189 8.65153 9.64829 9.466C10.0955 11.1003 8.65557 10.6521 7.73324 11.3223C7.38464 11.6255 7.2012 11.9733 7.19849 12.5006H7.04045C7.03097 11.4385 7.01378 10.6865 7.20706 10.1424Z'
            fill='#005FAF'
        />
    </svg>
);
export default Bca;
