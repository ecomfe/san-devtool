/* eslint-disable */
const FILL_DEAFULT_COLOR = '#999999';
const PATH_START_RECORD = [
    {
        d: 'M7,6.80565456 L7,17.1902956 C7,18.5949517 8.37490605,19.4628942 9.4555822,18.7390976 L17.2128021,13.5483106 C17.7011318,13.2219791 18,12.6336685 18,11.9987418 C18,11.3638151 17.7011318,10.7755045 17.2128021,10.449173 L9.4555822,5.25685252 C8.95484813,4.92259037 8.33173552,4.91402171 7.8237645,5.23441275 C7.31579349,5.5548038 7.00123749,6.15478539 7,6.80565456',
        fill: FILL_DEAFULT_COLOR,
        transform: ''
    }
];
const PATH_STOP_RECORD = [
    {
        d: 'M7.5,6 L16.5,6 C17.328125,6 18,6.671875 18,7.5 L18,16.5 C18,17.328125 17.328125,18 16.5,18 L7.5,18 C6.671875,18 6,17.328125 6,16.5 L6,7.5 C6,6.671875 6.671875,6 7.5,6 Z',
        fill: 'red',
        transform: ''
    }
];
const PATH_CLEAR = [
    {
        d: 'M7.00001599,0 C3.13399858,0 0,3.13401458 0,7 C0,10.8659854 3.13398259,14 7,14 C10.8659854,14 14,10.8659854 14,7 C14,3.13401459 10.8660014,0 7.00001599,0 Z M10.7639117,9.83576099 C11.0202639,10.0918892 11.0202639,10.5076075 10.7639117,10.7637357 C10.6357436,10.8919038 10.467834,10.9560119 10.2999244,10.9560119 C10.1320147,10.9560119 9.96410508,10.8919038 9.83593699,10.7637357 L7.000096,7.92789473 L4.164239,10.7637517 C4.03607091,10.8919198 3.86816126,10.9560119 3.70025163,10.9560119 C3.53234199,10.9560119 3.36443236,10.8919198 3.23626427,10.7637517 C2.97991209,10.5076235 2.97991209,10.0919052 3.23626427,9.835777 L6.07210526,6.99992 L3.23626427,4.16407901 C2.97991209,3.90795081 2.97991209,3.49223247 3.23626427,3.23610428 C3.49261644,2.9797521 3.90790282,2.9797521 4.164239,3.23610428 L7.000096,6.07194527 L9.83593699,3.23610428 C10.0922892,2.9797521 10.5075595,2.9797521 10.7639117,3.23610428 C11.0202639,3.49223247 11.0202639,3.90795081 10.7639117,4.16407901 L7.92807073,6.99992 L10.7639117,9.83576099 Z',
        fill: FILL_DEAFULT_COLOR,
        transform: 'translate(5.000000, 5.000000)'
    }
];

const PATH_EYE = [
    {
        d: 'M17.3250121,4.4199493 C15.2979575,1.71372855 12.3226711,0 9,0 C5.67668555,0 2.71426529,1.71372855 0.674987938,4.4199493 C-0.224995979,5.61334828 -0.224995979,7.38601794 0.674987938,8.5800507 C2.71426529,11.2862715 5.68890835,13 8.99935669,13 C12.3226711,13 15.2857347,11.2862715 17.3250121,8.5800507 C18.224996,7.38665172 18.224996,5.61398206 17.3250121,4.4199493 Z M9.00257322,10.7386895 C6.69423245,10.7362444 4.82357159,8.89329519 4.82108969,6.61914977 C4.82108969,4.34769891 6.69696753,2.49960998 9.00257322,2.49960998 C11.3081789,2.49960998 13.1840568,4.34769891 13.1840568,6.61914977 C13.1840568,8.8912344 11.3081789,10.7386895 9.00257322,10.7386895 Z M9.00257322,3.76716069 C7.40407306,3.76786014 6.10840998,5.0443295 6.10770001,6.61914977 C6.10770001,8.19408151 7.40460321,9.47113885 9.00257322,9.47113885 C10.6005432,9.47113885 11.8974464,8.19408151 11.8974464,6.61914977 C11.8974464,5.04548557 10.6005432,3.76716069 9.00257322,3.76716069 Z',
        fill: FILL_DEAFULT_COLOR,
        transform: 'translate(3.000000, 5.000000)'
    }
];

const PATH_TIP = [
    {
        d: 'M5.98660714,0.0131703884 C9.2806114,0.0131703884 11.9600439,2.69260287 11.9600439,5.98660714 C11.9600439,9.28061142 9.2806114,11.9600439 5.98660714,11.9600439 C2.69304062,11.9600439 0.0131703884,9.28061142 0.0131703884,5.98660714 C0.0131703884,2.69304062 2.69301757,0.0131703884 5.98660714,0.0131703884 Z M5.98660714,0.870313246 C3.16532736,0.870313246 0.870313246,3.16530431 0.870313246,5.98660714 C0.870313246,8.80747223 3.16530431,11.102901 5.98660714,11.102901 C8.80747223,11.102901 11.102901,8.80790997 11.102901,5.98660714 C11.102901,3.16530431 8.80747223,0.870313246 5.98660714,0.870313246 Z M5.98660714,4.70088134 C6.22318824,4.70088134 6.41519009,4.89288319 6.41519009,5.12946429 L6.41519009,8.98659562 C6.41519009,9.22361446 6.22318824,9.41517857 5.98660714,9.41517857 C5.75002604,9.41517857 5.5580242,9.22361446 5.5580242,8.98659562 L5.5580242,5.12946429 C5.5580242,4.89288319 5.75002604,4.70088134 5.98660714,4.70088134 Z M5.98660714,2.55803571 C6.34165158,2.55803571 6.62947004,2.84585417 6.62947004,3.20089862 C6.62947004,3.55594306 6.34165158,3.84376152 5.98660714,3.84376152 C5.6315627,3.84376152 5.34374424,3.55594306 5.34374424,3.20089862 C5.34374424,2.84585417 5.6315627,2.55803571 5.98660714,2.55803571 Z',
        fill: FILL_DEAFULT_COLOR,
        transform: 'translate(6.000000, 6.000000)'
    }
];

const PATH_FLAME = [
    {
        d: 'M920.33051 588.137106a418.587986 418.587986 0 0 0-28.663398-133.873426c-6.423672-12.361091-12.207537-25.080474-17.377185-38.158149A417.948178 417.948178 0 0 1 844.577243 261.476733c0-32.962908 4.19714-64.876531 11.36299-95.612907 1.43317-6.142157 2.968709-12.284314 4.657802-18.349694a248.501427 248.501427 0 0 0-17.095669 15.3298 259.12224 259.12224 0 0 0-71.351388 125.811845c-2.328901 9.673897-4.171548 19.552532-5.374388 29.635907-0.3327 4.504248-0.639808 9.008497-1.151654 13.487152-12.770568 108.511437-85.683087 198.084557-183.957596 234.016175A390.180511 390.180511 0 0 0 665.431003 323.691663c0-36.264317-5.272018-71.223427-14.459661-104.544627a387.135025 387.135025 0 0 0-13.435968-40.512642 390.078141 390.078141 0 0 0-83.686886-128.959701A392.535004 392.535004 0 0 0 512.977553 13.973407c-6.116564-4.708987-12.156352-9.469158-18.554432-13.768668 1.330801 4.248325 2.20094 8.675796 3.352594 13.000898 5.39998 19.834048 9.545935 40.15435 11.798059 61.140053 1.458762 13.79426 2.303309 27.767667 2.303309 41.945812 0 26.795159-2.712786 52.924918-7.780065 78.184538a387.544502 387.544502 0 0 1-48.830147 124.301898c-4.708987 7.754473-9.545935 15.406577-14.741176 22.777165a387.288579 387.288579 0 0 1-105.491543 101.883026 399.240192 399.240192 0 0 1-2.303309-41.971405c0-52.848141-10.492851-103.188234-29.379983-149.100856a389.054449 389.054449 0 0 0-59.297406-99.349387c-4.939318-6.039788-10.288113-11.670098-15.56013-17.377185 1.177247 12.412275 1.868239 24.978104 1.868239 37.697487 0 2.303309-0.307108 4.555433-0.358292 6.858742a391.306573 391.306573 0 0 1-53.692688 191.353777c-4.939318 8.368689-9.981005 16.635008-15.483353 24.594219A414.851507 414.851507 0 0 0 115.963893 504.578181 419.304571 419.304571 0 0 0 102.399963 608.866885c0 20.832148 1.996201 41.075674 4.913726 61.063276 3.86444 26.334497 10.083374 51.875633 18.580024 76.367483C181.915301 907.75959 333.319466 1023.667208 511.877083 1023.667208c96.585416 0 185.21162-34.063378 255.2578-90.775959a414.928284 414.928284 0 0 0 131.621302-189.076061A417.922586 417.922586 0 0 0 921.354203 608.866885c0-6.986703-0.690993-13.819853-1.023693-20.729779z',
        fill: FILL_DEAFULT_COLOR,
        transform: 'translate(3.5, 3.5) scale(0.016)'
    }
]

const ICONS = {
    'start-record': PATH_START_RECORD,
    'stop-record': PATH_STOP_RECORD,
    'tip': PATH_TIP,
    'clear': PATH_CLEAR,
    'eye': PATH_EYE,
    'flame': PATH_FLAME
};

export default ICONS;
