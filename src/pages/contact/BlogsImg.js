import React from "react";

export default function BlogsImg({ theme }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="940"
      height="620"
      viewBox="0 0 940 620"
      role="img"
      aria-label="Ghibli inspired portrait illustration"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={theme.body} />
          <stop offset="100%" stopColor={theme.highlight} />
        </linearGradient>
        <linearGradient id="hill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={theme.compImgHighlight} />
          <stop offset="100%" stopColor={theme.imageHighlight} />
        </linearGradient>
        <linearGradient id="coat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3f4ea2" />
          <stop offset="100%" stopColor="#28356f" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="940" height="620" fill="url(#sky)" />

      <circle cx="730" cy="96" r="48" fill="#f7efcf" opacity="0.85" />

      <path
        d="M0 415 C150 360, 275 380, 430 410 C560 436, 720 420, 940 360 L940 620 L0 620 Z"
        fill="url(#hill)"
        opacity="0.9"
      />
      <path
        d="M0 470 C190 425, 350 438, 500 468 C680 505, 790 492, 940 448 L940 620 L0 620 Z"
        fill={theme.dark}
        opacity="0.16"
      />

      <g transform="translate(310 182)">
        <path
          d="M0 200 C40 120, 144 90, 220 118 C286 140, 320 210, 304 274 C286 342, 214 388, 137 382 C55 376, -8 304, 0 200 Z"
          fill="#1f2d5c"
          opacity="0.22"
        />

        <ellipse cx="153" cy="168" rx="54" ry="62" fill="#c78d82" />
        <path
          d="M102 156 C86 112, 102 74, 140 62 C182 48, 226 76, 223 122 C220 154, 193 172, 160 172 C138 172, 115 166, 102 156 Z"
          fill="#2d3252"
        />
        <path
          d="M108 160 C120 136, 144 126, 165 126 C188 126, 210 139, 216 158 C206 172, 188 182, 163 182 C138 182, 119 174, 108 160 Z"
          fill="#36406b"
          opacity="0.72"
        />

        <path
          d="M56 244 C82 192, 234 192, 262 244 L279 342 C244 370, 190 385, 159 386 C122 387, 73 374, 41 342 Z"
          fill="url(#coat)"
        />
        <path
          d="M128 252 C145 236, 175 236, 194 252 L190 372 C173 378, 148 378, 133 372 Z"
          fill="#8c96b5"
          opacity="0.9"
        />

        <path
          d="M77 326 C112 324, 190 328, 234 332 C232 356, 226 374, 219 391 C169 402, 124 401, 83 392 C74 376, 71 354, 77 326 Z"
          fill="#304285"
          opacity="0.5"
        />
      </g>

      <g fill={theme.text} opacity="0.38">
        <circle cx="130" cy="130" r="2" />
        <circle cx="176" cy="150" r="1.8" />
        <circle cx="220" cy="108" r="2" />
        <circle cx="260" cy="142" r="1.6" />
        <circle cx="292" cy="118" r="1.9" />
        <circle cx="332" cy="154" r="1.8" />
        <circle cx="370" cy="127" r="1.7" />
        <circle cx="410" cy="147" r="1.9" />
      </g>
    </svg>
  );
}
