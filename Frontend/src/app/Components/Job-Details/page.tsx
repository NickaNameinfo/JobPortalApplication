import React from 'react'
import Header from '../Header';

const JobDetails = () => {
    return (
        <div>



            <Header />
            <div className="page-title-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="page-title-text">
                                <h2>Job Details</h2>
                                <ul>
                                    <li>
                                        <a href="index.php">Home</a>
                                    </li>
                                    <li>
                                        <i className="icofont-simple-right" />
                                    </li>
                                    <li>Job Details</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="job-details-area pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="job-details-item">
                                <div className="job-description">
                                    <h2>Job Description</h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was
                                        popularised in the 1960s with the release of Letraset sheets
                                        containing Lorem Ipsum passages
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Reprehenderit magnam sapiente dolor quos expedita quis, ad
                                        perspiciatis hic nihil laboriosam at eius.
                                    </p>
                                </div>
                                <div className="job-knowledge">
                                    <h2>Required Knowledge, Skills, and Abilities</h2>
                                    <ul>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />
                                            Hand On experience with Wordpress
                                        </li>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />
                                            Better knowledge of front-end technologies, including HTML5,
                                            CSS3, JavaScript, jQuery
                                        </li>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />
                                            Belief – believing in yourself and those around you
                                        </li>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />
                                            Experience designing and developing responsive design websites
                                        </li>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />
                                            Ability to convert comprehensive layout and wireframes into
                                            working HTML pages
                                        </li>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />
                                            Strong understanding of PHP back-end development
                                        </li>
                                    </ul>
                                </div>
                                <div className="job-knowledge">
                                    <h2>Education Qualification</h2>
                                    <ul>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />
                                            Any Graduattion Degree(13th Pass) (Preferred)
                                        </li>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />
                                            Advanced degree or equivalent experience in graphic and web
                                            design
                                        </li>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />2 or more years of
                                            professional design experience
                                        </li>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />
                                            Direct response email experience
                                        </li>
                                        <li>
                                            <i className="icofont-hand-drawn-right" />
                                            Ecommerce website design experience
                                        </li>
                                    </ul>
                                </div>
                                <div className="text-center">
                                    <a className="job-details-btn" href="apply.php">
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="job-details-item">
                                <div className="job-overview">
                                    <h3>Overview</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-dollar" />
                                            <p>Offered Salary</p>
                                            <span>$10k-$150k</span>
                                        </li>
                                        <li>
                                            <i className="icofont-users-alt-3" />
                                            <p>Gender</p>
                                            <span>Male</span>
                                        </li>
                                        <li>
                                            <i className="icofont-badge" />
                                            <p>Experince</p>
                                            <span>2 Years</span>
                                        </li>
                                        <li>
                                            <i className="icofont-graduate" />
                                            <p>Qualification</p>
                                            <span>Master Degree</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="job-overview job-company">
                                    <h3>Company Address</h3>
                                    <ul>
                                        <li>
                                            <i className="icofont-location-pin" />
                                            <span>4th Floor, 408 No Chamber</span>
                                        </li>
                                        <li>
                                            <i className="icofont-ui-call" />
                                            <a href="tel:+07554332322">Call : +07 554 332 322</a>
                                        </li>
                                        <li>
                                            <i className="icofont-ui-email" />
                                            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#d3bbb6bfbfbc93b4b2b1bfb6fdb0bcbe">
                                                <span
                                                    className="__cf_email__"
                                                    data-cfemail="cfa7aaa3a3a08fa8aeada3aae1aca0a2"
                                                >
                                                    [email&nbsp;protected]
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <?php include "footer.php" ?> */}
        </div>
    )
}

export default JobDetails;