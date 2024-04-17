# Flowable通用数据表结构

## 1. ACT_GE_BYTEARRAY资源表

| 字段             | 类型             | 主键 | 说明                  | 备注                                              |
|----------------|----------------|----|---------------------|-------------------------------------------------|
| ID_            | NVARCHAR2(64)  | Y  | 主键                  | 主键，字节数组数据的唯一标识符                                 |
| REV_           | INTEGER        | N  | 数据版本                | 版本号，用于乐观锁机制，记录了数据的版本。                           |
| NAME_          | NVARCHAR2(255) | N  | 资源名称                | 名称，用于标识字节数组数据的名称。                               |
| DEPLOYMENT_ID_ | NVARCHAR2(64)  | N  | 部署序号                | 部署序号,一次部署可以部署多个资源,该字段与部署表ACT_RE_DEPLOYMENT的主键关联 |
| BYTES_         | BLOB           | N  | 资源内容                |                                                 |
| GENERATED_     | NUMBER(1)      | N  | 是否是由activiti自动产生的资源 | 0表示false，1表示true                                |

## 2. ACT_GE_PROPERTY属性表

| 字段     | 类型             | 主键 | 说明    | 备注 |
|--------|----------------|----|-------|----|
| NAME_  | NVARCHAR2(64)  | Y  | 属性名称  |    |
| VALUE_ | NVARCHAR2(300) | N  | 属性值   |    |
| REV_   | INTEGER        | N  | 数据版本号 |    |

## 3. ACT_RE_DEPLOYMENT部署数据表

| 字段              | 类型             | 主键 | 说明     | 备注                 |
|-----------------|----------------|----|--------|--------------------|
| ID_             | NVARCHAR2(64)  | Y  | 部署序号   |                    |
| NAME_           | NVARCHAR2(255) | N  | 部署名称   |                    |
| CATEGORY_       | NVARCHAR2(255) | N  | 类别     | 流程定义的Namespace就是类别 |
| KEY_            | NVARCHAR2(255) | N  | 流程定义ID |                    |
| TENANT_ID_      | NVARCHAR2(255) | N  |        |                    |
| DEPLOY_TIME_    | TIMESTAMP(6)   | N  | 部署时间   |                    |
| ENGINE_VERSION_ | NVARCHAR2(255) | N  | 引擎版本   |                    |

## 4. ACT_RE_PROCDEF流程定义表

| 字段                      | 类型              | 主键 | 说明              | 备注                         |
|-------------------------|-----------------|----|-----------------|----------------------------|
| ID_                     | NVARCHAR2(64)   | Y  | 主键              |                            |
| REV_                    | INTEGER         | N  | 数据版本号           |                            |
| CATEGORY_               | NVARCHAR2(255)  | N  | 流程定义分类          | 读取xml文件中程的targetNamespace值 |
| NAME_                   | NVARCHAR2(255)  | N  | 流程定义的名称         | 读取流程文件中process元素的name属性    |
| KEY_                    | NVARCHAR2(255)  | N  | 流程定义key         | 读取流程文件中process元素的id属性      |
| VERSION_                | INTEGER         | N  | 版本              |                            |
| DEPLOYMENT_ID_          | NVARCHAR2(64)   | N  | 部署ID            | 流程定义对应的部署数据ID              |
| RESOURCE_NAME_          | NVARCHAR2(2000) | N  | bpmn文件名称        | 一般为流程文件的相对路径               |
| DGRM_RESOURCE_NAME_     | VARCHAR2(4000)  | N  | 流程定义对应的流程图资源名称  |                            |
| DESCRIPTION_            | NVARCHAR2(2000) | N  | 说明              |                            |
| HAS_START_FORM_KEY_     | NUMBER(1)       | N  | 是否存在开始节点formKey | start节点是否存在formKey 0否  1是  |
| HAS_GRAPHICAL_NOTATION_ | NUMBER(1)       | N  |                 |                            |
| SUSPENSION_STATE_       | INTEGER         | N  | 流程定义状态          | 1激活、2中止                    |
| TENANT_ID_              | NVARCHAR2(255)  | N  |                 |                            |
| ENGINE_VERSION_         | NVARCHAR2(255)  | N  |                 | 引擎版本                       |

## 5. ACT_ID_USER用户表

| 字段          | 类型             | 主键 | 说明   | 备注 |
|-------------|----------------|----|------|----|
| ID_         | NVARCHAR2(64)  | Y  | 主键   |    |
| REV_        | INTEGER        | N  | 数据版本 |    |
| FIRST_      | NVARCHAR2(255) | N  | 人名   |    |
| LAST_       | NVARCHAR2(255) | N  | 姓氏   |    |
| EMAIL_      | NVARCHAR2(255) | N  | 邮件   |    |
| PWD_        | NVARCHAR2(255) | N  | 用户密码 |    |
| PICTURE_ID_ | NVARCHAR2(64)  | N  | 图片ID |    |

## 6. ACT_ID_INFO用户信息表

| 字段         | 类型             | 主键 | 说明      | 备注                                         |
|------------|----------------|----|---------|--------------------------------------------|
| ID_        | NVARCHAR2(64)  | Y  | 主键      |                                            |
| REV_       | INTEGER        | N  | 数据版本    |                                            |
| USER_ID_   | NVARCHAR2(64)  | N  | 对应用户表主键 |                                            |
| TYPE_      | NVARCHAR2(64)  | N  | 信息类型    | 当前可以设置用户帐号(account)、用户信息(userinfo)和NULL三种值 |
| KEY_       | NVARCHAR2(255) | N  | 数据的键    | 可以根据该键查找用户信息的值                             |
| VALUE_     | NVARCHAR2(255) | N  | 数据的值    |                                            |
| PASSWORD_  | BLOB           | N  | 用户密码    |                                            |
| PARENT_ID_ | NVARCHAR2(255) | N  | 父信息ID   |                                            |

## 7. ACT_ID_GROUP用户组表

| 字段    | 类型             | 主键 | 说明    | 备注 |
|-------|----------------|----|-------|----|
| ID_   | NVARCHAR2(64)  | Y  | 主键    |    |
| REV_  | INTEGER        | N  | 数据版本  |    |
| NAME_ | NVARCHAR2(255) | N  | 用户组名称 |    |
| TYPE_ | NVARCHAR2(255) | N  | 用户组类型 |    |

## 8. ACT_ID_MEMBERSHIP关系表

| 字段        | 类型            | 主键 | 说明    | 备注 |
|-----------|---------------|----|-------|----|
| USER_ID_  | NVARCHAR2(64) | Y  | 用户ID  |    |
| GROUP_ID_ | NVARCHAR2(64) | Y  | 用户组ID |    |

## 9. ACT_RU_EXECUTION流程实例(执行流)表

| 字段                    | 类型             | 主键 | 说明        | 备注                                                                          |
|-----------------------|----------------|----|-----------|-----------------------------------------------------------------------------|
| ID_                   | NVARCHAR2(64)  | Y  | 主键        | 执行实例的唯一标识，通常采用UUID或类似的方式生成                                                  |
| REV_                  | INTEGER        | N  | 数据版本      | 数据的版本号，用于乐观锁控制并发访问。                                                         |
| PROC_INST_ID_         | NVARCHAR2(64)  | N  | 流程实例ID    | 流程实例的唯一标识，引用ACT_RU_EXECUTION表中的ID_字段。在整个流程实例的生命周期内，该字段保持不变，标识特定流程实例的所有执行实例。 |
| BUSINESS_KEY_         | NVARCHAR2(255) | N  | 业务主键ID    |                                                                             |
| PARENT_ID_            | NVARCHAR2(64)  | N  | 父执行流的ID   |                                                                             |
| PROC_DEF_ID_          | NVARCHAR2(64)  | N  | 流程定义的数据ID |                                                                             |
| SUPER_EXEC_           | NVARCHAR2(64)  | N  |           |                                                                             |
| ROOT_PROC_INST_ID_    | NVARCHAR2(64)  | N  |           |                                                                             |
| ACT_ID_               | NVARCHAR2(255) | N  | 节点实例ID    |                                                                             |
| IS_ACTIVE_            | NUMBER(1)      | N  | 是否存活      |                                                                             |
| IS_CONCURRENT_        | NUMBER(1)      | N  | 执行流是否正在并行 |                                                                             |
| IS_SCOPE_             | NUMBER(1)      | N  |           |                                                                             |
| IS_EVENT_SCOPE_       | NUMBER(1)      | N  |           |                                                                             |
| IS_MI_ROOT_           | NUMBER(1)      | N  |           |                                                                             |
| SUSPENSION_STATE_     | INTEGER        | N  | 流程终端状态    |                                                                             |
| CACHED_ENT_STATE_     | INTEGER        | N  |           |                                                                             |
| TENANT_ID_            | NVARCHAR2(255) | N  |           |                                                                             |
| NAME_                 | NVARCHAR2(255) | N  |           |                                                                             |
| START_TIME_           | TIMESTAMP(6)   | N  | 开始时间      |                                                                             |
| START_USER_ID_        | NVARCHAR2(255) | N  |           |                                                                             |
| LOCK_TIME_            | TIMESTAMP(6)   | N  |           |                                                                             |
| IS_COUNT_ENABLED_     | NUMBER(1)      | N  |           |                                                                             |
| EVT_SUBSCR_COUNT_     | INTEGER        | N  |           |                                                                             |
| TASK_COUNT_           | INTEGER        | N  |           |                                                                             |
| JOB_COUNT_            | INTEGER        | N  |           |                                                                             |
| TIMER_JOB_COUNT_      | INTEGER        | N  |           |                                                                             |
| SUSP_JOB_COUNT_       | INTEGER        | N  |           |                                                                             |
| DEADLETTER_JOB_COUNT_ | INTEGER        | N  |           |                                                                             |
| VAR_COUNT_            | INTEGER        | N  |           |                                                                             |
| ID_LINK_COUNT_        | INTEGER        | N  |           |                                                                             |

## 10. ACT_RU_TASK流程任务表

| 字段                | 类型              | 主键 | 说明         | 备注          |
|-------------------|-----------------|----|------------|-------------|
| ID_               | NVARCHAR2(64)   | Y  | 主键         |             |
| REV_              | INTEGER         | N  | 数据版本       |             |
| EXECUTION_ID_     | NVARCHAR2(64)   | N  | 任务所在的执行流ID |             |
| PROC_INST_ID_     | NVARCHAR2(64)   | N  | 流程实例ID     |             |
| PROC_DEF_ID_      | NVARCHAR2(64)   | N  | 流程定义数据ID   |             |
| NAME_             | NVARCHAR2(255)  | N  | 任务名称       |             |
| PARENT_TASK_ID_   | NVARCHAR2(64)   | N  | 父任务ID      |             |
| DESCRIPTION_      | NVARCHAR2(2000) | N  | 说明         |             |
| TASK_DEF_KEY_     | NVARCHAR2(255)  | N  | 任务定义的ID值   |             |
| OWNER_            | NVARCHAR2(255)  | N  | 任务拥有人      |             |
| ASSIGNEE_         | NVARCHAR2(255)  | N  | 被指派执行该任务的人 |             |
| DELEGATION_       | NVARCHAR2(64)   | N  |            |             |
| PRIORITY_         | INTEGER         | N  |            |             |
| CREATE_TIME_      | TIMESTAMP(6)    | N  | 创建时间       |             |
| DUE_DATE_         | TIMESTAMP(6)    | N  | 耗时         |             |
| CATEGORY_         | NVARCHAR2(255)  | N  |            |             |
| SUSPENSION_STATE_ | INTEGER         | N  | 是否挂起       | 1代表激活 2代表挂起 |
| TENANT_ID_        | NVARCHAR2(255)  | N  |            |             |
| FORM_KEY_         | NVARCHAR2(255)  | N  |            |             |
| CLAIM_TIME_       | TIMESTAMP(6)    | N  |            |             |

## 11. ACT_RU_VARIABLE流程参数表

| 字段            | 类型              | 主键 | 说明                 | 备注                 |
|---------------|-----------------|----|--------------------|--------------------|
| ID_           | NVARCHAR2(64)   | Y  | 主键                 |                    |
| REV_          | INTEGER         | N  | 数据版本               |                    |
| TYPE_         | NVARCHAR2(255)  | N  | 参数类型               | 可以是基本的类型，也可以用户自行扩展 |
| NAME_         | NVARCHAR2(255)  | N  | 参数名称               |                    |
| EXECUTION_ID_ | NVARCHAR2(64)   | N  | 参数执行ID             |                    |
| PROC_INST_ID_ | NVARCHAR2(64)   | N  | 流程实例ID             |                    |
| TASK_ID_      | NVARCHAR2(64)   | N  | 任务ID               |                    |
| BYTEARRAY_ID_ | NVARCHAR2(64)   | N  | 资源ID               |                    |
| DOUBLE_       | NUMBER(*,10)    | N  | 参数为double，则保存在该字段中 |                    |
| LONG_         | NUMBER(19)      | N  | 参数为long，则保存在该字段中   |                    |
| TEXT_         | NVARCHAR2(2000) | N  | 用户保存文本类型的参数值       |                    |
| TEXT2_        | NVARCHAR2(2000) | N  | 用户保存文本类型的参数值       |                    |

## 12. ACT_RU_IDENTITYLINK流程身份关系表

| 字段            | 类型             | 主键 | 说明     | 备注                                      |
|---------------|----------------|----|--------|-----------------------------------------|
| ID_           | NVARCHAR2(64)  | Y  | 主键     |                                         |
| REV_          | INTEGER        | N  | 数据版本   |                                         |
| GROUP_ID_     | NVARCHAR2(255) | N  | 用户组ID  |                                         |
| TYPE_         | NVARCHAR2(255) | N  | 关系数据类型 | assignee支配人(组)、candidate候选人(组)、owner拥有人 |
| USER_ID_      | NVARCHAR2(255) | N  | 用户ID   |                                         |
| TASK_ID_      | NVARCHAR2(64)  | N  | 任务ID   |                                         |
| PROC_INST_ID_ | NVARCHAR2(64)  | N  | 流程定义ID |                                         |
| PROC_DEF_ID_  | NVARCHAR2(64)  | N  | 属性ID   |                                         |

## 13. ACT_RU_JOB工作数据表(一般工作表)

| 字段                   | 类型              | 主键 | 说明     | 备注 |
|----------------------|-----------------|----|--------|----|
| ID_                  | NVARCHAR2(64)   | Y  | 主键     |    |
| REV_                 | INTEGER         | N  | 数据版本   |    |
| TYPE_                | NVARCHAR2(255)  | N  | 类型     |    |
| LOCK_EXP_TIME_       | TIMESTAMP(6)    | N  | 锁定释放时间 |    |
| LOCK_OWNER_          | NVARCHAR2(255)  | N  | 挂起者    |    |
| EXCLUSIVE_           | NUMBER(1)       | N  |        |    |
| EXECUTION_ID_        | NVARCHAR2(64)   | N  | 执行实例ID |    |
| PROCESS_INSTANCE_ID_ | NVARCHAR2(64)   | N  | 流程实例ID |    |
| PROC_DEF_ID_         | NVARCHAR2(64)   | N  | 流程定义ID |    |
| RETRIES_             | INTEGER         | N  |        |    |
| EXCEPTION_STACK_ID_  | NVARCHAR2(64)   | N  | 异常信息ID |    |
| EXCEPTION_MSG_       | NVARCHAR2(2000) | N  | 异常信息   |    |
| DUEDATE_             | TIMESTAMP(6)    | N  | 到期时间   |    |
| REPEAT_              | NVARCHAR2(255)  | N  | 重复     |    |
| HANDLER_TYPE_        | NVARCHAR2(255)  | N  | 处理类型   |    |
| HANDLER_CFG_         | NVARCHAR2(2000) | N  |        |    |
| TENANT_ID_           | NVARCHAR2(255)  | N  |        |    |

## 14. ACT_RU_DEADLETTER_JOB工作数据表(无法执行工作表)

| 字段                   | 类型              | 主键 | 说明     | 备注 |
|----------------------|-----------------|----|--------|----|
| ID_                  | NVARCHAR2(64)   | Y  | 主键     |    |
| REV_                 | INTEGER         | N  | 数据版本   |    |
| TYPE_                | NVARCHAR2(255)  | N  | 类型     |    |
| EXCLUSIVE_           | NUMBER(1)       | N  |        |    |
| EXECUTION_ID_        | NVARCHAR2(64)   | N  | 执行实例ID |    |
| PROCESS_INSTANCE_ID_ | NVARCHAR2(64)   | N  | 流程实例ID |    |
| PROC_DEF_ID_         | NVARCHAR2(64)   | N  | 流程定义ID |    |
| RETRIES_             | INTEGER         | N  |        |    |
| EXCEPTION_STACK_ID_  | NVARCHAR2(64)   | N  | 异常信息ID |    |
| EXCEPTION_MSG_       | NVARCHAR2(2000) | N  | 异常信息   |    |
| DUEDATE_             | TIMESTAMP(6)    | N  | 到期时间   |    |
| REPEAT_              | NVARCHAR2(255)  | N  | 重复     |    |
| HANDLER_TYPE_        | NVARCHAR2(255)  | N  | 处理类型   |    |
| HANDLER_CFG_         | NVARCHAR2(2000) | N  |        |    |
| TENANT_ID_           | NVARCHAR2(255)  | N  |        |    |

## 15. ACT_RU_SUSPENDED_JOB工作数据表(暂停工作表)

| 字段                   | 类型              | 主键 | 说明     | 备注 |
|----------------------|-----------------|----|--------|----|
| ID_                  | NVARCHAR2(64)   | Y  | 主键     |    |
| REV_                 | INTEGER         | N  | 数据版本   |    |
| TYPE_                | NVARCHAR2(255)  | N  | 类型     |    |
| EXCLUSIVE_           | NUMBER(1)       | N  |        |    |
| EXECUTION_ID_        | NVARCHAR2(64)   | N  | 执行实例ID |    |
| PROCESS_INSTANCE_ID_ | NVARCHAR2(64)   | N  | 流程实例ID |    |
| PROC_DEF_ID_         | NVARCHAR2(64)   | N  | 流程定义ID |    |
| RETRIES_             | INTEGER         | N  |        |    |
| EXCEPTION_STACK_ID_  | NVARCHAR2(64)   | N  | 异常信息ID |    |
| EXCEPTION_MSG_       | NVARCHAR2(2000) | N  | 异常信息   |    |
| DUEDATE_             | TIMESTAMP(6)    | N  | 到期时间   |    |
| REPEAT_              | NVARCHAR2(255)  | N  | 重复     |    |
| HANDLER_TYPE_        | NVARCHAR2(255)  | N  | 处理类型   |    |
| HANDLER_CFG_         | NVARCHAR2(2000) | N  |        |    |
| TENANT_ID_           | NVARCHAR2(255)  | N  |        |    |

## 16. ACT_RU_TIMER_JOB工作数据表(定时工作表)

| 字段                   | 类型              | 主键 | 说明     | 备注 |
|----------------------|-----------------|----|--------|----|
| ID_                  | NVARCHAR2(64)   | Y  | 主键     |    |
| REV_                 | INTEGER         | N  | 数据版本   |    |
| TYPE_                | NVARCHAR2(255)  | N  | 类型     |    |
| EXCLUSIVE_           | NUMBER(1)       | N  |        |    |
| EXECUTION_ID_        | NVARCHAR2(64)   | N  | 执行实例ID |    |
| PROCESS_INSTANCE_ID_ | NVARCHAR2(64)   | N  | 流程实例ID |    |
| PROC_DEF_ID_         | NVARCHAR2(64)   | N  | 流程定义ID |    |
| RETRIES_             | INTEGER         | N  |        |    |
| EXCEPTION_STACK_ID_  | NVARCHAR2(64)   | N  | 异常信息ID |    |
| EXCEPTION_MSG_       | NVARCHAR2(2000) | N  | 异常信息   |    |
| DUEDATE_             | TIMESTAMP(6)    | N  | 到期时间   |    |
| REPEAT_              | NVARCHAR2(255)  | N  | 重复     |    |
| HANDLER_TYPE_        | NVARCHAR2(255)  | N  | 处理类型   |    |
| HANDLER_CFG_         | NVARCHAR2(2000) | N  |        |    |
| TENANT_ID_           | NVARCHAR2(255)  | N  |        |    |

## 17. ACT_RU_EVENT_SUBSCR时间描述表

| 字段             | 类型             | 主键 | 说明      | 备注 |
|----------------|----------------|----|---------|----|
| ID_            | NVARCHAR2(64)  | Y  | 主键      |    |
| REV_           | INTEGER        | N  | 数据版本    |    |
| EVENT_TYPE_    | NVARCHAR2(255) | N  | 事件类型    |    |
| EVENT_NAME_    | NVARCHAR2(255) | N  | 事件名称    |    |
| EXECUTION_ID_  | NVARCHAR2(64)  | N  | 指定ID    |    |
| PROC_INST_ID_  | NVARCHAR2(64)  | N  | 流程定义ID  |    |
| ACTIVITY_ID_   | NVARCHAR2(64)  | N  | 具体事件ID  |    |
| CONFIGURATION_ | NVARCHAR2(255) | N  | 事件的配置属性 |    |
| CREATED_       | TIMESTAMP(6)   | N  | 创建时间    |    |
| PROC_DEF_ID_   | NVARCHAR2(64)  | N  | 属性ID    |    |
| TENANT_ID_     | NVARCHAR2(255) | N  |         |    |

## 18. ACT_HI_PROCINST流程实例表

| 字段                         | 类型              | 主键 | 说明      | 备注 |
|----------------------------|-----------------|----|---------|----|
| ID_                        | NVARCHAR2(64)   | Y  | 主键      |    |
| PROC_INST_ID_              | NVARCHAR2(64)   | N  | 流程实例ID  |    |
| BUSINESS_KEY_              | NVARCHAR2(255)  | N  | 业务主键    |    |
| PROC_DEF_ID_               | NVARCHAR2(64)   | N  | 属性ID    |    |
| START_TIME_                | TIMESTAMP(6)    | N  | 开始时间    |    |
| END_TIME_                  | TIMESTAMP(6)    | N  | 结束时间    |    |
| DURATION_                  | NUMBER(19)      | N  | 耗时      |    |
| START_USER_ID_             | NVARCHAR2(255)  | N  | 起始人     |    |
| START_ACT_ID_              | NVARCHAR2(255)  | N  | 起始节点    |    |
| END_ACT_ID_                | NVARCHAR2(255)  | N  | 结束节点    |    |
| SUPER_PROCESS_INSTANCE_ID_ | NVARCHAR2(64)   | N  | 父流程实例ID |    |
| DELETE_REASON_             | NVARCHAR2(2000) | N  | 删除原因    |    |
| TENANT_ID_                 | NVARCHAR2(255)  | N  |         |    |
| NAME_                      | NVARCHAR2(255)  | N  | 名称      |    |

## 19. ACT_HI_DETAIL流程明细表

| 字段            | 类型              | 主键 | 说明                           | 备注 |
|---------------|-----------------|----|------------------------------|----|
| ID_           | NVARCHAR2(64)   | Y  | 主键                           |    |
| REV_          | INTEGER         | N  | 数据版本                         |    |
| TYPE_         | NVARCHAR2(255)  | N  | 类型                           |    |
| PROC_INST_ID_ | NVARCHAR2(64)   | N  | 流程实例ID                       |    |
| EXECUTION_ID_ | NVARCHAR2(64)   | N  | 执行ID                         |    |
| TASK_ID_      | NVARCHAR2(64)   | N  | 任务ID                         |    |
| ACT_INST_ID_  | NVARCHAR2(64)   | N  | 节点实例ID                       |    |
| NAME_         | NVARCHAR2(255)  | N  | 名称                           |    |
| VAR_TYPE_     | NVARCHAR2(64)   | N  | 参数类型                         |    |
| TIME_         | TIMESTAMP(6)    | N  | 时间戳                          |    |
| BYTEARRAY_ID_ | NVARCHAR2(64)   | N  | 字节表ID                        |    |
| DOUBLE_       | NUMBER(*,10)    | N  | 存储变量类型为Double                |    |
| LONG_         | NUMBER(19)      | N  | 存储变量类型为long                  |    |
| TEXT_         | NVARCHAR2(2000) | N  | 存储变量值类型为String               |    |
| TEXT2_        | NVARCHAR2(2000) | N  | 此处存储的是JPA持久化对象时，才会有值。此值为对象ID |    |

## 20. ACT_HI_TASKINST历史任务表

| 字段              | 类型              | 主键 | 说明           | 备注                  |
|-----------------|-----------------|----|--------------|---------------------|
| ID_             | NVARCHAR2(64)   | Y  | 主键           |                     |
| PROC_DEF_ID_    | NVARCHAR2(64)   | N  | 流程定义ID       |                     |
| TASK_DEF_KEY_   | NVARCHAR2(255)  | N  | 任务定义的ID值     |                     |
| PROC_INST_ID_   | NVARCHAR2(64)   | N  | 流程实例ID       |                     |
| EXECUTION_ID_   | NVARCHAR2(64)   | N  | 执行ID         |                     |
| PARENT_TASK_ID_ | NVARCHAR2(64)   | N  | 父任务ID        |                     |
| NAME_           | NVARCHAR2(255)  | N  | 名称           |                     |
| DESCRIPTION_    | NVARCHAR2(2000) | N  | 说明           |                     |
| OWNER_          | NVARCHAR2(255)  | N  | 实际签收人 任务的拥有者 | 签收人（默认为空，只有在委托时才有值） |
| ASSIGNEE_       | NVARCHAR2(255)  | N  | 被指派执行该任务的人   |                     |
| START_TIME_     | TIMESTAMP(6)    | N  | 开始时间         |                     |
| CLAIM_TIME_     | TIMESTAMP(6)    | N  | 提醒时间         |                     |
| END_TIME_       | TIMESTAMP(6)    | N  | 结束时间         |                     |
| DURATION_       | NUMBER(19)      | N  | 耗时           |                     |
| DELETE_REASON_  | NVARCHAR2(2000) | N  | 删除原因         |                     |
| PRIORITY_       | INTEGER         | N  | 优先级别         |                     |
| DUE_DATE_       | TIMESTAMP(6)    | N  | 过期时间         |                     |
| FORM_KEY_       | NVARCHAR2(255)  | N  | 节点定义的formkey |                     |
| CATEGORY_       | NVARCHAR2(255)  | N  | 类别           |                     |
| TENANT_ID_      | NVARCHAR2(255)  | N  |              |                     |

## 21. ACT_HI_ACTINST历史行为表

| 字段                 | 类型              | 主键 | 说明          | 备注 |
|--------------------|-----------------|----|-------------|----|
| ID_                | NVARCHAR2(64)   | Y  | 主键          |    |
| PROC_DEF_ID_       | NVARCHAR2(64)   | N  | 流程定义ID      |    |
| PROC_INST_ID_      | NVARCHAR2(64)   | N  | 流程实例ID      |    |
| EXECUTION_ID_      | NVARCHAR2(64)   | N  | 执行ID        |    |
| ACT_ID_            | NVARCHAR2(255)  | N  | 节点实例ID      |    |
| TASK_ID_           | NVARCHAR2(64)   | N  | 任务ID        |    |
| CALL_PROC_INST_ID_ | NVARCHAR2(64)   | N  | 调用外部的流程实例ID |    |
| ACT_NAME_          | NVARCHAR2(255)  | N  | 节点名称        |    |
| ACT_TYPE_          | NVARCHAR2(255)  | N  | 节点类型        |    |
| ASSIGNEE_          | NVARCHAR2(255)  | N  | 节点签收人       |    |
| START_TIME_        | TIMESTAMP(6)    | N  | 开始时间        |    |
| END_TIME_          | TIMESTAMP(6)    | N  | 结束时间        |    |
| DURATION_          | NUMBER(19)      | N  | 耗时          |    |
| DELETE_REASON_     | NVARCHAR2(2000) | N  | 删除原因        |    |
| TENANT_ID_         | NVARCHAR2(255)  | N  |             |    |

## 22. ACT_HI_ATTACHMENT附件表

| 字段            | 类型              | 主键 | 说明     | 备注 |
|---------------|-----------------|----|--------|----|
| ID_           | NVARCHAR2(64)   | Y  | 主键     |    |
| REV_          | INTEGER         | N  | 数据版本   |    |
| USER_ID_      | NVARCHAR2(255)  | N  | 用户ID   |    |
| NAME_         | NVARCHAR2(255)  | N  | 名称     |    |
| DESCRIPTION_  | NVARCHAR2(2000) | N  | 说明     |    |
| TYPE_         | NVARCHAR2(255)  | N  | 类型     |    |
| TASK_ID_      | NVARCHAR2(64)   | N  | 任务ID   |    |
| PROC_INST_ID_ | NVARCHAR2(64)   | N  | 流程实例ID |    |
| URL_          | NVARCHAR2(2000) | N  |        |    |
| CONTENT_ID_   | NVARCHAR2(64)   | N  | 字节表的ID |    |
| TIME_         | TIMESTAMP(6)    | N  | 时间     |    |

## 23. ACT_HI_COMMENT评论表

| 字段            | 类型              | 主键 | 说明     | 备注                       |
|---------------|-----------------|----|--------|--------------------------|
| ID_           | NVARCHAR2(64)   | Y  | 主键     |                          |
| TYPE_         | NVARCHAR2(255)  | N  | 类型     | 类型：event（事件）、comment（意见） |
| TIME_         | TIMESTAMP(6)    | N  | 时间     |                          |
| USER_ID_      | NVARCHAR2(255)  | N  | 用户ID   |                          |
| TASK_ID_      | NVARCHAR2(64)   | N  | 任务ID   |                          |
| PROC_INST_ID_ | NVARCHAR2(64)   | N  | 流程实例ID |                          |
| ACTION_       | NVARCHAR2(255)  | N  | 行为类型   |                          |
| MESSAGE_      | NVARCHAR2(2000) | N  | 信息     | 用于存放流程产生的信息，比如审批意见       |
| FULL_MSG_     | BLOB            | N  | 全部内容   |                          |

## 24. ACT_RE_MODEL流程设计模型部署表

| 字段                            | 类型              | 主键 | 说明               | 备注 |
|-------------------------------|-----------------|----|------------------|----|
| ID_                           | NVARCHAR2(64)   | Y  | 主键               |    |
| REV_                          | INTEGER         | N  | 数据版本             |    |
| NAME_                         | NVARCHAR2(255)  | N  |                  |    |
| KEY_                          | NVARCHAR2(255)  | N  |                  |    |
| CATEGORY_                     | NVARCHAR2(255)  | N  | 分类               |    |
| CREATE_TIME_                  | TIMESTAMP(6)    | N  | 创建时间             |    |
| LAST_UPDATE_TIME_             | TIMESTAMP(6)    | N  | 最后更新时间           |    |
| VERSION_                      | INTEGER         | N  | 版本               |    |
| META_INFO_                    | NVARCHAR2(2000) | N  | 以json格式保存流程定义的信息 |    |
| DEPLOYMENT_ID_                | NVARCHAR2(64)   | N  | 部署ID             |    |
| EDITOR_SOURCE_VALUE_ID_       | NVARCHAR2(64)   | N  |                  |    |
| EDITOR_SOURCE_EXTRA_VALUE_ID_ | NVARCHAR2(64)   | N  |                  |    |
| TENANT_ID_                    | NVARCHAR2(255)  | N  |                  |    |

## 25. ACT_EVT_LOG事件日志表

| 字段            | 类型             | 主键 | 说明     | 备注 |
|---------------|----------------|----|--------|----|
| LOG_NR_       | NUMBER(19)     | Y  | 主键     |    |
| TYPE_         | NVARCHAR2(64)  | N  | 类型     |    |
| PROC_DEF_ID_  | NVARCHAR2(64)  | N  | 流程定义ID |    |
| PROC_INST_ID_ | NVARCHAR2(64)  | N  | 流程实例ID |    |
| EXECUTION_ID_ | NVARCHAR2(64)  | N  | 执行ID   |    |
| TASK_ID_      | NVARCHAR2(64)  | N  | 任务ID   |    |
| TIME_STAMP_   | TIMESTAMP(6)   | N  |        |    |
| USER_ID_      | NVARCHAR2(255) | N  |        |    |
| DATA_         | BLOB           | N  |        |    |
| LOCK_OWNER_   | NVARCHAR2(255) | N  |        |    |
| LOCK_TIME_    | TIMESTAMP(6)   | N  |        |    |
| IS_PROCESSED_ | NUMBER(3)      | N  |        |    |

## 26. ACT_PROCDEF_INFO

| 字段            | 类型            | 主键 | 说明     | 备注 |
|---------------|---------------|----|--------|----|
| ID_           | NVARCHAR2(64) | Y  | 主键     |    |
| PROC_DEF_ID_  | NVARCHAR2(64) | N  | 流程定义ID |    |
| REV_          | INTEGER       | N  | 数据版本   |    |
| INFO_JSON_ID_ | NVARCHAR2(64) | N  |        |    |

## 27. ACT_HI_VARINST历史变量表历史变量表

| 字段                 | 类型                 | 主键 | 说明           | 备注 |
|--------------------|--------------------|----|--------------|----|
| ID_                | NVARCHAR2(64)      | Y  | 主键           |    |
| PROC_INST_ID_      | NVARCHAR2(64)      | N  | 流程实例ID       |    |
| EXECUTION_ID_      | NVARCHAR2(64)      | N  | 指定ID         |    |
| TASK_ID_           | NVARCHAR2(64)      | N  | 任务ID         |    |
| NAME_              | NVARCHAR2(255)     | N  | 名称           |    |
| VAR_TYPE_          | NVARCHAR2(100)     | N  | 参数类型         |    |
| REV_               | INTEGER            | N  | 数据版本         |    |
| BYTEARRAY_ID_      | NVARCHAR2(64)      | N  | 字节表ID        |    |
| DOUBLE_            | NUMBER(*,10)       | N  | 存储double类型数据 |    |
| LONG_              | NUMBER(*,10)       | N  | 存储long类型数据   |    |
| TEXT_              | NVARCHAR2(2000)    | N  |              |    |
| TEXT2_             | NVARCHAR2(2000)    | N  |              |    |
| CREATE_TIME_       | TIMESTAMP(6)(2000) | N  |              |    |
| LAST_UPDATED_TIME_ | TIMESTAMP(6)(2000) | N  |              |    |

## 28. ACT_HI_IDENTITYLINK历史流程人员表

| 字段            | 类型             | 主键 | 说明     | 备注 |
|---------------|----------------|----|--------|----|
| ID_           | NVARCHAR2(64)  | Y  | 主键     |    |
| GROUP_ID_     | NVARCHAR2(255) | N  | 组ID    |    |
| TYPE_         | NVARCHAR2(255) | N  | 类型     |    |
| USER_ID_      | NVARCHAR2(255) | N  | 用户ID   |    |
| TASK_ID_      | NVARCHAR2(64)  | N  | 任务ID   |    |
| PROC_INST_ID_ | NVARCHAR2(64)  | N  | 流程实例ID |    |
