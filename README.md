# gif-to-ascii-stream
convert gif to ascii art and show on your terminal

![origin gif](https://github.com/hermeslin/gif-to-ascii-stream/blob/master/assets/gif/happy.gif)
![ascii gif art](https://github.com/hermeslin/gif-to-ascii-stream/blob/master/happy.gif)

## install
```sh
yarn install
```

## convert gif to to ascii art
1. copy the gif which you want to convert into `./assets/gif/` folder, or you can use the builtin gifs `happy.gif` or `giphy.gif`


2. extract gif
```sh
yarn run extract <your-gif-file-name>
```
or use builtin gifs `happy.gif` or `giphy.gif`
```sh
yarn run extract happy
```

3. start web server
```sh
yarn run start
```

4. use curl to get ascii art animate
```sh
curl http://localhost:4321/happy
```
