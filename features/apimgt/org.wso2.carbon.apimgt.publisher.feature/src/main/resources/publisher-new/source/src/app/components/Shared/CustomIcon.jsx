import React from 'react';
/**
 * Render the APIs Listing page, This is the Default Publisher Landing page as well
 *
 * @class CustomIcon
 * @extends {React.Component}
 */
export default function CustomIcon(props) {
    const strokeColor = props.strokeColor !== undefined ? props.strokeColor : '#8b8e95';
    const width = props.width !== undefined ? props.width : 32;
    const height = props.height !== undefined ? props.height : 32;
    const icon = props.icon !== undefined ? props.icon : 'api';
    const className = props.className !== undefined ? props.className : '';
    if (icon === 'overview') {
        return (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={width}
                height={height}
                viewBox='0 0 8.5272856 8.5114363'
                id='svg8'
                className={className}
            >
                <g id='layer2' transform='translate(79.857 -62.367)'>
                    <g
                        id='g5726'
                        transform='matrix(.9999 0 0 1.00321 -86.091 38.578)'
                        fill='none'
                        stroke={strokeColor}
                        strokeLinejoin='round'
                    >
                        <path
                            id='path5717'
                            transform='scale(.26458)'
                            d={
                                'm 29.705078,90.623047 c -2.846282,0 -5.138672,2.290437 -5.138672,5.136719 V' +
                                ' 111.5293 c 0,2.84628 2.29239,5.13867 5.138672,5.13867 h 17.177734 l -4.591796,' +
                                '-4.74219 a 8.7230968,9.0089885 0 0 1 -10.539063,-1.41406 8.7230968,9.0089885 0 0 1' +
                                ' 0,-12.740236 8.7230968,9.0089885 0 0 1 6.296875,-2.638672 8.7230968,9.0089885 0 0' +
                                ' 1 6.041016,2.638672 8.7230968,9.0089885 0 0 1 0,12.740236 8.7230968,9.0089885 0 0 ' +
                                '1 -0.609375,0.5664 6.2078361,6.4112926 0 0 0 1.089843,-0.88671 6.2078361,6.4112926 0' +
                                ' 0 0 1.50586,-2.53125 l 7.242187,7.47851 c 0.914205,-0.92665 1.480469,-2.19879' +
                                ' 1.480469,-3.60937 V 95.759766 c 0,-2.846282 -2.29239,-5.136719 -5.138672,-5.136719 z'
                            }
                            strokeWidth='2'
                        />
                        <g transform='scale(.88683 .9159) rotate(-45 -45.67 5.272)' id='g5724' strokeWidth='0.539'>
                            <circle id='circle5720' cx='-22.921' cy='63.11' r='2.603' />
                            <path
                                d={
                                    'm -89.15625,247.73828 v 13.91602 h 6.3125 V 247.74609 A 7,7 0 0 1 -86,248.5 a' +
                                    ' 7,7 0 0 1 -3.15625,-0.76172 z'
                                }
                                transform='scale(.26458)'
                                id='path5722'
                                strokeWidth='2.039'
                            />
                        </g>
                    </g>
                </g>
            </svg>
        );
    } else if (icon === 'api') {
        return (
            <svg
                xmlns='http://www.w3.org/2000/svg'
                width={width}
                height={height}
                viewBox='0 0 8.4666662 8.466666'
                id='svg8'
                className={className}
            >
                <g id='layer2' transform='translate(82.262 -41.963)'>
                    <g
                        id='g5764'
                        transform='matrix(.83117 0 0 .83117 193.242 4.456)'
                        fill={strokeColor}
                        fillOpacity='0.933'
                    >
                        <path
                            id='path5728'
                            d={
                                'm -326.92369,45.126027 c -0.0789,0 -0.14264,0.06373 -0.14264,0.142626 v 1.111562 a' +
                                ' 3.9026041,3.9026041 0 0 0 -1.52651,0.635619 l -0.78859,-0.788582 c -0.0558,' +
                                '-0.05579 -0.14576,-0.05579 -0.20154,0 l -0.78084,0.78083 c -0.0558,0.05579 -0.0558,' +
                                '0.145751 0,0.201538 l 0.786,0.785998 a 3.9026041,3.9026041 0 0 0 -0.63098,1.529107' +
                                ' h -1.1136 c -0.0789,0 -0.14264,0.06373 -0.14264,0.142626 v 1.10381 c 0,0.07889 ' +
                                '0.0637,0.142626 0.14264,0.142626 h 1.11154 a 3.9026041,3.9026041 0 0 0 0.63564,' +
                                '1.526522 l -0.7886,0.788582 c -0.0558,0.05579 -0.0558,0.145751 0,0.201539 l ' +
                                '0.78084,0.78083 c 0.0558,0.05579 0.14576,0.05579 0.20154,0 l 0.78599,-0.785998 a ' +
                                '3.9026041,3.9026041 0 0 0 1.52911,0.630968 v 1.113629 c 0,0.07889 0.0637,0.142626 ' +
                                '0.14264,0.142626 h 1.10379 c 0.0789,0 0.14263,-0.06373 0.14263,-0.142626 v -1.11156' +
                                ' a 3.9026041,3.9026041 0 0 0 1.52652,-0.635622 l 0.78859,0.788583 c 0.0558,0.05579 ' +
                                '0.14576,0.05579 0.20153,0 l 0.78084,-0.78083 c 0.0558,-0.05579 0.0558,-0.145751 0,' +
                                '-0.201539 l -0.786,-0.785997 a 3.9026041,3.9026041 0 0 0 0.63098,-1.529107 h 1.1136 ' +
                                'c 0.0789,0 0.14264,-0.06373 0.14264,-0.142626 v -1.10381 c 0,-0.07889 -0.0637,' +
                                '-0.142626 -0.14264,-0.142626 h -1.11154 a 3.9026041,3.9026041 0 0 0 -0.63563,' +
                                '-1.526522 l 0.78859,-0.788583 c 0.0558,-0.05579 0.0558,-0.145751 0,-0.201538 l ' +
                                '-0.78084,-0.78083 c -0.0558,-0.05579 -0.14576,-0.05579 -0.20153,0 l -0.786,0.785997' +
                                ' a 3.9026041,3.9026041 0 0 0 -1.52911,-0.630967 v -1.113629 c 0,-0.07889 -0.0637,' +
                                '-0.142626 -0.14263,-0.142626 z m 0.55189,2.081527 a 3.0119976,3.0119976 0 0 1 3.012' +
                                '23,3.011702 3.0119976,3.0119976 0 0 1 -3.01223,3.01222 3.0119976,3.0119976 0 0 1 -3.' +
                                '01223,-3.01222 3.0119976,3.0119976 0 0 1 3.01223,-3.011702 z'
                            }
                            strokeWidth='0.937'
                            strokeLinejoin='round'
                        />
                        <g transform='matrix(.01024 0 0 .01024 -328.341 48.178)' id='g5762'>
                            <path
                                d={
                                    'm 364.427,259.214 c -14.051,-14.052 -32.733,-21.79 -52.605,-21.79 -10.619,0' +
                                    ' -20.888,2.23 -30.302,6.431 -1.076,-1.701 -2.341,-3.298 -3.799,-4.756 l -54' +
                                    '.188,-54.188 95.825,-95.825 c 2.645,2.529 5.363,3.085 7.197,3.085 4.06,0 6.8,-' +
                                    '2.535 7.308,-3.042 L 356.06,66.932 c 3.771,-3.771 5.563,-7.434 5.477,-11.197 ' +
                                    '-0.135,-5.897 -4.599,-9.968 -9.767,-14.683 -1.53,-1.395 -3.111,-2.838 -4.7,-4' +
                                    '.426 -1.588,-1.588 -3.03,-3.169 -4.426,-4.699 -4.782,-5.243 -8.912,-9.771 -14' +
                                    '.939,-9.771 -3.676,0 -7.255,1.793 -10.941,5.48 l -22.281,22.281 c -2.746,2.746' +
                                    ' -5.103,9.066 0.122,14.426 l -95.821,95.821 -56.131,-56.131 c 4.012,-9.232 6.13' +
                                    '7,-19.269 6.137,-29.638 0,-19.872 -7.739,-38.555 -21.791,-52.607 C 112.95,7.' +
                                    '737 94.27,0 74.4,0 67.768,0 61.168,0.881 54.785,2.62 c -2.513,0.684 -4.569,2.' +
                                    '752 -5.238,5.268 -0.683,2.565 0.096,5.206 2.121,7.232 0.266,0.267 26.668,26.873' +
                                    ' 35.46,35.665 1.31,1.31 1.193,4.015 1.058,4.81 l -0.069,0.489 c -1.005,10.964 -' +
                                    '3.034,24.215 -4.565,27.493 -3.303,1.581 -16.767,3.637 -27.911,4.633 l -0.149,-' +
                                    '0.013 -0.302,0.072 c -0.082,0.009 -0.26,0.024 -0.508,0.024 -1.253,0 -3.096,-0.' +
                                    '349 -4.758,-2.011 C 40.773,77.13 15.387,51.932 15.145,51.692 13.085,49.632 10.' +
                                    '998,49.2 9.609,49.2 6.384,49.2 3.497,51.549 2.587,54.913 -4.357,80.592 3,108.' +
                                    '214 21.786,127 c 14.051,14.051 32.733,21.79 52.606,21.79 10.369,0 20.407,-2.126' +
                                    ' 29.639,-6.137 l 56.131,56.131 -22.013,22.013 c -3.536,-1.853 -7.497,-2.839 -' +
                                    '11.618,-2.839 -6.693,0 -12.972,2.592 -17.678,7.298 l -12.282,12.283 c -1.175' +
                                    ',-0.166 -2.369,-0.254 -3.578,-0.254 -6.692,0 -12.971,2.592 -17.677,7.298 l -' +
                                    '64.351,64.35 c -4.707,4.706 -7.299,10.984 -7.299,17.678 0,6.693 2.592,12.971 7.' +
                                    '299,17.678 l 28.44,28.44 c 4.706,4.706 10.984,7.298 17.678,7.298 6.692,0 12.971' +
                                    ',-2.592 17.677,-7.298 l 64.35,-64.35 c 4.707,-4.706 7.299,-10.984 7.299,-17.' +
                                    '678 0,-1.209 -0.087,-2.404 -0.254,-3.579 l 12.282,-12.282 c 4.707,-4.707 7.299,' +
                                    '-10.984 7.299,-17.678 0,-4.121 -0.986,-8.082 -2.839,-11.618 l 22.013,-22.013 54' +
                                    '.188,54.188 c 1.458,1.457 3.055,2.723 4.755,3.798 -4.201,9.414 -6.431,19.684 -6' +
                                    '.431,30.302 0,19.873 7.739,38.555 21.791,52.607 14.048,14.048 32.729,21.785 52.' +
                                    '6,21.786 0.001,0 0.001,0 0.003,0 6.63,0 13.23,-0.882 19.614,-2.62 2.513,-0.684 ' +
                                    '4.568,-2.752 5.236,-5.268 0.682,-2.565 -0.097,-5.206 -2.122,-7.23 -0.266,-0.' +
                                    '267 -26.667,-26.874 -35.459,-35.666 -1.31,-1.31 -1.193,-4.015 -1.058,-4.811 l' +
                                    ' 0.069,-0.489 c 1.005,-10.964 3.034,-24.214 4.565,-27.493 3.303,-1.581 16.767' +
                                    ',-3.637 27.911,-4.633 l 0.149,0.013 0.301,-0.072 c 0.083,-0.009 0.261,-0.024 0.' +
                                    '508,-0.024 1.253,0 3.097,0.349 4.76,2.012 9.15,9.151 34.536,34.349 34.778,34.' +
                                    '589 2.06,2.06 4.147,2.493 5.536,2.493 3.225,0 6.112,-2.349 7.023,-5.713 6.945,-2' +
                                    '5.677 -0.413,-53.299 -19.2,-72.086 z m -278.221,70.499 -7.226,7.226 c -7.778,7.' +
                                    '778 -20.506,7.778 -28.284,0 l -3.94,-3.941 c -7.778,-7.778 -7.778,-20.506 0,-28.' +
                                    '284 l 7.226,-7.226 c 7.778,-7.778 20.506,-7.778 28.284,0 l 3.941,3.941 c 7.777,7' +
                                    '.778 7.777,20.506 -10e-4,28.284 z m 159.465,-84.042 c -1.465,1.464 -3.385,2.197 ' +
                                    '-5.304,2.197 -1.92,0 -3.839,-0.732 -5.304,-2.197 l -88.414,-88.414 c -2.929,-2' +
                                    '.929 -2.929,-7.678 0,-10.607 2.931,-2.93 7.679,-2.929 10.607,0 l 27.519,27.519 ' +
                                    'v 0 l 24.749,24.749 v 0 l 36.146,36.147 c 2.93,2.929 2.93,7.678 0.001,10.606 z'
                                }
                                id='path5730'
                            />
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
}
