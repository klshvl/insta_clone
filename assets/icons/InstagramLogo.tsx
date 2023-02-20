import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { memo } from "react";

const SvgComponent = ({ height, width, ...props }: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 139 50"
    fill="none"
    {...props}>
    <Path
      d="M10.7163 8.18464C8.03387 9.31554 5.085 12.5105 4.15365 16.5208C2.97417 21.6021 7.88254 23.7508 8.28513 23.0462C8.75897 22.2184 7.40561 21.9384 7.12703 19.3021C6.76699 15.8969 8.33871 12.0921 10.3168 10.4227C10.6845 10.1125 10.667 10.5442 10.667 11.3427C10.667 12.7706 10.5886 25.5893 10.5886 28.2646C10.5886 31.8845 10.4402 33.0276 10.1736 34.1572C9.90344 35.3019 9.46915 36.0753 9.79823 36.3733C10.1659 36.7065 11.7357 35.9138 12.6445 34.6363C13.7343 33.1041 14.1158 31.264 14.1843 29.2658C14.267 26.8569 14.2635 23.0345 14.267 20.8543C14.2703 18.8547 14.3004 12.9993 14.2322 9.47934C14.2154 8.61596 11.8381 7.71014 10.7162 8.18359M105.969 25.1258C105.882 27.0078 105.469 28.4787 104.955 29.5163C103.962 31.525 101.899 32.1487 101.024 29.2612C100.547 27.6872 100.525 25.0584 100.868 22.862C101.217 20.6244 102.192 18.9345 103.806 19.0869C105.399 19.2375 106.144 21.3043 105.969 25.1257V25.1258ZM79.1227 36.8018C79.101 39.9288 78.6124 42.6704 77.5646 43.4667C76.0785 44.5959 74.081 43.7489 74.4946 41.4671C74.8606 39.448 76.5914 37.3859 79.1269 34.8664C79.1269 34.8664 79.1322 35.441 79.1227 36.8018H79.1227ZM78.7168 25.1076C78.6259 26.8217 78.1847 28.5436 77.7034 29.5165C76.7098 31.5252 74.6327 32.1531 73.772 29.2614C73.1834 27.2856 73.3244 24.7285 73.6156 23.1172C73.9934 21.0267 74.9094 19.0873 76.5543 19.0873C78.1536 19.0873 78.9422 20.8546 78.7168 25.1077V25.1076ZM63.1648 25.0814C63.0673 26.8968 62.7157 28.4143 62.1514 29.5165C61.1305 31.5114 59.1107 32.144 58.22 29.2614C57.5778 27.1828 57.7965 24.3486 58.0636 22.8175C58.46 20.5455 59.4527 18.9347 61.0023 19.0873C62.5941 19.244 63.368 21.3045 63.1648 25.0815V25.0814ZM134.436 27.2018C134.047 27.2018 133.869 27.6058 133.722 28.2858C133.213 30.6503 132.677 31.1841 131.987 31.1841C131.215 31.1841 130.522 30.0134 130.343 27.6697C130.203 25.8268 130.226 22.4341 130.405 19.0591C130.442 18.3657 130.252 17.6796 128.405 17.004C127.61 16.7134 126.455 16.2855 125.88 17.6836C124.255 21.6338 123.62 24.7698 123.47 26.0438C123.462 26.1097 123.382 26.1232 123.368 25.9692C123.273 24.9488 123.06 23.0946 123.033 19.1989C123.028 18.4388 122.868 17.7918 122.035 17.2622C121.495 16.9185 119.854 16.3106 119.263 17.0338C118.751 17.6252 118.158 19.2169 117.541 21.1036C117.041 22.6371 116.692 23.6745 116.692 23.6745C116.692 23.6745 116.699 19.5368 116.705 17.9674C116.707 17.3753 116.304 17.178 116.182 17.1422C115.635 16.9822 114.557 16.7149 114.099 16.7149C113.534 16.7149 113.396 17.0329 113.396 17.4961C113.396 17.5568 113.307 22.9437 113.307 26.7106C113.307 26.8742 113.307 27.0527 113.309 27.2423C112.996 28.9736 111.983 31.3238 110.882 31.3238C109.779 31.3238 109.258 30.3412 109.258 25.8506C109.258 23.2309 109.336 22.0918 109.375 20.197C109.397 19.1057 109.44 18.2676 109.438 18.0774C109.43 17.4942 108.428 17.2003 107.962 17.0916C107.494 16.9821 107.088 16.9396 106.77 16.9579C106.32 16.9834 106.002 17.2805 106.002 17.6891C106.002 17.9081 106.005 18.3247 106.005 18.3247C105.426 17.4082 104.494 16.7703 103.875 16.5855C102.206 16.0863 100.464 16.5286 99.1504 18.38C98.1064 19.8511 97.477 21.5172 97.2293 23.911C97.0482 25.661 97.1073 27.4356 97.4292 28.9364C97.0403 30.6299 96.3183 31.3238 95.5277 31.3238C94.3799 31.3238 93.5478 29.4369 93.6444 26.1736C93.7082 24.0273 94.1346 22.521 94.6007 20.3419C94.7995 19.4129 94.638 18.9266 94.233 18.4605C93.8615 18.033 93.07 17.8146 91.9322 18.0832C91.1218 18.2747 89.963 18.4807 88.9028 18.6389C88.9028 18.6389 88.9668 18.3818 89.0193 17.9286C89.295 15.5517 86.7306 15.7445 85.9125 16.5037C85.4241 16.957 85.0916 17.4915 84.9655 18.4527C84.7654 19.978 86.0005 20.6974 86.0005 20.6974C85.5952 22.5657 84.6019 25.0063 83.5764 26.7709C83.0271 27.7163 82.6069 28.4168 82.0644 29.1615C82.0625 28.8842 82.061 28.6069 82.06 28.3309C82.0476 24.403 82.0995 21.3116 82.1224 20.1974C82.1447 19.1061 82.1881 18.2902 82.1857 18.1C82.1796 17.6734 81.9322 17.5124 81.4178 17.3084C80.963 17.128 80.4252 17.0031 79.8673 16.9596C79.1632 16.9043 78.739 17.2804 78.75 17.7252C78.7521 17.8092 78.7521 18.3249 78.7521 18.3249C78.1731 17.4084 77.2417 16.7705 76.6221 16.5856C74.9531 16.0866 73.2115 16.529 71.8979 18.3802C70.854 19.8512 70.1704 21.9155 69.9767 23.8929C69.7963 25.7359 69.8296 27.302 70.0756 28.6213C69.8102 29.9424 69.0472 31.3239 68.1844 31.3239C67.0815 31.3239 66.4539 30.3414 66.4539 25.8508C66.4539 23.231 66.532 22.0919 66.5703 20.1974C66.5926 19.1061 66.6356 18.2678 66.6332 18.0778C66.6251 17.4946 65.6238 17.2006 65.1579 17.0918C64.6704 16.9782 64.2495 16.9365 63.9263 16.9605C63.4999 16.9925 63.2001 17.3771 63.2001 17.6639V18.3249C62.6211 17.4084 61.6897 16.7705 61.0701 16.5856C59.4011 16.0866 57.6692 16.5361 56.3459 18.3802C55.4829 19.5826 54.7843 20.9157 54.4247 23.8667C54.3208 24.7195 54.275 25.518 54.2809 26.2645C53.9368 28.3841 52.4169 30.8271 51.1736 30.8271C50.4461 30.8271 49.7533 29.4059 49.7533 26.3769C49.7533 22.3421 50.0012 16.5974 50.0431 16.0438C50.0431 16.0438 51.6139 16.0169 51.9182 16.0133C52.7017 16.0046 53.4113 16.0233 54.455 15.9695C54.9784 15.9427 55.4827 14.0506 54.9425 13.8164C54.6976 13.7104 52.9671 13.6176 52.281 13.6029C51.7042 13.5897 50.0983 13.47 50.0983 13.47C50.0983 13.47 50.2423 9.65697 50.2758 9.25417C50.3043 8.91846 49.873 8.74561 49.6258 8.64072C49.0244 8.38456 48.4864 8.2619 47.8487 8.12949C46.9676 7.94642 46.5679 8.12549 46.4898 8.87446C46.3722 10.0111 46.3113 13.3405 46.3113 13.3405C45.6648 13.3405 43.4562 13.2132 42.8095 13.2132C42.2086 13.2132 41.56 15.816 42.3908 15.848C43.3466 15.8853 45.0123 15.9176 46.1166 15.9511C46.1166 15.9511 46.0674 21.7904 46.0674 23.5932C46.0674 23.785 46.069 23.9697 46.0694 24.1489C45.4616 27.3394 43.321 29.0628 43.321 29.0628C43.7807 26.9521 42.8417 25.3671 41.1502 24.0254C40.527 23.5309 39.2967 22.5949 37.9202 21.5692C37.9202 21.5692 38.7175 20.7778 39.4245 19.1856C39.9254 18.0579 39.947 16.7672 38.7175 16.4826C36.6858 16.012 35.0106 17.5148 34.511 19.1192C34.1238 20.3621 34.3303 21.2843 35.0887 22.2424C35.1441 22.3124 35.2041 22.3839 35.2661 22.4559C34.8075 23.3462 34.1774 24.5449 33.6438 25.4744C32.1628 28.0553 31.0439 30.0966 30.1984 30.0966C29.5225 30.0966 29.5315 28.0241 29.5315 26.0836C29.5315 24.4108 29.6542 21.8958 29.7521 19.2918C29.7846 18.4307 29.3571 17.9401 28.6404 17.4957C28.2049 17.2258 27.2755 16.695 26.7373 16.695C25.9317 16.695 23.6073 16.8054 21.4111 23.204C21.1343 24.0105 20.5906 25.48 20.5906 25.48L20.6374 17.7855C20.6374 17.6051 20.542 17.4306 20.3236 17.3113C19.9535 17.1089 18.965 16.695 18.0861 16.695C17.6673 16.695 17.4583 16.8912 17.4583 17.2822L17.3817 29.3204C17.3817 30.235 17.4054 31.3021 17.4951 31.7688C17.5846 32.2361 17.7295 32.6162 17.909 32.8424C18.0882 33.0681 18.2956 33.2403 18.6374 33.3114C18.9555 33.3773 20.6976 33.6026 20.7882 32.9321C20.8967 32.1285 20.9008 31.2593 21.8156 28.0177C23.2397 22.9709 25.0965 20.5085 25.9693 19.634C26.1219 19.4811 26.2962 19.472 26.2878 19.7222C26.2505 20.8287 26.1195 23.5935 26.0313 25.9423C25.7948 32.2282 26.9302 33.3933 28.5527 33.3933C29.7939 33.3933 31.5437 32.1511 33.4194 29.0066C34.5887 27.047 35.7241 25.1256 36.5399 23.7408C37.1084 24.2708 37.7463 24.8413 38.3838 25.4507C39.8653 26.8669 40.3517 28.2126 40.029 29.4892C39.7821 30.4652 38.8526 31.471 37.1981 30.4934C36.7159 30.2082 36.5101 29.9878 36.0252 29.6663C35.7647 29.4936 35.367 29.4419 35.1285 29.6229C34.5091 30.0933 34.1548 30.6916 33.9526 31.4323C33.7558 32.1531 34.4725 32.5341 35.2154 32.8674C35.8552 33.1542 37.2301 33.4142 38.107 33.4438C41.5235 33.5588 44.2604 31.7823 46.1656 27.1996C46.5067 31.1573 47.9582 33.3969 50.48 33.3969C52.166 33.3969 53.8564 31.2019 54.5956 29.0426C54.8078 29.9228 55.1219 30.6882 55.5276 31.3355C57.4708 34.4365 61.2405 33.769 63.1341 31.1358C63.7195 30.3222 63.8086 30.0298 63.8086 30.0298C64.0848 32.5162 66.0728 33.3849 67.2111 33.3849C68.4859 33.3849 69.8021 32.7779 70.7246 30.6861C70.8327 30.9131 70.9508 31.1299 71.0796 31.3354C73.0228 34.4364 76.7925 33.769 78.686 31.1357C78.7754 31.0122 78.8528 30.9002 78.9205 30.7996L78.9761 32.4328C78.9761 32.4328 77.8959 33.4309 77.2328 34.0432C74.3144 36.74 72.0952 38.786 71.932 41.1687C71.7224 44.2068 74.1688 45.3359 76.0195 45.4838C77.985 45.6409 79.6681 44.5474 80.7027 43.017C81.6126 41.6699 82.2083 38.7707 82.1646 35.9072C82.1471 34.7606 82.1185 33.3026 82.096 31.7398C83.1217 30.5401 84.2774 29.0237 85.3416 27.2487C86.5012 25.3143 87.744 22.7167 88.3804 20.6951C88.3804 20.6951 89.4602 20.7044 90.6126 20.6284C90.9812 20.6042 91.0871 20.6799 91.0189 20.9521C90.9366 21.2809 89.563 26.6173 90.8166 30.1721C91.6748 32.6057 93.6091 33.3886 94.756 33.3886C96.0985 33.3886 97.3828 32.3675 98.0711 30.8511C98.154 31.0202 98.2407 31.1837 98.3353 31.3348C100.279 34.4357 104.035 33.7643 105.942 31.1351C106.372 30.5419 106.616 30.029 106.616 30.029C107.026 32.6023 109.012 33.3973 110.15 33.3973C111.336 33.3973 112.461 32.9078 113.374 30.7325C113.412 31.6903 113.472 32.4734 113.567 32.7204C113.625 32.8714 113.961 33.0609 114.207 33.1525C115.291 33.5575 116.397 33.366 116.806 33.2827C117.09 33.2249 117.311 32.9958 117.341 32.4044C117.42 30.8513 117.372 28.242 117.839 26.3029C118.624 23.0484 119.356 21.786 119.703 21.161C119.897 20.8108 120.116 20.753 120.124 21.1236C120.141 21.8735 120.178 24.0755 120.482 27.0341C120.705 29.21 121.003 30.4961 121.232 30.9031C121.886 32.0671 122.694 32.1222 123.352 32.1222C123.771 32.1222 124.646 32.0057 124.567 31.265C124.529 30.904 124.596 28.6726 125.37 25.4663C125.875 23.3725 126.717 21.4807 127.021 20.789C127.133 20.534 127.185 20.735 127.183 20.7742C127.119 22.2161 126.976 26.9326 127.559 29.5121C128.349 33.0065 130.636 33.3975 131.433 33.3975C133.135 33.3975 134.526 32.094 134.995 28.664C135.108 27.8386 134.941 27.2012 134.44 27.2012"
      fill="#262626"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
