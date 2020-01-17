const redis = require("redis");

var redisClient = redis.createClient({
  port: #redisPort,
  host: "#redisHost",
  password: "#redisPwd"
});

var count = 0;
//The function will psubscribe to redis channels
const PSubscribe = () => {
  redisClient.on("pmessage", function(pattern, channel, message) {
    try {
      //pattern gives you the pattern you have subscribed to.
      //channel gives you the exact channel name
      //message tells you the message you have received.
      console.log(pattern + "  " + channel + " " + message);
      count += 1;
      console.log(count);
    } catch (error) {
      console.log(
        colors.red(
          "[" + new Date().toLocaleString() + "]  SubscribeToChannels: " + err
        )
      );
    }
  });
  redisClient.psubscribe(String("Live:*"));
};

PSubscribe();
