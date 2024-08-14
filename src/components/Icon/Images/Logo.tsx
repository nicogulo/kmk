/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width='121' height='32' viewBox='0 0 121 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
        <path
            d='M12.1063 27.4041C11.4837 27.3304 11.0841 26.9491 11.0841 26.4289C11.0841 26.239 11.3766 25.5573 11.7341 24.9138C12.0916 24.2704 12.3064 23.6992 12.2115 23.6446C12.1165 23.5899 11.9246 23.6971 11.785 23.8827C11.5841 24.1499 11.3587 24.2081 10.7036 24.1617C10.2484 24.1296 9.76555 24.1879 9.63052 24.2913C9.47966 24.4069 8.61985 24.4635 7.4002 24.4381C4.9994 24.3883 4.59969 24.2146 3.55312 22.7668C1.65626 20.1427 1.48493 16.5603 3.10507 13.3983C3.70672 12.2241 5.48987 10.2846 6.19858 10.0336C6.43478 9.94999 6.72823 9.66575 6.85069 9.402C7.20981 8.62849 8.39429 7.06239 9.06742 6.47109C11.6689 4.18582 15.7067 3.87765 18.6378 5.74067C19.5574 6.32517 20.8683 7.66958 21.2636 8.43367C21.4647 8.82244 21.8913 9.14587 22.7193 9.53731C24.9687 10.6008 26.7195 12.6552 27.5577 15.2148C28.4684 17.996 27.9441 21.4426 26.2485 23.8214C24.851 25.7818 22.9076 27.044 20.783 27.371C19.7905 27.5237 13.3246 27.5484 12.1063 27.4041Z'
            fill='#9FE8FC'
        />
        <path
            d='M21.0132 26.8993C21.1105 26.6631 20.9395 26.6485 19.5888 26.7778C17.5396 26.974 12.7178 26.8416 11.9525 26.5681C11.5257 26.4155 11.5483 26.318 12.3076 25.0313C13.0506 23.7721 13.0394 23.6039 12.0955 21.8712C11.8468 21.4145 11.6429 20.8701 11.6424 20.6615C11.642 20.4529 11.5489 20.2288 11.4355 20.1635C11.2392 20.0505 11.3186 21.018 11.5748 21.8631C11.7205 22.3435 11.1279 22.2329 10.1828 21.6034C7.53543 19.8402 5.99763 17.0323 6.01095 13.9862C6.0181 12.3497 5.76733 12.2074 5.65937 13.7867C5.56932 15.104 5.16159 15.5566 4.11826 15.4976C3.23313 15.4476 3.10332 15.3159 3.22241 14.5889C3.45788 13.1516 4.95152 11.0051 6.01194 10.5801C6.38968 10.4288 6.72264 10.0058 7.23793 9.02253C9.91191 3.92044 16.293 2.95225 20.1933 7.05684C20.6254 7.51163 21.1121 8.14111 21.2748 8.45567C21.4802 8.8527 21.9095 9.19584 22.6786 9.57769C23.8549 10.1617 25.6069 11.5482 25.9972 12.204C26.9903 13.8728 27.3248 14.5531 27.5673 15.3978C27.9095 16.5895 27.953 19.5839 27.6418 20.5214C26.448 24.1179 24.5911 26.0793 21.5227 26.9847C20.9902 27.1418 20.9183 27.1298 21.0132 26.8993ZM11.248 19.1797C11.2278 18.5046 11.2153 18.4868 11.0968 18.9633C11.0258 19.249 11.0028 19.5801 11.0458 19.6991C11.1937 20.1092 11.2699 19.9136 11.248 19.1797ZM11.2129 17.5384C11.1658 17.37 11.1241 17.4659 11.1203 17.7515C11.1165 18.0372 11.1551 18.175 11.206 18.0578C11.2569 17.9406 11.26 17.7068 11.2129 17.5384Z'
            fill='#14B2E6'
        />
        <path
            d='M20.933 27.0416C20.9321 26.9785 21.2039 26.7143 21.5371 26.4546L22.1428 25.9824L20.8496 26.0411C19.6227 26.0967 19.5084 26.0683 18.6193 25.4865C18.1039 25.1492 17.3751 24.5757 16.9998 24.2121C16.6244 23.8485 16.2264 23.551 16.1152 23.551C16.0041 23.551 15.6505 23.3173 15.3296 23.0317C15.0087 22.746 14.6331 22.5123 14.495 22.5123C14.3568 22.5123 14.2437 22.4007 14.2437 22.2643C14.2437 22.1279 14.0842 21.9691 13.8892 21.9115C13.6942 21.8538 13.4877 21.6928 13.4304 21.5536C13.373 21.4144 13.2339 21.3005 13.1211 21.3005C12.8168 21.3005 12.4678 20.9261 11.8077 19.8914C11.3533 19.1792 11.2158 18.762 11.2164 18.0978C11.2168 17.6217 11.1809 17.3695 11.1366 17.5372C11.0923 17.705 10.9852 17.8016 10.8988 17.7518C10.8123 17.702 10.7436 18.3293 10.7462 19.1456C10.7509 20.6536 10.6401 21.0944 10.4051 20.5029C10.3335 20.3227 10.2089 20.1333 10.1282 20.082C10.0475 20.0308 9.86565 19.5672 9.72406 19.0519C9.36979 17.7625 8.93885 17.6396 9.11527 18.8783L9.24527 19.7912L8.49196 19.0387C8.07764 18.6248 7.73865 18.1854 7.73865 18.0621C7.73865 17.9389 7.67474 17.8381 7.59663 17.8381C7.42052 17.8381 6.85746 16.6521 6.48915 15.5053C6.14245 14.4259 6.10521 12.1298 6.41601 10.9958C6.54589 10.522 6.94919 9.57463 7.31225 8.8906C9.95548 3.91054 16.3399 3.00165 20.1933 7.05686C20.6255 7.51165 21.1122 8.14112 21.2749 8.45569C21.4802 8.85272 21.9095 9.19585 22.6787 9.57771C23.855 10.1617 25.607 11.5482 25.9972 12.204C27.5714 14.8492 27.8405 15.701 27.8586 18.0978C27.8717 19.8269 27.7588 20.3739 27.0189 22.1661C26.2883 23.9355 24.588 25.7164 22.9241 26.455C21.927 26.8975 20.9352 27.1898 20.933 27.0416Z'
            fill='#95A1F6'
        />
        <path
            d='M22.6074 26.2212C22.6074 26.1664 22.9838 25.6659 23.4438 25.1091C23.9038 24.5523 24.2802 24.0129 24.2802 23.9104C24.2802 23.808 24.3638 23.7241 24.466 23.7241C24.5683 23.7241 24.6518 23.5878 24.6517 23.4212C24.6514 23.1221 24.3937 23.3421 23.3781 24.5084C22.8734 25.0879 21.236 25.9289 20.4002 26.0378C19.7094 26.1278 19.504 26.0654 18.6498 25.5065C18.1176 25.1582 17.3751 24.5758 16.9997 24.2121C16.6244 23.8485 16.2264 23.551 16.1152 23.551C16.0041 23.551 15.6505 23.3173 15.3296 23.0317C15.0087 22.746 14.6331 22.5123 14.495 22.5123C14.3568 22.5123 14.2437 22.4007 14.2437 22.2643C14.2437 22.1279 14.0842 21.9691 13.8892 21.9115C13.6942 21.8538 13.4877 21.6928 13.4304 21.5536C13.373 21.4144 13.2287 21.3005 13.1096 21.3005C12.7448 21.3005 12.0187 20.3869 11.8024 19.6558C11.4716 18.5377 11.7196 15.7111 12.2692 14.3352C13.4293 11.431 15.6468 9.62822 18.3385 9.40087C19.0673 9.33931 19.5165 9.21698 19.58 9.0627C19.6348 8.92975 19.6484 8.79666 19.6102 8.76694C19.572 8.73722 18.857 8.77689 18.0213 8.85509C16.4866 8.99869 14.3797 9.73761 13.8683 10.3116C13.7431 10.4521 13.5333 10.5671 13.402 10.5671C13.2643 10.5671 13.2001 10.698 13.2503 10.8769C13.2995 11.0521 13.1715 11.3264 12.9556 11.5084C12.5071 11.8865 11.27 14.2415 11.27 14.7173C11.27 14.8979 11.1865 15.2501 11.0845 15.5C10.9825 15.7499 10.8541 17.0172 10.7991 18.3163C10.7441 19.6153 10.6622 20.7124 10.6172 20.7544C10.5721 20.7963 10.4767 20.6832 10.4051 20.5029C10.3335 20.3227 10.2089 20.1333 10.1282 20.082C10.0475 20.0308 9.86565 19.5672 9.72406 19.0519C9.36979 17.7625 8.93885 17.6396 9.11526 18.8783L9.24527 19.7912L8.49195 19.0387C8.07763 18.6248 7.73864 18.1854 7.73864 18.0622C7.73864 17.9389 7.67473 17.8381 7.59663 17.8381C7.42802 17.8381 6.86958 16.6801 6.51127 15.5875C6.03546 14.1367 6.29932 10.8656 6.94166 10.2518C7.07333 10.126 7.18106 9.91409 7.18106 9.78096C7.18106 9.64784 7.35813 9.24441 7.57454 8.88446C9.02072 6.47909 10.6972 5.24774 13.2094 4.74577C15.2816 4.33172 17.761 5.04594 19.4945 6.55619C20.7322 7.63455 21.2447 8.43791 20.963 8.85806C20.783 9.12646 20.7993 9.18215 21.0578 9.18215C21.7611 9.18215 23.8581 10.3271 24.8443 11.2495C28.555 14.7202 28.6439 21.2103 25.0271 24.5985C24.463 25.127 23.7714 25.6661 23.4903 25.7963C23.2092 25.9266 22.9792 26.0979 22.9792 26.1771C22.9792 26.2562 22.8955 26.3209 22.7933 26.3209C22.6911 26.3209 22.6074 26.2761 22.6074 26.2212ZM11.2519 12.57C11.203 12.5244 11.0523 12.6589 10.9169 12.8688C10.6818 13.2334 10.6858 13.2371 11.0058 12.9516C11.1901 12.7872 11.3008 12.6155 11.2519 12.57ZM12.456 11.5308C13.1097 10.7326 13.0691 10.6111 12.3387 11.1791C11.5835 11.7663 11.3425 12.1252 11.7033 12.1252C11.8496 12.1252 12.1883 11.8577 12.456 11.5308Z'
            fill='#6C9CF5'
        />
        <path
            d='M26.1852 21.8783C25.9023 21.7719 25.8789 20.7141 26.1491 20.2438C26.257 20.056 26.2887 19.7366 26.2197 19.5339C26.0945 19.1666 26.093 19.1668 25.7489 19.5837C25.559 19.8138 25.4018 20.0903 25.3995 20.1983C25.3909 20.6068 24.6954 20.5744 24.454 20.1542C24.3239 19.9277 24.1473 19.7424 24.0617 19.7424C23.9761 19.7424 23.7242 19.5476 23.502 19.3096C23.2798 19.0715 22.9891 18.8768 22.8561 18.8768C22.7231 18.8768 22.3224 18.6236 21.9657 18.3141C20.9927 17.47 20.7821 17.3187 20.5801 17.3187C20.4786 17.3187 20.3287 17.2106 20.247 17.0785C20.0594 16.7754 18.0401 15.2413 17.8287 15.2413C17.7421 15.2413 17.5507 15.0855 17.4034 14.895C17.256 14.7046 17.0471 14.5488 16.9391 14.5488C16.8311 14.5488 16.4681 14.3151 16.1323 14.0294C15.7965 13.7438 15.4852 13.5101 15.4404 13.5101C15.2565 13.5101 14.6547 12.8388 14.7549 12.7455C14.8145 12.6899 14.6821 12.6445 14.4606 12.6445C14.2391 12.6445 14.0579 12.5589 14.0579 12.4543C14.0579 11.9765 14.7369 11.0169 15.4721 10.4558C16.3073 9.81833 17.0234 9.57298 18.6095 9.38095C19.2828 9.29943 19.5538 9.18619 19.5985 8.96758C19.648 8.72581 19.5569 8.68155 19.1358 8.74294C18.8474 8.785 18.1288 8.86294 17.5388 8.91614C16.4487 9.01446 14.2943 9.83347 13.8683 10.3115C13.7431 10.4521 13.5281 10.5671 13.3905 10.5671C13.2449 10.5671 13.1848 10.6752 13.2468 10.8256C13.3057 10.9687 13.1315 11.3357 12.8564 11.6479C12.5831 11.958 12.1143 12.5145 11.8147 12.8847C11.5151 13.2548 11.27 13.5245 11.27 13.4839C11.27 13.2967 12.0316 12.049 12.4809 11.5004C13.3476 10.442 12.8463 10.6723 11.4904 11.9554L10.1843 13.1914L9.21174 12.3183C8.67682 11.838 8.17409 11.4825 8.09455 11.5283C8.01502 11.5741 7.82157 11.4409 7.66468 11.2322C7.21308 10.6317 7.47034 8.94415 8.16195 7.97028C9.85242 5.58993 12.799 4.26919 15.4518 4.70276C17.5719 5.04926 19.7394 6.36239 20.78 7.93072C21.1049 8.42041 21.1394 8.59494 20.963 8.85803C20.7827 9.12697 20.7994 9.18212 21.0614 9.18212C21.7371 9.18212 23.8581 10.3459 24.8468 11.2591C26.3853 12.6802 27.2853 14.5389 27.6133 16.9723C27.7945 18.316 27.6971 19.1203 27.1261 20.9975C26.8364 21.9502 26.7046 22.0735 26.1852 21.8783Z'
            fill='#9059EE'
        />
        <path
            d='M26.1853 21.8783C25.9023 21.7719 25.8789 20.7141 26.1491 20.2438C26.257 20.056 26.2888 19.7366 26.2197 19.5339C26.0946 19.1666 26.093 19.1668 25.7489 19.5837C25.559 19.8138 25.4018 20.0903 25.3995 20.1983C25.3909 20.6068 24.6955 20.5744 24.4541 20.1542C24.3239 19.9277 24.1474 19.7424 24.0617 19.7424C23.9761 19.7424 23.7242 19.5476 23.502 19.3096C23.2798 19.0715 22.9892 18.8768 22.8561 18.8768C22.7231 18.8768 22.3224 18.6236 21.9657 18.3141C20.9928 17.47 20.7821 17.3187 20.5801 17.3187C20.4786 17.3187 20.3288 17.2106 20.247 17.0785C20.0595 16.7754 18.0401 15.2413 17.8287 15.2413C17.7421 15.2413 17.5508 15.0855 17.4034 14.895C17.2561 14.7046 17.0471 14.5488 16.9391 14.5488C16.8312 14.5488 16.4681 14.3151 16.1323 14.0294C15.7966 13.7438 15.4852 13.5101 15.4404 13.5101C15.2565 13.5101 14.6547 12.8388 14.7549 12.7455C14.8145 12.6899 14.6821 12.6445 14.4606 12.6445C13.9784 12.6445 13.9594 12.4574 14.3617 11.6677C14.9904 10.4337 16.5327 9.59698 18.5186 9.41248C18.9786 9.36975 19.4804 9.28846 19.6337 9.23185C19.7871 9.17523 20.038 9.1413 20.1913 9.15644C20.3446 9.17158 20.721 9.21027 21.0277 9.2424C22.02 9.34639 23.79 10.2805 24.8468 11.258C26.3856 12.681 27.2855 14.5398 27.6134 16.9723C27.7945 18.316 27.6972 19.1203 27.1262 20.9975C26.8364 21.9502 26.7047 22.0735 26.1853 21.8783ZM11.2968 13.4235C11.344 13.3283 11.5197 12.9715 11.6873 12.6307C11.8549 12.2899 12.1223 11.9103 12.2815 11.7872C12.6248 11.5218 12.6514 11.6592 12.3576 12.1798C12.1388 12.5673 11.1422 13.7359 11.2968 13.4235ZM9.15061 12.2904C8.64938 11.8255 8.17419 11.4825 8.09463 11.5283C8.01507 11.5741 7.82161 11.4409 7.66472 11.2322C7.22628 10.6492 7.46975 8.93879 8.11673 8.05685C8.67836 7.29126 9.40984 6.61736 9.41427 6.86146C9.41583 6.94763 9.48453 6.9192 9.56692 6.79829C9.68009 6.63221 9.84984 6.68508 10.2611 7.01448C10.5604 7.25429 10.9099 7.4506 11.0377 7.45072C11.1655 7.45083 11.27 7.51938 11.27 7.60304C11.27 7.68671 11.5023 7.84479 11.7863 7.95435C12.0702 8.0639 12.411 8.31521 12.5435 8.51282C12.7272 8.78687 12.7295 8.84052 12.553 8.73894C12.4258 8.6657 12.4823 8.81126 12.6787 9.06241C12.875 9.31356 13.1376 9.48559 13.2621 9.4447C13.7373 9.28862 13.6658 9.69387 13.1299 10.193C12.8226 10.4793 12.571 10.7582 12.571 10.8128C12.571 10.9377 10.2529 13.1689 10.1429 13.1498C10.0984 13.1421 9.65184 12.7554 9.15061 12.2904ZM13.4317 8.49201C12.9896 8.11245 12.5663 7.85926 12.4911 7.92937C12.4158 7.99948 12.3821 7.95911 12.4162 7.83965C12.4502 7.72019 12.1436 7.44081 11.7347 7.21881C11.3258 6.9968 11.0121 6.7245 11.0377 6.61369C11.0633 6.50288 10.9378 6.40606 10.7589 6.39855C10.5627 6.3903 10.5263 6.3501 10.6671 6.2972C10.7956 6.24898 10.8533 6.13827 10.7956 6.05119C10.7378 5.96411 10.8209 5.89286 10.9803 5.89286C11.1396 5.89286 11.27 5.82995 11.27 5.75306C11.27 5.67616 11.6255 5.46193 12.0599 5.27698C12.6653 5.01926 13.2623 4.9407 14.6155 4.9407C16.1423 4.9407 16.525 5.00349 17.4439 5.40467C18.6021 5.91031 20.0843 7.10378 20.6284 7.96893L20.9726 8.51614L20.1238 8.39759C19.1225 8.25772 16.2406 8.59339 15.4698 8.93967C14.639 9.31289 14.3014 9.23873 13.4317 8.49201Z'
            fill='#6869EE'
        />
        <path
            d='M13.4317 8.49201C12.9896 8.11245 12.5663 7.85926 12.491 7.92937C12.4158 7.99948 12.3821 7.95911 12.4161 7.83965C12.4502 7.72019 12.1435 7.44081 11.7346 7.21881C11.3257 6.9968 11.0121 6.7245 11.0377 6.61369C11.0632 6.50288 10.9378 6.40606 10.7589 6.39855C10.5627 6.3903 10.5262 6.3501 10.6671 6.2972C10.7955 6.24898 10.8533 6.13827 10.7955 6.05119C10.7377 5.96411 10.8209 5.89286 10.9802 5.89286C11.1396 5.89286 11.27 5.82995 11.27 5.75306C11.27 5.67616 11.6254 5.46193 12.0599 5.27698C12.6653 5.01926 13.2622 4.9407 14.6155 4.9407C16.1422 4.9407 16.5249 5.00349 17.4439 5.40467C18.6021 5.91031 20.0842 7.10378 20.6284 7.96893L20.9725 8.51614L20.1238 8.39759C19.1224 8.25772 16.2405 8.59339 15.4698 8.93967C14.639 9.31289 14.3014 9.23873 13.4317 8.49201Z'
            fill='#7927ED'
        />
        <path
            d='M111.61 16.3911L109.019 15.9236C109.31 14.8802 109.812 14.1079 110.523 13.6065C111.234 13.1052 112.291 12.8545 113.694 12.8545C114.967 12.8545 115.916 13.0069 116.539 13.3118C117.163 13.6099 117.6 13.9927 117.85 14.4602C118.108 14.9209 118.236 15.7712 118.236 17.011L118.206 20.3443C118.206 21.2928 118.25 21.9941 118.338 22.448C118.433 22.8951 118.606 23.3762 118.856 23.8911H116.031C115.957 23.7014 115.865 23.4202 115.757 23.0476C115.709 22.8782 115.675 22.7664 115.655 22.7122C115.167 23.1865 114.646 23.5422 114.09 23.7793C113.534 24.0164 112.942 24.135 112.312 24.135C111.2 24.135 110.323 23.8335 109.679 23.2305C109.043 22.6275 108.724 21.8653 108.724 20.9439C108.724 20.3342 108.87 19.7922 109.161 19.3179C109.453 18.8369 109.859 18.471 110.381 18.2203C110.909 17.9629 111.668 17.7393 112.657 17.5496C113.992 17.2989 114.917 17.0652 115.431 16.8484V16.5638C115.431 16.0151 115.296 15.6255 115.025 15.3951C114.754 15.158 114.242 15.0395 113.49 15.0395C112.982 15.0395 112.586 15.1411 112.301 15.3443C112.017 15.5408 111.787 15.8897 111.61 16.3911ZM115.431 18.7082C115.066 18.8301 114.486 18.9758 113.694 19.1451C112.901 19.3145 112.383 19.4805 112.139 19.6431C111.766 19.9073 111.58 20.2427 111.58 20.6492C111.58 21.0489 111.729 21.3945 112.027 21.6858C112.325 21.9771 112.705 22.1228 113.165 22.1228C113.68 22.1228 114.171 21.9534 114.639 21.6147C114.984 21.3572 115.211 21.0422 115.32 20.6695C115.394 20.4256 115.431 19.9615 115.431 19.2773V18.7082Z'
            fill='#14B2E6'
        />
        <path
            d='M97.7892 23.8911V8.99271H100.645V16.8992L103.988 13.0984H107.505L103.816 17.0415L107.769 23.8911H104.69L101.976 19.0435L100.645 20.4358V23.8911H97.7892Z'
            fill='#14B2E6'
        />
        <path
            d='M84.5067 18.3423C84.5067 17.3938 84.7405 16.4758 85.2079 15.5882C85.6754 14.7007 86.336 14.0232 87.1896 13.5557C88.0501 13.0882 89.0087 12.8545 90.0657 12.8545C91.6984 12.8545 93.0365 13.3863 94.0799 14.45C95.1232 15.5069 95.6449 16.845 95.6449 18.4642C95.6449 20.097 95.1165 21.4521 94.0596 22.5293C93.0094 23.5997 91.6849 24.135 90.086 24.135C89.0968 24.135 88.1517 23.9114 87.2506 23.4642C86.3563 23.0171 85.6754 22.3633 85.2079 21.5029C84.7405 20.6357 84.5067 19.5821 84.5067 18.3423ZM87.4335 18.4947C87.4335 19.5652 87.6876 20.385 88.1957 20.9541C88.7039 21.5232 89.3306 21.8077 90.0758 21.8077C90.8211 21.8077 91.4444 21.5232 91.9457 20.9541C92.4539 20.385 92.7079 19.5584 92.7079 18.4744C92.7079 17.4175 92.4539 16.6045 91.9457 16.0354C91.4444 15.4663 90.8211 15.1817 90.0758 15.1817C89.3306 15.1817 88.7039 15.4663 88.1957 16.0354C87.6876 16.6045 87.4335 17.4243 87.4335 18.4947Z'
            fill='#14B2E6'
        />
        <path d='M79.3746 23.8911V8.99271H82.2303V23.8911H79.3746Z' fill='#14B2E6' />
        <path
            d='M69.9234 16.3911L67.3319 15.9236C67.6233 14.8802 68.1246 14.1079 68.836 13.6065C69.5474 13.1052 70.6043 12.8545 72.0067 12.8545C73.2805 12.8545 74.229 13.0069 74.8523 13.3118C75.4756 13.6099 75.9126 13.9927 76.1632 14.4602C76.4207 14.9209 76.5494 15.7712 76.5494 17.011L76.5189 20.3443C76.5189 21.2928 76.563 21.9941 76.6511 22.448C76.7459 22.8951 76.9187 23.3762 77.1693 23.8911H74.3441C74.2696 23.7014 74.1782 23.4202 74.0698 23.0476C74.0223 22.8782 73.9885 22.7664 73.9681 22.7122C73.4803 23.1865 72.9586 23.5422 72.4031 23.7793C71.8475 24.0164 71.2547 24.135 70.6246 24.135C69.5135 24.135 68.6361 23.8335 67.9925 23.2305C67.3557 22.6275 67.0372 21.8653 67.0372 20.9439C67.0372 20.3342 67.1829 19.7922 67.4742 19.3179C67.7656 18.8369 68.1721 18.471 68.6937 18.2203C69.2222 17.9629 69.981 17.7393 70.9702 17.5496C72.3048 17.2989 73.2296 17.0652 73.7445 16.8484V16.5638C73.7445 16.0151 73.609 15.6255 73.338 15.3951C73.067 15.158 72.5555 15.0395 71.8035 15.0395C71.2954 15.0395 70.899 15.1411 70.6145 15.3443C70.3299 15.5408 70.0996 15.8897 69.9234 16.3911ZM73.7445 18.7082C73.3787 18.8301 72.7994 18.9758 72.0067 19.1451C71.2141 19.3145 70.6958 19.4805 70.4519 19.6431C70.0792 19.9073 69.8929 20.2427 69.8929 20.6492C69.8929 21.0489 70.042 21.3945 70.3401 21.6858C70.6382 21.9771 71.0176 22.1228 71.4783 22.1228C71.9932 22.1228 72.4844 21.9534 72.9519 21.6147C73.2974 21.3572 73.5244 21.0422 73.6328 20.6695C73.7073 20.4256 73.7445 19.9615 73.7445 19.2773V18.7082Z'
            fill='#14B2E6'
        />
        <path
            d='M64.8827 23.8911H62.0271V18.3829C62.0271 17.2176 61.9661 16.4656 61.8441 16.1268C61.7222 15.7813 61.5223 15.5137 61.2445 15.324C60.9735 15.1343 60.6449 15.0395 60.2588 15.0395C59.7642 15.0395 59.3204 15.175 58.9275 15.446C58.5345 15.717 58.2635 16.076 58.1145 16.5232C57.9722 16.9703 57.901 17.7969 57.901 19.0029V23.8911H55.0453V13.0984H57.6978V14.6838C58.6395 13.4642 59.8252 12.8545 61.2547 12.8545C61.8848 12.8545 62.4607 12.9697 62.9823 13.2C63.504 13.4236 63.897 13.7115 64.1612 14.0638C64.4322 14.4161 64.6185 14.8159 64.7201 15.263C64.8285 15.7102 64.8827 16.3504 64.8827 17.1838V23.8911Z'
            fill='#14B2E6'
        />
        <path
            d='M49.2729 11.635V8.99271H52.1286V11.635H49.2729ZM49.2729 23.8911V13.0984H52.1286V23.8911H49.2729Z'
            fill='#14B2E6'
        />
        <path
            d='M34.2628 8.99271H40.2181C41.397 8.99271 42.2743 9.04352 42.8502 9.14515C43.4329 9.24 43.9512 9.44325 44.4051 9.7549C44.8658 10.0666 45.2486 10.4832 45.5535 11.0049C45.8583 11.5198 46.0108 12.0991 46.0108 12.7427C46.0108 13.4405 45.8211 14.0808 45.4417 14.6634C45.069 15.2461 44.5609 15.6831 43.9173 15.9744C44.8251 16.2386 45.523 16.6892 46.0108 17.326C46.4986 17.9629 46.7425 18.7115 46.7425 19.572C46.7425 20.2495 46.5833 20.9101 46.2648 21.5537C45.9532 22.1905 45.523 22.7021 44.9742 23.0882C44.4322 23.4676 43.7615 23.7014 42.962 23.7895C42.4606 23.8437 41.2513 23.8775 39.334 23.8911H34.2628V8.99271ZM37.2709 11.4724V14.9175H39.2425C40.4146 14.9175 41.1429 14.9006 41.4275 14.8667C41.9424 14.8057 42.3455 14.6296 42.6368 14.3382C42.9349 14.0401 43.084 13.6506 43.084 13.1695C43.084 12.7088 42.9552 12.3362 42.6978 12.0516C42.4471 11.7603 42.0711 11.5842 41.5697 11.5232C41.2716 11.4893 40.4146 11.4724 38.9986 11.4724H37.2709ZM37.2709 17.3972V21.3809H40.0555C41.1395 21.3809 41.8272 21.3504 42.1185 21.2895C42.5657 21.2082 42.9281 21.0117 43.2059 20.7C43.4905 20.3816 43.6327 19.9582 43.6327 19.4297C43.6327 18.9825 43.5243 18.6031 43.3075 18.2915C43.0907 17.9798 42.7757 17.7529 42.3624 17.6106C41.9559 17.4683 41.0684 17.3972 39.6998 17.3972H37.2709Z'
            fill='#14B2E6'
        />
    </svg>
);
export default Logo;
