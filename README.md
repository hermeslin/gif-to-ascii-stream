# gif-to-ascii-stream
convert gif to ascii art and show on your terminal

![origin gif](https://github.com/hermeslin/gif-to-ascii-stream/blob/master/assets/gif/happy.gif)
![ascii gif art](https://github.com/hermeslin/gif-to-ascii-stream/blob/master/happy.gif)

## install
```js
yarn install
```

## convert gif to to ascii art
1. copy the gif which you want to convert into `./assets/gif/` folder, or you can use the builtin gifs `happy.gif` or `giphy.gif`


2. prepare gif
```js
yarn run prepare <your-gif-file-name>
```
or use builtin gifs `happy.gif` or `giphy.gif`
```js
yarn run prepare happy
```

3. start web server
```js
yarn run start
```

4. use curl to get ascii art animate
```js
curl http://localhost:4321/happy
```
