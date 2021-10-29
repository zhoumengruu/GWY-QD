### 1.同步和异步？

js是单线程语言，可简单理解为同步执行，即同时间只能执行相同任务，其他任务排队等候，

### 2.promise

- ##### 同步是指：等待上一个完成后再进行下一个任务；异步是不用等待上一个返回结果

- ##### ajax默认是异步，但很多场景则需要我们等待返回数据在进行下一步操作，因此要使用同步操作

- ##### 想要确保A执行后在执行B，若浏览器不支持promise对象，则回调函数的封装可以实现

  ```js
  function want() {
      console.log('这是你想要执行的代码');
  }
  
  function fn(want) {
      // 将想要执行的代码放入队列中，根据事件循环的机制，我们就不用非得将它放到最后面了，由你自由选择
      want && setTimeout(want, 0);
      console.log('这里表示执行了一大堆各种代码');
  }
  
  fn(want);
  ```

- ##### 加入promise和setTimeout，代码运行顺序：

  ```
  简单理解：宏任务与微任务的不断循环
  微任务：promise.then()，proces.next()
  宏任务：setTimeout(),setInterval()
  
  先同步任务，遇到promise立即执行，promise.then()即为then1，放入微任务队列，setTimeout1放入宏任务队列
  再微任务，即then1
  再宏任务，即setTimeout1
  
  // 每一个循环中，浏览器只支持执行一个宏任务，多个微任务，node环境中不一定
  ```

- ##### promise能干什么？

  解决回调地狱，ajax下一个请求依赖上一个请求的数据时，只能在success里面写回调，层层嵌套，太多会造成回调地狱，

- ##### promise&&axios&&async

  - promise的核心用法是链式调用，多个then，catch可以只写一个，任何一个地方抛出错误，均会跳过then，直接到catch，但是then一直排队调用，不出错无法跳过，
  - axiso就是promise封装的一个http库，axios的return值本身就是一个promise，所以也可以用then，catch，但是注意的是then里面必须return一个值，后面的then才能拿到数据，不建议与promise一起用，因为axios本身就是一个promise，
  - async和await是成对出现的，可以搭配axios使用，这样就不用链式调用写then了
  
- 