## Spring 相关注解

Spring Boot 的有些注解也需要与 Spring 的注解搭配使用，这里 怀玉 梳理了在项目中与 Spring Boot 注解配合最为紧密的 6 个
Spring 基础框架的注解。如

### @Configuration

从Spring3.0，`@Configuration`
用于定义配置类，可替换xml配置文件，被注解的类内部包含有一个或多个被@Bean注解的方法，这些方法将会被`AnnotationConfigApplicationContext`
或`AnnotationConfigWebApplicationContext`类进行扫描，并用于构建bean定义，初始化Spring容器。

```java
@Configuration
public class TaskAutoConfiguration {

    @Bean
    @Profile("biz-electrfence-controller")
    public BizElectrfenceControllerJob bizElectrfenceControllerJob() {
        return new BizElectrfenceControllerJob();
    }

    @Bean
    @Profile("biz-consume-1-datasync")
    public BizBikeElectrFenceTradeSyncJob bizBikeElectrFenceTradeSyncJob() {
        return new BizBikeElectrFenceTradeSyncJob();
    }
}
```

### @ComponentScan

做过web开发的同学一定都有用过`@Controller`，`@Service`，`@Repository`
注解，查看其源码你会发现，他们中有一个共同的注解`@Component`，没错`@ComponentScan`
注解默认就会装配标识了`@Controller`，`@Service`，`@Repository`，`@Component`注解的类到spring容器中。

```java
@ComponentScan(value = "com.abacus.check.api")
public class CheckApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(CheckApiApplication.class, args);
    }
}
```

`@SpringBootApplication`注解也包含了`@ComponentScan`注解，所以在使用中我们也可以通过`@SpringBootApplication`
注解的`scanBasePackages`属性进行配置。

```java
@SpringBootApplication(scanBasePackages = {"com.abacus.check.api", "com.abacus.check.service"})
public class CheckApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(CheckApiApplication.class, args);
    }
}
```

### @Conditional

`@Conditional`是Spring4新提供的注解，通过`@Conditional`
注解可以根据代码中设置的条件装载不同的bean，在设置条件注解之前，先要把装载的bean类去实现Condition接口，然后对该实现接口的类设置是否装载的条件。Spring
Boot注解中的`@ConditionalOnProperty`、`@ConditionalOnBean`等以`@Conditional*`开头的注解，都是通过集成了`@Conditional`
来实现相应功能的。

### @Import

通过导入的方式实现把实例加入springIOC容器中。可以在需要时将没有被Spring容器管理的类导入至Spring容器中。

```java
//类定义
public class Square {}

public class Circular {}

//导入
@Import({Square.class,Circular.class})
@Configuration
public class MainConfig{}
```

### @ImportResource

和@Import类似，区别就是`@ImportResource`导入的是配置文件。

```java
@ImportResource("classpath:spring-redis.xml")      //导入xml配置

public class CheckApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(CheckApiApplication.class, args);
    }
}
```

### @Component

`@Component`是一个元注解，意思是可以注解其他类注解，如`@Controller @Service @Repository`
。带此注解的类被看作组件，当使用基于注解的配置和类路径扫描的时候，这些类就会被实例化。其他类级别的注解也可以被认定为是一种特殊类型的组件，比如`@Controller`
控制器（注入服务）、@Service服务（注入dao）、`@Repository` dao（实现dao访问）。`@Component`泛指组件，当组件不好归类的时候，我们可以使用这个注解进行标注，作用就相当于
XML配置。

> 基于 Spring Cloud Alibaba + Gateway + Nacos + RocketMQ + Vue & Element 实现的后台管理系统 + 用户小程序，支持 RBAC
> 动态权限、多租户、数据权限、工作流、三方登录、支付、短信、商城等功能
>
> - 项目地址：https://github.com/YunaiV/yudao-cloud
> - 视频教程：https://doc.iocoder.cn/video/

## Spring Boot 最核心的20个注解

说完与Spring Boot密切相关的几个Spring基础注解后，下面我们就再一起看看Spring Boot提供的核心注解的内容吧！

### @SpringBootApplication

这个注解是Spring Boot最核心的注解，用在 Spring Boot的主类上，标识这是一个 Spring Boot 应用，用来开启 Spring Boot
的各项能力。实际上这个注解是`@Configuration`，`@EnableAutoConfiguration`，`@ComponentScan`三个注解的组合。由于这些注解一般都是一起使用，所以Spring
Boot提供了一个统一的注解`@SpringBootApplication`。

```java
@SpringBootApplication(exclude = {
        MongoAutoConfiguration.class,
        MongoDataAutoConfiguration.class,
        DataSourceAutoConfiguration.class,
        ValidationAutoConfiguration.class,
        MybatisAutoConfiguration.class,
        MailSenderAutoConfiguration.class,
})
public class API {
    public static void main(String[] args) {
        SpringApplication.run(API.class, args);
    }
}
```

### @EnableAutoConfiguration

允许 Spring Boot 自动配置注解，开启这个注解之后，Spring Boot 就能根据当前类路径下的包或者类来配置 Spring Bean。

如：当前类路径下有 Mybatis 这个 JAR 包，`MybatisAutoConfiguration` 注解就能根据相关参数来配置 Mybatis 的各个 Spring Bean。

`@EnableAutoConfiguration`实现的关键在于引入了`AutoConfigurationImportSelector`，其核心逻辑为`selectImports`方法，逻辑大致如下：

- 从配置文件`META-INF/spring.factories`加载所有可能用到的自动配置类；
- 去重，并将exclude和excludeName属性携带的类排除；
- 过滤，将满足条件（`@Conditional`）的自动配置类返回；

```java
@Target({ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@AutoConfigurationPackage
//导入AutoConfigurationImportSelector的子类
@Import({EnableAutoConfigurationImportSelector.class})
public @interface EnableAutoConfiguration {
    String ENABLED_OVERRIDE_PROPERTY = "spring.boot.enableautoconfiguration";

    Class<?>[] exclude() default {};

    String[] excludeName() default {};
}
```

### @SpringBootConfiguration

这个注解就是` @Configuration` 注解的变体，只是用来修饰是 Spring Boot 配置而已，或者可利于 Spring Boot 后续的扩展

### @ConditionalOnBean

`@ConditionalOnBean(A.class)`仅仅在当前上下文中存在A对象时，才会实例化一个Bean，也就是说只有当`A.class`
在spring的`applicationContext`中存在时，这个当前的bean才能够创建。

```java
@Bean
//当前环境上下文存在DefaultMQProducer实例时，才能创建RocketMQProducerLifecycle这个Bean
@ConditionalOnBean(DefaultMQProducer.class)
public RocketMQProducerLifecycle rocketMQLifecycle() {
     return new RocketMQProducerLifecycle();
}
```

### @ConditionalOnMissingBean

组合`@Conditional`注解，和`@ConditionalOnBean`注解相反，仅仅在当前上下文中不存在A对象时，才会实例化一个Bean

```java
  @Bean
  //仅当当前环境上下文缺失RocketMQProducer对象时，才允许创建RocketMQProducer Bean对象
  @ConditionalOnMissingBean(RocketMQProducer.class)
  public RocketMQProducer mqProducer() {
      return new RocketMQProducer();
  }
```

### @ConditionalOnClass

组合 `@Conditional` 注解，可以仅当某些类存在于classpath上时候才创建某个Bean。

```java
  @Bean
  //当classpath中存在类HealthIndicator时，才创建HealthIndicator Bean对象
  @ConditionalOnClass(HealthIndicator.class)
  public HealthIndicator rocketMQProducerHealthIndicator(Map<String, DefaultMQProducer> producers) {
      if (producers.size() == 1) {
          return new RocketMQProducerHealthIndicator(producers.values().iterator().next());
      }
  }
```

### @ConditionalOnMissingClass

组合`@Conditional`注解，和`@ConditionalOnMissingClass`注解相反，当classpath中没有指定的 Class才开启配置。

### @ConditionalOnWebApplication

组合`@Conditional` 注解，当前项目类型是 WEB 项目才开启配置。当前项目有以下 3 种类型:`ANY`(任何Web项目都匹配)、`SERVLET`
（仅但基础的Servelet项目才会匹配）、`REACTIVE`（只有基于响应的web应用程序才匹配）。

### @ConditionalOnNotWebApplication

组合`@Conditional`注解，和`@ConditionalOnWebApplication `注解相反，当前项目类型不是 WEB 项目才开启配置。

### @ConditionalOnProperty

组合` @Conditional` 注解，当指定的属性有指定的值时才开启配置。具体操作是通过其两个属性name以及havingValue来实现的，
其中name用来从`application.properties`中读取某个属性值，如果该值为空，则返回false;如果值不为空，
则将该值与havingValue指定的值进行比较，如果一样则返回true;否则返回false。如果返回值为false，则该configuration不生效；为true则生效。

```java
@Retention(RetentionPolicy.RUNTIME)
@Target({ ElementType.TYPE, ElementType.METHOD })
@Documented
@Conditional(OnPropertyCondition.class)
public @interface ConditionalOnProperty {

	// 数组，获取对应property名称的值，与name不可同时使用
	String[] value() default {};

	// 配置属性名称的前缀，比如spring.http.encoding
	String prefix() default "";

	// 数组，配置属性完整名称或部分名称
	// 可与prefix组合使用，组成完整的配置属性名称，与value不可同时使用
	String[] name() default {};

	// 可与name组合使用，比较获取到的属性值与havingValue给定的值是否相同，相同才加载配置
	String havingValue() default "";

	// 缺少该配置属性时是否可以加载。如果为true，没有该配置属性时也会正常加载；反之则不会生效
	boolean matchIfMissing() default false;

}
```

```java
@Bean
 //匹配属性rocketmq.producer.enabled值是否为true
 @ConditionalOnProperty(value = "rocketmq.producer.enabled", havingValue = "true", matchIfMissing = true)
 public RocketMQProducer mqProducer() {
     return new RocketMQProducer();
 }
```

### @ConditionalOnExpression

组合 `@Conditional` 注解，当 SpEL 表达式为 true 时才开启配置。

```java
@Configuration
@ConditionalOnExpression("${enabled:false}")
public class BigpipeConfiguration {
    @Bean
    public OrderMessageMonitor orderMessageMonitor(ConfigContext configContext) {
        return new OrderMessageMonitor(configContext);
    }
}
```

### @ConditionalOnJava

组合`@Conditional` 注解，当运行的 Java JVM 在指定的版本范围时才开启配置。

### @ConditionalOnResource

组合 `@Conditional` 注解，当类路径下有指定的资源才开启配置。

```java
@Bean
@ConditionalOnResource(resources="classpath:shiro.ini")
protected Realm iniClasspathRealm(){
  return new Realm();
}
```

### @ConditionalOnJndi

组合 `@Conditional` 注解，当指定的 JNDI 存在时才开启配置。

### @ConditionalOnCloudPlatform

组合 `@Conditional` 注解，当指定的云平台激活时才开启配置。

### @ConditionalOnSingleCandidate

组合 `@Conditional` 注解，当指定的 class 在容器中只有一个 Bean，或者同时有多个但为首选时才开启配置。

### @ConfigurationProperties

Spring Boot可使用注解的方式将自定义的properties文件映射到实体bean中，比如`config.properties`文件。

```java
@Data
@ConfigurationProperties("rocketmq.consumer")
public class RocketMQConsumerProperties extends RocketMQProperties {
    private boolean enabled = true;

    private String consumerGroup;

    private MessageModel messageModel = MessageModel.CLUSTERING;

    private ConsumeFromWhere consumeFromWhere = ConsumeFromWhere.CONSUME_FROM_LAST_OFFSET;

    private int consumeThreadMin = 20;

    private int consumeThreadMax = 64;

    private int consumeConcurrentlyMaxSpan = 2000;

    private int pullThresholdForQueue = 1000;

    private int pullInterval = 0;

    private int consumeMessageBatchMaxSize = 1;

    private int pullBatchSize = 32;
}
```

### @EnableConfigurationProperties

当`@EnableConfigurationProperties`注解应用到你的`@Configuration`时，任何被`@ConfigurationProperties`
注解的beans将自动被`Environment`属性配置。 这种风格的配置特别适合与`SpringApplication`的外部YAML配置进行配合使用。

```java
@Configuration
@EnableConfigurationProperties({
    RocketMQProducerProperties.class,
    RocketMQConsumerProperties.class,
})
@AutoConfigureOrder
public class RocketMQAutoConfiguration {
    @Value("${spring.application.name}")
    private String applicationName;
}
```

### @AutoConfigureAfter

用在自动配置类上面，表示该自动配置类需要在另外指定的自动配置类配置完之后。

如 Mybatis 的自动配置类，需要在数据源自动配置类之后。

```java
@AutoConfigureAfter(DataSourceAutoConfiguration.class)
public class MybatisAutoConfiguration {
}
```

### @AutoConfigureBefore

这个和`@AutoConfigureAfter`注解使用相反，表示该自动配置类需要在另外指定的自动配置类配置之前。

### @AutoConfigureOrder

Spring Boot 1.3.0中有一个新的注解`@AutoConfigureOrder`，用于确定配置加载的优先级顺序。

```java
@AutoConfigureOrder(Ordered.HIGHEST_PRECEDENCE) // 自动配置里面的最高优先级
@Configuration
@ConditionalOnWebApplication // 仅限于web应用
@Import(BeanPostProcessorsRegistrar.class) // 导入内置容器的设置
public class EmbeddedServletContainerAutoConfiguration {
    @Configuration
    @ConditionalOnClass({ Servlet.class, Tomcat.class })
    @ConditionalOnMissingBean(value = EmbeddedServletContainerFactory.class, search = SearchStrategy.CURRENT)
    public static class EmbeddedTomcat {
       // ...
    }

    @Configuration
    @ConditionalOnClass({ Servlet.class, Server.class, Loader.class, WebAppContext.class })
    @ConditionalOnMissingBean(value = EmbeddedServletContainerFactory.class, search = SearchStrategy.CURRENT)
    public static class EmbeddedJetty {
       // ...
    }
}
```
