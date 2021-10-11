---
title:  Trying Rust
date: 2021-09-12
shortText: A nice way of writing systems programs?
---

If you are following the trends on the web nowadays you've probably encounter [rust-lang](https://www.rust-lang.org/) somewhere. As an outsider I thought of it as something people are using for [Systems Programming](https://en.wikipedia.org/wiki/Systems_programming) or related fields and these people seem to love it.

With that in mind I stumbled upon a very nice rust website called [Rust Adventure](https://www.rustadventure.dev) and it explained a few concepts of the language and also had a free e-mail course. So, why not give it a chance?


## A very gentle introduction

The course has been split into 5 parts, each part has a small quizz at the end of the section that makes you think a little bit further about what you've done. The structure overall is really good and it does not take more than 1 hour to complete.


## The small project and some basic concepts

The goal of the course is for you to build a very simple CLI tool that tells you the weather.
To do that we start with tooling installation, which is fairly simple and we are up and running in no time. In this first part he also introduces you to cargo, which is Rust's package manager.

From the first glance I thought that it seemed very similar to JS and NPM tooling and it was kind of a surprise for me, usually when you are dealing with low-level system programming languages everything is complicated and you need to do a bit of research just to run a simple program or install a dependency, that's definetely not the case here, Cargo takes care of everything and it just works. Really great.

After that we are introduced to variables, which are immutable by default. That's a very interesting decision, when you have to explicitly tell the compiler that a variable is mutable you usually make better decisions and avoid simple mistakes. It can also act as a tool for you to solve a problem without using mutable variables, which is always very nice.

Other than variables we are also introduced to the [Result Type](https://doc.rust-lang.org/std/result/) and we are informed that there is no null or undefined in Rust.
Result type is another interesting language decision as it can return a success or an error, it seems like a very elegant way of dealing with errors (I'm not a big fan of try and catch for example).

The next topic is how to access command line arguments and with that we get to know Rust's iterators, another very useful and elegant feature.

At last we are taught how make HTTP requests and that shows us a little bit about serialization, arrays and JSON. It touches a little bit on the ownership topic, enough for you to understand what's happening but also you end up wanting to know more about that.

## Conclusion

After this brief introduction It seems like Rust had some really cool language decisions and also was build upon cool features. The next step is to read some of the [Rust Book](https://doc.rust-lang.org/book/) (which is the best resource to learn Rust), the chapters on Common Programming Concepts and Ownership seem very interesting. After that maybe I should try and build something with it, if it's something interesting I'll write about it here.

Thank you for reading, and go try [this crash course for yourself](https://www.rustadventure.dev). (:
