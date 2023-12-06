export const PlayButtonSVG: React.FC<{
  isHovering: boolean;
  disabled: boolean;
}> = ({ isHovering, disabled }) => {
  const svgPlayIcon = disabled ? null : (
    <>
      <mask id="path-5-inside-1_1294_1209" fill="white">
        <path d="M102.008 46.5463C102.008 45.6931 102.7 44.9994 103.553 45.0226C114.286 45.3153 124.73 48.6346 133.674 54.6129C143.046 60.8776 150.351 69.781 154.663 80.1971C158.976 90.6132 160.103 102.074 157.901 113.131C155.7 124.187 150.27 134.343 142.297 142.313C134.324 150.283 124.167 155.711 113.109 157.908C102.052 160.106 90.5916 158.975 80.1769 154.659C69.7622 150.343 60.8612 143.036 54.5995 133.661C48.6242 124.715 45.3083 114.27 45.0192 103.537C44.9962 102.684 45.6902 101.992 46.5434 101.992V101.992C47.3966 101.992 48.0858 102.684 48.1101 103.537C48.3985 113.659 51.5329 123.507 57.1688 131.945C63.0911 140.811 71.5096 147.723 81.3597 151.805C91.2099 155.887 102.049 156.956 112.507 154.878C122.965 152.799 132.572 147.666 140.113 140.128C147.653 132.59 152.789 122.985 154.871 112.528C156.953 102.07 155.887 91.2305 151.809 81.379C147.73 71.5275 140.821 63.1067 131.957 57.1816C123.521 51.5429 113.674 48.4053 103.552 48.1135C102.699 48.089 102.007 47.3995 102.008 46.5463V46.5463Z" />
      </mask>

      <path
        d="M87.784 77.9531C86.1895 76.9916 84.1562 78.1399 84.1562 80.0018V123.822C84.1562 125.684 86.1895 126.832 87.784 125.871L124.121 103.961C125.664 103.03 125.664 100.793 124.121 99.863L87.784 77.9531Z"
        fill="white"
      />
    </>
  );

  const defaultSVG = (
    <svg
      width="238"
      height="239"
      viewBox="0 0 202 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_b_1294_1209)">
        <ellipse
          cx="101.5"
          cy="101.903"
          rx="81.5"
          ry="81.9035"
          fill="url(#paint0_radial_1294_1209)"
        />
        <path
          d="M182.402 101.903C182.402 146.81 146.178 183.209 101.5 183.209C56.8219 183.209 20.5981 146.81 20.5981 101.903C20.5981 56.997 56.8219 20.5981 101.5 20.5981C146.178 20.5981 182.402 56.997 182.402 101.903Z"
          stroke="#373945"
          strokeWidth="1.1962"
        />
      </g>
      <g filter="url(#filter1_d_1294_1209)">
        <g filter="url(#filter2_ii_1294_1209)">
          <ellipse
            cx="102.101"
            cy="102.507"
            rx="56.8196"
            ry="57.1009"
            fill="url(#paint1_radial_1294_1209)"
          />
        </g>
        <path
          d="M158.42 102.507C158.42 133.769 133.203 159.108 102.101 159.108C70.9987 159.108 45.7812 133.769 45.7812 102.507C45.7812 71.245 70.9987 45.9062 102.101 45.9062C133.203 45.9062 158.42 71.245 158.42 102.507Z"
          stroke="#434653"
        />
        {svgPlayIcon}
      </g>
      <defs>
        <filter
          id="filter0_b_1294_1209"
          x="-1.8905"
          y="-1.8905"
          width="206.781"
          height="207.586"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10.9453" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1294_1209"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1294_1209"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1294_1209"
          x="33.0536"
          y="37.8462"
          width="137.908"
          height="138.51"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.78481" />
          <feGaussianBlur stdDeviation="5.98101" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0539047 0 0 0 0 0.068186 0 0 0 0 0.108236 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1294_1209"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1294_1209"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_ii_1294_1209"
          x="45.2812"
          y="40.6214"
          width="113.641"
          height="123.773"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4.78481" />
          <feGaussianBlur stdDeviation="14.2348" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0638543 0 0 0 0 0.107262 0 0 0 0 0.158219 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1294_1209"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.78481" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.303625 0 0 0 0 0.328971 0 0 0 0 0.418831 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_1294_1209"
            result="effect2_innerShadow_1294_1209"
          />
        </filter>
        <radialGradient
          id="paint0_radial_1294_1209"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(101.5 25.534) rotate(90.1512) scale(189.427 188.494)"
        >
          <stop offset="0.348556" stopColor="#34374D" />
          <stop offset="1" stopColor="#04040C" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1294_1209"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(102.101 49.2644) rotate(89.5511) scale(147.001 146.277)"
        >
          <stop offset="0.390642" stopColor="#34374D" />
          <stop offset="1" stopColor="#060611" />
        </radialGradient>
      </defs>
    </svg>
  );

  const hoverSVG = (
    <svg
      width="238"
      height="239"
      viewBox="0 0 203 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5" filter="url(#filter0_b_1294_1240)">
        <circle
          cx="101.5"
          cy="101.5"
          r="101.5"
          fill="url(#paint0_radial_1294_1240)"
        />
        <circle
          cx="101.5"
          cy="101.5"
          r="100.902"
          stroke="#373945"
          strokeWidth="1.1962"
        />
      </g>
      <g opacity="0.5" filter="url(#filter1_b_1294_1240)">
        <circle
          cx="101.5"
          cy="102.5"
          r="81.5"
          fill="url(#paint1_radial_1294_1240)"
        />
        <circle
          cx="101.5"
          cy="102.5"
          r="80.9019"
          stroke="#373945"
          strokeWidth="1.1962"
        />
      </g>
      <g filter="url(#filter2_d_1294_1240)">
        <g filter="url(#filter3_ii_1294_1240)">
          <circle
            cx="102.101"
            cy="103.101"
            r="56.8196"
            fill="url(#paint2_radial_1294_1240)"
          />
        </g>
        <circle cx="102.101" cy="103.101" r="56.3196" stroke="#434653" />
        {svgPlayIcon}
      </g>
      <defs>
        <filter
          id="filter0_b_1294_1240"
          x="-21.8905"
          y="-21.8905"
          width="246.781"
          height="246.781"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10.9453" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1294_1240"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1294_1240"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_1294_1240"
          x="-1.8905"
          y="-0.890505"
          width="206.781"
          height="206.781"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10.9453" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_1294_1240"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1294_1240"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_1294_1240"
          x="33.0536"
          y="38.8462"
          width="137.908"
          height="137.901"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.78481" />
          <feGaussianBlur stdDeviation="5.98101" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0539047 0 0 0 0 0.068186 0 0 0 0 0.108236 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1294_1240"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1294_1240"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_ii_1294_1240"
          x="45.2812"
          y="41.4964"
          width="113.641"
          height="123.21"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4.78481" />
          <feGaussianBlur stdDeviation="14.2348" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0638543 0 0 0 0 0.107262 0 0 0 0 0.158219 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1294_1240"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4.78481" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.303625 0 0 0 0 0.328971 0 0 0 0 0.418831 0 0 0 0.3 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_1294_1240"
            result="effect2_innerShadow_1294_1240"
          />
        </filter>
        <radialGradient
          id="paint0_radial_1294_1240"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(101.5 6.85812) rotate(90.152) scale(234.75)"
        >
          <stop offset="0.348556" stopColor="#34374D" />
          <stop offset="1" stopColor="#04040C" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1294_1240"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(101.5 26.5068) rotate(90.152) scale(188.494)"
        >
          <stop offset="0.348556" stopColor="#34374D" />
          <stop offset="1" stopColor="#04040C" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1294_1240"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(102.101 50.1204) rotate(89.5489) scale(146.277)"
        >
          <stop offset="0.390642" stopColor="#34374D" />
          <stop offset="1" stopColor="#060611" />
        </radialGradient>
      </defs>
    </svg>
  );

  if (isHovering) {
    return <div>{hoverSVG}</div>;
  }

  return <div>{defaultSVG}</div>;
};
