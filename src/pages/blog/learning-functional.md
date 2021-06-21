---
title:  Learning Clojure
#date: 2018-12-29
shortText: Or how functional programing makes you think differently
---


### Learning to a functional language

It's very commom for people to say that you should learn how to program with a functional langague, the change of paradigm
is a good exercise for your mind and even if you won't use functional on your day-to-day code it's always good to add more thing to your toolbox.

With that in mind I decide to try something that I've been thinking on for a long time, learning clojure.
I started reading Clojure for the brave and true. Read a few of the chapters and it was really good, well written, funny and the explanation was great.
After some time I realized that I need to code something, reading and going through the examples was not enough for me, so I had to come up with something to code.

#### The Problem

As a solution, I decided to try the Adventure of Code from last year (I know, bad timing!) doing all challenges with clojure. The first problem was fairly easy but it
showed me why people are always recommending functional languages. Take a look why:

The challenge was:
Given a list of integers find the two entries that sum to 2020 and then multiply those two numbers together.

Seems fairly simple, right? In your head you go: 'Well, for every entry, I loop throught the list and find the number that makes the sum 2020, then return the multiplication of those two'. And you are absolutely correct, your solution is great! Except that clojure does not have conventional loop like while and for. Now what?

#### The Solution

Well, when I say that we don't have loops on clojure it's not entirely true, we have `map`, `reduce` and other methods that goes through the array, but that's not what we originally think would solve that problem, right?

What is a functional way of repeating a pattern? Hmmm, recursion maybe?
It's very commom to use `first` and `rest` functions on clojure. `(first collection)` return the first item of that collection and `(rest collection)` returns a collection without the first item. So we start to feel like we are getting somewhere.

Let's start solving a smaller subset that will help us solve the whole problem. What is a function that would help our work here?
Hmmm, If I had a function that receiveis a number and a sequence and checks if in that sequence that is a number that sums to 2020 would be great.
Even better if that function return both of these number multiplied. So let's try and solve that.

###__ IMAGE FOR THIS:

(defn find-2020-sum
  [number sequence]
  (if (empty? sequence)
    nil
    (if (= (+ number (first sequence)) 2020)
      (* number (first sequence))
      (recur number (rest sequence))
      )
  ))


Explanation of the code.

Final function rational

(defn two-items-sum-2020
  [seq]
  (if (nil? (find-2020-sum (first seq) int-input))
    (recur (rest seq))
    (find-2020-sum (first seq) int-input)
    )
  )

Explanation for the final function


### Conclusion






