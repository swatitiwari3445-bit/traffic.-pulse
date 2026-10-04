/* =====================================
   TRAFFICPULSE JAVASCRIPT
===================================== */


/* =====================================
   MAP VARIABLES
===================================== */

let trafficMap = null;


/* =====================================
   SCREEN FUNCTION
===================================== */

function showScreen(screenId) {

    let screens =
        document.querySelectorAll(".screen");


    screens.forEach(function(screen) {

        screen.classList.remove(
            "active-screen"
        );

    });


    document
        .getElementById(screenId)
        .classList.add(
            "active-screen"
        );

}


/* =====================================
   HOME
===================================== */

function goHome() {

    showScreen("homeScreen");

}


/* =====================================
   TRAFFIC MAP
===================================== */

function openTrafficMap() {

    showScreen("trafficScreen");


    setTimeout(function() {


        /* Create map only once */

        if (trafficMap === null) {


            trafficMap =
                L.map("trafficMap")
                .setView(
                    [28.6692, 77.4538],
                    13
                );


            /* OpenStreetMap */

            L.tileLayer(

                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

                {

                    maxZoom: 19,

                    attribution:
                    "&copy; OpenStreetMap contributors"

                }

            ).addTo(trafficMap);



            /* =================================
               MARKERS
            ================================= */


            /* ABES ROAD */

            L.marker(
                [28.6300, 77.4400]
            )
            .addTo(trafficMap)
            .bindPopup(

                "<b>🔴 ABES Road</b><br>" +
                "Heavy Traffic<br>" +
                "842 users"

            );


            /* NH-9 */

            L.marker(
                [28.6650, 77.4400]
            )
            .addTo(trafficMap)
            .bindPopup(

                "<b>🟠 NH-9</b><br>" +
                "Moderate Traffic<br>" +
                "1,205 users"

            );


            /* CROSSING REPUBLIK */

            L.marker(
                [28.6280, 77.4350]
            )
            .addTo(trafficMap)
            .bindPopup(

                "<b>🟢 Crossing Republik</b><br>" +
                "Low Traffic<br>" +
                "356 users"

            );



            /* =================================
               TRAFFIC ROADS
            ================================= */


            /* 🔴 HEAVY ROAD */

            L.polyline(

                [

                    [28.6300,77.4400],

                    [28.6350,77.4500],

                    [28.6400,77.4600]

                ],

                {

                    color: "#e53935",

                    weight: 8,

                    opacity: 0.85

                }

            ).addTo(trafficMap);



            /* 🟠 MODERATE ROAD */

            L.polyline(

                [

                    [28.6650,77.4400],

                    [28.6700,77.4500],

                    [28.6750,77.4600]

                ],

                {

                    color: "#fb8c00",

                    weight: 8,

                    opacity: 0.85

                }

            ).addTo(trafficMap);



            /* 🟢 LOW ROAD */

            L.polyline(

                [

                    [28.6280,77.4350],

                    [28.6350,77.4300],

                    [28.6420,77.4250]

                ],

                {

                    color: "#43a047",

                    weight: 8,

                    opacity: 0.85

                }

            ).addTo(trafficMap);



            console.log(
                "TrafficPulse Map Loaded"
            );

        }


        else {

            trafficMap.invalidateSize();

        }


    }, 300);

}


/* =====================================
   SEARCH
===================================== */

function searchLocation() {

    let input =
        document.getElementById(
            "searchBox"
        );


    let location =
        input.value.trim();


    if (location === "") {

        alert(
            "Please enter a location."
        );

        return;

    }


    alert(
        "Searching traffic near " +
        location +
        "..."
    );

}


/* =====================================
   ROUTE SCREEN
===================================== */

function openRouteScreen() {

    showScreen("routeScreen");

}


/* =====================================
   ROUTE CALCULATION
===================================== */

function calculateRoute() {

    let from =
        document.getElementById(
            "fromLocation"
        ).value.trim();


    let to =
        document.getElementById(
            "toLocation"
        ).value.trim();


    let result =
        document.getElementById(
            "routeResult"
        );


    if (
        from === "" ||
        to === ""
    ) {

        alert(
            "Please enter both locations."
        );

        return;

    }


    result.innerHTML = `

        <div class="traffic-card low">

            <div class="traffic-icon">
                🟢
            </div>

            <div>

                <h3>
                    Best Route Found
                </h3>

                <p>
                    ${from} → ${to}
                </p>

                <span>
                    Estimated route: 25 minutes
                </span>

            </div>

        </div>

    `;

}


/* =====================================
   REPORT SCREEN
===================================== */

function openReportScreen() {

    showScreen("reportScreen");

}


/* =====================================
   SUBMIT REPORT
===================================== */

function submitReport() {

    let location =
        document.getElementById(
            "reportLocation"
        ).value.trim();


    let description =
        document.getElementById(
            "reportText"
        ).value.trim();


    if (
        location === "" ||
        description === ""
    ) {

        alert(
            "Please fill in the required details."
        );

        return;

    }


    alert(
        "✅ Traffic report submitted successfully!"
    );


    document.getElementById(
        "reportLocation"
    ).value = "";


    document.getElementById(
        "reportText"
    ).value = "";

}


/* =====================================
   PREDICTION
===================================== */

function openPredictionScreen() {

    showScreen(
        "predictionScreen"
    );

}


/* =====================================
   PROFILE
===================================== */

function openProfileScreen() {

    showScreen(
        "profileScreen"
    );

}


/* =====================================
   START
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "🚦 TrafficPulse Started"
        );

    }
);