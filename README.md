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

2. copy `.env.example` to `.env`

3. extract gif
```sh
yarn run extract <your-gif-file-name>
```
or use builtin gifs `happy.gif` or `giphy.gif`
```sh
yarn run extract happy
```

4. start web server
```sh
yarn run start
```

5. use curl to get ascii art animate
```sh
curl http://localhost:4321/happy
```
