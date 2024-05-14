# 接口规范

## 简介

是的，我了解REST接口。REST，全称Representational State Transfer，是一种软件架构风格，用于设计和开发网络应用。它基于HTTP协议，使用URI（统一资源标识符）来定位网络资源，并通过HTTP方法（如GET、POST、PUT、DELETE等）来操作这些资源。

REST接口的主要特点包括：

1. **无状态性**：每个请求都包含了进行请求所需的所有信息，服务器不会保存客户端的状态信息。这有助于简化服务器设计，提高可伸缩性和可靠性。
2. **客户端-服务器架构**：客户端和服务器之间通过请求-响应模式进行通信。客户端发送请求，服务器处理请求并返回响应。
3. **分层系统**：允许系统由多个层次组成，每个层次都负责特定的功能，如安全、负载均衡、缓存等。
4. **统一接口**：REST接口使用统一的接口来操作资源，这有助于简化系统设计，并降低客户端和服务器之间的耦合度。

restful API 是基于 REST 架构风格的 Web 服务接口。它们通常使用 HTTP 协议进行通信，并使用 JSON 或 XML 作为数据交换格式。restful API 在现代 Web 应用中广泛使用，特别是用于构建微服务架构和前后端分离的应用。

使用 REST 接口时，开发者需要遵循一定的规范，如使用合适的 HTTP 方法、设计合理的 URI 结构、处理错误和异常等。这有助于确保接口的易用性、可维护性和可扩展性。





### 按照restful接口设计规范

+ GET （SELECT）：从服务器检索特定资源，或资源列表。
+ POST （CREATE）：在服务器上创建一个新的资源。
+ PUT （UPDATE）：更新服务器上的资源，提供整个资源。
+ PATCH （UPDATE）：更新服务器上的资源，仅提供更改的属性。
+ DELETE （DELETE）：从服务器删除资源。

* 接口尽量使用名词，禁止使用动词，下面是一些例子

```java
GET         /zoos：列出所有动物园
GET         /zoos?limit=&size=：分页列出动物园
POST        /zoos：新建一个动物园
GET         /zoos/ID：获取某个指定动物园的信息
PUT         /zoos/ID：更新某个指定动物园的信息（提供该动物园的全部信息）
PATCH       /zoos/ID：更新某个指定动物园的信息（提供该动物园的部分信息）
DELETE      /zoos/ID：删除某个动物园
GET         /zoos/ID/animals：列出某个指定动物园的所有动物
DELETE      /zoos/ID/animals/ID：删除某个指定动物园的指定动物复制代码
```

* 反例：

```
/getAllCars
/createNewCar
/deleteAllRedCars
```
