# 表单

本项目的表单采用动态表单设计。

## 创建表单组件

```bash
ng generate component your-form
```

## 表单组件设计

### 引入表单服务

```typescript
import { FormItemControlService } from '@adming/services/form/form-item-control.service';

@Component({
  providers: [ FormItemControlService ]
})
```

### 引入表单项相对应的类型

#### 输入框

```typescript
import { TextInputFormItem, NumberInputFormItem, PasswordInputFormItem, MailInputFormItem } from '@adming/components/form-item/form-item-input';
```

- `TextInputFormItem`: 文本
- `NumberInputFormItem`: 数字
- `PasswordInputFormItem`: 密码
- `MailInputFormItem`: 邮箱

#### 下拉菜单

```typescript
import { SelectFormItem } from '@adming/components/form-item/form-item-select';
```

- `SelectFormItem`: 下拉菜单

### 为表单创建 FormGroup

以 `yourForm` 作为表单示例：

```typescript
export class FormComponent implements OnInit {
  yourForm: FormGroup;
}
```

### 创建表单项

示例：

```typescript
nameInput = new TextInputFormItem({
  type: 'text',
  key: 'name',
  label: 'NAME',
  placeholder: 'Input your name.',
  validators: [
    Validators.required
  ]
});
ageInput = new NumberInputFormItem({
  type: 'name',
  key: 'age',
  label: 'AGE',
  placeholder: 'Input your age.',
  defaultValue: 1,
  limit: [0, 200],
  validators: [
    Validators.required,
    Validators.min(0),
    Validators.max(200)
  ]
});
sexSelect = new SelectFormItem({
  type: 'text',
  key: 'sex',
  label: 'SEX',
  defaultValue: 'male',
  options: [
    { key: 'female', value: 'FEMALE', selected: true },
    { key: 'male', value: 'MALE', selected: false }
  ]
});
emailInput = new MailInputFormItem({
  type: 'email',
  key: 'email',
  label: 'E-MAIL',
  placeholder: 'Input your e-mail address.',
  validators: [
    Validators.required
  ]
});
```

- `type`: 数据类型。选填。
- `key`: formControl 的标识。
- `label`: 表单项的标签。
- `defaultValue`: 表单项的默认数据。选填。
- `limit`: 数字表单项的上下限。值为数组：`[min, max]`，请与表单项验证器配合使用。
- `placeholder`: 表单项的占位提示文字。选填。
- `validators`: 验证条件。影响到表单数据是否有效。

### 表单项验证器

在 validators 数组中配置可各种验证条件。

- `Validators.required`: 内容是否必须。
- `Validators.min()`: 最小值。
- `Validators.max()`: 最大值。
- `Validators.minLength()`: 最小长度。
- `Validators.maxLength()`: 最大长度。
- `forbiddenNamesValidator(['name1', 'name2'])`: 禁用名字验证器。参数为禁用名字数字。如输入 `name1` 或 `name2` 表单就会报错。

### 将表单项加入 FormGroup

```typescript
constructor(private formItemControlService: FormItemControlService) {
  this.userRegistrationForm = this.formItemControlService.toFormGroup([
    this.nameInput,
    this.ageInput,
    this.sexSelect,
    this.emailInput
  ]);
}
```

### 获取表单数据

可通过 `this.yourForm.value` 获取，即 `FormGroup` 的 value 值。

## 表单模板结构

```html
<div class="form-container">
  <form class="common" [formGroup]="yourForm" (ngSubmit)="onSubmit()">
    <div class="form-row">
      <app-form-item [form]="yourForm" [formItem]="nameInput"></app-form-item>
      <app-form-item [form]="yourForm" [formItem]="ageInput"></app-form-item>
    </div>
    <div class="form-row">
      <app-form-item [form]="yourForm" [formItem]="sexSelect"></app-form-item>
      <app-form-item [form]="yourForm" [formItem]="emailInput"></app-form-item>
    </div>
    <div class="button-group content-center">
        <button class="btn-function" type="submit" [disabled]="!admingForm.valid">Show</button>
    </div>
  </form>
</div>
```

- `<div class="form-container">...</div>`: 最外层由 `form-container` 包裹。
- `<form class="common">...</form>`: common 是表单的默认样式。
- `(ngSubmit)="onSubmit()`: 表单提交的方法，与 `type="submit"` 的提交按钮关联。
- `<div class="form-row">...</div>`: 每一行由 `form-row` 分割。

### 相同内容输入验证

如果要验证一个表单项的输入内容是否与另一个相同，则需要在 `<app-form-item>` 中将欲匹配的表单项填入 `matchingItem` 中。

示例：

```typescript
<div class="form-row">
  <app-form-item [form]="yourForm" [formItem]="item1"></app-form-item>
  <app-form-item [form]="yourForm" [formItem]="item2" [matchingItem]="item1"></app-form-item>
</div>
```

标记 `[matchingItem]="item2"` 之后，`item2` 每次输入内容后都会被拿去和 `item1` 做比较，如果内容不同，则表单项验证不通过。

## 例子

可参考 `FormComponent` 组件。
