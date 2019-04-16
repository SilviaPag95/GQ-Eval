var shuffleSequence = seq("intro", "instructions", "practice", "practiceover", sepWith("sep", rshuffle(startsWith("item"))));

var showProgressBar = false;

var practiceMessage = "Practice";

var practiceItemTypes = ["practice"];

var continueMessage = ["Click here to proceed"];

var completionMessage = "Your answers have been recorded. Thank you for your participation!";

var ms = "Message";

var sliderjudgement = "ScaleNew";

var defaults = [
    "Separator", { transfer: 800,
                   normalMessage: "Please wait for the next item.",
                   errorMessage: "Wrong. Please wait for the next item."
         },
    "Message", { hideProgressBar: true, transfer: "click" },
    "ScaleNew", {scaleLabels: true, scaleWidth: 500, scaleHeight: 20, handleWidth: 20, handleHeight: 30, startValue: -100, endValue: 100, decimalPlaces: 2, presentAsScale: true}

];

 var progressBarText = "";

var items = [ ["sep", "Separator", { }],

["intro", "Form", {continueMessage: "Click here to continue", html: { include: "example_intro.html" }}],

["instructions", "Message", {continueMessage: "Click here to continue", html: "<blockquote style='font-family:sans-serif'><p><h2>Instructions</h2></p></blockquote><p><blockquote style='font-family:sans-serif'>In this experiment, you will read tweets and evaluate how ironic they are by moving a slider. Read the tweets carefully but don't overthink your answers. Just follow your intuition!<blockquote></blockquote></blockquote><p>"}],

["practice", sliderjudgement, {html: "<div style='width:45em'><blockquote style='text-align:justify'><p style='font-size:14px'>This is a practice item, so your answer will not be taken into account for the experiment. Your task is to check whether you think the tweet below is ironic or not. If you think it is ironic, slide the slider all the way to the right. If you think the tweet is not ironic, then slide all the way to the left. If you are not sure, or you think the tweet is not fully ironic nor not ironic, you can slide the slider to some intermediate position.<br><b>Example 1:</b></p></blockquote> <p style='font-size:14px'>&quot;I really love this yearâ€™s summer; weeks and weeks of awful weather.&quot;</p> <blockquote style='text-align:justify'><p style='font-size:14px'>In this example the tweet is ironic, so the handle should be placed somewhere on the right side of the slider (in the yellow area).</p></blockquote></div>"}],

["practice", sliderjudgement, {html: "<div style='width:45em'><blockquote style='text-align:justify'><p style='font-size:14px'>This is another practice item, so your answer will not be taken into account for the experiment. Again, you have to evaluate how ironic the tweet is.<br><b>Example 2:</b></p></blockquote> <p style='font-size:14px'> &quot;happy birthday <3 &#64;grant_evans19 hope u have the best day :) love ya <3&quot;</p> <blockquote style='text-align:justify'><p style='font-size:14px'>In this example the tweet is not ironic, so the handle should be placed somewhere on the left side of the slider (in the blue area).</p></blockquote></div>"}],

["practiceover", "Message", {continueMessage: "Click here to continue", html: "<div style='font-family:sans-serif'><p style='text-align:justify'>These were the practice items. The experiment itself consists of 30 similar items. It will start as soon as you click on the link below.</p></div>"}],

// From item-1 to item-10 --> Iffy
              ["item-1", sliderjudgement, {html: "<p>As always, Republicans are the most honest and truly work for the people. The Democrats are liars and thieves. &&#35;35;extremelySerious &&#35;35;lol</p>"}],

              ["item-2", sliderjudgement, {html: "<p>So I just colored with Eva for an hour. Yeah my summer so far has been so fun :) &&#35;35;sister &&#35;35;holidays &&#35;35;lovepainting</p>"}],

              ["item-3", sliderjudgement, {html: "<p>I can't believe I did it! All this hard work has paid off. &&#35;35;sportsIllustrated &&#35;35;joking</p>"}],

              ["item-4", sliderjudgement, {html: "<p>This play is amazingly good. &&#35;35;Shakespeare &&#35;35;theatre</p>"}],

              ["item-5", sliderjudgement, {html: "<p>I really have fantasssstic friends.. &&#35;35;fight &&#35;35;drunk</p>"}],

              ["item-6", sliderjudgement, {html: "<p>Republicans are &&#35;35;prolife and pro guns. &&#35;35;constitution &&#35;35;secondAmendment &&#35;35;proud</p>"}],

              ["item-7", sliderjudgement, {html: "<p>Oh how I love working in Baltimore &&#35;35;trafficJam &&#35;35;howNice</p>"}],

              ["item-8", sliderjudgement, {html: "<p>I love this band so much! &&#35;35;awesome &&#35;35;greatperformance </p>"}],

              ["item-9", sliderjudgement, {html: "<p>Boyfriend of the year award. &&#35;35;breakup &&#35;35;cheater &&#35;35;sad &&#35;35;hurt</p>"}],

              ["item-10", sliderjudgement, {html: "<p>Monday mornings are my fave :) &&#35;35;run &&#35;35;sunny &&#35;35;beautifulDay</p>"}],
// From item-11 to item-20 --> Non-ironic
              ["item-11", sliderjudgement, {html: "<p>So emotional this morning. Saying bye to my best friend again :( &#64;melonhairy and reading the end of book 5 of hp. :( waah! &&#35;35;sad</p>"}],

              ["item-12", sliderjudgement, {html: "<p>&&#35;35;HappyBirthdayEmilyBett &#64;emilybett :) Wishing you all the best you beautiful,sweet,talented,amazingâ€¦ &&#35;35;birthdayGirl</p>"}],

              ["item-13", sliderjudgement, {html: "<p>Burn Facebook. Burn. I deleted my account permanently 2 years ago and have never been happier. &&#35;35;DeleteFacebook</p>"}],

              ["item-14", sliderjudgement, {html: "<p>Nothing makes me happier than spending time with our youngest grandson, Justin. He was named after our son who passed away. He is such a blessing! &&#35;35;InternationalDayOfHappiness</p>"}],

              ["item1-15", sliderjudgement, {html: "<p>&&#35;35;marchforourlives! <3 Young people have the voice!</p>"}],

              ["item-16", sliderjudgement, {html: "<p>Marchers are chanting â€œNo justice, no peace!â€ &&#35;35;MarchForOurLives &#64;3onyourside</p>"}],

              ["item-17", sliderjudgement, {html: "<p>Behind the &&#35;35;Job: Life as a Formula 1 mechanic. As the new season starts in Australia, behind-the-scenes access at Williams Racing. It's home to two young talents who build the cars, not drive them &#64;BBC &#64;ChrisHewgill &&#35;35;F1</p>"}],

              ["item-18", sliderjudgement, {html: "<p>With 29:29 left to play in the 1st half, the Lady Warriors Soccer Team is on the scoreboard. Taylor Gentry gets one by the keeper for a 1-0 lead. &&#35;35;soccer &&#35;35;LadyWarriors</p>"}],

              ["item-19", sliderjudgement, {html: "<p>To our &#64;laiylaa_ <3 We spent two exceptional days with you & we felt a pang of sorrow in our hearts as we left you this morning :'( Once again, thank you for having accompanied us in our challenges till the end! Take care! &&#35;35;friend </p>"}],

              ["item-20", sliderjudgement, {html: "<p>And he sleeps bless him! &&#35;35;sleepy &&#35;35;myboy &#35;myworld &#35;son &#35;love</p>"}],
// From item-21 to item-30 --> Ironic
              ["item-21", sliderjudgement, {html: "<p>Glad to see &#35;Hollywood chose not to use evil &#35;guns, knives or violence as part of their &#35;profit machine, I mean movie. &#35;Deadpool</p>"}],

              ["item-22", sliderjudgement, {html: "<p>Let's have a moment of silence for all those who are stuck in &#35;traffic on their way to &#35;gym this morning.</p>"}],

              ["item-23", sliderjudgement, {html: "<p>Most of us didn't focus in the &#35;ADHD lecture. &#35;lol</p>"}],

              ["item-24", sliderjudgement, {html: "<p>Going to the dentist for a root canal this afternoon. Yay, I canâ€™t wait. &#35;amazing</p>"}],

              ["item-25", sliderjudgement, {html: "<p>Hahaha, who needs sleep anyhow. A lie in at the weekend may have been appreciated, but I'd much rather be awake right now. &#35;coursenot &#35;letmesleep</p>"}],

              ["item-26", sliderjudgement, {html: "<p>I just love it when I speak to folk and they totally ignore me!!! &#35;thankyou &#35;verypolite</p>"}],

              ["item-27", sliderjudgement, {html: "<p>I ordered 6 new pairs of shoes...this saving money thing is going pretty good for me &#35;great</p>"}],

              ["item-28", sliderjudgement, {html: "<p>&#64;CIA We hear youâ€™re looking for sentiment analysis to detect sarcasm in Tweets. Thatâ€™ll be easy! &#35;SLA2014 &#35;goodLuck</p>"}],

              ["item-29", sliderjudgement, {html: "<p>Just saw a non-smoking sign in the lobby of a tobacco company. &#35;logic</p>"}],

              ["item-30", sliderjudgement, {html: "<p>Throwing up at 6:00 am is always fun &#35;yay &#35;wow</p>"}]

              ];
