For using the data table, just do include the module "table" in your module.
Make the columns objects and data object.

Exemple:

##### Data object
```javascript
$scope.data = [
    { id: 1, text: "data table text" },
    { id: 2, text: "data table text" }
];
```
##### Columns object

```javascript
$scope.columns = {
  "id": "ID",
  "text": "Text"
}
```

In Columns Object, the value key must be the equal key Data object, the value text are show in table

Now just include on html
```html
<todo-paginated-list data="data" columns='columns' ></todo-paginated-list>
```