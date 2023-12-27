import React from 'react'

const PostDashboard = () => {

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




            <div className="create-account-area pt-50 pb-50">
                <div className="container">
                    <div className="create-photo">
                        <div className="already-create text-center">
                            <img src="/Images/logo.png" alt="" />
                            {/* <span>Already create an account?</span> */}
                            {/* <a href="#">Sign In</a> */}
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-lg-3"></div>
                                <div className="col-lg-6">
                                    <div className="create-photo-item text-center">
                                        <h5>Ready to take the next step?</h5>
                                        <p>Create an account or sign in.</p>
                                        <div className="create-photo-right">
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter New password"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    placeholder="Enter Confirm password"
                                                />
                                            </div>
                                            <div className="text-right submitt">
                                                <button type="submit" className="btn create-photo-btn">
                                                    <a href="dasboard.php">Submit</a>{" "}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* <div class="text-left">
              <button type="submit" class="btn create-ac-btn">Save</button>
          </div> */}
                </div>
            </div>

        </div>
    )
}


export default PostDashboard;