# my-tasks



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute | Description | Type                   | Default     |
| ---------- | --------- | ----------- | ---------------------- | ----------- |
| `onDelete` | --        |             | `(id: number) => void` | `undefined` |
| `onToggle` | --        |             | `(id: number) => void` | `undefined` |
| `tasks`    | --        |             | `Task[]`               | `undefined` |


## Dependencies

### Used by

 - [task-tracker](../task-tracker)

### Depends on

- [my-task](../my-task)

### Graph
```mermaid
graph TD;
  my-tasks --> my-task
  task-tracker --> my-tasks
  style my-tasks fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
