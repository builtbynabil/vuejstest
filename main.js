// VUE LOGIC

var head = new Vue({
    el: ".header",
    data: {
        "title": "latest-vulnerabilities",
        "authorname": "builtbynabil",
        "description": "this webpage shows the latest and most usefull vulternabilities that has been found using the GitHub API. This was made possible with machine learning to look up the keywords that was needed to find these vulnerabilities."
    }
})

var whatIs = new Vue({
    el: "#infos",
    data: {
        "items": [
            {
                "name": "fastware-release",
                "description": "fastware is a malicious script that runs when the user place in a thumbdrive into the computer's PORT3",
                "repoLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "limitations": false,
                "isHidden": true

            },

            {
                "name": "sleep-kill_p0",
                "description": "kill any sleep-kill processes, read README, there is limitations",
                "repoLink": "",
                "limitations": true,
                "isHidden": true

            },

            {
                "name": "readME-bomb",
                "description": "script placed in a readme github file to secretly install malware on the target device. Only for repos that are affected with the CVE-0912-C bug.",
                "repoLink": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "limitations": true,
                "isHidden": true
            },
        ]
    }
})


// JQUERY SETUP INIT
$(".form").hide();

// JQUERY INIT
$(".editMode").on("click" , () => {
    $(".form").toggle();
})