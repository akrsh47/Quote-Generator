const quote_doc = document.querySelector(".quote");
const person_doc = document.querySelector(".person");
const btn_doc = document.querySelector(".btn")

let quote_list = [{
    quote:`"The way to get started is to quit talking and begin doing."`,
    person:`-Walt Disney`


},{
    quote:`Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. `,
    person:`-Steve Jobs`
},{
    quote:`The future belongs to those who believe in the beauty of their dreams.`,
    person:`-Eleanor Roosevelt`
},
{
quote:`"You must be the change you wish to see in the world."`,
person:`- Mahatma Gandhi`
},
{
quote:`"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
person:`- Mother Teresa`
},
{
quote:`"The only thing we have to fear is fear itself."`,
person:`- Franklin D. Roosevelt`
},
{
quote:`"Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that."`,
person:`- Martin Luther King Jr.`
},
{
quote:`"Do one thing every day that scares you."`,
person:`- Eleanor Roosevelt`
},
{
quote:`"You must be the change you wish to see in the world."`,
person:`- Mahatma Gandhi`
},
{
quote:`"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
person:`- Mother Teresa`
},
{
quote:`"The only thing we have to fear is fear itself."`,
person:`- Franklin D. Roosevelt`
},
{
quote:`"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."`,
person:`- Martin Luther King Jr.`
},
{
quote:`"Do one thing every day that scares you."`,
person:`- Eleanor Roosevelt`
},
{
quote:`"Well done is better than well said."`,
person:`- Benjamin Franklin`
},
{
quote:`"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."`,
person:`- Helen Keller`
},
{
quote:`"It is during our darkest moments that we must focus to see the light."`,
person:`- Aristotle`
},
{
quote:`"Do not go where the path may lead, go instead where there is no path and leave a trail."`,
person:`- Ralph Waldo Emerson`
},
{
quote:`"Be yourself; everyone else is already taken."`,
person:`- Oscar Wilde`
},
{
quote:`"You will face many defeats in life, but never let yourself be defeated."`,
person:`- Maya Angelou`
},
{
quote:`"Go confidently in the direction of your dreams! Live the life you've imagined."`,
person:`- Henry David Thoreau`
},
{
quote:`"In the end, it's not the years in your life that count. It's the life in your years."`,
person:`- Abraham Lincoln`
},
{
quote:`"Never let the fear of striking out keep you from playing the game."`,
person:`- Babe Ruth`
},
{
quote:`"In this life we cannot do great things. We can only do small things with great love."`,
person:`- Mother Teresa`
},
{
quote:`"Many of life's failures are people who did not realize how close they were to success when they gave up."`,
person:`- Thomas A. Edison`
},
{
quote:`"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
person:`- Dr. Seuss`
},
{
quote:`"Never let the fear of striking out keep you from playing the game."`,
person:`- Babe Ruth`
},
{
quote:`"Life is never fair, and perhaps it is a good thing for most of us that it is not."`,
person:`- Oscar Wilde`
},
{
quote:`"The only impossible journey is the one you never begin."`,
person:`- Tony Robbins`
},
{
quote:`"In this life, we cannot do great things. We can only do small things with great love."`,
person:`- Mother Teresa`
},
{
quote:`"Only a life lived for others is a life worthwhile."`,
person:`- Albert Einstein`
},
{
quote:`"The purpose of our lives is to be happy."`,
person:`- Dalai Lama`
},
{
quote:`"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."`,
person:`- John Lennon`
},
{
quote:`"You only live once, but if you do it right, once is enough."`,
person:`- Mae West`
},
{
quote:`"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
person:`- Ralph Waldo Emerson`
},
{
quote:`"Don't worry when you are not recognized but strive to be worthy of recognition."`,
person:`- Abraham Lincoln`
},
{
quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
person:`- Nelson Mandela`
},
{
quote:`"Life is really simple, but we insist on making it complicated."`,
person:`- Confucius`
},
{
quote:`"May you live all the days of your life."`,
person:`- Jonathan Swift`
},
{
quote:`"Life itself is the most wonderful fairy tale."`,
person:`- Hans Christian Andersen`
},
{
quote:`"Do not let making a living prevent you from making a life."`,
person:`- John Wooden`
},
{
quote:`"Go confidently in the direction of your dreams! Live the life you've imagined."`,
person:`- Henry David Thoreau`
},
{
quote:`"Life is either a daring adventure or nothing."`,
person:`- Helen Keller`
},
{
quote:`"Life is a long lesson in humility."`,
person:`- James M. Barrie`
},
{
quote:`"In three words I can sum up everything I've learned about life: it goes on."`,
person:`- Robert Frost`
},
{
quote:`"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
person:`- Dr. Seuss`
},
{
quote:`"Life is made of ever so many partings welded together."`,
person:`- Charles Dickens`
},
{
quote:`"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking."`,
person:`- Steve Jobs`
},
{
quote:`"Life is trying things to see if they work."`,
person:`- Ray Bradbury`
},
{
  quote: `"Keep smiling, because life is a beautiful thing and there's so much to smile about."`,
  person: `- Marilyn Monroe`
},
{
  quote: `"In the depth of winter, I finally learned that within me there lay an invincible summer."`,
  person: `- Albert Camus`
},
{
  quote: `"In three words, I can sum up everything I've learned about life: it goes on."`,
  person: `- Robert Frost`
},
{
  quote: `"So we beat on, boats against the current, borne back ceaselessly into the past."`,
  person: `- F. Scott Fitzgerald`
},
{
  quote: `"Life is either a daring adventure or nothing."`,
  person: `- Helen Keller`
},
{
  quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
  person: `- Dr. Seuss`
},
{
  quote: `"Life is made of ever so many partings welded together."`,
  person: `- Charles Dickens`
},
{
  quote: `"Don't be distracted by criticism. Remember — the only taste of success some people get is to take a bite out of you."`,
  person: `- Zig Ziglar`
},
{
  quote: `"Success usually comes to those who are too busy to be looking for it."`,
  person: `- Henry David Thoreau`
},
{
  quote: `"Everything you can imagine is real."`,
  person: `- Pablo Picasso`
},
{
  quote: `"If you want to make your dreams come true, the first thing you have to do is wake up."`,
  person: `- J.M. Power`
},
{
  quote: `"There are no secrets to success. It is the result of preparation, hard work, and learning from failure."`,
  person: `- Colin Powell`
},
{
  quote: `"The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere."`,
  person: `- Barack Obama`
},
{
  quote: `"The only limit to our realization of tomorrow will be our doubts of today."`,
  person: `- Franklin D. Roosevelt`
},
{
  quote: `"It is better to fail in originality than to succeed in imitation."`,
  person: `- Herman Melville`
},
{
  quote: `"The future belongs to those who believe in the beauty of their dreams."`,
  person: `- Eleanor Roosevelt`
},
{
  quote: `"The road to success and the road to failure are almost exactly the same."`,
  person: `- Colin R. Davis`
},
{
  quote: `"Always remember, your focus determines your reality."`,
  person: `- George Lucas`
},
{
  quote: `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
  person: `- James Cameron`
},
{
  quote: `"Dream big and dare to fail."`,
  person: `- Norman Vaughan`
},
{
  quote: `"Courage is grace under pressure."`,
  person: `- Ernest Hemingway`
},
{
  quote: `"It is still best to be honest and truthful; to make the most of what we have; to be happy with simple pleasures; and have courage when things go wrong."`,
  person: `- Laura Ingalls Wilder`
},
{
  quote: `"Nothing is impossible, the word itself says, ‘I'm possible!'”`,
  person: `- Audrey Hepburn`
},
{
  quote: `"It does not matter how slowly you go as long as you do not stop."`,
  person: `- Confucius`
},
{
  quote: `"Don't find fault, find a remedy: anyone can complain."`,
  person: `- Henry Ford`
},
{
  quote: `"A man may die, nations may rise and fall, but an idea lives on."`,
  person: `- John F. Kennedy`
},
{
  quote: `"I have learned over the years that when one's mind is made up, this diminishes fear."`,
  person: `- Rosa Parks`
},
{
  quote: `"I didn't fail the test. I just found 100 ways to do it wrong."`,
  person: `- Benjamin Franklin`
},
{
  quote: `"If you're offered a seat on a rocket ship, don't ask what seat! Just get on."`,
  person: `- Sheryl Sandberg`
},
{
  quote: `"With great power comes great responsibility."`,
  person: `- Stan Lee`
},
{
  quote: `"I would rather die of passion than of boredom."`,
  person: `- Vincent van Gogh`
},
{
  quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
  person: `- Oprah Winfrey`
},
{
  quote: `"Dreaming, after all, is a form of planning."`,
  person: `- Gloria Steinem`
},
{
  quote: `"Whatever the mind of man can conceive and believe, it can achieve."`,
  person: `- Napoleon Hill`
},
{
  quote: `"First, have a definite, clear, practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends: wisdom, money, materials, and methods. Third, adjust all your means to that end."`,
  person: `- Aristotle`
},
{
  quote: `"Twenty years from now, you will be more disappointed by the things that you didn't do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover."`,
  person: `- Mark Twain`
},
{
  quote: `"Don’t watch the clock; do what it does. Keep going."`,
  person: `- Sam Levenson`
},
{
  quote: `"Time is money."`,
  person: `- Benjamin Franklin`
},
{
  quote: `"Time waits for no one."`,
  person: `- Unknown Author`
},
{
  quote: `"There is never enough time to do everything, but there is always enough time to do the most important thing."`,
  person: `- Brian Tracy`
},
{
  quote: `"All great achievements require time."`,
  person: `- Maya Angelou`
},
{
  quote: `"Whether you think you can or you think you can't, you're right."`,
  person: `- Henry Ford`
},
{
  quote: `"You miss 100% of the shots you don't take."`,
  person: `- Wayne Gretzky`
},
{
  quote: `"It does not matter how slowly you go as long as you do not stop."`,
  person: `- Confucius`
},
{
  quote: `"I would rather die of passion than of boredom."`,
  person: `- Vincent Van Gogh`
},
{
  quote: `"There is no substitute for hard work."`,
  person: `- Thomas Edison`
},
{
  quote: `"In the end, it's not the years in your life that count. It's the life in your years."`,
  person: `- Abraham Lincoln`
},
{
  quote: `"You will face many defeats in life, but never let yourself be defeated."`,
  person: `- Maya Angelou`
},
{
  quote: `"Do not let making a living prevent you from making a life."`,
  person: `- John Wooden`
},
{
  quote: `"Love the life you live. Live the life you love."`,
  person: `- Bob Marley`
},
{
  quote: `"Never let the fear of striking out keep you from playing the game."`,
  person: `- Babe Ruth`
},
{
  quote: `"Love is composed of a single soul inhabiting two bodies."`,
  person: `- Aristotle`
},
{
  quote: `"Life is either a daring adventure or nothing at all."`,
  person: `- Helen Keller`
},
{
  quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
  person: `- Nelson Mandela, Long Walk to Freedom`
},
{
  quote: `"Life is made of ever so many partings welded together."`,
  person: `- Charles Dickens, Great Expectations`
},
{
  quote: `"Always remember that you are absolutely unique. Just like everyone else."`,
  person: `- Margaret Mead`
},
{
  quote: `"No act of kindness, no matter how small, is ever wasted."`,
  person: `- Aesop`
},
{
  quote: `"The only place where success comes before work is in the dictionary."`,
  person: `- Vidal Sassoon`
},
{
  quote: `"Where there is love there is life."`,
  person: `- Mahatma Gandhi`
},
{
  quote: `"There is nothing permanent except change."`,
  person: `- Heraclitus`
},
{
  quote: `"Dance like nobody's watching."`,
  person: `- Susanna Clark and Richard Leigh, "Come from the Heart"`
},
{
  quote: `"Independence is happiness."`,
  person: `- Susan B. Anthony`
},
{
  quote: `"Being happy never goes out of style."`,
  person: `- Lilly Pulitzer`
},
{
  quote: `"The two most important days in your life are the day you are born and the day you find out why."`,
  person: `- Mark Twain`
},
{
  quote: `"The only true wisdom is in knowing you know nothing."`,
  person: `- Socrates`
},
{
  quote: `"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."`,
  person: `- John Lennon, "Imagine"`
},
{
  quote: `"The journey of a thousand miles begins with one step."`,
  person: `- Lao Tzu`
},
{
  quote: `"Well done is better than well said."`,
  person: `- Benjamin Franklin`
},
{
  quote: `"Not all those who wander are lost."`,
  person: `- J. R. R. Tolkien, The Fellowship of the Ring`
}



]

let rand = Math.floor(Math.random()*quote_list.length)
quote_doc.textContent = quote_list[rand].quote
person_doc.textContent = quote_list[rand].person


btn_doc.addEventListener("click",function(){
    rand = Math.floor(Math.random()*quote_list.length)
    console.log(rand)

    quote_doc.textContent = quote_list[rand].quote
    person_doc.textContent = quote_list[rand].person
})

