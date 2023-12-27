import React from 'react'

const UserDashboard = () => {
    const wrapper = document.querySelector(".wrapper");
    const header = document.querySelector(".header");

    wrapper.addEventListener("scroll", (e) => {
        e.target.scrollTop > 30
            ? header.classList.add("header-shadow")
            : header.classList.remove("header-shadow");
    });

    const toggleButton = document.querySelector(".dark-light");

    toggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    const jobCards = document.querySelectorAll(".job-card");
    const logo = document.querySelector(".logo");
    const jobLogos = document.querySelector(".job-logos");
    const jobDetailTitle = document.querySelector(
        ".job-explain-content .job-card-title"
    );
    const jobBg = document.querySelector(".job-bg");

    jobCards.forEach((jobCard) => {
        jobCard.addEventListener("click", () => {
            const number = Math.floor(Math.random() * 10);
            const url = `https://unsplash.it/640/425?image=${number}`;
            jobBg.src = url;

            const logo = jobCard.querySelector("svg");
            const bg = logo.style.backgroundColor;
            console.log(bg);
            jobBg.style.background = bg;
            const title = jobCard.querySelector(".job-card-title");
            jobDetailTitle.textContent = title.textContent;
            jobLogos.innerHTML = logo.outerHTML;
            wrapper.classList.add("detail-page");
            wrapper.scrollTop = 0;
        });
    });

    logo.addEventListener("click", () => {
        wrapper.classList.remove("detail-page");
        wrapper.scrollTop = 0;
        jobBg.style.background = bg;
    });
    return (
        <div>
            <div className="joblists">
                <div className="container-fluid">
                    <div className="job">
                        <div className="header">
                            <div className="logo">
                                <img src="/Images/logo.png" alt="" />
                            </div>
                            <div className="user-settings"></div>
                            <img
                                className="user-profile"
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%283%29+%281%29.png"
                                alt=""
                            />
                            <div className="user-name">Profile</div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="search-menu">
                            <div className="search-bar">
                                <input type="text" className="search-box" autofocus="" />
                                <div className="search item">
                                    Product Designer
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-x"
                                    >
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </div>
                                <div className="search item">
                                    UI Designer
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={3}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-x"
                                    >
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                            <div className="search-location">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-map-pin"
                                >
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx={12} cy={10} r={3} />
                                </svg>
                                Londontowne, MD
                            </div>
                            <div className="search-job">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-briefcase"
                                >
                                    <rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
                                    <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                                </svg>
                                <input type="text" placeholder="Job Type" />
                            </div>
                            <div className="search-salary">
                                <svg
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth=".4"
                                >
                                    <path
                                        d="M12.6 18H9.8a.8.8 0 010-1.5h2.8a.9.9 0 000-1.8h-1.2a2.4 2.4 0 010-4.7h2.8a.8.8 0 010 1.5h-2.8a.9.9 0 000 1.8h1.2a2.4 2.4 0 010 4.7z"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M12 20a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8zM12 11.5a.8.8 0 01-.8-.8v-2a.8.8 0 011.6 0v2c0 .5-.4.8-.8.8z"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M21.3 23H2.6A2.8 2.8 0 010 20.2V3.9C0 2.1 1.2 1 2.8 1h18.4C22.9 1 24 2.2 24 3.8v16.4c0 1.6-1.2 2.8-2.8 2.8zM2.6 2.5c-.6 0-1.2.6-1.2 1.3v16.4c0 .7.6 1.3 1.3 1.3h18.4c.7 0 1.3-.6 1.3-1.3V3.9c0-.7-.6-1.3-1.3-1.3z"
                                        stroke="currentColor"
                                    />
                                    <path
                                        d="M23.3 6H.6a.8.8 0 010-1.5h22.6a.8.8 0 010 1.5z"
                                        stroke="currentColor"
                                    />
                                </svg>
                                <input type="text" placeholder="Salary Range" />
                            </div>
                            <button className="search-button">Find Job</button>
                        </div>
                        <div className="main-container jobsss">
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="search-type">
                                        <a href="" className="search-buttons card-buttons">
                                            Jobs
                                        </a>
                                        <a href="" className="search-buttons card-buttons">
                                            Job Search
                                        </a>
                                        <a href="" className="search-buttons card-buttons">
                                            Notification
                                        </a>
                                        <a href="" className="search-buttons card-buttons">
                                            My Profile
                                        </a>
                                        <a href="" className="search-buttons card-buttons">
                                            Logout
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-9">
                                    <div className="searched-jobs">
                                        <div className="searched-bar">
                                            <div className="searched-show">Showing 46 Jobs</div>
                                            <div className="searched-sort">
                                                Sort by: <span className="post-time">Newest Post </span>
                                                <span className="menu-icon">▼</span>
                                            </div>
                                        </div>
                                        <div className="job-cards">
                                            <div className="job-card">
                                                <div className="job-card-header">
                                                    <svg
                                                        viewBox="0 -13 512 512"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ backgroundColor: "#2e2882" }}
                                                    >
                                                        <g fill="#feb0a5">
                                                            <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
                                                            <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
                                                        </g>
                                                        <path
                                                            d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0"
                                                            fill="#feb0a5"
                                                        />
                                                    </svg>
                                                    <div className="menu-dot" />
                                                </div>
                                                <div className="job-card-title">UI / UX Designer</div>
                                                <div className="job-card-subtitle">
                                                    The User Experience Designer position exists to create
                                                    compelling and digital user experience through excellent
                                                    design...
                                                </div>
                                                <div className="job-detail-buttons">
                                                    <button className="search-buttons detail-button">
                                                        Full Time
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Min. 1 Year
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Senior Level
                                                    </button>
                                                </div>
                                                <div className="job-card-buttons">
                                                    <button className="search-buttons card-buttons">
                                                        Apply Now
                                                    </button>
                                                    <button className="search-buttons card-buttons-msg">
                                                        Messages
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="job-card">
                                                <div className="job-card-header">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 32 32"
                                                        style={{ backgroundColor: "#f76754" }}
                                                    >
                                                        <path
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            d="M0 .5h4.2v23H0z"
                                                            fill="#042b48"
                                                            data-original="#212121"
                                                        />
                                                        <path
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z"
                                                            fill="#fefefe"
                                                            data-original="#f4511e"
                                                        />
                                                    </svg>
                                                    <div className="menu-dot" />
                                                </div>
                                                <div className="job-card-title">Sr. Product Designer</div>
                                                <div className="job-card-subtitle">
                                                    The User Experience Designer position exists to create
                                                    compelling and digital user experience through excellent
                                                    design...
                                                </div>
                                                <div className="job-detail-buttons">
                                                    <button className="search-buttons detail-button">
                                                        Full Time
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Min. 1 Year
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Senior Level
                                                    </button>
                                                </div>
                                                <div className="job-card-buttons">
                                                    <button className="search-buttons card-buttons">
                                                        Apply Now
                                                    </button>
                                                    <button className="search-buttons card-buttons-msg">
                                                        Messages
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="job-card">
                                                <div className="job-card-header">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 512 512"
                                                        fill="#fff"
                                                        style={{ backgroundColor: "#55acee" }}
                                                    >
                                                        <path d="M512 97.2c-19 8.4-39.3 14-60.5 16.6 21.8-13 38.4-33.4 46.2-58a209.8 209.8 0 01-66.6 25.4A105 105 0 00249.5 153c0 8.3.8 16.3 2.5 24A297.1 297.1 0 0135.6 67 105.1 105.1 0 0068 207.4c-16.9-.3-33.4-5.2-47.4-12.9v1.1c0 51 36.4 93.4 84 103.2-8.5 2.3-17.8 3.4-27.4 3.4-6.8 0-13.5-.3-20-1.8a106 106 0 0098.2 73.2A211 211 0 010 416.9 295.5 295.5 0 00161 464c193.2 0 298.8-160 298.8-298.7 0-4.6-.2-9.1-.4-13.6A209.4 209.4 0 00512 97.2z" />
                                                    </svg>
                                                    <div className="menu-dot" />
                                                </div>
                                                <div className="job-card-title">User Experience Designer</div>
                                                <div className="job-card-subtitle">
                                                    The User Experience Designer position exists to create
                                                    compelling and digital user experience through excellent
                                                    design...
                                                </div>
                                                <div className="job-detail-buttons">
                                                    <button className="search-buttons detail-button">
                                                        Full Time
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Min. 1 Year
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Senior Level
                                                    </button>
                                                </div>
                                                <div className="job-card-buttons">
                                                    <button className="search-buttons card-buttons">
                                                        Apply Now
                                                    </button>
                                                    <button className="search-buttons card-buttons-msg">
                                                        Messages
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="job-card">
                                                <div className="job-card-header">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="#fff"
                                                        style={{ backgroundColor: "#1e1f26" }}
                                                    >
                                                        <path d="M24 7.6c0-.3 0-.5-.4-.6C12.2.2 12.4-.3 11.6 0 3 5.5.6 6.7.2 7.1c-.3.3-.2.8-.2 8.3 0 .9 7.7 5.5 11.5 8.4.4.3.8.2 1 0 11.2-8 11.5-7.6 11.5-8.4V7.6zm-1.5 6.5l-3.9-2.4L22.5 9zm-5.3-3.2l-4.5-2.7V2L22 7.6zM12 14.5l-3.9-2.7L12 9.5l3.9 2.3zm-.8-12.4v6L6.8 11 2.1 7.6zm-5.8 9.6l-3.9 2.4V9zm1.3 1l4.5 3.1v6l-9-6.3zm6 9.1v-6l4.6-3.1 4.6 2.8z" />
                                                    </svg>
                                                    <div className="menu-dot" />
                                                </div>
                                                <div className="job-card-title">Product Designer</div>
                                                <div className="job-card-subtitle">
                                                    The User Experience Designer position exists to create
                                                    compelling and digital user experience through excellent
                                                    design...
                                                </div>
                                                <div className="job-detail-buttons">
                                                    <button className="search-buttons detail-button">
                                                        Full Time
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Min. 1 Year
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Senior Level
                                                    </button>
                                                </div>
                                                <div className="job-card-buttons">
                                                    <button className="search-buttons card-buttons">
                                                        Apply Now
                                                    </button>
                                                    <button className="search-buttons card-buttons-msg">
                                                        Messages
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="job-card">
                                                <div className="job-card-header">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ backgroundColor: "#ffe80f" }}
                                                    >
                                                        <path d="M9.5 9.3l-.7 2h1.4z" />
                                                        <path d="M12 1C5.4 1 0 5.2 0 10.4c0 3.4 2.2 6.3 5.6 8-1.3 4.4-1.3 4.4-1 4.6.2.1.5 0 5.3-3.4l2.1.2c6.6 0 12-4.2 12-9.4S18.6 1 12 1zM6 13c0 .4-.3.7-.6.7s-.7-.3-.7-.7V9H3.6c-.4 0-.7-.4-.7-.7s.3-.7.7-.7H7c.4 0 .7.3.7.7s-.3.6-.7.6h-1zm5.4.7c-.7 0-.6-.6-.9-1.2h-2c-.4.6-.3 1.2-1 1.2s-.8-.4-.6-1.1l1.6-4.3a1 1 0 011-.7c.4 0 .8.3.9.7 1 3.4 2.6 5.4 1 5.4zm4-.1h-2.2c-1.2 0-.5-1.6-.7-5.3 0-.4.3-.7.7-.7s.7.3.7.7v4h1.5c.3 0 .6.3.6.6 0 .4-.3.7-.6.7zm5.4-.5l-.3.4c-1 .7-1.6-1.4-2.6-2.3l-.2.3V13c0 .4-.3.7-.7.7a.7.7 0 01-.7-.7V8.3a.7.7 0 011.4 0v1.5c1.3-1 2-2.7 2.8-2 .8.9-.9 1.6-1.5 2.5 1.6 2.2 1.9 2.3 1.8 2.8z" />
                                                    </svg>
                                                    <div className="menu-dot" />
                                                </div>
                                                <div className="job-card-title">UI / UX Designer</div>
                                                <div className="job-card-subtitle">
                                                    The User Experience Designer position exists to create
                                                    compelling and digital user experience through excellent
                                                    design...
                                                </div>
                                                <div className="job-detail-buttons">
                                                    <button className="search-buttons detail-button">
                                                        Full Time
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Min. 1 Year
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Senior Level
                                                    </button>
                                                </div>
                                                <div className="job-card-buttons">
                                                    <button className="search-buttons card-buttons">
                                                        Apply Now
                                                    </button>
                                                    <button className="search-buttons card-buttons-msg">
                                                        Messages
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="job-card">
                                                <div className="job-card-header">
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style={{ backgroundColor: "#fe5b5f" }}
                                                    >
                                                        <path
                                                            d="M12 20.6c-1.4 1.5-3.1 3-5.1 3.3-2 .8-5.9-1.3-5.9-5 0-2.5 3.2-8 6.6-15.1C8.5 1.9 9.4 0 12 0c2.6 0 3.5 1.8 4.6 4C23 17 23 17.7 23 19c0 4.4-5.5 8-11 1.7zm9.5-1.7c0-2-6.4-14.4-6.5-14.5-.9-1.9-1.4-2.9-3-2.9-1.8 0-2.3 1.5-3.2 3.2C2.5 17.2 2.5 18 2.5 19c0 3 3.7 6 8.5.6-2-2.6-3-4.8-3-6.6 0-2.7 2-4.2 4-4.2s4 1.5 4 4.2c0 1.8-1 4-3 6.6 4.6 5.2 8.5 2.5 8.5-.6zM12 10.2c-1.2 0-2.5.9-2.5 2.7 0 1.4.9 3.3 2.5 5.4 1.6-2.1 2.5-4 2.5-5.4 0-1.8-1.3-2.7-2.5-2.7z"
                                                            fill="#fff"
                                                        />
                                                    </svg>
                                                    <div className="menu-dot" />
                                                </div>
                                                <div className="job-card-title">UI Developer</div>
                                                <div className="job-card-subtitle">
                                                    The User Experience Designer position exists to create
                                                    compelling and digital user experience through excellent
                                                    design...
                                                </div>
                                                <div className="job-detail-buttons">
                                                    <button className="search-buttons detail-button">
                                                        Full Time
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Min. 1 Year
                                                    </button>
                                                    <button className="search-buttons detail-button">
                                                        Senior Level
                                                    </button>
                                                </div>
                                                <div className="job-card-buttons">
                                                    <button className="search-buttons card-buttons">
                                                        Apply Now
                                                    </button>
                                                    <button className="search-buttons card-buttons-msg">
                                                        Messages
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default UserDashboard;