---
title:  Learning Clojure
#date: 2018-12-29
shortText: Or how functional programing makes you think differently
---


## Learning a functional language

It's very commom for people to say that you should learn how to program with a functional language, the change of paradigm
is a good exercise for your mind and even if you won't use functional on your day-to-day code it's always good to add more things to your coding toolbox.

With that in mind I decided to try to learn a languague from the lisp family, clojure. <br>
I started reading Clojure for the Brave and True, I've gone through a few of chapters and it was well written, funny and the explanations were great, definitely a recommendation for anyone wanting to learn clojure or some concepts of functional langages. <br>
After some time I realized that I need to code something, reading and going through the examples was not enough for me, so I had to come up with something to code.

### Adventure of Code

As a solution, I decided to try the Adventure of Code from last year (I know, bad timing!) doing all challenges with clojure. The first problem was fairly easy but it
showed me why people are always recommending functional languages. Take a look why:


> Given a list of integers find the two entries that sum to 2020 and then multiply those two numbers together.

Seems fairly simple, right? In your mind you may think: <br>'Well, for every entry, I loop throught the list and find the numbers that makes the sum 2020, then return the multiplication of those two.' <br> And you are absolutely correct, your solution is great! Except that clojure does not have conventional loops like while and for. Now what?

### A simple problem with a different solution

Well, when I say that we don't have loops on clojure it's not entirely true, we have `map`, `reduce` and other methods that goes through the array, but that's not what we originally think would solve that problem, right?

What is a functional way of repeating a pattern? Hmmm, recursion maybe? <br>
It's very commom to use `first` and `rest` functions on clojure, here's the pattern:
1.  `(first collection)` return the first item of that collection
2.  `(rest collection)` returns a collection without the first item.

With these functions we start to make up a solution. <br>
Let's start solving a smaller subset that will help us solve the whole problem. What is a function that would help our work here? <br>
Hmmm, If I had a function that **receiveis a number and a sequence** and **checks if any number in that sequence sums the input to 2020**.<br>
Even better if that function return both of these number multiplied. So let's try and solve that.

![FirstSolution](https://i.ibb.co/V31NPJ4/clojure-first.png)


Let's understand line by line:

On lines 1 and 2 we are defining a function called `find-2020-sum` and this functions have two arguments, `number` and `sequence`.

On line 3 we are taking care of the trivial case, meaning that if we receive an empty sequence, there is no number that sums to 2020. So we return `nil` on line 4.

On lines 5 to 8 we are doing the following, checking if the number received plus the first number on the sequence sums to 2020. <br>
If it does we return the multiplication of both, otherwise we call the function recursively without the first item on the sequence.



Now we just need to call this functions for every value in our sequence. This is how it goes:

![FinalSolution](https://i.ibb.co/LzPg6Qm/clojure-second.png)

On lines 1 and 2 we are creating a function called `two-items-sum-2020` that receives only one argument (`seq`). <br>
On line 3 to 5 things get a little bit confuse if you don't follow it closely. <br>
For every element of my input (here it's called `int-input`) I check if there is a number on `int-input` that sums to 2020 with the first element in the sequence. <br>
If the answer is no, then the return will be `nil`, and in that case we call the function recursively with the `rest` on my original sequence, meaning that we now excluded the first element, and we need to check the 'next first element'. <br>
If the answer is yes, then we found match and we can return the value that was computed in the last function.


### Conclusion

A simple problem with some constrains helped me with a different method. There is a lot of ways of solving the problem with those constrains, this solution presented here was not my first. And, of course, there is lots
of things on this solution in particular that could be changed to improve readability and efficiency. Learning a new paradigm ends up being very fun and also a great exercise for the mind.

