const qs = [{
    id: 0, <!--questions -->
    q: "How can one reduce stress?",
    a: [{ text: "Listen to others achievements", isCorrect: false },
        { text: "Do more tasks", isCorrect: false },
        { text: "Make a schedule", isCorrect: true },
        { text: "Study right before a test", isCorrect: false }
    ]

},
    {
        id: 1,
        q: "What can you do to relieve stress?",
        a: [{ text: "Leave school", isCorrect: false, isSelected: false },
            { text: "Study", isCorrect: false },
            { text: "Watch TV", isCorrect: false },
            { text: "Exercise", isCorrect: true }
        ]

    },
]


//Starting to start the program
var start = true;


function runningThrough(id) { //running through program to get results and have the user choose options

    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    //Getting the question from the computer
    const question = document.getElementById("question");


    question.innerText = qs[id].q;

    //Options to choose from quiz, op1 passes to the html index driver so that the answers/questions from above can
    //get applied to each section
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    op1.innerText = qs[id].a[0].text;
    op2.innerText = qs[id].a[1].text;
    op3.innerText = qs[id].a[2].text;
    op4.innerText = qs[id].a[3].text;

    //allows for us to see which option is correct or wrong
    op1.value = qs[id].a[0].isCorrect;
    op2.value = qs[id].a[1].isCorrect;
    op3.value = qs[id].a[2].isCorrect;
    op4.value = qs[id].a[3].isCorrect;

    var selected = "";

    //everything below allows for answers to be put in certain places - ie: "op1" allows for option 1 to occur
    op1.addEventListener("click", () => { //css colors so that when selected the color changes
        op1.style.backgroundColor = "lightgoldenrodyellow";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op1.value;
    })

        //have to do teh same functions for each button so that user can click any button and have it highlighted
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightgoldenrodyellow";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightskyblue";
        selected = op2.value;
    })


    op3.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightgoldenrodyellow";
        op4.style.backgroundColor = "lightskyblue";
        selected = op3.value;
    })


    op4.addEventListener("click", () => {
        op1.style.backgroundColor = "lightskyblue";
        op2.style.backgroundColor = "lightskyblue";
        op3.style.backgroundColor = "lightskyblue";
        op4.style.backgroundColor = "lightgoldenrodyellow";
        selected = op4.value;
    })

    //using the decide method to find out if the answer is right or not
    const decide = document.getElementsByClassName("evaluate");

    decide[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    runningThrough("0");
}


const next = document.getElementsByClassName('next')[0]; //moving to the next question
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        runningThrough(id);
        console.log(id);
    }

})