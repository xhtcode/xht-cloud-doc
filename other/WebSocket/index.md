# 简介



## 是什么



WebSocket是一种在客户端和服务器之间实现双向通信的网络协议。它通过在单个TCP连接上提供全双工通信功能，使得服务器可以主动向客户端推送数据，而不需要客户端发起请求。



> WebSocket 协议是一种基于 TCP 的应用层协议，它提供了在客户端和服务器之间进行双向通信的能力。相比传统的 HTTP 协议，它具有更低的延迟和更高的实时性。
>
> WebSocket 协议通过建立一条持久化的连接来实现双向通信，从而避免了 HTTP 协议中频繁建立和断开连接的过程，减少了网络开销和服务器的负担。客户端可以发送消息给服务器，服务器也可以发送消息给客户端，实现了真正的双向通信。
>
> 在使用 WebSocket 协议时，客户端和服务器会进行一次握手过程，以建立起 WebSocket 连接。握手过程中，客户端会发送一个 HTTP 请求，请求头中包含 Upgrade 和 Connection 字段，告诉服务器它希望升级到 WebSocket 连接。服务器收到请求后会返回一个 HTTP 响应，响应头中包含 Upgrade 和 Connection 字段，以及一个 Sec-WebSocket-Accept 字段，用于验证请求的合法性。握手成功后，客户端和服务器就可以开始使用 WebSocket 协议进行通信了。
>
> WebSocket 协议支持二进制数据和文本数据的传输，开发者可以根据实际需求进行选择。同时，WebSocket 还提供了心跳机制、自动重连等功能，可以提高连接的稳定性和可靠性。
>
> 总之，WebSocket 协议在实时通信、游戏、在线聊天等场景中得到了广泛应用，它为 Web 应用提供了更加高效、可靠的双向通信方式。





## WebSocket与HTTP的区别



与传统的HTTP协议相比，WebSocket具有以下几个显著的区别：

- **双向通信**：WebSocket支持客户端和服务器之间的实时双向通信，而HTTP协议是单向请求-响应模式。
- **低延迟**：由于WebSocket使用长连接，避免了HTTP的连接建立和断开过程，可以降低通信延迟。
- **更少的数据传输**：WebSocket头部信息相对较小，减少了数据传输的开销。
- **跨域支持**：WebSocket可以轻松跨域，而HTTP需要通过CORS等机制来实现。





## WebSocket的工作原理



WebSocket的握手过程和HTTP有所不同。客户端通过发送特定的HTTP请求进行握手，服务器收到请求后进行验证，如果验证通过，则会建立WebSocket连接。

建立连接后，客户端和服务器之间可以通过WebSocket发送和接收消息，可以使用文本、二进制数据等进行通信。



## WebSocket的应用场景



WebSocket的实时双向通信特性使得它在许多应用场景中发挥重要作用，例如：

- **即时聊天**：WebSocket可以实现实时的聊天功能，用户可以发送和接收消息，实现快速、低延迟的聊天体验。
- **实时数据更新**：对于需要实时更新数据的应用，如股票行情、实时监控等，WebSocket可以将数据实时推送给客户端，确保数据的及时更新。
- **在线游戏**：在线游戏需要实时的双向通信，WebSocket可以提供稳定的通信通道，支持实时交互和多人游戏。



# 前端API介绍



##  构造器



### 简介





**`WebSocket()`**构造函器会返回一个`WebSocket`对象。



```javascript
var MyWebSocket = new WebSocket(url, protocols);
```



### 参数



- `url`

  要连接的 URL；这应该是 WebSocket 服务器将响应的 URL。

- `protocols` 可选

  一个协议字符串或者一个包含协议字符串的数组。这些字符串用于指定子协议，这样单个服务器可以实现多个 WebSocket 子协议（例如，你可能希望一台服务器能够根据指定的协议（`protocol`）处理不同类型的交互）。如果不指定协议字符串，则假定为空字符串。



### 抛出异常



- `SECURITY_ERR`

  正在尝试连接的端口被阻止。



## 常量



| **Constant**           | **Value** |
| :--------------------- | :-------- |
| `WebSocket.CONNECTING` | `0`       |
| `WebSocket.OPEN`       | `1`       |
| `WebSocket.CLOSING`    | `2`       |
| `WebSocket.CLOSED`     | `3`       |

## 属性



| 常量                                | 描述                                     |
| ----------------------------------- | ---------------------------------------- |
| `WebSocket.binaryType`              | 使用二进制的数据类型连接                 |
| `WebSocket.bufferedAmount` **只读** | 未发送至服务器的字节数                   |
| `WebSocket.extensions` **只读**     | 服务器选择的扩展                         |
| `WebSocket.onclose`                 | 用于指定连接关闭后的回调函数             |
| `WebSocket.onerror`                 | 用于指定连接失败后的回调函数             |
| `WebSocket.onmessage`               | 用于指定当从服务器接受到信息时的回调函数 |
| `WebSocket.onopen`                  | 用于指定连接成功后的回调函数             |
| `WebSocket.protocol` **只读**       | 服务器选择的下属协议                     |
| `WebSocket.readyState` **只读**     | 当前的链接状态                           |
| `WebSocket.url` **只读**            | WebSocket 的绝对路径                     |




## 方法



| 名称                                | 描述                   |
| ----------------------------------- | ---------------------- |
| `WebSocket.close([code[, reason]])` | 关闭当前链接           |
| `WebSocket.send(data)`              | 对要传输的数据进行排队 |



## 事件



使用 addEventListener() 或将一个事件监听器赋值给本接口的 oneventname 属性，来监听下面的事件。



| 名称        | 描述                                                         |
| ----------- | ------------------------------------------------------------ |
| `onclose`   | 当一个 WebSocket 连接被关闭时触发。 也可以通过 onclose 属性来设置 |
| `onerror`   | 当一个 WebSocket 连接因错误而关闭时触发，例如无法发送数据时。 也可以通过 onerror 属性来设置 |
| `onmessage` | 当通过 WebSocket 收到数据时触发。 也可以通过 onmessage 属性来设置 |
| `onopen`    | 当一个 WebSocket 连接成功时触发。 也可以通过 onopen 属性来设置 |



## 案例



```html
<!DOCTYPE html>
<html lang="">
  <head>
    <meta charset="utf-8">
    <title>WebSocket消息通知</title>
  </head>
  <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.js"></script>
  <script>
    var socket;

    //打开WebSocket
    function openSocket() {
      if (typeof (WebSocket) === "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        //实现化WebSocket对象，指定要连接的服务器地址与端口,建立连接.
        var socketUrl = "http://localhost:8080/socket/server/" + $("#uid").val();
        //将https与http协议替换为ws协议
        socketUrl = socketUrl.replace("https", "ws").replace("http", "ws");
        console.log(socketUrl);
        if (socket != null) {
          socket.close();
          socket = null;
        }
        socket = new WebSocket(socketUrl);
        //打开事件
        socket.onopen = function () {
          console.log("WebSocket已打开");
          //socket.send("这是来自客户端的消息" + location.href + new Date());
        };
        //获得消息事件
        socket.onmessage = function (msg) {
          console.log(msg.data);
          //发现消息进入,开始处理前端触发逻辑
        };
        //关闭事件
        socket.onclose = function () {
          console.log("WebSocket已关闭");
        };
        //发生了错误事件
        socket.onerror = function () {
          console.log("WebSocket发生了错误");
        }
      }
    }

    //发送消息
    function sendMessage() {
      if (typeof (WebSocket) === "undefined") {
        console.log("您的浏览器不支持WebSocket");
      } else {
        console.log("您的浏览器支持WebSocket");
        console.log('{"toUID":"' + $("#toUID").val() + '","Msg":"' + $("#msg").val() + '"}');
        socket.send('{"toUID":"' + $("#toUID").val() + '","Msg":"' + $("#msg").val() + '"}');
      }
    }
  </script>
  <body>
    <p>【uid】：
    <div><input id="uid" name="uid" type="text" value="1"></div>
    <p>【toUID】：
    <div><input id="toUID" name="toUID" type="text" value="2"></div>
    <p>【Msg】：
    <div><input id="msg" name="msg" type="text" value="hello WebSocket2"></div>
    <p>【第一步操作:】：
    <div>
      <button onclick="openSocket()">开启socket</button>
    </div>
    <p>【第二步操作:】：
    <div>
      <button onclick="sendMessage()">发送消息</button>
    </div>
  </body>

</html>
```




# 前端TS封装



## Util封装



```tsx
import {EventDispatcher} from "@/utils/moudle/EventDispatcher";
import {useMessage} from "@/hooks/message";
type ListenerType = 'open' | 'message' | 'close' | 'error'

class EventDispatcher {
    private listeners: { [type: string]: Function[] } = {};

    protected addEventListener(type: ListenerType, listener: Function) {
        if (!this.listeners[type]) {
            this.listeners[type] = [];
        }
        if (this.listeners[type].indexOf(listener) === -1) {
            this.listeners[type].push(listener);
        }
    }

    protected removeEventListener(type: ListenerType) {
        this.listeners[type] = [];
    }

    protected dispatchEvent(type: ListenerType, data: any) {
        const listenerArray = this.listeners[type] || [];
        if (listenerArray.length === 0) return;
        listenerArray.forEach(listener => {
            listener.call(this, data);
        });
    }
}
import {EventDispatcher} from "@/utils/moudle/EventDispatcher";
import {useMessage} from "@/hooks/message";

export class WebSocketClient extends EventDispatcher {
    // #socket链接
    private url = '';
    // #socket实例
    private socket: WebSocket | null = null;
    // #重连次数
    private reconnectAttempts = 0;
    // #最大重连数
    private maxReconnectAttempts = 10;
    // #重连间隔
    private reconnectInterval = 5000; //5秒一次
    // #发送心跳数据间隔
    private heartbeatInterval = 1000 * 30;
    // #计时器id
    private heartbeatTimer?: any;
    // #彻底终止ws
    private stopWs = false;

    constructor(url: string) {
        super();
        this.url = url;
    }

    /**
     * 自定义生命周期： 当一个 WebSocket 连接成功时触发。 也可以通过 onopen 属性来设置
     *
     * @param callBack 执行内容
     */
    onopen(callBack: Function) {
        this.addEventListener('open', callBack);
    }

    /**
     * 自定义生命周期：当通过 WebSocket 收到数据时触发。 也可以通过 onmessage 属性来设置
     *
     * @param callBack 执行内容
     */
    onmessage(callBack: Function) {
        this.addEventListener('message', callBack);
    }

    /**
     * 自定义生命周期： 当一个 WebSocket 连接被关闭时触发。 也可以通过 onclose 属性来设置
     *
     * @param callBack 执行内容
     */
    onclose(callBack: Function) {
        this.addEventListener('close', callBack);
    }

    /**
     * 自定义生命周期：当一个 WebSocket 连接因错误而关闭时触发，例如无法发送数据时。 也可以通过 onerror 属性来设置
     *
     * @param callBack 执行内容
     */
    onerror(callBack: Function) {
        this.addEventListener('error', callBack);
    }

    /**
     * 初始化连接
     */
    public connect(): void {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            return;
        }
        this.socket = new WebSocket(this.url);

        /**
         * 生命周期： 当一个 WebSocket 连接成功时触发
         */
        this.socket.onopen = event => {
            this.stopWs = false;
            // 重置重连尝试成功连接
            this.reconnectAttempts = 0;
            // 在连接成功时停止当前的心跳检测并重新启动
            this.startHeartbeat();
            this.dispatchEvent('open', event);
        };

        /**
         * 生命周期：当通过 WebSocket 收到数据时触发。
         */
        this.socket.onmessage = event => {
            this.dispatchEvent('message', event);
            this.startHeartbeat();
        };

        /**
         * 生命周期： 当一个 WebSocket 连接被关闭时触发。
         * @param event
         */
        this.socket.onclose = event => {
            if (!this.stopWs) {
                this.handleReconnect();
            }
            if (this.reconnectAttempts <= 0) {
                this.dispatchEvent('close', event);
                this.removeEventListener('open');
                this.removeEventListener('message');
                this.removeEventListener('close');
                this.removeEventListener('error');
            }
        };

        /**
         * 生命周期： 当一个 WebSocket 连接因错误而关闭时触发
         */
        this.socket.onerror = event => {
            this.closeHeartbeat();
            this.dispatchEvent('error', event);
        };

    }

    /**
     * 消息发送
     * @param message 信息
     */
    public send(message: string): void {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            useMessage().error('当前设备未连接，请连接服务端后再试！')
        }
    }

    /**
     * 关闭连接
     */
    public close(): void {
        if (this.socket) {
            this.stopWs = true;
            this.socket.close();
            this.socket = null;
        }
        this.closeHeartbeat();
    }

    /**
     * 断网重连逻辑
     */
    private handleReconnect(): void {
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            useMessage().wraning(`正在尝试重连... (${this.reconnectAttempts}/${this.maxReconnectAttempts})!`)
            setTimeout(() => {
                this.connect();
            }, this.reconnectInterval);
        } else {
            this.closeHeartbeat();
            useMessage().error('当前设备未连接，请连接服务端后再试！')
        }
    }

    /**
     * 开始心跳检测 -> 定时发送心跳消息
     */
    private startHeartbeat(): void {
        if (this.stopWs) return;
        if (this.heartbeatTimer) {
            this.closeHeartbeat();
        }
        this.heartbeatTimer = setInterval(() => {
            if (this.socket) {
                this.socket.send(JSON.stringify({type: 'heartBeat', data: {}}));
            } else {
                console.error('[WebSocket] 未连接');
            }
        }, this.heartbeatInterval);
    }

    /**
     * 关闭心跳
     */
    private closeHeartbeat(): void {
        clearInterval(this.heartbeatTimer);
        this.heartbeatTimer = undefined;
    }
}
```



## 使用



````ts
const ws = new WebSocketClient('ws://localhost:3200');

// 连接
ws.connect();
ws.close();
ws.send('发送信息');
// 同原生方法
ws.onclose(() => {
  useMessage().error('连接关闭!')
});
// 同原生方法
ws.onerror(() => {
  useMessage().error('连接失败!')
});
ws.onmessage(() => {
  useMessage().success('收到信息!')
});
ws.onopen(() => {
  useMessage().success('连接成功!')
});
````



# 继承JAVA(SpringBoot)



## 依赖



```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```



## API





### @OnMessage



`@OnMessage` 注解用于监听客户端消息事件，它只有一个属性 `long maxMessageSize() default -1;` 用于限制客户端消息的大小，如果小于等于 0 则表示不限制。当客户端消息体积超过这个阈值，那么服务器就会主动断开连接，状态码为：`1009`。方法的参数可以是基本的 `String` / `byte[]` 或者是 `Reader` / `InputStream`，分别表示 WebSocket 中的文本和二进制消息。也可以是自定义的 Java 对象，但是需要在 `@ServerEndpoint` 中配置对象的解码器（`jakarta.websocket.Decoder`）。对于内容较长的消息，支持分批发送，可以在消息参数后面定义一个布尔类型的 `boolean last`参数，如果该值为 `true` 则表示此消息是批次消息中的最后一条。



```java
@OnMessage
public void onMessage(String message, boolean last) throws IOException{
    if (last) {
            // 这是批量消息的最后一条
    }
}
```



### @OnOpen



`@OnOpen` 方法用于监听客户端的连接事件，它没有任何属性。可以作为方法参数的对象有很多，`Session` 对象是必须的，表示当前连接对象，我们可以通过此对象来执行发送消息、断开连接等操作。WebSocket 的连接 URL，类似于 Http 的 URL，也可以传递查询参数、path 参数。通常用于传递认证、鉴权用的 Token 或其他信息。

要获取查询参数，我们可以通过 `Session` 的 `getRequestParameterMap();` 获取。

```java
Map<String, List<String>> query = session.getRequestParameterMap();
```

要获取 path 参数，首先要在 `@ServerEndpoint` 中定义 path 参数，类似于 Spring Mvc 的 path 参数定义。例如：`@ServerEndpoint(value = "/channel/echo/{id}")`。那么我们可以在 `@OnOpen` 方法中使用 `@PathParam` 注解接收，如下：

```java
@ServerEndpoint(value = "/channel/echo/{id}")

//...

@OnOpen
public void onOpen(Session session, @PathParam("id") Long id, EndpointConfig endpointConfig){
  //  ....
}
```

示例中的最后一个参数 `EndpointConfig` ，它是可选，用于获取全局的一些配置。在本文中未用到。



### @OnClose



`@OnClose` 用于处理连接断开事件，参数中可以指定一个 `CloseReason` 对象，它封装了断开连接的状态码、原因信息。



### @OnError



`@OnError` 用于处理异常事件，**「该方法必须要有一个 `Throwable` 类型的参数」**，表示发生的异常。否则应用会启用失败：

```txt
Caused by: jakarta.websocket.DeploymentException: No Throwable parameter was present on the method [onError] of class [cn.springdoc.demo.channel.EchoChannel] that was annotated with OnError
    at org.apache.tomcat.websocket.pojo.PojoMethodMapping.getPathParams(PojoMethodMapping.java:311) ~[tomcat-embed-websocket-10.1.12.jar:10.1.12]
    at org.apache.tomcat.websocket.pojo.PojoMethodMapping.<init>(PojoMethodMapping.java:194) ~[tomcat-embed-websocket-10.1.12.jar:10.1.12]
    at org.apache.tomcat.websocket.server.WsServerContainer.addEndpoint(WsServerContainer.java:130) ~[tomcat-embed-websocket-10.1.12.jar:10.1.12]
    at org.apache.tomcat.websocket.server.WsServerContainer.addEndpoint(WsServerContainer.java:240) ~[tomcat-embed-websocket-10.1.12.jar:10.1.12]
    at org.apache.tomcat.websocket.server.WsServerContainer.addEndpoint(WsServerContainer.java:198) ~[tomcat-embed-websocket-10.1.12.jar:10.1.12]
    at org.springframework.web.socket.server.standard.ServerEndpointExporter.registerEndpoint(ServerEndpointExporter.java:156) ~[spring-websocket-6.0.11.jar:6.0.11]
    ... 12 common frames omitted
```

所有事件方法，都支持使用 `Session` 作为参数，表示当前连接参数。但是为了更加方便，我们在 `@OnOpen` 事件中直接把 `Session` 存储到了当前对象中，可以在任意方法中使用 `this` 访问。服务器会为每个连接创建一个端点对象，所以这是线程安全的。



### 连接关闭状态码





上面还提到了一个 “连接关闭状态码”，WebSocket 协议定义了一系列状态码来表示连接断开的原因，这些状态码定义在了 `CloseReason.CloseCodes` 枚举中。





## 配置ServerEndpointExporter



```java
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.server.standard.ServerEndpointExporter;

/**
 * 描述 ： WebSocket配置
 *
 * @author : 小糊涂
 **/
@Slf4j
@Configuration
public class WebSocketConfig {

    /**
     * 初始化Bean，它会自动注册使用了 @ServerEndpoint 注解声明的 WebSocket endpoint
     *
     * @return {@link ServerEndpointExporter}
     */
    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }
}
```

## 启动类配置

```java
@EnableWebSocket
```



## 案例1



```java
@Component
@ServerEndpoint("/server/{uid}")
@Slf4j
public class WebSocketServer {

    /**
     * 记录当前在线连接数
     */
    private static int onlineCount = 0;

    /**
     * 使用线程安全的ConcurrentHashMap来存放每个客户端对应的WebSocket对象
     */
    private static ConcurrentHashMap<String, WebSocketServer> webSocketMap = new ConcurrentHashMap<>();

    /**
     * 与某个客户端的连接会话，需要通过它来给客户端发送数据
     */
    private Session session;

    /**
     * 接收客户端消息的uid
     */
    private String uid = "";

    /**
     * 连接建立成功调用的方法
     * @param session
     * @param uid
     */
    @OnOpen
    public void onOpen(Session session, @PathParam("uid") String uid) {
        this.session = session;
        this.uid = uid;
        if (webSocketMap.containsKey(uid)) {
            webSocketMap.remove(uid);
            //加入到set中
            webSocketMap.put(uid, this);
        } else {
            //加入set中
            webSocketMap.put(uid, this);
            //在线数加1
            addOnlineCount();
        }

        log.info("用户【" + uid + "】连接成功，当前在线人数为:" + getOnlineCount());
        try {
            sendMsg("连接成功");
        } catch (IOException e) {
            log.error("用户【" + uid + "】网络异常!", e);
        }
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose() {
        if (webSocketMap.containsKey(uid)) {
            webSocketMap.remove(uid);
            //从set中删除
            subOnlineCount();
        }
        log.info("用户【" + uid + "】退出，当前在线人数为:" + getOnlineCount());
    }

    /**
     * 收到客户端消息后调用的方法
     * @param message 客户端发送过来的消息
     * @param session 会话
     */
    @OnMessage
    public void onMessage(String message, Session session) {
        log.info("用户【" + uid + "】发送报文:" + message);
        //群发消息
        if (StringUtils.isNotBlank(message)) {
            try {
                //解析发送的报文
                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, String> map = objectMapper.readValue(message, new TypeReference<Map<String, String>>(){});
                //追加发送人(防止串改)
                map.put("fromUID", this.uid);
                String toUID = map.get("toUID");
                //传送给对应的toUserId用户的WebSocket
                if (StringUtils.isNotBlank(toUID) && webSocketMap.containsKey(toUID)) {
                    webSocketMap.get(toUID).sendMsg(objectMapper.writeValueAsString(map));
                } else {
                    //若果不在这个服务器上，可以考虑发送到mysql或者redis
                    log.error("请求目标用户【" + toUID + "】不在该服务器上");
                }
            } catch (Exception e) {
                log.error("用户【" + uid + "】发送消息异常！", e);
            }
        }
    }

    /**
     * 处理错误
     * @param session
     * @param error
     */
    @OnError
    public void onError(Session session, Throwable error) {
        log.error("用户【" + this.uid + "】处理消息错误，原因:" + error.getMessage());
        error.printStackTrace();
    }

    /**
     * 实现服务器主动推送
     * @param msg
     * @throws IOException
     */
    private void sendMsg(String msg) throws IOException {
        this.session.getBasicRemote().sendText(msg);
    }

    /**
     * 发送自定义消息
     * @param message
     * @param uid
     * @throws IOException
     */
    public static void sendInfo(String message, @PathParam("uid") String uid) throws IOException {
        log.info("发送消息到用户【" + uid + "】发送的报文:" + message);
        if (!StringUtils.isEmpty(uid) && webSocketMap.containsKey(uid)) {
            webSocketMap.get(uid).sendMsg(message);
        } else {
            log.error("用户【" + uid + "】不在线！");
        }
    }

    private static synchronized int getOnlineCount() {
        return onlineCount;
    }

    private static synchronized void addOnlineCount() {
        WebSocketServer.onlineCount++;
    }

    private static synchronized void subOnlineCount() {
        WebSocketServer.onlineCount--;
    }

}
```





## 案例2



```java

/**
 * 描述 ：
 *
 * @author : 小糊涂
 **/
@Component
@Slf4j
@ServerEndpoint("/websocket/{userId}")
public class WebSocket {

    /**
     * 线程安全的无序的集合
     */
    private static final CopyOnWriteArraySet<Session> SESSIONS = new CopyOnWriteArraySet<>();

    /**
     * 存储在线连接数
     */
    private static final Map<String, Session> SESSION_POOL = new HashMap<>();

    @OnOpen
    public void onOpen(Session session, @PathParam(value = "userId") String userId) {
        try {
            SESSIONS.add(session);
            SESSION_POOL.put(userId, session);
            log.info("【WebSocket消息】有新的连接，总数为：" + SESSIONS.size());
        } catch (Exception e) {
            log.error("【WebSocket消息】连接失败 {}", e.getMessage(), e);
        }
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose(Session session) {
        try {
            SESSIONS.remove(session);
            log.info("【WebSocket消息】连接断开，总数为：" + SESSIONS.size());
        } catch (Exception e) {
            log.error("【WebSocket消息】连接断开 {}", e.getMessage(), e);
        }
    }


    /**
     * 收到客户端消息后调用的方法
     *
     * @param message 客户端发送过来的消息
     */
    @OnMessage
    public void onMessage(String message, @PathParam("userId") String userId) {
        log.info("【WebSocket消息】收到客户端消息： {}   userId={}", message, userId);
    }

    /**
     * 此为广播消息
     *
     * @param message 消息
     */
    public void sendAllMessage(String message) {
        log.info("【WebSocket消息】广播消息：" + message);
        for (Session session : SESSIONS) {
            try {
                if (session.isOpen()) {
                    session.getAsyncRemote().sendText(message);
                }
            } catch (Exception e) {
                log.error("【WebSocket消息】广播消息 {}", e.getMessage(), e);
            }
        }
    }

    /**
     * 此为单点消息
     *
     * @param userId  用户编号
     * @param message 消息
     */
    public void sendOneMessage(String userId, String message) {
        Session session = SESSION_POOL.get(userId);
        if (session != null && session.isOpen()) {
            try {
                synchronized (session) {
                    log.info("【WebSocket消息】单点消息：" + message);
                    session.getAsyncRemote().sendText(message);
                }
            } catch (Exception e) {
                log.error("【WebSocket消息】单点消息 {}", e.getMessage(), e);
            }
        }
    }

    /**
     * 此为单点消息(多人)
     *
     * @param userIds 用户编号列表
     * @param message 消息
     */
    public void sendMoreMessage(String[] userIds, String message) {
        for (String userId : userIds) {
            Session session = SESSION_POOL.get(userId);
            if (session != null && session.isOpen()) {
                try {
                    log.info("【WebSocket消息】单点消息(多人)：" + message);
                    session.getAsyncRemote().sendText(message);
                } catch (Exception e) {
                    log.error("【WebSocket消息】单点消息(多人) {}", e.getMessage(), e);
                }
            }
        }
    }
}
```

