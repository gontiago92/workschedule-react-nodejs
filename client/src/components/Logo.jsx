import React, {useEffect} from 'react'

const Logo = (props) => {


    useEffect(() => {
        const logo = document.getElementById('logo')
        const paths = logo.querySelectorAll('path')
    
        for (let index = 0; index < paths.length; index++) {
            const element = paths[index];
            const size = element.getTotalLength()
    
            element.style.strokeDasharray = size
            element.style.strokeDashoffset = size
    
            element.style.animation = 'line-anim 2s forwards ' + (index / 4) + 's'
    
            setTimeout(() => { 
                element.animate([
                    // keyframes
                    { fill: 'transparent'},
                    { fill: '#fff' }
                ], {
                    // timing options
                    fill: "forwards",
                    duration: 1000,
                    delay: index / 4 * 1000
                })
            }, 1500)
    
        }
    

    }, [])
    

  return (
    <svg id="logo" width={props.width ? props.width : "1125px"} height={props.height ? props.height : "400px"} viewBox="0 0 1125 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Vector">
            <path fillRule="evenodd" clipRule="evenodd" d="M78.9857 114.02H193.482V348.963L178.765 340.34V128.723H27.4729C18.3742 150.68 13.3461 174.76 13.3461 200C13.3461 303.023 97.0697 386.667 200.192 386.667C294.539 386.667 372.647 316.657 385.259 225.847H254.481V212.513H400C393.52 317.083 306.474 400 200.192 400C89.7026 400 0 310.383 0 200C0 169.227 6.97333 140.063 19.4219 114.02H78.9857Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path d="M201.036 128.723V378.153L215.757 371.81V128.723H387.278C358.513 53.4934 285.557 0 200.192 0C125.877 0 60.9651 40.5434 26.422 100.687H41.9935C75.0852 48.22 133.595 13.3333 200.192 13.3333C272.281 13.3333 334.891 54.2067 366.051 114.02H201.036V128.723Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M78.9857 114.02H193.482V348.963L178.765 340.34V128.723H27.4729C18.3742 150.68 13.3461 174.76 13.3461 200C13.3461 303.023 97.0697 386.667 200.192 386.667C294.539 386.667 372.647 316.657 385.259 225.847H254.481V212.513H400C393.52 317.083 306.474 400 200.192 400C89.7026 400 0 310.383 0 200C0 169.227 6.97333 140.063 19.4219 114.02H78.9857Z" stroke="white"/>
            <path d="M201.036 128.723V378.153L215.757 371.81V128.723H387.278C358.513 53.4934 285.557 0 200.192 0C125.877 0 60.9651 40.5434 26.422 100.687H41.9935C75.0852 48.22 133.595 13.3333 200.192 13.3333C272.281 13.3333 334.891 54.2067 366.051 114.02H201.036V128.723Z" stroke="white"/>
        </g>
        <g id="ONCALVES">
            <path d="M463.888 185.024C454.843 185.024 446.693 183.061 439.44 179.136C432.187 175.125 426.469 169.621 422.288 162.624C418.192 155.627 416.144 147.819 416.144 139.2C416.144 130.581 418.192 122.773 422.288 115.776C426.469 108.779 432.187 103.317 439.44 99.392C446.693 95.3813 454.843 93.376 463.888 93.376C472.848 93.376 480.955 95.3813 488.208 99.392C495.461 103.317 501.136 108.779 505.232 115.776C509.328 122.688 511.376 130.496 511.376 139.2C511.376 147.904 509.328 155.755 505.232 162.752C501.136 169.664 495.461 175.125 488.208 179.136C480.955 183.061 472.848 185.024 463.888 185.024ZM463.888 173.632C470.459 173.632 476.347 172.139 481.552 169.152C486.843 166.165 490.981 162.069 493.968 156.864C497.04 151.573 498.576 145.685 498.576 139.2C498.576 132.715 497.04 126.869 493.968 121.664C490.981 116.373 486.843 112.235 481.552 109.248C476.347 106.261 470.459 104.768 463.888 104.768C457.317 104.768 451.344 106.261 445.968 109.248C440.677 112.235 436.496 116.373 433.424 121.664C430.437 126.869 428.944 132.715 428.944 139.2C428.944 145.685 430.437 151.573 433.424 156.864C436.496 162.069 440.677 166.165 445.968 169.152C451.344 172.139 457.317 173.632 463.888 173.632Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path d="M607.996 94.4V184H597.5L543.74 117.184V184H530.94V94.4H541.436L595.196 161.216V94.4H607.996Z" strokeWidth="2px" stroke="white" />
            <path d="M674.879 185.024C665.919 185.024 657.812 183.061 650.559 179.136C643.391 175.125 637.759 169.664 633.663 162.752C629.567 155.755 627.519 147.904 627.519 139.2C627.519 130.496 629.567 122.688 633.663 115.776C637.759 108.779 643.434 103.317 650.687 99.392C657.94 95.3813 666.047 93.376 675.007 93.376C682.004 93.376 688.404 94.5707 694.207 96.96C700.01 99.264 704.959 102.72 709.055 107.328L700.735 115.392C693.994 108.309 685.588 104.768 675.519 104.768C668.863 104.768 662.847 106.261 657.471 109.248C652.095 112.235 647.871 116.373 644.799 121.664C641.812 126.869 640.319 132.715 640.319 139.2C640.319 145.685 641.812 151.573 644.799 156.864C647.871 162.069 652.095 166.165 657.471 169.152C662.847 172.139 668.863 173.632 675.519 173.632C685.503 173.632 693.908 170.048 700.735 162.88L709.055 170.944C704.959 175.552 699.967 179.051 694.079 181.44C688.276 183.829 681.876 185.024 674.879 185.024Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path d="M782.278 161.6H734.662L724.806 184H711.622L752.198 94.4H764.87L805.574 184H792.134L782.278 161.6ZM777.798 151.36L758.47 107.456L739.142 151.36H777.798Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path d="M818.94 94.4H831.74V172.864H880.252V184H818.94V94.4Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path d="M966.139 94.4L926.843 184H914.171L874.747 94.4H888.571L920.827 168L953.339 94.4H966.139Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path d="M1042.59 172.864V184H977.565V94.4H1040.8V105.536H990.365V133.056H1035.29V143.936H990.365V172.864H1042.59Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path d="M1089.43 185.024C1082.69 185.024 1076.16 184 1069.84 181.952C1063.61 179.819 1058.71 177.088 1055.12 173.76L1059.86 163.776C1063.27 166.848 1067.62 169.365 1072.92 171.328C1078.29 173.205 1083.8 174.144 1089.43 174.144C1096.85 174.144 1102.4 172.907 1106.07 170.432C1109.74 167.872 1111.57 164.501 1111.57 160.32C1111.57 157.248 1110.55 154.773 1108.5 152.896C1106.54 150.933 1104.06 149.44 1101.08 148.416C1098.17 147.392 1094.04 146.24 1088.66 144.96C1081.92 143.339 1076.46 141.717 1072.28 140.096C1068.18 138.475 1064.64 136 1061.65 132.672C1058.75 129.259 1057.3 124.693 1057.3 118.976C1057.3 114.197 1058.54 109.888 1061.01 106.048C1063.57 102.208 1067.41 99.136 1072.53 96.832C1077.65 94.528 1084.01 93.376 1091.6 93.376C1096.89 93.376 1102.1 94.0587 1107.22 95.424C1112.34 96.7893 1116.73 98.752 1120.4 101.312L1116.18 111.552C1112.42 109.163 1108.41 107.371 1104.15 106.176C1099.88 104.896 1095.7 104.256 1091.6 104.256C1084.35 104.256 1078.89 105.579 1075.22 108.224C1071.64 110.869 1069.84 114.283 1069.84 118.464C1069.84 121.536 1070.87 124.053 1072.92 126.016C1074.96 127.893 1077.48 129.387 1080.47 130.496C1083.54 131.52 1087.68 132.629 1092.88 133.824C1099.62 135.445 1105.04 137.067 1109.14 138.688C1113.24 140.309 1116.73 142.784 1119.64 146.112C1122.62 149.44 1124.12 153.92 1124.12 159.552C1124.12 164.245 1122.84 168.555 1120.28 172.48C1117.72 176.32 1113.83 179.392 1108.63 181.696C1103.42 183.915 1097.02 185.024 1089.43 185.024Z" fill="none" strokeWidth="2px" stroke="white"/>
        </g>
        <g id="IAGO">
            <path d="M423.44 218.4H436.24V308H423.44V218.4Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path d="M520.153 285.6H472.537L462.681 308H449.497L490.073 218.4H502.745L543.449 308H530.009L520.153 285.6ZM515.673 275.36L496.345 231.456L477.017 275.36H515.673Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path d="M617.645 262.688H629.933V297.632C625.496 301.301 620.333 304.117 614.445 306.08C608.557 308.043 602.413 309.024 596.013 309.024C586.968 309.024 578.818 307.061 571.565 303.136C564.312 299.125 558.594 293.664 554.413 286.752C550.317 279.755 548.269 271.904 548.269 263.2C548.269 254.496 550.317 246.645 554.413 239.648C558.594 232.651 564.312 227.189 571.565 223.264C578.904 219.339 587.138 217.376 596.269 217.376C603.437 217.376 609.922 218.571 615.725 220.96C621.613 223.264 626.605 226.677 630.701 231.2L622.765 239.136C615.597 232.224 606.936 228.768 596.781 228.768C589.954 228.768 583.81 230.261 578.349 233.248C572.973 236.149 568.749 240.245 565.677 245.536C562.605 250.741 561.069 256.629 561.069 263.2C561.069 269.685 562.605 275.573 565.677 280.864C568.749 286.069 572.973 290.165 578.349 293.152C583.81 296.139 589.912 297.632 596.653 297.632C604.674 297.632 611.672 295.712 617.645 291.872V262.688Z" fill="none" strokeWidth="2px" stroke="white"/>
            <path d="M694.888 309.024C685.843 309.024 677.693 307.061 670.44 303.136C663.187 299.125 657.469 293.621 653.288 286.624C649.192 279.627 647.144 271.819 647.144 263.2C647.144 254.581 649.192 246.773 653.288 239.776C657.469 232.779 663.187 227.317 670.44 223.392C677.693 219.381 685.843 217.376 694.888 217.376C703.848 217.376 711.955 219.381 719.208 223.392C726.461 227.317 732.136 232.779 736.232 239.776C740.328 246.688 742.376 254.496 742.376 263.2C742.376 271.904 740.328 279.755 736.232 286.752C732.136 293.664 726.461 299.125 719.208 303.136C711.955 307.061 703.848 309.024 694.888 309.024ZM694.888 297.632C701.459 297.632 707.347 296.139 712.552 293.152C717.843 290.165 721.981 286.069 724.968 280.864C728.04 275.573 729.576 269.685 729.576 263.2C729.576 256.715 728.04 250.869 724.968 245.664C721.981 240.373 717.843 236.235 712.552 233.248C707.347 230.261 701.459 228.768 694.888 228.768C688.317 228.768 682.344 230.261 676.968 233.248C671.677 236.235 667.496 240.373 664.424 245.664C661.437 250.869 659.944 256.715 659.944 263.2C659.944 269.685 661.437 275.573 664.424 280.864C667.496 286.069 671.677 290.165 676.968 293.152C682.344 296.139 688.317 297.632 694.888 297.632Z" fill="none" strokeWidth="2px" stroke="white"/>
        </g>
    </svg>
  )
}

export default Logo