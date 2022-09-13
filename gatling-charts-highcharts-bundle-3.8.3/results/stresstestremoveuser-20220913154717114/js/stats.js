var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "44",
        "ok": "22",
        "ko": "22"
    },
    "minResponseTime": {
        "total": "55",
        "ok": "55",
        "ko": "226"
    },
    "maxResponseTime": {
        "total": "1331",
        "ok": "261",
        "ko": "1331"
    },
    "meanResponseTime": {
        "total": "277",
        "ok": "97",
        "ko": "456"
    },
    "standardDeviation": {
        "total": "284",
        "ok": "58",
        "ko": "305"
    },
    "percentiles1": {
        "total": "227",
        "ok": "74",
        "ko": "313"
    },
    "percentiles2": {
        "total": "307",
        "ok": "101",
        "ko": "505"
    },
    "percentiles3": {
        "total": "769",
        "ok": "203",
        "ko": "1213"
    },
    "percentiles4": {
        "total": "1290",
        "ok": "249",
        "ko": "1311"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22,
    "percentage": 50
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 22,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.2",
        "ok": "1.1",
        "ko": "1.1"
    }
},
contents: {
"req_pre-step---crea-31afd": {
        type: "REQUEST",
        name: "pre-step : create user",
path: "pre-step : create user",
pathFormatted: "req_pre-step---crea-31afd",
stats: {
    "name": "pre-step : create user",
    "numberOfRequests": {
        "total": "22",
        "ok": "0",
        "ko": "22"
    },
    "minResponseTime": {
        "total": "226",
        "ok": "-",
        "ko": "226"
    },
    "maxResponseTime": {
        "total": "1331",
        "ok": "-",
        "ko": "1331"
    },
    "meanResponseTime": {
        "total": "456",
        "ok": "-",
        "ko": "456"
    },
    "standardDeviation": {
        "total": "305",
        "ok": "-",
        "ko": "305"
    },
    "percentiles1": {
        "total": "313",
        "ok": "-",
        "ko": "313"
    },
    "percentiles2": {
        "total": "505",
        "ok": "-",
        "ko": "505"
    },
    "percentiles3": {
        "total": "1213",
        "ok": "-",
        "ko": "1213"
    },
    "percentiles4": {
        "total": "1311",
        "ok": "-",
        "ko": "1311"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 22,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.1",
        "ok": "-",
        "ko": "1.1"
    }
}
    },"req_stress-user-del-df3b5": {
        type: "REQUEST",
        name: "Stress User deleted",
path: "Stress User deleted",
pathFormatted: "req_stress-user-del-df3b5",
stats: {
    "name": "Stress User deleted",
    "numberOfRequests": {
        "total": "22",
        "ok": "22",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "55",
        "ok": "55",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "261",
        "ok": "261",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "97",
        "ok": "97",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "58",
        "ok": "58",
        "ko": "-"
    },
    "percentiles1": {
        "total": "74",
        "ok": "74",
        "ko": "-"
    },
    "percentiles2": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles3": {
        "total": "203",
        "ok": "203",
        "ko": "-"
    },
    "percentiles4": {
        "total": "249",
        "ok": "249",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 22,
    "percentage": 100
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.1",
        "ok": "1.1",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
