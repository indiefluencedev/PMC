import { Link } from 'react-router-dom';
import data from '../../Data/service.json';

const Services2 = () => {
    return (
        <section>
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="container">
            <div className="row cs_gap_y_30">
            {data.map((item, i) => (
                <div key={i} className="col-lg-4 col-md-6">
                <div className="cs_service_card cs_style_1 text-center">
                    <div className="cs_service_card_in">
                    <p className="cs_service_card_number cs_center cs_fs_48 cs_bold cs_mb_22">{item.id}</p>
                    <h3 className="cs_service_card_title cs_fs_24 cs_semibold cs_mb_15">{item.title}</h3>
                    <p className="cs_service_card_subtitle cs_mb_15">{item.desc}</p>
                    <Link to={item.link} className="cs_text_btn cs_fs_14 text-uppercase cs_heading_color cs_bold"> 
                        READ MORE
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z" fill="currentColor"/>
                        </svg>                    
                    </Link>
                    <div className="cs_service_card_icon cs_center"><img src={item.img} alt="" /></div>
                    </div>
                    <div className="cs_service_card_bg">
                    <svg width="487" height="485" viewBox="0 0 487 485" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_6144_35471)">
                        <path d="M106.5 96.5L159.525 41.5287C160.468 40.5518 161.767 40 163.124 40H310.906C312.245 40 313.529 40.5377 314.469 41.4926L375.5 103.5L435.35 157.511C436.4 158.459 437 159.808 437 161.223V308.815C437 310.208 436.419 311.538 435.396 312.484L376.5 367L314.432 423.692C313.511 424.533 312.308 425 311.06 425H243.5H163.124C161.767 425 160.468 424.448 159.525 423.471L106.5 368.5L51.4336 312.459C50.5148 311.524 50 310.265 50 308.955V155.071C50 153.745 50.5268 152.473 51.4645 151.536L106.5 96.5Z" fill="white"/>
                        </g>
                        <g filter="url(#filter1_d_6144_3547a)">
                        <path d="M121.367 111.337L121.373 111.331L121.38 111.324L168.772 62.2221C169.526 61.4411 170.565 61 171.65 61H303.723C304.795 61 305.821 61.4299 306.573 62.1933L361.144 117.604L361.165 117.625L361.187 117.645L414.679 165.89C415.52 166.648 416 167.728 416 168.86V300.658C416 301.773 415.535 302.837 414.716 303.595L362.079 352.287L362.074 352.292L306.574 402.954C305.837 403.627 304.876 404 303.878 404H243.5H171.65C170.565 404 169.526 403.559 168.772 402.778L121.38 353.676L121.373 353.669L72.1477 303.602C71.4122 302.854 71 301.847 71 300.798V163.332C71 162.27 71.4218 161.253 72.1724 160.502L121.367 111.337Z" stroke="currentColor" strokeWidth="2" shapeRendering="crispEdges"/>
                        </g>
                        <g filter="url(#filter2_d_6144_3547q)">
                        <path d="M66 358.001H417V375.001C417 402.615 394.614 425.001 367 425.001H116C88.3858 425.001 66 402.615 66 375.001V358.001Z" fill="white"/>
                        </g>
                        <path d="M403 342.501L413.612 332.268C414.882 331.044 417 331.944 417 333.708V358.001H386L403 342.501Z" fill="#ECF1F5"/>
                        <path d="M80.5 342.001L69.8593 330.98C68.6209 329.698 66.45 330.554 66.4207 332.337L66 358.001H97L80.5 342.001Z" fill="#ECF1F5"/>
                        <path d="M311 40.001C312.105 40.001 313.002 40.8968 312.981 42.0011C312.545 64.8809 304.645 86.7148 290.887 102.933C276.728 119.624 257.524 129.001 237.5 129.001C217.476 129.001 198.272 119.624 184.113 102.933C170.355 86.7148 162.455 64.8809 162.019 42.0011C161.998 40.8968 162.895 40.001 164 40.001L311 40.001Z" fill="currentColor"/>
                        <defs>
                        <filter id="filter0_d_6144_35471" x="0" y="0" width="487" height="485" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="10"/>
                        <feGaussianBlur stdDeviation="25"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6144_3547"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6144_3547" result="shape"/>
                        </filter>
                        <filter id="filter1_d_6144_3547a" x="20" y="20" width="447" height="445" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="10"/>
                        <feGaussianBlur stdDeviation="25"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6144_3547"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6144_3547" result="shape"/>
                        </filter>
                        <filter id="filter2_d_6144_3547q" x="16" y="318.001" width="451" height="167" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="10"/>
                        <feGaussianBlur stdDeviation="25"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6144_3547"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6144_3547" result="shape"/>
                        </filter>
                        </defs>
                    </svg>    
                    </div>
                </div>
                </div>
                ))}
            </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
      </section>  
    );
};

export default Services2;