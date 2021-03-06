# Tensorflow
ML Introductory Practice Using Tensorflow

<br />

## Overview

* tf.js is 3-5x slower than GPU tf

<br />

## Workflow

<!-- const xt = tf.tensor1d(xData);  -->

1. define loss() or error()
   - of predicted output to actual output
   - checks parameter space, to min
2. create linear regression
3. apply stochastic descent
4. loss() and confusion matrices

<br />

## Setup

| Obs  | Instruction                                                                              | Tasks                                                                        |
| ---- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 1.   | Clone [Ryan Marchildon's](https://github.com/RyanMarchildon/tfjs-torontoai-lecture) repo | ``` $ git clone git@github.com:RyanMarchildon/tfjs-torontoai-lecture.git ``` |
| 2-a. | Webserver - JS                                                                           | ``` $ npm install local-web-server -g ```                                    |
| 2-b. | Webserver - Py                                                                           | ``` $ python3 -m http.server ```                                             |

<br />

## Getting Started

1. Fundamental

    * tf.js /index.html

        ```
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script>
        ```

2. Tensors 
    * multi-dimensional array vector

3. CNN
    * tfjs-vis

4. Memory management
   
5. MNIST data with tf.js

    * loss( ) and confusion matrices
    * local host this model due to cross origin reference sharing 
    * need to add script call below in html file

        ```
        <!-- Import TensorFlow.js -->
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.0/dist/tf.min.js"></script>
        <!-- Import tfjs-vis -->
        <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-vis@1.0.2/dist/tfjs-vis.umd.min.js"></script>

        <!-- Import the data file -->
        <script src="data.js" type="module"></script>

        <!-- Import the main script file -->
        <script src="main.js" type="module"></script>
        ```

<br />

## Futher Resources

##### Readings

NIP's [Visual Reasoning by Progressive Module Networks](https://nips2018vigil.github.io/static/papers/accepted/29.pdf)  -  Seung Wook Kim

##### Audio Prototype

[OpenAi MuseNet](https://openai.com/blog/musenet/#try)



<br />
<br />
<br />
<br />
<br />
<br />


---

Rangle.io's take on building AI applications with tensorflow.js

[![screencapture article ai rangle.io tensorflow.js](img/rangleio-article-thumb.png)](https://github.com/mori-c/tensorflow/blob/master/img/rangle-io-blog-bringing-artificial-intelligence-to-the-browser-with-tensorflow-js-2019-05-02-18_34_06.png)



