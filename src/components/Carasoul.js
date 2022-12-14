import React from 'react'

function Carasoul() {
    return (
        <div style={{ height: "400px", width: "600px", margin: "auto" }}>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="1000">
                        <img style={{ height: "400px" }} src="https://prod.smassets.net/assets/cms/sm/uploads//remote-worker.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "white", fontSize: "30px" }}>WEBINAR</h5>
                            <p style={{ color: "white", fontSize: "25px" }} >Get the most out of SurveyMonkey Enterprise: 10 tips from our product</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <img style={{ height: "400px" }} src="https://prod.smassets.net/assets/cms/sm/uploads//23-iStock-590622902-1536x1025.jpg" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "white", fontSize: "30px" }}>CASE STUDY</h5>
                            <p style={{ color: "white", fontSize: "25px" }}>Apply enabled the University of Wisconsin-Madison to streamline graduate.</p>
                        </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="1000">
                        <img style={{ height: "400px" }} src="https://prod.smassets.net/assets/cms/sm/uploads//sme-header-2x-3.png" class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5 style={{ color: "white", fontSize: "30px" }}>CASE STUDY</h5>
                            <p style={{ color: "white", fontSize: "25px" }}>How the Cystic Fibrosis Foundation saved time while gaining broader member support</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carasoul